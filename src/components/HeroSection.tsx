import { motion } from "framer-motion";
import { Star, TrendingUp, Shield, Headphones } from "lucide-react";
import ContactPopover from "@/components/ContactPopover";
import heroHeaderVideo from "@/assets/hero-header-video.mp4";

const stats = [
  { icon: TrendingUp, value: "40+", label: "logements gérés" },
  { icon: Shield, value: "+33%", label: "de revenus en moyenne" },
  { icon: Headphones, value: "7j/7", label: "support disponible" },
  { icon: Star, value: "4.8/5", label: "note globale" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Video background */}
      <div className="absolute inset-0 -z-10">
        <video
          key={heroHeaderVideo}
          src={heroHeaderVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/45" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 border border-primary/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Conciergerie premium à Cannes
        </motion.div>

        {/* Main headline — simple fade-up, no per-letter 3D */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-[1.08] mb-6 tracking-tight will-change-transform"
        >
          On gère vos{" "}
          <span
            className="text-primary italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            propriétés
          </span>{" "}
          pour
          <br className="hidden md:block" />
          <span
            className="text-primary italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {" "}gagner plus
          </span>
          ,
          <br className="hidden md:block" />
          les pieds dans{" "}
          <span className="relative inline-block">
            l'eau.
            <motion.span
              className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-[4px] sm:h-[6px] bg-primary rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              style={{ transformOrigin: "left" }}
            />
          </span>
        </motion.h1>

        {/* Sub headline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-xl leading-relaxed px-2"
        >
          Conciergerie haut de gamme pour propriétaires exigeants à Cannes. On gère à 100%, vous récoltez les résultats.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mb-10 sm:mb-12"
        >
          <ContactPopover />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-4 bg-card/80 backdrop-blur-sm rounded-2xl px-4 sm:px-8 py-4 sm:py-5 border border-border/50 w-full sm:w-auto"
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
              {i < stats.length - 1 && (
                <div className="hidden sm:block h-8 w-px bg-border ml-3 sm:ml-5" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-background flex items-center justify-center text-[10px] font-bold text-primary"
              >
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
            <span className="text-foreground font-bold">+200</span> propriétaires satisfaits
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
