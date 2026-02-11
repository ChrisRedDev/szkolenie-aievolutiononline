import { useState } from "react";
import { ChevronDown, MessageCircle, ExternalLink, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const TroubleshootingGuide = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const categories = [
        {
            name: "Podstawy",
            color: "text-cyan-400",
            faqs: [
                {
                    question: "Dlaczego moje generacje są nieostre?",
                    answer: "Najczęściej to kwestia modelu lub promptu. Użyj 'NanoBanana Pro' lub 'Seedream' dla ostrych detali i dodaj w prompcie: 'sharp focus, 8k, detailed texture'. Możesz też użyć Image Upscaler po wygenerowaniu obrazu."
                },
                {
                    question: "Ile darmowych generacji dziennie mam?",
                    answer: "Free plan daje 20 generacji dziennie z podstawowych modeli. Premium+ daje nielimitowane generacje z modeli Unlimited (Flux, NanoBanana, Seedream, GPT Image). Modele zaawansowane (Sora, Runway) zużywają dodatkowe kredyty."
                },
                {
                    question: "Czy mogę używać obrazów komercyjnie?",
                    answer: "Tak, jeśli masz plan Premium lub Premium+. Wszystkie wygenerowane obrazy są Twoją własnością i możesz je wykorzystywać w reklamach, social media i na stronach www."
                },
                {
                    question: "Jakie formaty eksportu są dostępne?",
                    answer: "Możesz pobierać obrazy w formatach JPEG i PNG. Użytkownicy Premium+ mają dodatkowo dostęp do eksportu SVG - idealny do logo i grafik wektorowych."
                }
            ]
        },
        {
            name: "Referencje i spójność",
            color: "text-violet-400",
            faqs: [
                {
                    question: "Produkt wygląda inaczej niż oryginał",
                    answer: "Użyj 'Object reference' w generatorze - wrzuć zdjęcie produktu, a AI zachowa jego kształt i detale. Dla najlepszych wyników używaj NanoBanana Pro jako modelu."
                },
                {
                    question: "Jak zachować spójność serii zdjęć?",
                    answer: "Użyj funkcji 'Custom Characters' (dla postaci) lub 'Custom Style' (dla estetyki). Wrzuć 3-5 przykładowych obrazów, a AI nauczy się ich i będzie generować spójne serie. Możesz też używać 'Style reference' do zachowania kolorystyki."
                },
                {
                    question: "Czym różni się Object od Character reference?",
                    answer: "Object reference zachowuje wygląd PRZEDMIOTU (produktu, meble, butelki) w nowej scenie. Character reference zachowuje wygląd OSOBY (twarz, sylwetkę). Style reference z kolei kopiuje ESTETYKĘ (kolory, oświetlenie, nastrój) z obrazu referencyjnego."
                },
                {
                    question: "Jak działa Custom Style?",
                    answer: "Custom Style pozwala stworzyć własny, zapisany styl wizualny. Wrzucasz 3-5 obrazów w jednym stylu, a AI uczy się Twojej estetyki. Potem możesz go używać do każdej generacji - idealny do spójnego brandingu."
                }
            ]
        },
        {
            name: "Narzędzia AI",
            color: "text-amber-400",
            faqs: [
                {
                    question: "Co to jest Reimagine i kiedy go używać?",
                    answer: "Reimagine generuje nowe wariacje istniejącego obrazu, zachowując ogólną kompozycję i styl. Idealny gdy masz prawie idealny obraz i chcesz kilka alternatyw bez pisania nowego promptu."
                },
                {
                    question: "Jak działa Sketch to Image?",
                    answer: "Rysujesz prosty szkic (nawet bazgroł!), a AI zamienia go w fotorealistyczny obraz lub ilustrację. Świetne do szybkiego prototypowania pomysłów bez umiejętności rysowania."
                },
                {
                    question: "Jak używać AI Assistant do edycji?",
                    answer: "AI Assistant pozwala edytować obrazy konwersacyjnie - np. 'usuń tło', 'zmień kolor koszulki na czerwony', 'dodaj cień'. Działa jak czat z edytorem graficznym."
                },
                {
                    question: "Czy mogę generować wideo z AI?",
                    answer: "Tak! Freepik oferuje AI Video z modelami jak KlingAI (720p za darmo), Wan 2.2, Hailuo i inne. Możesz generować wideo z tekstu lub z obrazu (image-to-video). Modele premium zużywają kredyty."
                }
            ]
        }
    ];

    // Flatten for index tracking
    const allFaqs = categories.flatMap((cat, catIdx) =>
        cat.faqs.map((faq, faqIdx) => ({ ...faq, categoryColor: cat.color, globalIdx: categories.slice(0, catIdx).reduce((sum, c) => sum + c.faqs.length, 0) + faqIdx }))
    );

    return (
        <section className="relative section-spacing px-6 section-gradient-deep overflow-hidden">
            <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-up">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        FAQ & <span className="text-gradient-cyan">Pomoc</span>
                    </h2>
                    <p className="text-lg text-white/50 max-w-2xl mx-auto">
                        Szybkie odpowiedzi na najważniejsze pytania ({allFaqs.length} pytań w {categories.length} kategoriach).
                    </p>
                </div>

                {/* FAQ by Category */}
                <div className="space-y-12 mb-20">
                    {categories.map((category, catIdx) => (
                        <div key={catIdx}>
                            <h3 className={`text-lg font-bold ${category.color} mb-4 uppercase tracking-wider`}>
                                {category.name}
                            </h3>
                            <div className="space-y-3">
                                {category.faqs.map((faq, faqIdx) => {
                                    const globalIdx = categories.slice(0, catIdx).reduce((sum, c) => sum + c.faqs.length, 0) + faqIdx;
                                    return (
                                        <div
                                            key={globalIdx}
                                            className="bg-slate-900/40 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-cyan-500/30"
                                        >
                                            <button
                                                onClick={() => setOpenIndex(openIndex === globalIdx ? null : globalIdx)}
                                                className="w-full flex items-center justify-between p-5 text-left group"
                                            >
                                                <span className={cn(
                                                    "text-base font-medium transition-colors",
                                                    openIndex === globalIdx ? "text-cyan-400" : "text-white/80 group-hover:text-white"
                                                )}>
                                                    {faq.question}
                                                </span>
                                                <ChevronDown className={cn(
                                                    "w-5 h-5 text-white/40 transition-transform duration-300 flex-shrink-0 ml-4",
                                                    openIndex === globalIdx ? "rotate-180 text-cyan-400" : ""
                                                )} />
                                            </button>

                                            <div className={cn(
                                                "grid transition-[grid-template-rows] duration-300 ease-out",
                                                openIndex === globalIdx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                            )}>
                                                <div className="overflow-hidden">
                                                    <div className="p-5 pt-0 text-white/60 leading-relaxed border-t border-white/5 mt-1">
                                                        {faq.answer}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Help Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    <a href="https://support.freepik.com" target="_blank" rel="noopener" className="group p-6 bg-slate-900/60 rounded-2xl border border-white/5 hover:border-cyan-500/50 transition-all text-center">
                        <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <BookOpen className="w-6 h-6 text-cyan-400" />
                        </div>
                        <h4 className="font-bold text-white mb-1">Dokumentacja</h4>
                        <p className="text-xs text-white/40">Pełna baza wiedzy</p>
                    </a>

                    <a href="https://www.freepik.com/community" target="_blank" rel="noopener" className="group p-6 bg-slate-900/60 rounded-2xl border border-white/5 hover:border-violet-500/50 transition-all text-center">
                        <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <MessageCircle className="w-6 h-6 text-violet-400" />
                        </div>
                        <h4 className="font-bold text-white mb-1">Społeczność</h4>
                        <p className="text-xs text-white/40">Forum użytkowników Freepik</p>
                    </a>

                    <div className="p-6 bg-slate-900/60 rounded-2xl border border-white/5 text-center opacity-50 cursor-not-allowed">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                            <ExternalLink className="w-6 h-6 text-white/40" />
                        </div>
                        <h4 className="font-bold text-white/60 mb-1">Live Chat</h4>
                        <p className="text-xs text-white/20">Niedostępne w Twoim planie</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TroubleshootingGuide;
