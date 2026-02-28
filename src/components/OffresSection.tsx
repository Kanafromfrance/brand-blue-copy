import { motion } from "framer-motion";
import { Check, X, ArrowRight, Package, TrendingUp, Shield, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const included = [
  {
    category: "La Simplification Totale",
    icon: Package,
    items: [
      "Gestion Opérationnelle A à Z : Prise en charge intégrale des arrivées, départs, ménage hôtelier de précision et gestion du linge.",
      "Valorisation Premium : Audit home staging, shooting photo professionnel et vidéo de présentation pour maximiser le prix psychologique.",
      "Standard Excellence : Blanchisserie de qualité supérieure et conciergerie dédiée pour garantir des avis 5 étoiles.",
      "Maintenance Proactive : Gestion des petits dépannages et audits techniques réguliers pour maintenir votre patrimoine \"comme neuf\".",
    ],
  },
  {
    category: "Performance Maximale",
    icon: TrendingUp,
    items: [
      "Pilotage Stratégique : Ajustement quotidien et manuel des tarifs pour capter la haute rentabilité des congrès (MIPIM, Lions, Festival).",
      "Upsells Partagés : Services additionnels dont vous percevez 10 % des revenus générés sans aucune gestion.",
      "Référencement Expert : Optimisation continue de l'annonce pour dominer les algorithmes des plateformes.",
    ],
  },
  {
    category: "Sérénité Totale",
    icon: Shield,
    items: [
      "Protection du Bien : Filtrage strict des profils voyageurs (priorité B2B et familles) et gestion intégrale des cautions et litiges.",
      "Suivi en Direct : Accès transparent à votre calendrier de réservation et rapports de performance mensuels détaillés.",
    ],
  },
];

const notIncluded = [
  "Gros Travaux : Rénovations majeures nécessitant un maître d'œuvre ou interventions structurelles.",
  "Achats Déco : Le coût du mobilier ou des éléments de décoration suggérés lors de l'audit reste à la charge du propriétaire.",
  "Frais Fixes Propriétaire : Assurances PNO et taxes de séjour.",
];

const tarifs = [
  "Commission Unique : 20 % sur le revenu locatif net (nuitées).",
  "Frais de Ménage : Intégralement à la charge des voyageurs.",
  "Frais de mise en place : Offerts (incluant shooting, vidéo et audit).",
];

const OffresSection = () => (
  <section id="offres" className="py-16 sm:py-24 bg-background">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
          L'offre{" "}
          <span className="italic text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
            intégrale
          </span>
        </h2>
        <p className="text-lg sm:text-xl font-semibold text-foreground mb-2">
          Gestion & Prestige
        </p>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          Délégation totale. Standard hôtelier. Rendement optimisé.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.4 }}
        className="relative rounded-3xl border border-primary/30 bg-primary/[0.02] shadow-xl shadow-primary/10 p-6 sm:p-8 lg:p-10 will-change-transform"
      >
        {/* Commission badge */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-5 py-1.5 rounded-full">
          20 % de commission unique
        </div>

        {/* Included sections */}
        <div className="space-y-8 mt-4">
          {included.map((section, i) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-primary/15 flex items-center justify-center">
                  <section.icon className="text-primary" size={16} />
                </div>
                <p className="text-sm font-bold uppercase tracking-wider text-foreground">
                  {section.category}
                </p>
              </div>
              <ul className="space-y-2.5 ml-10">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="text-primary shrink-0 mt-0.5" size={14} />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Not included */}
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Ce qui n'est pas inclus
          </p>
          <ul className="space-y-2 ml-0">
            {notIncluded.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <X className="shrink-0 mt-0.5 opacity-40" size={14} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tarifs */}
        <div className="bg-muted/50 rounded-2xl p-5 sm:p-6 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <DollarSign className="text-primary" size={18} />
            <p className="text-sm font-bold uppercase tracking-wider text-foreground">Les Tarifs</p>
          </div>
          <ul className="space-y-2 ml-6">
            {tarifs.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <Check className="text-primary shrink-0 mt-0.5" size={14} />
                <span className="text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <Button
          asChild
          className="w-full rounded-full py-5 sm:py-6 font-bold text-sm sm:text-base gap-2 shadow-lg shadow-primary/20"
        >
          <a href="https://wa.link/madr38" target="_blank" rel="noopener noreferrer">
            Choisir cette offre <ArrowRight size={16} />
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default OffresSection;
