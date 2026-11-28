import { personalInfo, education } from '../data/portfolioData';
import { useLang } from '../i18n';

// El retrato va en círculo, dentro de un anillo de gradiente que gira despacio.
// Sin filtros de color sobre la foto: es una persona, no un elemento del sistema.

const facts = [
  { label: 'base', value: personalInfo.location },
  { label: { es: 'estudio', en: 'studies' }, value: education.degree },
  { label: { es: 'enfoque', en: 'focus' }, value: { es: 'Backend, APIs e IA aplicada', en: 'Backend, APIs and applied AI' } },
];

const About = () => {
  const { t } = useLang();
  return (
  <section id="about" className="relative overflow-hidden border-t border-hairline">
    {/* Halo detrás del retrato, mismo lenguaje que el hero */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse 35% 45% at 22% 50%, color-mix(in srgb, var(--color-violet) 12%, transparent), transparent 70%)',
      }}
    />

    <div className="relative mx-auto max-w-[84rem] px-6 py-24 lg:px-12 lg:py-32">
      <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
        {/* Retrato */}
        <figure className="flex flex-col items-center lg:col-span-5">
          <div className="portrait relative w-[min(22rem,78vw)]">
            <div className="portrait-ring absolute -inset-2 rounded-full" aria-hidden="true" />
            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-ground bg-surface">
              <img
                src={personalInfo.photo}
                width={personalInfo.photoWidth}
                height={personalInfo.photoHeight}
                alt={`${t({ es: 'Retrato de', en: 'Portrait of' })} ${personalInfo.name}`}
                loading="lazy"
                decoding="async"
                className="h-full w-full scale-[1.35] object-cover object-[50%_32%] transition-transform duration-700 ease-prospectus hover:scale-[1.42]"
              />
            </div>

            {/* Chips flotando alrededor */}
            <span className="portrait-chip absolute -left-4 top-[14%] rounded-full border border-hairline-deep bg-surface/90 px-3 py-1.5 font-mono text-xs text-ink shadow-lg sm:-left-10">
              <span className="text-cyan">{'</>'}</span> full-stack
            </span>
            <span className="portrait-chip portrait-chip--late absolute -right-2 bottom-[12%] rounded-full border border-hairline-deep bg-surface/90 px-3 py-1.5 font-mono text-xs text-ink shadow-lg sm:-right-8">
              <span className="text-violet-active">✦</span> + IA
            </span>
          </div>

          <figcaption className="mt-8 font-mono text-xs text-muted">
            <span className="text-cyan">{'// '}</span>
            {personalInfo.name}
          </figcaption>
        </figure>

        {/* Texto */}
        <div className="lg:col-span-7">
          <p className="section-eyebrow">
            <span className="text-cyan">{'// '}</span>{t({ es: 'sobre mí', en: 'about me' })}
          </p>

          <h2 className="section-title mt-4 max-w-[16ch]">
            {t({ es: 'Lo que no se ve es lo que tiene que', en: "What you don't see is what has to" })}{' '}
            <span className="text-cyan">{t({ es: 'aguantar.', en: 'hold up.' })}</span>
          </h2>

          <div className="mt-8 flex max-w-[58ch] flex-col gap-6 text-lg leading-relaxed text-body">
            <p>
              {t({
                es: 'Trabajo del lado del servidor: APIs, modelado de datos, autenticación y la infraestructura que las sostiene. Me interesa la arquitectura más que la función suelta — cómo se ordenan las piezas para que el sistema siga siendo entendible cuando crece y para que otro pueda leerlo sin que nadie se lo explique.',
                en: 'I work on the server side: APIs, data modeling, authentication and the infrastructure behind them. I care more about architecture than about any single function — how the pieces fit so the system stays understandable as it grows, and so someone else can read it without needing it explained.',
              })}
            </p>
            <p>
              {t({
                es: 'Construyo soluciones para problemas concretos, no ejercicios de práctica. Un problema real impone requisitos que ningún tutorial pone enfrente: datos sucios, permisos, estados imprevistos y alguien esperando que funcione. Por eso todo lo que muestro acá está terminado, público y andando.',
                en: "I build solutions for concrete problems, not practice exercises. A real problem brings requirements no tutorial shows you: messy data, permissions, unexpected states and someone waiting for it to work. That's why everything I show here is finished, public and running.",
              })}
            </p>
          </div>

          <dl className="mt-10 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={t(fact.label)} className="bg-surface/70 px-5 py-4">
                <dt className="font-mono text-xs text-muted">
                  <span className="text-cyan">{'// '}</span>
                  {t(fact.label)}
                </dt>
                <dd className="mt-1.5 text-[0.9375rem] leading-snug text-ink">{t(fact.value)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;
