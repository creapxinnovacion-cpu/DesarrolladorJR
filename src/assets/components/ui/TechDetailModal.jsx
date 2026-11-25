import { useState } from "react";
import { X, Layers, Code, Terminal, CheckCircle2 } from "lucide-react";

export default function TechDetailModal({ module, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("arch");

  if (!isOpen || !module) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#0E1A2E] border border-[#203350] rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header del Modal */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#15243E] border-b border-[#203350]">
          <div>
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#5F90FF]">
              {module.id} · {module.badge}
            </span>
            <h3 className="text-xl font-extrabold text-white mt-0.5">
              {module.name}
            </h3>
          </div>
          <button 
            type="button" 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#1E3152] transition"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Pestañas de Navegación Técnica */}
        <div className="flex items-center gap-2 px-6 pt-3 bg-[#0E1A2E] border-b border-[#203350]">
          <button
            type="button"
            onClick={() => setActiveTab("arch")}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold rounded-t-lg transition border-b-2 ${
              activeTab === "arch"
                ? "border-[#5F90FF] text-[#5F90FF] bg-[#15243E]"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Arquitectura & Contratos</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("schema")}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold rounded-t-lg transition border-b-2 ${
              activeTab === "schema"
                ? "border-[#5F90FF] text-[#5F90FF] bg-[#15243E]"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Esquema / Payload</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("deploy")}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold rounded-t-lg transition border-b-2 ${
              activeTab === "deploy"
                ? "border-[#5F90FF] text-[#5F90FF] bg-[#15243E]"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Despliegue & CLI</span>
          </button>
        </div>

        {/* Cuerpo del Modal */}
        <div className="p-6 overflow-y-auto space-y-5">
          {activeTab === "arch" && (
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                  Problema Resuelto
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {module.problem}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Decisiones de Diseño Implementadas
                </h4>
                <div className="space-y-2">
                  {module.designDecisions.map((dec, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#47C88C] shrink-0 mt-0.5" />
                      <span>{dec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#5F90FF] mb-1.5">
                  Endpoints y Contratos Clave
                </h4>
                <pre className="p-3.5 rounded-xl bg-[#08101E] border border-[#203350] text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed">
                  {module.endpoints}
                </pre>
              </div>
            </div>
          )}

          {activeTab === "schema" && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#5F90FF]">
                Estructura de Datos / Payload JSON / SQL
              </h4>
              <pre className="p-4 rounded-xl bg-[#08101E] border border-[#203350] text-xs font-mono text-[#FFC633] overflow-x-auto leading-relaxed">
                {module.schemaCode}
              </pre>
            </div>
          )}

          {activeTab === "deploy" && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#47C88C]">
                Comandos de Inicialización y Entorno
              </h4>
              <pre className="p-4 rounded-xl bg-[#08101E] border border-[#203350] text-xs font-mono text-emerald-400 overflow-x-auto leading-relaxed">
                {module.deployCode}
              </pre>
            </div>
          )}
        </div>

        {/* Footer del Modal */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3.5 bg-[#15243E] border-t border-[#203350] text-xs">
          <div className="flex flex-wrap gap-1.5">
            {module.tags.map((t, i) => (
              <span key={i} className="px-2 py-0.5 rounded bg-[#08101E] text-slate-300 font-mono text-[11px] border border-[#203350]">
                {t}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#203350] hover:bg-[#1E3152] text-white font-medium transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

