import { ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import HeroBot from './HeroBot';
import { useLang } from '../i18n';

const Hero = () => {
  const { t } = useLang();
  return (
  <section id="home" className="relative overflow-hidden">
    {/* Halo de fondo: violeta y cian muy apagados detrás del titular */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse 60% 45% at 50% 42%, color-mix(in srgb, var(--color-violet) 16%, transparent), transparent 70%), radial-gradient(ellipse 35% 30% at 70% 60%, color-mix(in srgb, var(--color-cyan) 7%, transparent), transparent 70%)',
      }}
    />

    <div className="relative mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-[96rem] flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      {/* Mascota: arriba del nombre en móvil, flotando a la derecha en escritorio */}
      <HeroBot className="mb-6 w-28 sm:w-32 lg:absolute lg:bottom-[12%] lg:right-[5%] lg:mb-0 lg:w-44 xl:right-[8%] xl:w-52" />

      <div className="rise flex flex-col items-center">
        {/* El nombre, como firma encima del titular */}
        <p className="font-mono text-[0.9375rem] text-body sm:text-lg">
          <span className="text-cyan">{'// '}</span>
          {t({ es: 'hola, soy', en: "hi, I'm" })} <span className="font-medium text-ink">{personalInfo.name}</span>
        </p>

        <h1 className="mt-6 font-display text-[clamp(2.75rem,11vw,10rem)] font-bold uppercase leading-[0.95] tracking-[0.01em] text-ink [text-shadow:1px_3px_11px_rgba(0,0,0,0.3)]">
          Full-stack
          <br />
          <span className="text-[0.62em] tracking-[0.04em]">
            Developer <span className="text-cyan">{t({ es: '+ IA', en: '+ AI' })}</span>
          </span>
        </h1>

        <p className="mt-8 max-w-[52ch] font-mono text-sm leading-relaxed text-body sm:text-base">
          {t({
            es: 'Construyo productos completos, del backend a la interfaz, y les sumo inteligencia artificial que resuelve problemas reales.',
            en: 'I build complete products, from the backend to the interface, and add AI that solves real problems.',
          })}
        </p>

        <p className="mt-5 text-[0.9375rem] text-muted">
          <span className="relative mr-2.5 inline-flex h-2 w-2 -translate-y-px" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
          </span>
          {t(personalInfo.availability)} · {personalInfo.location}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-violet px-6 py-3.5 text-[0.9375rem] font-medium text-white transition-colors duration-300 ease-prospectus hover:bg-violet-deep"
          >
            {t({ es: 'Ver proyectos', en: 'See projects' })}
            <ArrowRight
              size={17}
              strokeWidth={1.75}
              className="transition-transform duration-300 ease-prospectus group-hover:translate-x-0.5"
            />
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              // Baja a Contacto y después abre el correo. El mailto va con retraso:
              // si sale en el mismo clic, el navegador corta el scroll suave.
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              setTimeout(() => {
                window.location.href = `mailto:${personalInfo.email}`;
              }, 800);
            }}
            className="inline-flex items-center rounded-lg border border-hairline-deep px-6 py-3.5 text-[0.9375rem] font-medium text-ink transition-colors duration-300 ease-prospectus hover:border-cyan hover:text-cyan"
          >
            {t({ es: 'Escribime', en: 'Get in touch' })}
          </a>

          <a
            href={t(personalInfo.cv)}
            download
            className="group inline-flex items-center gap-2 rounded-lg px-4 py-3.5 font-mono text-sm text-body transition-colors duration-300 ease-prospectus hover:text-cyan"
          >
            <Download
              size={16}
              strokeWidth={1.9}
              aria-hidden="true"
              className="transition-transform duration-300 ease-prospectus group-hover:translate-y-0.5"
            />
            {t({ es: 'descargar cv', en: 'download cv' })}
          </a>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero;
