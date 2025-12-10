import { motion } from "motion/react";
import { Globe, Zap, Code, Smartphone, Rocket, Shield } from "lucide-react";
import { Card } from "./ui/card";
import { InteractiveCard } from "./InteractiveCard";
import { GlowingBorder } from "./GlowingBorder";

const services = [
  {
    icon: Globe,
    title: "Sites Profissionais",
    description: "Websites modernos, responsivos e otimizados para conversão. Design impecável que reflete a identidade da sua marca.",
    features: ["Design responsivo", "SEO otimizado", "Performance máxima", "CMS integrado"]
  },
  {
    icon: Zap,
    title: "Automações Inteligentes",
    description: "Automatize processos, economize tempo e aumente a produtividade com soluções personalizadas para seu negócio.",
    features: ["Workflows automatizados", "Integração de APIs", "Processos otimizados", "Escalabilidade"]
  }
];

const features = [
  {
    icon: Code,
    title: "Código limpo",
    description: "Desenvolvimento com as melhores práticas"
  },
  {
    icon: Smartphone,
    title: "Mobile-first",
    description: "Experiência perfeita em todos os dispositivos"
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Velocidade e otimização em cada detalhe"
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Proteção e confiabilidade garantidas"
  }
];

export function Services() {
  return (
    <section className="py-24 bg-[#0a0f1a] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#0f1621] to-[#0a0f1a]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#00d4ff] text-sm tracking-wider uppercase mb-4 block">
              Nossos Serviços
            </span>
            <h2 className="text-4xl sm:text-5xl mb-6 pb-3">
              <span className="block pb-2">Soluções sob medida para</span>
              <span className="block bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] bg-clip-text text-transparent pb-4">
                seu negócio crescer
              </span>
            </h2>
            <p className="text-[#8b95a8] text-lg">
              Combinamos tecnologia de ponta com design excepcional para criar
              experiências digitais que convertem.
            </p>
          </motion.div>
        </div>

        {/* Main services */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <InteractiveCard intensity={8}>
                <GlowingBorder>
                  <Card className="p-8 bg-[#141b28] border-[#00d4ff]/10 hover:border-[#00d4ff]/30 transition-all duration-300 h-full overflow-hidden relative">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/5 via-transparent to-[#8b5cf6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative">
                      <div className="mb-6 w-14 h-14 rounded-lg bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <service.icon className="w-7 h-7 text-[#00d4ff] group-hover:scale-110 transition-transform" />
                      </div>
                      
                      <h3 className="text-2xl mb-4 group-hover:text-[#00d4ff] transition-colors">{service.title}</h3>
                      <p className="text-[#8b95a8] mb-6 leading-relaxed group-hover:text-[#e8eef5]/80 transition-colors">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <motion.li 
                            key={feature} 
                            className="flex items-center text-[#e8eef5]/80"
                            initial={{ x: -10, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] mr-3 group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(0,212,255,0.8)] transition-all" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </GlowingBorder>
              </InteractiveCard>
            </motion.div>
          ))}
        </div>

        {/* Additional features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-lg bg-[#1a2332]/50 border border-[#00d4ff]/5 hover:bg-[#1a2332] hover:border-[#00d4ff]/40 transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <feature.icon className="w-8 h-8 text-[#00d4ff] mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                <h4 className="mb-2 group-hover:text-[#00d4ff] transition-colors">{feature.title}</h4>
                <p className="text-sm text-[#8b95a8] group-hover:text-[#e8eef5]/80 transition-colors">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
