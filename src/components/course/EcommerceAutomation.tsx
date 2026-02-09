import { ShoppingBag, Play, Sparkles } from "lucide-react";

const EcommerceAutomation = () => {
    return (
        <section className="relative section-spacing px-6 section-gradient-violet-deep overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 animate-fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-violet-500/20">
                        <ShoppingBag className="w-4 h-4 text-violet-400" />
                        <span className="text-violet-400">Case Study</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Automatyzacja dla <span className="text-gradient-violet">E-Commerce</span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
                        Zobacz jak w praktyce wygląda proces zamiany zwykłego zdjęcia produktowego w profesjonalną kampanię reklamową w kilka minut.
                    </p>
                </div>

                {/* Video Container */}
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-fade-up delay-200 group">
                    <div className="absolute inset-0 bg-violet-500/5 group-hover:bg-transparent transition-colors duration-500" />

                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/ILB4azYtSOc?si=HyzXj2v7qK4Zl5Y8"
                        title="FREPIK AI AUTOMATION"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Key Points */}
                <div className="grid md:grid-cols-3 gap-6 mt-12 animate-fade-up delay-300">
                    <div className="p-6 bg-slate-900/50 rounded-2xl border border-white/5">
                        <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-violet-400" />
                            Skalowanie
                        </h3>
                        <p className="text-white/60 text-sm">
                            Zamiast jednej sesji zdjęciowej - setki wariantów w tym samym czasie.
                        </p>
                    </div>
                    <div className="p-6 bg-slate-900/50 rounded-2xl border border-white/5">
                        <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                            <Play className="w-4 h-4 text-cyan-400" />
                            Dynamika
                        </h3>
                        <p className="text-white/60 text-sm">
                            Ożyw swoje produkty dodając ruch i wideo (KlingAI) do statycznych zdjęć.
                        </p>
                    </div>
                    <div className="p-6 bg-slate-900/50 rounded-2xl border border-white/5">
                        <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                            <ShoppingBag className="w-4 h-4 text-pink-400" />
                            Sprzedaż
                        </h3>
                        <p className="text-white/60 text-sm">
                            Lepsze wizualizacje = wyższa konwersja. Klienci kupują oczami.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EcommerceAutomation;
