import { Metadata } from "next";

import ConsultorioCard from "@/components/consultorios/ConsultorioCards";
import ConsultorioTypes from "@/components/consultorios/ConsultorioTypes";
import VideoTour from "@/components/consultorios/VideoTour";
import CtaSection from "@/components/homepage/CtaSection";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/config/site";
import { consultoriosData } from "@/src/consultoriosData";

import OtrasAreasSection from "../../components/consultorios/OtrasAreasSection";
import ServiciosIncluidosSection from "../../components/consultorios/ServiciosIncluidosSection";

export const metadata: Metadata = {
  title: "Consultorios Premium y Estándar en Parque Rodó | Espacio Pisama",
  description:
    "Explora en detalle nuestros consultorios en Montevideo. Diseñados por psicólogos para garantizar confort, privacidad y profesionalismo.",
  keywords: [
    "consultorios para psicólogos montevideo",
    "alquiler de consultorios en montevideo",
    "consultorios por hora en montevideo",
    "consultorios por hora Parque Rodó",
    "Montevideo",
    "Parque Rodó",
    "reserva online de consultorios en montevideo",
  ],
  alternates: {
    canonical: "/consultorios",
  },
};

export default function ConsultoriosPage() {
  const breadcrumbItems = [
    {
      name: "Inicio",
      url: siteConfig.url,
    },
    {
      name: "Consultorios",
      url: `${siteConfig.url}/consultorios`,
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
      {/* Sección 1: Tipos de Consultorio */}
      <section className="bg-content2 py-10">
        <div className="container mx-auto max-w-5xl px-4 text-center lg:px-8">
          <h1 className="font-display text-5xl font-bold text-primary">
            Nuestros Espacios: Ambientes que potencian tu práctica profesional
          </h1>
          <p className="mx-auto max-w-3xl mt-6 font-sans text-lg text-primary/90">
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
            <h2 className="font-display text-4xl font-bold text-primary">
              Explora cada Consultorio
            </h2>
            <p className="mt-4 font-sans text-lg text-primary/90">
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

      {/* Sección 4: Video Tour */}
      <section className="bg-content1 py-20 sm:py-24">
        <VideoTour />
      </section>

      {/* Sección 5: Servicios Incluidos */}
      <section className="bg-content2 py-20 sm:py-24">
        <ServiciosIncluidosSection />
      </section>

      {/* Sección 5: Call to Action */}
      <CtaSection
        title="¿Ya sabes cuál es el espacio ideal para vos?"
        description="Gestiona tu agenda con total libertad y ofrece a tus pacientes la experiencia que merecen."
        buttonText="Ver Disponibilidad en Tiempo Real"
        buttonLink="/disponibilidad"
      />
    </>
  );
}
