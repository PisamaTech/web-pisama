import type { Metadata } from "next";
import type { JSX } from "react";

import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaInfoCircle, FaTimesCircle } from "react-icons/fa";

import ClickableImage from "@/components/guia-de-uso/ClickableImage";
import ImageGallery from "@/components/guia-de-uso/ImageGallery";
import reagendamientoConfirmar from "@/public/images/reagendamiento/reagendamiento-confirmar.webp";
import reagendamientoDashboard from "@/public/images/reagendamiento/reagendamiento-dashboard.webp";
import reagendamientoModo from "@/public/images/reagendamiento/reagendamiento-modo.webp";
import reagendamientoPenalizado from "@/public/images/reagendamiento/reagendamiento-penalizado.webp";
import reagendamientoReservas from "@/public/images/reagendamiento/reagendamiento-reservas.webp";
import reagendamientoRevertido from "@/public/images/reagendamiento/reagendamiento-revertido.webp";

// --- SEO: Metadatos de la Página ---
export const metadata: Metadata = {
  title: "Guía con Leo: Cómo Reagendar una Reserva Penalizada | Espacio Pisama",
  description:
    "Leo, tu asistente virtual, te guía paso a paso para recuperar una hora cancelada con menos de 24h de antelación en la plataforma de Espacio Pisama.",
};

// --- PÁGINA PRINCIPAL QUE ENSAMBLA TODO ---
export default function GuiaReagendamientoPageConLeo(): JSX.Element {
  return (
    <ImageGallery>
      <main className="bg-background py-20 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4 lg:px-8">
          {/* --- SECCIÓN 1: BIENVENIDA DE LEO --- */}
          <header className="mb-16 grid grid-cols-1 items-center gap-8 md:grid-cols-4">
            <div className="flex justify-center md:col-span-1">
              <Image
                src="/images/leo/leo-perfil-fondo.webp" // Reemplaza con una imagen de Leo en pose de "ayuda"
                alt="Leo, el asistente virtual de Espacio Pisama"
                width={200}
                height={200}
                className="rounded-full border-2 border-primary-500"
              />
            </div>
            <div className="text-center md:col-span-3 md:text-left">
              <h1 className="font-display text-5xl font-bold text-primary-500">
                ¡Hola, soy Leo! Recuperemos esa reserva penalizada juntos.
              </h1>
              <p className="mt-6 font-sans text-lg text-foreground/80">
                Sé que puede ser frustrante cancelar a último momento. Pero no
                te preocupes, en Espacio Pisama diseñamos un sistema justo para
                que no pierdas tu inversión. En esta guía, te mostraré paso a
                paso cómo reagendar esa reserva penalizada. ¡Es muy fácil!
              </p>
            </div>
          </header>

          <article className="prose prose-lg mx-auto prose-headings:font-display prose-headings:text-primary-500 prose-p:font-sans ...">
            {/* --- VIDEO EXPLICATIVO --- */}
            <h2>Primero, miralo en acción</h2>
            <p>
              He preparado este video corto que te muestra todo el proceso de
              principio a fin.
            </p>
            <div className="my-12 aspect-video w-full overflow-hidden rounded-lg shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/jJxIYcs7A9E"
                title="Tutorial: Cómo Reagendar una Reserva Penalizada en Espacio Pisama"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* --- GUÍA PASO A PASO --- */}
            <h2>El Proceso, Paso a Paso</h2>
            <div className="space-y-12">
              <div>
                <h3>Paso 1: Encuentra tu Reserva a Reagendar</h3>
                <p>
                  Para empezar, tienes dos caminos muy sencillos para localizar
                  tu &quot;crédito&quot;:
                </p>
                <ul>
                  <li>
                    <strong>En tu Dashboard:</strong> Al iniciar sesión, busca
                    la tarjeta &quot;Disponibles para Reagendar&quot;.
                    <ClickableImage
                      src={reagendamientoDashboard}
                      alt="Vista del dashboard con la opción para reagendar"
                    />
                  </li>
                  <li>
                    <strong>En &quot;Mis Reservas&quot;:</strong> Filtra por el
                    estado &quot;Penalizada&quot;. Verás el botón de
                    reagendamiento activo.
                    <ClickableImage
                      src={reagendamientoReservas}
                      alt="Vista de la sección de reservas con la opción para reagendar"
                    />
                  </li>
                </ul>
                <div className="not-prose mt-12 rounded-lg border-l-4 border-warning-500 bg-warning-100/70 p-4">
                  <p className="flex items-start gap-3">
                    <FaInfoCircle className="mt-1 h-5 w-5 flex-shrink-0 text-warning-600" />
                    <span>
                      <strong>¡Un tip importante de mi parte!</strong> Recuerda
                      que tienes un plazo de <strong>6 días</strong> desde la
                      fecha original para completar el reagendamiento.
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <h3>Paso 2: Activa el &quot;Modo Reagendamiento&quot;</h3>
                <p>
                  Una vez que hagas clic en &quot;Reagendar&quot;, fíjate cómo
                  la plataforma te lleva al Calendario y aparece un banner
                  naranja. ¡Esa es la señal! Te confirma que estás en modo
                  reagendamiento y que tu próxima reserva será sin costo.
                </p>
                <ClickableImage
                  src={reagendamientoModo}
                  alt="Modo de reagendamiento activado"
                />
              </div>
              <div>
                <h3>Paso 3 y 4: Elige y Confirma</h3>
                <p>
                  Ahora solo tienes que navegar por el calendario, elegir tu
                  nuevo horario libre y confirmar. La ventana de confirmación te
                  indicará que es un reagendamiento. Una vez aceptes, ¡listo!
                  Has recuperado tu hora.
                </p>
                <ClickableImage
                  src={reagendamientoConfirmar}
                  alt="Confirmación del reagendamiento"
                />
              </div>
            </div>

            <Divider className="my-16" />

            {/* --- CASOS ESPECIALES --- */}
            <h2>Una pregunta que me hacen mucho...</h2>
            <p>
              ¿Qué pasa si necesito cancelar la nueva reserva que ya era un
              reagendamiento? Aquí te lo explico:
            </p>

            <div className="not-prose mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-xl border-2 shadow-xl border-success-300 bg-success-50/50 p-6 hover:scale-105 transition-transform duration-200">
                <h3 className="flex items-center gap-3 font-display text-xl font-bold text-success-700">
                  <FaCheckCircle /> Cancelas con MÁS de 24 horas
                </h3>
                <p className="my-6">
                  ¡No hay problema! El sistema reactiva tu penalización original
                  para que puedas volver a intentar reagendarla, siempre dentro
                  del plazo de 6 días.
                </p>
                <ClickableImage
                  src={reagendamientoRevertido}
                  alt="Reversión de un reagendamiento"
                />
              </div>
              <div className="rounded-xl border-2 shadow-xl border-danger-300 bg-danger-50/50 p-6 hover:scale-105 transition-transform duration-200">
                <h3 className="flex items-center gap-3 font-display text-xl font-bold text-danger-700 ">
                  <FaTimesCircle /> Cancelas con MENOS de 24 horas
                </h3>
                <p className="my-6">
                  En este caso, al ser una cancelación a último momento de una
                  segunda oportunidad, el crédito se considera utilizado y la
                  oportunidad se pierde.
                </p>
                <ClickableImage
                  src={reagendamientoPenalizado}
                  alt="Detalle de una reserva penalizada"
                />
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* --- CTA FINAL --- */}
      <section className="bg-content4 py-20 text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-primary-500">
            Espero haberte ayudado.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-foreground/80">
            Mi objetivo es que te sientas con total confianza usando la
            plataforma. Si aún tenés alguna duda, comunicate con nosotros.
          </p>
          <div className="mt-8">
            <Button
              as={Link}
              href="/contacto"
              className="bg-primary-500 font-display font-semibold text-primary-foreground"
              size="lg"
            >
              Contactanos
            </Button>
          </div>
        </div>
      </section>
    </ImageGallery>
  );
}
