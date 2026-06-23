import { useEffect, useState, type FormEvent } from "react";
import { CheckCircle2, Send, X } from "lucide-react";
import { useI18n, COUNTRIES } from "@/lib/i18n";

export const QUOTE_EVENT = "activa:open-quote";

export function openQuoteDialog() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(QUOTE_EVENT));
  }
}

const LINES = [
  "line.admin",
  "line.polo",
  "line.vest",
  "line.school",
  "line.industrial",
  "line.chef",
  "line.health",
];

export function QuoteDialog() {
  const { t, country } = useI18n();
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onOpen = () => {
      setSent(false);
      setOpen(true);
    };
    window.addEventListener(QUOTE_EVENT, onOpen);
    return () => window.removeEventListener(QUOTE_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    // Simulación de envío. Conectar a backend cuando esté disponible.
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    setSent(true);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-title"
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in-slow"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className="relative z-10 w-full sm:max-w-2xl max-h-[92svh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-white shadow-[var(--shadow-elegant)]">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-border bg-white/95 backdrop-blur px-5 sm:px-7 py-4 sm:py-5">
          <div className="min-w-0">
            <h2 id="quote-title" className="font-display text-xl sm:text-2xl font-bold text-foreground">
              {t("quote.title")}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              {t("quote.subtitle")}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t("quote.close")}
            className="shrink-0 grid h-9 w-9 place-items-center rounded-full text-muted-foreground hover:bg-[var(--brand-light)] hover:text-foreground transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        {sent ? (
          <div className="px-5 sm:px-7 py-10 sm:py-14 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold">{t("quote.success")}</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
              {t("quote.successDesc")}
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-7 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 transition-transform shadow-[var(--shadow-soft)]"
            >
              {t("quote.close")}
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="px-5 sm:px-7 py-5 sm:py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label={t("quote.name")} required>
                <input
                  required
                  type="text"
                  name="name"
                  autoComplete="name"
                  className={inputCls}
                />
              </Field>
              <Field label={t("quote.company")}>
                <input
                  type="text"
                  name="company"
                  autoComplete="organization"
                  className={inputCls}
                />
              </Field>
              <Field label={t("quote.email")} required>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className={inputCls}
                />
              </Field>
              <Field label={t("quote.phone")} required>
                <input
                  required
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  className={inputCls}
                />
              </Field>
              <Field label={t("quote.country")}>
                <select name="country" defaultValue={country.code} className={inputCls}>
                  {COUNTRIES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.flag} {c.name}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label={t("quote.line")}>
                <select name="line" defaultValue="" className={inputCls}>
                  <option value="" disabled>
                    {t("quote.linePlaceholder")}
                  </option>
                  {LINES.map((k) => (
                    <option key={k} value={t(k)}>
                      {t(k)}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label={t("quote.qty")} className="sm:col-span-2">
                <input
                  type="text"
                  name="qty"
                  placeholder={t("quote.qtyPlaceholder")}
                  className={inputCls}
                />
              </Field>
              <Field label={t("quote.message")} className="sm:col-span-2">
                <textarea
                  name="message"
                  rows={4}
                  placeholder={t("quote.messagePlaceholder")}
                  className={`${inputCls} resize-none`}
                />
              </Field>
            </div>

            <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground">
              {t("quote.privacy")}
            </p>

            <div className="mt-5 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground hover:bg-[var(--brand-light)] transition-colors"
              >
                {t("quote.close")}
              </button>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)] transition-transform disabled:opacity-70 disabled:translate-y-0"
              >
                {sending ? t("quote.sending") : t("quote.submit")}
                {!sending && <Send size={15} />}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

const inputCls =
  "w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60";

function Field({
  label,
  required,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-1.5 block text-xs font-semibold text-foreground/85">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}