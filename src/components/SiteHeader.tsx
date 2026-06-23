import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useI18n } from "@/lib/i18n";
import { openQuoteDialog } from "@/components/QuoteDialog";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  const links = [
    { label: t("nav.home"), href: "#inicio" },
    { label: t("nav.about"), href: "#nosotros" },
    { label: t("nav.lines"), href: "#lineas" },
    { label: t("nav.clients"), href: "#clientes" },
    { label: t("nav.projects"), href: "#proyectos" },
    { label: t("nav.blog"), href: "#blog" },
    { label: t("nav.contact"), href: "#contacto" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-border shadow-[0_1px_0_0_rgba(15,23,42,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex h-16 sm:h-20 items-center justify-between gap-3 sm:gap-6">
        <a href="#inicio" className="flex items-center gap-3 shrink-0 min-w-0">
          <img
            src={logo}
            alt="Activa Uniformes"
            className={`h-8 sm:h-11 w-auto transition-all ${scrolled ? "" : "brightness-0 invert"}`}
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-foreground/80" : "text-white/85"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <LanguageSwitcher dark={scrolled} />
          <button
            type="button"
            onClick={openQuoteDialog}
            className="hidden md:inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
          >
            {t("cta.quote")}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden grid place-items-center h-10 w-10 rounded-md ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            aria-label={t("menu.label")}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-border shadow-md">
          <div className="container-wide flex flex-col py-4 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-2 py-3 text-sm font-medium text-foreground/80 hover:text-primary border-b border-border last:border-b-0"
              >
                {l.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openQuoteDialog();
              }}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              {t("cta.quote")}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}