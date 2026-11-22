import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { ASSETS, VENUE_GALLERY, VENUE_HIGHLIGHTS } from '../data/retreatData';
import { SafeImage } from './SacredIcons';

export function VenueSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const currentSlide = VENUE_GALLERY[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + VENUE_GALLERY.length) % VENUE_GALLERY.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % VENUE_GALLERY.length);
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    if (delta > 45) handlePrev();
    if (delta < -45) handleNext();
    touchStartX.current = null;
  };

  return (
    <section
      id="ubicacion"
      aria-labelledby="sede-heading"
      className="py-20 sm:py-24 lg:py-28 bg-[#F5EBE0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with authentic Posada Bagbazindio Logo */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold tracking-[0.12em] text-[#4A5D3E]">
              <MapPin className="w-4 h-4 text-[#C5A059]" aria-hidden="true" />
              <span>Todasana, Estado La Guaira · Costa Caribeña</span>
            </div>
            <h2
              id="sede-heading"
              className="mt-3 font-editorial text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#2B1D14] leading-[1.08] text-balance"
            >
              La Sede Exclusiva: Posada Bagbazindio
            </h2>
            <p className="mt-3.5 text-base leading-relaxed text-[#5C463B]">
              Un refugio boutique reservado en su totalidad para nuestro grupo, donde el rumor de las olas, la arquitectura natural y la hospitalidad de primer nivel crean el escenario perfecto para soltar y renacer.
            </p>
          </div>

          <div className="shrink-0 self-start md:self-end">
            <img
              src={ASSETS.logoPosada}
              alt="Sello oficial de Posada Bagbazindio"
              referrerPolicy="no-referrer"
              className="h-16 sm:h-20 w-auto object-contain"
            />
          </div>
        </div>

        {/* Interactive Gallery Carousel + Editorial Highlights */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Gallery Slider */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-3xl overflow-hidden bg-[#2B1D14] border border-[#3E2723]/12 shadow-[0_22px_55px_rgba(43,29,20,0.12)]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0.2, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.2 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full"
                >
                  <SafeImage
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Measured Scrim & Slide Caption */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#2B1D14]/88 via-[#2B1D14]/45 to-transparent"
              />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="max-w-xl">
                  <p className="text-xs font-medium tracking-wide text-[#EBD29B]">
                    {currentSlide.tag} · {currentIndex + 1} / {VENUE_GALLERY.length}
                  </p>
                  <h3 className="mt-1 font-editorial text-2xl sm:text-3xl font-semibold text-[#FAFAF7] leading-tight">
                    {currentSlide.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#F5EBE0]/90 leading-relaxed">
                    {currentSlide.caption}
                  </p>
                </div>

                {/* Touch-friendly Previous / Next Controls */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Imagen anterior de Posada Bagbazindio"
                    className="w-11 h-11 rounded-full bg-[#FAFAF7]/18 hover:bg-[#FAFAF7]/30 backdrop-blur-md border border-[#FAFAF7]/30 text-[#FAFAF7] flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Siguiente imagen de Posada Bagbazindio"
                    className="w-11 h-11 rounded-full bg-[#FAFAF7]/18 hover:bg-[#FAFAF7]/30 backdrop-blur-md border border-[#FAFAF7]/30 text-[#FAFAF7] flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Thumbnail Selector Strip */}
            <div className="grid grid-cols-4 gap-3">
              {VENUE_GALLERY.map((item, idx) => {
                const active = idx === currentIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Ver ${item.title}`}
                    aria-pressed={active}
                    className={`relative aspect-[4/3] rounded-xl overflow-hidden transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0072CE] ${
                      active
                        ? 'ring-2 ring-[#C5A059] ring-offset-2 ring-offset-[#F5EBE0] opacity-100'
                        : 'opacity-65 hover:opacity-95'
                    }`}
                  >
                    <SafeImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Highlights Column */}
          <div className="lg:col-span-4 rounded-3xl bg-[#FAFAF7] border border-[#3E2723]/10 p-7 sm:p-8 flex flex-col justify-between shadow-[0_12px_36px_rgba(43,29,20,0.05)]">
            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-[#9F7B33]">
                Lujo consciente frente al mar
              </p>
              <h3 className="mt-2 font-editorial text-3xl font-semibold text-[#2B1D14] leading-snug">
                Un santuario reservado solo para ti
              </h3>

              <div className="mt-6 divide-y divide-[#3E2723]/10">
                {VENUE_HIGHLIGHTS.map((item, idx) => (
                  <div key={item.title} className="py-4 first:pt-2 last:pb-2">
                    <p className="text-sm font-semibold text-[#2B1D14] flex items-baseline gap-2.5">
                      <span className="font-editorial text-lg text-[#C5A059] tabular-nums">
                        0{idx + 1}.
                      </span>
                      <span>{item.title}</span>
                    </p>
                    <p className="mt-1 pl-7 text-sm leading-relaxed text-[#5C463B]">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#3E2723]/10">
              <p className="text-xs leading-relaxed text-[#5C463B]">
                Traslado directo desde el CC Paseo Las Mercedes en unidad ejecutiva con aire acondicionado para que disfrutes desde el primer kilómetro.
              </p>
              <a
                href="#planes"
                className="mt-4 inline-flex items-center text-sm font-semibold text-[#0072CE] hover:text-[#005AA3] underline underline-offset-4 decoration-[#C5A059] transition-colors"
              >
                Conocer tipos de habitación disponibles
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
