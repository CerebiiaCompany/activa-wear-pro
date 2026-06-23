import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "es" | "en" | "pt";

export type Country = {
  code: string;
  name: string;
  flag: string;
  lang: Lang;
};

export const COUNTRIES: Country[] = [
  { code: "CO", name: "Colombia", flag: "🇨🇴", lang: "es" },
  { code: "MX", name: "México", flag: "🇲🇽", lang: "es" },
  { code: "PA", name: "Panamá", flag: "🇵🇦", lang: "es" },
  { code: "EC", name: "Ecuador", flag: "🇪🇨", lang: "es" },
  { code: "PE", name: "Perú", flag: "🇵🇪", lang: "es" },
  { code: "CL", name: "Chile", flag: "🇨🇱", lang: "es" },
  { code: "CR", name: "Costa Rica", flag: "🇨🇷", lang: "es" },
  { code: "ES", name: "España", flag: "🇪🇸", lang: "es" },
  { code: "US", name: "United States", flag: "🇺🇸", lang: "en" },
  { code: "CA", name: "Canada", flag: "🇨🇦", lang: "en" },
  { code: "BR", name: "Brasil", flag: "🇧🇷", lang: "pt" },
  { code: "PT", name: "Portugal", flag: "🇵🇹", lang: "pt" },
];

type Dict = Record<string, string>;

const es: Dict = {
  "nav.home": "Inicio",
  "nav.about": "Nosotros",
  "nav.lines": "Líneas",
  "nav.clients": "Clientes",
  "nav.projects": "Proyectos",
  "nav.blog": "Blog",
  "nav.contact": "Contacto",
  "cta.quote": "Solicitar Cotización",
  "cta.catalog": "Ver Catálogo",
  "cta.advisor": "Contactar Asesor",
  "cta.viewAll": "Ver todos",
  "cta.viewLine": "Ver línea",
  "cta.viewDetails": "Ver detalles",
  "menu.label": "Menú",

  "hero.badge": "Dotaciones empresariales premium",
  "hero.title1": "Uniformes Empresariales que",
  "hero.titleHighlight": "fortalecen la identidad",
  "hero.title2": "de tu marca.",
  "hero.desc": "Diseñamos y confeccionamos uniformes corporativos que combinan imagen, funcionalidad, comodidad y calidad para empresas que buscan proyectar profesionalismo.",
  "hero.stat1": "Años de experiencia",
  "hero.stat2": "Empresas atendidas",
  "hero.stat3": "Producción personalizada",
  "hero.stat4": "Cobertura nacional e internacional",

  "clients.title": "Empresas que confían en nosotros",

  "about.kicker": "Nosotros",
  "about.title": "Una trayectoria construida prenda a prenda.",
  "about.desc": "Activa Uniformes nació del sueño de {founder}, una emprendedora nortesantandereana con visión de futuro y un liderazgo comprometido con la calidad, el servicio y la cercanía con cada cliente.",
  "about.history": "Historia",
  "about.history.2008": "María de la Paz Parada inicia su sueño emprendedor y se forma en confección industrial en el SENA.",
  "about.history.2010": "Cuatro años de experiencia laboral y formación continua, perfeccionando conocimientos y visión empresarial.",
  "about.history.2014": "Formalización oficial de Activa Uniformes, con el respaldo de su familia y un equipo creciente.",
  "about.history.today": "Hoy",
  "about.history.todayText": "Empresa reconocida en Norte de Santander por su calidad, puntualidad y atención personalizada.",
  "about.mission": "Misión",
  "about.missionText": "\"Diseñamos y confeccionamos prendas de vestir de dotación empresarial que reflejan identidad, funcionalidad y estilo, con un compromiso firme por la calidad, la innovación y la cercanía con nuestros clientes.\"",
  "about.vision": "Visión",
  "about.visionText": "\"Ser para 2028 la marca de referencia en Colombia y la región en uniformes y dotaciones empresariales, reconocida por su calidad, innovación y compromiso con el cliente.\"",

  "lines.kicker": "Líneas de Producción",
  "lines.title": "Una solución para cada sector.",
  "lines.desc": "Desde dotaciones administrativas hasta uniformes técnicos especializados, desarrollamos cada línea con fotografía, diseño y producción dedicada.",
  "line.admin": "Administrativo",
  "line.admin.desc": "Uniformes corporativos y ejecutivos.",
  "line.polo": "Camibusos",
  "line.polo.desc": "Prendas empresariales casuales.",
  "line.vest": "Chalecos",
  "line.vest.desc": "Uniformes operativos y corporativos.",
  "line.school": "Escolar",
  "line.school.desc": "Uniformes académicos e institucionales.",
  "line.industrial": "Industrial",
  "line.industrial.desc": "Dotaciones industriales y de seguridad.",
  "line.chef": "Restaurante y Cocina",
  "line.chef.desc": "Uniformes gastronómicos y hoteleros.",
  "line.health": "Salud y Belleza",
  "line.health.desc": "Uniformes médicos, clínicas, spas y centros estéticos.",

  "why.kicker": "Por qué elegirnos",
  "why.title": "Detrás de cada uniforme, una promesa de excelencia.",
  "value.commitment.t": "Compromiso con el Cliente",
  "value.commitment.d": "Ponemos al cliente en el centro: escuchamos, entendemos y resolvemos con agilidad y cercanía.",
  "value.innovation.t": "Innovación y Mejora Continua",
  "value.innovation.d": "Desafiamos lo establecido y buscamos nuevas formas de hacer mejor nuestro trabajo.",
  "value.responsibility.t": "Responsabilidad y Sostenibilidad",
  "value.responsibility.d": "Actuamos con ética hacia nuestras comunidades y el medio ambiente.",
  "value.quality.t": "Calidad con Compromiso",
  "value.quality.d": "Altos estándares en diseño, materiales y confección para prendas funcionales y duraderas.",
  "value.team.t": "Trabajo en Equipo",
  "value.team.d": "Comunicación abierta, respeto y cooperación: los mejores resultados se logran juntos.",
  "value.passion.t": "Orgullo y Pasión por Servir",
  "value.passion.d": "Amamos lo que hacemos y nos motiva fortalecer la identidad de quienes nos visten.",

  "projects.kicker": "Proyectos",
  "projects.title": "Empresas vestidas con propósito.",
  "projects.desc": "Una selección de proyectos donde el diseño, la confección y la marca convergen.",

  "process.kicker": "Proceso de trabajo",
  "process.title": "Un método claro, de extremo a extremo.",
  "process.s1.t": "Diagnóstico",
  "process.s1.d": "Analizamos necesidades.",
  "process.s2.t": "Diseño",
  "process.s2.d": "Creamos propuestas visuales.",
  "process.s3.t": "Producción",
  "process.s3.d": "Fabricación especializada.",
  "process.s4.t": "Control de Calidad",
  "process.s4.d": "Validación de cada prenda.",
  "process.s5.t": "Entrega",
  "process.s5.d": "Despacho y acompañamiento.",

  "testimonials.kicker": "Testimonios",
  "testimonials.title": "Lo que dicen las empresas que vestimos.",

  "blog.kicker": "Blog",
  "blog.title": "Ideas, tendencias y conocimiento textil.",

  "ctaFinal.title": "Tu equipo merece una imagen que inspire confianza.",
  "ctaFinal.desc": "Diseñamos uniformes que fortalecen la identidad de tu empresa y proyectan profesionalismo.",
  "ctaFinal.b1": "Respuesta en 24h",
  "ctaFinal.b2": "Asesoría sin costo",
  "ctaFinal.b3": "Cobertura nacional",

  "footer.tagline": "Diseño, confección y comercialización de uniformes empresariales y dotaciones corporativas. Vestimos tu equipo. Proyectamos tu grandeza.",
  "footer.nav": "Navegación",
  "footer.contact": "Contacto",
  "footer.social": "Redes sociales",
  "footer.whatsapp": "WhatsApp 24/7",
  "footer.location": "Cúcuta, Norte de Santander, Colombia",
  "footer.rights": "Todos los derechos reservados.",
  "footer.designed": "Diseñado en Colombia · Proyectamos tu grandeza.",

  "lang.country": "País",
  "lang.choose": "Elige tu país / idioma",

  "quote.title": "Solicitar Cotización",
  "quote.subtitle": "Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas.",
  "quote.name": "Nombre completo",
  "quote.company": "Empresa",
  "quote.email": "Correo electrónico",
  "quote.phone": "Teléfono / WhatsApp",
  "quote.country": "País",
  "quote.line": "Línea de interés",
  "quote.linePlaceholder": "Selecciona una línea",
  "quote.qty": "Cantidad aproximada",
  "quote.qtyPlaceholder": "Ej. 50 unidades",
  "quote.message": "Mensaje",
  "quote.messagePlaceholder": "Cuéntanos sobre tu proyecto, fechas y necesidades…",
  "quote.submit": "Enviar solicitud",
  "quote.sending": "Enviando…",
  "quote.success": "¡Solicitud enviada!",
  "quote.successDesc": "Un asesor de Activa Uniformes se pondrá en contacto contigo muy pronto.",
  "quote.close": "Cerrar",
  "quote.required": "Campo requerido",
  "quote.privacy": "Al enviar aceptas que tus datos serán usados solo para responder tu solicitud.",
};

const en: Dict = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.lines": "Lines",
  "nav.clients": "Clients",
  "nav.projects": "Projects",
  "nav.blog": "Blog",
  "nav.contact": "Contact",
  "cta.quote": "Request a Quote",
  "cta.catalog": "View Catalog",
  "cta.advisor": "Talk to an Advisor",
  "cta.viewAll": "View all",
  "cta.viewLine": "View line",
  "cta.viewDetails": "View details",
  "menu.label": "Menu",

  "hero.badge": "Premium corporate workwear",
  "hero.title1": "Corporate uniforms that",
  "hero.titleHighlight": "strengthen the identity",
  "hero.title2": "of your brand.",
  "hero.desc": "We design and manufacture corporate uniforms that combine image, function, comfort and quality for companies that want to project professionalism.",
  "hero.stat1": "Years of experience",
  "hero.stat2": "Companies served",
  "hero.stat3": "Custom production",
  "hero.stat4": "National & international coverage",

  "clients.title": "Companies that trust us",

  "about.kicker": "About us",
  "about.title": "A track record built one garment at a time.",
  "about.desc": "Activa Uniformes was born from the dream of {founder}, an entrepreneur from Norte de Santander with a forward-thinking vision and a leadership committed to quality, service, and a close relationship with every client.",
  "about.history": "History",
  "about.history.2008": "María de la Paz Parada begins her entrepreneurial journey and trains in industrial garment manufacturing at SENA.",
  "about.history.2010": "Four years of work experience and continuous learning, sharpening her craft and business vision.",
  "about.history.2014": "Official launch of Activa Uniformes, backed by her family and a growing team.",
  "about.history.today": "Today",
  "about.history.todayText": "A recognized company in Norte de Santander for its quality, punctuality and personalized service.",
  "about.mission": "Mission",
  "about.missionText": "\"We design and manufacture corporate workwear that reflects identity, functionality and style, with a firm commitment to quality, innovation and closeness with our clients.\"",
  "about.vision": "Vision",
  "about.visionText": "\"To become, by 2028, the reference brand in Colombia and the region for corporate uniforms and workwear, recognized for our quality, innovation and client commitment.\"",

  "lines.kicker": "Production Lines",
  "lines.title": "A solution for every sector.",
  "lines.desc": "From corporate office wear to specialized technical uniforms, we develop every line with dedicated photography, design and production.",
  "line.admin": "Corporate",
  "line.admin.desc": "Executive and office uniforms.",
  "line.polo": "Polo shirts",
  "line.polo.desc": "Casual corporate apparel.",
  "line.vest": "Vests",
  "line.vest.desc": "Field and corporate vests.",
  "line.school": "School",
  "line.school.desc": "Academic and institutional uniforms.",
  "line.industrial": "Industrial",
  "line.industrial.desc": "Industrial and safety workwear.",
  "line.chef": "Restaurant & Kitchen",
  "line.chef.desc": "Hospitality and culinary uniforms.",
  "line.health": "Health & Beauty",
  "line.health.desc": "Scrubs, clinics, spas and beauty centers.",

  "why.kicker": "Why choose us",
  "why.title": "Behind every uniform, a promise of excellence.",
  "value.commitment.t": "Client Commitment",
  "value.commitment.d": "We put the client at the center: we listen, understand and respond with agility and care.",
  "value.innovation.t": "Innovation & Continuous Improvement",
  "value.innovation.d": "We challenge the status quo and look for better ways to do our work.",
  "value.responsibility.t": "Responsibility & Sustainability",
  "value.responsibility.d": "We act ethically toward our communities and the environment.",
  "value.quality.t": "Quality with Commitment",
  "value.quality.d": "High standards in design, materials and craftsmanship for functional, long-lasting garments.",
  "value.team.t": "Teamwork",
  "value.team.d": "Open communication, respect and cooperation: the best results are built together.",
  "value.passion.t": "Pride & Passion for Service",
  "value.passion.d": "We love what we do and are driven to strengthen the identity of those we dress.",

  "projects.kicker": "Projects",
  "projects.title": "Companies dressed with purpose.",
  "projects.desc": "A selection of projects where design, manufacturing and brand converge.",

  "process.kicker": "Our process",
  "process.title": "A clear method, end to end.",
  "process.s1.t": "Discovery",
  "process.s1.d": "We analyze your needs.",
  "process.s2.t": "Design",
  "process.s2.d": "We craft visual proposals.",
  "process.s3.t": "Production",
  "process.s3.d": "Specialized manufacturing.",
  "process.s4.t": "Quality Control",
  "process.s4.d": "Validation of every garment.",
  "process.s5.t": "Delivery",
  "process.s5.d": "Shipping and follow-up.",

  "testimonials.kicker": "Testimonials",
  "testimonials.title": "What the companies we dress say.",

  "blog.kicker": "Blog",
  "blog.title": "Ideas, trends and textile knowledge.",

  "ctaFinal.title": "Your team deserves an image that inspires trust.",
  "ctaFinal.desc": "We design uniforms that strengthen your company's identity and project professionalism.",
  "ctaFinal.b1": "Reply within 24h",
  "ctaFinal.b2": "Free consultation",
  "ctaFinal.b3": "International coverage",

  "footer.tagline": "Design, manufacturing and distribution of corporate uniforms and workwear. We dress your team. We project your greatness.",
  "footer.nav": "Navigation",
  "footer.contact": "Contact",
  "footer.social": "Social media",
  "footer.whatsapp": "WhatsApp 24/7",
  "footer.location": "Cúcuta, Norte de Santander, Colombia",
  "footer.rights": "All rights reserved.",
  "footer.designed": "Designed in Colombia · We project your greatness.",

  "lang.country": "Country",
  "lang.choose": "Choose your country / language",

  "quote.title": "Request a Quote",
  "quote.subtitle": "Tell us about your project and we will reply within 24 hours.",
  "quote.name": "Full name",
  "quote.company": "Company",
  "quote.email": "Email",
  "quote.phone": "Phone / WhatsApp",
  "quote.country": "Country",
  "quote.line": "Line of interest",
  "quote.linePlaceholder": "Select a line",
  "quote.qty": "Estimated quantity",
  "quote.qtyPlaceholder": "e.g. 50 units",
  "quote.message": "Message",
  "quote.messagePlaceholder": "Tell us about your project, timing and needs…",
  "quote.submit": "Send request",
  "quote.sending": "Sending…",
  "quote.success": "Request sent!",
  "quote.successDesc": "An Activa Uniformes advisor will get in touch with you shortly.",
  "quote.close": "Close",
  "quote.required": "Required field",
  "quote.privacy": "By submitting you agree that your data will only be used to reply to your request.",
};

const pt: Dict = {
  "nav.home": "Início",
  "nav.about": "Sobre",
  "nav.lines": "Linhas",
  "nav.clients": "Clientes",
  "nav.projects": "Projetos",
  "nav.blog": "Blog",
  "nav.contact": "Contato",
  "cta.quote": "Solicitar Orçamento",
  "cta.catalog": "Ver Catálogo",
  "cta.advisor": "Falar com um Consultor",
  "cta.viewAll": "Ver todos",
  "cta.viewLine": "Ver linha",
  "cta.viewDetails": "Ver detalhes",
  "menu.label": "Menu",

  "hero.badge": "Uniformes corporativos premium",
  "hero.title1": "Uniformes corporativos que",
  "hero.titleHighlight": "fortalecem a identidade",
  "hero.title2": "da sua marca.",
  "hero.desc": "Desenhamos e confeccionamos uniformes corporativos que combinam imagem, funcionalidade, conforto e qualidade para empresas que projetam profissionalismo.",
  "hero.stat1": "Anos de experiência",
  "hero.stat2": "Empresas atendidas",
  "hero.stat3": "Produção personalizada",
  "hero.stat4": "Cobertura nacional e internacional",

  "clients.title": "Empresas que confiam em nós",

  "about.kicker": "Sobre nós",
  "about.title": "Uma trajetória construída peça a peça.",
  "about.desc": "A Activa Uniformes nasceu do sonho de {founder}, uma empreendedora de Norte de Santander com visão de futuro e uma liderança comprometida com a qualidade, o serviço e a proximidade com cada cliente.",
  "about.history": "História",
  "about.history.2008": "María de la Paz Parada inicia seu sonho empreendedor e se forma em confecção industrial no SENA.",
  "about.history.2010": "Quatro anos de experiência profissional e formação contínua, aperfeiçoando conhecimentos e visão empresarial.",
  "about.history.2014": "Formalização oficial da Activa Uniformes, com o apoio da família e uma equipe crescente.",
  "about.history.today": "Hoje",
  "about.history.todayText": "Empresa reconhecida em Norte de Santander pela qualidade, pontualidade e atendimento personalizado.",
  "about.mission": "Missão",
  "about.missionText": "\"Desenhamos e confeccionamos peças de vestuário corporativo que refletem identidade, funcionalidade e estilo, com um compromisso firme com qualidade, inovação e proximidade com nossos clientes.\"",
  "about.vision": "Visão",
  "about.visionText": "\"Ser, até 2028, a marca de referência na Colômbia e na região em uniformes corporativos, reconhecida pela qualidade, inovação e compromisso com o cliente.\"",

  "lines.kicker": "Linhas de Produção",
  "lines.title": "Uma solução para cada setor.",
  "lines.desc": "Do uniforme administrativo aos uniformes técnicos especializados, desenvolvemos cada linha com fotografia, design e produção dedicadas.",
  "line.admin": "Administrativo",
  "line.admin.desc": "Uniformes corporativos e executivos.",
  "line.polo": "Polos",
  "line.polo.desc": "Vestuário corporativo casual.",
  "line.vest": "Coletes",
  "line.vest.desc": "Coletes operacionais e corporativos.",
  "line.school": "Escolar",
  "line.school.desc": "Uniformes acadêmicos e institucionais.",
  "line.industrial": "Industrial",
  "line.industrial.desc": "Uniformes industriais e de segurança.",
  "line.chef": "Restaurante e Cozinha",
  "line.chef.desc": "Uniformes gastronômicos e hoteleiros.",
  "line.health": "Saúde e Beleza",
  "line.health.desc": "Uniformes médicos, clínicas, spas e centros estéticos.",

  "why.kicker": "Por que nos escolher",
  "why.title": "Por trás de cada uniforme, uma promessa de excelência.",
  "value.commitment.t": "Compromisso com o Cliente",
  "value.commitment.d": "Colocamos o cliente no centro: ouvimos, entendemos e resolvemos com agilidade.",
  "value.innovation.t": "Inovação e Melhoria Contínua",
  "value.innovation.d": "Desafiamos o estabelecido e buscamos novas formas de fazer melhor.",
  "value.responsibility.t": "Responsabilidade e Sustentabilidade",
  "value.responsibility.d": "Atuamos com ética com nossas comunidades e o meio ambiente.",
  "value.quality.t": "Qualidade com Compromisso",
  "value.quality.d": "Altos padrões em design, materiais e confecção para peças funcionais e duráveis.",
  "value.team.t": "Trabalho em Equipe",
  "value.team.d": "Comunicação aberta, respeito e cooperação: os melhores resultados se constroem juntos.",
  "value.passion.t": "Orgulho e Paixão por Servir",
  "value.passion.d": "Amamos o que fazemos e nos motiva fortalecer a identidade de quem vestimos.",

  "projects.kicker": "Projetos",
  "projects.title": "Empresas vestidas com propósito.",
  "projects.desc": "Uma seleção de projetos onde design, confecção e marca convergem.",

  "process.kicker": "Processo de trabalho",
  "process.title": "Um método claro, de ponta a ponta.",
  "process.s1.t": "Diagnóstico",
  "process.s1.d": "Analisamos necessidades.",
  "process.s2.t": "Design",
  "process.s2.d": "Criamos propostas visuais.",
  "process.s3.t": "Produção",
  "process.s3.d": "Fabricação especializada.",
  "process.s4.t": "Controle de Qualidade",
  "process.s4.d": "Validação de cada peça.",
  "process.s5.t": "Entrega",
  "process.s5.d": "Envio e acompanhamento.",

  "testimonials.kicker": "Depoimentos",
  "testimonials.title": "O que dizem as empresas que vestimos.",

  "blog.kicker": "Blog",
  "blog.title": "Ideias, tendências e conhecimento têxtil.",

  "ctaFinal.title": "Sua equipe merece uma imagem que inspire confiança.",
  "ctaFinal.desc": "Desenhamos uniformes que fortalecem a identidade da sua empresa e projetam profissionalismo.",
  "ctaFinal.b1": "Resposta em 24h",
  "ctaFinal.b2": "Consultoria sem custo",
  "ctaFinal.b3": "Cobertura internacional",

  "footer.tagline": "Design, confecção e comercialização de uniformes corporativos. Vestimos sua equipe. Projetamos sua grandeza.",
  "footer.nav": "Navegação",
  "footer.contact": "Contato",
  "footer.social": "Redes sociais",
  "footer.whatsapp": "WhatsApp 24/7",
  "footer.location": "Cúcuta, Norte de Santander, Colômbia",
  "footer.rights": "Todos os direitos reservados.",
  "footer.designed": "Desenhado na Colômbia · Projetamos sua grandeza.",

  "lang.country": "País",
  "lang.choose": "Escolha seu país / idioma",

  "quote.title": "Solicitar Orçamento",
  "quote.subtitle": "Conte-nos sobre seu projeto e responderemos em até 24 horas.",
  "quote.name": "Nome completo",
  "quote.company": "Empresa",
  "quote.email": "E-mail",
  "quote.phone": "Telefone / WhatsApp",
  "quote.country": "País",
  "quote.line": "Linha de interesse",
  "quote.linePlaceholder": "Selecione uma linha",
  "quote.qty": "Quantidade aproximada",
  "quote.qtyPlaceholder": "Ex.: 50 unidades",
  "quote.message": "Mensagem",
  "quote.messagePlaceholder": "Conte-nos sobre seu projeto, prazos e necessidades…",
  "quote.submit": "Enviar solicitação",
  "quote.sending": "Enviando…",
  "quote.success": "Solicitação enviada!",
  "quote.successDesc": "Um consultor da Activa Uniformes entrará em contato em breve.",
  "quote.close": "Fechar",
  "quote.required": "Campo obrigatório",
  "quote.privacy": "Ao enviar você concorda que seus dados serão usados apenas para responder sua solicitação.",
};

const DICTS: Record<Lang, Dict> = { es, en, pt };

type Ctx = {
  country: Country;
  lang: Lang;
  setCountry: (code: string) => void;
  t: (key: string, vars?: Record<string, string>) => string;
};

const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [code, setCode] = useState<string>("CO");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("activa.country");
      if (saved && COUNTRIES.some((c) => c.code === saved)) setCode(saved);
    } catch {}
  }, []);

  const country = useMemo(
    () => COUNTRIES.find((c) => c.code === code) ?? COUNTRIES[0],
    [code]
  );

  const value = useMemo<Ctx>(() => {
    const lang = country.lang;
    return {
      country,
      lang,
      setCountry: (newCode: string) => {
        setCode(newCode);
        try {
          localStorage.setItem("activa.country", newCode);
        } catch {}
      },
      t: (key, vars) => {
        const dict = DICTS[lang] ?? es;
        let val = dict[key] ?? es[key] ?? key;
        if (vars) {
          for (const [k, v] of Object.entries(vars)) {
            val = val.replace(`{${k}}`, v);
          }
        }
        return val;
      },
    };
  }, [country]);

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n(): Ctx {
  const ctx = useContext(I18nCtx);
  if (!ctx) {
    // Safe fallback so SSR / standalone use doesn't crash
    return {
      country: COUNTRIES[0],
      lang: "es",
      setCountry: () => {},
      t: (key) => es[key] ?? key,
    };
  }
  return ctx;
}