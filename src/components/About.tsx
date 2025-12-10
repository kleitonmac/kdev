import { motion } from "motion/react";
import { Target, Award, Lightbulb, Zap } from "lucide-react";
import { GlowingBorder } from "./GlowingBorder";

const values = [
  {
    icon: Target,
    title: "Precisão",
    description: "Cada linha de código, cada pixel, cada detalhe é pensado para entregar excelência."
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Não fazemos projetos comuns. Fazemos soluções que se destacam e impressionam."
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Utilizamos as tecnologias mais avançadas para criar experiências únicas."
  },
  {
    icon: Zap,
    title: "Agilidade",
    description: "Entregamos resultados rápidos sem comprometer a qualidade do trabalho."
  }
];

export function About() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0f1a] to-[#0f1621] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-[#00d4ff] text-sm tracking-wider uppercase mb-4 block">
              Sobre a Codetrax
            </span>
            <h2 className="text-4xl sm:text-5xl mb-6 pb-3">
              <span className="block pb-2">Transformamos ideias em</span>
              <span className="block bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] bg-clip-text text-transparent pb-4">
                soluções digitais de impacto
              </span>
            </h2>
          </motion.div>

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-[#e8eef5] leading-relaxed">
                A <span className="text-[#00d4ff]">Codetrax</span> nasceu com um propósito claro: 
                fornecer soluções digitais premium que realmente fazem a diferença nos negócios 
                dos nossos clientes.
              </p>
              <p className="text-[#8b95a8] leading-relaxed">
                Especializados em desenvolvimento de sites profissionais e automações inteligentes, 
                combinamos expertise técnica com design excepcional. Cada projeto é tratado como 
                único, recebendo atenção total aos detalhes e foco em resultados mensuráveis.
              </p>
              <p className="text-[#8b95a8] leading-relaxed">
                Não somos apenas desenvolvedores. Somos parceiros estratégicos que entendem que 
                sua presença digital é crucial para o sucesso do seu negócio. Por isso, entregamos 
                mais do que código - entregamos valor.
              </p>
              
              <div className="flex items-center gap-4 pt-4">
                <div className="h-px flex-1 bg-gradient-to-r from-[#00d4ff]/50 to-transparent" />
                <span className="text-[#00d4ff] text-sm">Excelência em cada projeto</span>
                <div className="h-px flex-1 bg-gradient-to-l from-[#00d4ff]/50 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#1a2332] to-[#0f1621] border border-[#00d4ff]/20 p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDIxMiwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
                <div className="relative z-10 text-center">
                  <div className="text-6xl sm:text-7xl bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] bg-clip-text text-transparent mb-4">
                    Codetrax
                  </div>
                  <div className="text-[#8b95a8]">Digital Excellence</div>
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00d4ff] via-[#8b5cf6] to-[#00d4ff] opacity-0 group-hover:opacity-20 transition-opacity blur-xl" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group cursor-pointer"
              >
                <GlowingBorder>
                  <div className="p-6 rounded-xl bg-[#141b28]/50 border border-[#00d4ff]/10 hover:border-[#00d4ff]/40 hover:bg-[#141b28] transition-all h-full relative overflow-hidden">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/5 via-transparent to-[#8b5cf6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                        <value.icon className="w-6 h-6 text-[#00d4ff] group-hover:scale-110 transition-transform" />
                      </div>
                      <h3 className="text-lg mb-2 group-hover:text-[#00d4ff] transition-colors">{value.title}</h3>
                      <p className="text-sm text-[#8b95a8] leading-relaxed group-hover:text-[#e8eef5]/80 transition-colors">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </GlowingBorder>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
