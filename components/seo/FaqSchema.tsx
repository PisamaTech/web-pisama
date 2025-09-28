import React from "react";

// TIPADO: Definimos la estructura de los items del FAQ que el componente espera
interface FaqItem {
  question: string;
  answer: string | React.ReactNode; // Aceptamos string o JSX
}

interface FaqSchemaProps {
  items: FaqItem[];
}

export default function FaqSchema({
  items,
}: FaqSchemaProps): React.JSX.Element {
  // Construimos el objeto JSON-LD siguiendo el estándar de Schema.org
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => {
      // Convertimos la respuesta JSX a texto plano si es necesario
      const answerText =
        typeof item.answer === "string"
          ? item.answer
          : "Consulta nuestra web para una respuesta detallada."; // Un texto genérico si la respuesta es compleja (JSX)

      return {
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answerText,
        },
      };
    }),
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
