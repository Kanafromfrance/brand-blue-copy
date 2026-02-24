import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "Quels sont vos tarifs ?", a: "Nos tarifs sont basés sur un pourcentage des revenus locatifs générés. Contactez-nous pour une estimation personnalisée et gratuite." },
  { q: "Dans quelles villes intervenez-vous ?", a: "Nous sommes présents dans plus de 15 villes en France. Contactez-nous pour vérifier la disponibilité dans votre zone." },
  { q: "Comment sont sélectionnés les voyageurs ?", a: "Nous vérifions l'identité et les avis de chaque voyageur avant d'accepter une réservation pour garantir la sécurité de votre bien." },
  { q: "Puis-je utiliser mon logement quand je le souhaite ?", a: "Absolument ! Vous gardez le contrôle total de votre calendrier. Bloquez les dates de votre choix à tout moment." },
  { q: "Que comprend le service de ménage ?", a: "Nettoyage complet entre chaque voyageur, fourniture du linge de maison, vérification de l'inventaire et réapprovisionnement des consommables." },
];

const FAQSection = () => (
  <section id="faq" className="py-24">
    <div className="max-w-3xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">FAQ</h2>
        <p className="text-muted-foreground text-lg">Les réponses à vos questions les plus fréquentes.</p>
      </motion.div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-xl px-6">
            <AccordionTrigger className="text-left font-semibold font-sans hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
