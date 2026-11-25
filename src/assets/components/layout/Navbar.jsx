import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import logoMarca from "../../brand/logo-marca-color.png";
import GoogleIcon from "../ui/GoogleIcon";
import { CONTACT_INFO } from "../../../data/modulesData";

const links = [
  { to: "/", label: "Inicio", icon: "home" },
  { to: "/perfil", label: "Perfil", icon: "person" },
  { to: "/equipo", label: "Equipo", icon: "groups" },
  { to: "/arquitectura", label: "Arquitectura", icon: "schema" },
  { to: "/modulos", label: "Módulos", icon: "deployed_code" },
  { to: "/tecnologia", label: "Tecnología", icon: "code" },
  { to: "/calidad", label: "Calidad", icon: "verified" },
  { to: "/evidencia", label: "Evidencia", icon: "photo_library" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#08101E]/95 border-b border-[#203350] transition-colors m-0 p-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex justify-between items-center gap-2 lg:gap-4">
        {/* LOGO OFICIAL REDUCIDO AL ÍCONO DE MARCA 'JR' + TEXTO (EVITA DUPLICIDAD CON EL HERO) */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F90FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08101E] rounded-lg py-1 shrink-0"
          aria-label="Ir a Inicio - Desarrollador JR"
        >
          <img
            src={logoMarca}
            alt="JR Icono"
            className="h-8 w-8 object-contain rounded-lg border border-[#203350] transition-transform duration-200 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-white text-base sm:text-lg tracking-tight leading-none">
              Desarrollador <span className="text-[#5F90FF]">JR</span>
            </span>
            <span className="text-[10px] font-sans text-slate-300 font-medium tracking-wide uppercase leading-tight mt-0.5">
              CreaPx El Salvador
            </span>
          </div>

          {/* BADGE TÉCNICO COMPACTO EN UNA SOLA LÍNEA (SOLO EN PANTALLAS ULTRA-ANCHAS PARA EVITAR DESBORDES) */}
          <div className="hidden 2xl:inline-flex items-center gap-1.5 ml-2 pl-3 border-l border-[#203350] text-[10px] font-mono text-[#5F90FF] whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[#47C88C]"></span>
            <span>{CONTACT_INFO.documentCode} · {CONTACT_INFO.version.split(" ")[0]}</span>
          </div>
        </Link>

        {/* BOTÓN MÓVIL ACCESIBLE CON FOCO VISIBLE */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-200 hover:text-white hover:bg-[#15243E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F90FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08101E] cursor-pointer"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Abrir menú de navegación</span>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* NAVEGACIÓN DESKTOP / MÓVIL CON TIPOGRAFÍA SANS Y ALTO CONTRASTE WCAG AA */}
        <nav
          id="nav-menu"
          aria-label="Principal"
          className={[
            "flex flex-col lg:flex-row lg:items-center gap-1 absolute lg:static left-0 right-0 top-full bg-[#08101E]/98 lg:bg-transparent px-6 py-4 lg:p-0 border-b border-[#203350] lg:border-0 z-40 transition-all shadow-xl lg:shadow-none",
            open ? "flex" : "hidden lg:flex",
          ].join(" ")}
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-1 xl:gap-1.5">
            {links.map(({ to, label, icon }) => {
              const isActive = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={[
                    "text-xs xl:text-sm font-sans font-medium px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F90FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08101E]",
                    isActive
                      ? "text-[#5F90FF] bg-[#14274B] font-semibold border border-[#5F90FF]/40 shadow-sm"
                      : "text-slate-200 hover:text-white hover:bg-[#15243E]",
                  ].join(" ")}
                >
                  <GoogleIcon
                    name={icon}
                    size={16}
                    className={isActive ? "text-[#5F90FF]" : "text-slate-400 group-hover:text-white"}
                  />
                  <span>{label}</span>
                </Link>
              );
            })}
          </div>

          {/* BOTÓN CTA ÚNICO DE CONTACTO (SIN DUPLICIDAD DE LINK) */}
          <div className="pt-3 lg:pt-0 lg:ml-3 flex items-center gap-2 border-t lg:border-t-0 border-[#203350]">
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="w-full lg:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-sans font-bold uppercase tracking-wider text-slate-950 bg-[#FFC633] hover:bg-[#F7B836] rounded-lg shadow-sm shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC633] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08101E]"
            >
              <span>Contacto</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* BADGE TÉCNICO EN EL DRAWER MÓVIL */}
          {open && (
            <div className="lg:hidden mt-4 pt-3 border-t border-[#203350] flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>{CONTACT_INFO.documentCode}</span>
              <span className="text-[#5F90FF]">{CONTACT_INFO.version}</span>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
