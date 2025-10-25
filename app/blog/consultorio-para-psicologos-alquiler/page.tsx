import { Button } from "@heroui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import ConsultorioPsicologosFaqSection from "@/app/blog/consultorio-para-psicologos-alquiler/ConsultorioPsicologosFaqSection";
import Indice from "@/app/blog/consultorio-para-psicologos-alquiler/Indice";
import CtaSection from "@/components/homepage/CtaSection";
import appReservas from "@/public/images/blog/app-calendario-diario.webp";
import consultorio3 from "@/public/images/consultorio3-1.webp";
import consultorio1 from "@/public/images/consultorio5-1.webp";
import fachada1 from "@/public/images/fachada-1.1.webp";
import salaespera1 from "@/public/images/salaespera-1.webp";

import ImageGallery from "./ImageGallery";

// --- SEO: Metadatos de la Página ---
export const metadata: Metadata = {
  title:
    "Alquiler de Consultorios para Psicólogos: La Solución para Trabajar Tranquilo | PISAMA",
  description: `Consultorios por hora para psicólogos en Parque Rodó. Reserva online "sin intermediarios", privacidad acústica y ambiente profesional. Conocé PISAMA.`,
  keywords: [
    "consultorios para psicólogos montevideo",
    "alquiler de consultorios psicológico en montevideo",
    "consultorios por hora en montevideo",
    "consultorios por hora Parque Rodó",
    "alquiler en Montevideo",
    "consultorio en parque rodó",
    "Parque Rodó",
    "espacios para terapias Montevideo",
    "reserva online de consultorios",
  ],
};

const CtaBox = () => (
  <div className="my-10 rounded-2xl bg-content3/80 shadow-xl p-4 text-center border-1 border-yellow-400 hover:scale-103 transition-transform duration-300">
    <h3 className="font-display text-3xl font-bold text-primary-500 mt-8!">
      ¿Listo/a para encontrar tu encuadre perfecto?
    </h3>
    <p className="mx-auto mt-4 max-w-xl font-sans text-foreground/80">
      Te ofrecemos lo que realmente necesitás para trabajar tranquilo y cómodo.
      Un espacio diseñado por psicólogos, para psicólogos.
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
export default function ArticuloPsicologosPage(): React.JSX.Element {
  return (
    <>
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
            Alquiler de Consultorios para Psicólogos en Montevideo: La Solución
            para Trabajar Tranquilo
          </h1>
          <Indice />

          <p className="mt-12">
            Mi nombre es Gastón y soy psicólogo, sé exactamente lo que significa
            buscar un consultorio en alquiler en Montevideo. He pasado por las
            frustraciones, las incomodidades y todas esas 🚩{" "}
            <span className="text-red-400">banderas rojas</span> que te hacen
            perder tiempo y afectan tu práctica profesional.
          </p>
          <p>
            Por eso creé <strong>Espacio PISAMA</strong>: un espacio de alquiler
            de oficinas por hora en Parque Rodó diseñado específicamente para
            eliminar todos esos problemas. No es solo un lugar más para
            alquilar. Es la solución que yo hubiese querido tener cuando empecé
            a trabajar como psicólogo, y que ahora pongo a disposición de
            colegas que buscan trabajar con tranquilidad y profesionalismo.
          </p>
          {/* --- SECCIÓN 1: EL ENCUADRE --- */}
          <h2 id="encuadre">
            El Consultorio como Encuadre: La Filosofía Detrás de Espacio PISAMA
          </h2>
          <p>
            En la psicología, cuando hablamos del &quot;encuadre
            terapéutico&quot;, pensamos en el horario, los honorarios, nuestro
            rol. Pero el espacio físico es el elemento más tangible de ese
            encuadre, y en Espacio PISAMA lo tomamos muy en serio.
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
            En Espacio PISAMA diseñamos cada detalle para que vos puedas
            liberarte de preocupaciones logísticas y enfocarte exclusivamente en
            el paciente que tenés adelante. Cuando el encuadre es estable, tu
            atención no se desvía, y eso potencia tu trabajo.
          </p>
          {/* --- SECCIÓN 2: LOS 3 PILARES --- */}
          <h2 id="pilares">
            Los 3 Pilares que Hacen de Espacio PISAMA tu Mejor Opción
          </h2>
          <p>
            Hay tres factores que prioricé al diseñar este espacio, porque sé
            que son esenciales para nuestra práctica psicológica:
          </p>
          <h3 id="ambiente-profesional">
            1. Ambientación Profesional: Diseñado por Psicólogos, para
            Psicólogos
          </h3>
          <p>
            He tenido que alquilar consultorios con sillones rotos o llegar a
            barrer antes de que llegara mi paciente. Eso te saca completamente
            de tu rol profesional.{" "}
            <strong>
              Mi esposa también es psicóloga, y juntos diseñamos cada rincón de
              Espacio PISAMA.
            </strong>
          </p>
          <p>
            Buscamos un estilo minimalista pero cálido, profesional y acogedor.
            Un lugar que invite a la calma desde que cruzás la puerta. Los
            muebles, la iluminación, los colores: todo está pensado para generar
            el ambiente terapéutico ideal.
          </p>
          <ImageGallery />
          <h3 id="privacidad-acustica">
            2. Privacidad Acústica: Nuestra Obsesión Principal
          </h3>
          <p>
            He trabajado en lugares donde se escuchaban fragmentos de otras
            sesiones en la sala de espera. Eso es inaceptable.{" "}
            <strong>
              En Espacio PISAMA, la privacidad acústica fue mi obsesión desde el
              inicio.
            </strong>{" "}
            No solo aislamos acústicamente cada consultorio, sino que instalamos
            música ambiental en la sala de espera para enmascarar cualquier
            sonido residual.
          </p>
          <p>
            <strong>Resultado:</strong> Confidencialidad absoluta. Tus pacientes
            pueden hablar con total libertad, sabiendo que nadie más los
            escuchará.
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
            3. Funcionalidad: Cada Detalle Cubierto, Siempre
          </h3>
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
          <h2 id="logistica">
            La Logística que Resolvimos (Para Facilitar la Gestión de tu Agenda)
          </h2>
          <p>
            Más allá del espacio físico, la gestión del día a día puede
            convertirse en una fuente constante de estrés. Por eso desarrollamos
            soluciones específicas:
          </p>
          <h3 id="sistema-reservas">
            Sistema de Reservas Online en Tiempo Real: Adiós al Caos
          </h3>
          <p>
            Al principio de mi carrera, viví la pesadilla de la coordinación por
            mensaje. Consultar disponibilidad, esperar respuesta, confirmar con
            el paciente y, a veces, al volver a contactar, descubrir que la hora
            ya no estaba disponible. Tener que cambiar un horario ya confirmado
            proyecta una imagen poco profesional y desorganizada. Es un desgaste
            innecesario que resolvimos con nuestra plataforma online de reservas
            en tiempo real .
          </p>
          <p>
            <Link href="/disponibilidad">
              Ves la disponibilidad en tiempo real
            </Link>
            , reservás al instante, y confirmás con tu paciente sin riesgo de
            sorpresas. Es simple, rápido y profesional.
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
            Ubicación Estratégica: Parque Rodó, Sin Complicaciones
          </h3>
          <p>
            Espacio PISAMA está en <strong>Parque Rodó</strong>, cerca de
            avenidas principales (Blvr. Artigas, Blvr. España, Rivera, 18 de
            Julio) con excelente acceso en ómnibus. Estamos ubicados en el
            corazón de Montevideo, muy cercano a barrios como Pocitos, Cordón,
            Parque Battle, Punta Carretas y Centro.
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
          <h3 id="comunidad-colegas">
            Comunidad de Colegas Respetuosos: Baja Rotación, Alta Calidad
          </h3>
          <p>
            Otro factor de estrés son los colegas impuntuales. He tenido que
            golpear puertas para que un profesional saliera porque ya era mi
            hora, generando una situación de incomodidad terrible frente a mi
            paciente que esperaba. Por eso, en Espacio Pisama, fomento una
            comunidad de profesionales estable y respetuosa. Nuestro{" "}
            <Link href="/precios">
              sistema de descuentos por cantidad de horas utilizadas por semana
            </Link>
            , es una busqueda de fidelizar a colegas comprometidos que valoren
            tanto su tiempo como el de los demás. Prefiero tener una baja
            rotación y un ambiente de trabajo armónico, como explico en{" "}
            <Link href="/sobre-nosotros">nuestra filosofía</Link>.
          </p>
          {/* --- SECCIÓN 4: BANDERAS ROJAS --- */}
          <h2 id="banderas-rojas">
            En Espacio PISAMA Eliminamos todas las ⚠️{" "}
            <span className="text-red-400">Banderas Rojas </span>
            🚩 al momento de Alquilar un Consultorio Psicológico
          </h2>
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
              <Link href="/app-de-reservas">
                sistema de reservas online en tiempo real
              </Link>
              , reservás en segundos, sin intermediarios.
            </li>
            <li>
              <strong>¿Ambiente desprolijo?</strong>{" "}
              <Link href="/consultorios">Cada consultorio</Link> está impecable,
              siempre. Decoración cuidada, limpieza garantizada.
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
          <h2 id="conclusion">
            Espacio PISAMA: El Consultorio Donde Volvés a lo Esencial
          </h2>
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
            <strong>Espacio PISAMA es tu lugar</strong>. Te invito a conocerlo.
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
          <ConsultorioPsicologosFaqSection />
        </article>
      </main>
      <CtaSection
        title="Reservá tu Hora en Espacio PISAMA Hoy"
        description="Privacidad acústica total, ambiente profesional y reservas en tiempo real. Todo lo que necesitás para trabajar tranquilo está resuelto. Busca tu horario y comenza a reservar hoy mismo."
        buttonText="Ver Disponibilidad en Tiempo Real"
        buttonLink="/disponibilidad"
      />
    </>
  );
}
