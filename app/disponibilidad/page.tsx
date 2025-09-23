import AvailabilityPageClient from "@/components/disponibilidad/AvailabilityPageClient";
import CtaSection from "@/components/homepage/CtaSection"; // Reutilizamos el CTA

export default function DisponibilidadPage(): JSX.Element {
  return (
    <>
      <section className="bg-content2 py-20 sm:py-24">
        {/* Aquí insertamos nuestro componente cliente que contiene toda la lógica interactiva */}
        <AvailabilityPageClient />
      </section>

      <CtaSection
        title="¿Listo para reservar tu consultorio?"
        description="Espacios profesionales, cómodos y listos para recibir a tus pacientes. Reserva en minutos y empieza a trabajar en el ambiente que mereces."
        buttonText="Reservar ahora"
        buttonLink="https://reservas.pisama.uy/"
      />
    </>
  );
}
