import { Menu, X, Code, Zap, Layers, ArrowRight, Check, MessageCircle, Quote, Star, ChevronRight, Rocket, Shield, Users, TrendingUp, Globe, Palette, ArrowLeft } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  IconClock,
  IconMail,
  IconPhone,
  IconBrandWhatsapp,
  IconMessageChatbot,
  IconBrandInstagram,
} from '@tabler/icons-react';
import { InteractiveCard } from './components/InteractiveCard';
import { MagneticButton } from './components/MagneticButton';
import { GlowingBorder } from './components/GlowingBorder';
import { motion } from 'motion/react';

// Componente principal da página inicial
function HomePage({ onNavigateToService }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const form = useRef();
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll quando menu mobile estiver aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          setFormStatus({
            type: 'success',
            message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
          });
          setIsSubmitting(false);
          form.current.reset();
        },
        (error) => {
          setFormStatus({
            type: 'error',
            message: 'Erro ao enviar mensagem. Tente novamente ou use o WhatsApp.'
          });
          setIsSubmitting(false);
          console.log('FAILED...', error.text);
        },
      );
  };

  const services = [
    {
      id: 'web-development',
      icon: Code,
      title: 'Desenvolvimento Web',
      description: 'Criamos websites modernos, responsivos e otimizados para conversão, utilizando tecnologias como React, Next.js e Node.js.',
      features: ['Design Responsivo', 'SEO Otimizado', 'Performance', 'Segurança'],
      fullDescription: 'Desenvolvemos sites e aplicações web de alta performance que convertem visitantes em clientes. Utilizamos as melhores práticas de desenvolvimento para garantir que seu site seja rápido, seguro e otimizado para mecanismos de busca.',
      detailedFeatures: [
        {
          title: 'Design Responsivo',
          description: 'Sites que se adaptam perfeitamente a qualquer dispositivo, desde smartphones até desktops.'
        },
        {
          title: 'SEO Avançado',
          description: 'Otimização completa para mecanismos de busca, aumentando sua visibilidade online.'
        },
        {
          title: 'Performance',
          description: 'Carregamento ultrarrápido para melhor experiência do usuário e SEO.'
        },
        {
          title: 'Segurança',
          description: 'Proteção contra ameaças com certificados SSL e práticas de segurança modernas.'
        }
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js']
    },
    {
      id: 'automation',
      icon: Zap,
      title: 'Automação de Processos',
      description: 'Automatizamos tarefas e fluxos repetitivos com Python, RPA e integrações via API, economizando tempo e reduzindo custos.',
      features: ['Python/RPA', 'Integração API', 'Workflow Automation', 'Análise de Dados'],
      fullDescription: 'Transformamos processos manuais e repetitivos em fluxos automatizados inteligentes. Reduza erros humanos, aumente a eficiência e libere sua equipe para atividades estratégicas.',
      detailedFeatures: [
        {
          title: 'Automação com Python',
          description: 'Scripts personalizados para automatizar qualquer tarefa repetitiva.'
        },
        {
          title: 'Integração de APIs',
          description: 'Conectamos diferentes sistemas e plataformas para trabalhar em harmonia.'
        },
        {
          title: 'RPA (Robotic Process Automation)',
          description: 'Robôs software que imitam ações humanas em sistemas digitais.'
        },
        {
          title: 'Análise de Dados',
          description: 'Processamento e análise automatizada de dados para insights valiosos.'
        }
      ],
      technologies: ['Python', 'Selenium', 'Beautiful Soup', 'API REST', 'Pandas']
    },
    {
      id: 'custom-solutions',
      icon: Layers,
      title: 'Soluções Personalizadas',
      description: 'Desenvolvemos sistemas sob medida para o seu negócio, com painéis administrativos, dashboards e integrações completas.',
      features: ['Sistemas Customizados', 'Dashboards', 'Integrações', 'Suporte 24/7'],
      fullDescription: 'Criamos soluções totalmente personalizadas para atender às necessidades específicas do seu negócio. Desde sistemas de gestão até painéis analíticos complexos.',
      detailedFeatures: [
        {
          title: 'Sistemas Customizados',
          description: 'Desenvolvimento de software sob medida para suas operações específicas.'
        },
        {
          title: 'Dashboards Interativos',
          description: 'Visualização de dados em tempo real para tomada de decisões informadas.'
        },
        {
          title: 'Integrações Completas',
          description: 'Conexão com todos os sistemas existentes na sua empresa.'
        },
        {
          title: 'Suporte Contínuo',
          description: 'Manutenção e evolução constante das soluções implementadas.'
        }
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker']
    }
  ];

  const stats = [
    { number: '50+', label: 'Projetos Entregues' },
    { number: '98%', label: 'Satisfação do Cliente' },
    { number: '24/7', label: 'Suporte' },
    { number: '2h', label: 'Tempo Médio de Resposta' }
  ];

  const benefits = [
    'Experiência com tecnologias modernas (React, Node.js, Python)',
    'Automação e integração total entre plataformas',
    'Suporte e acompanhamento personalizado',
    'Entregas rápidas e seguras',
    'Design centrado no usuário',
    'Otimização para resultados'
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'Proprietário da Prime Barbershop',
      content: 'A KDEV CodeLab transformou completamente nossa presença digital. O site ficou incrível e as automações salvaram 20h semanais!',
      rating: 5,
      avatar: 'CS'
    },
    {
      name: 'Marina Costa',
      role: 'Proprietária da Grão & Aroma Cafeteria',
      content: 'Profissionalismo e qualidade impecáveis. A equipe entendeu exatamente o que precisávamos e entregou além das expectativas.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Roberto Almeida',
      role: 'Diretor de TI da Inovare',
      content: 'Trabalhar com a KDEV CodeLab foi uma experiência excepcional. Eles dominam as tecnologias mais modernas e entregaram um sistema robusto.',
      rating: 5,
      avatar: 'RA'
    }
  ];

  const technologies = [
    { name: 'React/Next.js', icon: Globe },
    { name: 'Node.js', icon: Code },
    { name: 'Python', icon: Zap },
    { name: 'TypeScript', icon: Shield },
    { name: 'Tailwind CSS', icon: Palette },
    { name: 'PostgreSQL', icon: Layers }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleSocialClick = (platform: string) => {
    switch (platform) {
      case 'whatsapp':
        window.open('https://wa.me/5527981911375?text=Olá!%20Gostaria%20de%20conhecer%20os%20serviços%20da%20KDEV', '_blank');
        break;
      case 'email':
        window.location.href = 'mailto:kdevprofissional@gmail.com';
        break;
      case 'linkedin':
        // Adicione o link do LinkedIn aqui
        window.open('https://www.linkedin.com/in/kleitonmacedo/', '_blank');
        break;
      case 'instagram':
        // Adicione o link do Instagram aqui
        window.open('https://www.instagram.com/imkleitondev/', '_blank');
        break;
    }
  };

  const handleServiceClick = (service: string) => {
    switch (service) {
      case 'web-development':
        onNavigateToService('web-development');
        break;
      case 'automation':
        onNavigateToService('automation');
        break;
      case 'custom-solutions':
        onNavigateToService('custom-solutions');
        break;
      case 'consulting':
        scrollToSection('contact');
        break;
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Mobile Menu Overlay com Blur - Fora do Header */}
      {mobileMenuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Mobile Menu Sidebar - Da Esquerda */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 h-full w-[75%] max-w-sm bg-white shadow-2xl z-[70] md:hidden overflow-y-auto"
          >
            <div className="p-8 pt-24">
              <div className="space-y-1 mb-8">
                {[
                  { id: 'inicio', label: 'Início', icon: Rocket },
                  { id: 'services', label: 'Serviços', icon: Code },
                  { id: 'about', label: 'Sobre', icon: Shield },
                  { id: 'depoimentos', label: 'Depoimentos', icon: Quote },
                  { id: 'contact', label: 'Contato', icon: MessageCircle }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center gap-3 w-full text-left px-4 py-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-xl transition-all font-medium group"
                    >
                      <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      {item.label}
                    </button>
                  );
                })}
              </div>

              {/* CTA no Menu Mobile */}
              <div className="space-y-4 mb-8">
                <a
                  href="https://wa.me/5527981911375?text=Olá!%20Gostaria%20de%20conhecer%20os%20serviços%20da%20KDEV"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  <IconBrandWhatsapp className="h-5 w-5" />
                  WhatsApp
                </a>

                <a
                  href="mailto:kdevprofissional@gmail.com"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full border-2 border-green-600 text-green-600 px-6 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all"
                >
                  <IconMail className="h-5 w-5" />
                  E-mail
                </a>
              </div>

              {/* Informações de Contato */}
              <div className="pt-8 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Contato Rápido</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-gray-600">
                    <IconPhone className="h-4 w-4 text-green-600" />
                    <span>(27) 98191-1375</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <IconMail className="h-4 w-4 text-green-600" />
                    <span>kdevprofissional@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <IconClock className="h-4 w-4 text-green-600" />
                    <span>Seg - Sex: 9h às 18h</span>
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="pt-8 border-t border-gray-200 mt-8">
                <h4 className="font-bold text-gray-900 mb-4">Siga-nos</h4>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      handleSocialClick('instagram');
                      setMobileMenuOpen(false);
                    }}
                    className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center
             hover:bg-pink-600 hover:text-white transition-all duration-300
             shadow-sm hover:shadow-md hover:-translate-y-1"
                    title="Instagram"
                  >
                    <IconBrandInstagram
                      className="h-6 w-6 transition-colors duration-300"
                      style={{ color: '#E1306C' }}
                    />
                  </button>

                  <button
                    onClick={() => {
                      handleSocialClick('linkedin');
                      setMobileMenuOpen(false);
                    }}
                    className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center
             hover:bg-blue-700 hover:text-white transition-all duration-300
             shadow-sm hover:shadow-md hover:-translate-y-1"
                    title="LinkedIn"
                  >
                    <Users
                      className="h-6 w-6 transition-colors duration-300"
                      style={{ color: '#0A66C2' }}
                    />
                  </button>


                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' : 'bg-transparent'
        }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-lg blur opacity-75"></div>
                <Code className="relative h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                KDEV CodeLab
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['inicio', 'serviços', 'sobre', 'depoimentos'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`transition-colors font-medium relative group ${isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-300'
                    }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all group-hover:w-full ${isScrolled ? 'bg-green-600' : 'bg-green-300'
                    }`}></span>
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold"
              >
                Contato
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors z-[80] relative ${isScrolled || mobileMenuOpen ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-green-900 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
              <Rocket className="h-4 w-4" />
              <span className="text-sm font-medium">Transformando ideias em realidade digital</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Soluções Digitais{' '}
              <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                Inteligentes
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white mb-10 leading-relaxed max-w-3xl mx-auto">
              Desenvolvemos websites de alto desempenho e automações inteligentes que impulsionam seu negócio com tecnologia de ponta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Começar Projeto
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Nossos Serviços
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative -mt-10 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-gray-50 to-green-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Nossos <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">Serviços</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções completas e personalizadas para impulsionar seu negócio no digital
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <InteractiveCard key={index} className="group" intensity={5}>
                  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-gray-700">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => onNavigateToService(service.id)}
                      className="mt-6 flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all"
                    >
                      Saiba mais
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </InteractiveCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tecnologias que Dominamos</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div key={index} className="flex flex-col items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all">
                  <Icon className="h-8 w-8 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Sobre a <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">KDEV CodeLab</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Somos especialistas em transformar desafios complexos em soluções digitais elegantes e eficientes.
                Combinamos tecnologia de ponta com design intuitivo para entregar resultados que superam expectativas.
              </p>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Por que escolher a KDEV
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all">
                      <div className="bg-green-100 rounded-full p-2 mt-1 flex-shrink-0">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="h-6 w-6 text-white" />
                      <h4 className="text-white font-semibold text-lg">Performance</h4>
                    </div>
                    <p className="text-green-100">Soluções otimizadas para máxima velocidade e eficiência</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="h-6 w-6 text-white" />
                      <h4 className="text-white font-semibold text-lg">Segurança</h4>
                    </div>
                    <p className="text-green-100">Proteção de dados e conformidade com as melhores práticas</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="h-6 w-6 text-white" />
                      <h4 className="text-white font-semibold text-lg">Suporte Dedicado</h4>
                    </div>
                    <p className="text-green-100">Equipe especializada disponível para seu sucesso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              O Que Nossos <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">Clientes</span> Dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Resultados reais de empresas que confiaram na KDEV
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <InteractiveCard key={index} className="group" intensity={3}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <Quote className="h-8 w-8 text-green-600 opacity-20 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm">
              <IconMessageChatbot className="h-10 w-10 text-white" />
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Pronto para <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">transformar</span> seu negócio?
            </h2>

            <p className="text-xl text-white mb-10 leading-relaxed max-w-2xl mx-auto">
              Vamos conversar sobre seu projeto e mostrar como podemos levar sua empresa para o próximo nível com tecnologia.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Formulário de Contato */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Envie sua mensagem</h3>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium text-green-100 mb-2">
                    Nome 
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium text-green-100 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="user_phone" className="block text-sm font-medium text-green-100 mb-2">
                    Telefone (opcional)
                  </label>
                  <input
                    type="tel"
                    id="user_phone"
                    name="user_phone"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-green-100 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all resize-none"
                    placeholder="Conte-nos sobre seu projeto..."
                  />
                </div>

                {formStatus.message && (
                  <div className={`p-4 rounded-lg ${formStatus.type === 'success'
                    ? 'bg-green-500/20 border border-green-400/30 text-green-100'
                    : 'bg-red-500/20 border border-red-400/30 text-red-100'
                    }`}>
                    {formStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <MessageCircle className="h-5 w-5" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-500/20 rounded-xl p-3">
                    <IconBrandWhatsapp className="h-6 w-6 text-green-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">WhatsApp</h4>
                    <p className="text-green-100">(27) 98191-1375</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/5527981911375?text=Olá!%20Gostaria%20de%20conhecer%20os%20serviços%20da%20KDEV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-300 hover:text-green-200 transition-colors font-medium"
                >
                  Iniciar conversa
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500/20 rounded-xl p-3">
                    <IconMail className="h-6 w-6 text-blue-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">E-mail</h4>
                    <p className="text-green-100">kdevprofissional@gmail.com</p>
                  </div>
                </div>
                <a
                  href="mailto:kdevprofissional@gmail.com"
                  className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors font-medium"
                >
                  Enviar e-mail
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-500/20 rounded-xl p-3">
                    <IconClock className="h-6 w-6 text-purple-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Horário de Atendimento</h4>
                    <p className="text-green-100">Segunda a Sexta: 9h às 18h</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-2xl p-6 border border-green-400/30">
                <h4 className="font-semibold text-white mb-3">Resposta Rápida</h4>
                <p className="text-green-100 mb-4">
                  Respondemos todas as mensagens em até 2 horas durante o horário comercial.
                </p>
                <div className="flex items-center gap-2 text-green-300">
                  <Check className="h-5 w-5" />
                  <span className="text-sm font-medium">Garantia de resposta rápida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-lg blur opacity-75"></div>
                  <Code className="relative h-8 w-8 text-white" />
                </div>
                <span className="text-2xl font-bold">KDEV CodeLab</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Transformamos ideias em soluções digitais inteligentes. Desenvolvimento web, automação e inovação para seu negócio.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => handleSocialClick('whatsapp')}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer"
                  title="WhatsApp"
                >
                  <IconBrandWhatsapp className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleSocialClick('email')}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
                  title="E-mail"
                >
                  <IconMail className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleSocialClick('linkedin')}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer"
                  title="LinkedIn"
                >
                  <Users className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleSocialClick('instagram')}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer"
                  title="Instagram"
                >
                  <IconBrandInstagram className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Serviços</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <button
                    onClick={() => handleServiceClick('web-development')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Desenvolvimento Web
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleServiceClick('automation')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Automação de Processos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleServiceClick('custom-solutions')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Soluções Personalizadas
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleServiceClick('consulting')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Consultoria em TI
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contato</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <button
                    onClick={() => handleSocialClick('whatsapp')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    WhatsApp
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSocialClick('email')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    E-mail
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSocialClick('linkedin')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    LinkedIn
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSocialClick('instagram')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Instagram
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 KDEV CodeLab. Todos os direitos reservados.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              Voltar ao topo
              <ArrowRight className="h-4 w-4 rotate-90" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Componente de página de serviço individual
function ServicePage({ service, onBack }) {
  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Header Simples */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-lg blur opacity-75"></div>
                <Code className="relative h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                KDEV CodeLab
              </span>
            </div>

            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors font-semibold"
            >
              <ArrowLeft className="h-5 w-5" />
              Voltar para Home
            </button>
          </div>
        </nav>
      </header>

      {/* Hero do Serviço */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
                <Icon className="h-5 w-5" />
                <span className="text-sm font-medium">Serviço</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {service.title}
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {service.fullDescription}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {service.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-white border border-green-200 text-green-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://wa.me/5527981911375?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20desenvolvimento%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-600 transition-all hover:shadow-xl hover:scale-105"
              >
                <IconBrandWhatsapp className="h-6 w-6" />
                Solicitar Orçamento
              </a>
            </div>

            <div className="flex-1">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center">
                    <div className="bg-white/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">O Que Oferecemos</h3>
                    <div className="space-y-4">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 text-green-100">
                          <Check className="h-5 w-5 text-green-300 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detalhes do Serviço */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Como Trabalhamos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Entenda nosso processo e como podemos transformar sua ideia em realidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.detailedFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-100 rounded-xl w-12 h-12 flex items-center justify-center">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Vamos transformar sua ideia em uma solução digital de sucesso
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/5527981911375?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-600 transition-all hover:shadow-xl hover:scale-105 flex items-center gap-3"
            >
              <IconBrandWhatsapp className="h-6 w-6" />
              Fale conosco via WhatsApp
            </a>

            <button
              onClick={onBack}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Ver outros serviços
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Code className="h-8 w-8 text-green-400" />
            <span className="ml-2 text-2xl font-bold">KDEV CodeLab</span>
          </div>
          <p className="text-gray-400 mb-4">
            Tecnologia que impulsiona o seu negócio.
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 KDEV CodeLab. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Componente App principal com roteamento
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedService, setSelectedService] = useState(null);

  const servicesData = {
    'web-development': {
      id: 'web-development',
      icon: Code,
      title: 'Desenvolvimento Web',
      description: 'Criamos websites modernos, responsivos e otimizados para conversão, utilizando tecnologias como React, Next.js e Node.js.',
      features: ['Design Responsivo', 'SEO Otimizado', 'Performance', 'Segurança'],
      fullDescription: 'Desenvolvemos sites e aplicações web de alta performance que convertem visitantes em clientes. Utilizamos as melhores práticas de desenvolvimento para garantir que seu site seja rápido, seguro e otimizado para mecanismos de busca.',
      detailedFeatures: [
        {
          title: 'Design Responsivo',
          description: 'Sites que se adaptam perfeitamente a qualquer dispositivo, desde smartphones até desktops.'
        },
        {
          title: 'SEO Avançado',
          description: 'Otimização completa para mecanismos de busca, aumentando sua visibilidade online.'
        },
        {
          title: 'Performance',
          description: 'Carregamento ultrarrápido para melhor experiência do usuário e SEO.'
        },
        {
          title: 'Segurança',
          description: 'Proteção contra ameaças com certificados SSL e práticas de segurança modernas.'
        }
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js']
    },
    'automation': {
      id: 'automation',
      icon: Zap,
      title: 'Automação de Processos',
      description: 'Automatizamos tarefas e fluxos repetitivos com Python, RPA e integrações via API, economizando tempo e reduzindo custos.',
      features: ['Python/RPA', 'Integração API', 'Workflow Automation', 'Análise de Dados'],
      fullDescription: 'Transformamos processos manuais e repetitivos em fluxos automatizados inteligentes. Reduza erros humanos, aumente a eficiência e libere sua equipe para atividades estratégicas.',
      detailedFeatures: [
        {
          title: 'Automação com Python',
          description: 'Scripts personalizados para automatizar qualquer tarefa repetitiva.'
        },
        {
          title: 'Integração de APIs',
          description: 'Conectamos diferentes sistemas e plataformas para trabalhar em harmonia.'
        },
        {
          title: 'RPA (Robotic Process Automation)',
          description: 'Robôs software que imitam ações humanas em sistemas digitais.'
        },
        {
          title: 'Análise de Dados',
          description: 'Processamento e análise automatizada de dados para insights valiosos.'
        }
      ],
      technologies: ['Python', 'Selenium', 'Beautiful Soup', 'API REST', 'Pandas']
    },
    'custom-solutions': {
      id: 'custom-solutions',
      icon: Layers,
      title: 'Soluções Personalizadas',
      description: 'Desenvolvemos sistemas sob medida para o seu negócio, com painéis administrativos, dashboards e integrações completas.',
      features: ['Sistemas Customizados', 'Dashboards', 'Integrações', 'Suporte 24/7'],
      fullDescription: 'Criamos soluções totalmente personalizadas para atender às necessidades específicas do seu negócio. Desde sistemas de gestão até painéis analíticos complexos.',
      detailedFeatures: [
        {
          title: 'Sistemas Customizados',
          description: 'Desenvolvimento de software sob medida para suas operações específicas.'
        },
        {
          title: 'Dashboards Interativos',
          description: 'Visualização de dados em tempo real para tomada de decisões informadas.'
        },
        {
          title: 'Integrações Completas',
          description: 'Conexão com todos os sistemas existentes na sua empresa.'
        },
        {
          title: 'Suporte Contínuo',
          description: 'Manutenção e evolução constante das soluções implementadas.'
        }
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker']
    }
  };

  const handleNavigateToService = (serviceId) => {
    setSelectedService(servicesData[serviceId]);
    setCurrentPage('service');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedService(null);
  };

  if (currentPage === 'service' && selectedService) {
    return <ServicePage service={selectedService} onBack={handleBackToHome} />;
  }

  return <HomePage onNavigateToService={handleNavigateToService} />;
}

export default App;