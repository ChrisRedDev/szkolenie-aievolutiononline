import { TubesBackground } from "@/components/ui/neon-flow";
import { ArrowRight, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <TubesBackground className="min-h-screen">
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center px-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 text-white/80 border border-white/20">
            <MousePointer2 className="w-4 h-4" />
            <span>Przesuń kursor i kliknij, aby zmienić kolory</span>
          </div>
          
          <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            AI Evolution{" "}
            <span className="bg-gradient-to-r from-[#f967fb] via-[#6958d5] to-[#53bc28] bg-clip-text text-transparent">
              Polska
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Odkryj pełną automatyzację workflow AI z Freepik Workspace i Spaces
          </p>
          
          <Link to="/course">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#f967fb] via-[#6958d5] to-[#53bc28] hover:opacity-90 text-white text-lg px-8 py-6 rounded-full shadow-2xl shadow-purple-500/30 transition-all duration-300 hover:scale-105 group"
            >
              Rozpocznij kurs
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </TubesBackground>
  );
};

export default Index;
