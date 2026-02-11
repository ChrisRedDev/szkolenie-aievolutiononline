import { CheckCircle, Zap, ShieldCheck } from "lucide-react";

const BestPractices = () => {
    return (
        <section className="relative section-spacing px-6 section-gradient-emerald-deep overflow-hidden">
            <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="text-center mb-12 animate-fade-up">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Best Practices <span className="text-emerald-400">(W Pigułce)</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Visual Optimization */}
                    <div className="saas-card p-6 border-l-4 border-l-emerald-500">
                        <div className="flex items-center gap-3 mb-4">
                            <Zap className="w-6 h-6 text-emerald-400" />
                            <h3 className="text-xl font-bold text-white">Optymalizacja</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex gap-3 text-sm text-white/80">
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>Custom Characters: Stwórz postać AI i generuj spójne serie zdjęć bez utraty tożsamości.</span>
                            </li>
                            <li className="flex gap-3 text-sm text-white/80">
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>Object + Style Ref: Używaj Object reference (produkt) + Style reference (estetyka) dla pełnej kontroli.</span>
                            </li>
                            <li className="flex gap-3 text-sm text-white/80">
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>Reimagine: Użyj na prawie idealnym obrazie aby wygenerować wariacje bez pisania nowego promptu.</span>
                            </li>
                            <li className="flex gap-3 text-sm text-white/80">
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>Custom Style: Zapisz swój styl wizualny marki i aplikuj go do każdej generacji.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Resources & Safety */}
                    <div className="saas-card p-6 border-l-4 border-l-blue-500">
                        <div className="flex items-center gap-3 mb-4">
                            <ShieldCheck className="w-6 h-6 text-blue-400" />
                            <h3 className="text-xl font-bold text-white">Zasoby</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex gap-3 text-sm text-white/80">
                                <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span>Trzymaj się modeli Unlimited (Flux, NanoBanana, Seedream, GPT Image) dla bazy.</span>
                            </li>
                            <li className="flex gap-3 text-sm text-white/80">
                                <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span>KlingAI 720p jest FREE - używaj go do każdego wideo testowego.</span>
                            </li>
                            <li className="flex gap-3 text-sm text-white/80">
                                <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span>Eksportuj do SVG (Premium+) - idealny format dla logo i grafik wektorowych.</span>
                            </li>
                            <li className="flex gap-3 text-sm text-white/80">
                                <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span>Eksportuj wszystko - dysk jest tańszy niż ponowne generowanie.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BestPractices;
