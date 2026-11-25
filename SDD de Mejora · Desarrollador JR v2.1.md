# SDD de Mejora · Desarrollador JR v2.1

Nov 24, 2026 · @Someone

## 1. Resumen ejecutivo

La versión 2.1 convierte el sitio de Desarrollador JR, hoy un portafolio técnico llamativo, en una herramienta que consigue clientes de facturación DTE y sistemas a la medida.

El plan corrige 7 defectos visibles de interfaz, reduce el menú de 9 ítems a 4 más un botón de contacto, lleva la prueba de trabajo a primer plano y añade SEO técnico (Open Graph, canonical y prerenderizado).

Resultado esperado: un visitante entiende en 5 segundos qué se ofrece, ve casos reales y llega a contacto en un solo clic.

**Documento base:** SDD-JR-001 v2.0 (producción). Este documento lo extiende como SDD-JR-002, v2.1.

## 2. Diagnóstico del sitio actual

Se detectaron 10 hallazgos, 5 de prioridad alta. Se basan en la captura del hero y en los metadatos del sitio; las demás secciones deben revisarse antes de cerrar el alcance.

| ID | Hallazgo | Área | Prioridad |
| --- | --- | --- | --- |
| H-01 | El bloque "SDD-JR-001 · 2.0 (Producción)" se parte en 3 líneas, queda cortado arriba y abajo, y la píldora "Inicio" se le monta encima | UI | Alta |
| H-02 | El menú tiene 9 ítems más CTA; "Módulos (10)" se rompe en dos líneas y la fuente monoespaciada ocupa mucho ancho | UI | Alta |
| H-03 | El botón de WhatsApp muestra un punto negro sin función y tapa contenido en la esquina inferior | UI | Alta |
| H-04 | El hero habla el idioma de un documento de ingeniería (SDD, Módulos, Evidencia, Calidad), no el de un comprador | Contenido | Alta |
| H-05 | Sin Open Graph ni canonical visibles; el contenido se renderiza en el cliente | SEO | Alta |
| H-06 | Franja blanca de unos 5 px sobre el navbar | UI | Media |
| H-07 | El titular ocupa 4 líneas, deja "de" colgando y tiene un tracking tan cerrado que las letras casi se tocan | UI | Media |
| H-08 | El gris de los textos secundarios del navbar parece de bajo contraste (por verificar con WCAG AA) | Accesibilidad | Media |
| H-09 | El degradado azul a amarillo de "Facturación DTE" se ve turbio al centro y el amarillo compite con el CTA | UI | Baja |
| H-10 | El logo aparece dos veces: navbar y hero | UI | Baja |

## 3. Objetivos y métricas de éxito

El sitio v2.1 cumple su objetivo si logra 3 cosas: comunicar el servicio en 5 segundos, generar contactos medibles y pasar las auditorías técnicas básicas. Las metas son propuestas; la línea base se mide antes de empezar.

| Métrica | Línea base | Meta v2.1 |
| --- | --- | --- |
| Ítems del menú principal | 9 + CTA | 4 + CTA |
| Clics desde cualquier sección hasta contacto | por medir | 1 |
| Lighthouse Rendimiento (móvil) | por medir | ≥ 90 |
| Lighthouse Accesibilidad | por medir | ≥ 95 |
| Lighthouse SEO | por medir | ≥ 95 |
| LCP (carga del elemento principal) | por medir | ≤ 2,5 s |
| CLS (desplazamiento de diseño) | por medir | ≤ 0,1 |
| Contraste de texto | por medir | ≥ 4,5:1 (WCAG AA) |
| Vista previa al compartir por WhatsApp | sin imagen ni título propios | título, descripción e imagen 1200×630 |
| Casos de trabajo visibles en la portada | por verificar | mínimo 3 |
| Contactos por mes (formulario + WhatsApp) | por medir | definir meta tras 30 días de datos |

## 4. Alcance

El alcance cubre la interfaz, el contenido y la base técnica del sitio público. No incluye cambios al producto ni a los sistemas que se muestran como casos.

**Dentro del alcance**

- Corrección de los hallazgos H-01 a H-10
- Rediseño del navbar, el hero y el botón de WhatsApp
- Nueva arquitectura de información y reescritura del copy orientado a clientes
- Sección de casos con plantilla reutilizable
- Formulario de contacto "Cuéntame tu proyecto"
- SEO técnico, accesibilidad y rendimiento
- Medición de clics en contacto y WhatsApp

**Fuera del alcance**

- Cambios de marca o de logo (se conserva "JR" y su paleta azul)
- Blog, tienda o área de clientes
- Traducción a otros idiomas
- Rediseño de los sistemas mostrados como casos

## 5. Público objetivo y propuesta de valor

La propuesta de v2.1 es una sola frase: **facturación electrónica DTE y sistemas a la medida, hechos por un equipo de ingeniería**. La facturación DTE es el nicho con demanda concreta en El Salvador y el diferenciador frente a estudios generalistas.

| Segmento | Quién es | Qué necesita ver | Acción esperada |
| --- | --- | --- | --- |
| Primario | Dueños y administradores de negocios en El Salvador que deben emitir DTE | Que su facturación cumple la normativa y que alguien lo implementa y lo mantiene | Cotizar por formulario o WhatsApp |
| Secundario | Empresas que buscan un equipo para sistemas o automatización | Casos reales, tecnología y forma de trabajo | Pedir una reunión |
| Terciario | Otros desarrolladores y evaluadores | Arquitectura, calidad y evidencia técnica | Leer la sección de ingeniería |

Regla de diseño: lo que interesa al segmento primario va arriba; lo que interesa al terciario va en una sección propia, sin ocupar el menú principal.

## 6. Arquitectura de información

El menú pasa de 9 ítems a 4 más el botón de contacto, y el contenido técnico se agrupa en una sola sección "Ingeniería". El logo lleva a Inicio.

**Menú propuesto:** Servicios · Casos · Equipo · Ingeniería · \[Contáctanos\]

1. **Inicio** (logo): titular, subtítulo, 2 CTA y franja de confianza
2. **Servicios:** Facturación DTE, sistemas a la medida, automatización
3. **Casos:** 3 proyectos con problema, solución, tecnología y resultado
4. **Equipo:** el perfil de Cristian Cajul y el equipo multidisciplinario
5. **Ingeniería:** arquitectura, módulos, tecnología, calidad y evidencia, que hoy ocupan 5 ítems del menú
6. **Contacto:** formulario "Cuéntame tu proyecto", WhatsApp y correo

Equivalencia con el menú actual:

| Menú actual | Destino en v2.1 |
| --- | --- |
| Inicio | Logo |
| Perfil, Equipo | Equipo |
| Arquitectura, Módulos (10), Tecnología, Calidad, Evidencia | Ingeniería (pestañas o anclas internas) |
| (nuevo) | Servicios |
| (nuevo) | Casos |
| Contacto | Botón "Contáctanos" |

## 7. Requisitos funcionales

Son 10 requisitos; los 6 de prioridad alta forman la versión mínima publicable.

| ID | Requisito | Hallazgo | Prioridad |
| --- | --- | --- | --- |
| RF-01 | El bloque de versión ("SDD-JR-001 · 2.0") se muestra en una sola línea, sin recortes ni solapamiento, o se mueve al pie de página | H-01 | Alta |
| RF-02 | El menú principal tiene 4 ítems más el botón "Contáctanos", sin saltos de línea en escritorio | H-02 | Alta |
| RF-03 | En pantallas menores a 1100 px el menú pasa a un botón de hamburguesa con panel accesible | H-02 | Alta |
| RF-04 | El botón de WhatsApp no tapa contenido, no muestra el punto negro y en móvil es solo ícono | H-03 | Alta |
| RF-05 | El hero comunica el servicio en lenguaje de cliente, con 2 CTA: "Cotiza tu proyecto" y "Ver casos" | H-04 | Alta |
| RF-06 | La página incluye metadatos Open Graph, canonical y datos estructurados | H-05 | Alta |
| RF-07 | La sección Casos muestra mínimo 3 proyectos con la plantilla problema, solución, tecnología y resultado | H-04 | Media |
| RF-08 | El formulario "Cuéntame tu proyecto" tiene nombre, correo o WhatsApp, tipo de necesidad y mensaje, con confirmación de envío | H-04 | Media |
| RF-09 | Se elimina la franja blanca superior y se muestra una sola versión del logo por pantalla | H-06, H-10 | Media |
| RF-10 | Se registran los clics en "Contáctanos", WhatsApp y envío del formulario | Objetivo 3 | Media |

## 8. Requisitos no funcionales

Los umbrales se verifican en móvil con red lenta, que es el peor caso realista para el público primario.

| ID | Categoría | Requisito |
| --- | --- | --- |
| RNF-01 | Rendimiento | LCP ≤ 2,5 s, CLS ≤ 0,1 y Lighthouse móvil ≥ 90 |
| RNF-02 | Accesibilidad | Contraste ≥ 4,5:1 en texto normal; foco visible en todo elemento interactivo; navegación completa por teclado |
| RNF-03 | Accesibilidad | Enlace "Saltar al contenido", `aria-label` en botones solo ícono y `prefers-reduced-motion` respetado en animaciones |
| RNF-04 | SEO | `lang="es-SV"`, título único de 50–60 caracteres, descripción de 140–160, `sitemap.xml` y `robots.txt` |
| RNF-05 | SEO | El HTML inicial contiene el texto del hero y las secciones, sin depender de JavaScript para leerlo |
| RNF-06 | Compatibilidad | Correcto en 360, 768, 1280, 1366 y 1920 px de ancho, y en las 2 últimas versiones de Chrome, Safari, Edge y Firefox |
| RNF-07 | Seguridad | Formulario con campo trampa antispam y validación en servidor; correo y teléfono no expuestos en texto plano si es posible |
| RNF-08 | Mantenibilidad | Tokens de diseño (color, espacio, tipografía) en un solo archivo y componentes reutilizables para casos y servicios |

## 9. Diseño de interfaz

Se conserva la identidad actual (fondo azul marino #08101E, cuadrícula sutil, azul de marca y CTA amarillo) y se corrige cómo se aplica. Las medidas son puntos de partida para validar en pantalla.

| Componente | Especificación |
| --- | --- |
| Navbar | Altura fija de 72 px; `white-space: nowrap` en todos los ítems; tipografía sans (Inter o similar) a 15 px, con la monoespaciada solo para etiquetas técnicas; ítem activo con subrayado o píldora sin solaparse con otros textos |
| Bloque de versión | Una línea "v2.1" en el pie de página; si se queda en el navbar, solo en pantallas ≥ 1440 px |
| Franja superior | Eliminar el margen del `body` y fijar `background: #08101E` en `html` y `body` |
| Titular (h1) | `text-wrap: balance`, `max-width: 18ch` a 20ch, `line-height: 1.05`, `letter-spacing: -0.02em` (hoy es más cerrado), máximo 3 líneas en escritorio |
| Degradado | De dos tonos cercanos (azul #3B82F6 a cian #22D3EE) solo en "Facturación DTE"; el amarillo queda reservado para botones |
| CTA principal | "Cotiza tu proyecto" en amarillo, 48 px de alto mínimo; CTA secundario "Ver casos" con borde |
| Logo | Icóno "JR" en el navbar; el logo completo solo en el hero, o al revés, pero no ambos grandes |
| WhatsApp | Verde de marca con punto verde pulsante (o sin punto); `bottom: calc(16px + env(safe-area-inset-bottom))`; en < 640 px solo ícono de 56 px; `aria-label="Escribir por WhatsApp"` |
| Foco | `:focus-visible` con contorno de 2 px en amarillo o blanco en todo elemento interactivo |
| Texto secundario | Gris mínimo #A8B3C7 sobre #08101E (contraste aprox. 9:1; verificar con herramienta) |

Punto de ruptura del menú:

```css
@media (max-width: 1100px) {
  .nav-links { display: none; }
  .nav-toggle { display: inline-flex; }
}
```

## 10. Diseño técnico

El sitio hoy parece una aplicación de una sola página desplegada en Vercel (por confirmar con el desarrollador). La recomendación es generarlo de forma estática para que el HTML inicial ya traiga el contenido.

| Tema | Decisión |
| --- | --- |
| Renderizado | Generación estática (SSG) con Next.js o Astro; si es React con Vite, añadir prerenderizado de la portada como paso mínimo |
| Metadatos | `title`, `description`, `canonical`, `og:title`, `og:description`, `og:image` (1200×630), `og:locale` en `es_SV` y `twitter:card` |
| Datos estructurados | JSON-LD de tipo `ProfessionalService` con nombre, área de servicio (El Salvador) y enlaces de contacto |
| Rastreo | `sitemap.xml`, `robots.txt` y `lang="es-SV"` en la etiqueta `html` |
| Imágenes | WebP o AVIF con `width` y `height` declarados, `loading="lazy"` fuera del primer pantallazo |
| Fuentes | Autoalojadas, solo los pesos usados, `font-display: swap` y precarga de la fuente del titular |
| Formulario | Función serverless en Vercel (o servicio de formularios), campo trampa antispam y envío por correo |
| Analítica | Vercel Analytics o equivalente, con eventos para "Contáctanos", WhatsApp y envío de formulario |
| Estructura | Componentes `Navbar`, `Hero`, `ServiceCard`, `CaseStudy`, `ContactForm`, `WhatsAppButton`; tokens de diseño en un archivo único |
| Despliegue | Rama de pruebas con URL de vista previa en Vercel; paso a producción tras cumplir la sección 13 |

## 11. Contenido y copy

El copy pasa de describir cómo se construye el software a decir qué problema resuelve. Las propuestas son un punto de partida para que Cristian las ajuste a su voz.

**Hero**

- Titular: "Facturación electrónica DTE y sistemas a la medida para tu negocio"
- Subtítulo: "Software que emite, controla y automatiza. Equipo de ingeniería en El Salvador."
- CTA principal: "Cotiza tu proyecto" · CTA secundario: "Ver casos"
- Etiqueta bajo el logo: "Desarrollo · Automatización" (se conserva)

**Servicios (3 tarjetas)**

1. **Facturación DTE:** emisión y control de documentos tributarios electrónicos integrados a tu operación
2. **Sistemas a la medida:** ventas, inventario, clientes y reportes hechos para tu forma de trabajar
3. **Automatización:** recordatorios, cotizaciones y documentos que se generan solos

**Plantilla de cada caso**

| Campo | Contenido |
| --- | --- |
| Cliente y rubro | Nombre o descripción (con permiso del cliente) |
| Problema | Qué no funcionaba, en una frase |
| Solución | Qué se construyó, en 3 a 5 funciones |
| Tecnología | Stack en etiquetas |
| Resultado | Un dato medible real: horas ahorradas, documentos emitidos, errores evitados |
| Evidencia | Captura (con datos de demostración) y enlace si es público |

Pendiente del equipo: los resultados deben ser datos reales; no se inventan cifras en el sitio.

**Navegación:** Servicios · Casos · Equipo · Ingeniería · Contáctanos

## 12. Plan de implementación

El trabajo toma unas 3 semanas en 4 fases; la fase 1 sola ya arregla todo lo que hoy se ve roto. Las duraciones son estimaciones para una persona a tiempo parcial.

| Fase | Entregables | Duración estimada | Criterio de salida |
| --- | --- | --- | --- |
| 0. Preparación | Línea base de Lighthouse, capturas del estado actual, confirmación del stack y de los casos disponibles | 1 día | Métricas de la sección 3 medidas |
| 1. Correcciones de interfaz | RF-01, RF-02, RF-03, RF-04, RF-09 y contraste (H-01 a H-03, H-06 a H-10) | 3 a 4 días | Sin defectos visibles en 5 anchos de pantalla |
| 2. Contenido y estructura | Nuevo hero, menú de 4 ítems, servicios, 3 casos y formulario (RF-05, RF-07, RF-08) | 5 días | Textos aprobados por Cristian y formulario enviando correos |
| 3. Base técnica | SSG o prerenderizado, metadatos, datos estructurados, sitemap, analítica (RF-06, RF-10, RNF-01 a RNF-05) | 4 a 5 días | Lighthouse según metas y vista previa correcta en WhatsApp |
| 4. Pruebas y lanzamiento | Pruebas de la sección 13, correcciones y paso a producción | 2 días | Todos los criterios de aceptación aprobados |

Orden sugerido: la fase 1 puede publicarse sola como versión 2.0.1, para no esperar a terminar todo.

## 13. Pruebas y criterios de aceptación

La versión se publica solo cuando las 9 pruebas pasan. Cada una apunta a un requisito o a una métrica de la sección 3.

| ID | Prueba | Criterio de aceptación | Cubre |
| --- | --- | --- | --- |
| PA-01 | Revisión visual en 360, 768, 1280, 1366 y 1920 px | Sin texto cortado, solapado ni saltos de línea en el menú | RF-01, RF-02, RF-03, RF-09 |
| PA-02 | Hero en escritorio y móvil | El titular ocupa 3 líneas o menos y no deja palabras sueltas al final | RF-05 |
| PA-03 | Botón de WhatsApp | No tapa contenido, abre el chat y se anuncia con lector de pantalla | RF-04 |
| PA-04 | Auditoría Lighthouse en móvil | Rendimiento ≥ 90, Accesibilidad ≥ 95, SEO ≥ 95 | RNF-01 a RNF-04 |
| PA-05 | Navegación solo con teclado | Se llega a todos los enlaces y botones, con foco visible, y el menú móvil se cierra con Escape | RNF-02, RNF-03 |
| PA-06 | Ver el código fuente de la portada | El texto del hero y de los servicios aparece en el HTML inicial | RNF-05 |
| PA-07 | Compartir el enlace por WhatsApp y en un validador de Open Graph | Aparecen título, descripción e imagen propios | RF-06 |
| PA-08 | Envío del formulario | Llega el correo, el usuario ve la confirmación y el campo trampa bloquea el envío automatizado | RF-08, RNF-07 |
| PA-09 | Eventos de analítica | Cada clic en "Contáctanos", WhatsApp y formulario queda registrado | RF-10 |

## 14. Riesgos y mitigaciones

El mayor riesgo es de contenido, no técnico: sin casos reales con permiso del cliente, la sección más importante queda vacía.

| Riesgo | Probabilidad | Impacto | Mitigación |
| --- | --- | --- | --- |
| No hay casos de clientes publicables o falta el permiso para mostrarlos | Media | Alto | Usar capturas con datos de demostración, como hace el sitio de referencia; pedir permiso por escrito antes de publicar |
| Cristian prefiere conservar el estilo de documento SDD en la portada | Media | Medio | Mantenerlo como sección "Ingeniería"; así se conserva la identidad técnica sin sacrificar la claridad comercial |
| Migrar a SSG rompe animaciones o rutas actuales | Media | Medio | Probar en una rama con URL de vista previa; si es costoso, empezar solo con prerenderizado de la portada |
| El rendimiento baja por efectos visuales (cuadrícula, brillos, degradados) | Baja | Medio | Medir con Lighthouse en la fase 1; reducir o simplificar efectos si el LCP supera 2,5 s |
| El formulario recibe spam | Media | Bajo | Campo trampa, validación en servidor y límite de envíos por IP |
| La línea base muestra problemas no vistos en la captura | Media | Medio | Fase 0 antes de comprometer fechas; revisar todas las secciones del sitio |
