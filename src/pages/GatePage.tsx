import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ArrowRight, Sparkles, Zap, Shield, Bot } from "lucide-react";
import logo from "@/assets/logo.png";
import { AuraBackground } from "@/components/ui/aura-background";

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
    { icon: Bot, text: "Fabryka Kontentu AI" },
    { icon: Sparkles, text: "Nieograniczone generowanie" },
    { icon: Zap, text: "Automatyzacja workflow" },
    { icon: Shield, text: "Profesjonalne narzędzia" },
  ];

  return (
    <AuraBackground className="min-h-screen">
      <div className="min-h-screen flex flex-col relative">
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

        {/* Header */}
        <header className="relative z-10 w-full px-6 py-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <img 
              src={logo} 
              alt="AI Evolution Polska" 
              className="h-12 w-auto animate-fade-up drop-shadow-lg"
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-2xl">
            {/* Hero Text */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-dark rounded-full text-sm font-semibold mb-8 animate-fade-up border-neon">
                <Bot className="w-5 h-5 text-primary" />
                <span className="text-white">Szkolenie od AI Evolution Polska</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-8 animate-fade-up tracking-tight drop-shadow-2xl leading-tight">
                Kurs Automatyzacji Tworzenia{" "}
                <span className="text-gradient-full">Kontentu AI</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/90 animate-fade-up delay-100 max-w-xl mx-auto font-medium leading-relaxed drop-shadow-lg">
                Poznaj profesjonalne workflow do automatyzacji contentu z Freepik Workspace i dostęp do narzędzi AI
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-up delay-200">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 px-5 py-3 glass-dark rounded-full text-sm font-medium border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="text-white/90">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 animate-fade-up delay-300">
              <div className="glass-dark rounded-2xl p-1.5 border-neon">
                <Input
                  type="password"
                  placeholder="Wpisz kod dostępu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-16 bg-transparent border-0 text-center text-xl text-white tracking-wider focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-white/50"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-16 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white text-xl font-bold ai-glow group transition-all duration-300 rounded-xl"
              >
                {isLoading ? (
                  <span className="flex items-center gap-3">
                    <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                    Weryfikacja...
                  </span>
                ) : (
                  <>
                    Uzyskaj dostęp do kursu
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>

            {/* Trust indicator */}
            <p className="text-center text-base text-white/70 mt-10 animate-fade-up delay-400 font-medium">
              Dołącz do społeczności twórców AI Evolution Polska
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 py-6 px-6 text-center">
          <div className="flex justify-center mb-4">
            <img 
              src={logo} 
              alt="AI Evolution" 
              className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
          <p className="text-sm text-white/50 font-medium">
            © 2025 AI Evolution Polska
          </p>
        </footer>
      </div>
    </AuraBackground>
  );
};

export default GatePage;
