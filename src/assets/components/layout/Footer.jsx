import { Link } from "react-router-dom";
import logoHorizontal from "../../brand/logo-horizontal-color-fondo-oscuro.png";
import { WhatsAppIcon } from "../ui/WhatsAppButton";
import { CONTACT_INFO } from "../../../data/modulesData";

export default function Footer() {
  return (
    <footer className="w-full bg-[#08101E] text-slate-400 py-12 px-6 border-t border-[#203350]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* LOGO & DESCRIPCIÓN CON DIMENSIONES APROPIADAS DEL KIT DE MARCA */}
        <div className="flex flex-col items-center md:items-start max-w-sm">
          <Link to="/" className="inline-block transition-transform duration-200 hover:scale-105">
            <img
              src={logoHorizontal}
              alt="Desarrollador JR Logo Oficial"
              className="h-14 sm:h-16 md:h-18 w-auto object-contain"
              loading="lazy"
            />
          </Link>
          <p className="text-xs text-slate-400 mt-3 font-sans leading-relaxed">
            Ingeniería de software a medida, Facturación Electrónica DTE, seguridad electrónica y automatización corporativa en El Salvador.
          </p>
        </div>

        {/* ENLACES RÁPIDOS Y BOTÓN DE WHATSAPP ELEGANTE */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4 text-xs font-mono">
          <Link to="/perfil" className="hover:text-[#5F90FF] transition">
            Perfil
          </Link>
          <Link to="/equipo" className="hover:text-[#5F90FF] transition text-[#FFC633]">
            Equipo (6)
          </Link>
          <Link to="/arquitectura" className="hover:text-[#5F90FF] transition">
            Arquitectura
          </Link>
          <Link to="/modulos" className="hover:text-[#5F90FF] transition">
            Módulos (10)
          </Link>
          <Link to="/tecnologia" className="hover:text-[#5F90FF] transition">
            Tecnología
          </Link>
          <Link to="/calidad" className="hover:text-[#5F90FF] transition">
            Calidad
          </Link>
          <Link to="/evidencia" className="hover:text-[#5F90FF] transition text-[#5F90FF]">
            Evidencia
          </Link>
          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold font-mono text-xs shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-0.5 active:scale-95"
            aria-label="Abrir WhatsApp oficial"
          >
            <WhatsAppIcon size={15} className="fill-slate-950" />
            <span className="tracking-wide">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* METADATOS TÉCNICOS Y COPYRIGHT */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[#203350]/60 text-xs font-mono text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p>© {new Date().getFullYear()} Desarrollador JR · Fundador: Cristian Cajul · {CONTACT_INFO.company} {CONTACT_INFO.location}.</p>
        <p className="text-[#5F90FF]">Especificación SDD-JR-001 v2.0 · IEEE 1016</p>
      </div>
    </footer>
  );
}
