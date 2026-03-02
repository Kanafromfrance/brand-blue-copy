import { motion } from "framer-motion";
import teamPhoto from "@/assets/team.jpg";

const stats = [
  { value: "🎯", label: "Expert de Cannes" },
  { value: "40+", label: "Propriétaires satisfaits" },
  { value: "4.8/5", label: "Note moyenne" },
];

const AboutSection = () => (
  <section id="à-propos" className="py-16 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <img
              src={teamPhoto}
              alt="L'équipe AzulBay"
              className="w-full aspect-[4/3] rounded-3xl object-cover border border-border/50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-primary text-primary-foreground rounded-2xl p-4 sm:p-6 shadow-xl"
            >
              <p className="text-2xl sm:text-3xl font-bold">5 ans</p>
              <p className="text-xs sm:text-sm opacity-90">d'expérience</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Qui sommes <span className="italic text-primary">nous</span> ?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-4 sm:mb-6">
            AzulBay est née d'un constat simple : trop de propriétaires laissent leur résidence secondaire ou leur bien de vacances dormir une grande partie de l'année. Notre équipe transforme ces logements en sources de revenus, sans aucun effort de votre part.
          </p>
          <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">
            Basés exclusivement à Cannes, nous connaissons chaque quartier, chaque événement, chaque opportunité pour maximiser vos revenus.
          </p>
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
