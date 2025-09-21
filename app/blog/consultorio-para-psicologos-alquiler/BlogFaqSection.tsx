"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";

// --- DATOS para la sección de FAQ ---
const faqData = [
  {
    key: "1",
    question: "¿Qué tener en cuenta al alquilar un consultorio de psicología?",
    answer:
      "Prioriza la privacidad acústica, un ambiente profesional y limpio, y un sistema de reservas que te dé autonomía. El objetivo es encontrar un lugar que te permita centrarte exclusivamente en tu paciente.",
  },
  {
    key: "2",
    question: "¿Cómo puedo asegurar la privacidad en un consultorio alquilado?",
    answer:
      "Pregunta explícitamente sobre la aislación sonora entre consultorios y con la sala de espera. Un buen indicador es que el lugar utilice música ambiental o algún otro sistema para enmascarar sonidos, como hacemos en Espacio Pisama.",
  },
  {
    key: "3",
    question: "¿Es mejor un consultorio por hora o uno fijo?",
    answer:
      "Para profesionales que empiezan o que tienen una agenda variable, el alquiler por horas es ideal. Ofrece flexibilidad y un costo mucho menor, eliminando la carga de los gastos fijos de un consultorio propio. Te permite crecer a tu propio ritmo.",
  },
];

export default function FaqSection() {
  return (
    <div className="mt-16 border-t-2 border-content2 pt-12">
      <h2 className="font-display text-3xl font-bold text-primary-500">
        Preguntas Frecuentes
      </h2>
      <Accordion
        selectionMode="multiple"
        variant="splitted"
        className="mt-8"
        classNames={{
          item: "bg-background !shadow-md",
          trigger: "p-6 font-display font-bold text-primary-500",
          content: "p-6 pt-0 font-sans text-foreground/90",
        }}
      >
        {faqData.map((item) => (
          <AccordionItem key={item.key} title={item.question}>
            {item.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
