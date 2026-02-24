import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Marie L.", text: "AzulBay a transformé ma location. Revenus doublés en 3 mois, et je ne m'occupe plus de rien !", rating: 5 },
  { name: "Thomas D.", text: "Équipe réactive et professionnelle. Mes voyageurs sont ravis et moi aussi.", rating: 5 },
  { name: "Sophie M.", text: "Le service de conciergerie parfait. Transparent, efficace et rentable.", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="py-24 bg-primary/5">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          Des voyageurs <span className="italic text-primary">satisfaits</span>
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-6 border border-border"
          >
            <div className="flex gap-0.5 mb-4">
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground mb-4">"{t.text}"</p>
            <p className="text-sm font-semibold text-muted-foreground">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
