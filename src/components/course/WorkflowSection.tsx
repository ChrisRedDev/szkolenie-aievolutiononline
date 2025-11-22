import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Image, Scissors, Paintbrush, Mountain, Layers, ArrowUp, Download } from "lucide-react";
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

  const exampleImages = [
    example1,
    example2,
    example3,
    example4,
    example5,
    example6,
    example8,
    example9,
  ];

  const creationImages = [
    creation1,
    creation2,
    creation3,
    creation4,
    creation5,
    creation6,
    creation7,
    creation8,
  ];

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
          Jak działa Freepik Spaces
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Freepik Spaces to narzędzie node-based, gdzie łączymy blok po bloku działania AI: background removal, style presets, generacja scen, consistency filters, upscaling i output w wielu rozmiarach.
        </p>

        <div className="mb-12">
          <div className="flex justify-center mb-8">
            <img 
              src={furnitureSet} 
              alt="Furniture set example Freepik Spaces" 
              className="max-w-full h-auto rounded-lg shadow-glow border border-border/50"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Przykładowe Workflow
          </h3>
          <div className="flex justify-center mb-8">
            <img 
              src={workflowImage} 
              alt="Przykładowe workflow Freepik Spaces" 
              className="max-w-full h-auto rounded-lg shadow-glow border border-border/50"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Efekty - Generacje
          </h3>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {creationImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border-border/50 overflow-hidden hover-scale transition-all duration-300">
                      <CardContent className="p-0">
                        <img 
                          src={image} 
                          alt={`Przykład generacji ${index + 1}`}
                          className="w-full h-auto object-cover animate-fade-in"
                          loading="lazy"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="transition-all duration-200 hover:scale-110" />
            <CarouselNext className="transition-all duration-200 hover:scale-110" />
          </Carousel>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-3 text-center bg-gradient-to-r from-neon-blue via-neon-purple to-cyan-400 bg-clip-text text-transparent">
            Przykładowy Workflow dla e-commerce
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-sm uppercase tracking-wider">
            AI-Powered Automation
          </p>
          
          {/* Desktop: Horizontal Layout */}
          <div className="hidden lg:block relative">
            <div className="relative flex items-center justify-between px-8">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-blue via-neon-purple to-cyan-400 opacity-30 blur-sm" 
                   style={{ transform: 'translateY(-50%)', zIndex: 0 }} />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-neon-blue via-neon-purple to-cyan-400" 
                   style={{ transform: 'translateY(-50%)', zIndex: 0 }} />
              
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative flex-1 flex justify-center" style={{ zIndex: 1 }}>
                    <div className="group relative">
                      {/* Card */}
                      <div className="relative bg-card/40 backdrop-blur-md border border-border/50 rounded-xl p-6 
                                    hover:border-primary/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] 
                                    transition-all duration-300 hover:-translate-y-2 w-36 h-44 flex flex-col items-center">
                        {/* Icon Circle */}
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue via-neon-purple to-cyan-400 
                                      flex items-center justify-center mb-3 shadow-glow group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        
                        {/* Step Number */}
                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-neon-blue 
                                      flex items-center justify-center text-xs font-bold shadow-glow">
                          {step.step}
                        </div>
                        
                        {/* Content */}
                        <div className="text-center flex-1 flex flex-col justify-center">
                          <h4 className="text-xs font-bold mb-1 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                            {step.title}
                          </h4>
                          <p className="text-[10px] text-muted-foreground leading-tight">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tablet: Wrapped Horizontal Layout */}
          <div className="hidden md:block lg:hidden relative">
            <div className="grid grid-cols-4 gap-6 px-4">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    <div className="group relative">
                      <div className="relative bg-card/40 backdrop-blur-md border border-border/50 rounded-xl p-4 
                                    hover:border-primary/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] 
                                    transition-all duration-300 hover:-translate-y-2 h-40 flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue via-neon-purple to-cyan-400 
                                      flex items-center justify-center mb-2 shadow-glow group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        
                        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-r from-cyan-400 to-neon-blue 
                                      flex items-center justify-center text-xs font-bold shadow-glow">
                          {step.step}
                        </div>
                        
                        <div className="text-center flex-1 flex flex-col justify-center">
                          <h4 className="text-xs font-bold mb-1 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                            {step.title}
                          </h4>
                          <p className="text-[9px] text-muted-foreground leading-tight">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile: Vertical Layout */}
          <div className="block md:hidden relative">
            <div className="relative space-y-4 px-4">
              {/* Vertical Connecting Line */}
              <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-cyan-400 opacity-30 blur-sm" />
              <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-cyan-400" />
              
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative pl-8">
                    <div className="group relative">
                      <div className="relative bg-card/40 backdrop-blur-md border border-border/50 rounded-xl p-4 
                                    hover:border-primary/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] 
                                    transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neon-blue via-neon-purple to-cyan-400 
                                        flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300 relative">
                            <Icon className="w-7 h-7 text-white" />
                            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-neon-blue 
                                          flex items-center justify-center text-xs font-bold shadow-glow">
                              {step.step}
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <h4 className="text-sm font-bold mb-1 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                              {step.title}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Card className="bg-card border-border/50 neon-glow mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Formaty Wyjściowe</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {outputFormats.map((format, index) => (
                <div 
                  key={index}
                  className="p-4 bg-muted/50 rounded-lg text-center border border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  <p className="font-medium text-sm">{format}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Efekty - Przykłady
          </h3>
          
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4 text-center">
              Obraz Referencyjny
            </h4>
            <div className="flex justify-center mb-8">
              <img 
                src={referenceImage} 
                alt="Reference image Freepik Spaces" 
                className="max-w-full h-auto rounded-lg shadow-glow border border-border/50"
                loading="lazy"
              />
            </div>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {exampleImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border-border/50 overflow-hidden hover-scale transition-all duration-300">
                      <CardContent className="p-0">
                        <img 
                          src={image} 
                          alt={`Przykład ${index + 1}`}
                          className="w-full h-auto object-cover animate-fade-in"
                          loading="lazy"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="transition-all duration-200 hover:scale-110" />
            <CarouselNext className="transition-all duration-200 hover:scale-110" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
