"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { Divider } from "@heroui/divider";

import FaqSchema from "@/components/seo/FaqSchema";

// --- DATOS para la sección de FAQ ---
const faqData = [
  {
    key: "1",
    question: "¿La camilla de ustedes tiene costo extra?",
    answer:
      "No, el uso de nuestra camilla profesional está bonificado dentro del costo de la hora ($250). Solo debes marcar 'Requiere Camilla' al momento de reservar en la plataforma online, y el sistema bloqueará automáticamente el recurso para ti en ese horario.",
  },
  {
    key: "2",
    question:
      "¿Puedo dejar mi propia camilla y mis materiales en el espacio?",
    answer:
      "¡Sí! Entendemos que cargar una camilla portátil es agotador. Puedes dejarla guardada en nuestra Sala de Descanso, junto con otros materiales que necesites (equipos de electroterapia, bandas elásticas, pelotas, insumos). Ten en cuenta que no son lockers individuales con llave, sino una habitación de acceso exclusivo para los profesionales del espacio (sin acceso a pacientes). Es una comunidad basada en la confianza y el respeto.",
  },
  {
    key: "3",
    question: "¿Qué tipo de camilla ofrecen ustedes?",
    answer:
      "Es una camilla estándar profesional, acolchada, resistente y en excelentes condiciones, apta para terapias manuales, masajes terapéuticos y evaluaciones fisioterapéuticas. Si prefieres usar la tuya por una cuestión de costumbre o especificidad técnica (por ejemplo, camilla de osteopatía con diferentes alturas), eres bienvenido a traerla y dejarla guardada aquí.",
  },
  {
    key: "4",
    question:
      "¿Puedo realizar punción seca o usar cremas/aceites en las sesiones?",
    answer:
      "Sí, puedes realizar todas las técnicas propias de tu profesión como fisioterapeuta o kinesiólogo, incluyendo punción seca, uso de cremas, aceites, vendajes, etc. Solo te pedimos que seas extremadamente cuidadoso con la limpieza del espacio al terminar, para que el siguiente colega encuentre el consultorio impecable. Tenemos todos los insumos de limpieza disponibles.",
  },
  {
    key: "5",
    question: "¿Hay ascensor o escaleras?",
    answer:
      "Nuestros consultorios se encuentran en un primer piso y el acceso es únicamente por escalera (no contamos con ascensor). Por favor, considera esto si atiendes a pacientes con dificultades motrices severas que les impidan subir un piso a pie. Para la mayoría de los tratamientos de fisioterapia esto no representa un problema.",
  },
  {
    key: "6",
    question: "¿El ambiente es adecuado para la relajación del paciente?",
    answer:
      "Absolutamente. Nuestros consultorios Premium tienen excelente aislación acústica y contamos con música funcional en las áreas comunes (sala de espera), lo que ayuda a que el paciente se desconecte y se relaje durante la sesión de fisioterapia. El diseño minimalista y la iluminación cálida crean un ambiente profesional pero acogedor.",
  },
  {
    key: "7",
    question: "¿Cómo es la climatización?",
    answer:
      "Sabemos que un paciente desvestido en la camilla puede sentir frío, especialmente en invierno. Todos los consultorios Premium cuentan con Aire Acondicionado (frío/calor) individual para que regules la temperatura exacta que necesita tu terapia. Puedes crear el ambiente térmico ideal para cada sesión.",
  },
  {
    key: "8",
    question:
      "¿Los consultorios son lo suficientemente amplios para moverme alrededor de la camilla?",
    answer:
      "Sí, ese es precisamente el motivo por el cual recomendamos únicamente nuestros 5 Consultorios Premium para fisioterapeutas. Estos espacios tienen metraje generoso que te permite ubicar la camilla y circular 360° alrededor del paciente sin restricciones. El mobiliario es minimalista y el suelo está completamente libre, sin obstáculos que dificulten tu movimiento o la ergonomía de tu trabajo.",
  },
  {
    key: "9",
    question:
      "¿Cómo funciona el sistema de descuentos por cantidad de horas?",
    answer:
      "El sistema de descuentos es automático y se aplica semanalmente según tu volumen de uso. Si reservas 4+ horas por semana, pagas $230/hora en lugar de $250. Con 8+ horas semanales, pagas $210/hora. Y con 12+ horas semanales, pagas solo $190/hora. No necesitas comprometerte a nada: el descuento se calcula automáticamente cada semana según tus reservas reales.",
  },
  {
    key: "10",
    question: "¿Puedo conocer el espacio antes de reservar?",
    answer:
      "¡Por supuesto! Entendemos que es importante ver los consultorios Premium en persona antes de tomar una decisión, especialmente para evaluar el espacio disponible para tu práctica. Te invitamos a agendar una visita sin compromiso a través de nuestra página de contacto. Podés venir a conocer los consultorios, la sala de espera, la sala de descanso y resolver todas tus dudas en persona.",
  },
];

export default function ConsultorioFisioterapeutasFaqSection() {
  return (
    <div className="border-t-1 border-primary pt-2">
      <h2
        id="preguntas-frecuentes"
        className="text-3xl font-bold pb-8 text-primary-500"
      >
        Preguntas Frecuentes: Alquiler de Consultorio para Fisioterapeutas en
        Montevideo
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
