import { useEffect, useState, type FormEvent } from "react";
import { CheckCircle2, Send, X, AlertCircle, MessageCircle } from "lucide-react";
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
  "line.industrial",
  "line.chef",
  "line.health",
];

const WEB3FORMS_ACCESS_KEY = "56bd8b93-f324-4db1-8389-30bb37567a50";

export function QuoteDialog() {
  const { t, country } = useI18n();
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const onOpen = () => {
      setSent(false);
      setError(null);
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
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: "Activa Uniformes Web",
          subject: `Nueva Cotización Web - ${formObj.name || "Cliente"} (${formObj.company || "Empresa"})`,
          ...formObj,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
      } else {
        setError(
          data.message ||
            "Ocurrió un error al enviar la solicitud. Por favor intenta de nuevo."
        );
      }
    } catch {
      setError(
        "No se pudo conectar con el servicio de correo. Puedes intentar de nuevo o contactarnos por WhatsApp."
      );
    } finally {
      setSending(false);
    }
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-title"
      onClick={() => setOpen(false)}
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm animate-fade-in-fast cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full sm:max-w-2xl max-h-[92svh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-white shadow-[var(--shadow-elegant)] animate-modal-in cursor-default"
      >
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
            className="shrink-0 grid h-9 w-9 place-items-center rounded-full text-muted-foreground hover:bg-[var(--brand-light)] hover:text-foreground transition-colors cursor-pointer"
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
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/573142961813?text=Hola%2C%20acabo%20de%20enviar%20una%20solicitud%20de%20cotizaci%C3%B3n%20desde%20la%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20hacerle%20seguimiento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:brightness-105 transition-all shadow-[var(--shadow-soft)] cursor-pointer"
              >
                <MessageCircle size={16} />
                Contactar por WhatsApp
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground hover:bg-[var(--brand-light)] transition-colors cursor-pointer"
              >
                {t("quote.close")}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="px-5 sm:px-7 py-5 sm:py-6">
            {error && (
              <div className="mb-4 flex items-center gap-2.5 rounded-lg border border-red-200 bg-red-50 p-3.5 text-xs text-red-700">
                <AlertCircle size={16} className="shrink-0 text-red-600" />
                <span>{error}</span>
              </div>
            )}
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
                <select name="country" defaultValue={country.code} className={`${inputCls} cursor-pointer`}>
                  {COUNTRIES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.flag} {c.name}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label={t("quote.line")}>
                <select name="line" defaultValue="" className={`${inputCls} cursor-pointer`}>
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
                className="inline-flex items-center justify-center rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground hover:bg-[var(--brand-light)] transition-colors cursor-pointer"
              >
                {t("quote.close")}
              </button>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)] transition-transform disabled:opacity-70 disabled:translate-y-0 cursor-pointer"
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