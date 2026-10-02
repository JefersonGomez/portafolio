import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { SealProject } from './Seal';
import RagPlate from './RagPlate';

// Cada proyecto es una entrada de prospecto: la lámina a la izquierda, el
// argumento a la derecha, separadas por una regla hairline. Sin tarjetas que
// encierren la fila entera — solo la lámina lleva borde, como una figura
// numerada en un documento.

const Figure = ({ project }) =>
  project.figure ? (
    <img
      src={project.figure}
      alt={project.figureAlt}
      width={project.figureWidth}
      height={project.figureHeight}
      loading="lazy"
      decoding="async"
      className="w-full rounded-lg"
    />
  ) : (
    <RagPlate className="h-auto w-full" />
  );

const Projects = () => (
  <section id="projects" className="border-t border-hairline">
    <div className="mx-auto max-w-[84rem] px-6 py-24 lg:px-12 lg:py-32">
      <div className="max-w-[46ch]">
        <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.03em] text-ink">
          Tres sistemas, construidos y públicos.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-body">
          Todo el código está abierto. Cada uno resuelve un problema distinto y el stack se
          eligió por el problema, no por costumbre.
        </p>
      </div>

      <ul className="mt-20 flex flex-col gap-20 lg:mt-24 lg:gap-28">
        {projects.map((project, i) => (
          <li
            key={project.id}
            className={
              i > 0 ? 'border-t border-hairline pt-20 lg:pt-28' : undefined
            }
          >
            <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="rounded-xl border border-hairline bg-surface p-2.5 lg:col-span-6">
                <Figure project={project} />
              </div>

              <div className="lg:col-span-6">
                <div className="flex items-center gap-4">
                  <SealProject
                    year={project.year}
                    className="h-11 w-11 shrink-0 text-muted"
                  />
                  <h3 className="text-[clamp(1.75rem,2.6vw,2.5rem)] font-medium leading-tight tracking-[-0.025em] text-ink">
                    {project.name}
                  </h3>
                </div>

                <p className="mt-6 max-w-[52ch] leading-relaxed text-body">
                  {project.description}
                </p>

                <dl className="mt-8 flex flex-col gap-5 border-t border-hairline pt-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
                    <dt className="shrink-0 text-xs font-medium uppercase tracking-[0.12em] text-muted sm:w-28">
                      Stack
                    </dt>
                    <dd className="text-[0.9375rem] leading-relaxed text-body">
                      {project.stack.join(' · ')}
                    </dd>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
                    <dt className="shrink-0 text-xs font-medium uppercase tracking-[0.12em] text-muted sm:w-28">
                      Último commit
                    </dt>
                    <dd className="flex items-center gap-2.5 text-[0.9375rem] text-body">
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet"
                        aria-hidden="true"
                      />
                      {project.lastCommit}
                    </dd>
                  </div>
                </dl>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-violet transition-colors duration-300 ease-prospectus hover:text-violet-deep"
                >
                  Ver el código
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.75}
                    className="transition-transform duration-300 ease-prospectus group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Projects;
