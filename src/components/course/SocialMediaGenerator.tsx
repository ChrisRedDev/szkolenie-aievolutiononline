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
    <section className="relative section-spacing px-6 section-gradient-magenta-deep overflow-hidden">
      {/* Decorative glow orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 animate-fade-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full text-sm font-semibold mb-8 border border-white/10">
            <Sparkles className="w-5 h-5 text-secondary" />
            <span className="text-white">Post Creator – Social Media w sekundy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Generator Postów <span className="text-gradient">Social Media</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Inteligentny agent AI analizuje Twój produkt i tworzy angażujące treści.
            Dodaj zdjęcie — a Post Creator przygotuje gotowy tekst do publikacji.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 animate-fade-up delay-200">
          {/* Configuration Panel */}
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Konfiguracja</h3>

            {/* Image Upload */}
            <div className="mb-6">
              <Label className="text-sm font-medium text-white mb-2 block">
                Zdjęcie produktu
              </Label>
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="relative border-2 border-dashed border-slate-700 rounded-xl p-6 text-center hover:border-secondary/50 transition-colors cursor-pointer bg-slate-800/50"
              >
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/jpg"
                  onChange={handleImageUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                {imagePreview ? (
                  <div className="space-y-3">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="max-h-40 mx-auto rounded-lg object-contain"
                    />
                    <p className="text-sm text-white/60">Kliknij aby zmienić</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="icon-container w-12 h-12 mx-auto">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        Kliknij lub przeciągnij zdjęcie
                      </p>
                      <p className="text-xs text-white/50 mt-1">
                        PNG, JPG do 5MB
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <Label htmlFor="description" className="text-sm font-medium text-white mb-2 block">
                Opis produktu
              </Label>
              <Textarea
                id="description"
                placeholder="Nowoczesny smartwatch z funkcją monitorowania zdrowia, elegancki design..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[100px] bg-slate-800/50 border-slate-700 text-white placeholder:text-white/40 focus:border-secondary resize-none"
              />
            </div>

            {/* Platform & Category */}
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div>
                <Label className="text-sm font-medium text-white mb-2 block">Platforma</Label>
                <Select value={platform} onValueChange={(v) => setPlatform(v as Platform)}>
                  <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-slate-700">
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                    <SelectItem value="tiktok">TikTok</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-sm font-medium text-white mb-2 block">Kategoria</Label>
                <Select value={category} onValueChange={(v) => setCategory(v as Category)}>
                  <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-slate-700">
                    <SelectItem value="fashion">Moda</SelectItem>
                    <SelectItem value="electronics">Elektronika</SelectItem>
                    <SelectItem value="home">Dom i Wnętrza</SelectItem>
                    <SelectItem value="beauty">Kosmetyki</SelectItem>
                    <SelectItem value="sports">Sport</SelectItem>
                    <SelectItem value="food">Jedzenie</SelectItem>
                    <SelectItem value="other">Inne</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Tone */}
            <div className="mb-6">
              <Label className="text-sm font-medium text-white mb-3 block">Ton komunikacji</Label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "professional", label: "Profesjonalny" },
                  { value: "friendly", label: "Przyjazny" },
                  { value: "luxury", label: "Luksusowy" },
                  { value: "creative", label: "Kreatywny" },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setTone(option.value as Tone)}
                    className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                      tone === option.value
                        ? "border-secondary bg-secondary/20 text-secondary"
                        : "border-slate-700 bg-slate-800/50 text-white/70 hover:border-secondary/50"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Length */}
            <div className="mb-6">
              <Label className="text-sm font-medium text-white mb-3 block">Długość treści</Label>
              <div className="flex gap-3">
                {[
                  { value: "short", label: "Krótka" },
                  { value: "medium", label: "Średnia" },
                  { value: "long", label: "Długa" },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setContentLength(option.value as ContentLength)}
                    className={`flex-1 p-3 rounded-xl border text-sm font-medium transition-all ${
                      contentLength === option.value
                        ? "border-secondary bg-secondary/20 text-secondary"
                        : "border-slate-700 bg-slate-800/50 text-white/70 hover:border-secondary/50"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Target Audience */}
            <div className="mb-8">
              <Label className="text-sm font-medium text-white mb-2 block">Grupa docelowa</Label>
              <Select value={targetAudience} onValueChange={(v) => setTargetAudience(v as TargetAudience)}>
                <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-slate-700">
                  <SelectItem value="18-25">18-25 lat (Gen Z)</SelectItem>
                  <SelectItem value="26-35">26-35 lat (Millennials)</SelectItem>
                  <SelectItem value="36-50">36-50 lat (Gen X)</SelectItem>
                  <SelectItem value="50+">50+ lat (Senior)</SelectItem>
                  <SelectItem value="b2b">B2B (Klienci biznesowi)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Generate Button */}
            <Button
              onClick={handleGenerate}
              disabled={isLoading}
              className="w-full h-14 btn-primary font-semibold transition-all duration-300"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Generowanie...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  GENERUJ TREŚĆ AI
                </>
              )}
            </Button>
          </div>

          {/* Results Panel */}
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="icon-container w-10 h-10">
                <Sparkles className="w-5 h-5" />
              </div>
              Wygenerowane posty
            </h3>

            {generatedVersions.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-[400px] border-2 border-dashed border-slate-700 rounded-xl bg-slate-800/30">
                <div className="icon-container w-20 h-20 mb-6">
                  <Sparkles className="w-10 h-10" />
                </div>
                <p className="text-white/50 text-center font-medium text-lg">
                  Wygenerowana treść pojawi się tutaj
                </p>
              </div>
            ) : (
              <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
                {generatedVersions.map((version) => (
                  <div
                    key={version.id}
                    className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-secondary/30 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-bold text-secondary">
                        Wersja {version.id}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopy(version.id, version.content)}
                        className="h-8 px-3 text-white/60 hover:text-white hover:bg-slate-700"
                      >
                        {copiedId === version.id ? (
                          <Check className="w-4 h-4 text-secondary" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                    <p className="text-white/90 leading-relaxed whitespace-pre-wrap">
                      {version.content}
                    </p>
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