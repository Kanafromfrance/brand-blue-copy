import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const NOTION_VERSION = "2022-06-28";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface NotionRichText {
  plain_text: string;
  href?: string | null;
  annotations?: {
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    code?: boolean;
  };
}

interface NotionBlock {
  id: string;
  type: string;
  [key: string]: any;
}

function notionHeaders(notionKey: string, withJson = false): HeadersInit {
  return {
    Authorization: `Bearer ${notionKey}`,
    "Notion-Version": NOTION_VERSION,
    ...(withJson ? { "Content-Type": "application/json" } : {}),
  };
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function richTextToPlain(richText: NotionRichText[] = []): string {
  return richText.map((text) => text.plain_text ?? "").join("");
}

function richTextToHtml(richText: NotionRichText[] = []): string {
  return richText
    .map((textChunk) => {
      let text = escapeHtml(textChunk.plain_text ?? "");

      if (textChunk.annotations?.bold) text = `<strong>${text}</strong>`;
      if (textChunk.annotations?.italic) text = `<em>${text}</em>`;
      if (textChunk.annotations?.underline) text = `<u>${text}</u>`;
      if (textChunk.annotations?.strikethrough) text = `<s>${text}</s>`;
      if (textChunk.annotations?.code) text = `<code>${text}</code>`;

      if (textChunk.href) {
        const href = escapeHtml(textChunk.href);
        text = `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
      }

      return text;
    })
    .join("");
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
      return `<pre><code>${escapeHtml(richTextToPlain(data.rich_text))}</code></pre>`;
    case "divider":
      return "<hr/>";
    case "image": {
      const imageUrl = data.type === "external" ? data.external?.url : data.file?.url;
      if (!imageUrl) return "";
      return `<img src="${escapeHtml(imageUrl)}" alt="Image article" loading="lazy" />`;
    }
    default:
      return "";
  }
}

function wrapListItems(html: string): string {
  return html.replace(/((?:<li>.*?<\/li>\s*)+)/g, "<ul>$1</ul>");
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120);
}

function findProperty(properties: Record<string, any>, names: string[]): any {
  for (const name of names) {
    if (properties[name]) return properties[name];
  }

  const keyMap = new Map(Object.keys(properties).map((key) => [key.toLowerCase(), key]));
  for (const name of names) {
    const matchedKey = keyMap.get(name.toLowerCase());
    if (matchedKey) return properties[matchedKey];
  }

  return undefined;
}

function getTextFromProperty(property: any): string {
  if (!property) return "";

  switch (property.type) {
    case "title":
      return richTextToPlain(property.title);
    case "rich_text":
      return richTextToPlain(property.rich_text);
    case "url":
      return property.url ?? "";
    case "select":
      return property.select?.name ?? "";
    case "multi_select":
      return property.multi_select?.map((item: { name?: string }) => item.name).filter(Boolean).join(", ") ?? "";
    default:
      return "";
  }
}

function getImageFromProperty(property: any): string | null {
  if (!property) return null;

  if (property.type === "url") {
    return property.url ?? null;
  }

  if (property.type === "files" && Array.isArray(property.files) && property.files.length > 0) {
    const file = property.files[0];
    return file?.external?.url ?? file?.file?.url ?? null;
  }

  return null;
}

async function fetchNotionBlocks(pageId: string, notionKey: string): Promise<NotionBlock[]> {
  const blocks: NotionBlock[] = [];
  let cursor: string | undefined;

  do {
    const url = `https://api.notion.com/v1/blocks/${pageId}/children?page_size=100${cursor ? `&start_cursor=${cursor}` : ""}`;
    const response = await fetch(url, { headers: notionHeaders(notionKey) });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Notion blocks API failed [${response.status}]: ${body}`);
    }

    const data = await response.json();
    blocks.push(...(data.results ?? []));
    cursor = data.has_more ? data.next_cursor : undefined;
  } while (cursor);

  return blocks;
}

async function listAccessibleDatabases(notionKey: string): Promise<Array<{ id: string; title: string }>> {
  const databases: Array<{ id: string; title: string }> = [];
  let cursor: string | undefined;

  do {
    const response = await fetch("https://api.notion.com/v1/search", {
      method: "POST",
      headers: notionHeaders(notionKey, true),
      body: JSON.stringify({
        filter: { property: "object", value: "database" },
        page_size: 100,
        ...(cursor ? { start_cursor: cursor } : {}),
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Notion search failed [${response.status}]: ${body}`);
    }

    const data = await response.json();
    for (const item of data.results ?? []) {
      const title = richTextToPlain(item.title ?? []) || "Sans titre";
      databases.push({ id: item.id, title });
    }

    cursor = data.has_more ? data.next_cursor : undefined;
  } while (cursor);

  return databases;
}

async function resolveDatabaseId(notionId: string, notionKey: string): Promise<string> {
  const normalizedId = notionId.trim();

  const response = await fetch(`https://api.notion.com/v1/databases/${normalizedId}`, {
    headers: notionHeaders(notionKey),
  });

  if (response.ok) return normalizedId;

  const bodyText = await response.text();
  let parsed: any;
  try {
    parsed = JSON.parse(bodyText);
  } catch {
    parsed = null;
  }

  const message = parsed?.message ?? "";

  if (response.status === 400 && message.includes("is a page, not a database")) {
    const blocks = await fetchNotionBlocks(normalizedId, notionKey);
    const childDatabase = blocks.find((block) => block.type === "child_database" && block.id);

    if (!childDatabase) {
      throw new Error("L’ID fourni pointe vers une page sans base de données enfant accessible. Ouvre la base en pleine page et copie son URL.");
    }

    return childDatabase.id;
  }

  if (response.status === 404) {
    const databases = await listAccessibleDatabases(notionKey);

    if (databases.length === 1) {
      return databases[0].id;
    }

    const blogMatches = databases.filter((db) => db.title.toLowerCase().includes("blog"));
    if (blogMatches.length === 1) {
      return blogMatches[0].id;
    }

    if (databases.length === 0) {
      throw new Error("Aucune base Notion accessible. Vérifie que ta base est bien partagée avec l’intégration.");
    }

    const suggestions = databases.slice(0, 5).map((db) => `${db.title} (${db.id})`).join(" | ");
    throw new Error(`ID Notion introuvable (${normalizedId}). Bases accessibles: ${suggestions}`);
  }

  throw new Error(`Notion retrieve database failed [${response.status}]: ${bodyText}`);
}

async function fetchDatabasePages(databaseId: string, notionKey: string): Promise<any[]> {
  const pages: any[] = [];
  let cursor: string | undefined;

  do {
    const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: "POST",
      headers: notionHeaders(notionKey, true),
      body: JSON.stringify({ page_size: 100, ...(cursor ? { start_cursor: cursor } : {}) }),
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Notion DB query failed [${response.status}]: ${body}`);
    }

    const data = await response.json();
    pages.push(...(data.results ?? []));
    cursor = data.has_more ? data.next_cursor : undefined;
  } while (cursor);

  return pages;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
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

    const databaseId = await resolveDatabaseId(NOTION_DATABASE_ID, NOTION_API_KEY);
    const pages = await fetchDatabasePages(databaseId, NOTION_API_KEY);

    let synced = 0;
    let skipped = 0;

    for (const page of pages) {
      const properties = (page.properties ?? {}) as Record<string, any>;

      const title = getTextFromProperty(findProperty(properties, ["Title", "Name", "Titre"]));
      if (!title) {
        skipped++;
        continue;
      }

      const slugProperty = getTextFromProperty(findProperty(properties, ["Slug", "URL Slug", "Permalink"]));
      const slug = slugify(slugProperty || title || page.id.slice(0, 8));

      const tagProperty = findProperty(properties, ["Tag", "Tags", "Category", "Categorie", "Catégorie"]);
      const tag = tagProperty?.type === "select"
        ? tagProperty.select?.name ?? null
        : tagProperty?.type === "multi_select"
          ? tagProperty.multi_select?.[0]?.name ?? null
          : null;

      const publishedProperty = findProperty(properties, ["Published", "Publie", "Publié", "Live", "Visible"]);
      const published = publishedProperty?.type === "checkbox" ? Boolean(publishedProperty.checkbox) : true;

      const coverProperty = findProperty(properties, ["CoverImage", "Cover Image", "Image", "Cover"]);
      const coverImageUrl =
        getImageFromProperty(coverProperty) || page.cover?.external?.url || page.cover?.file?.url || null;

      const blocks = await fetchNotionBlocks(page.id, NOTION_API_KEY);
      const htmlParts = blocks.map(blockToHtml).filter(Boolean);
      const content = wrapListItems(htmlParts.join("\n"));

      const manualExcerpt = getTextFromProperty(findProperty(properties, ["Excerpt", "Résumé", "Resume", "Description"]));
      const paragraphFallback = blocks
        .filter((block) => block.type === "paragraph")
        .map((block) => richTextToPlain(block.paragraph?.rich_text ?? []))
        .join(" ")
        .trim();
      const excerpt = (manualExcerpt || paragraphFallback).slice(0, 220) || null;

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
            cover_image_url: coverImageUrl,
            content,
            published_at: published ? page.last_edited_time ?? new Date().toISOString() : null,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "notion_page_id" },
        );

      if (error) {
        console.error(`Error upserting ${slug}:`, error);
        skipped++;
      } else {
        synced++;
      }
    }

    return new Response(
      JSON.stringify({ success: true, databaseId, synced, skipped, total: pages.length }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.error("Sync error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
