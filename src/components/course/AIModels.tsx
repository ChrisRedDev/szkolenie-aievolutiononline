import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Brain, Sparkles, Video, Palette } from "lucide-react";

const AIModels = () => {
  const models = [
    {
      name: "Nano Banana Pro",
      subtitle: "Gemini Pro Image Model",
      icon: Brain,
      color: "primary",
      features: [
        "Model Google Gemini 2.5 (wersja Nano Banana Pro)",
        "Świetnie radzi sobie z twarzami i realizmem",
        "Doskonałe szczegóły skóry",
        "Idealny do produktów i scen lifestylowych",
        "Obsługuje multi-reference (1-4 obrazki wejściowe)",
        "Perfekcyjny do e-commerce",
        "Działa szybko i stabilnie",
        "Zachowuje spójność przedmiotu"
      ]
    },
    {
      name: "Seedream 4.0",
      subtitle: "ByteDance Model",
      icon: Sparkles,
      color: "secondary",
      features: [
        "Model ByteDance",
        "Natywna generacja w 4K",
        "Bardzo wysoka ostrość",
        "Świetny do mockupów i architektury",
        "Doskonały do produktów",
        "Dobrze renderuje tekst na obiektach (etykiety, napisy)"
      ]
    },
    {
      name: "Kling AI",
      subtitle: "Video from First & Last Frame",
      icon: Video,
      color: "accent",
      features: [
        "Narzędzie do generowania wideo AI",
        "Wpisujemy pierwszą i ostatnią klatkę",
        "AI generuje brakujące ruchy",
        "Idealne do animacji produktów",
        "Świetne do pokazania produktu w ruchu"
      ]
    },
    {
      name: "Inne Modele",
      subtitle: "Dostępne w Freepik",
      icon: Palette,
      color: "muted",
      features: [
        "Mystic 2.5",
        "DreamShaper",
        "RealVision",
        "Modele artystyczne i ilustracyjne",
        "Modele do renderów 3D",
        "Modele stylizowane pod social media",
        "Modele cartoon/anime"
      ]
    }
  ];

  const getColorClass = (color: string) => {
    const colors: Record<string, string> = {
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
      muted: "text-muted-foreground"
    };
    return colors[color] || colors.primary;
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
          AI Models inside Freepik – How They Work
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Poznaj zaawansowane modele AI dostępne w Freepik i dowiedz się, jak wykorzystać je w swoich projektach
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <Card 
                key={index}
                className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 neon-glow"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-card-foreground/5 rounded-lg">
                      <Icon className={`w-6 h-6 ${getColorClass(model.color)}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{model.name}</CardTitle>
                      <CardDescription className="text-sm">{model.subtitle}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  {model.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 ${getColorClass(model.color)} rounded-full mt-2`} />
                      <p className="text-sm text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIModels;
