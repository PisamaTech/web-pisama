// src/components/sistema-de-reservas/HowItWorksSection.tsx
"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";

import LightboxModal from "@/components/LightboxModal";
import aplicacionRegistro from "@/public/images/aplicacion-registro.webp";
import aplicacionVisualiza from "@/public/images/aplicacion-visualiza.webp";
import aplicacionConfirma from "@/public/images/aplicacion-confirma.webp";

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

export default HowItWorksSection;
