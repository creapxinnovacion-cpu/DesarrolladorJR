import { useState } from "react";
import emailjs from "@emailjs/browser";
import GoogleIcon from "../assets/components/ui/GoogleIcon";
import { WhatsAppIcon } from "../assets/components/ui/WhatsAppButton";
import { CONTACT_INFO } from "../data/modulesData";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    contacto: "",
    tipoProyecto: "Facturación Electrónica DTE",
    mensaje: "",
    honeypot: "", // Campo trampa antispam para bots
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (formData.nombre.trim().length < 3) {
      newErrors.nombre = "Por favor ingresa tu nombre o el de tu empresa (mínimo 3 caracteres)";
    }

    if (formData.contacto.trim().length < 6) {
      newErrors.contacto = "Ingresa un correo electrónico o número de WhatsApp válido para responderte";
    }

    if (formData.mensaje.trim().length < 8) {
      newErrors.mensaje = "Describe brevemente tu requerimiento (mínimo 8 caracteres)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Detección de bot mediante campo trampa
    if (formData.honeypot) {
      console.warn("Spam detectado vía honeypot.");
      setSuccess(true);
      return;
    }

    if (!validateForm()) return;

    // Disparo de analítica GA4
    if (typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", {
        event_category: "Contacto",
        event_label: formData.tipoProyecto,
      });
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Si no está configurado EmailJS en entorno local, redirección fluida a WhatsApp
    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS no configurado en este entorno. Conectando con WhatsApp directamente.");
      const waMsg = `Hola Cristian y equipo de Desarrollador JR, soy ${formData.nombre} (${formData.contacto}). Me interesa cotizar: "${formData.tipoProyecto}". Detalle: ${formData.mensaje}`;
      window.open(`${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(waMsg)}`, "_blank");
      setSuccess(true);
      return;
    }

    setIsSending(true);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: formData.nombre,
          reply_to: formData.contacto,
          project_type: formData.tipoProyecto,
          message: formData.mensaje,
          to_email: CONTACT_INFO.email,
        },
        publicKey
      )
      .then(() => {
        setSuccess(true);
        setFormData({ nombre: "", contacto: "", tipoProyecto: "Facturación Electrónica DTE", mensaje: "", honeypot: "" });
        setErrors({});
      })
      .catch((err) => {
        console.error(err);
        const waFallback = `Hola Cristian, intenté enviar un mensaje desde la web: soy ${formData.nombre} (${formData.contacto}). Proyecto: "${formData.tipoProyecto}". Mensaje: ${formData.mensaje}`;
        window.open(`${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(waFallback)}`, "_blank");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <div className="w-full min-h-screen bg-[#08101E] text-[#EBF1FA] px-4 sm:px-6 py-14">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* HEADER */}
        <section className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14274B] border border-[#5F90FF]/30 text-[#5F90FF] text-xs font-sans font-semibold uppercase tracking-wider">
            <GoogleIcon name="contact_phone" size={16} />
            <span>Atención Directa en El Salvador</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Cuéntanos tu{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5F90FF] via-sky-400 to-[#38BDF8]">
              Proyecto
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Estamos listos para evaluar tus requerimientos de Facturación Electrónica DTE, sistemas de software a la medida o infraestructura de redes.
          </p>
        </section>

        {/* CANAL PREFERIDO: WHATSAPP DIRECTO */}
        <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#14274B] via-[#0E1A2E] to-[#0A2618] border border-[#25D366]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/50 flex items-center justify-center shrink-0">
              <WhatsAppIcon size={32} className="fill-[#25D366]" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-sans text-[#25D366] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                <span>Canal Prioritario de Respuesta Rápida</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                ¿Prefieres conversar por WhatsApp?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Respuesta directa con Cristian Cajul para agendar una llamada o reunión técnica.
              </p>
            </div>
          </div>
          <a
            href={`${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(
              "Hola Cristian, me gustaría solicitar una asesoría o cotización para mi empresa."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-sans font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/25 transition transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
          >
            <WhatsAppIcon size={18} className="fill-slate-950" />
            <span>Chatear por WhatsApp</span>
          </a>
        </section>

        {/* FORMULARIO DE MENSAJES DIRECTOS */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#0E1A2E] border border-[#203350] space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Formulario de Cotización & Propuesta
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Completa los datos y te responderemos en un plazo máximo de 24 horas hábiles.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
            {/* Campo trampa antispam oculto */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              tabIndex="-1"
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div>
              <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Nombre o Empresa *
              </label>
              <input
                type="text"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej. Ing. Carlos Mendoza / Comercial San José S.A."
                className="w-full p-3.5 rounded-xl bg-[#08101E] border border-[#203350] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#5F90FF] focus:ring-2 focus:ring-[#5F90FF]/20 transition"
              />
              {errors.nombre && <p className="text-red-400 text-xs font-sans mt-1">{errors.nombre}</p>}
            </div>

            <div>
              <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Correo Electrónico o WhatsApp *
              </label>
              <input
                type="text"
                name="contacto"
                required
                value={formData.contacto}
                onChange={handleChange}
                placeholder="contacto@empresa.com o +503 7000 0000"
                className="w-full p-3.5 rounded-xl bg-[#08101E] border border-[#203350] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#5F90FF] focus:ring-2 focus:ring-[#5F90FF]/20 transition"
              />
              {errors.contacto && <p className="text-red-400 text-xs font-sans mt-1">{errors.contacto}</p>}
            </div>

            <div>
              <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Tipo de Necesidad *
              </label>
              <select
                name="tipoProyecto"
                value={formData.tipoProyecto}
                onChange={handleChange}
                className="w-full p-3.5 rounded-xl bg-[#08101E] border border-[#203350] text-sm text-white focus:outline-none focus:border-[#5F90FF] focus:ring-2 focus:ring-[#5F90FF]/20 transition"
              >
                <option value="Facturación Electrónica DTE">Facturación Electrónica DTE (Ministerio de Hacienda)</option>
                <option value="Desarrollo de Software a la Medida">Desarrollo de Software a la Medida (Web / Móvil / POS)</option>
                <option value="Infraestructura de Redes & Telecomunicaciones">Infraestructura de Redes & Cableado Estructurado Cat6</option>
                <option value="Soporte IT & Mantenimiento Preventivo">Soporte IT Presencial & Mantenimiento de Hardware</option>
                <option value="Automatización de Procesos & OCR">Automatización de Procesos & Digitalización OCR</option>
                <option value="Otro Requerimiento">Otro Requerimiento / Consultoría General</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Detalle del Requerimiento *
              </label>
              <textarea
                name="mensaje"
                rows="4"
                required
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Cuéntanos brevemente qué necesitas resolver, número aproximado de usuarios o sucursales, o plazos de entrega estimados..."
                className="w-full p-3.5 rounded-xl bg-[#08101E] border border-[#203350] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#5F90FF] focus:ring-2 focus:ring-[#5F90FF]/20 transition"
              />
              {errors.mensaje && <p className="text-red-400 text-xs font-sans mt-1">{errors.mensaje}</p>}
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-4 rounded-xl font-sans font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 cursor-pointer ${isSending
                ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                : "bg-[#FFC633] hover:bg-[#F7B836] text-slate-950 shadow-lg shadow-amber-500/20 active:scale-95"
                }`}
            >
              {isSending ? (
                <span>Enviando requerimiento...</span>
              ) : (
                <>
                  <GoogleIcon name="send" size={18} />
                  <span>Enviar Requerimiento al Equipo Técnico</span>
                </>
              )}
            </button>

            {success && (
              <div className="p-4 rounded-xl bg-[#0E3523] border border-[#47C88C] text-[#47C88C] text-xs font-sans text-center font-bold space-y-1">
                <p>✓ Mensaje recibido correctamente.</p>
                <p className="text-[11px] font-normal text-emerald-200">
                  Un especialista técnico de Desarrollador JR revisará tu requerimiento y te contactará a la brevedad.
                </p>
              </div>
            )}
          </form>
        </section>
      </div>
    </div>
  );
}
