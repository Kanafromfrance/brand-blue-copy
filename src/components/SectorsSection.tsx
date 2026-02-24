import { motion } from "framer-motion";
import { Home, Building2, Castle, Palmtree } from "lucide-react";

const sectors = [
  { icon: Home, title: "Appartements", desc: "Studios, T2, T3… en centre-ville ou en périphérie." },
  { icon: Building2, title: "Maisons", desc: "Maisons de ville, pavillons, propriétés avec jardin." },
  { icon: Castle, title: "Biens de prestige", desc: "Villas, châteaux, propriétés d'exception." },
  { icon: Palmtree, title: "Locations vacances", desc: "Résidences secondaires, gîtes et biens saisonniers." },
];

const SectorsSection = () => (
  <section id="secteurs" className="py-24 bg-muted/50">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Nos <span className="italic text-primary">secteurs</span></h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Quel que soit votre type de bien, nous avons l'expertise pour le gérer.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sectors.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-8 border border-border text-center hover:border-primary/30 hover:shadow-lg transition-all group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="text-primary" size={28} />
            </div>
            <h3 className="text-lg font-bold mb-2 font-sans">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SectorsSection;
