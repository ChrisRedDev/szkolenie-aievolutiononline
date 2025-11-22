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
        <div
          className="absolute w-96 h-96 -bottom-48 -right-48 bg-neon-purple rounded-full blur-[120px] opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Neon grid background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(hsl(var(--neon-blue) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--neon-purple) / 0.3) 1px, transparent 1px)
            `,
              backgroundSize: "80px 80px",
              animation: "pulse-glow 4s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Top Banner */}
      <div className="relative z-10 w-full px-4 pt-12 pb-8 animate-fade-in">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:shadow-[0_0_50px_rgba(0,212,255,0.5)] transition-all duration-500">
            <img src={bannerTop} alt="AI Evolution Banner" className="w-full h-auto object-cover max-h-[25vh]" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-4 sm:px-6 sm:py-8">
        <div className="w-full max-w-lg">
          <div className="text-center mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent leading-tight px-4"
              style={{
                textShadow: "0 0 30px rgba(0, 212, 255, 0.4)",
                filter: "drop-shadow(0 0 15px rgba(0, 212, 255, 0.5))",
              }}
            >
              Kurs Automatyzacji Tworzenia Kontentu AI
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300 animate-pulse-glow" />
              <Input
                type="password"
                placeholder="Wpisz Kod Dostępu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="relative h-14 bg-card/90 backdrop-blur-sm border-border/50 text-center text-lg tracking-widest focus:border-primary transition-all duration-300"
              />
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg blur opacity-40 group-hover:opacity-60 transition duration-300 animate-pulse-glow" />
              <Button
                type="submit"
                disabled={isLoading}
                className="relative w-full h-14 bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 transition-all duration-300 text-lg font-semibold shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_50px_rgba(0,212,255,0.6)]"
              >
                {isLoading ? "WERYFIKACJA..." : "DOSTĘP DO KURSU"}
              </Button>
            </div>
          </form>

          {/* Logo */}
          <div className="flex justify-center mt-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl blur-xl opacity-40 animate-pulse-glow" />
              <img src={logo} alt="AI Evolution Polska Logo" className="relative w-32 md:w-40 h-auto object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="relative z-10 py-6 text-center text-xs text-muted-foreground animate-fade-in"
        style={{
          animationDelay: "0.7s",
          textShadow: "0 0 10px rgba(0, 212, 255, 0.3)",
        }}
      >
        <p>© 2025 AI Evolution Polska</p>
      </div>
    </div>
  );
};

export default GatePage;
