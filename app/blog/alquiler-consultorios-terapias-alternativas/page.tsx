import { Button } from "@heroui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Indice from "@/components/blog/Indice";
import CtaSection from "@/components/homepage/CtaSection";

import ImageGallery from "./ImageGallery";

// --- SEO: Metadatos de la Página ---
export const metadata: Metadata = {
  title: "Consultorios para Terapias Alternativas en Montevideo",
  description:
    "Descubre cómo encontrar el alquiler de consultorios para terapias alternativas ideal en Montevideo. Energía, flexibilidad y diseño terapéutico.",
  keywords: [
    "alquiler consultorios para terapias alternativas",
    "consultorios con camilla",
    "alquiler de salas para terapeutas holísticos",
    "consultorios por hora Montevideo",
    "espacios para terapeutas alternativos",
    "alquiler de consultorios montevideo",
  ],
};

const sections = [
  {
    title: "Introducción: una extensión de tu energía",
    id: "introduccion",
  },
  {
    title: "¿Por qué elegir bien el espacio terapéutico?",
    id: "porque-elegir-bien-espacio",
  },
  {
    title: "1. Ubicación estratégica: Parque Rodó",
    id: "ubicacion",
  },
  {
    title: "2. Energía y ambiente",
    id: "energia-ambiente",
  },
  {
    title: "3. Flexibilidad horaria",
    id: "flexibilidad-horaria",
  },
  {
    title: "4. Reservas online y equipamiento",
    id: "reservas-equipamiento",
  },
  {
    title: "5. Precios justos y descuentos progresivos",
    id: "precios-descuentos",
  },
  {
    title: "6. Comunidad y acompañamiento",
    id: "comunidad",
  },
  {
    title: "7. Diseño profesional",
    id: "diseno-profesional",
  },
  {
    title: "8. ¿Qué sienten los terapeutas?",
    id: "que-sienten-terapeutas",
  },
  {
    title: "Conclusión: un espacio que vibra contigo",
    id: "conclusion",
  },
];

const CtaBox = () => (
  <div className="my-10 rounded-2xl bg-content3/80 shadow-xl p-4 text-center border-1 border-yellow-400 hover:scale-103 transition-transform duration-300">
    <h3 className="font-display text-3xl font-bold text-primary-500 mt-8!">
      ¿Buscás un espacio que vibre con vos?
    </h3>
    <p className="mx-auto mt-4 max-w-xl font-sans text-foreground/80">
      Encontrá un entorno profesional, cálido y flexible, diseñado para
      potenciar tus terapias y el bienestar de tus pacientes.
    </p>
    <Button
      as={Link}
      href="/contacto"
      className="mb-4 bg-secondary-500 font-display font-semibold text-white! no-underline"
      size="lg"
      variant="flat"
    >
      Conocé Espacio Pisama
    </Button>
  </div>
);

// --- PÁGINA PRINCIPAL QUE ENSAMBLA TODO ---
export default function ArticuloTerapiasAlternativasPage(): React.JSX.Element {
  return (
    <>
      <main className="bg-content2 pt-10">
        <article
          className="prose prose-lg mx-auto max-w-4xl px-4 
                     prose-headings:font-display prose-headings:text-primary-500
                     prose-p:font-sans prose-p:text-foreground/90
                     prose-strong:text-primary-500
                     prose-a:text-secondary-500 prose-a:font-semibold hover:prose-a:text-secondary-400 
                     prose-blockquote:border-secondary-500 prose-blockquote:text-foreground/70
                     prose-li:font-sans prose-li:text-foreground/90
                     prose-img:mt-0"
        >
          {/* --- TÍTULO Y INTRODUCCIÓN --- */}
          <h1>
            🪷 Alquiler de Consultorios para Terapias Alternativas en
            Montevideo: Encuentra el Espacio que Vibra Contigo
          </h1>
          <Indice sections={sections} />

          <p className="mt-12" id="introduccion">
            <strong>
              Introducción: más que un espacio, una extensión de tu energía
            </strong>
          </p>
          <p>
            Cuando empecé a dedicarme al alquiler de consultorios para terapias
            alternativas, entendí algo fundamental: los terapeutas no buscan
            solo cuatro paredes. Buscan un espacio que refleje su energía, su
            propósito y su manera de sanar.
          </p>
          <p>
            En Espacio Pisama, hemos trabajado con muchos terapeutas
            alternativos, y todos coinciden en algo: la buena energía que se
            siente en el lugar. Cada detalle, desde la acústica hasta la
            decoración, fue pensado por nosotros —dos psicólogos que somos los
            dueños— para crear un entorno cálido, sereno y profesional, ideal
            para terapias holísticas.
          </p>

          {/* --- SECCIÓN 1: POR QUÉ ELEGIR BIEN --- */}
          <h2 id="por-que-elegir-bien">
            🌿 ¿Por qué es tan importante elegir bien el espacio terapéutico?
          </h2>
          <p>
            El lugar donde un terapeuta atiende impacta directamente en la
            experiencia del paciente. Un consultorio no es solo un ambiente
            físico; es parte del proceso de sanación.
          </p>
          <p>
            He visto cómo muchos terapeutas llegan contando que probaron en
            otros lugares, pero no se sentían cómodos o no lograban conectar con
            la energía del espacio. Esa sensación cambia cuando encuentran un
            lugar que vibra con su propósito.
          </p>
          <p>
            Por eso, el entorno es clave: debe tener armonía, privacidad, buena
            luz, decoración equilibrada y un ambiente que invite al silencio
            interior.
          </p>

          <Image
            src="/images/consultorio1-3.webp"
            alt="Consultorio luminoso y acogedor en Montevideo, ideal para alquiler por hora destinado a terapeutas alternativos."
            width={800}
            height={600}
            className="rounded-xl shadow-2xl mx-auto"
          />
          <p className="text-center text-sm italic text-foreground/70">
            Descubre cómo elegir el consultorio perfecto para tus terapias
            alternativas y crear un espacio que potencie tu energía y la de tus
            pacientes.
          </p>

          {/* --- SECCIÓN 2: CLAVES PARA ALQUILAR --- */}
          <h2 id="claves-alquiler">8 Claves para Encontrar tu Espacio Ideal</h2>

          <h3 id="ubicacion">
            🏙️ 1. Ubicación estratégica: Parque Rodó, un punto con alma y
            prestigio
          </h3>
          <p>
            La ubicación no solo influye en la accesibilidad, sino también en la
            percepción profesional del terapeuta. En nuestro caso, el espacio
            está en Parque Rodó, una zona céntrica, tranquila y valorada de
            Montevideo.
          </p>
          <p>
            Muchos de los profesionales que atienden allí nos dicen que sus
            pacientes asocian la zona con prestigio, bienestar y comodidad. Esa
            imagen se traslada también al trabajo del terapeuta, reforzando su
            marca personal.
          </p>
          <blockquote>
            “La ubicación del consultorio es muy buena, está en el barrio Parque
            Rodó, que es una zona céntrica y que realza la imagen de los que
            atienden allí”, me repiten con frecuencia quienes trabajan con
            nosotros.
          </blockquote>

          <h3 id="energia-ambiente">
            💫 2. Energía y ambiente: el poder del espacio en el proceso
            terapéutico
          </h3>
          <p>
            Uno de los mayores dolores del terapeuta alternativo es no encontrar
            un lugar con la energía adecuada.
          </p>
          <p>
            En Espacio Pisama cuidamos cada detalle: la iluminación, los tonos
            neutros, las plantas naturales, la armonía visual y, sobre todo, la
            acústica. La idea es que el sonido de la ciudad quede fuera y dentro
            solo se escuche calma.
          </p>
          <blockquote>
            “Cada detalle, desde la acústica de los consultorios hasta la
            decoración, fue pensado por dos psicólogos que somos los dueños del
            espacio, para que haya calidez, buena energía y un buen ambiente
            para trabajar.”
          </blockquote>
          <p>
            Esa frase refleja exactamente lo que hacemos: crear espacios que
            inspiran confianza, contención y bienestar.
          </p>

          <ImageGallery />

          <h3 id="flexibilidad-horaria">
            🕰️ 3. Flexibilidad horaria: libertad para atender cuando lo
            necesites
          </h3>
          <p>
            Uno de los grandes desafíos de los terapeutas es encontrar un
            espacio que se adapte a sus horarios. Algunos atienden temprano,
            otros por la noche o los fines de semana.
          </p>
          <p>
            Por eso, en nuestro caso, abrimos de 7:00 a 23:00 todos los días del
            año. Esto permite que cada profesional elija cuándo trabajar, sin
            restricciones ni contratos rígidos.
          </p>
          <blockquote>
            “También tenemos un horario amplio de apertura desde las 7 de la
            mañana a las 23 horas todos los días del año.”
          </blockquote>
          <p>Esa libertad genera algo muy valioso: autonomía profesional.</p>

          <h3 id="reservas-online">
            💻 4. Reservas online y equipamiento pensado para vos
          </h3>
          <p>
            La tecnología debe estar al servicio del bienestar. Por eso
            implementamos un sistema de reservas online que permite ver
            disponibilidad en tiempo real y reservar fácilmente el consultorio.
          </p>
          <blockquote>
            “Tenemos un sistema de reservas online en el cual se pueden agendar
            y reservar su consultorio con camilla si es que la necesitan.
            Indicándolo ahí, el sistema automáticamente chequea si está
            disponible la camilla a la hora que ellos necesiten.”
          </blockquote>
          <p>
            Además, contamos con una camilla disponible que puede usarse en
            cualquiera de los seis consultorios. Solo hay que indicar su
            necesidad al momento de reservar, y el sistema se encarga del resto.
            Esa comodidad tecnológica elimina el clásico dolor de cabeza de
            coordinar horarios por teléfono o esperar confirmaciones manuales.
          </p>

          <CtaBox />

          <h3 id="precios-justos">
            💰 5. Precios justos y descuentos progresivos
          </h3>
          <p>
            Otro punto de dolor frecuente: los costos altos o alquileres
            mensuales inflexibles. Muchos terapeutas recién comienzan y
            necesitan una opción que no los obligue a comprometerse a largo
            plazo.
          </p>
          <p>
            Por eso, en Espacio Pisama, implementamos un sistema de descuentos
            progresivos: cuanto más horas usan el consultorio, más barato les
            sale.
          </p>
          <blockquote>
            “Tenemos un sistema de descuento por cuanto más horas usan los
            profesionales; se van aplicando descuentos graduales que hacen que
            cada vez cuantas más horas usen, más barato les salga el asunto.”
          </blockquote>
          <p>
            De esta forma, el terapeuta puede comenzar poco a poco, sin riesgo
            financiero, y crecer a medida que aumenta su cartera de pacientes.
          </p>

          <h3 id="comunidad">
            🧘‍♀️ 6. Comunidad y acompañamiento entre terapeutas
          </h3>
          <p>
            Trabajar solo puede ser un desafío emocional. Muchos profesionales
            buscan un entorno donde haya una sensación de comunidad, aunque cada
            uno mantenga su independencia.
          </p>
          <p>
            En Espacio Pisama promovemos esa conexión: los terapeutas comparten
            valores similares, se recomiendan mutuamente y muchas veces surgen
            colaboraciones o intercambios. No se trata solo de alquilar un
            consultorio, sino de pertenecer a un espacio donde todos vibran en
            la misma frecuencia.
          </p>

          <h3 id="diseno-profesional">
            🌺 7. Diseño profesional para potenciar la experiencia terapéutica
          </h3>
          <p>
            Cuando los consultorios son pensados por terapeutas, la diferencia
            se nota. Nosotros diseñamos cada sala con la mirada de quien
            entiende las necesidades del trabajo terapéutico: privacidad,
            comodidad y armonía.
          </p>
          <p>
            Cada rincón fue concebido para que el terapeuta pueda enfocarse en
            lo esencial: acompañar a sus pacientes con serenidad y confianza.
          </p>

          <h3 id="feedback-terapeutas">
            💬 8. Qué sienten los terapeutas cuando encuentran su espacio ideal
          </h3>
          <p>He escuchado muchas veces frases como:</p>
          <ul>
            <li>
              “Por fin encontré un lugar donde mis pacientes se sienten
              cómodos.”
            </li>
            <li>“La energía del espacio acompaña lo que hago.”</li>
            <li>“Es un gusto venir a trabajar.”</li>
          </ul>
          <p>
            Ese es el mayor indicador de que un espacio funciona. Porque cuando
            un terapeuta se siente bien, su trabajo fluye, su presencia mejora y
            los pacientes lo notan.
          </p>

          {/* --- CONCLUSIÓN --- */}
          <h2 id="conclusion">
            🌿 Conclusión: un espacio que vibra con tu propósito
          </h2>
          <p>
            El alquiler de consultorios para terapias alternativas no debería
            ser una búsqueda complicada, sino una oportunidad para encontrar un
            lugar donde tu energía se sienta en casa.
          </p>
          <p>
            En mi experiencia con Espacio Pisama, comprobé que cuando un
            terapeuta trabaja en un entorno que vibra en sintonía con su
            práctica, todo mejora: la calidad de las sesiones, la conexión con
            los pacientes y hasta la motivación personal.
          </p>
          <p className="pb-8">
            Si buscás un espacio cálido, flexible y con buena energía para tus
            terapias, te invito a conocer Espacio Pisama. Porque cuando el
            espacio vibra contigo, el trabajo fluye de verdad.
          </p>
        </article>
      </main>
      <CtaSection
        title="Reservá tu Consultorio para Terapia Alternativa"
        description="Encontrá un espacio con la energía que buscás. Privacidad, camilla disponible y un sistema de reservas que te da total libertad. ¡Conocé nuestros consultorios!"
        buttonText="Ver Disponibilidad"
        buttonLink="/disponibilidad"
      />
    </>
  );
}
