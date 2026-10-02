---
name: Jeferson Bustamante — Portfolio
description: Un candidato se presenta como una institución presenta su memoria anual, con compostura en vez de cifras.
colors:
  ground: "#f7f7fa"
  surface: "#ffffff"
  ink: "#1b1547"
  body: "#4b5165"
  muted: "#686d84"
  hairline: "#e6e7ee"
  hairline-deep: "#c9cbd9"
  violet: "#6b5ce7"
  violet-deep: "#5a4bd6"
  violet-active: "#2e2191"
  violet-wash: "#f0edfd"
  ribbon-teal: "#7fd8d0"
  ribbon-lilac: "#c9b8f0"
  ribbon-violet: "#5b4fd6"
typography:
  display:
    fontFamily: "General Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 5.5rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  lede:
    fontFamily: "General Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  body:
    fontFamily: "General Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "General Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "0.1em"
rounded:
  focus: "2px"
  control: "8px"
  panel: "12px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "32px"
  lg: "64px"
  xl: "128px"
components:
  button-primary:
    backgroundColor: "{colors.violet}"
    textColor: "#ffffff"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.violet-deep}"
  button-primary-active:
    backgroundColor: "{colors.violet-active}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.violet}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
  button-secondary-hover:
    backgroundColor: "{colors.violet-wash}"
  nav-link:
    textColor: "{colors.body}"
    typography: "{typography.body}"
  nav-link-hover:
    textColor: "{colors.violet}"
  seal-personal:
    textColor: "{colors.ink}"
    size: "min(21rem, 72vw)"
  seal-project:
    textColor: "{colors.muted}"
    size: "48px"
---

# Design System: Jeferson Bustamante — Portfolio

## Overview

Prospecto de buró cívico en manera tardo-moderna. Un candidato sin historial laboral se presenta como una institución presenta su memoria anual: vacío disciplinado sobre papel claro, un solo objeto oscuro puesto en la luz, y una sola acción en color. La compostura es el argumento — sin cifras que mostrar, la credibilidad la carga la ejecución.

Este mundo se eligió en una mesa de decisión sobre el retador `civic-bureau-prospectus-late-modern`, por encima de una referencia índigo/coral que el usuario había fijado antes. Reemplaza por completo al mundo anterior del repo (fondo negro, acento verde neón, tipografía monoespaciada, ventana de terminal), que era el estándar indistinguible de la categoría.

El modo de visitante es **Persuade**: un reclutador llega desde un enlace externo, escanea, y decide en menos de un minuto si escribe.

## Colors

### Primary

`violet #6b5ce7` es el único color de acción del sistema y está **racionado**. Aparece exclusivamente en: la acción primaria rellena, el estado hover de los enlaces, el punto de disponibilidad, el anillo de foco y la segunda frase del titular. Nunca decora. `violet-deep #5a4bd6` es su hover, `violet-active #2e2191` su estado presionado, `violet-wash #f0edfd` el relleno suave del botón secundario y de la selección de texto.

### Neutral

`ground #f7f7fa` es el papel, el fondo de toda la página. `surface #ffffff` es el blanco puro, reservado para el botón secundario. `ink #1b1547` es la tinta: índigo profundo, nunca negro puro. `body #4b5165` es el texto corrido. `muted #686d84` es el texto de etiqueta y los sellos pequeños — es el valor más claro permitido para texto (4.5:1 sobre papel). `hairline #e6e7ee` es la única regla divisoria del sistema; `hairline-deep #c9cbd9` existe solo para el hover del scrollbar.

### Tertiary

La cinta de luz usa tres paradas en un solo degradado continuo: `ribbon-teal #7fd8d0` → `ribbon-lilac #c9b8f0` → `ribbon-violet #5b4fd6`. Son material, no color de interfaz: nunca se usan en texto, borde, relleno de control ni icono.

### Named Rules

- **Nunca gris en superficie coloreada.** El texto secundario se tiñe desde el índigo, por eso `body` y `muted` llevan azul-violeta y no gris neutro.
- **Nunca negro puro.** El valor más oscuro del sistema es `ink`.
- **El violeta se cuenta.** Si una pantalla nueva tiene más de un puñado de elementos violeta, la ración se rompió.

## Typography

Una sola familia: **General Sans** (Fontshare), grotesca geométrico-humanista. Dos pesos en todo el sistema, 400 y 500. No hay tercera familia, no hay serif, y no hay monoespaciada — la monoespaciada como disfraz de "técnico" está prohibida en este mundo.

### Hierarchy

- **display** — 500, `clamp(2.75rem, 7vw, 5.5rem)`, interlineado 1.05, tracking -0.03em. Dos frases declarativas cortas: la primera en `ink`, la segunda en `violet` sólido. Techo absoluto 5.5rem.
- **lede** — 400, 1.25rem, interlineado 1.625, color `body`. Medida máxima 46ch.
- **body** — 400, 0.9375rem, color `body`. Es también el tamaño de los controles.
- **label** — 500, 0.8125rem, versalitas, tracking 0.1em, color `muted`. Para etiquetas de dato y nombres de proyecto.

### Named Rules

- **Tracking negativo solo en display.** El piso es -0.04em; el sistema usa -0.03em y no baja más.
- **Versalitas solo en etiqueta.** Nunca en titular, nunca en texto corrido.
- **Numerales tabulares en todo el documento** (`font-variant-numeric: tabular-nums`), para que los años grabados en los sellos se alineen en columna.

## Layout

Contenedor único de `84rem` con canal de 24px, 48px desde `lg`. Rejilla de 12 columnas; el primer viewport la parte 6/6 — argumento a la izquierda, objeto a la derecha.

El vacío es el material principal. Las regiones se separan con una sola regla `hairline` y respiración vertical generosa (80px, 96px desde `lg`), nunca con cajas ni fondos alternos. Siempre más espacio encima de un encabezado que debajo.

Por debajo de `lg` todo colapsa a una columna y el objeto pasa debajo del argumento.

## Elevation & Depth

**La elevación se declara una sola vez: un borde `hairline` de 1px.** El sistema no tiene sombras, no tiene vidrio, no tiene desenfoque de fondo y no tiene fondos alternos. Un borde bajo una sombra es la tarjeta fantasma y está prohibido.

La única profundidad real de la página es óptica, no de caja: la cinta de luz pasa por detrás del contenido con su halo desenfocado, su pliegue en `multiply` y su canto iluminado.

## Shapes

Radio de control 8px (botones, campos). Radio de panel 12px. Píldora reservada a indicadores diminutos, como el punto de disponibilidad.

Los **sellos** son la forma firmante del sistema: circunferencias ruleadas concéntricas, texto en arco, y motivo a línea fina. Toda su geometría está especificada punto por punto — nunca son una imitación de fotografía ni un trazo de boceto.

## Components

### Buttons

- **Primario** — relleno `violet`, texto blanco, radio 8px, padding 14px 24px, peso 500. Lleva un `ArrowUpRight` de 17px y trazo 1.75 que se desplaza 2px en diagonal al hover. Hover `violet-deep`, presionado `violet-active`. Transición 300ms con `ease-prospectus`.
- **Secundario** — fondo `surface`, borde `violet` de 1px, texto `violet`, misma métrica. Hover `violet-wash`.

Una sola acción primaria por región. Si hay dos botones rellenos a la vista, el sistema se rompió.

### Navigation

Encabezado pegajoso sobre `ground` opaco. Sin blur y sin transparencia: gana su borde `hairline` inferior solo al pasar 16px de scroll. A la izquierda la marca de sello más el nombre; a la derecha los enlaces y una sola acción rellena. Sin numeración de secciones.

**Un enlace que no lleva a ningún lado no se renderiza.** Las anclas internas entran a `navLinks` cuando su sección existe, nunca antes.

### Signature Component — los sellos

Tres variantes de un mismo grabado, en `src/components/Seal.jsx`:

- **SealMark** (28px) — la marca del encabezado y el favicon: circunferencia, perfil del Barva y regla de horizonte. Sin texto.
- **SealPersonal** (hasta 21rem) — el único objeto oscuro de la página. Tres anillos concéntricos, nombre en el arco superior, `HEREDIA · COSTA RICA` en el inferior, el perfil del Barva al centro y las coordenadas reales de Heredia grabadas abajo. Lleva `role="img"` y etiqueta en español.
- **SealProject** (48px) — el año grabado al centro, anillo doble y dos reglas laterales. Decorativo (`aria-hidden`); el nombre legible va al lado, en `label`.

Los sellos **reemplazan la fila de logos de clientes** que este mundo usa normalmente. Esa fila aquí sería mentira: no hay clientes. El sello convierte el trabajo propio en la evidencia.

Los trazos se engrosan según el tamaño de render: un trazo de 4 en un viewBox de 300 mostrado a 48px se convierte en medio píxel y desaparece al rasterizar.

### Signature Component — la cinta

`src/components/Ribbon.jsx`. Geometría bezier especificada: banda barrida, pliegue cruzando en `multiply`, halo desenfocado detrás, reflejo especular en `screen` y canto de ataque casi blanco. Enmascarada para disolverse en el papel antes de tocar el borde inferior.

Es el único elemento interactivo pasivo del sistema: gira hasta 1.4° con origen en su base al seguir el puntero, en 300ms. Al girar desde la base, la cresta se desplaza mucho más que el pie — la cinta se inclina, no se arrastra. Desactivada bajo `prefers-reduced-motion` y en punteros gruesos.

## Do's and Don'ts

### Do:

- Dejar vacío. La credibilidad de esta página es su compostura; llenar un hueco la destruye.
- Racionar el violeta a la acción y a los pocos elementos vivos.
- Declarar la elevación una sola vez, como regla de 1px.
- Teñir el texto secundario desde el índigo.
- Tematizar las superficies del navegador desde la paleta: selección, caret, anillo de foco, scrollbar, desplazamiento de subrayado, numerales tabulares.
- Mantener un solo momento de movimiento autorizado por pantalla.
- Dibujar los iconos con un solo trazo consistente (1.75).

### Don't:

- Nunca inventar un dato. Sin métricas, sin clientes, sin empleadores, sin testimonios, sin cifras de usuarios. Un marcador debe ser inconfundible, nunca un nombre plausible.
- Nunca tarjetas como estructura de página, y jamás tarjetas anidadas.
- Nunca una etiqueta o eyebrow encima de un encabezado.
- Nunca texto en degradado. El énfasis viene del peso, del tamaño o del violeta sólido.
- Nunca numerar las secciones.
- Nunca monoespaciada como disfraz de "técnico".
- Nunca sombra, vidrio ni desenfoque de fondo como decoración.
- Nunca una segunda familia tipográfica.
- Nunca un enlace hacia una sección que no existe.
- Nunca ilustración que imite una fotografía. La geometría especificada es de primera clase; el boceto y el ruido no.
