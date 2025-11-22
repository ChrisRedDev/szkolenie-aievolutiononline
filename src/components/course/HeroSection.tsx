const HeroSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-card border border-border/50 rounded-2xl overflow-hidden neon-glow">
          <div className="aspect-video bg-muted relative">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Course Introduction Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Introduction to Freepik Workspace & Spaces – Full Automation Workflow
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Obejrzyj film, aby zobaczyć jak działa Freepik Workspace i jak dzięki Spaces możesz zbudować maszynę do generowania nieograniczonego kontentu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
