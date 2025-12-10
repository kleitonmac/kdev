import { motion } from "motion/react";
import { Send, Mail, MessageSquare, Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { MagneticButton } from "./MagneticButton";
import { GlowingBorder } from "./GlowingBorder";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "contato@codetrax.com",
    description: "Resposta em até 24h"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    value: "+55 (11) 99999-9999",
    description: "Atendimento rápido"
  },
  {
    icon: Clock,
    title: "Horário",
    value: "Seg - Sex: 9h às 18h",
    description: "Horário comercial"
  }
];

export function Contact() {
  return (
    <section className="py-24 bg-[#0a0f1a] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00d4ff] rounded-full blur-[150px] opacity-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#8b5cf6] rounded-full blur-[150px] opacity-10" />
      
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
            Contato
          </span>
          <h2 className="text-4xl sm:text-5xl mb-6 pb-3">
            <span className="block pb-2">Vamos criar algo</span>
            <span className="block bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] bg-clip-text text-transparent pb-4">
              incrível juntos
            </span>
          </h2>
          <p className="text-[#8b95a8] text-lg">
            Conte-nos sobre seu projeto e descubra como podemos transformar sua visão 
            em realidade digital.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 bg-[#141b28] border-[#00d4ff]/10">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-[#e8eef5]">
                      Nome completo
                    </label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      className="bg-[#1a2332] border-[#00d4ff]/20 focus:border-[#00d4ff] focus:shadow-[0_0_15px_rgba(0,212,255,0.3)] text-[#e8eef5] transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-[#e8eef5]">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="bg-[#1a2332] border-[#00d4ff]/20 focus:border-[#00d4ff] focus:shadow-[0_0_15px_rgba(0,212,255,0.3)] text-[#e8eef5] transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-[#e8eef5]">
                    Assunto
                  </label>
                  <Input
                    id="subject"
                    placeholder="Ex: Desenvolvimento de site institucional"
                    className="bg-[#1a2332] border-[#00d4ff]/20 focus:border-[#00d4ff] focus:shadow-[0_0_15px_rgba(0,212,255,0.3)] text-[#e8eef5] transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-[#e8eef5]">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Conte-nos sobre seu projeto..."
                    rows={6}
                    className="bg-[#1a2332] border-[#00d4ff]/20 focus:border-[#00d4ff] focus:shadow-[0_0_15px_rgba(0,212,255,0.3)] text-[#e8eef5] resize-none transition-all duration-300"
                  />
                </div>

                <MagneticButton strength={0.2} className="w-full">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#00d4ff] hover:bg-[#00b8e6] text-[#0a0f1a] hover:scale-105 hover:shadow-[0_0_40px_rgba(0,212,255,0.6)] transition-all duration-300 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Enviar mensagem
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] via-[#00b8e6] to-[#00d4ff] bg-[length:200%_100%] group-hover:animate-[shimmer_2s_infinite]" />
                  </Button>
                </MagneticButton>

                <p className="text-xs text-[#8b95a8] text-center">
                  Responderemos seu contato em até 24 horas úteis.
                </p>
              </form>
            </Card>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <GlowingBorder>
                  <Card className="p-6 bg-[#141b28] border-[#00d4ff]/10 hover:border-[#00d4ff]/30 transition-all group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <method.icon className="w-6 h-6 text-[#00d4ff] group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-[#8b95a8] mb-1 group-hover:text-[#00d4ff] transition-colors">{method.title}</div>
                        <div className="text-[#e8eef5] mb-1 group-hover:text-[#00d4ff] transition-colors">{method.value}</div>
                        <div className="text-xs text-[#8b95a8] group-hover:text-[#e8eef5]/70 transition-colors">{method.description}</div>
                      </div>
                    </div>
                  </Card>
                </GlowingBorder>
              </motion.div>
            ))}

            {/* CTA Card */}
            <Card className="p-8 bg-gradient-to-br from-[#00d4ff]/10 to-[#8b5cf6]/10 border-[#00d4ff]/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/5 to-[#8b5cf6]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h3 className="text-xl mb-3">Pronto para começar?</h3>
                <p className="text-[#8b95a8] text-sm mb-6 leading-relaxed">
                  Agende uma conversa gratuita e descubra como podemos impulsionar seu negócio.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#0a0f1a] group/btn"
                >
                  Agendar reunião
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
