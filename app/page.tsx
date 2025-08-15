import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import HeroSection from "@/components/homepage/HeroSection";
import FeaturesSection from "@/components/homepage/FeaturesSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";

export const metadata: Metadata = {
  title: "Inicio", // Esto se combinará con el template: "Inicio - espacio PISAMA"
  description:
    "Bienvenido a Espacio Pisama. Ofrecemos alquiler de consultorios por hora para profesionales de la salud mental. Encuentra un espacio tranquilo y profesional para tus terapias.",
  alternates: {
    canonical: "/", // URL canónica para la página de inicio
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
    </>
  );
}
