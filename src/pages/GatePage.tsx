import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

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
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-neon-blue rounded-full blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-neon-purple rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent animate-float">
            EVOLUTION<br />MACHINE
          </h1>
          <p className="text-muted-foreground text-sm tracking-wider">
            Zaawansowany Kurs Automatyzacji Contentu AI<br />
            by AI Evolution Polska
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <Input
              type="password"
              placeholder="Wpisz Kod Dostępu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-14 bg-card border-border/50 text-center text-lg tracking-widest focus:border-primary transition-all duration-300 neon-glow"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-14 bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 transition-all duration-300 text-lg font-semibold neon-glow"
          >
            {isLoading ? "WERYFIKACJA..." : "DOSTĘP DO KURSU"}
          </Button>
        </form>

        <div className="mt-12 text-center text-xs text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p>© 2024 AI Evolution Polska</p>
        </div>
      </div>
    </div>
  );
};

export default GatePage;
