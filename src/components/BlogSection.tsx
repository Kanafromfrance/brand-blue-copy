import { motion } from "framer-motion";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const fallbackArticles = [
  {
    title: "Comment maximiser vos revenus Airbnb à Cannes",
    excerpt: "Découvrez nos stratégies pour optimiser votre annonce et augmenter votre taux d'occupation.",
    date: "15 Fév 2026",
    tag: "Revenus",
    slug: "",
    cover_image_url: null,
  },
  {
    title: "Réglementation location courte durée à Cannes : guide complet",
    excerpt: "Tout ce que vous devez savoir sur la réglementation en vigueur pour louer votre bien.",
    date: "8 Fév 2026",
    tag: "Réglementation",
    slug: "",
    cover_image_url: null,
  },
  {
    title: "Les 5 erreurs à éviter quand on débute sur Airbnb",
    excerpt: "Évitez les pièges classiques et lancez-vous sereinement dans la location saisonnière.",
    date: "1 Fév 2026",
    tag: "Conseils",
    slug: "",
    cover_image_url: null,
  },
];

const BlogSection = () => {
  const { data: dbArticles } = useQuery({
    queryKey: ["blog-posts-home"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("title, excerpt, slug, tag, published_at, cover_image_url")
        .eq("published", true)
        .order("published_at", { ascending: false })
        .limit(3);
      if (error) throw error;
      return data;
    },
  });

  const articles = dbArticles && dbArticles.length > 0
    ? dbArticles.map((a) => ({
        title: a.title,
        excerpt: a.excerpt || "",
        date: a.published_at
          ? format(new Date(a.published_at), "d MMM yyyy", { locale: fr })
          : "",
        tag: a.tag || "Blog",
        slug: a.slug,
        cover_image_url: a.cover_image_url,
      }))
    : fallbackArticles;

  return (
    <section id="blog" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Notre <span className="italic text-primary">blog</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Conseils, actualités et guides pour les propriétaires à Cannes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((a, i) => {
            const Wrapper = a.slug ? Link : "div";
            const wrapperProps = a.slug ? { to: `/blog/${a.slug}` } : {};
            return (
              <motion.article
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-200 will-change-transform cursor-pointer"
              >
                <Wrapper {...(wrapperProps as any)} className="block">
                  {a.cover_image_url ? (
                    <div className="h-36 sm:h-48 overflow-hidden">
                      <img
                        src={a.cover_image_url}
                        alt={a.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="h-36 sm:h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <span className="text-4xl sm:text-5xl opacity-30">📝</span>
                    </div>
                  )}
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3">
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-primary bg-primary/10 rounded-full px-2 sm:px-3 py-1">
                        <Tag size={10} /> {a.tag}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground">
                        <Calendar size={10} /> {a.date}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
                      {a.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">{a.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                      Lire l'article <ArrowRight size={14} />
                    </span>
                  </div>
                </Wrapper>
              </motion.article>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Voir tous les articles <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
