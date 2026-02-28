import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Marie L.", text: "AzulBay a transformé ma location. Revenus doublés en 3 mois, et je ne m'occupe plus de rien !", rating: 5 },
  { name: "Thomas D.", text: "Équipe réactive et professionnelle. Mes voyageurs sont ravis et moi aussi.", rating: 5 },
  { name: "Sophie M.", text: "Le service de conciergerie parfait. Transparent, efficace et rentable.", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="py-16 sm:py-24 bg-primary/5 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10 sm:mb-12"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Des voyageurs <span className="italic text-primary">satisfaits</span>
        </h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="bg-card rounded-2xl p-5 sm:p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-200 will-change-transform"
          >
            <div className="flex gap-0.5 mb-3 sm:mb-4">
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground text-sm sm:text-base mb-3 sm:mb-4">"{t.text}"</p>
            <p className="text-xs sm:text-sm font-semibold text-muted-foreground">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
