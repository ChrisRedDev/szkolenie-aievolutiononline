import { 
  Layers, 
  ImageIcon, 
  Film, 
  FileText, 
  Sparkles, 
  RefreshCw, 
  ArrowUpCircle, 
  Workflow,
  BrainCircuit,
  Zap,
  MousePointer2,
  Play,
  RotateCcw
} from "lucide-react";

const FreepikSpaces = () => {
  const educationCards = [
    {
      icon: Layers,
      title: "Jedno miejsce pracy",
      description: "Zamiast wielu kart i narzędzi pracujesz na jednym canvasie.",
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: Workflow,
      title: "Węzły i połączenia",
      description: "Budujesz procesy z klocków połączonych w jeden system.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Sparkles,
      title: "AI Assistant",
      description: "Asystent rozumie kontekst i pomaga rozwijać pomysły.",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: RefreshCw,
      title: "Generowanie i iteracja",
      description: "Jednym kliknięciem aktualizujesz cały workflow.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: ArrowUpCircle,
      title: "Upscaling jakości",
      description: "Poprawiasz jakość obrazu bez niszczenia detali.",
      color: "from-pink-500 to-rose-600"
    }
  ];

  const workflowSteps = [
    { icon: MousePointer2, label: "Dodaj węzły", sublabel: "tekst • obraz • wideo" },
    { icon: Workflow, label: "Połącz je", sublabel: "w logiczny proces" },
    { icon: Play, label: "Uruchom", sublabel: "jednym kliknięciem" },
    { icon: RotateCcw, label: "Iteruj", sublabel: "rozwijaj system" }
  ];

  return (
    <section className="relative section-spacing px-6 section-gradient-cyan-deep overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-secondary/5 to-transparent rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-secondary/20">
            <Zap className="w-4 h-4 text-secondary" />
            <span className="text-secondary">Workflow Automation</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Freepik Spaces: <span className="text-gradient-cyan">Automatyzacja contentu</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Jedno nieskończone płótno, na którym łączysz tekst, obrazy i wideo w logiczne workflow.
          </p>
        </div>

        {/* Visual Canvas - New Design */}
        <div className="mb-16 animate-fade-up delay-100">
          <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] rounded-3xl" />
            
            {/* Canvas Nodes */}
            <div className="relative flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {/* Text Node */}
              <div className="group flex flex-col items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-violet-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all duration-300 border-2 border-white/20">
                    <FileText className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </div>
                </div>
                <span className="text-sm font-semibold text-white/90 bg-slate-800/80 px-3 py-1 rounded-full border border-white/10">Tekst</span>
              </div>

              {/* Animated Connection */}
              <div className="hidden md:flex items-center gap-1">
                <div className="w-8 h-0.5 bg-gradient-to-r from-violet-500/80 to-cyan-500/80 rounded-full" />
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-500/50" />
                <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500/80 to-cyan-500/80 rounded-full" />
              </div>

              {/* Image Node */}
              <div className="group flex flex-col items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all duration-300 border-2 border-white/20">
                    <ImageIcon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </div>
                </div>
                <span className="text-sm font-semibold text-white/90 bg-slate-800/80 px-3 py-1 rounded-full border border-white/10">Obraz</span>
              </div>

              {/* Animated Connection */}
              <div className="hidden md:flex items-center gap-1">
                <div className="w-6 h-0.5 bg-gradient-to-r from-cyan-500/80 to-amber-500/80 rounded-full" />
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-amber-400 animate-pulse shadow-lg" />
                <div className="w-6 h-0.5 bg-gradient-to-r from-amber-500/80 to-amber-500/80 rounded-full" />
              </div>

              {/* AI Central Node */}
              <div className="group flex flex-col items-center gap-3 mx-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/40 via-cyan-500/40 to-amber-500/40 rounded-3xl blur-2xl animate-pulse" style={{ animationDuration: '3s' }} />
                  <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br from-violet-500 via-cyan-500 to-amber-500 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300 border-2 border-white/30 ring-4 ring-white/10">
                    <BrainCircuit className="w-14 h-14 md:w-16 md:h-16 text-white drop-shadow-lg" />
                  </div>
                </div>
                <span className="text-sm font-bold text-white bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-1.5 rounded-full shadow-lg">AI Engine</span>
              </div>

              {/* Animated Connection */}
              <div className="hidden md:flex items-center gap-1">
                <div className="w-6 h-0.5 bg-gradient-to-r from-amber-500/80 to-amber-500/80 rounded-full" />
                <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse shadow-lg shadow-amber-500/50" />
                <div className="w-6 h-0.5 bg-gradient-to-r from-amber-500/80 to-rose-500/80 rounded-full" />
              </div>

              {/* Video Node */}
              <div className="group flex flex-col items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all duration-300 border-2 border-white/20">
                    <Film className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </div>
                </div>
                <span className="text-sm font-semibold text-white/90 bg-slate-800/80 px-3 py-1 rounded-full border border-white/10">Wideo</span>
              </div>
            </div>

            {/* Canvas Label */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 bg-slate-900/95 rounded-full text-sm text-white/80 shadow-xl border border-white/10 backdrop-blur-sm flex items-center gap-2">
              <span className="text-lg">∞</span>
              <span>Nieskończone płótno</span>
            </div>
          </div>
        </div>

        {/* Education Cards - New Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {educationCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-secondary/30 transition-all duration-300 animate-fade-up overflow-hidden"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Card glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                
                <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Workflow Steps - New Horizontal Design */}
        <div className="animate-fade-up delay-300">
          <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
            <h3 className="text-xl font-bold text-white text-center mb-8">
              Jak to działa
            </h3>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
              {workflowSteps.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <div key={index} className="flex items-center flex-1">
                    <div className="flex flex-col items-center text-center flex-1">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-electric-blue/20 border border-secondary/30 flex items-center justify-center text-secondary shadow-lg mb-3 group-hover:scale-110 transition-transform">
                        <StepIcon className="w-7 h-7" />
                      </div>
                      <h4 className="font-semibold text-white text-sm mb-1">{step.label}</h4>
                      <p className="text-xs text-white/50">{step.sublabel}</p>
                    </div>
                    {index < workflowSteps.length - 1 && (
                      <div className="hidden md:flex items-center px-2">
                        <div className="w-full h-px bg-gradient-to-r from-secondary/50 via-secondary/30 to-transparent min-w-[40px]" />
                        <div className="w-0 h-0 border-l-4 border-l-secondary/50 border-y-4 border-y-transparent" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreepikSpaces;