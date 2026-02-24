import { motion } from "framer-motion";
import teamPhoto from "@/assets/team.jpg";

const stats = [
  { value: "🎯", label: "Expert de Cannes" },
  { value: "40+", label: "Propriétaires satisfaits" },
  { value: "4.8/5", label: "Note moyenne" },
];

const AboutSection = () => (
  <section id="à-propos" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -3 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <motion.img
              src={teamPhoto}
              alt="L'équipe AzulBay"
              className="w-full aspect-[4/3] rounded-3xl object-cover border border-border/50"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl"
            >
              <p className="text-3xl font-bold">5 ans</p>
              <p className="text-sm opacity-90">d'expérience</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Qui sommes <span className="italic text-primary">nous</span> ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-muted-foreground text-lg mb-6"
          >
            AzulBay est née de la conviction que la gestion locative peut être simple, transparente et rentable. Notre équipe d'experts en hospitalité met tout en œuvre pour valoriser votre bien et offrir une expérience inoubliable à vos voyageurs.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-muted-foreground mb-8"
          >
            Présents dans les principales villes de France, nous combinons technologie et savoir-faire humain pour une gestion sur-mesure.
          </motion.p>
          <div className="grid grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5, type: "spring" }}
                className="text-center"
              >
                <p className="text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
