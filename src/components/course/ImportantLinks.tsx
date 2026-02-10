import { ExternalLink, Palette, Sparkles, MessageSquare, Bot, FileText, Zap, Lock } from "lucide-react";

const ImportantLinks = () => {
  const links = [
    {
      title: "Freepik",
      description: "Platforma do generowania grafik",
      url: "https://www.freepik.com",
      icon: Palette,
      active: true
    },
    {
      title: "Gemini Workflow Agent",
      description: "Agent workflow dla Gemini",
      url: "https://gemini.google.com/gem/1N_bDMpbu0uDf0tsYPrEI6XIHRYT9PTfQ?usp=sharing",
      icon: Sparkles,
      active: true
    },
    {
      title: "ChatGPT Workflow Agent",
      description: "Agent workflow dla ChatGPT",
      url: "https://chatgpt.com/g/g-691f773244d48191b239aa8fccbd7ab4-freepik-prompt-generator-ai-evolution-agent",
      icon: MessageSquare,
      active: true
    },
    {
      title: "Oficjalna strona Fabryki Kontentu",
      description: "Strona główna Fabryki Kontentu",
      url: "https://fabryka-kontentu.pl/",
      icon: Bot,
      active: true
    },
    {
      title: "Baza Promptów",
      description: "Gotowe przykłady promptów",
      url: "#",
      icon: FileText,
      active: false,
      badge: "COMING SOON"
    },
    {
      title: "AI Evolution Polska",
      description: "Platforma edukacyjna AI",
      url: "https://ai-evolution.pl/",
      icon: Zap,
      active: true
    }
  ];

  return (
    <section className="relative section-spacing px-6 section-gradient-amber-deep overflow-hidden">
      {/* Decorative glow orbs */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-amber/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gold-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ważne <span className="text-gradient-amber">Linki</span>
          </h2>
          <p className="text-lg text-white/60">
            Wszystkie narzędzia i zasoby w jednym miejscu
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => {
            const IconComponent = link.icon;
            const Component = link.active ? 'a' : 'div';

            return (
              <Component
                key={index}
                href={link.active ? link.url : undefined}
                target={link.active ? "_blank" : undefined}
                rel={link.active ? "noopener noreferrer" : undefined}
                className={`group glass-card p-6 flex items-start gap-4 animate-fade-up border transition-all duration-300 relative overflow-hidden ${link.active
                  ? "border-amber/20 hover:border-amber/50 hover:shadow-[0_0_30px_hsl(45_100%_50%/0.2)] cursor-pointer"
                  : "border-white/5 opacity-70 bg-slate-900/50 cursor-not-allowed"
                  }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Icon */}
                <div className={`icon-container-amber flex-shrink-0 ${!link.active && "grayscale opacity-50"}`}>
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`font-semibold transition-colors truncate ${link.active ? "text-white group-hover:text-amber" : "text-white/60"}`}>
                      {link.title}
                    </h3>
                    {link.active && (
                      <ExternalLink className="w-4 h-4 text-white/40 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-sm text-white/60">
                    {link.description}
                  </p>
                </div>

                {/* Coming Soon Badge */}
                {!link.active && (
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-white/60 border border-white/5 flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      {link.badge || "WKRÓTCE"}
                    </span>
                  </div>
                )}
              </Component>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImportantLinks;