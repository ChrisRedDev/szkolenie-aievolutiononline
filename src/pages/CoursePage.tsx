import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuraBackground } from "@/components/ui/aura-background";
import HeroSection from "@/components/course/HeroSection";
import FreepikFeatures from "@/components/course/FreepikFeatures";
import ImportantLinks from "@/components/course/ImportantLinks";
import AIModels from "@/components/course/AIModels";
import WorkflowSection from "@/components/course/WorkflowSection";
import PromptBuilder from "@/components/course/PromptBuilder";
import PostCreator from "@/components/course/PostCreator";
import ExtraFeatures from "@/components/course/ExtraFeatures";
import SocialMediaGenerator from "@/components/course/SocialMediaGenerator";
import Footer from "@/components/course/Footer";

const CoursePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hasAccess = sessionStorage.getItem("courseAccess");
    if (hasAccess !== "granted") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <AuraBackground className="min-h-screen">
      <div className="min-h-screen relative">
        {/* Dark overlay for contrast and readability */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        
        {/* Content */}
        <div className="relative z-10">
          <HeroSection />
          <FreepikFeatures />
          <ImportantLinks />
          <AIModels />
          <WorkflowSection />
          <PromptBuilder />
          <PostCreator />
          <ExtraFeatures />
          <SocialMediaGenerator />
          <Footer />
        </div>
      </div>
    </AuraBackground>
  );
};

export default CoursePage;
