import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");

const ROUTES = [
  {
    path: "servicios",
    title: "Servicios · Facturación DTE, Software a Medida y Automatización · Desarrollador JR",
    description: "Servicios especializados en Facturación Electrónica DTE Ministerio de Hacienda, sistemas de gestión a la medida y automatización de procesos en El Salvador.",
    canonical: "https://desarrolladorjr.com/servicios",
    heading: "Servicios de Ingeniería de Software & Facturación DTE",
    summary: "Descubre nuestra oferta comercial especializada: Facturación Electrónica DTE homologada con Hacienda (JWS RS512), Sistemas de Software a la Medida (POS, inventarios FEFO/PEPS) y Automatización de Procesos & Integraciones para empresas salvadoreñas."
  },
  {
    path: "casos",
    title: "Casos de Éxito · Proyectos Implementados · Desarrollador JR",
    description: "Casos reales de ingeniería implementados en El Salvador: Facturación DTE con contingencia offline, infraestructura de telecomunicaciones y control de inventarios FEFO/PEPS.",
    canonical: "https://desarrolladorjr.com/casos",
    heading: "Casos de Éxito & Soluciones en Producción",
    summary: "Conoce proyectos reales en producción: contingencia offline para facturación tributaria, cableado estructurado e infraestructura de redes en el sector educativo, y sistemas de inventario con motor FEFO/PEPS para control estricto de mermas."
  },
  {
    path: "equipo",
    title: "Equipo Técnico & Fundador · Cristian Cajul · Desarrollador JR",
    description: "Perfil profesional del fundador Cristian Cajul y el equipo multidisciplinario de desarrollo, soporte IT y redes de Desarrollador JR en El Salvador.",
    canonical: "https://desarrolladorjr.com/equipo",
    heading: "El Equipo Técnico Detrás de Desarrollador JR",
    summary: "Conoce a Cristian Cajul (Fundador y Lead Software Engineer) y al equipo multidisciplinario con experiencia en desarrollo web, soporte IT, telecomunicaciones, cámaras y gestión operativa."
  },
  {
    path: "ingenieria",
    title: "Centro de Ingeniería · Arquitectura, Módulos y Calidad · Desarrollador JR",
    description: "Especificación técnica profunda de Desarrollador JR: arquitectura hexagonal, 10 módulos del sistema, stack tecnológico moderno y matriz de calidad.",
    canonical: "https://desarrolladorjr.com/ingenieria",
    heading: "Centro de Ingeniería y Especificación Técnica",
    summary: "Documentación y especificación formal de arquitectura hexagonal, catálogo de 10 módulos de software, stack tecnológico (FastAPI, React 19, PostgreSQL, Docker) y principios de calidad y contingencia."
  },
  {
    path: "contacto",
    title: "Contacto & Cotización · Cuéntanos tu Proyecto · Desarrollador JR",
    description: "Ponte en contacto con Desarrollador JR para cotizar tu sistema de Facturación Electrónica DTE o software a la medida en El Salvador. Atención directa por WhatsApp y formulario.",
    canonical: "https://desarrolladorjr.com/contacto",
    heading: "Contacto y Solicitud de Propuesta Comercial",
    summary: "Escríbenos directamente por WhatsApp (+503 7035 2834) o a través de nuestro formulario web para recibir asesoría técnica y cotización para tu empresa en El Salvador."
  }
];

function prerender() {
  const indexHtmlPath = path.join(distDir, "index.html");
  if (!fs.existsSync(indexHtmlPath)) {
    console.error("No se encontró dist/index.html para prerenderizar.");
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, "utf-8");

  for (const route of ROUTES) {
    const routeDir = path.join(distDir, route.path);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    let routeHtml = baseHtml;

    // Actualizar <title>
    routeHtml = routeHtml.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);

    // Actualizar meta description
    routeHtml = routeHtml.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${route.description}" />`
    );

    // Actualizar link canonical
    routeHtml = routeHtml.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${route.canonical}" />`
    );

    // Actualizar Open Graph URL y Título
    routeHtml = routeHtml.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${route.title}" />`
    );
    routeHtml = routeHtml.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${route.description}" />`
    );

    // Inyectar bloque semántico estático para robots y navegadores sin JS
    const semanticBlock = `
      <div id="ssr-route-content" class="sr-only">
        <h1>${route.heading}</h1>
        <p>${route.summary}</p>
        <p>Desarrollador JR · El Salvador · WhatsApp: +503 7035 2834 · Correo: creapxinnovacion@gmail.com</p>
      </div>
    `;

    routeHtml = routeHtml.replace(
      /<div id="ssr-hero-content" class="sr-only">[\s\S]*?<\/div>/i,
      semanticBlock
    );

    fs.writeFileSync(path.join(routeDir, "index.html"), routeHtml, "utf-8");
    console.log(`✓ Prerenderizado completado: /${route.path}/index.html`);
  }
}

prerender();
