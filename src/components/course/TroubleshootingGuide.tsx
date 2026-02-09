import { useState } from "react";
import { HelpCircle, ChevronDown, MessageCircle, ExternalLink, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const TroubleshootingGuide = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Dlaczego moje generacje są nieostre?",
            answer: "Najczęściej to kwestia upscalingu lub złego modelu. Użyj 'NanoBanana Pro' dla ostrych detali i dodaj w prompcie: 'sharp focus, 8k, detailed texture'. Sprawdź też, czy nie masz ustawionego zbyt niskiego 'Guidance Scale'.",
        },
        {
            question: "Produkt wygląda inaczej niż oryginał",
            answer: "Zwiększ wpływ zdjęcia referencyjnego (Image Weight) do 60-70%. Użyj modelu 'Virtual Try-on' lub 'Product Shot' jeśli dostępny. Dodaj 'preserve details' w prompcie negatywnym.",
        },
        {
            question: "Jak zachować spójność serii zdjęć?",
            answer: "Używaj tego samego 'Seed' (ziarna) dla wszystkich generacji. Zablokuj prompt i zmieniaj tylko drobne detale. Najlepiej używać funkcji 'Character Reference' lub 'Style Reference' w Freepik Spaces.",
        },
        {
            question: "Ile kosztują dodatkowe kredyty?",
            answer: "W planie Premium+ masz nielimitowane generacje podstawowe. Płatne są tylko modele eksperymentalne (np. Sora, Runway). Cennik kredytów znajdziesz w panelu 'Billing' na Freepik.",
        },
        {
            question: "Czy mogę używać obrazów komercyjnie?",
            answer: "Tak, jeśli masz plan Premium lub Premium+. Wszystkie wygenerowane obrazy są Twoją własnością i możesz je wykorzystywać w reklamach, social media i na stronach www.",
        }
    ];

    return (
        <section className="relative section-spacing px-6 section-gradient-deep overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-up">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        FAQ & <span className="text-gradient-cyan">Pomoc</span>
                    </h2>
                    <p className="text-lg text-white/50 max-w-2xl mx-auto">
                        Szybkie odpowiedzi na najważniejsze pytania.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4 mb-20">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-slate-900/40 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-cyan-500/30"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left group"
                            >
                                <span className={cn(
                                    "text-lg font-medium transition-colors",
                                    openIndex === index ? "text-cyan-400" : "text-white/80 group-hover:text-white"
                                )}>
                                    {faq.question}
                                </span>
                                <ChevronDown className={cn(
                                    "w-5 h-5 text-white/40 transition-transform duration-300",
                                    openIndex === index ? "rotate-180 text-cyan-400" : ""
                                )} />
                            </button>

                            <div className={cn(
                                "grid transition-[grid-template-rows] duration-300 ease-out",
                                openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            )}>
                                <div className="overflow-hidden">
                                    <div className="p-6 pt-0 text-white/60 leading-relaxed border-t border-white/5 mt-2">
                                        {faq.answer}
                                    </div>
                                </div>
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

                    <a href="https://community.freepik.com" target="_blank" rel="noopener" className="group p-6 bg-slate-900/60 rounded-2xl border border-white/5 hover:border-violet-500/50 transition-all text-center">
                        <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <MessageCircle className="w-6 h-6 text-violet-400" />
                        </div>
                        <h4 className="font-bold text-white mb-1">Forum</h4>
                        <p className="text-xs text-white/40">Społeczność użytkowników</p>
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
