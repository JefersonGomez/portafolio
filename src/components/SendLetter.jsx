/* Una carta entra al sobre, el sobre se cierra con un sello y sale volando.
   Se repite en bucle. Animaciones en index.css (.letter-*). */
const SendLetter = ({ className = '' }) => (
  <svg viewBox="0 0 240 180" className={`h-auto w-full overflow-visible ${className}`} aria-hidden="true">
    <defs>
      <linearGradient id="letter-back" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4a3cc4" />
        <stop offset="100%" stopColor="#2e2191" />
      </linearGradient>
      <linearGradient id="letter-front" x1="0" y1="0" x2="0.4" y2="1">
        <stop offset="0%" stopColor="#9d91f7" />
        <stop offset="100%" stopColor="#6a5ae6" />
      </linearGradient>
      <linearGradient id="letter-flap" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#b3a8ff" />
        <stop offset="100%" stopColor="#8f80f5" />
      </linearGradient>
      <clipPath id="letter-clip">
        <rect x="0" y="-60" width="240" height="160" />
      </clipPath>
    </defs>

    {/* Estelas de vuelo */}
    <g className="letter-trail" stroke="#66d9ed" strokeWidth="3" strokeLinecap="round" opacity="0">
      <line x1="40" y1="120" x2="80" y2="104" />
      <line x1="28" y1="100" x2="62" y2="86" />
      <line x1="52" y1="142" x2="84" y2="128" />
    </g>

    <g className="letter-envelope">
      {/* Sombra */}
      <ellipse className="letter-shadow" cx="120" cy="170" rx="64" ry="6" fill="#7c6cf2" opacity="0.3" />

      {/* Fondo del sobre */}
      <rect x="56" y="72" width="128" height="88" rx="10" fill="url(#letter-back)" />
      {/* Solapa abierta (detrás de la carta) */}
      <path className="letter-flap-open" d="M58 74 L120 24 L182 74 Z" fill="url(#letter-back)" stroke="url(#letter-back)" strokeWidth="4" strokeLinejoin="round" />

      {/* Carta */}
      <g clipPath="url(#letter-clip)">
        <g className="letter-paper">
          <rect x="72" y="20" width="96" height="84" rx="6" fill="#ffffff" />
          <rect x="84" y="34" width="44" height="5" rx="2.5" fill="#2bb8d1" />
          <rect x="84" y="48" width="70" height="4" rx="2" fill="#c9c2ff" />
          <rect x="84" y="58" width="62" height="4" rx="2" fill="#c9c2ff" />
          <rect x="84" y="68" width="66" height="4" rx="2" fill="#c9c2ff" />
          <path d="M140 84 c-3 -4 -9 -1 -6 4 l6 5 6 -5 c3 -5 -3 -8 -6 -4z" fill="#ff8fb8" />
        </g>
      </g>

      {/* Bolsillo delantero */}
      <path d="M56 80 L120 122 L184 80 L184 150 Q184 160 174 160 L66 160 Q56 160 56 150 Z" fill="url(#letter-front)" />
      <path d="M56 160 L108 116 M184 160 L132 116" stroke="#4a3cc4" strokeWidth="2" opacity="0.5" />
      {/* Solapa cerrada */}
      <path className="letter-flap-closed" d="M58 74 L120 122 L182 74 Z" fill="url(#letter-flap)" stroke="url(#letter-flap)" strokeWidth="4" strokeLinejoin="round" />
      {/* Sello */}
      <g className="letter-seal">
        <circle cx="120" cy="116" r="13" fill="#66d9ed" />
        <circle cx="120" cy="116" r="13" fill="none" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="3 3" />
        <path d="M120 112 c-3 -4 -9 -1 -6 4 l6 5 6 -5 c3 -5 -3 -8 -6 -4z" fill="#ffffff" />
      </g>
    </g>
  </svg>
);

export default SendLetter;
