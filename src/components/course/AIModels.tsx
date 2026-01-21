import { Check } from "lucide-react";
import nanoBananaIcon from "@/assets/nano-banana-icon.png";
import klingAiIcon from "@/assets/kling-ai-icon.png";
import seedreamIcon from "@/assets/seedream-icon.png";
import aiIcon from "@/assets/ai-icon.png";

const AIModels = () => {
  const models = [
    {
      name: "NanoBanana Pro",
      subtitle: "Gemini 3.0 Pro Image Model (najnowsza wersja)",
      iconImage: nanoBananaIcon,
      accentColor: "bg-amber-500",
      features: [
        "Najdokładniejszy model fotograficzny dostępny w Freepik",
        "Świetnie radzi sobie z twarzami i skórą",
        "Bardzo dobra spójność kształtu produktu",
        "Obsługuje multi-reference (1–4 zdjęcia wejściowe)",
        "Idealny do scen lifestyle, mockupów i packshotów",
        "Bardzo stabilny, szybki i przewidywalny",
      ]
    },
    {
      name: "SeeDream",
      subtitle: "ByteDance Vision Model",
      iconImage: seedreamIcon,
      accentColor: "bg-violet-500",
      features: [
        "Wysoka ostrość i szczegółowość (może generować w 4K)",
        "Idealny do mockupów, architektury i ujęć studyjnych",
        "Dobre odwzorowanie światła i materiałów",
        "Bardzo czyste krawędzie i dobrze renderowany tekst",
        "Świetny do profesjonalnych wizualizacji reklamowych",
      ]
    },
    {
      name: "KlingAI",
      subtitle: "Video from First & Last Frame",
      iconImage: klingAiIcon,
      accentColor: "bg-cyan-500",
      features: [
        "Generuje płynne wideo na podstawie pierwszej i ostatniej klatki",
        "Tworzy naturalny, smooth transition między ujęciami",
        "Idealny do animacji produktów i dynamicznych prezentacji",
        "Świetny do reklam, reelsów i pakietów contentowych",
        "Doskonałe narzędzie do ożywiania statycznych zdjęć",
      ]
    },
    {
      name: "Inne Modele",
      subtitle: "Dostępne w Freepik Workspace",
      iconImage: aiIcon,
      accentColor: "bg-slate-500",
      features: [
        "Mystic 2.5 – Styl artystyczny, bardzo dobre kolory",
        "DreamShaper – Mocny styl designerski, popularny do social media",
        "RealVision – Wysoka fotorealistyka, dobre odwzorowanie materiałów",
        "Modele 3D & Stylizowane",
        "Modele cartoon/anime",
        "Lekkie modele do szybkich konceptów",
      ]
    }
  ];

  return (
    <section className="section-spacing px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Modele AI w <span className="text-secondary">Freepik</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Poznaj najważniejsze modele dostępne w Freepik Workspace i sprawdź, jak wykorzystać je do tworzenia profesjonalnych wizualizacji
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {models.map((model, index) => (
            <div 
              key={index}
              className="saas-card p-6 md:p-8 animate-fade-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-md border border-border">
                  <img 
                    src={model.iconImage} 
                    alt={model.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {model.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {model.subtitle}
                  </p>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-2.5">
                {model.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${model.accentColor} flex-shrink-0`} />
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIModels;
