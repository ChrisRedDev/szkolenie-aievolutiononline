import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import bannerTop from "@/assets/banner-top.png";
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
        toast.success("Dostęp Przyznany");
        navigate("/course");
      } else {
        toast.error("Nieprawidłowy Kod Dostępu");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-neon-blue rounded-full blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-neon-purple rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Subtle neon grid background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(hsl(var(--neon-blue) / 0.4) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--neon-purple) / 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            backgroundPosition: 'center center',
            animation: 'pulse-glow 4s ease-in-out infinite'
          }} />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-6 md:py-8">
        <div className="w-full max-w-4xl">
          
          {/* Top Banner */}
          <div className="w-full mb-12 md:mb-16 animate-fade-in">
            <div className="rounded-2xl overflow-hidden border-2 border-primary/40 shadow-[0_0_40px_rgba(0,212,255,0.4)] hover:shadow-[0_0_60px_rgba(0,212,255,0.6)] transition-all duration-500">
              <img 
                src={bannerTop} 
                alt="AI Evolution Banner" 
                className="w-full h-auto object-cover aspect-[16/5] md:aspect-[21/5]"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full max-w-lg mx-auto">
            <div className="text-center mb-8 md:mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h1 className="font-rajdhani text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent animate-float leading-tight tracking-wide" style={{
                textShadow: '0 0 50px rgba(0, 212, 255, 0.6), 0 0 100px rgba(176, 38, 255, 0.5)',
                filter: 'drop-shadow(0 0 30px rgba(0, 212, 255, 0.7))',
                fontWeight: 700
              }}>
                Szkolenie AI Evolution
              </h1>
              <p className="font-rajdhani text-muted-foreground text-sm md:text-base lg:text-lg tracking-wider font-semibold" style={{
                textShadow: '0 0 15px rgba(0, 212, 255, 0.3)'
              }}>
                Kurs Automatyzacji Tworzenia Contentu AI
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan rounded-xl blur-md opacity-40 group-hover:opacity-70 transition duration-300 animate-pulse-glow" />
                <Input
                  type="password"
                  placeholder="Wpisz Kod Dostępu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="relative h-12 md:h-14 bg-card/95 backdrop-blur-sm border-border/60 text-center text-base md:text-lg tracking-widest focus:border-primary transition-all duration-300 rounded-xl"
                />
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-neon-purple to-pink-500 rounded-xl blur-md opacity-50 group-hover:opacity-80 transition duration-500 animate-pulse-glow" />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="relative w-full h-14 md:h-16 bg-gradient-to-r from-neon-blue via-neon-purple to-pink-500 hover:opacity-90 hover:scale-[1.02] transition-all duration-300 text-base md:text-lg font-bold shadow-[0_0_40px_rgba(0,212,255,0.6)] hover:shadow-[0_0_70px_rgba(0,212,255,0.8)] rounded-xl tracking-wide"
                >
                  {isLoading ? "WERYFIKACJA..." : "DOSTĘP DO KURSU"}
                </Button>
              </div>
            </form>

            {/* Logo - Moved below button */}
            <div className="flex justify-center mt-10 md:mt-14 mb-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl blur-2xl opacity-50 animate-pulse-glow" />
                <img 
                  src={logo} 
                  alt="AI Evolution Polska Logo" 
                  className="relative w-32 md:w-40 h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 py-4 md:py-6 text-center text-xs text-muted-foreground animate-fade-in" style={{ 
        animationDelay: "0.6s",
        textShadow: '0 0 10px rgba(0, 212, 255, 0.3)'
      }}>
        <p>© 2025 AI Evolution Polska</p>
      </div>
    </div>
  );
};

export default GatePage;
