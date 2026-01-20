import { Layers, Grid3x3, ImageIcon, Maximize, Zap, Video } from "lucide-react";

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
      description: "Twórz dynamiczne wideo z Kling AI, VEO 3, Runway Gen-3, Wan",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Niesamowite <span className="text-gradient">możliwości</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jedno narzędzie robi robotę całego zespołu. Ulepszysz zdjęcia produktów i podniesiesz sprzedaż.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border shadow-md card-hover animate-fade-up group"
                style={{ animationDelay: `${(index + 1) * 50}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
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
