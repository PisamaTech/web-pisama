import { Metadata } from "next";
import Link from "next/link";
import {
  FaUserMd,
  FaLaptop,
  FaPenFancy,
  FaMapMarkerAlt,
  FaHandshake,
  FaUsers,
  FaBullhorn,
  FaBuilding,
  FaListAlt,
  FaEnvelope,
} from "react-icons/fa";

import { title, subtitle } from "@/components/primitives";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title:
    "10 Estrategias Efectivas para Conseguir tus Primeros Pacientes | 2025",
  description:
    "Guía completa con estrategias probadas de marketing y networking para psicólogos y terapeutas que inician su práctica privada en Uruguay. Incluye ejemplos prácticos y herramientas digitales.",
  keywords: [
    "conseguir pacientes psicología",
    "marketing terapeutas uruguay",
    "captar clientes consultorio",
    "primeros pacientes psicólogo",
    "estrategias marketing salud mental",
    "cómo conseguir pacientes terapia",
    "networking profesionales salud",
    "marketing digital psicólogos",
    "atraer pacientes consultorio privado",
    "redes sociales terapeutas",
  ],
  alternates: {
    canonical: "/blog/10-estrategias-conseguir-primeros-pacientes",
  },
  openGraph: {
    title:
      "10 Estrategias Efectivas para Conseguir tus Primeros Pacientes | 2026",
    description:
      "Guía completa con estrategias probadas de marketing y networking para psicólogos y terapeutas que inician su práctica privada en Uruguay.",
    url: `${siteConfig.url}/blog/10-estrategias-conseguir-primeros-pacientes`,
    type: "article",
    publishedTime: "2025-11-24",
  },
};

export default function ConseguirPrimerosClientesPage() {
  const breadcrumbItems = [
    {
      name: "Inicio",
      url: siteConfig.url,
    },
    {
      name: "Blog",
      url: `${siteConfig.url}/blog`,
    },
    {
      name: "10 Estrategias para Conseguir Primeros Pacientes",
      url: `${siteConfig.url}/blog/10-estrategias-conseguir-primeros-pacientes`,
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <section className="bg-content4/60 w-full border-b-1 border-content4">
        <div className="container mx-auto max-w-7xl px-4 py-3">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </section>
      <article className="py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <header className="mb-8">
            <p className="text-sm text-foreground/60 mb-2">
              24 de noviembre, 2025
            </p>
            <h1 className={title({ class: "text-primary mb-4" })}>
              10 Estrategias Efectivas para Conseguir tus Primeros Pacientes
            </h1>
            <p className={subtitle({ class: "text-primary-400" })}>
              Guía completa con estrategias probadas de marketing y networking
              para psicólogos y terapeutas que inician su práctica privada en
              Uruguay.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            {/* Introducción */}
            <section className="mb-12">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Iniciar tu práctica privada es emocionante, pero también puede
                ser desafiante cuando te enfrentás al reto de conseguir tus
                primeros pacientes. Muchos psicólogos y terapeutas excelentes
                luchan con esto no porque les falte talento clínico, sino porque
                nunca les enseñaron estrategias de marketing y captación de
                clientes durante su formación.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                La buena noticia es que conseguir pacientes no requiere grandes
                inversiones ni tácticas agresivas de venta. Lo que necesitás es
                una combinación estratégica de presencia digital, networking
                profesional y construcción de confianza en tu comunidad.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                En esta guía vas a descubrir 10 estrategias probadas que te
                ayudarán a atraer a tus primeros pacientes de manera ética,
                profesional y efectiva.
              </p>
            </section>

            {/* Estrategia 1: Definí tu Especialización */}
            <section className="mb-12 bg-content2 p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FaUserMd className="text-2xl text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-2">
                    1. Definí tu Especialización (Nicho)
                  </h2>
                  <p className="text-foreground/70 italic">
                    La especialización te diferencia en un mercado saturado
                  </p>
                </div>
              </div>

              <p className="text-foreground/90 mb-4">
                Uno de los errores más comunes cuando empezás es querer atender
                a &quot;todo el mundo&quot; por miedo a limitar tus
                oportunidades. La realidad es exactamente lo opuesto: ser más
                específico te ayuda a destacarte y atraer exactamente a las
                personas que más necesitan tu ayuda.
              </p>

              <div className="bg-content1 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Ejemplos de nichos específicos:
                </h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>
                    • &quot;Ayudo a parejas con problemas de intimidad tras
                    tener su primer hijo&quot;
                  </li>
                  <li>
                    • &quot;Te ayudo a recuperar tu autoestima tras una relación
                    tóxica&quot;
                  </li>
                  <li>
                    • &quot;Especialista en ansiedad y estrés laboral para
                    profesionales de IT&quot;
                  </li>
                  <li>
                    • &quot;Terapia para adolescentes con dificultades de
                    integración social&quot;
                  </li>
                  <li>
                    • &quot;Coaching nutricional para deportistas amateur&quot;
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Cómo definir tu nicho:
                </h3>
                <ol className="space-y-2 text-foreground/90 list-decimal list-inside">
                  <li>
                    <strong>Identificá qué te apasiona:</strong> ¿Con qué tipo
                    de casos disfrutás más trabajar?
                  </li>
                  <li>
                    <strong>Analizá tu experiencia:</strong> ¿En qué áreas tenés
                    formación específica o experiencia?
                  </li>
                  <li>
                    <strong>Investigá la demanda:</strong> ¿Hay suficientes
                    personas con este problema en tu zona?
                  </li>
                  <li>
                    <strong>Evaluá la competencia:</strong> ¿Hay muchos
                    profesionales ofreciendo exactamente lo mismo?
                  </li>
                </ol>
              </div>

              <p className="text-foreground/80 mt-4 italic">
                💡 <strong>Tip práctico:</strong> Podés tener más de un nicho,
                pero al principio es mejor enfocarte en uno o dos máximo para
                que tu mensaje sea claro y efectivo.
              </p>
            </section>

            {/* Estrategia 2: Creá tu Presencia Digital */}
            <section className="mb-12 bg-content2 p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FaLaptop className="text-2xl text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-2">
                    2. Creá tu Presencia Digital (Web + Redes Sociales)
                  </h2>
                  <p className="text-foreground/70 italic">
                    Tu vitrina profesional que trabaja 24/7 para vos
                  </p>
                </div>
              </div>

              <p className="text-foreground/90 mb-4">
                En 2025, la mayoría de las personas buscan profesionales de
                salud mental en Google antes de tomar una decisión. Si no tenés
                presencia digital, simplemente no existís para ese paciente
                potencial.
              </p>

              <div className="bg-content1 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Tu sitio web profesional debe incluir:
                </h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>
                    • <strong>Sobre vos:</strong> Quién sos, tu formación,
                    experiencia y enfoque terapéutico
                  </li>
                  <li>
                    • <strong>Especialidades:</strong> Problemas específicos que
                    tratás
                  </li>
                  <li>
                    • <strong>Tarifas:</strong> Al menos un rango de precios
                    (genera confianza)
                  </li>
                  <li>
                    • <strong>Ubicación y contacto:</strong> Dónde te encontrás
                    y cómo agendar
                  </li>
                  <li>
                    • <strong>Blog o recursos:</strong> Contenido útil que
                    demuestre tu expertise
                  </li>
                  <li>
                    • <strong>Testimonios:</strong> Opiniones de pacientes
                    anteriores (anónimas)
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary mb-4">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Redes sociales: elegí calidad sobre cantidad
                </h3>
                <p className="text-foreground/90 mb-3">
                  No necesitás estar en todas las redes sociales. Es mejor
                  centrarte en una o dos y aprovecharlas al máximo. Para
                  profesionales de salud mental, Instagram es particularmente
                  efectivo porque transmite cercanía y permite crear un clima de
                  confianza.
                </p>
                <ul className="space-y-2 text-foreground/90">
                  <li>
                    • <strong>Instagram:</strong> Ideal para contenido visual,
                    frases motivacionales, tips breves
                  </li>
                  <li>
                    • <strong>LinkedIn:</strong> Perfecto para conectar con
                    otros profesionales y empresas
                  </li>
                  <li>
                    • <strong>Facebook:</strong> Útil para grupos locales y
                    eventos comunitarios
                  </li>
                </ul>
              </div>

              <p className="text-foreground/80 italic">
                💡 <strong>Tip práctico:</strong> Si estás arrancando con bajo
                presupuesto, podés crear un sitio web simple con plataformas
                como WordPress, Wix o Squarespace por menos de $20 USD/mes.
              </p>
            </section>

            {/* Estrategia 3: Marketing de Contenidos */}
            <section className="mb-12 bg-content2 p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FaPenFancy className="text-2xl text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-2">
                    3. Marketing de Contenidos: Educá y Construí Confianza
                  </h2>
                  <p className="text-foreground/70 italic">
                    El contenido de valor te posiciona como referente
                  </p>
                </div>
              </div>

              <p className="text-foreground/90 mb-4">
                Escribir artículos y crear contenido (videos, imágenes,
                podcasts, infografías) para redes sociales es una forma ideal
                para que tus potenciales pacientes te conozcan, aportando
                herramientas o consejos de valor.
              </p>

              <div className="bg-content1 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Ideas de contenido que funcionan:
                </h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>
                    • <strong>Mitos vs. Realidades:</strong> &quot;5 mitos sobre
                    la terapia de pareja&quot;
                  </li>
                  <li>
                    • <strong>Tips prácticos:</strong> &quot;3 ejercicios para
                    manejar la ansiedad en el momento&quot;
                  </li>
                  <li>
                    • <strong>Casos de estudio:</strong> &quot;Cómo María superó
                    su miedo a hablar en público&quot; (anónimo)
                  </li>
                  <li>
                    • <strong>Preguntas frecuentes:</strong> &quot;¿Cuántas
                    sesiones voy a necesitar?&quot;
                  </li>
                  <li>
                    • <strong>Detrás de escena:</strong> &quot;Un día en mi
                    consultorio&quot;
                  </li>
                  <li>
                    • <strong>Recursos gratuitos:</strong> &quot;Descargá mi
                    guía de 7 días para mejorar tu autoestima&quot;
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Calendario de contenido sugerido:
                </h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>
                    • <strong>Lunes:</strong> Tip o consejo práctico (imagen con
                    frase)
                  </li>
                  <li>
                    • <strong>Miércoles:</strong> Artículo educativo o video
                    corto
                  </li>
                  <li>
                    • <strong>Viernes:</strong> Pregunta a tu audiencia o
                    reflexión
                  </li>
                  <li>
                    • <strong>Historias diarias:</strong> Contenido más informal
                    y cercano
                  </li>
                </ul>
              </div>

              <p className="text-foreground/80 mt-4 italic">
                💡 <strong>Tip práctico:</strong> No necesitás ser perfecto. La
                consistencia vale más que la perfección. Es mejor publicar
                contenido bueno regularmente que contenido &quot;perfecto&quot;
                cada dos meses.
              </p>
            </section>

            {/* Estrategia 4: Google My Business */}
            <section className="mb-12 bg-content2 p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FaMapMarkerAlt className="text-2xl text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-2">
                    4. Optimizá tu Ficha de Google My Business
                  </h2>
                  <p className="text-foreground/70 italic">
                    Aparecé en los primeros resultados de búsqueda local
                  </p>
                </div>
              </div>

              <p className="text-foreground/90 mb-4">
                Crear tu ficha de Google My Business es completamente gratuito y
                te permite aparecer en los primeros resultados a nivel local con
                el mapa de Google. Cuando alguien busca &quot;psicólogo en
                Pocitos&quot; o &quot;terapeuta cerca de mí&quot;, tu ficha
                puede aparecer en los primeros 3 resultados.
              </p>

              <div className="bg-content1 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Pasos para optimizar tu ficha:
                </h3>
                <ol className="space-y-2 text-foreground/90 list-decimal list-inside">
                  <li>
                    <strong>Creá tu perfil:</strong> Andá a{" "}
                    <a
                      href="https://www.google.com/business/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline"
                    >
                      google.com/business
                    </a>{" "}
                    y registrá tu consultorio
                  </li>
                  <li>
                    <strong>Verificá tu ubicación:</strong> Google te enviará un
                    código por correo postal
                  </li>
                  <li>
                    <strong>Completá TODA la información:</strong> Horarios,
                    servicios, fotos del consultorio, descripción
                  </li>
                  <li>
                    <strong>Agregá fotos de calidad:</strong> Interior del
                    consultorio, zona de espera, tu foto profesional
                  </li>
                  <li>
                    <strong>Seleccioná categorías correctas:</strong>
                    &quot;Psicólogo&quot;, &quot;Psicólogo
                    infantil&quot;,&quot;Nutricionista&quot;, etc.
                  </li>
                  <li>
                    <strong>Pedí reseñas:</strong> Solicitá a tus pacientes
                    satisfechos que dejen una opinión
                  </li>
                </ol>
              </div>

              <div className="bg-warning/10 p-6 rounded-lg border-l-4 border-warning">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  ⚠️ Error común a evitar:
                </h3>
                <p className="text-foreground/90">
                  Muchos profesionales crean su ficha pero nunca la completan.
                  Una ficha incompleta o sin fotos genera desconfianza. Dedicále
                  1-2 horas a completarla bien y actualizala regularmente.
                </p>
              </div>

              <p className="text-foreground/80 mt-4 italic">
                💡 <strong>Tip práctico:</strong> Respondé a TODAS las reseñas
                (buenas y malas). Esto demuestra profesionalismo y que te
                importa la experiencia de tus pacientes.
              </p>
            </section>

            {/* Estrategia 5: Networking Profesional */}
            <section className="mb-12 bg-content2 p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FaHandshake className="text-2xl text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-2">
                    5. Networking Profesional: Construí Relaciones
                  </h2>
                  <p className="text-foreground/70 italic">
                    Las referencias profesionales son una fuente invaluable de
                    pacientes
                  </p>
                </div>
              </div>

              <p className="text-foreground/90 mb-4">
                Muchos pacientes llegan a través de recomendaciones de otros
                profesionales: médicos de familia, psiquiatras, otros
                psicólogos, maestros, orientadores educativos. Construir una red
                de contactos profesionales es esencial.
              </p>

              <div className="bg-content1 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Profesionales clave para conectar:
                </h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>
                    • <strong>Médicos generales y psiquiatras:</strong> Suelen
                    derivar pacientes que necesitan terapia
                  </li>
                  <li>
                    • <strong>Otros psicólogos/terapeutas:</strong> Derivación
                    mutua según especialidad
                  </li>
                  <li>
                    • <strong>Nutricionistas y entrenadores:</strong>
                    Complementariedad en trastornos alimentarios y bienestar
                  </li>
                  <li>
                    • <strong>Maestros y orientadores:</strong> Casos de niños y
                    adolescentes
                  </li>
                  <li>
                    • <strong>Coaches y consultores organizacionales:</strong>
                    Terapia individual para sus clientes
                  </li>
                  <li>
                    • <strong>Abogados (familia/divorcios):</strong> Terapia de
                    pareja o individual en procesos legales
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Cómo iniciar la conexión:
                </h3>
                <ol className="space-y-2 text-foreground/90 list-decimal list-inside">
                  <li>
                    <strong>Email de presentación:</strong> Simple, profesional,
                    destacando tu especialización
                  </li>
                  <li>
                    <strong>Café o videollamada informal:</strong> Conocerse y
                    explorar colaboraciones
                  </li>
                  <li>
                    <strong>Participá en eventos profesionales:</strong>{" "}
                    Congresos, jornadas, workshops de tu área
                  </li>
                  <li>
                    <strong>Ofrecé colaboraciones:</strong> Charlas conjuntas,
                    artículos, webinars
                  </li>
                  <li>
                    <strong>Mantené contacto regular:</strong> Un email
                    trimestral compartiendo novedades
                  </li>
                </ol>
              </div>

              <p className="text-foreground/80 mt-4 italic">
                💡 <strong>Tip práctico:</strong> Creá una tarjeta de
                presentación profesional con tu especialización clara. Dejá
                tarjetas en consultorios médicos, centros de yoga, gimnasios
                (donde sea apropiado).
              </p>
            </section>

            {/* Estrategia 6: Programa de Referidos */}
            <section className="mb-12 bg-content2 p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FaUsers className="text-2xl text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-2">
                    6. Programa de Referidos: Incentivá Recomendaciones
                  </h2>
                  <p className="text-foreground/70 italic">
                    Tus pacientes actuales pueden ser tus mejores promotores
                  </p>
                </div>
              </div>

              <p className="text-foreground/90 mb-4">
                El boca a boca es la forma más común y efectiva de conseguir
                pacientes cuando tenés experiencia y reputación. Pero no tenés
                que esperar a que suceda espontáneamente: podés incentivarlo de
                manera ética.
              </p>

              <div className="bg-content1 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Incentivos éticos para referencias:
                </h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>
                    • <strong>Descuento en próxima sesión:</strong> $200-$300
                    OFF por cada paciente referido
                  </li>
                  <li>
                    • <strong>Sesión gratuita cada 3 referencias:</strong> La
                    cuarta sesión gratis
                  </li>
                  <li>
                    • <strong>Recurso exclusivo:</strong> Acceso a una guía,
                    workshop o material especial
                  </li>
                  <li>
                    • <strong>Sesión extra sin costo:</strong> Si refieren a un
                    familiar directo
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Cómo comunicar tu programa de referidos:
                </h3>
                <ol className="space-y-2 text-foreground/90 list-decimal list-inside">
                  <li>
                    Mencionalo naturalmente al final de una sesión exitosa:
                    &quot;Si conocés a alguien que pueda beneficiarse de
                    terapia, estaré encantado/a de ayudar&quot;
                  </li>
                  <li>
                    Incluí un tarjetón con la información en tu sala de espera
                  </li>
                  <li>
                    Enviá un email trimestral a tus pacientes actuales
                    recordándolo
                  </li>
                  <li>
                    Hacé visible el incentivo en tu sitio web y redes sociales
                  </li>
                </ol>
              </div>

              <div className="bg-warning/10 p-6 rounded-lg border-l-4 border-warning mt-4">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  ⚠️ Consideración ética:
                </h3>
                <p className="text-foreground/90">
                  Asegurate de que cualquier programa de referidos cumpla con el
                  código de ética de tu profesión. El incentivo nunca debe
                  comprometer la calidad de atención ni crear presión indebida
                  en tus pacientes.
                </p>
              </div>

              <p className="text-foreground/80 mt-4 italic">
                💡 <strong>Tip práctico:</strong> No tengas miedo de pedir
                referencias directamente. La mayoría de pacientes satisfechos
                están felices de recomendar, solo necesitan que se los
                recuerdes.
              </p>
            </section>

            {/* Estrategia 7: Charlas y Talleres Gratuitos */}
            <section className="mb-12 bg-content2 p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FaBullhorn className="text-2xl text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-2">
                    7. Charlas y Talleres Gratuitos
                  </h2>
                  <p className="text-foreground/70 italic">
                    Demostrá tu valor y generá confianza en persona
                  </p>
                </div>
              </div>

              <p className="text-foreground/90 mb-4">
                Ofrecer charlas, talleres o webinars gratuitos es una excelente
                forma de darte a conocer, demostrar tu expertise y construir
                confianza con potenciales pacientes. Las personas que asisten ya
                están interesadas en el tema y son leads de alta calidad.
              </p>

              <div className="bg-content1 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Ideas de talleres que funcionan:
                </h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>
                    •{" "}
                    <strong>
                      &quot;Gestión del Estrés en el Trabajo&quot;:
                    </strong>{" "}
                    Para empresas u oficinas
                  </li>
                  <li>
                    • <strong>&quot;Comunicación en la Pareja&quot;:</strong>{" "}
                    Workshop de 90 minutos para parejas
                  </li>
                  <li>
                    •{" "}
                    <strong>
                      &quot;Técnicas de Relajación para la Ansiedad&quot;:
                    </strong>{" "}
                    Sesión práctica con ejercicios
                  </li>
                  <li>
                    • <strong>&quot;Crianza Positiva&quot;:</strong> Para padres
                    en escuelas o centros comunitarios
                  </li>
                  <li>
                    •{" "}
                    <strong>
                      &quot;Autoestima y Empoderamiento Femenino&quot;:
                    </strong>{" "}
                    En centros culturales o clubes
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Dónde ofrecer tus talleres:
                </h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>
                    • <strong>Centros culturales municipales:</strong> Suelen
                    buscar talleristas
                  </li>
                  <li>
                    • <strong>Bibliotecas públicas:</strong> Espacios de
                    encuentro comunitario
                  </li>
                  <li>
                    • <strong>Coworkings:</strong> Para profesionales y
                    emprendedores
                  </li>
                  <li>
                    • <strong>Empresas:</strong> Programas de bienestar laboral
                  </li>
                  <li>
                    • <strong>Escuelas y liceos:</strong> Charlas para padres o
                    docentes
                  </li>
                  <li>
                    • <strong>Online (Zoom/Meet):</strong> Webinars desde tu
                    casa
                  </li>
                </ul>
              </div>

              <p className="text-foreground/80 mt-4 italic">
                💡 <strong>Tip práctico:</strong> Al final del taller, ofrecé
                una &quot;sesión de consulta gratis de 20 minutos&quot; para
                quienes quieran profundizar. Muchos de ellos se convertirán en
                pacientes.
              </p>
            </section>

            {/* Estrategia 8: Colaboraciones con Instituciones */}
            <section className="mb-12 bg-content2 p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FaBuilding className="text-2xl text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-2">
                    8. Colaboraciones con Instituciones
                  </h2>
                  <p className="text-foreground/70 italic">
                    Accedé a grupos grandes de potenciales pacientes
                  </p>
                </div>
              </div>

              <p className="text-foreground/90 mb-4">
                Establecer acuerdos con instituciones educativas, empresas o
                centros comunitarios te permite acceder a grupos grandes de
                personas que podrían necesitar tus servicios.
              </p>

              <div className="bg-content1 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Tipos de colaboraciones institucionales:
                </h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>
                    • <strong>Empresas (RR.HH.):</strong> Programas de bienestar
                    laboral, EAP (Employee Assistance Program)
                  </li>
                  <li>
                    • <strong>Escuelas y universidades:</strong> Servicio de
                    apoyo psicológico para estudiantes
                  </li>
                  <li>
                    • <strong>Gimnasios y centros deportivos:</strong> Talleres
                    sobre motivación, manejo de presión
                  </li>
                  <li>
                    • <strong>Mutualistas y prestadores de salud:</strong>
                    Convenios como profesional externo
                  </li>
                  <li>
                    • <strong>ONGs y fundaciones:</strong> Atención a
                    poblaciones específicas
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Cómo proponer una colaboración:
                </h3>
                <ol className="space-y-2 text-foreground/90 list-decimal list-inside">
                  <li>
                    <strong>Investigá la institución:</strong> Entendé sus
                    necesidades y valores
                  </li>
                  <li>
                    <strong>Creá una propuesta de valor:</strong> ¿Qué problema
                    les resolvés?
                  </li>
                  <li>
                    <strong>Presentá opciones flexibles:</strong> Tarifas
                    corporativas, paquetes, descuentos por volumen
                  </li>
                  <li>
                    <strong>Ofrecé un piloto:</strong> 1-2 meses de prueba a
                    tarifa reducida
                  </li>
                  <li>
                    <strong>Medí resultados:</strong> Encuestas de satisfacción,
                    indicadores de uso
                  </li>
                </ol>
              </div>

              <p className="text-foreground/80 mt-4 italic">
                💡 <strong>Tip práctico:</strong> Las empresas suelen tener
                presupuestos para bienestar laboral. Contactá directamente al
                departamento de Recursos Humanos con una propuesta clara.
              </p>
            </section>

            {/* Estrategia 9: Directorios Especializados */}
            <section className="mb-12 bg-content2 p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FaListAlt className="text-2xl text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-2">
                    9. Presencia en Directorios Especializados
                  </h2>
                  <p className="text-foreground/70 italic">
                    Aparecé donde tus pacientes te están buscando
                  </p>
                </div>
              </div>

              <p className="text-foreground/90 mb-4">
                Los directorios especializados son sitios donde las personas
                buscan activamente profesionales de salud mental. Estar listado
                en estos lugares aumenta significativamente tu visibilidad.
              </p>

              <div className="bg-content1 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Directorios recomendados en Uruguay:
                </h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>
                    • <strong>Psicólogos Uruguay:</strong>{" "}
                    <a
                      href="https://psicologosuruguay.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline"
                    >
                      psicologosuruguay.com
                    </a>{" "}
                    - Directorio local popular
                  </li>
                  <li>
                    • <strong>Doctoralia:</strong> Plataforma de reserva online
                    con reseñas
                  </li>
                  <li>
                    • <strong>ZocDoc / Saludonline:</strong> Agenda online para
                    profesionales de salud
                  </li>
                  <li>
                    • <strong>Colegio de Psicólogos del Uruguay:</strong>{" "}
                    Directorio oficial de colegiados
                  </li>
                  <li>
                    • <strong>BetterHelp / Talkspace:</strong> Plataformas
                    internacionales de terapia online
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Optimizá tu perfil en directorios:
                </h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>
                    • <strong>Foto profesional de calidad:</strong> Sonriente y
                    accesible
                  </li>
                  <li>
                    • <strong>Descripción completa:</strong> Formación,
                    especialidades, enfoque
                  </li>
                  <li>
                    • <strong>Palabras clave relevantes:</strong> Trastornos o
                    problemas que tratás
                  </li>
                  <li>
                    • <strong>Disponibilidad actualizada:</strong> Horarios,
                    modalidad (presencial/online)
                  </li>
                  <li>
                    • <strong>Reseñas y testimonios:</strong> Pedí a pacientes
                    que te dejen opiniones
                  </li>
                </ul>
              </div>

              <p className="text-foreground/80 mt-4 italic">
                💡 <strong>Tip práctico:</strong> Muchos directorios ofrecen
                perfil gratuito básico. Empezá con esos y luego evaluá si vale
                la pena invertir en membresías premium que te dan más
                visibilidad.
              </p>
            </section>

            {/* Estrategia 10: Estrategia de Seguimiento */}
            <section className="mb-12 bg-content2 p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FaEnvelope className="text-2xl text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-2">
                    10. Estrategia de Seguimiento y Nurturing
                  </h2>
                  <p className="text-foreground/70 italic">
                    No todos están listos para empezar hoy, mantené el contacto
                  </p>
                </div>
              </div>

              <p className="text-foreground/90 mb-4">
                Muchas personas que te contactan no están listas para empezar
                terapia inmediatamente. Puede ser por presupuesto, timing, o
                simplemente porque están investigando opciones. Una estrategia
                de seguimiento te permite mantenerte presente hasta que estén
                listos.
              </p>

              <div className="bg-content1 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Herramientas de seguimiento:
                </h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>
                    • <strong>Newsletter mensual:</strong> Tips, recursos,
                    novedades de tu práctica
                  </li>
                  <li>
                    • <strong>Lista de espera con recordatorios:</strong> Email
                    cuando se abre un espacio
                  </li>
                  <li>
                    • <strong>WhatsApp Business:</strong> Mensajes automatizados
                    de bienvenida y recordatorios
                  </li>
                  <li>
                    • <strong>Contenido descargable:</strong> Guías, worksheets
                    a cambio de email
                  </li>
                  <li>
                    • <strong>Secuencia de emails de bienvenida:</strong> 3-5
                    emails educativos para nuevos contactos
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Ejemplo de secuencia de seguimiento:
                </h3>
                <ol className="space-y-2 text-foreground/90 list-decimal list-inside">
                  <li>
                    <strong>Día 0 (inmediato):</strong> Email de bienvenida con
                    recursos gratuitos
                  </li>
                  <li>
                    <strong>Día 3:</strong> &quot;5 señales de que podrías
                    beneficiarte de terapia&quot;
                  </li>
                  <li>
                    <strong>Día 7:</strong> &quot;Cómo es una primera sesión
                    conmigo&quot;
                  </li>
                  <li>
                    <strong>Día 14:</strong> Testimonios de pacientes (anónimos)
                  </li>
                  <li>
                    <strong>Día 21:</strong> &quot;¿Tenés alguna pregunta? Estoy
                    acá para ayudarte&quot;
                  </li>
                  <li>
                    <strong>Mensual:</strong> Newsletter con contenido de valor
                  </li>
                </ol>
              </div>

              <div className="bg-warning/10 p-6 rounded-lg border-l-4 border-warning mt-4">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  ⚠️ Importante:
                </h3>
                <p className="text-foreground/90">
                  Siempre incluí una opción clara de &quot;darse de baja&quot; y
                  respetá la privacidad de tus contactos. El objetivo es aportar
                  valor, no presionar.
                </p>
              </div>

              <p className="text-foreground/80 mt-4 italic">
                💡 <strong>Tip práctico:</strong> Usá herramientas gratuitas
                como Mailchimp (hasta 500 contactos) o WhatsApp Business para
                empezar. No necesitás tecnología sofisticada al principio.
              </p>
            </section>

            {/* Bonus: Errores a Evitar */}
            <section className="mb-12 bg-danger/10 p-8 rounded-lg border-2 border-danger/30">
              <h2 className="text-3xl font-bold text-danger mb-4">
                ⚠️ Errores Comunes que Debes Evitar
              </h2>

              <ul className="space-y-4 text-foreground/90">
                <li className="flex gap-3">
                  <span className="text-danger font-bold">❌</span>
                  <div>
                    <strong className="text-primary">
                      Querer abarcar todo el mercado:
                    </strong>{" "}
                    &quot;Atiendo cualquier problema&quot; te hace invisible.
                    Especializate.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-danger font-bold">❌</span>
                  <div>
                    <strong className="text-primary">
                      Inconsistencia en contenido:
                    </strong>{" "}
                    Publicar por 2 semanas y desaparecer 3 meses no funciona.
                    Mejor poco pero constante.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-danger font-bold">❌</span>
                  <div>
                    <strong className="text-primary">
                      No tener tarifa clara:
                    </strong>{" "}
                    Ocultar precios genera desconfianza. Al menos indicá un
                    rango.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-danger font-bold">❌</span>
                  <div>
                    <strong className="text-primary">
                      Ignorar el seguimiento:
                    </strong>{" "}
                    90% de conversiones no suceden en el primer contacto.
                    Necesitás seguimiento.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-danger font-bold">❌</span>
                  <div>
                    <strong className="text-primary">
                      Esperar resultados inmediatos:
                    </strong>{" "}
                    Construir una práctica lleva 6-12 meses. Sé paciente y
                    constante.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-danger font-bold">❌</span>
                  <div>
                    <strong className="text-primary">
                      No medir tus resultados:
                    </strong>{" "}
                    Seguí de dónde vienen tus pacientes para invertir más en lo
                    que funciona.
                  </div>
                </li>
              </ul>
            </section>

            {/* Plan de Acción de 30 Días */}
            <section className="mb-12 bg-success/10 p-8 rounded-lg border-2 border-success/30">
              <h2 className="text-3xl font-bold text-success mb-4">
                ✅ Plan de Acción de 30 Días
              </h2>
              <p className="text-foreground/90 mb-6">
                No intentes implementar las 10 estrategias al mismo tiempo. Acá
                tenés un plan realista para empezar:
              </p>

              <div className="space-y-6">
                <div className="bg-content1 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Semana 1: Fundamentos
                  </h3>
                  <ul className="space-y-2 text-foreground/90">
                    <li>✓ Definir tu nicho y mensaje (Estrategia #1)</li>
                    <li>
                      ✓ Crear ficha de Google My Business completa (Estrategia
                      #4)
                    </li>
                    <li>
                      ✓ Registrarte en 2-3 directorios gratuitos (Estrategia #9)
                    </li>
                  </ul>
                </div>

                <div className="bg-content1 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Semana 2: Presencia Digital
                  </h3>
                  <ul className="space-y-2 text-foreground/90">
                    <li>
                      ✓ Crear o mejorar tu sitio web básico (Estrategia #2)
                    </li>
                    <li>
                      ✓ Configurar perfil profesional en Instagram (Estrategia
                      #2)
                    </li>
                    <li>
                      ✓ Publicar tu primer contenido de valor (Estrategia #3)
                    </li>
                  </ul>
                </div>

                <div className="bg-content1 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Semana 3: Networking
                  </h3>
                  <ul className="space-y-2 text-foreground/90">
                    <li>
                      ✓ Contactar 5 profesionales para networking (Estrategia
                      #5)
                    </li>
                    <li>
                      ✓ Diseñar una propuesta para taller gratuito (Estrategia
                      #7)
                    </li>
                    <li>
                      ✓ Identificar 3 instituciones para colaborar (Estrategia
                      #8)
                    </li>
                  </ul>
                </div>

                <div className="bg-content1 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Semana 4: Sistematización
                  </h3>
                  <ul className="space-y-2 text-foreground/90">
                    <li>
                      ✓ Crear calendario de contenido para próximo mes
                      (Estrategia #3)
                    </li>
                    <li>
                      ✓ Configurar sistema de seguimiento simple (Estrategia
                      #10)
                    </li>
                    <li>
                      ✓ Definir programa de referidos básico (Estrategia #6)
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Conclusión */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Conclusión: Empezá Hoy, Mejorá Mañana
              </h2>
              <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                Conseguir tus primeros pacientes no requiere ser un experto en
                marketing ni invertir fortunas. Requiere consistencia,
                autenticidad y disposición para probar diferentes estrategias
                hasta encontrar las que mejor funcionan para vos y tu práctica.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                Recordá que cada psicólogo o terapeuta exitoso que admirás
                empezó exactamente donde estás vos ahora: con cero pacientes y
                mucha incertidumbre. La diferencia está en tomar acción
                consistente.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                Elegí 2-3 estrategias de esta guía que más resuenen con tu
                estilo y personalidad, implementalas durante 3 meses, medí
                resultados y ajustá. No vas a ver resultados de la noche a la
                mañana, pero si mantenés el rumbo, en 6 meses tu agenda se verá
                completamente diferente.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-lg text-foreground/90 font-semibold">
                  Tu próximo paso es simple:{" "}
                  <span className="text-primary">
                    elegí UNA estrategia y empezá HOY.
                  </span>{" "}
                  No la semana que viene. Hoy.
                </p>
              </div>
            </section>

            {/* CTA Final */}
            <section className="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold text-primary mb-4">
                ¿Necesitás un Consultorio para Empezar tu Práctica?
              </h2>
              <p className="text-lg text-foreground/90 mb-6">
                En{" "}
                <Link
                  href="/"
                  className="text-secondary font-semibold hover:underline"
                >
                  Espacio Pisama
                </Link>{" "}
                ofrecemos alquiler de consultorios por hora en Montevideo,
                ideales para profesionales que están comenzando. Sin compromisos
                a largo plazo, con agenda flexible y equipamiento completo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/consultorios"
                  className="px-8 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
                >
                  Ver Consultorios Disponibles
                </Link>
                <Link
                  href="/precios"
                  className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Consultar Precios
                </Link>
              </div>
            </section>

            {/* Artículos Relacionados */}
            <section className="mt-12 pt-8 border-t-2 border-content4">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Artículos Relacionados
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Link
                  href="/blog/como-empezar-consultorio-privado-montevideo"
                  className="block p-6 bg-content2 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Guía Completa: Cómo Empezar tu Consultorio Privado en
                    Montevideo
                  </h3>
                  <p className="text-foreground/70">
                    Todo lo que necesitás saber para iniciar tu práctica privada
                    exitosamente.
                  </p>
                </Link>
                <Link
                  href="/blog/como-fijar-tarifas-psicologo-uruguay"
                  className="block p-6 bg-content2 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Cómo Fijar tus Tarifas como Psicólogo Independiente
                  </h3>
                  <p className="text-foreground/70">
                    Guía definitiva para establecer honorarios justos y
                    rentables en Uruguay.
                  </p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
