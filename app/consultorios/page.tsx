import { Metadata } from "next";


import ConsultorioCard from "@/components/consultorios/ConsultorioCards";
import ConsultorioTypes from "@/components/consultorios/ConsultorioTypes";
import CtaSection from "@/components/homepage/CtaSection";
import { consultoriosData } from "@/src/consultoriosData";

import OtrasAreasSection from "./OtrasAreasSection";
import ServiciosIncluidosSection from "./ServiciosIncluidosSection";

export const metadata: Metadata = {
  title: "Consultorios Premium y Estándar en Parque Rodó | Espacio Pisama",
  description:
    "Explora en detalle nuestros consultorios. Diseñados por psicólogos para garantizar confort, privacidad y profesionalismo.",
};

export default function ConsultoriosPage() {
  return (
    <>
      {/* Sección 1: Tipos de Consultorio */}
      <section className="bg-content2 py-20 sm:py-24 ">
        <div className="container mx-auto max-w-5xl px-4 text-center lg:px-8">
          <h1 className="font-display text-5xl font-bold text-marron-cafe">
            Nuestros Espacios: Ambientes que potencian tu práctica profesional
          </h1>
          <p className="mx-auto max-w-3xl mt-6 font-sans text-lg text-marron-cafe/90">
            Descubre las dos experiencias que tenemos disponibles y elige la que
            mejor se adapte a las necesidades de tu práctica profesional.
          </p>
          <div className="mt-12">
            <ConsultorioTypes />
          </div>
        </div>
      </section>

      {/* Sección 2: Galería de Consultorios */}
      <section className="bg-content1 py-20 sm:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-4xl font-bold text-marron-cafe">
              Explora cada Consultorio
            </h2>
            <p className="mt-4 font-sans text-lg text-marron-cafe/90">
              Cada consultorio en <strong>Espacio Pisama</strong> fue diseñado
              conscientemente para ser una extensión de tu profesionalismo.
              Creamos entornos serenos, privados y funcionales donde tanto vos
              como tus pacientes se sentirán cómodos y en completa confianza.
              <br />
              Haz click en las imágenes para recorrer cada consultorio en
              detalle.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:max-w-5xl lg:grid-cols-2">
            {consultoriosData.map((espacio) => (
              <ConsultorioCard key={espacio.id} espacio={espacio} />
            ))}
          </div>
        </div>
      </section>

      {/* Sección 3: Otras Áreas */}
      <section className="bg-content2 py-20 sm:py-24 ">
        <OtrasAreasSection />
      </section>

      {/* Sección 4: Servicios Incluidos */}
      <section className="bg-content1 py-20 sm:py-24">
        <ServiciosIncluidosSection />
      </section>

      {/* Sección 5: Call to Action */}
      <CtaSection
        title="¿Ya sabes cuál es el espacio ideal para vos?"
        description="Gestiona tu agenda con total libertad y ofrece a tus pacientes la experiencia que merecen."
        buttonText="Ver Disponibilidad y Reservar"
        buttonLink="/disponibilidad"
      />
    </>
  );
}
