import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import HeroSection from "@/components/homepage/HeroSection";
import FeaturesSection from "@/components/homepage/FeaturesSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import CtaSection from "@/components/homepage/CtaSection";
import Gallery from "@/components/homepage/Gallery";
import PreciosPage from "./precios/page";
import FaqSection from "@/components/precios/FaqSection";
import PricingTeaser from "@/components/homepage/PricingTeaser";
import GalleryCard from "@/components/homepage/GalleryCard";
import ProfessionalsSection from "@/components/homepage/ProfessionalsSection";
import BookingSystemSection from "@/components/homepage/BookingSystemSection";

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
      <ProfessionalsSection />
      <GalleryCard />
      <BookingSystemSection />
      {/* <TestimonialsSection /> */}
      <PricingTeaser />
      <CtaSection />
    </>
  );
}
