import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import logoMarca from "../../brand/logo-marca-color.png";
import GoogleIcon from "../ui/GoogleIcon";
import { CONTACT_INFO } from "../../../data/modulesData";

// ARQUITECTURA DE INFORMACIÓN v2.1: 4 ÍTEMS CLAVE + CTA
const mainLinks = [
  { to: "/servicios", label: "Servicios", icon: "handshake" },
  { to: "/casos", label: "Casos", icon: "verified" },
  { to: "/equipo", label: "Equipo", icon: "groups" },
  { to: "/ingenieria", label: "Ingeniería", icon: "terminal" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#08101E]/95 border-b border-[#203350] transition-colors m-0 p-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center gap-4">
        {/* LOGO OFICIAL DEL KIT DE MARCA: ICONO JR + IDENTIDAD (INICIO) */}
        <Link
          to="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F90FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08101E] rounded-lg py-1 shrink-0"
          aria-label="Ir a Inicio - Desarrollador JR"
        >
          <img
            src={logoMarca}
            alt="JR Isotipo"
            className="h-9 w-9 object-contain rounded-lg border border-[#203350] transition-transform duration-200 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-white text-base sm:text-lg tracking-tight leading-none">
              Desarrollador <span className="text-[#5F90FF]">JR</span>
            </span>
            <span className="text-[10px] font-sans text-slate-300 font-medium tracking-wide uppercase leading-tight mt-0.5">
              CreaPx El Salvador
            </span>
          </div>

          {/* BADGE TÉCNICO EN UNA SOLA LÍNEA (SOLO EN 2XL PARA EVITAR CUALQUIER COLISIÓN) */}
          <div className="hidden 2xl:inline-flex items-center gap-1.5 ml-2 pl-3 border-l border-[#203350] text-[10px] font-mono text-[#5F90FF] whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[#47C88C]"></span>
            <span>{CONTACT_INFO.documentCode} · {CONTACT_INFO.version}</span>
          </div>
        </Link>

        {/* BOTÓN MÓVIL / PANTALLAS < 1100px ACCESIBLE */}
        <button
          type="button"
          className="min-[1100px]:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-200 hover:text-white hover:bg-[#15243E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F90FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08101E] cursor-pointer"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Abrir menú de navegación</span>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* NAVEGACIÓN v2.1: 4 ÍTEMS SANS + CTA "COTIZAR / CONTACTO" */}
        <nav
          id="nav-menu"
          aria-label="Navegación Principal"
          className={[
            "flex flex-col min-[1100px]:flex-row min-[1100px]:items-center gap-1.5 absolute min-[1100px]:static left-0 right-0 top-full bg-[#08101E]/98 min-[1100px]:bg-transparent px-6 py-5 min-[1100px]:p-0 border-b min-[1100px]:border-0 border-[#203350] z-40 transition-all shadow-2xl min-[1100px]:shadow-none",
            open ? "flex" : "hidden min-[1100px]:flex",
          ].join(" ")}
        >
          <div className="flex flex-col min-[1100px]:flex-row min-[1100px]:items-center gap-1 min-[1100px]:gap-2">
            {mainLinks.map(({ to, label, icon }) => {
              const isActive = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={[
                    "text-sm font-sans font-medium px-3 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F90FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08101E]",
                    isActive
                      ? "text-[#5F90FF] bg-[#14274B] font-bold border border-[#5F90FF]/40 shadow-sm"
                      : "text-slate-200 hover:text-white hover:bg-[#15243E]",
                  ].join(" ")}
                >
                  <GoogleIcon
                    name={icon}
                    size={17}
                    className={isActive ? "text-[#5F90FF]" : "text-slate-400 group-hover:text-white"}
                  />
                  <span>{label}</span>
                </Link>
              );
            })}
          </div>

          {/* BOTÓN CTA UNIFICADO "CONTÁCTANOS / COTIZA TU PROYECTO" */}
          <div className="pt-4 min-[1100px]:pt-0 min-[1100px]:ml-4 flex items-center gap-2 border-t min-[1100px]:border-t-0 border-[#203350]">
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="w-full min-[1100px]:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-sans font-bold uppercase tracking-wider text-slate-950 bg-[#FFC633] hover:bg-[#F7B836] rounded-xl shadow-md shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC633] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08101E]"
            >
              <span>Contáctanos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* ENLACES TÉCNICOS RÁPIDOS EN DRAWER MÓVIL */}
          {open && (
            <div className="min-[1100px]:hidden mt-4 pt-4 border-t border-[#203350] space-y-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Accesos de Ingeniería:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-sans text-slate-300">
                <Link to="/modulos" onClick={() => setOpen(false)} className="hover:text-[#5F90FF]">→ 10 Módulos</Link>
                <Link to="/evidencia" onClick={() => setOpen(false)} className="hover:text-[#5F90FF]">→ Evidencias</Link>
                <Link to="/arquitectura" onClick={() => setOpen(false)} className="hover:text-[#5F90FF]">→ Arquitectura</Link>
                <Link to="/calidad" onClick={() => setOpen(false)} className="hover:text-[#5F90FF]">→ Calidad & DTE</Link>
              </div>
              <div className="pt-2 text-[10px] font-mono text-slate-500 flex justify-between">
                <span>{CONTACT_INFO.documentCode}</span>
                <span className="text-[#5F90FF]">{CONTACT_INFO.version}</span>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
