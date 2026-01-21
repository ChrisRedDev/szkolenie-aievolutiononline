import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "@/components/course/HeroSection";
import FreepikFeatures from "@/components/course/FreepikFeatures";
import ImportantLinks from "@/components/course/ImportantLinks";
import AIModels from "@/components/course/AIModels";
import WorkflowSection from "@/components/course/WorkflowSection";
import FreepikSpaces from "@/components/course/FreepikSpaces";
import PromptBuilder from "@/components/course/PromptBuilder";
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
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FreepikFeatures />
      <AIModels />
      <WorkflowSection />
      <FreepikSpaces />
      <PromptBuilder />
      <ImportantLinks />
      <SocialMediaGenerator />
      <Footer />
    </div>
  );
};

export default CoursePage;
