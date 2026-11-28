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
  SiReact,
  SiTailwindcss,
  SiVite,
  SiMongodb,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import { techStack } from '../data/portfolioData';
import StackBot from './StackBot';
import { useLang } from '../i18n';

// Logos oficiales (Simple Icons vía react-icons) en monocromo; al pasar el
// cursor se encienden en cian, el acento de código del sitio.
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
  SiReact,
  SiTailwindcss,
  SiVite,
  SiMongodb,
  FaAws,
};

// "Bases de datos" -> "bases_de_datos", para que cada grupo sea una clave del objeto
const toKey = (group) =>
  group
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/\s+/g, '_');

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
      { rootMargin: '-12% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const { t } = useLang();
  let index = 0;
  const lastLine = techStack.length + 2;

  return (
    <section id="stack" ref={ref} className="relative overflow-hidden border-t border-hairline">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 30% 40% at 20% 55%, color-mix(in srgb, var(--color-violet) 13%, transparent), transparent 70%), radial-gradient(ellipse 35% 40% at 75% 50%, color-mix(in srgb, var(--color-cyan) 5%, transparent), transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-[84rem] px-6 py-24 lg:px-12 lg:py-32">
        <div className="max-w-[52ch]">
          <p className="section-eyebrow">
            <span className="text-cyan">{'// '}</span>stack
          </p>
          <h2 className="section-title mt-4">
            {t({ es: 'Las herramientas con las que', en: 'The tools I' })}{' '}
            <span className="text-cyan">{t({ es: 'construyo.', en: 'build with.' })}</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-body">
            {t({ es: 'Lo que uso en el día a día para llevar un proyecto de la idea a producción.', en: 'What I use day to day to take a project from idea to production.' })}
          </p>
        </div>

        <div className="mt-16 grid items-center gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          {/* El robotito en su computadora */}
          <div className={`relative mx-auto w-[min(22rem,80vw)] lg:col-span-4 lg:w-full ${seen ? 'is-seen' : ''}`}>
            <div className="sbot-bubble absolute -top-6 right-0 z-10 rounded-2xl rounded-br-sm border border-hairline-deep bg-surface/90 px-4 py-2.5 font-mono text-sm text-ink shadow-lg sm:-right-4">
              <span className="text-cyan">{'> '}</span>{t({ es: 'este es mi stack', en: 'this is my stack' })}
              <span className="sbot-caret ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 bg-cyan" aria-hidden="true" />
            </div>
            <div className="sbot-enter pt-10">
              <StackBot />
            </div>
          </div>

          {/* Editor con el stack como objeto */}
          <div className={`lg:col-span-8 ${seen ? 'is-seen' : ''}`}>
            <div className="sbot-editor overflow-hidden rounded-xl border border-hairline bg-surface/80 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-3 border-b border-hairline px-4 py-2.5">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
                </span>
                <span className="rounded-md bg-ground px-3 py-1 font-mono text-[0.6875rem] text-muted">
                  stack.ts
                </span>
              </div>

              <div className="overflow-x-auto px-3 py-5 font-mono text-sm sm:px-5">
                <p className="flex gap-4">
                  <span className="w-5 shrink-0 select-none text-right text-muted/60">1</span>
                  <span>
                    <span className="text-violet-active">const</span>{' '}
                    <span className="text-ink">stack</span> <span className="text-muted">=</span>{' '}
                    <span className="text-muted">{'{'}</span>
                  </span>
                </p>

                <dl>
                  {techStack.map((row, r) => (
                    <div key={toKey(t(row.group))} className="flex gap-4 py-1.5">
                      <span className="w-5 shrink-0 select-none pt-2 text-right text-muted/60">{r + 2}</span>
                      <div className="flex min-w-0 flex-col gap-2 pl-4 sm:flex-row sm:items-start sm:gap-3">
                        <dt className="shrink-0 pt-2 text-cyan sm:w-52">
                          {toKey(t(row.group))}
                          <span className="text-muted">:</span>
                        </dt>
                        <dd>
                          <ul className="flex flex-wrap items-center gap-2" aria-label={t(row.group)}>
                            {row.items.map((item) => {
                              const Mark = MARKS[item.icon];
                              const delay = `${300 + index++ * 45}ms`;
                              return (
                                <li
                                  key={item.name}
                                  style={{ animationDelay: delay }}
                                  className={`stack-chip relative flex items-center gap-2.5 overflow-hidden rounded-lg border border-hairline bg-ground/70 px-3 py-2 ${
                                    seen ? 'is-seen' : 'opacity-0'
                                  }`}
                                >
                                  {Mark && (
                                    <Mark
                                      size={18}
                                      aria-hidden="true"
                                      style={{ animationDelay: delay }}
                                      className="stack-mark shrink-0"
                                    />
                                  )}
                                  <span className="font-sans text-[0.875rem] font-medium leading-none text-ink">
                                    {item.name}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>

                <p className="flex gap-4">
                  <span className="w-5 shrink-0 select-none text-right text-muted/60">{lastLine}</span>
                  <span>
                    <span className="text-muted">{'};'}</span>
                    <span className="sbot-caret ml-1 inline-block h-4 w-2 translate-y-0.5 bg-cyan/80" aria-hidden="true" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
