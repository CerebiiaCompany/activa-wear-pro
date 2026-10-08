import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Layers,
  Truck,
  Lightbulb,
  HeartHandshake,
  Search,
  PenTool,
  Factory,
  ClipboardCheck,
  PackageCheck,
  Quote,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  MessageCircle,
  CheckCircle2,
  Play,
  Youtube,
  ExternalLink,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  X,
  Images,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { Reveal, Counter } from "@/components/Reveal";
import { useI18n } from "@/lib/i18n";
import { openQuoteDialog } from "@/components/QuoteDialog";
import { LineModal } from "@/components/LineModal";

import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import cta from "@/assets/cta.jpg";
import logo from "@/assets/logo.png";
const lineAdmin = "/lineas/CATALOGO FINAL-03.webp";
const linePolo = "/lineas/CATALOGO FINAL-58.webp";
const lineVest = "/lineas/CATALOGO FINAL-97.webp";
const lineIndustrial = "/lineas/CATALOGO FINAL-36.webp";
const lineChef = "/lineas/CATALOGO FINAL-84.webp";
const lineHealth = "/lineas/CATALOGO FINAL-70.webp";

export interface ProjectItem {
  id: string;
  name: string;
  categoryGroup: string;
  category: string;
  images: string[];
}

export const PROJECT_CATEGORIES = [
  "Todos",
  "Automotriz & Transporte",
  "Institucional & Salud",
  "Construcción & Industria",
  "Comercial & Medios",
] as const;

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "akt",
    name: "AKT Motos",
    categoryGroup: "Automotriz & Transporte",
    category: "Automotriz & Comercial",
    images: ["/AKT/_LEO0848.webp", "/AKT/_LEO0970.webp"],
  },
  {
    id: "alcaldia",
    name: "Alcaldía de Cúcuta",
    categoryGroup: "Institucional & Salud",
    category: "Sector Público & Gobierno",
    images: ["/Alcaldia/IMG_8284.webp", "/Alcaldia/IMG_8285.webp"],
  },
  {
    id: "coomulpinort",
    name: "Coomulpinort",
    categoryGroup: "Automotriz & Transporte",
    category: "Cooperativa & Transporte",
    images: ["/Coomulpinort/_LEO4390.webp", "/Coomulpinort/_LEO4379.webp"],
  },
  {
    id: "cruz-roja",
    name: "Cruz Roja",
    categoryGroup: "Institucional & Salud",
    category: "Salud & Asistencia",
    images: ["/Cruz%20roja/activa.webp", "/Cruz%20roja/activa_2.webp"],
  },
  {
    id: "ct-shoes",
    name: "CT Shoes",
    categoryGroup: "Comercial & Medios",
    category: "Retail & Calzado",
    images: [
      "/CT%20Shoes/Mesa%20de%20trabajo%201.1.webp",
      "/CT%20Shoes/Mesa%20de%20trabajo%203.webp",
    ],
  },
  {
    id: "paisaje-urbano",
    name: "Paisaje Urbano",
    categoryGroup: "Construcción & Industria",
    category: "Construcción & Desarrollo",
    images: [
      "/Paisaje%20Urbano/_LEO0600.webp",
      "/Paisaje%20Urbano/_LEO0791.webp",
    ],
  },
  {
    id: "progar",
    name: "Progar",
    categoryGroup: "Construcción & Industria",
    category: "Dotaciones Industriales",
    images: ["/Progar/activa_28.webp", "/Progar/cargo.webp"],
  },
  {
    id: "rtc",
    name: "RTC",
    categoryGroup: "Comercial & Medios",
    category: "Telecomunicaciones",
    images: ["/RTC/ACTIVAJULIO_26.webp", "/RTC/ACTIVAJULIO_27.webp"],
  },
  {
    id: "seguridad",
    name: "Seguridad Privada",
    categoryGroup: "Construcción & Industria",
    category: "Vigilancia & Seguridad",
    images: ["/Seguridad/_LEO0328.webp", "/Seguridad/_LEO0353.webp"],
  },
  {
    id: "sena",
    name: "SENA",
    categoryGroup: "Institucional & Salud",
    category: "Educación & Formación",
    images: ["/SENA/ACTIVAJULIO_3.webp", "/SENA/ACTIVAJULIO_16.webp"],
  },
  {
    id: "taxis-libres",
    name: "Taxis Libres",
    categoryGroup: "Automotriz & Transporte",
    category: "Transporte Urbano",
    images: [
      "/Taxis%20libres/activa_8.webp",
      "/Taxis%20libres/activa_9.webp",
    ],
  },
  {
    id: "tv-norte",
    name: "TV Norte",
    categoryGroup: "Comercial & Medios",
    category: "Medios & Televisión",
    images: ["/TV%20Norte/_LEO0210.webp", "/TV%20Norte/_LEO0122.webp"],
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Activa Uniformes — Vestimos tu equipo. Proyectamos tu grandeza." },
      {
        name: "description",
        content:
          "Diseñamos y confeccionamos uniformes empresariales y dotaciones corporativas con calidad, identidad y cobertura nacional e internacional.",
      },
      { property: "og:title", content: "Activa Uniformes — Dotaciones empresariales" },
      {
        property: "og:description",
        content:
          "Uniformes corporativos a medida para empresas que proyectan profesionalismo. +10 años, +500 empresas atendidas.",
      },
      { property: "og:image", content: hero },
      { property: "og:url", content: "https://activa-wear-pro.lovable.app/" },
      { name: "twitter:title", content: "Activa Uniformes — Dotaciones empresariales" },
      {
        name: "twitter:description",
        content:
          "Uniformes corporativos a medida para empresas que proyectan profesionalismo. +10 años, +500 empresas atendidas.",
      },
      { name: "twitter:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "https://activa-wear-pro.lovable.app/" }],
  }),
  component: Index,
});

const testimonios = [
  {
    name: "María Restrepo",
    role: "Gerente de Talento Humano",
    company: "Grupo Andina S.A.",
    quote:
      "Activa Uniformes entendió nuestra cultura corporativa y transformó cómo se ve nuestro equipo. Calidad impecable y entrega puntual.",
  },
  {
    name: "Carlos Vergara",
    role: "Director de Operaciones",
    company: "Industrias del Norte",
    quote:
      "La dotación industrial superó nuestras expectativas. Resistencia, comodidad y un diseño que proyecta seriedad.",
  },
  {
    name: "Lucía Páez",
    role: "Coordinadora Administrativa",
    company: "Clínica San Lucas",
    quote:
      "Asesoramiento profesional de principio a fin. Nuestro personal médico se siente orgulloso de portar la marca.",
  },
];



function Index() {
  const { t } = useI18n();
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [selectedLineId, setSelectedLineId] = useState<string | null>(null);
  const [activeLightbox, setActiveLightbox] = useState<{
    project: ProjectItem;
    imgIdx: number;
  } | null>(null);

  useEffect(() => {
    if (!activeLightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveLightbox(null);
      if (e.key === "ArrowLeft") {
        setActiveLightbox((prev) => {
          if (!prev) return null;
          const newIdx =
            prev.imgIdx === 0
              ? prev.project.images.length - 1
              : prev.imgIdx - 1;
          return { ...prev, imgIdx: newIdx };
        });
      }
      if (e.key === "ArrowRight") {
        setActiveLightbox((prev) => {
          if (!prev) return null;
          const newIdx =
            prev.imgIdx === prev.project.images.length - 1
              ? 0
              : prev.imgIdx + 1;
          return { ...prev, imgIdx: newIdx };
        });
      }
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeLightbox]);

  const filteredProjects =
    selectedCategory === "Todos"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.categoryGroup === selectedCategory);

  const lineas = [
    { id: "admin", title: t("line.admin"), desc: t("line.admin.desc"), img: lineAdmin },
    { id: "polo", title: t("line.polo"), desc: t("line.polo.desc"), img: linePolo },
    { id: "vest", title: t("line.vest"), desc: t("line.vest.desc"), img: lineVest },
    { id: "industrial", title: t("line.industrial"), desc: t("line.industrial.desc"), img: lineIndustrial },
    { id: "chef", title: t("line.chef"), desc: t("line.chef.desc"), img: lineChef },
    { id: "health", title: t("line.health"), desc: t("line.health.desc"), img: lineHealth },
  ];

  const benefits = [
    { icon: HeartHandshake, title: t("value.commitment.t"), desc: t("value.commitment.d") },
    { icon: Lightbulb, title: t("value.innovation.t"), desc: t("value.innovation.d") },
    { icon: Layers, title: t("value.responsibility.t"), desc: t("value.responsibility.d") },
    { icon: ShieldCheck, title: t("value.quality.t"), desc: t("value.quality.d") },
    { icon: Sparkles, title: t("value.team.t"), desc: t("value.team.d") },
    { icon: Truck, title: t("value.passion.t"), desc: t("value.passion.d") },
  ];

  const proceso = [
    { icon: Search, title: t("process.s1.t"), desc: t("process.s1.d") },
    { icon: PenTool, title: t("process.s2.t"), desc: t("process.s2.d") },
    { icon: Factory, title: t("process.s3.t"), desc: t("process.s3.d") },
    { icon: ClipboardCheck, title: t("process.s4.t"), desc: t("process.s4.d") },
    { icon: PackageCheck, title: t("process.s5.t"), desc: t("process.s5.d") },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section id="inicio" className="relative min-h-[100svh] flex items-center overflow-hidden">
        <img
          src={hero}
          alt="Equipo corporativo con uniformes Activa"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />

        <div className="container-wide relative z-10 pt-28 sm:pt-32 pb-16 sm:pb-20 text-white">
          <div className="max-w-3xl animate-fade-in-slow">
            <span className="inline-block text-[10px] sm:text-xs font-medium uppercase tracking-[0.18em] text-white/80">
              {t("hero.badge")}
            </span>
            <h1 className="mt-5 sm:mt-6 text-balance text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1.08] tracking-tight">
              {t("hero.title1")}{" "}
              <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                {t("hero.titleHighlight")}
              </span>{" "}
              {t("hero.title2")}
            </h1>
            <p className="mt-5 sm:mt-6 max-w-2xl text-sm sm:text-lg text-white/80 leading-relaxed">
              {t("hero.desc")}
            </p>
            <div className="mt-7 sm:mt-9 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={openQuoteDialog}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
              >
                {t("cta.quote")}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="#lineas"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                {t("cta.catalog")}
              </a>
            </div>

            <div className="mt-10 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-3xl">
              {[
                { v: 10, s: "+", label: t("hero.stat1") },
                { v: 500, s: "+", label: t("hero.stat2") },
                { v: 100, s: "%", label: t("hero.stat3") },
                { v: 24, s: "/7", label: t("hero.stat4") },
              ].map((s) => (
                <div key={s.label} className="border-l-2 border-[var(--brand-red)] pl-3 sm:pl-4">
                  <div className="font-display text-2xl sm:text-4xl font-bold text-white">
                    <Counter to={s.v} suffix={s.s} />
                  </div>
                  <div className="mt-1 text-[11px] sm:text-sm text-white/70 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* NOSOTROS */}
      <section id="nosotros" className="py-16 sm:py-24 lg:py-32">
        <div className="container-wide grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {t("about.kicker")}
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
                {t("about.title")}
              </h2>
              <p
                className="mt-6 text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: t("about.desc", {
                    founder:
                      '<strong class="text-foreground">María de la Paz Parada</strong>',
                  }),
                }}
              />

              {/* Video Card */}
              <div className="mt-8 relative overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)] border border-border bg-slate-950 aspect-video sm:aspect-[16/10] group">
                {isPlayingVideo ? (
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/F9YeQIIOzbE?autoplay=1"
                    title="Activa Uniformes — Nuestra Historia"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsPlayingVideo(true)}
                    aria-label={t("about.watchVideo")}
                    className="relative w-full h-full text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 block"
                  >
                    <img
                      src={about}
                      alt="Confección artesanal Activa Uniformes"
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-medium text-white border border-white/15 shadow-sm">
                      <Youtube size={14} className="text-[#FF0000]" />
                      <span>{t("about.videoBadge")}</span>
                    </div>

                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 grid h-16 w-16 sm:h-20 sm:w-20 place-items-center rounded-full bg-primary text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/90 cursor-pointer pointer-events-none"
                    >
                      <Play size={28} className="translate-x-0.5 fill-white text-white" />
                    </div>
                  </button>
                )}
              </div>

              {/* External YouTube link */}
              <div className="mt-3.5 flex items-center">
                <a
                  href="https://www.youtube.com/shorts/F9YeQIIOzbE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground/80 hover:text-primary transition-colors group"
                >
                  <Youtube size={17} className="text-[#FF0000] shrink-0" />
                  <span className="underline-offset-4 group-hover:underline">{t("about.watchVideo")}</span>
                  <ExternalLink size={13} className="opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </Reveal>

          <div className="space-y-10 sm:space-y-12">
            <Reveal>
              <div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">
                  {t("about.history")}
                </h3>
                <ol className="relative border-l-2 border-border space-y-8 pl-6 sm:pl-8">
                  {[
                    { y: "2008", t: t("about.history.2008") },
                    { y: "2010–2014", t: t("about.history.2010") },
                    { y: "2014", t: t("about.history.2014") },
                    { y: t("about.history.today"), t: t("about.history.todayText") },
                  ].map((m) => (
                    <li key={m.y} className="relative">
                      <span className="absolute -left-[34px] sm:-left-[42px] grid h-6 w-6 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                        •
                      </span>
                      <div className="font-display text-xl sm:text-2xl font-bold text-primary">{m.y}</div>
                      <p className="mt-1 text-muted-foreground">{m.t}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-soft)]">
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                  {t("about.mission")}
                </h3>
                <p className="text-foreground/85 leading-relaxed">{t("about.missionText")}</p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-2xl bg-[var(--brand-black)] p-6 sm:p-8 text-white">
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)] mb-3">
                  {t("about.vision")}
                </h3>
                <p className="text-white/85 leading-relaxed">{t("about.visionText")}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LÍNEAS */}
      <section id="lineas" className="py-16 sm:py-24 lg:py-32 bg-[var(--brand-light)]">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {t("lines.kicker")}
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
                {t("lines.title")}
              </h2>
              <p className="mt-5 text-muted-foreground">{t("lines.desc")}</p>
            </div>
          </Reveal>

          <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {lineas.map((l, i) => (
              <Reveal key={l.title} delay={i * 60}>
                <article
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedLineId(l.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedLineId(l.id);
                    }
                  }}
                  className="group relative h-full overflow-hidden rounded-2xl bg-slate-900 shadow-[var(--shadow-soft)] transition-all duration-500 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1.5 cursor-pointer border border-transparent hover:border-[var(--brand-red)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]"
                >
                  <div className="aspect-[1181/1654] overflow-hidden bg-slate-950">
                    <img
                      src={l.img}
                      alt={l.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent opacity-90 pointer-events-none" />

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-white transition-colors">
                      {l.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/80 leading-snug">{l.desc}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-red)] transition-all duration-300 group-hover:translate-x-1">
                      <span>{t("cta.viewLine")}</span>
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {t("why.kicker")}
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
                {t("why.title")}
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 50}>
                <div className="group h-full bg-card p-6 sm:p-8 transition-colors hover:bg-[var(--brand-light)]">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                    <b.icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS (13 empresas x 2 fotos) */}
      <section id="proyectos" className="py-16 sm:py-24 lg:py-32 bg-[var(--brand-black)] text-white">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-wrap justify-between items-end gap-6">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
                  {t("projects.kicker")}
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
                  {t("projects.title")}
                </h2>
              </div>
              <p className="text-white/70 max-w-md">{t("projects.desc")}</p>
            </div>
          </Reveal>

          {/* Categorías / Filtros */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-2 pb-2">
            {PROJECT_CATEGORIES.map((cat) => {
              const count =
                cat === "Todos"
                  ? PROJECTS_DATA.length
                  : PROJECTS_DATA.filter((p) => p.categoryGroup === cat).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                      : "bg-white/5 text-white/75 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                      isActive ? "bg-white/20 text-white" : "bg-white/10 text-white/60"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Grid de 13 empresas con sus 2 imágenes */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <Reveal key={project.id} delay={(i % 6) * 60}>
                <div className="group h-full rounded-2xl bg-white/[0.04] border border-white/10 p-5 hover:border-[var(--brand-red)]/50 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-between shadow-lg">
                  {/* Header de la tarjeta */}
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-red)] bg-[var(--brand-red)]/10 px-2.5 py-1 rounded-full border border-[var(--brand-red)]/20">
                        {project.category}
                      </span>
                      <span className="text-xs text-white/50 flex items-center gap-1 font-medium">
                        <Images size={13} /> 2 fotos
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-bold text-white group-hover:text-white transition-colors">
                      {project.name}
                    </h3>
                  </div>

                  {/* 2 Imágenes de la empresa */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {project.images.map((imgUrl, imgIdx) => (
                      <button
                        key={imgIdx}
                        type="button"
                        onClick={() => setActiveLightbox({ project, imgIdx })}
                        className="group/img relative aspect-[3/4] overflow-hidden rounded-xl bg-black/50 text-left focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] cursor-pointer border border-white/10 hover:border-white/30 transition-all"
                      >
                        <img
                          src={imgUrl}
                          alt={`${project.name} - Prenda ${imgIdx + 1}`}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/img:scale-108"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end justify-between p-2.5">
                          <span className="text-[10px] font-medium text-white bg-black/60 px-1.5 py-0.5 rounded backdrop-blur-sm">
                            Foto {imgIdx + 1}
                          </span>
                          <span className="grid h-6 w-6 place-items-center rounded-full bg-white/25 text-white backdrop-blur-sm">
                            <ZoomIn size={13} />
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Footer de la tarjeta */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                    <button
                      type="button"
                      onClick={() => setActiveLightbox({ project, imgIdx: 0 })}
                      className="inline-flex items-center gap-1 text-[var(--brand-red)] font-semibold hover:underline cursor-pointer"
                    >
                      <ZoomIn size={13} /> Ver en detalle
                    </button>
                    <button
                      type="button"
                      onClick={openQuoteDialog}
                      className="text-white/70 hover:text-white transition-colors cursor-pointer"
                    >
                      Cotizar similar →
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Modal Lightbox */}
        {activeLightbox && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Vista previa de fotos de proyectos"
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/92 backdrop-blur-md p-3 sm:p-6 animate-fade-in-slow"
            onClick={() => setActiveLightbox(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center bg-[#0F172A] border border-white/15 rounded-2xl p-4 sm:p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Barra superior */}
              <div className="w-full flex items-center justify-between pb-3 border-b border-white/10">
                <div className="min-w-0 pr-4">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[var(--brand-red)]">
                    {activeLightbox.project.category}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white truncate">
                    {activeLightbox.project.name}
                  </h3>
                  <p className="text-xs text-white/60">
                    Foto {activeLightbox.imgIdx + 1} de {activeLightbox.project.images.length}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveLightbox(null)}
                  aria-label="Cerrar vista previa"
                  className="shrink-0 grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Contenedor imagen principal */}
              <div className="relative mt-4 w-full flex-1 flex items-center justify-center min-h-[300px] max-h-[60vh] overflow-hidden rounded-xl bg-black/40">
                <img
                  src={activeLightbox.project.images[activeLightbox.imgIdx]}
                  alt={`${activeLightbox.project.name} detalle ${activeLightbox.imgIdx + 1}`}
                  decoding="async"
                  className="max-h-[58vh] w-auto max-w-full object-contain rounded-lg"
                />

                {/* Flechas de navegación */}
                <button
                  type="button"
                  onClick={() =>
                    setActiveLightbox((prev) => {
                      if (!prev) return null;
                      const newIdx =
                        prev.imgIdx === 0
                          ? prev.project.images.length - 1
                          : prev.imgIdx - 1;
                      return { ...prev, imgIdx: newIdx };
                    })
                  }
                  aria-label="Foto anterior"
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-sm transition-all border border-white/20 cursor-pointer"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveLightbox((prev) => {
                      if (!prev) return null;
                      const newIdx =
                        prev.imgIdx === prev.project.images.length - 1
                          ? 0
                          : prev.imgIdx + 1;
                      return { ...prev, imgIdx: newIdx };
                    })
                  }
                  aria-label="Siguiente foto"
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-sm transition-all border border-white/20 cursor-pointer"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              {/* Tiras de miniaturas y botón CTA */}
              <div className="mt-4 w-full flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
                <div className="flex gap-2">
                  {activeLightbox.project.images.map((thumb, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() =>
                        setActiveLightbox((prev) =>
                          prev ? { ...prev, imgIdx: idx } : null
                        )
                      }
                      className={`h-14 w-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        activeLightbox.imgIdx === idx
                          ? "border-[var(--brand-red)] scale-105"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={thumb}
                        alt="Miniatura"
                        className="h-full w-full object-cover object-top"
                      />
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setActiveLightbox(null);
                    openQuoteDialog();
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 transition-all shadow-[var(--shadow-soft)] cursor-pointer"
                >
                  Cotizar uniformes para tu empresa <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* PROCESO */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {t("process.kicker")}
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
                {t("process.title")}
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 sm:mt-16 relative">
            <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-border" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative">
              {proceso.map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <div className="text-center lg:text-left">
                    <div className="relative inline-grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
                      <p.icon size={22} />
                      <span className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-[var(--brand-red)] text-[11px] font-bold text-white">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[var(--brand-light)]">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {t("testimonials.kicker")}
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
                {t("testimonials.title")}
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonios.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure className="h-full rounded-2xl bg-card p-6 sm:p-8 border border-border shadow-[var(--shadow-soft)] flex flex-col">
                  <Quote className="text-primary" size={28} />
                  <blockquote className="mt-5 text-foreground/85 leading-relaxed flex-1">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground font-display font-bold">
                      {t.name[0]}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold truncate">{t.name}</div>
                      <div className="text-xs text-muted-foreground truncate">{t.role} · {t.company}</div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="cotizar" className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
        <img src={cta} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/85 to-[var(--brand-red)]/70" />
        <div className="container-wide relative z-10 text-center text-white">
          <Reveal>
            <h2 className="text-balance text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
              {t("ctaFinal.title")}
            </h2>
            <p className="mt-5 sm:mt-6 max-w-2xl mx-auto text-white/80 text-base sm:text-lg">
              {t("ctaFinal.desc")}
            </p>
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 justify-center">
              <button
                type="button"
                onClick={openQuoteDialog}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-red)] px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
              >
                {t("cta.quote")} <ArrowRight size={16} />
              </button>
              <a
                href="https://wa.me/573142961813?text=Hola%2C%20quisiera%20recibir%20asesor%C3%ADa%20sobre%20los%20uniformes%20y%20dotaciones%20empresariales%20de%20Activa%20Uniformes."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/10 transition-colors"
              >
                <MessageCircle size={16} className="text-[#25D366]" />
                {t("cta.advisor")}
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-white/70">
              {[t("ctaFinal.b1"), t("ctaFinal.b2"), t("ctaFinal.b3")].map((c) => (
                <div key={c} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[var(--brand-red)]" /> {c}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contacto" className="bg-[var(--brand-black)] text-white/80">
        <div className="container-wide py-14 sm:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          <div>
            <img src={logo} alt="Activa Uniformes" className="h-10 w-auto brightness-0 invert" />
            <p className="mt-5 text-sm leading-relaxed">{t("footer.tagline")}</p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white mb-5">
              {t("footer.nav")}
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { l: t("nav.home"), h: "#inicio" },
                { l: t("nav.about"), h: "#nosotros" },
                { l: t("nav.lines"), h: "#lineas" },
                { l: t("nav.contact"), h: "#contacto" },
              ].map((i) => (
                <li key={i.h}>
                  <a href={i.h} className="hover:text-white transition-colors">
                    {i.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white mb-5">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="shrink-0 text-[var(--brand-red)]" />
                <a href="tel:+573142961813" className="hover:text-white transition-colors">
                  +57 314 296 1813
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle size={14} className="shrink-0 text-[#25D366]" />
                <a
                  href="https://wa.me/573142961813?text=Hola%2C%20quisiera%20recibir%20asesor%C3%ADa%20sobre%20los%20uniformes%20y%20dotaciones%20empresariales%20de%20Activa%20Uniformes."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t("footer.whatsapp")} (+57 314 296 1813)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="shrink-0 text-[var(--brand-red)]" />
                <a href="mailto:comercialuniformesactiva@gmail.com" className="hover:text-white transition-colors">
                  comercialuniformesactiva@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-1 shrink-0 text-[var(--brand-red)]" />
                {t("footer.location")}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white mb-5">
              {t("footer.social")}
            </h4>
            <div className="flex gap-3">
              {[
                {
                  I: Facebook,
                  l: "Facebook",
                  h: "https://www.facebook.com/UniformesACTIVA/?locale=es_LA",
                },
                {
                  I: Instagram,
                  l: "Instagram",
                  h: "https://www.instagram.com/uniformesactiva/?hl=es",
                },
              ].map(({ I, l, h }) => (
                <a
                  key={l}
                  href={h}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={l}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:bg-primary hover:border-primary transition-all text-white"
                >
                  <I size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-wide py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-white/55">
            <div>© {new Date().getFullYear()} Activa Uniformes. {t("footer.rights")}</div>
            <div>{t("footer.designed")}</div>
          </div>
        </div>
      </footer>

      {/* MODAL DE DETALLE DE LÍNEA Y PRODUCTOS */}
      <LineModal
        lineId={selectedLineId}
        onClose={() => setSelectedLineId(null)}
      />
    </div>
  );
}
