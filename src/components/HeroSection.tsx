import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Star size={14} className="fill-primary" />
            Service de conciergerie premium
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
            Profitez de vos proches, on s'occupe de vos{" "}
            <span className="italic text-primary">voyageurs</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            AzulBay gère l'intégralité de votre location saisonnière — de l'accueil des voyageurs à l'entretien, en passant par l'optimisation de vos revenus.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full px-8 font-semibold text-base gap-2">
              Commencer <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 font-semibold text-base">
              Audit gratuit
            </Button>
          </div>
          <div className="flex items-center gap-6 mt-10">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-bold text-primary">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">+200 propriétaires satisfaits</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-4 rounded-2xl bg-background/60 backdrop-blur-sm border border-border flex flex-col items-center justify-center gap-4 p-8">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="text-3xl">🏠</span>
              </div>
              <p className="text-2xl font-bold text-center">Gestion clé en main</p>
              <p className="text-muted-foreground text-center">De l'annonce à l'accueil, tout est pris en charge.</p>
              <div className="grid grid-cols-2 gap-3 w-full mt-4">
                {["Check-in", "Ménage", "Linge", "Support 24/7"].map((s) => (
                  <div key={s} className="bg-primary/5 rounded-xl p-3 text-center text-sm font-medium">{s}</div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
