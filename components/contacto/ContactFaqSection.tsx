"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { Divider } from "@heroui/divider";

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
      "Una vez confirmada tu primera reserva, recibirás un código único por whatsapp. Simplemente ingrésalo en el portero digital de la entrada para acceder al espacio. Es un sistema seguro, personal y te da total autonomía.",
  },
  {
    question: "¿Hay una sala de espera disponible para mis pacientes?",
    answer:
      "Sí, contamos con una sala de espera cómoda y acogedora, diseñada para que tus pacientes se sientan a gusto desde el momento en que llegan. Cuenta con música funcional de fondo para hacer la espera más amena y permitir una mejor aislación de los sonidos de los consultrios.",
  },
  {
    question: "¿Los consultorios están equipados para masajes (camilla)?",
    answer:
      "Contamos con una camilla a disposición en el espacio para ser utilizada en cualquiera de nuestros consultorios. La camilla se encuentra en la sala de descanso y debe ser llevada al consultorios al momento de utilizarse y luego vuelta a dejar donde estaba. Esto te da la posibilidad de utilizarla en cualquiera de nuestro consultorios, por lo que si querés usarla no dependes de la disponibilidad de un sólo consultorio.",
  },
  {
    question: "¿Cómo es el uso de la camilla dentro del espacio?",
    answer:
      'La camilla es un recurso compartido y su disponibilidad está limitada a un profesional por hora. Al momento de crear una reserva, encontrarás una opción para indicar si necesitarás utilizar la camilla. Si seleccionas "Sí", el sistema verificará que la camilla no esté en uso por otro profesional durante ese horario, en un consultorio diferente. Si alguien más la está usando, no podrás completar la reserva para ese horario y deberás elegir otro. Actualmente, el uso de la camilla no tiene un costo adicional.',
  },
  {
    question: "¿Puede agendar una hora a las 13:30, por ejemplo?",
    answer:
      "Actualmente, el sistema de reservas está configurado para agendar en bloques de horas completas (ej. 13:00, 14:00, 15:00). En caso de necesitar una hora fraccionada, como por ejemplo de  13:30 a 14:30, deberás reservar y abonar las dos horas completas (de 13hs a 15hs). En la aplicación no es posible iniciar una reserva en una fracción de hora como las 16:30. Si necesitas un horario puntual y especial, contacta directamente con el administrador del espacio.",
  },
];

export default function ContactFaqSection() {
  return (
    <section className="bg-content2 pb-20 pt-10">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="mb-12 text-center font-display text-4xl font-bold text-primary">
          Antes de escribir, quizás encuentres tu respuesta aquí
        </h2>
        <Accordion variant="splitted" className="space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index.toString()}
              aria-label={item.question}
              title={item.question}
              classNames={{
                base: "bg-content1/70 shadow-xl",
                title: "text-primary-400 text-lg font-bold",
                trigger: "font-bold text-primary",
                content: "text-primary/80 text-base/6 pb-6",
              }}
            >
              <Divider className="mb-4" />
              {item.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
