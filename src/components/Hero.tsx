import { motion } from "motion/react";
import { Code2, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1a] pt-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#00d4ff] rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#8b5cf6] rounded-full blur-[120px] opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge - Now always visible and properly spaced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a2332] border border-[#00d4ff]/20 mb-8 relative z-10"
          >
            <Sparkles className="w-4 h-4 text-[#00d4ff]" />
            <span className="text-sm text-[#e8eef5]/80">Soluções digitais premium</span>
          </motion.div>

          {/* Main heading - Added padding-bottom to prevent text cutoff */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-6 pb-4"
          >
            <span className="block text-[#e8eef5] pb-3">Transforme sua</span>
            <span className="block bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] bg-clip-text text-transparent pb-4">
              presença digital
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#8b95a8] max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Desenvolvemos sites profissionais e automações inteligentes que elevam
            sua empresa ao próximo nível. Tecnologia de ponta, design impecável e
            resultados mensuráveis.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton strength={0.4}>
              <Button
                size="lg"
                className="bg-[#00d4ff] hover:bg-[#00b8e6] text-[#0a0f1a] px-8 py-6 glow-cyan-strong hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Iniciar projeto
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] via-[#00b8e6] to-[#00d4ff] bg-[length:200%_100%] animate-[shimmer_2s_infinite]" />
              </Button>
            </MagneticButton>
            
            <MagneticButton strength={0.3}>
              <Button
                size="lg"
                variant="outline"
                className="border-[#00d4ff]/30 hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 text-[#e8eef5] px-8 py-6 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Code2 className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Ver portfólio
                </span>
                {/* Border gradient animation */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent bg-[length:200%_100%] group-hover:animate-[shimmer_1.5s_infinite]" />
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Stats - Lower z-index to not cover scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20 pt-12 border-t border-[#00d4ff]/10 relative z-0"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl text-[#00d4ff] mb-2">100%</div>
              <div className="text-sm text-[#8b95a8]">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl text-[#00d4ff] mb-2">24/7</div>
              <div className="text-sm text-[#8b95a8]">Suporte</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl text-[#00d4ff] mb-2">Premium</div>
              <div className="text-sm text-[#8b95a8]">Qualidade</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Increased z-index to be above all elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-[#00d4ff]/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-[#00d4ff] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
