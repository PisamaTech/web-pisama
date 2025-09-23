import { Metadata } from "next";
import ContactFaqSection from "@/components/contacto/ContactFaqSection";
import ContactHeaderSection from "@/components/contacto/ContactHeaderSection";
import ContactInfoSection from "@/components/contacto/ContactInfoSection";

export const metadata: Metadata = {
  title: "Contacto y Ubicación en Parque Rodó | Espacio Pisama",
  description:
    "Contáctanos para visitar nuestros consultorios en Parque Rodó, Montevideo. Encuentra nuestra dirección, mapa, email y WhatsApp. ¡Estamos para ayudarte!",
};

export default function ContactoPage(): JSX.Element {
  return (
    <>
      <ContactHeaderSection />
      <ContactFaqSection />
      <ContactInfoSection />
    </>
  );
}
