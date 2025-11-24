import { Button } from "@heroui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Indice from "@/components/blog/Indice";
import CtaSection from "@/components/homepage/CtaSection";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/components/seo/ServiceSchema";
import RelatedSolutions from "@/components/soluciones/RelatedSolutions";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/config/site";
import { allSolutions } from "@/src/solucionesData";
import appReservas from "@/public/images/blog/app-calendario-diario.webp";
import consultorio3 from "@/public/images/consultorio3-1.webp";
import consultorio1 from "@/public/images/consultorio5-1.webp";
import fachada1 from "@/public/images/fachada-1.1.webp";
import salaespera1 from "@/public/images/salaespera-1.webp";

import ConsultorioCoachesFaqSection from "./ConsultorioCoachesFaqSection";
import ImageGallery from "./ImageGallery";

// --- SEO: Metadatos de la Página ---
export const metadata: Metadata = {
  title:
    "Alquiler de Consultorio para Coaches por Hora en Parque Rodó, Montevideo | PISAMA",
  description:
    "Consultorio para coaches por hora en Parque Rodó desde $200. Privacidad acústica absoluta, ambiente profesional y reservas online. Ideal para coaching ontológico, ejecutivo y personal. Sin compromiso mensual.",
  keywords: [
    "alquiler consultorio coaches montevideo",
    "consultorio coaching parque rodó",
    "alquiler consultorio por hora coaching",
    "espacio profesional coaching montevideo",
    "consultorio coaching ontológico montevideo",
    "sala coaching ejecutivo parque rodó",
    "alquiler espacio life coaching montevideo",
    "consultorio privacidad coaching",
    "reserva online consultorio coaching",
    "alquiler sala coaching montevideo",
    "consultorio coach sin compromiso",
    "espacio profesional coaches montevideo",
  ],
  alternates: {
    canonical: "/soluciones/coaches",
  },
  openGraph: {
    title: "Alquiler de Consultorio para Coaches en Montevideo | PISAMA",
    description:
      "Consultorio para coaching por hora con privacidad acústica absoluta en Parque Rodó. Desde $200/hora sin compromiso mensual.",
    url: "https://www.pisama.uy/soluciones/coaches",
    siteName: "Espacio Pisama",
    locale: "es_UY",
    type: "article",
    images: [
      {
        url: "https://www.pisama.uy/images/consultorio1-1.webp",
        width: 1200,
        height: 630,
        alt: "Consultorio profesional para coaches en Parque Rodó, Montevideo",
      },
    ],
  },
};

const CtaBox = () => (
  <div className="my-10 rounded-2xl bg-content3/80 shadow-xl p-4 text-center border-1 border-yellow-400 hover:scale-103 transition-transform duration-300">
    <h3 className="font-display text-3xl font-bold text-primary-500 mt-8!">
      ¿Listo para reservar tu consultorio para coaching en Parque Rodó?
    </h3>
    <p className="mx-auto mt-4 max-w-xl font-sans text-foreground/80">
      Alquiler por hora desde $200 en Montevideo. Privacidad acústica absoluta,
      reservas online en tiempo real y ambiente diseñado para sesiones de
      coaching profesional. Sin compromiso mensual.
    </p>
    <Button
      as={Link}
      href="/disponibilidad"
      className="mb-4 bg-secondary-500 font-display font-semibold text-white! no-underline"
      size="lg"
      variant="flat"
    >
      Ver Disponibilidad y Precios
    </Button>
  </div>
);

// --- PÁGINA PRINCIPAL QUE ENSAMBLA TODO ---
export default function ArticuloCoachesPage(): React.JSX.Element {
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
      name: "Para Coaches",
      url: `${siteConfig.url}/soluciones/coaches`,
    },
  ];

  const sections = [
    {
      title: "El Espacio como Contenedor del Proceso",
      id: "contenedor",
    },
    {
      title: "Los 3 Pilares de Espacio PISAMA para Coaches",
      id: "pilares",
      subsections: [
        {
          title: "1. Ambiente Profesional",
          id: "ambiente-profesional",
        },
        {
          title: "2. Privacidad Acústica Absoluta",
          id: "privacidad-acustica",
        },
        {
          title: "3. Funcionalidad Sin Preocupaciones",
          id: "funcionalidad",
        },
      ],
    },
    {
      title: "La Logística que Resolvimos para Coaches",
      id: "logistica",
      subsections: [
        {
          title: "Sistema de Reservas Online",
          id: "sistema-reservas",
        },
        {
          title: "Ubicación Estratégica",
          id: "ubicacion",
        },
        {
          title: "Comunidad Profesional",
          id: "comunidad-profesional",
        },
      ],
    },
    {
      title: "Eliminamos las Barreras del Coaching Presencial",
      id: "barreras",
    },
    {
      title: "Conclusión",
      id: "conclusion",
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Alquiler de Consultorio para Coaches"
        serviceDescription="Consultorio profesional por hora para coaches en Parque Rodó, Montevideo. Privacidad acústica absoluta, ambiente diseñado para sesiones de coaching y reservas online en tiempo real."
        serviceType="Alquiler de Consultorios para Coaching"
        url={`${siteConfig.url}/soluciones/coaches`}
        image={[
          "https://www.pisama.uy/images/consultorio1-1.webp",
          "https://www.pisama.uy/images/consultorio3-1.webp",
          "https://www.pisama.uy/images/salaespera-1.webp",
        ]}
        areaServed="Montevideo, Uruguay"
        offers={[
          {
            name: "Consultorio Estándar",
            description: "Consultorio profesional para coaching por hora",
            price: "200",
            priceCurrency: "UYU",
          },
          {
            name: "Consultorio Premium",
            description: "Consultorio amplio Premium para coaching por hora",
            price: "250",
            priceCurrency: "UYU",
          },
        ]}
        availableFeatures={[
          "Privacidad acústica absoluta",
          "Reservas online en tiempo real",
          "Ambiente profesional y cálido",
          "Ubicación estratégica en Parque Rodó",
          "Aire acondicionado",
          "WiFi de alta velocidad",
          "Sala de espera privada",
        ]}
      />
      <main className="bg-content2 pt-10">
        <div className="container mx-auto max-w-4xl px-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
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
            Alquiler de Consultorio para Coaches por Hora en Montevideo: El
            Espacio que Tu Práctica Necesita
          </h1>
          <Indice sections={sections} />

          <p className="mt-12">
            Como coach profesional, sé que el espacio donde trabajas no es solo
            un detalle logístico: es parte integral del proceso de
            transformación que facilitas. He vivido la frustración de intentar
            dar sesiones de coaching en espacios inadecuados, donde la falta de
            privacidad, el ambiente poco profesional o la coordinación caótica
            de reservas afectan directamente la calidad de tu trabajo y la
            confianza de tus coachees.
          </p>
          <p>
            Por eso creé{" "}
            <Link
              href="/"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              <strong>Espacio PISAMA</strong>
            </Link>
            : un{" "}
            <Link
              href="/soluciones"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              espacio de alquiler de consultorios
            </Link>{" "}
            por hora en Parque Rodó, Montevideo, diseñado específicamente para
            profesionales del coaching que buscan un lugar donde puedan
            concentrarse exclusivamente en lo que mejor hacen: acompañar
            procesos de transformación personal y profesional.
          </p>

          {/* --- SECCIÓN 1: EL CONTENEDOR --- */}
          <h2 id="contenedor">
            El Espacio como Contenedor del Proceso de Coaching en Montevideo
          </h2>
          <p>
            En el coaching ontológico, ejecutivo o personal, hablamos del
            &quot;espacio seguro&quot; como condición fundamental para que el
            coachee se permita explorar, cuestionar y transformar. Pero ese
            espacio seguro no es solo simbólico: el consultorio físico donde das
            tus sesiones de coaching es el contenedor tangible de ese proceso.
          </p>
          <div className="my-8 flex justify-center">
            <Image
              src={consultorio1}
              alt="Consultorio PISAMA - Espacio profesional para coaches"
              className="rounded-xl shadow-2xl h-auto"
              width={650}
            />
          </div>
          <blockquote>
            Un consultorio profesional, predecible y confidencial no solo le da
            seguridad al coachee; te permite a vos estar presente al 100% en el
            proceso.
          </blockquote>
          <p>
            En Espacio PISAMA diseñamos{" "}
            <Link
              href="/consultorios"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              cada consultorio
            </Link>{" "}
            para que puedas liberarte de preocupaciones logísticas y enfocarte
            exclusivamente en tu coachee. Cuando el espacio funciona, tu
            atención no se desvía, y eso potencia cada sesión de coaching que
            facilitas.
          </p>

          {/* --- SECCIÓN 2: LOS 3 PILARES --- */}
          <h2 id="pilares">
            Los 3 Pilares del Alquiler de Consultorios para Coaches en Parque
            Rodó
          </h2>
          <p>
            Hay tres factores que prioricé al diseñar este espacio de alquiler
            de consultorios para coaches en Parque Rodó, porque sé que son
            esenciales para cualquier práctica de coaching profesional:
          </p>

          <h3 id="ambiente-profesional">
            1. Ambiente Profesional: Diseñado para la Reflexión y la
            Transformación
          </h3>
          <p>
            He dado sesiones de coaching en cafeterías ruidosas, espacios
            compartidos improvisados, y consultorios desprolijos que proyectaban
            todo menos profesionalismo. Eso mina la credibilidad de tu trabajo
            como coach y dificulta que el coachee se tome el proceso en serio.{" "}
            <strong>
              En Espacio PISAMA, cada detalle está pensado para facilitar
              conversaciones profundas y reflexión genuina.
            </strong>
          </p>
          <ImageGallery />
          <p>
            Buscamos un estilo minimalista pero cálido, profesional y acogedor.
            Un lugar que invite a la introspección desde que cruzas la puerta.
            Los muebles, la iluminación, los colores: todo está diseñado para
            generar el ambiente ideal para sesiones de coaching ontológico,
            coaching ejecutivo o life coaching.
          </p>

          <h3 id="privacidad-acustica">
            2. Privacidad Acústica Absoluta: La Base de la Confidencialidad
          </h3>
          <p>
            En el coaching, los coachees comparten metas profesionales, desafíos
            personales, vulnerabilidades y procesos de transformación profundos.
            He trabajado en espacios donde se escuchaban fragmentos de otras
            conversaciones desde la sala de espera. Eso es inaceptable para
            cualquier coach profesional.{" "}
            <strong>
              En nuestro consultorio en Parque Rodó, la privacidad acústica fue
              una obsesión desde el diseño.
            </strong>{" "}
            No solo aislamos acústicamente cada consultorio, sino que instalamos
            música ambiental en la sala de espera para enmascarar cualquier
            sonido residual.
          </p>
          <p>
            <strong>Resultado:</strong> Confidencialidad absoluta en tu
            consultorio de coaching. Tus coachees pueden hablar con total
            libertad, explorar temas sensibles y trabajar en profundidad,
            sabiendo que nadie más los escuchará. Esto es crítico para coaching
            ejecutivo, donde se discuten estrategias de carrera, conflictos
            organizacionales o decisiones de liderazgo.
          </p>
          <div className="my-8 flex justify-center">
            <Image
              src={salaespera1}
              alt="Sala de espera PISAMA con música ambiental"
              className="rounded-xl shadow-2xl h-auto"
              width={400}
            />
          </div>

          <h3 id="funcionalidad">
            3. Funcionalidad Sin Preocupaciones: Cada Detalle Cubierto
          </h3>
          <p>
            <strong>
              En Espacio PISAMA, todo está como debe estar, siempre.
            </strong>{" "}
            La iluminación es perfecta para sesiones largas, la limpieza es
            impecable, la conexión a internet es rápida y estable (ideal si
            necesitas compartir pantalla o acceder a herramientas digitales de
            coaching), y la temperatura es agradable todo el año gracias al aire
            acondicionado. No tenés que pensar en nada de esto. El espacio
            trabaja para vos, no al revés.
          </p>
          <div className="my-8 flex justify-center">
            <Image
              src={consultorio3}
              alt="Consultorio para coaches en impecables condiciones"
              className="rounded-xl shadow-2xl h-auto"
              width={650}
            />
          </div>
          <CtaBox />

          {/* --- SECCIÓN 3: LA LOGÍSTICA OCULTA --- */}
          <h2 id="logistica">
            Sistema de Reservas y Logística para Alquiler por Hora de
            Consultorios de Coaching
          </h2>
          <p>
            Más allá del espacio físico del consultorio, la gestión del día a
            día en tu práctica de coaching puede convertirse en una fuente
            constante de estrés. Por eso desarrollamos soluciones específicas
            para coaches que alquilan por hora:
          </p>

          <h3 id="sistema-reservas">
            Sistema de Reservas Online en Tiempo Real: Adiós al Caos
          </h3>
          <p>
            Al inicio de mi carrera profesional, viví la pesadilla de la
            coordinación por WhatsApp para reservar espacios. Consultar
            disponibilidad, esperar respuesta, confirmar con el coachee, y al
            volver a contactar descubrir que la hora ya no estaba disponible.
            Tener que cambiar un horario ya confirmado proyecta una imagen poco
            profesional y desorganizada. Es un desgaste innecesario que
            resolvimos con nuestra plataforma de alquiler por hora online en
            tiempo real.
          </p>
          <p>
            <Link
              href="/disponibilidad"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              Ves la disponibilidad en tiempo real
            </Link>
            , reservas al instante, y confirmas con tu coachee sin riesgo de
            sorpresas. Es simple, rápido y profesional. Este mismo{" "}
            <Link
              href="/app-de-reservas"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              sistema de reservas online
            </Link>{" "}
            lo utilizan también{" "}
            <Link
              href="/soluciones/psicologos"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              psicólogos
            </Link>
            ,{" "}
            <Link
              href="/soluciones/nutricionistas"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              nutricionistas
            </Link>{" "}
            y{" "}
            <Link
              href="/soluciones/terapeutas-alternativos"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              terapeutas alternativos
            </Link>{" "}
            que comparten nuestro espacio.
          </p>
          <div className="my-8 flex justify-center">
            <Image
              src={appReservas}
              alt="Plataforma de reservas online de Espacio PISAMA"
              className="rounded-xl shadow-2xl h-auto"
              width={650}
            />
          </div>

          <h3 id="ubicacion">
            Ubicación Estratégica del Consultorio: Parque Rodó, Montevideo
          </h3>
          <p>
            Nuestro consultorio para coaches está en{" "}
            <strong>Parque Rodó, Montevideo</strong>, cerca de avenidas
            principales (Blvr. Artigas, Blvr. España, Rivera, 18 de Julio) con
            excelente acceso en ómnibus. Estamos ubicados en el corazón de
            Montevideo, muy cercano a barrios como Pocitos, Cordón, Parque
            Battle, Punta Carretas y Centro. Una ubicación ideal para coaches
            que buscan un espacio profesional accesible para sus coachees.
          </p>
          <p>
            Y algo clave en Montevideo: estamos en una zona de estacionamiento
            no tarifado, donde siempre se encuentra lugar para estacionar.
            Eliminamos una barrera importante para la puntualidad y asistencia
            de tus coachees, especialmente en coaching ejecutivo donde muchos
            clientes vienen en auto.
          </p>
          <div className="my-8 flex justify-center">
            <Image
              src={fachada1}
              alt="Fachada de PISAMA en Parque Rodó, Montevideo"
              className="rounded-xl shadow-2xl h-auto"
              width={350}
            />
          </div>

          <h3 id="comunidad-profesional">
            Comunidad Profesional Respetuosa: Baja Rotación, Alta Calidad
          </h3>
          <p>
            Otro factor de estrés son los colegas impuntuales que se pasan de
            horario. He tenido que interrumpir procesos delicados porque el
            profesional anterior no salía a tiempo, generando una situación
            incómoda frente a mi coachee que esperaba. Por eso, en Espacio
            Pisama, fomento una comunidad de profesionales estable y respetuosa.
            Nuestro{" "}
            <Link
              href="/precios"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              sistema de descuentos por cantidad de horas utilizadas por semana
            </Link>{" "}
            busca fidelizar a colegas comprometidos que valoren tanto su tiempo
            como el de los demás. Prefiero tener una baja rotación y un ambiente
            de trabajo armónico, como explico en{" "}
            <Link
              href="/sobre-nosotros"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              nuestra filosofía
            </Link>
            .
          </p>

          {/* --- SECCIÓN 4: BARRERAS --- */}
          <h2 id="barreras">
            En Espacio PISAMA Eliminamos todas las Barreras del Coaching
            Presencial
          </h2>
          <p>
            Si alguna vez te preocupaste por alguno de estos problemas, Espacio
            PISAMA los resuelve todos:
          </p>
          <ul>
            <li>
              <strong>¿Costos fijos prohibitivos?</strong> Con el alquiler por
              hora solo pagas lo que usas. Sin gastos comunes, sin servicios,
              sin contratos anuales.
            </li>
            <li>
              <strong>¿Privacidad dudosa?</strong> En Espacio PISAMA es
              absoluta, garantizada por aislación acústica profesional y música
              ambiental.
            </li>
            <li>
              <strong>¿Reservas caóticas?</strong> Con nuestro{" "}
              <Link
                href="/app-de-reservas"
                className="text-secondary-500 font-semibold hover:text-secondary-400"
              >
                sistema de reservas online en tiempo real
              </Link>
              , reservas en segundos, sin intermediarios ni mensajes de
              WhatsApp.
            </li>
            <li>
              <strong>¿Ambiente poco profesional?</strong>{" "}
              <Link
                href="/consultorios"
                className="text-secondary-500 font-semibold hover:text-secondary-400"
              >
                Cada consultorio
              </Link>{" "}
              está impecable, siempre. Decoración cuidada, limpieza garantizada,
              mobiliario profesional.
            </li>
            <li>
              <strong>¿Falta de flexibilidad?</strong> Reservas por hora, día o
              semana. Te adaptas a tu agenda real, no al revés.
            </li>
            <li>
              <strong>¿Mala ubicación?</strong> Parque Rodó, acceso fácil en
              ómnibus, estacionamiento sin problemas.
            </li>
          </ul>

          {/* --- SECCIÓN 5: CONCLUSIÓN --- */}
          <h2 id="conclusion">
            Encontrá tu Consultorio Ideal para Coaching en Montevideo
          </h2>
          <p>
            Al crear Espacio PISAMA intenté resolver todos los problemas que
            viví al buscar espacios profesionales para coaching.{" "}
            <strong>
              No es el espacio más barato ni el más lujoso. Es el que funciona.
            </strong>{" "}
            Es un contenedor profesional real: un pilar estable que te da
            tranquilidad y confianza para dedicarte por completo a acompañar el
            proceso de transformación de tus coachees.
          </p>
          <p className="pb-8">
            Si buscas un lugar donde simplemente puedas ser coach, sin
            preocupaciones logísticas ni sorpresas desagradables, ya sea que
            hagas coaching ontológico, coaching ejecutivo o life coaching,{" "}
            <strong>Espacio PISAMA es tu lugar</strong>. Te invito a{" "}
            <Link
              href="/contacto"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              conocerlo y agendar una visita
            </Link>
            .
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
          <ConsultorioCoachesFaqSection />
        </article>
        <RelatedSolutions
          currentProfession="coaches"
          solutions={allSolutions}
        />
      </main>
      <CtaSection
        title="Reservá tu Consultorio para Coaching en Montevideo Hoy"
        description="Alquiler por hora en Parque Rodó desde $200. Privacidad acústica absoluta, ambiente diseñado para coaching profesional y sistema de reservas online en tiempo real. Todo lo que necesitas para tu práctica de coaching ontológico, ejecutivo o personal sin compromiso mensual. Encontrá tu horario ideal ahora."
        buttonText="Ver Disponibilidad Ahora"
        buttonLink="/disponibilidad"
      />
    </>
  );
}
