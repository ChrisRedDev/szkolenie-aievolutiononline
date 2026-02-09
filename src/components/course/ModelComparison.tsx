import { Zap, Sparkles, Video, Image as ImageIcon, AlertTriangle, Coins, Crown, Layers } from "lucide-react";

const ModelComparison = () => {
    // Modele "Unlimited" - Nasza boza
    const unlimitedModels = [
        {
            name: "Flux.2 Pro",
            badge: "UNLIMITED",
            type: "Image",
            icon: Zap,
            color: "from-blue-600 to-indigo-600"
        },
        {
            name: "Nano Banana Pro",
            badge: "UNLIMITED",
            type: "Image",
            icon: ImageIcon,
            color: "from-amber-500 to-yellow-600"
        },
        {
            name: "Seedream 4.5",
            badge: "UNLIMITED",
            type: "Image",
            icon: Sparkles,
            color: "from-emerald-500 to-teal-600"
        },
        {
            name: "KlingAI 2.6",
            badge: "FREE 720p",
            type: "Video",
            icon: Video,
            color: "from-cyan-500 to-blue-600"
        }
    ];

    // Modele Płatne (Kredyty)
    const paidImageModels = [
        "Google Imagen 4 Ultra", "Google Imagen 4 Fast", "Google Imagen 3",
        "Flux.2 Flex", "Flux.2 Klein", "Flux.2 Max", "Flux.1 Realism",
        "Mystic 2.5 Fluid", "Mystic 1.0", "Z-Image", "Reve",
        "GPT 1.5 High", "GPT 1 - HQ"
    ];

    const paidVideoModels = [
        "OpenAI Sora 2 Pro", "OpenAI Sora 2",
        "Runway Gen 4.5", "Runway Gen 4", "Runway Act Two",
        "Google Veo 3.1", "Google Veo 3 Fast",
        "Kling 3.0", "Kling O1", "Kling 2.6 Motion Control",
        "MiniMax Hailuo 2.3", "Wan 2.6", "PixVerse 5.5", "Omni Human 1.5"
    ];

    return (
        <section className="relative section-spacing px-6 section-gradient-cyan-deep overflow-hidden">
            <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-cyan-500/20">
                        <Layers className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400">Biblioteka Modeli</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Nasze <span className="text-gradient-cyan">Narzędzia Pracy</span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
                        Freepik daje Ci dostęp do najpotężniejszych modeli na świecie w jednym miejscu.
                    </p>
                </div>

                {/* Sekcja UNLIMITED - Nasz Wybór */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <Crown className="w-6 h-6 text-amber-400" />
                        Nasz "Core Stack" - <span className="text-emerald-400">Bez Limitów</span>
                    </h3>
                    <div className="grid md:grid-cols-4 gap-4">
                        {unlimitedModels.map((model, index) => {
                            const Icon = model.icon;
                            return (
                                <div key={index} className="saas-card p-6 border-b-4 border-b-cyan-500 hover:-translate-y-1 transition-transform duration-300">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${model.color} flex items-center justify-center mb-4 shadow-lg`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="font-bold text-white text-lg mb-1">{model.name}</h4>
                                    <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                                        {model.badge}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                    <p className="mt-4 text-sm text-white/50 text-center">
                        * Tych modeli używamy w kursie. Dają profesjonalną jakość i <strong>nie zużywają kredytów</strong> (w pakiecie Premium+).
                    </p>
                </div>

                {/* Sekcja PŁATNE - Ostrzeżenie */}
                <div className="mb-12 p-1 bg-gradient-to-r from-amber-500/50 to-orange-500/50 rounded-2xl animate-fade-up delay-200">
                    <div className="bg-slate-900 rounded-xl p-8 border border-white/10">
                        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                            <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 animate-pulse">
                                <Coins className="w-8 h-8 text-amber-500" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white mb-2">Strefa Premium - Płatne Modele</h3>
                                <p className="text-white/70 leading-relaxed">
                                    Poniższe modele są dostępne w Freepik, ale są <strong>dodatkowo płatne</strong> (zużywają kredyty).
                                    Są to często najnowsze, eksperymentalne silniki (jak Sora czy Runway Gen 4).
                                    Możesz z nich korzystać, ale miej świadomość, że Twój pakiet kredytów może się szybko wyczerpać.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lista Płatnych Modeli */}
                <div className="grid md:grid-cols-2 gap-8 animate-fade-up delay-300">
                    {/* Image Models */}
                    <div className="saas-card p-8 bg-slate-900/40">
                        <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                            <ImageIcon className="w-5 h-5 text-purple-400" />
                            <h4 className="text-xl font-bold text-white">Advanced Image Models</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {paidImageModels.map((model, i) => (
                                <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70 text-sm hover:bg-white/10 hover:border-purple-500/30 transition-colors cursor-default">
                                    {model}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Video Models */}
                    <div className="saas-card p-8 bg-slate-900/40">
                        <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                            <Video className="w-5 h-5 text-pink-400" />
                            <h4 className="text-xl font-bold text-white">Advanced Video Models</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {paidVideoModels.map((model, i) => (
                                <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70 text-sm hover:bg-white/10 hover:border-pink-500/30 transition-colors cursor-default">
                                    {model} <span className="text-pink-400/50 text-[10px] ml-1">$$$</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ModelComparison;
