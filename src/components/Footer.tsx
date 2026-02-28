import logo from "@/assets/logo.png";
import ContactPopover from "@/components/ContactPopover";

const Footer = () => (
  <footer className="bg-foreground text-background py-12 sm:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-10 sm:mb-12">
        <div>
          <img src={logo} alt="AzulBay" className="h-8 sm:h-10 mb-4 brightness-0 invert" />
          <p className="text-xs sm:text-sm opacity-70">Les experts de la conciergerie à Cannes.</p>
        </div>
        <div>
          <h4 className="font-bold mb-3 sm:mb-4 font-sans text-xs sm:text-sm uppercase tracking-wider">Services</h4>
          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm opacity-70">
            <li>Gestion locative</li>
            <li>Conciergerie</li>
            <li>Ménage & linge</li>
            <li>Optimisation revenus</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3 sm:mb-4 font-sans text-xs sm:text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm opacity-70">
            <li>+33 7 68 03 69 95</li>
            <li>Cannes, France</li>
          </ul>
          <div className="mt-4">
            <ContactPopover variant="nav" />
          </div>
        </div>
      </div>
      <div className="border-t border-background/20 pt-4 sm:pt-6 text-center text-xs sm:text-sm opacity-50">
        © 2026 AzulBay. Tous droits réservés.
      </div>
    </div>
  </footer>
);

export default Footer;
