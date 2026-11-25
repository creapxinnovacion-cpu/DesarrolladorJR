import { Link } from "react-router-dom";
import GoogleIcon from "../assets/components/ui/GoogleIcon";
import { WhatsAppIcon } from "../assets/components/ui/WhatsAppButton";
import WorkEvidenceGallery from "../assets/components/portfolio/WorkEvidenceGallery";
import logoHorizontal from "../assets/brand/logo-horizontal-color-fondo-oscuro.png";
import { CONTACT_INFO, SERVICES_DATA, CASE_STUDIES_DATA, FOUNDER_DATA, TEAM_MEMBERS } from "../data/modulesData";

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-[#08101E] text-[#EBF1FA]">
      {/* ================= HERO ORIENTADO A CLIENTES (v2.1) ================= */}
      <section className="relative min-h-[85vh] w-full bg-[#08101E] bg-blueprint-grid flex flex-col items-center justify-center px-4 sm:px-6 py-16 md:py-24 border-b border-[#203350] overflow-hidden">
        {/* Glows decorativos */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0A54FA]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#FFC633]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* BADGE DE CONFIANZA TRIBUTARIA Y TÉCNICA */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14274B] border border-[#5F90FF]/30 text-[#5F90FF] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#47C88C] animate-pulse"></span>
            <span>Firma JWS RS512 · Ministerio de Hacienda · El Salvador</span>
          </div>

          {/* LOGO OFICIAL DEL HERO */}
          <div className="mb-6">
            <img
              src={logoHorizontal}
              alt="Desarrollador JR - Desarrollo y Automatización"
              className="h-14 sm:h-18 md:h-22 w-auto object-contain drop-shadow-[0_10px_25px_rgba(10,84,250,0.35)]"
              loading="eager"
            />
          </div>

          {/* TITULAR DEL HERO: ORIENTADO A RESOLVER EL DOLOR DEL CLIENTE */}
          <h1
            style={{ textWrap: "balance" }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-normal mb-6 max-w-4xl mx-auto leading-[1.18] text-white"
          >
            Facturación Electrónica{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5F90FF] via-sky-400 to-[#38BDF8]">
              DTE
            </span>{" "}
            y Sistemas a la Medida para tu Negocio
          </h1>

          <p className="max-w-3xl text-sm sm:text-base md:text-lg text-slate-300 mb-8 leading-relaxed font-normal">
            Software que emite comprobantes fiscales, controla tu inventario y automatiza tus operaciones. Diseñado y respaldado por <strong>Cristian Cajul</strong> y un equipo técnico de ingeniería en El Salvador.
          </p>

          {/* CHIPS DE VALOR CLAVE */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0E1A2E] border border-[#203350] text-[#5F90FF] text-xs font-mono">
              <GoogleIcon name="receipt_long" size={15} />
              <span>DTE 01 · 03 · 05 · 14</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#382806] border border-[#FFC633]/40 text-[#FFC633] text-xs font-mono font-semibold">
              <GoogleIcon name="offline_bolt" size={15} />
              <span>Contingencia Offline</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0E1A2E] border border-[#203350] text-slate-300 text-xs font-mono">
              <GoogleIcon name="sync_alt" size={15} />
              <span>Motor Dual FEFO / PEPS</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0E1A2E] border border-[#203350] text-slate-300 text-xs font-mono">
              <GoogleIcon name="lan" size={15} />
              <span>Redes Cat6 & Telecomunicaciones</span>
            </span>
          </div>

          {/* 2 BOTONES PRINCIPALES DE LLAMADA A LA ACCIÓN (v2.1) */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FFC633] hover:bg-[#F7B836] text-slate-950 font-sans font-bold rounded-xl text-sm shadow-lg shadow-amber-500/25 hover:-translate-y-0.5 transition-all active:scale-95"
            >
              <GoogleIcon name="send" size={18} />
              <span>Cotiza tu Proyecto</span>
            </Link>

            <Link
              to="/casos"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#15243E] hover:bg-[#1E3152] text-white border border-[#5F90FF]/40 rounded-xl font-sans font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-md shadow-blue-900/20"
            >
              <GoogleIcon name="verified" size={18} className="text-[#5F90FF]" />
              <span>Ver Casos de Éxito</span>
            </Link>

            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold rounded-xl text-sm shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.5)] hover:-translate-y-0.5 transition-all active:scale-95"
            >
              <WhatsAppIcon size={18} className="fill-slate-950" />
              <span>WhatsApp Directo</span>
            </a>
          </div>

          {/* CONTADORES NUMÉRICOS DE CREDIBILIDAD */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 mt-14 pt-8 border-t border-[#203350] w-full max-w-4xl">
            <div className="flex flex-col items-center">
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-white">100%</span>
              <span className="text-xs font-mono uppercase text-slate-400 mt-1">Cumplimiento DTE</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#5F90FF]">6</span>
              <span className="text-xs font-mono uppercase text-slate-400 mt-1">Ingenieros y Técnicos</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#FFC633]">10</span>
              <span className="text-xs font-mono uppercase text-slate-400 mt-1">Módulos en Producción</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#47C88C]">24/7</span>
              <span className="text-xs font-mono uppercase text-slate-400 mt-1">Soporte y Garantía</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECCIÓN DE SERVICIOS DESTACADOS (3 TARJETAS COMERCIALES) ================= */}
      <section className="w-full py-20 px-4 sm:px-6 bg-[#0E1A2E]/70 border-b border-[#203350]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#5F90FF] bg-[#14274B] px-3 py-1 rounded-full border border-[#5F90FF]/30">
              Servicios Especializados
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              ¿En qué podemos ayudar a tu empresa hoy?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Desarrollamos soluciones prácticas, robustas y a la medida de los requerimientos fiscales y operativos de El Salvador.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className={[
                  "p-8 rounded-3xl bg-[#08101E] border transition-all duration-300 flex flex-col justify-between space-y-6 relative group hover:-translate-y-1",
                  srv.popular
                    ? "border-[#5F90FF] shadow-[0_10px_35px_rgba(10,84,250,0.2)]"
                    : "border-[#203350] hover:border-[#5F90FF]/50"
                ].join(" ")}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#14274B] border border-[#5F90FF]/30 flex items-center justify-center text-[#5F90FF]">
                      <GoogleIcon name={srv.icon} size={24} />
                    </div>
                    <span className="text-[10px] font-mono text-[#FFC633] uppercase font-bold tracking-wider">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#5F90FF] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#203350]/60">
                    {srv.benefits.slice(0, 2).map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <GoogleIcon name="check" size={14} className="text-[#47C88C] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/servicios"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#15243E] hover:bg-[#0A54FA] text-white font-sans font-semibold text-xs flex items-center justify-center gap-1.5 transition"
                  >
                    <span>Conoce todos los detalles</span>
                    <GoogleIcon name="arrow_forward" size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECCIÓN DE CASOS DE ÉXITO (MÍNIMO 3 CASOS) ================= */}
      <section className="w-full py-20 px-4 sm:px-6 bg-[#08101E] border-b border-[#203350]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFC633] bg-[#382806] px-3 py-1 rounded-full border border-[#FFC633]/30">
              Pruebas Reales de Trabajo
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Casos Reales con Resultados Medibles
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Métricas reales y problemas de negocio resueltos con arquitectura de software e infraestructura física.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASE_STUDIES_DATA.map((caso) => (
              <div
                key={caso.id}
                className="p-7 rounded-3xl bg-[#0E1A2E] border border-[#203350] hover:border-[#5F90FF]/50 transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#FFC633] font-bold uppercase">
                      {caso.industry}
                    </span>
                    <span className="text-sm font-mono font-extrabold text-[#47C88C] bg-[#0E3523] px-2.5 py-0.5 rounded-full border border-[#47C88C]/30">
                      {caso.metric}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {caso.title}
                  </h3>

                  <div className="p-3.5 rounded-xl bg-[#08101E] border border-[#203350] space-y-1">
                    <span className="text-[10px] font-mono uppercase text-red-400 font-semibold block">Problema:</span>
                    <p className="text-xs text-slate-300 font-sans line-clamp-2">{caso.problem}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#08101E] border border-[#203350] space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[#5F90FF] font-semibold block">Solución:</span>
                    <p className="text-xs text-slate-200 font-sans line-clamp-2">{caso.solution}</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#203350]/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {caso.tech.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#15243E] text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/casos"
                    className="text-xs font-sans font-bold text-[#FFC633] hover:underline flex items-center gap-0.5"
                  >
                    <span>Ver caso</span>
                    <GoogleIcon name="arrow_forward" size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              to="/casos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#15243E] hover:bg-[#1E3152] text-white border border-[#203350] font-sans font-semibold text-xs transition"
            >
              <span>Ver todos los casos y métricas →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= HIGH TRUST: FUNDADOR & EQUIPO ================= */}
      <section className="w-full py-16 px-4 sm:px-6 bg-[#0E1A2E]/80 border-b border-[#203350]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#14274B]/40 via-[#0E1A2E] to-[#08101E] border border-[#203350]">
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="w-44 h-56 rounded-2xl overflow-hidden border-2 border-[#FFC633] shadow-lg bg-[#08101E]">
                <img
                  src={FOUNDER_DATA.image}
                  alt={FOUNDER_DATA.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <span className="mt-3 text-xs font-mono uppercase tracking-wider text-[#FFC633] font-bold">
                {FOUNDER_DATA.title}
              </span>
              <h3 className="text-xl font-extrabold text-white">
                {FOUNDER_DATA.name}
              </h3>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#5F90FF]">
                <GoogleIcon name="verified" size={16} />
                <span>Equipo Multidisciplinario en El Salvador</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Detrás de Desarrollador JR hay un equipo real y accesible
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                No arriesgues la operatividad de tu empresa con soluciones aisladas. Contamos con ingenieros de software, técnicos en cámaras y alarmas, soporte de TI presencial, gestión administrativa y logística comercial.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {TEAM_MEMBERS.map((m) => (
                  <span
                    key={m.id}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#15243E] border border-[#203350] text-xs font-mono text-slate-300"
                  >
                    <GoogleIcon name={m.googleIcon} size={14} className="text-[#FFC633]" />
                    <span>{m.name} ({m.role.split("·")[0]})</span>
                  </span>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/equipo"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A54FA] hover:bg-[#5F90FF] text-white font-semibold text-xs font-sans transition shadow-md shadow-blue-600/30"
                >
                  <GoogleIcon name="groups" size={16} />
                  <span>Conocer al Equipo Completo →</span>
                </Link>
                <Link
                  to="/ingenieria"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#15243E] hover:bg-[#1E3152] text-white border border-[#203350] font-sans font-medium text-xs transition"
                >
                  <GoogleIcon name="terminal" size={16} />
                  <span>Especificaciones de Ingeniería →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EVIDENCIA DE TRABAJO REAL EN CAMPO ================= */}
      <section className="w-full py-20 px-4 sm:px-6 bg-[#08101E] border-t border-[#203350]">
        <div className="max-w-6xl mx-auto space-y-6">
          <WorkEvidenceGallery
            title="Evidencia de Trabajo Real en Campo"
            subtitle="Despliegues reales de infraestructura tecnológica, gabinetes de telecomunicaciones, certificación de cableado TIA/EIA y soporte técnico en El Salvador."
          />
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="w-full py-16 px-4 sm:px-6 bg-[#0E1A2E] border-t border-[#203350]">
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#0A54FA]/20 via-[#14274B] to-[#08101E] border border-[#5F90FF]/40 text-center relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFC633] mb-2 inline-block">
              Contacto y Consultoría Directa
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              ¿Listo para digitalizar o implementar Facturación DTE?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8 font-sans">
              Escríbenos directamente por WhatsApp o mediante el formulario de cotización técnica para coordinar requerimientos con Cristian Cajul y el equipo.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold rounded-xl text-sm flex items-center gap-2.5 shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.5)] transition transform hover:-translate-y-0.5 active:scale-95"
              >
                <WhatsAppIcon size={20} className="fill-slate-950" />
                <span>WhatsApp</span>
              </a>
              <Link
                to="/contacto"
                className="px-6 py-3.5 bg-[#FFC633] hover:bg-[#F7B836] text-slate-950 font-bold rounded-xl text-sm flex items-center gap-2 transition shadow-md shadow-amber-500/20"
              >
                <GoogleIcon name="mail" size={18} />
                <span>Cuéntanos tu Proyecto</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
