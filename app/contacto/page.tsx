import { Metadata } from "next";
import { JSX } from "react";

import ContactFaqSection from "@/components/contacto/ContactFaqSection";
import ContactHeaderSection from "@/components/contacto/ContactHeaderSection";
import ContactInfoSection from "@/components/contacto/ContactInfoSection";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contacto y Ubicación en Parque Rodó | Espacio Pisama",
  description:
    "Contáctanos para visitar nuestros consultorios en Parque Rodó, Montevideo. Encuentra nuestra dirección, mapa, email y WhatsApp. ¡Estamos para ayudarte!",
};

export default function ContactoPage(): JSX.Element {
  const breadcrumbItems = [
    {
      name: "Inicio",
      url: siteConfig.url,
    },
    {
      name: "Contacto",
      url: `${siteConfig.url}/contacto`,
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
      <ContactHeaderSection />
      <ContactFaqSection />
      <ContactInfoSection />
    </>
  );
}
