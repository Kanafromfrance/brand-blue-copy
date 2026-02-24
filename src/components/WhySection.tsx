import { motion } from "framer-motion";
import { Clock, TrendingUp, Shield, Headphones } from "lucide-react";

const reasons = [
  { icon: Clock, title: "+30 logements en gestion", desc: "Plus de 30 biens gérés sur Cannes et ses environs." },
  { icon: TrendingUp, title: "+30% de CA", desc: "Un chiffre d'affaires boosté grâce à notre stratégie de tarification et de visibilité." },
  { icon: Shield, title: "Sérénité totale", desc: "Assurance, vérification des voyageurs et suivi en temps réel de votre bien." },
  { icon: Headphones, title: "Communication 7j/7", desc: "Une équipe réactive disponible pour vous et vos voyageurs à tout moment." },
];

const WhySection = () => (
  <section id="services" className="py-24 bg-muted/50">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          Pourquoi faire appel à <span className="text-primary">AzulBay</span> ?
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Nous prenons en charge la gestion complète de votre location pour que vous puissiez profiter sereinement.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <r.icon className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 font-sans">{r.title}</h3>
            <p className="text-muted-foreground text-sm">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
