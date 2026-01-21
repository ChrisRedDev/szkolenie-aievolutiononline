import { 
  Layers, 
  Image, 
  Video, 
  Type, 
  Sparkles, 
  RefreshCw, 
  ArrowUpCircle, 
  Workflow
} from "lucide-react";

const FreepikSpaces = () => {
  const educationCards = [
    {
      icon: Layers,
      title: "Jedno miejsce pracy",
      description: "Zamiast wielu kart i narzędzi pracujesz na jednym canvasie. Wszystko widzisz na raz."
    },
    {
      icon: Workflow,
      title: "Węzły i połączenia",
      description: "Budujesz procesy z klocków. Tekst, obraz, wideo i AI są połączone w jeden system."
    },
    {
      icon: Sparkles,
      title: "AI Assistant",
      description: "Asystent rozumie kontekst i pomaga rozwijać pomysły. Może zmieniać prompt obrazu w prompt wideo."
    },
    {
      icon: RefreshCw,
      title: "Generowanie i iteracja",
      description: "Zmieniasz jeden element i jednym kliknięciem aktualizujesz cały workflow."
    },
    {
      icon: ArrowUpCircle,
      title: "Upscaling jakości",
      description: "Poprawiasz jakość obrazu bez niszczenia detali albo twórczo dodajesz nowe."
    }
  ];

  const steps = [
    { number: "1", title: "Dodajesz węzły", description: "tekst, obraz, wideo" },
    { number: "2", title: "Łączysz je", description: "w logiczny proces" },
    { number: "3", title: "Uruchamiasz", description: "jednym kliknięciem" },
    { number: "4", title: "Iterujesz", description: "i rozwijasz system" }
  ];

  return (
    <section className="relative section-spacing px-6 section-gradient-cyan-deep overflow-hidden">
      {/* Decorative glow orbs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Freepik Spaces: <span className="text-gradient">Automatyzacja tworzenia contentu</span>
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            Jedno nieskończone płótno, na którym łączysz tekst, obrazy i wideo w logiczne workflow.
          </p>
        </div>

        {/* Visual Canvas Representation */}
        <div className="mb-20 animate-fade-up delay-100">
          <div className="relative saas-card p-8 md:p-12">
            {/* Canvas mockup with nodes */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {/* Text Node */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg glow-violet transform hover:scale-105 transition-transform">
                  <Type className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <span className="text-xs md:text-sm font-medium text-white/60">Tekst</span>
              </div>

              {/* Connecting line */}
              <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full" />

              {/* Image Node */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-secondary to-electric-blue flex items-center justify-center shadow-lg glow-cyan transform hover:scale-105 transition-transform">
                  <Image className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <span className="text-xs md:text-sm font-medium text-white/60">Obraz</span>
              </div>

              {/* Connecting line */}
              <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-secondary/50 to-amber/50 rounded-full" />

              {/* AI Node */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform ring-4 ring-white/10">
                  <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </div>
                <span className="text-xs md:text-sm font-medium text-white/60">AI</span>
              </div>

              {/* Connecting line */}
              <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-accent/50 to-amber/50 rounded-full" />

              {/* Video Node */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-amber to-gold-orange flex items-center justify-center shadow-lg glow-amber transform hover:scale-105 transition-transform">
                  <Video className="w-8 h-8 md:w-10 md:h-10 text-slate-900" />
                </div>
                <span className="text-xs md:text-sm font-medium text-white/60">Wideo</span>
              </div>
            </div>

            {/* Infinity canvas hint */}
            <div className="absolute inset-0 pointer-events-none rounded-xl border-2 border-dashed border-white/10" />
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-slate-900 rounded-full text-xs text-white/60 shadow-sm border border-white/10">
              ∞ Nieskończone płótno
            </div>
          </div>
        </div>

        {/* Education Cards - Balanced 5-card grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
          {educationCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className={`saas-card p-5 animate-fade-up ${index === 4 ? 'col-span-2 lg:col-span-1' : ''}`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="icon-container-cyan w-10 h-10 mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* How it works - Steps */}
        <div className="animate-fade-up delay-300">
          <h3 className="text-xl font-bold text-white text-center mb-10">
            Jak to działa krok po kroku
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center text-center px-4 md:px-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-electric-blue flex items-center justify-center text-white font-bold text-lg shadow-lg glow-cyan mb-3">
                    {step.number}
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">{step.title}</h4>
                  <p className="text-xs text-white/50">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-secondary/30 to-transparent rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreepikSpaces;