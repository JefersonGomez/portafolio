import { FaGithub } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

/* Mascota original del portfolio: un robotito con visor que entra en 3D,
   flota, parpadea y saluda. Todo es SVG + CSS (ver .bot-* en index.css). */
const HeroBot = ({ className = '' }) => (
  <a
    href={personalInfo.github}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Ver mi GitHub"
    className={`bot group block [perspective:900px] ${className}`}
  >
    {/* Globito con el enlace */}
    <span className="bot-bubble absolute -left-10 top-[6%] z-10 flex items-center gap-2 whitespace-nowrap rounded-full border border-hairline-deep bg-surface/90 px-3.5 py-1.5 font-mono text-xs text-ink shadow-lg transition-colors duration-300 group-hover:border-cyan group-hover:text-cyan">
      <FaGithub size={14} aria-hidden="true" />
      mi código
    </span>

    <div className="bot-enter">
      <div className="bot-float">
        <svg viewBox="0 0 220 260" className="h-auto w-full overflow-visible" aria-hidden="true">
          <defs>
            <radialGradient id="bot-shell" cx="35%" cy="28%" r="80%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="45%" stopColor="#d9d6f5" />
              <stop offset="100%" stopColor="#7c6cf2" />
            </radialGradient>
            <radialGradient id="bot-body" cx="35%" cy="20%" r="90%">
              <stop offset="0%" stopColor="#f1efff" />
              <stop offset="55%" stopColor="#a99ff5" />
              <stop offset="100%" stopColor="#4f41c9" />
            </radialGradient>
            <linearGradient id="bot-visor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1d1a33" />
              <stop offset="100%" stopColor="#0b0a14" />
            </linearGradient>
            <radialGradient id="bot-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#66d9ed" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#66d9ed" stopOpacity="0" />
            </radialGradient>
            <filter id="bot-blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>

          {/* Antena */}
          <line x1="110" y1="52" x2="110" y2="26" stroke="#a99ff5" strokeWidth="5" strokeLinecap="round" />
          <circle className="bot-antenna" cx="110" cy="20" r="14" fill="url(#bot-glow)" />
          <circle cx="110" cy="20" r="7" fill="#66d9ed" />
          <circle cx="107.5" cy="17.5" r="2.2" fill="#ffffff" opacity="0.9" />

          {/* Brazo izquierdo (quieto) */}
          <path d="M52 168 Q30 182 34 206" stroke="url(#bot-body)" strokeWidth="16" strokeLinecap="round" fill="none" />
          <circle cx="34" cy="210" r="11" fill="url(#bot-shell)" />

          {/* Brazo derecho (saluda) */}
          <g className="bot-wave">
            <path d="M168 166 Q192 150 194 124" stroke="url(#bot-body)" strokeWidth="16" strokeLinecap="round" fill="none" />
            <circle cx="194" cy="118" r="11" fill="url(#bot-shell)" />
          </g>

          {/* Cuerpo */}
          <rect x="54" y="142" width="112" height="90" rx="34" fill="url(#bot-body)" />
          <ellipse cx="88" cy="160" rx="22" ry="8" fill="#ffffff" opacity="0.35" />
          {/* Pecho: </> */}
          <rect x="82" y="176" width="56" height="30" rx="10" fill="url(#bot-visor)" />
          <text x="110" y="197" textAnchor="middle" fontFamily="Roboto Mono, monospace" fontSize="15" fontWeight="500" fill="#66d9ed">
            &lt;/&gt;
          </text>

          {/* Cabeza */}
          <rect x="34" y="50" width="152" height="104" rx="44" fill="url(#bot-shell)" />
          {/* Orejas */}
          <rect x="22" y="84" width="16" height="36" rx="8" fill="#7c6cf2" />
          <rect x="182" y="84" width="16" height="36" rx="8" fill="#7c6cf2" />
          {/* Visor */}
          <rect x="52" y="70" width="116" height="66" rx="30" fill="url(#bot-visor)" />
          <path d="M66 82 Q90 72 120 74" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="5" strokeLinecap="round" fill="none" />
          {/* Ojos */}
          <g className="bot-eyes">
            <ellipse cx="88" cy="104" rx="14" ry="14" fill="#66d9ed" filter="url(#bot-blur)" opacity="0.7" />
            <ellipse cx="132" cy="104" rx="14" ry="14" fill="#66d9ed" filter="url(#bot-blur)" opacity="0.7" />
            <ellipse cx="88" cy="104" rx="9" ry="11" fill="#66d9ed" />
            <ellipse cx="132" cy="104" rx="9" ry="11" fill="#66d9ed" />
            <circle cx="91" cy="100" r="3" fill="#ffffff" />
            <circle cx="135" cy="100" r="3" fill="#ffffff" />
          </g>
          {/* Sonrisa */}
          <path d="M100 122 Q110 130 120 122" stroke="#66d9ed" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          {/* Brillo de la cabeza */}
          <ellipse cx="72" cy="62" rx="20" ry="7" fill="#ffffff" opacity="0.7" transform="rotate(-12 72 62)" />
        </svg>
      </div>
      {/* Sombra en el piso, respira con la flotación */}
      <div className="bot-shadow mx-auto -mt-2 h-4 w-1/2 rounded-[50%] bg-violet/40 blur-md" />
    </div>
  </a>
);

export default HeroBot;
