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
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-amber-950/15 to-slate-950 relative overflow-hidden">
      {/* Amber/Orange accent glow */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ważne <span className="text-gradient">Linki</span>
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
                className="group bg-card rounded-2xl p-6 border border-border shadow-md card-hover animate-fade-up flex items-start gap-4"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Icon */}
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
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
