import { Metadata } from "next";
import { JSX } from "react";

import BeforeAfterSection from "@/components/app-de-reservas/BeforeAfterSection";
import BenefitsSection from "@/components/app-de-reservas/BenefitsSection";
import HeroSection from "@/components/app-de-reservas/HeroSection";
import HowItWorksSection from "@/components/app-de-reservas/HowItWorksSection";
import PlatformLogicSection from "@/components/app-de-reservas/PlataformLogicSection";
import PlatformTourSection from "@/components/app-de-reservas/PlatformTourSection";
import CtaSection from "@/components/homepage/CtaSection";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/config/site";

// Import the newly created components

export const metadata: Metadata = {
  title: "Plataforma de Reservas Online | Autonomía Total | Espacio Pisama",
  description:
    "Descubre nuestro sistema de reservas online. Gestiona tu agenda 24/7 sin intermediarios ni demoras. Toma el control total de tu práctica profesional.",
};

// --- PÁGINA PRINCIPAL ---
export default function PlataformaDeReservasPage(): JSX.Element {
  const breadcrumbItems = [
    {
      name: "Inicio",
      url: siteConfig.url,
    },
    {
      name: "App de Reservas",
      url: `${siteConfig.url}/app-de-reservas`,
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <section className="bg-content4/60 w-full border-b-1 border-content4">
        <div className="container mx-auto max-w-7xl px-4 py-3">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </section>
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
