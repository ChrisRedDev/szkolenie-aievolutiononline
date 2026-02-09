import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Sparkles, Upload, Copy, Check, ImageIcon, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Platform = "facebook" | "instagram" | "linkedin" | "tiktok";
type Tone = "professional" | "friendly" | "luxury" | "creative";
type ContentLength = "short" | "medium" | "long";
type Category = "fashion" | "electronics" | "home" | "beauty" | "sports" | "food" | "other";
type TargetAudience = "18-25" | "26-35" | "36-50" | "50+" | "b2b";

interface GeneratedVersion {
  id: number;
  content: string;
}

const SocialMediaGenerator = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState<string>("");
  const [description, setDescription] = useState("");
  const [platform, setPlatform] = useState<Platform>("facebook");
  const [category, setCategory] = useState<Category>("other");
  const [tone, setTone] = useState<Tone>("friendly");
  const [contentLength, setContentLength] = useState<ContentLength>("medium");
  const [targetAudience, setTargetAudience] = useState<TargetAudience>("26-35");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedVersions, setGeneratedVersions] = useState<GeneratedVersion[]>([]);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Plik jest za duży. Maksymalny rozmiar to 5MB.");
      return;
    }

    if (!file.type.startsWith("image/")) {
      toast.error("Proszę wybrać plik obrazu (PNG, JPG).");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setImagePreview(result);
      setImageBase64(result);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Plik jest za duży. Maksymalny rozmiar to 5MB.");
      return;
    }

    if (!file.type.startsWith("image/")) {
      toast.error("Proszę wybrać plik obrazu (PNG, JPG).");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setImagePreview(result);
      setImageBase64(result);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  const handleGenerate = async () => {
    if (!description.trim()) {
      toast.error("Proszę wprowadzić opis produktu.");
      return;
    }

    setIsLoading(true);
    setGeneratedVersions([]);

    try {
      const { data, error } = await supabase.functions.invoke("generate-product-content", {
        body: {
          imageBase64,
          description,
          platform,
          tone,
          contentLength,
          category,
          targetAudience,
          language: "pl",
        },
      });

      if (error) {
        throw new Error(error.message || "Błąd generowania treści");
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      const content = data?.content || "";

      const versions: GeneratedVersion[] = [];
      const versionMatches = content.split(/===WERSJA \d+===/);

      versionMatches.forEach((v: string, index: number) => {
        const trimmed = v.trim();
        if (trimmed && index > 0) {
          versions.push({
            id: index,
            content: trimmed,
          });
        }
      });

      if (versions.length === 0 && content.trim()) {
        versions.push({ id: 1, content: content.trim() });
      }

      setGeneratedVersions(versions);
      toast.success("Treść wygenerowana pomyślnie!");
    } catch (error) {
      console.error("Generation error:", error);
      toast.error(error instanceof Error ? error.message : "Błąd generowania treści");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async (id: number, content: string) => {
    await navigator.clipboard.writeText(content);
    setCopiedId(id);
    toast.success("Skopiowano do schowka!");
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="relative section-spacing px-6 overflow-hidden bg-[#0B0F19]">
      {/* Decorative gradient accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 animate-fade-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full text-sm font-semibold mb-8 border border-white/10 shadow-xl shadow-black/20">
            <Sparkles className="w-5 h-5 text-violet-400" />
            <span className="text-gray-200">Post Creator – Social Media w sekundy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Generator Postów <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Social Media</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Inteligentny agent AI analizuje Twój produkt i tworzy angażujące treści.
            Dodaj zdjęcie — a Post Creator przygotuje gotowy tekst do publikacji.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8 animate-fade-up delay-200">
          {/* Configuration Panel */}
          <div className="bg-[#131B2C] rounded-3xl p-8 md:p-10 border border-white/5 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-1 h-6 bg-gradient-to-b from-violet-500 to-cyan-500 rounded-full" />
              Konfiguracja
            </h3>

            {/* Image Upload */}
            <div className="mb-8">
              <Label className="text-sm font-medium text-gray-300 mb-3 block">
                Zdjęcie produktu
              </Label>
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="relative border-2 border-dashed border-white/10 rounded-2xl p-8 text-center hover:border-violet-500/50 hover:bg-white/5 transition-all duration-300 cursor-pointer group"
              >
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/jpg"
                  onChange={handleImageUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                />
                {imagePreview ? (
                  <div className="relative z-10">
                    <div className="relative rounded-lg overflow-hidden shadow-lg border border-white/10">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="max-h-60 mx-auto object-contain bg-black/20"
                      />
                    </div>
                    <p className="text-xs text-violet-400 mt-3 font-medium">Kliknij aby zmienić</p>
                  </div>
                ) : (
                  <div className="space-y-4 py-4">
                    <div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/5 shadow-inner">
                      <ImageIcon className="w-8 h-8 text-gray-400 group-hover:text-violet-400 transition-colors" />
                    </div>
                    <div>
                      <p className="text-base font-medium text-gray-200">
                        Przeciągnij zdjęcie tutaj
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        lub kliknij aby wybrać (PNG, JPG do 5MB)
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <Label htmlFor="description" className="text-sm font-medium text-gray-300 mb-3 block">
                Opis produktu
              </Label>
              <Textarea
                id="description"
                placeholder="Np. Nowoczesny smartwatch z funkcją EKG, wodoodporny do 50m, bateria trzyma 7 dni..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[120px] bg-[#0B0F19] border-white/10 text-gray-200 placeholder:text-gray-600 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 resize-none rounded-xl"
              />
            </div>

            {/* Platform & Category */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div>
                <Label className="text-sm font-medium text-gray-300 mb-3 block">Platforma</Label>
                <Select value={platform} onValueChange={(v) => setPlatform(v as Platform)}>
                  <SelectTrigger className="bg-[#0B0F19] border-white/10 text-gray-200 h-11 rounded-xl focus:ring-violet-500/30">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1A2333] border-white/10 text-gray-200">
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                    <SelectItem value="tiktok">TikTok</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-300 mb-3 block">Kategoria</Label>
                <Select value={category} onValueChange={(v) => setCategory(v as Category)}>
                  <SelectTrigger className="bg-[#0B0F19] border-white/10 text-gray-200 h-11 rounded-xl focus:ring-violet-500/30">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1A2333] border-white/10 text-gray-200">
                    <SelectItem value="fashion">Moda & Styl</SelectItem>
                    <SelectItem value="electronics">Elektronika</SelectItem>
                    <SelectItem value="home">Dom & Wnętrze</SelectItem>
                    <SelectItem value="beauty">Uroda</SelectItem>
                    <SelectItem value="sports">Sport & Zdrowie</SelectItem>
                    <SelectItem value="food">Kulinaria</SelectItem>
                    <SelectItem value="other">Inne</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Tone */}
            <div className="mb-8">
              <Label className="text-sm font-medium text-gray-300 mb-4 block">Styl komunikacji</Label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "professional", label: "Profesjonalny" },
                  { value: "friendly", label: "Przyjazny" },
                  { value: "luxury", label: "Premium" },
                  { value: "creative", label: "Kreatywny" },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setTone(option.value as Tone)}
                    className={`p-3 rounded-xl border text-sm font-medium transition-all duration-200 ${tone === option.value
                        ? "border-violet-500 bg-violet-500/20 text-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                        : "border-white/5 bg-[#0B0F19] text-gray-400 hover:border-white/10 hover:text-gray-200"
                      }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <Button
              onClick={handleGenerate}
              disabled={isLoading}
              className="w-full h-14 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg shadow-violet-900/50 border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Tworzenie magii...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 fill-current" />
                    STWÓRZ POST
                  </>
                )}
              </span>
            </Button>
          </div>

          {/* Results Panel */}
          <div className="bg-[#131B2C] rounded-3xl p-8 md:p-10 border border-white/5 shadow-2xl flex flex-col h-full min-h-[500px]">
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/5">
                <Sparkles className="w-5 h-5 text-emerald-400" />
              </div>
              Wyniki
            </h3>

            {generatedVersions.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-white/5 rounded-2xl bg-[#0B0F19]/50 p-8">
                <div className="w-24 h-24 mb-6 relative">
                  <div className="absolute inset-0 bg-violet-500/20 rounded-full blur-xl animate-pulse" />
                  <div className="relative w-full h-full bg-[#1A2333] rounded-full flex items-center justify-center border border-white/10">
                    <Sparkles className="w-10 h-10 text-gray-600" />
                  </div>
                </div>
                <p className="text-gray-500 text-center font-medium">
                  Twoje posty pojawią się tutaj.<br />
                  <span className="text-sm text-gray-600">Przygotuj się na magię AI! ✨</span>
                </p>
              </div>
            ) : (
              <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar flex-1">
                {generatedVersions.map((version) => (
                  <div
                    key={version.id}
                    className="bg-[#0B0F19] rounded-xl p-6 border border-white/5 hover:border-violet-500/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                      <span className="text-xs font-bold uppercase tracking-wider text-violet-400 bg-violet-500/10 px-2 py-1 rounded">
                        Opcja {version.id}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopy(version.id, version.content)}
                        className="h-8 px-3 text-gray-400 hover:text-white hover:bg-white/5 gap-2"
                      >
                        {copiedId === version.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 text-xs">Skopiowano</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span className="text-xs">Kopiuj</span>
                          </>
                        )}
                      </Button>
                    </div>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 leading-relaxed whitespace-pre-wrap text-sm">
                        {version.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaGenerator;