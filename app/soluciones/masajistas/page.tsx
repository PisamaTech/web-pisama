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

import ConsultorioCamillaFaqSection from "./ConsultorioCamillaFaqSection";
import ImageGallery from "./ImageGallery";

// --- SEO: Metadatos de la Página ---
export const metadata: Metadata = {
  title:
    "Alquiler de Consultorio para Masajistas por Hora en Parque Rodó, Montevideo | PISAMA",
  description:
    "Consultorio para masajistas con camilla profesional incluida desde $250/hora en Parque Rodó. Reserva online en tiempo real. Espacios amplios para masajes terapéuticos, deportivos y relajantes. Sin compromiso mensual.",
  keywords: [
    "alquiler consultorio para masajistas montevideo",
    "consultorio masajes montevideo",
    "alquiler consultorio masajista parque rodó",
    "consultorio con camilla montevideo",
    "espacio masajes terapéuticos montevideo",
    "consultorio masajes deportivos",
    "alquiler consultorio con camilla",
    "consultorio masajista profesional",
    "sala masajes montevideo",
    "alquiler consultorio masajes por hora",
    "consultorio equipado camilla profesional",
    "espacio masajes parque rodó",
    ...locationKeywords,
    ...professionKeywordVariants.masajistas,
  ],
  alternates: {
    canonical: "/soluciones/masajistas",
  },
  openGraph: {
    title: "Alquiler de Consultorio para Masajistas en Montevideo | PISAMA",
    description:
      "Consultorio para masajistas con camilla profesional incluida desde $250/hora. Reserva online en tiempo real en Parque Rodó, Montevideo.",
    url: "https://www.pisama.uy/soluciones/masajistas",
    siteName: "Espacio Pisama",
    locale: "es_UY",
    type: "article",
    images: [
      {
        url: "https://www.pisama.uy/images/consultorio1-1.webp",
        width: 1200,
        height: 630,
        alt: "Consultorio Premium para masajistas con camilla en Parque Rodó, Montevideo",
      },
    ],
  },
};

const CtaBox = () => (
  <div className="my-10 rounded-2xl bg-content3/80 shadow-xl p-4 text-center border-1 border-yellow-400 hover:scale-103 transition-transform duration-300">
    <h3 className="font-display text-3xl font-bold text-primary-500 mt-8!">
      ¿Listo para reservar tu consultorio para masajes en Parque Rodó?
    </h3>
    <p className="mx-auto mt-4 max-w-xl font-sans text-foreground/80">
      Alquiler por hora desde $250 en Montevideo. Camilla profesional incluida,
      5 espacios Premium amplios para masajes terapéuticos y deportivos. Reserva
      online que garantiza tu equipamiento. Sin compromiso mensual.
    </p>
    <Button
      as={Link}
      href="/disponibilidad"
      className="mb-4 bg-secondary-500 font-display font-semibold text-white! no-underline"
      size="lg"
      variant="flat"
    >
      Ver Disponibilidad y Reservar Ahora
    </Button>
  </div>
);

// --- PÁGINA PRINCIPAL ---
export default function ArticuloMasajistasPage(): React.JSX.Element {
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
      name: "Para Masajistas",
      url: `${siteConfig.url}/soluciones/masajistas`,
    },
  ];

  const sections = [
    {
      title: "El Problema de la Camilla Compartida",
      id: "problema",
    },
    {
      title: "Sistema Anti-Conflictos: Tu Camilla Garantizada por Web",
      id: "sistema",
      subsections: [
        {
          title: "Cómo Funciona el Sistema",
          id: "como-funciona",
        },
        {
          title: "5 Consultorios Premium Amplios",
          id: "espacios-amplios",
        },
      ],
    },
    {
      title: "Precios y Recomendaciones",
      id: "precios",
      subsections: [
        {
          title: "Consultorio Premium: La Opción Recomendada",
          id: "consultorio-premium",
        },
        {
          title: "Descuentos Automáticos por Volumen",
          id: "descuentos",
        },
      ],
    },
    {
      title: "Ubicación Estratégica en Montevideo",
      id: "ubicacion",
    },
    {
      title: "Para Quién es este Servicio",
      id: "profesionales",
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
        serviceName="Alquiler de Consultorio para Masajistas"
        serviceDescription="Consultorio Premium amplio para masajistas en Parque Rodó, Montevideo. Camilla profesional incluida gratis, sistema anti-conflictos de reservas y espacios amplios para trabajar 360°."
        serviceType="Alquiler de Consultorios para Masajistas"
        url={`${siteConfig.url}/soluciones/masajistas`}
        image={[
          "https://www.pisama.uy/images/consultorio5-1.webp",
          "https://www.pisama.uy/images/consultorio3-1.webp",
          "https://www.pisama.uy/images/salaespera-1.webp",
        ]}
        areaServed="Montevideo, Uruguay"
        offers={[
          {
            name: "Consultorio Premium con Camilla",
            description:
              "Consultorio amplio para masajistas con camilla profesional incluida",
            price: "250",
            priceCurrency: "UYU",
          },
        ]}
        availableFeatures={[
          "Camilla profesional incluida gratis",
          "5 Consultorios Premium amplios",
          "Sistema anti-conflictos de reservas",
          "Espacio para moverte 360° alrededor del paciente",
          "Reservas online en tiempo real",
          "Ubicación estratégica en Parque Rodó",
          "Aire acondicionado",
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
            Alquiler de Consultorio para Masajistas por Hora en Montevideo: Con
            Camilla Profesional y Reserva Online
          </h1>
          <Indice sections={sections} />

          <p className="mt-12">
            Si eres masajista terapéutico, masajista deportivo o profesional de
            masajes relajantes, sabes que tu trabajo requiere dos cosas
            esenciales:{" "}
            <strong>
              un espacio amplio para trabajar y una camilla profesional
              disponible
            </strong>
            . En Espacio PISAMA, resolvemos esa necesidad con un sistema
            flexible, económico y tecnológicamente seguro diseñado
            específicamente para masajistas en Montevideo.
          </p>
          <p>
            Olvídate de competir por &quot;el único consultorio con
            camilla&quot;. Aquí tienes{" "}
            <Link
              href="/consultorios"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              5 Consultorios Premium
            </Link>{" "}
            a tu disposición y un sistema de reserva inteligente que te
            garantiza tu camilla de masajes al instante.
          </p>

          {/* --- SECCIÓN 1: EL PROBLEMA --- */}
          <h2 id="problema">
            El Problema de la Camilla Compartida en Consultorios de Masajes
          </h2>
          <p>
            He visto masajistas llegar a un consultorio alquilado para descubrir
            que la camilla &quot;estaba reservada&quot; por otro colega. O peor:
            que simplemente no estaba disponible porque nadie coordinó su uso.{" "}
            <strong>Eso es inaceptable</strong> para masajistas profesionales
            que tienen clientes esperando su sesión de masajes terapéuticos o
            deportivos.
          </p>
          <div className="my-8 flex justify-center">
            <Image
              src={consultorio1}
              alt="Consultorio PISAMA Premium - Espacio amplio para fisioterapia y terapias manuales"
              className="rounded-xl shadow-2xl h-auto"
              width={650}
            />
          </div>
          <blockquote>
            No somos un consultorio tradicional rígido. Somos un espacio de
            coworking para profesionales de la salud diseñado para adaptarse a
            tu agenda y garantizarte el equipamiento que necesitas.
          </blockquote>
          <p>
            En Espacio PISAMA diseñamos un{" "}
            <Link
              href="/app-de-reservas"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              sistema de reserva online
            </Link>{" "}
            que elimina completamente este problema. Cuando reservas y marcas
            &quot;Requiere Camilla&quot;, el sistema te garantiza que estará
            disponible. Sin sorpresas, sin conflictos.
          </p>

          {/* --- SECCIÓN 2: SISTEMA ANTI-CONFLICTOS --- */}
          <h2 id="sistema">
            Sistema Anti-Conflictos: Garantizamos tu Camilla Profesional por Web
          </h2>
          <p>
            Nuestro mayor diferencial es la tecnología. No usamos agendas de
            papel ni mensajes de WhatsApp que generan errores y malentendidos.{" "}
            <strong>
              Nuestro sistema de reserva online funciona en tiempo real, 24/7
            </strong>
            .
          </p>

          <h3 id="como-funciona">Cómo Funciona el Sistema de Reserva</h3>
          <p>El proceso es simple, rápido y completamente automatizado:</p>
          <ol>
            <li>
              Entras a nuestra{" "}
              <Link
                href="/disponibilidad"
                className="text-secondary-500 font-semibold hover:text-secondary-400"
              >
                plataforma de reservas
              </Link>{" "}
              24/7 desde cualquier dispositivo.
            </li>
            <li>
              Eliges el horario que necesitas y marcas la opción{" "}
              <strong>&quot;Requiere Camilla&quot;</strong>.
            </li>
            <li>
              El sistema verifica en tiempo real: Si la camilla está libre, te
              confirma la reserva al instante. Si otro colega la está usando en
              ese horario, te avisa antes de confirmar para que elijas otro
              horario.
            </li>
            <li>
              <strong>Resultado:</strong> Nunca llegarás al consultorio para
              descubrir que la camilla no está. Si el sistema te confirmó, el
              equipo es tuyo garantizado.
            </li>
          </ol>
          <div className="my-8 flex justify-center">
            <Image
              src={appReservas}
              alt="Sistema de reservas online de Espacio PISAMA - Reserva tu camilla en tiempo real"
              className="rounded-xl shadow-2xl h-auto"
              width={650}
            />
          </div>

          <h3 id="espacios-amplios">
            5 Consultorios Premium Amplios: Tu Consultorio Equipado, Cuando lo
            Necesites
          </h3>
          <p>
            Al reservar con camilla, puedes utilizar cualquiera de nuestros{" "}
            <strong>5 Consultorios Premium</strong>. Estos son espacios
            generosos diseñados específicamente para profesionales que trabajan
            con terapias manuales:
          </p>
          <ImageGallery />
          <ul>
            <li>
              <strong>Camilla Profesional Incluida:</strong> Contamos con una
              camilla robusta, cómoda y plegable, guardada en nuestra Sala de
              Descanso, lista para usar. Es ligera para transportar pero firme
              para trabajar.
            </li>
            <li>
              <strong>Espacio para Circular:</strong> Podrás moverte alrededor
              de la camilla con total ergonomía, realizar maniobras
              terapéuticas, estiramientos y evaluaciones sin limitaciones.
            </li>
            <li>
              <strong>Ambiente Controlado:</strong> Climatización con aire
              acondicionado, aislación acústica profesional y música funcional
              en sala de espera para que tu paciente se relaje desde el primer
              minuto.
            </li>
            <li>
              <strong>Privacidad Garantizada:</strong> Cada consultorio cuenta
              con aislación acústica que garantiza confidencialidad absoluta
              durante tus tratamientos de fisioterapia, masajes u osteopatía.
            </li>
          </ul>
          <div className="my-8 flex justify-center">
            <Image
              src={consultorio3}
              alt="Consultorio Premium en impecables condiciones - Ideal para masajes y fisioterapia"
              className="rounded-xl shadow-2xl h-auto"
              width={650}
            />
          </div>
          <CtaBox />

          {/* --- SECCIÓN 3: PRECIOS --- */}
          <h2 id="precios">
            Precios y Recomendaciones para Alquiler de Consultorio con Camilla
          </h2>
          <p>
            Transparencia total. Sin gastos comunes, sin contratos de
            permanencia, sin costos ocultos. Pagas únicamente por las horas que
            usas.
          </p>

          <h3 id="consultorio-premium">
            Consultorio Premium: La Opción Recomendada para Terapias con Camilla
          </h3>
          <p>
            <strong>Tarifa Base: $250 / hora</strong>
          </p>
          <p>
            <strong>¿Por qué elegirlo?</strong> Es el espacio ideal para
            trabajar con camilla. Tendrás amplitud para realizar maniobras de
            fisioterapia, masajes terapéuticos, tratamientos de osteopatía,
            quiropraxia, acupuntura y evaluaciones físicas sin chocar con
            muebles ni paredes. La ergonomía de trabajo es fundamental para tu
            salud profesional y la calidad de atención a tus pacientes.
          </p>
          <blockquote>
            Nota: Contamos con un Consultorio Estándar a $200/hora, pero por sus
            dimensiones reducidas, no lo recomendamos para terapias con camilla.
            Prioriza tu comodidad y la de tu paciente eligiendo Premium.
          </blockquote>

          <h3 id="descuentos">
            Descuentos Automáticos por Volumen: Premia tu Constancia
          </h3>
          <p>
            Mientras más horas reservas en la semana, menos pagas. Nuestro{" "}
            <Link
              href="/precios"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              sistema de descuentos automáticos
            </Link>{" "}
            premia tu fidelidad:
          </p>
          <ul>
            <li>
              <strong>4+ horas/semana:</strong> Ahorras $20/hora → $230/hora
            </li>
            <li>
              <strong>8+ horas/semana:</strong> Ahorras $40/hora → $210/hora
            </li>
            <li>
              <strong>12+ horas/semana:</strong> Ahorras $60/hora → $190/hora
            </li>
          </ul>
          <p>
            Los descuentos se aplican automáticamente según tu volumen de uso
            semanal. No necesitas pedirlos ni negociarlos. El sistema los
            calcula y aplica por ti.
          </p>

          {/* --- SECCIÓN 4: UBICACIÓN --- */}
          <h2 id="ubicacion">
            Ubicación Estratégica del Consultorio en Parque Rodó, Montevideo
          </h2>
          <p>
            Nuestro consultorio con camilla profesional está en{" "}
            <strong>Parque Rodó, Montevideo</strong>, una ubicación privilegiada
            tanto para ti como para tus pacientes que necesitan fisioterapia,
            masajes u osteopatía:
          </p>
          <ul>
            <li>
              <strong>Accesibilidad:</strong> Cerca de avenidas principales
              (Blvr. Artigas, Blvr. España, Rivera, 18 de Julio) con excelente
              acceso en ómnibus desde toda la ciudad.
            </li>
            <li>
              <strong>Estacionamiento Fácil:</strong> Zona de estacionamiento no
              tarifado donde siempre se encuentra lugar para estacionar. Esto
              elimina una barrera importante para la adherencia de tus
              pacientes, especialmente aquellos con movilidad reducida que
              vienen en auto.
            </li>
            <li>
              <strong>Cercanía a Barrios Clave:</strong> Estamos en el corazón
              de Montevideo, muy cercano a Pocitos, Cordón, Parque Battle, Punta
              Carretas y Centro.
            </li>
          </ul>
          <div className="my-8 flex justify-center">
            <Image
              src={fachada1}
              alt="Fachada de PISAMA en Parque Rodó, Montevideo - Consultorio con camilla profesional"
              className="rounded-xl shadow-2xl h-auto"
              width={350}
            />
          </div>

          {/* --- SECCIÓN 5: PARA QUIÉN --- */}
          <h2 id="profesionales">
            ¿Para Quién es este Servicio de Alquiler de Consultorio para
            Masajistas?
          </h2>
          <p>
            Nuestros consultorios con camilla profesional están diseñados
            especialmente para masajistas y profesionales de terapias manuales:
          </p>
          <ul>
            <li>
              <strong>Masajistas Terapéuticos:</strong> Espacio amplio y
              ambiente profesional con climatización ideal para masajes
              descontracturantes, masajes de tejido profundo y terapias de
              relajación. Privacidad acústica garantizada para que tus clientes
              se relajen completamente.
            </li>
            <li>
              <strong>Masajistas Deportivos:</strong> Consultorios Premium con
              espacio suficiente para tratamientos pre y post-competencia,
              masajes de recuperación muscular y técnicas deportivas avanzadas.
            </li>
            <li>
              <strong>Masajistas de Spa y Relajación:</strong> Ambiente cálido y
              tranquilo perfecto para masajes relajantes, aromáticos y de
              bienestar general. La climatización y música ambiental crean el
              entorno ideal.
            </li>
            <li>
              <strong>Fisioterapeutas y Kinesiólogos:</strong> Espacio amplio
              para evaluaciones, movilizaciones y tratamientos de rehabilitación
              con camilla profesional.
            </li>
            <li>
              <strong>Otros Profesionales:</strong> También ideal para
              osteópatas, quiroprácticos, acupuntores y cualquier profesional
              que requiera camilla y espacio para terapias manuales.
            </li>
          </ul>
          <p>
            Si eres masajista profesional y buscas un consultorio con camilla en
            Montevideo, <strong>Espacio PISAMA es tu lugar</strong>.
          </p>
          <div className="my-8 flex justify-center">
            <Image
              src={salaespera1}
              alt="Sala de espera PISAMA - Espacio profesional para pacientes de fisioterapia"
              className="rounded-xl shadow-2xl h-auto"
              width={400}
            />
          </div>

          {/* --- SECCIÓN 6: CONCLUSIÓN --- */}
          <h2 id="conclusion">
            Empieza a Dar Masajes Profesionales Hoy Mismo en Montevideo
          </h2>
          <p>
            No pierdas clientes por falta de lugar o por problemas de
            coordinación de la camilla de masajes.{" "}
            <strong>Toma el control de tu práctica como masajista ahora</strong>{" "}
            con un sistema que realmente funciona:
          </p>
          <ol>
            <li>
              Regístrate gratis en nuestra{" "}
              <Link
                href="/disponibilidad"
                className="text-secondary-500 font-semibold hover:text-secondary-400"
              >
                plataforma de reservas
              </Link>
              .
            </li>
            <li>Consulta la disponibilidad en tiempo real 24/7.</li>
            <li>
              Reserva tu Consultorio Premium + Camilla para masajes con un clic.
              El sistema garantiza tu equipamiento.
            </li>
          </ol>
          <p className="pb-8">
            Al crear Espacio PISAMA intenté resolver todos los problemas
            logísticos que los masajistas enfrentan al buscar un consultorio con
            camilla en Montevideo.{" "}
            <strong>
              No es el espacio más barato ni el más lujoso. Es el que funciona.
            </strong>{" "}
            Te invito a{" "}
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
              title="Tour virtual Espacio PISAMA - Consultorios con camilla en Parque Rodó"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* --- SECCIÓN 7: FAQ --- */}
          <ConsultorioCamillaFaqSection />
        </article>
        <RelatedSolutions
          currentProfession="masajistas"
          solutions={allSolutions}
        />
      </main>
      <CtaSection
        title="Reservá tu Consultorio para Masajes en Montevideo Hoy"
        description="Alquiler por hora desde $250 en Parque Rodó. Camilla profesional incluida, 5 espacios Premium amplios diseñados para masajistas. Sistema de reserva online que garantiza tu camilla en tiempo real. Sin compromiso mensual. Ideal para masajes terapéuticos, deportivos y relajantes."
        buttonText="Ver Disponibilidad y Reservar Ahora"
        buttonLink="/disponibilidad"
      />
    </>
  );
}
