import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, BedDouble, Sparkles, CalendarDays, TrendingUp, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const conditions = [
  { value: "neuf", label: "Neuf / Rénové récemment" },
  { value: "bon", label: "Bon état" },
  { value: "moyen", label: "État moyen" },
  { value: "a-renover", label: "À rénover" },
];

const availabilities = [
  { value: "1", label: "1 mois par an" },
  { value: "2", label: "2 mois par an" },
  { value: "3", label: "3 mois par an" },
  { value: "6", label: "6 mois par an" },
  { value: "9", label: "9 mois par an" },
  { value: "12", label: "12 mois par an (toute l'année)" },
];

// Simple revenue estimation based on inputs
function estimateRevenue(rooms: number, condition: string, months: number): { low: number; high: number } {
  // Realistic nightly rate for entire property in Cannes
  const baseRate: Record<string, Record<number, number>> = {
    "neuf":       { 1: 85, 2: 110, 3: 140, 4: 170, 5: 200 },
    "bon":        { 1: 70, 2: 90,  3: 115, 4: 140, 5: 165 },
    "moyen":      { 1: 55, 2: 72,  3: 90,  4: 110, 5: 130 },
    "a-renover":  { 1: 40, 2: 55,  3: 70,  4: 85,  5: 100 },
  };
  const rate = baseRate[condition]?.[rooms] ?? 80;

  // Realistic average occupancy in Cannes
  const occupancy = 0.55;

  const nightsPerMonth = 30;
  const monthlyRevenue = rate * nightsPerMonth * occupancy;
  const annualRevenue = monthlyRevenue * months;

  return {
    low: Math.round(annualRevenue * 0.85),
    high: Math.round(annualRevenue * 1.1),
  };
}

function formatCurrency(n: number) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
}

const ICLOSED_URL = "https://app.iclosed.io/e/infoprofit/appel-de-d-couverte-azulbay";

const IClosedEmbed = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    // Create the iClosed widget div
    const widgetDiv = document.createElement("div");
    widgetDiv.className = "iclosed-widget";
    widgetDiv.setAttribute("data-url", ICLOSED_URL);
    widgetDiv.setAttribute("title", "Appel de découverte AzulBay");
    widgetDiv.style.width = "100%";
    widgetDiv.style.height = "620px";
    containerRef.current.appendChild(widgetDiv);

    // Re-trigger the widget script
    const script = document.createElement("script");
    script.src = "https://app.iclosed.io/assets/widget.js";
    script.async = true;
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full min-h-[620px]" />;
};

const RevenueEstimator = ({ variant = "default" }: { variant?: "default" | "nav" }) => {
  const isNav = variant === "nav";
  const [step, setStep] = useState(0); // 0=form, 1=loading, 2=result, 3=booking
  const [address, setAddress] = useState("");
  const [rooms, setRooms] = useState("");
  const [condition, setCondition] = useState("");
  const [availability, setAvailability] = useState("");
  const [result, setResult] = useState<{ low: number; high: number } | null>(null);
  const [open, setOpen] = useState(false);

  const isValid = address.trim().length > 2 && rooms && condition && availability;

  const handleEstimate = () => {
    if (!isValid) return;
    setStep(1);
    // Simulate calculation delay
    setTimeout(() => {
      const est = estimateRevenue(parseInt(rooms), condition, parseInt(availability));
      setResult(est);
      setStep(2);
    }, 1800);
  };

  const handleReset = () => {
    setStep(0);
    setResult(null);
  };

  const handleOpenChange = (v: boolean) => {
    setOpen(v);
    if (!v) {
      // Reset on close
      setTimeout(handleReset, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {isNav ? (
          <Button className="rounded-full px-6 font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all gap-2">
            <TrendingUp size={16} />
            Estimer mes revenus
          </Button>
        ) : (
          <Button
            size="lg"
            className="rounded-full px-10 py-6 font-bold text-base gap-2 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
          >
            Estimer mes revenus <ArrowRight size={18} />
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className={`p-0 overflow-hidden border-border/50 gap-0 ${step === 3 ? "sm:max-w-2xl" : "sm:max-w-lg"}`}>
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="p-6 sm:p-8"
            >
              {/* Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-semibold mb-3">
                  <Sparkles size={12} />
                  Estimation gratuite
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Combien pourrait rapporter votre bien ?
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Estimez vos revenus locatifs avec la gestion AzulBay.
                </p>
              </div>

              {/* Form fields */}
              <div className="space-y-4">
                {/* Address */}
                <div className="space-y-1.5">
                  <Label htmlFor="address" className="text-sm font-medium flex items-center gap-1.5">
                    <MapPin size={14} className="text-primary" />
                    Adresse du bien
                  </Label>
                  <Input
                    id="address"
                    placeholder="Ex: 42 Boulevard de la Croisette, Cannes"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="h-11"
                  />
                </div>

                {/* Rooms */}
                <div className="space-y-1.5">
                  <Label htmlFor="rooms" className="text-sm font-medium flex items-center gap-1.5">
                    <BedDouble size={14} className="text-primary" />
                    Nombre de chambres
                  </Label>
                  <Select value={rooms} onValueChange={setRooms}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Studio / 1 chambre</SelectItem>
                      <SelectItem value="2">2 chambres</SelectItem>
                      <SelectItem value="3">3 chambres</SelectItem>
                      <SelectItem value="4">4 chambres</SelectItem>
                      <SelectItem value="5">5+ chambres</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Condition */}
                <div className="space-y-1.5">
                  <Label htmlFor="condition" className="text-sm font-medium flex items-center gap-1.5">
                    <Sparkles size={14} className="text-primary" />
                    État du logement
                  </Label>
                  <Select value={condition} onValueChange={setCondition}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      {conditions.map((c) => (
                        <SelectItem key={c.value} value={c.value}>
                          {c.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Availability */}
                <div className="space-y-1.5">
                  <Label htmlFor="availability" className="text-sm font-medium flex items-center gap-1.5">
                    <CalendarDays size={14} className="text-primary" />
                    Disponibilité du logement
                  </Label>
                  <Select value={availability} onValueChange={setAvailability}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Combien de mois par an ?" />
                    </SelectTrigger>
                    <SelectContent>
                      {availabilities.map((a) => (
                        <SelectItem key={a.value} value={a.value}>
                          {a.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Submit */}
              <Button
                onClick={handleEstimate}
                disabled={!isValid}
                className="w-full mt-6 h-12 rounded-xl font-bold text-base gap-2 shadow-lg shadow-primary/20"
              >
                Estimer mes revenus <ArrowRight size={18} />
              </Button>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-8 sm:p-12 flex flex-col items-center justify-center min-h-[320px]"
            >
              <Loader2 size={40} className="text-primary animate-spin mb-4" />
              <p className="text-lg font-semibold text-foreground">Analyse en cours…</p>
              <p className="text-sm text-muted-foreground mt-1">Nous calculons le potentiel de votre bien</p>
            </motion.div>
          )}

          {step === 2 && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8"
            >
              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp size={28} className="text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-1">
                  Votre estimation de revenus
                </h2>
                <p className="text-sm text-muted-foreground">
                  {address}
                </p>
              </div>

              {/* Revenue display */}
              <div className="bg-primary/5 border border-primary/15 rounded-2xl p-6 text-center mb-6">
                <p className="text-sm text-muted-foreground mb-2 font-medium">Revenus annuels estimés</p>
                <p className="text-3xl sm:text-4xl font-bold text-primary">
                  {formatCurrency(result.low)} — {formatCurrency(result.high)}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Soit {formatCurrency(Math.round(result.low / 12))} à {formatCurrency(Math.round(result.high / 12))} / mois
                </p>
              </div>

              {/* Details */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-secondary/50 rounded-xl p-3 text-center">
                  <p className="text-lg font-bold text-foreground">{rooms}</p>
                  <p className="text-[10px] text-muted-foreground">chambre(s)</p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-3 text-center">
                  <p className="text-lg font-bold text-foreground">{availability}</p>
                  <p className="text-[10px] text-muted-foreground">mois/an</p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-3 text-center">
                  <p className="text-lg font-bold text-foreground">55%</p>
                  <p className="text-[10px] text-muted-foreground">taux d'occ.</p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center mb-5">
                * Estimation indicative basée sur les données du marché cannois. Résultats réels variables.
              </p>

              {/* CTAs */}
              <div className="flex flex-col gap-2">
                <Button
                  className="w-full h-12 rounded-xl font-bold text-base gap-2 shadow-lg shadow-primary/20"
                  onClick={() => setStep(3)}
                >
                  Obtenir ces résultats <ArrowRight size={18} />
                </Button>
                <Button
                  variant="ghost"
                  onClick={handleReset}
                  className="text-sm text-muted-foreground"
                >
                  Refaire une estimation
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="booking"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="p-0"
            >
              <IClosedEmbed />
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default RevenueEstimator;
