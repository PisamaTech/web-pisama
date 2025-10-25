"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { Divider } from "@heroui/divider";

import FaqSchema from "@/components/seo/FaqSchema";

// --- DATOS para la sección de FAQ ---
const faqData = [
  {
    key: "1",
    question: "¿Qué tener en cuenta al alquilar un consultorio de psicología?",
    answer:
      "Prioriza una ambientación acogedora y profesional, la privacidad acústica, y un sistema de reservas que te dé autonomía. El objetivo es encontrar un lugar que te permita centrarte únicamente en tu paciente.",
  },
  {
    key: "2",
    question: "¿Cómo puedo asegurar la privacidad en un consultorio alquilado?",
    answer:
      "Pregunta explícitamente sobre la aislación sonora entre consultorios y con la sala de espera. Un buen indicador es que el lugar utilice música ambiental o algún otro sistema para enmascarar sonidos.",
  },
  {
    key: "3",
    question: "¿Es mejor un consultorio por hora o uno fijo?",
    answer:
      "Para profesionales que empiezan o que tienen una agenda variable, el alquiler por horas es ideal. Ofrece flexibilidad y un costo mucho menor, eliminando la carga de los gastos fijos de un consultorio propio. Te permite crecer a tu propio ritmo.",
  },
  {
    key: "4",
    question:
      "¿Qué equipamiento mínimo debería tener un buen consultorio de alquiler para psicólogos?",
    answer:
      "Un buen consultorio te permite enfocarte solo en tu paciente. El equipamiento mínimo indispensable incluye: asientos de calidad terapéutica (ni muy rígidos, ni muy blandos), iluminación cálida y adecuada, disponibilidad de detalles esenciales como pañuelos, climatización eficiente y una excelente conexión a internet. Cuando esto está cubierto, el espacio se convierte en una herramienta a favor de tu terapia.",
  },
  {
    key: "5",
    question:
      "¿Realmente se ahorra dinero con el alquiler por horas comparado con un alquiler mensual fijo?",
    answer:
      "Para la gran mayoría de profesionales independientes, sí, el ahorro es inmenso. Un alquiler fijo esconde costos 'invisibles' (gastos comunes, servicios, impuestos, limpieza) y el riesgo de pagar por un espacio que no utilizas durante vacaciones o semanas de pocas consultas. El modelo por horas elimina estos factores: tu costo se adapta 100% a tu flujo de ingresos real, convirtiéndolo en el modelo financieramente más inteligente y seguro.",
  },
  {
    key: "6",
    question:
      "¿Cómo influye la decoración y la iluminación del consultorio en la alianza terapéutica?",
    answer:
      "El consultorio es un participante activo en la sesión. Un diseño minimalista pero cálido, con colores neutros, crea una sensación de orden y seguridad que facilita la apertura del paciente. Del mismo modo, una iluminación cálida e indirecta es acogedora y menos intimidante que una luz fría de oficina. Un espacio bien diseñado se vuelve 'invisible', permitiendo que toda la energía se concentre en el proceso terapéutico, fortaleciendo así la alianza.",
  },
];

export default function ConsultorioPsicologosFaqSection() {
  return (
    <div className="border-t-1 border-primary pt-2">
      <h2 className="text-3xl font-bold pb-8 text-primary-500">
        Preguntas Frecuentes sobre el Alquiler de Oficinas para Terapia
        Psicológica
      </h2>
      <Accordion selectionMode="multiple" variant="splitted" className="mt-8">
        {faqData.map((item) => (
          <AccordionItem
            key={item.key}
            title={item.question}
            classNames={{
              base: "bg-content4 !shadow-lg mb-2 border-1 border-gray-300",
              trigger: "p-6 font-bold text-default-700",
              heading: "mt-0 mb-0",
              title: " text-lg text-default-700",
              content: "p-6 pt-0 font-sans text-default-600 text-base",
            }}
          >
            <Divider className="mb-5 mt-0" />
            {item.answer}
          </AccordionItem>
        ))}
      </Accordion>
      <FaqSchema items={faqData} />
    </div>
  );
}
