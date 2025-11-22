import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const WorkflowSection = () => {
  const workflowSteps = [
    { step: "1", title: "Input Node", description: "Zdjęcie produktu" },
    { step: "2", title: "Background Removal", description: "Usunięcie tła" },
    { step: "3", title: "Style Node", description: "Studio, lifestyle, minimal" },
    { step: "4", title: "Scene Generator", description: "Generuje tło" },
    { step: "5", title: "Composite", description: "Łączy produkt z tłem" },
    { step: "6", title: "Upscale Node", description: "Poprawa jakości" },
    { step: "7", title: "Output Node", description: "Eksport w wielu formatach" }
  ];

  const outputFormats = [
    "1:1 Instagram",
    "9:16 TikTok",
    "4:5 Allegro",
    "16:9 Banner Shop"
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

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Przykładowy Workflow do e-commerce
          </h3>
          
          <div className="relative">
            <div className="grid gap-4">
              {workflowSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 neon-glow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-xl font-bold">
                          {step.step}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{step.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                  
                  {index < workflowSteps.length - 1 && (
                    <div className="flex justify-center my-2">
                      <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Card className="bg-card border-border/50 neon-glow">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Output Formats</CardTitle>
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
      </div>
    </section>
  );
};

export default WorkflowSection;
