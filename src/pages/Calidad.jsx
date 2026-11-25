import {
  ShieldCheck,
  Scale,
  Gauge,
  CloudOff,
  GitBranch,
  Container,
  CheckCircle2,
  Calendar
} from "lucide-react";

const QA_ROWS = [
  {
    icon: ShieldCheck,
    title: "Seguridad de la Información",
    desc: "Firma digital en JWS RS512 con biblioteca Jose4j, hashes de contraseñas mediante passlib[bcrypt], tokens JWT con secret y atadura de licencias a la huella criptográfica de hardware (BIOS, disco y MAC con SHA-256).",
    modules: ["MOD-01", "MOD-03", "MOD-05", "MOD-07"],
  },
  {
    icon: Scale,
    title: "Cumplimiento Normativo Fiscal",
    desc: "Exclusividad estricta entre NIT y DUI, formateo numérico forzado a dos decimales ('0.00'), validación de 21 columnas del Anexo 3 y plazos de invalidación de DTE antes del décimo día hábil del mes siguiente.",
    modules: ["MOD-01", "MOD-02"],
  },
  {
    icon: Gauge,
    title: "Eficiencia & Rendimiento",
    desc: "Compresión de imágenes en Web Workers del navegador (menos de 800 KB, máximo 1800 px) para escaneo rápido, y cálculos numéricos con BCMath en PHP para eliminar errores de coma flotante en impuestos.",
    modules: ["MOD-01", "MOD-02", "MOD-04"],
  },
  {
    icon: CloudOff,
    title: "Resiliencia & Tolerancia a Fallos",
    desc: "Búfer local en Dexie.js e IndexedDB para facturar sin internet, período de gracia de 72 horas para validación de licencias de escritorio y sincronización por lotes en contingencia.",
    modules: ["MOD-01", "MOD-04", "MOD-05"],
  },
  {
    icon: GitBranch,
    title: "Mantenibilidad & Arquitectura",
    desc: "Arquitectura basada en funciones (Feature-Based) y separación de capas MVC. Documentación viva por componente y CI con linter y tipado estricto en cada commit.",
    modules: ["MOD-03", "MOD-04", "MOD-07"],
  },
  {
    icon: Container,
    title: "Portabilidad & Aislamiento",
    desc: "Imágenes Docker multi-etapa con Nginx, configuración con Docker Compose para desarrollo local y manifiestos Kustomize para orquestación en Kubernetes.",
    modules: ["MOD-01", "MOD-04"],
  },
];

const ROADMAP_ITEMS = [
  {
    status: "En Desarrollo",
    title: "Dashboard Analítico Recharts",
    desc: "Gráficos reactivos en tiempo real para comparar ingresos, gastos y proyección de IVA débito/crédito fiscal mensual.",
  },
  {
    status: "Planificado",
    title: "OCR Nativo para Comprobantes en PDF",
    desc: "Extracción automatizada de campos fiscales directamente desde documentos PDF escaneados, reutilizando el motor PaddleOCR.",
  },
  {
    status: "Planificado",
    title: "CRM Tributario Multi-Empresa",
    desc: "Expediente digital único por cliente para descargar sus DTEs, anexos y declaraciones de forma centralizada.",
  },
  {
    status: "Propuesto",
    title: "Autenticación RBAC Granular",
    desc: "Migración de sesiones locales a roles JWT jerárquicos: Administrador Global, Contador Auditor y Operador de Caja.",
  },
];

export default function Calidad() {
  return (
    <div className="w-full min-h-screen bg-[#08101E] text-[#EBF1FA] px-4 sm:px-6 py-14">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* ================= HEADER ================= */}
        <section className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#47C88C] bg-[#0E3523] px-3.5 py-1.5 rounded-full border border-[#47C88C]/30 font-semibold">
            Estándar ISO 25010
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Atributos de Calidad e Ingeniería
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Cada requerimiento no funcional se respalda en una decisión técnica verificable en el código fuente de los sistemas.
          </p>
        </section>

        {/* ================= TABLA DE ATRIBUTOS ================= */}
        <section className="p-6 sm:p-8 rounded-3xl bg-[#0E1A2E] border border-[#203350] divide-y divide-[#203350]">
          {QA_ROWS.map((row, idx) => {
            const Icon = row.icon;
            return (
              <div
                key={idx}
                className="py-6 first:pt-2 last:pb-2 grid grid-cols-1 md:grid-cols-12 gap-4 items-start"
              >
                <div className="md:col-span-4 flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#14274B] text-[#5F90FF] flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </span>
                  <h2 className="text-base font-bold text-white">
                    {row.title}
                  </h2>
                </div>

                <div className="md:col-span-6">
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {row.desc}
                  </p>
                </div>

                <div className="md:col-span-2 flex flex-wrap gap-1 justify-start md:justify-end">
                  {row.modules.map((m, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#15243E] text-[#5F90FF] border border-[#5F90FF]/30"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* ================= ROADMAP 2026-2027 ================= */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#FFC633] uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>Evolución Planificada</span>
            </span>
            <h2 className="text-2xl font-bold text-white">
              Línea de Crecimiento & Roadmap 2026-2027
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROADMAP_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0E1A2E] border border-[#203350] hover:border-[#FFC633] transition-all space-y-3"
              >
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#382806] text-[#FFC633] font-bold border border-[#FFC633]/30">
                  {item.status}
                </span>
                <h3 className="text-base font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

