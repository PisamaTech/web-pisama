// src/app/plataforma-de-reservas/page.tsx
import { Card, CardBody, CardHeader } from "@heroui/card";
import Image from "next/image";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import CtaSection from "@/components/homepage/CtaSection";

// --- SECCIÓN 1: HÉROE DE LA PÁGINA ---
const HeroSection = () => (
  <section className="bg-crema-suave py-20 text-center">
    <div className="container mx-auto px-4 lg:px-8">
      <h1 className="font-display text-5xl font-bold text-marron-cafe">
        El Control Total de tu Agenda Profesional
      </h1>
      <p className="mx-auto mt-6 max-w-3xl font-sans text-xl text-marron-cafe/90">
        Imagina asegurar tu consultorio en segundos, mientras aún tienes a tu
        paciente en línea. Sin llamadas, sin esperas, sin incertidumbre. En
        Espacio Pisama, te devolvemos el control real de tu tiempo.
      </p>
    </div>
  </section>
);

// --- SECCIÓN 2: ANTES Y DESPUÉS ---
const BeforeAfterSection = () => (
  <section className="py-20">
    <div className="container mx-auto grid grid-cols-1 gap-12 px-4 lg:grid-cols-2 lg:px-8">
      {/* El Método Antiguo */}
      <div className="rounded-2xl border-2 border-danger/50 bg-danger/10 p-8">
        <h2 className="font-display text-2xl font-bold text-primary">
          El Laberinto de la Coordinación Manual
        </h2>
        <ul className="mt-6 space-y-4 font-sans text-marron-cafe/80">
          <li className="flex items-start gap-3">
            <FaTimesCircle className="mt-1 h-5 w-5 flex-shrink-0 text-danger/70" />
            <span>Recibes una consulta y ofreces un horario tentativo.</span>
          </li>
          <li className="flex items-start gap-3">
            <FaTimesCircle className="mt-1 h-5 w-5 flex-shrink-0 text-danger/70" />
            <span>Contactas por mensaje para verificar disponibilidad.</span>
          </li>
          <li className="flex items-start gap-3">
            <FaTimesCircle className="mt-1 h-5 w-5 flex-shrink-0 text-danger/70" />
            <span>Esperas una respuesta, perdiendo un tiempo valioso.</span>
          </li>
          <li className="flex items-start gap-3">
            <FaTimesCircle className="mt-1 h-5 w-5 flex-shrink-0 text-danger/70" />
            <span>Para cuando te confirman, el horario ya no sirve.</span>
          </li>
        </ul>
      </div>
      {/* El Método Espacio Pisama */}
      <div className="rounded-2xl border-2 border-success bg-success/5 p-8">
        <h2 className="font-display text-2xl font-bold text-primary">
          El Poder de la Certeza Instantánea
        </h2>
        <ul className="mt-6 space-y-4 font-sans text-marron-cafe">
          <li className="flex items-start gap-3">
            <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
            <span>
              Mientras hablas con tu paciente, abres la agenda online.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
            <span>
              Ves la disponibilidad de todos los consultorios en tiempo real.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
            <span>Haces clic, reservas y el espacio es tuyo al instante.</span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
            <span>Cero fricción, máxima eficiencia y profesionalismo.</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

// --- SECCIÓN 3: CÓMO FUNCIONA EN 3 PASOS ---
const HowItWorksSection = () => (
  <section className="bg-gris-calido/40 py-20">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="font-display text-4xl font-bold text-marron-cafe">
          Tu Consultorio en 3 Clics
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        {/* Paso 1 */}
        <div className="text-center">
          <Image
            src="https://placehold.co/500x800/FAF3E0/5C4033?text=App+Paso+1"
            alt="Captura del registro en la plataforma"
            width={500}
            height={800}
            className="mx-auto w-48 rounded-2xl shadow-lg"
          />
          <h3 className="mt-6 font-display text-2xl font-bold text-marron-cafe">
            1. Crea tu Perfil
          </h3>
          <p className="mt-2 font-sans text-marron-cafe/90">
            Un proceso rápido, seguro y sin costos de membresía para darte de
            alta.
          </p>
        </div>
        {/* Paso 2 */}
        <div className="text-center">
          <Image
            src="https://placehold.co/500x800/FAF3E0/5C4033?text=App+Paso+2"
            alt="Captura del calendario de la plataforma"
            width={500}
            height={800}
            className="mx-auto w-48 rounded-2xl shadow-lg"
          />
          <h3 className="mt-6 font-display text-2xl font-bold text-marron-cafe">
            2. Visualiza y Elige
          </h3>
          <p className="mt-2 font-sans text-marron-cafe/90">
            Accede al calendario en tiempo real y elige el consultorio y horario
            que necesites.
          </p>
        </div>
        {/* Paso 3 */}
        <div className="text-center">
          <Image
            src="https://placehold.co/500x800/FAF3E0/5C4033?text=App+Paso+3"
            alt="Captura de la confirmación de reserva"
            width={500}
            height={800}
            className="mx-auto w-48 rounded-2xl shadow-lg"
          />
          <h3 className="mt-6 font-display text-2xl font-bold text-marron-cafe">
            3. Confirma y Asegura
          </h3>
          <p className="mt-2 font-sans text-marron-cafe/90">
            Con un clic, la reserva es tuya. Recibirás una notificación y
            quedará en tu perfil.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// --- SECCIÓN 4: BENEFICIOS DETALLADOS ---
const BenefitsSection = () => {
  const benefits = [
    {
      title: "Disponibilidad 24/7",
      description:
        "Consulta la agenda y reserva a medianoche o el fin de semana. La plataforma trabaja para ti.",
    },
    {
      title: "Cero Intermediarios",
      description:
        "Tu reserva es directa e inmediata. Se acabaron las idas y vueltas por mensaje.",
    },
    {
      title: "Tu Historial a un Clic",
      description:
        "Todas tus reservas, pasadas y futuras, registradas en tu perfil para un control total.",
    },
    {
      title: "Gestión de Imprevistos",
      description:
        "Nuestra política de cancelación flexible está integrada para que puedas reprogramar fácilmente.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold text-marron-cafe">
            Una Plataforma Creada para tu Libertad Profesional
          </h2>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="bg-crema-suave shadow-md">
              <CardHeader>
                <h3 className="font-display text-xl font-bold text-marron-cafe">
                  {benefit.title}
                </h3>
              </CardHeader>
              <CardBody>
                <p className="font-sans text-marron-cafe/90">
                  {benefit.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- PÁGINA PRINCIPAL QUE ENSAMBLA TODO ---
export default function PlataformaDeReservasPage(): JSX.Element {
  return (
    <>
      <HeroSection />
      <BeforeAfterSection />
      <HowItWorksSection />
      <BenefitsSection />
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
