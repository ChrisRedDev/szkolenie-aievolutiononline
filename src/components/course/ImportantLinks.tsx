import { ExternalLink, Palette, Sparkles, MessageSquare, Bot, FileText } from "lucide-react";

const ImportantLinks = () => {
  const links = [
    {
      title: "Freepik",
      description: "Platforma do generowania grafik",
      url: "https://www.freepik.com",
      icon: Palette,
      gradient: "from-purple-500 via-purple-600 to-indigo-600",
      glowColor: "shadow-purple-500/30"
    },
    {
      title: "Gemini Workflow Agent",
      description: "Agent workflow dla Gemini",
      url: "https://gemini.google.com/app",
      icon: Sparkles,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      glowColor: "shadow-cyan-500/30"
    },
    {
      title: "ChatGPT Workflow Agent",
      description: "Agent workflow dla ChatGPT",
      url: "https://chat.openai.com",
      icon: MessageSquare,
      gradient: "from-green-500 via-emerald-500 to-teal-600",
      glowColor: "shadow-green-500/30"
    },
    {
      title: "Post Creator",
      description: "Twórz posty social media",
      url: "https://socialmediaagent.lovable.app",
      icon: Bot,
      gradient: "from-pink-500 via-rose-500 to-red-500",
      glowColor: "shadow-pink-500/30"
    },
    {
      title: "Baza Promptów",
      description: "Gotowe przykłady promptów",
      url: "https://docs.google.com/spreadsheets/d/1z1KW50HNLgLKkIWiBNau00D-ZV2U_Ur7/edit?usp=drive_link&ouid=109518685507903203294&rtpof=true&sd=true",
      icon: FileText,
      gradient: "from-amber-500 via-orange-500 to-red-600",
      glowColor: "shadow-orange-500/30"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Ważne Linki
          </h2>
          <p className="text-muted-foreground">
            Wszystkie narzędzia i zasoby w jednym miejscu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-background/40 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover-scale animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon container */}
                <div className="relative mb-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center shadow-lg ${link.glowColor} group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* External link indicator */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-background border border-primary/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                    <ExternalLink className="w-3 h-3 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {link.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImportantLinks;
