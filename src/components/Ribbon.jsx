import { useEffect, useRef } from 'react';

// La cinta de luz. Geometría bezier especificada con relleno degradado: una banda
// barrida, su pliegue cruzando por encima, un borde de ataque brillante y un
// reflejo especular. No imita una fotografía — cada punto de control está escrito
// aquí.
//
// Los segmentos rectos que cierran cada banda terminan fuera del viewBox (x>600,
// y>820) a propósito: dentro del área visible leen como un corte con tijera. Lo
// único que el ojo ve son las curvas y la disolución de la máscara.

const BAND =
  'M 300 -80 C 300 200 120 270 155 450 C 190 630 350 760 600 960 ' +
  'L 760 900 C 520 720 365 605 335 455 C 305 305 485 215 485 -80 Z';

const FOLD =
  'M 485 -80 C 485 215 305 305 335 455 C 365 605 520 720 760 900 ' +
  'L 760 790 C 540 645 420 550 400 440 C 380 330 560 230 560 -80 Z';

// Borde de ataque: el canto iluminado de la banda. Trazo abierto, sin cierre.
const EDGE = 'M 300 -80 C 300 200 120 270 155 450 C 190 630 350 760 600 960';

// Reflejo especular corriendo por dentro de la banda.
const SPECULAR = 'M 335 -80 C 335 205 175 272 200 450 C 225 628 370 745 590 930';

export default function Ribbon({ className = '' }) {
  const ref = useRef(null);

  // La página reacta al cursor y casi no se mueve con el scroll. El giro tiene su
  // origen en la base de la cinta, así que la cresta se desplaza mucho más que el
  // pie: la cinta se inclina, no se arrastra entera. Se escribe directo a custom
  // properties para no provocar renders de React.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      el.style.setProperty('--rr', `${(x * 1.4).toFixed(2)}deg`);
      el.style.setProperty('--ry', `${(y * 8).toFixed(2)}px`);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div
      ref={ref}
      className={`pointer-events-none select-none ${className}`}
      style={{
        '--rr': '0deg',
        '--ry': '0px',
        transformOrigin: '50% 100%',
        transform: 'rotate(var(--rr)) translate3d(0, var(--ry), 0)',
        transition: 'transform 0.3s var(--ease-prospectus)',
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 600 820" className="h-full w-full overflow-visible" fill="none">
        <defs>
          <linearGradient id="ribbon-band" x1="0.05" y1="0" x2="0.95" y2="1">
            <stop offset="0%" stopColor="var(--color-ribbon-teal)" />
            <stop offset="42%" stopColor="var(--color-ribbon-lilac)" />
            <stop offset="100%" stopColor="var(--color-ribbon-violet)" />
          </linearGradient>

          <linearGradient id="ribbon-fold" x1="0.2" y1="0" x2="0.8" y2="1">
            <stop offset="0%" stopColor="var(--color-ribbon-lilac)" />
            <stop offset="100%" stopColor="var(--color-ribbon-violet)" />
          </linearGradient>

          {/* El canto iluminado: casi blanco donde la luz pega, apagándose al caer. */}
          <linearGradient id="ribbon-edge" x1="0" y1="0" x2="0.4" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#eafaf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--color-ribbon-violet)" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="ribbon-specular" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="28%" stopColor="#ffffff" stopOpacity="0.75" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* La cinta se disuelve en el papel por abajo y por la derecha antes de
              tocar ningún borde: ningún canto recto llega a verse. */}
          <linearGradient id="ribbon-fade-y" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="48%" stopColor="#fff" stopOpacity="1" />
            <stop offset="92%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ribbon-fade-x" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="62%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <mask id="ribbon-mask-y">
            <rect x="-200" y="-120" width="1100" height="1140" fill="url(#ribbon-fade-y)" />
          </mask>
          <mask id="ribbon-mask-x">
            <rect x="-200" y="-120" width="1100" height="1140" fill="url(#ribbon-fade-x)" />
          </mask>

          <filter id="ribbon-halo" x="-50%" y="-30%" width="200%" height="180%">
            <feGaussianBlur stdDeviation="54" />
          </filter>
          <filter id="ribbon-soft" x="-40%" y="-20%" width="180%" height="160%">
            <feGaussianBlur stdDeviation="13" />
          </filter>
          <filter id="ribbon-crisp" x="-40%" y="-20%" width="180%" height="160%">
            <feGaussianBlur stdDeviation="1.6" />
          </filter>
        </defs>

        <g mask="url(#ribbon-mask-y)">
          <g mask="url(#ribbon-mask-x)">
            <path d={BAND} fill="url(#ribbon-band)" opacity="0.4" filter="url(#ribbon-halo)" />
            <path d={BAND} fill="url(#ribbon-band)" opacity="0.92" />
            <path
              d={FOLD}
              fill="url(#ribbon-fold)"
              opacity="0.45"
              style={{ mixBlendMode: 'multiply' }}
            />
            <path
              d={SPECULAR}
              stroke="url(#ribbon-specular)"
              strokeWidth="46"
              strokeLinecap="round"
              filter="url(#ribbon-soft)"
              style={{ mixBlendMode: 'screen' }}
            />
            <path
              d={EDGE}
              stroke="url(#ribbon-edge)"
              strokeWidth="3.5"
              strokeLinecap="round"
              filter="url(#ribbon-crisp)"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
