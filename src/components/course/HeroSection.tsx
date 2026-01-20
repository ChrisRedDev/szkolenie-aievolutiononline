import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedAIBackground from "@/components/AnimatedAIBackground";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-6 bg-background overflow-hidden">
      {/* Animated AI Background */}
      <AnimatedAIBackground />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-12 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm font-medium mb-6">
            <Play className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Video wprowadzające</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Pełna Automatyzacja{" "}
            <span className="text-gradient-full">Workflow AI</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Odkryj jak Freepik Workspace i Spaces pozwalają budować maszynę do generowania nieograniczonego kontentu
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto animate-fade-up delay-200">
          <div className="glass-card rounded-2xl overflow-hidden ai-glow">
            <div className="aspect-video bg-muted/50">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dCoUSKzLujs"
                title="Course Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-6 md:p-8 bg-background/80 backdrop-blur-sm">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                Wprowadzenie do Freepik Workspace & Spaces
              </h2>
              <p className="text-muted-foreground mb-6">
                Obejrzyj film, aby zobaczyć jak działa Freepik Workspace i jak dzięki Spaces możesz zbudować maszynę do generowania nieograniczonego kontentu.
              </p>
              <Button className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-primary-foreground ai-glow group transition-all duration-300">
                Rozpocznij naukę
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
