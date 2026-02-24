import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Services", "Comment ça marche", "Secteurs", "À propos", "FAQ"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-6 py-4 gap-3">
        <div className="flex items-center justify-between w-full md:justify-center">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="AzulBay" className="h-16 w-auto" />
          </a>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s/g, "-")}`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l}
            </a>
          ))}
          <Button className="rounded-full px-6 font-semibold">
            Nous contacter
          </Button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s/g, "-")}`} className="text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <Button className="rounded-full w-full font-semibold">Nous contacter</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
