// src/app/guia-de-uso/como-reagendar-una-reserva-penalizada/page.tsx
import { Divider } from "@heroui/divider";
import { Metadata } from "next";
import { JSX } from "react";
import { FaInfoCircle, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import CtaSection from "@/components/homepage/CtaSection";

// --- SEO: Metadatos de la Página ---
export const metadata: Metadata = {
  title: "Guía: Cómo Reagendar una Reserva Penalizada | Espacio Pisama",
  description:
    "Un tutorial paso a paso sobre cómo recuperar una hora cancelada con menos de 24h de antelación en la plataforma de Espacio Pisama.",
};

// --- PÁGINA PRINCIPAL QUE ENSAMBLA TODO ---
export default function GuiaReagendamientoPage(): JSX.Element {
  return (
    <>
      <main className="bg-background py-20 sm:py-24">
        <article
          className="prose prose-lg mx-auto max-w-4xl px-4 
                     prose-headings:font-display prose-headings:text-primary-500
                     prose-p:font-sans prose-p:text-foreground/90
                     prose-strong:text-primary-500
                     prose-a:text-secondary-500 prose-a:font-semibold hover:prose-a:text-secondary-400 
                     prose-blockquote:border-secondary-500 prose-blockquote:text-foreground/70
                     prose-li:font-sans prose-li:text-foreground/90"
        >
          {/* --- TÍTULO Y INTRODUCCIÓN --- */}
          <h1>¿Cómo reagendo una reserva penalizada?</h1>
          <p>
            Cuando cancelas una reserva con menos de 24 horas de antelación,
            esta se marca como &quot;Penalizada&quot;. Aunque esta hora se
            incluye en tu facturación, te damos la oportunidad de recuperarla
            reagendándola sin costo adicional. Aquí te explicamos cómo hacerlo:
          </p>

          {/* --- VIDEO EXPLICATIVO --- */}
          <div className="my-12 aspect-video w-full overflow-hidden rounded-lg shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/TU_URL_DE_TU_VIDEO_AQUI" // <-- ¡IMPORTANTE! Reemplaza este enlace
              title="Tutorial: Cómo Reagendar una Reserva en Espacio Pisama"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* --- GUÍA PASO A PASO --- */}
          <div className="space-y-12">
            {/* Paso 1 */}
            <div>
              <h2>Paso 1: Encuentra tu Reserva a Reagendar</h2>
              <p>Tienes dos lugares para encontrar tus reservas elegibles:</p>
              <ul>
                <li>
                  <strong>En tu Dashboard:</strong> Al iniciar sesión, verás una
                  tarjeta llamada &ldquo;Disponibles para Reagendar&rdquo;.
                </li>
                <li>
                  <strong>En &ldquo;Mis Reservas&rdquo;:</strong> Busca tus
                  reservas con estado &ldquo;Penalizada&rdquo; y un botón de
                  acción disponible.
                </li>
              </ul>
              <div className="mt-6 rounded-lg border-l-4 border-warning-500 bg-warning-50/50 p-4">
                <p className="flex items-start gap-3">
                  <FaInfoCircle className="mt-1 h-5 w-5 flex-shrink-0 text-warning-600" />
                  <span>
                    <strong>Recuerda:</strong> Tienes un plazo de{" "}
                    <strong>6 días</strong> a partir de la fecha de la reserva
                    original para completar el reagendamiento. ¡No dejes que se
                    te pase la fecha!
                  </span>
                </p>
              </div>
            </div>
            {/* Paso 2 */}
            <div>
              <h2>Paso 2: Activa el &quot;Modo Reagendamiento&quot;</h2>
              <p>
                Una vez que localices la reserva, haz clic en el botón
                &quot;Reagendar&quot;. Serás redirigido al Calendario y
                aparecerá un banner de notificación naranja en la parte
                superior, confirmando que has entrado en &quot;Modo
                Reagendamiento&quot;.
              </p>
            </div>
            {/* Paso 3 */}
            <div>
              <h2>Paso 3: Selecciona tu Nuevo Horario</h2>
              <p>
                Ahora, simplemente usa el calendario como lo harías normalmente
                para encontrar un nuevo horario disponible que te convenga. Haz
                clic en el espacio libre que desees reservar.
              </p>
            </div>
            {/* Paso 4 */}
            <div>
              <h2>Paso 4: Confirma tu Reagendamiento</h2>
              <p>
                Se abrirá el diálogo de confirmación indicando que es un
                reagendamiento. Revisa los detalles y confirma. No se te
                generará ningún cargo nuevo. La nueva reserva se creará como
                &ldquo;Activa&rdquo; y la original pasará a
                &ldquo;Reagendada&rdquo;. ¡Listo, has recuperado tu hora!
              </p>
              <p>
                <strong>¿Cambiaste de opinión?</strong> Si entraste en modo
                reagendamiento por error, simplemente haz clic en &quot;Salir
                del modo&quot; en el banner naranja.
              </p>
            </div>
          </div>

          <Divider className="my-16" />

          {/* --- CASOS ESPECIALES --- */}
          <h2>
            ¿Qué pasa si cancelo una reserva que ya era un reagendamiento?
          </h2>
          <p>
            Puedes cancelar una reserva que creaste como parte de un
            reagendamiento. La forma en que el sistema lo maneja depende de con
            cuánta antelación lo hagas:
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Caso 1: Cancelación con tiempo */}
            <div className="rounded-xl border-2 border-success-300 bg-success-50/50 p-6 hover:scale-105 transition-transform ease-in-out">
              <h3 className="flex items-center gap-3 font-display text-xl font-bold text-success-700!">
                <FaCheckCircle /> Cancelas con MÁS de 24 horas
              </h3>
              <p className="mt-4">
                Entendemos que los planes pueden cambiar. Si cancelas con
                tiempo, el sistema es flexible:
              </p>
              <ul className="mt-2 list-inside list-disc">
                <li>La reserva reagendada se cancela sin costo.</li>
                <li>
                  La penalización original se{" "}
                  <strong>&quot;Reactiva&quot;</strong>.
                </li>
                <li>
                  Puedes volver a intentar reagendarla dentro del plazo original
                  de 6 días.
                </li>
              </ul>
            </div>
            {/* Caso 2: Cancelación a último momento */}
            <div className="rounded-xl border-2 border-danger-300 bg-danger-50/50 p-6 hover:scale-105 transition-transform duration-200">
              <h3 className="flex items-center gap-3 font-display text-xl font-bold text-danger-700!">
                <FaTimesCircle /> Cancelas con MENOS de 24 horas
              </h3>
              <p className="mt-4">
                Si cancelas la nueva reserva a último momento, la oportunidad de
                reagendamiento se considerará utilizada:
              </p>
              <ul className="mt-2 list-inside list-disc">
                <li>La oportunidad de recuperar esa hora se pierde.</li>
                <li>
                  La penalización original queda como &quot;Reagendada&quot;.
                </li>
                <li>
                  La reserva reagendada queda como &quot;Penalizada&quot;, pero
                  sin opción de reagendamiento.
                </li>
              </ul>
            </div>
          </div>
        </article>
      </main>
      <CtaSection
        title="¿Aún tienes dudas?"
        description="Si tienes alguna otra consulta sobre nuestra plataforma o los espacios, nuestro equipo está para ayudarte."
        buttonText="Contáctanos"
        buttonLink="/contacto"
      />
    </>
  );
}
