import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ArrowRight, Sparkles, Zap, Shield, Bot } from "lucide-react";
import logo from "@/assets/logo.png";

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
    <div className="min-h-screen flex flex-col relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-secondary/15 via-transparent to-transparent" />

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
              Witaj w kursie{" "}
              <span className="text-gradient-full">Fabryki Kontentu AI</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 animate-fade-up delay-100 max-w-xl mx-auto font-medium leading-relaxed drop-shadow-lg">
              Ten kurs przeprowadzi Cię od zera do działającej automatyzacji.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12 animate-fade-up delay-200">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group flex flex-col items-center gap-3 px-4 py-5 glass-dark rounded-2xl text-sm font-medium border border-white/10 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative">
                  <feature.icon className="w-6 h-6 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
                  <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <span className="text-white/90 text-center text-xs sm:text-sm leading-tight group-hover:text-white transition-colors duration-300">{feature.text}</span>
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
  );
};

export default GatePage;
