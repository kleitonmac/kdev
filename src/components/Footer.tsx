import { Code2, Mail, Linkedin, Github, Twitter } from "lucide-react";
import { motion } from "motion/react";

const footerLinks = {
  services: [
    { name: "Desenvolvimento Web", href: "#" },
    { name: "Automações", href: "#" },
    { name: "Consultoria", href: "#" },
    { name: "Suporte", href: "#" }
  ],
  company: [
    { name: "Sobre", href: "#" },
    { name: "Portfólio", href: "#" },
    { name: "Depoimentos", href: "#" },
    { name: "Blog", href: "#" }
  ],
  legal: [
    { name: "Privacidade", href: "#" },
    { name: "Termos de Uso", href: "#" },
    { name: "Cookies", href: "#" }
  ]
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "#", label: "Email" }
];

export function Footer() {
  return (
    <footer className="bg-[#0f1621] border-t border-[#00d4ff]/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center">
                <Code2 className="w-6 h-6 text-[#0a0f1a]" />
              </div>
              <span className="text-xl bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] bg-clip-text text-transparent">
                Codetrax
              </span>
            </div>
            <p className="text-[#8b95a8] text-sm mb-6 leading-relaxed max-w-sm">
              Transformando ideias em soluções digitais premium. Desenvolvimento web 
              e automações que elevam seu negócio.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-lg bg-[#1a2332] border border-[#00d4ff]/10 flex items-center justify-center text-[#8b95a8] hover:text-[#00d4ff] hover:border-[#00d4ff]/50 hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#e8eef5] mb-4">Serviços</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#8b95a8] hover:text-[#00d4ff] text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#e8eef5] mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#8b95a8] hover:text-[#00d4ff] text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[#e8eef5] mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#8b95a8] hover:text-[#00d4ff] text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h3 className="text-[#e8eef5] mb-4">Newsletter</h3>
            <p className="text-[#8b95a8] text-sm mb-4">
              Receba dicas e novidades sobre tecnologia.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-3 py-2 bg-[#1a2332] border border-[#00d4ff]/20 rounded-lg text-sm text-[#e8eef5] placeholder:text-[#8b95a8] focus:outline-none focus:border-[#00d4ff]"
              />
              <button className="px-4 py-2 bg-[#00d4ff] hover:bg-[#00b8e6] text-[#0a0f1a] rounded-lg transition-colors flex-shrink-0">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-[#00d4ff]/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#8b95a8] text-sm">
            © {new Date().getFullYear()} Codetrax. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-sm text-[#8b95a8]">
            <span>Desenvolvido com</span>
            <span className="text-[#00d4ff]">♥</span>
            <span>pela Codetrax</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
