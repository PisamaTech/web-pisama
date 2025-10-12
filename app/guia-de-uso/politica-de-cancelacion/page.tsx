// src/app/guia-de-uso/politica-de-cancelacion/page.tsx
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import {
  FaClock,
  FaCheckCircle,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";

// --- SEO: Metadatos de la Página ---
export const metadata: Metadata = {
  title: "Guía: Nuestra Política de Cancelación Flexible | Espacio Pisama",
  description:
    "Leo te explica cómo funciona nuestro sistema de cancelaciones, diseñado para darte tranquilidad y proteger tu inversión ante imprevistos.",
};

export default function GuiaCancelacionesPage(): JSX.Element {
  return (
    <>
      <main className="bg-background">
        {/* --- SECCIÓN 1: BIENVENIDA DE LEO --- */}
        <section className="py-20">
          <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-4 lg:px-8">
            <div className="flex justify-center md:col-span-1">
              <Image
                src="/images/leo/leo-relajado.webp" // Reemplaza con una imagen de Leo
                alt="Leo, el asistente virtual de Espacio Pisama"
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>
            <div className="text-center md:col-span-3 md:text-left">
              <h1 className="font-display text-5xl font-bold text-primary-500">
                Una Política de Cancelación que te da Tranquilidad
              </h1>
              <p className="mt-4 font-sans text-lg text-foreground/80">
                ¡Hola, soy Leo! Hoy vamos a hablar de un tema importante: los
                imprevistos. Quiero que sepas que nuestro sistema está diseñado
                para darte flexibilidad y opciones, no para penalizarte. Nuestra
                filosofía es simple: proteger tu inversión y tu paz mental.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* --- SECCIÓN 2: LA REGLA DE ORO --- */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4 lg:px-8">
            <FaClock className="mx-auto h-16 w-16 text-secondary-500" />
            <h2 className="mt-6 font-display text-4xl font-bold text-primary-500">
              La Regla de Oro: Las 24 Horas
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-sans text-lg text-foreground/90">
              Toda nuestra política de cancelación gira en torno a este simple
              principio. Es el punto que define si tu cancelación es totalmente
              gratuita o si se convierte en una oportunidad para reagendar.
            </p>
          </div>
        </section>

        {/* --- SECCIÓN 3: LOS DOS CAMINOS (COMPARATIVA) --- */}
        <section className="bg-content2 py-20">
          <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:px-8">
            {/* Camino 1: Cancelación Gratuita */}
            <div className="rounded-lg border-2 border-success-300 bg-success-50/50 p-8">
              <div className="flex items-center gap-4">
                <FaCheckCircle className="h-10 w-10 flex-shrink-0 text-success-600" />
                <h2 className="font-display text-3xl font-bold text-success-800">
                  Con MÁS de 24 Horas
                </h2>
              </div>
              <p className="mt-4 font-sans text-lg font-bold">
                Libertad y Cero Costo
              </p>
              <p className="mt-2 font-sans text-foreground/90">
                Si cancelas con más de 24 horas de antelación, no hay ninguna
                complicación. La reserva simplemente se elimina de tu agenda y
                no se genera ningún cargo. Así de fácil.
              </p>
            </div>
            {/* Camino 2: Oportunidad de Reagendamiento */}
            <div className="rounded-lg border-2 border-warning-300 bg-warning-50/50 p-8">
              <div className="flex items-center gap-4">
                <FaShieldAlt className="h-10 w-10 flex-shrink-0 text-warning-600" />
                <h2 className="font-display text-3xl font-bold text-warning-800">
                  Con MENOS de 24 Horas
                </h2>
              </div>
              <p className="mt-4 font-sans text-lg font-bold">
                Una Oportunidad, no una Pérdida
              </p>
              <p className="mt-2 font-sans text-foreground/90">
                La reserva se marca como &quot;Penalizada&quot; y se factura,
                pero <strong>NO pierdes tu inversión</strong>. Automáticamente
                se convierte en un crédito para que puedas reagendar esa hora
                sin costo, como te explicamos en{" "}
                <Link
                  href="/guia-de-uso/como-reagendar-una-reserva-penalizada"
                  className="font-semibold text-secondary-500 underline"
                >
                  nuestra guía de reagendamiento
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN 4: EL CONSEJO DE LEO --- */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <Card className="mx-auto max-w-3xl bg-background shadow-lg">
              <CardBody className="flex items-start gap-6 p-8">
                <FaLightbulb className="h-16 w-16 flex-shrink-0 text-warning-500" />
                <div>
                  <h3 className="font-display text-2xl font-bold text-primary-500">
                    Un Consejo de mi Parte
                  </h3>
                  <p className="mt-2 font-sans text-foreground/90">
                    ¿Tienes dudas sobre si tu paciente confirmará? Mi
                    recomendación es siempre la misma: es mejor cancelar con
                    tiempo y volver a reservar cuando tengas la certeza, que
                    arriesgarte a una penalización. El sistema te da la
                    flexibilidad para hacerlo.
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* --- SECCIÓN 5: CTA FINAL --- */}
        <section className="bg-content2 py-20 text-center">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-display text-4xl font-bold text-primary-500">
              ¿Quieres gestionar tus reservas?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-foreground/80">
              Ahora que conoces las reglas, puedes ver y administrar todas tus
              reservas activas y pasadas en tu panel personal dentro de la
              aplicación.
            </p>
            <div className="mt-8">
              <Button
                as={Link}
                href="https://reservas.pisama.uy/reservas" // Enlace a la sección "Mis Reservas" de la app
                className="bg-primary-500 font-display font-semibold text-primary-foreground"
                size="lg"
              >
                Ir a &quot;Mis Reservas&quot;
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
