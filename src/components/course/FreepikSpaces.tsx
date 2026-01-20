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
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-slate-50 via-violet-50/50 to-indigo-50/30">
      {/* Light violet accent orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-violet-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-100/20 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Freepik Spaces: <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Automatyzacja tworzenia contentu</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Jedno nieskończone płótno, na którym łączysz tekst, obrazy i wideo w logiczne workflow.
          </p>
        </div>

        {/* Visual Canvas Representation */}
        <div className="mb-20 animate-fade-up delay-100">
          <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-violet-100 shadow-xl shadow-violet-100/50">
            {/* Canvas mockup with nodes */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {/* Text Node */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-200 transform hover:scale-105 transition-transform">
                  <Type className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <span className="text-xs md:text-sm font-medium text-slate-600">Tekst</span>
              </div>

              {/* Connecting line */}
              <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse" />

              {/* Image Node */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shadow-lg shadow-cyan-200 transform hover:scale-105 transition-transform">
                  <Image className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <span className="text-xs md:text-sm font-medium text-slate-600">Obraz</span>
              </div>

              {/* Connecting line */}
              <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full animate-pulse" />

              {/* AI Node */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-200 transform hover:scale-105 transition-transform ring-4 ring-violet-200/50">
                  <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </div>
                <span className="text-xs md:text-sm font-medium text-slate-600">AI</span>
              </div>

              {/* Connecting line */}
              <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full animate-pulse" />

              {/* Video Node */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg shadow-pink-200 transform hover:scale-105 transition-transform">
                  <Video className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <span className="text-xs md:text-sm font-medium text-slate-600">Wideo</span>
              </div>
            </div>

            {/* Infinity canvas hint */}
            <div className="absolute inset-0 pointer-events-none rounded-3xl border-2 border-dashed border-violet-200/50" />
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white rounded-full text-xs text-slate-500 shadow-sm border border-violet-100">
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
                className={`group bg-white/80 backdrop-blur-xl rounded-2xl p-5 border border-violet-100 shadow-lg hover:shadow-xl hover:border-violet-300 transition-all duration-300 animate-fade-up ${index === 4 ? 'col-span-2 lg:col-span-1' : ''}`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-100 to-indigo-100 flex items-center justify-center mb-3 group-hover:from-violet-200 group-hover:to-indigo-200 transition-colors">
                  <Icon className="w-5 h-5 text-violet-600" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* How it works - Steps */}
        <div className="animate-fade-up delay-300">
          <h3 className="text-xl font-bold text-slate-900 text-center mb-10">
            Jak to działa krok po kroku
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center text-center px-4 md:px-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-violet-200 mb-3">
                    {step.number}
                  </div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">{step.title}</h4>
                  <p className="text-xs text-slate-500">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-violet-300 to-indigo-300 rounded-full" />
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
