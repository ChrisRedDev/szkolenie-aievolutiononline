import { Button } from "@/components/ui/button";
import { Bot, Zap, Target, ExternalLink, Check } from "lucide-react";

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

  const steps = [
    { icon: Zap, title: "Krok 1", description: "Wrzuć zdjęcie produktu do systemu" },
    { icon: Bot, title: "Krok 2", description: "Agent analizuje kształt i dopasowuje model" },
    { icon: Target, title: "Krok 3", description: "Otrzymujesz 20-40 gotowych promptów" },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Bot className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prompt Builder AI – <span className="text-gradient">GPT + Gemini</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dedykowany agent AI oparty o GPT oraz Gemini, który generuje gotowe prompty dla użytkownika.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 border border-border shadow-md card-hover text-center animate-fade-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Capabilities & Types */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg animate-fade-up delay-200">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Co agent potrafi rozpoznać?
            </h3>
            <ul className="space-y-3">
              {capabilities.map((capability, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="p-1 bg-secondary/10 rounded-full">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-muted-foreground">{capability}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg animate-fade-up delay-300">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Typy generowanych promptów
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {promptTypes.map((type, index) => (
                <div 
                  key={index}
                  className="p-3 bg-muted/50 rounded-xl text-center border border-border hover:border-primary/50 transition-colors"
                >
                  <p className="text-sm font-medium text-foreground">{type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-12 text-center animate-fade-up delay-400">
          <p className="text-foreground">
            <span className="font-semibold text-primary">Prompt Builder zwraca gotowe prompty</span>, które generują obrazy w Freepik z jednym kliknięciem.
          </p>
        </div>

        {/* Agent Buttons */}
        <div className="text-center animate-fade-up delay-500">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Agenci AI Workflow
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground btn-glow h-14 text-base group"
            >
              <a href="https://gemini.google.com/gem/1N_bDMpbu0uDf0tsYPrEI6XIHRYT9PTfQ?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                Gemini Workflow Agent
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-14 text-base group"
            >
              <a href="https://chatgpt.com/g/g-691f773244d48191b239aa8fccbd7ab4-ai-evolution-agent-frepik-workflow" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                ChatGPT Workflow Agent
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6 max-w-md mx-auto">
            Warto testować oba modele, aby znaleźć najlepsze rozwiązanie dla Twoich potrzeb.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromptBuilder;
