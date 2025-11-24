import { Button } from "@heroui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Indice from "@/components/blog/Indice";
import CtaSection from "@/components/homepage/CtaSection";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/components/seo/ServiceSchema";
import { siteConfig } from "@/config/site";
import consultorio5 from "@/public/images/consultorio5-1.webp";
import fachada1 from "@/public/images/fachada-1.1.webp";
import salaDescanso from "@/public/images/saladescanso-1.webp";

import ConsultorioFisioterapeutasFaqSection from "./ConsultorioFisioterapeutasFaqSection";
import ImageGallery from "./ImageGallery";

// --- SEO: Metadatos de la Página ---
export const metadata: Metadata = {
  title:
    "Alquiler de Consultorio para Fisioterapeutas en Montevideo | Camilla y Almacenamiento | PISAMA",
  description:
    "Consultorio para fisioterapeutas y kinesiólogos en Parque Rodó desde $250/hora. Espacios amplios Premium, camilla incluida, almacenamiento seguro y ergonomía garantizada. Reserva online sin compromiso mensual.",
  keywords: [
    "alquiler consultorio fisioterapeutas montevideo",
    "consultorio fisioterapia parque rodó",
    "consultorio kinesiólogo montevideo",
    "alquiler consultorio con camilla montevideo",
    "consultorio fisioterapia por hora",
    "espacio fisioterapia montevideo",
    "consultorio kinesiólogo parque rodó",
    "alquiler sala fisioterapia montevideo",
    "consultorio premium fisioterapeutas",
    "consultorio amplio fisioterapia",
    "camilla fisioterapia montevideo",
    "almacenamiento equipo fisioterapia",
    "consultorio ergonómico fisioterapeutas",
  ],
  alternates: {
    canonical: "/soluciones/fisioterapeutas",
  },
  openGraph: {
    title:
      "Alquiler de Consultorio para Fisioterapeutas en Montevideo | PISAMA",
    description:
      "Consultorio para fisioterapeutas con espacios amplios, camilla profesional incluida y almacenamiento seguro. Desde $250/hora en Parque Rodó sin compromiso mensual.",
    url: "https://www.pisama.uy/soluciones/fisioterapeutas",
    siteName: "Espacio Pisama",
    locale: "es_UY",
    type: "article",
    images: [
      {
        url: "https://www.pisama.uy/images/consultorio3-1.webp",
        width: 1200,
        height: 630,
        alt: "Consultorio amplio para fisioterapeutas en Parque Rodó, Montevideo",
      },
    ],
  },
};

const CtaBox = () => (
  <div className="my-10 rounded-2xl bg-content3/80 shadow-xl p-4 text-center border-1 border-yellow-400 hover:scale-103 transition-transform duration-300">
    <h3 className="font-display text-3xl font-bold text-primary-500 mt-8!">
      ¿Listo para trabajar con ergonomía y comodidad?
    </h3>
    <p className="mx-auto mt-4 max-w-xl font-sans text-foreground/80">
      Alquiler de consultorio para fisioterapeutas desde $250/hora en Parque
      Rodó, Montevideo. Espacios Premium amplios, camilla profesional incluida
      y almacenamiento seguro. Sin compromiso mensual.
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

// --- PÁGINA PRINCIPAL QUE ENSAMBLA TODO ---
export default function ArticuloFisioterapeutasPage(): React.JSX.Element {
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
      name: "Para Fisioterapeutas",
      url: `${siteConfig.url}/soluciones/fisioterapeutas`,
    },
  ];

  const sections = [
    {
      title: "El Fin de los Consultorios Apretados",
      id: "consultorios-amplios",
    },
    {
      title: "Consultorios Premium de Amplias Dimensiones",
      id: "premium-dimensiones",
    },
    {
      title: "Dos Opciones para tu Equipamiento",
      id: "opciones-equipamiento",
      subsections: [
        {
          title: "Opción A: Usa Nuestra Camilla Profesional",
          id: "camilla-nuestra",
        },
        {
          title: "Opción B: Trae tu Camilla y Déjala Aquí",
          id: "camilla-tuya",
        },
      ],
    },
    {
      title: "Ubicación y Accesibilidad",
      id: "ubicacion-accesibilidad",
    },
    {
      title: "Rentabilidad para tu Práctica",
      id: "rentabilidad",
    },
    {
      title: "Cómo Empezar a Trabajar",
      id: "como-empezar",
    },
  ];

  // Schema.org Article para SEO
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Alquiler de Consultorio para Fisioterapeutas en Montevideo: Ergonomía, Almacenamiento y Flexibilidad",
    description:
      "Guía completa sobre alquiler de consultorios para fisioterapeutas en Parque Rodó. Espacios amplios, camilla incluida, almacenamiento seguro y precios flexibles.",
    image: [
      "https://www.pisama.uy/images/consultorio3-1.webp",
      "https://www.pisama.uy/images/saladescanso-1.webp",
    ],
    datePublished: "2025-01-22",
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
        serviceName="Alquiler de Consultorio para Fisioterapeutas"
        serviceDescription="Consultorio Premium amplio para fisioterapeutas en Parque Rodó, Montevideo. Camilla profesional bonificada, espacio para moverte 360°, almacenamiento seguro y ergonomía garantizada."
        serviceType="Alquiler de Consultorios para Fisioterapeutas"
        url={`${siteConfig.url}/soluciones/fisioterapeutas`}
        image={[
          "https://www.pisama.uy/images/consultorio3-1.webp",
          "https://www.pisama.uy/images/consultorio5-1.webp",
          "https://www.pisama.uy/images/saladescanso-1.webp",
        ]}
        areaServed="Montevideo, Uruguay"
        offers={[
          {
            name: "Consultorio Premium con Camilla",
            description: "Consultorio amplio para fisioterapeutas con camilla profesional bonificada",
            price: "250",
            priceCurrency: "UYU",
          },
        ]}
        availableFeatures={[
          "Consultorios Premium amplios",
          "Camilla profesional bonificada",
          "Espacio para moverte 360° alrededor del paciente",
          "Almacenamiento seguro para tu equipo",
          "Ergonomía garantizada",
          "Reservas online en tiempo real",
          "Ubicación estratégica en Parque Rodó",
          "Aire acondicionado",
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
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
            Alquiler de Consultorio para Fisioterapeutas en Montevideo:
            Ergonomía, Almacenamiento y Flexibilidad
          </h1>
          <Indice sections={sections} />

          <p className="mt-12">
            Ser fisioterapeuta o kinesiólogo independiente en Montevideo
            presenta un desafío que otros profesionales de la salud no tienen:{" "}
            <strong>el espacio y la logística del equipo</strong>.
          </p>
          <p>
            La mayoría de los{" "}
            <Link
              href="/soluciones"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              consultorios por hora en el mercado
            </Link>{" "}
            están diseñados exclusivamente para psicólogos: habitaciones
            pequeñas donde no entra una camilla y mucho menos puedes moverte
            con comodidad. Además, cargar con tu equipo de un lado a otro es
            agotador y poco profesional.
          </p>
          <p>
            En{" "}
            <Link
              href="/"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              <strong>Espacio Pisama</strong>
            </Link>{" "}
            (Parque Rodó), entendemos que tu práctica es física. Por eso, hemos
            adaptado nuestra propuesta para ofrecerte{" "}
            <strong>
              la infraestructura de una clínica, con la flexibilidad del
              alquiler por hora
            </strong>
            .
          </p>

          {/* --- SECCIÓN 1: FIN DE CONSULTORIOS APRETADOS --- */}
          <h2 id="consultorios-amplios">
            El Fin de los &quot;Consultorios Apretados&quot;: Priorizamos tu Ergonomía
          </h2>
          <p>
            Sabemos que para realizar una buena evaluación postural, una
            manipulación osteopática o un masaje terapéutico, necesitas{" "}
            <strong>circular 360° alrededor del paciente</strong>.
          </p>
          <blockquote>
            Un consultorio donde no puedes moverte libremente no solo limita tu
            técnica, sino que puede comprometer tu propia salud postural como
            profesional de la fisioterapia.
          </blockquote>
          <p>
            En Espacio PISAMA entendemos estas necesidades porque trabajamos
            directamente con fisioterapeutas y kinesiólogos que nos han
            compartido sus frustraciones con los espacios tradicionales de
            alquiler en Montevideo.
          </p>

          <div className="my-8 flex justify-center">
            <Image
              src={consultorio5}
              alt="Consultorio Premium amplio para fisioterapeutas en Montevideo"
              className="rounded-xl shadow-2xl h-auto"
              width={650}
            />
          </div>

          {/* --- SECCIÓN 2: CONSULTORIOS PREMIUM --- */}
          <h2 id="premium-dimensiones">
            La Solución: Consultorios Premium de Amplias Dimensiones
          </h2>
          <p>
            Ponemos a tu disposición nuestros{" "}
            <Link
              href="/consultorios"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              5 Consultorios Premium
            </Link>
            , específicamente diseñados para prácticas que requieren movimiento
            y equipamiento.
          </p>

          <h3>Características de nuestros Consultorios Premium:</h3>
          <ul>
            <li>
              <strong>Metraje Generoso:</strong> Espacio suficiente para ubicar
              la camilla de fisioterapia y moverte libremente por los cuatro
              costados sin restricciones.
            </li>
            <li>
              <strong>Mobiliario Minimalista:</strong> Diseñamos el espacio
              para que esté despejado. Nada interrumpe tu flujo de trabajo
              como fisioterapeuta.
            </li>
            <li>
              <strong>Suelo Libre:</strong> Sin alfombras pesadas ni obstáculos
              que dificulten la higiene o el movimiento durante las terapias.
            </li>
            <li>
              <strong>Climatización Individual:</strong> Todos los consultorios
              cuentan con aire acondicionado (frío/calor) que podés regular
              según las necesidades de tu paciente.
            </li>
          </ul>

          <ImageGallery />

          <div className="my-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded-r-lg">
            <p className="font-semibold text-foreground mb-2">
              ⚠️ Honestidad ante todo:
            </p>
            <p className="text-foreground/90 mb-0">
              Contamos con un{" "}
              <Link
                href="/consultorios"
                className="text-secondary-500 font-semibold hover:text-secondary-400"
              >
                Consultorio Estándar
              </Link>{" "}
              más económico, pero <strong>no lo recomendamos</strong> para
              Fisioterapia. Sus dimensiones limitarían tu ergonomía y
              capacidad de movimiento. Para garantizar tu comodidad y la
              calidad de tu trabajo, elige siempre la opción Premium.
            </p>
          </div>

          {/* --- SECCIÓN 3: OPCIONES DE EQUIPAMIENTO --- */}
          <h2 id="opciones-equipamiento">
            Dos Opciones para tu Equipamiento: Resolvemos tu Logística
          </h2>
          <p>
            Sabemos que cada fisioterapeuta tiene sus preferencias respecto al
            equipamiento. En Espacio PISAMA te damos total libertad:
          </p>

          <h3 id="camilla-nuestra">
            Opción A: Usa Nuestra Camilla Profesional
          </h3>
          <p>
            <strong>Olvídate de cargar peso</strong>. Tenemos una camilla
            robusta, profesional y en excelentes condiciones disponible para ti
            sin costo adicional.
          </p>
          <ul>
            <li>
              <strong>Reserva Inteligente:</strong> Al agendar en la{" "}
              <Link
                href="/app-de-reservas"
                className="text-secondary-500 font-semibold hover:text-secondary-400"
              >
                plataforma web
              </Link>
              , marcas &quot;Requiere Camilla&quot;. Nuestro{" "}
              <strong>sistema bloquea el recurso para ti</strong>, asegurando
              que nadie más la reserve en tu horario. Cero conflictos.
            </li>
            <li>
              <strong>Siempre Lista:</strong> La encuentras en nuestra Sala de
              Descanso y la llevas a tu consultorio reservado. Al finalizar, la
              devuelves al mismo lugar.
            </li>
            <li>
              <strong>Bonificada:</strong> El uso de nuestra camilla está
              incluido en el precio de la hora. No hay costos extras.
            </li>
          </ul>

          <h3 id="camilla-tuya">
            Opción B: Trae tu Propia Camilla y Déjala Guardada Aquí
          </h3>
          <p>
            ¿Prefieres tu propia camilla portátil o tienes materiales
            específicos (equipos de electroterapia, bandas elásticas, pelotas
            de Pilates, insumos)?
          </p>

          <div className="my-8 flex justify-center">
            <Image
              src={salaDescanso}
              alt="Sala de Descanso con almacenamiento para equipamiento de fisioterapia"
              className="rounded-xl shadow-2xl h-auto"
              width={500}
            />
          </div>

          <ul>
            <li>
              <strong>Almacenamiento en el Lugar:</strong> Contamos con una
              habitación exclusiva (Sala de Descanso) donde puedes{" "}
              <strong>
                dejar guardada tu camilla plegable o tus materiales
              </strong>{" "}
              entre sesión y sesión.
            </li>
            <li>
              <strong>Deja de Cargar Peso:</strong> Llegas, retiras tu equipo
              de la sala, trabajas en el consultorio que reservaste y lo
              vuelves a guardar al finalizar. Así de simple.
            </li>
            <li>
              <strong>Seguridad y Confianza:</strong> Aclaración importante: No
              contamos con lockers individuales con llave. Es un{" "}
              <strong>espacio compartido de acceso restringido</strong>{" "}
              exclusivamente a los profesionales de Espacio Pisama (los
              pacientes no tienen acceso). Es una comunidad basada en la
              confianza y el respeto mutuo entre colegas.
            </li>
          </ul>

          <CtaBox />

          {/* --- SECCIÓN 4: UBICACIÓN Y ACCESIBILIDAD --- */}
          <h2 id="ubicacion-accesibilidad">
            Ubicación y Accesibilidad: Información Clave para tus Pacientes
          </h2>
          <p>
            Sabemos que la logística de llegada es vital para la adherencia al
            tratamiento de fisioterapia. Estamos en el corazón de{" "}
            <strong>Parque Rodó, Montevideo</strong>, con ventajas claras y una
            aclaración importante:
          </p>

          <h3>Ventajas de Ubicación:</h3>
          <ul>
            <li>
              <strong>Estacionamiento Gratuito:</strong> Estamos en una zona
              tranquila donde es posible estacionar en la calle{" "}
              <strong>sin tarifa de estacionamiento tarifado</strong>. Un
              alivio enorme para el paciente que llega en auto, especialmente
              quienes tienen movilidad reducida o dolor que les dificulta
              caminar largas distancias.
            </li>
            <li>
              <strong>Conectividad:</strong> A pasos de Bv. España, Bv. Artigas
              y otras arterias principales con múltiples líneas de ómnibus.
            </li>
            <li>
              <strong>Zona Segura:</strong> Parque Rodó es una zona residencial
              y comercial consolidada, con buen tránsito peatonal y excelente
              iluminación.
            </li>
          </ul>

          <div className="my-8 flex justify-center">
            <Image
              src={fachada1}
              alt="Fachada de Espacio PISAMA en Parque Rodó, Montevideo"
              className="rounded-xl shadow-2xl h-auto"
              width={400}
            />
          </div>

          <div className="my-8 p-6 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-lg">
            <p className="font-semibold text-foreground mb-2">
              ℹ️ Importante sobre accesibilidad:
            </p>
            <p className="text-foreground/90 mb-0">
              Estamos en un <strong>primer piso por escalera</strong> y no
              contamos con ascensor. Es importante que tengas esto en cuenta al
              momento de evaluar a pacientes con movilidad severamente reducida
              o que no puedan subir escalones. Para muchos tratamientos de
              fisioterapia esto no representa un problema, pero es relevante
              considerarlo en casos específicos.
            </p>
          </div>

          {/* --- SECCIÓN 5: RENTABILIDAD --- */}
          <h2 id="rentabilidad">
            Rentabilidad para tu Práctica Independiente de Fisioterapia
          </h2>
          <p>
            Montar un consultorio propio de fisioterapia implica garantías,
            gastos fijos que debes pagar tengas pacientes o no, y una inversión
            inicial considerable. En Espacio PISAMA{" "}
            <strong>pagas solo por lo que usas</strong>.
          </p>

          <div className="my-8 p-6 bg-content3 rounded-xl border-2 border-primary-200">
            <h3 className="text-2xl font-bold text-primary-500 mt-0">
              Tarifa Premium + Camilla / Guardado:
            </h3>
            <p className="text-4xl font-bold text-secondary-500 my-4">
              $250 / hora
            </p>
            <p className="text-foreground/80 mb-0">
              <strong>Incluye:</strong> Consultorio Premium amplio, uso de
              camilla o almacenamiento de tu equipo, limpieza profesional,
              Wi-Fi de alta velocidad, climatización individual y todos los
              servicios.
            </p>
          </div>

          <h3>Escala tus Ingresos con Descuentos Automáticos</h3>
          <p>
            Si tienes una cartera de pacientes sólida, el costo por hora baja
            drásticamente. Nuestro{" "}
            <Link
              href="/precios"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              sistema aplica descuentos semanales automáticos
            </Link>{" "}
            según tu volumen de uso:
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary-100 dark:bg-primary-900/30">
                  <th className="border border-primary-300 p-3 text-left">
                    Horas por Semana
                  </th>
                  <th className="border border-primary-300 p-3 text-left">
                    Precio por Hora
                  </th>
                  <th className="border border-primary-300 p-3 text-left">
                    Ahorro Semanal
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-primary-200 p-3">
                    4+ horas/sem
                  </td>
                  <td className="border border-primary-200 p-3 font-bold">
                    $230/hora
                  </td>
                  <td className="border border-primary-200 p-3">
                    $80 (con 4 horas)
                  </td>
                </tr>
                <tr className="bg-content3">
                  <td className="border border-primary-200 p-3">
                    8+ horas/sem
                  </td>
                  <td className="border border-primary-200 p-3 font-bold">
                    $210/hora
                  </td>
                  <td className="border border-primary-200 p-3">
                    $320 (con 8 horas)
                  </td>
                </tr>
                <tr>
                  <td className="border border-primary-200 p-3">
                    12+ horas/sem
                  </td>
                  <td className="border border-primary-200 p-3 font-bold text-secondary-500">
                    $190/hora
                  </td>
                  <td className="border border-primary-200 p-3 font-bold text-secondary-500">
                    $720 (con 12 horas)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <blockquote>
            Si trabajas 12 horas semanales, pagas $190/hora en lugar de $250.
            Eso representa un ahorro de $720 por semana, casi $3,000 por mes,
            sin comprometerte a contratos de largo plazo.
          </blockquote>

          {/* --- SECCIÓN 6: CÓMO EMPEZAR --- */}
          <h2 id="como-empezar">
            Empieza a Trabajar con Comodidad: Proceso Simple y Rápido
          </h2>
          <p>
            Comenzar a usar nuestros consultorios para fisioterapia es muy
            simple:
          </p>
          <ol>
            <li>
              <strong>Regístrate</strong> en nuestra{" "}
              <Link
                href="/disponibilidad"
                className="text-secondary-500 font-semibold hover:text-secondary-400"
              >
                plataforma de reservas online
              </Link>{" "}
              (es gratis y toma 2 minutos).
            </li>
            <li>
              <strong>Filtra por Consultorios Premium</strong> para ver solo
              los espacios amplios recomendados para fisioterapia.
            </li>
            <li>
              <strong>Selecciona si requieres camilla</strong> al momento de
              hacer tu reserva, o simplemente reserva el espacio si traes tu
              propio equipamiento.
            </li>
            <li>
              <strong>Reserva tu espacio ideal</strong> y confirma con tu
              paciente. La reserva es instantánea y en tiempo real.
            </li>
          </ol>

          <div className="my-8 text-center">
            <Button
              as={Link}
              href="/disponibilidad"
              className="bg-secondary-500 font-display font-semibold text-white! no-underline text-lg px-8"
              size="lg"
              variant="flat"
            >
              Crear Cuenta y Reservar Ahora
            </Button>
          </div>

          <div className="my-12 p-8 bg-content1 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-primary-500 mt-0">
              ¿Querés conocer el espacio antes de reservar?
            </h3>
            <p className="text-foreground/80 mb-4">
              Entendemos que es importante ver el consultorio en persona antes
              de tomar una decisión. Te invitamos a{" "}
              <Link
                href="/contacto"
                className="text-secondary-500 font-semibold hover:text-secondary-400"
              >
                agendar una visita
              </Link>{" "}
              sin compromiso. Podés venir a conocer los consultorios, la sala
              de espera, la sala de descanso y resolver todas tus dudas en
              persona.
            </p>
            <Button
              as={Link}
              href="/contacto"
              className="bg-primary-500 font-display font-semibold text-white! no-underline"
              size="lg"
              variant="flat"
            >
              Agendar Visita al Espacio
            </Button>
          </div>

          {/* --- SECCIÓN 7: FAQ --- */}
          <ConsultorioFisioterapeutasFaqSection />
        </article>
      </main>
      <CtaSection
        title="Reservá tu Consultorio para Fisioterapeutas en Montevideo Hoy"
        description="Alquiler por hora en Parque Rodó desde $250. Espacios Premium amplios, camilla profesional incluida, almacenamiento seguro y ergonomía garantizada. Todo lo que necesitás para tu práctica de fisioterapia sin compromiso mensual. Encontrá tu horario ideal ahora."
        buttonText="Ver Disponibilidad y Reservar"
        buttonLink="/disponibilidad"
      />
    </>
  );
}
