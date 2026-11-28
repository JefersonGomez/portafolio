import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolioData';
import { useLang } from '../i18n';

/* Selector ES | EN: una pastilla con el idioma activo resaltado */
export const LangToggle = ({ className = '' }) => {
  const { lang, setLang, t } = useLang();
  return (
    <div
      role="group"
      aria-label={t({ es: 'Idioma', en: 'Language' })}
      className={`relative flex items-center rounded-full border border-hairline-deep p-0.5 font-mono text-xs ${className}`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-y-0.5 w-[calc(50%-2px)] rounded-full bg-violet transition-transform duration-300 ease-prospectus ${
          lang === 'en' ? 'translate-x-full' : 'translate-x-0'
        }`}
      />
      {['es', 'en'].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          lang={code}
          title={code === 'es' ? 'Español' : 'English'}
          className={`relative z-10 w-9 rounded-full py-1 uppercase transition-colors duration-300 ${
            lang === code ? 'text-white' : 'text-muted hover:text-ink'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
};

const Navbar = () => {
  const { t } = useLang();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setIsMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMenuOpen]);

  const linkProps = (link) =>
    link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  const cvLabel = t({ es: 'Descargar CV', en: 'Download CV' });

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ease-prospectus ${
        isScrolled
          ? 'border-b border-hairline bg-ground/95 sm:bg-ground/80 sm:backdrop-blur-md'
          : 'border-b border-transparent bg-ground'
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-[84rem] items-center justify-between gap-4 px-6 lg:px-12">
        <a href="#home" className="group font-mono text-[0.9375rem] text-ink">
          <span className="text-cyan">&lt;</span>
          <span className="transition-colors duration-300 ease-prospectus group-hover:text-cyan">
            {personalInfo.name.split(' ').slice(0, 2).join(' ')}
          </span>
          <span className="text-cyan"> /&gt;</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...linkProps(link)}
              className="group font-mono text-sm lowercase text-body transition-colors duration-300 ease-prospectus hover:text-ink"
            >
              <span className="text-cyan/70 transition-colors duration-300 ease-prospectus group-hover:text-cyan">{'// '}</span>
              {t(link.label)}
            </a>
          ))}
          <LangToggle />
          <a
            href={t(personalInfo.cv)}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-violet px-4 py-2.5 text-[0.9375rem] font-medium text-white transition-colors duration-300 ease-prospectus hover:bg-violet-deep active:bg-violet-active"
          >
            <Download size={16} strokeWidth={1.9} aria-hidden="true" />
            CV
            <span className="sr-only">({cvLabel})</span>
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LangToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="-mr-2 p-2 text-ink"
            aria-label={isMenuOpen ? t({ es: 'Cerrar menú', en: 'Close menu' }) : t({ es: 'Abrir menú', en: 'Open menu' })}
            aria-expanded={isMenuOpen}
            aria-controls="menu-movil"
          >
            {isMenuOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div id="menu-movil" className="border-t border-hairline bg-ground lg:hidden">
          <div className="mx-auto flex max-w-[84rem] flex-col px-6 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...linkProps(link)}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-hairline py-4 font-mono text-[0.9375rem] lowercase text-body"
              >
                <span className="text-cyan">{'// '}</span>
                {t(link.label)}
              </a>
            ))}
            <div className="my-4 grid grid-cols-2 gap-3">
              <a
                href={t(personalInfo.cv)}
                download
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-hairline-deep px-4 py-3.5 text-base font-medium text-ink"
              >
                <Download size={17} strokeWidth={1.9} aria-hidden="true" />
                {cvLabel}
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg bg-violet px-4 py-3.5 text-center text-base font-medium text-white"
              >
                {t({ es: 'Escribime', en: 'Get in touch' })}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
