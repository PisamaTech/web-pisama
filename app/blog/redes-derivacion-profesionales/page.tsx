import { Card, CardBody } from "@heroui/card";
import { Metadata } from "next";
import Link from "next/link";
import {
  FaCheckCircle,
  FaComments,
  FaHandshake,
  FaUserShield,
} from "react-icons/fa";

import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title:
    "Redes de derivación entre profesionales: cómo construir vínculos de confianza | Espacio Pisama",
  description:
    "Derivar también es cuidar. Guía para construir una red de derivación entre profesionales de la salud: criterios de confianza, confidencialidad y cómo proponer una derivación sin decidir por el paciente.",
  keywords: [
    "red de derivación profesionales",
    "derivar pacientes psicología",
    "red de colegas terapeutas",
    "derivación entre psicólogos",
    "vínculos profesionales salud",
    "confidencialidad derivación pacientes",
    "cómo derivar un paciente",
    "trabajo interdisciplinario salud mental",
  ],
  alternates: {
    canonical: "/blog/redes-derivacion-profesionales",
  },
  openGraph: {
    title:
      "Redes de derivación entre profesionales: cómo construir vínculos de confianza",
    description:
      "Derivar también es cuidar. Criterios de confianza, confidencialidad y pasos prácticos para construir una red de derivación sólida.",
    type: "article",
    publishedTime: "2026-09-30T00:00:00Z",
    authors: ["Espacio PISAMA"],
  },
};

export default function RedesDerivacionProfesionalesPage() {
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
      name: "Redes de derivación entre profesionales",
      url: `${siteConfig.url}/blog/redes-derivacion-profesionales`,
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <section className="bg-content4 w-full">
        <div className="container mx-auto max-w-7xl px-4 py-3">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </section>

      <article className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Redes de derivación entre profesionales: cómo construir vínculos
              de confianza
            </h1>
            <p className="text-xl text-foreground/80 mb-4">
              Derivar también es cuidar. Una red de derivación no es una lista
              de contactos: son relaciones de confianza que se construyen con
              criterios claros, comunicación y respeto por la autonomía del
              paciente.
            </p>
            <div className="flex gap-4 text-sm text-foreground/60">
              <time dateTime="2026-09-30">30 de septiembre, 2026</time>
              <span>•</span>
              <span>8 min de lectura</span>
            </div>
          </header>

          {/* Introducción */}
          <section className="mb-12">
            <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
              En la práctica independiente es frecuente encontrarse con
              consultas que exceden el propio alcance: una especialidad que no
              se trabaja, horarios que no coinciden o un abordaje complementario
              que podría enriquecer el proceso. En esos casos, la mejor
              respuesta muchas veces es recomendar a un colega.
            </p>
            <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
              Puede tratarse de una derivación por especialidad, por
              disponibilidad o de una intervención complementaria que se suma al
              tratamiento en curso. En cualquiera de estos escenarios, la
              calidad de la recomendación depende de la calidad del vínculo
              previo entre profesionales.
            </p>
            <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
              Una red de derivación no es una lista de nombres ni un intercambio
              de favores. Son relaciones de confianza construidas con tiempo,
              criterios explícitos y conversaciones honestas sobre los límites
              de cada práctica.
            </p>
          </section>

          {/* 1. Derivar también es cuidar */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              1. Derivar también es cuidar
            </h2>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Reconocer los propios límites es parte del trabajo profesional. Un
              psicólogo que trabaja con adultos puede recibir una consulta por
              atención infantil y saber que no es su campo. Otro profesional
              puede identificar que una persona necesita primero una evaluación
              de otra disciplina, o que sus horarios disponibles simplemente no
              coinciden con los del consultante.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Conviene distinguir dos situaciones. La derivación como
              transferencia ocurre cuando otro profesional queda a cargo de un
              aspecto del cuidado o del proceso completo. La intervención
              complementaria, en cambio, suma una mirada adicional sin
              reemplazar el tratamiento en curso, como cuando se sugiere una
              evaluación puntual mientras el proceso principal continúa.
            </p>
            <Card className="bg-primary/5 border-l-4 border-primary">
              <CardBody className="p-6">
                <p className="text-foreground/90 leading-relaxed">
                  <strong>
                    El objetivo no es intercambiar pacientes, sino ayudar a que
                    cada persona encuentre una atención adecuada a sus
                    necesidades.
                  </strong>
                </p>
              </CardBody>
            </Card>
          </section>

          {/* 2. La confianza necesita algo más que un contacto */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              2. La confianza necesita algo más que un contacto
            </h2>
            <p className="text-foreground/90 mb-6 leading-relaxed">
              Tener el teléfono de alguien no alcanza para recomendarlo con
              tranquilidad. Para derivar con criterio es necesario conocer, al
              menos en términos generales, cómo trabaja la otra persona:
            </p>
            <Card className="bg-content2 mb-6">
              <CardBody className="p-6">
                <ul className="space-y-3 text-sm text-foreground/90">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Formación y alcance:</strong> qué áreas trabaja y
                      cuáles quedan fuera de su práctica.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Población con la que trabaja:</strong> edades,
                      problemáticas frecuentes y encuadres habituales.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Experiencia y enfoque:</strong> trayectoria y modo
                      de trabajo, sin necesidad de conocer cada detalle técnico.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <strong>
                        Modalidad, ubicación, honorarios y disponibilidad:
                      </strong>{" "}
                      condiciones prácticas que determinan si la recomendación
                      es viable.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Límites:</strong> qué situaciones prefiere no
                      tomar y cómo lo comunica.
                    </span>
                  </li>
                </ul>
              </CardBody>
            </Card>
            <p className="text-foreground/90 leading-relaxed">
              La afinidad personal ayuda, pero no reemplaza la competencia. Caer
              bien no es lo mismo que trabajar bien un área, y las disciplinas
              no son intercambiables: cada una aporta una mirada específica que
              conviene conocer antes de recomendar.
            </p>
          </section>

          {/* 3. Cómo empezar a construir una red */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
              <FaHandshake className="text-secondary-500" />
              3. Cómo empezar a construir una red
            </h2>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Un buen punto de partida es observar las consultas que no se
              pueden responder: qué motivos se repiten, qué franjas horarias
              quedan sin cubrir, qué perfiles se derivan con más frecuencia.
              Esas necesidades insatisfechas muestran qué vínculos conviene
              construir primero.
            </p>
            <p className="text-foreground/90 mb-6 leading-relaxed">
              A partir de ahí, los contactos funcionan mejor cuando son
              intencionales. Una presentación breve y honesta abre más puertas
              que un mensaje genérico:
            </p>
            <Card className="bg-primary/5 mb-6">
              <CardBody className="p-6">
                <div className="flex items-start gap-3">
                  <FaComments className="text-secondary-500 text-xl flex-shrink-0 mt-1" />
                  <p className="text-sm text-foreground/90 italic leading-relaxed">
                    &quot;Hola, soy psicóloga y trabajo principalmente con
                    adultos. A veces recibo consultas por atención infantil y me
                    gustaría conocer mejor tu trabajo para tener una referencia
                    cuando corresponda. ¿Te parece que coordinemos una
                    conversación breve?&quot;
                  </p>
                </div>
              </CardBody>
            </Card>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Esas conversaciones sirven para conocer criterios de trabajo y
              cuestiones logísticas: cómo es el primer contacto, qué información
              necesita cada parte, qué tiempos de respuesta son razonables. Todo
              esto se conversa en términos generales, sin incluir información
              que identifique a ningún paciente.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Las instancias de formación, la supervisión, las asociaciones
              profesionales y los espacios compartidos de trabajo suelen ser
              lugares naturales para estos primeros acercamientos, porque
              permiten conocer a otros profesionales en contexto, más allá de
              una presentación aislada.
            </p>
          </section>

          {/* 4. Los espacios compartidos */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              4. Los espacios compartidos como punto de encuentro
            </h2>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Trabajar de forma independiente no tiene por qué significar
              trabajar aislado. Compartir un espacio con otros profesionales
              crea oportunidades cotidianas de conocimiento mutuo: coincidir,
              conversar y entender cómo trabaja cada uno.
            </p>
            <Card className="bg-content2 mb-6">
              <CardBody className="p-6">
                <p className="text-sm text-foreground/90 leading-relaxed">
                  En Espacio Pisama, por ejemplo, la aplicación de reservas
                  incluye una{" "}
                  <Link
                    href="/app-de-reservas/red-de-colegas"
                    className="text-secondary-500 hover:underline font-semibold"
                  >
                    red de colegas
                  </Link>{" "}
                  que permite crear un perfil profesional, buscar por profesión
                  o especialidad y enviar solicitudes de contacto. Es una forma
                  de facilitar ese primer acercamiento entre personas que forman
                  parte del espacio, más allá de coincidir en un pasillo.
                </p>
              </CardBody>
            </Card>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              La herramienta facilita el contacto inicial, pero no reemplaza la
              conversación profesional ni la evaluación de cada caso. Conocer un
              perfil ayuda a orientar la búsqueda; la confianza se construye
              después, dialogando.
            </p>
            <Card className="bg-primary/5 border-l-4 border-primary">
              <CardBody className="p-6">
                <p className="text-foreground/90 leading-relaxed">
                  <strong>
                    Encontrar un perfil es el comienzo del vínculo, no una
                    garantía de que sea la persona adecuada para una derivación.
                  </strong>
                </p>
              </CardBody>
            </Card>
          </section>

          {/* 5. Cómo proponer una derivación */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              5. Cómo proponer una derivación sin decidir por el paciente
            </h2>
            <p className="text-foreground/90 mb-6 leading-relaxed">
              Recomendar no es imponer. La derivación se propone, se explica y
              se deja en manos de la persona. Para que la propuesta sea clara,
              conviene ordenarla en cuatro criterios:
            </p>
            <Card className="bg-content2 mb-6">
              <CardBody className="p-6">
                <ol className="space-y-4 text-sm text-foreground/90">
                  <li className="flex items-start gap-3">
                    <span className="bg-secondary-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                      1
                    </span>
                    <span>
                      <strong>Por qué se sugiere:</strong> qué se observó en el
                      proceso que fundamenta la recomendación.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-secondary-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                      2
                    </span>
                    <span>
                      <strong>Qué necesidad responde:</strong> qué aportaría esa
                      consulta al cuidado de la persona.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-secondary-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                      3
                    </span>
                    <span>
                      <strong>Si es un traspaso o un complemento:</strong> si el
                      nuevo profesional toma la posta o suma una mirada
                      adicional al tratamiento actual.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-secondary-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                      4
                    </span>
                    <span>
                      <strong>Qué opciones hay:</strong> ofrecer más de una
                      alternativa, cuando sea posible, y explicar por qué se
                      sugiere cada una.
                    </span>
                  </li>
                </ol>
              </CardBody>
            </Card>
            <Card className="bg-primary/5 mb-6">
              <CardBody className="p-6">
                <p className="text-sm text-foreground/90 italic leading-relaxed">
                  &quot;Por lo que venimos conversando, considero que podría ser
                  útil una evaluación con un profesional de esta área. Puedo
                  compartirte algunas opciones y explicarte por qué las sugiero.
                  Después puedes decidir con quién consultar&quot;.
                </p>
              </CardBody>
            </Card>
            <p className="text-foreground/90 leading-relaxed">
              Las cuestiones prácticas también importan: ubicación, horarios,
              modalidad presencial u online, honorarios y preferencias
              personales. Una buena recomendación clínica que resulta
              inaccesible en lo cotidiano difícilmente prospere.
            </p>
          </section>

          {/* 6. Confidencialidad */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
              <FaUserShield className="text-secondary-500" />
              6. Confidencialidad: compartir solo lo necesario
            </h2>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              La confianza entre colegas no autoriza a compartir información de
              un paciente sin su consentimiento. Conviene distinguir dos gestos:
              entregar al paciente los datos de contacto de otro profesional, y
              contactar directamente al profesional receptor. El segundo implica
              transmitir información de un tercero y requiere un acuerdo previo
              y explícito.
            </p>
            <Card className="bg-content2 mb-6">
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Antes de compartir información, acordar:
                </h3>
                <ul className="space-y-3 text-sm text-foreground/90">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Qué</strong> información se compartirá y con qué
                      finalidad concreta.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Quién</strong> la recibe y por qué medio seguro se
                      transmitirá.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      Limitarse al <strong>mínimo necesario</strong> y
                      pertinente para el motivo de la derivación.
                    </span>
                  </li>
                </ul>
              </CardBody>
            </Card>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Los directorios profesionales y los grupos de mensajería no son
              lugares para datos clínicos identificables. Incluso confirmar que
              alguien asiste a consulta puede revelar información sensible, por
              lo que cada intercambio debe guiarse por el consentimiento
              otorgado y las obligaciones profesionales correspondientes.
            </p>
          </section>

          {/* 7. Sostener el vínculo */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              7. Sostener el vínculo sin convertirlo en una deuda
            </h2>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Una red sana no funciona con cuotas de reciprocidad ni favores
              pendientes. Derivar a alguien porque &quot;me debe una&quot; o
              esperar devoluciones invierte el orden: las necesidades del
              paciente van primero, siempre.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Sostener el vínculo implica mantener actualizados el alcance y la
              disponibilidad, avisar cuando la agenda está completa o cuando se
              deja de trabajar un área, y declinar a tiempo cuando una
              derivación no corresponde. Decir que no con claridad también cuida
              la red.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Una red pequeña y vigente, con colegas cuyo trabajo se conoce de
              primera mano, resulta más útil que un directorio extenso y
              desactualizado. La calidad de los vínculos importa más que la
              cantidad de contactos.
            </p>
          </section>

          {/* 8. Cierre */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-primary mb-4">
                8. Una red se construye antes de necesitarla
              </h2>
              <p className="text-foreground/90 mb-4 leading-relaxed">
                Las derivaciones apuradas, decididas en el momento y sin
                referencias conocidas, suelen salir peor. Construir la red con
                anticipación permite elegir con calma a quién recomendar cuando
                la situación lo requiera.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Un buen comienzo es modesto: identificar una necesidad
                frecuente, iniciar un contacto y tener una conversación. La
                confianza se construye así, con criterios compartidos,
                comunicación clara, límites explícitos y respeto por la
                autonomía de cada paciente.
              </p>
            </div>
          </section>

          {/* Artículos Relacionados */}
          <section className="border-t border-content4 pt-8">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Artículos Relacionados
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/blog/10-estrategias-conseguir-primeros-pacientes"
                className="block group"
              >
                <Card className="hover:shadow-lg transition-all">
                  <CardBody className="p-6">
                    <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                      10 Estrategias Efectivas para Conseguir tus Primeros
                      Pacientes
                    </h3>
                    <p className="text-sm text-foreground/70">
                      Estrategias de marketing y networking para quienes inician
                      su práctica privada.
                    </p>
                  </CardBody>
                </Card>
              </Link>
              <Link
                href="/blog/como-empezar-consultorio-privado-montevideo"
                className="block group"
              >
                <Card className="hover:shadow-lg transition-all">
                  <CardBody className="p-6">
                    <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                      Guía Completa: Cómo Empezar tu Consultorio Privado
                    </h3>
                    <p className="text-sm text-foreground/70">
                      Todo lo que necesitas saber para iniciar tu práctica
                      privada exitosamente.
                    </p>
                  </CardBody>
                </Card>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
