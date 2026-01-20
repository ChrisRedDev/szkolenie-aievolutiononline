import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-6 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-12 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-dark rounded-full text-sm font-semibold mb-6 border border-white/10">
            <Play className="w-4 h-4 text-primary" />
            <span className="text-white/90">Video wprowadzające</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl">
            Twoja Fabryka{" "}
            <span className="text-gradient-full">Kontentu AI</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
            Od jednego zdjęcia do setek gotowych materiałów marketingowych.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto animate-fade-up delay-200">
          <div className="glass-dark rounded-2xl overflow-hidden ai-glow border border-white/10">
            <div className="aspect-video bg-black/50">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dCoUSKzLujs"
                title="Course Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-6 md:p-8 bg-black/40 backdrop-blur-sm border-t border-white/10">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                Wprowadzenie do Freepik Workspace & Spaces
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                Obejrzyj film, aby zobaczyć jak działa Freepik Workspace i jak dzięki Spaces możesz zbudować maszynę do generowania nieograniczonego kontentu.
              </p>
              <Button className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white font-bold ai-glow group transition-all duration-300">
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
