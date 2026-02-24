import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Marie L.", text: "AzulBay a transformé ma location. Revenus doublés en 3 mois, et je ne m'occupe plus de rien !", rating: 5 },
  { name: "Thomas D.", text: "Équipe réactive et professionnelle. Mes voyageurs sont ravis et moi aussi.", rating: 5 },
  { name: "Sophie M.", text: "Le service de conciergerie parfait. Transparent, efficace et rentable.", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="py-24 bg-primary/5 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
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
            initial={{ opacity: 0, y: 50, rotateY: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all cursor-pointer"
          >
            <div className="flex gap-0.5 mb-4">
              {[...Array(t.rating)].map((_, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3 + j * 0.05 }}
                >
                  <Star size={16} className="fill-primary text-primary" />
                </motion.div>
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
