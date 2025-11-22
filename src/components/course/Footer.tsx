import { Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a 
              href="https://ai-evolution.pl/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent mb-2 hover:opacity-80 transition-opacity">
                AI Evolution Polska
              </h3>
            </a>
            <p className="text-sm text-muted-foreground">
              Zaawansowana Automatyzacja Contentu AI
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://www.facebook.com/groups/1322215268929827" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span className="text-sm">Grupa FB</span>
            </a>
            
            <a 
              href="mailto:kontakt@aievolution.pl"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">Kontakt</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            © 2024 AI Evolution Polska. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
