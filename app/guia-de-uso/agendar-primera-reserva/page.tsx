// src/app/guia-de-uso/primera-reserva/page.tsx
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import { FaRocket, FaLightbulb } from "react-icons/fa";

import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/config/site";

// --- SEO: Metadatos de la Página ---
export const metadata: Metadata = {
  title: "Guía de Inicio: Tu Primera Reserva en Espacio Pisama | con Leo",
  description:
    "Leo te guía paso a paso para crear tu cuenta y hacer tu primera reserva en nuestra plataforma. ¡Empieza a gestionar tu agenda con total autonomía hoy mismo!",
};

export default function GuiaPrimeraReservaPage(): JSX.Element {
  const breadcrumbItems = [
    {
      name: "Inicio",
      url: siteConfig.url,
    },
    {
      name: "Guía de Uso",
      url: `${siteConfig.url}/guia-de-uso`,
    },
    {
      name: "Tu Primera Reserva",
      url: `${siteConfig.url}/guia-de-uso/agendar-primera-reserva`,
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
      <main className="bg-background">
        {/* --- SECCIÓN 1: BIENVENIDA DE LEO --- */}
        <section className="py-20">
          <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-4 lg:px-8">
            <div className="flex justify-center md:col-span-1">
              <Image
                src="/images/leo/leo-saludando.webp" // Reemplaza con una imagen de Leo
                alt="Leo, el asistente virtual de Espacio Pisama"
                width={300}
                height={300}
              />
            </div>
            <div className="text-center md:col-span-3 md:text-left">
              <h1 className="font-display text-5xl font-bold text-primary-500">
                ¡Bienvenido/a a bordo! Hagamos tu primera reserva.
              </h1>
              <p className="mt-4 font-sans text-lg text-foreground/80">
                ¡Hola! Soy Leo, y estoy muy contento de tenerte en nuestra
                comunidad. Sé que el primer paso es el más importante, así que
                te guiaré para que reserves tu primer consultorio en menos de 3
                minutos. ¡Verás lo fácil que es!
              </p>
            </div>
          </div>
        </section>

        <Divider />

        <article
          className="prose prose-lg mx-auto max-w-4xl px-4 py-20 
                           prose-headings:font-display prose-headings:text-primary-500 ..."
        >
          {/* --- GUÍA PASO A PASO --- */}
          <div className="space-y-12">
            <div>
              <h2>
                <span className="text-secondary-500">Paso 1:</span>{" "}
                Familiarízate con tu Dashboard
              </h2>
              <p>
                Al iniciar sesión, lo primero que verás es tu{" "}
                <strong>Dashboard</strong> o panel de &quot;Inicio&quot;. Este
                es tu centro de control. Aquí tendrás un resumen rápido de tus
                próximas reservas, las horas que tienes para reagendar y tu
                estado de facturación. Es el mejor lugar para tener una visión
                general de tu actividad.
              </p>
            </div>

            <div>
              <h2>
                <span className="text-secondary-500">Paso 2:</span> Explora la
                Disponibilidad
              </h2>
              <p>
                Ahora, vamos a buscar un espacio. En el menú, tienes dos vistas
                de calendario principales:
              </p>
              <ul>
                <li>
                  <strong>Calendario Diario:</strong> Te muestra todos los
                  consultorios a la vez para un día específico. Es ideal para
                  encontrar un hueco rápido.
                </li>
                <li>
                  <strong>Calendario Semanal:</strong> Te permite filtrar por un
                  consultorio y ver toda su semana. Perfecto para planificar.
                </li>
              </ul>
              <p>
                Navega por cualquiera de ellos y busca un bloque en blanco. ¡Ese
                es tu espacio!
              </p>
            </div>

            <div>
              <h2>
                <span className="text-secondary-500">Paso 3:</span> Reserva con
                un Clic
              </h2>
              <p>
                ¿Encontraste el horario perfecto? Simplemente haz clic sobre él.
                Se abrirá una ventana de confirmación con todos los detalles:
                fecha, hora, consultorio y tarifa.
              </p>
            </div>

            <div>
              <h2>
                <span className="text-secondary-500">Paso 4:</span> ¡Confirmado!
                Revisa tu Agenda
              </h2>
              <p>
                Una vez que confirmes, la reserva es tuya al instante. Para tu
                total tranquilidad, puedes ir a la sección{" "}
                <strong>&quot;Mis Reservas&quot;</strong> en el menú. Allí verás
                tu nueva reserva con el estado &quot;Activa&quot;. ¡Felicidades,
                has agendado tu primer consultorio!
              </p>
            </div>
          </div>

          <Divider className="my-16" />

          {/* --- EL CONSEJO DE LEO --- */}
          <div className="not-prose">
            <Card className="mx-auto max-w-3xl bg-content2 shadow-lg">
              <CardBody className="flex flex-col items-center gap-6 p-8 text-center md:flex-row md:text-left">
                <FaLightbulb className="h-16 w-16 flex-shrink-0 text-warning-500" />
                <div>
                  <h3 className="font-display text-2xl font-bold text-primary-500">
                    Un Consejo Clave de mi Parte
                  </h3>
                  <p className="mt-2 font-sans text-foreground/90">
                    Para tu primera reserva, te sugiero hacer una{" "}
                    <strong>Reserva Eventual</strong>. Es perfecta para probar
                    el sistema sin compromisos. Más adelante, cuando encuentres
                    tus horarios ideales para pacientes recurrentes, podrás usar
                    las <strong>Reservas Fijas</strong> para &quot;blindar&quot;
                    esos espacios para ti cada semana. Si quieres saber más,{" "}
                    <Link
                      href="/guia-de-uso/tipos-de-reserva"
                      className="font-semibold text-secondary-500 underline"
                    >
                      tengo una guía completa sobre eso
                    </Link>
                    .
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </article>
      </main>

      {/* --- CTA FINAL --- */}
      <section className="bg-content2 py-20 text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <FaRocket className="mx-auto h-12 w-12 text-success-500" />
          <h2 className="mt-6 font-display text-4xl font-bold text-primary-500">
            ¡Ya estás listo/a para despegar!
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-foreground/80">
            Has completado tu primer paso. Ahora tienes el control total para
            gestionar tu práctica con la autonomía que mereces. Si necesitas más
            ayuda, recuerda que siempre puedes volver a nuestra guía.
          </p>
          <div className="mt-8">
            <Button
              as={Link}
              href="/guia-de-uso"
              className="bg-primary-500 font-display font-semibold text-primary-foreground"
              size="lg"
            >
              Volver al Índice de Guías
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
