"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";

// DATOS para la sección de FAQ
const faqData = [
  {
    question: "¿Puedo visitar los consultorios antes de decidirme a alquilar?",
    answer:
      "¡Por supuesto! Creemos que es fundamental que conozcas el espacio. Contáctanos por WhatsApp o email y coordinamos una visita sin ningún compromiso.",
  },
  {
    question: "¿Cómo funciona exactamente el acceso con código digital?",
    answer:
      "Una vez confirmada tu reserva, recibirás un código único en tu email. Simplemente ingrésalo en el portero digital de la entrada para acceder al espacio. Es un sistema seguro, personal y te da total autonomía.",
  },
  {
    question: "¿Hay una sala de espera disponible para mis pacientes?",
    answer:
      "Sí, contamos con una sala de espera cómoda y acogedora, diseñada para que tus pacientes se sientan a gusto desde el momento en que llegan.",
  },
  {
    question: "¿Los consultorios están equipados para masajes (camilla)?",
    answer:
      "Nuestros consultorios premium son lo suficientemente amplios para que puedas llevar tu propia camilla portátil. Si tienes requerimientos específicos, no dudes en consultarnos para que podamos asesorarte.",
  },
];

export default function ContactFaqSection() {
  return (
    <section className="bg-gris-calido/40 py-20 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4 lg:px-8">
        <h2 className="mb-12 text-center font-display text-4xl font-bold text-marron-cafe">
          Antes de escribir, quizás encuentres tu respuesta aquí
        </h2>
        <Accordion variant="splitted" className="space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index.toString()}
              aria-label={item.question}
              title={item.question}
              classNames={{
                base: "bg-content2 shadow-xl",
                title: "text-primary",
                trigger: "font-bold text-primary",
                content: "text-primary/80 text-sm",
              }}
            >
              {item.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
