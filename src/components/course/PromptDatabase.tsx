import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";

const PromptDatabase = () => {
  return (
    <section className="py-16 px-6 bg-section-gradient">
      <div className="max-w-3xl mx-auto text-center animate-fade-up">
        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg">
          <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Baza Promptów - <span className="text-gradient">Przykłady</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Gotowe szablony i przykłady promptów do generowania grafik produktowych
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground btn-glow h-14 px-8 text-base group"
            asChild
          >
            <a
              href="https://docs.google.com/spreadsheets/d/1z1KW50HNLgLKkIWiBNau00D-ZV2U_Ur7/edit?usp=drive_link&ouid=109518685507903203294&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Otwórz Bazę Promptów
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromptDatabase;
