/* Hoja de cuaderno con un lápiz que escribe renglón por renglón y cierra con
   un check. Animaciones en index.css (.study-*). */
const StudyDoodle = ({ className = '' }) => (
  <svg viewBox="0 0 220 230" className={`h-auto w-full overflow-visible ${className}`} aria-hidden="true">
    <defs>
      <linearGradient id="study-paper" x1="0" y1="0" x2="0.3" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#e4e1f7" />
      </linearGradient>
      <linearGradient id="study-pencil" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#b3a8ff" />
        <stop offset="100%" stopColor="#6a5ae6" />
      </linearGradient>
    </defs>

    {/* Sombra */}
    <ellipse cx="104" cy="218" rx="70" ry="7" fill="#7c6cf2" opacity="0.25" />

    <g className="study-paper-float">
      {/* Hoja de atrás */}
      <rect x="44" y="26" width="128" height="172" rx="12" fill="#3a3946" transform="rotate(6 108 112)" />
      {/* Hoja */}
      <rect x="36" y="22" width="128" height="176" rx="12" fill="url(#study-paper)" />
      {/* Margen y anillas */}
      <line x1="58" y1="22" x2="58" y2="198" stroke="#ff8fb8" strokeWidth="1.5" opacity="0.6" />
      {[46, 82, 118, 154, 186].map((y) => (
        <circle key={y} cx="46" cy={y} r="3.2" fill="#0f0f12" opacity="0.8" />
      ))}

      {/* Título en cian */}
      <path className="study-line study-line--0" d="M68 50 L128 50" stroke="#2bb8d1" strokeWidth="6" strokeLinecap="round" pathLength="1" />
      {/* Renglones que se escriben */}
      <path className="study-line study-line--1" d="M68 80 Q90 76 112 80 T148 80" stroke="#7c6cf2" strokeWidth="3.5" strokeLinecap="round" fill="none" pathLength="1" />
      <path className="study-line study-line--2" d="M68 104 Q86 100 104 104 T140 104" stroke="#7c6cf2" strokeWidth="3.5" strokeLinecap="round" fill="none" pathLength="1" />
      <path className="study-line study-line--3" d="M68 128 Q92 124 116 128 T150 128" stroke="#7c6cf2" strokeWidth="3.5" strokeLinecap="round" fill="none" pathLength="1" />
      <path className="study-line study-line--4" d="M68 152 Q82 148 96 152 T118 152" stroke="#7c6cf2" strokeWidth="3.5" strokeLinecap="round" fill="none" pathLength="1" />
      {/* Check final */}
      <path className="study-line study-line--5" d="M124 172 L133 181 L152 160" stroke="#2fd4a0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" pathLength="1" />
    </g>

    {/* Destellos */}
    <path className="study-spark" d="M186 40 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3z" fill="#66d9ed" />
    <path className="study-spark study-spark--2" d="M22 150 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z" fill="#b3a8ff" />

    {/* Lápiz: la punta está en (0,0) y la animación lo mueve renglón por renglón */}
    <g className="study-pencil">
      <g transform="rotate(-40)">
        <path d="M0 0 L14 -6 L14 6 Z" fill="#f3d9b1" />
        <path d="M0 0 L5 -2.2 L5 2.2 Z" fill="#1b1547" />
        <rect x="14" y="-6" width="62" height="12" fill="url(#study-pencil)" />
        <rect x="14" y="-6" width="62" height="4" fill="#ffffff" opacity="0.25" />
        <rect x="76" y="-6.5" width="9" height="13" fill="#a8a8b8" />
        <rect x="85" y="-6" width="12" height="12" rx="4" fill="#ff8fb8" />
      </g>
    </g>
  </svg>
);

export default StudyDoodle;
