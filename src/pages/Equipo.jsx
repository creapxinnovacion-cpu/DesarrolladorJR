import { Link } from "react-router-dom";
import GoogleIcon from "../assets/components/ui/GoogleIcon";
import { WhatsAppIcon } from "../assets/components/ui/WhatsAppButton";
import WorkEvidenceGallery from "../assets/components/portfolio/WorkEvidenceGallery";
import { FOUNDER_DATA, TEAM_MEMBERS, CONTACT_INFO } from "../data/modulesData";

export default function Equipo() {
  return (
    <div className="w-full min-h-screen bg-[#08101E] text-[#EBF1FA] px-4 sm:px-6 py-14">
      {/* React 19 Native Head Hoisting */}
      <title>Equipo Técnico & Fundador · Cristian Cajul · Desarrollador JR</title>
      <meta name="description" content="Conoce a Cristian Cajul y al equipo multidisciplinario detrás de Desarrollador JR: software, soporte corporativo, redes e infraestructura en El Salvador." />
      <link rel="canonical" href="https://desarrolladorjr.com/equipo" />
      <meta property="og:title" content="Equipo Técnico & Fundador · Desarrollador JR" />
      <meta property="og:url" content="https://desarrolladorjr.com/equipo" />

      <div className="max-w-6xl mx-auto space-y-20">
        {/* ================= HEADER DEL EQUIPO ================= */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14274B] border border-[#5F90FF]/30 text-[#5F90FF] text-xs font-mono font-semibold uppercase tracking-wider">
            <GoogleIcon name="groups" size={16} />
            <span>Talento Multidisciplinario · El Salvador</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            El Equipo Detrás de{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5F90FF] via-sky-300 to-[#FFC633]">
              Desarrollador JR
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Una estructura profesional consolidada para responder con solvencia técnica, velocidad y acompañamiento continuo en desarrollo de software, seguridad perimetral, redes e infraestructura corporativa.
          </p>

          {/* MÉTRICAS DE IMPACTO DEL EQUIPO */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#203350]/80">
            <div className="p-3 rounded-xl bg-[#0E1A2E] border border-[#203350]">
              <span className="text-2xl font-mono font-extrabold text-[#5F90FF]">6</span>
              <p className="text-[11px] font-mono uppercase text-slate-400 mt-0.5">Especialistas Clave</p>
            </div>
            <div className="p-3 rounded-xl bg-[#0E1A2E] border border-[#203350]">
              <span className="text-2xl font-mono font-extrabold text-[#FFC633]">100%</span>
              <p className="text-[11px] font-mono uppercase text-slate-400 mt-0.5">Cobertura en Campo</p>
            </div>
            <div className="p-3 rounded-xl bg-[#0E1A2E] border border-[#203350]">
              <span className="text-2xl font-mono font-extrabold text-[#47C88C]">10+</span>
              <p className="text-[11px] font-mono uppercase text-slate-400 mt-0.5">Módulos en Producción</p>
            </div>
            <div className="p-3 rounded-xl bg-[#0E1A2E] border border-[#203350]">
              <span className="text-2xl font-mono font-extrabold text-white">24/7</span>
              <p className="text-[11px] font-mono uppercase text-slate-400 mt-0.5">Soporte y Garantía</p>
            </div>
          </div>
        </section>

        {/* ================= SPOTLIGHT DEL FUNDADOR (CRISTIAN CAJUL) ================= */}
        <section className="relative rounded-3xl bg-[#0E1A2E] border-2 border-[#5F90FF]/40 p-6 sm:p-10 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A54FA]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Foto Oficial del Fundador */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative group">
                <div className="w-56 h-72 sm:w-64 sm:h-80 rounded-2xl overflow-hidden border-2 border-[#FFC633] shadow-[0_12px_35px_rgba(255,198,51,0.2)] bg-[#08101E]">
                  <img
                    src={FOUNDER_DATA.image}
                    alt={FOUNDER_DATA.name}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FFC633] text-slate-950 text-xs font-mono font-extrabold tracking-wider uppercase shadow-lg whitespace-nowrap">
                  FUNDADOR
                </span>
              </div>

              <h2 className="text-2xl font-extrabold text-white mt-6 mb-1">
                {FOUNDER_DATA.name}
              </h2>
              <p className="text-xs font-mono text-[#5F90FF] uppercase tracking-wider font-semibold">
                {FOUNDER_DATA.title}
              </p>
            </div>

            {/* Trayectoria & Competencias del Fundador */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FFC633]">
                  <GoogleIcon name="verified" size={16} />
                  <span>Liderazgo Técnico & Visión</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {FOUNDER_DATA.headline}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {FOUNDER_DATA.bio}
                </p>
              </div>

              {/* Especialidades del Fundador (Las 9 del kit de marca) */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <GoogleIcon name="military_tech" size={16} className="text-[#FFC633]" />
                  <span>Áreas de Dominio Técnico y Operativo</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {FOUNDER_DATA.specialties.map((spec, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#15243E] border border-[#203350] hover:border-[#5F90FF] text-xs font-mono text-slate-200 transition"
                    >
                      <GoogleIcon name={spec.icon} size={15} className="text-[#5F90FF]" />
                      <span>{spec.label}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Botón de Enlace Directo */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={`${CONTACT_INFO.whatsappLink}?text=Hola%20Cristian,%20quisiera%20conversar%20sobre%20un%20proyecto%20con%20Desarrollador%20JR.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold text-xs font-mono transition shadow-md shadow-emerald-500/25 transform hover:-translate-y-0.5 active:scale-95"
                >
                  <WhatsAppIcon size={16} className="fill-slate-950" />
                  <span>WhatsApp</span>
                </a>
                <Link
                  to="/perfil"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#15243E] hover:bg-[#1E3152] text-slate-200 border border-[#203350] text-xs font-mono transition"
                >
                  <GoogleIcon name="article" size={16} />
                  <span>Ver Filosofía de Ingeniería</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================= EQUIPO COMPLETO (6 MIEMBROS) ================= */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#5F90FF] bg-[#14274B] px-3 py-1 rounded-full border border-[#5F90FF]/30">
              Especialistas en Cada Área
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Roles y Capacidades en Operación
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Cada integrante lidera un eslabón crítico para que tu empresa funcione sin interrupciones técnicas ni administrativas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="p-6 rounded-2xl bg-[#0E1A2E] border border-[#203350] hover:border-[#5F90FF] transition-all flex flex-col justify-between shadow-sm group"
              >
                <div className="space-y-4">
                  {/* Foto con borde dorado y badge */}
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#08101E] border border-[#203350] group-hover:border-[#FFC633] transition-colors">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08101E] via-transparent to-transparent opacity-60 pointer-events-none" />
                    <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-md bg-[#08101E]/90 border border-[#203350] text-[#FFC633] text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1 backdrop-blur-sm">
                      <GoogleIcon name={member.googleIcon} size={13} className="text-[#FFC633]" />
                      <span>{member.role}</span>
                    </span>
                  </div>

                  {/* Nombre y Área */}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#5F90FF] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-0.5">
                      {member.area}
                    </p>
                  </div>

                  {/* Descripción de funciones */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Habilidades / Tags */}
                <div className="mt-5 pt-3 border-t border-[#203350]">
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#15243E] text-slate-300 border border-[#203350]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= GALERÍA DE EVIDENCIA REAL DEL EQUIPO ================= */}
        <section className="space-y-6 pt-4 border-t border-[#203350]/80">
          <WorkEvidenceGallery
            title="Proyectos y Despliegues Reales del Equipo"
            subtitle="Cada integrante de Desarrollador JR aporta experiencia comprobable en sitio: desde cableado en cerchas industriales para el Ministerio de Educación (MINED) hasta montaje de racks y mantenimiento preventivo de hardware."
          />
        </section>

        {/* ================= BANNER POSTER DEL EQUIPO ================= */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#14274B] via-[#0E1A2E] to-[#08101E] border border-[#203350] flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3 shrink-0 rounded-2xl overflow-hidden border-2 border-[#203350] shadow-xl bg-[#08101E]">
            <img
              src="/team/equipo-poster-1080x1350.png"
              alt="Poster Oficial del Equipo Desarrollador JR"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          <div className="space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#382806] text-[#FFC633] text-xs font-mono font-semibold">
              <GoogleIcon name="handshake" size={16} />
              <span>Respaldo Institucional Integral</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              ¿Por qué confiar tu proyecto en Desarrollador JR?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              Al contratarnos obtienes soporte garantizado de extremo a extremo: desde el código fuente y las bases de datos hasta el cableado estructurado, la seguridad perimetral y la asistencia administrativa continua.
            </p>
            <div className="pt-2 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold text-xs font-mono flex items-center gap-2 shadow-lg shadow-emerald-500/25 transition transform hover:-translate-y-0.5 active:scale-95"
              >
                <WhatsAppIcon size={17} className="fill-slate-950" />
                <span className="uppercase tracking-wider">WhatsApp</span>
              </a>
              <Link
                to="/contacto"
                className="px-6 py-3 rounded-xl bg-[#15243E] hover:bg-[#1E3152] text-white border border-[#203350] text-xs font-mono flex items-center gap-2 transition"
              >
                <GoogleIcon name="mail" size={16} />
                <span>Enviar Requerimiento Formal</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

