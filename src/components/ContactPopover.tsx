import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

const ContactPopover = ({ variant = "default" }: { variant?: "default" | "nav" }) => {
  const isNav = variant === "nav";

  return (
    <Popover>
      <PopoverTrigger asChild>
        {isNav ? (
          <Button className="rounded-full px-6 font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all gap-2">
            Nous contacter
          </Button>
        ) : (
          <Button size="lg" className="rounded-full px-10 py-6 font-bold text-base gap-2 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300">
            Nous contacter <ArrowRight size={18} />
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-64 p-3" align="center">
        <div className="flex flex-col gap-2">
          <a
            href="https://wa.link/madr38"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-primary/10 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
              <MessageCircle className="text-green-600" size={20} />
            </div>
            <div>
              <p className="font-semibold text-sm">WhatsApp</p>
              <p className="text-xs text-muted-foreground">Réponse rapide</p>
            </div>
          </a>
          <a
            href="tel:+33768036995"
            className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-primary/10 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone className="text-primary" size={20} />
            </div>
            <div>
              <p className="font-semibold text-sm">Appeler</p>
              <p className="text-xs text-muted-foreground">+33 7 68 03 69 95</p>
            </div>
          </a>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ContactPopover;
