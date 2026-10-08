import { useState, useEffect } from "react";
import {
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  MessageCircle,
  Images,
} from "lucide-react";
import { openQuoteDialog } from "@/components/QuoteDialog";

export interface LineImageItem {
  id: string;
  name: string;
  image: string;
  thumb: string;
}

export interface LineGalleryData {
  id: string;
  title: string;
  desc?: string;
  images: LineImageItem[];
}

export const ADMIN_IMAGES: LineImageItem[] = [
  {
    id: "blusa-mc",
    name: "Blusa Manga Corta",
    image: "/Linea%20Administrativa/Blusa%20M_C.webp",
    thumb: "/Linea%20Administrativa/Blusa%20M_C.thumb.webp",
  },
  {
    id: "blusa-ml",
    name: "Blusa Manga Larga",
    image: "/Linea%20Administrativa/Blusa%20M_L.webp",
    thumb: "/Linea%20Administrativa/Blusa%20M_L.thumb.webp",
  },
  {
    id: "blusa-m34",
    name: "Blusa Manga 3/4",
    image: "/Linea%20Administrativa/Blusa%20manga%203_4.webp",
    thumb: "/Linea%20Administrativa/Blusa%20manga%203_4.thumb.webp",
  },
  {
    id: "camisa-mc",
    name: "Camisa Manga Corta",
    image: "/Linea%20Administrativa/Camisa%20M_C.webp",
    thumb: "/Linea%20Administrativa/Camisa%20M_C.thumb.webp",
  },
  {
    id: "camisa-ml",
    name: "Camisa Manga Larga",
    image: "/Linea%20Administrativa/Camisa%20M_L.webp",
    thumb: "/Linea%20Administrativa/Camisa%20M_L.thumb.webp",
  },
  {
    id: "pantalon-dama",
    name: "Pantalón Dama",
    image: "/Linea%20Administrativa/Pantal%C3%B3n%20dama.webp",
    thumb: "/Linea%20Administrativa/Pantal%C3%B3n%20dama.thumb.webp",
  },
  {
    id: "leo-0684",
    name: "Conjunto Administrativo",
    image: "/Linea%20Administrativa/_LEO0684.webp",
    thumb: "/Linea%20Administrativa/_LEO0684.thumb.webp",
  },
  {
    id: "leo-0686",
    name: "Detalle Administrativo",
    image: "/Linea%20Administrativa/_LEO0686.webp",
    thumb: "/Linea%20Administrativa/_LEO0686.thumb.webp",
  },
  {
    id: "leo-0746",
    name: "Camisa Ejecutiva",
    image: "/Linea%20Administrativa/_LEO0746.webp",
    thumb: "/Linea%20Administrativa/_LEO0746.thumb.webp",
  },
  {
    id: "leo-0755",
    name: "Dotación Administrativa",
    image: "/Linea%20Administrativa/_LEO0755.webp",
    thumb: "/Linea%20Administrativa/_LEO0755.thumb.webp",
  },
  {
    id: "leo-0810",
    name: "Equipo Administrativo",
    image: "/Linea%20Administrativa/_LEO0810.webp",
    thumb: "/Linea%20Administrativa/_LEO0810.thumb.webp",
  },
];

export const VEST_IMAGES: LineImageItem[] = [
  {
    id: "chaleco-azul-1",
    name: "Chaleco Azul (Frontal)",
    image: "/Linea%20Administrativa/Chaleco%20azul%201.webp",
    thumb: "/Linea%20Administrativa/Chaleco%20azul%201.thumb.webp",
  },
  {
    id: "chaleco-azul-2",
    name: "Chaleco Azul (Espalda)",
    image: "/Linea%20Administrativa/Chaleco%20azul%202.webp",
    thumb: "/Linea%20Administrativa/Chaleco%20azul%202.thumb.webp",
  },
  {
    id: "chaleco-rojo-1",
    name: "Chaleco Rojo (Frontal)",
    image: "/Linea%20Administrativa/Chaleco%20rojo%201.webp",
    thumb: "/Linea%20Administrativa/Chaleco%20rojo%201.thumb.webp",
  },
  {
    id: "chaleco-rojo-2",
    name: "Chaleco Rojo (Detalle)",
    image: "/Linea%20Administrativa/Chaleco%20rojo%202.webp",
    thumb: "/Linea%20Administrativa/Chaleco%20rojo%202.thumb.webp",
  },
];

export const DEPORTIVA_IMAGES: LineImageItem[] = [
  {
    id: "camibuso-cab-1",
    name: "Camibuso Caballero 1",
    image: "/Linea%20deportiva/Camibuso%20caballero%201.webp",
    thumb: "/Linea%20deportiva/Camibuso%20caballero%201.thumb.webp",
  },
  {
    id: "camibuso-cab-2",
    name: "Camibuso Caballero 2",
    image: "/Linea%20deportiva/Camibuso%20caballero%202.webp",
    thumb: "/Linea%20deportiva/Camibuso%20caballero%202.thumb.webp",
  },
  {
    id: "camibuso-dam-1",
    name: "Camibuso Dama 1",
    image: "/Linea%20deportiva/Camibuso%20dama%201.webp",
    thumb: "/Linea%20deportiva/Camibuso%20dama%201.thumb.webp",
  },
  {
    id: "camibuso-dam-2",
    name: "Camibuso Dama 2",
    image: "/Linea%20deportiva/Camibuso%20dama%202.webp",
    thumb: "/Linea%20deportiva/Camibuso%20dama%202.thumb.webp",
  },
  {
    id: "camibuso-ml",
    name: "Camibuso Manga Larga",
    image: "/Linea%20deportiva/Camibuso%20manga%20larga.webp",
    thumb: "/Linea%20deportiva/Camibuso%20manga%20larga.thumb.webp",
  },
  {
    id: "leo-0951",
    name: "Camibuso Deportivo 1",
    image: "/Linea%20deportiva/_LEO0951.webp",
    thumb: "/Linea%20deportiva/_LEO0951.thumb.webp",
  },
  {
    id: "leo-1099",
    name: "Camibuso Deportivo 2",
    image: "/Linea%20deportiva/_LEO1099.webp",
    thumb: "/Linea%20deportiva/_LEO1099.thumb.webp",
  },
  {
    id: "leo-1117",
    name: "Camibuso Deportivo 3",
    image: "/Linea%20deportiva/_LEO1117.webp",
    thumb: "/Linea%20deportiva/_LEO1117.thumb.webp",
  },
];

export const INDUSTRIAL_IMAGES: LineImageItem[] = [
  {
    id: "camisa-ind",
    name: "Camisa Industrial",
    image: "/Linea%20industrial/Camisa%20Industrial.webp",
    thumb: "/Linea%20industrial/Camisa%20Industrial.thumb.webp",
  },
  {
    id: "camisa-jean-liviano",
    name: "Camisa Jean Liviano",
    image: "/Linea%20industrial/Camisa%20Jean%20liviano.webp",
    thumb: "/Linea%20industrial/Camisa%20Jean%20liviano.thumb.webp",
  },
  {
    id: "chaleco-ind",
    name: "Chaleco Industrial",
    image: "/Linea%20industrial/Chaleco.webp",
    thumb: "/Linea%20industrial/Chaleco.thumb.webp",
  },
  {
    id: "jean-cab",
    name: "Jean Caballero",
    image: "/Linea%20industrial/Jean%20caballero.webp",
    thumb: "/Linea%20industrial/Jean%20caballero.thumb.webp",
  },
  {
    id: "jean-dam",
    name: "Jean Dama",
    image: "/Linea%20industrial/Jean%20dama.webp",
    thumb: "/Linea%20industrial/Jean%20dama.thumb.webp",
  },
  {
    id: "overol-dam",
    name: "Overol Dama",
    image: "/Linea%20industrial/Overol%20dama.webp",
    thumb: "/Linea%20industrial/Overol%20dama.thumb.webp",
  },
  {
    id: "leo-0018",
    name: "Dotación Industrial 1",
    image: "/Linea%20industrial/_LEO0018.webp",
    thumb: "/Linea%20industrial/_LEO0018.thumb.webp",
  },
  {
    id: "leo-0022",
    name: "Dotación Industrial 2",
    image: "/Linea%20industrial/_LEO0022.webp",
    thumb: "/Linea%20industrial/_LEO0022.thumb.webp",
  },
  {
    id: "leo-0024",
    name: "Dotación Industrial 3",
    image: "/Linea%20industrial/_LEO0024.webp",
    thumb: "/Linea%20industrial/_LEO0024.thumb.webp",
  },
];

export const CHEF_IMAGES: LineImageItem[] = [
  {
    id: "delantal-corto",
    name: "Delantal Corto",
    image: "/Linea%20restaurante/Delantal%20corto.webp",
    thumb: "/Linea%20restaurante/Delantal%20corto.thumb.webp",
  },
  {
    id: "delantales-gorros-1",
    name: "Delantales y Gorros 1",
    image: "/Linea%20restaurante/Delantales%20y%20gorros%201.webp",
    thumb: "/Linea%20restaurante/Delantales%20y%20gorros%201.thumb.webp",
  },
  {
    id: "delantales-gorros-2",
    name: "Delantales y Gorros 2",
    image: "/Linea%20restaurante/Delantales%20y%20gorros%202.webp",
    thumb: "/Linea%20restaurante/Delantales%20y%20gorros%202.thumb.webp",
  },
  {
    id: "gorros-filipina-1",
    name: "Gorros, Filipina y Delantal 1",
    image: "/Linea%20restaurante/Gorros%20filipina%20y%20delantal%201.webp",
    thumb: "/Linea%20restaurante/Gorros%20filipina%20y%20delantal%201.thumb.webp",
  },
  {
    id: "gorros-filipina-2",
    name: "Gorros, Filipina y Delantal 2",
    image: "/Linea%20restaurante/Gorros%20filipina%20y%20delantal%202.webp",
    thumb: "/Linea%20restaurante/Gorros%20filipina%20y%20delantal%202.thumb.webp",
  },
  {
    id: "leo-0772",
    name: "Uniforme Gastronómico",
    image: "/Linea%20restaurante/_LEO0772.webp",
    thumb: "/Linea%20restaurante/_LEO0772.thumb.webp",
  },
];

export const HEALTH_IMAGES: LineImageItem[] = [
  {
    id: "traje-mayo",
    name: "Conjunto Traje de Mayo",
    image: "/Linea%20salud/Conjunto%20traje%20de%20mayo.webp",
    thumb: "/Linea%20salud/Conjunto%20traje%20de%20mayo.thumb.webp",
  },
];

export const ALL_LINES_GALLERY: Record<string, LineGalleryData> = {
  admin: {
    id: "admin",
    title: "Línea Administrativa",
    images: ADMIN_IMAGES,
  },
  polo: {
    id: "polo",
    title: "Línea Camibusos",
    images: DEPORTIVA_IMAGES,
  },
  deportiva: {
    id: "deportiva",
    title: "Línea Deportiva",
    images: DEPORTIVA_IMAGES,
  },
  vest: {
    id: "vest",
    title: "Línea Chalecos",
    images: VEST_IMAGES,
  },
  industrial: {
    id: "industrial",
    title: "Línea Industrial",
    images: INDUSTRIAL_IMAGES,
  },
  chef: {
    id: "chef",
    title: "Línea Restaurante y Cocina",
    images: CHEF_IMAGES,
  },
  health: {
    id: "health",
    title: "Línea Salud y Belleza",
    images: HEALTH_IMAGES,
  },
};

interface LineModalProps {
  lineId: string | null;
  onClose: () => void;
}

export function LineModal({ lineId, onClose }: LineModalProps) {
  const [activePhotoIdx, setActivePhotoIdx] = useState<number | null>(null);

  const lineData = lineId ? ALL_LINES_GALLERY[lineId] || null : null;
  const images = lineData?.images || [];

  // Reset photo on line change
  useEffect(() => {
    setActivePhotoIdx(null);
  }, [lineId]);

  // Keyboard navigation
  useEffect(() => {
    if (!lineId) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activePhotoIdx !== null) {
          setActivePhotoIdx(null);
        } else {
          onClose();
        }
      }
      if (activePhotoIdx !== null && images.length > 0) {
        if (e.key === "ArrowLeft") {
          setActivePhotoIdx((prev) =>
            prev === null || prev === 0 ? images.length - 1 : prev - 1
          );
        }
        if (e.key === "ArrowRight") {
          setActivePhotoIdx((prev) =>
            prev === null || prev === images.length - 1 ? 0 : prev + 1
          );
        }
      }
    };

    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lineId, activePhotoIdx, images, onClose]);

  if (!lineData) return null;

  const currentPhoto =
    activePhotoIdx !== null && images[activePhotoIdx]
      ? images[activePhotoIdx]
      : null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Galería de ${lineData.title}`}
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-5 lg:p-8 animate-fade-in-slow overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[92vh] flex flex-col bg-[#0F172A] text-white border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="px-5 sm:px-8 py-4 border-b border-white/10 bg-slate-900 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                {lineData.title}
              </h2>
              <p className="text-xs text-white/60 flex items-center gap-1.5 mt-0.5">
                <Images size={13} /> {images.length} {images.length === 1 ? "foto" : "fotos de productos"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                onClose();
                openQuoteDialog();
              }}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 transition-all shadow-md cursor-pointer"
            >
              Solicitar Cotización <ArrowRight size={14} />
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar modal"
              className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* GALLERY GRID */}
        <div className="overflow-y-auto p-5 sm:p-7 max-h-[calc(92vh-130px)]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {images.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActivePhotoIdx(idx)}
                className="group relative flex flex-col overflow-hidden rounded-xl bg-white/[0.03] border border-white/10 hover:border-[var(--brand-red)]/60 transition-all text-left focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/40">
                  <img
                    src={item.thumb}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3">
                    <span className="text-[11px] font-medium text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      Ver foto
                    </span>
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-white/25 text-white backdrop-blur-sm">
                      <ZoomIn size={14} />
                    </span>
                  </div>
                </div>

                {/* Caption */}
                <div className="p-3 bg-slate-900/90 border-t border-white/5 flex items-center justify-between gap-2">
                  <span className="font-medium text-xs text-white/90 truncate">
                    {item.name}
                  </span>
                  <span className="text-[10px] text-white/40 shrink-0">
                    #{idx + 1}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX */}
      {currentPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ampliada: ${currentPhoto.name}`}
          className="fixed inset-0 z-[130] flex items-center justify-center bg-black/95 backdrop-blur-md p-3 sm:p-6 animate-fade-in-slow"
          onClick={() => setActivePhotoIdx(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center bg-[#0B1120] border border-white/15 rounded-2xl p-4 sm:p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="w-full flex items-center justify-between pb-3 border-b border-white/10">
              <div className="min-w-0 pr-4">
                <h3 className="font-display text-base sm:text-lg font-bold text-white truncate">
                  {currentPhoto.name}
                </h3>
                <p className="text-xs text-white/50">
                  {lineData.title} · Foto {(activePhotoIdx ?? 0) + 1} de {images.length}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActivePhotoIdx(null)}
                aria-label="Cerrar vista previa"
                className="shrink-0 grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Main Image */}
            <div className="relative mt-3 w-full flex-1 flex items-center justify-center min-h-[300px] max-h-[62vh] overflow-hidden rounded-xl bg-black/50">
              <img
                src={currentPhoto.image}
                alt={currentPhoto.name}
                decoding="async"
                className="max-h-[60vh] w-auto max-w-full object-contain rounded-lg"
              />

              {/* Prev / Next Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActivePhotoIdx((prev) =>
                        prev === null || prev === 0 ? images.length - 1 : prev - 1
                      )
                    }
                    aria-label="Foto anterior"
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-black/75 hover:bg-black text-white backdrop-blur-sm transition-all border border-white/20 cursor-pointer"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActivePhotoIdx((prev) =>
                        prev === null || prev === images.length - 1 ? 0 : prev + 1
                      )
                    }
                    aria-label="Siguiente foto"
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-black/75 hover:bg-black text-white backdrop-blur-sm transition-all border border-white/20 cursor-pointer"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Bottom thumbnail strip & actions */}
            <div className="mt-3 w-full flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
              <div className="flex gap-2 overflow-x-auto max-w-md py-1">
                {images.map((p, idx) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`h-12 w-12 shrink-0 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      activePhotoIdx === idx
                        ? "border-[var(--brand-red)] scale-105"
                        : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={p.thumb}
                      alt={p.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/573142961813?text=Hola%2C%20quisiera%20cotizar%20la%20prenda%20"${encodeURIComponent(
                    currentPhoto.name
                  )}"%20de%20la%20${encodeURIComponent(lineData.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  <MessageCircle size={14} className="text-[#25D366]" /> WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setActivePhotoIdx(null);
                    onClose();
                    openQuoteDialog();
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs sm:text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 transition-all shadow-md cursor-pointer"
                >
                  Cotizar <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
