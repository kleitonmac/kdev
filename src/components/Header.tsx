import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Code2, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { MagneticButton } from "./MagneticButton";

const navItems = [
  { name: "Início", href: "#hero" },
  { name: "Serviços", href: "#services" },
  { name: "Sobre", href: "#about" },
  { name: "Portfólio", href: "#portfolio" },
  { name: "Depoimentos", href: "#testimonials" }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0f1a]/95 backdrop-blur-md border-b border-[#00d4ff]/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Code2 className="w-6 h-6 text-[#0a0f1a]" />
            </div>
            <span className="text-xl bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] bg-clip-text text-transparent">
              Codetrax
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#e8eef5] hover:text-[#00d4ff] transition-all duration-300 text-sm relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(0,212,255,0.6)]" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <MagneticButton strength={0.3}>
              <Button
                className="bg-[#00d4ff] hover:bg-[#00b8e6] text-[#0a0f1a] px-6 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Iniciar projeto</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] via-[#00b8e6] to-[#00d4ff] bg-[length:200%_100%] group-hover:animate-[shimmer_1.5s_infinite]" />
              </Button>
            </MagneticButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#e8eef5] hover:text-[#00d4ff] transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0f1621] border-t border-[#00d4ff]/10"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#e8eef5] hover:text-[#00d4ff] transition-colors py-2 border-b border-[#00d4ff]/10 last:border-0"
                >
                  {item.name}
                </motion.a>
              ))}
              <Button
                className="bg-[#00d4ff] hover:bg-[#00b8e6] text-[#0a0f1a] w-full mt-4"
              >
                Iniciar projeto
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
