import { motion } from "framer-motion";
import { Home, Building2, Castle, Palmtree } from "lucide-react";

const sectors = [
  { icon: Home, title: "Appartements", desc: "Studios, T2, T3… en centre-ville ou en périphérie." },
  { icon: Building2, title: "Maisons", desc: "Maisons de ville, pavillons, propriétés avec jardin." },
  { icon: Castle, title: "Biens de prestige", desc: "Villas, châteaux, propriétés d'exception." },
  { icon: Palmtree, title: "Locations vacances", desc: "Résidences secondaires, gîtes et biens saisonniers." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const SectorsSection = () => (
  <section id="secteurs" className="py-24 bg-muted/50">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Nos <span className="italic text-primary">secteurs</span></h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          Experts de Cannes et ses environs — quel que soit votre type de bien, nous avons l'expertise pour le gérer.
        </motion.p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sectors.map((s, i) => (
          <motion.div
            key={s.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.3 } }}
            className="bg-card rounded-2xl p-8 border border-border text-center hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all group cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors"
            >
              <s.icon className="text-primary" size={28} />
            </motion.div>
            <h3 className="text-lg font-bold mb-2 font-sans">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SectorsSection;
