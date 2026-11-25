// Dataset Maestro de los 10 Módulos, Fundador y Equipo de Producción - Desarrollador JR (CreaPx)

export const CONTACT_INFO = {
  whatsappRaw: "+503 7035 2834",
  whatsappLink: "https://wa.me/50370352834",
  email: "creapxinnovacion@gmail.com",
  location: "El Salvador",
  documentCode: "SDD-JR-002",
  version: "v2.1 (Producción)",
  role: "Desarrollador JR / Software Engineer & Founder",
  company: "CreaPx"
};

// ==========================================
// CATÁLOGO DE SERVICIOS COMERCIALES (v2.1)
// Orientado a clientes y tomadores de decisión
// ==========================================
export const SERVICES_DATA = [
  {
    id: "SRV-01",
    icon: "receipt_long",
    title: "Facturación Electrónica DTE",
    subtitle: "Emisión y control tributario homologado con el Ministerio de Hacienda",
    description: "Implementamos e integramos la facturación electrónica obligatoria para tu empresa. Generación de JSON firmados criptográficamente (JWS RS512), transmisión a Hacienda, control de contingencias offline y representación gráfica con código QR.",
    benefits: [
      "Soporte oficial para DTE 01 (Factura), DTE 03 (Crédito Fiscal), DTE 05 (Nota de Crédito) y DTE 14 (Sujeto Excluido).",
      "Firma digital automática con llaves privadas y certificados del Ministerio de Hacienda.",
      "Modo contingencia automático en caídas de red o demoras de respuesta gubernamental.",
      "Envío directo por correo y WhatsApp del documento tributario al cliente final."
    ],
    tags: ["JWS RS512", "Hacienda El Salvador", "DTE 01/03/05/14", "QR Tributario", "Contingencia"],
    badge: "Alta Demanda Legal",
    popular: true
  },
  {
    id: "SRV-02",
    icon: "code",
    title: "Sistemas de Software a la Medida",
    subtitle: "Ventas, inventario, clientes y operaciones adaptadas a tu flujo de negocio",
    description: "Desarrollamos aplicaciones web, móviles y de escritorio pensadas exactamente para la forma en que opera tu empresa. Evita software rígido que cobra licencias mensuales abusivas y obtén una solución propia, escalable y rápida.",
    benefits: [
      "Inventarios con control de lotes y motor dual FEFO / PEPS para control estricto de mermas y caducidades.",
      "Puntos de venta (POS) rápidos con sincronización local y en la nube.",
      "Módulos administrativos, cuentas por cobrar y reportes ejecutivos automatizados.",
      "Bases de datos seguras en PostgreSQL con respaldos automáticos continuos."
    ],
    tags: ["FastAPI", "React", "PostgreSQL", "Flutter", "Sistemas a la Medida"],
    badge: "100% Personalizado",
    popular: false
  },
  {
    id: "SRV-03",
    icon: "autorenew",
    title: "Automatización de Procesos & Integraciones",
    subtitle: "Flujos de trabajo, recordatorios, cotizaciones y sincronización que se ejecutan solos",
    description: "Elimina tareas manuales repetitivas y conecta tus sistemas. Desde flujos automáticos de facturas y digitalización OCR, hasta scripts de sincronización de inventario, pasarelas de pago y alertas por WhatsApp o correo.",
    benefits: [
      "Sincronización automática de inventario y pedidos entre múltiples sucursales o puntos de venta.",
      "Digitalización inteligente con OCR para extraer datos de facturas físicas y documentos.",
      "Generación y envío automático de cotizaciones y recordatorios de cobro a clientes.",
      "Integración de APIs y webhooks entre sistemas contables, ERPs y bases de datos PostgreSQL."
    ],
    tags: ["Automatización", "Webhooks & APIs", "OCR Documentos", "ETL", "Sincronización"],
    badge: "Eficiencia Operativa",
    popular: false
  }
];

// ==========================================
// CASOS DE ÉXITO COMERCIALES (v2.1)
// Problema · Solución · Tecnología · Resultado
// Datos técnicos reales y confidencialidad protegida (Sección 14 SDD)
// ==========================================
export const CASE_STUDIES_DATA = [
  {
    id: "CASO-01",
    slug: "facturacion-electronica-dte-el-salvador",
    title: "Sistema de Facturación DTE con Contingencia Offline",
    client: "Comercio Mayorista y Distribución · San Salvador",
    industry: "Comercio & Retail",
    problem: "Obligatoriedad de emitir Facturas y Créditos Fiscales DTE según mandato del Ministerio de Hacienda, con alto riesgo de multas y pérdida de ventas durante cortes de internet.",
    solution: "Desarrollo de microservicio en FastAPI y React con motor de firma criptográfica JWS RS512. Se incorporó una cola local SQLite de contingencia que almacena ventas offline y las transmite automáticamente a Hacienda al restaurarse la conexión.",
    tech: ["FastAPI", "Python Cryptography", "JWS RS512", "React 19", "PostgreSQL"],
    results: [
      "100% de cumplimiento tributario ante Ministerio de Hacienda.",
      "Cero ventas perdidas por caídas de internet gracias a la cola offline sincronizada.",
      "Sello de recepción tributario emitido y almacenado de forma automática."
    ],
    metric: "0 Ventas Perdidas",
    metricLabel: "por caídas de internet",
    image: "/brand/imagen-compartir-og-1200x630.png",
    icon: "receipt_long"
  },
  {
    id: "CASO-02",
    slug: "infraestructura-redes-conectividad-educativa",
    title: "Cableado Estructurado y Red Wi-Fi Institucional",
    client: "Sector Educativo Público · Complejo Escolar de Occidente (Ahuachapán)",
    industry: "Educación & Infraestructura",
    problem: "Carencia de conectividad de red confiable en aulas y dirección, cables expuestos a la intemperie y caídas constantes de señal que impedían el aprovechamiento de equipos informáticos.",
    solution: "Diseño e instalación completa de infraestructura de red: canalización aérea en cerchas industriales con ducto corrugado, doble gabinete mural de 19\" Nexxt Solutions, patch panels rotulados bajo norma ANSI/TIA-606-B, enlaces de fibra óptica y Access Points empresariales PoE.",
    tech: ["UTP Cat6 Nexxt", "Enterprise AP PoE", "Fibra Óptica", "Forza UPS", "TIA/EIA-568-C"],
    results: [
      "Cobertura Wi-Fi total en el 100% de las aulas y áreas administrativas.",
      "Cero pérdida de paquetes en pruebas de certificación física con analizador digital de red.",
      "Protección eléctrica ininterrumpida con UPS para switches y fibra ante variaciones de voltaje."
    ],
    metric: "100% Cobertura",
    metricLabel: "certificada en aulas",
    image: "/evidence/rack-cuarto-comunicaciones-panoramica.jpg",
    icon: "lan"
  },
  {
    id: "CASO-03",
    slug: "inventario-farmaceutico-fefo-peps",
    title: "Gestión de Inventario Crítico con Motor Dual FEFO/PEPS",
    client: "Cadena de Distribución Farmacéutica y Almacén Central",
    industry: "Salud & Distribución",
    problem: "Pérdidas económicas por medicamentos vencidos en bodega debido a falta de trazabilidad de lotes y despacho desordenado en almacén.",
    solution: "Plataforma de inventario con algoritmo dual FEFO (First-Expired, First-Out) y PEPS. Alertas preventivas automáticas antes de vencimiento, bloqueo de lotes comprometidos e impresión de etiquetas con código de barras.",
    tech: ["PostgreSQL", "Python", "React", "Docker", "Tailwind CSS"],
    results: [
      "Eliminación de despachos de productos caducados mediante despacho guiado FEFO.",
      "Trazabilidad completa de origen a destino por número de lote en auditorías.",
      "Disminución drástica de tiempos de preparación de pedidos y arqueos de almacén."
    ],
    metric: "Trazabilidad Total",
    metricLabel: "por lote y fecha de expiración",
    image: "/evidence/hardware-ssd-nvme-m2-alta-velocidad.jpg",
    icon: "inventory_2"
  }
];

// ==========================================
// INFORMACIÓN DETALLADA DEL FUNDADOR (CRISTIAN CAJUL)
// ==========================================
export const FOUNDER_DATA = {
  name: "Cristian Cajul",
  title: "Fundador · Desarrollo & Automatización",
  headline: "Arquitecto de Soluciones, Automatización DTE & Formador Técnico",
  bio: "Líder de ingeniería y fundador de Desarrollador JR. Especialista en la implementación de software tributario homologado para el Ministerio de Hacienda de El Salvador (JWS RS512), modernización de procesos operativos, arquitectura de datos relacionales y dirección técnica de proyectos de infraestructura y desarrollo.",
  image: "/team/equipo-cristian-1080x1350.png",
  avatarCircular: "/brand/facebook-foto-de-perfil-circular-1080.png",
  specialties: [
    { label: "Desarrollo", icon: "code" },
    { label: "Soporte IT", icon: "computer" },
    { label: "Redes y estructura de redes", icon: "lan" },
    { label: "Cámaras", icon: "videocam" },
    { label: "Auxiliar eléctrico", icon: "bolt" },
    { label: "Auxiliar administrativo", icon: "inventory_2" },
    { label: "Profesor de desarrollo", icon: "school" },
    { label: "Capacitador de ofimática", icon: "edit_document" },
    { label: "ETL y transformación de datos", icon: "transform" }
  ],
  stats: [
    { value: "10+", label: "Módulos de Software en Producción" },
    { value: "100%", label: "Cumplimiento Fiscal DTE (Hacienda)" },
    { value: "6", label: "Especialistas en el Equipo Multidisciplinario" },
    { value: "< 24h", label: "Tiempo de Respuesta a Requerimientos" }
  ]
};

// ==========================================
// EQUIPO MULTIDISCIPLINARIO DETRÁS DE DESARROLLADOR JR
// ==========================================
export const TEAM_MEMBERS = [
  {
    id: "cristian-cajul",
    name: "Cristian Cajul",
    role: "Fundador · Desarrollo",
    area: "Ingeniería de Software & Dirección Técnica",
    image: "/team/equipo-cristian-1080x1350.png",
    googleIcon: "terminal",
    description: "Arquitectura backend en FastAPI y Laravel, microservicios criptográficos JWS RS512, desarrollo frontend con React y coordinación de proyectos tecnológicos.",
    skills: ["FastAPI", "Laravel 12", "JWS RS512", "React 19", "PostgreSQL", "Docker"]
  },
  {
    id: "enmanuel-sanchez",
    name: "Enmanuel Sánchez",
    role: "Cámaras y alarmas",
    area: "Seguridad Electrónica & CCTV",
    image: "/team/equipo-enmanuel-1080x1350.png",
    googleIcon: "videocam",
    description: "Diseño e instalación de sistemas de videovigilancia IP y analógicos DVR, control de acceso perimetral, configuración de alarmas y monitoreo remoto 24/7.",
    skills: ["CCTV IP", "Sistemas DVR", "Alarmas", "Cableado Estructurado", "Monitoreo Remoto"]
  },
  {
    id: "gerardo-tepas",
    name: "Gerardo Tepas",
    role: "Soporte IT",
    area: "Infraestructura & Mantenimiento",
    image: "/team/equipo-gerardo-1080x1350.png",
    googleIcon: "build",
    description: "Mantenimiento preventivo y correctivo de estaciones de trabajo y servidores, diagnóstico de componentes físicos, cambio de pasta térmica y soporte técnico a usuarios.",
    skills: ["Diagnóstico SMART", "Hardware de TI", "Pasta Térmica", "Optimización SO", "Helpdesk"]
  },
  {
    id: "ricardo-cuellas",
    name: "Ricardo Cuellas",
    role: "Asistencia administrativa",
    area: "Gestión Operativa & Documental",
    image: "/team/equipo-ricardo-1080x1350.png",
    googleIcon: "description",
    description: "Organización de flujos administrativos, control de comprobantes tributarios, digitalización documental y aseguramiento de trazabilidad operativa.",
    skills: ["Control Documental", "Gestión Tributaria", "Flujos de Oficina", "Conciliación"]
  },
  {
    id: "eduardo-zuniga",
    name: "Eduardo Zúñiga",
    role: "Soporte y gestión",
    area: "Operaciones & Despliegue en Campo",
    image: "/team/equipo-eduardo-1080x1350.png",
    googleIcon: "support_agent",
    description: "Gestión de incidencias técnicas en campo, aseguramiento de estándares de servicio, asistencia en redes y enlace con clientes corporativos.",
    skills: ["Atención en Campo", "Gestión de Tickets", "Redes de Área Local", "Soporte Operativo"]
  },
  {
    id: "julio-hernandez",
    name: "Julio Hernández",
    role: "Ventas y logística",
    area: "Relaciones Comerciales & Distribución",
    image: "/team/equipo-julio-1080x1350.png",
    googleIcon: "local_shipping",
    description: "Atención comercial a clientes y empresas, asesoría técnica de requerimientos, logística de distribución y coordinación de servicios posventa.",
    skills: ["Asesoría Comercial", "Logística", "Gestión de Cuentas", "Atención a Clientes"]
  }
];

export const CREAPX_SERVICES_MATRIX = [
  {
    service: "Automatización Administrativa",
    focus: "Eliminación de tareas repetitivas y workflows desatendidos.",
    modules: ["MOD-05 Recolector", "MOD-06 P&G Contadores", "MOD-04 Botiquín"],
    impact: "Ahorro de hasta el 60% de tiempo diario de digitación."
  },
  {
    service: "Facturación Electrónica (DTE)",
    focus: "Emisión legal homologada, firma JWS RS512 y enlace con Hacienda.",
    modules: ["MOD-01 SVFE", "MOD-02 Libro F-07", "MOD-07 API Contable"],
    impact: "100% de cumplimiento tributario con contingencia offline garantizada."
  },
  {
    service: "Sistemas Web y Móviles",
    focus: "Desarrollo a medida con arquitecturas escalables y modernas.",
    modules: ["MOD-03 Panel Médico", "MOD-08 Gas Flama", "MOD-09 Web CreaPx"],
    impact: "Disponibilidad multiplataforma en Web, Android, iOS y Windows Desktop."
  },
  {
    service: "Digitalización de Documentos",
    focus: "Extracción automatizada de comprobantes, OCR y estructuración en PDF/CSV.",
    modules: ["MOD-02 Libro F-07", "MOD-05 Recolector", "MOD-03 Panel Médico"],
    impact: "Lectura de QR, CSV de 21 columnas Anexo 3 y recetas médicas en PDF 2.5x."
  },
  {
    service: "Community Manager & Redes",
    focus: "Presencia digital estratégica, generación de leads y analítica web.",
    modules: ["MOD-09 Web CreaPx"],
    impact: "Canalización de prospectos hacia WhatsApp directo y analítica GA4."
  },
  {
    service: "Cámaras de Seguridad & CCTV",
    focus: "Instalación de circuitos cerrados IP/DVR y monitoreo remoto continuo.",
    modules: ["Infraestructura Física"],
    impact: "Vigilancia en tiempo real para instalaciones comerciales y oficinas."
  },
  {
    service: "Climatización y A/C",
    focus: "Confort térmico y eficiencia energética para cuartos de servidores.",
    modules: ["Infraestructura Física"],
    impact: "Preservación de temperatura óptima para hardware crítico de TI."
  },
  {
    service: "Soporte Técnico & Hardware",
    focus: "Mantenimiento preventivo, pasta térmica de alta conductividad y diagnóstico.",
    modules: ["MOD-10 Hardware"],
    impact: "Descenso térmico de hasta 20°C en estaciones de trabajo y servidores."
  }
];

export const ENGINEERING_PRINCIPLES = [
  {
    number: "01",
    title: "La norma legal manda",
    desc: "Las reglas tributarias del Ministerio de Hacienda de El Salvador y de la DGII se programan con precisión decimal exacta usando BCMath, evitando errores de redondeo en punto flotante."
  },
  {
    number: "02",
    title: "Tolerancia a fallos y resiliencia offline",
    desc: "Ningún corte de internet o caída externa detiene las operaciones de venta. Implementación de búferes locales encriptados (Dexie.js e IndexedDB) con sincronización automática por lotes."
  },
  {
    number: "03",
    title: "Separación estricta de responsabilidades",
    desc: "Arquitecturas desacopladas (Domain-Driven en FastAPI, MVC modular en Express, BLoC/Cubit en Flutter) que garantizan mantenibilidad y escalabilidad independiente."
  },
  {
    number: "04",
    title: "Entornos reproducibles",
    desc: "Docker Compose y manifiestos de Kubernetes (Kustomize) que aseguran paridad total entre el entorno de desarrollo local y la infraestructura de producción."
  }
];

export const MODULES_DATA = [
  {
    id: "MOD-01",
    icon: "Receipt",
    name: "SVFE · Facturación Electrónica",
    category: ["Fiscal", "Web", "Móvil"],
    badge: "Crítico",
    problem: "Emitir, firmar y transmitir DTEs al Ministerio de Hacienda de El Salvador cumpliendo al 100% la normativa sin detener la venta si Hacienda se cae.",
    designDecisions: [
      "Orquestación en Laravel 12 con cálculos de precisión arbitraria (BCMath) para IVA 13%, retención 1% y percepción.",
      "Microservicio Spring Boot dedicado a la firma digital de alta velocidad en JWS RS512 con llaves RSA 4096.",
      "Soporte integral para DTE-01 (Factura), DTE-03 (Crédito Fiscal), DTE-05 (Nota Crédito), DTE-06, DTE-11 y DTE-14.",
      "Mecanismo de contingencia local con Dexie.js (IndexedDB) para encolar ventas offline y sincronizar por lotes."
    ],
    tags: ["Laravel 12", "Spring Boot", "React 19", "Dexie.js", "Jose4j", "PostgreSQL", "JWS RS512", "Flutter"],
    endpoints: "POST /api/v1/dte/firmar -> Token JWS compacto\nPOST /api/v1/dte/transmitir -> Enlace con MH El Salvador\nPOST /api/v1/dte/contingencia -> Almacenamiento en lote",
    schemaCode: "{\n  \"identificacion\": {\n    \"version\": 1,\n    \"ambiente\": \"00\",\n    \"tipoDte\": \"03\",\n    \"numeroControl\": \"DTE-03-00000000-000000000000001\",\n    \"codigoGeneracion\": \"C4B7E580-998A-421A-BDFA-5527A1DFB2A1\"\n  },\n  \"emisor\": { \"nit\": \"0614-010190-101-1\", \"nrc\": \"305980-4\" },\n  \"resumen\": { \"totalGravada\": 100.00, \"iva13\": 13.00, \"totalPagar\": 113.00 }\n}",
    deployCode: "# Backend Laravel 12\ncomposer install\nphp artisan migrate\nphp artisan serve --port 8000\n\n# Microservicio Spring Boot\nmvn clean package\njava -jar target/firmador-svfe-1.0.jar"
  },
  {
    id: "MOD-02",
    icon: "ScanLine",
    name: "Libro de Compras F-07 (OCR & PWA)",
    category: ["Fiscal", "Automatización", "Web"],
    badge: "Automatización",
    problem: "Los contadores pierden jornadas completas digitando más de 70 facturas de compra por lote para el Anexo 3 de la DGII, sufriendo descuadres frecuentes.",
    designDecisions: [
      "PWA en React con Web Workers para comprimir fotos de facturas en el cliente a menos de 800 KB antes de transmitirlas.",
      "Backend en FastAPI con OpenCV y PaddleOCR para lectura de códigos QR oficiales y extracción de montos gravados.",
      "Motor de validación con Pydantic v2 que audita la exclusividad entre NIT y DUI, formato numérico '0.00' y cuadratura fiscal.",
      "Generador de CSV de 21 columnas delimitado por punto y coma ';' sin encabezados, listo para importar en el portal DGII."
    ],
    tags: ["FastAPI", "React PWA", "PaddleOCR", "OpenCV", "Pydantic v2", "CSV DGII", "Web Workers"],
    endpoints: "POST /api/ocr/scan-ticket -> Procesa imagen con PaddleOCR\nPOST /api/f07/validate-batch -> Validación de cuadratura IVA\nGET  /api/f07/export-csv -> Generación de archivo Anexo 3",
    schemaCode: "// Especificación Anexo 3 DGII (CSV 21 Columnas):\n// [Fecha];[TipoDoc];[Serie];[NumDoc];[NIT_NRC];[Nombre];[Exenta];[Interna];[IVA];[Retencion];[DUI];[Operacion];[Clasificacion]...\n// Ejemplo generado:\n2026-10-15;03;SER-A;1052;06141010901021;COMERCIAL S.A.;0.00;100.00;13.00;0.00;;1;1;1;1;0.00;0.00;113.00;0;0;1",
    deployCode: "# Backend FastAPI con OCR\npython -m venv venv\nsource venv/bin/activate  # o venv\\Scripts\\activate\npip install -r requirements.txt\nuvicorn main:app --reload --port 8000"
  },
  {
    id: "MOD-03",
    icon: "Stethoscope",
    name: "Sistema Médico & Recetas Glassmorphism",
    category: ["Web", "Automatización"],
    badge: "Salud",
    problem: "Expedientes clínicos en papel traspapelados, recetas manuscritas ilegibles y dobles agendamientos de citas con médicos especialistas.",
    designDecisions: [
      "Frontend interactivo con diseño Glassmorphism, Bootstrap 5, alertas SweetAlert2 y generador de recetas PDF en alta fidelidad (escala 2.5x con html2pdf.js).",
      "Backend en Node.js y Express estructurado en MVC modular con control de concurrencia para evitar dobles citas médicas.",
      "Persistencia híbrida: Neon PostgreSQL para consultas operativas rápidas y Google Sheets sincronizado para auditoría médica.",
      "Autenticación JWT con roles, protección contra fuerza bruta y límite de 3 cambios de contraseña cada 24 horas."
    ],
    tags: ["Node.js", "Express", "Bootstrap 5", "html2pdf.js", "PostgreSQL Neon", "JWT", "SweetAlert2"],
    endpoints: "GET  /api/expedientes/:id -> Historial clínico completo\nPOST /api/citas/agendar -> Validación de disponibilidad médica\nPOST /api/recetas/export-pdf -> Renderizado de receta en 2.5x",
    schemaCode: "CREATE TABLE citas (\n  id SERIAL PRIMARY KEY,\n  paciente_id INT REFERENCES pacientes(id),\n  medico_id INT NOT NULL,\n  fecha_hora TIMESTAMP NOT NULL,\n  estado VARCHAR(20) DEFAULT 'AGENDADA', -- AGENDADA, PERDIDA, ATENDIDA\n  CONSTRAINT unique_medico_slot UNIQUE (medico_id, fecha_hora)\n);",
    deployCode: "# Node.js Backend\nnpm install\nnpm run dev\n# Servidor iniciado en http://localhost:5000"
  },
  {
    id: "MOD-04",
    icon: "Package",
    name: "Control de Inventario Botiquín FEFO/PEPS",
    category: ["Web", "Infraestructura"],
    badge: "Logística",
    problem: "Pérdidas de dinero por medicamentos vencidos en almacén y dificultad contable para conciliar el costo de despacho real.",
    designDecisions: [
      "Motor algorítmico dual: FEFO (First Expired, First Out) para la extracción física del lote y PEPS para la valorización contable.",
      "React + TypeScript conectado en tiempo real con Google Sheets como base de datos relacional mediante Google Apps Script (JSON-RPC).",
      "Semáforo predictivo de caducidad: Alerta Crítica (<30 días), Alerta Preventiva (<90 días) y Stock Óptimo.",
      "Contenedor Docker multi-etapa con servidor Nginx de alto rendimiento, preparado para Kubernetes con Kustomize."
    ],
    tags: ["React 19", "TypeScript", "Google Apps Script", "Google Sheets API", "Docker", "Kubernetes", "FEFO/PEPS"],
    endpoints: "POST /macros/s/AKfyc.../exec\nPayload: {\n  \"action\": \"registrar_movimiento\",\n  \"tipo\": \"DESPACHO_FEFO\",\n  \"productoId\": \"MED-102\",\n  \"cantidad\": 5\n}",
    schemaCode: "// Hojas Relacionales en Google Sheets:\n// 1. PRODUCTOS (id, nombre, stock_actual, stock_min)\n// 2. LOTES (id, producto_id, fecha_vencimiento, saldo)\n// 3. MOVIMIENTOS (id, tipo, lote_id, costo_unitario, timestamp)\n// 4. AUDITORIA (usuario, operacion, status)",
    deployCode: "# Despliegue con Docker\ndocker build -t botiquin-app:latest .\ndocker run -p 8080:80 botiquin-app:latest"
  },
  {
    id: "MOD-05",
    icon: "MailSearch",
    name: "CreaPx · Recolector de Facturas 2026",
    category: ["Escritorio", "Automatización"],
    badge: "Desktop",
    problem: "Horas hombre desperdiciadas buscando, descargando y organizando facturas XML, JSON y PDF dispersas en múltiples bandejas de correo.",
    designDecisions: [
      "Aplicación de escritorio nativa en PySide6 (Qt) con procesamiento multihilo mediante QThread para descarga asíncrona sin congelar la UI.",
      "Conexión segura por IMAP SSL que filtra solo remitentes autorizados y verifica duplicados mediante Message-ID.",
      "Sistema de licenciamiento criptográfico atado a la huella de hardware (BIOS + MAC + Disco con SHA-256) con ventana de gracia offline de 72 horas.",
      "Soporte de modo silencioso (headless) con flag `--collect` para programar recolecciones desatendidas con el Programador de Tareas."
    ],
    tags: ["Python 3", "PySide6 (Qt)", "IMAP SSL", "Neon PostgreSQL", "QThread", "Cryptography SHA-256"],
    endpoints: "CLI Execution:\npython main.py             # Modo interactivo GUI\npython main.py --collect   # Modo desatendido en background\npython main.py --status    # Diagnóstico de licencias",
    schemaCode: "CREATE TABLE downloaded_messages (\n  id SERIAL PRIMARY KEY,\n  message_id VARCHAR(255) UNIQUE NOT NULL,\n  sender_email VARCHAR(150) NOT NULL,\n  fecha_recepcion TIMESTAMP NOT NULL,\n  archivos_adjuntos JSONB,\n  procesado BOOLEAN DEFAULT TRUE\n);",
    deployCode: "# Instalación y arranque en Windows / Linux\npython -m venv env\nenv\\Scripts\\activate\npip install -r requirements.txt\npython main.py"
  },
  {
    id: "MOD-06",
    icon: "Calculator",
    name: "P&G Contadores · Conversor JSON DTE a Excel",
    category: ["Web", "Automatización"],
    badge: "Finanzas",
    problem: "Los despachos contables reciben lotes de facturas en JSON y pasan días digitando manualmente los registros a hojas de cálculo de Excel.",
    designDecisions: [
      "Interfaz React 19 con arrastrar y soltar (Drag & Drop) que procesa decenas de archivos JSON de DTE en paralelo de manera instantánea.",
      "Integración con SheetJS (xlsx) para formatear y calcular columnas de IVA, montos brutos y retenciones automáticamente.",
      "Exportación en un clic hacia hojas de cálculo Excel (.xlsx), CSV nativo o impresión directa con estilos adaptados al navegador.",
      "Gestión de sesiones segura en localStorage con migración planificada a autenticación centralizada por JWT."
    ],
    tags: ["React 19", "Vite", "Tailwind CSS", "SheetJS (xlsx)", "DTE Parser", "JSON Converter"],
    endpoints: "Procesamiento 100% en el cliente (Browser Sandbox):\nFileDrop -> JSON.parse -> DTE Normalizer -> SheetJS Workbook Export",
    schemaCode: "// Mapeo de DTE a Fila de Excel:\n{\n  \"Fecha\": dte.identificacion.fecEmi,\n  \"DTE_Tipo\": dte.identificacion.tipoDte,\n  \"Receptor_NIT\": dte.receptor.nit || dte.receptor.nrc,\n  \"Monto_Gravado\": dte.resumen.totalGravada,\n  \"IVA_Debito\": dte.resumen.tributos[0].valor\n}",
    deployCode: "# Frontend React 19\nnpm install\nnpm run build\nnpm run preview"
  },
  {
    id: "MOD-07",
    icon: "Server",
    name: "API Agente Contable Multi-Tenant",
    category: ["Fiscal", "Automatización"],
    badge: "Core API",
    problem: "Procesar y administrar los DTEs de múltiples clientes de despachos contables en una sola API sin riesgo de fuga o colisión de datos.",
    designDecisions: [
      "Arquitectura basada en funcionalidades (Feature-Based / Colocation) en FastAPI: carpetas autónomas con model, schema, service y router.",
      "Autenticación robusta JWT con encriptación Bcrypt e inyección de datos clave en el token: `is_admin`, `empresa_id` y `nitEmpresa`.",
      "Persistencia relacional desacoplada con SQLAlchemy ORM: compatible tanto con SQLite local como con PostgreSQL en Neon DB Serverless.",
      "Documentación viva auto-generada mediante especificación OpenAPI 3.0 (Swagger UI y ReDoc interactivos)."
    ],
    tags: ["FastAPI", "Python 3", "SQLAlchemy", "PostgreSQL Neon", "JWT", "Bcrypt", "OpenAPI"],
    endpoints: "POST /auth/login -> Retorna JWT con payload de empresa\nGET  /health -> Diagnóstico vital de API y conexión a BD\nGET  /api/v1/empresas -> Listado multi-tenant aislado",
    schemaCode: "class Empresa(Base):\n    __tablename__ = 'empresas'\n    id = Column(Integer, primary_key=True)\n    nit = Column(String(14), unique=True, nullable=False)\n    razon_social = Column(String(200), nullable=False)\n    is_active = Column(Boolean, default=True)",
    deployCode: "# Arranque del servidor de alto rendimiento\nuvicorn main:app --reload --host 0.0.0.0 --port 10000\n# Acceso a docs en http://127.0.0.1:10000/docs"
  },
  {
    id: "MOD-08",
    icon: "Truck",
    name: "Gas Flama · Despacho Satelital de Gas",
    category: ["Móvil"],
    badge: "Telemetría",
    problem: "Falta de coordinación en la distribución de cilindros de gas a domicilio y ausencia de visibilidad en tiempo real de los repartidores.",
    designDecisions: [
      "Aplicación móvil y web en Flutter con arquitectura limpia BLoC / Cubit para un manejo de estado reactivo y predecible.",
      "Integración de mapas interactivos con OpenStreetMap (Leaflet/Flutter Map) y captura de geolocalización en segundo plano con Geolocator.",
      "Canal de comunicación bidireccional en tiempo real con WebSockets para actualizar el estado del pedido (Asignado, En Camino, Entregado).",
      "Seguridad basada en JWT para autenticar repartidores y clientes en cada evento de telemetría."
    ],
    tags: ["Flutter", "BLoC / Cubit", "OpenStreetMap", "WebSockets", "Geolocator", "JWT", "Dart"],
    endpoints: "WSS /ws/orders/tracking/:orderId -> Telemetría en vivo\nPOST /api/orders/assign -> Asignación automática por cercanía\nPUT  /api/driver/status -> Online/Offline",
    schemaCode: "// Evento WebSocket de Telemetría (JSON):\n{\n  \"order_id\": \"ORD-9821\",\n  \"driver_id\": \"DRV-44\",\n  \"latitude\": 13.6989,\n  \"longitude\": -89.1914,\n  \"status\": \"EN_CAMINO\",\n  \"timestamp\": 1730592000\n}",
    deployCode: "# Flutter App\nflutter pub get\nflutter run -d chrome  # o dispositivo Android físico"
  },
  {
    id: "MOD-09",
    icon: "Globe",
    name: "Plataforma Institucional CreaPx",
    category: ["Web"],
    badge: "Web SPA",
    problem: "Presentar formalmente el catálogo de servicios de CreaPx, soluciones por rubro y portafolio interactivo para convertir visitantes en clientes.",
    designDecisions: [
      "Single Page Application moderna en React 19 con Vite, Tailwind CSS y navegación reactiva mediante React Router v7.",
      "Componente de auditoría y scroll automático que registra cada cambio de vista en Google Analytics 4 mediante llamadas gtag.",
      "Formulario de contacto con validación en tiempo real y despacho directo a bandeja de correo mediante integración con EmailJS.",
      "Botón flotante con enlace profundo hacia WhatsApp empresarial para iniciar conversaciones preconfiguradas con prospectos."
    ],
    tags: ["React 19", "Vite", "Tailwind CSS", "React Router", "EmailJS", "Google Analytics 4"],
    endpoints: "EmailJS REST Integration:\nPOST https://api.emailjs.com/api/v1.0/email/send\nGA4 PageView Dispatcher: window.gtag('event', 'page_view')",
    schemaCode: "// Estado del Formulario React:\ninterface ContactPayload {\n  nombre: string;       // Mínimo 3 caracteres\n  email: string;        // Expresión regular RFC 5322\n  mensaje: string;      // Mínimo 10 caracteres\n}",
    deployCode: "# Desarrollo local\nnpm install\nnpm run dev\n# Despliegue en producción\nnpm run build && vercel --prod"
  },
  {
    id: "MOD-10",
    icon: "Wrench",
    name: "Mantenimiento Preventivo & Optimización Hardware",
    category: ["Infraestructura"],
    badge: "Hardware TI",
    problem: "Equipos de oficina y servidores lentos, con polvo acumulado y sobrecalentamiento térmico que causa cierres forzados y degradación prematura.",
    designDecisions: [
      "Protocolo integral de diagnóstico inicial: chequeo de sectores SMART de discos duros, estado de memoria RAM y curva de temperatura de CPU/GPU.",
      "Limpieza física profunda antiestática y sustitución por compuesto térmico de alta conductividad (>8.5 W/mK).",
      "Optimización lógica del sistema operativo: limpieza de temporales, ajuste de servicios de inicio y políticas de energía.",
      "Galería fotográfica interactiva de antes/después integrada en el portafolio para garantizar transparencia ante los clientes de CreaPx."
    ],
    tags: ["Diagnóstico Hardware", "Pasta Térmica", "Optimización SO", "Mantenimiento Preventivo", "Infraestructura TI"],
    endpoints: "Checklist de Verificación Operativa:\n1. Medición Térmica Previa (HWMonitor)\n2. Test de Memoria (MemTest86)\n3. Curva de Descenso Térmico Post-Servicio",
    schemaCode: "// Parámetros de Rendimiento Auditados:\n{\n  \"temp_reposo_anterior\": \"58°C\",\n  \"temp_reposo_posterior\": \"39°C\",\n  \"reduccion_delta\": \"-19°C\",\n  \"estado_disco\": \"100% Salud (0 Sectores Reasignados)\"\n}",
    deployCode: "# Procedimiento Físico & Diagnóstico\nUtilización de pulsera antiestática ESD\nAspiración y soplado con filtro HEPA\nAplicación en punto central de pasta térmica de micro-partículas"
  }
];

export const CATEGORIES = ["Todos", "Fiscal", "Web", "Móvil", "Escritorio", "Automatización", "Infraestructura"];

// ==========================================
// CATÁLOGO DE EVIDENCIA REAL DE TRABAJO EN CAMPO
// Clasificación técnica de proyectos ejecutados
// ==========================================
export const EVIDENCE_CATEGORIES = [
  { id: "todos", label: "Todas las Evidencias", icon: "photo_library", count: 25 },
  { id: "redes", label: "Redes & Cableado Estructurado", icon: "lan", count: 5 },
  { id: "racks", label: "Racks & Telecomunicaciones", icon: "dns", count: 5 },
  { id: "certificacion", label: "Patch Panels & Certificación", icon: "verified", count: 6 },
  { id: "wifi-energia", label: "Wi-Fi Empresarial & Energía", icon: "wifi", count: 5 },
  { id: "hardware", label: "Soporte IT & Mantenimiento PC", icon: "memory", count: 4 }
];

export const WORK_EVIDENCE_ITEMS = [
  // --- REDES & CABLEADO EN ALTURAS ---
  {
    id: "EVD-01",
    category: "redes",
    categoryLabel: "Cableado Estructurado",
    title: "Tendido de cable UTP Cat6 en cerchas industriales",
    client: "Centro Escolar Caserío El Milagro (MINED) · Tacuba, Ahuachapán",
    technician: "Cristian Cajul & Equipo de Campo",
    description: "Tendido aéreo de cableado de red categoría 6 sobre cerchas metálicas y vigas estructurales, protegido con ducto flexible corrugado azul para interconectar aulas y oficinas administrativas.",
    specs: ["UTP Cat6 100% Cobre", "Ducto Flexible Corrugado Azul", "Trabajo en Alturas con EPP", "Fijación con Abrazaderas"],
    image: "/evidence/redes-cableado-alturas-cerchas.jpg",
    badge: "Instalación en Altura"
  },
  {
    id: "EVD-02",
    category: "redes",
    categoryLabel: "Canalización de Red",
    title: "Instalación de ductería corrugada en cubierta superior",
    client: "Centro Escolar Caserío El Milagro (MINED) · Tacuba, Ahuachapán",
    technician: "Equipo de Infraestructura Desarrollador JR",
    description: "Canalización superior fijada en estructuras metálicas para proteger las troncales de red de roedores, polvo y radiación térmica, garantizando durabilidad y aislamiento normativo.",
    specs: ["Ductería Corrugada Industrial", "Cajas de Paso Metálicas", "Cero Pérdida de Paquetes", "Norma TIA-569-B"],
    image: "/evidence/redes-instalacion-ducteria-techo.jpg",
    badge: "Canalización Normativa"
  },
  {
    id: "EVD-03",
    category: "redes",
    categoryLabel: "Canalización de Red",
    title: "Bajantes y acometidas de tubería hacia gabinetes murales",
    client: "Centro Escolar Caserío El Milagro (MINED) · Tacuba, Ahuachapán",
    technician: "Cristian Cajul & Enmanuel Sánchez",
    description: "Bajada vertical de ductería hacia el cuarto de comunicaciones con curvas suaves para mantener el radio de curvatura reglamentario de cables UTP y evitar atenuación de señal.",
    specs: ["Bajantes con Radio de Giro Seguro", "Acabado Limpio en Pared", "Ingreso Superior a Rack", "Etiquetado de Troncales"],
    image: "/evidence/redes-canalizacion-tuberias-rack.jpg",
    badge: "Acometida Estructural"
  },
  {
    id: "EVD-04",
    category: "redes",
    categoryLabel: "Identificación de Proyecto",
    title: "Placa institucional y acreditación del proyecto gubernamental",
    client: "Centro Escolar Caserío Hda. El Milagro, Tacuba, Ahuachapán (Gobierno de El Salvador)",
    technician: "Desarrollador JR / CreaPx",
    description: "Evidencia de sitio oficial en el Centro Escolar Tacuba, Ahuachapán, acreditando la intervención técnica y ejecución de infraestructura tecnológica para el sector educativo.",
    specs: ["MINED El Salvador", "Ahuachapán", "Infraestructura Educativa", "Acreditación Oficial"],
    image: "/evidence/proyecto-centro-escolar-tacuba-mined.jpg",
    badge: "Proyecto Acreditado"
  },
  {
    id: "EVD-05",
    category: "redes",
    categoryLabel: "Seguridad Industrial",
    title: "Protocolo de Seguridad Ocupacional y Equipos de Protección (EPP)",
    client: "Centro Escolar Caserío El Milagro · Tacuba",
    technician: "Técnicos de Campo Desarrollador JR",
    description: "Uso estricto de guantes anticorte dieléctricos Klein Tools, calzado de seguridad y protocolos preventivos en trabajos de altura y manipulación de acometidas eléctricas.",
    specs: ["Guantes Dieléctricos Klein Tools", "Calzado Industrial", "Norma de Seguridad El Salvador", "Cero Incidentes"],
    image: "/evidence/seguridad-industrial-epp-guantes.jpg",
    badge: "Seguridad Ocupacional"
  },

  // --- RACKS & TELECOMUNICACIONES ---
  {
    id: "EVD-06",
    category: "racks",
    categoryLabel: "Centro de Cómputo",
    title: "Cuarto de telecomunicaciones con doble gabinete mural instalado",
    client: "Centro Escolar Caserío El Milagro · Tacuba, Ahuachapán",
    technician: "Cristian Cajul & Equipo de Infraestructura",
    description: "Vista panorámica del centro de cómputo terminado con dos gabinetes rackeables Nexxt Solutions de 19 pulgadas, cableado en cascada superior y sistemas de respaldo Forza.",
    specs: ["Doble Rack Mural 19 Pulgadas", "Nexxt Solutions", "Puerta de Cristal Templado", "Ventilación Forzada"],
    image: "/evidence/rack-cuarto-comunicaciones-panoramica.jpg",
    badge: "Proyecto Integral"
  },
  {
    id: "EVD-07",
    category: "racks",
    categoryLabel: "Gabinete de Comunicaciones",
    title: "Gabinete mural cerrado Nexxt Solutions con cerradura de seguridad",
    client: "Centro Escolar Caserío El Milagro · Tacuba",
    technician: "Cristian Cajul (Fundador)",
    description: "Gabinete cerrado con acceso restringido mediante llave, protegiendo switches, patch panels y router de accesos no autorizados o desconexiones accidentales.",
    specs: ["Cerradura con Llave de Seguridad", "Frontal de Vidrio Templado", "Carga Estática Certificada", "Nexxt Solutions"],
    image: "/evidence/rack-gabinete-nexxt-cerrado-frontal.jpg",
    badge: "Seguridad Física"
  },
  {
    id: "EVD-08",
    category: "racks",
    categoryLabel: "Puesta a Tierra",
    title: "Gabinete mural abierto y conexión a tierra física de chasis",
    client: "Centro Escolar Caserío El Milagro · Tacuba",
    technician: "Cristian Cajul & Técnico Electricista",
    description: "Instalación de barra de aterramiento y cable verde-amarillo conectado al chasis del rack para disipación de descargas atmosféricas y estática, protegiendo los equipos de red.",
    specs: ["Barra de Puesta a Tierra", "Conductor Verde/Amarillo Calibre 10", "Protección contra Sobretensiones", "Norma NEC / IEEE"],
    image: "/evidence/rack-mural-abierto-puesta-tierra.jpg",
    badge: "Protección a Tierra"
  },
  {
    id: "EVD-09",
    category: "racks",
    categoryLabel: "Montaje Estructural",
    title: "Anclaje mecánico y fijación de gabinete en pared de mampostería",
    client: "Centro Escolar Caserío El Milagro · Tacuba",
    technician: "Equipo Técnico Desarrollador JR",
    description: "Anclaje de alta resistencia con pernos expansivos sobre pared de bloque sólido, asegurando soporte estructural para todo el equipamiento activo y cableado.",
    specs: ["Pernos Expansivos de 3/8\"", "Nivelación Láser de Precisión", "Capacidad de Carga >60 kg", "Fijación Sísmica"],
    image: "/evidence/tecnico-montaje-rack-pared.jpg",
    badge: "Anclaje Sísmico"
  },
  {
    id: "EVD-10",
    category: "racks",
    categoryLabel: "Equipamiento Activo",
    title: "Integración de switches Link, patch panel y regleta PDU energizada",
    client: "Centro Escolar Caserío El Milagro · Tacuba",
    technician: "Cristian Cajul (Fundador)",
    description: "Gabinete energizado con PDU horizontal de 8 tomas, switches Gigabit Link, patch panels y organizadores horizontales con indicadores LED de actividad de enlace.",
    specs: ["Switches Gigabit Link", "PDU Horizontal con Switch", "Organizador Frontal de 1U", "Indicadores LED Activos"],
    image: "/evidence/rack-equipamiento-switches-ups-link.jpg",
    badge: "Energizado y Activo"
  },

  // --- PATCH PANELS & CERTIFICACIÓN ---
  {
    id: "EVD-11",
    category: "certificacion",
    categoryLabel: "Rotulado & Normativa",
    title: "Patch panel rotulado con etiquetas de enlace AP1 a AP8 y Firewall",
    client: "Centro Escolar Caserío El Milagro · Tacuba",
    technician: "Cristian Cajul & Enmanuel Sánchez",
    description: "Rotulado industrial con etiquetas de vinilo amarillo identificando cada punto de red (AP1, AP2, AP5, AP6, AP7, AP8, FIREWALL) conforme al estándar ANSI/TIA-606-B.",
    specs: ["ANSI/TIA-606-B Etiquetado", "Identificación AP1 a AP8", "Enlace a Firewall Dedicado", "Mapeo Rápido en Falla"],
    image: "/evidence/patch-panel-rotulado-etiquetas-ap.jpg",
    badge: "Norma TIA-606-B"
  },
  {
    id: "EVD-12",
    category: "certificacion",
    categoryLabel: "Testing de Red",
    title: "Verificación de continuidad y mapa de cables con tester digital",
    client: "Centro Escolar Caserío El Milagro · Tacuba",
    technician: "Cristian Cajul (Fundador)",
    description: "Pruebas de continuidad hilo a hilo (pines 1 al 8 y GND) con analizador digital de red remoto, comprobando cero cruces, circuitos abiertos o pérdida de paquetes.",
    specs: ["Tester Digital RJ45 Remoto", "Verificación 8 Pines + Shield", "100% Continuidad Certificada", "Cero Paquetes Perdidos"],
    image: "/evidence/certificacion-testeo-cable-red-rj45.jpg",
    badge: "Testeo Hilo a Hilo"
  },
  {
    id: "EVD-13",
    category: "certificacion",
    categoryLabel: "Terminación de Cables",
    title: "Ponchado y ensamblado de conectores Keystone RJ45 Cat6",
    client: "Centro Escolar Caserío El Milagro · Tacuba",
    technician: "Técnico Especialista de Campo",
    description: "Ponchado de precisión con herramienta de impacto sobre bloques IDC 110 en conectores Keystone, asegurando contacto de baja resistencia y preservación de pares trenzados.",
    specs: ["Herramienta de Impacto 110", "Norma T568B de Cableado", "Mínimo Destrenzado (<13mm)", "Baja Resistencia de Contacto"],
    image: "/evidence/tecnico-ponchado-patch-panel-keystones.jpg",
    badge: "Terminación T568B"
  },
  {
    id: "EVD-14",
    category: "certificacion",
    categoryLabel: "Peinado de Cables",
    title: "Peinado y ruteo interno de mazos UTP con cinchos organizadores",
    client: "Centro Escolar Caserío El Milagro · Tacuba",
    technician: "Equipo de Infraestructura Desarrollador JR",
    description: "Peinado ordenado de los haces de cable UTP dentro del bastidor para evitar cruces, facilitar ventilación y permitir ampliaciones futuras sin desconexiones.",
    specs: ["Cinchos de Agrupamiento", "Ruteo Trasero de Bastidor", "Flujo de Aire Optimizado", "Estética de Ingeniería"],
    image: "/evidence/peinado-cableado-utp-ordenadores.jpg",
    badge: "Peinado Impecable"
  },
  {
    id: "EVD-15",
    category: "certificacion",
    categoryLabel: "Componentes Pasivos",
    title: "Conectores modulares Keystone Jack RJ45 Nexxt Solutions",
    client: "Lote de Componentes Certificados",
    technician: "Desarrollador JR",
    description: "Uso de materiales certificados de primera línea con pines chapados en oro de 50 micras para prevenir corrosión y garantizar transmisión de 1000 Mbps sostenida.",
    specs: ["Pines Oro 50 Micras", "Carcasa Ignífuga UL94V-0", "Compatibilidad Gigabit Cat6", "Nexxt Solutions"],
    image: "/evidence/componente-keystone-jack-rj45-nexxt.jpg",
    badge: "Material Certificado"
  },
  {
    id: "EVD-16",
    category: "certificacion",
    categoryLabel: "Hardware Pasivo",
    title: "Ensamble y preparación de Patch Panel de 24 puertos modular",
    client: "Centro Escolar Caserío El Milagro · Tacuba",
    technician: "Equipo Técnico",
    description: "Armado de patch panel metálico modular de 24 puertos en rack de 1U antes de la inserción de los módulos keystone y cables de red correspondientes.",
    specs: ["Chasis Metálico 1U 19 Pulgadas", "24 Puertos Modulares", "Numeración Serigrafiada", "Barra Organizadora Trasera"],
    image: "/evidence/ensamble-patch-panel-24-puertos.jpg",
    badge: "Ensamble de 24 Puertos"
  },

  // --- WI-FI EMPRESARIAL & ENERGÍA ---
  {
    id: "EVD-17",
    category: "wifi-energia",
    categoryLabel: "Wi-Fi Empresarial",
    title: "Punto de Acceso Wi-Fi Huawei fijado en altura con caja octogonal",
    client: "Centro Escolar Caserío El Milagro · Tacuba",
    technician: "Cristian Cajul & Enmanuel Sánchez",
    description: "Access Point empresarial Huawei fijado en soporte metálico sobre caja de registro octogonal, alimentado por PoE (Power over Ethernet) a través del cable UTP.",
    specs: ["Huawei Enterprise AP", "Alimentación PoE 802.3at", "Doble Banda 2.4 GHz / 5 GHz", "Caja Octogonal de Protección"],
    image: "/evidence/ap-wifi-techo-huawei-caja-registro.jpg",
    badge: "Wi-Fi PoE"
  },
  {
    id: "EVD-18",
    category: "wifi-energia",
    categoryLabel: "Wi-Fi Empresarial",
    title: "Cobertura inalámbrica en aulas escolares y áreas comunes",
    client: "Centro Escolar Caserío El Milagro · Tacuba",
    technician: "Equipo de Telecomunicaciones Desarrollador JR",
    description: "Despliegue de señal inalámbrica de alta densidad para soportar conexión simultánea de laptops escolares, tablets y computadoras del personal docente sin saturación.",
    specs: ["Soporte Multi-Usuario MIMO", "Roaming Transparente", "Cobertura 360 Grados", "Gestión Centralizada"],
    image: "/evidence/ap-wifi-instalado-cobertura-aulas.jpg",
    badge: "Alta Concurrencia"
  },
  {
    id: "EVD-19",
    category: "wifi-energia",
    categoryLabel: "Respaldo Eléctrico",
    title: "Suministro de energía ininterrumpida UPS Forza para switches",
    client: "Centro Escolar Caserío El Milagro · Tacuba",
    technician: "Cristian Cajul & Técnico Eléctrico",
    description: "UPS interactivo Forza instalado en la base del gabinete de red para proteger los switches y puntos de acceso contra cortes de energía, caídas de voltaje y picos.",
    specs: ["UPS Forza Interactivo", "Autonomía de Respaldo", "Regulación Automática AVR", "Protección contra Picos"],
    image: "/evidence/ups-forza-respaldo-electrico-switches.jpg",
    badge: "Protección Forza UPS"
  },
  {
    id: "EVD-20",
    category: "wifi-energia",
    categoryLabel: "Enrutamiento",
    title: "Router Huawei de alto rendimiento montado en soporte mural",
    client: "Centro Escolar Caserío El Milagro · Tacuba",
    technician: "Cristian Cajul (Fundador)",
    description: "Instalación de router Huawei con antenas omnidireccionales de alta ganancia para gestión de DHCP, balanceo de carga y aislamiento de VLANs por salón.",
    specs: ["Router Huawei Alta Ganancia", "Aislamiento de VLANs", "Servidor DHCP Dinámico", "Soporte Mural Dedicado"],
    image: "/evidence/router-huawei-soporte-mural.jpg",
    badge: "Enrutamiento VLAN"
  },
  {
    id: "EVD-21",
    category: "wifi-energia",
    categoryLabel: "Fibra Óptica",
    title: "Conexión de enlace de fibra óptica con patch cord monomodo",
    client: "Centro Escolar Caserío El Milagro · Tacuba",
    technician: "Equipo de Telecomunicaciones",
    description: "Acometida de fibra óptica con cable patch cord monomodo de recubrimiento amarillo conectada a la bandeja de distribución para el enlace troncal de internet.",
    specs: ["Fibra Monomodo 9/125um", "Conectores SC-APC / LC", "Cero Inmunidad al Ruido", "Troncal de Alta Velocidad"],
    image: "/evidence/enlace-fibra-optica-patch-cord-amarillo.jpg",
    badge: "Troncal de Fibra"
  },

  // --- HARDWARE & MANTENIMIENTO PC (ImgMantenimiento) ---
  {
    id: "EVD-22",
    category: "hardware",
    categoryLabel: "Diagnóstico Hardware",
    title: "Diagnóstico microscópico y desmontaje de motherboard laptop Lenovo",
    client: "Taller de Mantenimiento Corporativo Desarrollador JR",
    technician: "Gerardo Tepas (Soporte IT) & Cristian Cajul",
    description: "Desarme técnico completo de laptop Lenovo para inspección visual de pistas, reguladores de voltaje PWM, batería y estado del sistema de refrigeración.",
    specs: ["Herramientas Antiestáticas ESD", "Inspección de Circuitos PWM", "Desmontaje Seguro de Flex", "Lenovo ThinkPad / IdeaPad"],
    image: "/evidence/hardware-diagnostico-motherboard-lenovo.jpg",
    badge: "Diagnóstico Avanzado"
  },
  {
    id: "EVD-23",
    category: "hardware",
    categoryLabel: "Upgrade de Memoria",
    title: "Actualización de memoria RAM DDR4 Ramaxel para alto rendimiento",
    client: "Servicio a Equipo Contable Empresarial",
    technician: "Gerardo Tepas (Soporte IT)",
    description: "Ampliación de memoria RAM con módulos certificados DDR4 para evitar saturación de memoria en multitarea y agilizar ejecución de software administrativo y facturación DTE.",
    specs: ["Módulo DDR4 3200MHz", "Test MemTest86 0 Errores", "Baja Latencia CL", "Garantía de Compatibilidad"],
    image: "/evidence/hardware-upgrade-ram-ddr4-ramaxel.jpg",
    badge: "Upgrade de Memoria"
  },
  {
    id: "EVD-24",
    category: "hardware",
    categoryLabel: "Almacenamiento NVMe",
    title: "Instalación de unidad SSD NVMe M.2 de estado sólido ultrarrápido",
    client: "Servicio de Optimización y Velocidad",
    technician: "Gerardo Tepas (Soporte IT)",
    description: "Sustitución de disco mecánico tradicional por SSD NVMe PCIe con velocidades de lectura de más de 2400 MB/s, reduciendo los tiempos de arranque a menos de 10 segundos.",
    specs: ["Interfaz PCIe NVMe Gen3x4", "Lectura >2400 MB/s", "Migración de SO sin Pérdida", "Arranque en 8 Segundos"],
    image: "/evidence/hardware-ssd-nvme-m2-alta-velocidad.jpg",
    badge: "SSD NVMe M.2"
  },
  {
    id: "EVD-25",
    category: "hardware",
    categoryLabel: "Refrigeración Térmica",
    title: "Sustitución de pasta térmica de alto rendimiento en CPU y GPU",
    client: "Mantenimiento Preventivo de Servidor / Laptop",
    technician: "Gerardo Tepas (Soporte IT)",
    description: "Remoción de pasta térmica seca degradada y aplicación de nuevo compuesto con micropartículas de carbono de conductividad >8.5 W/mK en CPU y disipador de cobre.",
    specs: ["Conductividad >8.5 W/mK", "Descenso de 19°C en Carga", "Limpieza de Disipador de Cobre", "Eliminación de Thermal Throttling"],
    image: "/evidence/hardware-reemplazo-pasta-termica-cpu-disipador.jpg",
    badge: "Curva Térmica -19°C"
  }
];
