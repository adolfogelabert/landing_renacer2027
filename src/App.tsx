/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PillarsSection } from './components/PillarsSection';
import { FacilitatorSection } from './components/FacilitatorSection';
import { ItinerarySection } from './components/ItinerarySection';
import { VenueSection } from './components/VenueSection';
import { PlansSection } from './components/PlansSection';
import { FaqAndContactSection } from './components/FaqAndContactSection';
import { BrochureModal, FooterAndFloatingCta } from './components/FooterAndFloatingCta';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [brochureIndex, setBrochureIndex] = useState<number | null>(null);

  const handleSelectPlanForForm = (planName: string) => {
    setSelectedPlan(planName);
    const contactEl = document.getElementById('contacto');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#2B1D14]">
        <a
          href="#contenido-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#0072CE] focus:text-white focus:text-sm focus:font-semibold"
        >
          Saltar al contenido principal
        </a>

        <Navbar />

        <main id="contenido-principal" className="flex-1">
          <HeroSection />
          <PillarsSection />
          <FacilitatorSection onOpenBrochure={(idx) => setBrochureIndex(idx)} />
          <ItinerarySection onOpenBrochure={(idx) => setBrochureIndex(idx)} />
          <VenueSection />
          <PlansSection onSelectPlanForForm={handleSelectPlanForForm} />
          <FaqAndContactSection selectedPlan={selectedPlan} />
        </main>

        <FooterAndFloatingCta onOpenBrochure={(idx) => setBrochureIndex(idx)} />

        <BrochureModal
          activeIndex={brochureIndex}
          onClose={() => setBrochureIndex(null)}
          onChangeIndex={(idx) => setBrochureIndex(idx)}
        />
      </div>
    </MotionConfig>
  );
}
