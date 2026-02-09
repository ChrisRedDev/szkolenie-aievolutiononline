import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const CourseProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-50 h-1.5 bg-slate-900/20 backdrop-blur-sm">
            <motion.div
                className="h-full bg-gradient-to-r from-violet-500 via-cyan-500 to-amber-500 origin-left"
                style={{ scaleX }}
            />
        </div>
    );
};

export default CourseProgress;
