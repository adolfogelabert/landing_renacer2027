import React from 'react';
import { motion } from 'motion/react';
import { Eye } from 'lucide-react';
import { ASSETS } from '../data/retreatData';
import { SafeImage } from './SacredIcons';

interface FacilitatorSectionProps {
  onOpenBrochure: (initialIndex: number) => void;
}

const SPECIALTIES = [
  {
    index: '01',
    title: 'Renacimiento Sistémico',
    detail:
      'Acompañamiento amoroso para cerrar etapas con honra y renacer a una versión más liviana, consciente y en paz con tu historia.',
  },
  {
    index: '02',
    title: 'Respiración Cuántica y Manifestación',
    detail:
      'Técnicas biofrecuenciales que regulan el sistema nervioso, liberan bloqueos somáticos y elevan tu claridad creadora.',
  },
  {
    index: '03',
    title: 'Constelaciones Familiares',
    detail:
      'Espacios seguros para mirar los Órdenes del Amor, liberar lealtades invisibles y tomar la fuerza plena de tu linaje.',
  },
];

export function FacilitatorSection({ onOpenBrochure }: FacilitatorSectionProps) {
  return (
    <section
      id="facilitadora"
      aria-labelledby="facilitadora-heading"
      className="py-20 sm:py-24 lg:py-28 bg-[#F5EBE0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Asymmetric Left Portrait Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative flex-1 min-h-[420px] sm:min-h-[500px] lg:min-h-full rounded-3xl overflow-hidden bg-[#EADBC8] border border-[#3E2723]/12 shadow-[0_24px_60px_rgba(43,29,20,0.12)]">
              {/* Cropped smoothly onto Tibisay's real left-side portrait from the official photo */}
              <SafeImage
                src={ASSETS.facilitatorPhoto}
                alt="Tibisay Mejías Palacios, facilitadora del retiro Soltar para Renacer 2027"
                className="w-full h-full object-cover object-[12%_20%]"
              />

              {/* Subtle bottom gradient for clean caption legibility */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#2B1D14]/82 via-[#2B1D14]/35 to-transparent"
              />

              <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-medium tracking-wide text-[#EBD29B]">
                    Guía y Facilitadora Principal
                  </p>
                  <p className="font-editorial text-2xl sm:text-[28px] font-semibold text-[#FAFAF7] leading-tight mt-0.5">
                    Tibisay Mejías Palacios
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenBrochure(1)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#FAFAF7]/18 hover:bg-[#FAFAF7]/28 backdrop-blur-md border border-[#FAFAF7]/30 text-xs font-medium text-[#FAFAF7] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
                >
                  <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Ver ficha</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Asymmetric Right Editorial Biography Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-[#FAFAF7] border border-[#3E2723]/10 p-7 sm:p-10 lg:p-12 shadow-[0_14px_40px_rgba(43,29,20,0.05)]"
          >
            <div>
              <p className="text-xs sm:text-[13px] font-semibold tracking-[0.14em] text-[#4A5D3E]">
                Quién te acompañará en esta experiencia
              </p>

              <h2
                id="facilitadora-heading"
                className="mt-3 font-editorial text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#2B1D14] leading-[1.08] text-balance"
              >
                Tibisay Mejías Palacios
              </h2>

              <p className="mt-2 font-editorial italic text-xl sm:text-2xl text-[#9F7B33]">
                “Una mujer al servicio de la vida y la respiración.”
              </p>

              <p className="mt-5 text-[15.5px] leading-relaxed text-[#5C463B]">
                Durante los tres días en Todasana caminarás de la mano de una especialista con profunda sensibilidad humana y rigor terapéutico. Cada sesión —desde las constelaciones familiares hasta la respiración biofrecuencial y los rituales frente al mar— está diseñada para sostener procesos profundos con calidez, contención emocional y respeto absoluto por tu ritmo personal.
              </p>

              <div className="mt-8 divide-y divide-[#3E2723]/10 border-t border-b border-[#3E2723]/10">
                {SPECIALTIES.map((item) => (
                  <div
                    key={item.index}
                    className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-5"
                  >
                    <span className="font-editorial text-lg font-semibold text-[#C5A059] tabular-nums shrink-0">
                      {item.index}.
                    </span>
                    <div>
                      <h3 className="font-sans text-[15px] font-semibold text-[#2B1D14]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#5C463B]">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <p className="font-editorial italic text-2xl text-[#3E2723]">
                “Acompañarte es mi propósito...”
              </p>
              <a
                href="#itinerario"
                className="text-sm font-semibold text-[#0072CE] hover:text-[#005AA3] underline underline-offset-4 decoration-[#C5A059] transition-colors whitespace-nowrap"
              >
                Explorar sesiones guiadas
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
