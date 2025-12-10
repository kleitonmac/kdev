import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ReactNode, useRef, MouseEvent } from "react";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glowEffect?: boolean;
}

export function InteractiveCard({ 
  children, 
  className = "", 
  intensity = 10,
  glowEffect = true 
}: InteractiveCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-intensity, intensity]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {glowEffect && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00d4ff] via-[#8b5cf6] to-[#00d4ff] rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500" />
      )}
      <div style={{ transform: "translateZ(20px)" }} className="relative">
        {children}
      </div>
    </motion.div>
  );
}
