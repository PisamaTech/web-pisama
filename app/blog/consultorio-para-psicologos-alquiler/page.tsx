// src/app/blog/consultorio-para-psicologos-alquiler/page.tsx
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@heroui/button";
import { Accordion, AccordionItem } from "@heroui/accordion";
import ConsultorioPsicologosFaqSection from "@/components/precios/ConsultorioPsicologosFaqSection";

// --- SEO: Metadatos de la Página ---
export const metadata: Metadata = {
  title:
    "Alquiler de Consultorios para Psicólogos: La Guía Definitiva | Espacio Pisama",
  description:
    "Una guía completa para elegir el espacio correcto para tu práctica, escrita por un psicólogo. Analizamos privacidad, ambiente, logística y más.",
};

// --- DATOS para la sección de FAQ ---
const faqData = [
  {
    key: "1",
    question: "¿Qué tener en cuenta al alquilar un consultorio de psicología?",
    answer:
      "Prioriza la privacidad acústica, un ambiente profesional y limpio, y un sistema de reservas que te dé autonomía. El objetivo es encontrar un lugar que te permita centrarte exclusivamente en tu paciente.",
  },
  {
    key: "2",
    question: "¿Cómo puedo asegurar la privacidad en un consultorio alquilado?",
    answer:
      "Pregunta explícitamente sobre la aislación sonora entre consultorios y con la sala de espera. Un buen indicador es que el lugar utilice música ambiental o algún otro sistema para enmascarar sonidos.",
  },
  {
    key: "3",
    question: "¿Es mejor un consultorio por hora o uno fijo?",
    answer:
      "Para profesionales que empiezan o que tienen una agenda variable, el alquiler por horas es ideal. Ofrece flexibilidad y un costo mucho menor, eliminando la carga de los gastos fijos de un consultorio propio. Te permite crecer a tu propio ritmo.",
  },
];

const CtaBox = () => (
  <div className="my-10 rounded-2xl bg-content3 shadow-lg p-4 text-center">
    <h3 className="font-display text-3xl font-bold text-primary-500 mt-8!">
      ¿Listo/a para encontrar tu encuadre perfecto?
    </h3>
    <p className="mx-auto mt-4 max-w-xl font-sans text-foreground/80">
      Si esta filosofía resuena contigo, te invito a conocer el espacio que
      hemos creado pensando exactamente en estas necesidades.
    </p>
    <Button
      as={Link}
      href="/consultorios"
      className="mb-4 bg-secondary-500 font-display font-semibold text-white! no-underline"
      size="lg"
      variant="flat"
    >
      Explora Nuestros Espacios
    </Button>
  </div>
);

// --- PÁGINA PRINCIPAL QUE ENSAMBLA TODO ---
export default function ArticuloPsicologosPage(): JSX.Element {
  return (
    <main className="bg-content2 py-20">
      <article
        className="prose prose-lg mx-auto max-w-5xl px-4 
                     prose-headings:font-display prose-headings:text-primary-500
                     prose-p:font-sans prose-p:text-foreground/90
                     prose-strong:text-primary-500
                     prose-a:text-secondary-500 prose-a:font-semibold hover:prose-a:text-secondary-400 
                     prose-blockquote:border-secondary-500 prose-blockquote:text-foreground/70
                     prose-li:font-sans prose-li:text-foreground/90"
      >
        {/* --- TÍTULO Y INTRODUCCIÓN --- */}
        <h1>
          Alquiler de Consultorios para Psicólogos: La Guía Definitiva para
          Elegir el Espacio Correcto
        </h1>
        <p>
          Como psicólogos, invertimos años en nuestra formación para poder
          ofrecer el mejor cuidado a nuestros pacientes. Sin embargo, hay un
          aspecto fundamental de nuestra práctica que a menudo subestimamos: el
          espacio físico donde trabajamos. La búsqueda de un consultorio en
          alquiler no es solo encontrar cuatro paredes; es encontrar el entorno
          adecuado para que la terapia pueda florecer.
        </p>
        <p>
          He pasado por ese proceso. He lidiado con las frustraciones, las
          incomodidades y las "banderas rojas" que muchos de nosotros
          enfrentamos al empezar. Y en ese camino, entendí una verdad
          fundamental que quiero compartir contigo.
        </p>

        {/* --- SECCIÓN 1: EL ENCUADRE --- */}
        <h2>
          Más Allá de las Cuatro Paredes: El Consultorio como "Encuadre Fijo" de
          tu Terapia
        </h2>
        <p>
          En nuestra jerga teórica, hablamos del "encuadre" como ese conjunto de
          constantes que dan estabilidad al proceso terapéutico. Generalmente
          pensamos en el horario, los honorarios, nuestro rol. Pero, ¿qué pasa
          con el espacio? El consultorio es, quizás, el elemento más tangible de
          ese encuadre.
        </p>
        <blockquote>
          Por qué la estabilidad del espacio es tan crucial para ti como para
          tus pacientes
        </blockquote>
        <p>
          Un consultorio que funciona, que es predecible y profesional, no solo
          le da seguridad al paciente; te la da a vos. Te permite liberar tu
          mente de preocupaciones logísticas para enfocarte en lo único que
          importa: la persona que tienes delante. Cuando el encuadre es
          inestable, tu atención se desvía, y eso, inevitablemente, impacta en
          tu trabajo.
        </p>

        {/* --- SECCIÓN 2: LOS 3 PILARES --- */}
        <h2>Los 3 Pilares No Negociables de un Buen Consultorio Psicológico</h2>
        <p>
          Basado en mi experiencia, hay tres factores que nunca deberías
          sacrificar al elegir un lugar.
        </p>
        <h3>
          La Privacidad Acústica: El pilar fundamental de la confianza
          terapéutica
        </h3>
        <p>
          Esto es, para mí, el punto más crítico. He trabajado en lugares donde
          la aislación sonora era tan deficiente que se podían escuchar
          fragmentos de otras sesiones en la sala de espera. Es una situación
          desagradable que rompe por completo la confidencialidad y la sensación
          de seguridad del paciente. En <Link href="/">Espacio Pisama</Link>,
          fue mi obsesión desde el inicio. No solo busqué aislar acústicamente
          los consultorios, sino que añadí un detalle simple pero efectivo:
          música ambiental en la sala de espera para enmascarar cualquier sonido
          y garantizar una privacidad total.
        </p>
        <h3>
          El Ambiente: Cómo una decoración y limpieza impecables impactan la
          sesión
        </h3>
        <p>
          La primera impresión cuenta. He tenido que alquilar consultorios con
          sillones viejos y rotos, o peor, llegar y tener que barrer antes de
          que llegara mi paciente. Eso te saca de tu rol inmediatamente. El
          espacio debe reflejar profesionalismo. Mi esposa también es psicóloga,
          y juntos diseñamos cada detalle de nuestros espacios. Buscamos una
          ambientación minimalista pero cálida, profesional y acogedora. Un
          lugar que invite a la calma, no que genere distracciones.
        </p>
        <h3>
          La Funcionalidad: Esos pequeños detalles (pañuelos, iluminación) que
          lo cambian todo
        </h3>
        <p>
          El encuadre fijo también significa que todo está como debe estar,
          siempre. ¿Hay una caja de pañuelos a mano? ¿La iluminación es
          adecuada? ¿La temperatura es agradable? Cuando estos detalles están
          cubiertos, no tenés que pensar en ellos. El espacio trabaja para vos,
          no al revés.
        </p>

        <CtaBox />

        {/* --- SECCIÓN 3: LA LOGÍSTICA OCULTA --- */}
        <h2>
          La Logística Oculta: Lo que Nadie te Cuenta sobre el Alquiler por
          Horas
        </h2>
        <p>
          Más allá del espacio físico, está la gestión del día a día, que puede
          convertirse en una fuente constante de estrés.
        </p>
        <h3>
          El Sistema de Reservas: Cómo evitar el caos que daña tu imagen
          profesional
        </h3>
        <p>
          Al principio de mi carrera, viví la pesadilla de la coordinación por
          mensaje. Consultar disponibilidad, esperar respuesta, confirmar con el
          paciente y, a veces, al volver a contactar, descubrir que la hora ya
          no estaba disponible. Tener que cambiar un horario ya confirmado
          proyecta una imagen poco profesional y desorganizada. Es un desgaste
          innecesario que resolvimos con{" "}
          <Link href="/plataforma-de-reservas">
            nuestra plataforma de reservas en tiempo real
          </Link>
          .
        </p>
        <h3>
          La Comunidad de Colegas: Por qué la baja rotación y el respeto son
          clave
        </h3>
        <p>
          Otro factor de estrés son los colegas impuntuales. He tenido que
          golpear puertas para que un profesional saliera porque ya era mi hora,
          generando una situación de incomodidad terrible frente a mi paciente
          que esperaba. Por eso, en Espacio Pisama, fomento una comunidad de
          profesionales estable y respetuosa. Nuestro{" "}
          <Link href="/precios">
            {" "}
            sistema de descuentos por cantidad de horas{" "}
          </Link>
          utilizadas por semana, es una busqueda de fidelizar a colegas
          comprometidos que valoren tanto su tiempo como el de los demás.
          Prefiero tener una baja rotación y un ambiente de trabajo armónico,
          como explico en <Link href="/sobre-nosotros">nuestra filosofía</Link>.
        </p>
        <h3>
          La Accesibilidad: Un factor decisivo para la adherencia de tus
          pacientes
        </h3>
        <p>
          Un consultorio bien ubicado facilita la vida. Que esté cerca de
          avenidas principales con buen acceso a ómnibus es clave. Otro detalle,
          especialmente en Montevideo, es el estacionamiento. Estar en una zona
          como Parque Rodó, sin estacionamiento tarifado y donde siempre se
          encuentra lugar, elimina una barrera importante para muchos pacientes.
        </p>

        {/* --- SECCIÓN 4: BANDERAS ROJAS --- */}
        <h2>
          Banderas Rojas: Señales de Alerta para Descartar un Consultorio
          Inmediatamente
        </h2>
        <p>
          Si tuviera que resumir cuándo dar media vuelta y seguir buscando,
          sería en estas situaciones:
        </p>
        <ul>
          <li>
            Cuando tienes que preocuparte por algo más que tu paciente. Si
            tienes que pensar en la limpieza, en si habrá pañuelos, en si el
            sillón está roto, ese no es tu lugar.
          </li>
          <li>
            Si la privacidad no es una garantía absoluta. Si escuchas
            conversaciones o sientes que pueden escucharte, descártalo.
          </li>
          <li>
            Si percibes un ambiente de impuntualidad o falta de respeto entre
            los colegas que allí trabajan.
          </li>
        </ul>

        {/* --- SECCIÓN 5: CONCLUSIÓN --- */}
        <h2>
          Conclusión: Tu Consultorio Ideal es Aquel Donde Vuelves a lo Esencial
        </h2>
        <p className="pb-8">
          Elegir un consultorio es una decisión estratégica para tu práctica. El
          lugar correcto no es el más barato ni el más lujoso. Es aquel que
          funciona como un verdadero "encuadre fijo": un pilar estable e
          invisible que te da la tranquilidad y la confianza para dedicarte por
          completo a tu paciente. Es un espacio donde puedes, simplemente, ser
          psicólogo.
        </p>

        {/* --- SECCIÓN 6: FAQ --- */}
        <ConsultorioPsicologosFaqSection />
      </article>
    </main>
  );
}
