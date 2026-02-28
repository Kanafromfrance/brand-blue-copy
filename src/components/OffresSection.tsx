import { motion } from "framer-motion";
import { Check, X, Crown, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const offres = [
  {
    name: "Sérénité & Performance",
    tagline: "Délégation totale. Zéro friction. Rendement optimisé.",
    commission: "19%",
    icon: Shield,
    popular: false,
    inclus: [
      "Gestion opérationnelle complète (arrivées, départs, ménage, linge)",
      "Sécurité & protection des cautions et litiges",
      "Pricing dynamique automatisé",
      "Maintenance courante & petits dépannages",
      "Shooting photo professionnel offert",
    ],
    nonInclus: [
      "Grosses réparations (structure, plomberie lourde)",
      "Assurances PNO (à votre charge)",
      "Taxe de séjour (collectée via les plateformes)",
    ],
    extra: "Frais de ménage à la charge des voyageurs",
  },
  {
    name: "Gestion Signature",
    tagline: "Pour les biens d'exception. Pour une clientèle qui ne transige pas.",
    commission: "25%",
    icon: Crown,
    popular: true,
    inclus: [
      "Shooting photo haut de gamme + vidéo de présentation",
      "Audit home staging & conseil déco inclus",
      "Sécurité & protection des cautions et litiges",
      "Tarification manuelle quotidienne sur événements VIP",
      "Conciergerie 24/24, Welcome Box Luxe",
      "Blanchisserie qualité hôtelière",
      "Audits techniques réguliers",
    ],
    nonInclus: [
      "Mobilier & décoration (achats à votre charge)",
      "Rénovations majeures (maître d'œuvre)",
    ],
    extra: "Upsells : services tiers avec 10% de revenus reversés au propriétaire",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay: i * 0.2, ease: "easeOut" as const },
  }),
};

const OffresSection = () => (
  <section id="offres" className="py-24 bg-background">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-6xl font-bold mb-4">
          Nos{" "}
          <span
            className="italic text-primary"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            offres
          </span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Deux formules pensées pour s'adapter à votre bien et à vos ambitions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {offres.map((offre, i) => (
          <motion.div
            key={offre.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className={`relative rounded-3xl border p-8 lg:p-10 flex flex-col transition-shadow duration-300 ${
              offre.popular
                ? "border-primary/40 bg-primary/[0.03] shadow-xl shadow-primary/10"
                : "border-border bg-card hover:shadow-lg hover:shadow-primary/5"
            }`}
          >
            {offre.popular && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
                className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full"
              >
                Recommandé
              </motion.div>
            )}

            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  offre.popular ? "bg-primary/15" : "bg-muted"
                }`}
              >
                <offre.icon
                  className="text-primary"
                  size={24}
                />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold">{offre.name}</h3>
              </div>
            </div>

            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              {offre.tagline}
            </p>

            {/* Commission */}
            <div className="mb-8">
              <span className="text-5xl font-bold text-foreground">{offre.commission}</span>
              <span className="text-muted-foreground ml-2 text-sm">sur le revenu locatif net</span>
            </div>

            {/* Inclus */}
            <div className="mb-6 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Inclus
              </p>
              <ul className="space-y-2.5">
                {offre.inclus.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <Check className="text-primary shrink-0 mt-0.5" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Non inclus */}
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Non inclus
              </p>
              <ul className="space-y-2.5">
                {offre.nonInclus.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <X className="shrink-0 mt-0.5 opacity-40" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Extra note */}
            <p className="text-xs text-muted-foreground italic mb-8">{offre.extra}</p>

            {/* CTA */}
            <Button
              asChild
              className={`rounded-full py-6 font-bold text-base gap-2 transition-all duration-300 ${
                offre.popular
                  ? "shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105"
                  : "hover:scale-105"
              }`}
              variant={offre.popular ? "default" : "outline"}
            >
              <a href="https://wa.link/madr38" target="_blank" rel="noopener noreferrer">
                Choisir cette offre <ArrowRight size={18} />
              </a>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default OffresSection;
