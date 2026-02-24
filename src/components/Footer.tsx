import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-foreground text-background py-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div>
          <img src={logo} alt="AzulBay" className="h-10 mb-4 brightness-0 invert" />
          <p className="text-sm opacity-70">Les experts de la conciergerie en France.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4 font-sans text-sm uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li>Gestion locative</li>
            <li>Conciergerie</li>
            <li>Ménage & linge</li>
            <li>Optimisation revenus</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 font-sans text-sm uppercase tracking-wider">Entreprise</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li>À propos</li>
            <li>Partenaires</li>
            <li>Blog</li>
            <li>Carrières</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 font-sans text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li>contact@azulbay.fr</li>
            <li>01 23 45 67 89</li>
            <li>Paris, France</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/20 pt-6 text-center text-sm opacity-50">
        © 2026 AzulBay. Tous droits réservés.
      </div>
    </div>
  </footer>
);

export default Footer;
