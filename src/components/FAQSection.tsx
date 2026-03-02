import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "Quels sont vos tarifs ?", a: "Nous prenons une commission unique de 20 % sur les revenus locatifs générés. Pas de frais cachés, pas d'abonnement. Contactez-nous pour une estimation gratuite." },
  { q: "Je peux utiliser ma maison quand je veux ?", a: "Absolument ! C'est votre logement. Bloquez vos dates de vacances, vos week-ends ou vos périodes familiales en un clic. Vous gardez le contrôle total." },
  { q: "Mon logement est vide seulement quelques mois, ça vaut le coup ?", a: "Oui, même 2 à 3 mois par an peuvent générer des revenus significatifs à Cannes, surtout pendant les événements (Festival, MIPIM, Lions…)." },
  { q: "Comment sont sélectionnés les voyageurs ?", a: "Nous vérifions l'identité et les avis de chaque voyageur. Nous privilégions les profils B2B et familles pour protéger votre bien." },
  { q: "Que comprend le service de ménage ?", a: "Nettoyage complet entre chaque voyageur, fourniture du linge de maison hôtelier, vérification de l'inventaire et réapprovisionnement des consommables." },
  { q: "J'ai hérité d'un bien, comment commencer ?", a: "On vous accompagne de A à Z : audit du logement, shooting photo, mise en ligne et gestion complète. Vous n'avez rien à faire." },
];

const FAQSection = () => (
  <section id="faq" className="py-16 sm:py-24">
    <div className="max-w-3xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10 sm:mb-12"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">FAQ</h2>
        <p className="text-muted-foreground text-base sm:text-lg">Les réponses à vos questions les plus fréquentes.</p>
      </motion.div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ delay: i * 0.06, duration: 0.35 }}
          >
            <AccordionItem value={`item-${i}`} className="bg-card border border-border rounded-xl px-4 sm:px-6 hover:border-primary/30 transition-colors">
              <AccordionTrigger className="text-left font-semibold font-sans hover:no-underline text-sm sm:text-base">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm">{f.a}</AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
