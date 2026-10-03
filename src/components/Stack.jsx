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
import { techStack } from '../data/portfolioData';

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
        <div className="max-w-[46ch]">
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.03em] text-ink">
            Las herramientas con las que construyo.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-body">
            Lo que uso en el día a día para llevar un proyecto de la idea a producción.
          </p>
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
                  const delay = `${index++ * 70}ms`;
                  return (
                    <li
                      key={item.name}
                      style={{ animationDelay: delay }}
                      className={`stack-chip relative flex items-center gap-3.5 overflow-hidden rounded-lg border border-hairline bg-surface px-4 py-4 ${
                        seen ? 'is-seen' : 'opacity-0'
                      }`}
                    >
                      {Mark && (
                        <Mark
                          size={26}
                          aria-hidden="true"
                          style={{ animationDelay: delay }}
                          className="stack-mark shrink-0"
                        />
                      )}
                      <span className="truncate text-[0.9375rem] font-medium leading-none text-ink">
                        {item.name}
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
