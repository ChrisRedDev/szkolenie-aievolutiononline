import { Facebook, Mail, ExternalLink } from "lucide-react";
import logo from "@/assets/logo-main.png";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a 
              href="https://ai-evolution.pl/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors group"
            >
              AI Evolution Polska
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Zaawansowana Automatyzacja Contentu AI
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://www.facebook.com/groups/1322215268929827" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors icon-hover"
            >
              <Facebook className="w-5 h-5" />
              <span className="text-sm font-medium">Grupa FB</span>
            </a>
            
            <a 
              href="mailto:kontakt@aievolution.pl"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors icon-hover"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm font-medium">Kontakt</span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <div className="flex justify-center mb-6">
            <img 
              src={logo} 
              alt="AI Evolution Polska Logo" 
              className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 AI Evolution Polska. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
