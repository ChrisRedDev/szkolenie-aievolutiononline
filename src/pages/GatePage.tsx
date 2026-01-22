import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ArrowRight, Sparkles, Zap, Shield, Bot } from "lucide-react";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/content-factory-hero.png";

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
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-2/3 left-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        {/* Mesh grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(270_85%_55%/0.03)_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 w-full px-6 py-6 border-b border-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <img 
            src={logo} 
            alt="AI Evolution Polska" 
            className="h-10 w-auto animate-fade-up"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-12 sm:px-6">
        <div className="w-full max-w-lg">
          {/* Hero Text */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-sm font-semibold mb-6 animate-fade-up border border-secondary/20 backdrop-blur-sm">
              <Bot className="w-4 h-4 text-secondary animate-pulse" />
              <span className="text-secondary">Szkolenie od AI Evolution Polska</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
              <span className="inline-block animate-fade-up">Witaj w kursie</span>{" "}
              <span className="inline-block animate-fade-up delay-100 text-gradient-full bg-clip-text">Fabryki Kontentu AI</span>
            </h1>
            
            <p className="text-base sm:text-lg text-white/60 animate-fade-up delay-200 max-w-md mx-auto leading-relaxed">
              Ten kurs przeprowadzi Cię od zera do działającej automatyzacji.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 animate-fade-up delay-300">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group flex flex-col items-center gap-2 px-3 py-4 rounded-xl text-xs font-medium transition-all duration-300 hover:shadow-lg backdrop-blur-md bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:border-primary/40 hover:shadow-[0_0_20px_hsl(270_85%_55%/0.2)]"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="icon-container w-10 h-10 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-5 h-5" />
                </div>
                <span className="text-white/70 text-center text-[11px] sm:text-xs leading-tight group-hover:text-white transition-colors">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 animate-fade-up delay-300">
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <Input
                type="password"
                placeholder="Wpisz kod dostępu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-14 bg-transparent border-0 text-center text-lg text-foreground tracking-wider focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/50"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold group transition-all duration-300 rounded-xl shadow-md hover:shadow-lg"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Weryfikacja...
                </span>
              ) : (
                <>
                  Uzyskaj dostęp do kursu
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>

          {/* Hero Image */}
          <div className="mt-10 animate-fade-up delay-400">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="relative bg-card rounded-xl border border-border overflow-hidden shadow-lg">
                <img 
                  src={heroImage} 
                  alt="Fabryka Kontentu AI" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Trust indicator */}
          <p className="text-center text-sm text-muted-foreground mt-8 animate-fade-up delay-500">
            Dołącz do społeczności twórców AI Evolution Polska
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 px-6 text-center border-t border-white/5 backdrop-blur-sm">
        <div className="flex justify-center mb-4">
          <img 
            src={logo} 
            alt="AI Evolution" 
            className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
          />
        </div>
        <p className="text-sm text-white/40">
          © 2025 AI Evolution Polska
        </p>
      </footer>
    </div>
  );
};

export default GatePage;
