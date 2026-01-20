import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface RequestBody {
  imageBase64: string;
  description: string;
  platform: "facebook" | "instagram" | "linkedin" | "tiktok";
  tone: "professional" | "friendly" | "luxury" | "creative";
  contentLength: "short" | "medium" | "long";
  category: "fashion" | "electronics" | "home" | "beauty" | "sports" | "food" | "other";
  targetAudience: "18-25" | "26-35" | "36-50" | "50+" | "b2b";
  language: "pl" | "en";
}

const platformGuidelines: Record<string, string> = {
  linkedin: "LinkedIn: profesjonalny ton, 200-300 słów, skupienie na ROI i wartości biznesowej, storytelling oparty na danych",
  facebook: "Facebook: storytelling, 150-200 słów, społecznościowy charakter, angażujący i konwersacyjny",
  instagram: "Instagram: aspiracyjny, 100-150 słów, lifestyle-oriented, wizualny język",
  tiktok: "TikTok: energetyczny, 50-80 słów, viral-friendly, dynamiczny i młodzieżowy język",
};

const toneDescriptions: Record<string, string> = {
  professional: "profesjonalny i rzeczowy",
  friendly: "przyjazny i ciepły",
  luxury: "luksusowy i ekskluzywny",
  creative: "kreatywny i nieszablonowy",
};

const categoryNames: Record<string, string> = {
  fashion: "moda",
  electronics: "elektronika",
  home: "dom i wnętrza",
  beauty: "kosmetyki",
  sports: "sport",
  food: "jedzenie",
  other: "inne",
};

const audienceDescriptions: Record<string, string> = {
  "18-25": "młodzi ludzie z pokolenia Z (18-25 lat)",
  "26-35": "millennialsi (26-35 lat)",
  "36-50": "pokolenie X (36-50 lat)",
  "50+": "seniorzy (50+ lat)",
  "b2b": "klienci biznesowi B2B",
};

const contentLengthInstructions: Record<string, string> = {
  short: "Krótka treść - maksymalnie 80 słów",
  medium: "Średnia długość - około 120-150 słów",
  long: "Długa treść - 200-300 słów",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const body: RequestBody = await req.json();
    const { imageBase64, description, platform, tone, contentLength, category, targetAudience, language } = body;

    if (!description) {
      return new Response(JSON.stringify({ error: "Opis produktu jest wymagany" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const langInstruction = language === "pl" ? "Pisz po polsku." : "Write in English.";
    
    const systemPrompt = `Jesteś ekspertem od social media marketingu. Generujesz angażujące posty produktowe.

ZASADY FORMATOWANIA (KRYTYCZNE):
- NIE używaj formatowania Markdown (żadnych **, *, ###, bullets, numeracji)
- Pisz jak człowiek, naturalnie, bez sztucznych sekcji
- 2-3 akapity oddzielone podwójnym enterem
- CTA wpleć naturalnie w tekst (nie jako osobną sekcję)
- 2-4 emoji w naturalnych miejscach
- Hashtagi na końcu w jednej linii
- BEZ nagłówków typu "OPIS MARKETINGOWY", "ZALETY", "CALL TO ACTION"
- BEZ "cudzysłowów ozdobnych" i innych fancy znaków

${platformGuidelines[platform]}

Ton: ${toneDescriptions[tone]}
Kategoria: ${categoryNames[category]}
Grupa docelowa: ${audienceDescriptions[targetAudience]}
${contentLengthInstructions[contentLength]}
${langInstruction}

STRUKTURA ODPOWIEDZI:
Wygeneruj dokładnie 2 wersje posta. Oddziel je znacznikiem:
===WERSJA 1===
[treść pierwszej wersji]

===WERSJA 2===
[treść drugiej wersji]`;

    const messages: Array<{ role: string; content: string | Array<{ type: string; text?: string; image_url?: { url: string } }> }> = [
      { role: "system", content: systemPrompt },
    ];

    if (imageBase64 && imageBase64.startsWith("data:image")) {
      messages.push({
        role: "user",
        content: [
          {
            type: "text",
            text: `Opis produktu: ${description}\n\nPrzeanalizuj zdjęcie produktu i wygeneruj 2 wersje posta dla platformy ${platform}.`,
          },
          {
            type: "image_url",
            image_url: { url: imageBase64 },
          },
        ],
      });
    } else {
      messages.push({
        role: "user",
        content: `Opis produktu: ${description}\n\nWygeneruj 2 wersje posta dla platformy ${platform}.`,
      });
    }

    console.log("Calling Lovable AI Gateway with model: google/gemini-3-flash-preview");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Przekroczono limit zapytań. Spróbuj ponownie za chwilę." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Wymagane uzupełnienie kredytów AI." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "Błąd generowania treści" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    let content = data.choices?.[0]?.message?.content || "";

    // Post-processing: remove markdown formatting
    content = content
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .replace(/#{1,6}\s/g, "")
      .replace(/^[-•]\s/gm, "")
      .replace(/^\d+\.\s/gm, "")
      .replace(/[""'']/g, '"')
      .replace(/[–—]/g, "-");

    console.log("Generated content length:", content.length);

    return new Response(JSON.stringify({ content }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in generate-product-content:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
