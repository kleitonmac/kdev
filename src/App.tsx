import { Menu, X, Code, Zap, Layers, ArrowRight, Check, MessageCircle, Quote, Star } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: Code,
      title: 'Desenvolvimento Web',
      description: 'Criamos websites modernos, responsivos e otimizados para conversão, utilizando tecnologias como React, Next.js e Node.js.'
    },
    {
      icon: Zap,
      title: 'Automação de Processos',
      description: 'Automatizamos tarefas e fluxos repetitivos com Python, RPA e integrações via API, economizando tempo e reduzindo custos.'
    },
    {
      icon: Layers,
      title: 'Soluções Personalizadas',
      description: 'Desenvolvemos sistemas sob medida para o seu negócio, com painéis administrativos, dashboards e integrações completas.'
    }
  ];

  const benefits = [
    'Experiência com tecnologias modernas (React, Node.js, Python)',
    'Automação e integração total entre plataformas',
    'Suporte e acompanhamento personalizado',
    'Entregas rápidas e seguras'
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'Proprietário da Prime Barbershop',
      content: 'A KDEV transformou completamente nossa presença digital. O site ficou incrível!',
      rating: 5
    },
    {
      name: 'Marina Costa',
      role: 'Proprietária da Grão & Aroma Cafeteria',
      content: 'Profissionalismo e qualidade impecáveis. A equipe entendeu exatamente o que precisávamos e entregou além das expectativas. Nosso faturamento online cresceu 150%!',
      rating: 5
    },
    {
      name: 'Roberto Almeida',
      role: 'Diretor de TI da Inovare',
      content: 'Trabalhar com a KDEV foi uma experiência excepcional. Eles dominam as tecnologias mais modernas e entregaram um sistema robusto e escalável.',
      rating: 5
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Code className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">KDEV</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('depoimentos')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Contato
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-gray-100">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                Inicio
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                Serviços
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                Sobre
              </button>
              <button onClick={() => scrollToSection('depoimentos')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                  Depoimentos
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg">
                Contato
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Transformamos Ideias em{' '}
              <span className="text-blue-600">Soluções Digitais</span> Inteligentes
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed">
              A KDEV é especializada em desenvolvimento de websites profissionais e automações inteligentes com foco em performance, design e resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-lg hover:scale-105"
              >
                Solicitar Orçamento
                <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all hover:shadow-lg"
              >
                Conheça nossos serviços
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções completas para transformar seu negócio no digital
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-50 p-8 rounded-2xl hover:bg-blue-600 transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <div className="bg-blue-100 group-hover:bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors">
                    <Icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-blue-50 leading-relaxed transition-colors">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Sobre a KDEV
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                A KDEV nasceu com a missão de simplificar o digital para empresas e empreendedores.
                Nossa equipe combina tecnologia, design e estratégia para entregar soluções que geram valor real.
              </p>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Por que escolher a KDEV
                </h3>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-blue-600 rounded-full p-1 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-lg text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <Code className="h-6 w-6 text-white" />
                      <h4 className="text-white font-semibold text-lg">Tecnologia de Ponta</h4>
                    </div>
                    <p className="text-blue-100">React, Node.js, Python e muito mais</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="h-6 w-6 text-white" />
                      <h4 className="text-white font-semibold text-lg">Resultados Rápidos</h4>
                    </div>
                    <p className="text-blue-100">Entregas ágeis e eficientes</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <Layers className="h-6 w-6 text-white" />
                      <h4 className="text-white font-semibold text-lg">Suporte Completo</h4>
                    </div>
                    <p className="text-blue-100">Do planejamento ao pós-lançamento</p>
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
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Resultados reais de quem confia na KDEV
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-10 w-10 text-blue-600 mb-4 opacity-50" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <MessageCircle className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Pronto para elevar seu negócio com tecnologia?
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Entre em contato conosco e descubra como podemos transformar suas ideias em soluções digitais de alta performance.
          </p>
          <a
            href="https://wa.me/5511961728584?text=Olá!%20Gostaria%20de%20conhecer%20os%20serviços%20da%20KDEV"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 text-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all hover:shadow-xl hover:scale-105"
          >
            <MessageCircle className="h-6 w-6" />
            Fale conosco via WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Code className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-2xl font-bold">KDEV</span>
          </div>
          <p className="text-gray-400 mb-4">
            Tecnologia que impulsiona o seu negócio.
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 KDEV. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
