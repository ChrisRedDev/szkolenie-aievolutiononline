import { ExternalLink, Palette, Sparkles, MessageSquare, Bot, FileText, Zap } from "lucide-react";

const ImportantLinks = () => {
  const links = [
    {
      title: "Freepik",
      description: "Platforma do generowania grafik",
      url: "https://www.freepik.com",
      icon: Palette,
    },
    {
      title: "Gemini Workflow Agent",
      description: "Agent workflow dla Gemini",
      url: "https://gemini.google.com/gem/1N_bDMpbu0uDf0tsYPrEI6XIHRYT9PTfQ?usp=sharing",
      icon: Sparkles,
    },
    {
      title: "ChatGPT Workflow Agent",
      description: "Agent workflow dla ChatGPT",
      url: "https://chatgpt.com/g/g-691f773244d48191b239aa8fccbd7ab4-ai-evolution-agent-frepik-workflow",
      icon: MessageSquare,
    },
    {
      title: "Post Creator",
      description: "Twórz posty social media",
      url: "https://socialmediaagent.lovable.app",
      icon: Bot,
    },
    {
      title: "Baza Promptów",
      description: "Gotowe przykłady promptów",
      url: "https://docs.google.com/spreadsheets/d/1z1KW50HNLgLKkIWiBNau00D-ZV2U_Ur7/edit?usp=drive_link&ouid=109518685507903203294&rtpof=true&sd=true",
      icon: FileText,
    },
    {
      title: "AI Evolution Polska",
      description: "Platforma edukacyjna AI",
      url: "https://ai-evolution.pl/",
      icon: Zap,
    }
  ];

  return (
    <section className="section-spacing px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ważne <span className="text-secondary">Linki</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Wszystkie narzędzia i zasoby w jednym miejscu
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group saas-card p-6 flex items-start gap-4 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Icon */}
                <div className="icon-container flex-shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors truncate">
                      {link.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {link.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImportantLinks;
