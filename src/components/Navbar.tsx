import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ASSETS, buildWhatsAppUrl } from '../data/retreatData';
import { WhatsAppIcon } from './SacredIcons';

const NAV_LINKS = [
  { href: '#el-retiro', label: 'El Retiro' },
  { href: '#facilitadora', label: 'Facilitadora' },
  { href: '#itinerario', label: 'Itinerario' },
  { href: '#ubicacion', label: 'Ubicación' },
  { href: '#planes', label: 'Planes' },
  { href: '#contacto', label: 'Contacto' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const reserveHref = buildWhatsAppUrl(
    'Hola equipo de Tu Viaje en Primera Clase, quiero asegurar mi lugar en el retiro holístico Soltar para Renacer 2027 (4, 5 y 6 de diciembre de 2026).'
  );

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#FAFAF7]/92 backdrop-blur-md border-b border-[#3E2723]/10 shadow-[0_8px_30px_rgba(43,29,20,0.06)]'
          : 'bg-[#FAFAF7]/85 backdrop-blur-md border-b border-[#3E2723]/8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-[74px] flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Organizer Brand Logo */}
        <a
          href="#inicio"
          className="flex items-center shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0072CE] rounded"
          aria-label="Tu Viaje en Primera Clase — Inicio"
        >
          <img
            src={ASSETS.logoTvpc}
            alt="Tu Viaje en Primera Clase"
            referrerPolicy="no-referrer"
            className="h-8 sm:h-9 w-auto object-contain"
          />
        </a>

        {/* Zone 2: Clean single-line anchored navigation */}
        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex items-center gap-6 xl:gap-7"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 text-[13.5px] font-medium text-[#3E2723]/85 hover:text-[#2B1D14] transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0072CE] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Venue Seal + Primary Action CTA */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <a
            href="#ubicacion"
            className="hidden sm:flex items-center pr-3 sm:border-r sm:border-[#3E2723]/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0072CE] rounded"
            aria-label="Posada Bagbazindio — Conoce la sede"
          >
            <img
              src={ASSETS.logoPosada}
              alt="Posada Bagbazindio"
              referrerPolicy="no-referrer"
              className="h-9 lg:h-10 w-auto object-contain"
            />
          </a>

          <a
            href={reserveHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0072CE] hover:bg-[#005AA3] text-white text-[13px] font-semibold tracking-tight transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8200]"
          >
            <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
            <span>Asegurar mi Lugar</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full text-[#2B1D14] hover:bg-[#F5EBE0] transition-colors focus-visible:outline-2 focus-visible:outline-[#0072CE]"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-t border-[#3E2723]/10 bg-[#FAFAF7]/98 backdrop-blur-lg px-5 py-5 shadow-lg"
        >
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#3E2723]/10">
            <span className="text-xs font-medium text-[#5C463B]">En alianza exclusiva con</span>
            <img
              src={ASSETS.logoPosada}
              alt="Posada Bagbazindio"
              referrerPolicy="no-referrer"
              className="h-9 w-auto object-contain"
            />
          </div>

          <nav aria-label="Menú móvil" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-3 rounded-lg text-[15px] font-medium text-[#2B1D14] hover:bg-[#F5EBE0] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-[#3E2723]/10">
            <a
              href={reserveHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-full bg-[#0072CE] hover:bg-[#005AA3] text-white text-sm font-semibold transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>Asegurar mi Lugar</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
