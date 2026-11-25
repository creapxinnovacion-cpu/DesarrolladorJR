import { useState } from "react";
import {
  Search,
  Receipt,
  ScanLine,
  Stethoscope,
  Package,
  MailSearch,
  Calculator,
  Server,
  Truck,
  Globe,
  Wrench,
  ChevronRight,
  CheckCircle2,
  SlidersHorizontal
} from "lucide-react";
import { MODULES_DATA, CATEGORIES } from "../data/modulesData";
import TechDetailModal from "../assets/components/ui/TechDetailModal";

const ICON_MAP = {
  Receipt,
  ScanLine,
  Stethoscope,
  Package,
  MailSearch,
  Calculator,
  Server,
  Truck,
  Globe,
  Wrench,
};

export default function Modulos() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [activeModalModule, setActiveModalModule] = useState(null);

  // Filtrado reactivo en tiempo real
  const filteredModules = MODULES_DATA.filter((m) => {
    const matchesCategory =
      selectedCategory === "Todos" || m.category.includes(selectedCategory);

    const query = search.toLowerCase().trim();
    const matchesQuery =
      !query ||
      m.id.toLowerCase().includes(query) ||
      m.name.toLowerCase().includes(query) ||
      m.problem.toLowerCase().includes(query) ||
      m.tags.some((t) => t.toLowerCase().includes(query)) ||
      m.designDecisions.some((d) => d.toLowerCase().includes(query));

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="w-full min-h-screen bg-[#08101E] text-[#EBF1FA] px-4 sm:px-6 py-14">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FFC633] bg-[#382806] px-3.5 py-1.5 rounded-full border border-[#FFC633]/30 font-semibold">
            Portafolio Técnico de Producción
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Catálogo Detallado de los 10 Módulos
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Explora las especificaciones de software, decisiones de arquitectura y contratos de API de cada sistema. Abre el visor técnico para inspeccionar esquemas JSON, modelos de datos y comandos de despliegue.
          </p>
        </div>

        {/* ================= BARRA DE BÚSQUEDA Y FILTROS ================= */}
        <div className="space-y-4 p-6 rounded-2xl bg-[#0E1A2E] border border-[#203350]">
          {/* Input de Búsqueda */}
          <div className="relative w-full">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por módulo, tecnología, norma o regla (ej. FastAPI, JWS, BCMath, Neon, FEFO)..."
              className="w-full pl-11 pr-4 py-3 bg-[#08101E] border border-[#203350] rounded-xl text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:border-[#5F90FF] focus:ring-2 focus:ring-[#5F90FF]/20 transition"
            />
          </div>

          {/* Chips de Categorías */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Categoría:</span>
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition ${
                  selectedCategory === cat
                    ? "bg-[#0A54FA] text-white font-bold shadow-md shadow-blue-600/30"
                    : "bg-[#15243E] text-slate-300 hover:text-white hover:bg-[#1E3152] border border-[#203350]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Contador de Resultados */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-[#203350]">
            <span>
              Mostrando <strong className="text-white">{filteredModules.length}</strong> de{" "}
              {MODULES_DATA.length} módulos
            </span>
            <span className="text-[11px] text-[#5F90FF]">
              SDD-JR-001 v2.0
            </span>
          </div>
        </div>

        {/* ================= GRID DE MÓDULOS ================= */}
        {filteredModules.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-2xl bg-[#0E1A2E] border border-[#203350] space-y-3">
            <p className="text-slate-400 text-sm font-mono">
              No se encontraron módulos coincidentes con "{search}".
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("Todos");
              }}
              className="text-xs font-mono font-semibold text-[#5F90FF] hover:underline"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredModules.map((item) => {
              const IconComp = ICON_MAP[item.icon] || Server;
              return (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl bg-[#0E1A2E] border border-[#203350] hover:border-[#5F90FF] transition-all flex flex-col justify-between shadow-sm"
                >
                  <div className="space-y-4">
                    {/* Header de la Card */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#5F90FF] bg-[#14274B] px-2.5 py-1 rounded-md border border-[#5F90FF]/30">
                        {item.id}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {item.category.map((c, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#15243E] text-slate-300"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Título & Icono */}
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-[#14274B] text-[#5F90FF] flex items-center justify-center shrink-0">
                        <IconComp className="w-5 h-5" />
                      </span>
                      <h2 className="text-lg sm:text-xl font-bold text-white leading-tight">
                        {item.name}
                      </h2>
                    </div>

                    {/* Problema */}
                    <div>
                      <h3 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                        Problema de Negocio
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.problem}
                      </p>
                    </div>

                    {/* Decisiones de Diseño */}
                    <div className="border-t border-[#203350] pt-3 space-y-2">
                      <h3 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                        Decisiones Técnicas
                      </h3>
                      {item.designDecisions.map((dec, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#47C88C] shrink-0 mt-0.5" />
                          <span>{dec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer & Botón de Detalle */}
                  <div className="mt-6 pt-4 border-t border-[#203350] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(0, 3).map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#15243E] text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#15243E] text-slate-500">
                          +{item.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveModalModule(item)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#15243E] hover:bg-[#5F90FF] hover:text-white text-slate-200 border border-[#203350] rounded-lg text-xs font-mono font-semibold transition"
                    >
                      <span>Ver detalle técnico</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* MODAL REUTILIZABLE DE DETALLE TÉCNICO */}
      <TechDetailModal
        module={activeModalModule}
        isOpen={Boolean(activeModalModule)}
        onClose={() => setActiveModalModule(null)}
      />
    </div>
  );
}

