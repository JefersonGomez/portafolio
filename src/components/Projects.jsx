import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Clock, Globe, Trophy } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import Cubi from './Cubi';

// Tres pesos visuales: los proyectos fuertes van grandes y alternados, el
// intermedio ocupa una fila ancha y los menores comparten fila en tarjetas.

const pad = (n) => String(n).padStart(2, '0');
const host = (url) => (url ? new URL(url).host : null);

/* Captura dentro de una ventana de navegador */
const BrowserFrame = ({ project, className = '' }) => (
  <div
    className={`overflow-hidden rounded-xl border border-hairline bg-surface shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] ${className}`}
  >
    <div className="flex items-center gap-3 border-b border-hairline px-4 py-2.5">
      <span className="flex gap-1.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
      </span>
      <span className="truncate rounded-md bg-ground px-3 py-1 font-mono text-[0.6875rem] text-muted">
        {host(project.site ?? project.url) ?? `${project.id}.app · próximamente`}
      </span>
    </div>
    {project.figureIsLogo ? (
      <RaffleBoard project={project} />
    ) : (
      <div className="overflow-hidden">
        <img
          src={project.figure}
          alt={project.figureAlt}
          width={project.figureWidth}
          height={project.figureHeight}
          loading="lazy"
          decoding="async"
          className={`aspect-[16/9] w-full object-cover ${project.figurePosition === 'center' ? 'object-center' : 'object-top'} transition-transform duration-700 ease-prospectus group-hover:scale-[1.03]`}
        />
      </div>
    )}
  </div>
);

/* Para el proyecto que solo tiene logo: el logo sobre el tablero de números 00–99 */
const taken = new Set([3, 7, 12, 18, 21, 25, 33, 38, 41, 47, 52, 56, 64, 69, 70, 77, 81, 88, 93, 99]);
const RaffleBoard = ({ project }) => (
  <div className="relative aspect-[16/9] overflow-hidden bg-[#1c2326]">
    <div
      className="absolute inset-3 grid grid-cols-10 gap-1 opacity-40 transition-opacity duration-500 group-hover:opacity-60"
      aria-hidden="true"
    >
      {Array.from({ length: 100 }, (_, i) => (
        <span
          key={i}
          className={`flex items-center justify-center rounded-[3px] font-mono text-[0.5rem] sm:text-[0.5625rem] ${
            taken.has(i) ? 'bg-[#2fd4b6]/30 text-[#2fd4b6]' : 'bg-white/5 text-white/40'
          }`}
        >
          {pad(i)}
        </span>
      ))}
    </div>
    <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_45%_40%_at_center,#1c2326_55%,transparent)]">
      <img
        src={project.figure}
        alt={project.figureAlt}
        width={project.figureWidth}
        height={project.figureHeight}
        loading="lazy"
        decoding="async"
        className="w-[55%] max-w-[16rem]"
      />
    </div>
  </div>
);

const Links = ({ project }) => (
  <div className="flex flex-wrap items-center gap-3">
    {project.url ? (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group/link inline-flex items-center gap-2 rounded-lg bg-violet px-4 py-2.5 text-sm font-medium text-white transition-colors duration-300 ease-prospectus hover:bg-violet-deep"
      >
        Ver demo
        <ArrowUpRight
          size={16}
          strokeWidth={1.75}
          className="transition-transform duration-300 ease-prospectus group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
        />
      </a>
    ) : (
      <span className="inline-flex items-center gap-2 rounded-lg border border-dashed border-hairline-deep px-4 py-2.5 font-mono text-xs text-muted">
        <Clock size={14} strokeWidth={1.75} aria-hidden="true" />
        demo muy pronto
      </span>
    )}
    {project.site && (
      <a
        href={project.site}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-hairline-deep px-4 py-2.5 text-sm font-medium text-ink transition-colors duration-300 ease-prospectus hover:border-cyan hover:text-cyan"
      >
        <Globe size={15} strokeWidth={1.75} aria-hidden="true" />
        Sitio web
      </a>
    )}
    <a
      href={project.repo}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border border-hairline-deep px-4 py-2.5 text-sm font-medium text-ink transition-colors duration-300 ease-prospectus hover:border-cyan hover:text-cyan"
    >
      <FaGithub size={15} aria-hidden="true" />
      Código
    </a>
  </div>
);

const Stack = ({ items }) => (
  <ul className="flex flex-wrap gap-2">
    {items.map((tech) => (
      <li
        key={tech}
        className="rounded-md border border-hairline bg-surface/60 px-2.5 py-1 font-mono text-[0.75rem] text-body"
      >
        {tech}
      </li>
    ))}
  </ul>
);

const Meta = ({ project }) => (
  <p className="flex items-center gap-2 font-mono text-xs text-muted">
    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" aria-hidden="true" />
    {project.lastCommit}
    {project.commits && ` · ${project.commits} commits`}
  </p>
);

/* Número grande con contorno, como marca de agua del proyecto */
const Index = ({ n, className = '' }) => (
  <span
    aria-hidden="true"
    className={`font-display font-extrabold leading-none text-transparent [-webkit-text-stroke:1px_var(--color-hairline-deep)] ${className}`}
  >
    {pad(n)}
  </span>
);

const Featured = ({ project, n, flip, onEnter }) => (
  <article data-project={project.id} onMouseEnter={onEnter} className="group grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
    <div className={`relative lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2rem] opacity-60 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse at center, color-mix(in srgb, var(--color-violet) 22%, transparent), transparent 70%)',
        }}
      />
      <BrowserFrame project={project} />
    </div>

    <div className={`lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
      <div className="flex items-end gap-4">
        <Index n={n} className="text-[4.5rem]" />
        <span className="mb-2 rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-wider text-cyan">
          destacado
        </span>
      </div>

      <p className="mt-4 font-mono text-sm text-body">
        <span className="text-cyan">{'// '}</span>
        {project.tagline}
      </p>
      <h3 className="mt-2 font-display text-[clamp(2rem,3.4vw,3rem)] font-bold uppercase leading-none text-ink">
        {project.name}
      </h3>

      <p className="mt-5 leading-relaxed text-body">{project.description}</p>

      {project.highlights && (
        <ul className="mt-5 flex flex-col gap-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2.5 text-[0.9375rem] text-ink">
              <span className="font-mono text-cyan" aria-hidden="true">→</span>
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6">
        <Stack items={project.stack} />
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
        <Links project={project} />
        <Meta project={project} />
      </div>
    </div>
  </article>
);

const Wide = ({ project, n, onEnter }) => (
  <article data-project={project.id} onMouseEnter={onEnter} className="group grid items-center gap-8 rounded-2xl border border-hairline bg-surface/50 p-5 transition-colors duration-500 hover:border-hairline-deep sm:p-8 lg:grid-cols-12 lg:gap-12">
    <div className="lg:col-span-5">
      <BrowserFrame project={project} />
    </div>
    <div className="lg:col-span-7">
      <div className="flex items-center gap-4">
        <Index n={n} className="text-5xl" />
        <div>
          <p className="font-mono text-sm text-body">
            <span className="text-cyan">{'// '}</span>
            {project.tagline}
          </p>
          <h3 className="mt-1 font-display text-[clamp(1.6rem,2.6vw,2.25rem)] font-bold uppercase leading-none text-ink">
            {project.name}
          </h3>
        </div>
      </div>
      <p className="mt-5 max-w-[60ch] leading-relaxed text-body">{project.description}</p>
      <div className="mt-5">
        <Stack items={project.stack} />
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <Links project={project} />
        <Meta project={project} />
      </div>
    </div>
  </article>
);

const Card = ({ project, n, onEnter }) => (
  <article data-project={project.id} onMouseEnter={onEnter} className="group flex h-full flex-col rounded-2xl border border-hairline bg-surface/50 p-5 transition-colors duration-500 hover:border-hairline-deep sm:p-6">
    <BrowserFrame project={project} />
    <div className="mt-6 flex items-center gap-3">
      <Index n={n} className="text-4xl" />
      <div>
        <p className="font-mono text-xs text-body">
          <span className="text-cyan">{'// '}</span>
          {project.tagline}
        </p>
        <h3 className="mt-1 font-display text-2xl font-bold uppercase leading-none text-ink">
          {project.name}
        </h3>
      </div>
    </div>
    {project.award && (
      <p className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#f5c451]/40 bg-[#f5c451]/10 px-3 py-1 font-mono text-[0.6875rem] text-[#f5c451]">
        <Trophy size={13} strokeWidth={2} aria-hidden="true" />
        {project.award}
      </p>
    )}
    <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-body">{project.description}</p>
    <div className="mt-5">
      <Stack items={project.stack} />
    </div>
    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
      <Links project={project} />
      <Meta project={project} />
    </div>
  </article>
);

const Projects = () => {
  const numbered = projects.map((p, i) => ({ ...p, n: i + 1 }));
  const featured = numbered.filter((p) => p.tier === 'featured');
  const mid = numbered.filter((p) => p.tier === 'mid');
  const minor = numbered.filter((p) => p.tier === 'minor');

  // Cubi aparece mientras la sección está en pantalla y comenta el proyecto activo:
  // el que tiene el cursor encima o, si no, el que está más centrado al hacer scroll.
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const sectionIo = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      rootMargin: '-35% 0px -35% 0px',
    });
    const cardIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.dataset.project));
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    sectionIo.observe(section);
    section.querySelectorAll('[data-project]').forEach((el) => cardIo.observe(el));
    return () => {
      sectionIo.disconnect();
      cardIo.disconnect();
    };
  }, []);

  const current = projects.find((p) => p.id === active);
  const enter = (id) => () => setActive(id);

  return (
    <section id="projects" ref={sectionRef} className="border-t border-hairline">
      <div className="mx-auto max-w-[84rem] px-6 py-24 lg:px-12 lg:py-32">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="section-eyebrow">
              <span className="text-cyan">{'// '}</span>proyectos
            </p>
            <h2 className="section-title mt-4 max-w-[18ch]">
              Sistemas reales, <span className="text-cyan">construidos</span> y públicos.
            </h2>
          </div>
          <p className="max-w-[42ch] text-lg leading-relaxed text-body">
            Todo el código está abierto. Cada uno resuelve un problema distinto y el stack se
            eligió por el problema, no por costumbre.
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-24 lg:mt-24 lg:gap-32">
          {featured.map((p, i) => (
            <Featured key={p.id} project={p} n={p.n} flip={i % 2 === 1} onEnter={enter(p.id)} />
          ))}
        </div>

        <div className="mt-24 flex items-center gap-4 lg:mt-32">
          <p className="section-eyebrow shrink-0">
            <span className="text-cyan">{'// '}</span>más proyectos
          </p>
          <span className="h-px flex-1 bg-hairline" aria-hidden="true" />
        </div>

        <div className="mt-10 flex flex-col gap-6">
          {mid.map((p) => (
            <Wide key={p.id} project={p} n={p.n} onEnter={enter(p.id)} />
          ))}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {minor.map((p, i) => (
              <div
                key={p.id}
                className={
                  minor.length % 2 === 1 && i === minor.length - 1 ? 'md:col-span-2 xl:col-span-1' : undefined
                }
              >
                <Card project={p} n={p.n} onEnter={enter(p.id)} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Cubi
        visible={inView}
        mood={current ? 'happy' : 'idle'}
        message={current?.buddy ?? '¡Hola! Soy Cubi. Te cuento de cada proyecto 👀'}
      />
    </section>
  );
};

export default Projects;
