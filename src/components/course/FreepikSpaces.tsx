import { Play, Zap, FileText, Image as ImageIcon, Film, MousePointer2, Settings, ArrowRight } from "lucide-react";

const FreepikSpaces = () => {
  return (
    <section className="relative section-spacing px-6 section-gradient-cyan-deep overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-secondary/20">
            <Zap className="w-4 h-4 text-secondary" />
            <span className="text-secondary">Automatyzacja Contentu</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Freepik Spaces: <span className="text-gradient-cyan">Twoja Fabryka</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Przestrzeń, gdzie jeden klik uruchamia całą lawinę kreacji.
          </p>
        </div>

        {/* The "Magic Button" Concept */}
        <div className="mb-20 animate-fade-up delay-100">
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 border border-cyan-500/30 shadow-2xl overflow-hidden group">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-700" />

            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  To naprawdę jest <br />
                  <span className="text-cyan-400">tak proste</span>.
                </h3>
                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                  Nasza automatyzacja opiera się na prostym modelu: <strong className="text-white">Wrzuć & Zapomnij</strong>. Ty dostarczasz tylko zdjęcie produktu. Resztę robi Master Prompt.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">1</div>
                    <p className="text-white/80">Wgrywasz <strong>jedno zdjęcie referencyjne</strong>.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(8,145,178,0.5)]">2</div>
                    <p className="text-white font-bold text-lg">Naciskasz guzik PLAY ►</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">3</div>
                    <p className="text-white/80">Magia dzieje się sama...</p>
                  </div>
                </div>
              </div>

              {/* Visualizing the Flow */}
              <div className="bg-slate-950/50 rounded-2xl p-6 border border-white/10 relative">
                <div className="absolute -top-4 -right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                  AUTO PILOT ON
                </div>

                <div className="space-y-4">
                  {/* Input */}
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-slate-800/50 border border-white/5 opacity-50">
                    <ImageIcon className="w-5 h-5 text-white" />
                    <span className="text-sm text-white/50">Twoje Zdjęcie.jpg</span>
                  </div>

                  {/* Arrow Down */}
                  <div className="flex justify-center">
                    <ArrowRight className="w-5 h-5 text-cyan-500 rotate-90" />
                  </div>

                  {/* The Machine */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border border-cyan-500/30 text-center">
                    <div className="text-cyan-400 font-bold mb-2 flex items-center justify-center gap-2">
                      <Zap className="w-4 h-4" /> Master Prompt Logic
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs text-white/60">
                      <div className="bg-slate-900/80 p-2 rounded">Analiza Obiektu</div>
                      <div className="bg-slate-900/80 p-2 rounded">Generowanie Stylów</div>
                      <div className="bg-slate-900/80 p-2 rounded">Dobór Modelu</div>
                    </div>
                  </div>

                  {/* Arrow Down Split */}
                  <div className="flex justify-center gap-8 text-cyan-500">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                    <ArrowRight className="w-5 h-5 rotate-90" />
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </div>

                  {/* Output */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-slate-800 p-3 rounded-lg border border-white/10 text-center">
                      <FileText className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                      <div className="text-xs font-bold text-white">12 Promptów</div>
                    </div>
                    <div className="bg-slate-800 p-3 rounded-lg border border-white/10 text-center">
                      <ImageIcon className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                      <div className="text-xs font-bold text-white">12 Obrazków</div>
                    </div>
                    <div className="bg-slate-800 p-3 rounded-lg border border-white/10 text-center">
                      <Film className="w-5 h-5 text-pink-400 mx-auto mb-1" />
                      <div className="text-xs font-bold text-white">Krótkie Sceny</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreepikSpaces;