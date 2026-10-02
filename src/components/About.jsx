import { personalInfo } from '../data/portfolioData';

// El retrato va en lámina, igual que las figuras de los proyectos: borde hairline,
// radio de panel y pie de figura. Sin recortes geométricos sobre la silueta y sin
// filtros de color — es una persona, no un elemento del sistema.

const About = () => (
  <section id="about" className="border-t border-hairline">
    <div className="mx-auto max-w-[84rem] px-6 py-24 lg:px-12 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <figure className="lg:order-2 lg:col-span-4">
          <div className="rounded-xl border border-hairline bg-surface p-2.5">
            <img
              src={personalInfo.photo}
              width={personalInfo.photoWidth}
              height={personalInfo.photoHeight}
              alt={`Retrato de ${personalInfo.name}`}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-lg object-cover object-[center_26%]"
            />
          </div>
          <figcaption className="mt-4 text-xs font-medium uppercase tracking-[0.12em] text-muted">
            {personalInfo.name} · {personalInfo.location}
          </figcaption>
        </figure>

        <div className="lg:order-1 lg:col-span-8 lg:pr-12">
          <h2 className="max-w-[18ch] text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.03em] text-ink">
            Lo que no se ve es lo que tiene que aguantar.
          </h2>

          <div className="mt-8 flex max-w-[56ch] flex-col gap-6 text-lg leading-relaxed text-body">
            <p>
              Trabajo del lado del servidor: APIs, modelado de datos, autenticación y la
              infraestructura que las sostiene. Me interesa la arquitectura más que la función
              suelta — cómo se ordenan las piezas para que el sistema siga siendo entendible
              cuando crece y para que otro pueda leerlo sin que nadie se lo explique.
            </p>
            <p>
              Construyo soluciones para problemas concretos, no ejercicios de práctica. Un
              problema real impone requisitos que ningún tutorial pone enfrente: datos sucios,
              permisos, estados imprevistos y alguien esperando que funcione. Por eso todo lo
              que muestro acá está terminado, público y andando.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
