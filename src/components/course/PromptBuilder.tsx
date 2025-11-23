import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Zap, Target, ExternalLink } from "lucide-react";

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
    <section className="py-20 px-6 bg-gradient-glow bg-grid-small relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
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
          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-6 backdrop-blur-sm border border-primary/20 shadow-lg shadow-primary/10 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold">Krok 1</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Wrzuć zdjęcie produktu do systemu
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-6 backdrop-blur-sm border border-primary/20 shadow-lg shadow-primary/10 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold">Krok 2</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Agent analizuje kształt i dopasowuje model
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-6 backdrop-blur-sm border border-primary/20 shadow-lg shadow-primary/10 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold">Krok 3</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Otrzymujesz 20-40 gotowych promptów
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 backdrop-blur-sm border border-primary/20 shadow-lg shadow-primary/10">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Co agent potrafi rozpoznać?
            </h3>
            <div className="space-y-3">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p className="text-sm text-muted-foreground">{capability}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 backdrop-blur-sm border border-primary/20 shadow-lg shadow-primary/10">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Typy generowanych promptów
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {promptTypes.map((type, index) => (
                <div 
                  key={index}
                  className="p-3 bg-card/50 backdrop-blur-sm rounded-lg text-center border border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  <p className="text-sm font-medium">{type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Card className="mt-8 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-primary/30 neon-glow">
          <CardContent className="p-6">
            <p className="text-center text-sm">
              <span className="font-semibold text-primary">Prompt Builder zwraca gotowe prompty</span>, które generują obrazy w Freepik z jednym kliknięciem.
            </p>
          </CardContent>
        </Card>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            Agenci AI Workflow
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 h-auto py-4"
            >
              <a href="https://gemini.google.com/gem/1N_bDMpbu0uDf0tsYPrEI6XIHRYT9PTfQ?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
                <span className="flex items-center gap-2">
                  Gemini Workflow Agent
                  <ExternalLink className="w-5 h-5" />
                </span>
              </a>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 h-auto py-4"
            >
              <a href="https://chatgpt.com/g/g-691f773244d48191b239aa8fccbd7ab4-ai-evolution-agent-frepik-workflow" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
                <span className="flex items-center gap-2">
                  ChatGPT Workflow Agent
                  <ExternalLink className="w-5 h-5" />
                </span>
              </a>
            </Button>
          </div>
          <p className="text-center text-muted-foreground mt-6 text-sm max-w-2xl mx-auto">
            Warto testować jeden i drugi model, aby znaleźć najlepsze rozwiązanie dla Twoich potrzeb.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromptBuilder;
