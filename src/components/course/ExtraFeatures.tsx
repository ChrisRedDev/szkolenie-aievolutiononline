import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Layers, Grid3x3, ImageIcon, Maximize, Zap, Video, Film, Clapperboard, PlayCircle } from "lucide-react";

const ExtraFeatures = () => {
  const features = [
    {
      icon: Layers,
      title: "Model Consistency Training",
      description: "Jak zachować ten sam produkt w wielu ujęciach",
    },
    {
      icon: Grid3x3,
      title: "Multi-Scene Generation",
      description: "Tworzenie 20-40 scen w Spaces jednym przebiegiem",
    },
    {
      icon: ImageIcon,
      title: "Auto-Mockup Generation",
      description: "Generowanie mockupów produktów bez Photoshopa",
    },
    {
      icon: Maximize,
      title: "Upscale 4K",
      description: "Poprawa jakości pod Amazon, Etsy, własny sklep",
    },
    {
      icon: Zap,
      title: "Batch Mode",
      description: "Automatyczne generowanie kontentu dla wielu produktów naraz",
    },
    {
      icon: Video,
      title: "Generowanie Video AI",
      description: "Twórz dynamiczne wideo produktów z Kling AI, VEO 3, Runway Gen-3, Wan",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-glow bg-grid-small relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
          Nasze workflow daje Ci niesamowite możliwości.
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
          Twoje reklamy mogą wyglądać lepiej już dziś. Jedno narzędzie robi robotę całego zespołu. Ulepszysz zdjęcia produktów i podniesiesz sprzedaż. Oszczędzasz mnóstwo kasy.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-6 backdrop-blur-sm border border-primary/20 shadow-lg shadow-primary/10 hover:border-primary/30 hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="p-3 bg-primary/20 rounded-xl w-fit mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExtraFeatures;
