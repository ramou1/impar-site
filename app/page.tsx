import Header from '../components/Header'
import { 
  Snowflake, 
  Wind, 
  Wrench, 
  Building, 
  Shield, 
  Award,
  Users,
  Settings,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'
import { MessageCircle } from 'lucide-react'

export default function Home() {
  const services = [
    {
      icon: <Snowflake className="w-12 h-12 text-navy" />,
      title: "Climatização",
      description: "Instalações de sistemas de água gelada, VRF e splitões com alta eficiência energética"
    },
    {
      icon: <Wind className="w-12 h-12 text-navy" />,
      title: "Ventilação e Exaustão",
      description: "Desenvolvimento de projetos completos de ventilação e sistemas de exaustão"
    },
    {
      icon: <Wrench className="w-12 h-12 text-navy" />,
      title: "Manutenção",
      description: "Manutenções preventivas e corretivas em sistemas de médio e grande porte"
    },
    {
      icon: <Building className="w-12 h-12 text-navy" />,
      title: "Projetos",
      description: "Desenvolvimento de projetos digitais incluindo trabalhos em REVIT"
    },
    {
      icon: <Settings className="w-12 h-12 text-navy" />,
      title: "Automação",
      description: "Projetos elétricos de controle e automação para ar condicionado e iluminação"
    },
    {
      icon: <Shield className="w-12 h-12 text-navy" />,
      title: "Consultoria",
      description: "Vistorias técnicas, consultorias e elaboração de PMOC"
    }
  ]

  const principais_obras = [
    { nome: "Center Shopping", local: "Araranguá - SC", capacidade: "650 TR" },
    { nome: "Cestto Gravataí", local: "Gravataí - RS", capacidade: "400 TR" },
    { nome: "Hospital Regional Tereza Ramos", local: "Lages - SC", capacidade: "400 TR" },
    { nome: "Porto Cali - Meia Praia", local: "Itapema - SC", capacidade: "409,25 TR" },
    { nome: "AM - Master Hall", local: "Criciúma - SC", capacidade: "380 TR" },
    { nome: "Cestto Wenceslau", local: "Porto Alegre - RS", capacidade: "326 TR" },
    { nome: "Outlet Japonês", local: "Sombrio - SC", capacidade: "300 TR" },
    { nome: "Promotoria da Justiça", local: "Lages - SC", capacidade: "196,25 TR" }
  ]

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section id="inicio" className="relative min-h-[75vh] md:min-h-[75vh] flex items-center pt-16 bg-[url('/bg-hero.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  IMPAR
                </h1>
                <p className="text-2xl md:text-3xl opacity-90 mb-6">
                  Climatização e Sistemas Ltda.
                </p>
              </div>
              
              <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-95">
                Desenvolvimento de projetos de climatização, ventilação e exaustão com 
                <strong className="text-navy"> excelência e qualidade</strong>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href="#servicos"
                  className="inline-flex items-center justify-center px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:brightness-90 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Nossos Serviços
                </a>
                <a 
                  href="#contato"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-navy text-navy font-semibold rounded-lg hover:bg-navy hover:text-white transition-all transform hover:scale-105 bg-white/0"
                >
                  Entre em Contato
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Marcas - Carrossel */}
        <section className="py-6 md:py-10 bg-gray-200">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden">
              <div className="flex gap-12 animate-[scroll_12s_linear_infinite] md:animate-[scroll_16s_linear_infinite] will-change-transform">
                {[...Array(8)].map((_, i) => (
                  <img
                    key={i}
                    src={`/brands/logo0${i + 1}.png`}
                    alt={`Logo ${i + 1}`}
                    className="shrink-0 h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                  />
                ))}
                {[...Array(8)].map((_, i) => (
                  <img
                    key={`dup-${i}`}
                    src={`/brands/logo0${i + 1}.png`}
                    alt={`Logo ${i + 1}`}
                    className="shrink-0 h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sobre a Empresa */}
        <section id="empresa" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Sobre a <span className="text-navy">Impar</span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  A Impar Climatização e Sistemas Ltda é uma <strong>empresa genuinamente nacional</strong> com sede própria, 
                  possuindo alta qualificação e experiência em instalações de ar condicionado central e ventilação.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Atuando com destaque neste mercado por vários anos, primando sempre pela qualidade dos serviços prestados.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Award className="w-16 h-16 text-navy mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Visão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ser uma empresa de referência pela qualidade dos serviços executados em sistemas de climatização, 
                  reconhecidos pela sociedade, clientes, colaboradores, fornecedores e parceiros.
                </p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Users className="w-16 h-16 text-navy mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Missão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Desenvolvimento de soluções para nossos clientes, buscando excelência em serviços voltados 
                  na área de climatização, ventilação e exaustão.
                </p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Shield className="w-16 h-16 text-navy mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Valores</h3>
                <p className="text-gray-600 leading-relaxed">
                  Compromisso com clientes, respeito ao ser humano, ética e excelência nos serviços, 
                  mantendo como cultura dentro da empresa.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg text-gray-700 font-semibold">
                <span className="text-primary-red">70%</span> dos nossos profissionais possuem formação técnica na área que atuam
              </p>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Nossos <span className="text-navy">Serviços</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Oferecemos soluções completas em climatização com qualidade técnica e 
                credenciamento dos principais fabricantes do mercado
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principais Obras */}
        <section id="obras" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Principais <span className="text-navy">Obras</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Conheça alguns de nossos projetos de maior destaque executados com excelência técnica
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {principais_obras.map((obra, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Building className="w-8 h-8 text-navy flex-shrink-0" />
                    <span className="text-2xl font-bold text-primary-red ml-2">{obra.capacidade}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">{obra.nome}</h3>
                  <p className="text-gray-600 flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                    {obra.local}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Segurança */}
        <section id="seguranca" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Segurança para <span className="text-blue-400">sua Obra</span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Nossos funcionários são todos devidamente registrados, garantindo legalidade dos participantes 
                  na obra e evitando incômodos ao contratante.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Os funcionários trabalham com EPIs, uniformizados e identificados, possuem seguro de vida 
                  e de acidentes de trabalho.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">PCMSO</h3>
                <p className="text-gray-300 leading-relaxed">
                  Programa de Controle Médico de Saúde Ocupacional segundo NR-7
                </p>
              </div>

              <div className="text-center p-8 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">PGR</h3>
                <p className="text-gray-300 leading-relaxed">
                  Programa de Gerenciamento de Riscos segundo NR-9
                </p>
              </div>

              <div className="text-center p-8 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">LTCAT</h3>
                <p className="text-gray-300 leading-relaxed">
                  Laudo Técnico das Condições Ambientais de Trabalho
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Entre em <span className="text-primary-red">Contato</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fale conosco e solicite um orçamento para seu projeto de climatização
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-8 h-8 text-navy" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Telefone</h3>
                  <a 
                    href="tel:+554830898300" 
                    className="text-navy hover:opacity-80 font-semibold text-lg transition-colors"
                  >
                    (48) 3089-8300
                  </a>
                </div>

                <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-navy" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">E-mail</h3>
                  <a 
                    href="mailto:impar@imparsistemas.com" 
                    className="text-navy hover:opacity-80 font-semibold transition-colors"
                  >
                    impar@imparsistemas.com
                  </a>
                </div>

                <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-8 h-8 text-navy" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Endereço</h3>
                  <p className="text-gray-600">
                    R. São Ludgero, 1006<br />
                    Barreiros, São José - SC
                  </p>
                </div>
              </div>

              <div className="text-center bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-100">
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Informações da Empresa</h4>
                    <p className="text-gray-600">
                      <strong>CNPJ:</strong> 19.043.304/0001-64<br />
                      <strong>Registro CREA-SC:</strong> 125.050-2
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Responsáveis Técnicos</h4>
                    <p className="text-gray-600">
                      Rogers Rogério Farias<br />
                      Rafael Ramos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <img src="/logo-dark.png" alt="Impar" className="h-10 w-auto" />
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Prestação de serviços ligados na área de refrigeração, climatização e ar condicionado
              </p>
              <p className="text-sm text-gray-500">
                © 2025 Impar Climatização e Sistemas. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>

      </main>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5547999999999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 active:scale-95 transition"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </>
  )
}