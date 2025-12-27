import { Button } from "@heroui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Indice from "@/components/blog/Indice";
import CtaSection from "@/components/homepage/CtaSection";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/components/seo/ServiceSchema";
import HowItWorks from "@/components/soluciones/HowItWorks";
import MidCta from "@/components/soluciones/MidCta";
import PricingPreview from "@/components/soluciones/PricingPreview";
import QuickBenefits from "@/components/soluciones/QuickBenefits";
import RelatedSolutions from "@/components/soluciones/RelatedSolutions";
import SectionDivider from "@/components/soluciones/SectionDivider";
import SolutionHero from "@/components/soluciones/SolutionHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/config/site";
import appReservas from "@/public/images/blog/app-calendario-diario.webp";
import consultorio3 from "@/public/images/consultorio3-1.webp";
import consultorio1 from "@/public/images/consultorio5-1.webp";
import fachada1 from "@/public/images/fachada-1.1.webp";
import salaespera1 from "@/public/images/salaespera-1.webp";
import {
  locationKeywords,
  professionKeywordVariants,
} from "@/src/extendedKeywords";
import { allSolutions } from "@/src/solucionesData";
import { getSolutionLandingConfig } from "@/src/solutionLandingData";

import ConsultorioPsicologosFaqSection from "./ConsultorioPsicologosFaqSection";
import ImageGallery from "./ImageGallery";

// --- SEO: Metadatos de la Página ---
export const metadata: Metadata = {
  title:
    "Alquiler de Consultorios para Psicólogos por Hora en Parque Rodó, Montevideo | PISAMA",
  description:
    "Consultorio psicológico por hora en Parque Rodó desde $200. Privacidad acústica absoluta, reservas online en tiempo real y ambiente diseñado por psicólogos. Sin compromiso mensual.",
  keywords: [
    "alquiler consultorios psicólogos montevideo",
    "consultorio psicológico parque rodó",
    "consultorios por hora montevideo psicología",
    "alquiler consultorio psicólogo por hora",
    "consultorio privacidad acústica montevideo",
    "alquiler consultorio terapia montevideo",
    "consultorio psicología parque rodó",
    "espacio terapéutico montevideo",
    "reserva online consultorios psicología",
    "alquiler sala terapia montevideo",
    "consultorio psicólogo sin compromiso",
    "consultorio profesional psicólogos montevideo",
    ...locationKeywords,
    ...professionKeywordVariants.psicologos,
  ],
  alternates: {
    canonical: "/soluciones/psicologos",
  },
  openGraph: {
    title: "Alquiler de Consultorios para Psicólogos en Montevideo | PISAMA",
    description:
      "Consultorio psicológico por hora con privacidad acústica absoluta en Parque Rodó. Desde $200/hora sin compromiso mensual.",
    url: "https://www.pisama.uy/soluciones/psicologos",
    siteName: "Espacio Pisama",
    locale: "es_UY",
    type: "article",
    images: [
      {
        url: "https://www.pisama.uy/images/consultorio3-1.webp",
        width: 1200,
        height: 630,
        alt: "Consultorio profesional para psicólogos en Parque Rodó, Montevideo",
      },
    ],
  },
};

const CtaBox = () => (
  <div className="my-10 rounded-2xl bg-content3/80 shadow-xl p-4 text-center border-1 border-yellow-400 hover:scale-103 transition-transform duration-300">
    <h3 className="font-display text-3xl font-bold text-primary-500 mt-8!">
      ¿Listo para reservar tu consultorio psicológico en Parque Rodó?
    </h3>
    <p className="mx-auto mt-4 max-w-xl font-sans text-foreground/80">
      Alquiler por hora desde $200 en Montevideo. Privacidad acústica absoluta,
      reservas online en tiempo real y ambiente diseñado por psicólogos. Sin
      compromiso mensual.
    </p>
    <Button
      as={Link}
      href="/disponibilidad"
      className="mb-4 bg-secondary-500 font-display font-semibold text-white! no-underline"
      size="lg"
      variant="flat"
    >
      Ver Disponibilidad
    </Button>
  </div>
);

// --- PÁGINA PRINCIPAL QUE ENSAMBLA TODO ---
export default function ArticuloPsicologosPage(): React.JSX.Element {
  // Obtener configuración de landing para psicólogos
  const landingConfig = getSolutionLandingConfig("psicologos")!;

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
      name: "Para Psicólogos",
      url: `${siteConfig.url}/soluciones/psicologos`,
    },
  ];

  const sections = [
    {
      title: "El Consultorio como Encuadre",
      id: "encuadre",
    },
    {
      title: "Los 3 Pilares de Espacio PISAMA",
      id: "pilares",
      subsections: [
        {
          title: "1. Ambientación Profesional",
          id: "ambiente-profesional",
        },
        {
          title: "2. Privacidad Acústica",
          id: "privacidad-acustica",
        },
        {
          title: "3. Funcionalidad",
          id: "funcionalidad",
        },
      ],
    },
    {
      title: "La Logística que Resolvimos",
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
          title: "Comunidad de Colegas",
          id: "comunidad-colegas",
        },
      ],
    },
    {
      title: "Eliminamos las Banderas Rojas",
      id: "banderas-rojas",
    },
    {
      title: "Conclusión",
      id: "conclusion",
    },
  ];

  // Schema.org Article para SEO
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Alquiler de Consultorios para Psicólogos por Hora en Montevideo",
    description:
      "Guía completa sobre alquiler de consultorios psicológicos en Parque Rodó. Privacidad acústica, reservas online y precios flexibles.",
    image: [
      "https://www.pisama.uy/images/consultorio1-1.webp",
      "https://www.pisama.uy/images/salaespera-1.webp",
    ],
    datePublished: "2024-09-15",
    dateModified: new Date().toISOString().split("T")[0],
    author: {
      "@type": "Person",
      name: "Gastón Campo",
      url: "https://www.pisama.uy/sobre-nosotros",
    },
    publisher: {
      "@type": "Organization",
      name: "Espacio PISAMA",
      logo: {
        "@type": "ImageObject",
        url: "https://www.pisama.uy/images/Logo-Espacio-Pisama-Texturado-300px.png",
      },
    },
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Alquiler de Consultorio para Psicólogos"
        serviceDescription="Consultorio psicológico por hora en Parque Rodó, Montevideo. Privacidad acústica absoluta, ambiente diseñado por psicólogos y reservas online en tiempo real para tu práctica privada."
        serviceType="Alquiler de Consultorios para Psicólogos"
        url={`${siteConfig.url}/soluciones/psicologos`}
        image={[
          "https://www.pisama.uy/images/consultorio1-1.webp",
          "https://www.pisama.uy/images/consultorio3-1.webp",
          "https://www.pisama.uy/images/salaespera-1.webp",
        ]}
        areaServed="Montevideo, Uruguay"
        offers={[
          {
            name: "Consultorio Estándar",
            description: "Consultorio profesional para psicología por hora",
            price: "200",
            priceCurrency: "UYU",
          },
          {
            name: "Consultorio Premium",
            description: "Consultorio amplio Premium para psicología por hora",
            price: "250",
            priceCurrency: "UYU",
          },
        ]}
        availableFeatures={[
          "Privacidad acústica",
          "Ambiente diseñado por psicólogos",
          "Reservas online en tiempo real",
          "Encuadre terapéutico estable",
          "Ubicación estratégica en Parque Rodó",
          "Aire acondicionado",
          "Sala de espera con música ambiental",
          "Limpieza impecable garantizada",
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Breadcrumbs */}
      <section className="bg-content4/60 w-full border-b-1 border-content4">
        <div className="container mx-auto max-w-7xl px-4 py-3">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </section>

      {/* ===== LANDING SECTION: Para visitantes nuevos ===== */}

      {/* Hero Section */}
      <SolutionHero
        title={landingConfig.heroTitle}
        highlightedText={landingConfig.heroHighlight}
        subtitle={landingConfig.heroSubtitle}
        heroImage={landingConfig.heroImage}
        heroImageAlt={landingConfig.heroImageAlt}
        quickStats={landingConfig.quickStats}
      />

      {/* Quick Benefits */}
      <QuickBenefits
        title={landingConfig.benefitsTitle}
        highlightedWord={landingConfig.benefitsHighlight}
        benefits={landingConfig.benefits}
      />

      {/* Image Gallery + Video Tour */}
      <section className="bg-content2 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-primary md:text-4xl">
            Conocé Nuestros <span className="text-secondary">Consultorios</span>
          </h2>
          <ImageGallery />

          {/* Video Tour */}
          <div className="mt-12">
            <h3 className="mb-6 text-center font-display text-2xl font-bold text-primary">
              Recorrida por el <span className="text-secondary">Espacio</span>
            </h3>
            <div className="aspect-video max-w-3xl mx-auto">
              <iframe
                className="rounded-xl shadow-xl w-full h-full"
                src="https://www.youtube.com/embed/_0-Eh-JvQys"
                title="Recorrida por Espacio Pisama - Consultorios para psicólogos en Montevideo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Pricing Preview */}
      <PricingPreview />

      {/* Mid CTA */}
      <MidCta
        title={landingConfig.midCtaTitle}
        highlightedText={landingConfig.midCtaHighlight}
      />

      {/* Divider antes del contenido SEO */}
      <SectionDivider
        text="Conocé más sobre nuestra propuesta para psicólogos"
        anchorId="contenido-detallado"
      />

      {/* ===== CONTENIDO SEO: Artículo completo para posicionamiento ===== */}
      <main id="contenido-detallado" className="bg-content2 pt-10">
        <article
          className="prose prose-lg mx-auto max-w-4xl px-4
                     prose-headings:font-display prose-headings:text-primary-500
                     prose-h2:text-3xl md:prose-h2:text-4xl
                     prose-p:font-sans prose-p:text-foreground/90
                     prose-strong:text-primary-500
                     prose-a:text-secondary-500 prose-a:font-semibold hover:prose-a:text-secondary-400
                     prose-blockquote:border-secondary-500 prose-blockquote:text-foreground/70
                     prose-li:font-sans prose-li:text-foreground/90
                     prose-img:mt-0"
        >
          {/* --- TÍTULO Y INTRODUCCIÓN --- */}
          <h2 className="text-3xl md:text-4xl">
            Alquiler de Consultorios para Psicólogos por Hora en Montevideo: La
            Solución para Trabajar Tranquilo
          </h2>
          <Indice sections={sections} />

          <p className="mt-12">
            Mi nombre es Gastón y soy psicólogo, sé exactamente lo que significa
            buscar un consultorio psicológico en alquiler por hora en
            Montevideo. He pasado por las frustraciones, las incomodidades y
            todas esas 🚩 <span className="text-red-400">banderas rojas</span>{" "}
            que te hacen perder tiempo y afectan tu práctica privada
            profesional.
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
            por hora en Parque Rodó diseñado específicamente para eliminar todos
            esos problemas. No es solo un lugar más para alquilar. Es la
            solución que yo hubiese querido tener cuando empecé a trabajar como
            psicólogo, y que ahora pongo a disposición de colegas que buscan
            trabajar con tranquilidad y profesionalismo.
          </p>
          {/* --- SECCIÓN 1: EL ENCUADRE --- */}
          <h3 id="encuadre">
            El Consultorio Psicológico como Encuadre Terapéutico en Montevideo
          </h3>
          <p>
            En la psicología clínica, cuando hablamos del &quot;encuadre
            terapéutico&quot;, pensamos en el horario, los honorarios, nuestro
            rol. Pero el espacio físico del consultorio psicológico es el
            elemento más tangible de ese encuadre, y en Espacio PISAMA lo
            tomamos muy en serio para cada profesional de la salud mental.
          </p>
          <div className="my-8 flex justify-center">
            <Image
              src={consultorio1}
              alt="Consultorio PISAMA - Espacio profesional para psicólogos"
              className="rounded-xl shadow-2xl h-auto"
              width={650}
            />
          </div>
          <blockquote>
            Un consultorio predecible y profesional no solo le da seguridad al
            paciente; te la da a vos.
          </blockquote>
          <p>
            En Espacio PISAMA diseñamos{" "}
            <Link
              href="/consultorios"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              cada consultorio
            </Link>{" "}
            para que vos puedas liberarte de preocupaciones logísticas y
            enfocarte exclusivamente en el paciente que tenés adelante. Cuando
            el encuadre es estable, tu atención no se desvía, y eso potencia tu
            trabajo.
          </p>
          {/* --- SECCIÓN 2: LOS 3 PILARES --- */}
          <h3 id="pilares">
            Los 3 Pilares del Alquiler de Consultorios para Psicólogos en Parque
            Rodó
          </h3>
          <p>
            Hay tres factores que prioricé al diseñar este espacio de alquiler
            de consultorios para psicólogos en Parque Rodó, porque sé que son
            esenciales para nuestra práctica psicológica privada:
          </p>
          <h4 id="ambiente-profesional">
            1. Ambientación Profesional: Diseñado por Psicólogos, para
            Psicólogos
          </h4>
          <p>
            He tenido que alquilar consultorios psicológicos con sillones rotos
            o llegar a barrer antes de que llegara mi paciente. Eso te saca
            completamente de tu rol como profesional de la salud mental.{" "}
            <strong>
              Mi esposa también es psicóloga, y juntos diseñamos cada rincón de
              nuestro espacio terapéutico en Espacio PISAMA.
            </strong>
          </p>
          <p>
            Buscamos un estilo minimalista pero cálido, profesional y acogedor.
            Un lugar que invite a la calma desde que cruzás la puerta. Los
            muebles, la iluminación, los colores: todo está pensado para generar
            el ambiente terapéutico ideal.
          </p>

          <h4 id="privacidad-acustica">
            2. Privacidad Acústica Absoluta en Consultorios Psicológicos
          </h4>
          <p>
            He trabajado en consultorios para psicólogos donde se escuchaban
            fragmentos de otras sesiones terapéuticas en la sala de espera. Eso
            es inaceptable para cualquier profesional de la psicología.{" "}
            <strong>
              En nuestro consultorio en Parque Rodó, la privacidad acústica fue
              mi obsesión desde el inicio.
            </strong>{" "}
            No solo aislamos acústicamente cada consultorio psicológico, sino
            que instalamos música ambiental en la sala de espera para enmascarar
            cualquier sonido residual.
          </p>
          <p>
            <strong>Resultado:</strong> Confidencialidad absoluta en tu
            consultorio psicológico. Tus pacientes pueden hablar con total
            libertad durante las sesiones de psicoterapia, sabiendo que nadie
            más los escuchará.
          </p>
          <div className="my-8 flex justify-center">
            <Image
              src={salaespera1}
              alt="Sala de espera PISAMA con música ambiental"
              className="rounded-xl shadow-2xl h-auto"
              width={400}
            />
          </div>

          <h4 id="funcionalidad">
            3. Funcionalidad: Cada Detalle Cubierto, Siempre
          </h4>
          <p>
            <strong>
              En Espacio PISAMA, todo está como debe estar, siempre.
            </strong>{" "}
            Hay pañuelos a mano, la iluminación es perfecta y la limpieza es
            impecable. La temperatura es agradable todo el año, ya que todos los
            consultorios cuentan con aire acondicionado. No tenés que pensar en
            nada de esto. El espacio trabaja para vos, no al revés.
          </p>
          <div className="my-8 flex justify-center">
            <Image
              src={consultorio3}
              alt="Consultorio psicológico en impecables condiciones"
              className="rounded-xl shadow-2xl h-auto"
              width={650}
            />
          </div>
          <CtaBox />
          {/* --- SECCIÓN 3: LA LOGÍSTICA OCULTA --- */}
          <h3 id="logistica">
            Sistema de Reservas y Logística para Alquiler por Hora de
            Consultorios
          </h3>
          <p>
            Más allá del espacio físico del consultorio, la gestión del día a
            día en tu práctica privada puede convertirse en una fuente constante
            de estrés. Por eso desarrollamos soluciones específicas para
            psicólogos que alquilan por hora:
          </p>
          <h4 id="sistema-reservas">
            Sistema de Reservas Online en Tiempo Real: Adiós al Caos
          </h4>
          <p>
            Al principio de mi carrera como psicólogo, viví la pesadilla de la
            coordinación por mensaje para reservar consultorios. Consultar
            disponibilidad, esperar respuesta, confirmar con el paciente y, a
            veces, al volver a contactar, descubrir que la hora ya no estaba
            disponible en el consultorio psicológico. Tener que cambiar un
            horario ya confirmado proyecta una imagen poco profesional y
            desorganizada. Es un desgaste innecesario que resolvimos con nuestra
            plataforma de alquiler por hora online en tiempo real.
          </p>
          <p>
            <Link
              href="/disponibilidad"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              Ves la disponibilidad en tiempo real
            </Link>
            , reservás al instante, y confirmás con tu paciente sin riesgo de
            sorpresas. Es simple, rápido y profesional. Este mismo{" "}
            <Link
              href="/app-de-reservas"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              sistema de reservas online
            </Link>{" "}
            lo utilizan también{" "}
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
          <h4 id="ubicacion">
            Ubicación Estratégica del Consultorio: Parque Rodó, Montevideo
          </h4>
          <p>
            Nuestro consultorio para psicólogos está en{" "}
            <strong>Parque Rodó, Montevideo</strong>, cerca de avenidas
            principales (Blvr. Artigas, Blvr. España, Rivera, 18 de Julio) con
            excelente acceso en ómnibus. Estamos ubicados en el corazón de
            Montevideo, muy cercano a barrios como Pocitos, Cordón, Parque
            Battle, Punta Carretas y Centro. Una ubicación ideal para
            profesionales que buscan un espacio terapéutico accesible.
          </p>
          <p>
            Y algo clave en Montevideo: estamos en una zona de estacionamiento
            no tarifado, donde siempre se encuentra lugar para estacionar.
            Eliminamos una barrera importante para la adherencia de tus
            pacientes.
          </p>
          <div className="my-8 flex justify-center">
            <Image
              src={fachada1}
              alt="Fachada de PISAMA en Parque Rodó, Montevideo"
              className="rounded-xl shadow-2xl h-auto"
              width={350}
            />
          </div>
          <h4 id="comunidad-colegas">
            Comunidad de Colegas Respetuosos: Baja Rotación, Alta Calidad
          </h4>
          <p>
            Otro factor de estrés son los colegas impuntuales. He tenido que
            golpear puertas para que un profesional saliera porque ya era mi
            hora, generando una situación de incomodidad terrible frente a mi
            paciente que esperaba. Por eso, en Espacio Pisama, fomento una
            comunidad de profesionales estable y respetuosa. Nuestro{" "}
            <Link
              href="/precios"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              sistema de descuentos por cantidad de horas utilizadas por semana
            </Link>
            , es una búsqueda de fidelizar a colegas comprometidos que valoren
            tanto su tiempo como el de los demás. Prefiero tener una baja
            rotación y un ambiente de trabajo armónico, como explico en{" "}
            <Link
              href="/sobre-nosotros"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              nuestra filosofía
            </Link>
            .
          </p>
          {/* --- SECCIÓN 4: BANDERAS ROJAS --- */}
          <h3 id="banderas-rojas">
            En Espacio PISAMA Eliminamos todas las ⚠️{" "}
            <span className="text-red-400">Banderas Rojas </span>
            🚩 al momento de Alquilar un Consultorio Psicológico
          </h3>
          <p>
            Si alguna vez te preocupaste por alguno de estos problemas, Espacio
            PISAMA los resuelve todos:
          </p>
          <ul>
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
              , reservás en segundos, sin intermediarios.
            </li>
            <li>
              <strong>¿Ambiente desprolijo?</strong>{" "}
              <Link
                href="/consultorios"
                className="text-secondary-500 font-semibold hover:text-secondary-400"
              >
                Cada consultorio
              </Link>{" "}
              está impecable, siempre. Decoración cuidada, limpieza garantizada.
            </li>
            <li>
              <strong>¿Colegas impuntuales?</strong> Fomentamos una comunidad
              respetuosa y estable. La impuntualidad no es tolerada.
            </li>

            <li>
              <strong>¿Mala ubicación?</strong> Parque Rodó, acceso fácil en
              ómnibus, estacionamiento sin problemas.
            </li>
          </ul>
          {/* --- SECCIÓN 5: CONCLUSIÓN --- */}
          <h3 id="conclusion">
            Encontrá tu Consultorio Ideal para Psicólogos en Montevideo
          </h3>
          <p>
            Al crear Espacio PISAMA intenté resolver todos los problemas que
            viví cuando tuve que alquilar un consultorio como psicólogo.{" "}
            <strong>
              No es el espacio más barato ni el más lujoso. Es el que funciona.
            </strong>{" "}
            Es un &quot;encuadre fijo&quot; real: un pilar estable que te da
            tranquilidad y confianza para dedicarte por completo a tu paciente.
          </p>
          <p className="pb-8">
            Si buscás un lugar donde simplemente puedas ser psicólogo, sin
            preocupaciones logísticas ni sorpresas desagradables,{" "}
            <strong>Espacio PISAMA es tu lugar</strong>. Te invito a{" "}
            <Link
              href="/contacto"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              conocerlo y agendar una visita
            </Link>
            .
          </p>
          {/* --- SECCIÓN 6: FAQ --- */}
          <ConsultorioPsicologosFaqSection />
        </article>
        <RelatedSolutions
          currentProfession="psicologos"
          solutions={allSolutions}
        />
      </main>
      <CtaSection
        title="Reservá tu Consultorio para Psicólogos en Montevideo Hoy"
        description="Alquiler por hora en Parque Rodó desde $200. Privacidad acústica absoluta, ambiente diseñado por psicólogos y sistema de reservas online en tiempo real. Todo lo que necesitás para tu práctica privada sin compromiso mensual. Encontrá tu horario ideal ahora."
        buttonText="Ver Disponibilidad Ahora"
        buttonLink="/disponibilidad"
      />
    </>
  );
}
