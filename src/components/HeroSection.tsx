import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star, TrendingUp, Shield, Headphones } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "40+", label: "logements en gestion" },
  { icon: Shield, value: "+33%", label: "de revenus en moyenne" },
  { icon: Headphones, value: "7j/7", label: "support disponible" },
  { icon: Star, value: "4.8/5", label: "note globale" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute top-1/3 left-0 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-5 py-2 text-sm font-semibold mb-8 border border-primary/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Conciergerie premium à Cannes
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-8xl font-bold leading-[1.05] mb-6 tracking-tight"
        >
          On gère vos <span className="text-primary italic font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>locations</span> &{" "}
          <br className="hidden md:block" />
          vous fait <span className="text-primary italic font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>gagner plus</span>,{" "}
          <br className="hidden md:block" />
          les pieds dans{" "}
          <span className="relative inline-block">
            l'eau.
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ transformOrigin: "left" }}
            />
          </span>
        </motion.h1>

        {/* Sub headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
        >
          Conciergerie haut de gamme pour propriétaires exigeants. Accueil voyageurs, ménage, linge, optimisation tarifaire — on s'occupe de tout, vous récoltez les résultats.
        </motion.p>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-4xl mb-10"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="relative group bg-card/80 backdrop-blur-sm rounded-2xl p-4 border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary" size={20} />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-10"
        >
          <Button asChild size="lg" className="rounded-full px-10 py-6 font-bold text-base gap-2 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300">
            <a href="https://wa.link/madr38" target="_blank" rel="noopener noreferrer">
              💬 Nous écrire sur WhatsApp <ArrowRight size={18} />
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost" className="rounded-full px-8 py-6 font-semibold text-base text-muted-foreground hover:text-foreground gap-2">
            <a href="tel:+33768036995">
              📞 Nous appeler
            </a>
          </Button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center gap-4 bg-muted/50 rounded-full px-6 py-3 border border-border/50"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-background flex items-center justify-center text-[10px] font-bold text-primary">
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <div className="h-6 w-px bg-border" />
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className="fill-primary text-primary" />
            ))}
          </div>
          <p className="text-sm font-medium text-muted-foreground">
            <span className="text-foreground font-bold">+200</span> propriétaires satisfaits
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
