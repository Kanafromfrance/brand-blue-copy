import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle, MapPin, Phone, MessageCircle,
  Star, TrendingUp, Shield, Headphones, Clock,
  Camera, BarChart3, Users, SparklesIcon, CalendarDays,
  Check, X, DollarSign, Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import RevenueEstimator from "@/components/RevenueEstimator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Data (contenu SEO inchangé) ─── */

const stats = [
  { icon: TrendingUp, value: "40+", label: "propriétaires accompagnés" },
  { icon: Shield, value: "+33%", label: "de revenus en moyenne" },
  { icon: Headphones, value: "7j/7", label: "support disponible" },
  { icon: Star, value: "4.8/5", label: "note globale" },
];

const quartiers = [
  { nom: "La Croisette", desc: "Axe emblématique de Cannes, la Croisette concentre les locations saisonnières les plus rentables. Sa proximité avec le Palais des Festivals et les plages privées en fait le quartier le plus recherché par les voyageurs d'affaires et les touristes haut de gamme. Notre conciergerie Airbnb y assure une gestion locative premium avec des taux d'occupation parmi les plus élevés de la ville." },
  { nom: "La Californie", desc: "Quartier résidentiel prisé pour ses villas avec vue mer, la Californie attire une clientèle internationale exigeante. L'intendance de villas à Cannes Californie requiert une expertise spécifique : maintenance piscine, entretien jardin, accueil VIP. Notre équipe locale gère chaque propriété comme un bien d'exception." },
  { nom: "Palm Beach", desc: "Situé à la pointe est de Cannes, Palm Beach séduit par ses plages, son casino et son ambiance exclusive. La gestion locative saisonnière y est particulièrement lucrative pendant les événements estivaux et le Yachting Festival. Nous optimisons chaque réservation pour maximiser vos revenus locatifs." },
  { nom: "Le Suquet", desc: "Cœur historique de Cannes, le Suquet charme les voyageurs avec ses ruelles pittoresques et ses panoramas sur la baie. Les appartements au Suquet bénéficient d'un taux d'occupation élevé toute l'année grâce à leur authenticité. Notre conciergerie assure un service complet adapté aux spécificités du quartier ancien." },
  { nom: "Centre-ville", desc: "Le centre-ville de Cannes, autour de la rue d'Antibes et du boulevard Carnot, offre un excellent rapport entre accessibilité et rentabilité. Idéal pour les studios et T2 en location courte durée, ce secteur profite de la proximité des commerces, restaurants et transports. Gestion Airbnb optimisée pour chaque typologie de bien." },
  { nom: "Le Prado – République", desc: "Quartier résidentiel calme à deux pas du centre, le Prado offre un excellent potentiel locatif avec des biens spacieux à prix d'achat plus accessible. Notre gestion locative à Cannes Prado permet d'atteindre des rendements locatifs attractifs, notamment pendant les congrès au Palais des Festivals." },
  { nom: "Montfleury", desc: "Montfleury combine tranquillité résidentielle et proximité du centre. Les appartements et maisons de ville y sont très demandés par les familles et les séjours moyens ou longs. Notre conciergerie adapte la tarification dynamique pour tirer parti de chaque période de saisonnalité à Cannes." },
  { nom: "La Bocca", desc: "Quartier en plein essor situé à l'ouest de Cannes, La Bocca propose des biens à forte rentabilité grâce à des prix d'acquisition inférieurs. La demande locative y est soutenue par la proximité de la gare, de la plage et des zones commerciales. Gestion Airbnb professionnelle et réactive pour chaque propriétaire." },
];

const services = [
  { icon: Camera, title: "Création et optimisation d'annonces Airbnb", desc: "Shooting photo professionnel, rédaction d'annonce optimisée pour le référencement Airbnb, titre accrocheur et description valorisant chaque atout de votre bien. Nous publions sur Airbnb, Booking.com et Abritel pour maximiser la visibilité et le taux de réservation. Chaque annonce est conçue pour convertir.", rating: "5,0", note: "Visibilité" },
  { icon: BarChart3, title: "Tarification dynamique et maximisation des revenus", desc: "Notre système de yield management ajuste vos tarifs en temps réel en fonction de la demande, des événements (Festival, MIPIM, Lions, TFWA), de la saisonnalité et de la concurrence locale. Résultat : un prix optimal chaque nuit pour un rendement locatif maximal sur votre investissement cannois.", rating: "5,0", note: "Revenus" },
  { icon: Users, title: "Gestion voyageurs 7j/7", desc: "Réponse rapide aux demandes de réservation, vérification des profils voyageurs, check-in et check-out flexibles, assistance pendant le séjour. Notre équipe locale assure un accueil irréprochable qui se traduit par des avis 5 étoiles et un statut Superhost maintenu sur l'ensemble de notre portefeuille.", rating: "5,0", note: "Accueil" },
  { icon: SparklesIcon, title: "Ménage professionnel et maintenance", desc: "Nettoyage hôtelier complet entre chaque séjour, linge de maison premium, réapprovisionnement des consommables. Notre réseau d'artisans locaux (plombier, électricien, serrurier) intervient en urgence pour toute maintenance. Votre bien est toujours en parfait état, prêt à accueillir le prochain voyageur.", rating: "4,9", note: "Propreté" },
  { icon: CalendarDays, title: "Gestion pendant les événements majeurs à Cannes", desc: "Le Festival de Cannes, le MIPIM, les Cannes Lions, le MAPIC, le TFWA ou le Yachting Festival sont des opportunités de revenus exceptionnelles. Nous adaptons la stratégie tarifaire, les durées minimales de séjour et les services d'accueil pour tirer le meilleur parti de chaque événement. Certains de nos propriétaires génèrent jusqu'à 40 % de leurs revenus annuels sur ces seules périodes.", rating: "5,0", note: "Événements" },
];

const faqs = [
  { q: "Combien coûte une conciergerie Airbnb à Cannes ?", a: "AzulBay fonctionne sur un modèle de commission unique de 20 % sur les revenus locatifs générés. Aucun frais caché, aucun abonnement mensuel. Vous ne payez que lorsque votre bien rapporte. Demandez une simulation personnalisée pour estimer vos revenus nets." },
  { q: "Quel est le taux d'occupation moyen d'un Airbnb à Cannes ?", a: "Le taux d'occupation moyen d'un Airbnb bien géré à Cannes se situe entre 65 % et 85 % selon le quartier, la saisonnalité et la qualité de l'annonce. Pendant les événements majeurs (Festival de Cannes, MIPIM, Cannes Lions), le taux approche les 100 % avec des tarifs multipliés par 3 à 5." },
  { q: "Quels services sont inclus dans votre gestion locative à Cannes ?", a: "Notre gestion complète inclut : création et optimisation d'annonces, photographie professionnelle, tarification dynamique, gestion des réservations et des voyageurs 7j/7, ménage professionnel hôtelier, fourniture du linge, maintenance technique, gestion des avis et conformité réglementaire (taxe de séjour, déclaration mairie)." },
  { q: "Puis-je utiliser mon logement quand je le souhaite ?", a: "Absolument. C'est votre bien. Vous bloquez vos dates personnelles en un clic depuis votre espace propriétaire. Nous ajustons automatiquement le calendrier et la stratégie tarifaire autour de vos périodes de disponibilité." },
  { q: "Mon bien est disponible seulement 2-3 mois par an, est-ce rentable ?", a: "Oui. Cannes bénéficie d'une saisonnalité événementielle exceptionnelle. Même 2 mois bien positionnés (été + un congrès majeur) peuvent générer entre 3 000 € et 15 000 € nets selon la taille et l'emplacement de votre bien. Contactez-nous pour une estimation précise." },
];

const whyReasons = [
  "Taux d'occupation moyen de 75 % sur nos biens gérés",
  "Revenus locatifs supérieurs de 30 % vs la gestion en direct",
  "Tarification dynamique adaptée à chaque événement cannois",
  "Équipe locale réactive disponible 7j/7",
  "Conformité réglementaire totale (taxe de séjour, déclaration mairie)",
];

/* ─── Composant CTA conversion ─── */
const CTABlock = ({ label = "Estimer mes revenus", className = "" }: { label?: string; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className={`flex flex-col items-center gap-4 ${className}`}
  >
    <RevenueEstimator />
    <div className="flex flex-wrap items-center justify-center gap-3">
      <a href="https://wa.link/madr38" target="_blank" rel="noopener noreferrer">
        <Button variant="outline" className="rounded-full px-6 font-semibold gap-2">
          <MessageCircle size={16} /> WhatsApp
        </Button>
      </a>
      <a href="tel:+33768036995">
        <Button variant="outline" className="rounded-full px-6 font-semibold gap-2">
          <Phone size={16} /> Être rappelé
        </Button>
      </a>
    </div>
  </motion.div>
);

/* ─── Page ─── */
const ConciergeriCannes = () => (
  <>
    <Helmet>
      <title>Conciergerie Airbnb à Cannes | Gestion Location Saisonnière Premium</title>
      <meta name="description" content="Conciergerie Airbnb à Cannes spécialisée en gestion locative saisonnière. Optimisation des revenus, gestion complète, service premium local. Estimation gratuite." />
      <link rel="canonical" href="https://azulbay.fr/conciergerie-cannes" />
      <meta property="og:title" content="Conciergerie Airbnb à Cannes | Gestion Location Saisonnière Premium" />
      <meta property="og:description" content="Conciergerie Airbnb à Cannes spécialisée en gestion locative saisonnière. Optimisation des revenus, gestion complète, service premium local." />
      <meta property="og:url" content="https://azulbay.fr/conciergerie-cannes" />
      <meta property="og:type" content="website" />
    </Helmet>

    <Navbar />

    {/* ═══════════════ HERO ═══════════════ */}
    <section className="relative min-h-[80svh] flex items-center justify-center overflow-hidden pt-20 pb-8 sm:pt-28 sm:pb-16 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 border border-primary/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Conciergerie premium à Cannes
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4 sm:mb-6 tracking-tight"
        >
          Conciergerie Airbnb à{" "}
          <span className="text-primary italic" style={{ fontFamily: "'Playfair Display', serif" }}>
            Cannes
          </span>
          <br className="hidden sm:block" />
          <span className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground block mt-2 sm:mt-4" style={{ fontFamily: "inherit" }}>
            Gestion Location Saisonnière
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-10 max-w-2xl leading-relaxed"
        >
          AzulBay est votre partenaire local de confiance pour la <strong>gestion locative saisonnière à Cannes</strong>.
          Plus de 40 propriétaires nous confient déjà leurs biens. De la Croisette à la Californie, nous maximisons vos revenus
          avec un service premium clé en main.
        </motion.p>

        {/* CTA principal */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          <RevenueEstimator />
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 gap-y-3 bg-card/80 backdrop-blur-sm rounded-2xl px-3 sm:px-8 py-3 sm:py-5 border border-border/50 w-full sm:w-auto"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <s.icon className="text-primary" size={16} />
              </div>
              <div className="text-left">
                <p className="text-base sm:text-lg font-bold text-foreground leading-tight">{s.value}</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">{s.label}</p>
              </div>
              {i < stats.length - 1 && <div className="hidden sm:block h-8 w-px bg-border ml-3 sm:ml-5" />}
            </div>
          ))}
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-4 sm:mt-8"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-background flex items-center justify-center text-[10px] font-bold text-primary">
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className="fill-primary text-primary" />
            ))}
          </div>
          <p className="text-xs sm:text-sm font-medium text-muted-foreground">
            <span className="text-foreground font-bold">+40</span> propriétaires nous font confiance
          </p>
        </motion.div>
      </div>
    </section>

    {/* ═══════════════ SECTION 1 — Maximiser la rentabilité ═══════════════ */}
    <section className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Conciergerie Airbnb à Cannes : <span className="text-primary">maximisez la rentabilité</span> de votre bien
          </h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-muted-foreground space-y-4 text-sm sm:text-base leading-relaxed">
          <p>Cannes est l'une des villes les plus attractives de France pour la <strong>location courte durée</strong>. Avec plus de 300 jours d'ensoleillement par an, un calendrier événementiel d'envergure internationale et une demande touristique soutenue, la ville offre un potentiel de <strong>rendement locatif</strong> exceptionnel pour les propriétaires.</p>
          <p>Que vous soyez <strong>propriétaire à Cannes</strong> d'un studio sur la <strong>Croisette</strong>, d'un appartement vue mer en <strong>Californie</strong> ou d'une villa à Palm Beach, votre bien mérite une <strong>gestion Airbnb à Cannes</strong> à la hauteur de son potentiel. C'est exactement ce que propose AzulBay : une <strong>conciergerie Airbnb à Cannes</strong> qui transforme chaque nuit inoccupée en revenu.</p>
          <p>Le marché cannois se distingue par sa saisonnalité unique. Au-delà de la saison estivale classique, les événements professionnels comme le <strong>Festival de Cannes</strong>, le <strong>MIPIM</strong>, les <strong>Cannes Lions</strong>, le MAPIC ou le TFWA créent des pics de demande où les tarifs peuvent être multipliés par trois à cinq. La proximité du <strong>Palais des Festivals</strong> est un atout décisif pour les locations proches du centre.</p>
          <p>Notre expertise locale nous permet d'identifier précisément ces fenêtres d'opportunité et d'ajuster la <strong>gestion location saisonnière Cannes</strong> en temps réel. Nous combinons données du marché, connaissance du terrain et outils de yield management pour offrir à chaque propriétaire le meilleur rendement possible.</p>
          <p>La <strong>conciergerie Airbnb à Cannes</strong> n'est pas un simple service de ménage : c'est un partenariat stratégique. AzulBay prend en charge l'intégralité de la chaîne de valeur, de la création de l'annonce à la gestion des avis, en passant par l'accueil des voyageurs et la maintenance de votre bien. Vous déléguez tout, vous récoltez les revenus.</p>
          <p>Avec une commission transparente de 20 % et zéro frais caché, notre modèle aligne nos intérêts sur les vôtres : plus votre bien rapporte, plus nous sommes performants. C'est la garantie d'un service engagé et orienté résultats.</p>
        </motion.div>
      </div>
    </section>

    {/* ═══════════════ SECTION 2 — Pourquoi ═══════════════ */}
    <section className="py-16 sm:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Pourquoi faire appel à <span className="text-primary">AzulBay</span> ?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Gérer un Airbnb à Cannes en autonome demande du temps, de la réactivité et une connaissance fine du marché local.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-muted-foreground space-y-4 text-sm sm:text-base leading-relaxed mb-8">
            <p>Entre la gestion des messages voyageurs, la coordination du <strong>ménage professionnel</strong>, l'<strong>optimisation tarifaire</strong> quotidienne et le suivi de la <strong>réglementation</strong>, la charge de travail est considérable — surtout si vous ne vivez pas à Cannes.</p>
            <p>Faire appel à une <strong>conciergerie Airbnb à Cannes</strong> comme AzulBay, c'est s'assurer un <strong>taux d'occupation</strong> optimal, des <strong>revenus locatifs</strong> maximisés et une <strong>gestion complète</strong> sans aucun stress. Notre équipe locale intervient 7 jours sur 7, y compris pendant les périodes de forte demande comme le <strong>Festival de Cannes</strong> ou les <strong>congrès internationaux</strong>.</p>
            <p>La <strong>saisonnalité à Cannes</strong> est un levier de rentabilité que seul un acteur local peut pleinement exploiter. Nos algorithmes de tarification dynamique ajustent les prix en fonction de l'offre et de la demande en temps réel, des événements à venir et du positionnement de votre bien par rapport à la concurrence.</p>
          </motion.div>
        </div>

        {/* Cards avantages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {whyReasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-card rounded-2xl p-5 sm:p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-200"
            >
              <CheckCircle className="text-primary mb-3" size={24} />
              <p className="text-sm sm:text-base font-medium text-foreground">{item}</p>
            </motion.div>
          ))}
        </div>

        <CTABlock className="mt-12" />
      </div>
    </section>

    {/* ═══════════════ SECTION 3 — Services (style HowItWorks) ═══════════════ */}
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
            Nos services de gestion{" "}
            <span className="italic text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>Airbnb</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-start">
          {/* Left sticky */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="lg:col-span-2 lg:sticky lg:top-32">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
              <Clock className="text-primary" size={24} />
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
              Gestion complète, revenus maximisés
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              De la création de l'annonce à la remise des clés, en passant par le ménage et la tarification dynamique — nous prenons tout en charge pour que votre bien performe sans effort.
            </p>
            <RevenueEstimator />
          </motion.div>

          {/* Right — service cards */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card rounded-2xl border border-border p-4 sm:p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <s.icon className="text-primary" size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">{s.desc}</p>
                    <div className="flex items-center gap-2 text-xs sm:text-sm">
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

    {/* ═══════════════ SECTION 4 — Quartiers ═══════════════ */}
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Les quartiers que nous{" "}
            <span className="italic text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>gérons</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Une connaissance terrain de chaque micro-marché pour optimiser votre rendement locatif.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {quartiers.map((q, i) => (
            <motion.div
              key={q.nom}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-card rounded-2xl border border-border p-5 sm:p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={16} />
                </div>
                <h3 className="text-base sm:text-lg font-bold">{q.nom}</h3>
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{q.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════════ SECTION 5 — Tarifs (style OffresSection) ═══════════════ */}
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Combien coûte une conciergerie{" "}
            <span className="italic text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>Airbnb</span> à Cannes ?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative rounded-3xl border border-primary/30 bg-primary/[0.02] shadow-xl shadow-primary/10 p-6 sm:p-8 lg:p-10"
        >
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-5 py-1.5 rounded-full">
            20 % de commission unique
          </div>

          <div className="text-muted-foreground space-y-4 text-sm sm:text-base leading-relaxed mt-4">
            <p>Chez AzulBay, la <strong>transparence</strong> est un principe fondateur. Notre modèle est simple : une <strong>commission unique de 20 %</strong> sur les revenus locatifs générés. Pas d'abonnement mensuel, pas de frais d'inscription, pas de coût caché.</p>
            <p>Ce <strong>pourcentage</strong> couvre l'intégralité de nos services : création d'annonce, gestion des réservations, accueil des voyageurs, ménage professionnel, linge hôtelier, maintenance et optimisation tarifaire. Vous n'avez strictement rien à payer en avance.</p>
            <p>Vous souhaitez connaître le potentiel de votre bien ? Demandez une <strong>estimation de revenus</strong> gratuite. En fonction de la localisation, de la taille, de l'état et de la disponibilité de votre logement, nous réalisons une <strong>simulation personnalisée</strong> de vos revenus locatifs nets annuels.</p>
          </div>

          <div className="border-t border-border my-6" />

          <div className="bg-muted/50 rounded-2xl p-5 sm:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <DollarSign className="text-primary" size={18} />
              <p className="text-sm font-bold uppercase tracking-wider text-foreground">Détail des tarifs</p>
            </div>
            <ul className="space-y-2 ml-6">
              {[
                "Commission Unique : 20 % sur le revenu locatif net (nuitées).",
                "Frais de Ménage : Intégralement à la charge des voyageurs.",
                "Frais de mise en place : Offerts (incluant shooting, vidéo et audit).",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <Check className="text-primary shrink-0 mt-0.5" size={14} />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <RevenueEstimator />
          </div>
        </motion.div>
      </div>
    </section>

    {/* ═══════════════ SECTION 6 — Luxe ═══════════════ */}
    <section className="py-16 sm:py-24 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Conciergerie de{" "}
            <span className="italic text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>luxe</span> à Cannes
          </h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-muted-foreground space-y-4 text-sm sm:text-base leading-relaxed">
          <p>Pour les <strong>villas</strong> et <strong>appartements haut de gamme</strong>, AzulBay propose une <strong>conciergerie de luxe à Cannes</strong> avec des <strong>prestations premium</strong> sur mesure : accueil VIP personnalisé, chef à domicile, chauffeur privé, transfert aéroport Nice-Cannes, réservation de restaurants étoilés, location de yacht ou de voiture de luxe.</p>
          <p>Nos services d'intendance de villa comprennent l'entretien de la piscine, la gestion du jardin, la coordination des artisans et la surveillance du bien en votre absence. Chaque propriété est traitée comme un actif d'exception, avec une attention au détail qui se reflète dans la satisfaction des voyageurs et la valorisation de votre patrimoine.</p>
          <p>La <strong>conciergerie de luxe à Cannes</strong> s'adresse aux propriétaires exigeants qui souhaitent allier revenus locatifs performants et préservation irréprochable de leur bien immobilier.</p>
        </motion.div>
        <CTABlock className="mt-10" />
      </div>
    </section>

    {/* ═══════════════ SECTION 7 — FAQ ═══════════════ */}
    <section className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">FAQ</h2>
          <p className="text-muted-foreground text-base sm:text-lg">Conciergerie Airbnb Cannes — les réponses à vos questions.</p>
        </motion.div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-20px" }} transition={{ delay: i * 0.06, duration: 0.35 }}>
              <AccordionItem value={`faq-${i}`} className="bg-card border border-border rounded-xl px-4 sm:px-6 hover:border-primary/30 transition-colors">
                <AccordionTrigger className="text-left font-semibold font-sans hover:no-underline text-sm sm:text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
        <CTABlock className="mt-10" />
      </div>
    </section>

    {/* ═══════════════ Maillage interne ═══════════════ */}
    <section className="py-10 border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl font-bold mb-4">En savoir plus</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/" className="text-primary font-medium hover:underline flex items-center gap-1">
            <ArrowRight size={16} /> Découvrir AzulBay
          </Link>
          <Link to="/blog" className="text-primary font-medium hover:underline flex items-center gap-1">
            <ArrowRight size={16} /> Lire notre blog
          </Link>
        </div>
      </div>
    </section>

    <Footer />
  </>
);

export default ConciergeriCannes;
