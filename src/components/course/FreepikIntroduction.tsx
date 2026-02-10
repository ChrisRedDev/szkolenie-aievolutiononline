import { Rocket, Users, Zap, Globe, Lightbulb, Award, ArrowRight } from "lucide-react";
const FreepikIntroduction = () => {
  const whyFreepik = [{
    icon: Zap,
    title: "Szybkość produkcji",
    description: "Generuj dziesiątki wizualizacji w czasie, który zajęłoby stworzenie jednej tradycyjnie",
    color: "from-amber-500 to-orange-600"
  }, {
    icon: Users,
    title: "Dostępność dla każdego",
    description: "Nie potrzebujesz umiejętności graficznych - AI zrobi to za Ciebie",
    color: "from-cyan-500 to-blue-600"
  }, {
    icon: Globe,
    title: "Skalowalność",
    description: "Twórz content na masową skalę - od kilku do kilkuset obrazów dziennie",
    color: "from-violet-500 to-purple-600"
  }, {
    icon: Award,
    title: "Jakość profesjonalna",
    description: "Najnowsze modele AI dają jakość porównywalną z profesjonalną fotografią",
    color: "from-emerald-500 to-teal-600"
  }];
  const platformFeatures = ["Generowanie obrazów AI z 15+ modelami", "Edycja i retusz powered by AI", "Tworzenie wideo z pierwszej i ostatniej klatki", "Background removal i replacement", "Upscaling do 4K quality", "Freepik Spaces - workflow automation", "Multi-reference generation", "Batch processing i export"];
  const journey = [{
    step: "1",
    title: "Poznaj platformę",
    desc: "Interfejs, nawigacja, podstawy"
  }, {
    step: "2",
    title: "Zrozum modele AI",
    desc: "Jak działają, kiedy używać którego"
  }, {
    step: "3",
    title: "Twórz pierwsze projekty",
    desc: "Praktyczne tutoriale krok po kroku"
  }, {
    step: "4",
    title: "Opanuj Spaces",
    desc: "Automatyzacja i workflow"
  }, {
    step: "5",
    title: "Skaluj produkcję",
    desc: "Profesjonalne techniki i best practices"
  }];
  return <section className="relative section-spacing px-6 section-gradient-deep overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-primary/20">
                        <Rocket className="w-4 h-4 text-primary" />
                        <span className="text-primary">Wprowadzenie</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Czym jest <span className="text-gradient">Freepik</span>?
                    </h2>
                    <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
                        Freepik to kompleksowa platforma AI do tworzenia wizualizacji, która łączy w sobie moc najnowszych modeli generatywnych z intuicyjnym interfejsem. To nie tylko generator obrazów - to cała fabryka contentu.
                    </p>
                </div>

                {/* What is Freepik - Expanded */}
                <div className="mb-16 animate-fade-up delay-100">
                    <div className="saas-card p-8 md:p-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="icon-container">
                                <Lightbulb className="w-5 h-5" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">
                                Freepik = Twoja Fabryka Kontentu 
                            </h3>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-white/70 text-lg leading-relaxed mb-4">
                                Freepik to nie tylko "kolejny generator obrazów AI". To ekosystem narzędzi, które pozwalają przejść od pomysłu do gotowego contentu w ciągu minut zamiast dni.
                            </p>
                            <p className="text-white/70 text-lg leading-relaxed mb-4">
                                Platforma łączy w sobie:
                            </p>
                            <ul className="space-y-3 text-white/70">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                    <span><strong className="text-white">AI Image Generation</strong> - generowanie obrazów z tekstowego opisu używając najnowszych modeli</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                    <span><strong className="text-white">AI Video</strong> - tworzenie animacji i wideo z pojedynczych klatek</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                    <span><strong className="text-white">Freepik Spaces</strong> - zaawansowane workflow automation (node-based editor)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                    <span><strong className="text-white">AI Tools</strong> - background removal, upscaling, retouching, i wiele więcej</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Why Freepik */}
                <div className="mb-16">
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
                        Dlaczego Freepik wyróżnia się na tle konkurencji?
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        {whyFreepik.map((item, index) => {
            const Icon = item.icon;
            return <div key={index} className="group saas-card p-6 animate-fade-up" style={{
              animationDelay: `${(index + 2) * 100}ms`
            }}>
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-white mb-3">
                                        {item.title}
                                    </h4>
                                    <p className="text-white/60 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>;
          })}
                    </div>
                </div>

                {/* Platform Features Grid */}
                <div className="mb-16 animate-fade-up delay-300">
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
                        Co oferuje platforma?
                    </h3>

                    <div className="saas-card p-8">
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                            {platformFeatures.map((feature, index) => <div key={index} className="flex items-center gap-3 group">
                                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary group-hover:scale-125 transition-transform" />
                                    <span className="text-white/70 group-hover:text-white transition-colors">
                                        {feature}
                                    </span>
                                </div>)}
                        </div>
                    </div>
                </div>

                {/* Learning Journey */}
                <div className="mb-16 animate-fade-up delay-400">
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
                        Twoja droga nauki
                    </h3>
                    <p className="text-white/50 text-center mb-10 max-w-2xl mx-auto">
                        Przechodzimy od podstaw do zaawansowanych technik - krok po kroku
                    </p>

                    <div className="relative">
                        {/* Connection line */}
                        <div className="hidden md:block absolute left-0 right-0 top-12 h-0.5 bg-gradient-to-r from-primary/20 via-secondary/40 to-primary/20" />

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                            {journey.map((item, index) => <div key={index} className="relative">
                                    <div className="saas-card p-5 text-center h-full flex flex-col">
                                        <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto shadow-lg">
                                            {item.step}
                                        </div>
                                        <h4 className="font-semibold text-white mb-2 text-sm">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs text-white/50 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {index < journey.length - 1 && <div className="hidden md:flex absolute top-12 -right-2 items-center justify-center z-20">
                                            <ArrowRight className="w-4 h-4 text-secondary/60" />
                                        </div>}
                                </div>)}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center animate-fade-up delay-500">
                    <div className="inline-block saas-card p-8">
                        <h3 className="text-xl font-bold text-white mb-3">
                            Gotowy na rozpoczęcie?
                        </h3>
                        <p className="text-white/60 mb-6 max-w-md">
                            Ten kurs przeprowadzi Cię przez wszystko co musisz wiedzieć, aby profesjonalnie wykorzystać Freepik do tworzenia contentu na masową skalę.
                        </p>
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold">
                            <span>Zaczynajmy! 🚀</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>;
};
export default FreepikIntroduction;