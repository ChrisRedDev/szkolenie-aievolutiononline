import { Check, Star, Zap, Crown, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const FreepikPricing = () => {
    return (
        <section className="relative section-spacing px-6 section-gradient-amber-deep overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-1/4 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-amber-500/20">
                        <Crown className="w-4 h-4 text-amber-500" />
                        <span className="text-amber-500">Wymagana Subskrypcja</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Wybierz <span className="text-gradient-amber">Premium+</span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/60 max-w-4xl mx-auto leading-relaxed">
                        Aby skutecznie automatyzować pracę i generować setki zdjęć, potrzebujesz jednej konkretnej opcji: <strong>Premium+</strong>. Tylko ona daje Ci nielimitowane generacje ("UNLIMITED").
                    </p>
                </div>

                {/* Pricing Highlight - Premium+ Focus */}
                <div className="relative max-w-md mx-auto animate-fade-up delay-200">
                    {/* Glowing Border Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-amber-400 to-orange-600 rounded-3xl blur opacity-75 animate-pulse" />

                    <div className="relative bg-slate-900 rounded-3xl overflow-hidden border border-amber-500/50 shadow-2xl">
                        {/* Best Value Badge */}
                        <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white text-center py-2 font-bold text-sm tracking-widest uppercase">
                            Rekomendowany do Kursu
                        </div>

                        <div className="p-8 md:p-10">
                            <h3 className="text-2xl font-bold text-white mb-2">Premium+</h3>
                            <p className="text-white/60 mb-6">Dla kreatywnych szukających nielimitowanych możliwości.</p>

                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-5xl font-extrabold text-white">€36</span>
                                <span className="text-white/60">/miesiąc</span>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-4 p-4 bg-amber-500/10 rounded-xl border border-amber-500/20">
                                    <div className="p-2 bg-amber-500 rounded-lg flex-shrink-0">
                                        <Zap className="w-5 h-5 text-white fill-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1 uppercase tracking-wide">UNLIMITED Generacji</h4>
                                        <p className="text-sm text-white/70">W wybranych modelach (w tym NanoBanana Pro). Generuj bez stresu o kredyty.</p>
                                    </div>
                                </div>

                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-white/90">
                                        <Check className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                        <span>45,000 kredytów AI miesięcznie (na start)</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-white/90">
                                        <Check className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                        <span>Dostęp do wszystkich modeli (Mystic, KlingAI)</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-white/90">
                                        <Check className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                        <span>Komercyjna licencja na wszystko</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-white/90">
                                        <Check className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                        <span>Dostęp do Freepik Spaces (Workflow)</span>
                                    </li>
                                </ul>
                            </div>

                            <Button
                                asChild
                                size="lg"
                                className="w-full h-14 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-lg shadow-lg shadow-amber-500/25 rounded-xl"
                            >
                                <a href="https://www.freepik.com/pricing" target="_blank" rel="noopener noreferrer">
                                    Wybierz Premium+
                                </a>
                            </Button>

                            <p className="text-center text-xs text-white/40 mt-4">
                                *Cena może się różnić w zależności od regionu i promocji.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Other Options Condensed */}
                <div className="mt-16 text-center animate-fade-up delay-300">
                    <p className="text-white/50 mb-6 font-medium">Inne dostępne opcje (niezalecane do pełnej automatyzacji):</p>
                    <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto opacity-70 hover:opacity-100 transition-opacity">
                        <div className="p-4 rounded-xl border border-white/10 bg-slate-900/50">
                            <h4 className="font-bold text-white mb-1">Essential</h4>
                            <p className="text-amber-500 font-bold">€8 /mc</p>
                            <p className="text-xs text-white/50 mt-2">Mało kredytów, brak Unlimited.</p>
                        </div>
                        <div className="p-4 rounded-xl border border-white/10 bg-slate-900/50">
                            <h4 className="font-bold text-white mb-1">Premium</h4>
                            <p className="text-amber-500 font-bold">€16 /mc</p>
                            <p className="text-xs text-white/50 mt-2">Więcej kredytów, ale ciągle limitowane.</p>
                        </div>
                        <div className="p-4 rounded-xl border border-white/10 bg-slate-900/50">
                            <h4 className="font-bold text-white mb-1">Pro</h4>
                            <p className="text-amber-500 font-bold">€230 /mc</p>
                            <p className="text-xs text-white/50 mt-2">Dla dużych agencji (300k kredytów).</p>
                        </div>
                    </div>
                </div>

                {/* Why Unlimited Explanation */}
                <div className="mt-16 saas-card p-8 bg-gradient-to-br from-slate-900 to-slate-800 border-amber-500/20 animate-fade-up delay-400">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-shrink-0 p-4 bg-amber-500/10 rounded-full">
                            <ShieldCheck className="w-12 h-12 text-amber-500" />
                        </div>
                        <div className="text-left">
                            <h3 className="text-xl font-bold text-white mb-2">Dlaczego "Premium Plus" jest kluczowe?</h3>
                            <p className="text-white/70 leading-relaxed">
                                W tym kursie uczymy <strong>automatyzacji i skalowania</strong>. Będziemy generować setki wariacji produktów, testować style i tworzyć całe kampanie. Limitowane plany (nawet zwykły Premium) szybko się wyczerpią. <br /><br />
                                Opcja <strong>UNLIMITED</strong> w planie Premium+ (za €36) daje Ci spokój ducha - możesz eksperymentować do woli, nie martwiąc się, że "zjadłeś" kredyty. To inwestycja, która zwraca się przy pierwszym zleceniu.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FreepikPricing;
