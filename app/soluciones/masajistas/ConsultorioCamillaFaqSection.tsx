"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { Divider } from "@heroui/divider";

import FaqSchema from "@/components/seo/FaqSchema";

const faqData = [
  {
    key: "1",
    question: "¿Tengo que pagar extra por el uso de la camilla profesional?",
    answer:
      "No. El uso de la camilla es completamente gratuito y está incluido en el valor de la hora del consultorio. Solo debes marcar la opción 'Requiere Camilla' al momento de hacer tu reserva online, y el sistema garantizará que esté disponible para ti.",
  },
  {
    key: "2",
    question: "¿Cómo funciona el sistema de reserva de la camilla?",
    answer:
      "Nuestro sistema de reserva online verifica la disponibilidad de la camilla en tiempo real. Cuando eliges tu horario y marcas 'Requiere Camilla', el sistema automáticamente chequea si está libre. Si está disponible, confirma tu reserva al instante. Si otro colega la está usando en ese horario, te avisa antes de confirmar. Así garantizamos que nunca llegues al consultorio y descubras que la camilla no está disponible.",
  },
  {
    key: "3",
    question: "¿Cómo traslado la camilla al consultorio?",
    answer:
      "La camilla es ligera, plegable y fácil de transportar. Se encuentra guardada en nuestra Sala de Descanso, que está a pocos pasos de los consultorios. Al llegar, simplemente la llevas al consultorio que reservaste, la despliegas y trabajas con normalidad. Al terminar tu sesión, la pliegas y la devuelves a la Sala de Descanso. Es un proceso simple que toma menos de un minuto.",
  },
  {
    key: "4",
    question: "¿Qué tipo de camilla tienen disponible?",
    answer:
      "Contamos con una camilla profesional robusta y cómoda, diseñada para soportar tratamientos de fisioterapia, masajes terapéuticos, osteopatía, quiropraxia y otras terapias manuales. Es plegable para facilitar su transporte entre la sala de descanso y los consultorios, pero ofrece la estabilidad y comodidad que tus pacientes necesitan.",
  },
  {
    key: "5",
    question: "¿Qué consultorio debo elegir si trabajo con camilla?",
    answer:
      "Recomendamos encarecidamente los Consultorios Premium ($250/hora) para trabajar con camilla. Estos espacios son amplios y te permiten circular alrededor de la camilla con total ergonomía, realizar maniobras terapéuticas, estiramientos y evaluaciones sin limitaciones de espacio. Si bien tenemos un Consultorio Estándar más económico ($200/hora), por sus dimensiones reducidas no es recomendable para terapias con camilla.",
  },
  {
    key: "6",
    question: "¿Qué profesionales pueden usar el consultorio con camilla?",
    answer:
      "Nuestro consultorio con camilla está equipado para fisioterapeutas, kinesiólogos, masajistas terapéuticos y deportivos, osteópatas, quiroprácticos, acupuntores, médicos que realizan examen físico, nutricionistas que requieren evaluación corporal, y cualquier profesional de la salud que necesite una camilla para su práctica. Si tu trabajo requiere espacio para moverte y una camilla disponible, este es tu lugar.",
  },
];

export default function ConsultorioCamillaFaqSection() {
  return (
    <div className="border-t-1 border-primary pt-2">
      <h2 id="preguntas-frecuentes" className="text-3xl font-bold pb-8 text-primary-500">
        Preguntas Frecuentes sobre Alquiler de Consultorio con Camilla
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
