import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, CheckCircle2, MapPin, CalendarDays } from 'lucide-react';
import { ACCOMMODATION_PLANS, FAQ_ITEMS, buildWhatsAppUrl } from '../data/retreatData';
import { WhatsAppIcon } from './SacredIcons';

interface FaqAndContactSectionProps {
  selectedPlan: string;
}

interface FormValues {
  fullName: string;
  phone: string;
  email: string;
  accommodation: string;
  guests: string;
  notes: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
}

export function FaqAndContactSection({ selectedPlan }: FaqAndContactSectionProps) {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [values, setValues] = useState<FormValues>({
    fullName: '',
    phone: '',
    email: '',
    accommodation: selectedPlan || ACCOMMODATION_PLANS[1].name,
    guests: '1 persona',
    notes: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedPlan) {
      setValues((prev) => ({ ...prev, accommodation: selectedPlan }));
      setSubmitted(false);
    }
  }, [selectedPlan]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (values.fullName.trim().length < 3) {
      nextErrors.fullName = 'Por favor escribe tu nombre y apellido.';
    }
    const cleanPhone = values.phone.replace(/[^\d+]/g, '');
    if (cleanPhone.length < 7) {
      nextErrors.phone = 'Ingresa un número de WhatsApp válido para contactarte.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = 'Ingresa un correo electrónico válido.';
    }
    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const compiledWhatsAppMessage = [
    `Hola equipo de Tu Viaje en Primera Clase, soy ${values.fullName || 'un(a) interesado(a)'}.`,
    `Deseo solicitar tarifas y apartar cupo en el retiro "Soltar para Renacer 2027" (11-13 Dic 2026).`,
    `• Acomodación deseada: ${values.accommodation}`,
    `• Participantes: ${values.guests}`,
    values.email ? `• Correo: ${values.email}` : '',
    values.notes ? `• Comentario: ${values.notes}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  return (
    <>
      {/* FAQ Accordion Section */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="py-20 sm:py-24 bg-[#F5EBE0]"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs sm:text-[13px] font-semibold tracking-[0.14em] text-[#4A5D3E]">
              Claridad antes de empacar
            </p>
            <h2
              id="faq-heading"
              className="mt-3 font-editorial text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#2B1D14] leading-[1.1] text-balance"
            >
              Preguntas Frecuentes
            </h2>
            <p className="mt-3.5 text-base text-[#5C463B]">
              Resolvemos las dudas más comunes sobre traslados, vestimenta, experiencia previa y proceso de reserva.
            </p>
          </div>

          <div className="mt-10 rounded-3xl bg-[#FAFAF7] border border-[#3E2723]/10 divide-y divide-[#3E2723]/10 shadow-[0_12px_36px_rgba(43,29,20,0.04)]">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div key={item.id}>
                  <h3>
                    <button
                      type="button"
                      id={`faq-btn-${item.id}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${item.id}`}
                      onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                      className="w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex items-center justify-between gap-4 hover:bg-[#F5EBE0]/35 transition-colors focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#0072CE] first:rounded-t-3xl last:rounded-b-3xl"
                    >
                      <span className="font-sans text-[15.5px] sm:text-base font-semibold text-[#2B1D14] leading-snug">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#C5A059] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-btn-${item.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 pb-6 text-sm sm:text-[15px] leading-relaxed text-[#5C463B]">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact & Pre-Reservation Form Section */}
      <section
        id="contacto"
        aria-labelledby="contacto-heading"
        className="py-20 sm:py-24 lg:py-28 bg-[#FAFAF7]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Invitation Copy */}
            <div className="lg:col-span-5">
              <p className="text-xs sm:text-[13px] font-semibold tracking-[0.14em] text-[#4A5D3E]">
                Atención personalizada · Tu Viaje en Primera Clase
              </p>
              <h2
                id="contacto-heading"
                className="mt-3 font-editorial text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#2B1D14] leading-[1.08] text-balance"
              >
                Asegura tu Lugar en el Círculo
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#5C463B]">
                Déjanos tus datos para enviarte el dossier completo de tarifas por habitación, opciones de pago y confirmar disponibilidad inmediata en Posada Bagbazindio.
              </p>

              <div className="mt-8 space-y-4 pt-6 border-t border-[#3E2723]/12 text-sm text-[#3E2723]">
                <div className="flex items-start gap-3">
                  <CalendarDays className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#2B1D14]">Fechas del Retiro</p>
                    <p className="text-[#5C463B]">Viernes 11, sábado 12 y domingo 13 de diciembre, 2026</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#2B1D14]">Salida Ejecutiva y Sede</p>
                    <p className="text-[#5C463B]">
                      Salida CC Paseo Las Mercedes (6:00 a. m.) · Posada Bagbazindio, Todasana, La Guaira
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={buildWhatsAppUrl(
                    'Hola asesor de Tu Viaje en Primera Clase, deseo recibir información directa sobre el retiro Soltar para Renacer 2027.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0072CE] hover:bg-[#005AA3] text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8200]"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>Escribir directamente por WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Clean Validated Form Card */}
            <div className="lg:col-span-7 rounded-3xl bg-[#F5EBE0]/65 border border-[#3E2723]/12 p-7 sm:p-10">
              {submitted ? (
                <div className="py-6 text-center max-w-lg mx-auto" role="status" aria-live="polite">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#4A5D3E]/12 text-[#4A5D3E] flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-editorial text-3xl font-semibold text-[#2B1D14]">
                    Solicitud Lista, {values.fullName.split(' ')[0]}
                  </h3>
                  <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-[#5C463B]">
                    Hemos preparado tu solicitud para <strong className="text-[#2B1D14]">{values.accommodation}</strong> ({values.guests}). Continúa en un toque hacia WhatsApp para recibir tarifas actualizadas y confirmar tu cupo al instante con tu asesor de Tu Viaje en Primera Clase.
                  </p>

                  <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={buildWhatsAppUrl(compiledWhatsAppMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0072CE] hover:bg-[#005AA3] text-white text-sm font-semibold transition-colors shadow-sm"
                    >
                      <WhatsAppIcon className="w-4 h-4 shrink-0" />
                      <span>Enviar mi Solicitud por WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-3 text-sm font-medium text-[#5C463B] hover:text-[#2B1D14] transition-colors"
                    >
                      Editar mis datos
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="retreat-fullname"
                        className="block text-xs font-semibold text-[#2B1D14] mb-1.5"
                      >
                        Nombre y apellido *
                      </label>
                      <input
                        id="retreat-fullname"
                        type="text"
                        autoComplete="name"
                        required
                        value={values.fullName}
                        onChange={(e) => {
                          setValues((prev) => ({ ...prev, fullName: e.target.value }));
                          if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
                        }}
                        placeholder="Ej. María Fernanda Gómez"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAFAF7] border border-[#3E2723]/18 text-sm text-[#2B1D14] placeholder:text-[#5C463B]/55 focus:outline-none focus:border-[#0072CE] focus:ring-2 focus:ring-[#0072CE]/20"
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-xs font-medium text-[#B42318]" role="alert">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="retreat-phone"
                        className="block text-xs font-semibold text-[#2B1D14] mb-1.5"
                      >
                        WhatsApp / Teléfono *
                      </label>
                      <input
                        id="retreat-phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={values.phone}
                        onChange={(e) => {
                          setValues((prev) => ({ ...prev, phone: e.target.value }));
                          if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                        }}
                        placeholder="Ej. +58 414 000 0000"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAFAF7] border border-[#3E2723]/18 text-sm text-[#2B1D14] placeholder:text-[#5C463B]/55 focus:outline-none focus:border-[#0072CE] focus:ring-2 focus:ring-[#0072CE]/20"
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs font-medium text-[#B42318]" role="alert">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="retreat-email"
                        className="block text-xs font-semibold text-[#2B1D14] mb-1.5"
                      >
                        Correo electrónico *
                      </label>
                      <input
                        id="retreat-email"
                        type="email"
                        autoComplete="email"
                        required
                        value={values.email}
                        onChange={(e) => {
                          setValues((prev) => ({ ...prev, email: e.target.value }));
                          if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        placeholder="tu@correo.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAFAF7] border border-[#3E2723]/18 text-sm text-[#2B1D14] placeholder:text-[#5C463B]/55 focus:outline-none focus:border-[#0072CE] focus:ring-2 focus:ring-[#0072CE]/20"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs font-medium text-[#B42318]" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="retreat-guests"
                        className="block text-xs font-semibold text-[#2B1D14] mb-1.5"
                      >
                        Número de participantes
                      </label>
                      <select
                        id="retreat-guests"
                        value={values.guests}
                        onChange={(e) => setValues((prev) => ({ ...prev, guests: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAFAF7] border border-[#3E2723]/18 text-sm text-[#2B1D14] focus:outline-none focus:border-[#0072CE] focus:ring-2 focus:ring-[#0072CE]/20"
                      >
                        <option value="1 persona">1 persona</option>
                        <option value="2 personas">2 personas</option>
                        <option value="3 personas">3 personas</option>
                        <option value="Grupo de 4 o más">Grupo de 4 o más</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="retreat-accommodation"
                      className="block text-xs font-semibold text-[#2B1D14] mb-1.5"
                    >
                      Acomodación preferida en Posada Bagbazindio
                    </label>
                    <select
                      id="retreat-accommodation"
                      value={values.accommodation}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, accommodation: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAF7] border border-[#3E2723]/18 text-sm text-[#2B1D14] focus:outline-none focus:border-[#0072CE] focus:ring-2 focus:ring-[#0072CE]/20"
                    >
                      {ACCOMMODATION_PLANS.map((plan) => (
                        <option key={plan.id} value={plan.name}>
                          {plan.name} — {plan.occupancy}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="retreat-notes"
                      className="block text-xs font-semibold text-[#2B1D14] mb-1.5"
                    >
                      ¿Alguna consulta especial o requerimiento alimenticio? (Opcional)
                    </label>
                    <textarea
                      id="retreat-notes"
                      rows={3}
                      value={values.notes}
                      onChange={(e) => setValues((prev) => ({ ...prev, notes: e.target.value }))}
                      placeholder="Cuéntanos si vienes acompañada, si tienes alguna preferencia alimentaria o cualquier duda..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAF7] border border-[#3E2723]/18 text-sm text-[#2B1D14] placeholder:text-[#5C463B]/55 focus:outline-none focus:border-[#0072CE] focus:ring-2 focus:ring-[#0072CE]/20 resize-y"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs text-[#5C463B]">
                      Respuesta personalizada por un asesor de Tu Viaje en Primera Clase.
                    </p>
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0072CE] hover:bg-[#005AA3] text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8200]"
                    >
                      <span>Solicitar Tarifa y Cupo</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
