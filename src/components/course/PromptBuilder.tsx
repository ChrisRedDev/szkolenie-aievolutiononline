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
    <section className="relative section-spacing px-6 section-gradient-magenta-deep overflow-hidden">
      {/* Decorative glow orbs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="icon-container w-16 h-16 mx-auto mb-6">
            <Bot className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prompt Builder AI – <span className="text-gradient-full">GPT + Gemini</span>
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Dedykowany agent AI oparty o GPT oraz Gemini, który generuje gotowe prompty dla użytkownika.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-slate-800/60 backdrop-blur-sm p-6 text-center animate-fade-up rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-300"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center border border-accent/20">
                <step.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-white/60">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Capabilities & Types */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800/60 backdrop-blur-sm p-8 animate-fade-up delay-200 rounded-2xl border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-6">
              Co agent potrafi rozpoznać?
            </h3>
            <ul className="space-y-3">
              {capabilities.map((capability, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="p-1.5 bg-accent/20 rounded-lg">
                    <Check className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-white/80">{capability}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-sm p-8 animate-fade-up delay-300 rounded-2xl border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-6">
              Typy generowanych promptów
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {promptTypes.map((type, index) => (
                <div 
                  key={index}
                  className="p-3 bg-slate-700/50 rounded-xl text-center border border-white/10 hover:border-accent/30 hover:bg-slate-700/70 transition-all duration-200"
                >
                  <p className="text-sm font-medium text-white">{type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 mb-12 text-center animate-fade-up delay-400">
          <p className="text-white">
            <span className="font-semibold text-accent">Prompt Builder zwraca gotowe prompty</span>, które generują obrazy w Freepik z jednym kliknięciem.
          </p>
        </div>

        {/* Agent Buttons */}
        <div className="text-center animate-fade-up delay-500">
          <h3 className="text-xl font-semibold text-white mb-6">
            Agenci AI Workflow
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Button 
              asChild 
              size="lg" 
              className="btn-primary h-12 group"
            >
              <a href="https://gemini.google.com/gem/1N_bDMpbu0uDf0tsYPrEI6XIHRYT9PTfQ?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                Gemini Workflow Agent
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              className="bg-slate-800/80 border border-primary/50 text-white hover:bg-primary hover:text-white h-12 group"
            >
              <a href="https://chatgpt.com/g/g-691f773244d48191b239aa8fccbd7ab4-ai-evolution-agent-frepik-workflow" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                ChatGPT Workflow Agent
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          <p className="text-sm text-white/50 mt-6 max-w-md mx-auto">
            Warto testować oba modele, aby znaleźć najlepsze rozwiązanie dla Twoich potrzeb.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromptBuilder;