import { useState, useEffect } from "react";
import { Play, ArrowRight, ChevronLeft, ChevronRight, Pause, Play as PlayIcon } from "lucide-react";
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
            color: "from-violet-500 to-purple-600",
            steps: [
                {
                    step: "Załóż konto",
                    description: "Wejdź na freepik.com, kliknij Sign Up i utwórz darmowe konto"
                },
                {
                    step: "Przejrzyj interfejs",
                    description: "Zapoznaj się z zakładkami: AI Image Generator, AI Video, Freepik Spaces, Mockup Generator"
                },
                {
                    step: "Wypróbuj pierwszy gen",
                    description: "Kliknij AI Image Generator, wybierz model (np. Flux), wpisz prompt i wygeneruj"
                },
                {
                    step: "Eksploruj opcje",
                    description: "Przetestuj zakładki Styles (styl wizualny) i Composition (proporcje, układ) przy generowaniu"
                },
                {
                    step: "Pobierz obraz",
                    description: "Po wygenerowaniu kliknij Download i zapisz pierwszą generację"
                }
            ],
            tips: "💡 Free plan daje 20 generacji dziennie - wystarczy na pierwsze próby!"
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
                    step: "Użyj Background Remover",
                    description: "W Freepik użyj narzędzia Background Remover aby usunąć tło ze zdjęcia"
                },
                {
                    step: "Dodaj Object Reference",
                    description: "W AI Image Generator kliknij 'Object reference' i wrzuć zdjęcie produktu - AI zachowa jego wygląd"
                },
                {
                    step: "Prompt dla lifestyle",
                    description: "\"Product on wooden table, natural lighting, minimalist interior, professional photography\""
                },
                {
                    step: "Wypróbuj różne style",
                    description: "Zmień prompt na: studio, outdoor, lifestyle, minimal - zobacz różnice w generacjach"
                }
            ],
            tips: "🎯 Używaj NanoBanana Pro (Object reference) dla najlepszej spójności produktu!"
        },
        {
            number: "03",
            title: "Pierwszy Workflow w Spaces",
            duration: "20 min",
            difficulty: "Średnio-zaawansowany",
            color: "from-primary to-accent",
            steps: [
                {
                    step: "Otwórz Freepik Spaces",
                    description: "Z menu głównego wybierz Freepik Spaces - nieskończone płótno do łączenia narzędzi AI"
                },
                {
                    step: "Dodaj węzeł tekstowy",
                    description: "Kliknij + i dodaj Text Node - wpisz swój prompt opisujący docelowy obraz"
                },
                {
                    step: "Dodaj węzeł obrazu",
                    description: "Dodaj Image Node i wrzuć zdjęcie produktu jako referencję"
                },
                {
                    step: "Połącz z AI Generatorem",
                    description: "Dodaj węzeł AI Image Generator, połącz z tekstem i obrazem - przeciągnij linie między węzłami"
                },
                {
                    step: "Skonfiguruj model",
                    description: "W ustawieniach węzła generatora wybierz model (np. NanoBanana Pro) i ustaw proporcje"
                },
                {
                    step: "Uruchom generację",
                    description: "Kliknij przycisk Generate na węźle - AI przetworzy połączone dane i wygeneruje obraz"
                }
            ],
            tips: "⚡ Spaces pozwala iterować wizualnie - zmieniaj prompt i regeneruj bez tracenia kontekstu!"
        },
        {
            number: "04",
            title: "Object, Character & Style Reference",
            duration: "15 min",
            difficulty: "Średnio-zaawansowany",
            color: "from-amber-500 to-orange-600",
            steps: [
                {
                    step: "Object Reference",
                    description: "Wrzuć zdjęcie produktu jako 'Object reference' - AI zachowa jego kształt i detale w nowej scenie"
                },
                {
                    step: "Character Reference",
                    description: "Wrzuć zdjęcie osoby/postaci jako 'Character reference' - AI zachowa twarz i sylwetkę"
                },
                {
                    step: "Style Reference",
                    description: "Wrzuć obraz jako 'Style reference' - AI przejmie kolorystykę, oświetlenie i nastrój"
                },
                {
                    step: "Łącz referencje",
                    description: "Możesz użyć Object + Style jednocześnie: produkt w nowym stylu wizualnym"
                },
                {
                    step: "Kontroluj promptem",
                    description: "Prompt opisuje scenę, referencje kontrolują elementy - razem dają maksymalną precyzję"
                }
            ],
            tips: "🎨 Object ref zachowuje PRODUKT, Character ref zachowuje OSOBĘ, Style ref zachowuje ESTETYKĘ!"
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
                    description: "Z wszystkich wariacji wybierz te które najlepiej pasują do Twojego projektu"
                },
                {
                    step: "Użyj Image Upscaler",
                    description: "Dla najlepszych obrazów użyj narzędzia Image Upscaler aby zwiększyć rozdzielczość do 4K"
                },
                {
                    step: "Reimagine dla wariacji",
                    description: "Użyj 'Reimagine' na obrazie aby wygenerować nowe wariacje zachowując ogólny styl i kompozycję"
                },
                {
                    step: "Eksportuj w różnych formatach",
                    description: "Download jako JPG, PNG lub SVG (Premium+). Wybierz proporcje: 1:1, 9:16, 16:9, 4:5"
                },
                {
                    step: "Organizuj pliki",
                    description: "Stwórz folder structure: projekt → raw → processed → final"
                }
            ],
            tips: "📦 Premium+ umożliwia eksport do SVG - idealny do logo i grafik wektorowych!"
        },
        {
            number: "06",
            title: "Custom Characters i Custom Style",
            duration: "15 min",
            difficulty: "Zaawansowany",
            color: "from-emerald-500 to-teal-600",
            steps: [
                {
                    step: "Stwórz Custom Character",
                    description: "Wejdź w AI Image Generator → Custom Characters → Create. Wrzuć 3-5 zdjęć osoby/postaci"
                },
                {
                    step: "Przetrenuj postać",
                    description: "AI nauczy się rysów twarzy i sylwetki. Od teraz możesz generować tę osobę w dowolnej scenie"
                },
                {
                    step: "Stwórz Custom Style",
                    description: "Wrzuć 3-5 obrazów w jednym stylu wizualnym. AI nauczy się Twojej estetyki marki"
                },
                {
                    step: "Generuj spójne serie",
                    description: "Używaj swojego Custom Character + Custom Style razem - każda generacja będzie spójna z marką"
                },
                {
                    step: "Seria postów social media",
                    description: "Wygeneruj 10+ postów z tą samą postacią i stylem - idealna spójność wizualna!"
                }
            ],
            tips: "👤 Custom Characters to klucz do spójności serii - twarz zawsze ta sama!"
        }
    ];

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (!isPaused) {
            interval = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % tutorials.length);
            }, 6000);
        }
        return () => clearInterval(interval);
    }, [isPaused, tutorials.length]);

    const activeTutorial = tutorials[activeIndex];

    return (
        <section className="relative section-spacing px-6 section-gradient-amber-deep overflow-hidden">
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
                            {isPaused ? "Zatrzymano" : "Autoplay: 6s"}
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
