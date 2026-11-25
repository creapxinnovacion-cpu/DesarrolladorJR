import { Link } from "react-router-dom";
import GoogleIcon from "../assets/components/ui/GoogleIcon";
import { WhatsAppIcon } from "../assets/components/ui/WhatsAppButton";
import { CASE_STUDIES_DATA, CONTACT_INFO } from "../data/modulesData";

export default function Casos() {
  return (
    <div className="w-full min-h-screen bg-[#08101E] text-[#EBF1FA] px-4 sm:px-6 py-14">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* HEADER DE CASOS DE ÉXITO */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14274B] border border-[#5F90FF]/30 text-[#5F90FF] text-xs font-sans font-semibold uppercase tracking-wider">
            <GoogleIcon name="verified" size={16} />
            <span>Casos Reales y Resultados Medibles</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Casos de Estudio: Problemas Resueltos con{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5F90FF] via-sky-400 to-[#38BDF8]">
              Ingeniería
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            No vendemos promesas abstractas. Conoce cómo nuestras soluciones de software a medida, facturación DTE e infraestructura de redes han protegido y optimizado empresas reales en El Salvador.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/contacto"
              className="px-6 py-3 rounded-xl bg-[#FFC633] hover:bg-[#F7B836] text-slate-950 font-sans font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition transform hover:-translate-y-0.5 active:scale-95"
            >
              Cotizar Mi Proyecto
            </Link>
            <Link
              to="/evidencia"
              className="px-6 py-3 rounded-xl bg-[#15243E] hover:bg-[#1E3152] text-white border border-[#203350] font-sans font-semibold text-xs transition"
            >
              Ver Evidencias Fotográficas de Campo (25+) →
            </Link>
          </div>
        </section>

        {/* LISTADO DE CASOS DE ESTUDIO */}
        <section className="space-y-12">
          {CASE_STUDIES_DATA.map((caso, index) => (
            <div
              key={caso.id}
              className="p-8 sm:p-10 rounded-3xl bg-[#0E1A2E] border border-[#203350] hover:border-[#5F90FF]/50 transition-all duration-300 space-y-8"
            >
              {/* CABECERA DEL CASO */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#203350]/80 pb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#14274B] border border-[#5F90FF]/30 flex items-center justify-center text-[#5F90FF] shrink-0">
                    <GoogleIcon name={caso.icon} size={24} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#FFC633] font-bold tracking-wider">
                      {caso.industry} · Caso #{index + 1}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                      {caso.title}
                    </h2>
                  </div>
                </div>

                {/* MÉTRICA DESTACADA */}
                <div className="self-start sm:self-center px-4 py-2 rounded-xl bg-[#14274B] border border-[#5F90FF]/40 text-right">
                  <span className="text-xl font-mono font-extrabold text-[#47C88C] block">
                    {caso.metric}
                  </span>
                  <span className="text-[10px] font-mono text-slate-300 uppercase">
                    {caso.metricLabel}
                  </span>
                </div>
              </div>

              {/* GRID PROBLEMA vs SOLUCIÓN */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* COLUMNA PROBLEMA */}
                <div className="space-y-3 p-6 rounded-2xl bg-[#121A28] border border-red-500/20">
                  <div className="flex items-center gap-2 text-xs font-mono text-red-400 font-bold uppercase tracking-wider">
                    <GoogleIcon name="error" size={16} />
                    <span>El Problema del Cliente</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {caso.problem}
                  </p>
                </div>

                {/* COLUMNA SOLUCIÓN */}
                <div className="space-y-3 p-6 rounded-2xl bg-[#0F2338] border border-[#5F90FF]/30">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#5F90FF] font-bold uppercase tracking-wider">
                    <GoogleIcon name="build" size={16} />
                    <span>La Solución de Ingeniería</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                    {caso.solution}
                  </p>
                </div>
              </div>

              {/* RESULTADOS OBTENIDOS */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Resultados Verificables de la Operación:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {caso.results.map((res, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-3.5 rounded-xl bg-[#08101E] border border-[#203350] flex items-start gap-2.5 text-xs text-slate-300"
                    >
                      <GoogleIcon name="check_circle" size={16} className="text-[#47C88C] shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FOOTER DEL CASO: TECNOLOGÍAS Y ACCIÓN */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#203350]/60">
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="text-[11px] font-mono text-slate-400 mr-1">Stack:</span>
                  {caso.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-[#15243E] border border-[#203350] text-[10px] font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={`${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(
                    `Hola Cristian, leí el caso "${caso.title}" y tengo un requerimiento parecido para mi empresa.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-sans font-bold text-xs uppercase tracking-wider shadow-md shadow-emerald-500/20 transition transform hover:-translate-y-0.5"
                >
                  <WhatsAppIcon size={16} className="fill-slate-950" />
                  <span>Cotizar Proyecto Similar</span>
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* LINK A LA GALERÍA COMPLETA */}
        <section className="text-center p-8 rounded-3xl bg-[#0E1A2E] border border-[#203350] space-y-4">
          <h3 className="text-xl font-bold text-white">
            ¿Deseas ver más fotos y registros de trabajos de campo?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Disponemos de más de 25 evidencias fotográficas clasificadas: cableado en cerchas, gabinetes murales, certificación TIA-606 y mantenimiento preventivo.
          </p>
          <div className="pt-1">
            <Link
              to="/evidencia"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A54FA] hover:bg-[#5F90FF] text-white font-sans font-semibold text-xs transition"
            >
              <GoogleIcon name="photo_library" size={16} />
              <span>Explorar la Galería de Evidencias →</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
