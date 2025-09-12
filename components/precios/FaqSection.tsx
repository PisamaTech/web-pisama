"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";

const faqData = [
  {
    question: "¿Cómo funciona el pago?",
    answer:
      "A fin de mes, nuestro sistema calcula automáticamente las horas que utilizaste y te envía una factura detallada a tu correo. Puedes pagarla cómodamente por transferencia bancaria.",
  },
  {
    question: "¿Existe un mínimo de horas o un costo de inscripción?",
    answer:
      "No. No hay costos de inscripción, matrículas ni mínimo de horas. Creemos en la libertad y la flexibilidad. Usas lo que necesitas, pagas por lo que usas. Así de simple.",
  },
  {
    question: "¿Cuál es la política de cancelación?",
    answer:
      "Puedes cancelar o modificar tus reservas sin costo alguno hasta 24 horas antes del horario agendado, directamente desde nuestra plataforma web.",
  },
  {
    question: "¿Los precios incluyen impuestos?",
    answer:
      "Sí, todos nuestros precios son finales e incluyen los impuestos correspondientes. Transparencia total, sin sorpresas.",
  },
  {
    question: '¿Cómo se computa la "semana" para los descuentos?',
    answer:
      "La semana se cuenta de lunes a domingo. El sistema suma todas tus horas reservadas dentro de ese período para calcular el descuento correspondiente y lo aplica en tu facturación.",
  },
  {
    question: "¿Necesito comprar un paquete de horas por adelantado?",
    answer:
      "No, nunca. El sistema es flexible. Simplemente reservas las horas que necesitas cada semana. Si llegas a uno de los umbrales de descuento, el beneficio se aplica automáticamente. No hay ningún compromiso previo.",
  },
  {
    question: "Qué métodos de pago aceptan",
    answer: "Aceptamos pagos a través de transferencia bancaria.",
  },
  {
    question: "",
    answer: "",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-content1 py-20 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4 lg:px-8">
        <h2 className="mb-12 text-center font-display text-4xl font-bold text-marron-cafe">
          Dudas resueltas. Transparencia total.
        </h2>
        <Accordion
          variant="splitted"
          className="space-y-4" // Estilo para el contenedor principal del acordeón
        >
          {faqData.map((item) => (
            <AccordionItem
              key={item.question}
              title={item.question}
              classNames={{
                base: "bg-content2/80 !shadow-lg", // La clave 'item' se convierte en 'base' para cada AccordionItem
                trigger: "p-6 font-display font-bold text-marron-cafe",
                indicator: "text-marron-cafe",
                content: "p-6 pt-0 font-sans text-marron-cafe/90",
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
