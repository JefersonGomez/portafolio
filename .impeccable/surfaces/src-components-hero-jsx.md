---
version: 1
slug: "src-components-hero-jsx"
primary_target: "src/components/Hero.jsx"
related_targets: ["src/components/Navbar.jsx","src/App.jsx","src/index.css"]
---

Alcance: la página única del portfolio (`src/App.jsx`), su encabezado y su primer viewport. Modo de visitante: **Persuade** — el reclutador llega, decide y escribe.

Audiencia: reclutadores técnicos en Costa Rica/LATAM y reclutadores de posiciones remotas en US/EU. Trabajo que hacen: decidir en menos de un minuto si este perfil merece una entrevista. Escanean antes de leer. Acción: iniciar contacto por correo o LinkedIn. Prueba disponible: únicamente proyectos propios reales. Restricciones duras: sin experiencia laboral, sin CV en PDF, sin métricas, sin clientes, sin testimonios. Nada de eso puede aparecer inventado.

Dirección elegida por el usuario sobre la mesa de decisión: **Prospecto de Buró Cívico, manera tardo-moderna**. Supersede la referencia índigo/coral que el usuario había fijado antes en la misma sesión; la carta declaraba el choque y el usuario la eligió igual.

Momento memorable: el sello. Jeferson se presenta con un sello institucional grabado, y cada proyecto propio lleva el suyo. El sello reemplaza la banda de logos de clientes que este mundo normalmente usa y que aquí sería mentira.

## Direction contract

**THESIS:** Un candidato sin historial laboral se presenta como una institución presenta su memoria anual: vacío disciplinado, un solo objeto oscuro en la luz, una sola acción en color. Se niega al portfolio de desarrollador de esta categoría —fondo negro, acento neón, tipografía mono, ventana de terminal con puntos de semáforo, titular en degradado— que es exactamente lo que este repo entregaba. La compostura es el argumento: sin cifras que mostrar, la credibilidad la carga la ejecución.

**OWN-WORLD:** Papel mate #F7F7FA sobre blanco #FFFFFF. Tinta índigo #1B1547, cuerpo #4B5165, hairline #E6E7EE. Violeta #6B5CE7 como único color de acción, racionado: la acción primaria, el enlace activo, el punto de estado. Cinta de luz #7FD8D0 → #C9B8F0 → #5B4FD6, geometría bezier especificada con relleno degradado, nunca imitación de fotografía. General Sans (Fontshare): display peso 500 a 88px/1.05, cuerpo 400 a 20px/1.6, etiquetas en versalitas ruleadas. Elevación declarada una sola vez: borde hairline de 1px, sin sombra. Radios 12px en tarjeta, 8px en control. Sellos grabados: circunferencia ruleada, anillo interior, texto en arco, motivo a línea fina.

**STORY:** El reclutador entiende en el primer vistazo que esto es full-stack con foco en backend, en Heredia, disponible local y remoto. Cree que la persona que ejecutó esta página con esta compostura ejecuta así el código. Hace una de dos cosas: baja a los proyectos o escribe.

**FIRST VIEWPORT:** Encabezado sobre papel: marca de sello a la izquierda, enlaces de texto, y una sola acción violeta rellena a la derecha. Columna izquierda, 52%: titular a 88px/1.05 en dos frases declarativas, la primera en tinta índigo, la segunda en violeta sólido —nunca degradado—; debajo una línea de cuerpo a 20px/1.6 con el rol, la ubicación y la disponibilidad; debajo, acción primaria violeta rellena con chevron más acción secundaria de contorno. Columna derecha, 48%: la cinta de luz entra por el borde superior y cae, y bajo ella, solo en la luz, el único objeto oscuro de la página: el sello personal de Jeferson a gran escala, grabado en tinta índigo, con su nombre en el arco, HEREDIA · COSTA RICA abajo y el perfil del Barva a línea fina. Al pie del viewport, una regla hairline y el comienzo de la banda de sellos de proyecto, que es la traducción honesta de la fila de logos de clientes que este mundo usa y que aquí sería falsa.

**FORM:** Prospecto de Buró Cívico tardo-moderno, retador `civic-bureau-prospectus-late-modern`, veredicto competitive, elegido por el usuario sobre la dirección asignada. Era el cuarto de mis siete candidatos fundamentados el que el dado asignó (Guía de Campo Nocturna); el usuario eligió el retador. Seed key `19b5c336`, mesa `4b06a79c`.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Decisiones abiertas

- Nombres reales de los proyectos propios: el build entrega marcadores evidentes (`NOMBRE DEL PROYECTO`), nunca nombres plausibles inventados. Jeferson los reemplaza.
- Bilingüe español/inglés: es verdad de producto confirmada en PRODUCT.md, pero queda fuera de este pase. La capa de datos se deja lista para recibirlo.
- LinkedIn real (los datos apuntan a `tuusuario`).
- Secciones restantes (sobre mí, detalle de proyectos, contacto) heredan este mundo y no reabren la identidad.
