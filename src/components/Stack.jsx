import { useEffect, useRef, useState } from 'react';
import {
  SiTypescript,
  SiJavascript,
  SiGo,
  SiExpress,
  SiGin,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiGit,
  SiGithub,
  SiClaude,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import { techStack, techLevels } from '../data/portfolioData';

// Logos oficiales (Simple Icons vía react-icons) en monocromo tinta. En sus
// colores de marca serían catorce acentos compitiendo con el violeta, que en este
// sistema está racionado a la acción primaria.
const MARKS = {
  SiTypescript,
  SiJavascript,
  SiGo,
  SiExpress,
  SiGin,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiGit,
  SiGithub,
  SiClaude,
  FaAws,
};

// Tres marcas ruleadas. Las apagadas se dibujan con la misma intención que las
// encendidas: lo que falta es información, no un hueco.
function Level({ level }) {
  return (
    <span className="flex items-center gap-1" aria-hidden="true">
      {[1, 2, 3].map((tick) => (
        <span
          key={tick}
          className={`h-0.5 w-3 rounded-full transition-colors duration-300 ease-prospectus ${
            tick <= level ? 'bg-ink' : 'bg-hairline'
          }`}
        />
      ))}
    </span>
  );
}

const Stack = () => {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: '-8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  let index = 0;

  return (
    <section id="stack" ref={ref} className="border-t border-hairline">
      <div className="mx-auto max-w-[84rem] px-6 py-24 lg:px-12 lg:py-32">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-[46ch]">
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.03em] text-ink">
              Las herramientas, y hasta dónde llego con cada una.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-body">
              El nivel va declarado en cada etiqueta. Prefiero decirlo acá que descubrirlo en
              una entrevista.
            </p>
          </div>

          <dl className="flex shrink-0 flex-col gap-3">
            {[3, 2, 1].map((level) => (
              <div key={level} className="flex items-center gap-3">
                <dt className="sr-only">Nivel</dt>
                <Level level={level} />
                <dd className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
                  {techLevels[level]}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 flex flex-col gap-12 lg:mt-20 lg:gap-14">
          {techStack.map((row) => (
            <section key={row.group} aria-labelledby={`stack-${row.group}`}>
              <h3
                id={`stack-${row.group}`}
                className="border-t border-hairline pt-5 text-xs font-medium uppercase tracking-[0.12em] text-muted"
              >
                {row.group}
              </h3>

              <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {row.items.map((item) => {
                  const Mark = MARKS[item.icon];
                  const delay = `${(index++ % 14) * 40}ms`;
                  return (
                    <li
                      key={item.name}
                      style={{ transitionDelay: seen ? delay : '0ms' }}
                      className={`group flex items-center gap-3.5 rounded-lg border border-hairline bg-surface px-4 py-3.5 transition-[opacity,transform,border-color] duration-500 ease-rise hover:border-hairline-deep ${
                        seen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                      }`}
                    >
                      {Mark && (
                        <Mark
                          size={24}
                          aria-hidden="true"
                          className="shrink-0 text-muted transition-[color,transform] duration-300 ease-prospectus group-hover:-translate-y-0.5 group-hover:text-ink"
                        />
                      )}
                      <span className="flex min-w-0 flex-col gap-2">
                        <span className="truncate text-[0.9375rem] font-medium leading-none text-ink">
                          {item.name}
                        </span>
                        <Level level={item.level} />
                        <span className="sr-only">{techLevels[item.level]}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
