import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const PromptDatabase = () => {
  return (
    <section className="py-16 px-4 border-t border-primary/20 bg-gradient-radial relative overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 backdrop-blur-sm border border-primary/20 shadow-lg shadow-primary/10">
          <FileText className="w-12 h-12 mx-auto mb-4 text-primary animate-pulse" />
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Baza Promptów - Przykłady
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Gotowe szablony i przykłady promptów do generowania grafik produktowych
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
            asChild
          >
            <a
              href="https://docs.google.com/spreadsheets/d/1z1KW50HNLgLKkIWiBNau00D-ZV2U_Ur7/edit?usp=drive_link&ouid=109518685507903203294&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Otwórz Bazę Promptów
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromptDatabase;
