import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Layers, Grid3x3, ImageIcon, Maximize, Zap } from "lucide-react";

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
  ];

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
          Nasze workflow daje Ci niesamowite możliwości.
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Zaawansowane funkcje, które warto dodać do swojego workflow
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 neon-glow group"
              >
                <CardHeader>
                  <div className="p-3 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-xl w-fit mb-3 group-hover:from-neon-blue/20 group-hover:to-neon-purple/20 transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription className="text-sm">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExtraFeatures;
