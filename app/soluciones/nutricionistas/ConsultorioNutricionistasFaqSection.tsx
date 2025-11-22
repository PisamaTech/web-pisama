"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { Divider } from "@heroui/divider";

import FaqSchema from "@/components/seo/FaqSchema";

// --- DATOS para la sección de FAQ ---
const faqData = [
  {
    key: "1",
    question:
      "¿Qué necesito para comenzar a trabajar como nutricionista en Espacio PISAMA?",
    answer:
      "El consultorio ya viene completamente equipado con escritorio profesional, sillas cómodas, iluminación adecuada y climatización. Solo necesitás traer tu equipamiento nutricional personal (balanza, plicómetro, cinta métrica, material educativo) y podés comenzar a trabajar de inmediato. El espacio está listo para que te enfoques en tus pacientes desde el primer día.",
  },
  {
    key: "2",
    question:
      "¿Es necesario tener un consultorio fijo mensual o puedo alquilar por horas?",
    answer:
      "Para nutricionistas que están comenzando o tienen una agenda variable, el alquiler por horas es la opción más inteligente. Te permite pagar solo por el tiempo que usás, sin costos fijos mensuales. A medida que crece tu cartera de pacientes, nuestro sistema de descuentos progresivos hace que el costo por hora disminuya, adaptándose a tu crecimiento.",
  },
  {
    key: "3",
    question:
      "¿Cómo garantizar la privacidad cuando hablo con mis pacientes sobre temas sensibles como el peso?",
    answer:
      "La privacidad acústica es fundamental en consultas nutricionales. En Espacio PISAMA cada consultorio está profesionalmente aislado y la sala de espera cuenta con música ambiental. Esto garantiza confidencialidad absoluta para que tus pacientes puedan hablar libremente sobre sus desafíos con la alimentación, peso e imagen corporal.",
  },
  {
    key: "4",
    question:
      "¿Qué características debe tener un buen consultorio nutricional?",
    answer:
      "Un consultorio nutricional debe transmitir profesionalismo y bienestar. Esto incluye: ambiente luminoso y cálido (no clínico), privacidad acústica total, espacio para la balanza y toma de medidas, mobiliario cómodo, climatización adecuada, y una estética que inspire cambio positivo sin generar ansiedad. El espacio debe ser acogedor, no intimidante.",
  },
  {
    key: "5",
    question:
      "¿Puedo personalizar el consultorio con mis materiales y equipamiento?",
    answer:
      "Absolutamente. El consultorio está equipado con los elementos básicos (mobiliario, climatización, iluminación), pero tenés total libertad para traer tu equipamiento nutricional (balanza, plicómetro, material educativo, afiches) y personalizar el espacio según tu metodología de trabajo. Muchos profesionales traen sus propios materiales didácticos para enriquecer las consultas.",
  },
  {
    key: "6",
    question:
      "¿Cómo afecta la ubicación del consultorio a la adherencia de mis pacientes?",
    answer:
      "La adherencia en nutrición es clave para lograr resultados. Una ubicación de difícil acceso o sin estacionamiento puede hacer que los pacientes abandonen el tratamiento. Espacio PISAMA está en Parque Rodó, zona céntrica con excelente conexión de ómnibus y estacionamiento no tarifado. Eliminamos barreras logísticas que podrían afectar el compromiso de tus pacientes.",
  },
  {
    key: "7",
    question:
      "¿Vale la pena alquilar un consultorio profesional cuando recién empiezo mi práctica nutricional?",
    answer:
      "La respuesta es sí, absolutamente. Atender en espacios improvisados (tu casa, cafeterías) puede afectar seriamente tu imagen profesional y la confianza del paciente. Los temas que se tratan en nutrición (peso, imagen corporal, hábitos alimentarios) requieren un ambiente privado y profesional. Con el modelo de alquiler por horas de Espacio PISAMA, accedés a un consultorio de primer nivel sin inversión inicial prohibitiva, pagando solo por las horas que usás. Esto te permite proyectar profesionalismo desde el inicio.",
  },
  {
    key: "8",
    question:
      "¿Cómo manejan la limpieza y el mantenimiento del consultorio?",
    answer:
      "La limpieza y el mantenimiento están garantizados. Cada consultorio está impecable antes de cada uso, con todos los detalles cuidados (iluminación, temperatura, orden). No tenés que preocuparte por aspectos logísticos; podés enfocarte únicamente en tu paciente. El espacio trabaja para vos, no al revés.",
  },
];

export default function ConsultorioNutricionistasFaqSection() {
  return (
    <div className="border-t-1 border-primary pt-2">
      <h2
        id="preguntas-frecuentes"
        className="text-3xl font-bold pb-8 text-primary-500"
      >
        Preguntas Frecuentes sobre Alquiler de Consultorios para
        Nutricionistas
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
