import { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { personalInfo } from '../data/portfolioData';

const channels = [
  {
    label: 'Teléfono',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
    Icon: Phone,
  },
  {
    label: 'GitHub',
    value: personalInfo.github.replace('https://', ''),
    href: personalInfo.github,
    Icon: FaGithub,
  },
  personalInfo.linkedin && {
    label: 'LinkedIn',
    value: personalInfo.linkedin.replace(/^https:\/\/(www\.)?/, ''),
    href: personalInfo.linkedin,
    Icon: FaLinkedin,
  },
  { label: 'Ubicación', value: personalInfo.contactLocation, Icon: MapPin },
].filter(Boolean);

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Sin permiso de portapapeles: el mailto sigue funcionando.
    }
  };

  return (
    <section id="contact" className="border-t border-hairline">
      <div className="mx-auto max-w-[84rem] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h2 className="max-w-[16ch] text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.03em] text-ink">
              ¿Construimos algo <span className="text-violet">juntos?</span>
            </h2>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-body">
              {personalInfo.availability}. Escribime y te respondo a la brevedad.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2.5 rounded-lg bg-violet px-6 py-3.5 text-[0.9375rem] font-medium text-white transition-colors duration-300 ease-prospectus hover:bg-violet-deep active:bg-violet-active"
              >
                <Mail size={18} strokeWidth={1.75} aria-hidden="true" />
                {personalInfo.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-lg border border-violet bg-surface px-4 py-3.5 text-[0.9375rem] font-medium text-violet transition-colors duration-300 ease-prospectus hover:bg-violet-wash"
              >
                {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
                <span aria-live="polite">{copied ? 'Copiado' : 'Copiar'}</span>
              </button>
            </div>
          </div>

          <ul className="flex flex-col gap-4 lg:col-span-6">
            {channels.map(({ label, value, href, Icon }) => {
              const body = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-hairline bg-ground text-muted transition-colors duration-300 ease-prospectus group-hover:border-violet group-hover:text-violet">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="flex min-w-0 flex-col gap-1.5">
                    <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
                      {label}
                    </span>
                    <span className="truncate text-[1.0625rem] font-medium text-ink">{value}</span>
                  </span>
                </>
              );
              return (
                <li
                  key={label}
                  className="rounded-xl border border-hairline bg-surface transition-colors duration-300 ease-prospectus hover:border-hairline-deep"
                >
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="group flex items-center gap-5 px-6 py-5 transition-transform duration-300 ease-prospectus hover:translate-x-1"
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="flex items-center gap-5 px-6 py-5">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <footer className="border-t border-hairline">
        <div className="mx-auto flex max-w-[84rem] flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:justify-between lg:px-12">
          <span>© {new Date().getFullYear()} {personalInfo.name}</span>
          <span>{personalInfo.location}</span>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
