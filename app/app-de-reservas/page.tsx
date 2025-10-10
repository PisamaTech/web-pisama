import { Metadata } from "next";
import { JSX } from "react";

import BeforeAfterSection from "@/components/app-de-reservas/BeforeAfterSection";
import BenefitsSection from "@/components/app-de-reservas/BenefitsSection";
import HeroSection from "@/components/app-de-reservas/HeroSection";
import HowItWorksSection from "@/components/app-de-reservas/HowItWorksSection";
import PlatformLogicSection from "@/components/app-de-reservas/PlataformLogicSection";
import PlatformTourSection from "@/components/app-de-reservas/PlatformTourSection";
import CtaSection from "@/components/homepage/CtaSection";

// Import the newly created components

export const metadata: Metadata = {
  title: "Plataforma de Reservas Online | Autonomía Total | Espacio Pisama",
  description:
    "Descubre nuestro sistema de reservas online. Gestiona tu agenda 24/7 sin intermediarios ni demoras. Toma el control total de tu práctica profesional.",
};

// --- PÁGINA PRINCIPAL ---
export default function PlataformaDeReservasPage(): JSX.Element {
  return (
    <>
      <HeroSection />
      <BeforeAfterSection />
      <HowItWorksSection />
      <PlatformTourSection />
      <BenefitsSection />
      <PlatformLogicSection />
      <CtaSection
        title="Tu Práctica. Tus Reglas. Tu Tiempo."
        description="Regístrate hoy mismo y experimenta la libertad de gestionar tu espacio
        profesional sin fricciones. El primer paso hacia una práctica más
        autónoma empieza aquí."
        buttonText="Registrate ahora"
        buttonLink="https://reservas.pisama.uy/"
      />
    </>
  );
}
