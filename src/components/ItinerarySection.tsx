import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, BookOpen, SunMedium, Sparkles } from 'lucide-react';
import { ITINERARY_DAYS } from '../data/retreatData';
import { SafeImage } from './SacredIcons';

interface ItinerarySectionProps {
  onOpenBrochure: (initialIndex: number) => void;
}

export function ItinerarySection({ onOpenBrochure }: ItinerarySectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentDay = ITINERARY_DAYS[activeIndex];

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      setActiveIndex((prev) => (prev + 1) % ITINERARY_DAYS.length);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      setActiveIndex((prev) => (prev - 1 + ITINERARY_DAYS.length) % ITINERARY_DAYS.length);
    }
  };

  return (
    <section
      id="itinerario"
      aria-labelledby="itinerario-heading"
      className="py-20 sm:py-24 lg:py-28 bg-[#FAFAF7]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-[13px] font-semibold tracking-[0.14em] text-[#4A5D3E]">
              Agenda consciente · 4, 5 y 6 de diciembre de 2026
            </p>
            <h2
              id="itinerario-heading"
              className="mt-3 font-editorial text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#2B1D14] leading-[1.1] text-balance"
            >
              Itinerario de los 3 Días
            </h2>
            <p className="mt-3.5 text-base leading-relaxed text-[#5C463B]">
              Un recorrido diseñado en tres actos —limpieza, reprogramación y siembra— equilibrando sesiones profundas con momentos de descanso frente al mar.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenBrochure(2)}
            className="self-start lg:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#3E2723]/18 bg-[#F5EBE0]/60 hover:bg-[#F5EBE0] text-[13px] font-semibold text-[#2B1D14] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0072CE]"
          >
            <BookOpen className="w-4 h-4 text-[#C5A059]" aria-hidden="true" />
            <span>Ver Programa Oficial Ilustrado</span>
          </button>
        </div>

        {/* Accessible Day Tabs */}
        <div
          role="tablist"
          aria-label="Días del itinerario del retiro"
          onKeyDown={handleKeyDown}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 p-1.5 rounded-2xl bg-[#F5EBE0] border border-[#3E2723]/10"
        >
          {ITINERARY_DAYS.map((day, index) => {
            const selected = index === activeIndex;
            return (
              <button
                key={day.id}
                role="tab"
                id={`tab-${day.id}`}
                aria-selected={selected}
                aria-controls={`panel-${day.id}`}
                tabIndex={selected ? 0 : -1}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`text-left px-5 py-4 rounded-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0072CE] ${
                  selected
                    ? 'bg-[#FAFAF7] text-[#2B1D14] shadow-[0_10px_24px_rgba(43,29,20,0.08)] border border-[#C5A059]/45'
                    : 'text-[#5C463B] hover:text-[#2B1D14] hover:bg-[#FAFAF7]/50 border border-transparent'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold tracking-wide text-[#9F7B33]">
                    {day.dayNumber} · {day.shortLabel}
                  </span>
                  {selected && (
                    <span className="h-[2px] w-6 rounded-full bg-[#FF8200]" aria-hidden="true" />
                  )}
                </div>
                <p className="mt-1 font-editorial text-xl sm:text-2xl font-semibold text-[#2B1D14] truncate">
                  {day.theme}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Day Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDay.id}
            role="tabpanel"
            id={`panel-${currentDay.id}`}
            aria-labelledby={`tab-${currentDay.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left Summary Visual Card */}
            <div className="lg:col-span-5 rounded-3xl overflow-hidden bg-[#F5EBE0] border border-[#3E2723]/10">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <SafeImage
                  src={currentDay.image}
                  alt={currentDay.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold tracking-[0.12em] text-[#4A5D3E]">
                  {currentDay.dateLabel}
                </p>
                <h3 className="mt-2 font-editorial text-3xl font-semibold text-[#2B1D14]">
                  {currentDay.theme}
                </h3>
                <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-[#5C463B]">
                  {currentDay.summary}
                </p>

                <div className="mt-6 pt-5 border-t border-[#3E2723]/12 space-y-3.5 text-sm">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="font-semibold text-[#2B1D14]">Foco energético: </span>
                      <span className="text-[#5C463B]">{currentDay.energyFocus}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <SunMedium className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="font-semibold text-[#2B1D14]">Vestimenta sugerida: </span>
                      <span className="text-[#5C463B]">{currentDay.dressCode}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Chronological Timeline */}
            <div className="lg:col-span-7 rounded-3xl bg-[#FAFAF7] border border-[#3E2723]/10 p-6 sm:p-8 lg:p-10 shadow-[0_12px_36px_rgba(43,29,20,0.04)]">
              <ol className="divide-y divide-[#3E2723]/10">
                {currentDay.activities.map((activity, idx) => (
                  <li
                    key={`${currentDay.id}-${idx}`}
                    className="py-5 first:pt-1 last:pb-1 flex flex-col sm:flex-row sm:items-start gap-2.5 sm:gap-6"
                  >
                    <div className="sm:w-40 shrink-0 flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-[#9F7B33] tabular-nums pt-0.5">
                      <Clock className="w-3.5 h-3.5 shrink-0 text-[#C5A059]" aria-hidden="true" />
                      <span>{activity.time}</span>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-[16px] sm:text-[17px] font-semibold text-[#2B1D14] leading-snug flex flex-wrap items-center gap-2">
                        <span>{activity.title}</span>
                        {activity.highlight && (
                          <span className="text-[11px] font-semibold text-[#4A5D3E]">
                            · Momento cumbre
                          </span>
                        )}
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#5C463B]">
                        {activity.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
