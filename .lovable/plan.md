# Plan: Ulepszenie "Przewodnik Krok po Kroku" + Korekta faktyczna calej strony

## Znalezione bledy faktyczne do naprawy

Na podstawie oficjalnej strony Freepik (freepik.com/ai/image-generator) znalazlem nastepujace nieścislosci:

### Bledy krytyczne:

1. **Seed/Ziarna NIE ISTNIEJE** - FAQ mowi "Uzywaj tego samego Seed (ziarna)" - Freepik nie ma tej opcji
2. **Darmowe generacje** - kurs mowi "10 dziennie", Freepik daje **20 dziennie**
3. **FAQ o "Guidance Scale"** i "Image Weight" - te parametry nie sa widoczne w interfejsie Freepik jako osobne suwaki
4. **"Virtual Try-on" i "Product Shot"** - wymienione w FAQ jako modele, ale nie istnieja na Freepik
5. **FAQ o spójności** - zamiast "Seed" nalezy uzyc **Custom Characters**, **Custom Style** lub **Object/Character reference**

### Brakujace narzedzia Freepik (do dodania w kursie):

- Custom Characters (tworzenie postaci AI)
- Custom Style (spójny styl wizualny)
- Mockup Generator
- Sketch to Image
- Reimagine (wariacje)
- Expand (rozszerzanie obrazu)
- Retouch (usuwanie/zamiana obiektow)
- AI Assistant (edycja konwersacyjna)
- Text to Speech
- Video Editor + Video Upscaler

---

## Zmiany do wdrozenia

### 1. `src/components/course/StepByStepGuide.tsx` - Kompletna przebudowa

**Poprawki tresci:**

- Tutorial 01: zmiana "10 generacji" na "20 generacji"; dodanie wzmianki o Styles i Composition
- Tutorial 02: zastapienie "Background Removal" poprawna nazwa "Background Remover"; dodanie Object reference zamiast generic "reference image"
- Tutorial 03: poprawienie opisu Spaces (node-based canvas); usuniecie "Run All" (nie istnieje); poprawka nazewnictwa wezlow
- Tutorial 04: zastapienie "Multi-Reference" poprawna terminologia "Object + Character + Style reference"
- Tutorial 05: poprawienie "Upscale" na "Image Upscaler"; dodanie "Reimagine" jako narzedzie do wariacji
- Dodanie Tutorial 06: "Custom Characters i Custom Style" - nowa, wazna funkcja Freepik

**Ulepszenie UI:**

- Zmiana kolorow karuzeli na palette neonowa (violet, cyan, magenta, amber, gold zamiast emerald/teal)
- Wydluzenie autoplay z 3s na 6s (za krotki czas na przeczytanie)
- Lepsze animacje przejsc

### 2. `src/components/course/TroubleshootingGuide.tsx` - Rozbudowa FAQ

**Poprawki istniejacych odpowiedzi:**

- Usuniecie wzmianki o "Seed/ziarna" - zastapienie rada o "Custom Characters" i "Custom Style" do zachowania spojnosci
- Usuniecie "Guidance Scale" i "Image Weight" - zastapienie poprawnymi opcjami Freepik (Style, Composition, Object/Character reference)
- Usuniecie "Virtual Try-on" i "Product Shot" - nie istnieja

**Nowe pytania FAQ:**

- "Czym rozni sie Object od Character reference?"
- "Jak dziala Custom Style?"
- "Jakie formaty eksportu sa dostepne?" (JPEG, PNG, SVG dla Premium+)
- "Jak uzywac AI Assistant do edycji?"
- "Czy moge generowac wideo z AI?"
- "Co to jest Reimagine i kiedy go uzywac?"
- "Jak dziala Sketch to Image?"

**Ulepszenie UI:**

- Wiecej pytan (10-12 zamiast 5)
- Podzial na kategorie (Podstawy, Modele, Workflow, Eksport)
- Lepsze linki do pomocy (poprawiony URL community)
- Dodanie wzmianki o Nano Banana (wersja podstawowa) vs Nano Banana Pro
- SeeDream: dodanie ze istnieja wersje 3.0, 4.0 i 4.5

### 4. `src/components/course/ModelComparison.tsx` - Aktualizacja listy modeli

- Dodanie brakujacych modeli: Ideogram 3, Reve 1, Z Image 1, Flux Kontext Pro/Max
- Aktualizacja listy unlimited: "Nano Banana, Seedream, Flux and GPT Image" (wg strony)
- Dodanie unlimited video: Wan 2.2 (480p), Hailuo 2.3 Fast (768p), Kling 2.5 (720p)

### 5. `src/components/course/BestPractices.tsx` - Korekta

- Usuniecie wzmianki o "Seed" 
- Dodanie rady o Custom Characters i Custom Style
- Dodanie rady o uzyciu Reimagine do wariacji
- Dodanie info o SVG download (Premium+)

### 7. `src/components/course/StepByStepGuide.tsx` - Nowa kolorystyka

Zmiana kolorow tutorials z nudnych (emerald, teal) na neonowa palette:

- 01: `from-violet-500 to-purple-600` (fiolet)
- 02: `from-cyan-500 to-blue-600` (cyjan) - bez zmian
- 03: `from-primary to-accent` (fiolet-magenta)
- 04: `from-amber-500 to-orange-600` (amber) - bez zmian
- 05: `from-pink-500 to-rose-600` (magenta)
- 06 (nowy): `from-emerald-500 to-teal-600`

---

## Pliki do edycji (7 plikow):

1. `src/components/course/StepByStepGuide.tsx` - przebudowa tresci + UI + nowy tutorial
2. `src/components/course/TroubleshootingGuide.tsx` - rozbudowa FAQ + korekta faktyczna
3. `src/components/course/ModelComparison.tsx` - aktualizacja modeli
4. `src/components/course/BestPractices.tsx` - korekta rad
5. `src/components/course/HowModelsWork.tsx` - drobna korekta opisu parametrow (CFG/Steps nie sa widoczne w Freepik)