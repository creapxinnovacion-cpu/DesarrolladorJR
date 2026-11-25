import { Link } from "react-router-dom";
import GoogleIcon from "../assets/components/ui/GoogleIcon";
import { WhatsAppIcon } from "../assets/components/ui/WhatsAppButton";
import { CONTACT_INFO, ENGINEERING_PRINCIPLES, FOUNDER_DATA } from "../data/modulesData";

export default function Perfil() {
  return (
    <div className="w-full min-h-screen bg-[#08101E] text-[#EBF1FA] px-4 sm:px-6 py-14">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* ================= HEADER DEL FUNDADOR ================= */}
        <section className="flex flex-col md:flex-row items-center gap-10 p-8 sm:p-12 rounded-3xl bg-[#0E1A2E] border border-[#203350] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0A54FA]/10 rounded-full blur-3xl pointer-events-none" />

          {/* FOTO ILUSTRADA OFICIAL DEL KIT DE MARCA */}
          <div className="relative shrink-0">
            <div className="w-44 h-56 sm:w-52 sm:h-64 rounded-2xl overflow-hidden border-2 border-[#FFC633] shadow-[0_0_30px_rgba(255,198,51,0.25)] bg-[#08101E]">
              <img
                src={FOUNDER_DATA.image}
                alt={FOUNDER_DATA.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#FFC633] text-slate-950 font-mono text-[11px] font-bold shadow-md uppercase tracking-wider whitespace-nowrap">
              FUNDADOR
            </span>
          </div>

          <div className="text-center md:text-left space-y-3 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14274B] text-[#5F90FF] text-xs font-mono font-semibold">
              <GoogleIcon name="verified" size={15} />
              <span>{CONTACT_INFO.company} · {CONTACT_INFO.location}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
              {FOUNDER_DATA.name}
            </h1>
            <p className="text-sm font-mono text-[#FFC633] font-semibold">
              {FOUNDER_DATA.headline}
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {FOUNDER_DATA.bio}
            </p>
            <div className="pt-2 flex flex-wrap gap-2 justify-center md:justify-start">
              <Link
                to="/equipo"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0A54FA] hover:bg-[#5F90FF] text-white text-xs font-mono font-bold transition shadow-md shadow-blue-600/30"
              >
                <GoogleIcon name="groups" size={16} />
                <span>Ver Equipo Completo (6)</span>
              </Link>
              <a
                href={`${CONTACT_INFO.whatsappLink}?text=Hola%20Cristian,%20quisiera%20consultar%20sobre%20servicios%20de%20desarrollo.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold font-mono text-xs shadow-md shadow-emerald-500/20 transition transform hover:-translate-y-0.5 active:scale-95"
              >
                <WhatsAppIcon size={16} className="fill-slate-950" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* ================= 9 ÁREAS DE ESPECIALIDAD DEL FUNDADOR ================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-[#0E1A2E] border border-[#203350] space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#FFC633] uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <GoogleIcon name="stars" size={16} className="text-[#FFC633]" />
              <span>Competencias Acreditadas</span>
            </span>
            <h2 className="text-2xl font-bold text-white">
              Especialidades Técnicas de Cristian Cajul
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {FOUNDER_DATA.specialties.map((spec, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-[#15243E] border border-[#203350] hover:border-[#5F90FF] flex items-center gap-3 transition"
              >
                <span className="w-8 h-8 rounded-lg bg-[#0E1A2E] text-[#5F90FF] flex items-center justify-center shrink-0">
                  <GoogleIcon name={spec.icon} size={18} />
                </span>
                <span className="text-xs font-mono text-slate-200 font-medium">
                  {spec.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PRINCIPIOS RECTORES DE INGENIERÍA ================= */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFC633]">
              Estándares de Trabajo
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
              4 Principios Rectores de Ingeniería
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Reglas inquebrantables aplicadas en cada módulo de software diseñado y puesto en marcha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ENGINEERING_PRINCIPLES.map((principle) => (
              <div
                key={principle.number}
                className="p-6 rounded-2xl bg-[#0E1A2E] border border-[#203350] hover:border-[#5F90FF] transition-all relative overflow-hidden"
              >
                <span className="text-3xl font-mono font-extrabold text-[#5F90FF]/30 absolute top-4 right-6">
                  {principle.number}
                </span>
                <h3 className="text-lg font-bold text-white mb-2 pr-12">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FORMA DE TRABAJO Y METODOLOGÍA ================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-[#0E1A2E] border border-[#203350]">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <GoogleIcon name="terminal" size={24} className="text-[#5F90FF]" />
            <span>Metodología de Desarrollo y Entrega Continua</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="text-sm font-mono font-bold text-[#FFC633] uppercase">
                1. Modelado por Dominio
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                El código se agrupa por funcionalidad (*Feature-Based* / *Colocation*). Los esquemas Pydantic, modelos SQLAlchemy y routers viven juntos para facilitar cambios ágiles.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-mono font-bold text-[#FFC633] uppercase">
                2. Verificación Fiscal y Tests
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Pruebas de cuadratura de IVA 13% y retenciones 1% con comprobantes reales antes del paso a producción. Validación estricta de exclusividad entre NIT y DUI.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-mono font-bold text-[#FFC633] uppercase">
                3. CI/CD y Contenedores
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Compilaciones multi-etapa con Docker para despliegue liviano. Integración continua en GitHub Actions y despliegues automáticos en Vercel y Neon DB.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
