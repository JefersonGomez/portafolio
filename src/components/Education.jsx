import { GraduationCap, Award, ArrowUpRight, Sparkles } from 'lucide-react';
import { SiAnthropic, SiFreecodecamp, SiMongodb } from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import { education, certifications, certificationsUrl } from '../data/portfolioData';
import StudyDoodle from './StudyDoodle';
import { useLang } from '../i18n';

const MARKS = { SiAnthropic, SiFreecodecamp, SiMongodb, FaAws, Sparkles };

const Education = () => {
  const { t } = useLang();
  return (
  <section id="education" className="relative overflow-hidden border-t border-hairline">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse 30% 40% at 78% 30%, color-mix(in srgb, var(--color-violet) 13%, transparent), transparent 70%)',
      }}
    />
    <div className="relative mx-auto max-w-[84rem] px-6 py-24 lg:px-12 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8">
          <p className="section-eyebrow">
            <span className="text-cyan">{'// '}</span>{t({ es: 'formación', en: 'education' })}
          </p>
          <h2 className="section-title mt-4 max-w-[20ch]">
            {t({ es: 'Aprender es parte', en: 'Learning is part' })}{' '}
            <span className="text-cyan">{t({ es: 'del trabajo.', en: 'of the job.' })}</span>
          </h2>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-body">
            {t({
              es: 'La universidad me da la base; los cursos y certificaciones me mantienen al día con la nube, las bases de datos y la IA.',
              en: 'University gives me the foundation; courses and certifications keep me current with the cloud, databases and AI.',
            })}
          </p>

          <div className="mt-10 flex items-start gap-5 rounded-xl border border-hairline bg-surface/70 px-6 py-6 lg:px-8">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-hairline-deep bg-ground text-cyan">
              <GraduationCap size={24} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-xs text-muted">
                <span className="text-cyan">{'// '}</span>
                {t(education.status).toLowerCase()}
              </span>
              <span className="text-xl font-medium text-ink">{education.school}</span>
              {education.degree && <span className="text-body">{t(education.degree)}</span>}
            </div>
          </div>
        </div>

        <div className="mx-auto w-[min(17rem,70vw)] lg:col-span-4 lg:w-full lg:max-w-[19rem]">
          <StudyDoodle />
        </div>
      </div>

      {certifications.length > 0 && (
        <>
          <div className="mt-16 flex items-center gap-4">
            <h3 className="section-eyebrow shrink-0">
              <span className="text-cyan">{'// '}</span>{t({ es: 'certificaciones', en: 'certifications' })}
            </h3>
            <span className="h-px flex-1 bg-hairline" aria-hidden="true" />
          </div>
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
                        {cert.issuer} · {t(cert.year)}
                      </span>
                      <span className="sr-only">{t({ es: '(ver credencial en LinkedIn)', en: '(view credential on LinkedIn)' })}</span>
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
};

export default Education;
