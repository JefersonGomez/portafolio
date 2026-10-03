import { GraduationCap, Award, ArrowUpRight } from 'lucide-react';
import { SiAnthropic, SiFreecodecamp } from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import { education, certifications, certificationsUrl } from '../data/portfolioData';

const MARKS = { SiAnthropic, SiFreecodecamp, FaAws };

const Education = () => (
  <section id="education" className="border-t border-hairline">
    <div className="mx-auto max-w-[84rem] px-6 py-24 lg:px-12 lg:py-32">
      <h2 className="max-w-[20ch] text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.03em] text-ink">
        Formación
      </h2>

      <div className="mt-14 flex items-start gap-5 rounded-xl border border-hairline bg-surface px-6 py-6 lg:px-8">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-violet-wash text-violet">
          <GraduationCap size={24} strokeWidth={1.75} aria-hidden="true" />
        </span>
        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
            {education.status}
          </span>
          <span className="text-xl font-medium text-ink">{education.school}</span>
          {education.degree && <span className="text-body">{education.degree}</span>}
        </div>
      </div>

      {certifications.length > 0 && (
        <>
          <h3 className="mt-16 border-t border-hairline pt-5 text-xs font-medium uppercase tracking-[0.12em] text-muted">
            Certificaciones
          </h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => {
              const Mark = MARKS[cert.icon] ?? Award;
              return (
                <li key={cert.name}>
                  <a
                    href={certificationsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-full items-start gap-4 rounded-xl border border-hairline bg-surface px-5 py-5 transition-[border-color,transform] duration-300 ease-prospectus hover:-translate-y-1 hover:border-violet"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-violet-wash text-violet">
                      <Mark size={22} aria-hidden="true" />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col gap-1.5">
                      <span className="font-medium leading-snug text-ink">{cert.name}</span>
                      <span className="text-sm text-muted">
                        {cert.issuer} · {cert.year}
                      </span>
                      <span className="sr-only">(ver credencial en LinkedIn)</span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="shrink-0 text-muted group-hover:text-violet"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  </section>
);

export default Education;
