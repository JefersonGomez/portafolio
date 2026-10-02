import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolioData';
import { SealMark } from './Seal';

const Navbar = () => {
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

  return (
    <header
      className={`sticky top-0 z-50 bg-ground transition-colors duration-300 ease-prospectus ${
        isScrolled ? 'border-b border-hairline' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-[84rem] items-center justify-between px-6 lg:px-12">
        <a href="#home" className="flex items-center gap-3 text-ink">
          <SealMark className="h-7 w-7" />
          <span className="text-[0.9375rem] font-medium tracking-[-0.01em]">
            {personalInfo.name.split(' ').slice(0, 2).join(' ')}
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...linkProps(link)}
              className="text-[0.9375rem] text-body transition-colors duration-300 ease-prospectus hover:text-violet"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${personalInfo.email}`}
            className="rounded-lg bg-violet px-5 py-2.5 text-[0.9375rem] font-medium text-white transition-colors duration-300 ease-prospectus hover:bg-violet-deep active:bg-violet-active"
          >
            Escribime
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="-mr-2 p-2 text-ink md:hidden"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="menu-movil"
        >
          {isMenuOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div id="menu-movil" className="border-t border-hairline bg-ground md:hidden">
          <div className="mx-auto flex max-w-[84rem] flex-col px-6 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...linkProps(link)}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-hairline py-4 text-base text-body"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${personalInfo.email}`}
              onClick={() => setIsMenuOpen(false)}
              className="my-4 rounded-lg bg-violet px-5 py-3.5 text-center text-base font-medium text-white"
            >
              Escribime
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
