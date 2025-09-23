import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import HeroSection from "@/components/homepage/HeroSection";
import FeaturesSection from "@/components/homepage/FeaturesSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import CtaSection from "@/components/homepage/CtaSection";
import PricingTeaser from "@/components/homepage/PricingTeaser";
import GalleryCard from "@/components/homepage/GalleryCard";
import ProfessionalsSection from "@/components/homepage/ProfessionalsSection";
import BookingSystemSection from "@/components/homepage/BookingSystemSection";
import LocationSection from "@/components/homepage/LocationSection";

export const metadata: Metadata = {
  title:
    "Alquiler de Consultorios por Hora en Montevideo | Flexibles y Autónomos | Espacio Pisama",
  description:
    "Encuentra consultorios por hora en Parque Rodó. Gestiona tus reservas 100% online y ahorra con nuestro sistema flexible. ¡Conoce Espacio Pisama!",
  alternates: {
    canonical: "/", // URL canónica para la página de inicio
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProfessionalsSection />
      <GalleryCard />
      <BookingSystemSection />
      {/* <TestimonialsSection /> */}
      <LocationSection />
      <PricingTeaser />
      <CtaSection
        title="¿Listo para reservar tu consultorio?"
        description="Espacios profesionales, cómodos y listos para recibir a tus pacientes. Reserva en minutos y empieza a trabajar en el ambiente que mereces."
        buttonText="Reservar ahora"
        buttonLink="/disponibilidad"
      />
    </>
  );
}
