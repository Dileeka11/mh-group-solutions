import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
}

const AnimatedCounter = ({ end, duration = 2, suffix = "", label }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center relative group"
    >
      {/* Glow ring behind */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-24 h-24 rounded-full bg-primary/10 blur-xl group-hover:bg-primary/20 transition-all duration-500" />
      </div>

      <div className="relative">
        <div className="text-4xl md:text-5xl font-heading font-bold text-gradient-emerald">
          {count}{suffix}
        </div>
        <div className="text-white/50 mt-2 text-sm font-medium tracking-wide uppercase">
          {label}
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedCounter;
