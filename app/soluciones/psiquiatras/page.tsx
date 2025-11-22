import { Button } from "@heroui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Indice from "@/components/blog/Indice";
import CtaSection from "@/components/homepage/CtaSection";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { siteConfig } from "@/config/site";
import appReservas from "@/public/images/blog/app-calendario-diario.webp";
import consultorio1 from "@/public/images/consultorio5-1.webp";
import fachada1 from "@/public/images/fachada-1.1.webp";
import salaespera1 from "@/public/images/salaespera-1.webp";

import ImageGallery from "../psicologos/ImageGallery"; // Reusing gallery from psychologists

import ConsultorioPsiquiatrasFaqSection from "./ConsultorioPsiquiatrasFaqSection";

// --- SEO: Metadatos de la Página ---
export const metadata: Metadata = {
  title:
    "Alquiler de Consultorios para Psiquiatras en Montevideo | Privacidad y Seguridad | PISAMA",
  description:
    "Consultorios para psiquiatras en Parque Rodó. Privacidad acústica absoluta, entorno seguro y profesional. Alquiler por hora flexible sin costos fijos. Ideal para tu práctica privada.",
  keywords: [
    "alquiler consultorio psiquiatra montevideo",
    "consultorio psiquiatrico montevideo",
    "alquiler consultorio medico por hora",
    "espacio terapeutico psiquiatras",
    "consultorios por hora montevideo",
    "consultorio seguridad privacidad",
    "alquiler consultorio parque rodo",
  ],
};

const CtaBox = () => (
  <div className="my-10 rounded-2xl bg-content3/80 shadow-xl p-4 text-center border-1 border-yellow-400 hover:scale-103 transition-transform duration-300">
    <h3 className="font-display text-3xl font-bold text-primary-500 mt-8!">
      ¿Buscas un consultorio seguro y privado para tu práctica psiquiátrica?
    </h3>
    <p className="mx-auto mt-4 max-w-xl font-sans text-foreground/80">
      Alquiler por hora en Parque Rodó. Privacidad acústica certificada,
      ambiente médico-profesional y seguridad para vos y tus pacientes.
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
export default function ArticuloPsiquiatrasPage(): React.JSX.Element {
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
      name: "Para Psiquiatras",
      url: `${siteConfig.url}/soluciones/psiquiatras`,
    },
  ];

  const sections = [
    {
      title: "El Entorno Clínico Necesario",
      id: "entorno-clinico",
    },
    {
      title: "Los 3 Pilares para Psiquiatría",
      id: "pilares",
      subsections: [
        {
          title: "1. Privacidad y Hermetismo",
          id: "privacidad",
        },
        {
          title: "2. Seguridad y Contención",
          id: "seguridad",
        },
        {
          title: "3. Imagen Médica Profesional",
          id: "imagen-profesional",
        },
      ],
    },
    {
      title: "Gestión Eficiente de tu Práctica",
      id: "gestion",
      subsections: [
        {
          title: "Agenda Flexible y Online",
          id: "agenda",
        },
        {
          title: "Ubicación y Accesibilidad",
          id: "ubicacion",
        },
      ],
    },
    {
      title: "Eliminando Riesgos y Costos Fijos",
      id: "riesgos",
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
            Alquiler de Consultorios para Psiquiatras en Montevideo: Privacidad,
            Seguridad y Profesionalismo
          </h1>
          <Indice sections={sections} />

          <p className="mt-12">
            La práctica psiquiátrica requiere condiciones muy específicas que no
            cualquier oficina o consultorio genérico puede ofrecer. Entendemos
            que como psiquiatra, no solo buscas un espacio físico, sino un{" "}
            <strong>entorno clínico seguro</strong> donde la confidencialidad y
            la contención sean absolutas.
          </p>
          <p>
            En{" "}
            <Link
              href="/"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              <strong>Espacio PISAMA</strong>
            </Link>
            , hemos diseñado nuestros consultorios pensando en las exigencias de
            los profesionales de la salud mental. Ofrecemos una solución de{" "}
            <Link
              href="/soluciones"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              alquiler de consultorios por hora
            </Link>{" "}
            en Parque Rodó que combina la flexibilidad que necesitas con la
            rigurosidad que tu práctica demanda.
          </p>

          {/* --- SECCIÓN 1: EL ENTORNO CLÍNICO --- */}
          <h2 id="entorno-clinico">
            El Entorno Clínico: Más que un Escritorio
          </h2>
          <p>
            Sabemos que el acto médico en psiquiatría es sagrado. Necesitas un
            lugar donde puedas realizar entrevistas, evaluaciones y
            tratamientos farmacológicos con total tranquilidad. Un espacio donde
            el ruido de la calle o de la sala de espera no interfiera en la
            delicada relación médico-paciente.
          </p>
          <div className="my-8 flex justify-center">
            <Image
              src={consultorio1}
              alt="Consultorio médico psiquiátrico en Montevideo"
              className="rounded-xl shadow-2xl h-auto"
              width={650}
            />
          </div>
          <blockquote>
            La infraestructura debe ser un aliado en el tratamiento,
            garantizando un encuadre seguro y predecible.
          </blockquote>

          {/* --- SECCIÓN 2: LOS 3 PILARES --- */}
          <h2 id="pilares">
            Los 3 Pilares de un Consultorio Psiquiátrico Ideal
          </h2>

          <h3 id="privacidad">
            1. Privacidad y Hermetismo Acústico
          </h3>
          <p>
            La confidencialidad es la base de la confianza. En Espacio PISAMA,
            la <strong>aislación acústica</strong> es una prioridad. Paredes
            tratadas y puertas sólidas aseguran que las sesiones sean
            completamente privadas. Además, nuestra sala de espera cuenta con
            música ambiental diseñada para enmascarar sonidos y brindar
            privacidad extra a quienes aguardan.
          </p>

          <h3 id="seguridad">
            2. Seguridad y Contención
          </h3>
          <p>
            Atender pacientes, a veces en situaciones de crisis, requiere un
            entorno seguro. Nuestro espacio cuenta con acceso controlado y
            circulación fluida. Al ser un centro dedicado a la salud mental y
            bienestar, compartes el edificio con otros colegas (
            <Link
              href="/soluciones/psicologos"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              psicólogos
            </Link>
            , nutricionistas), generando una comunidad profesional que brinda
            seguridad implícita y acompañamiento. No estás solo en un edificio
            de oficinas vacío por la noche.
          </p>
          <div className="my-8 flex justify-center">
            <Image
              src={salaespera1}
              alt="Sala de espera segura y tranquila"
              className="rounded-xl shadow-2xl h-auto"
              width={400}
            />
          </div>

          <h3 id="imagen-profesional">
            3. Imagen Médica Profesional
          </h3>
          <p>
            Tu consultorio habla de ti antes de que digas una palabra. Nuestros
            espacios están decorados con un estilo sobrio, moderno y cálido,
            alejado de la frialdad de un hospital pero manteniendo la seriedad
            de un consultorio médico. Es el equilibrio perfecto para que tus
            pacientes se sientan acogidos y respetados.
          </p>
          <ImageGallery />

          <CtaBox />

          {/* --- SECCIÓN 3: GESTIÓN --- */}
          <h2 id="gestion">
            Gestión Eficiente de tu Práctica Privada
          </h2>

          <h3 id="agenda">
            Agenda Flexible y Sistema Online
          </h3>
          <p>
            Olvídate de los costos fijos de un alquiler mensual si recién
            empiezas o si solo atiendes algunos días a la semana. Con nuestro{" "}
            <Link
              href="/app-de-reservas"
              className="text-secondary-500 font-semibold hover:text-secondary-400"
            >
              sistema de reservas online
            </Link>
            , tienes el control total. Ves la disponibilidad en tiempo real y
            reservas solo las horas que necesitas. Esto es ideal para combinar
            tu práctica privada con guardias o trabajo institucional.
          </p>
          <div className="my-8 flex justify-center">
            <Image
              src={appReservas}
              alt="App de reservas para consultorios"
              className="rounded-xl shadow-2xl h-auto"
              width={650}
            />
          </div>

          <h3 id="ubicacion">
            Ubicación Estratégica y Accesibilidad
          </h3>
          
          {/* Row 1: Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <p className="mt-0">
                Estamos en <strong>Parque Rodó</strong>, un punto neurálgico de
                Montevideo con excelente conectividad. La ubicación permite que tus 
                pacientes lleguen fácilmente desde cualquier punto de la ciudad, 
                ya sea en transporte público o vehículo propio. Al estar situados 
                cerca de avenidas principales como Bulevar Artigas y Bulevar España, 
                el acceso es rápido y directo desde barrios como Pocitos, Cordón y 
                el Centro. Además, el entorno de Parque Rodó ofrece una atmósfera de 
                tranquilidad que predispone positivamente antes de la sesión.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src={fachada1}
                alt="Ubicación en Parque Rodó"
                className="rounded-xl shadow-2xl h-auto w-full object-cover"
                width={350}
              />
            </div>
          </div>

          {/* Row 2: Map Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.0134501297057!2d-56.169923123518814!3d-34.90611197353255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f813b9c05e583%3A0x2388d5c4fcb52b9f!2sEspacio%20Pisama%20%7C%20Alquiler%20de%20Consultorios!5e0!3m2!1ses!2suy!4v1763791137789!5m2!1ses!2suy"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                title="Mapa de ubicación de Espacio PISAMA en Parque Rodó, Montevideo" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
               />
            </div>
            <div>
              <p className="mt-0">
                Además, contamos con la gran ventaja de estar en una zona de {" "}
                <strong>estacionamiento gratuito y seguro</strong>. Esto elimina 
                una barrera importante para la asistencia a consulta, brindando 
                comodidad tanto para ti como para tus pacientes.
              </p>
            </div>
          </div>

          {/* --- SECCIÓN 4: RIESGOS --- */}
          <h2 id="riesgos">
            Eliminando Riesgos y Costos Fijos
          </h2>
          <p>
            Alquilar un consultorio propio implica contratos a dos años,
            garantías, gastos comunes, luz, internet, limpieza y mantenimiento.
            Es una carga financiera pesada y un riesgo innecesario.
          </p>
          <p>
            En Espacio PISAMA, transformamos esos costos fijos en variables.
            Pagas solo cuando trabajas. Nosotros nos encargamos de que el aire
            acondicionado funcione, de que el consultorio esté impecable, de que
            haya internet de alta velocidad y de todos los detalles operativos.
            Tu única preocupación debe ser tu paciente.
          </p>

          {/* --- SECCIÓN 5: CONCLUSIÓN --- */}
          <h2 id="conclusion">
            Conclusión: Tu Consultorio Psiquiátrico en Montevideo
          </h2>
          <p>
            Si buscas un lugar que entienda las necesidades de la psiquiatría
            moderna —privacidad, seguridad, flexibilidad y profesionalismo— te
            invitamos a conocer Espacio PISAMA.
          </p>
          <p className="pb-8">
            Únete a nuestra comunidad de profesionales de la salud y lleva tu
            práctica privada al siguiente nivel, sin ataduras ni complicaciones.
            <Link
              href="/contacto"
              className="text-secondary-500 font-semibold hover:text-secondary-400 ml-1"
            >
              Agenda una visita hoy mismo
            </Link>
            .
          </p>

          {/* --- SECCIÓN 6: FAQ --- */}
          <ConsultorioPsiquiatrasFaqSection />
        </article>
      </main>
      <CtaSection
        title="Consultorios para Psiquiatras en Montevideo"
        description="Espacio profesional, seguro y privado en Parque Rodó. Alquiler por hora sin costos fijos. Gestiona tu agenda con total libertad."
        buttonText="Consultar Disponibilidad"
        buttonLink="/disponibilidad"
      />
    </>
  );
}
