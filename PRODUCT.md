# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Codebase existente: React 19 + Vite 8, Tailwind CSS 4 (tokens vía `@theme` en `src/index.css`), framer-motion para animación, lucide-react y react-icons para iconografía. Sin router ni backend: es un sitio estático de una sola página con navegación por anclas.

## Users

Audiencia doble, confirmada por el autor:

1. **Reclutadores y equipos técnicos en Costa Rica y LATAM**, evaluando candidatos para posiciones locales o híbridas. Leen en español.
2. **Reclutadores de posiciones remotas en US/EU**, filtrando candidatos internacionales. Leen en inglés.

Ambos llegan normalmente desde un enlace en LinkedIn, GitHub o una aplicación, no desde búsqueda orgánica. El trabajo que hacen es el mismo en los dos casos: decidir en menos de un minuto si este perfil merece una entrevista. Escanean antes de leer.

Consecuencia confirmada: el sitio es **bilingüe con cambio de idioma explícito**. Español e inglés son ambos de primera clase; ninguno es traducción de relleno del otro.

## Product Purpose

Portfolio personal de Jeferson Bustamante Gómez. Existe para conseguir entrevistas: convertir a un reclutador que llega con una pestaña abierta en alguien que escribe un correo o agenda una llamada.

Éxito = contacto iniciado (correo o LinkedIn) desde el sitio. No tráfico, no tiempo en página.

## Positioning

Desarrollador **full-stack con foco backend**: la fuerza declarada está en arquitectura de sistemas, APIs y bases de datos, con capacidad real de frontend en vez de dependencia de otros para la interfaz. Base en Heredia, Costa Rica, disponible para trabajo local y remoto.

El portfolio compite sin historial laboral: lo que lo diferencia no puede ser "años de experiencia" sino **la calidad y la legibilidad del trabajo propio mostrado**. El sitio mismo es una pieza de evidencia.

## Operating Context

- El visitante llega casi siempre desde un enlace externo, frecuentemente en móvil primero y luego en escritorio.
- Lectura rápida en horario laboral, no exploración de ocio.
- Se compara mentalmente contra otros portfolios del mismo lote de candidatos.
- El reclutador suele querer saltar directo al código fuente en GitHub.

## Capabilities and Constraints

- Sitio estático de una página, sin backend, sin base de datos, sin formulario que requiera servidor. El contacto es `mailto:` y enlaces directos.
- Todo el contenido vive centralizado en `src/data/portfolioData.js`; los componentes no llevan texto quemado. Esta decisión es del autor y se mantiene.
- El contenido bilingüe debe soportarse desde esa misma capa de datos.
- **Sin decidir:** dominio y hosting final.
- **Sin decidir:** si habrá CV descargable más adelante.

## Brand Commitments

- Nombre real: Jeferson Bustamante Gómez. Correo real: jefersonbustamantegomez@gmail.com. GitHub real: github.com/JefersonGomez.
- **Mundo visual comprometido:** prospecto de buró cívico en manera tardo-moderna, elegido por el autor en la mesa de decisión del 1 de octubre de 2026 sobre una referencia índigo/coral que él mismo había fijado antes. La carta declaraba el choque y aun así la eligió. Documentado en `DESIGN.md` y en `.impeccable/surfaces/src-components-hero-jsx.md`.
- La foto de perfil se publica sin filtros de color ni recortes sobre la silueta: es una persona, no un elemento del sistema.

## Evidence on Hand

**Real y usable:**
- Proyectos propios en GitHub, terminados y mostrables (personales, no comerciales).

**Confirmado como inexistente — nunca inventar:**
- **Sin experiencia laboral que mostrar.** El arreglo `experience` en `src/data/portfolioData.js` ("Tech Company", "Startup XYZ", "+50k usuarios diarios", "reduje latencia 40%") es relleno de plantilla y debe eliminarse, no reescribirse.
- **Sin CV en PDF.** `src/components/Hero.jsx` enlaza a `/cv.pdf` y `public/` está vacío: el botón está roto hoy.
- **Sin proyectos comerciales.** Los proyectos listados ("E-Commerce Platform", "AI Dashboard") son relleno; los reales los aporta el autor.
- **Sin métricas, clientes, testimonios ni cifras de usuarios.** Ninguna cifra de impacto puede aparecer en el sitio.
- LinkedIn y Twitter en los datos apuntan a `tuusuario`: placeholders, no perfiles reales.

## Product Principles

1. **El sitio es el portafolio.** Sin historial laboral, la ejecución de esta página es la primera muestra de trabajo que el reclutador ve. Un detalle descuidado aquí es una mancha en la evidencia, no un detalle de estilo.
2. **Cero afirmaciones inventadas.** Ninguna cifra, cliente, empresa ni resultado entra al sitio sin que el autor lo confirme. Antes vacío que falso.
3. **El trabajo propio carga el peso.** Los proyectos personales se presentan como trabajo serio con decisiones técnicas visibles, no como ejercicios de práctica que se piden disculpas.
4. **Decidible en un minuto.** Quién es, qué hace, qué construyó y cómo contactarlo deben resolverse en un escaneo rápido, antes de cualquier lectura profunda.
5. **Bilingüe de verdad.** Cada idioma se lee como escrito por un hablante nativo. Nada de mezclar idiomas dentro de una misma pantalla.
6. **Debe verse bien con poco contenido.** Hoy hay pocos proyectos y ninguna experiencia; el diseño no puede depender de volumen para no verse hueco.

## Accessibility & Inclusion

Sin requisito formal establecido por el autor. Se mantiene el piso técnico: contraste legible sobre fondo oscuro, navegación por teclado en menú y enlaces, respeto a `prefers-reduced-motion` (ya implementado en `src/index.css`), y `lang` correcto por idioma en el conmutador bilingüe.
