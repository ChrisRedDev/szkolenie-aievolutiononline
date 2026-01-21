import { Button } from "@/components/ui/button";
import { Sparkles, Infinity, ExternalLink, Check } from "lucide-react";

const FreepikFeatures = () => {
  const premiumFeatures = [
    "Dostęp do Unlimited Image Generation",
    "Brak limitów na generowanie zdjęć",
    "Brak zużycia kredytów",
    "Dostęp do wielu modeli AI",
    "Brak znaków wodnych",
    "Dostęp do modeli AI video",
  ];

  const unlimitedReasons = [
    "Kurs opiera się na generowaniu dużej ilości wizualizacji",
    "Potrzebujemy nieograniczonych generacji",
    "Freepik daje możliwość do produkcji kontentu w ogromnej skali",
    "Każdy uczestnik kursu musi mieć Premium+, aby workflow działało poprawnie",
  ];

  return (
    <section className="section-spacing px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Co daje Freepik <span className="text-secondary">Premium+</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Poznaj możliwości Freepik Workspace i dowiedz się, dlaczego Premium+ to klucz do tego kursu
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Premium+ Card */}
          <div className="saas-card p-8 animate-fade-up delay-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="icon-container">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Freepik Premium+ Overview
              </h3>
            </div>
            <ul className="space-y-4">
              {premiumFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 p-1 bg-secondary/10 rounded-full flex-shrink-0">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Unlimited Card */}
          <div className="saas-card p-8 animate-fade-up delay-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="icon-container">
                <Infinity className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Dlaczego Unlimited ma znaczenie?
              </h3>
            </div>
            <ul className="space-y-4">
              {unlimitedReasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 p-1 bg-secondary/10 rounded-full flex-shrink-0">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-muted-foreground">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center animate-fade-up delay-300">
          <Button 
            asChild 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-md group h-12 px-8"
          >
            <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Przejdź do Freepik
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FreepikFeatures;
