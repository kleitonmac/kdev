import { motion } from "motion/react";
import { ExternalLink, Code } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { InteractiveCard } from "./InteractiveCard";

const projects = [
  {
    title: "E-commerce Premium",
    category: "Desenvolvimento Web",
    description: "Plataforma completa de vendas online com sistema de pagamento integrado e painel administrativo.",
    image: "https://images.unsplash.com/photo-1546900703-cf06143d1239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYwNDYzOTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Node.js", "Stripe"],
    stats: { metric: "+250%", label: "Conversão" }
  },
  {
    title: "Automação de Processos",
    category: "Automação",
    description: "Sistema inteligente que automatiza tarefas repetitivas, economizando 20h semanais da equipe.",
    image: "https://images.unsplash.com/photo-1506917288995-8f5ee0aa4c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjA1MDEwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "APIs", "Webhooks"],
    stats: { metric: "20h", label: "Economia/semana" }
  },
  {
    title: "Site Corporativo",
    category: "Desenvolvimento Web",
    description: "Website institucional moderno com CMS integrado para gestão de conteúdo simplificada.",
    image: "https://images.unsplash.com/photo-1658806300183-342fe517d68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwYWJzdHJhY3R8ZW58MXx8fHwxNzYwNDU4MzA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Next.js", "Tailwind", "CMS"],
    stats: { metric: "98", label: "Performance Score" }
  }
];

export function Portfolio() {
  return (
    <section className="py-24 bg-[#0a0f1a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00d4ff] rounded-full blur-[150px] opacity-10" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#8b5cf6] rounded-full blur-[150px] opacity-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#00d4ff] text-sm tracking-wider uppercase mb-4 block">
            Portfólio
          </span>
          <h2 className="text-4xl sm:text-5xl mb-6 pb-3">
            <span className="block pb-2">Projetos que</span>
            <span className="block bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] bg-clip-text text-transparent pb-4">
              entregam resultados
            </span>
          </h2>
          <p className="text-[#8b95a8] text-lg">
            Cada projeto é uma história de sucesso. Veja como transformamos desafios 
            em soluções digitais de alto impacto.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <InteractiveCard intensity={6} glowEffect={true}>
                <div className="bg-[#141b28] rounded-xl overflow-hidden border border-[#00d4ff]/10 hover:border-[#00d4ff]/30 transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden bg-[#1a2332]">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141b28] via-transparent to-transparent opacity-60" />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/20 via-transparent to-[#8b5cf6]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <motion.button 
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.4 }}
                        className="w-12 h-12 rounded-full bg-[#00d4ff] text-[#0a0f1a] flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.6)]"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.button>
                      <motion.button 
                        whileHover={{ scale: 1.2, rotate: -360 }}
                        transition={{ duration: 0.4 }}
                        className="w-12 h-12 rounded-full bg-[#1a2332] text-[#00d4ff] border border-[#00d4ff] flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.4)]"
                      >
                        <Code className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-xs text-[#00d4ff] mb-2 uppercase tracking-wider group-hover:scale-105 inline-block transition-transform">
                      {project.category}
                    </div>
                    <h3 className="text-xl mb-3 group-hover:text-[#00d4ff] transition-colors">{project.title}</h3>
                    <p className="text-[#8b95a8] text-sm mb-4 leading-relaxed group-hover:text-[#e8eef5]/80 transition-colors">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-[#1a2332] text-[#e8eef5] border-[#00d4ff]/20 hover:border-[#00d4ff]/60 hover:bg-[#00d4ff]/10 hover:scale-110 transition-all cursor-pointer"
                          >
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="pt-4 border-t border-[#00d4ff]/10 flex items-center justify-between">
                      <div>
                        <div className="text-2xl text-[#00d4ff] group-hover:scale-110 inline-block transition-transform">{project.stats.metric}</div>
                        <div className="text-xs text-[#8b95a8] group-hover:text-[#e8eef5]/70 transition-colors">{project.stats.label}</div>
                      </div>
                      <motion.div 
                        className="text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ x: 3, y: -3 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-[#8b95a8] mb-4">
            Quer ver seu projeto aqui?
          </p>
          <button className="text-[#00d4ff] hover:text-[#00b8e6] transition-colors inline-flex items-center gap-2 group">
            Vamos conversar
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
