import { Link } from "react-router-dom";
import GoogleIcon from "../assets/components/ui/GoogleIcon";
import { WhatsAppIcon } from "../assets/components/ui/WhatsAppButton";
import { SERVICES_DATA, CONTACT_INFO } from "../data/modulesData";

export default function Servicios() {
  return (
    <div className="w-full min-h-screen bg-[#08101E] text-[#EBF1FA] px-4 sm:px-6 py-14">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* HEADER DE SERVICIOS */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14274B] border border-[#5F90FF]/30 text-[#5F90FF] text-xs font-sans font-semibold uppercase tracking-wider">
            <GoogleIcon name="handshake" size={16} />
            <span>Soluciones de Ingeniería para Empresas</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Servicios que Impulsan y Protegen{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5F90FF] via-sky-400 to-[#38BDF8]">
              tu Operación
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Elimina cuellos de botella con software a tu medida y cumple con la normativa legal de El Salvador. Respaldado por un equipo de ingeniería formal, con garantía en sitio y sin tarifas ocultas.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/contacto"
              className="px-6 py-3 rounded-xl bg-[#FFC633] hover:bg-[#F7B836] text-slate-950 font-sans font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition transform hover:-translate-y-0.5 active:scale-95"
            >
              Cotizar Proyecto Ahora
            </Link>
            <Link
              to="/casos"
              className="px-6 py-3 rounded-xl bg-[#15243E] hover:bg-[#1E3152] text-white border border-[#203350] font-sans font-semibold text-xs transition"
            >
              Ver Casos de Éxito →
            </Link>
          </div>
        </section>

        {/* LISTADO DE 3 SERVICIOS PRINCIPALES */}
        <section className="space-y-10">
          {SERVICES_DATA.map((srv, idx) => (
            <div
              key={srv.id}
              className={[
                "p-8 sm:p-10 rounded-3xl bg-[#0E1A2E] border transition-all duration-300 flex flex-col lg:flex-row gap-8 items-start justify-between relative overflow-hidden",
                srv.popular
                  ? "border-[#5F90FF]/60 shadow-[0_12px_40px_rgba(10,84,250,0.15)] ring-1 ring-[#5F90FF]/30"
                  : "border-[#203350] hover:border-[#5F90FF]/40"
              ].join(" ")}
            >
              {srv.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-[#0A54FA] to-transparent py-1.5 px-6 rounded-bl-2xl">
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-white flex items-center gap-1">
                    <GoogleIcon name="star" size={14} className="text-[#FFC633]" />
                    <span>Servicio Más Solicitado</span>
                  </span>
                </div>
              )}

              <div className="space-y-5 max-w-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#14274B] border border-[#5F90FF]/40 flex items-center justify-center text-[#5F90FF]">
                    <GoogleIcon name={srv.icon} size={26} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#FFC633] font-semibold tracking-wider">
                      {srv.badge}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {srv.title}
                    </h2>
                  </div>
                </div>

                <p className="text-sm font-semibold text-[#5F90FF]">
                  {srv.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {srv.description}
                </p>

                {/* LISTA DE BENEFICIOS CLAVE */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                    Qué incluye esta solución:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {srv.benefits.map((benefit, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex items-start gap-2 text-xs font-sans text-slate-300 p-2.5 rounded-lg bg-[#08101E] border border-[#203350]"
                      >
                        <GoogleIcon name="check_circle" size={16} className="text-[#47C88C] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CHIPS TECNOLÓGICOS */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {srv.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-[#15243E] border border-[#203350] text-[11px] font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* PANEL LATERAL DE COTIZACIÓN */}
              <div className="w-full lg:w-72 shrink-0 p-6 rounded-2xl bg-[#08101E] border border-[#203350] space-y-4 self-stretch flex flex-col justify-between text-center lg:text-left">
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Implementación en El Salvador
                  </span>
                  <p className="text-lg font-bold text-white">
                    Asesoría Inicial Gratuita
                  </p>
                  <p className="text-xs text-slate-400">
                    Evaluamos tu requerimiento técnico o normativa tributaria sin compromiso.
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-[#203350]">
                  <a
                    href={`${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(
                      `Hola Cristian y equipo, me interesa cotizar el servicio de "${srv.title}".`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 transition transform hover:-translate-y-0.5"
                  >
                    <WhatsAppIcon size={16} className="fill-slate-950" />
                    <span>Cotizar por WhatsApp</span>
                  </a>

                  <Link
                    to="/contacto"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#15243E] hover:bg-[#1E3152] text-white border border-[#203350] font-sans font-medium text-xs flex items-center justify-center gap-1.5 transition"
                  >
                    <GoogleIcon name="mail" size={15} />
                    <span>Formulario Formal</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* CTA INFERIOR */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#14274B] via-[#0E1A2E] to-[#08101E] border border-[#5F90FF]/40 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            ¿Tienes un requerimiento especial o un sistema heredado?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            También realizamos auditorías de código, migraciones a la nube, integración de APIs y rescate de sistemas operativos lentos.
          </p>
          <div className="pt-2">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FFC633] hover:bg-[#F7B836] text-slate-950 font-sans font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 transition"
            >
              <GoogleIcon name="contact_phone" size={18} />
              <span>Hablar con el Equipo Técnico</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
