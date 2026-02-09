import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "@/components/course/HeroSection";
import FreepikIntroduction from "@/components/course/FreepikIntroduction";
import FreepikPricing from "@/components/course/FreepikPricing";
import FreepikFeatures from "@/components/course/FreepikFeatures";
import HowModelsWork from "@/components/course/HowModelsWork";

import ModelComparison from "@/components/course/ModelComparison";
import FreepikSpaces from "@/components/course/FreepikSpaces";
import WorkflowSection from "@/components/course/WorkflowSection";
import EcommerceAutomation from "@/components/course/EcommerceAutomation";
import StepByStepGuide from "@/components/course/StepByStepGuide";
import PromptBuilder from "@/components/course/PromptBuilder";
import BestPractices from "@/components/course/BestPractices";
import SocialMediaGenerator from "@/components/course/SocialMediaGenerator";
import TroubleshootingGuide from "@/components/course/TroubleshootingGuide";
import ImportantLinks from "@/components/course/ImportantLinks";
import Footer from "@/components/course/Footer";
import CourseProgress from "@/components/course/CourseProgress";

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
      <CourseProgress />
      {/* Hero - Welcome */}
      <HeroSection />

      {/* Basics - What is Freepik */}
      <FreepikIntroduction />

      {/* Pricing - Why Premium+ */}
      <FreepikPricing />

      {/* Features Overview */}
      <FreepikFeatures />

      {/* Technical Understanding */}
      <HowModelsWork />

      {/* Models Overview */}


      {/* Detailed Model Comparison */}
      <ModelComparison />

      {/* Workflow Automation */}
      <FreepikSpaces />

      {/* Workflow Examples */}
      <WorkflowSection />

      {/* E-Commerce Automation Video */}
      <EcommerceAutomation />

      {/* Step-by-Step Tutorials */}
      <StepByStepGuide />

      {/* Prompt Building */}
      <PromptBuilder />

      {/* Best Practices */}
      <BestPractices />

      {/* Social Media Content */}
      <SocialMediaGenerator />

      {/* Troubleshooting & FAQ */}
      <TroubleshootingGuide />

      {/* Important Links */}
      <ImportantLinks />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CoursePage;
