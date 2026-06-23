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
  Linkedin,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { Reveal, Counter } from "@/components/Reveal";
import { useI18n } from "@/lib/i18n";

import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import cta from "@/assets/cta.jpg";
import logo from "@/assets/logo.png";
import lineAdminAsset from "@/assets/line-admin.jpg.asset.json";
import linePoloAsset from "@/assets/line-polo.jpg.asset.json";
import lineVestAsset from "@/assets/line-vest.jpg.asset.json";
import lineSchoolAsset from "@/assets/line-school.jpg.asset.json";
import lineIndustrialAsset from "@/assets/line-industrial.jpg.asset.json";
import lineChefAsset from "@/assets/line-chef.jpg.asset.json";
import lineHealthAsset from "@/assets/line-health.jpg.asset.json";
const lineAdmin = lineAdminAsset.url;
const linePolo = linePoloAsset.url;
const lineVest = lineVestAsset.url;
const lineSchool = lineSchoolAsset.url;
const lineIndustrial = lineIndustrialAsset.url;
const lineChef = lineChefAsset.url;
const lineHealth = lineHealthAsset.url;

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
    ],
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

const blog = [
  { tag: "Tendencias", title: "Tendencias en uniformes corporativos 2025", desc: "Cómo el textil técnico está cambiando la imagen empresarial." },
  { tag: "Marca", title: "La importancia de la identidad empresarial", desc: "El uniforme como vehículo silencioso de cultura y propósito." },
  { tag: "Industrial", title: "Dotaciones industriales modernas", desc: "Seguridad, ergonomía y diseño en una sola prenda." },
  { tag: "Innovación", title: "Innovación textil aplicada a la confección", desc: "Telas inteligentes para entornos exigentes." },
];

const clientes = [
  "AVIANCA", "TERPEL", "BANCOLOMBIA", "CEMEX", "GRUPO ÉXITO", "POSTOBÓN",
  "ECOPETROL", "ARGOS", "ALPINA", "NUTRESA",
];

function Index() {
  const { t } = useI18n();

  const lineas = [
    { title: t("line.admin"), desc: t("line.admin.desc"), img: lineAdmin },
    { title: t("line.polo"), desc: t("line.polo.desc"), img: linePolo },
    { title: t("line.vest"), desc: t("line.vest.desc"), img: lineVest },
    { title: t("line.school"), desc: t("line.school.desc"), img: lineSchool },
    { title: t("line.industrial"), desc: t("line.industrial.desc"), img: lineIndustrial },
    { title: t("line.chef"), desc: t("line.chef.desc"), img: lineChef },
    { title: t("line.health"), desc: t("line.health.desc"), img: lineHealth },
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
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-[0.18em] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-red)]" />
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
              <a
                href="#cotizar"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
              >
                {t("cta.quote")}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
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

      {/* CLIENTES marquee */}
      <section id="clientes" className="border-y border-border bg-[var(--brand-light)] py-10 overflow-hidden">
        <div className="container-wide mb-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {t("clients.title")}
          </p>
        </div>
        <div className="relative flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee gap-16 pr-16">
            {[...clientes, ...clientes].map((c, i) => (
              <span
                key={i}
                className="font-display text-xl sm:text-2xl font-bold tracking-widest text-muted-foreground/60 hover:text-foreground transition-colors whitespace-nowrap"
              >
                {c}
              </span>
            ))}
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
              <div className="mt-8 overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
                <img src={about} alt="Confección artesanal" loading="lazy" className="w-full h-64 sm:h-80 object-cover" />
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

          <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {lineas.map((l, i) => (
              <Reveal key={l.title} delay={i * 60}>
                <article className="group relative overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-soft)] transition-all duration-500 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={l.img}
                      alt={l.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-2xl font-bold text-white">{l.title}</h3>
                    <p className="mt-1 text-sm text-white/75">{l.desc}</p>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-red)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {t("cta.viewLine")} <ArrowRight size={14} />
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

      {/* PROYECTOS (masonry) */}
      <section id="proyectos" className="py-16 sm:py-24 lg:py-32 bg-[var(--brand-black)] text-white">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-wrap justify-between items-end gap-6">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
                  Proyectos
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
                  Empresas vestidas con propósito.
                </h2>
              </div>
              <p className="text-white/70 max-w-md">
                Una selección de proyectos donde el diseño, la confección y la marca convergen.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 sm:mt-14 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {[
              { img: lineAdmin, t: "Banca Corporativa", s: "Administrativo" },
              { img: lineIndustrial, t: "Planta Cementera Norte", s: "Industrial" },
              { img: lineHealth, t: "Clínica San Lucas", s: "Salud" },
              { img: lineChef, t: "Hotel Boutique Andina", s: "Gastronomía" },
              { img: lineSchool, t: "Colegio Bilingüe Norte", s: "Escolar" },
              { img: linePolo, t: "Retail Nacional", s: "Camibusos" },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 70} className="mb-5 break-inside-avoid">
                <div className="group relative overflow-hidden rounded-2xl">
                  <img
                    src={p.img}
                    alt={p.t}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 ${
                      i % 3 === 0 ? "h-[320px] sm:h-[420px]" : i % 3 === 1 ? "h-[260px] sm:h-[320px]" : "h-[290px] sm:h-[380px]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                    <div className="text-xs uppercase tracking-[0.2em] text-[var(--brand-red)]">{p.s}</div>
                    <div className="mt-1 font-display text-xl font-bold">{p.t}</div>
                    <div className="mt-2 inline-flex items-center gap-1.5 text-sm text-white/85 opacity-0 transition-opacity group-hover:opacity-100">
                      Ver detalles <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Proceso de trabajo
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
                Un método claro, de extremo a extremo.
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
                Testimonios
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
                Lo que dicen las empresas que vestimos.
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

      {/* BLOG */}
      <section id="blog" className="py-16 sm:py-24 lg:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Blog
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
                  Ideas, tendencias y conocimiento textil.
                </h2>
              </div>
              <a href="#blog" className="text-sm font-semibold text-primary inline-flex items-center gap-1.5 hover:gap-2 transition-all">
                Ver todos <ArrowRight size={14} />
              </a>
            </div>
          </Reveal>
          <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {blog.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <article className="group h-full rounded-2xl border border-border bg-card overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-[var(--brand-light)] to-[var(--brand-red)]/10 relative">
                    <div className="absolute inset-0 grid place-items-center font-display text-6xl font-bold text-primary/15">
                      {p.tag[0]}
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-primary">{p.tag}</span>
                    <h3 className="mt-3 font-display text-lg font-bold leading-snug group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </article>
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
              Tu equipo merece una imagen que inspire confianza.
            </h2>
            <p className="mt-5 sm:mt-6 max-w-2xl mx-auto text-white/80 text-base sm:text-lg">
              Diseñamos uniformes que fortalecen la identidad de tu empresa y proyectan profesionalismo.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 justify-center">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-red)] px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
              >
                Solicitar Cotización <ArrowRight size={16} />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"
              >
                Contactar Asesor
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-white/70">
              {["Respuesta en 24h", "Asesoría sin costo", "Cobertura nacional"].map((c) => (
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
            <p className="mt-5 text-sm leading-relaxed">
              Diseño, confección y comercialización de uniformes empresariales y dotaciones
              corporativas. Vestimos tu equipo. Proyectamos tu grandeza.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white mb-5">
              Navegación
            </h4>
            <ul className="space-y-3 text-sm">
              {["Inicio", "Nosotros", "Líneas", "Contacto"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white mb-5">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5"><Phone size={14} className="shrink-0 text-[var(--brand-red)]" /> +57 300 000 0000</li>
              <li className="flex items-center gap-2.5"><MessageCircle size={14} className="shrink-0 text-[var(--brand-red)]" /> WhatsApp 24/7</li>
              <li className="flex items-center gap-2.5"><Mail size={14} className="shrink-0 text-[var(--brand-red)]" /> ventas@activauniformes.com</li>
              <li className="flex items-start gap-2.5"><MapPin size={14} className="mt-1 shrink-0 text-[var(--brand-red)]" /> Cúcuta, Norte de Santander, Colombia</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white mb-5">
              Redes sociales
            </h4>
            <div className="flex gap-3">
              {[
                { I: Facebook, l: "Facebook" },
                { I: Instagram, l: "Instagram" },
                { I: Linkedin, l: "LinkedIn" },
                { I: MessageCircle, l: "WhatsApp" },
              ].map(({ I, l }) => (
                <a
                  key={l}
                  href="#"
                  aria-label={l}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:bg-primary hover:border-primary transition-all"
                >
                  <I size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-wide py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-white/55">
            <div>© {new Date().getFullYear()} Activa Uniformes. Todos los derechos reservados.</div>
            <div>Diseñado en Colombia · Proyectamos tu grandeza.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
