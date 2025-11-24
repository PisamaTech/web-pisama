import React from "react";

// TIPADO: Definimos la estructura del servicio
interface ServiceOffer {
  name: string;
  description: string;
  price: string;
  priceCurrency: string;
}

interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceType: string;
  url: string;
  image?: string | string[];
  areaServed?: string;
  offers?: ServiceOffer[];
  availableFeatures?: string[];
}

/**
 * Componente para inyectar Schema.org Service markup
 * Más apropiado que Article para landing pages de servicios comerciales
 */
export default function ServiceSchema({
  serviceName,
  serviceDescription,
  serviceType,
  url,
  image,
  areaServed = "Montevideo, Uruguay",
  offers = [],
  availableFeatures = [],
}: ServiceSchemaProps): React.JSX.Element {
  // Construimos el objeto JSON-LD siguiendo el estándar de Schema.org para Service
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceType,
    name: serviceName,
    description: serviceDescription,
    url: url,
    provider: {
      "@type": "LocalBusiness",
      name: "Espacio PISAMA",
      url: "https://www.pisama.uy",
      telephone: "+598-95-961-360",
      email: "info@pisama.uy",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Juan Paullier 1192",
        addressLocality: "Montevideo",
        addressRegion: "Montevideo",
        postalCode: "11200",
        addressCountry: "UY",
      },
    },
    areaServed: {
      "@type": "City",
      name: areaServed,
    },
  };

  // Agregar imagen si existe
  if (image) {
    jsonLd.image = image;
  }

  // Agregar características disponibles
  if (availableFeatures.length > 0) {
    jsonLd.hasOfferCatalog = {
      "@type": "OfferCatalog",
      name: `Características de ${serviceName}`,
      itemListElement: availableFeatures.map((feature) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature,
        },
      })),
    };
  }

  // Agregar ofertas de precios si existen
  if (offers.length > 0) {
    jsonLd.offers = offers.map((offer) => ({
      "@type": "Offer",
      name: offer.name,
      description: offer.description,
      price: offer.price,
      priceCurrency: offer.priceCurrency,
      availability: "https://schema.org/InStock",
    }));
  }

  // Inyectamos el script en la página
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
