/* La misma mascota del hero, ahora sentada detrás de su computadora:
   teclea, parpadea y le salen símbolos de código de la pantalla.
   Las animaciones viven en index.css (.sbot-*). */
const StackBot = ({ className = '' }) => (
  <svg viewBox="0 0 320 300" className={`h-auto w-full overflow-visible ${className}`} aria-hidden="true">
    <defs>
      <radialGradient id="sb-shell" cx="35%" cy="28%" r="80%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="45%" stopColor="#d9d6f5" />
        <stop offset="100%" stopColor="#7c6cf2" />
      </radialGradient>
      <radialGradient id="sb-body" cx="35%" cy="20%" r="90%">
        <stop offset="0%" stopColor="#f1efff" />
        <stop offset="55%" stopColor="#a99ff5" />
        <stop offset="100%" stopColor="#4f41c9" />
      </radialGradient>
      <linearGradient id="sb-visor" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1d1a33" />
        <stop offset="100%" stopColor="#0b0a14" />
      </linearGradient>
      <linearGradient id="sb-lid" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3a3946" />
        <stop offset="100%" stopColor="#17161c" />
      </linearGradient>
      <linearGradient id="sb-base" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4a4958" />
        <stop offset="100%" stopColor="#24232c" />
      </linearGradient>
      <radialGradient id="sb-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#66d9ed" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#66d9ed" stopOpacity="0" />
      </radialGradient>
      <filter id="sb-blur" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" />
      </filter>
    </defs>

    {/* Sombra en la mesa */}
    <ellipse cx="160" cy="286" rx="120" ry="9" fill="#7c6cf2" opacity="0.25" filter="url(#sb-blur)" />

    {/* Símbolos de código que salen de la pantalla */}
    <g fontFamily="Roboto Mono, monospace" fontWeight="500">
      <text className="sbot-glyph" x="62" y="196" fontSize="18" fill="#66d9ed">{'{ }'}</text>
      <text className="sbot-glyph sbot-glyph--2" x="236" y="200" fontSize="16" fill="#b3a8ff">{'=>'}</text>
      <text className="sbot-glyph sbot-glyph--3" x="40" y="214" fontSize="14" fill="#b3a8ff">{'</>'}</text>
      <text className="sbot-glyph sbot-glyph--4" x="262" y="214" fontSize="18" fill="#66d9ed">;</text>
    </g>

    <g className="sbot-bob">
      {/* Antena */}
      <line x1="160" y1="38" x2="160" y2="14" stroke="#a99ff5" strokeWidth="5" strokeLinecap="round" />
      <circle className="sbot-antenna" cx="160" cy="9" r="13" fill="url(#sb-glow)" />
      <circle cx="160" cy="9" r="6.5" fill="#66d9ed" />

      {/* Cuerpo */}
      <rect x="104" y="128" width="112" height="100" rx="34" fill="url(#sb-body)" />
      <ellipse cx="138" cy="146" rx="22" ry="8" fill="#ffffff" opacity="0.35" />

      {/* Brazos que bajan al teclado */}
      <g className="sbot-arm">
        <path d="M110 160 Q86 178 104 214" stroke="url(#sb-body)" strokeWidth="16" strokeLinecap="round" fill="none" />
      </g>
      <g className="sbot-arm sbot-arm--right">
        <path d="M210 160 Q234 178 216 214" stroke="url(#sb-body)" strokeWidth="16" strokeLinecap="round" fill="none" />
      </g>

      {/* Cabeza, mirando un poco hacia la pantalla */}
      <rect x="84" y="36" width="152" height="104" rx="44" fill="url(#sb-shell)" />
      <rect x="72" y="70" width="16" height="36" rx="8" fill="#7c6cf2" />
      <rect x="232" y="70" width="16" height="36" rx="8" fill="#7c6cf2" />
      <rect x="102" y="56" width="116" height="66" rx="30" fill="url(#sb-visor)" />
      <path d="M116 68 Q140 58 170 60" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="5" strokeLinecap="round" fill="none" />
      <g className="sbot-eyes">
        <ellipse cx="138" cy="96" rx="13" ry="13" fill="#66d9ed" filter="url(#sb-blur)" opacity="0.7" />
        <ellipse cx="182" cy="96" rx="13" ry="13" fill="#66d9ed" filter="url(#sb-blur)" opacity="0.7" />
        {/* Ojos contentos: arquitos */}
        <path d="M128 98 Q138 86 148 98" stroke="#66d9ed" strokeWidth="5" strokeLinecap="round" fill="none" />
        <path d="M172 98 Q182 86 192 98" stroke="#66d9ed" strokeWidth="5" strokeLinecap="round" fill="none" />
      </g>
      <path d="M150 110 Q160 117 170 110" stroke="#66d9ed" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <ellipse cx="122" cy="48" rx="20" ry="7" fill="#ffffff" opacity="0.7" transform="rotate(-12 122 48)" />
    </g>

    {/* Computadora: vemos la tapa por detrás, con el logo encendido */}
    <path d="M86 176 Q86 166 96 166 L224 166 Q234 166 234 176 L240 262 L80 262 Z" fill="url(#sb-lid)" stroke="#4a4958" strokeWidth="1.5" />
    <path d="M96 172 L224 172" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="2" />
    <circle className="sbot-logo-glow" cx="160" cy="214" r="30" fill="url(#sb-glow)" />
    <text x="160" y="221" textAnchor="middle" fontFamily="Roboto Mono, monospace" fontSize="20" fontWeight="500" fill="#66d9ed">
      &lt;/&gt;
    </text>
    {/* Base / teclado */}
    <rect x="58" y="260" width="204" height="14" rx="7" fill="url(#sb-base)" />
    <rect x="140" y="260" width="40" height="4" rx="2" fill="#17161c" />
  </svg>
);

export default StackBot;
