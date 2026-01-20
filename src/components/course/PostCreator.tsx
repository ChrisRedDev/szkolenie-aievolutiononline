import { Button } from "@/components/ui/button";
import { Sparkles, Instagram, Facebook, Linkedin, MessageSquare, ArrowRight } from "lucide-react";

const PostCreator = () => {
  const platforms = [
    { icon: Instagram, label: "Instagram" },
    { icon: Facebook, label: "Facebook" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: MessageSquare, label: "TikTok" },
  ];

  const features = [
    { 
      icon: Sparkles, 
      title: "AI-Powered", 
      description: "Zaawansowane modele AI analizują Twój produkt i tworzą angażujące treści" 
    },
    { 
      icon: MessageSquare, 
      title: "Multi-Platform", 
      description: "Generuj posty dostosowane do każdej platformy social media" 
    },
    { 
      icon: Instagram, 
      title: "Ready to Use", 
      description: "Otrzymuj gotowe teksty w kilka sekund - bez edycji" 
    },
  ];

  return (
    <section className="py-20 px-6 bg-section-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-xl animate-fade-up">
          {/* Platform Icons */}
          <div className="flex justify-center gap-3 mb-8">
            {platforms.map((platform, index) => (
              <div 
                key={index}
                className="p-3 bg-primary/10 rounded-xl icon-hover"
              >
                <platform.icon className="w-5 h-5 text-primary" />
              </div>
            ))}
          </div>

          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Post Creator – <span className="text-gradient">Social Media w sekundy</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Inteligentny agent AI generuje profesjonalne opisy postów na Facebook, Instagram, TikTok czy LinkedIn. 
              Dodaj zdjęcie produktu — a Post Creator przygotuje gotowy tekst do publikacji.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-muted/30 rounded-xl p-6 border border-border hover:border-primary/50 transition-colors card-hover"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground btn-glow h-14 px-8 text-base group"
              asChild
            >
              <a
                href="https://socialmediaagent.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Uruchom Post Creator
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostCreator;
