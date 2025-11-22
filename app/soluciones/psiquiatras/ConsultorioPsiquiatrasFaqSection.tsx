"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { Divider } from "@heroui/divider";

import FaqSchema from "@/components/seo/FaqSchema";

// --- DATOS para la sección de FAQ ---
const faqData = [
  {
    key: "1",
    question: "¿El consultorio cuenta con la privacidad necesaria para psiquiatría?",
    answer:
      "Absolutamente. Entendemos que la confidencialidad es crítica en psiquiatría. Nuestros consultorios cuentan con aislación acústica profesional de alto nivel y sistema de enmascaramiento de sonido en la sala de espera, garantizando que lo que se habla en sesión, queda en sesión.",
  },
  {
    key: "2",
    question: "¿Es un ambiente seguro para atender pacientes complejos?",
    answer:
      "Sí. Espacio PISAMA está diseñado pensando en la seguridad y la tranquilidad. Contamos con un sistema de acceso controlado y un entorno cuidado. Además, al ser una comunidad de profesionales de la salud, nunca estás completamente solo en el edificio, lo que brinda una capa extra de seguridad implícita.",
  },
  {
    key: "3",
    question: "¿Puedo recetar y realizar actos médicos en estos consultorios?",
    answer:
      "Sí, los consultorios están habilitados para el ejercicio profesional de la salud. El ambiente es sobrio y profesional, adecuado para la práctica médica psiquiátrica, alejándose de la estética de 'oficina' y acercándose a un entorno clínico cálido.",
  },
  {
    key: "4",
    question: "¿Qué flexibilidad tengo si mis pacientes cancelan a último momento?",
    answer:
      "Nuestro sistema de reservas online te permite gestionar tu agenda con total autonomía. Si bien fomentamos la previsibilidad, entendemos las dinámicas de la clínica. Puedes cancelar o reprogramar reservas según nuestras políticas de cancelación flexibles, minimizando el impacto económico de las inasistencias.",
  },
  {
    key: "5",
    question: "¿El espacio es adecuado para pacientes con movilidad reducida?",
    answer:
      "Es importante tener en cuenta que nuestros consultorios se encuentran en un primer piso por escalera. Lamentablemente, no contamos con ascensor, por lo que el acceso puede ser limitado para pacientes con movilidad reducida o que utilicen silla de ruedas.",
  },
  {
    key: "6",
    question: "¿Cómo funciona el alquiler por hora para psiquiatras?",
    answer:
      "Es simple: te registras, ves la disponibilidad en tiempo real y reservas las horas que necesitas. No hay costos fijos mensuales, ni expensas, ni contratos a largo plazo. Pagas solo por el tiempo que utilizas para atender a tus pacientes, optimizando la rentabilidad de tu práctica privada.",
  },
];

export default function ConsultorioPsiquiatrasFaqSection() {
  return (
    <div className="border-t-1 border-primary pt-2">
      <h2 id="preguntas-frecuentes" className="text-3xl font-bold pb-8 text-primary-500">
        Preguntas Frecuentes sobre Alquiler de Consultorios para Psiquiatras
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
