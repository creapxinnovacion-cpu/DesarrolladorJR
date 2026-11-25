import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import logoHorizontal from "../../brand/logo-horizontal-color-fondo-oscuro.png";
import logoMarca from "../../brand/logo-marca-color.png";
import GoogleIcon from "../ui/GoogleIcon";
import { CONTACT_INFO } from "../../../data/modulesData";

const links = [
  { to: "/", label: "Inicio", icon: "home" },
  { to: "/perfil", label: "Perfil", icon: "person" },
  { to: "/equipo", label: "Equipo", icon: "groups" },
  { to: "/arquitectura", label: "Arquitectura", icon: "schema" },
  { to: "/modulos", label: "Módulos (10)", icon: "deployed_code" },
  { to: "/tecnologia", label: "Tecnología", icon: "code" },
  { to: "/calidad", label: "Calidad", icon: "verified" },
  { to: "/evidencia", label: "Evidencia", icon: "photo_library" },
  { to: "/contacto", label: "Contacto", icon: "mail" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#08101E]/90 border-b border-[#203350] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center gap-4">
        {/* LOGO OFICIAL DEL KIT DE MARCA */}
        <Link
          to="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F90FF] rounded-lg py-1"
        >
          <img
            src={logoHorizontal}
            alt="Desarrollador JR Logo"
            className="hidden sm:block h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <img
            src={logoMarca}
            alt="Desarrollador JR Icono"
            className="sm:hidden h-8 w-8 object-contain rounded-lg border border-[#203350]"
          />
          <div className="hidden xl:flex flex-col border-l border-[#203350] pl-3 ml-1">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#5F90FF] font-semibold">
              {CONTACT_INFO.documentCode}
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              {CONTACT_INFO.version}
            </span>
          </div>
        </Link>

        {/* BOTÓN MÓVIL */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-300 hover:text-white hover:bg-[#15243E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F90FF]"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Abrir menú</span>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* NAVEGACIÓN DESKTOP / MÓVIL */}
        <nav
          id="nav-menu"
          aria-label="Principal"
          className={[
            "flex flex-col lg:flex-row lg:items-center gap-1 absolute lg:static left-0 right-0 top-full bg-[#08101E]/95 lg:bg-transparent px-6 py-4 lg:p-0 border-b border-[#203350] lg:border-0 z-40 transition-all",
            open ? "flex shadow-2xl" : "hidden lg:flex",
          ].join(" ")}
        >
          {links.map(({ to, label, icon }) => {
            const isActive = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={[
                  "text-xs font-mono font-medium px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F90FF]",
                  isActive
                    ? "text-[#5F90FF] bg-[#14274B] font-semibold border border-[#5F90FF]/30"
                    : "text-slate-300 hover:text-white hover:bg-[#15243E]",
                ].join(" ")}
              >
                <GoogleIcon name={icon} size={15} className={isActive ? "text-[#5F90FF]" : "text-slate-400"} />
                <span>{label}</span>
              </Link>
            );
          })}

          <div className="pt-2 lg:pt-0 lg:ml-2 flex items-center gap-2">
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-1 px-3 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-slate-950 bg-[#FFC633] hover:bg-[#F7B836] rounded-lg shadow-sm shadow-amber-500/20 transition-all active:scale-95"
            >
              <span>Contacto</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
