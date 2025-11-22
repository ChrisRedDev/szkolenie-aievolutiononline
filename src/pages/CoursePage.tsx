import HeroSection from "@/components/course/HeroSection";
import FreepikFeatures from "@/components/course/FreepikFeatures";
import AIModels from "@/components/course/AIModels";
import WorkflowSection from "@/components/course/WorkflowSection";
import PromptBuilder from "@/components/course/PromptBuilder";
import PostCreator from "@/components/course/PostCreator";
import ExtraFeatures from "@/components/course/ExtraFeatures";
import PromptDatabase from "@/components/course/PromptDatabase";
import Footer from "@/components/course/Footer";

const CoursePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FreepikFeatures />
      <AIModels />
      <WorkflowSection />
      <PromptBuilder />
      <PostCreator />
      <ExtraFeatures />
      <PromptDatabase />
      <Footer />
    </div>
  );
};

export default CoursePage;
