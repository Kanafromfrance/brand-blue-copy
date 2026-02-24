import { motion } from "framer-motion";
import { ArrowRight, Calendar, Tag } from "lucide-react";

const articles = [
  {
    title: "Comment maximiser vos revenus Airbnb à Cannes",
    excerpt: "Découvrez nos stratégies pour optimiser votre annonce et augmenter votre taux d'occupation.",
    date: "15 Fév 2026",
    tag: "Revenus",
  },
  {
    title: "Réglementation location courte durée à Cannes : guide complet",
    excerpt: "Tout ce que vous devez savoir sur la réglementation en vigueur pour louer votre bien.",
    date: "8 Fév 2026",
    tag: "Réglementation",
  },
  {
    title: "Les 5 erreurs à éviter quand on débute sur Airbnb",
    excerpt: "Évitez les pièges classiques et lancez-vous sereinement dans la location saisonnière.",
    date: "1 Fév 2026",
    tag: "Conseils",
  },
];

const BlogSection = () => (
  <section id="blog" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          Notre <span className="italic text-primary">blog</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Conseils, actualités et guides pour les propriétaires à Cannes.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((a, i) => (
          <motion.article
            key={a.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            {/* Colored header bar */}
            <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
              <span className="text-5xl opacity-30">📝</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1">
                  <Tag size={12} /> {a.tag}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar size={12} /> {a.date}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
                {a.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{a.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                Lire l'article <ArrowRight size={14} />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
