import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import ContactPopover from "@/components/ContactPopover";

const Footer = () => (
  <footer className="bg-foreground text-background py-12 sm:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-10 sm:mb-12">
        <div>
          <Link to="/">
            <img src={logo} alt="AzulBay — Conciergerie Airbnb à Cannes" className="h-8 sm:h-10 mb-4 brightness-0 invert" />
          </Link>
          <p className="text-xs sm:text-sm opacity-70">Les experts de la conciergerie à Cannes.</p>
        </div>
        <div>
          <h4 className="font-bold mb-3 sm:mb-4 font-sans text-xs sm:text-sm uppercase tracking-wider">Services</h4>
          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm opacity-70">
            <li><a href="/#services" className="hover:opacity-100 transition-opacity">Gestion locative</a></li>
            <li><a href="/#comment-ça-marche" className="hover:opacity-100 transition-opacity">Conciergerie</a></li>
            <li><a href="/#offres" className="hover:opacity-100 transition-opacity">Nos offres</a></li>
            <li><a href="/#secteurs" className="hover:opacity-100 transition-opacity">Nos secteurs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3 sm:mb-4 font-sans text-xs sm:text-sm uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm opacity-70">
            <li><Link to="/blog" className="hover:opacity-100 transition-opacity">Blog</Link></li>
            <li><a href="/#à-propos" className="hover:opacity-100 transition-opacity">À propos</a></li>
            <li><a href="/#faq" className="hover:opacity-100 transition-opacity">FAQ</a></li>
          </ul>
          <div className="mt-4">
            <ContactPopover variant="nav" />
          </div>
        </div>
      </div>
      <div className="border-t border-background/20 pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm opacity-50">
        <span>© 2026 AzulBay. Tous droits réservés.</span>
        <div className="flex gap-4">
          <a href="/#services">Services</a>
          <Link to="/blog">Blog</Link>
          <a href="/#faq">FAQ</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
