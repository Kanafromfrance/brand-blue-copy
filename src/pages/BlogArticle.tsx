import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Tag, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

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
          document.title = `${data.title} — AzulBay Blog`;
          const meta = document.querySelector('meta[name="description"]');
          if (meta && data.excerpt) meta.setAttribute("content", data.excerpt);
        }
      });
  }, [slug]);

  if (loading) {
    return (
      <main>
        <Navbar />
        <div className="pt-28 pb-16 max-w-3xl mx-auto px-4 animate-pulse space-y-6">
          <div className="h-8 bg-muted rounded w-3/4" />
          <div className="h-64 bg-muted rounded-2xl" />
          <div className="space-y-3">
            <div className="h-4 bg-muted rounded w-full" />
            <div className="h-4 bg-muted rounded w-5/6" />
            <div className="h-4 bg-muted rounded w-4/6" />
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

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
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
              <img src={post.cover_image_url} alt={post.title} className="w-full rounded-2xl mb-8 object-cover max-h-96" />
            )}

            {post.content && (
              <div
                className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            )}
          </motion.div>
        </div>
      </article>
      <Footer />
    </main>
  );
};

export default BlogArticle;
