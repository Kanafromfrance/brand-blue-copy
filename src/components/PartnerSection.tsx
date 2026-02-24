import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PartnerSection = () => (
  <section className="py-24 bg-primary text-primary-foreground">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Devenir <span className="italic">partenaire</span>
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-lg">
            Vous êtes agent immobilier, gestionnaire ou professionnel du tourisme ? Rejoignez notre réseau de partenaires et développez votre activité avec AzulBay.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-8 font-semibold text-base gap-2">
            En savoir plus <ArrowRight size={18} />
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 border border-primary-foreground/20">
            <div className="grid grid-cols-2 gap-4">
              {["Commission attractive", "Outils dédiés", "Formation incluse", "Support prioritaire"].map((b) => (
                <div key={b} className="bg-primary-foreground/10 rounded-xl p-4 text-center text-sm font-medium">
                  {b}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PartnerSection;
