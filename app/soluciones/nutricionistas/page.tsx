import { Button } from "@heroui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Indice from "@/components/blog/Indice";
import CtaSection from "@/components/homepage/CtaSection";
import { siteConfig } from "@/config/site";
import appReservas from "@/public/images/blog/app-calendario-diario.webp";
import consultorio2 from "@/public/images/consultorio2-1.webp";
import consultorio4 from "@/public/images/consultorio4-1.webp";
import fachada1 from "@/public/images/fachada-1.1.webp";
import salaespera1 from "@/public/images/salaespera-1.webp";

import ConsultorioNutricionistasFaqSection from "./ConsultorioNutricionistasFaqSection";
import ImageGallery from "./ImageGallery";

// --- SEO: Metadatos de la Página ---
export const metadata: Metadata = {
  title:
    "Alquiler de Consultorio para Nutricionistas en Montevideo | Por Hora y Sin Compromiso | PISAMA",
  description:
    "Consultorio nutricional por hora en Parque Rodó, Montevideo. Privacidad total, ambiente profesional y reservas online. Alquiler flexible para nutricionistas desde $200/hora.",
  keywords: [
    "alquiler consultorio nutricionista montevideo",
    "consultorio nutricional montevideo",
    "consultorio nutrición por hora",
    "espacio para nutricionistas montevideo",
    "alquiler consultorio nutrición parque rodó",
    "sala consulta nutricionista",
    "consultorio nutricional alquiler",
    "espacio profesional nutrición montevideo",
    "consultorio flexible nutricionistas",
    "consultorio nutricionista parque rodó",
    "oficina nutricionista montevideo",
    "espacio consulta nutricional",
  ],
};

const CtaBox = () => (
  <div className="my-10 rounded-2xl bg-content3/80 shadow-xl p-4 text-center border-1 border-yellow-400 hover:scale-103 transition-transform duration-300">
    <h3 className="font-display text-3xl font-bold text-primary-500 mt-8!">
      ¿Listo/a para encontrar tu consultorio nutricional ideal?
    </h3>
    <p className="mx-auto mt-4 max-w-xl font-sans text-foreground/80">
      Te ofrecemos un espacio profesional que inspira cambio y bienestar. Un
      consultorio diseñado para nutricionistas, por quienes entienden tu
      práctica.
    </p>
    <Button
      as={Link}
      href="/"
      className="mb-4 bg-secondary-500 font-display font-semibold text-white! no-underline"
      size="lg"
      variant="flat"
    >
      Conocé Nuestro Espacio
    </Button>
  </div>
);

// --- PÁGINA PRINCIPAL QUE ENSAMBLA TODO ---
export default function ArticuloNutricionistasPage(): React.JSX.Element {
  // Breadcrumb para SEO
  const breadcrumbItems = [
    {
      name: "Inicio",
      url: siteConfig.url,
    },
    {
      name: "Soluciones",
      url: `${siteConfig.url}/soluciones`,
    },
    {
      name: "Para Nutricionistas",
      url: `${siteConfig.url}/soluciones/nutricionistas`,
    },
  ];

  const sections = [
    {
      title: "El Consultorio como Herramienta de Cambio",
      id: "herramienta-cambio",
    },
    {
      title: "Los 3 Pilares de Espacio PISAMA para Nutricionistas",
      id: "pilares",
      subsections: [
        {
          title: "1. Ambiente que Inspira Bienestar",
          id: "ambiente-bienestar",
        },
        {
          title: "2. Privacidad para Temas Sensibles",
          id: "privacidad-temas-sensibles",
        },
        {
          title: "3. Profesionalismo en Cada Detalle",
          id: "profesionalismo",
        },
      ],
    },
    {
      title: "La Logística que Resolvimos para Nutricionistas",
      id: "logistica",
      subsections: [
        {
          title: "Sistema de Reservas Flexible",
          id: "sistema-reservas",
        },
        {
          title: "Ubicación Accesible",
          id: "ubicacion",
        },
        {
          title: "Espacio Funcional",
          id: "espacio-funcional",
        },
        {
          title: "Comunidad Profesional",
          id: "comunidad",
        },
      ],
    },
    {
      title: "Problemas que Eliminamos",
      id: "problemas-eliminados",
    },
    {
      title: "Conclusión",
      id: "conclusion",
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <main className="bg-content2 py-20">
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
            Alquiler de Consultorio para Nutricionistas en Montevideo: El
            Espacio que Acompaña el Cambio
          </h1>
          <Indice sections={sections} />

          <p className="mt-12">
            Como psicólogo y dueño de{" "}
            <Link href="/">Espacio PISAMA</Link>, he trabajado de cerca con
            muchos nutricionistas que{" "}
            <strong>alquilan consultorios por hora en Montevideo</strong>. A
            través de sus experiencias y necesidades, entendí algo fundamental:{" "}
            <strong>
              el consultorio nutricional no es solo un lugar de trabajo, es
              parte del proceso de transformación que acompaña a tus pacientes.
            </strong>
          </p>
          <p>
            He visto las frustraciones que enfrentan los{" "}
            <strong>nutricionistas al buscar un espacio profesional</strong>
            para atender: consultorios improvisados, costos elevados de alquiler
            mensual cuando recién empiezan, falta de privacidad para tratar
            temas sensibles como el peso y la imagen corporal, y la necesidad de
            invertir en equipamiento profesional que a veces no pueden costear
            al inicio.
          </p>
          <p>
            Por eso, en <strong>Espacio PISAMA</strong> creamos un{" "}
            <strong>consultorio nutricional por hora en Parque Rodó</strong> que
            resuelve estos problemas. No es solo un lugar más para alquilar. Es
            un <Link href="/consultorios">espacio profesional</Link> diseñado
            para que puedas enfocarte en lo que realmente importa: acompañar a
            tus pacientes en su transformación hacia una vida más saludable.
          </p>

          {/* --- SECCIÓN 1: EL CONSULTORIO COMO HERRAMIENTA --- */}
          <h2 id="herramienta-cambio">
            El Consultorio Nutricional como Herramienta de Cambio: Por Qué el
            Espacio Importa en Nutrición
          </h2>
          <p>
            En la práctica nutricional, el{" "}
            <strong>consultorio para nutricionistas</strong> es mucho más que
            cuatro paredes.{" "}
            <strong>
              Es el lugar donde tus pacientes toman la decisión de cambiar, es
              donde se pesan por primera vez en meses, es donde comparten sus
              miedos sobre su relación con la comida.
            </strong>
          </p>
          <div className="my-8 flex justify-center">
            <Image
              src={consultorio4}
              alt="Consultorio PISAMA - Espacio profesional para nutricionistas en Montevideo"
              className="rounded-xl shadow-2xl h-auto"
              width={650}
            />
          </div>
          <blockquote>
            Un consultorio profesional, cálido y predecible no solo transmite
            confianza a tu paciente; también facilita que se abra y se
            comprometa con el proceso.
          </blockquote>
          <p>
            En Espacio PISAMA entendemos que cada detalle cuenta. Por eso
            diseñamos espacios que transmiten bienestar, profesionalismo y
            calidez. Cuando el entorno acompaña, tu trabajo se potencia.
          </p>

          {/* --- SECCIÓN 2: LOS 3 PILARES --- */}
          <h2 id="pilares">
            Los 3 Pilares que Hacen de Espacio PISAMA el Mejor Consultorio para
            Nutricionistas
          </h2>
          <p>
            Hay tres factores clave que priorizamos al diseñar este espacio,
            porque sabemos que son esenciales para la práctica nutricional:
          </p>

          <h3 id="ambiente-bienestar">
            1. Ambiente que Inspira Bienestar: Diseñado para Motivar el Cambio
          </h3>
          <p>
            El consultorio nutricional debe ser un lugar que inspire cambio
            positivo desde el primer momento.{" "}
            <strong>
              Muchos pacientes llegan con ansiedad, vergüenza o frustración
              respecto a su peso o alimentación.
            </strong>{" "}
            El espacio debe transmitirles: &quot;Acá estás seguro/a, acá vas a
            encontrar apoyo&quot;.
          </p>
          <ImageGallery />
          <p>
            Por eso, en Espacio PISAMA cada consultorio tiene un estilo
            minimalista, cálido y profesional. Colores neutros, iluminación
            natural, plantas, mobiliario cómodo. Todo pensado para que el
            paciente se sienta acogido, no juzgado.
          </p>
          <p>
            <strong>
              No hay espejos de cuerpo completo ni elementos que generen
              incomodidad.
            </strong>{" "}
            Solo un ambiente equilibrado que favorece la conversación honesta y
            el compromiso con el cambio.
          </p>

          <h3 id="privacidad-temas-sensibles">
            2. Privacidad para Temas Sensibles: Confidencialidad Absoluta
          </h3>
          <p>
            Hablar de peso, imagen corporal, trastornos alimentarios o hábitos
            de comida es profundamente íntimo.{" "}
            <strong>
              La privacidad acústica no es negociable en un consultorio
              nutricional.
            </strong>
          </p>
          <p>
            He escuchado de nutricionistas que tuvieron que trabajar en lugares
            donde los pacientes escuchaban fragmentos de otras consultas en la
            sala de espera. Eso destruye la confianza y dificulta que el
            paciente se abra.
          </p>
          <blockquote>
            En Espacio PISAMA, la privacidad acústica fue nuestra obsesión
            desde el inicio. Cada consultorio está aislado acústicamente y la
            sala de espera tiene música ambiental para enmascarar cualquier
            sonido residual.
          </blockquote>
          <p>
            <strong>Resultado:</strong> Tus pacientes pueden hablar con total
            libertad sobre sus desafíos alimentarios, sabiendo que nadie más
            los escuchará.
          </p>
          <div className="my-8 flex justify-center">
            <Image
              src={salaespera1}
              alt="Sala de espera PISAMA con privacidad acústica"
              className="rounded-xl shadow-2xl h-auto"
              width={400}
            />
          </div>

          <h3 id="profesionalismo">
            3. Profesionalismo en Cada Detalle: Todo Lo Que Necesitás, Siempre
            Listo
          </h3>
          <p>
            <strong>
              En un consultorio nutricional, la imagen profesional es clave.
            </strong>{" "}
            Tus pacientes están confiando en vos para guiarlos en uno de los
            aspectos más importantes de su salud. El entorno debe reflejar esa
            seriedad.
          </p>
          <p>
            En Espacio PISAMA, cada consultorio está impecable, siempre. La
            limpieza es garantizada, el mobiliario está en perfecto estado, hay
            aire acondicionado en todos los espacios, y la iluminación es
            adecuada para consultas profesionales.
          </p>
          <div className="my-8 flex justify-center">
            <Image
              src={consultorio2}
              alt="Consultorio nutricional profesional en Montevideo"
              className="rounded-xl shadow-2xl h-auto"
              width={650}
            />
          </div>
          <p>
            No tenés que preocuparte por barrer antes de que llegue el
            paciente, ni por si la temperatura es adecuada, ni por si hay
            suficiente luz. El espacio trabaja para vos, no al revés.
          </p>

          <CtaBox />

          {/* --- SECCIÓN 3: LA LOGÍSTICA --- */}
          <h2 id="logistica">
            La Logística que Resolvimos para Facilitar tu Práctica Nutricional
          </h2>
          <p>
            Más allá del espacio físico, hay desafíos logísticos que pueden
            complicar tu práctica profesional. Por eso desarrollamos soluciones
            específicas:
          </p>

          <h3 id="sistema-reservas">
            Alquiler de Consultorio por Hora: Pagá Solo por lo que Usás
          </h3>
          <p>
            Uno de los mayores obstáculos para{" "}
            <strong>
              nutricionistas que recién comienzan su práctica privada
            </strong>{" "}
            es el costo de alquilar un consultorio mensual.{" "}
            <strong>
              Cuando estás empezando, quizás tenés solo 5-10 pacientes por
              semana. Pagar un alquiler mensual completo no tiene sentido
              económico.
            </strong>
          </p>
          <p>
            Por eso, en Espacio PISAMA implementamos un{" "}
            <strong>sistema de alquiler por hora</strong> con reservas online
            en tiempo real. Ves la{" "}
            <Link href="/disponibilidad">disponibilidad al instante</Link>,
            reservás el horario que necesitás, y solo pagás por esas horas.
          </p>
          <div className="my-8 flex justify-center">
            <Image
              src={appReservas}
              alt="Sistema de reservas online para nutricionistas"
              className="rounded-xl shadow-2xl h-auto"
              width={650}
            />
          </div>
          <p>
            Esto te permite crecer a tu ritmo, sin presiones financieras. Y a
            medida que aumenta tu cartera de pacientes, nuestro{" "}
            <Link href="/precios">
              sistema de descuentos progresivos por horas utilizadas
            </Link>{" "}
            hace que el costo por hora disminuya.
          </p>

          <h3 id="ubicacion">
            Consultorio en Parque Rodó: Ubicación Estratégica para Nutricionistas
            en Montevideo
          </h3>
          <p>
            La <strong>adherencia del paciente a las consultas nutricionales</strong> es clave
            para lograr resultados. Una de las principales razones por las que
            los pacientes abandonan es la dificultad para llegar al
            consultorio.
          </p>
          <p>
            Nuestro <strong>consultorio nutricional en Parque Rodó</strong> está ubicado en una zona
            céntrica y accesible de Montevideo, cerca de avenidas principales
            (Blvr. Artigas, Blvr. España, Rivera, 18 de Julio) con excelente
            conexión en ómnibus.
          </p>
          <blockquote>
            Y algo fundamental en Montevideo: estamos en una zona de
            estacionamiento no tarifado, donde siempre hay lugar para
            estacionar. Eliminamos una barrera importante para que tus
            pacientes lleguen puntualmente.
          </blockquote>
          <div className="my-8 flex justify-center">
            <Image
              src={fachada1}
              alt="Fachada de PISAMA en Parque Rodó, Montevideo"
              className="rounded-xl shadow-2xl h-auto"
              width={350}
            />
          </div>

          <h3 id="espacio-funcional">
            Espacio Funcional: Todo Lo Que Necesitás para Trabajar
          </h3>
          <p>
            Uno de los desafíos más grandes para nutricionistas que recién
            comienzan es encontrar un espacio que les permita trabajar
            profesionalmente sin grandes inversiones.{" "}
            <strong>
              Montar un consultorio propio implica costos de mobiliario,
              decoración, limpieza y mantenimiento que pueden ser prohibitivos.
            </strong>
          </p>
          <p>
            En Espacio PISAMA cada consultorio ya está completamente equipado y
            listo para usar:{" "}
            <strong>
              escritorio profesional, sillas cómodas, iluminación adecuada,
              climatización y un ambiente impecable.
            </strong>{" "}
            Podés traer tu propio equipamiento nutricional (balanza, plicómetro,
            material educativo) y comenzar a trabajar de inmediato.
          </p>
          <p>
            Esto te permite enfocarte en lo que realmente importa: atender a tus
            pacientes con excelencia, sin preocuparte por la logística del
            espacio.
          </p>

          <h3 id="comunidad">
            Comunidad Profesional: Colegas Respetuosos y Comprometidos
          </h3>
          <p>
            Trabajar como profesional independiente puede ser solitario. En
            Espacio PISAMA promovemos una comunidad de profesionales de la
            salud (psicólogos, nutricionistas, terapeutas) que comparten
            valores similares: puntualidad, respeto y compromiso con la
            excelencia.
          </p>
          <p>
            Nuestro{" "}
            <Link href="/precios">
              sistema de descuentos por cantidad de horas
            </Link>{" "}
            fideliza a profesionales comprometidos. Preferimos tener una baja
            rotación y un ambiente de trabajo armónico, como explico en{" "}
            <Link href="/sobre-nosotros">nuestra filosofía</Link>.
          </p>
          <p>
            Además, muchos profesionales se recomiendan mutuamente pacientes,
            generando una red de referencia natural que beneficia a todos.
          </p>

          {/* --- SECCIÓN 4: PROBLEMAS ELIMINADOS --- */}
          <h2 id="problemas-eliminados">
            Problemas Comunes al Alquilar un Consultorio Nutricional que
            Resolvemos en PISAMA
          </h2>
          <p>
            Si alguna vez te preocupaste por alguno de estos problemas, Espacio
            PISAMA los resuelve todos:
          </p>
          <ul>
            <li>
              <strong>¿Inversión inicial muy alta?</strong> Con nuestro sistema
              de alquiler por hora, empezás sin compromiso mensual ni costos de
              mobiliario. El consultorio ya está completamente equipado.
            </li>
            <li>
              <strong>¿Privacidad dudosa para temas sensibles?</strong> En
              Espacio PISAMA es absoluta, garantizada por aislación acústica
              profesional y música ambiental en sala de espera.
            </li>
            <li>
              <strong>¿Ambiente poco profesional o improvisado?</strong>{" "}
              <Link href="/consultorios">Cada consultorio</Link> está diseñado
              con criterio terapéutico: cálido, minimalista y motivador.
            </li>
            <li>
              <strong>¿Reservas complicadas o intermediarios?</strong> Con
              nuestro{" "}
              <Link href="/app-de-reservas">
                sistema de reservas online en tiempo real
              </Link>
              , reservás en segundos, directamente.
            </li>
            <li>
              <strong>¿Ubicación de difícil acceso?</strong> Parque Rodó,
              excelente conexión en ómnibus y estacionamiento sin problemas.
            </li>
            <li>
              <strong>¿Espacio sin equipar o inadecuado?</strong> Consultorio
              completamente equipado: escritorio, sillas, climatización e
              iluminación profesional. Traé tu equipamiento nutricional y
              comenzá a trabajar.
            </li>
          </ul>

          {/* --- SECCIÓN 5: CONCLUSIÓN --- */}
          <h2 id="conclusion">
            Espacio PISAMA: El Consultorio Nutricional que Trabaja para Vos
          </h2>
          <p>
            Al crear Espacio PISAMA, escuché las necesidades de muchos
            nutricionistas.{" "}
            <strong>
              No es el espacio más barato ni el más lujoso. Es el que funciona.
            </strong>{" "}
            Es un consultorio profesional, flexible y diseñado para acompañar
            tu crecimiento profesional.
          </p>
          <p className="pb-8">
            Si buscás un lugar donde simplemente puedas ser nutricionista, sin
            preocupaciones logísticas ni inversiones prohibitivas,{" "}
            <strong>
              Espacio PISAMA es tu consultorio nutricional en Montevideo
            </strong>
            . Te invito a conocerlo.
          </p>
          <div className="aspect-video my-8">
            <iframe
              className="rounded-lg shadow-xl w-full h-full"
              src="https://www.youtube.com/embed/_0-Eh-JvQys"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* --- SECCIÓN 6: FAQ --- */}
          <ConsultorioNutricionistasFaqSection />
        </article>
      </main>
      <CtaSection
        title="Reservá tu Consultorio Nutricional en Montevideo"
        description="Privacidad total, ambiente profesional que inspira cambio y sistema de reservas flexible. Todo lo que necesitás para comenzar o expandir tu práctica nutricional."
        buttonText="Ver Disponibilidad en Tiempo Real"
        buttonLink="/disponibilidad"
      />
    </>
  );
}
