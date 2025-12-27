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
import {
  locationKeywords,
  professionKeywordVariants,
} from "@/src/extendedKeywords";
import { allSolutions } from "@/src/solucionesData";
import { getSolutionLandingConfig } from "@/src/solutionLandingData";

import ImageGallery from "./ImageGallery";

// --- SEO: Metadatos de la Página ---
export const metadata: Metadata = {
  title:
    "Alquiler de Consultorios para Terapias Alternativas en Montevideo | Por Hora en Parque Rodó | PISAMA",
  description:
    "Consultorio para terapeutas alternativos en Parque Rodó, Montevideo. Camilla disponible, ambiente armónico y reservas online. Alquiler flexible desde $200/hora para terapias holísticas.",
  keywords: [
    "alquiler consultorios terapias alternativas montevideo",
    "consultorio terapeutas alternativos parque rodó",
    "consultorios con camilla montevideo",
    "alquiler salas terapeutas holísticos",
    "consultorio reiki montevideo",
    "espacio masajes terapéuticos",
    "consultorio acupuntura montevideo",
    "alquiler consultorio por hora montevideo",
    "espacio terapias holísticas",
    "consultorio medicina alternativa",
    "sala para quiropráctico",
    "espacio reflexología montevideo",
    ...locationKeywords,
    ...professionKeywordVariants["terapeutas-alternativos"],
  ],
  alternates: {
    canonical: "/soluciones/terapeutas-alternativos",
  },
  openGraph: {
    title:
      "Alquiler de Consultorios para Terapias Alternativas en Montevideo | PISAMA",
    description:
      "Consultorio con camilla disponible para terapeutas alternativos en Parque Rodó. Ambiente armónico y reservas online desde $200/hora.",
    url: "https://www.pisama.uy/soluciones/terapeutas-alternativos",
    siteName: "Espacio Pisama",
    locale: "es_UY",
    type: "article",
    images: [
      {
        url: "https://www.pisama.uy/images/consultorio3-1.webp",
        width: 1200,
        height: 630,
        alt: "Consultorio para terapias alternativas con camilla en Montevideo",
      },
    ],
  },
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
      ¿Listo para encontrar tu consultorio ideal para terapias holísticas?
    </h3>
    <p className="mx-auto mt-4 max-w-xl font-sans text-foreground/80">
      Alquiler por hora desde $200 en Parque Rodó. Con camilla disponible,
      ambiente armónico y sistema de reservas online. Sin compromiso mensual.
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
export default function ArticuloTerapiasAlternativasPage(): React.JSX.Element {
  // Obtener configuración de landing para terapeutas alternativos
  const landingConfig = getSolutionLandingConfig("terapeutas-alternativos")!;

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
      name: "Para Terapeutas Alternativos",
      url: `${siteConfig.url}/soluciones/terapeutas-alternativos`,
    },
  ];

  // Schema.org Article para SEO
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Alquiler de Consultorios para Terapias Alternativas en Montevideo",
    description:
      "Espacio para terapeutas holísticos en Parque Rodó. Camilla disponible, ambiente armónico y flexibilidad total.",
    image: ["https://www.pisama.uy/images/consultorio3-1.webp"],
    datePublished: "2024-10-20",
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
        serviceName="Alquiler de Consultorio para Terapeutas Alternativos"
        serviceDescription="Consultorio con camilla para terapeutas alternativos en Parque Rodó, Montevideo. Ambiente armónico y cálido, flexibilidad total de horarios y reservas online para terapias holísticas."
        serviceType="Alquiler de Consultorios para Terapias Alternativas"
        url={`${siteConfig.url}/soluciones/terapeutas-alternativos`}
        image={[
          "https://www.pisama.uy/images/consultorio3-1.webp",
          "https://www.pisama.uy/images/consultorio5-1.webp",
        ]}
        areaServed="Montevideo, Uruguay"
        offers={[
          {
            name: "Consultorio Estándar",
            description: "Consultorio para terapias alternativas por hora",
            price: "200",
            priceCurrency: "UYU",
          },
          {
            name: "Consultorio Premium con Camilla",
            description:
              "Consultorio amplio con camilla para terapias holísticas",
            price: "250",
            priceCurrency: "UYU",
          },
        ]}
        availableFeatures={[
          "Camilla profesional disponible",
          "Ambiente armónico y cálido",
          "Horarios flexibles (7:00 a 23:00)",
          "Excelente energía del espacio",
          "Reservas online en tiempo real",
          "Ubicación en Parque Rodó",
          "Iluminación natural",
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
            <h3 className="mb-8 text-center font-display text-3xl font-bold text-primary">
              Recorrida por el <span className="text-secondary">Espacio</span>
            </h3>
            <div className="aspect-video max-w-3xl mx-auto">
              <iframe
                className="rounded-xl shadow-xl w-full h-full"
                src="https://www.youtube.com/embed/_0-Eh-JvQys"
                title="Recorrida por Espacio Pisama - Consultorios para terapias alternativas en Montevideo"
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
        text="Conocé más sobre nuestra propuesta para terapeutas"
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
            Alquiler de Consultorios para Terapias Alternativas en Montevideo:
            Encuentra el Espacio que Vibra Contigo
          </h2>
          <Indice sections={sections} />

          <p className="mt-12" id="introduccion">
            <strong>
              Introducción: más que un espacio, una extensión de tu energía
            </strong>
          </p>
          <p>
            Cuando empecé a dedicarme al{" "}
            <Link
              href="/soluciones"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              alquiler de consultorios
            </Link>{" "}
            para terapias alternativas, entendí algo fundamental: los terapeutas
            no buscan solo cuatro paredes. Buscan un espacio que refleje su
            energía, su propósito y su manera de sanar.
          </p>
          <p>
            En{" "}
            <Link
              href="/"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              Espacio Pisama
            </Link>
            , hemos trabajado con muchos terapeutas alternativos, y todos
            coinciden en algo: la buena energía que se siente en el lugar. Cada
            detalle, desde la acústica hasta la decoración, fue pensado por
            nosotros —dos{" "}
            <Link
              href="/soluciones/psicologos"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              psicólogos
            </Link>{" "}
            que somos los dueños— para crear un entorno cálido, sereno y
            profesional, ideal para terapias holísticas.
          </p>

          {/* --- SECCIÓN 1: POR QUÉ ELEGIR BIEN --- */}
          <h3 id="por-que-elegir-bien">
            ¿Por qué es tan importante elegir bien el consultorio para terapias
            alternativas?
          </h3>
          <p>
            El lugar donde un terapeuta alternativo atiende impacta directamente
            en la experiencia del paciente. Un consultorio para terapias
            holísticas no es solo un ambiente físico; es parte del proceso de
            sanación y transformación energética.
          </p>
          <p>
            He visto cómo muchos terapeutas holísticos llegan contando que
            probaron en otros lugares, pero no se sentían cómodos o no lograban
            conectar con la energía del espacio. Esa sensación cambia cuando
            encuentran un consultorio para terapias alternativas que vibra con
            su propósito y práctica terapéutica.
          </p>
          <p>
            Por eso, el espacio terapéutico es clave para profesionales de
            reiki, acupuntura, masajes terapéuticos o cualquier terapia
            alternativa: debe tener armonía, privacidad, buena luz, decoración
            equilibrada y un ambiente que invite al silencio interior y la
            conexión profunda.
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
          <h3 id="claves-alquiler">
            8 Claves para el Alquiler de Consultorios para Terapias Alternativas
            en Montevideo
          </h3>

          <h4 id="ubicacion">
            1. Ubicación estratégica del consultorio: Parque Rodó, Montevideo
          </h4>
          <p>
            La ubicación no solo influye en la accesibilidad, sino también en la
            percepción profesional del terapeuta. En nuestro caso,{" "}
            <Link
              href="/consultorios"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              nuestros consultorios
            </Link>{" "}
            están en Parque Rodó, una zona céntrica, tranquila y valorada de
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

          <h4 id="energia-ambiente">
            2. Energía y ambiente: el poder del espacio en el proceso
            terapéutico
          </h4>
          <p>
            Uno de los mayores desafíos al buscar alquiler de consultorio por
            hora en Montevideo para un terapeuta alternativo es no encontrar un
            espacio con la energía adecuada y el ambiente armónico necesario
            para las terapias holísticas.
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

          <h4 id="flexibilidad-horaria">
            3. Flexibilidad horaria: libertad para atender cuando lo necesites
          </h4>
          <p>
            Uno de los grandes desafíos de los terapeutas holísticos es
            encontrar un consultorio con alquiler por hora que se adapte a sus
            horarios variables. Algunos profesionales de terapias alternativas
            atienden temprano, otros por la noche o los fines de semana.
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

          <h4 id="reservas-online">
            4. Sistema de reservas online y camilla para terapeutas alternativos
          </h4>
          <p>
            La tecnología debe estar al servicio del bienestar. Por eso
            implementamos un{" "}
            <Link
              href="/disponibilidad"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              sistema de reservas online
            </Link>{" "}
            que permite ver disponibilidad en tiempo real y reservar fácilmente
            el consultorio.
          </p>
          <blockquote>
            “Tenemos un sistema de reservas online en el cual se pueden agendar
            y reservar su consultorio con camilla si es que la necesitan.
            Indicándolo ahí, el sistema automáticamente chequea si está
            disponible la camilla a la hora que ellos necesiten.”
          </blockquote>
          <p>
            Además, contamos con una camilla profesional disponible para
            terapeutas que puede usarse en cualquiera de los seis consultorios.
            Solo hay que indicar su necesidad al momento de reservar tu
            consultorio para terapias alternativas, y el sistema se encarga del
            resto. Esa comodidad tecnológica elimina el clásico dolor de cabeza
            de coordinar horarios por teléfono o esperar confirmaciones
            manuales.
          </p>

          <CtaBox />

          <h4 id="precios-justos">
            5. Alquiler por hora con precios justos y descuentos progresivos
          </h4>
          <p>
            Otro punto de dolor frecuente: los costos altos o alquileres
            mensuales inflexibles. Muchos terapeutas recién comienzan y
            necesitan una opción que no los obligue a comprometerse a largo
            plazo. Por eso ofrecemos{" "}
            <Link
              href="/precios"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              alquiler por hora sin compromiso mensual
            </Link>
            .
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

          <h4 id="comunidad">
            6. Comunidad de terapeutas holísticos en Montevideo
          </h4>
          <p>
            Trabajar solo como terapeuta holístico puede ser un desafío
            emocional. Muchos profesionales de terapias alternativas buscan un
            consultorio compartido donde haya una sensación de comunidad
            terapéutica, aunque cada uno mantenga su independencia y privacidad
            en las sesiones.
          </p>
          <p>
            En Espacio Pisama promovemos esa conexión: los terapeutas comparten
            valores similares, se recomiendan mutuamente y muchas veces surgen
            colaboraciones o intercambios. Al igual que nuestros{" "}
            <Link
              href="/soluciones/nutricionistas"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              nutricionistas
            </Link>{" "}
            y otros profesionales de la salud, no se trata solo de alquilar un
            consultorio, sino de pertenecer a un espacio donde todos vibran en
            la misma frecuencia.
          </p>

          <h4 id="diseno-profesional">
            7. Diseño profesional para potenciar la experiencia terapéutica
          </h4>
          <p>
            Cuando los consultorios para terapias holísticas son pensados por
            terapeutas, la diferencia se nota. Nosotros diseñamos cada sala de
            terapias alternativas con la mirada de quien entiende las
            necesidades del trabajo terapéutico: privacidad absoluta, comodidad
            para el paciente y armonía energética del espacio.
          </p>
          <p>
            Cada rincón fue concebido para que el terapeuta pueda enfocarse en
            lo esencial: acompañar a sus pacientes con serenidad y confianza.
          </p>

          <h4 id="feedback-terapeutas">
            8. Qué sienten los terapeutas cuando encuentran su espacio ideal
          </h4>
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
          <h3 id="conclusion">
            Conclusión: encontrá tu consultorio ideal para terapias holísticas
          </h3>
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
            terapias, te invito a{" "}
            <Link
              href="/contacto"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              conocer Espacio Pisama
            </Link>
            . Porque cuando el espacio vibra contigo, el trabajo fluye de
            verdad.
          </p>
        </article>
        <RelatedSolutions
          currentProfession="terapeutas-alternativos"
          solutions={allSolutions}
        />
      </main>
      <CtaSection
        title="Reservá tu Consultorio para Terapias Alternativas en Montevideo"
        description="Alquiler por hora en Parque Rodó desde $200. Camilla profesional disponible, ambiente con excelente energía y reservas online. Ideal para reiki, acupuntura, masajes terapéuticos y todas las terapias holísticas. Sin compromiso mensual, total flexibilidad."
        buttonText="Ver Disponibilidad Ahora"
        buttonLink="/disponibilidad"
      />
    </>
  );
}
