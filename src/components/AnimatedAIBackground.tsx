import { motion } from "framer-motion";

const AnimatedAIBackground = () => {
  // Floating dots configuration
  const floatingDots = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: 4 + Math.random() * 4,
    left: `${5 + Math.random() * 90}%`,
    top: `${5 + Math.random() * 90}%`,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Neural Network Grid SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="neural-grid"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            {/* Grid dots */}
            <circle cx="30" cy="30" r="1.5" fill="hsl(220 90% 60%)" />
            <circle cx="0" cy="0" r="1" fill="hsl(280 70% 55%)" />
            <circle cx="60" cy="0" r="1" fill="hsl(280 70% 55%)" />
            <circle cx="0" cy="60" r="1" fill="hsl(173 80% 45%)" />
            <circle cx="60" cy="60" r="1" fill="hsl(173 80% 45%)" />
            {/* Connection lines */}
            <line x1="0" y1="0" x2="30" y2="30" stroke="hsl(220 90% 60%)" strokeWidth="0.5" opacity="0.5" />
            <line x1="60" y1="0" x2="30" y2="30" stroke="hsl(280 70% 55%)" strokeWidth="0.5" opacity="0.5" />
            <line x1="0" y1="60" x2="30" y2="30" stroke="hsl(173 80% 45%)" strokeWidth="0.5" opacity="0.5" />
            <line x1="60" y1="60" x2="30" y2="30" stroke="hsl(220 90% 60%)" strokeWidth="0.5" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#neural-grid)" />
      </svg>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(220 90% 60% / 0.15) 0%, hsl(280 70% 55% / 0.08) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-40 -right-40 w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(280 70% 55% / 0.12) 0%, hsl(320 70% 50% / 0.06) 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(173 80% 45% / 0.1) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Central Pulsing Glow */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(220 90% 60% / 0.2) 0%, transparent 50%)",
          filter: "blur(30px)",
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating AI Dots */}
      {floatingDots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full"
          style={{
            width: dot.size,
            height: dot.size,
            left: dot.left,
            top: dot.top,
            background: `radial-gradient(circle, hsl(${[220, 280, 173][dot.id % 3]} ${[90, 70, 80][dot.id % 3]}% ${[60, 55, 45][dot.id % 3]}%) 0%, transparent 70%)`,
            boxShadow: `0 0 ${dot.size * 2}px hsl(${[220, 280, 173][dot.id % 3]} ${[90, 70, 80][dot.id % 3]}% ${[60, 55, 45][dot.id % 3]}% / 0.5)`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(220 90% 60%)" stopOpacity="0.6" />
            <stop offset="50%" stopColor="hsl(280 70% 55%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(173 80% 45%)" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="line-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(173 80% 45%)" stopOpacity="0.5" />
            <stop offset="50%" stopColor="hsl(220 90% 60%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(280 70% 55%)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        <motion.path
          d="M0,200 Q400,100 800,300 T1600,200"
          stroke="url(#line-gradient-1)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{
            pathLength: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
            opacity: { duration: 1 },
          }}
        />
        
        <motion.path
          d="M100,400 Q500,200 900,500 T1500,300"
          stroke="url(#line-gradient-2)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.25 }}
          transition={{
            pathLength: { duration: 4, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
            opacity: { duration: 1, delay: 1 },
          }}
        />

        <motion.path
          d="M200,600 Q600,400 1000,700 T1400,500"
          stroke="url(#line-gradient-1)"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{
            pathLength: { duration: 5, delay: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
            opacity: { duration: 1, delay: 2 },
          }}
        />
      </svg>

      {/* Mesh Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(ellipse 50% 50% at 20% 30%, hsl(220 90% 60% / 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 40% 40% at 80% 20%, hsl(280 70% 55% / 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 45% 45% at 60% 80%, hsl(173 80% 45% / 0.1) 0%, transparent 50%)
          `,
        }}
      />

      {/* Top Fade */}
      <div
        className="absolute top-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to bottom, hsl(0 0% 100%) 0%, transparent 100%)",
        }}
      />
    </div>
  );
};

export default AnimatedAIBackground;
