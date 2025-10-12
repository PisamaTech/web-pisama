// src/app/guia-de-uso/tipos-de-reserva/page.tsx
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import { FaCalendarDay, FaSyncAlt, FaLightbulb } from "react-icons/fa";

// --- SEO: Metadatos de la Página ---
export const metadata: Metadata = {
  title:
    "Guía: Entendiendo los Tipos de Reserva (Fija vs. Eventual) | Espacio Pisama",
  description:
    "Leo te explica la diferencia entre Reservas Fijas y Eventuales y te ayuda a decidir cuál es la mejor opción para tu práctica profesional.",
};

export default function GuiaTiposDeReservaPage(): JSX.Element {
  return (
    <>
      <main className="bg-background">
        {/* --- SECCIÓN 1: BIENVENIDA DE LEO --- */}
        <section className="py-20">
          <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-4 lg:px-8">
            <div className="flex justify-center md:col-span-1">
              <Image
                src="/images/leo/leo-dudando2.webp" // Reemplaza con una imagen de Leo
                alt="Leo, el asistente virtual de Espacio Pisama"
                width={150}
                height={150}
                className="rounded-full border-2 border-primary-500"
              />
            </div>
            <div className="text-center md:col-span-3 md:text-left">
              <h1 className="font-display text-5xl font-bold text-primary-500">
                Reserva Fija vs. Eventual: ¿Cuál es la mejor para vos?
              </h1>
              <p className="mt-4 font-sans text-lg text-foreground/80">
                ¡Hola de nuevo! Soy Leo. Una de las primeras decisiones que
                tomarás en la plataforma es qué tipo de reserva hacer. No te
                preocupes, no es complicado. Piénsalo como elegir entre{" "}
                <strong>flexibilidad total</strong> para el ahora y{" "}
                <strong>estabilidad garantizada</strong> para el futuro. ¡Vamos
                a verlas en detalle!
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* --- SECCIÓN 2: COMPARATIVA VISUAL --- */}
        <section className="py-20">
          <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:px-8">
            {/* Reserva Eventual */}
            <div className="rounded-2xl shadow-2xl border-2 border-success-300 bg-success-100/50 p-8  hover:scale-105 transition-transform duration-200">
              <div className="flex items-center gap-4">
                <FaCalendarDay className="h-10 w-10 flex-shrink-0 text-success-600" />
                <h2 className="font-display text-3xl font-bold text-success-800">
                  Reserva Eventual
                </h2>
              </div>
              <p className="mt-4 font-sans text-lg font-bold">
                La Flexibilidad del Momento
              </p>
              <p className="mt-2 font-sans text-foreground/90">
                Es una reserva única para un día y hora específicos. Ideal para
                una consulta puntual o para cuando necesitas un horario fuera de
                tu rutina.
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 font-sans">
                <li>Perfecta para empezar a usar el espacio.</li>
                <li>Sin compromiso a largo plazo.</li>
                <li>Reservas al instante según la disponibilidad.</li>
              </ul>
            </div>
            {/* Reserva Fija */}
            <div className="rounded-2xl shadow-2xl border-2 border-blue-200 bg-blue-100/50 p-8 hover:scale-105 transition-transform duration-200">
              <div className="flex items-center gap-4">
                <FaSyncAlt className="h-10 w-10 flex-shrink-0 text-blue-900/70" />
                <h2 className="font-display text-3xl font-bold text-blue-900/70">
                  Reserva Fija
                </h2>
              </div>
              <p className="mt-4 font-sans text-lg font-bold">
                La Estabilidad para tu Crecimiento
              </p>
              <p className="mt-2 font-sans text-foreground/90">
                Asegura tu horario preferido a largo plazo. Esta reserva se
                repite automáticamente cada semana, garantizando ese bloque para
                ti.
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 font-sans">
                <li>Ideal para pacientes recurrentes.</li>
                <li>Construye una rutina profesional estable.</li>
                <li>El horario queda &quot;blindado&quot; para ti.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN 3: EL CONSEJO DE LEO --- */}
        <section className="bg-content2 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-display text-4xl font-bold text-primary-500">
                El Consejo de Leo: ¿Cuándo usar cada una?
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
              <Card className="bg-background shadow-xl hover:scale-105 transition-transform duration-200">
                <CardBody className="p-6">
                  <h3 className="font-display text-xl font-bold text-primary-500">
                    Usa una{" "}
                    <span className="text-success-600">Reserva EVENTUAL </span>
                    si...
                  </h3>
                  <ul className="mt-4 list-inside list-disc space-y-2 font-sans text-foreground/90">
                    <li>Estás empezando y quieres probar el espacio.</li>
                    <li>Surgió una consulta de imprevisto.</li>
                    <li>
                      Tu agenda es muy variable y no tienes horarios fijos.
                    </li>
                    <li>
                      Quieres probar un nuevo horario antes de comprometerte.
                    </li>
                  </ul>
                </CardBody>
              </Card>
              <Card className="bg-background shadow-xl hover:scale-105 transition-transform duration-200">
                <CardBody className="p-6">
                  <h3 className="font-display text-xl font-bold text-primary-500">
                    Usa una{" "}
                    <span className="text-blue-900/70">Reserva FIJA</span> si...
                  </h3>
                  <ul className="mt-4 list-inside list-disc space-y-2 font-sans text-foreground/90">
                    <li>Ya tienes pacientes con horarios recurrentes.</li>
                    <li>Encontraste tu horario ideal y no quieres perderlo.</li>
                    <li>
                      Buscas construir una rutina estable para tu práctica.
                    </li>
                    <li>
                      Quieres beneficiarte al máximo de los descuentos por
                      volumen.
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </div>
            <div className="not-prose mt-16 rounded-lg border-l-4 border-warning-500 bg-warning-100/50 p-4">
              <p className="flex items-start gap-3">
                <FaLightbulb className="mt-1 h-5 w-5 flex-shrink-0 text-warning-600" />
                <span>
                  <strong>Mi recomendación final:</strong> ¡No hay una opción
                  &apos;mejor&apos;! Solo la que mejor se adapta a TU momento
                  profesional.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN 4: CTA FINAL --- */}
        <section className="py-20 text-center bg-content4">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-display text-4xl font-bold text-primary-500">
              ¿Listo/a para ponerlo en práctica?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-foreground/80">
              Ahora que conoces las herramientas, es hora de ver el tablero de
              juego. Explora la agenda en tiempo real y encontra el espacio
              perfecto para tu próxima sesión.
            </p>
            <div className="mt-8">
              <Button
                as={Link}
                href="/disponibilidad"
                className="bg-secondary-500 font-display font-semibold text-secondary-foreground"
                size="lg"
              >
                Ver la Agenda Ahora
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
