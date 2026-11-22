import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Instagram, Mail, Phone } from 'lucide-react';
import { ASSETS, buildWhatsAppUrl } from '../data/retreatData';
import { SafeImage, WhatsAppIcon } from './SacredIcons';

export const OFFICIAL_BROCHURES = [
  {
    title: 'Afiche Principal · Soltar para Renacer 2027',
    src: ASSETS.posterMain,
    alt: 'Afiche oficial del retiro holístico Soltar para Renacer 2027 en Todasana',
  },
  {
    title: 'Facilitadora · Tibisay Mejías Palacios',
    src: ASSETS.facilitatorPhoto,
    alt: 'Presentación oficial de la facilitadora Tibisay Mejías Palacios',
  },
  {
    title: 'Itinerario Ilustrado · 3 Días frente al Mar',
    src: ASSETS.posterItinerary,
    alt: 'Itinerario oficial ilustrado de los días 1, 2 y 3 del retiro Soltar para Renacer 2027',
  },
];

interface BrochureModalProps {
  activeIndex: number | null;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
}

export function BrochureModal({
  activeIndex,
  onClose,
  onChangeIndex,
}: BrochureModalProps) {
  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') {
        onChangeIndex((activeIndex + 1) % OFFICIAL_BROCHURES.length);
      }
      if (event.key === 'ArrowLeft') {
        onChangeIndex((activeIndex - 1 + OFFICIAL_BROCHURES.length) % OFFICIAL_BROCHURES.length);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, onClose, onChangeIndex]);

  if (activeIndex === null) return null;

  const item = OFFICIAL_BROCHURES[activeIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#2B1D14]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-2xl w-full rounded-3xl bg-[#FAFAF7] border border-[#C5A059]/30 overflow-hidden shadow-2xl"
      >
        <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-[#3E2723]/10">
          <div>
            <p className="text-xs font-semibold text-[#9F7B33]">
              Material oficial · {activeIndex + 1} / {OFFICIAL_BROCHURES.length}
            </p>
            <h3 className="font-editorial text-xl font-semibold text-[#2B1D14]">
              {item.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar visor"
            className="w-10 h-10 rounded-full hover:bg-[#F5EBE0] text-[#2B1D14] flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-[#0072CE]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative bg-[#F5EBE0] flex items-center justify-center max-h-[72vh] overflow-hidden p-3 sm:p-5">
          <SafeImage
            src={item.src}
            alt={item.alt}
            className="max-h-[65vh] w-auto object-contain rounded-xl shadow-md"
          />

          <button
            type="button"
            onClick={() =>
              onChangeIndex(
                (activeIndex - 1 + OFFICIAL_BROCHURES.length) % OFFICIAL_BROCHURES.length
              )
            }
            aria-label="Afiche anterior"
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#2B1D14]/70 hover:bg-[#2B1D14] text-[#FAFAF7] flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => onChangeIndex((activeIndex + 1) % OFFICIAL_BROCHURES.length)}
            aria-label="Siguiente afiche"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#2B1D14]/70 hover:bg-[#2B1D14] text-[#FAFAF7] flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

interface FooterProps {
  onOpenBrochure: (initialIndex: number) => void;
}

export function FooterAndFloatingCta({ onOpenBrochure }: FooterProps) {
  const advisorHref = buildWhatsAppUrl(
    'Hola asesor de Tu Viaje en Primera Clase, quiero recibir información sobre tarifas y disponibilidad para el retiro Soltar para Renacer 2027.'
  );

  return (
    <>
      <footer className="bg-[#2B1D14] text-[#F5EBE0] border-t border-[#C5A059]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          {/* Official Brand Alliance Panel on Warm Linen for crisp SVG legibility */}
          <div className="rounded-2xl bg-[#FAFAF7] px-6 py-5 sm:px-8 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-7">
              <img
                src={ASSETS.logoTvpc}
                alt="Tu Viaje en Primera Clase"
                referrerPolicy="no-referrer"
                className="h-9 sm:h-10 w-auto object-contain"
              />
              <span
                aria-hidden="true"
                className="hidden sm:inline-block h-8 w-[1px] bg-[#3E2723]/15"
              />
              <img
                src={ASSETS.logoPosada}
                alt="Posada Bagbazindio"
                referrerPolicy="no-referrer"
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-[13px] font-medium text-[#5C463B] text-center sm:text-right max-w-xs">
              Cupos estrictamente limitados para preservar la intimidad y profundidad del retiro.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#FAFAF7]/12">
            <div className="md:col-span-5">
              <p className="font-editorial text-2xl sm:text-3xl font-semibold text-[#FAFAF7]">
                Soltar para Renacer 2027
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#F5EBE0]/75 max-w-md">
                Retiro holístico de cierre de año frente al mar en Todasana, Estado La Guaira. Una creación en alianza entre Tu Viaje en Primera Clase, Posada Bagbazindio y Tibisay Mejías Palacios.
              </p>
              <button
                type="button"
                onClick={() => onOpenBrochure(0)}
                className="mt-4 text-xs font-semibold text-[#EBD29B] hover:text-[#FAFAF7] underline underline-offset-4 transition-colors"
              >
                Ver galería de afiches oficiales
              </button>
            </div>

            <div className="md:col-span-3">
              <h3 className="font-sans text-xs font-semibold tracking-[0.14em] text-[#EBD29B]">
                Navegación
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-[#F5EBE0]/80">
                <li>
                  <a href="#el-retiro" className="hover:text-[#FAFAF7] transition-colors">
                    Los 5 Pilares
                  </a>
                </li>
                <li>
                  <a href="#facilitadora" className="hover:text-[#FAFAF7] transition-colors">
                    Tibisay Mejías Palacios
                  </a>
                </li>
                <li>
                  <a href="#itinerario" className="hover:text-[#FAFAF7] transition-colors">
                    Itinerario 3 Días
                  </a>
                </li>
                <li>
                  <a href="#ubicacion" className="hover:text-[#FAFAF7] transition-colors">
                    Posada Bagbazindio
                  </a>
                </li>
                <li>
                  <a href="#planes" className="hover:text-[#FAFAF7] transition-colors">
                    Planes Todo Incluido
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h3 className="font-sans text-xs font-semibold tracking-[0.14em] text-[#EBD29B]">
                Contacto y Redes
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-[#F5EBE0]/80">
                <li>
                  <a
                    href={advisorHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 hover:text-[#FAFAF7] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#C5A059]" aria-hidden="true" />
                    <span>Asesoría WhatsApp · Tu Viaje en Primera Clase</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2.5 hover:text-[#FAFAF7] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#C5A059]" aria-hidden="true" />
                    <span>Formulario de Pre-Reserva Online</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 hover:text-[#FAFAF7] transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-[#C5A059]" aria-hidden="true" />
                    <span>@tuviajeenprimeraclase · @posadabagbazindio</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#F5EBE0]/60">
            <p>
              © 2026 Tu Viaje en Primera Clase × Posada Bagbazindio. Todos los derechos reservados.
            </p>
            <p>11, 12 y 13 de Diciembre, 2026 · Todasana, La Guaira, Venezuela</p>
          </div>
        </div>
      </footer>

      {/* Floating Pulsing WhatsApp Advisor Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
        <span
          aria-hidden="true"
          className="whatsapp-halo pointer-events-none absolute inset-0 rounded-full bg-[#25D366]/45"
        />
        <a
          href={advisorHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chatea con un asesor de Tu Viaje en Primera Clase por WhatsApp"
          className="relative inline-flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#1C8B48] hover:bg-[#15723A] text-white shadow-[0_14px_34px_rgba(28,139,72,0.38)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8200]"
        >
          <WhatsAppIcon className="w-5 h-5 shrink-0" />
          <span className="hidden md:inline text-[13px] font-semibold whitespace-nowrap">
            Chatea con un asesor de Tu Viaje en Primera Clase
          </span>
          <span className="md:hidden text-xs font-semibold whitespace-nowrap">
            Asesor WhatsApp
          </span>
        </a>
      </div>
    </>
  );
}
