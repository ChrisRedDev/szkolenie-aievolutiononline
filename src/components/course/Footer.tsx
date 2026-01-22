import { Facebook, Mail, ExternalLink, Globe } from "lucide-react";
import logo from "@/assets/logo-main.png";

const Footer = () => {
  return (
    <footer className="section-spacing px-6 bg-gradient-to-b from-slate-900 via-slate-950 to-black border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-3">
              AI Evolution Polska
            </h3>
            <p className="text-white/60 leading-relaxed">
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
                className="inline-flex items-center justify-center gap-2 text-white/60 hover:text-secondary transition-colors font-medium group"
              >
                <Globe className="w-4 h-4" />
                Strona główna
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://fabryka-kontentu.pl/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white/60 hover:text-secondary transition-colors font-medium group"
              >
                <Globe className="w-4 h-4" />
                Fabryka Kontentu
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://www.facebook.com/groups/1322215268929827" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white/60 hover:text-secondary transition-colors font-medium group"
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
              className="inline-flex items-center gap-2 text-white/60 hover:text-secondary transition-colors font-medium group"
            >
              <Mail className="w-4 h-4" />
              kontakt@aievolution.pl
            </a>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-white/10 mb-10" />

        {/* Bottom */}
        <div className="flex flex-col items-center gap-6">
          <img 
            src={logo} 
            alt="AI Evolution Polska Logo" 
            className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
            loading="lazy"
          />
          <p className="text-sm text-white/40">
            © 2025 AI Evolution Polska. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;