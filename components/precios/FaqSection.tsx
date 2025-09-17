"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";

const faqData = [
  {
    question: "¿Cómo funciona el pago?",
    answer:
      "A fin de mes, nuestro sistema calcula automáticamente las horas que utilizaste y te envía una factura detallada a tu correo. Puedes pagarla cómodamente por transferencia bancaria.",
  },
  {
    question: "¿Existe un mínimo de horas a reservar?",
    answer:
      "No, no hay mínimo de horas. Creemos en la libertad y la flexibilidad. Usas lo que necesitas, pagas por lo que usas. Así de simple.",
  },
  {
    question: "¿Cuál es la política de cancelación?",
    answer:
      'Nuestra política busca ser justa para todos. Puedes cancelar cualquier reserva sin costo si lo haces con más de 24 horas de antelación. Si cancelas con 24 horas o menos de antelación, la reserva se considera "Penalizada", lo que significa que deberás pagarla y se incluirá en tu facturación. Sin embargo, no pierdes la hora, ya que tienes la opción de reagendarla por un plazo de 6 días a partir de la fecha de la reserva original.',
  },
  {
    question: "",
    answer: "",
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
    question:
      "¿Tengo que hacer las reservas con anticipación o puedo agendar en el mismo día?",
    answer:
      "¡Tienes total flexibilidad! Puedes agendar tus reservas con la anticipación que desees o incluso para el mismo día, siempre y cuando el horario esté disponible en la aplicación. La plataforma te mostrará la disponibilidad en tiempo real. Si un horario aparece como libre, puedes reservarlo inmediatamente.",
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
          {faqData
            .filter((item) => item.question) // Filtramos los elementos que no tienen pregunta
            .map((item) => (
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
