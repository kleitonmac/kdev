import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { InteractiveCard } from "./InteractiveCard";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CEO, TechStart",
    company: "TechStart",
    content: "A Codetrax transformou completamente nossa presença digital. O site novo não só ficou visualmente impecável, mas também triplicou nossas conversões. Profissionalismo e qualidade incomparáveis.",
    rating: 5,
    initials: "CS"
  },
  {
    name: "Marina Costa",
    role: "Diretora de Marketing",
    company: "Inovare",
    content: "As automações desenvolvidas pela Codetrax economizam 20 horas semanais da nossa equipe. O ROI foi impressionante e o suporte é excepcional. Recomendo de olhos fechados.",
    rating: 5,
    initials: "MC"
  },
  {
    name: "Rafael Mendes",
    role: "Founder, GrowthLab",
    company: "GrowthLab",
    content: "Parceria incrível! A equipe entendeu perfeitamente nossa visão e entregou além do esperado. O nível de atenção aos detalhes e a comunicação foram impecáveis durante todo o projeto.",
    rating: 5,
    initials: "RM"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0f1621] to-[#0a0f1a] relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />
      
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
            Depoimentos
          </span>
          <h2 className="text-4xl sm:text-5xl mb-6 pb-3">
            <span className="block pb-2">O que nossos clientes</span>
            <span className="block bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] bg-clip-text text-transparent pb-4">
              dizem sobre nós
            </span>
          </h2>
          <p className="text-[#8b95a8] text-lg">
            A satisfação dos nossos clientes é nossa maior conquista.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <InteractiveCard intensity={5}>
                <div className="bg-[#141b28] rounded-xl p-8 border border-[#00d4ff]/10 hover:border-[#00d4ff]/30 transition-all h-full flex flex-col relative overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/5 via-transparent to-[#8b5cf6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Quote className="w-12 h-12 text-[#00d4ff]" />
                  </div>

                  <div className="relative">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-4 h-4 fill-[#00d4ff] text-[#00d4ff] group-hover:scale-125 group-hover:rotate-12 transition-all" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-[#e8eef5] mb-6 leading-relaxed flex-1 group-hover:text-[#e8eef5] transition-colors">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 border-t border-[#00d4ff]/10 group-hover:border-[#00d4ff]/30 transition-colors">
                      <Avatar className="w-12 h-12 border-2 border-[#00d4ff]/20 group-hover:border-[#00d4ff]/60 group-hover:scale-110 transition-all">
                        <AvatarFallback className="bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 text-[#00d4ff]">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-[#e8eef5] group-hover:text-[#00d4ff] transition-colors">{testimonial.name}</div>
                        <div className="text-sm text-[#8b95a8] group-hover:text-[#e8eef5]/70 transition-colors">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "100%", label: "Satisfação" },
            { value: "50+", label: "Projetos" },
            { value: "30+", label: "Clientes" },
            { value: "5.0", label: "Avaliação" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl text-[#00d4ff] mb-2">{stat.value}</div>
              <div className="text-sm text-[#8b95a8]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
