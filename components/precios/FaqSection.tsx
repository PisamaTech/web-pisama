"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { Divider } from "@heroui/divider";

const faqData = [
  {
    question:
      "¿Debo pagar por adelantado? ¿Cómo es el proceso de pago para nuevos usuarios y para usuarios frecuentes?",
    answer: (
      <div className="space-y-4">
        <p>
          Nuestro sistema de pago está diseñado para construir una relación de
          confianza mutua y se adapta a tu frecuencia de uso. El proceso
          funciona en las siguientes etapas:
        </p>

        <ol>
          <li>
            <p>
              <strong>Para Nuevos Usuarios (Primeras Reservas):</strong>
            </p>
            <p>
              Para confirmar tus primeras horas en Espacio Pisama, te
              solicitaremos el pago por adelantado, antes de utilizar el
              consultorio. Esto nos permite gestionar de forma segura y ordenada
              el ingreso de nuevos profesionales y garantizar tu espacio.
            </p>
          </li>

          <li>
            <p>
              <strong>Para Usuarios Regulares (Pago Semanal):</strong>
            </p>
            <p>
              Una vez que comienzas a utilizar el espacio con regularidad y se
              establece una relación de confianza, pasamos a la cómoda modalidad
              de pago semanal. Al final de cada semana, nuestro sistema calcula
              las horas que utilizaste, aplica automáticamente los descuentos
              que te correspondan y te enviamos el resumen para que puedas
              abonar.
            </p>
          </li>

          <li>
            <p>
              <strong>Para Usuarios de Alto Volumen (Pago Mensual):</strong>
            </p>
            <p>
              Para facilitar aún más la gestión administrativa a nuestros
              profesionales más asiduos, ofrecemos la posibilidad de consolidar
              todos los pagos en una única facturación mensual. Esta es una
              ventaja que coordinamos de forma personalizada para adaptarnos a
              un alto ritmo de trabajo.
            </p>
          </li>
        </ol>

        <p>
          Nuestro objetivo es simple: crear una relación profesional, flexible y
          a largo plazo. Este sistema escalonado nos permite hacerlo, asegurando
          un buen funcionamiento para toda nuestra comunidad de profesionales.
        </p>
      </div>
    ),
  },
  {
    question: "¿Existe un mínimo de horas a reservar?",
    answer: (
      <p>
        No, no hay mínimo de horas.{" "}
        <strong>Creemos en la libertad y la flexibilidad</strong>. Usas lo que
        necesitas, pagas por lo que usas. Así de simple.
      </p>
    ),
  },
  {
    question: "¿Cuál es la política de cancelación?",
    answer: (
      <div className="space-y-2">
        <p>
          Nuestra política busca ser justa para todos. Puedes cancelar cualquier
          reserva sin costo si lo haces con más de{" "}
          <strong>24 horas de antelación</strong>.
        </p>
        <p>
          Si cancelas con 24 horas o menos de antelación, la reserva se
          considera <strong>&quot;Penalizada&quot;</strong>, lo que significa
          que deberás pagarla y se incluirá en tu facturación.
        </p>
        <p>
          Sin embargo, no pierdes la hora, ya que tienes la opción de
          reagendarla por un plazo de <strong>6 días</strong>, a partir de la
          fecha de la reserva original.
        </p>
        <p>Todo esto lo gestionas directamente desde nuestra aplicación web.</p>
      </div>
    ),
  },
  {
    question:
      '¿Qué ventaja real tiene este sistema frente a las "cuponeras" que ofrecen otros lugares?',
    answer: (
      <p>
        La ventaja principal es la flexibilidad y el riesgo cero para ti. Con
        las cuponeras, te ves obligado a pagar una gran cantidad de horas por
        adelantado, corriendo el riesgo de que se venzan si no las usas. Con
        nuestro sistema, solo pagas por lo que consumes. Si una semana trabajas
        mucho, ahorras mucho. Si la siguiente semana trabajas menos, simplemente
        pagas por esas horas, sin haber malgastado dinero en un paquete que no
        aprovechaste.
      </p>
    ),
  },
  {
    question:
      "¿Cómo se calcula exactamente el descuento semanal? ¿Tengo que hacer algo para activarlo?",
    answer: (
      <p>
        El descuento es 100% automático y no tienes que hacer nada. Nuestro
        sistema suma todas las horas que has reservado dentro de la misma semana
        (de lunes a domingo). Si el total de horas alcanza uno de los niveles
        (4+, 8+ o 12+ horas), el descuento correspondiente se aplica a todas y
        cada una de las horas de esa semana en tu facturación. ¡Así de simple!
      </p>
    ),
  },
  {
    question:
      "¿Si en una misma semana alquilo horas en un consultorio Estándar y en uno Premium, ¿el descuento aplica igual?",
    answer: (
      <p>
        ¡Sí, por supuesto! El sistema suma el total de horas reservadas, sin
        importar el tipo de consultorio. Por ejemplo, si reservaste 5 horas en
        un consultorio Estándar y 3 en uno Premium, suman un total de 8 horas.
        Por lo tanto, se te aplicará el descuento de segundo nivel ($40 de
        ahorro por hora) sobre la tarifa correspondiente de cada una de esas 8
        horas.
      </p>
    ),
  },
  {
    question: "¿Necesito comprar un paquete de horas por adelantado?",
    answer: (
      <p>
        No, nunca. El sistema es flexible. Simplemente reservas las horas que
        necesitas cada semana. Si llegas a uno de los umbrales de descuento, el
        beneficio se aplica automáticamente.{" "}
        <strong>No hay ningún compromiso previo.</strong>
      </p>
    ),
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: <p>Aceptamos pagos a través de transferencia bancaria.</p>,
  },
  {
    question:
      "¿Tengo que hacer las reservas con anticipación o puedo agendar en el mismo día?",
    answer: (
      <p>
        ¡Tienes total flexibilidad! Puedes agendar tus reservas con la
        anticipación que desees o incluso para el mismo día, siempre y cuando el
        horario esté disponible en la aplicación. La plataforma te mostrará la
        disponibilidad en tiempo real. Si un horario aparece como libre, puedes
        reservarlo inmediatamente.
      </p>
    ),
  },
  {
    question:
      "¿Hay algún costo de inscripción, membresía o algún otro cargo oculto?",
    answer: (
      <p>
        No, en absoluto. La transparencia es uno de nuestros pilares. El
        registro en nuestra plataforma es totalmente gratuito y no existen
        costos de mantenimiento ni membresías. El precio por hora que ves es
        final e incluye todos los servicios: Wi-Fi, limpieza, café/agua, etc.
        Sin sorpresas.
      </p>
    ),
  },
  {
    question:
      "¿Qué sucede con mi descuento si tengo que cancelar algunas horas durante la semana?",
    answer: (
      <p>
        El descuento se calcula sobre las horas efectivamente realizadas y
        facturadas. Si cancelas una reserva siguiendo nuestra política de
        cancelación flexible (con más de 24 hs de antelación), esa hora
        simplemente no se contabiliza en tu total semanal. Si por esa
        cancelación tu total de horas baja de un nivel de descuento a otro, tu
        facturación final reflejará el descuento correspondiente a las horas que
        sí utilizaste.
      </p>
    ),
  },
];

export default function FaqSection() {
  return (
    <section className="bg-content1 py-20 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4 lg:px-8">
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
                  base: "bg-content2 !shadow-lg border-1 border-gray-300",
                  trigger: "p-6 font-display font-bold text-primary",
                  title: "text-primary text-lg font-semibold",
                  content: "p-4 mb-3 pt-0 text-primary/90",
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
