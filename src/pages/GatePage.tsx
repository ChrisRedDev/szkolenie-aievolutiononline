import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
import logo from "@/assets/logo.png";
import AnimatedAIBackground from "@/components/AnimatedAIBackground";

const GatePage = () => {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (password === "evolutionmachine") {
        sessionStorage.setItem("courseAccess", "granted");
        toast.success("Dostęp Przyznany");
        navigate("/course");
      } else {
        toast.error("Nieprawidłowy Kod Dostępu");
      }
      setIsLoading(false);
    }, 1000);
  };

  const features = [
    { icon: Sparkles, text: "Nieograniczone generowanie AI" },
    { icon: Zap, text: "Automatyzacja workflow" },
    { icon: Shield, text: "Profesjonalne rezultaty" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      {/* Animated AI Background */}
      <AnimatedAIBackground />

      {/* Header */}
      <header className="relative z-10 w-full px-6 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <img 
            src={logo} 
            alt="AI Evolution Polska" 
            className="h-10 w-auto animate-fade-up"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-xl">
          {/* Hero Text */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up tracking-tight">
              Zautomatyzuj Tworzenie{" "}
              <span className="text-gradient-full">Kontentu AI</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground animate-fade-up delay-100 max-w-md mx-auto">
              Poznaj profesjonalne workflow do tworzenia nieograniczonego contentu z AI
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-up delay-200">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm text-muted-foreground"
              >
                <feature.icon className="w-4 h-4 text-primary" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 animate-fade-up delay-300">
            <div className="glass-card rounded-2xl p-1">
              <Input
                type="password"
                placeholder="Wpisz kod dostępu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-14 bg-transparent border-0 text-center text-lg tracking-wider focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-primary-foreground text-lg font-semibold ai-glow group transition-all duration-300"
            >
              {isLoading ? (
                "Weryfikacja..."
              ) : (
                <>
                  Uzyskaj dostęp
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>

          {/* Trust indicator */}
          <p className="text-center text-sm text-muted-foreground mt-8 animate-fade-up delay-400">
            Dołącz do społeczności twórców AI Evolution Polska
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center border-t border-border/50 backdrop-blur-sm">
        <p className="text-sm text-muted-foreground">
          © 2025 AI Evolution Polska. Wszelkie prawa zastrzeżone.
        </p>
      </footer>
    </div>
  );
};

export default GatePage;
