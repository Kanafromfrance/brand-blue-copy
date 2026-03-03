import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevenueEstimator from "@/components/RevenueEstimator";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = ["Services", "Comment ça marche", "Conciergerie à Cannes", "Secteurs", "Blog", "FAQ"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3">
        <a href="#" className="flex items-center gap-2">
          <motion.img
            src={logo}
            alt="AzulBay"
            className="h-10 sm:h-12 w-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <a
              key={l}
              href={l === "Blog" ? "/blog" : l === "Conciergerie à Cannes" ? "/conciergerie-cannes" : `#${l.toLowerCase().replace(/\s/g, "-")}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {l}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <RevenueEstimator variant="nav" />
        </div>

        <button className="md:hidden relative z-50" onClick={() => setOpen(!open)}>
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border/50"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l, i) => (
                <motion.a
                  key={l}
                  href={l === "Blog" ? "/blog" : l === "Conciergerie à Cannes" ? "/conciergerie-cannes" : `#${l.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {l}
                </motion.a>
              ))}
              <div className="mt-2">
                <RevenueEstimator />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
