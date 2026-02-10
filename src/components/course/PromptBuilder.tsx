import { Button } from "@/components/ui/button";
import { Bot, Zap, Target, ExternalLink, Check, MessageSquare, Repeat } from "lucide-react";

const PromptBuilder = () => {
  const capabilities = [
    "Typ produktu",
    "Materiał",
    "Kolorystyka",
    "Właściwe otoczenie",
    "Styl, który sprzedaje",
    "Sceny zgodne z rynkiem e-commerce"
  ];

  const steps = [
    { icon: Zap, title: "Krok 1", description: "Wrzuć zdjęcie produktu do systemu" },
    { icon: Bot, title: "Krok 2", description: "Agent analizuje kształt i dopasowuje model" },
    { icon: Target, title: "Krok 3", description: "Otrzymujesz 12 gotowych promptów" },
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
        <div className="grid md:grid-cols-3 gap-6 mb-8">
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

        {/* Iteration Step - The "Game Changer" */}
        <div className="mb-16 animate-fade-up delay-200">
          <div className="bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-2xl p-8 border border-white/10 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 animate-pulse">
                <Repeat className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  To jeszcze nie koniec!
                </h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  Po otrzymaniu pierwszych wyników, możesz <strong>rozmawiać z asystentem</strong>.
                  Napisz mu, w jakiej scenerii widzisz swój produkt (np. "na plaży", "w nowoczesnym biurze"),
                  a on wygeneruje dla Ciebie <strong>kolejne 12 dopasowanych promptów</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <div className="bg-slate-800/60 backdrop-blur-sm p-8 animate-fade-up delay-200 rounded-2xl border border-white/10 mb-12">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Co agent potrafi rozpoznać?
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                <div className="p-1.5 bg-accent/20 rounded-lg flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="text-white/80 text-sm font-medium">{capability}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Agent Buttons */}
        <div className="text-center animate-fade-up delay-500">
          <h3 className="text-xl font-semibold text-white mb-6">
            wybierz swojego Agenta
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Gemini - Active */}
            <Button
              asChild
              size="lg"
              className="btn-primary h-14 group relative overflow-hidden"
            >
              <a href="https://gemini.google.com/gem/1N_bDMpbu0uDf0tsYPrEI6XIHRYT9PTfQ?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  Gemini Workflow Agent
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              className="btn-primary h-14 group relative overflow-hidden"
            >
              <a href="https://chatgpt.com/g/g-691f773244d48191b239aa8fccbd7ab4-freepik-prompt-generator-ai-evolution-agent" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  ChatGPT Workflow Agent
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </Button>
          </div>
          <p className="text-sm text-white/40 mt-6 max-w-md mx-auto">
            Wybierz agenta, z którym wolisz pracować. Oba realizują ten sam workflow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromptBuilder;