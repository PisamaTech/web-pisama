"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { Divider } from "@heroui/divider";

// DATOS para la sección de FAQ
const faqData = [
  {
    question: "¿Cómo es el proceso para empezar a alquilar en Espacio Pisama?",
    answer: (
      <p>
        ¡Es muy simple! El primer paso es crear tu cuenta en nuestra plataforma
        de reservas online. El registro es gratuito, sin costos de membresía ni
        compromisos. Una vez que tu perfil esté activo, tendrás acceso inmediato
        a la agenda para ver la disponibilidad en tiempo real y hacer tu primera
        reserva.
      </p>
    ),
  },
  {
    question: "¿Debo pagar por adelantado mi primera reserva?",
    answer: (
      <p>
        Sí. Para gestionar de forma segura y ordenada el ingreso de nuevos
        profesionales, las primeras horas se abonan antes de utilizar el
        consultorio. Una vez establecida una relación de confianza, pasamos a
        una cómoda modalidad de pago semanal.
      </p>
    ),
  },
  {
    question: "¿Existe un mínimo de horas a reservar por semana?",
    answer: (
      <p>
        No, en Espacio Pisama no existe ningún mínimo de horas a reservar por
        semana. Nuestra filosofía se basa en la flexibilidad total. Entendemos
        que la agenda de un profesional independiente varía; hay semanas con más
        pacientes y otras más tranquilas. Por eso, a diferencia de otros
        sistemas que pueden exigirte comprar paquetes o cumplir con un mínimo de
        horas, con nosotros tienes la libertad absoluta de reservar desde una
        sola hora esporádica hasta todas las que necesites.
      </p>
    ),
  },
  {
    question: "¿Puedo visitar los consultorios antes de decidirme a alquilar?",
    answer: (
      <p>
        ¡Por supuesto! En la web incluimos videos de todos los espacios para que
        conozcas de primera mano todos el espacio. Intentamos ser lo más
        transparentes posible para que tengas una imagen real de nuestros
        consultorios.Pero si te quedaste con dudas y queres venir a conocerlo en
        persona, escríbenos por WhatsApp o a nuestro email de contacto y con
        gusto coordinaremos una visita sin ningún tipo de compromiso.
      </p>
    ),
  },
  {
    question: "¿Cómo funciona exactamente el acceso con código digital?",
    answer: (
      <p>
        Es la clave de tu autonomía. Una vez que tu primera reserva está
        confirmada y abonada, te enviaremos un código numérico único a tu
        whatsapp. Al llegar al espacio, simplemente ingresas ese código en el
        portero digital de la entrada y la puerta se abrirá. Tu código es
        personal y solo funciona durante los horarios que has reservado.
      </p>
    ),
  },
  {
    question:
      "¿Qué experiencia tienen mis pacientes al llegar? ¿Hay recepción?",
    answer: (
      <p>
        No contamos con recepcionista, pero hemos diseñado una experiencia de
        llegada muy acogedora. En la sala de espera hay un portero eléctrico
        desde el cual le abres la puerta a los pacientes, cuando llegan. Tus
        pacientes ingresan a una sala de espera serena, con música ambiental y
        asientos cómodos, donde pueden aguardar tranquilamente hasta que tú los
        recibas.
      </p>
    ),
  },
  {
    question:
      "Soy masajista/fisioterapeuta, ¿cómo funciona el uso de la camilla?",
    answer: (
      <>
        <p>
          ¡Pensamos en ti! Ponemos a tu disposición una camilla profesional sin
          costo adicional. Se encuentra guardada en un cuarto específico dentro
          de la sala de descanso. Simplemente la tomas, la llevas al consultorio
          que reservaste (nuestros espacios Premium son ideales por su amplitud)
          y al finalizar la devuelves a su lugar.{" "}
        </p>
        <p>
          Si quieres puedes traer tu propia camilla, sin problema alguno.
          Incluso tenemos una habitación para dejarla en el espacio guardada si
          quieres.
        </p>
      </>
    ),
  },
  {
    question:
      "¿Cómo se maneja la disponibilidad de la camilla en la aplicación de reservas?",
    answer:
      'La camilla es un recurso compartido y su disponibilidad está limitada a un profesional por hora. Al momento de crear una reserva, encontrarás una opción para indicar si necesitarás utilizar la camilla. Si seleccionas "Sí", el sistema verificará que la camilla no esté en uso por otro profesional durante ese horario, en un consultorio diferente. Si alguien más la está usando, no podrás completar la reserva para ese horario y deberás elegir otro. Actualmente, el uso de la camilla no tiene un costo adicional.',
  },
  {
    question: "¿Puede agendar una hora de 13:30 a 14:30, por ejemplo?",
    answer:
      "El sistema de reservas está configurado para agendar en bloques de horas completas (ej. 13:00 a 14:00, 17:00 a 18:00). En caso de necesitar una hora fraccionada, como por ejemplo de  13:30 a 14:30, deberás reservar y abonar las dos horas completas (de 13hs a 15hs). En la aplicación no es posible iniciar una reserva en una fracción de hora como las 16:30. Si necesitas un horario puntual y especial, contacta directamente con el administrador del espacio para ver si es posible.",
  },
  {
    question:
      "Mi paciente canceló a último momento, ¿pierdo el dinero de la reserva?",
    answer: (
      <p>
        Entendemos que los imprevistos suceden. Si la cancelación es con menos
        de 24 horas, la reserva se factura, pero{" "}
        <strong>no pierdes la inversión</strong>. Esa hora se convierte en un
        &quot;crédito&quot; que puedes reagendar sin costo alguno dentro de los
        siguientes 6 días, protegiendo así tu economía.
      </p>
    ),
  },
  {
    question:
      "¿Qué diferencia real hay entre un consultorio Estándar y uno Premium?",
    answer: (
      <>
        <p>
          <strong>El Consultorio Estándar</strong> es la solución más eficiente:
          un espacio íntimo y perfectamente equipado, ideal para terapia
          individual o coaching uno a uno.{" "}
        </p>
        <p>
          <strong>Los Consultorios Premium</strong> ofrecen un extra de amplitud
          y confort, con sillones más amplios y escritorio, lo que los hace
          perfectos para terapia con niños, de pareja, familiar o para
          profesionales que desean proyectar una imagen de mayor distinción.
        </p>
      </>
    ),
  },
  {
    question:
      "¿Hay un lugar para que los profesionales podamos descansar o prepararnos?",
    answer: (
      <p>
        Claro que sí. Hemos diseñado una{" "}
        <strong>sala de descanso de uso exclusivo para profesionales</strong>.
        Es un espacio privado y funcional donde puedes tomar un café, calentar
        tu almuerzo en la kitchenette (heladera y microondas), revisar tus notas
        en la mesa de trabajo o simplemente relajarte en el sofá entre sesiones.
      </p>
    ),
  },
  {
    question:
      "¿Qué pasa si el profesional anterior se retrasa y ocupa parte de mi hora?",
    answer: (
      <p>
        Esta es una de nuestras prioridades. Fomentamos una comunidad de colegas
        que valora el respeto por el tiempo de los demás. La cultura de Espacio
        Pisama se basa en la puntualidad. Es una situación muy infrecuente, pero
        si ocurriera, te pedimos que nos lo notifiques de inmediato para
        gestionarlo.
      </p>
    ),
  },
  {
    question: "¿Cómo funciona el sistema de descuentos automáticos?",
    answer: (
      <p>
        Nuestro sistema premia tu fidelidad sin necesidad de cuponeras. Suma
        todas las horas que reservas en una semana (de lunes a domingo) y aplica
        un descuento a todas ellas si alcanzas los 4, 8 o 12 horas. Puedes ver
        el detalle completo en nuestra página de
        <a href="/precios">&quot;Precios&quot;</a>.
      </p>
    ),
  },
  {
    question: "¿Hay algún tipo de contrato o compromiso de permanencia?",
    answer: (
      <p>
        No, en absoluto. Creemos en la flexibilidad total. No existen contratos
        de permanencia ni te exigimos un mínimo de horas al mes. Usas el espacio
        a tu ritmo y según tus necesidades.
      </p>
    ),
  },
  {
    question: "¿En qué horarios puedo realizar las reservas?",
    answer: (
      <p>
        Nuestra plataforma de reservas online está disponible para ti las 24
        horas del día, los 7 días de la semana. Puedes revisar la disponibilidad
        y agendar tu espacio cuando te sea más conveniente, ya sea de madrugada
        o durante el fin de semana.
      </p>
    ),
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
                title: "text-primary text-lg font-semibold",
                trigger: "font-bold text-primary",
                content: "text-primary/90 text-base/6 p-4 mb-3",
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
