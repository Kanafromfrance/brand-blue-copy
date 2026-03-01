import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

interface NotionRichText {
  plain_text: string;
}

interface NotionBlock {
  type: string;
  [key: string]: any;
}

function richTextToPlain(richText: NotionRichText[]): string {
  return richText?.map((t) => t.plain_text).join("") || "";
}

function blockToHtml(block: NotionBlock): string {
  const type = block.type;
  const data = block[type];
  if (!data) return "";

  switch (type) {
    case "paragraph":
      return `<p>${richTextToHtml(data.rich_text)}</p>`;
    case "heading_1":
      return `<h1>${richTextToHtml(data.rich_text)}</h1>`;
    case "heading_2":
      return `<h2>${richTextToHtml(data.rich_text)}</h2>`;
    case "heading_3":
      return `<h3>${richTextToHtml(data.rich_text)}</h3>`;
    case "bulleted_list_item":
      return `<li>${richTextToHtml(data.rich_text)}</li>`;
    case "numbered_list_item":
      return `<li>${richTextToHtml(data.rich_text)}</li>`;
    case "quote":
      return `<blockquote>${richTextToHtml(data.rich_text)}</blockquote>`;
    case "code":
      return `<pre><code>${richTextToPlain(data.rich_text)}</code></pre>`;
    case "divider":
      return `<hr/>`;
    case "image": {
      const url = data.type === "external" ? data.external?.url : data.file?.url;
      return url ? `<img src="${url}" alt="" loading="lazy" />` : "";
    }
    default:
      return "";
  }
}

function richTextToHtml(richText: NotionRichText[]): string {
  if (!richText) return "";
  return richText
    .map((t: any) => {
      let text = t.plain_text;
      if (t.annotations?.bold) text = `<strong>${text}</strong>`;
      if (t.annotations?.italic) text = `<em>${text}</em>`;
      if (t.annotations?.underline) text = `<u>${text}</u>`;
      if (t.annotations?.strikethrough) text = `<s>${text}</s>`;
      if (t.annotations?.code) text = `<code>${text}</code>`;
      if (t.href) text = `<a href="${t.href}" target="_blank" rel="noopener">${text}</a>`;
      return text;
    })
    .join("");
}

function wrapListItems(html: string): string {
  // Wrap consecutive <li> in <ul>
  return html.replace(/((?:<li>.*?<\/li>\s*)+)/g, "<ul>$1</ul>");
}

async function fetchNotionBlocks(pageId: string, notionKey: string): Promise<NotionBlock[]> {
  const blocks: NotionBlock[] = [];
  let cursor: string | undefined;

  do {
    const url = `https://api.notion.com/v1/blocks/${pageId}/children?page_size=100${cursor ? `&start_cursor=${cursor}` : ""}`;
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${notionKey}`,
        "Notion-Version": "2022-06-28",
      },
    });
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Notion blocks API error [${res.status}]: ${body}`);
    }
    const data = await res.json();
    blocks.push(...data.results);
    cursor = data.has_more ? data.next_cursor : undefined;
  } while (cursor);

  return blocks;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const NOTION_API_KEY = Deno.env.get("NOTION_API_KEY");
    if (!NOTION_API_KEY) throw new Error("NOTION_API_KEY is not configured");

    const NOTION_DATABASE_ID = Deno.env.get("NOTION_DATABASE_ID");
    if (!NOTION_DATABASE_ID) throw new Error("NOTION_DATABASE_ID is not configured");

    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) throw new Error("Supabase config missing");

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // 1. Query Notion database
    const dbRes = await fetch(`https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${NOTION_API_KEY}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ page_size: 100 }),
    });

    if (!dbRes.ok) {
      const body = await dbRes.text();
      throw new Error(`Notion DB query failed [${dbRes.status}]: ${body}`);
    }

    const dbData = await dbRes.json();
    const pages = dbData.results;

    let synced = 0;
    let skipped = 0;

    for (const page of pages) {
      const props = page.properties;

      // Extract properties
      const title = props.Title?.title ? richTextToPlain(props.Title.title) 
                  : props.Name?.title ? richTextToPlain(props.Name.title) : "";
      const slug = props.Slug?.rich_text ? richTextToPlain(props.Slug.rich_text) : "";
      const excerpt = props.Excerpt?.rich_text ? richTextToPlain(props.Excerpt.rich_text) : "";
      const tag = props.Tag?.select?.name || null;
      const published = props.Published?.checkbox || false;
      const coverImage = props.CoverImage?.url || page.cover?.external?.url || page.cover?.file?.url || null;

      if (!title || !slug) {
        skipped++;
        continue;
      }

      // 2. Fetch page content blocks
      const blocks = await fetchNotionBlocks(page.id, NOTION_API_KEY);
      const htmlParts = blocks.map(blockToHtml).filter(Boolean);
      const content = wrapListItems(htmlParts.join("\n"));

      // 3. Upsert into blog_posts
      const { error } = await supabase
        .from("blog_posts")
        .upsert(
          {
            notion_page_id: page.id,
            title,
            slug,
            excerpt,
            tag,
            published,
            cover_image_url: coverImage,
            content,
            published_at: published ? new Date().toISOString() : null,
          },
          { onConflict: "notion_page_id" }
        );

      if (error) {
        console.error(`Error upserting ${slug}:`, error);
        skipped++;
      } else {
        synced++;
      }
    }

    return new Response(
      JSON.stringify({ success: true, synced, skipped, total: pages.length }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Sync error:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: msg }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
