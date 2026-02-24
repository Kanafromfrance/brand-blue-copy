import { motion } from "framer-motion";
import { Star, TrendingUp, Shield, Headphones } from "lucide-react";
import ContactPopover from "@/components/ContactPopover";

const stats = [
  { icon: TrendingUp, value: "40+", label: "logements gérés" },
  { icon: Shield, value: "+33%", label: "de revenus en moyenne" },
  { icon: Headphones, value: "7j/7", label: "support disponible" },
  { icon: Star, value: "4.8/5", label: "note globale" },
];

const letterVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, delay: 0.15 + i * 0.03, ease: "easeOut" as const },
  }),
};

const HeroSection = () => {
  const titleWords = ["On", "gère", "vos"];
  const titleWords2 = ["les", "pieds", "dans"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-primary/8 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, -40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-0 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px]"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-5 py-2 text-sm font-semibold mb-8 border border-primary/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Conciergerie premium à Cannes
        </motion.div>

        {/* Main headline — word-by-word animation */}
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-[1.05] mb-6 tracking-tight overflow-hidden">
          <span className="inline-flex flex-wrap justify-center gap-x-[0.3em]">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              custom={3}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              className="text-primary italic font-bold inline-block"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              locations
            </motion.span>
            <motion.span
              custom={4}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              className="inline-block"
            >
              pour
            </motion.span>
          </span>
          <br className="hidden md:block" />
          <motion.span
            custom={5}
            initial="hidden"
            animate="visible"
            variants={letterVariants}
            className="text-primary italic font-bold inline-block"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            gagner plus
          </motion.span>
          <motion.span
            custom={6}
            initial="hidden"
            animate="visible"
            variants={letterVariants}
            className="inline-block"
          >
            ,
          </motion.span>
          <br className="hidden md:block" />
          <span className="inline-flex flex-wrap justify-center gap-x-[0.3em]">
            {titleWords2.map((word, i) => (
              <motion.span
                key={i}
                custom={7 + i}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              custom={10}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              className="relative inline-block"
            >
              l'eau.
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-[6px] bg-primary rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.span>
          </span>
        </h1>

        {/* Sub headline */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
        >
          Conciergerie haut de gamme pour propriétaires exigeants à Cannes. On s'occupe de tout, vous récoltez les résultats.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <ContactPopover />
        </motion.div>

        {/* Stats — staggered slide-up */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 bg-card/80 backdrop-blur-sm rounded-2xl px-8 py-5 border border-border/50"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.1 + i * 0.12, type: "spring", stiffness: 200 }}
              className="flex items-center gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center"
              >
                <s.icon className="text-primary" size={18} />
              </motion.div>
              <div className="text-left">
                <p className="text-lg font-bold text-foreground leading-tight">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden sm:block h-8 w-px bg-border ml-5" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex items-center gap-4 mt-8"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, x: -10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1.6 + i * 0.08, type: "spring", stiffness: 300 }}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-background flex items-center justify-center text-[10px] font-bold text-primary"
              >
                {String.fromCharCode(64 + i)}
              </motion.div>
            ))}
          </div>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 + i * 0.06 }}
              >
                <Star size={12} className="fill-primary text-primary" />
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1 }}
            className="text-sm font-medium text-muted-foreground"
          >
            <span className="text-foreground font-bold">+200</span> propriétaires satisfaits
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
