"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { Divider } from "@heroui/divider";

import FaqSchema from "@/components/seo/FaqSchema";

// --- DATOS para la sección de FAQ ---
const faqData = [
  {
    key: "1",
    question:
      "¿Qué equipamiento necesito para comenzar a trabajar como nutricionista en un consultorio?",
    answer:
      "Lo ideal es contar con una balanza profesional con adipómetro, plicómetro, cinta métrica y un espacio cómodo para la consulta. En Espacio PISAMA ponemos a disposición una balanza profesional sin costo adicional, lo que te permite comenzar con mínima inversión inicial y crecer gradualmente.",
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
      "¿Puedo traer mi propio equipamiento o debo usar el del consultorio?",
    answer:
      "Podés traer tu propio equipamiento si preferís (balanza, plicómetro, material educativo). También tenés disponible una balanza profesional sin costo adicional. El consultorio te ofrece flexibilidad total para personalizar tu práctica según tus necesidades y metodología de trabajo.",
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
      "¿Realmente vale la pena invertir en un consultorio profesional cuando recién empiezo?",
    answer:
      "La respuesta es sí, pero con flexibilidad. Atender en espacios improvisados (tu casa, cafeterías) puede afectar tu imagen profesional y la confianza del paciente. Con el modelo de alquiler por horas, accedés a un consultorio profesional sin inversión prohibitiva. Esto te permite proyectar seriedad desde el inicio, lo cual es fundamental para construir tu reputación y captar pacientes.",
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
