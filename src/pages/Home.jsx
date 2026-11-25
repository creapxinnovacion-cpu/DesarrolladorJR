import { Link } from "react-router-dom";
import GoogleIcon from "../assets/components/ui/GoogleIcon";
import { WhatsAppIcon } from "../assets/components/ui/WhatsAppButton";
import WorkEvidenceGallery from "../assets/components/portfolio/WorkEvidenceGallery";
import logoHorizontal from "../assets/brand/logo-horizontal-color-fondo-oscuro.png";
import { CONTACT_INFO, MODULES_DATA, FOUNDER_DATA, TEAM_MEMBERS } from "../data/modulesData";

export default function Home() {
  const featuredModules = MODULES_DATA.slice(0, 4);

  return (
    <div className="w-full flex flex-col bg-[#08101E] text-[#EBF1FA]">
      {/* ================= HERO BLUEPRINT SECTION ================= */}
      <section className="relative min-h-[85vh] w-full bg-[#08101E] bg-blueprint-grid flex flex-col items-center justify-center px-4 sm:px-6 py-16 md:py-24 border-b border-[#203350] overflow-hidden">
        {/* Glows decorativos */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0A54FA]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#FFC633]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* LOGO OFICIAL */}
          <div className="mb-6">
            <img
              src={logoHorizontal}
              alt="Desarrollador JR"
              className="h-20 sm:h-24 md:h-28 w-auto object-contain drop-shadow-[0_10px_25px_rgba(10,84,250,0.35)]"
            />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl leading-[1.1]">
            Ingeniería de Software,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5F90FF] via-sky-300 to-[#FFC633]">
              Facturación DTE
            </span>{" "}
            y Sistemas de Alto Desempeño
          </h1>

          <p className="max-w-3xl text-sm sm:text-base md:text-lg text-slate-300 mb-8 leading-relaxed font-normal">
            Liderado por <strong>Cristian Cajul</strong> y un equipo técnico de 6 especialistas. Soluciones integrales en producción para <strong>CreaPx El Salvador</strong>: microservicios con firma JWS RS512, digitalización OCR, inventarios con motor dual FEFO/PEPS, telemetría satelital y soporte de infraestructura física.
          </p>

          {/* CHIPS TÉCNICOS FLOTANTES CON GOOGLE ICONS */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0E1A2E] border border-[#203350] text-[#5F90FF] text-xs font-mono">
              <GoogleIcon name="receipt_long" size={15} />
              <span>DTE 01 · 03 · 05 · 14</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#382806] border border-[#FFC633]/40 text-[#FFC633] text-xs font-mono font-semibold">
              <GoogleIcon name="lock" size={15} />
              <span>JWS RS512</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0E1A2E] border border-[#203350] text-slate-300 text-xs font-mono">
              <GoogleIcon name="sync_alt" size={15} />
              <span>FEFO + PEPS Dual</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0E1A2E] border border-[#203350] text-slate-300 text-xs font-mono">
              <GoogleIcon name="database" size={15} />
              <span>FastAPI · Neon PostgreSQL</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0E1A2E] border border-[#203350] text-slate-300 text-xs font-mono">
              <GoogleIcon name="devices" size={15} />
              <span>Flutter · PySide6</span>
            </span>
          </div>

          {/* BOTONES DE LLAMADA A LA ACCIÓN (MARKET PERFORMANCE) */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/modulos"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0A54FA] hover:bg-[#5F90FF] text-white rounded-xl font-semibold text-sm shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 transition-all"
            >
              <GoogleIcon name="deployed_code" size={18} />
              <span>Explorar los 10 Módulos</span>
            </Link>

            <Link
              to="/equipo"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#15243E] hover:bg-[#1E3152] text-white border border-[#5F90FF]/40 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-md shadow-blue-900/20"
            >
              <GoogleIcon name="groups" size={18} className="text-[#5F90FF]" />
              <span>Conoce al Equipo (6)</span>
            </Link>

            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold rounded-xl text-sm shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.5)] hover:-translate-y-0.5 transition-all active:scale-95"
            >
              <WhatsAppIcon size={18} className="fill-slate-950" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* CONTADORES NUMÉRICOS DEL BLUEPRINT */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 mt-14 pt-8 border-t border-[#203350] w-full max-w-4xl">
            <div className="flex flex-col items-center">
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-white">10</span>
              <span className="text-xs font-mono uppercase text-slate-400 mt-1">Módulos en Producción</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#5F90FF]">6</span>
              <span className="text-xs font-mono uppercase text-slate-400 mt-1">Especialistas en Equipo</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#FFC633]">6</span>
              <span className="text-xs font-mono uppercase text-slate-400 mt-1">Tipos DTE Soportados</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#47C88C]">4</span>
              <span className="text-xs font-mono uppercase text-slate-400 mt-1">Capas de Arquitectura</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HIGH TRUST: FUNDADOR & EQUIPO PREVIEW ================= */}
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
                Detrás de Desarrollador JR hay un equipo real y especializado
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

              <div className="pt-2">
                <Link
                  to="/equipo"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A54FA] hover:bg-[#5F90FF] text-white font-semibold text-xs font-mono transition shadow-md shadow-blue-600/30"
                >
                  <GoogleIcon name="groups" size={16} />
                  <span>Conocer a los 6 integrantes del equipo →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DOMINIOS TÉCNICOS ================= */}
      <section className="w-full py-20 px-4 sm:px-6 bg-[#08101E] border-b border-[#203350]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#5F90FF] bg-[#14274B] px-3 py-1 rounded-full border border-[#5F90FF]/30">
              Stack Tecnológico de Producción
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 mb-3">
              Competencias de Ingeniería Full Stack
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Diseño integral de sistemas desacoplados con contratos estrictos, seguridad criptográfica y alta resiliencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0E1A2E] border border-[#203350] shadow-sm hover:border-[#5F90FF] transition-all">
              <span className="w-10 h-10 rounded-xl bg-[#14274B] text-[#5F90FF] flex items-center justify-center mb-4">
                <GoogleIcon name="terminal" size={22} />
              </span>
              <h3 className="text-lg font-bold text-white mb-2">Backend & APIs</h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Microservicios REST con validación estricta Pydantic, cálculo decimal BCMath y firma criptográfica JWS RS512.
              </p>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-300">
                <span className="px-2 py-0.5 rounded bg-[#15243E]">FastAPI</span>
                <span className="px-2 py-0.5 rounded bg-[#15243E]">Laravel 12</span>
                <span className="px-2 py-0.5 rounded bg-[#15243E]">Spring Boot</span>
                <span className="px-2 py-0.5 rounded bg-[#15243E]">Node.js</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0E1A2E] border border-[#203350] shadow-sm hover:border-[#5F90FF] transition-all">
              <span className="w-10 h-10 rounded-xl bg-[#14274B] text-[#5F90FF] flex items-center justify-center mb-4">
                <GoogleIcon name="dashboard" size={22} />
              </span>
              <h3 className="text-lg font-bold text-white mb-2">Frontend & PWA</h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Interfaces reactivas de alta velocidad, escaneo con Web Workers en el navegador y generación de reportes en PDF/Excel.
              </p>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-300">
                <span className="px-2 py-0.5 rounded bg-[#15243E]">React 19</span>
                <span className="px-2 py-0.5 rounded bg-[#15243E]">TypeScript</span>
                <span className="px-2 py-0.5 rounded bg-[#15243E]">Tailwind</span>
                <span className="px-2 py-0.5 rounded bg-[#15243E]">SheetJS</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0E1A2E] border border-[#203350] shadow-sm hover:border-[#5F90FF] transition-all">
              <span className="w-10 h-10 rounded-xl bg-[#14274B] text-[#5F90FF] flex items-center justify-center mb-4">
                <GoogleIcon name="smartphone" size={22} />
              </span>
              <h3 className="text-lg font-bold text-white mb-2">Móvil & Desktop</h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Manejo de estado predecible BLoC, telemetría satelital en background y aplicaciones nativas Windows con hilos QThread.
              </p>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-300">
                <span className="px-2 py-0.5 rounded bg-[#15243E]">Flutter</span>
                <span className="px-2 py-0.5 rounded bg-[#15243E]">BLoC/Cubit</span>
                <span className="px-2 py-0.5 rounded bg-[#15243E]">PySide6 (Qt)</span>
                <span className="px-2 py-0.5 rounded bg-[#15243E]">QThread</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0E1A2E] border border-[#203350] shadow-sm hover:border-[#5F90FF] transition-all">
              <span className="w-10 h-10 rounded-xl bg-[#14274B] text-[#5F90FF] flex items-center justify-center mb-4">
                <GoogleIcon name="database" size={22} />
              </span>
              <h3 className="text-lg font-bold text-white mb-2">Persistencia & Cloud</h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Modelos relacionales multi-tenant, persistencia offline con Dexie.js y sincronización bidireccional con hojas de cálculo.
              </p>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-300">
                <span className="px-2 py-0.5 rounded bg-[#15243E]">PostgreSQL</span>
                <span className="px-2 py-0.5 rounded bg-[#15243E]">Neon DB</span>
                <span className="px-2 py-0.5 rounded bg-[#15243E]">Dexie.js</span>
                <span className="px-2 py-0.5 rounded bg-[#15243E]">Google Sheets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROYECTOS DESTACADOS ================= */}
      <section className="w-full py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FFC633]">
                Catálogo de Sistemas
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Módulos de Software Destacados
              </h2>
            </div>
            <Link
              to="/modulos"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#5F90FF] hover:text-white transition"
            >
              <span>Ver los 10 módulos con visor de código</span>
              <GoogleIcon name="arrow_forward" size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredModules.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-[#0E1A2E] border border-[#203350] hover:border-[#5F90FF] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-semibold text-[#5F90FF] bg-[#14274B] px-2.5 py-1 rounded-md">
                      {item.id}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.problem}
                  </p>

                  <div className="border-t border-[#203350] pt-3 space-y-1.5">
                    {item.designDecisions.slice(0, 2).map((dec, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5F90FF] mt-1.5 shrink-0" />
                        <span>{dec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#203350] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#15243E] text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/modulos"
                    className="text-xs font-mono font-semibold text-[#FFC633] hover:underline"
                  >
                    Detalles técnicos →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EVIDENCIA DE TRABAJO REAL EN CAMPO ================= */}
      <section className="w-full py-20 px-4 sm:px-6 bg-[#08101E] border-t border-[#203350]">
        <div className="max-w-6xl mx-auto">
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
              Contacto y Consultoría
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              ¿Listo para digitalizar o implementar Facturación DTE?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8">
              Escríbenos directamente por WhatsApp o mediante el formulario de consulta técnica para coordinar requerimientos con Cristian Cajul y el equipo.
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
                className="px-6 py-3 bg-[#15243E] hover:bg-[#1E3152] text-white border border-[#203350] rounded-xl text-sm font-semibold flex items-center gap-2 transition"
              >
                <GoogleIcon name="mail" size={18} />
                <span>Formulario de Contacto</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
