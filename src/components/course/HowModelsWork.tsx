import { BrainCircuit, Sparkles, ChefHat, Palette } from "lucide-react";

const HowModelsWork = () => {
    const analogies = [
        {
            icon: Palette,
            title: "1. AI to Twój Cyfrowy Artysta",
            description: "Wyobraź sobie, że masz w komputerze genialnego artystę. Nie musisz umieć rysować – musisz tylko umieć mu opowiedzieć, co chcesz zobaczyć. On zna miliardy stylów i obiektów.",
            color: "from-violet-500 to-purple-600"
        },
        {
            icon: BrainCircuit,
            title: "2. Rzeźbienie z Szumu",
            description: "AI nie 'wkleja' zdjęć z internetu. Ona zaczyna od chaotycznej mgły pikseli (szumu) i powoli, krok po kroku, 'rzeźbi' z niej obraz, kierując się Twoim opisem. To unikalne dzieło za każdym razem.",
            color: "from-cyan-500 to-blue-600"
        },
        {
            icon: ChefHat,
            title: "3. Przepis na Sukces (Parametry)",
            description: "Ty jesteś Szefem Kuchni. Model (np. Mystic) to Twój kucharz. Prompt to zamówienie. A parametry (CFG, Steps) to przyprawy – decydujesz, czy ma być ostro (kreatywnie) czy łagodnie (dokładnie).",
            color: "from-amber-500 to-orange-600"
        }
    ];

    return (
        <section className="relative section-spacing px-6 section-gradient-violet-deep overflow-hidden">
            <div className="absolute top-20 left-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="text-center mb-16 animate-fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-violet-500/20">
                        <Sparkles className="w-4 h-4 text-violet-400" />
                        <span className="text-violet-400">Proste Wyjaśnienie</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Jak to właściwie <span className="text-gradient-violet">działa</span>?
                    </h2>
                    <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
                        Nie musisz być inżynierem, żeby tworzyć arcydzieła. Zrozum te 3 proste zasady.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {analogies.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="saas-card p-8 animate-fade-up hover:scale-105 transition-transform duration-300"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-white/70 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center animate-fade-up delay-400">
                    <p className="inline-block px-6 py-3 bg-gradient-to-r from-violet-600/20 to-cyan-600/20 rounded-full border border-violet-500/30 text-white/80 text-sm">
                        ✨ <strong>Pro tip:</strong> Freepik większość trudnych rzeczy robi za Ciebie automatycznie!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HowModelsWork;
