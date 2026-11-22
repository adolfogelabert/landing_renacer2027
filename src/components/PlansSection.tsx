import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import {
  ACCOMMODATION_PLANS,
  ALL_INCLUSIVE_BENEFITS,
  buildWhatsAppUrl,
} from '../data/retreatData';
import { WhatsAppIcon } from './SacredIcons';

interface PlansSectionProps {
  onSelectPlanForForm: (planName: string) => void;
}

export function PlansSection({ onSelectPlanForForm }: PlansSectionProps) {
  return (
    <section
      id="planes"
      aria-labelledby="planes-heading"
      className="py-20 sm:py-24 lg:py-28 bg-[#FAFAF7]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs sm:text-[13px] font-semibold tracking-[0.14em] text-[#4A5D3E]">
            Planes de acomodación · Todo Incluido VIP
          </p>
          <h2
            id="planes-heading"
            className="mt-3 font-editorial text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#2B1D14] leading-[1.08] text-balance"
          >
            Elige tu Espacio de Descanso
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5C463B]">
            Todas las opciones incluyen la experiencia completa de 3 días y 2 noches en Posada Bagbazindio. Selecciona el tipo de habitación que resuene con tu momento y consulta disponibilidad inmediata con un asesor.
          </p>
        </div>

        {/* All-Inclusive Master Checklist Strip */}
        <div className="mt-10 rounded-3xl bg-[#F5EBE0] border border-[#3E2723]/10 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#3E2723]/10">
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#2B1D14]">
                Tu experiencia “Todo Incluido” contempla:
              </h3>
              <p className="text-sm text-[#5C463B] mt-1">
                Cuidamos cada detalle logístico y sagrado para que solo te dediques a sentir y renacer.
              </p>
            </div>
            <span className="text-xs font-semibold tracking-wide text-[#9F7B33] shrink-0">
              Cupos estrictamente limitados
            </span>
          </div>

          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {ALL_INCLUSIVE_BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-sm sm:text-[15px] text-[#2B1D14]">
                <span
                  aria-hidden="true"
                  className="mt-0.5 w-5 h-5 rounded-full bg-[#4A5D3E]/12 text-[#4A5D3E] flex items-center justify-center shrink-0"
                >
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="leading-snug">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3 Accommodation Tier Cards */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {ACCOMMODATION_PLANS.map((plan, idx) => {
            const waHref = buildWhatsAppUrl(plan.whatsappMessage);
            return (
              <motion.article
                key={plan.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col justify-between rounded-3xl p-7 sm:p-8 transition-shadow duration-200 ${
                  plan.featured
                    ? 'bg-[#2B1D14] text-[#FAFAF7] border border-[#C5A059] shadow-[0_24px_60px_rgba(43,29,20,0.18)]'
                    : 'bg-[#FAFAF7] text-[#2B1D14] border border-[#3E2723]/12 shadow-[0_10px_30px_rgba(43,29,20,0.05)] hover:shadow-[0_18px_40px_rgba(43,29,20,0.09)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <p
                      className={`text-xs font-semibold tracking-wide ${
                        plan.featured ? 'text-[#EBD29B]' : 'text-[#4A5D3E]'
                      }`}
                    >
                      {plan.occupancy}
                    </p>
                    {plan.featured && (
                      <span className="text-xs font-semibold text-[#FF8200]">
                        Más solicitada
                      </span>
                    )}
                  </div>

                  <h3
                    className={`mt-3 font-editorial text-3xl font-semibold leading-tight ${
                      plan.featured ? 'text-[#FAFAF7]' : 'text-[#2B1D14]'
                    }`}
                  >
                    {plan.name}
                  </h3>

                  <p
                    className={`mt-1.5 text-sm font-medium ${
                      plan.featured ? 'text-[#EBD29B]/95' : 'text-[#9F7B33]'
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  <p
                    className={`mt-4 text-sm sm:text-[15px] leading-relaxed ${
                      plan.featured ? 'text-[#F5EBE0]/85' : 'text-[#5C463B]'
                    }`}
                  >
                    {plan.description}
                  </p>

                  <ul
                    className={`mt-6 pt-6 border-t space-y-3 text-sm ${
                      plan.featured ? 'border-[#FAFAF7]/15 text-[#F5EBE0]/90' : 'border-[#3E2723]/10 text-[#3E2723]'
                    }`}
                  >
                    {plan.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            plan.featured ? 'text-[#EBD29B]' : 'text-[#4A5D3E]'
                          }`}
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 space-y-3">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#0072CE] hover:bg-[#005AA3] text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8200]"
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0" />
                    <span className="truncate">Consultar Tarifa y Disponibilidad por WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onSelectPlanForForm(plan.name)}
                    className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold transition-colors rounded-full focus-visible:outline-2 focus-visible:outline-[#0072CE] ${
                      plan.featured
                        ? 'text-[#EBD29B] hover:text-[#FAFAF7]'
                        : 'text-[#5C463B] hover:text-[#2B1D14]'
                    }`}
                  >
                    <span>O pre-reservar en el formulario</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
