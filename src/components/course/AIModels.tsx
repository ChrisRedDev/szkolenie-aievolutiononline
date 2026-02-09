import nanoBananaIcon from "@/assets/nano-banana-icon.png";
import klingAiIcon from "@/assets/kling-ai-icon.png";
import seedreamIcon from "@/assets/seedream-icon.png";
import mysticIcon from "@/assets/mystic-icon.png";
import aiIcon from "@/assets/ai-icon.png";

const AIModels = () => {
  const models = [
    {
      name: "NanoBanana Pro",
      subtitle: "Gemini 3.0 Pro Image Model (najnowsza wersja)",
      iconImage: nanoBananaIcon,
      accentColor: "bg-amber-500",
      glowClass: "group-hover:shadow-[0_0_20px_hsl(45_100%_50%/0.3)]",
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
      glowClass: "group-hover:shadow-[0_0_20px_hsl(270_85%_55%/0.3)]",
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
      glowClass: "group-hover:shadow-[0_0_20px_hsl(185_90%_45%/0.3)]",
      features: [
        "Generuje płynne wideo na podstawie pierwszej i ostatniej klatki",
        "Tworzy naturalny, smooth transition między ujęciami",
        "Idealny do animacji produktów i dynamicznych prezentacji",
        "Świetny do reklam, reelsów i pakietów contentowych",
        "Doskonałe narzędzie do ożywiania statycznych zdjęć",
        "Wspiera resolution do 1080p dla social media"
      ]
    },
    {
      name: "Mystic 2.5",
      subtitle: "Artistic & Vibrant Style Model",
      iconImage: mysticIcon,
      accentColor: "bg-pink-500",
      glowClass: "group-hover:shadow-[0_0_20px_hsl(330_85%_55%/0.3)]",
      features: [
        "Piękne, żywe i nasycone kolory",
        "Mocny styl artystyczny i designerski",
        "Idealny do creative social media content",
        "Świetnie renderuje ilustracje i graphics",
        "Doskonały do mood boards i art direction",
        "Kreatywne interpretacje promptów"
      ]
    },
    {
      name: "Inne Modele",
      subtitle: "Dostępne w Freepik Workspace",
      iconImage: aiIcon,
      accentColor: "bg-slate-500",
      glowClass: "group-hover:shadow-[0_0_20px_hsl(220_10%_50%/0.3)]",
      features: [
        "DreamShaper – Mocny styl designerski, popularny do social media",
        "RealVision – Wysoka fotorealistyka, dobre odwzorowanie materiałów",
        "Modele 3D & Stylizowane",
        "Modele cartoon/anime",
        "Lekkie modele do szybkich konceptów",
      ]
    }
  ];

  return (
    <section className="relative section-spacing px-6 section-gradient-amber-deep overflow-hidden">
      {/* Decorative glow orbs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-amber/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-gold-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Modele AI w <span className="text-gradient-amber">Freepik</span>
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Poznaj najważniejsze modele dostępne w Freepik Workspace i sprawdź, jak wykorzystać je do tworzenia profesjonalnych wizualizacji
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {models.map((model, index) => (
            <div
              key={index}
              className={`group saas-card p-6 md:p-8 animate-fade-up transition-all duration-300 ${model.glowClass}`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-md border border-white/10">
                  <img
                    src={model.iconImage}
                    alt={model.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {model.name}
                  </h3>
                  <p className="text-sm text-white/50">
                    {model.subtitle}
                  </p>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-2.5">
                {model.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 group/item">
                    <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${model.accentColor} flex-shrink-0`} />
                    <p className="text-sm text-white/60 group-hover/item:text-white/80 transition-colors">
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