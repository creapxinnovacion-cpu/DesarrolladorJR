import GoogleIcon from "../assets/components/ui/GoogleIcon";
import WorkEvidenceGallery from "../assets/components/portfolio/WorkEvidenceGallery";
import { CONTACT_INFO } from "../data/modulesData";
import { WhatsAppIcon } from "../assets/components/ui/WhatsAppButton";

export default function Evidencia() {
  return (
    <div className="w-full min-h-screen bg-[#08101E] text-[#EBF1FA] px-4 sm:px-6 py-14">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* HEADER HERO DE EVIDENCIA */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14274B] border border-[#5F90FF]/30 text-[#5F90FF] text-xs font-mono font-semibold uppercase tracking-wider">
            <GoogleIcon name="verified" size={16} />
            <span>Documentación de Proyectos en Sitio · El Salvador</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Evidencia Real de{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5F90FF] via-sky-300 to-[#FFC633]">
              Trabajo en Campo
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            En Desarrollador JR respaldamos nuestras capacidades con registros fotográficos de obras reales. Desde el cableado estructurado en alturas y montaje de centros de cómputo para el sector educativo público, hasta la certificación de redes y el mantenimiento integral de hardware.
          </p>

          {/* MÉTRICAS CLAVE DE EJECUCIÓN */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#203350]">
            <div className="p-3.5 rounded-xl bg-[#0E1A2E] border border-[#203350]">
              <span className="text-2xl font-mono font-extrabold text-[#5F90FF]">100%</span>
              <p className="text-[11px] font-mono uppercase text-slate-400 mt-0.5">Norma ANSI/TIA-606</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0E1A2E] border border-[#203350]">
              <span className="text-2xl font-mono font-extrabold text-[#47C88C]">0%</span>
              <p className="text-[11px] font-mono uppercase text-slate-400 mt-0.5">Pérdida de Paquetes</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0E1A2E] border border-[#203350]">
              <span className="text-2xl font-mono font-extrabold text-[#FFC633]">Cat6</span>
              <p className="text-[11px] font-mono uppercase text-slate-400 mt-0.5">Gigabit Certificado</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0E1A2E] border border-[#203350]">
              <span className="text-2xl font-mono font-extrabold text-white">24/7</span>
              <p className="text-[11px] font-mono uppercase text-slate-400 mt-0.5">Respaldo Eléctrico</p>
            </div>
          </div>
        </section>

        {/* GALERÍA COMPLETA INTERACTIVA */}
        <WorkEvidenceGallery />

        {/* BANNER DE GARANTÍA Y COTIZACIÓN RÁPIDA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#14274B] via-[#0E1A2E] to-[#08101E] border border-[#5F90FF]/40 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#382806] text-[#FFC633] text-xs font-mono font-semibold">
              <GoogleIcon name="handshake" size={16} />
              <span>Garantía de Calidad Técnica</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              ¿Necesitas una instalación o mantenimiento certificado?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Coordinamos visitas técnicas en sitio para levantamiento de requerimientos, diseño de cableado estructurado, cotización de equipos y soporte preventivo.
            </p>
          </div>

          <a
            href={`${CONTACT_INFO.whatsappLink}?text=Hola%20Cristian,%20revisé%20la%20galería%20de%20evidencias%20de%20trabajo%20y%20me%20gustaría%20solicitar%20una%20visita%20técnica.`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold font-mono text-sm tracking-wide shadow-xl shadow-emerald-500/25 transition transform hover:-translate-y-1 active:scale-95 flex items-center gap-2.5"
          >
            <WhatsAppIcon size={20} className="fill-slate-950" />
            <span>Solicitar Visita por WhatsApp</span>
          </a>
        </section>
      </div>
    </div>
  );
}

