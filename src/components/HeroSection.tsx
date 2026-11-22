import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, CalendarDays, Compass, Sparkles } from 'lucide-react';
import { ASSETS, buildWhatsAppUrl } from '../data/retreatData';
import { SafeImage, WhatsAppIcon } from './SacredIcons';

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  started: boolean;
}

// Target: Friday, December 4, 2026 at 06:00 AM Venezuela Time (UTC-4)
const TARGET_TIMESTAMP = new Date('2026-12-04T06:00:00-04:00').getTime();

function computeCountdown(): CountdownState {
  const diff = TARGET_TIMESTAMP - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, started: true };
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds, started: false };
}

function padTwo(value: number): string {
  return String(value).padStart(2, '0');
}

export function HeroSection() {
  const [countdown, setCountdown] = useState<CountdownState>(computeCountdown);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(computeCountdown());
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const primaryWhatsAppUrl = buildWhatsAppUrl(
    'Hola equipo de Tu Viaje en Primera Clase, quiero reservar mi experiencia en el retiro "Soltar para Renacer 2027" del 4 al 6 de diciembre de 2026 en Posada Bagbazindio.'
  );

  return (
    <section
      id="inicio"
      aria-label="Portada del retiro Soltar para Renacer 2027"
      className="relative isolate overflow-hidden bg-[#2B1D14] text-[#FAFAF7]"
    >
      {/* Full-bleed beach sunset backdrop */}
      <div className="absolute inset-0 -z-20">
        <SafeImage
          src={ASSETS.heroSunset}
          alt="Círculo de mujeres vestidas de blanco meditando al atardecer con velas frente al mar en Todasana"
          className="w-full h-full object-cover object-center scale-[1.01]"
        />
      </div>

      {/* Measured warm contrast scrim ensuring crisp legibility across all screen sizes */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#2B1D14]/78 via-[#2B1D14]/56 to-[#2B1D14]/90"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.16),transparent_60%)]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Top Event Date Line */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[13px] sm:text-sm font-medium tracking-wide text-[#F5EBE0]/95"
          >
            <span className="h-[1px] w-6 bg-[#D4AF37]/80 hidden sm:inline-block" aria-hidden="true" />
            <span>Retiro Exclusivo de Cierre de Año</span>
            <span className="text-[#D4AF37]" aria-hidden="true">•</span>
            <span className="text-[#F5EBE0] font-semibold">4, 5 y 6 de Diciembre, 2026</span>
            <span className="h-[1px] w-6 bg-[#D4AF37]/80 hidden sm:inline-block" aria-hidden="true" />
          </motion.div>

          {/* Dominant Editorial Serif Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 font-editorial font-semibold tracking-[-0.015em] text-[#FAFAF7] leading-[1.05] text-balance"
            style={{ fontSize: 'clamp(2.75rem, 6vw, 4.75rem)' }}
          >
            Soltar para{' '}
            <span className="italic font-medium text-[#EBD29B]">Renacer</span> 2027
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#F5EBE0]/90 font-normal"
          >
            Una experiencia energética y sanadora frente al mar para cerrar ciclos conscientemente y abrirte a la frecuencia del año 2027.
          </motion.p>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
          >
            <a
              href={primaryWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#0072CE] hover:bg-[#005AA3] text-white text-[15px] font-semibold transition-all duration-200 shadow-[0_14px_34px_rgba(0,114,206,0.38)] hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8200]"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>Quiero Reservar mi Experiencia</span>
              <span
                aria-hidden="true"
                className="inline-block h-3.5 w-[2px] rounded-full bg-[#FF8200] transition-transform duration-200 group-hover:scale-y-125"
              />
            </a>

            <a
              href="#itinerario"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#FAFAF7]/12 hover:bg-[#FAFAF7]/20 backdrop-blur-md border border-[#FAFAF7]/28 text-[#FAFAF7] text-[15px] font-medium transition-all duration-200 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
            >
              <span>Ver Programa Completo</span>
              <ArrowDownRight className="w-4 h-4 text-[#EBD29B]" />
            </a>
          </motion.div>

          {/* Live Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 inline-flex flex-col items-center"
            aria-live="off"
          >
            <p className="text-xs font-medium tracking-[0.14em] text-[#EBD29B]/95 mb-3">
              {countdown.started
                ? 'Nuestro encuentro frente al mar ha comenzado'
                : 'Cuenta regresiva hacia el 4 de diciembre de 2026'}
            </p>
            <div className="grid grid-cols-4 gap-2.5 sm:gap-4 px-4 sm:px-6 py-3.5 rounded-2xl bg-[#2B1D14]/65 backdrop-blur-md border border-[#EBD29B]/22">
              {[
                { value: padTwo(countdown.days), label: 'Días' },
                { value: padTwo(countdown.hours), label: 'Horas' },
                { value: padTwo(countdown.minutes), label: 'Min' },
                { value: padTwo(countdown.seconds), label: 'Seg' },
              ].map((unit, idx) => (
                <div
                  key={unit.label}
                  className={`flex flex-col items-center px-2.5 sm:px-4 ${
                    idx < 3 ? 'border-r border-[#FAFAF7]/15' : ''
                  }`}
                >
                  <span className="font-sans tabular-nums text-2xl sm:text-3xl font-semibold text-[#FAFAF7] leading-none">
                    {unit.value}
                  </span>
                  <span className="mt-1.5 text-[11px] font-medium text-[#F5EBE0]/75">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 3 Floating Key-Info Micro-Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto"
        >
          <div className="flex items-start gap-3.5 px-5 py-4 rounded-2xl bg-[#FAFAF7]/12 backdrop-blur-md border border-[#FAFAF7]/20">
            <CalendarDays className="w-5 h-5 text-[#EBD29B] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs font-medium text-[#EBD29B]">Duración</p>
              <p className="mt-0.5 text-sm sm:text-[15px] font-semibold text-[#FAFAF7]">
                3 Días / 2 Noches
              </p>
              <p className="text-xs text-[#F5EBE0]/80 mt-0.5">Del viernes 4 al domingo 6 de diciembre</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 px-5 py-4 rounded-2xl bg-[#FAFAF7]/12 backdrop-blur-md border border-[#FAFAF7]/20">
            <Compass className="w-5 h-5 text-[#EBD29B] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs font-medium text-[#EBD29B]">Sede Exclusiva</p>
              <p className="mt-0.5 text-sm sm:text-[15px] font-semibold text-[#FAFAF7]">
                Posada Bagbazindio
              </p>
              <p className="text-xs text-[#F5EBE0]/80 mt-0.5">Todasana, La Guaira · Frente al mar</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 px-5 py-4 rounded-2xl bg-[#FAFAF7]/12 backdrop-blur-md border border-[#FAFAF7]/20">
            <Sparkles className="w-5 h-5 text-[#EBD29B] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs font-medium text-[#EBD29B]">Modalidad</p>
              <p className="mt-0.5 text-sm sm:text-[15px] font-semibold text-[#FAFAF7]">
                Todo Incluido VIP
              </p>
              <p className="text-xs text-[#F5EBE0]/80 mt-0.5">Con traslado privado ejecutivo desde Caracas</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
