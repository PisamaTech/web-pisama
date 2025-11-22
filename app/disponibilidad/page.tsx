import { Metadata } from "next";
import { JSX } from "react";

import AvailabilityPageClient from "@/components/disponibilidad/AvailabilityPageClient";
import CtaSection from "@/components/homepage/CtaSection"; // Reutilizamos el CTA

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
  return (
    <>
      <AvailabilityPageClient />

      <CtaSection
        title="¿Encontraste el horarios que necesitabas?"
        description="Registrate en nuestra aplicación web y reserva en 3 minutos tu consultorios. Así de rápido y sencillo!"
        buttonText="Registrate ahora"
        buttonLink="https://reservas.pisama.uy/"
      />
    </>
  );
}
