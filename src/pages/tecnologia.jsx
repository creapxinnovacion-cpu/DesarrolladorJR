import {
  Laptop,
  Terminal,
  Database,
  Link2,
  Cloud,
  Wrench,
  Check,
  Code2
} from "lucide-react";

const STACK_CATEGORIES = [
  {
    title: "Frontend, Móvil y Escritorio",
    icon: Laptop,
    badge: "Interfaces",
    items: [
      "React 19 & TypeScript",
      "Vite & Tailwind CSS v4",
      "Flutter (Móvil Android/iOS/Web)",
      "BLoC & Cubit (State Management)",
      "PySide6 (Qt para Desktop Windows)",
      "QThread (Concurrencia multihilo)",
      "Bootstrap 5 & SweetAlert2",
      "html2pdf.js (Escala 2.5x)",
      "SheetJS (xlsx) para Excel",
      "Dexie.js (IndexedDB local)",
    ],
  },
  {
    title: "Backend & Lógica de Negocio",
    icon: Terminal,
    badge: "Core APIs",
    items: [
      "FastAPI (Python 3.10+)",
      "Laravel 12 (PHP & BCMath)",
      "Spring Boot (Java & Jose4j)",
      "Node.js & Express (MVC)",
      "Google Apps Script (JSON-RPC)",
      "SQLAlchemy ORM & Pydantic v2",
      "WebSockets (Telemetría bidireccional)",
      "OpenCV & PaddleOCR (Lectura QR/Texto)",
    ],
  },
  {
    title: "Bases de Datos & Almacenamiento",
    icon: Database,
    badge: "Persistencia",
    items: [
      "PostgreSQL (Neon DB Serverless)",
      "SQLite (Almacenamiento Local Offline)",
      "Google Sheets API (8 Hojas Relacionadas)",
      "MySQL / SQL Server",
      "Dexie.js (Caché en Navegador)",
      "Formatos Planos CSV (21 Columnas DGII)",
    ],
  },
  {
    title: "Seguridad & Criptografía",
    icon: Link2,
    badge: "Cripto & Auth",
    items: [
      "Firma Digital JWS RS512 (RSA 4096 / SHA-512)",
      "Tokens JWT con nitEmpresa en Payload",
      "Hashing de Contraseñas con Bcrypt",
      "Huella Criptográfica SHA-256 de Hardware",
      "IMAP SSL & Filtros por Message-ID",
      "Certificados y Llaves del Ministerio de Hacienda",
    ],
  },
  {
    title: "DevOps & Despliegue",
    icon: Cloud,
    badge: "Infraestructura",
    items: [
      "Docker & Compilaciones Multi-Etapa",
      "Docker Compose para Desarrollo Local",
      "Kubernetes & Manifiestos Kustomize",
      "GitHub Actions (CI/CD Automático)",
      "Vercel (Hosting Edge Frontend)",
      "Cloudflare CDN & Workers",
    ],
  },
  {
    title: "Infraestructura de TI & Soporte",
    icon: Wrench,
    badge: "Soporte Físico",
    items: [
      "Cámaras de Seguridad IP y CCTV",
      "Sistemas DVR y Cableado Estructurado",
      "Diagnóstico SMART de Discos y RAM",
      "Cambio de Pasta Térmica (>8.5 W/mK)",
      "Climatización de Oficinas y Servidores",
      "Optimización de Sistemas Operativos",
    ],
  },
];

export default function Tecnologia() {
  return (
    <div className="w-full min-h-screen bg-[#08101E] text-[#EBF1FA] px-4 sm:px-6 py-14">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* ================= HEADER ================= */}
        <section className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#5F90FF] bg-[#14274B] px-3.5 py-1.5 rounded-full border border-[#5F90FF]/30 font-semibold">
            Especificación Técnica
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Stack Tecnológico & Modelos de Datos
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Herramientas consolidadas en la industria para construir plataformas escalables, sin acoplamiento y con alta fidelidad tributaria.
          </p>
        </section>

        {/* ================= GRID DE TECNOLOGÍAS ================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STACK_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0E1A2E] border border-[#203350] hover:border-[#5F90FF] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-[#14274B] text-[#5F90FF] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#15243E] text-slate-400">
                      {cat.badge}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-white mb-4">
                    {cat.title}
                  </h2>

                  <ul className="space-y-2 text-xs font-mono text-slate-300">
                    {cat.items.map((tech, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#47C88C] shrink-0" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </section>

        {/* ================= DICCIONARIO DE ENTIDADES ================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-[#0E1A2E] border border-[#203350] space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#FFC633] uppercase tracking-widest font-semibold">
              Persistencia Relacional
            </span>
            <h2 className="text-2xl font-bold text-white">
              Entidades Principales y Esquemas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-[#15243E] border border-[#203350] space-y-3">
              <h3 className="text-sm font-mono font-bold text-[#5F90FF] flex justify-between">
                <span>API Agente Contable</span>
                <small className="text-slate-400">PostgreSQL Neon</small>
              </h3>
              <p className="text-xs text-slate-300">
                Modelos SQLAlchemy multi-tenant para aislamiento de datos empresariales:
              </p>
              <ul className="text-xs font-mono text-slate-400 space-y-1">
                <li>• <code>empresas</code> (id, nit, razon_social)</li>
                <li>• <code>usuarios</code> (id, email, hashed_password)</li>
                <li>• <code>usuario_empresa</code> (user_id, empresa_id)</li>
                <li>• <code>dte_records</code> (sello_recibido, json)</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-[#15243E] border border-[#203350] space-y-3">
              <h3 className="text-sm font-mono font-bold text-[#5F90FF] flex justify-between">
                <span>Botiquín Farmacéutico</span>
                <small className="text-slate-400">Google Sheets API</small>
              </h3>
              <p className="text-xs text-slate-300">
                8 hojas conectadas por llaves de texto con registro inmutable:
              </p>
              <ul className="text-xs font-mono text-slate-400 space-y-1">
                <li>• <code>PRODUCTOS</code> y <code>LOTES</code> (caducidad)</li>
                <li>• <code>MOVIMIENTOS</code> (FEFO / PEPS)</li>
                <li>• <code>DESPACHOS</code> y <code>AUDITORIA</code></li>
                <li>• <code>AJUSTES_INVENTARIO</code></li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-[#15243E] border border-[#203350] space-y-3">
              <h3 className="text-sm font-mono font-bold text-[#5F90FF] flex justify-between">
                <span>Libro Compras F-07</span>
                <small className="text-slate-400">CSV DGII</small>
              </h3>
              <p className="text-xs text-slate-300">
                Registro plano de 21 columnas delimitado por <code>;</code> sin cabeceras:
              </p>
              <ul className="text-xs font-mono text-slate-400 space-y-1">
                <li>• Col E: NIT o NRC (Exclusividad validada)</li>
                <li>• Col G - O: Gravadas, Exentas y No Sujetas</li>
                <li>• Col P: DUI (Personas Naturales)</li>
                <li>• Col Q - T: Códigos DGII de Operación</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
