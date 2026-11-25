import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import GoogleIcon from "../assets/components/ui/GoogleIcon";
import { WhatsAppIcon } from "../assets/components/ui/WhatsAppButton";
import { CONTACT_INFO, FOUNDER_DATA } from "../data/modulesData";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(null), 2000);
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.nombre.trim().length < 3) {
      newErrors.nombre = "El nombre debe tener al menos 3 caracteres";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Correo electrónico inválido";
    }

    if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS no configurado en entorno local. Redirigiendo a WhatsApp.");
      window.open(
        `${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(
          `Hola Cristian y equipo, mi nombre es ${formData.nombre} (${formData.email}): ${formData.mensaje}`
        )}`,
        "_blank"
      );
      return;
    }

    setIsSending(true);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: formData.nombre,
          from_email: formData.email,
          message: formData.mensaje,
          email: CONTACT_INFO.email,
        },
        publicKey
      )
      .then(() => {
        setSuccess(true);
        setFormData({ nombre: "", email: "", mensaje: "" });
        setErrors({});
      })
      .catch((err) => {
        console.error(err);
        alert("Error al enviar el mensaje por correo. Puedes escribirnos directamente por WhatsApp.");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <div className="w-full min-h-screen bg-[#08101E] text-[#EBF1FA] px-4 sm:px-6 py-14">
      <div className="max-w-5xl mx-auto space-y-14">
        {/* ================= HEADER ================= */}
        <section className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#382806] border border-[#FFC633]/30 text-[#FFC633] text-xs font-mono font-semibold uppercase tracking-wider">
            <GoogleIcon name="contact_phone" size={16} />
            <span>Canales Directos con el Fundador y Equipo</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Terminal de Contacto & Asesoría
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Comunícate directamente con <strong>Cristian Cajul</strong> y el equipo técnico de Desarrollador JR para coordinar proyectos de software a medida, facturación DTE, seguridad electrónica o soporte corporativo.
          </p>
        </section>

        {/* ================= CANAL PREFERIDO: WHATSAPP DIRECTO ================= */}
        <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#14274B] via-[#0E1A2E] to-[#0A2618] border border-[#25D366]/40 flex flex-col sm:flex-row items-center justify-center gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/50 flex items-center justify-center shrink-0">
              <WhatsAppIcon size={32} className="fill-[#25D366]" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#25D366] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                <span>Canal de Atención Inmediata</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Chatea con Cristian Cajul y el Equipo
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Respuesta rápida para consultas técnicas, cotizaciones y proyectos.
              </p>
            </div>
          </div>

        </section>

        {/* ================= FORMULARIO DE CONTACTO ================= */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#0E1A2E] border border-[#203350] space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Formulario de Mensajes Directos
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Envía los detalles de tu empresa o requerimiento técnico para recibir una propuesta estructurada.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Nombre o Empresa
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej. Ing. Carlos Mendoza / Comercial San José S.A."
                className="w-full p-3.5 rounded-xl bg-[#08101E] border border-[#203350] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#5F90FF] focus:ring-2 focus:ring-[#5F90FF]/20"
              />
              {errors.nombre && <p className="text-red-400 text-xs font-mono mt-1">{errors.nombre}</p>}
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="contacto@empresa.com"
                className="w-full p-3.5 rounded-xl bg-[#08101E] border border-[#203350] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#5F90FF] focus:ring-2 focus:ring-[#5F90FF]/20"
              />
              {errors.email && <p className="text-red-400 text-xs font-mono mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Detalle del Requerimiento
              </label>
              <textarea
                name="mensaje"
                rows="4"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Describe tu sistema, módulo de interés (ej. Facturación DTE, OCR, Inventario, CCTV, Soporte IT) o consulta técnica..."
                className="w-full p-3.5 rounded-xl bg-[#08101E] border border-[#203350] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#5F90FF] focus:ring-2 focus:ring-[#5F90FF]/20"
              />
              {errors.mensaje && <p className="text-red-400 text-xs font-mono mt-1">{errors.mensaje}</p>}
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-3.5 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2 ${isSending
                ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                : "bg-[#0A54FA] hover:bg-[#5F90FF] text-white shadow-lg shadow-blue-600/30"
                }`}
            >
              {isSending ? (
                <span>Enviando mensaje...</span>
              ) : (
                <>
                  <GoogleIcon name="send" size={18} />
                  <span>Enviar Mensaje al Equipo</span>
                </>
              )}
            </button>

            {success && (
              <p className="p-3 rounded-xl bg-[#0E3523] border border-[#47C88C] text-[#47C88C] text-xs font-mono text-center font-bold">
                ✓ Mensaje enviado correctamente. Te responderemos pronto.
              </p>
            )}
          </form>
        </section>
      </div>
    </div>
  );
}
