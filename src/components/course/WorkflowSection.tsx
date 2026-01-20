import { Card, CardContent } from "@/components/ui/card";
import { Image, Scissors, Paintbrush, Mountain, Layers, ArrowUp, Download, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import workflowImage from "@/assets/workflow-example.jpg";
import referenceImage from "@/assets/reference.jpg";
import furnitureSet from "@/assets/furniture-set.png";
import example1 from "@/assets/example.jpg";
import example2 from "@/assets/example2.jpg";
import example3 from "@/assets/example3.jpg";
import example4 from "@/assets/example4.jpg";
import example5 from "@/assets/example5.jpg";
import example6 from "@/assets/example6.jpg";
import example8 from "@/assets/example8.jpg";
import example9 from "@/assets/example9.jpg";
import creation1 from "@/assets/creation-1.jpg";
import creation2 from "@/assets/creation-2.jpg";
import creation3 from "@/assets/creation-3.jpg";
import creation4 from "@/assets/creation-4.jpg";
import creation5 from "@/assets/creation-5.jpg";
import creation6 from "@/assets/creation-6.jpg";
import creation7 from "@/assets/creation-7.jpg";
import creation8 from "@/assets/creation-8.jpg";

const WorkflowSection = () => {
  const workflowSteps = [
    { step: "1", title: "Input Node", description: "Zdjęcie produktu", icon: Image },
    { step: "2", title: "Background Removal", description: "Usunięcie tła", icon: Scissors },
    { step: "3", title: "Style Node", description: "Studio, lifestyle, minimal", icon: Paintbrush },
    { step: "4", title: "Scene Generator", description: "Generuje tło", icon: Mountain },
    { step: "5", title: "Composite", description: "Łączy produkt z tłem", icon: Layers },
    { step: "6", title: "Upscale Node", description: "Poprawa jakości", icon: ArrowUp },
    { step: "7", title: "Output Node", description: "Eksport w wielu formatach", icon: Download }
  ];

  const outputFormats = [
    "1:1 Instagram",
    "9:16 TikTok",
    "4:5 Allegro",
    "16:9 Banner Sklep"
  ];

  const exampleImages = [example1, example2, example3, example4, example5, example6, example8, example9];
  const creationImages = [creation1, creation2, creation3, creation4, creation5, creation6, creation7, creation8];

  return (
    <section className="py-20 px-6 bg-section-gradient">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Jak działa <span className="text-gradient">Freepik Spaces</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Narzędzie node-based, gdzie łączymy blok po bloku: background removal, style presets, generacja scen, consistency filters, upscaling i output w wielu rozmiarach.
          </p>
        </div>

        {/* Furniture Set Image */}
        <div className="mb-16 animate-fade-up delay-100">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
            <img 
              src={furnitureSet} 
              alt="Furniture set example" 
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Workflow Image */}
        <div className="mb-16 animate-fade-up delay-200">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-6">
            Przykładowe Workflow
          </h3>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
            <img 
              src={workflowImage} 
              alt="Przykładowe workflow" 
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Creations Carousel */}
        <div className="mb-16 animate-fade-up delay-300">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Efekty - Generacje
          </h3>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-4">
              {creationImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="rounded-xl overflow-hidden shadow-lg border border-border card-hover">
                    <img 
                      src={image} 
                      alt={`Przykład generacji ${index + 1}`}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hover:bg-primary hover:text-primary-foreground transition-colors" />
            <CarouselNext className="hover:bg-primary hover:text-primary-foreground transition-colors" />
          </Carousel>
        </div>

        {/* Workflow Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-4">
            Przykładowy Workflow dla e-commerce
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-sm uppercase tracking-wider">
            AI-Powered Automation
          </p>
          
          {/* Desktop Steps */}
          <div className="hidden lg:flex items-center justify-between gap-2">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-center">
                  <div className="bg-card rounded-xl p-4 border border-border shadow-md card-hover text-center min-w-[120px]">
                    <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-xs font-medium text-primary mb-1">Krok {step.step}</div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">{step.title}</h4>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <ChevronRight className="w-5 h-5 text-muted-foreground mx-1 flex-shrink-0" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Steps */}
          <div className="lg:hidden space-y-4">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="bg-card rounded-xl p-4 border border-border shadow-md flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-medium text-primary mb-1">Krok {step.step}</div>
                    <h4 className="text-sm font-semibold text-foreground">{step.title}</h4>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Output Formats */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-lg mb-16 animate-fade-up">
          <h3 className="text-xl font-semibold text-foreground text-center mb-6">
            Formaty Wyjściowe
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {outputFormats.map((format, index) => (
              <div 
                key={index}
                className="p-4 bg-muted/50 rounded-xl text-center border border-border hover:border-primary/50 transition-colors"
              >
                <p className="font-medium text-sm text-foreground">{format}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reference & Examples */}
        <div className="animate-fade-up">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Efekty - Przykłady
          </h3>
          
          <div className="mb-8 max-w-md mx-auto">
            <h4 className="text-lg font-medium text-foreground text-center mb-4">
              Obraz Referencyjny
            </h4>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
              <img 
                src={referenceImage} 
                alt="Reference image" 
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-4">
              {exampleImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="rounded-xl overflow-hidden shadow-lg border border-border card-hover">
                    <img 
                      src={image} 
                      alt={`Przykład ${index + 1}`}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hover:bg-primary hover:text-primary-foreground transition-colors" />
            <CarouselNext className="hover:bg-primary hover:text-primary-foreground transition-colors" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
