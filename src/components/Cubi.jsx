import { useState } from 'react';

/* Cubi: mascota original de la sección de proyectos. Un cubito con brote en la
   cabeza que rebota, parpadea y cambia de cara según el proyecto que estés viendo.
   mood: 'idle' | 'happy' | 'wow'. Animaciones en index.css (.cubi-*). */

const Eyes = ({ mood }) => {
  if (mood === 'happy') {
    return (
      <g stroke="#1b1547" strokeWidth="4.5" strokeLinecap="round" fill="none">
        <path d="M37 72 Q44 63 51 72" />
        <path d="M61 72 Q68 63 75 72" />
      </g>
    );
  }
  const r = mood === 'wow' ? 8.5 : 7.5;
  return (
    <g className="cubi-eyes">
      <ellipse cx="44" cy="70" rx={r - 1} ry={r + 1} fill="#1b1547" />
      <ellipse cx="68" cy="70" rx={r - 1} ry={r + 1} fill="#1b1547" />
      <circle cx="46.5" cy="66.5" r="2.6" fill="#fff" />
      <circle cx="70.5" cy="66.5" r="2.6" fill="#fff" />
      <circle cx="42" cy="73.5" r="1.2" fill="#fff" opacity="0.8" />
      <circle cx="66" cy="73.5" r="1.2" fill="#fff" opacity="0.8" />
    </g>
  );
};

const Mouth = ({ mood }) => {
  if (mood === 'wow') return <ellipse cx="56" cy="88" rx="5" ry="6" fill="#1b1547" />;
  if (mood === 'happy')
    return <path d="M47 84 Q56 96 65 84 Z" fill="#1b1547" stroke="#1b1547" strokeWidth="2" strokeLinejoin="round" />;
  return <path d="M50 86 Q56 91 62 86" stroke="#1b1547" strokeWidth="3.5" strokeLinecap="round" fill="none" />;
};

const CubiSvg = ({ mood }) => (
  <svg viewBox="0 0 120 140" className="h-auto w-full overflow-visible" aria-hidden="true">
    <defs>
      <linearGradient id="cubi-front" x1="0" y1="0" x2="0.4" y2="1">
        <stop offset="0%" stopColor="#c9c2ff" />
        <stop offset="100%" stopColor="#8f80f5" />
      </linearGradient>
      <linearGradient id="cubi-top" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#bff3fb" />
        <stop offset="100%" stopColor="#66d9ed" />
      </linearGradient>
      <linearGradient id="cubi-side" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#6a5ae6" />
        <stop offset="100%" stopColor="#4a3cc4" />
      </linearGradient>
      <linearGradient id="cubi-leaf" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#9ff5c9" />
        <stop offset="100%" stopColor="#2fd4a0" />
      </linearGradient>
    </defs>

    {/* Sombra */}
    <ellipse className="cubi-shadow" cx="62" cy="132" rx="36" ry="5" fill="#000" opacity="0.45" />

    <g className="cubi-body">
      {/* Patitas */}
      <rect x="32" y="114" width="16" height="12" rx="6" fill="#4a3cc4" />
      <rect x="66" y="114" width="16" height="12" rx="6" fill="#4a3cc4" />

      {/* Cubo: lado, tapa y frente, con esquinas redondeadas */}
      <g strokeLinejoin="round" strokeWidth="8">
        <path d="M94 44 L108 30 L108 100 L94 116 Z" fill="url(#cubi-side)" stroke="url(#cubi-side)" />
        <path d="M18 44 L34 28 L108 28 L94 44 Z" fill="url(#cubi-top)" stroke="url(#cubi-top)" />
        <rect x="14" y="42" width="84" height="78" rx="10" fill="url(#cubi-front)" stroke="url(#cubi-front)" />
      </g>
      {/* Brillo */}
      <path d="M24 52 Q24 46 32 46 L52 46" stroke="#fff" strokeOpacity="0.6" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* Brote */}
      <g className="cubi-sprout">
        <path d="M62 30 Q62 18 64 10" stroke="#2fd4a0" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M64 12 Q52 2 44 10 Q54 18 64 12 Z" fill="url(#cubi-leaf)" />
        <path d="M64 12 Q74 0 84 6 Q76 18 64 12 Z" fill="url(#cubi-leaf)" />
      </g>

      {/* Cara */}
      <ellipse cx="32" cy="84" rx="7" ry="4" fill="#ff8fb8" opacity="0.6" />
      <ellipse cx="80" cy="84" rx="7" ry="4" fill="#ff8fb8" opacity="0.6" />
      <Eyes mood={mood} />
      <Mouth mood={mood} />
    </g>
  </svg>
);

const Cubi = ({ message, mood = 'idle', visible }) => {
  const [jumps, setJumps] = useState(0);
  const face = jumps % 2 === 1 ? 'wow' : mood;

  return (
    <div
      className={`cubi pointer-events-none fixed bottom-4 right-4 z-40 flex items-end gap-2 sm:bottom-6 sm:right-6 ${
        visible ? 'is-visible' : ''
      }`}
    >
      <p
        key={message}
        className="cubi-bubble pointer-events-auto mb-14 sm:mb-28 max-w-[11rem] rounded-2xl rounded-br-sm border border-hairline-deep bg-surface/95 px-3 py-2 text-xs leading-snug sm:px-3.5 sm:py-2.5 text-ink shadow-xl backdrop-blur sm:max-w-[15rem] sm:text-sm"
        aria-live="polite"
      >
        {message}
      </p>
      <button
        type="button"
        onClick={() => setJumps((j) => j + 1)}
        aria-label="Cubi, la mascota de los proyectos. Tócalo para que salte."
        className="cubi-btn pointer-events-auto w-14 shrink-0 sm:w-28"
      >
        <span key={jumps} className={`block ${jumps ? 'cubi-jump' : ''}`}>
          <CubiSvg mood={face} />
        </span>
      </button>
    </div>
  );
};

export default Cubi;
