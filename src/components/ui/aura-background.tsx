import React, { useEffect } from 'react';
import { cn } from "@/lib/utils";

interface AuraBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function AuraBackground({ children, className }: AuraBackgroundProps) {
  useEffect(() => {
    // Load Unicorn Studio script
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
      script.onload = function() {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      (document.head || document.body).appendChild(script);
    } else if (!window.UnicornStudio.isInitialized && window.UnicornStudio.init) {
      window.UnicornStudio.init();
      window.UnicornStudio.isInitialized = true;
    }
  }, []);

  return (
    <div className={cn("relative w-full min-h-screen overflow-hidden", className)}>
      {/* Aura Background */}
      <div className="aura-background-component top-0 w-full -z-10 absolute h-full">
        <div 
          data-us-project="TIWE0oFfvUmetsFoxL6u" 
          className="absolute w-full h-full left-0 top-0 -z-10"
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}

// Add type declaration for window
declare global {
  interface Window {
    UnicornStudio: {
      isInitialized: boolean;
      init?: () => void;
    };
  }
}

export default AuraBackground;
