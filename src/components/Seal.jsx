// Sellos grabados. Son geometría especificada: circunferencias ruleadas, texto en
// arco y el perfil del Barva a línea fina. Reemplazan la fila de logos de clientes
// que este mundo usa normalmente y que aquí sería mentira.

// Perfil del volcán Barva, visible desde Heredia. Horizonte en y=178.
const BARVA = 'M 74 178 L 108 136 L 128 158 L 150 112 L 176 152 L 198 142 L 226 178';

const ARC_TOP = 'M 29.5 160.5 A 121 121 0 1 1 270.5 160.5';
const ARC_BOTTOM = 'M 36.3 191.4 A 121 121 0 0 0 263.7 191.4';

/* Marca de encabezado: el sello reducido a su motivo, sin texto. */
export function SealMark({ className = '' }) {
  return (
    <svg viewBox="0 0 300 300" className={className} fill="none" aria-hidden="true">
      <circle cx="150" cy="150" r="142" stroke="currentColor" strokeWidth="10" />
      <path d={BARVA} stroke="currentColor" strokeWidth="11" strokeLinejoin="round" />
      <line x1="60" y1="206" x2="240" y2="206" stroke="currentColor" strokeWidth="10" />
    </svg>
  );
}

/* El único objeto oscuro de la página, solo en la luz. */
export function SealPersonal({ name, className = '' }) {
  return (
    <svg
      viewBox="0 0 300 300"
      className={className}
      fill="none"
      role="img"
      aria-label={`Sello de ${name}, Heredia, Costa Rica`}
    >
      <defs>
        <path id="seal-arc-top" d={ARC_TOP} />
        <path id="seal-arc-bottom" d={ARC_BOTTOM} />
      </defs>

      <circle cx="150" cy="150" r="146" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="150" cy="150" r="137" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="150" cy="150" r="104" stroke="currentColor" strokeWidth="0.75" />

      <circle cx="29" cy="150" r="2.25" fill="currentColor" />
      <circle cx="271" cy="150" r="2.25" fill="currentColor" />

      <text
        fill="currentColor"
        fontSize="13"
        fontWeight="500"
        letterSpacing="2.2"
        style={{ textTransform: 'uppercase' }}
      >
        <textPath href="#seal-arc-top" startOffset="50%" textAnchor="middle">
          {name}
        </textPath>
      </text>

      <text fill="currentColor" fontSize="11.5" fontWeight="500" letterSpacing="2.6">
        <textPath href="#seal-arc-bottom" startOffset="50%" textAnchor="middle">
          HEREDIA · COSTA RICA
        </textPath>
      </text>

      <path d={BARVA} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="72" y1="186" x2="228" y2="186" stroke="currentColor" strokeWidth="1.25" />
      <line x1="96" y1="192" x2="204" y2="192" stroke="currentColor" strokeWidth="0.6" />

      <text
        x="150"
        y="213"
        fill="currentColor"
        fontSize="10"
        fontWeight="500"
        letterSpacing="2"
        textAnchor="middle"
      >
        09.99 N · 84.12 W
      </text>
    </svg>
  );
}

/* Sello de proyecto: el año grabado al centro. Dato real, nunca inventado.
   Los trazos están engrosados para su tamaño de render (48px): a 300 de viewBox,
   un trazo de 4 se convertiría en medio píxel y desaparecería al rasterizar. */
export function SealProject({ year, className = '' }) {
  return (
    <svg viewBox="0 0 300 300" className={className} fill="none" aria-hidden="true">
      <circle cx="150" cy="150" r="142" stroke="currentColor" strokeWidth="11" />
      <circle cx="150" cy="150" r="116" stroke="currentColor" strokeWidth="6" />
      <line x1="40" y1="150" x2="76" y2="150" stroke="currentColor" strokeWidth="9" />
      <line x1="224" y1="150" x2="260" y2="150" stroke="currentColor" strokeWidth="9" />
      <text
        x="150"
        y="152"
        fill="currentColor"
        fontSize="92"
        fontWeight="500"
        letterSpacing="-1"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {year}
      </text>
    </svg>
  );
}
