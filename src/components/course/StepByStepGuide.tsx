import { useState, useEffect } from "react";
import { Play, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight, Pause, Play as PlayIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const StepByStepGuide = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const tutorials = [
        {
            number: "01",
            title: "Pierwsze kroki z Freepik",
            duration: "5 min",
            difficulty: "Początkujący",
            color: "from-emerald-500 to-teal-600",
            steps: [
                {
                    step: "Załóż konto",
                    description: "Wejdź na freepik.com, kliknij Sign Up i utwórz darmowe konto"
                },
                {
                    step: "Przejrzyj interfejs",
                    description: "Zapoznaj się z menu, zakładkami: AI Image Generator, AI Video, Freepik Spaces"
                },
                {
                    step: "Wypróbuj pierwszy gen",
                    description: "Kliknij AI Image Generator, wpisz prosty prompt np. \"sunset over ocean\" i wygeneruj"
                },
                {
                    step: "Pobierz obraz",
                    description: "Po wygenerowaniu kliknij Download i zapisz pierwszą generację"
                }
            ],
            tips: "💡 Free plan daje 10 generacji dziennie - wystarczy na pierwsze próby!"
        },
        {
            number: "02",
            title: "Tworzenie Product Photography",
            duration: "15 min",
            difficulty: "Początkujący",
            color: "from-cyan-500 to-blue-600",
            steps: [
                {
                    step: "Przygotuj zdjęcie produktu",
                    description: "Zrób proste zdjęcie produktu na jasnym tle (nie musi być idealne)"
                },
                {
                    step: "Użyj Background Removal",
                    description: "W Freepik użyj narzędzia Background Removal aby usunąć tło"
                },
                {
                    step: "Wygeneruj nowe tło",
                    description: "Użyj AI Image Generator z reference image (Twój produkt) + prompt opisujący tło"
                },
                {
                    step: "Prompt dla lifestyle",
                    description: "\"Product on wooden table, natural lighting, minimalist interior, professional photography\""
                },
                {
                    step: "Wypróbuj różne style",
                    description: "Zmień prompt na: studio, outdoor, lifestyle, minimal - zobacz różnice"
                }
            ],
            tips: "🎯 Używaj NanoBanana Pro dla najlepszej spójności produktu!"
        },
        {
            number: "03",
            title: "Pierwszy Workflow w Spaces",
            duration: "20 min",
            difficulty: "Średnio-zaawansowany",
            color: "from-violet-500 to-purple-600",
            steps: [
                {
                    step: "Otwórz Freepik Spaces",
                    description: "Z menu głównego wybierz Freepik Spaces (wymaga Premium+)"
                },
                {
                    step: "Dodaj Input Node",
                    description: "Kliknij + i dodaj Image Input Node, wrzuć zdjęcie produktu"
                },
                {
                    step: "Dodaj Background Removal",
                    description: "Dodaj węzeł Background Removal, połącz zInput Node"
                },
                {
                    step: "Dodaj AI Generator",
                    description: "Dodaj AI Image Generator Node, ustaw model NanoBanana, napisz prompt"
                },
                {
                    step: "Połącz węzły",
                    description: "Połącz background removal → AI generator. Ustawić jako reference image"
                },
                {
                    step: "Dodaj Output",
                    description: "Dodaj Output Node, ustaw format (16:9, 1:1, 4:5), połącz z generatorem"
                },
                {
                    step: "Uruchom workflow",
                    description: "Kliknij Run All - workflow automatycznie przetworzy obraz przez wszystkie kroki"
                }
            ],
            tips: "⚡ Spaces pozwala na batch processing - wrzuć 10 produktów, wygeneruj 100 wariacji!"
        },
        {
            number: "04",
            title: "Multi-Reference Generation",
            duration: "15 min",
            difficulty: "Średnio-zaawansowany",
            color: "from-amber-500 to-orange-600",
            steps: [
                {
                    step: "Przygotuj 2-4 obrazy",
                    description: "Np. produkt + styl background + mood lighting reference"
                },
                {
                    step: "Użyj multi-ref w generatorze",
                    description: "W AI Image Generator kliknij opcję Multi-Reference, dodaj wszystkie obrazy"
                },
                {
                    step: "Ustaw wagi (opcjonalnie)",
                    description: "Możesz ustawić jak mocno każdy obraz wpływa na rezultat (50%, 30%, 20%)"
                },
                {
                    step: "Napisz kontrolujący prompt",
                    description: "Prompt powinien opisać jak połączyć elementy: \"Product from ref1 in scene from ref2\""
                },
                {
                    step: "Wygeneruj i porównaj",
                    description: "Generuj kilka wariacji, zobacz jak AI łączy reference images"
                }
            ],
            tips: "🎨 Multi-ref daje maksymalną kontrolę - używaj gdy potrzebujesz precyzji!"
        },
        {
            number: "05",
            title: "Eksport i Optymalizacja",
            duration: "10 min",
            difficulty: "Początkujący",
            color: "from-pink-500 to-rose-600",
            steps: [
                {
                    step: "Wybierz najlepsze generacje",
                    description: "Z wszystkich wariacji wybierz te które najlepiej Ci wyszły"
                },
                {
                    step: "Użyj Upscale",
                    description: "Dla najlepszych obrazów użyj narzędzia Upscale aby zwiększyć rozdzielczość"
                },
                {
                    step: "SeeDream dla 4K",
                    description: "Jeśli potrzebujesz 4K, re-generate używając modelu SeeDream"
                },
                {
                    step: "Eksportuj w różnych formatach",
                    description: "Download w różnych rozmiarach: 1:1 (Instagram), 9:16 (Stories), 16:9 (Desktop)"
                },
                {
                    step: "Organizuj pliki",
                    description: "Stwórz folder structure: projekt → raw → processed → final"
                }
            ],
            tips: "📦 Batch download pozwala pobrać wszystkie generacje jednocześnie!"
        }
    ];

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (!isPaused) {
            interval = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % tutorials.length);
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isPaused, tutorials.length]);

    const activeTutorial = tutorials[activeIndex];

    return (
        <section className="relative section-spacing px-6 section-gradient-amber-deep overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 animate-fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-amber-500/20">
                        <Play className="w-4 h-4 text-amber-400" />
                        <span className="text-amber-400">Praktyczne Tutoriale</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Przewodnik <span className="text-gradient-amber">Krok po kroku</span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
                        Automatyczny przegląd ścieżki edukacyjnej
                    </p>
                </div>

                {/* Carousel */}
                <div
                    className="relative max-w-4xl mx-auto mb-20"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="saas-card overflow-hidden"
                        >
                            {/* Tutorial Header */}
                            <div className={`p-8 bg-gradient-to-r ${activeTutorial.color}`}>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex items-center gap-6">
                                        <div className="text-7xl font-black text-white/20">
                                            {activeTutorial.number}
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold text-white mb-2">
                                                {activeTutorial.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-3">
                                                <span className="text-xs px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
                                                    ⏱️ {activeTutorial.duration}
                                                </span>
                                                <span className="text-xs px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
                                                    📊 {activeTutorial.difficulty}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tutorial Steps */}
                            <div className="p-8 bg-[#0B0F19]/90 backdrop-blur-xl">
                                <div className="space-y-6">
                                    {activeTutorial.steps.map((step, stepIndex) => (
                                        <div key={stepIndex} className="flex gap-4 items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${activeTutorial.color} flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                                                    {stepIndex + 1}
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-white mb-1">
                                                    {step.step}
                                                </h4>
                                                <p className="text-white/60 text-sm leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Tips */}
                                {activeTutorial.tips && (
                                    <div className="mt-8 p-4 bg-amber-500/10 rounded-xl border border-amber-500/20 flex items-start gap-3">
                                        <span className="text-xl">💡</span>
                                        <p className="text-white/80 text-sm italic">
                                            {activeTutorial.tips}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={() => setActiveIndex((prev) => (prev - 1 + tutorials.length) % tutorials.length)}
                            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/60 hover:text-white"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <div className="flex gap-2">
                            {tutorials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex
                                            ? "w-8 bg-amber-500"
                                            : "w-2 bg-white/20 hover:bg-white/40"
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => setActiveIndex((prev) => (prev + 1) % tutorials.length)}
                            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/60 hover:text-white"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        <button
                            onClick={() => setIsPaused(!isPaused)}
                            className="ml-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/60 hover:text-white"
                            title={isPaused ? "Wznów" : "Pauzuj"}
                        >
                            {isPaused ? <PlayIcon className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                        </button>
                    </div>

                    <div className="text-center mt-2">
                        <span className="text-xs text-white/30 uppercase tracking-widest">
                            {isPaused ? "Zatrzymano" : "Autoplay: 3s"}
                        </span>
                    </div>

                </div>

                {/* Final CTA */}
                <div className="text-center animate-fade-up">
                    <div className="inline-block p-6 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl">
                        <h3 className="text-xl font-bold text-white mb-2">
                            Gotowy na więcej?
                        </h3>
                        <div className="flex justify-center">
                            <div className="inline-flex items-center gap-2 px-6 py-2 mt-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg text-white font-semibold cursor-pointer hover:shadow-lg hover:shadow-amber-600/20 transition-all">
                                <span>Przejdź do Best Practices</span>
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StepByStepGuide;
