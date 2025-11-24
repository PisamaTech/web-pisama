import { Metadata } from "next";
import { JSX } from "react";

import AvailabilityPageClient from "@/components/disponibilidad/AvailabilityPageClient";
import CtaSection from "@/components/homepage/CtaSection"; // Reutilizamos el CTA
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title:
    "Ver Disponibilidad en Tiempo Real | Calendario Online | Espacio Pisama",
  description:
    "Consulta la disponibilidad de todos nuestros consultorios por hora en nuestro calendario online. Mira en tiempo real qué horarios están libres y planifica tu semana.",
  alternates: {
    canonical: "/disponibilidad",
  },
};

export default function DisponibilidadPage(): JSX.Element {
  const breadcrumbItems = [
    {
      name: "Inicio",
      url: siteConfig.url,
    },
    {
      name: "Disponibilidad",
      url: `${siteConfig.url}/disponibilidad`,
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
      <AvailabilityPageClient />

      <CtaSection
        title="¿Encontraste el horario que necesitabas?"
        description="Registrate en nuestra aplicación web y reserva en 3 minutos tu consultorios. Así de rápido y sencillo!"
        buttonText="Registrate ahora"
        buttonLink="https://reservas.pisama.uy/"
      />
    </>
  );
}
