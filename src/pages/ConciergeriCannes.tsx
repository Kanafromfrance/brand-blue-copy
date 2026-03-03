import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import logo from "@/assets/logo.png";

const CTA = ({ label = "Demander une estimation gratuite" }: { label?: string }) => (
  <div className="flex flex-col sm:flex-row gap-3 my-8">
    <a href="https://wa.link/madr38" target="_blank" rel="noopener noreferrer">
      <Button size="lg" className="rounded-full px-8 py-6 font-bold text-base gap-2 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300">
        {label} <ArrowRight size={18} />
      </Button>
    </a>
    <a href="tel:+33768036995">
      <Button size="lg" variant="outline" className="rounded-full px-8 py-6 font-bold text-base gap-2">
        <Phone size={18} /> Être rappelé
      </Button>
    </a>
  </div>
);

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

const faqs = [
  { q: "Combien coûte une conciergerie Airbnb à Cannes ?", a: "AzulBay fonctionne sur un modèle de commission unique de 20 % sur les revenus locatifs générés. Aucun frais caché, aucun abonnement mensuel. Vous ne payez que lorsque votre bien rapporte. Demandez une simulation personnalisée pour estimer vos revenus nets." },
  { q: "Quel est le taux d'occupation moyen d'un Airbnb à Cannes ?", a: "Le taux d'occupation moyen d'un Airbnb bien géré à Cannes se situe entre 65 % et 85 % selon le quartier, la saisonnalité et la qualité de l'annonce. Pendant les événements majeurs (Festival de Cannes, MIPIM, Cannes Lions), le taux approche les 100 % avec des tarifs multipliés par 3 à 5." },
  { q: "Quels services sont inclus dans votre gestion locative à Cannes ?", a: "Notre gestion complète inclut : création et optimisation d'annonces, photographie professionnelle, tarification dynamique, gestion des réservations et des voyageurs 7j/7, ménage professionnel hôtelier, fourniture du linge, maintenance technique, gestion des avis et conformité réglementaire (taxe de séjour, déclaration mairie)." },
  { q: "Puis-je utiliser mon logement quand je le souhaite ?", a: "Absolument. C'est votre bien. Vous bloquez vos dates personnelles en un clic depuis votre espace propriétaire. Nous ajustons automatiquement le calendrier et la stratégie tarifaire autour de vos périodes de disponibilité." },
  { q: "Mon bien est disponible seulement 2-3 mois par an, est-ce rentable ?", a: "Oui. Cannes bénéficie d'une saisonnalité événementielle exceptionnelle. Même 2 mois bien positionnés (été + un congrès majeur) peuvent générer entre 3 000 € et 15 000 € nets selon la taille et l'emplacement de votre bien. Contactez-nous pour une estimation précise." },
];

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

    {/* Navbar light */}
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <Link to="/">
          <img src={logo} alt="AzulBay conciergerie Cannes" className="h-10 sm:h-12 w-auto" />
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:inline">Blog</Link>
          <a href="https://wa.link/madr38" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full px-6 font-semibold shadow-lg shadow-primary/25 gap-2">
              <MessageCircle size={16} /> Estimation gratuite
            </Button>
          </a>
        </div>
      </div>
    </nav>

    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">

      {/* H1 */}
      <header className="mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
          Conciergerie Airbnb à Cannes – Gestion Location Saisonnière
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          AzulBay est votre partenaire local de confiance pour la <strong>gestion locative saisonnière à Cannes</strong>.
          Plus de 40 propriétaires nous confient déjà leurs biens. De la Croisette à la Californie, nous maximisons vos revenus
          avec un service premium clé en main.
        </p>
        <CTA />
      </header>

      {/* Section 1 – Maximiser la rentabilité */}
      <section className="mb-14 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Conciergerie Airbnb à Cannes : maximisez la rentabilité de votre bien</h2>
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
          <p>
            Cannes est l'une des villes les plus attractives de France pour la <strong>location courte durée</strong>. Avec plus de 300 jours
            d'ensoleillement par an, un calendrier événementiel d'envergure internationale et une demande touristique soutenue,
            la ville offre un potentiel de <strong>rendement locatif</strong> exceptionnel pour les propriétaires.
          </p>
          <p>
            Que vous soyez <strong>propriétaire à Cannes</strong> d'un studio sur la <strong>Croisette</strong>, d'un appartement vue mer
            en <strong>Californie</strong> ou d'une villa à Palm Beach, votre bien mérite une <strong>gestion Airbnb à Cannes</strong> à
            la hauteur de son potentiel. C'est exactement ce que propose AzulBay : une <strong>conciergerie Airbnb à Cannes</strong> qui
            transforme chaque nuit inoccupée en revenu.
          </p>
          <p>
            Le marché cannois se distingue par sa saisonnalité unique. Au-delà de la saison estivale classique, les événements
            professionnels comme le <strong>Festival de Cannes</strong>, le <strong>MIPIM</strong>, les <strong>Cannes Lions</strong>,
            le MAPIC ou le TFWA créent des pics de demande où les tarifs peuvent être multipliés par trois à cinq.
            La proximité du <strong>Palais des Festivals</strong> est un atout décisif pour les locations proches du centre.
          </p>
          <p>
            Notre expertise locale nous permet d'identifier précisément ces fenêtres d'opportunité et d'ajuster la
            <strong> gestion location saisonnière Cannes</strong> en temps réel. Nous combinons données du marché, connaissance
            du terrain et outils de yield management pour offrir à chaque propriétaire le meilleur rendement possible.
          </p>
          <p>
            La <strong>conciergerie Airbnb à Cannes</strong> n'est pas un simple service de ménage : c'est un partenariat stratégique.
            AzulBay prend en charge l'intégralité de la chaîne de valeur, de la création de l'annonce à la gestion des avis,
            en passant par l'accueil des voyageurs et la maintenance de votre bien. Vous déléguez tout, vous récoltez les revenus.
          </p>
          <p>
            Avec une commission transparente de 20 % et zéro frais caché, notre modèle aligne nos intérêts sur les vôtres :
            plus votre bien rapporte, plus nous sommes performants. C'est la garantie d'un service engagé et orienté résultats.
          </p>
        </div>
      </section>

      {/* Section 2 – Pourquoi */}
      <section className="mb-14 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Pourquoi faire appel à une conciergerie Airbnb à Cannes ?</h2>
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
          <p>
            Gérer un Airbnb à Cannes en autonome demande du temps, de la réactivité et une connaissance fine du marché local.
            Entre la gestion des messages voyageurs, la coordination du <strong>ménage professionnel</strong>, l'<strong>optimisation tarifaire</strong> quotidienne
            et le suivi de la <strong>réglementation</strong>, la charge de travail est considérable — surtout si vous ne vivez pas à Cannes.
          </p>
          <p>
            Faire appel à une <strong>conciergerie Airbnb à Cannes</strong> comme AzulBay, c'est s'assurer un <strong>taux d'occupation</strong> optimal,
            des <strong>revenus locatifs</strong> maximisés et une <strong>gestion complète</strong> sans aucun stress. Notre équipe locale intervient
            7 jours sur 7, y compris pendant les périodes de forte demande comme le <strong>Festival de Cannes</strong> ou les <strong>congrès internationaux</strong>.
          </p>
          <p>
            La <strong>saisonnalité à Cannes</strong> est un levier de rentabilité que seul un acteur local peut pleinement exploiter.
            Nos algorithmes de tarification dynamique ajustent les prix en fonction de l'offre et de la demande en temps réel,
            des événements à venir et du positionnement de votre bien par rapport à la concurrence.
          </p>
        </div>
        <ul className="mt-6 space-y-3">
          {[
            "Taux d'occupation moyen de 75 % sur nos biens gérés",
            "Revenus locatifs supérieurs de 30 % vs la gestion en direct",
            "Tarification dynamique adaptée à chaque événement cannois",
            "Équipe locale réactive disponible 7j/7",
            "Conformité réglementaire totale (taxe de séjour, déclaration mairie)",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-foreground">
              <CheckCircle className="text-primary mt-0.5 shrink-0" size={20} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 3 – Services */}
      <section className="mb-14 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Nos services de gestion Airbnb à Cannes</h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold mb-3">Création et optimisation d'annonces Airbnb</h3>
            <p className="text-muted-foreground leading-relaxed">
              Shooting photo professionnel, rédaction d'annonce optimisée pour le référencement Airbnb, titre accrocheur
              et description valorisant chaque atout de votre bien. Nous publions sur Airbnb, Booking.com et Abritel
              pour maximiser la visibilité et le taux de réservation. Chaque annonce est conçue pour convertir.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Tarification dynamique et maximisation des revenus</h3>
            <p className="text-muted-foreground leading-relaxed">
              Notre système de yield management ajuste vos tarifs en temps réel en fonction de la demande, des événements
              (Festival, MIPIM, Lions, TFWA), de la saisonnalité et de la concurrence locale. Résultat : un prix optimal
              chaque nuit pour un rendement locatif maximal sur votre investissement cannois.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Gestion voyageurs 7j/7</h3>
            <p className="text-muted-foreground leading-relaxed">
              Réponse rapide aux demandes de réservation, vérification des profils voyageurs, check-in et check-out
              flexibles, assistance pendant le séjour. Notre équipe locale assure un accueil irréprochable qui se
              traduit par des avis 5 étoiles et un statut Superhost maintenu sur l'ensemble de notre portefeuille.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Ménage professionnel et maintenance</h3>
            <p className="text-muted-foreground leading-relaxed">
              Nettoyage hôtelier complet entre chaque séjour, linge de maison premium, réapprovisionnement des
              consommables. Notre réseau d'artisans locaux (plombier, électricien, serrurier) intervient en urgence
              pour toute maintenance. Votre bien est toujours en parfait état, prêt à accueillir le prochain voyageur.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Gestion pendant les événements majeurs à Cannes</h3>
            <p className="text-muted-foreground leading-relaxed">
              Le Festival de Cannes, le MIPIM, les Cannes Lions, le MAPIC, le TFWA ou le Yachting Festival sont
              des opportunités de revenus exceptionnelles. Nous adaptons la stratégie tarifaire, les durées minimales
              de séjour et les services d'accueil pour tirer le meilleur parti de chaque événement. Certains de nos
              propriétaires génèrent jusqu'à 40 % de leurs revenus annuels sur ces seules périodes.
            </p>
          </div>
        </div>
        <CTA label="Recevoir une simulation de revenus" />
      </section>

      {/* Section 4 – Quartiers */}
      <section className="mb-14 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Les quartiers de Cannes que nous gérons</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {quartiers.map((q) => (
            <div key={q.nom} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="text-primary shrink-0" size={18} />
                <h3 className="text-lg font-semibold">{q.nom}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{q.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 – Combien ça coûte */}
      <section className="mb-14 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Combien coûte une conciergerie Airbnb à Cannes ?</h2>
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
          <p>
            Chez AzulBay, la <strong>transparence</strong> est un principe fondateur. Notre modèle est simple :
            une <strong>commission unique de 20 %</strong> sur les revenus locatifs générés. Pas d'abonnement mensuel,
            pas de frais d'inscription, pas de coût caché.
          </p>
          <p>
            Ce <strong>pourcentage</strong> couvre l'intégralité de nos services : création d'annonce, gestion des réservations,
            accueil des voyageurs, ménage professionnel, linge hôtelier, maintenance et optimisation tarifaire.
            Vous n'avez strictement rien à payer en avance.
          </p>
          <p>
            Vous souhaitez connaître le potentiel de votre bien ? Demandez une <strong>estimation de revenus</strong> gratuite.
            En fonction de la localisation, de la taille, de l'état et de la disponibilité de votre logement, nous réalisons
            une <strong>simulation personnalisée</strong> de vos revenus locatifs nets annuels.
          </p>
        </div>
        <CTA label="Recevoir une simulation de revenus" />
      </section>

      {/* Section 6 – Luxe */}
      <section className="mb-14 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Conciergerie de luxe à Cannes</h2>
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
          <p>
            Pour les <strong>villas</strong> et <strong>appartements haut de gamme</strong>, AzulBay propose une
            <strong> conciergerie de luxe à Cannes</strong> avec des <strong>prestations premium</strong> sur mesure :
            accueil VIP personnalisé, chef à domicile, chauffeur privé, transfert aéroport Nice-Cannes,
            réservation de restaurants étoilés, location de yacht ou de voiture de luxe.
          </p>
          <p>
            Nos services d'intendance de villa comprennent l'entretien de la piscine, la gestion du jardin,
            la coordination des artisans et la surveillance du bien en votre absence. Chaque propriété est
            traitée comme un actif d'exception, avec une attention au détail qui se reflète dans la satisfaction
            des voyageurs et la valorisation de votre patrimoine.
          </p>
          <p>
            La <strong>conciergerie de luxe à Cannes</strong> s'adresse aux propriétaires exigeants qui souhaitent
            allier revenus locatifs performants et préservation irréprochable de leur bien immobilier.
          </p>
        </div>
      </section>

      {/* Section 7 – FAQ */}
      <section className="mb-14 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">FAQ Conciergerie Airbnb Cannes</h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-4 sm:px-6 hover:border-primary/30 transition-colors">
              <AccordionTrigger className="text-left font-semibold hover:no-underline text-sm sm:text-base">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <CTA />
      </section>

      {/* Maillage interne */}
      <section className="border-t border-border pt-10">
        <h2 className="text-xl font-bold mb-4">En savoir plus</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/" className="text-primary font-medium hover:underline flex items-center gap-1">
            <ArrowRight size={16} /> Découvrir AzulBay
          </Link>
          <Link to="/blog" className="text-primary font-medium hover:underline flex items-center gap-1">
            <ArrowRight size={16} /> Lire notre blog
          </Link>
        </div>
      </section>
    </main>

    {/* Footer léger */}
    <footer className="bg-foreground text-background py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm opacity-70">
        <span>© 2026 AzulBay. Tous droits réservés.</span>
        <div className="flex gap-4">
          <Link to="/" className="hover:opacity-100 transition-opacity">Accueil</Link>
          <Link to="/blog" className="hover:opacity-100 transition-opacity">Blog</Link>
          <a href="/#faq" className="hover:opacity-100 transition-opacity">FAQ</a>
        </div>
      </div>
    </footer>
  </>
);

export default ConciergeriCannes;
