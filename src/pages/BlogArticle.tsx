import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Tag, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

const SITE_URL = "https://brand-blue-copy.lovable.app";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  cover_image_url: string | null;
  tag: string | null;
  published_at: string | null;
}

function setMetaTag(name: string, content: string, attr = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(url: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", url);
}

function setJsonLd(post: BlogPost) {
  const id = "blog-article-jsonld";
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.setAttribute("type", "application/ld+json");
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt || "",
    image: post.cover_image_url || undefined,
    datePublished: post.published_at,
    dateModified: post.published_at,
    author: { "@type": "Organization", name: "AzulBay" },
    publisher: {
      "@type": "Organization",
      name: "AzulBay",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  });
}

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .maybeSingle()
      .then(({ data }) => {
        setPost(data);
        setLoading(false);
        if (data) {
          const canonical = `${SITE_URL}/blog/${data.slug}`;
          document.title = `${data.title} | AzulBay — Conciergerie Airbnb Cannes`;

          setMetaTag("description", data.excerpt || `${data.title} — Article AzulBay`);
          setCanonical(canonical);

          // Open Graph
          setMetaTag("og:title", data.title, "property");
          setMetaTag("og:description", data.excerpt || "", "property");
          setMetaTag("og:type", "article", "property");
          setMetaTag("og:url", canonical, "property");
          if (data.cover_image_url) setMetaTag("og:image", data.cover_image_url, "property");

          // Twitter
          setMetaTag("twitter:card", "summary_large_image");
          setMetaTag("twitter:title", data.title);
          setMetaTag("twitter:description", data.excerpt || "");

          // JSON-LD
          setJsonLd(data);
        }
      });

    return () => {
      // Cleanup JSON-LD on unmount
      document.getElementById("blog-article-jsonld")?.remove();
    };
  }, [slug]);

  if (loading) {
    return (
      <main>
        <Navbar />
        <div className="pt-28 pb-16 max-w-3xl mx-auto px-4 space-y-6">
          <div className="h-8 bg-muted rounded w-3/4 animate-pulse" />
          <div className="h-64 bg-muted rounded-2xl animate-pulse" />
          <div className="space-y-3">
            <div className="h-4 bg-muted rounded w-full animate-pulse" />
            <div className="h-4 bg-muted rounded w-5/6 animate-pulse" />
            <div className="h-4 bg-muted rounded w-4/6 animate-pulse" />
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (!post) {
    return (
      <main>
        <Navbar />
        <div className="pt-28 pb-16 max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Article introuvable</h1>
          <Link to="/blog" className="text-primary hover:underline">← Retour au blog</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <article className="pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft size={14} /> Retour au blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ willChange: "opacity, transform" }}
          >
            <div className="flex items-center gap-3 mb-4">
              {post.tag && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1">
                  <Tag size={10} /> {post.tag}
                </span>
              )}
              {post.published_at && (
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar size={10} /> {new Date(post.published_at).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">{post.title}</h1>

            {post.cover_image_url && (
              <img src={post.cover_image_url} alt={post.title} className="w-full rounded-2xl mb-8 object-cover max-h-96" loading="lazy" />
            )}

            {post.content ? (
              <div
                className="prose prose-lg max-w-none
                  prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
                  prose-p:mb-4 prose-p:leading-relaxed
                  prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6 prose-li:mb-1
                  prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
                  prose-a:text-primary prose-a:underline
                  prose-img:rounded-xl
                  prose-blockquote:border-l-primary prose-blockquote:italic
                  prose-hr:my-8
                  prose-h2:text-2xl prose-h3:text-xl
                  prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
              <p className="text-muted-foreground italic">Contenu en cours de rédaction…</p>
            )}
          </motion.div>
        </div>
      </article>
      <Footer />
    </main>
  );
};

export default BlogArticle;
