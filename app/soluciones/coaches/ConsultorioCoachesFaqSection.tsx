"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { Divider } from "@heroui/divider";

import FaqSchema from "@/components/seo/FaqSchema";

// --- DATOS para la sección de FAQ ---
const faqData = [
  {
    key: "1",
    question: "¿Qué tener en cuenta al alquilar un consultorio para coaching?",
    answer:
      "Busca un espacio que proyecte profesionalismo y confidencialidad. Los elementos clave son: privacidad acústica absoluta (fundamental para sesiones profundas), ambiente que facilite la reflexión, flexibilidad en reservas, y ubicación accesible para tus coachees. El espacio debe ser un aliado en el proceso de transformación, no una preocupación logística.",
  },
  {
    key: "2",
    question: "¿Por qué es importante la privacidad acústica en sesiones de coaching?",
    answer:
      "El coaching requiere que el coachee se abra, comparta metas personales, vulnerabilidades y desafíos profesionales. Sin privacidad acústica garantizada, el nivel de apertura se reduce drásticamente. Un espacio con aislación sonora profesional permite conversaciones profundas sin temor a ser escuchado, lo cual es esencial para el éxito del proceso de coaching.",
  },
  {
    key: "3",
    question: "¿Es mejor alquilar un consultorio por hora o mensual para coaching?",
    answer:
      "Para coaches que están comenzando, tienen agendas variables, o atienden menos de 20 horas semanales, el alquiler por hora es significativamente más rentable. Eliminas gastos fijos (alquiler, servicios, limpieza, mantenimiento) y solo pagas por el tiempo que realmente usas. Es la opción más inteligente financieramente, especialmente si tus sesiones no llenan una semana completa.",
  },
  {
    key: "4",
    question: "¿Qué tipo de coaching se puede realizar en Espacio PISAMA?",
    answer:
      "Nuestros consultorios son ideales para coaching ontológico, coaching ejecutivo, life coaching, coaching de equipos (sesiones individuales), y cualquier modalidad de coaching presencial. El espacio está diseñado para facilitar conversaciones reflexivas y procesos de transformación personal y profesional en un ambiente profesional y confidencial.",
  },
  {
    key: "5",
    question: "¿Cómo influye el ambiente del consultorio en las sesiones de coaching?",
    answer:
      "El ambiente es un factor crítico. Un espacio profesional, minimalista y cálido facilita la concentración y la reflexión profunda. La iluminación adecuada, el mobiliario cómodo y la decoración neutra eliminan distracciones y crean un contenedor seguro para el trabajo de coaching. Un ambiente descuidado o desprolijo puede sabotear incluso las mejores intervenciones de coaching.",
  },
  {
    key: "6",
    question: "¿Necesito equipamiento especial para dar sesiones de coaching en el consultorio?",
    answer:
      "No. Espacio PISAMA está completamente equipado con todo lo necesario: asientos cómodos para conversaciones prolongadas, iluminación profesional, climatización, conexión a internet de alta velocidad, y privacidad acústica. Solo necesitas traer tu presencia, tus herramientas de coaching y tu compromiso con el coachee. El espacio ya está listo para trabajar.",
  },
];

export default function ConsultorioCoachesFaqSection() {
  return (
    <div className="border-t-1 border-primary pt-2">
      <h2 id="preguntas-frecuentes" className="text-3xl font-bold pb-8 text-primary-500">
        Preguntas Frecuentes sobre Alquiler de Consultorios para Coaches
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
