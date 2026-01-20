import { AuraBackground } from "@/components/ui/aura-background";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <AuraBackground className="min-h-screen">
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center px-6 max-w-3xl mx-auto">
          <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
            AI Evolution{" "}
            <span className="text-white">
              Polska
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
            Odkryj pełną automatyzację workflow AI z Freepik Workspace i Spaces
          </p>
          
          <Link to="/course">
            <Button 
              size="lg" 
              className="bg-white hover:bg-white/90 text-black text-lg px-8 py-6 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 font-bold group"
            >
              Rozpocznij kurs
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </AuraBackground>
  );
};

export default Index;
