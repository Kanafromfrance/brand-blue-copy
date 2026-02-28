import { motion } from "framer-motion";
import { Clock, TrendingUp, Shield, Headphones } from "lucide-react";

const reasons = [
  { icon: Clock, title: "Gestion clé en main", desc: "Déjà sur Airbnb ou envie de vous lancer ? On s'occupe de tout, de A à Z." },
  { icon: TrendingUp, title: "+30% de CA en moyenne", desc: "Stratégie tarifaire, visibilité optimisée et annonces professionnelles pour maximiser vos revenus." },
  { icon: Shield, title: "Sérénité totale", desc: "Assurance, vérification des voyageurs et suivi en temps réel — que vous soyez débutant ou expérimenté." },
  { icon: Headphones, title: "Communication 7j/7", desc: "Une équipe réactive pour vous accompagner et gérer vos voyageurs à tout moment." },
];

const WhySection = () => (
  <section id="services" className="py-16 sm:py-24 bg-muted/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Pourquoi faire appel à <span className="text-primary">AzulBay</span> ?
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          Que vous soyez déjà sur Airbnb ou que vous souhaitiez vous lancer, nous gérons tout pour vous.
        </p>
      </motion.div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-card rounded-2xl p-4 sm:p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-200 will-change-transform"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
              <r.icon className="text-primary" size={20} />
            </div>
            <h3 className="text-base sm:text-xl font-bold mb-1 sm:mb-2 font-sans">{r.title}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
