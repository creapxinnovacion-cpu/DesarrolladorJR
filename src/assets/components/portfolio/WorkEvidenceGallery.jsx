import { useState, useEffect } from "react";
import GoogleIcon from "../ui/GoogleIcon";
import { WhatsAppIcon } from "../ui/WhatsAppButton";
import { EVIDENCE_CATEGORIES, WORK_EVIDENCE_ITEMS, CONTACT_INFO } from "../../../data/modulesData";

export default function WorkEvidenceGallery({ initialCategory = "todos", title, subtitle, showWhatsAppCta = true }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedItem, setSelectedItem] = useState(null);

  // Filtrado de elementos
  const filteredItems = activeCategory === "todos"
    ? WORK_EVIDENCE_ITEMS
    : WORK_EVIDENCE_ITEMS.filter((item) => item.category === activeCategory);

  // Manejo de teclado para modal lightbox (ESC para cerrar, Flechas para navegar)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedItem) return;
      if (e.key === "Escape") {
        setSelectedItem(null);
      } else if (e.key === "ArrowRight") {
        const currentIndex = filteredItems.findIndex((it) => it.id === selectedItem.id);
        const nextIndex = (currentIndex + 1) % filteredItems.length;
        setSelectedItem(filteredItems[nextIndex]);
      } else if (e.key === "ArrowLeft") {
        const currentIndex = filteredItems.findIndex((it) => it.id === selectedItem.id);
        const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
        setSelectedItem(filteredItems[prevIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, filteredItems]);

  const handleNext = (e) => {
    e?.stopPropagation();
    const currentIndex = filteredItems.findIndex((it) => it.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    const currentIndex = filteredItems.findIndex((it) => it.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  return (
    <section className="w-full space-y-8">
      {/* HEADER DE LA GALERÍA */}
      {(title || subtitle) && (
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14274B] border border-[#5F90FF]/30 text-[#5F90FF] text-xs font-mono font-semibold uppercase tracking-wider">
            <GoogleIcon name="verified" size={16} />
            <span>Evidencia Real de Ejecución en Campo</span>
          </div>
          {title && (
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* FILTROS POR CATEGORÍA TÉCNICA */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        {EVIDENCE_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={[
                "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 border cursor-pointer",
                isActive
                  ? "bg-[#14274B] border-[#5F90FF] text-white font-bold shadow-lg shadow-blue-900/30 ring-2 ring-[#5F90FF]/30"
                  : "bg-[#0E1A2E] border-[#203350] text-slate-300 hover:text-white hover:border-[#5F90FF]/40 hover:bg-[#15243E]"
              ].join(" ")}
            >
              <GoogleIcon
                name={cat.icon}
                size={16}
                className={isActive ? "text-[#5F90FF]" : "text-slate-400"}
              />
              <span>{cat.label}</span>
              <span
                className={[
                  "text-[10px] font-mono px-2 py-0.5 rounded-full ml-1",
                  isActive
                    ? "bg-[#FFC633] text-slate-950 font-bold"
                    : "bg-[#15243E] text-slate-400"
                ].join(" ")}
              >
                {cat.id === "todos" ? WORK_EVIDENCE_ITEMS.length : WORK_EVIDENCE_ITEMS.filter(it => it.category === cat.id).length}
              </span>
            </button>
          );
        })}
      </div>

      {/* GRID DE EVIDENCIAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group relative flex flex-col rounded-2xl bg-[#0E1A2E] border border-[#203350] overflow-hidden hover:border-[#5F90FF]/60 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          >
            {/* CONTENEDOR DE IMAGEN */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#08101E]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A2E] via-transparent to-black/30" />

              {/* BADGE DE CATEGORÍA */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08101E]/80 backdrop-blur-md border border-[#203350] text-[#5F90FF] text-[11px] font-mono font-bold">
                <GoogleIcon name="verified" size={13} className="text-[#47C88C]" />
                <span>{item.categoryLabel}</span>
              </div>

              {/* BADGE TÉCNICO EN ESQUINA DERECHA */}
              <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-md bg-[#FFC633] text-slate-950 text-[10px] font-mono font-extrabold uppercase tracking-wider shadow">
                {item.badge}
              </div>

              {/* BOTÓN OVERLAY HOVER */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A54FA] text-white text-xs font-mono font-bold shadow-xl">
                  <GoogleIcon name="zoom_in" size={16} />
                  <span>Inspeccionar Proyecto</span>
                </span>
              </div>
            </div>

            {/* CUERPO DE LA TARJETA */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white group-hover:text-[#5F90FF] transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 font-sans leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-[#203350]/60">
                {/* CLIENTE / UBICACIÓN */}
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <GoogleIcon name="location_on" size={14} className="text-[#FFC633] shrink-0" />
                  <span className="truncate">{item.client}</span>
                </div>

                {/* TAGS TÉCNICOS */}
                <div className="flex flex-wrap gap-1.5">
                  {item.specs.slice(0, 3).map((spec, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#15243E] border border-[#203350] text-slate-300"
                    >
                      {spec}
                    </span>
                  ))}
                  {item.specs.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#14274B] text-[#5F90FF]">
                      +{item.specs.length - 3}
                    </span>
                  )}
                </div>

                {/* RESPONSABLE */}
                <div className="flex items-center justify-between text-[11px] font-mono pt-1 text-slate-400">
                  <span className="flex items-center gap-1">
                    <GoogleIcon name="engineering" size={14} className="text-[#5F90FF]" />
                    <span>{item.technician}</span>
                  </span>
                  <span className="text-[#FFC633] font-semibold group-hover:underline flex items-center gap-0.5">
                    Ver más →
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX MODAL DE ALTA DEFINICIÓN */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[92vh] flex flex-col lg:flex-row bg-[#0E1A2E] border-2 border-[#5F90FF]/40 rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* BOTÓN CERRAR */}
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              aria-label="Cerrar vista"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/80 hover:bg-[#0A54FA] text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg"
            >
              <GoogleIcon name="close" size={20} />
            </button>

            {/* CONTENEDOR DE IMAGEN PRINCIPAL */}
            <div className="relative lg:w-3/5 bg-black flex items-center justify-center min-h-[320px] lg:min-h-[500px] overflow-hidden group">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-[80vh] w-auto max-w-full object-contain"
              />

              {/* NAVEGACIÓN ANTERIOR / SIGUIENTE */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Proyecto anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-[#0A54FA] text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-xl hover:scale-105 active:scale-95"
              >
                <GoogleIcon name="arrow_back" size={22} />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Proyecto siguiente"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-[#0A54FA] text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-xl hover:scale-105 active:scale-95"
              >
                <GoogleIcon name="arrow_forward" size={22} />
              </button>
            </div>

            {/* PANEL LATERAL DE DETALLES TÉCNICOS */}
            <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto bg-[#08101E]/95 border-t lg:border-t-0 lg:border-l border-[#203350]">
              <div className="space-y-4">
                {/* BADGES SUPERIORES */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#14274B] border border-[#5F90FF]/30 text-[#5F90FF] text-xs font-mono font-bold flex items-center gap-1.5">
                    <GoogleIcon name="verified" size={14} className="text-[#47C88C]" />
                    <span>{selectedItem.categoryLabel}</span>
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-[#FFC633] text-slate-950 text-xs font-mono font-extrabold uppercase">
                    {selectedItem.badge}
                  </span>
                </div>

                {/* TÍTULO */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                  {selectedItem.title}
                </h3>

                {/* CLIENTE Y LUGAR */}
                <div className="p-3 rounded-xl bg-[#0E1A2E] border border-[#203350] space-y-1">
                  <span className="text-[10px] font-mono uppercase text-[#FFC633] tracking-wider font-semibold block">
                    Proyecto / Ubicación Oficial
                  </span>
                  <p className="text-xs font-mono text-slate-200 flex items-center gap-1.5">
                    <GoogleIcon name="business" size={15} className="text-[#5F90FF] shrink-0" />
                    <span>{selectedItem.client}</span>
                  </p>
                </div>

                {/* DESCRIPCIÓN TÉCNICA */}
                <div className="space-y-1.5">
                  <span className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                    Memoria Técnica del Procedimiento
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {selectedItem.description}
                  </p>
                </div>

                {/* ESPECIFICACIONES TÉCNICAS */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider block">
                    Especificaciones y Estándares
                  </span>
                  <div className="grid grid-cols-1 gap-1.5">
                    {selectedItem.specs.map((spec, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs font-mono text-slate-300 px-3 py-1.5 rounded-lg bg-[#0E1A2E] border border-[#203350]"
                      >
                        <GoogleIcon name="check_circle" size={14} className="text-[#47C88C] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TÉCNICO RESPONSABLE */}
                <div className="pt-2 text-xs font-mono text-slate-400 flex items-center gap-2">
                  <GoogleIcon name="engineering" size={16} className="text-[#FFC633]" />
                  <span>Responsable: <strong className="text-white">{selectedItem.technician}</strong></span>
                </div>
              </div>

              {/* BOTÓN WHATSAPP DE CONVERSIÓN RÁPIDA */}
              {showWhatsAppCta && (
                <div className="pt-4 border-t border-[#203350] space-y-2">
                  <a
                    href={`${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(
                      `Hola Cristian y equipo, vi en su portafolio la evidencia de "${selectedItem.title}" (${selectedItem.id}) y me gustaría cotizar un requerimiento similar.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold font-mono text-xs sm:text-sm tracking-wide shadow-lg shadow-emerald-500/25 transition transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon size={18} className="fill-slate-950" />
                    <span>Cotizar Proyecto Similar por WhatsApp</span>
                  </a>
                  <p className="text-[10px] font-mono text-center text-slate-400">
                    Respuesta inmediata para proyectos en El Salvador.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

