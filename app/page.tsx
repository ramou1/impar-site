import Header from "../components/Header";
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
  MapPin,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: <Snowflake className="w-12 h-12 text-brand-blue" />,
      title: "Climatização",
      description:
        "Instalações de sistemas de água gelada, VRF e splitões com alta eficiência energética",
    },
    {
      icon: <Wind className="w-12 h-12 text-brand-blue" />,
      title: "Ventilação e Exaustão",
      description:
        "Desenvolvimento de projetos completos de ventilação e sistemas de exaustão",
    },
    {
      icon: <Wrench className="w-12 h-12 text-brand-blue" />,
      title: "Manutenção",
      description:
        "Manutenções preventivas e corretivas em sistemas de médio e grande porte",
    },
    {
      icon: <Building className="w-12 h-12 text-brand-blue" />,
      title: "Projetos",
      description:
        "Desenvolvimento de projetos digitais incluindo trabalhos em REVIT",
    },
    {
      icon: <Settings className="w-12 h-12 text-brand-blue" />,
      title: "Automação",
      description:
        "Projetos elétricos de controle e automação para ar condicionado e iluminação",
    },
    {
      icon: <Shield className="w-12 h-12 text-brand-blue" />,
      title: "Consultoria",
      description: "Vistorias técnicas, consultorias e elaboração de PMOC",
    },
  ];

  const principais_obras = [
    {
      nome: "Center Shopping",
      local: "Araranguá - SC",
      capacidade: "650 TR",
      img: "/obras/obra-1.png",
    },
    {
      nome: "Cestto Wenceslau",
      local: "Porto Alegre - RS",
      capacidade: "326 TR",
      img: "/obras/obra-2.png",
    },
    {
      nome: "Cestto Gravataí",
      local: "Gravataí - RS",
      capacidade: "400 TR",
      img: "/obras/obra-3.png",
    },
    {
      nome: "Hospital Regional Tereza Ramos",
      local: "Lages - SC",
      capacidade: "400 TR",
      img: "/obras/obra-4.png",
    },
    {
      nome: "Outlet Japonês",
      local: "Sombrio - SC",
      capacidade: "300 TR",
      img: "/obras/obra-5.png",
    },
    {
      nome: "Organização dos Advogados do Brasil",
      local: "Criciúma - SC",
      capacidade: "43 TR",
      img: "/obras/obra-6.png",
    },
    {
      nome: "Paróquia São Donato",
      local: "Içara - SC",
      capacidade: "118,34 TR",
      img: "/obras/obra-7.png",
    },
    {
      nome: "Hospital São Donato",
      local: "Içara - SC",
      capacidade: "94,75 TR",
      img: "/obras/obra-8.png",
    },
    {
      nome: "AM - Master Hall",
      local: "Criciúma - SC",
      capacidade: "380 TR",
      img: "/obras/obra-9.png",
    },
    {
      nome: "SETRAM",
      local: "Tubarão - SC",
      capacidade: "41,6 TR",
      img: "/obras/obra-10.png",
    },
    {
      nome: "Promotoria da Justiça",
      local: "Lages - SC",
      capacidade: "196,25 TR",
      img: "/obras/obra-11.png",
    },
    {
      nome: "Porto Cali - Meia Praia",
      local: "Itapema - SC",
      capacidade: "409,25 TR",
      img: "/obras/obra-12.png",
    },
  ];

  const atuacoes = [
    {
      img: "/atuacoes/atuacao-1.png",
      titulo: "Painel de controle e automação para Central de água gelada",
    },
    {
      img: "/atuacoes/atuacao-2.png",
      titulo: "Instalações de chiller com compressor parafuso",
    },
    {
      img: "/atuacoes/atuacao-3.png",
      titulo:
        "Instalações de centrais de água gelada, com sistemas de condensação a água",
    },
    {
      img: "/atuacoes/atuacao-4.png",
      titulo: "Instalação de chiller parafusos de alta eficiência",
    },
    {
      img: "/atuacoes/atuacao-5.png",
      titulo:
        "Sistemas de Automação Predial A automação predial traz inúmeros benefícios que são essenciais para um empreendimento moderno",
    },
    {
      img: "/atuacoes/atuacao-6.png",
      titulo: "Execução de sistemas de exaustão e ar externo",
    },
    {
      img: "/atuacoes/atuacao-7.png",
      titulo:
        "Instalação de sistemas tipo split, rooftop e self (ao lado imagem de uma instalação de splitão).",
    },
    {
      img: "/atuacoes/atuacao-8.png",
      titulo:
        "Serviços de funilaria em chapa de aço para solucionar as necessidades da instalação",
    },
    {
      img: "/atuacoes/atuacao-9.png",
      titulo:
        "Execução de sistemas de exaustão atendendo todas as normas vigentes. Execução de dutos soldados em aço carbono, à prova de explosão.",
    },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section
          id="inicio"
          className="relative min-h-[70vh] flex items-center pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white"
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              {/* Conteúdo Textual - Lado Esquerdo */}
              <div className="space-y-8 pt-8 order-2 lg:order-1">
                {/* Tagline */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full border border-blue-100">
                  <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Soluções em Climatização
                  </span>
                </div>

                {/* Título Principal */}
                {/* <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                    IMPAR
                  </h1>
                  <p className="text-2xl md:text-3xl text-gray-700 font-medium">
                    Climatização e Sistemas Ltda.
                  </p>
                </div> */}

                {/* Descrição */}
                {/* <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  Desenvolvimento de projetos de climatização, ventilação e
                  exaustão com <strong className="text-brand-blue"> excelência e qualidade.</strong>
                </p> */}

                <p className="text-2xl text-gray-600 leading-relaxed max-w-lg">
                  Desenvolvimento de projetos de climatização, ventilação e
                  exaustão com <strong className="text-brand-blue"> excelência e qualidade.</strong>
                </p>

                {/* Botões de Ação */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#servicos"
                    className="inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-white font-semibold rounded-xl hover:bg-brand-blue/90 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 group"
                  >
                    Nossos Serviços
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-blue text-brand-blue font-semibold rounded-xl hover:bg-brand-blue hover:text-white transition-all transform hover:scale-105 bg-white/80 backdrop-blur-sm group"
                  >
                    Entre em Contato
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </a>
                </div>

                {/* Estatísticas */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-blue">
                      15+
                    </div>
                    <div className="text-sm text-gray-600">
                      Anos de Experiência
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-blue">
                      500+
                    </div>
                    <div className="text-sm text-gray-600">
                      Projetos Executados
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-blue">
                      100%
                    </div>
                    <div className="text-sm text-gray-600">Satisfação</div>
                  </div>
                </div>
              </div>

              {/* Imagem - Lado Direito */}
              <div className="relative order-1 lg:order-2">
                <div className="relative w-full h-48 md:h-56 lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/banner-hero.png"
                    alt="Impar Climatização e Sistemas"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 to-transparent"></div>
                </div>
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
        <section id="sobre" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Sobre a <span className="text-brand-blue">Impar</span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  A Impar Climatização e Sistemas Ltda é uma{" "}
                  <strong>empresa genuinamente nacional</strong> com sede
                  própria, possuindo alta qualificação e experiência em
                  instalações de ar condicionado central e ventilação.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Atuando com destaque neste mercado por vários anos, primando
                  sempre pela qualidade dos serviços prestados.
                </p>
              </div>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center hover:scale-110 transition-transform">
                  <img
                    src="/sobre/visao.png"
                    alt="Visão"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Visão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ser uma empresa de referência pela qualidade dos serviços
                  executados em sistemas de climatização, reconhecidos pela
                  sociedade, clientes, colaboradores, fornecedores e parceiros.
                </p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center hover:scale-110 transition-transform">
                  <img
                    src="/sobre/missao.png"
                    alt="Missão"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Missão
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Desenvolvimento de soluções para nossos clientes, buscando
                  excelência em serviços voltados na área de climatização,
                  ventilação e exaustão.
                </p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center hover:scale-110 transition-transform">
                  <img
                    src="/sobre/valores.png"
                    alt="Valores"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Valores
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Compromisso com clientes, respeito ao ser humano, ética e
                  excelência nos serviços, mantendo como cultura dentro da
                  empresa.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg text-gray-700 font-semibold">
                <span className="text-brand-red">70%</span> dos nossos
                profissionais possuem formação técnica na área que atuam
              </p>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section
          id="servicos"
          className="py-20 bg-gradient-to-br from-gray-100 to-gray-50"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Nossos <span className="text-brand-blue">Serviços</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Oferecemos soluções completas em climatização com qualidade
                técnica e credenciamento dos principais fabricantes do mercado
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-200"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Segurança */}
        <section id="seguranca" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Segurança para <span className="text-brand-blue">sua Obra</span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Nossos funcionários são todos devidamente registrados,
                  garantindo legalidade dos participantes na obra e evitando
                  incômodos ao contratante.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Os funcionários trabalham com EPIs, uniformizados e
                  identificados, possuem seguro de vida e de acidentes de
                  trabalho.
                </p>
              </div>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-brand-blue p-6 rounded-xl text-white">
                  <div className="w-18 h-18 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">PCMSO</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Programa de Controle Médico de Saúde Ocupacional segundo
                    NR-7
                  </p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mt-4">
                  Nossos funcionários são todos devidamente registrados, o que
                  permite a legalidade dos participantes na obra, evitando
                  incômodos ao contratante. Em nosso quadro funcional, cerca de
                  70% dos profissionais possuem formação técnica na área que
                  atuam, garantindo assim segurança e qualidade nos serviços.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-brand-blue p-6 rounded-xl text-white">
                  <div className="w-18 h-18 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">PGR</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Programa de Gerenciamento de Riscos segundo NR-9
                  </p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mt-4">
                  Os funcionários trabalham com EPIs, uniformizados e
                  identificados, possuem seguro de vida e de acidentes de
                  trabalho.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-brand-blue p-6 rounded-xl text-white">
                  <div className="w-18 h-18 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">LTCAT</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Laudo Técnico das Condições Ambientais de Trabalho
                  </p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mt-4">
                  A empresa possui os Programa de Saúde - PCMSO, segundo NR - 7,
                  programa de treinamento - PGR, segundo NR - 9, LTCAT.NR - 9.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Principais Obras */}
        <section
          id="obras"
          className="py-20 bg-gradient-to-br from-gray-50 to-white"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Principais <span className="text-brand-blue">Obras</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Conheça alguns de nossos projetos de maior destaque executados
                com excelência técnica
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {principais_obras.map((obra, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <img
                      src={obra.img}
                      alt={obra.nome}
                      className="w-32 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <span className="text-2xl font-bold text-brand-red ml-2">
                      {obra.capacidade}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                    {obra.nome}
                  </h3>
                  <p className="text-gray-600 flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                    {obra.local}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Atuações */}
        <section
          id="atuacoes"
          className="py-20 bg-gradient-to-br from-gray-100 to-gray-50"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Nossas <span className="text-brand-blue">Atuações</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Conheça as principais áreas onde atuamos com excelência e
                expertise técnica
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {atuacoes.map((atuacao, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group"
                >
                  <div className="w-48 h-48 mb-4 rounded-lg overflow-hidden mx-auto">
                    <img
                      src={atuacao.img}
                      alt={atuacao.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-base text-center font-medium text-gray-800 mb-2 leading-tight">
                    {atuacao.titulo}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Atuações/Operações/Projetos */}
        <section id="operacoes" className="py-20 bg-brand-blue">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Atuações / <span className="text-brand-blue">Operações</span> / Projetos
              </h2> */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-6">
                Atuações / <span className="text-white">Operações</span> / Projetos
              </h2>
            </div>
            <div className="max-w-7xl mx-auto">
              <div className="bg-brand-blue border border-brand-blue rounded-xl p-1 shadow-lg">
                <img
                  src="/mapa.png"
                  alt="Mapa de atuações, operações e projetos"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Entre em <span className="text-brand-red">Contato</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fale conosco e solicite um orçamento para seu projeto de
                climatização
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-200">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-8 h-8 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Telefone
                  </h3>
                  <a
                    href="tel:+554830898300"
                    className="text-brand-blue hover:opacity-80 font-semibold text-lg transition-colors"
                  >
                    (48) 3089-8300
                  </a>
                </div>

                <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-200">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-8 h-8 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Endereço
                  </h3>
                  <p className="text-gray-600">
                    R. São Ludgero, 1006
                    <br />
                    Barreiros, São José - SC
                  </p>
                </div>

                <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-200">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    E-mail
                  </h3>
                  <a
                    href="mailto:impar@imparsistemas.com"
                    className="text-brand-blue hover:opacity-80 font-semibold transition-colors text-sm"
                  >
                    impar@imparsistemas.com
                  </a>
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
                Prestação de serviços ligados na área de refrigeração,
                climatização e ar condicionado
              </p>
              <p className="text-sm text-gray-500">
                © 2025 Impar Climatização e Sistemas. Todos os direitos
                reservados.
              </p>
            </div>
          </div>
        </footer>
      </main>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/554830898300"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 active:scale-95 transition"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      </a>
    </>
  );
}
