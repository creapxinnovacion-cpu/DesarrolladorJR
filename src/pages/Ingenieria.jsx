import { useState } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../assets/components/ui/GoogleIcon";
import { CONTACT_INFO, MODULES_DATA, ENGINEERING_PRINCIPLES } from "../data/modulesData";

export default function Ingenieria() {
  const [activeTab, setActiveTab] = useState("modulos");

  const techStack = [
    { name: "FastAPI", category: "Backend Microservices", icon: "terminal", desc: "API REST asíncrona de alto desempeño con esquemas Pydantic y validación en tiempo de ejecución." },
    { name: "Python Cryptography", category: "Firma DTE RS512", icon: "lock", desc: "Firma digital de documentos tributarios con llaves privadas y certificados del Ministerio de Hacienda." },
    { name: "PostgreSQL / Neon", category: "Persistencia Relacional", icon: "database", desc: "Base de datos serverless con branching, aislamiento ACID y cuadratura decimal precisa." },
    { name: "React 19 / Vite", category: "Frontend SPA", icon: "devices", desc: "Interfaz reactiva, tipada, empaquetada con Vite y estilizada con Tailwind CSS v4." },
    { name: "Flutter / Dart", category: "Aplicaciones Móviles", icon: "smartphone", desc: "Apps multiplataforma para repartidores, telemetría satelital y punto de venta móvil." },
    { name: "Docker / CI-CD", category: "Contenedores & Despliegue", icon: "deployed_code", desc: "Pipelines automatizados de integración continua y despliegue sin tiempo de inactividad." }
  ];

  return (
    <div className="w-full min-h-screen bg-[#08101E] text-[#EBF1FA] px-4 sm:px-6 py-14">
      {/* React 19 Native Head Hoisting */}
      <title>Centro de Ingeniería · Arquitectura, Módulos y Calidad · Desarrollador JR</title>
      <meta name="description" content="Especificación técnica profunda de Desarrollador JR: arquitectura hexagonal, 10 módulos de software, stack tecnológico y matriz de calidad." />
      <link rel="canonical" href="https://desarrolladorjr.com/ingenieria" />
      <meta property="og:title" content="Centro de Ingeniería de Software · Desarrollador JR" />
      <meta property="og:url" content="https://desarrolladorjr.com/ingenieria" />

      <div className="max-w-6xl mx-auto space-y-14">
        {/* HEADER DE INGENIERÍA */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14274B] border border-[#5F90FF]/30 text-[#5F90FF] text-xs font-mono font-semibold uppercase tracking-wider">
            <GoogleIcon name="terminal" size={16} />
            <span>Centro de Especificación Técnica · {CONTACT_INFO.documentCode}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ingeniería de Software &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5F90FF] via-sky-400 to-[#38BDF8]">
              Arquitectura
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Documentación técnica profunda de los 10 módulos en producción, decisiones arquitectónicas, estándares de calidad IEEE 1016 y verificación tributaria en El Salvador.
          </p>

          {/* ACCESOS DIRECTOS A LAS 5 ÁREAS TÉCNICAS */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-4">
            <Link
              to="/modulos"
              className="p-3 rounded-xl bg-[#0E1A2E] border border-[#203350] hover:border-[#5F90FF] transition text-center group"
            >
              <GoogleIcon name="deployed_code" size={20} className="text-[#5F90FF] mx-auto mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-sans font-bold text-white block">10 Módulos</span>
              <span className="text-[10px] font-mono text-slate-400">En producción</span>
            </Link>

            <Link
              to="/arquitectura"
              className="p-3 rounded-xl bg-[#0E1A2E] border border-[#203350] hover:border-[#5F90FF] transition text-center group"
            >
              <GoogleIcon name="schema" size={20} className="text-[#FFC633] mx-auto mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-sans font-bold text-white block">Arquitectura</span>
              <span className="text-[10px] font-mono text-slate-400">4 Capas DDD</span>
            </Link>

            <Link
              to="/tecnologia"
              className="p-3 rounded-xl bg-[#0E1A2E] border border-[#203350] hover:border-[#5F90FF] transition text-center group"
            >
              <GoogleIcon name="code" size={20} className="text-[#47C88C] mx-auto mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-sans font-bold text-white block">Tecnología</span>
              <span className="text-[10px] font-mono text-slate-400">Stack y APIs</span>
            </Link>

            <Link
              to="/calidad"
              className="p-3 rounded-xl bg-[#0E1A2E] border border-[#203350] hover:border-[#5F90FF] transition text-center group"
            >
              <GoogleIcon name="verified" size={20} className="text-[#5F90FF] mx-auto mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-sans font-bold text-white block">Calidad</span>
              <span className="text-[10px] font-mono text-slate-400">Tests y Fiscal</span>
            </Link>

            <Link
              to="/evidencia"
              className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-[#0E1A2E] border border-[#203350] hover:border-[#5F90FF] transition text-center group"
            >
              <GoogleIcon name="photo_library" size={20} className="text-[#FFC633] mx-auto mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-sans font-bold text-white block">Evidencia</span>
              <span className="text-[10px] font-mono text-slate-400">25+ Fotos</span>
            </Link>
          </div>
        </section>

        {/* CONTENEDOR DE PESTAÑAS TÉCNICAS */}
        <section className="space-y-6">
          <div className="flex border-b border-[#203350] gap-4">
            <button
              type="button"
              onClick={() => setActiveTab("modulos")}
              className={[
                "pb-3 text-sm font-sans font-bold transition border-b-2 cursor-pointer",
                activeTab === "modulos"
                  ? "border-[#5F90FF] text-[#5F90FF]"
                  : "border-transparent text-slate-400 hover:text-white"
              ].join(" ")}
            >
              Resumen de los 10 Módulos
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("stack")}
              className={[
                "pb-3 text-sm font-sans font-bold transition border-b-2 cursor-pointer",
                activeTab === "stack"
                  ? "border-[#5F90FF] text-[#5F90FF]"
                  : "border-transparent text-slate-400 hover:text-white"
              ].join(" ")}
            >
              Stack Tecnológico Central
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("principios")}
              className={[
                "pb-3 text-sm font-sans font-bold transition border-b-2 cursor-pointer",
                activeTab === "principios"
                  ? "border-[#5F90FF] text-[#5F90FF]"
                  : "border-transparent text-slate-400 hover:text-white"
              ].join(" ")}
            >
              Principios de Ingeniería
            </button>
          </div>

          {/* TAB 1: 10 MÓDULOS */}
          {activeTab === "modulos" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MODULES_DATA.map((m) => (
                <div
                  key={m.id}
                  className="p-5 rounded-2xl bg-[#0E1A2E] border border-[#203350] hover:border-[#5F90FF]/40 transition space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#5F90FF] bg-[#14274B] px-2.5 py-0.5 rounded">
                      {m.id}
                    </span>
                    <span className="text-[10px] font-mono text-[#FFC633] uppercase">
                      {m.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {m.name}
                  </h3>
                  <p className="text-xs text-slate-300 font-sans line-clamp-2">
                    {m.problem}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {m.tags.slice(0, 4).map((t, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#08101E] text-slate-400 border border-[#203350]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: STACK */}
          {activeTab === "stack" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStack.map((tech, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#0E1A2E] border border-[#203350] space-y-2">
                  <div className="flex items-center gap-2.5">
                    <GoogleIcon name={tech.icon} size={22} className="text-[#5F90FF]" />
                    <div>
                      <h4 className="text-sm font-bold text-white">{tech.name}</h4>
                      <span className="text-[10px] font-mono text-[#FFC633] uppercase">{tech.category}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: PRINCIPIOS */}
          {activeTab === "principios" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ENGINEERING_PRINCIPLES.map((principle, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#0E1A2E] border border-[#203350] space-y-2">
                  <div className="flex items-center gap-2 text-[#5F90FF]">
                    <GoogleIcon name="verified" size={18} />
                    <h4 className="text-sm font-bold text-white font-sans">{principle.title}</h4>
                  </div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* PIE DE ESPECIFICACIÓN */}
        <section className="p-6 rounded-2xl bg-[#0E1A2E] border border-[#203350] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            <span>Documento Técnico Base: </span>
            <strong className="text-white">{CONTACT_INFO.documentCode} {CONTACT_INFO.version}</strong>
          </div>
          <Link to="/modulos" className="text-[#5F90FF] hover:underline font-sans font-semibold">
            Abrir Catálogo Completo de Módulos (10) →
          </Link>
        </section>
      </div>
    </div>
  );
}
