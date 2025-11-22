import { Button } from "@/components/ui/button";
import { Sparkles, Instagram, Facebook, Linkedin, MessageSquare } from "lucide-react";

const PostCreator = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="bg-gradient-to-br from-primary/10 via-background/50 to-secondary/10 rounded-3xl p-12 backdrop-blur-xl border border-primary/30 shadow-2xl shadow-primary/20">
          
          {/* Icon cluster */}
          <div className="flex justify-center gap-4 mb-8 animate-fade-in">
            <div className="p-3 rounded-full bg-primary/20 border border-primary/40 shadow-lg shadow-primary/30">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <div className="p-3 rounded-full bg-secondary/20 border border-secondary/40 shadow-lg shadow-secondary/30">
              <Instagram className="w-6 h-6 text-secondary" />
            </div>
            <div className="p-3 rounded-full bg-accent/20 border border-accent/40 shadow-lg shadow-accent/30">
              <Facebook className="w-6 h-6 text-accent" />
            </div>
            <div className="p-3 rounded-full bg-primary/20 border border-primary/40 shadow-lg shadow-primary/30">
              <Linkedin className="w-6 h-6 text-primary" />
            </div>
            <div className="p-3 rounded-full bg-secondary/20 border border-secondary/40 shadow-lg shadow-secondary/30">
              <MessageSquare className="w-6 h-6 text-secondary" />
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Post Creator – Twórz gotowe posty na social media w kilka sekund
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-secondary to-accent rounded-full shadow-lg shadow-primary/50"></div>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Nasz inteligentny agent AI generuje profesjonalne opisy postów na Facebook, Instagram, TikTok czy LinkedIn. 
            Wystarczy, że dodasz zdjęcie swojego produktu — a Post Creator przygotuje pełny, dopracowany tekst gotowy do publikacji.
          </p>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-background/40 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/20 hover-scale">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary mb-4 flex items-center justify-center shadow-lg shadow-primary/30">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">AI-Powered</h3>
              <p className="text-sm text-muted-foreground">Zaawansowane modele AI analizują Twój produkt i tworzą angażujące treści</p>
            </div>

            <div className="bg-background/40 backdrop-blur-sm rounded-xl p-6 border border-secondary/20 hover:border-secondary/40 transition-all hover:shadow-lg hover:shadow-secondary/20 hover-scale">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent mb-4 flex items-center justify-center shadow-lg shadow-secondary/30">
                <MessageSquare className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Multi-Platform</h3>
              <p className="text-sm text-muted-foreground">Generuj posty dostosowane do każdej platformy social media</p>
            </div>

            <div className="bg-background/40 backdrop-blur-sm rounded-xl p-6 border border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg hover:shadow-accent/20 hover-scale">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary mb-4 flex items-center justify-center shadow-lg shadow-accent/30">
                <Instagram className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Ready to Use</h3>
              <p className="text-sm text-muted-foreground">Otrzymuj gotowe teksty w kilka sekund - bez edycji</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-primary-foreground shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all duration-300 hover-scale text-lg px-8 py-6 rounded-xl border border-primary/30"
              asChild
            >
              <a
                href="https://socialmediaagent.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Uruchom Post Creator
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PostCreator;
