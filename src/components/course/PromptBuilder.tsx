import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Zap, Target } from "lucide-react";

const PromptBuilder = () => {
  const capabilities = [
    "Typ produktu",
    "Materiał",
    "Kolorystyka",
    "Właściwe otoczenie",
    "Styl, który sprzedaje",
    "Sceny zgodne z rynkiem e-commerce"
  ];

  const promptTypes = [
    "E-commerce",
    "Social Media",
    "Allegro Miniatury",
    "Reklamy",
    "Mockupy",
    "Styl Lifestyle",
    "Styl Studio",
    "Styl w białym tle"
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl neon-glow">
              <Bot className="w-12 h-12" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            Prompt Builder AI – GPT + Gemini
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Stworzyliśmy dedykowanego agenta AI opartego o GPT oraz Gemini, który generuje gotowe prompty dla użytkownika.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 neon-glow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Krok 1</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Wrzuć zdjęcie produktu do systemu
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 neon-glow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Krok 2</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Agent analizuje kształt i dopasowuje model
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 neon-glow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Krok 3</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Otrzymujesz 20-40 gotowych promptów
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card border-border/50 neon-glow">
            <CardHeader>
              <CardTitle className="text-xl">Co agent potrafi rozpoznać?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p className="text-sm text-muted-foreground">{capability}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50 neon-glow">
            <CardHeader>
              <CardTitle className="text-xl">Typy generowanych promptów</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {promptTypes.map((type, index) => (
                  <div 
                    key={index}
                    className="p-3 bg-muted/50 rounded-lg text-center border border-border/50 hover:border-primary/50 transition-all duration-300"
                  >
                    <p className="text-sm font-medium">{type}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-primary/30 neon-glow">
          <CardContent className="p-6">
            <p className="text-center text-sm">
              <span className="font-semibold text-primary">Prompt Builder zwraca gotowe prompty</span>, które generują obrazy w Freepik z jednym kliknięciem.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PromptBuilder;
