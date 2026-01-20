import { Facebook, Mail, ExternalLink, Globe } from "lucide-react";
import logo from "@/assets/logo-main.png";

const Footer = () => {
  return (
    <footer className="relative py-16 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
      
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
              AI Evolution Polska
            </h3>
            <p className="text-white/60 font-medium leading-relaxed">
              Zaawansowana Automatyzacja Contentu AI - Twórz nieograniczony content z pomocą sztucznej inteligencji
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-bold text-white mb-4">Linki</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="https://ai-evolution.pl/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white/70 hover:text-primary transition-colors font-medium group"
              >
                <Globe className="w-4 h-4" />
                Strona główna
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://www.facebook.com/groups/1322215268929827" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white/70 hover:text-primary transition-colors font-medium group"
              >
                <Facebook className="w-4 h-4" />
                Grupa Facebook
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-bold text-white mb-4">Kontakt</h4>
            <a 
              href="mailto:kontakt@aievolution.pl"
              className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium group"
            >
              <Mail className="w-4 h-4" />
              kontakt@aievolution.pl
            </a>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10" />

        {/* Bottom */}
        <div className="flex flex-col items-center gap-6">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img 
              src={logo} 
              alt="AI Evolution Polska Logo" 
              className="relative h-20 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          </div>
          <p className="text-sm text-white/50 font-medium">
            © 2025 AI Evolution Polska. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
