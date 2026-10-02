import { ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { SealPersonal } from './Seal';
import Ribbon from './Ribbon';

const Hero = () => (
  <section id="home" className="relative overflow-hidden">
    {/* La cinta entra por el borde superior y cae por la derecha. En móvil se
        mantiene fuera de la columna del titular. */}
    <Ribbon className="pointer-events-none absolute -top-24 right-[-58%] h-[112%] w-[92%] opacity-55 sm:right-[-40%] sm:w-[76%] sm:opacity-70 lg:-top-28 lg:right-[-8%] lg:h-[140%] lg:w-[54%] lg:opacity-100" />

    <div className="relative mx-auto max-w-[84rem] px-6 lg:px-12">
      <div className="grid items-center gap-16 py-20 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="rise lg:col-span-7">
          <h1 className="text-[clamp(3rem,6.5vw,5.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-ink">
            Backend sólido.
            <br />
            <span className="text-violet">Frontend claro.</span>
          </h1>

          <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-body sm:text-xl">
            {personalInfo.role}. {personalInfo.location}.
          </p>

          <p className="mt-5 flex items-center gap-2.5 text-[0.9375rem] text-body">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet" aria-hidden="true" />
            {personalInfo.availability}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-violet px-6 py-3.5 text-[0.9375rem] font-medium text-white transition-colors duration-300 ease-prospectus hover:bg-violet-deep active:bg-violet-active"
            >
              Ver proyectos
              <ArrowRight
                size={17}
                strokeWidth={1.75}
                className="transition-transform duration-300 ease-prospectus group-hover:translate-x-0.5"
              />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center rounded-lg border border-violet bg-surface px-6 py-3.5 text-[0.9375rem] font-medium text-violet transition-colors duration-300 ease-prospectus hover:bg-violet-wash"
            >
              Escribime
            </a>
          </div>
        </div>

        {/* El único objeto oscuro de la página, solo en la luz. */}
        <div className="flex justify-center lg:col-span-5 lg:justify-end lg:pr-6">
          <SealPersonal
            name={personalInfo.name}
            className="h-auto w-[min(20rem,70vw)] text-ink opacity-95"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
