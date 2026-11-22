import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { PILLARS, PillarItem } from '../data/retreatData';
import { PillarSacredIcon } from './SacredIcons';

interface PillarCardProps {
  pillar: PillarItem;
  isExpanded: boolean;
  onToggle: () => void;
  wide?: boolean;
}

function PillarCard({ pillar, isExpanded, onToggle, wide = false }: PillarCardProps) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rotateX: Number((-y * 5.5).toFixed(2)),
      rotateY: Number((x * 5.5).toFixed(2)),
    });
  };

  const resetTilt = () => setTilt({ rotateX: 0, rotateY: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={wide ? 'md:col-span-3' : 'md:col-span-2'}
      style={{ perspective: 900 }}
    >
      <button
        type="button"
        onClick={onToggle}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        aria-expanded={isExpanded}
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transition: 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 200ms ease, border-color 200ms ease',
        }}
        className={`group w-full h-full text-left flex flex-col justify-between p-6 sm:p-7 rounded-2xl border bg-[#FAFAF7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0072CE] ${
          isExpanded
            ? 'border-[#C5A059] shadow-[0_18px_40px_rgba(62,39,35,0.09)]'
            : 'border-[#3E2723]/12 shadow-[0_6px_24px_rgba(62,39,35,0.04)] hover:border-[#C5A059]/70 hover:shadow-[0_16px_36px_rgba(62,39,35,0.08)]'
        }`}
      >
        <div>
          <div className="flex items-start justify-between gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#F5EBE0] border border-[#C5A059]/35 flex items-center justify-center text-[#9F7B33] group-hover:text-[#C5A059] group-hover:bg-[#F5EBE0]/80 transition-colors">
              <PillarSacredIcon type={pillar.icon} className="w-9 h-9" />
            </div>
            <span className="font-editorial text-2xl font-medium text-[#C5A059]/85 tabular-nums">
              {pillar.number}.
            </span>
          </div>

          <h3 className="mt-5 font-editorial text-2xl sm:text-[26px] font-semibold text-[#2B1D14] leading-snug">
            {pillar.title}
          </h3>

          <p className="mt-1.5 text-xs font-medium tracking-wide text-[#4A5D3E]">
            {pillar.subtitle}
          </p>

          <p className="mt-3.5 text-[15px] leading-relaxed text-[#5C463B]">
            {pillar.description}
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-[#3E2723]/10">
          <div className="flex items-center justify-between gap-2 text-xs font-semibold text-[#3E2723]">
            <span>{isExpanded ? 'Cómo lo viviremos en el retiro' : 'Ver cómo lo integraremos'}</span>
            <ChevronDown
              className={`w-4 h-4 text-[#C5A059] transition-transform duration-200 ${
                isExpanded ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            />
          </div>

          {isExpanded && (
            <p className="mt-2.5 text-sm leading-relaxed text-[#4A5D3E]">
              {pillar.practiceNote}
            </p>
          )}
        </div>
      </button>
    </motion.div>
  );
}

export function PillarsSection() {
  const [expandedId, setExpandedId] = useState<string | null>('liberacion');

  return (
    <section
      id="el-retiro"
      aria-labelledby="pilares-heading"
      className="py-20 sm:py-24 lg:py-28 bg-[#FAFAF7]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-[13px] font-semibold tracking-[0.14em] text-[#4A5D3E]">
            El corazón de la experiencia · 3 días de inmersión
          </p>
          <h2
            id="pilares-heading"
            className="mt-3 font-editorial text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#2B1D14] leading-[1.1] text-balance"
          >
            Los 5 Pilares de la Transformación
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5C463B]">
            Cada jornada frente al mar está cuidadosamente hilada para liberar el peso del año que concluye y despertar una nueva coherencia energética hacia el 2027. Toca cada pilar para descubrir cómo lo integraremos.
          </p>
        </div>

        {/* Asymmetric 6-column bento grid: 3 cards top row (col-span-2 each), 2 featured wide cards bottom row (col-span-3 each) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-6 gap-5 lg:gap-6">
          {PILLARS.map((pillar, index) => (
            <PillarCard
              key={pillar.id}
              pillar={pillar}
              wide={index >= 3}
              isExpanded={expandedId === pillar.id}
              onToggle={() =>
                setExpandedId((current) => (current === pillar.id ? null : pillar.id))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
