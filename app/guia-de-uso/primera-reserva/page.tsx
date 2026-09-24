// src/app/guia-de-uso/tu-primera-visita/page.tsx
import { Alert } from "@heroui/alert";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import {
  FaWhatsapp,
  FaInfoCircle,
  FaQuestionCircle,
  FaClock,
  FaBroom,
  FaCoffee,
  FaBoxOpen,
  FaBed,
  FaArchive,
  FaVolumeMute,
  FaUsers,
} from "react-icons/fa";
import { HiUserPlus, HiUsers, HiMiniUserGroup } from "react-icons/hi2";
import { PiPowerFill } from "react-icons/pi";

import Indice from "@/components/blog/Indice";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/config/site";

// --- SEO: Metadatos de la Página ---
export const metadata: Metadata = {
  title: "Guía para tu Primera Visita | Espacio Pisama",
  description:
    "Leo te guía paso a paso sobre cómo funciona todo en tu primera reserva: acceso, pago, cómo recibir a tus pacientes y más.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function GuiaPrimeraVisitaPage(): JSX.Element {
  const breadcrumbItems = [
    {
      name: "Inicio",
      url: siteConfig.url,
    },
    {
      name: "Guía de Uso",
      url: `${siteConfig.url}/guia-de-uso`,
    },
    {
      name: "Primera Reserva",
      url: `${siteConfig.url}/guia-de-uso/primera-reserva`,
    },
  ];

  const sections = [
    {
      title: "Gestionando el Pago de tu Reserva",
      id: "pago",
      subsections: [
        {
          title: "Datos para Realizar la Transferencia",
          id: "datos-transferencia",
        },
      ],
    },
    { title: "Paso 1: Cómo Ingresar al Espacio", id: "paso-1-ingresar" },
    { title: "Paso 2: Cómo Recibir a tus Pacientes", id: "paso-2-pacientes" },
    { title: "Paso 3: Cómo Ajustar la Música Ambiente", id: "paso-3-musica" },
    { title: "Paso 4: Cómo Salir del Espacio", id: "paso-4-salir" },
    { title: "Normas de Convivencia", id: "normas-convivencia" },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <section className="bg-content4/60 w-full border-b-1 border-content4">
        <div className="container mx-auto max-w-7xl px-4 py-3">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </section>
      <main>
        {/* --- SECCIÓN 1: BIENVENIDA DE LEO --- */}
        <section className="bg-content2 py-16">
          <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-4 lg:px-8">
            <div className="flex justify-center md:col-span-1">
              <Image
                src="/images/leo/leo-ayudando.webp" // Reemplaza con una imagen de Leo
                alt="Leo, el asistente virtual de Espacio Pisama"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
            <div className="prose prose-lg text-center md:col-span-3 md:text-left prose-headings:font-display prose-headings:text-primary-500">
              <h1 className="text-5xl font-bold">
                ¡Felicidades por tu primera reserva!
              </h1>
              <p className="mt-4 text-lg text-foreground/80">
                Hola, soy <strong>Leo, el asistente virtual</strong> de Espacio
                PISAMA! Estoy aquí para guiarte en tu primera visita y
                asegurarme de que tu experiencia sea perfecta desde el primer
                minuto. He preparado este manual con todo lo que necesitas
                saber. ¡Vamos a verlo!
              </p>
            </div>
          </div>
        </section>

        {/* --- ÍNDICE DE CONTENIDO --- */}
        <section className="flow-root bg-content1 border-t-1 border-default-100/50 px-4">
          <Indice sections={sections} />
        </section>

        {/* --- SECCIÓN DE PAGO --- */}
        <section className="bg-content4 py-16 border-t-1 border-default-100/50">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="not-prose">
              <h2
                id="pago"
                className="text-center font-display text-4xl font-bold text-primary-500"
              >
                Gestionando el Pago de tu Reserva
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-center font-sans text-lg text-foreground/80">
                Nuestro sistema de pago está diseñado para construir una
                relación de confianza mutua y se adapta a tu frecuencia de uso.
                El proceso funciona en las siguientes etapas:
              </p>

              <div className="mt-12 grid gap-8 md:grid-cols-3">
                <Card className="bg-content1">
                  <CardBody className="p-6 text-center">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mx-auto">
                      <HiUserPlus size={40} className="text-secondary-400" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-secondary-500 pb-2">
                      Nuevos Usuarios
                    </h3>
                    <Divider />
                    <p className="mt-2 font-sans text-base text-foreground/80">
                      Para confirmar tus primeras horas, te solicitaremos el
                      pago por adelantado. Esto nos permite gestionar de forma
                      segura el ingreso de nuevos profesionales.
                    </p>
                  </CardBody>
                </Card>
                <Card className="bg-content1">
                  <CardBody className="p-6 text-center">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mx-auto">
                      <HiUsers size={40} className="text-secondary-500" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-secondary-500 pb-2">
                      Usuarios Regulares
                    </h3>
                    <Divider />
                    <p className="mt-2 font-sans text-base text-foreground/80">
                      Al usar el espacio con regularidad, pasamos al pago
                      semanal. Al final de la semana, el sistema calcula tus
                      horas, aplica descuentos y te enviamos el resumen.
                    </p>
                  </CardBody>
                </Card>
                <Card className="bg-content1">
                  <CardBody className="p-6 text-center">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mx-auto">
                      <HiMiniUserGroup
                        size={40}
                        className="text-secondary-500"
                      />
                    </div>
                    <h3 className="font-display text-xl font-bold text-secondary-500 pb-2">
                      Usuarios de Alto Volumen
                    </h3>
                    <Divider />
                    <p className="mt-2 font-sans text-base text-foreground/80">
                      Para facilitar la gestión, ofrecemos una única facturación
                      mensual, coordinada de forma personalizada para adaptarnos
                      a tu ritmo.
                    </p>
                  </CardBody>
                </Card>
              </div>

              <Card className="mx-auto mt-12 bg-content1 shadow-lg">
                <CardBody className="p-8">
                  <h3
                    id="datos-transferencia"
                    className="text-center font-display text-2xl font-bold text-primary-500"
                  >
                    Datos para Realizar la Transferencia
                  </h3>
                  <p className="mb-6 mt-4 text-center font-sans text-foreground/90">
                    Puedes realizar el pago a cualquiera de las siguientes
                    cuentas. <br />
                    Una vez hecho, por favor envía el comprobante por WhatsApp.
                  </p>
                  <div className="space-y-6">
                    <div className="rounded-xl bg-content4 p-4 mx-auto border-1 border-default-100">
                      <p className="font-semibold text-foreground text-center">
                        Titular de la cuenta: PABLO GASTÓN CAMPO
                      </p>
                      <ul className="mt-2 list-inside list-disc space-y-2 text-foreground/80 text-center">
                        <li>
                          <strong>BROU (Nuevo):</strong> 001134168 - 00006
                        </li>
                        <li>
                          <strong>BROU (Viejo):</strong> 600-4644377
                        </li>
                        <li>
                          <strong>PREX:</strong> 1410588
                        </li>
                        <li>
                          <strong>Mi Dinero:</strong> 9323694
                        </li>
                      </ul>
                    </div>

                    <div className="flex items-center justify-center gap-4 rounded-xl bg-success-100/60 p-4 border-1 border-success-300">
                      <FaWhatsapp className="h-8 w-8 flex-shrink-0 text-success-700" />
                      <div className="text-center">
                        <span className="font-semibold">
                          Enviar comprobante a:
                        </span>
                        <a
                          href="https://wa.me/59895961360"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 font-bold text-success-600"
                        >
                          095 961 360
                        </a>
                      </div>
                    </div>
                  </div>
                  <Alert
                    className="mt-8 text-base leading-8 mb-8 py-8"
                    color="secondary"
                    variant="faded"
                    icon={<FaInfoCircle />}
                  >
                    <h4 className="font-bold text-lg">
                      Aclaración Importante sobre Pagos y Facturas:
                    </h4>
                    <p>
                      La validación de los pagos es un{" "}
                      <strong>proceso manual</strong>. Luego de que envíes el
                      comprobante por WhatsApp, Gastón revisará el pago y
                      marcará la factura como &quot;pagada&quot; en la
                      aplicación. Por esto, puede haber un desfasaje entre el
                      momento en que pagas y el momento en que se actualiza el
                      estado en la app.
                    </p>
                    <p className="mt-2">
                      Las facturas se emiten los{" "}
                      <strong>lunes de cada semana</strong> para calcular
                      correctamente los descuentos por volumen de horas.
                      Recibirás una notificación en la app y por mail. Aunque ya
                      hayas pagado (especialmente en tus primeras reservas), la
                      factura siempre se emitirá como &quot;pendiente&quot;
                      hasta que sea revisada manualmente.
                    </p>
                    <p className="mt-4">
                      Cuando una factura se marca como <strong>PAGADA</strong>{" "}
                      te llegará una notificación por la aplicación. Puedes
                      seguir el estado de tus facturas en la{" "}
                      <Link
                        href="https://reservas.pisama.uy/facturas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-info-600 underline"
                      >
                        sección &quot;Facturas&quot;
                      </Link>{" "}
                      de tu perfil.
                    </p>
                  </Alert>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        {/* --- PASO 1 --- */}
        <section className="bg-content1 py-16 border-t-1 border-default-100/50">
          <div className="prose prose-lg container mx-auto max-w-6xl px-4 prose-headings:font-display prose-headings:text-primary-500">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              {/* --- INICIO DE CONTENIDO MODIFICADO --- */}
              <div>
                <h2 id="paso-1-ingresar">
                  <span className="text-secondary-500">Paso 1:</span> Cómo
                  Ingresar al Espacio
                </h2>
                <p>
                  Tu autonomía empieza en la puerta. Al realizar tu primera
                  reserva, recibirás un{" "}
                  <strong>código de acceso numérico</strong> en las
                  notificaciones de la aplicación y también en tu email.
                </p>

                <h3 className="text-2xl text-foreground/90 mt-6">
                  Sigue estos pasos:
                </h3>
                <ol className="list-decimal space-y-2 pl-6">
                  <li>Ingresa tu código en el portero digital.</li>
                  <li>Presiona la tecla numeral #️⃣.</li>
                  <li>
                    El indicador del lector se pondrá <strong>verde</strong> ✅.
                  </li>
                  <li>
                    En ese momento, la reja está desbloqueada.{" "}
                    <strong>Tira de ella hacia afuera</strong> para abrir.
                  </li>
                  <li>
                    Una vez dentro, la reja se cerrará automáticamente (tiene un
                    cierre hidráulico).
                  </li>
                </ol>

                {/* Reemplazamos el Alert anterior por este */}
                <Alert
                  className="mt-8 pt-0 text-base leading-8"
                  color="success"
                  variant="faded"
                  icon={<FaWhatsapp />}
                >
                  <h4 className="font-bold text-lg">
                    ¿Algún problema con el código?
                  </h4>
                  <p>
                    ¡No te preocupes! Si por alguna razón el código no funciona,
                    llama o envía un WhatsApp a Gastón al{" "}
                    <a
                      href="https://wa.me/59895961360"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-success-600"
                    >
                      095 961 360
                    </a>
                    . Él puede abrirte remotamente desde su celular. Cualquier
                    inconveniente se soluciona al instante.
                  </p>
                </Alert>
              </div>
              {/* --- FIN DE CONTENIDO MODIFICADO --- */}

              <div className="not-prose my-8 mx-auto w-full max-w-[315px] overflow-hidden rounded-lg shadow-2xl">
                <iframe
                  width="315"
                  height="560"
                  src="https://www.youtube.com/embed/tEJwpX8dPuI"
                  title="Cómo ingresar a Espacio Pisama"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- PASO 2: Parte 1 --- */}
        <section className="bg-content3 py-16 border-t-1 border-default-100/50">
          <div className="prose prose-lg container mx-auto max-w-6xl px-4 prose-headings:font-display prose-headings:text-primary-500">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              {/* Columna Izquierda: Video */}
              <div className="not-prose my-8 mx-auto w-full max-w-[315px] overflow-hidden rounded-lg shadow-2xl">
                <iframe
                  width="315"
                  height="560"
                  src="https://www.youtube.com/embed/4zTTdGXzOQQ"
                  title="Cómo recibir a tus pacientes"
                />
              </div>
              {/* Columna Derecha: Texto */}
              <div>
                <h2 id="paso-2-pacientes">
                  <span className="text-secondary-500">Paso 2:</span> Cómo
                  Recibir a tus Pacientes
                </h2>
                <p>
                  Aquí es donde nuestra filosofía de{" "}
                  <strong>autonomía total</strong> cobra vida. En Espacio Pisama{" "}
                  <span className="underline underline-offset-2">
                    no contamos con recepcionista
                  </span>
                  , somos los mismos profesionales que atendemos en los
                  consultorios, quienes recibimos a nuestros pacientes cuando
                  llegan.
                </p>
                <p>
                  Cuando alguien toca el timbre, el portero eléctrico suena en
                  la sala de espera. Generalmente, el primero que está
                  disponible atiende y abre la puerta.
                </p>
                <p className="font-semibold">
                  🔒 Tenemos una regla de oro por seguridad: al atender,
                  pregunta siempre para qué profesional viene la persona. Esto
                  es clave para confirmar que es un paciente antes de presionar
                  el botón que abre la puerta.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- PASO 2: Parte 2 --- */}
        <section className="bg-content3 pb-16">
          <div className="prose prose-lg container mx-auto max-w-6xl px-4 prose-headings:font-display prose-headings:text-primary-500">
            <div className="grid grid-cols-1 items-center gap-18 md:grid-cols-2">
              {/* Columna Izquierda: Texto */}
              <div>
                <p>
                  Una vez que abras, tu paciente subirá y encontrará una sala de
                  espera acogedora, con música ambiental y asientos cómodos,
                  donde podrá aguardar tranquilamente hasta que vayas a
                  recibirlo.
                </p>
                <Alert
                  className="mb-8 text-base leading-8"
                  color="secondary"
                  icon={<FaQuestionCircle />}
                  variant="faded"
                >
                  <h4 className="font-bold text-lg">
                    ¿Qué pasa si estás en plena sesión?
                  </h4>
                  <p>
                    Si estás en sesión y escuchás el timbre, podés esperar para
                    ver si otro colega atiende. En caso de que nadie lo haga y
                    el paciente vuelva a tocar, simplemente interrumpís un
                    instante tu consulta para abrir la puerta. Es una pequeña
                    molestia, sí, pero forma parte de nuestra dinámica de
                    funcionamiento que prioriza la colaboración y la autonomía
                    de todos los que compartimos el espacio.
                  </p>
                </Alert>
              </div>
              {/* Columna Derecha: Imagen */}
              <div className="not-prose my-8 mx-auto w-full max-w-lg overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src="/images/salaespera-1-3.webp"
                  alt="Sala de espera de Espacio Pisama"
                  width={800}
                  height={600}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- PASO 3: Parte 1 --- */}
        <section className="bg-content4 py-16 border-t-1 border-default-100/50">
          <div className="prose prose-lg container mx-auto max-w-6xl px-4 prose-headings:font-display prose-headings:text-primary-500">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div className="not-prose my-8 mx-auto w-full max-w-lg overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src="/images/blog/reproductor-de-musica2.webp"
                  alt="Sala de espera de Espacio Pisama"
                  width={512}
                  height={768}
                  className="w-full object-cover"
                />
              </div>
              <div>
                <h2 id="paso-3-musica">
                  <span className="text-secondary-500">Paso 3:</span> Cómo
                  Ajustar la Música Ambiente
                </h2>
                <p>
                  La música en la sala de espera es clave. No solo crea un
                  ambiente sereno, sino que también{" "}
                  <strong>garantiza la privacidad acústica</strong> de las
                  sesiones en los consultorios.
                </p>
                <p>
                  Encontrarás el reproductor sobre la mesa de la sala de espera.
                  Su funcionamiento tiene un par de trucos, y como es una
                  pregunta frecuente, queremos aclarártela.
                </p>
                <Alert
                  className="mt-8 text-base leading-8 pt-0"
                  color="secondary"
                  variant="faded"
                  icon={<FaInfoCircle />}
                >
                  <h4 className="font-bold text-lg">Aviso al encender:</h4>
                  <p>
                    {/* Puedes usar FaInfoCircle o un ícono de advertencia si lo prefieres */}
                    Si el equipo está apagado, al prenderlo con el botón de
                    &apos;Power&apos;{" "}
                    <PiPowerFill size={24} className="inline" />, la música
                    inciará automáticamente. Es muy probable que el volumen
                    inicial esté alto.
                  </p>
                </Alert>
              </div>
            </div>
          </div>
        </section>

        {/* --- PASO 3: Parte 2 --- */}
        <section className="bg-content4 pb-16">
          <div className="prose prose-lg container mx-auto max-w-6xl px-4 prose-headings:font-display prose-headings:text-primary-500">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div>
                {/* Aviso importante sobre el volumen */}

                <h3 className="text-2xl text-foreground/90">
                  Cómo controlar el volumen (lo más importante):
                </h3>
                <p className="mt-4">
                  Los botones de <strong>Avanzar</strong> ⏩ y{" "}
                  <strong>Retroceder</strong> ⏪ tienen doble función. Aquí está
                  el truco:
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li>
                    🔉 <strong>Para BAJAR el Volumen:</strong> MANTÉN PRESIONADO
                    el botón de <strong>Retroceder</strong> ⏪ hasta alcanzar el
                    nivel deseado.
                  </li>
                  <li>
                    🔊 <strong>Para SUBIR el Volumen:</strong> MANTÉN PRESIONADO
                    el botón de <strong>Avanzar</strong> ⏩ hasta alcanzar el
                    nivel deseado.
                  </li>
                  <li>
                    <strong>Para Cambiar de Canción:</strong> TOCA UNA SOLA VEZ
                    esos mismos botones (un toque corto).
                  </li>
                </ul>
                <p className="mt-6 font-semibold">
                  Sabemos que no es intuitivo. Junto a este texto encontrarás un
                  video explicativo que muestra paso a paso cómo hacerlo.
                </p>
              </div>
              <div className="not-prose my-8 mx-auto w-full max-w-[315px] overflow-hidden rounded-lg shadow-2xl">
                <iframe
                  width="315"
                  height="560"
                  src="https://www.youtube.com/embed/URL_VIDEO_MUSICA"
                  title="Cómo ajustar la música"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- PASO 4 --- */}
        <section className="bg-content1 py-16 border-t-1 border-default-100">
          <div className="prose prose-lg container mx-auto max-w-6xl px-4 prose-headings:font-display prose-headings:text-primary-500">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div className="md:order-last">
                <h2 id="paso-4-salir">
                  <span className="text-secondary-500">Paso 4:</span> Cómo Salir
                  del Espacio
                </h2>
                <p>
                  La salida es un proceso simple, pero tiene un detalle
                  importante. Verás un{" "}
                  <strong>botón junto a la puerta de calle</strong>.
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li>
                    <strong>Presiona el botón:</strong> Esto destraba la reja
                    principal.
                  </li>
                  <li>
                    <strong>Empuja la reja:</strong> Se abrirá fácilmente. No te
                    preocupes por cerrarla, su brazo hidráulico lo hará
                    automáticamente.
                  </li>
                </ul>

                {/* Tip para el paciente */}
                <Alert
                  className="mt-8 pt-1 text-base leading-8"
                  color="secondary"
                  variant="faded"
                  icon={<FaInfoCircle />}
                >
                  <h4 className="font-bold text-lg">
                    Un tip clave para tu paciente:
                  </h4>
                  <p>
                    Tu paciente usará este mismo botón para salir. Es muy común
                    que en su primera visita no lo vean y regresan a consultar
                    cómo salir. Te aconsejamos que le indiques cómo salir la
                    primera vez que concurra al espacio. Es un gesto que asegura
                    que su experiencia termine de forma positiva.
                  </p>
                </Alert>

                <h3 className="text-2xl text-foreground/90">
                  ¡Muy Importante: La Puerta de Madera!
                </h3>
                <p>
                  Verás que junto a la reja hay una puerta de madera. Por la
                  seguridad y la climatización del espacio, es fundamental que
                  esa puerta <strong>quede siempre cerrada</strong>. No se
                  tranca con llave, simplemente asegurate de empujarla hasta que
                  cierre correctamente.
                </p>
              </div>
              <div className="not-prose my-8 mx-auto w-full max-w-[315px] overflow-hidden rounded-lg shadow-2xl">
                <iframe
                  width="315"
                  height="560"
                  src="https://www.youtube.com/embed/URL_VIDEO_SALIDA"
                  title="Cómo salir de Espacio Pisama"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN 5: NORMAS DE CONVIVENCIA --- */}
        <section className="bg-content2 py-16 border-t-1 border-default-100/50">
          <div className="container mx-auto max-w-4xl px-4 lg:px-8">
            <div className="text-center">
              <h2
                id="normas-convivencia"
                className="font-display text-4xl font-bold text-primary-500"
              >
                Normas de Convivencia
              </h2>
              <p className="mx-auto my-6 max-w-2xl font-sans text-lg text-foreground/80">
                Nuestra filosofía de autonomía se basa en la confianza y el
                respeto mutuo. Para que el espacio funcione para todos, te
                compartimos nuestras normas básicas de convivencia:
              </p>
            </div>
            <Divider />
            {/* --- Lista de Normas --- */}
            <div className="not-prose mt-12 space-y-8">
              {/* 1. Puntualidad */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <FaClock className="h-6 w-6 text-secondary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Respeto por los Horarios
                  </h3>
                  <p className="mt-1 text-foreground/80">
                    Sé puntual tanto al inicio como al final de tu reserva.
                    Entregar el consultorio a tiempo es fundamental para el
                    colega que viene después de ti.
                  </p>
                </div>
              </div>

              {/* 2. Limpieza Consultorio */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <FaBroom className="h-6 w-6 text-secondary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Orden del Consultorio
                  </h3>
                  <p className="mt-1 text-foreground/80">
                    Debes dejar el consultorio en las mismas condiciones en que
                    lo encontraste.
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-8 text-foreground/80">
                    <li>Si mueves muebles, vuelve a dejarlos en su lugar.</li>
                    <li>
                      Si usaste vasos o cualquier material, retíralo al
                      finalizar.
                    </li>
                    <li>
                      Si prendes luces o el aire acondicionado apágalos al
                      salir.
                    </li>
                  </ul>
                </div>
              </div>

              {/* 3. Cocina y Amenities */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <FaCoffee className="h-6 w-6 text-secondary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Uso de la Cocina y Sala de Descanso
                  </h3>
                  <p className="mt-1 text-foreground/80">
                    Las bebidas (café, té, agua) son de uso libre. Puedes tomar
                    y ofrecerle a tus pacientes. Si usas vajilla (vasos,
                    cucharas, etc) por favor lávala, y déjala en el escurridor
                    de la cocina.
                  </p>
                </div>
              </div>

              {/* 4. Suministros */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <FaBoxOpen className="h-6 w-6 text-secondary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Suministros
                  </h3>
                  <p className="mt-1 text-foreground/80">
                    Si necesitas reponer pañuelos, papel higiénico o toallas de
                    papel, encontrarás repuestos debajo de la mesada de la
                    cocina. Están siempre a disposición en caso de que se
                    acaben.
                  </p>
                </div>
              </div>

              {/* 4.2 Materiales de niños */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <FaBoxOpen className="h-6 w-6 text-secondary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Materiales de Niños
                  </h3>
                  <p className="mt-1 text-foreground/80">
                    Los materiales de niños en la sala de descanso son de uso
                    público, excepto aquellos guardados dentro de{" "}
                    <strong>cajas etiquetadas</strong>: son de uso exclusivo del
                    profesional que las trajo.
                  </p>
                </div>
              </div>

              {/* 5. Camilla */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <FaBed className="h-6 w-6 text-secondary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Uso de la Camilla
                  </h3>
                  <p className="mt-1 text-foreground/80">
                    La camilla plegable es de uso público y se guarda en la sala
                    de descanso. Es <strong>imprescindible</strong> que indiques
                    en la aplicación web que la vas a utilizar al momento de
                    hacer tu reserva. Esto es para asegurar que nunca se solapen
                    dos profesionales que la necesiten, ya que solo hay una.
                  </p>
                </div>
              </div>

              {/* 6. Guardar Materiales Propios */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <FaArchive className="h-6 w-6 text-secondary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Dejar Materiales Propios
                  </h3>
                  <p className="mt-1 text-foreground/80">
                    Si necesitas dejar materiales personales en el espacio,
                    puedes hacerlo de forma ordenada en la sala de descanso, o
                    bien en la habitación que se encuentra subiendo la escalera
                    dentro de esa misma sala.
                  </p>
                </div>
              </div>

              {/* 7. Ruido (Añadido) */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <FaVolumeMute className="h-6 w-6 text-secondary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Ambiente Sereno
                  </h3>
                  <p className="mt-1 text-foreground/80">
                    Para respetar el trabajo de todos y la privacidad de las
                    sesiones, te pedimos mantener un tono de voz moderado en la
                    sala de espera y demás áreas comunes.
                  </p>
                </div>
              </div>

              {/* 8. Desperfectos */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <FaWhatsapp className="h-6 w-6 text-success-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Reporte de Desperfectos
                  </h3>
                  <p className="mt-1 text-foreground/80">
                    Si notas cualquier problema o desperfecto en el espacio,
                    agradecemos que informes a Gastón a este número de WhatsApp:{" "}
                    <a
                      href="https://wa.me/59895961360"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-success-600"
                    >
                      095961360
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* 9. Conflictos de Horario */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <FaUsers className="h-6 w-6 text-secondary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    ¿Qué hacer si te entregan tarde?
                  </h3>
                  <p className="mt-1 text-foreground/80">
                    Este es un punto clave. Como psicólogo, sé que{" "}
                    <strong>a veces</strong> una sesión puede extenderse un poco
                    más de lo previsto, y lo entendemos. Pero también sabemos
                    que{" "}
                    <strong>el respeto por el tiempo de todos es clave </strong>
                    para que el espacio funcione bien. Por eso, si te entregan
                    tarde, te pedimos que siempre nos avises, aunque parezca
                    algo puntual. Así podemos hacer un seguimiento y saber si
                    fue una excepción o si está pasando seguido, y en ese caso,
                    hablar con el profesional para que lo corrija.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- CTA FINAL --- */}
      <section className="bg-content3 py-16 text-center border-t-1 border-default-100/50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-primary-500">
            ¡Ya eres parte de la comunidad!
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-foreground/80">
            Espero que esta guía te sea de gran ayuda. Ahora tienes todo para
            que tu experiencia en Espacio Pisama sea excelente. ¿Listo/a para
            planificar tu próxima sesión?
          </p>
          <div className="mt-8">
            <Button
              as={Link}
              href="https://reservas.pisama.uy/calendario_diario"
              className="bg-secondary-500 font-display font-semibold text-secondary-foreground"
              size="lg"
            >
              Reserva un Nueva Hora en la Aplicación
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
