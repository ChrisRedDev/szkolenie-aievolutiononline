import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "@/components/course/HeroSection";
import FreepikFeatures from "@/components/course/FreepikFeatures";
import ImportantLinks from "@/components/course/ImportantLinks";
import AIModels from "@/components/course/AIModels";
import WorkflowSection from "@/components/course/WorkflowSection";
import FreepikSpaces from "@/components/course/FreepikSpaces";
import PromptBuilder from "@/components/course/PromptBuilder";
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
    <div className="min-h-screen relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Gradient overlays */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <FreepikFeatures />
        <ImportantLinks />
        <AIModels />
        <WorkflowSection />
        <FreepikSpaces />
        <PromptBuilder />
        <ExtraFeatures />
        <SocialMediaGenerator />
        <Footer />
      </div>
    </div>
  );
};

export default CoursePage;
