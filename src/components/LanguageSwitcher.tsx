import { useEffect, useRef, useState } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { COUNTRIES, useI18n } from "@/lib/i18n";

export function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { country, setCountry, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("lang.choose")}
        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-semibold transition-colors ${
          dark
            ? "border-border bg-white text-foreground hover:bg-[var(--brand-light)]"
            : "border-white/25 bg-white/5 text-white backdrop-blur hover:bg-white/10"
        }`}
      >
        <Globe size={14} className="opacity-80" />
        <span className="text-base leading-none">{country.flag}</span>
        <span className="hidden sm:inline uppercase tracking-wider">
          {country.code} · {country.lang.toUpperCase()}
        </span>
        <ChevronDown size={12} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-64 overflow-hidden rounded-xl border border-border bg-white shadow-[var(--shadow-elegant)] animate-fade-in-slow"
        >
          <div className="px-4 py-2.5 border-b border-border">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              {t("lang.choose")}
            </div>
          </div>
          <ul className="max-h-80 overflow-y-auto py-1">
            {COUNTRIES.map((c) => {
              const selected = c.code === country.code;
              return (
                <li key={c.code}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onClick={() => {
                      setCountry(c.code);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                      selected
                        ? "bg-[var(--brand-light)] text-foreground"
                        : "text-foreground/85 hover:bg-[var(--brand-light)]"
                    }`}
                  >
                    <span className="text-xl leading-none">{c.flag}</span>
                    <span className="flex-1 truncate">
                      <span className="font-medium">{c.name}</span>
                      <span className="ml-1.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                        {c.lang}
                      </span>
                    </span>
                    {selected && <Check size={14} className="text-[var(--brand-red)]" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}