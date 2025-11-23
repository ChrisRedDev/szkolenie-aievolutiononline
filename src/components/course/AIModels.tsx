import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Hexagon, Diamond, Triangle, Octagon } from "lucide-react";
import nanoBananaIcon from "@/assets/nano-banana-icon.png";
import mysticIcon from "@/assets/mystic-icon.png";
import klingAiIcon from "@/assets/kling-ai-icon.png";

const AIModels = () => {
  const models = [
    {
      name: "NanoBanana Pro",
      subtitle: "Gemini 3.0 Pro Image Model (najnowsza wersja)",
      iconImage: nanoBananaIcon,
      color: "from-yellow-400 to-orange-400",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      features: [
        "Najdokładniejszy model fotograficzny dostępny w Freepik",
        "Świetnie radzi sobie z twarzami i skórą",
        "Bardzo dobra spójność kształtu produktu (ważne przy e-commerce)",
        "Obsługuje multi-reference (1–4 zdjęcia wejściowe)",
        "Idealny do scen lifestyle, mockupów i packshotów",
        "Bardzo stabilny, szybki i przewidywalny",
        "Perfekcyjny do generowania wizualizacji kolekcji produktów"
      ]
    },
    {
      name: "SeeDream 4.0",
      subtitle: "ByteDance Vision Model",
      icon: Diamond,
      color: "from-purple-500 to-pink-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-500",
      features: [
        "Wysoka ostrość i szczegółowość (może generować w 4K)",
        "Idealny do mockupów, architektury i ujęć studyjnych",
        "Dobre odwzorowanie światła i materiałów",
        "Bardzo czyste krawędzie i dobrze renderowany tekst (etykiety, naklejki)",
        "Świetny do profesjonalnych wizualizacji reklamowych"
      ]
    },
    {
      name: "KlingAI",
      subtitle: "Video from First & Last Frame",
      iconImage: klingAiIcon,
      color: "from-cyan-400 via-blue-500 to-green-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
      features: [
        "Generuje płynne wideo na podstawie pierwszej i ostatniej klatki",
        "Tworzy naturalny, smooth transition między ujęciami",
        "Idealny do animacji produktów i dynamicznych prezentacji",
        "Świetny do reklam, reelsów i pakietów contentowych",
        "Doskonałe narzędzie do ożywiania statycznych zdjęć"
      ]
    },
    {
      name: "Inne Modele",
      subtitle: "Dostępne w Freepik Workspace",
      icon: Octagon,
      color: "from-gray-500 to-slate-400",
      bgColor: "bg-gray-500/10",
      borderColor: "border-gray-500/30",
      iconColor: "text-gray-500",
      features: [
        "Mystic 2.5 – Styl artystyczny, bardzo dobre kolory i tekstury",
        "DreamShaper – Mocny styl designerski, popularny do social media",
        "RealVision – Wysoka fotorealistyka, dobre odwzorowanie materiałów",
        "Modele 3D & Stylizowane",
        "Modele cartoon/anime",
        "Modele renderingowe 3D",
        "Lekkie modele do szybkich konceptów"
      ]
    }
  ];


  return (
    <section className="py-20 px-6 relative overflow-hidden bg-gradient-subtle bg-grid-pattern">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue bg-clip-text text-transparent">
          Modele AI w Freepik – Jak Działają
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
          Poznaj najważniejsze modele dostępne w Freepik Workspace i sprawdź, jak wykorzystać je do tworzenia profesjonalnych wizualizacji produktów oraz materiałów marketingowych.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 backdrop-blur-sm border border-primary/20 shadow-lg shadow-primary/10 hover:border-primary/30 hover:scale-[1.02] transition-all duration-500 group relative overflow-hidden"
              >
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${model.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-5 ${model.bgColor} rounded-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl border-2 ${model.borderColor}`}>
                      {model.iconImage ? (
                        <img src={model.iconImage} alt={model.name} className="w-12 h-12 object-contain" />
                      ) : Icon ? (
                        <Icon className={`w-12 h-12 ${model.iconColor} filter drop-shadow-lg`} strokeWidth={2.5} />
                      ) : null}
                    </div>
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${model.color} bg-clip-text text-transparent`}>
                    {model.name}
                  </h3>
                  <p className="text-base font-medium text-muted-foreground/80 mb-6">
                    {model.subtitle}
                  </p>
                  
                  <div className="space-y-3">
                    {model.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 group/item">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${model.color} mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform`} />
                        <p className="text-sm text-foreground/90 leading-relaxed group-hover/item:text-foreground transition-colors">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIModels;
