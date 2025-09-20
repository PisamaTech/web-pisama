"use client";
// src/app/plataforma-de-reservas/page.tsx
import { Card, CardBody, CardHeader } from "@heroui/card";
import Image, { StaticImageData } from "next/image";
import { FaCheckCircle, FaTimes, FaTimesCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

import CtaSection from "@/components/homepage/CtaSection"; // Assuming this is the correct path
import aplicacionRegistro from "@/public/images/aplicacion-registro.webp";
import aplicacionVisualiza from "@/public/images/aplicacion-visualiza.webp";
import aplicacionConfirma from "@/public/images/aplicacion-confirma.webp";
import { MdOutlineEventAvailable } from "react-icons/md";
import { FaPeopleArrows, FaRegRectangleList } from "react-icons/fa6";
import { CgUnavailable } from "react-icons/cg";
import PlatformLogicSection from "@/components/sistema-de-reservas/PlataformLogicSection";
import PlatformTourSection from "@/components/sistema-de-reservas/PlatformTourSection";

import LightboxModal from "@/components/LightboxModal";

// --- SECCIÓN 1: HÉROE DE LA PÁGINA ---
const HeroSection = () => (
  <section className="bg-content2 py-12 text-center">
    <div className="container max-w-5xl mx-auto px-4 lg:px-8">
      <h1 className="font-display text-5xl font-bold text-marron-cafe">
        El Control Total de tu Agenda Profesional
      </h1>
      <p className="mx-auto mt-10 max-w-3xl font-sans text-xl text-marron-cafe/90">
        Imagina asegurar tu consultorio en segundos, mientras aún tienes a tu
        paciente en línea. Sin llamadas, sin esperas, sin incertidumbre. En
        <strong> Espacio Pisama</strong>, te devolvemos el control real de tu
        agenda y de tu tiempo.
      </p>
    </div>
  </section>
);

// --- SECCIÓN 2: ANTES Y DESPUÉS ---
const BeforeAfterSection = () => (
  <section className="pt-3 pb-20 bg-content2">
    <div className="container max-w-5xl mx-auto grid grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:px-8">
      {/* El Método Antiguo */}
      <div className="w-5/6 mx-auto rounded-2xl border-2 border-danger/50 bg-danger/10 p-8 shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <h2 className="font-display text-2xl font-bold text-primary">
          El Laberinto de la Coordinación Manual
        </h2>
        <h3 className="font-display text-base font-bold text-secondary/80">
          El Modelo Antiguo
        </h3>
        <ul className="mt-6 space-y-4 font-sans text-marron-cafe/80">
          <li className="flex items-start gap-3">
            <FaTimesCircle className="mt-1 h-5 w-5 flex-shrink-0 text-danger/70" />
            <span>Consultas disponibilidad al consultorio y esperas.</span>
          </li>
          <li className="flex items-start gap-3">
            <FaTimesCircle className="mt-1 h-5 w-5 flex-shrink-0 text-danger/70" />
            <span>Ofreces los horarios a tu paciente y esperas de nuevo.</span>
          </li>
          <li className="flex items-start gap-3">
            <FaTimesCircle className="mt-1 h-5 w-5 flex-shrink-0 text-danger/70" />
            <span>
              Tu paciente confirma. Vuelves a contactar al consultorio y...
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaTimesCircle className="mt-1 h-5 w-5 flex-shrink-0 text-danger/70" />
            <span>Disculpa, esa hora ya no está disponible.</span>
          </li>
        </ul>
      </div>
      {/* El Método Espacio Pisama */}
      <div className="w-5/6 mx-auto rounded-2xl border-2 border-success bg-success/5 p-8 shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <h2 className="font-display text-2xl font-bold text-primary">
          El Poder de la Certeza Instantánea
        </h2>
        <h3 className="font-display text-base font-bold text-secondary/80">
          El Modelo de Espacio Pisama
        </h3>
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
const HowItWorksSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
    null
  );

  const openLightbox = (image: StaticImageData) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="bg-content1 py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold text-marron-cafe">
            Tu Consultorio en 3 Simples Pasos
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Paso 1 */}
          <div className="text-center">
            <Image
              src={aplicacionRegistro}
              alt="Captura del registro en la plataforma"
              width={500}
              height={800}
              className="mx-auto w-48 rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => openLightbox(aplicacionRegistro)}
            />
            <h3 className="mt-6 font-display text-2xl font-bold text-marron-cafe">
              1. Registrate en la aplicación
            </h3>
            <p className="mt-2 font-sans text-marron-cafe/90">
              Un proceso rápido y seguro. Sólo necesitas confirmar tu mail y
              estás adentro.
            </p>
          </div>
          {/* Paso 2 */}
          <div className="text-center">
            <Image
              src={aplicacionVisualiza}
              alt="Captura del calendario de la plataforma"
              width={500}
              height={800}
              className="mx-auto w-48 rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => openLightbox(aplicacionVisualiza)}
            />
            <h3 className="mt-6 font-display text-2xl font-bold text-marron-cafe">
              2. Visualiza y Elige
            </h3>
            <p className="mt-2 font-sans text-marron-cafe/90">
              Accede al calendario en tiempo real y elige el consultorio y
              horario que necesites.
            </p>
          </div>
          {/* Paso 3 */}
          <div className="text-center">
            <Image
              src={aplicacionConfirma}
              alt="Captura de la confirmación de reserva"
              width={500}
              height={800}
              className="mx-auto w-48 rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => openLightbox(aplicacionConfirma)}
            />
            <h3 className="mt-6 font-display text-2xl font-bold text-marron-cafe">
              3. Confirma y Asegura
            </h3>
            <p className="mt-2 font-sans text-marron-cafe/90">
              Con un par de clics, la reserva es tuya. Tan sencillo como eso.
            </p>
          </div>
        </div>
      </div>
      <LightboxModal
        isOpen={lightboxOpen}
        image={selectedImage}
        onClose={closeLightbox}
      />
    </section>
  );
};

// --- SECCIÓN 4: BENEFICIOS DETALLADOS ---
const BenefitsSection = () => {
  const benefits = [
    {
      icon: <MdOutlineEventAvailable size={32} color="#ef9d88" />,
      title: "Disponibilidad 24/7",
      description:
        "Consulta la agenda y reserva a medianoche o el fin de semana. La plataforma trabaja para ti.",
    },
    {
      icon: <FaPeopleArrows size={32} color="#ef9d88" />,
      title: "Cero Intermediarios",
      description:
        "Tu reserva es directa e inmediata. Se acabaron las idas y vueltas por mensaje.",
    },
    {
      icon: <FaRegRectangleList size={32} color="#ef9d88" />,
      title: "Tu Historial y Facturación a un Clic",
      description:
        "Todas tus reservas, pasadas y futuras, registradas en tu perfil para un control total.",
    },
    {
      icon: <CgUnavailable size={32} color="#ef9d88" />,
      title: "Gestión de Imprevistos",
      description:
        "Nuestra política de cancelación flexible está integrada para que puedas reprogramar fácilmente.",
    },
  ];

  return (
    <section className="py-20 bg-content2">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold text-marron-cafe">
            Una Plataforma Creada para tu Libertad Profesional
          </h2>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2">
          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              shadow="md"
              radius="lg"
              className="bg-content1 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <CardHeader className="flex flex-col items-center text-center pt-6 pb-4">
                {/* Icono */}
                <div className="mb-3 flex h-18 w-18 items-center justify-center rounded-full bg-secondary/20">
                  {benefit.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-primary">
                  {benefit.title}
                </h3>
              </CardHeader>
              <CardBody>
                <p className="font-sans text-primary/80 pb-4 px-4">
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
