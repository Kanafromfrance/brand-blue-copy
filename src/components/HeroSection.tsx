import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center"
      >
        {/* Header */}
        <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-4">
          Profitez de vos proches, on s'occupe de vos{" "}
          <span className="italic text-primary">voyageurs</span>
        </h1>

        {/* Sub header */}
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
          AzulBay gère l'intégralité de votre location saisonnière — de l'accueil des voyageurs à l'entretien, en passant par l'optimisation de vos revenus.
        </p>

        {/* Gestion clé en main badge */}
        <div className="bg-primary/10 rounded-2xl p-6 mb-8 w-full max-w-md border border-primary/10">
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="text-2xl">🏠</span>
            </div>
            <p className="text-xl font-bold">Gestion clé en main</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full">
              {["Check-in", "Ménage", "Linge", "Support 24/7"].map((s) => (
                <div key={s} className="bg-background/60 rounded-xl p-2 text-center text-sm font-medium">{s}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Boutons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button size="lg" className="rounded-full px-8 font-semibold text-base gap-2">
            Commencer <ArrowRight size={18} />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 font-semibold text-base">
            Audit gratuit
          </Button>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-bold text-primary">
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <div className="text-left">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">+200 propriétaires satisfaits</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
