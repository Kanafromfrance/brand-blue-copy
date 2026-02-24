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
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <img
              src={teamPhoto}
              alt="L'équipe AzulBay"
              className="w-full aspect-[4/3] rounded-3xl object-cover border border-border/50"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
              <p className="text-3xl font-bold">5 ans</p>
              <p className="text-sm opacity-90">d'expérience</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Qui sommes <span className="italic text-primary">nous</span> ?
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            AzulBay est née de la conviction que la gestion locative peut être simple, transparente et rentable. Notre équipe d'experts en hospitalité met tout en œuvre pour valoriser votre bien et offrir une expérience inoubliable à vos voyageurs.
          </p>
          <p className="text-muted-foreground mb-8">
            Présents dans les principales villes de France, nous combinons technologie et savoir-faire humain pour une gestion sur-mesure.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
