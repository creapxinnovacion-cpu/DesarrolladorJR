import {
  Layers,
  Server,
  Database,
  Globe,
  Monitor,
  AlertTriangle,
  ArrowDown,
  CheckCircle2
} from "lucide-react";
import { CREAPX_SERVICES_MATRIX } from "../data/modulesData";

export default function Arquitectura() {
  return (
    <div className="w-full min-h-screen bg-[#08101E] text-[#EBF1FA] px-4 sm:px-6 py-14">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* ================= HEADER ARQUITECTURA ================= */}
        <section className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#5F90FF] bg-[#14274B] px-3.5 py-1.5 rounded-full border border-[#5F90FF]/30">
            Arquitectura de Ecosistema
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Modelo de 4 Capas & Flujo Fiscal
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Estructura desacoplada para garantizar alta cohesión, tolerancia a caídas del Ministerio de Hacienda y procesamiento concurrente sin fricciones.
          </p>
        </section>

        {/* ================= VISTA DE 4 CAPAS INTERACTIVA ================= */}
        <section className="space-y-4">
          <div className="p-6 rounded-2xl bg-[#0E1A2E] border border-[#203350] shadow-sm">
            <div className="flex items-center gap-3 mb-3 text-[#5F90FF]">
              <Monitor className="w-5 h-5" />
              <h2 className="text-base font-bold font-mono uppercase tracking-wider text-white">
                Capa 1: Clientes y Canales de Entrada
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-[#15243E] border border-[#5F90FF]/40 text-[#5F90FF] font-semibold">
                Web POS React 19 (Desktop/Tablet)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#15243E] border border-[#203350] text-slate-300">
                PWA Scanner F-07 (Web Workers)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#15243E] border border-[#5F90FF]/40 text-[#5F90FF] font-semibold">
                App Móvil Flutter (BLoC / Cubit)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#15243E] border border-[#203350] text-slate-300">
                App Desktop Windows (PySide6 Qt)
              </span>
            </div>
          </div>

          <div className="flex justify-center text-[#5F90FF]">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>

          <div className="p-6 rounded-2xl bg-[#0E1A2E] border border-[#203350] shadow-sm">
            <div className="flex items-center gap-3 mb-3 text-[#5F90FF]">
              <Server className="w-5 h-5" />
              <h2 className="text-base font-bold font-mono uppercase tracking-wider text-white">
                Capa 2: Servicios, APIs & Orquestación
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-[#15243E] border border-[#5F90FF]/40 text-[#5F90FF] font-semibold">
                Laravel 12 (Orquestador DTE & BCMath)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#382806] border border-[#FFC633]/40 text-[#FFC633] font-semibold">
                Spring Boot (Firmador JWS RS512 con Jose4j)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#15243E] border border-[#203350] text-slate-300">
                FastAPI (PaddleOCR & API Multi-Tenant)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#15243E] border border-[#203350] text-slate-300">
                Node.js Express (Sistema Médico)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#15243E] border border-[#203350] text-slate-300">
                Google Apps Script (JSON-RPC)
              </span>
            </div>
          </div>

          <div className="flex justify-center text-[#5F90FF]">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>

          <div className="p-6 rounded-2xl bg-[#0E1A2E] border border-[#203350] shadow-sm">
            <div className="flex items-center gap-3 mb-3 text-[#5F90FF]">
              <Database className="w-5 h-5" />
              <h2 className="text-base font-bold font-mono uppercase tracking-wider text-white">
                Capa 3: Persistencia & Almacenamiento Híbrido
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-[#15243E] border border-[#5F90FF]/40 text-[#5F90FF] font-semibold">
                PostgreSQL (Neon DB Serverless)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#15243E] border border-[#203350] text-slate-300">
                Dexie.js / IndexedDB (Contingencia Offline)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#15243E] border border-[#203350] text-slate-300">
                SQLite Local (Caché Rápido)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#15243E] border border-[#203350] text-slate-300">
                Google Sheets API (8 Hojas Relacionadas)
              </span>
            </div>
          </div>

          <div className="flex justify-center text-[#5F90FF]">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>

          <div className="p-6 rounded-2xl bg-[#0E1A2E] border border-[#203350] shadow-sm">
            <div className="flex items-center gap-3 mb-3 text-[#5F90FF]">
              <Globe className="w-5 h-5" />
              <h2 className="text-base font-bold font-mono uppercase tracking-wider text-white">
                Capa 4: Servicios Externos & Normativa
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-[#15243E] border border-[#47C88C]/40 text-[#47C88C] font-semibold">
                Ministerio de Hacienda (MH El Salvador)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#15243E] border border-[#203350] text-slate-300">
                OpenStreetMap / Leaflet (Telemetría Gas)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#15243E] border border-[#203350] text-slate-300">
                Servidores IMAP SSL / Gmail APIs
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#15243E] border border-[#203350] text-slate-300">
                Google Analytics 4 (Tracking SPA)
              </span>
            </div>
          </div>
        </section>

        {/* ================= FLUJO DEL CICLO DE VIDA DTE ================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-[#0E1A2E] border border-[#203350] space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#FFC633] uppercase tracking-widest font-semibold">
              Proceso Tributario Homologado
            </span>
            <h2 className="text-2xl font-bold text-white">
              Ciclo de Vida de Emisión de un DTE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="p-4 rounded-xl bg-[#15243E] border border-[#203350] space-y-2">
              <span className="text-xs font-mono font-bold text-[#5F90FF]">Paso 01</span>
              <h3 className="text-sm font-bold text-white">Captura en POS</h3>
              <p className="text-xs text-slate-400">
                El frontend valida emisor, receptor, ítems y condición de pago (Contado/Crédito).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#15243E] border border-[#203350] space-y-2">
              <span className="text-xs font-mono font-bold text-[#5F90FF]">Paso 02</span>
              <h3 className="text-sm font-bold text-white">Cálculo BCMath</h3>
              <p className="text-xs text-slate-400">
                El backend aplica IVA 13%, retenciones 1% y percepciones con precisión decimal exacta.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#15243E] border border-[#FFC633]/40 space-y-2">
              <span className="text-xs font-mono font-bold text-[#FFC633]">Paso 03</span>
              <h3 className="text-sm font-bold text-white">Firma JWS RS512</h3>
              <p className="text-xs text-slate-400">
                Spring Boot cifra el JSON canónico con la llave privada RSA de Hacienda en milisegundos.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#15243E] border border-[#203350] space-y-2">
              <span className="text-xs font-mono font-bold text-[#5F90FF]">Paso 04</span>
              <h3 className="text-sm font-bold text-white">Transmisión MH</h3>
              <p className="text-xs text-slate-400">
                Despacho REST hacia el portal de Hacienda y recepción del sello digital y código de lote.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#15243E] border border-[#47C88C]/40 space-y-2">
              <span className="text-xs font-mono font-bold text-[#47C88C]">Paso 05</span>
              <h3 className="text-sm font-bold text-white">Entrega & QR</h3>
              <p className="text-xs text-slate-400">
                Generación del PDF con código QR fiscal y envío automático del JSON firmado por correo.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#382806] border border-[#FFC633]/40 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#FFC633] shrink-0 mt-0.5" />
            <p className="text-xs text-amber-200 leading-relaxed">
              <strong>Mecanismo de Contingencia:</strong> Si la red del cliente o los servidores de Hacienda no responden, el documento no se pierde ni se cancela la venta; se encola de inmediato en el almacenamiento seguro local y se despacha automáticamente en paquetes por lotes al restablecerse el enlace.
            </p>
          </div>
        </section>

        {/* ================= MATRIZ DE SERVICIOS CREAPX ================= */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#5F90FF] uppercase tracking-widest font-semibold">
              Trazabilidad Comercial & Técnica
            </span>
            <h2 className="text-2xl font-bold text-white">
              Matriz: Servicios de CreaPx vs. Módulos de Software
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#203350] bg-[#0E1A2E]">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#15243E] border-b border-[#203350] font-mono text-[11px] uppercase tracking-wider text-slate-300">
                <tr>
                  <th className="p-4">Línea de Servicio</th>
                  <th className="p-4">Enfoque Operativo</th>
                  <th className="p-4">Módulos que lo Respaldan</th>
                  <th className="p-4">Impacto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#203350]">
                {CREAPX_SERVICES_MATRIX.map((row, i) => (
                  <tr key={i} className="hover:bg-[#15243E]/50 transition">
                    <td className="p-4 font-bold text-white">{row.service}</td>
                    <td className="p-4 text-slate-300">{row.focus}</td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1">
                        {row.modules.map((m, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded bg-[#14274B] text-[#5F90FF] font-mono text-[11px] border border-[#5F90FF]/30">
                            {m}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-4 text-slate-400 text-xs">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

