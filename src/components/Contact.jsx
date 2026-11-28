import { useEffect, useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, ArrowUp, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { personalInfo } from '../data/portfolioData';
import SendLetter from './SendLetter';
import { useLang } from '../i18n';

const phoneDigits = personalInfo.phone.replace(/\D/g, '');

const channels = [
  {
    label: 'WhatsApp',
    value: personalInfo.phone,
    href: `https://wa.me/${phoneDigits}`,
    Icon: FaWhatsapp,
  },
  {
    label: { es: 'Teléfono', en: 'Phone' },
    value: personalInfo.phone,
    href: `tel:+${phoneDigits}`,
    Icon: Phone,
  },
  {
    label: 'LinkedIn',
    value: { es: 'Ver perfil', en: 'View profile' },
    href: personalInfo.linkedin,
    Icon: FaLinkedin,
  },
  {
    label: 'GitHub',
    value: personalInfo.github.split('/').pop(),
    href: personalInfo.github,
    Icon: FaGithub,
  },
];

// Hora local en Costa Rica, para que quien escribe sepa cuándo esperar respuesta
const useCostaRicaTime = () => {
  const format = () =>
    new Intl.DateTimeFormat('es-CR', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/Costa_Rica',
    }).format(new Date());
  const [time, setTime] = useState(format);
  useEffect(() => {
    const id = setInterval(() => setTime(format()), 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
};

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const time = useCostaRicaTime();
  const { t } = useLang();

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
    <section id="contact" className="relative overflow-hidden border-t border-hairline">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 50% 35%, color-mix(in srgb, var(--color-violet) 15%, transparent), transparent 70%), radial-gradient(ellipse 30% 30% at 65% 55%, color-mix(in srgb, var(--color-cyan) 6%, transparent), transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-[84rem] px-6 py-24 text-center lg:px-12 lg:py-32">
        <div className="letter-art mx-auto mb-6 w-36 sm:w-44">
          <SendLetter />
        </div>

        <p className="section-eyebrow">
          <span className="text-cyan">{'// '}</span>{t({ es: 'contacto', en: 'contact' })}
        </p>

        <h2 className="mx-auto mt-5 max-w-[14ch] font-display text-[clamp(2.4rem,7vw,6rem)] font-bold uppercase leading-[0.98] text-ink [text-shadow:1px_3px_11px_rgba(0,0,0,0.3)]">
          {t({ es: '¿Construimos algo', en: 'Shall we build something' })}{' '}
          <span className="text-cyan">{t({ es: 'juntos?', en: 'together?' })}</span>
        </h2>

        <p className="mx-auto mt-7 max-w-[48ch] text-lg leading-relaxed text-body">
          {t({
            es: '¿Tienes un proyecto, una vacante o una idea con IA? Escríbeme y te respondo a la brevedad.',
            en: "Got a project, a job opening or an AI idea? Write to me and I'll get back to you soon.",
          })}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-xs text-muted sm:text-sm">
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            {t(personalInfo.availability).toLowerCase()}
          </span>
          <span>
            <span className="text-cyan">{'// '}</span>
            {t(personalInfo.contactLocation).toLowerCase()} · {time} (GMT-6)
          </span>
        </div>

        {/* Correo como protagonista */}
        <div className="mx-auto mt-12 flex max-w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={`mailto:${personalInfo.email}`}
            className="group inline-flex max-w-full items-center gap-2.5 rounded-xl bg-violet px-4 py-4 text-left text-[0.8125rem] font-medium sm:gap-3 sm:px-6 sm:text-[0.9375rem] text-white shadow-[0_20px_40px_-20px_var(--color-violet)] transition-colors duration-300 ease-prospectus hover:bg-violet-deep sm:text-base"
          >
            <Mail size={19} strokeWidth={1.75} aria-hidden="true" className="shrink-0" />
            <span className="whitespace-nowrap">{personalInfo.email}</span>
            <ArrowUpRight
              size={18}
              strokeWidth={1.75}
              aria-hidden="true"
              className="hidden shrink-0 transition-transform duration-300 ease-prospectus group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block"
            />
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className={`inline-flex items-center gap-2 rounded-xl border px-5 py-4 font-mono text-sm transition-colors duration-300 ease-prospectus ${
              copied
                ? 'border-cyan text-cyan'
                : 'border-hairline-deep text-ink hover:border-cyan hover:text-cyan'
            }`}
          >
            {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
            <span aria-live="polite">{copied ? t({ es: '¡copiado!', en: 'copied!' }) : t({ es: 'copiar correo', en: 'copy email' })}</span>
          </button>
        </div>

        {/* Otros canales */}
        <ul className="mx-auto mt-14 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ label, value, href, Icon }) => (
            <li key={t(label)}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex h-full items-center gap-4 rounded-xl border border-hairline bg-surface/70 px-5 py-4 text-left transition-[border-color,transform] duration-300 ease-prospectus hover:-translate-y-1 hover:border-cyan"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-hairline bg-ground text-muted transition-colors duration-300 ease-prospectus group-hover:border-cyan group-hover:text-cyan">
                  <Icon size={19} aria-hidden="true" />
                </span>
                <span className="flex min-w-0 flex-col gap-1">
                  <span className="font-mono text-[0.6875rem] text-muted">
                    <span className="text-cyan">{'// '}</span>
                    {t(label).toLowerCase()}
                  </span>
                  <span className="truncate text-[0.9375rem] font-medium text-ink">{t(value)}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <footer className="relative border-t border-hairline">
        <div className="mx-auto flex max-w-[84rem] flex-col items-center gap-4 px-6 py-8 text-center font-mono text-xs text-muted sm:flex-row sm:justify-between sm:text-left lg:px-12">
          <span>
            <span className="text-cyan">&lt;</span>
            <span className="text-ink">{personalInfo.name}</span>
            <span className="text-cyan"> /&gt;</span> · © {new Date().getFullYear()}
          </span>
          <span>{t({ es: 'hecho con react + vite + tailwind', en: 'built with react + vite + tailwind' })}</span>
          <a
            href="#home"
            className="group inline-flex items-center gap-1.5 transition-colors duration-300 ease-prospectus hover:text-cyan"
          >
            <span className="text-cyan">{'// '}</span>{t({ es: 'volver arriba', en: 'back to top' })}
            <ArrowUp
              size={14}
              aria-hidden="true"
              className="transition-transform duration-300 ease-prospectus group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
