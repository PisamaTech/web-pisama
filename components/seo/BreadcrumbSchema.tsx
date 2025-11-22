import React from "react";

// TIPADO: Definimos la estructura de los items del breadcrumb
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbSchema({
  items,
}: BreadcrumbSchemaProps): React.JSX.Element {
  // Construimos el objeto JSON-LD siguiendo el estándar de Schema.org para BreadcrumbList
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  // Inyectamos el script en la página.
  // 'dangerouslySetInnerHTML' es el método estándar y seguro para JSON-LD.
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
