import { motion } from "framer-motion";
import { Clock, TrendingUp, Shield, Headphones } from "lucide-react";

const reasons = [
  { icon: Clock, title: "Gestion clé en main", desc: "Déjà sur Airbnb ou envie de vous lancer ? On s'occupe de tout, de A à Z." },
  { icon: TrendingUp, title: "+30% de CA en moyenne", desc: "Stratégie tarifaire, visibilité optimisée et annonces professionnelles pour maximiser vos revenus." },
  { icon: Shield, title: "Sérénité totale", desc: "Assurance, vérification des voyageurs et suivi en temps réel — que vous soyez débutant ou expérimenté." },
  { icon: Headphones, title: "Communication 7j/7", desc: "Une équipe réactive pour vous accompagner et gérer vos voyageurs à tout moment." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const WhySection = () => (
  <section id="services" className="py-24 bg-muted/50">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl lg:text-5xl font-bold mb-4"
        >
          Pourquoi faire appel à <span className="text-primary">AzulBay</span> ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          Que vous soyez déjà sur Airbnb ou que vous souhaitiez vous lancer, nous gérons tout pour vous.
        </motion.p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all group cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
            >
              <r.icon className="text-primary" size={24} />
            </motion.div>
            <h3 className="text-xl font-bold mb-2 font-sans">{r.title}</h3>
            <p className="text-muted-foreground text-sm">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
