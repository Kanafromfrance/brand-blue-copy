import { motion } from "framer-motion";
import { MessageSquare, KeyRound, Wrench, SparklesIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: MessageSquare,
    title: "Communication voyageurs",
    desc: "Réponses rapides et précises, résolution immédiate des problèmes rencontrés par vos voyageurs.",
    note: "Communication",
    rating: "5,0",
  },
  {
    icon: KeyRound,
    title: "Entrées et sorties",
    desc: "Accueil de vos voyageurs, remise des clés à leur arrivée et état des lieux au départ.",
    note: "Entrée",
    rating: "5,0",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    desc: "Prise en charge des pannes et incidents : fuites, problèmes techniques rapidement réglés.",
    note: "Maintenance",
    rating: "4,9",
  },
  {
    icon: SparklesIcon,
    title: "Nettoyage et gestion du linge",
    desc: "Entretien complet du logement et gestion du linge après chaque séjour pour un accueil impeccable.",
    note: "Propreté",
    rating: "4,9",
  },
];

const HowItWorks = () => (
  <section id="comment-ça-marche" className="py-24 bg-muted/30">
    <div className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl lg:text-6xl font-bold mb-4">
          On s'occupe <span className="italic text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>de tout</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        {/* Left column — value prop */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 lg:sticky lg:top-32"
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            Gagnez du temps
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Ne perdez plus de temps avec la gestion quotidienne : entrées et sorties, ménage, linge, consommables, et relation avec les voyageurs sont entièrement pris en charge.
          </p>
          <Button asChild className="rounded-full px-8 py-6 font-bold text-base gap-2 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300">
            <a href="https://wa.link/madr38" target="_blank" rel="noopener noreferrer">
              Demander un audit gratuit <ArrowRight size={18} />
            </a>
          </Button>
        </motion.div>

        {/* Right column — service cards */}
        <div className="lg:col-span-3 space-y-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all group"
            >
              <div className="flex flex-col sm:flex-row gap-5">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="text-primary" size={26} />
                </div>
                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-2">{s.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{s.desc}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-primary font-bold">★ {s.rating}</span>
                    <span className="text-muted-foreground">(Note Airbnb) · {s.note}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
