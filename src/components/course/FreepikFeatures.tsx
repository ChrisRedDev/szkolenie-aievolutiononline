import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Infinity, ExternalLink } from "lucide-react";

const FreepikFeatures = () => {
  return (
    <section className="py-20 px-6 bg-gradient-glow bg-grid-small relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
          Co daje nam narzędzie Freepik i subsrypcja Premium+
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Poznaj możliwości Freepik Workspace i dowiedz się, dlaczego Premium+ to klucz do tego kursu
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 backdrop-blur-sm border border-primary/20 shadow-lg shadow-primary/10 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Freepik Premium+ Overview
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">Dostęp do Unlimited Image Generation</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">Brak limitów na generowanie zdjęć</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">Brak zużycia kredytów</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">Dostęp do wielu modeli ai</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">Brak znaków wodnych</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">Dostęp do modeli ai video</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 backdrop-blur-sm border border-primary/20 shadow-lg shadow-primary/10 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-secondary/20 rounded-lg">
                <Infinity className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Dlaczego Unlimited ma znaczenie?
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                <p className="text-muted-foreground">Kurs opiera się na generowaniu dużej ilości wizualizacji</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                <p className="text-muted-foreground">Potrzebujemy nieograniczonych generacji</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                <p className="text-muted-foreground">Freepik daje możliwość do produkcji kontentu w ogromnej skali</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                <p className="text-muted-foreground">
                  Każdy uczestnik kursu musi mieć Premium+, aby workflow działało poprawnie
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-blue/80 hover:to-neon-purple/80 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Przejdź do Freepik
              <ExternalLink className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FreepikFeatures;
