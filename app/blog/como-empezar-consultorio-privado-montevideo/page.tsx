import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Metadata } from "next";
import Link from "next/link";
import {
  FaCheckCircle,
  FaFileAlt,
  FaUniversity,
  FaCalculator,
  FaCouch,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title:
    "Guía Completa: Cómo Empezar tu Consultorio Privado en Montevideo 2025",
  description:
    "Guía paso a paso para iniciar tu consultorio privado de psicología en Montevideo: requisitos legales, costos, equipamiento, tarifas y estrategias para conseguir tus primeros pacientes.",
  keywords: [
    "consultorio privado montevideo",
    "empezar práctica privada uruguay",
    "requisitos consultorio psicología uruguay",
    "abrir consultorio montevideo",
    "psicólogo independiente uruguay",
    "costos consultorio privado",
    "alquiler consultorio por hora",
    "consultorio psicología montevideo 2025",
  ],
  alternates: {
    canonical: "/blog/como-empezar-consultorio-privado-montevideo",
  },
  openGraph: {
    title: "Cómo Empezar tu Consultorio Privado en Montevideo 2025",
    description:
      "Todo lo que necesitas saber para iniciar tu práctica privada en Montevideo: requisitos, costos y estrategias efectivas.",
    type: "article",
    publishedTime: "2025-10-15T00:00:00Z",
    authors: ["Espacio PISAMA"],
  },
};

export default function ComoEmpezarConsultorioPrivadoPage() {
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
      name: "Cómo Empezar tu Consultorio Privado",
      url: `${siteConfig.url}/blog/como-empezar-consultorio-privado-montevideo`,
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
              Guía Completa: Cómo Empezar tu Consultorio Privado en Montevideo
              en 2026
            </h1>
            <p className="text-xl text-foreground/80 mb-4">
              Todo lo que necesitas saber para iniciar tu práctica privada
              exitosamente: requisitos legales, costos reales, decisiones clave
              y estrategias probadas.
            </p>
            <div className="flex gap-4 text-sm text-foreground/60">
              <time dateTime="2025-10-15">15 de octubre, 2025</time>
              <span>•</span>
              <span>12 min de lectura</span>
            </div>
          </header>

          {/* Introducción */}
          <section className="mb-12">
            <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
              Dar el salto a la práctica privada es una de las decisiones más
              importantes en la carrera de un psicólogo o terapeuta. En
              Montevideo, cada vez más profesionales optan por la autonomía y
              flexibilidad que ofrece tener un consultorio propio.
            </p>
            <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
              Pero, ¿por dónde empezar? ¿Qué trámites son realmente necesarios?
              ¿Cuánto dinero necesitas invertir? ¿Conviene alquilar un espacio
              propio o usar consultorios por hora?
            </p>
            <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
              En esta guía completa te contamos todo lo que necesitas saber para
              que tu inicio sea exitoso, sin gastos innecesarios ni sorpresas en
              el camino.
            </p>

            <Card className="bg-secondary/10 border-l-4 border-secondary">
              <CardBody className="p-6">
                <p className="text-foreground/90">
                  <strong>💡 Dato importante:</strong> El mercado de alquiler de
                  oficinas en Montevideo aumentó un 50% en demanda durante
                  2024-2025, convirtiéndose en la ciudad más cara de
                  Latinoamérica para alquiler de espacios profesionales ($34.4
                  USD/m²). Por eso, optimizar tus costos fijos desde el inicio
                  es crucial.
                </p>
              </CardBody>
            </Card>
          </section>

          {/* Paso 1: Requisitos Legales */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <FaFileAlt className="text-2xl text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-primary">
                Paso 1: Requisitos Legales y Habilitaciones
              </h2>
            </div>

            <p className="text-foreground/90 mb-6 leading-relaxed">
              Antes de atender tu primer paciente, necesitas cumplir con ciertos
              requisitos legales en Uruguay. La buena noticia es que el proceso
              es más sencillo de lo que parece.
            </p>

            <h3 className="text-2xl font-semibold text-primary mb-4">
              1.1. Habilitación Profesional (MSP)
            </h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Para ejercer legalmente como psicólogo en Uruguay, debes registrar
              tu título ante el{" "}
              <strong>Ministerio de Salud Pública (MSP)</strong>. Este trámite
              se realiza de forma remota a través del sistema Infotítulos.
            </p>

            <Card className="mb-6 bg-content2">
              <CardBody className="p-6">
                <h4 className="font-semibold text-lg mb-3 text-primary">
                  ✓ Requisitos para registrar tu título:
                </h4>
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex items-start">
                    <span className="text-secondary-500 mr-2 mt-1">•</span>
                    <span>
                      Título de Licenciado en Psicología otorgado por la
                      Universidad de la República u otra universidad habilitada
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-500 mr-2 mt-1">•</span>
                    <span>Cédula de identidad vigente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-500 mr-2 mt-1">•</span>
                    <span>
                      Título universitario legalizado (si corresponde)
                    </span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-foreground/70">
                  Una vez registrado, quedarás habilitado para ejercer en todo
                  el territorio nacional. Este es un requisito obligatorio según
                  la{" "}
                  <a
                    href="https://www.psicologos.org.uy/index.php/ley-del-psicologo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-500 hover:underline"
                  >
                    Ley del Psicólogo en Uruguay
                  </a>
                  .
                </p>
              </CardBody>
            </Card>

            <h3 className="text-2xl font-semibold text-primary mb-4">
              1.2. Registro en la Caja de Profesionales (CJPPU)
            </h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Dentro de los <strong>90 días</strong> posteriores a tu
              habilitación en el MSP, debes inscribirte en la{" "}
              <a
                href="https://www.cjppu.org.uy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-500 hover:underline"
              >
                Caja de Jubilaciones y Pensiones de Profesionales Universitarios
                (CJPPU)
              </a>
              . Esta será tu caja previsional durante tu vida laboral.
            </p>
            <p className="text-foreground/90 mb-6 leading-relaxed">
              El aporte mensual varía según tus ingresos, con un mínimo
              establecido. A partir del quinto año de egreso, también deberás
              aportar al Fondo de Solidaridad Universitario.
            </p>

            <h3 className="text-2xl font-semibold text-primary mb-4">
              1.3. Alta en DGI y BPS como Profesional Independiente
            </h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Como profesional independiente, debes darte de alta en:
            </p>
            <ul className="space-y-3 mb-6 text-foreground/90">
              <li className="flex items-start">
                <FaCheckCircle className="text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong>DGI (Dirección General Impositiva):</strong> Para
                  tributar IRPF (Impuesto a la Renta de las Personas Físicas) e
                  IVA (Impuesto al Valor Agregado).
                </div>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong>BPS (Banco de Previsión Social):</strong> Para
                  contribuir al sistema de seguridad social.
                </div>
              </li>
            </ul>

            <Card className="bg-warning/10 border-l-4 border-warning">
              <CardBody className="p-6">
                <h4 className="font-semibold mb-2">
                  ⚠️ Importante sobre el Monotributo:
                </h4>
                <p className="text-foreground/90">
                  Los psicólogos y profesionales de servicios personales{" "}
                  <strong>
                    NO pueden tributar bajo el régimen de monotributo
                  </strong>{" "}
                  en Uruguay. Debes tributar IVA e IRPF de forma bimestral como
                  profesional independiente. Consulta con un contador para
                  configurar correctamente tus obligaciones fiscales.
                </p>
                <p className="text-sm mt-3 text-foreground/70">
                  Fuente:{" "}
                  <a
                    href="https://tributosimple.com/monotributo-profesionales-salud-psicologos/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-500 hover:underline"
                  >
                    Monotributo para psicólogos en Uruguay
                  </a>
                </p>
              </CardBody>
            </Card>
          </section>

          {/* Paso 2: Decisión de Espacio */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <FaUniversity className="text-2xl text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-primary">
                Paso 2: La Decisión Más Importante - Tu Espacio de Trabajo
              </h2>
            </div>

            <p className="text-foreground/90 mb-6 leading-relaxed">
              Una de las primeras decisiones que enfrentarás es dónde atender a
              tus pacientes. Tienes tres opciones principales, cada una con sus
              pros y contras:
            </p>

            <div className="space-y-6 mb-8">
              <Card className="border-2 border-primary/20">
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Opción 1: Consultorio Propio (Compra)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">
                        ✓ Ventajas:
                      </h4>
                      <ul className="space-y-1 text-sm text-foreground/80">
                        <li>• Inversión a largo plazo</li>
                        <li>• Total autonomía y personalización</li>
                        <li>• Genera patrimonio</li>
                        <li>• No dependes de terceros</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">
                        ✗ Desventajas:
                      </h4>
                      <ul className="space-y-1 text-sm text-foreground/80">
                        <li>• Inversión inicial muy alta (USD 80,000+)</li>
                        <li>• Compromiso financiero a largo plazo</li>
                        <li>• Costos de mantenimiento</li>
                        <li>• Riesgo si cambias de zona</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70">
                    <strong>Ideal para:</strong> Profesionales con práctica
                    consolidada y capital disponible.
                  </p>
                </CardBody>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Opción 2: Alquiler Tradicional Mensual
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">
                        ✓ Ventajas:
                      </h4>
                      <ul className="space-y-1 text-sm text-foreground/80">
                        <li>• Sin inversión inicial grande</li>
                        <li>• Espacio exclusivo</li>
                        <li>• Puedes personalizar</li>
                        <li>• Más flexibilidad que comprar</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">
                        ✗ Desventajas:
                      </h4>
                      <ul className="space-y-1 text-sm text-foreground/80">
                        <li>• Costo fijo mensual alto ($25,000-$40,000)</li>
                        <li>• Compromiso mínimo (1-2 años)</li>
                        <li>• Pagas incluso si no trabajas</li>
                        <li>• Gastos comunes, luz, limpieza</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70">
                    <strong>Ideal para:</strong> Profesionales con agenda
                    estable (20+ horas semanales).
                  </p>
                </CardBody>
              </Card>

              <Card className="border-2 border-secondary-500">
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-secondary-500">
                    Opción 3: Alquiler por Hora ⭐ Recomendado para empezar
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">
                        ✓ Ventajas:
                      </h4>
                      <ul className="space-y-1 text-sm text-foreground/80">
                        <li>• Sin compromiso a largo plazo</li>
                        <li>• Pagas solo lo que usas</li>
                        <li>• Espacios equipados y listos</li>
                        <li>• Bajo riesgo financiero</li>
                        <li>• Probás antes de comprometerte</li>
                        <li>• Incluye servicios (limpieza, wifi, etc.)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">
                        ✗ Desventajas:
                      </h4>
                      <ul className="space-y-1 text-sm text-foreground/80">
                        <li>• Debes reservar con anticipación</li>
                        <li>• Espacio compartido con otros profesionales</li>
                        <li>• Menos personalización del espacio</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70 mb-4">
                    <strong>Ideal para:</strong> Profesionales que están
                    empezando, tienen agenda variable, o quieren minimizar
                    riesgos.
                  </p>
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">
                      💰 Ejemplo de ahorro real:
                    </p>
                    <ul className="text-sm space-y-1 text-foreground/80">
                      <li>
                        • Alquiler mensual tradicional: <strong>$30,000</strong>
                      </li>
                      <li>
                        • Alquiler por hora (10 hrs/semana):{" "}
                        <strong>$10,000</strong>
                      </li>
                      <li className="text-secondary-500 font-semibold pt-2">
                        → Ahorrás $20,000 mensuales mientras construís tu
                        cartera de pacientes
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </div>

            <Card className="bg-primary/5 border-l-4 border-primary">
              <CardBody className="p-6">
                <h4 className="font-semibold mb-3">
                  💡 Nuestra recomendación para principiantes:
                </h4>
                <p className="text-foreground/90 mb-3">
                  Si estás empezando,{" "}
                  <strong>comienza con alquiler por hora</strong>. Te permite
                  iniciar tu práctica sin comprometer tu estabilidad financiera.
                  Una vez que tengas 15-20 pacientes fijos semanales, podrás
                  evaluar si conviene dar el salto a un alquiler mensual.
                </p>
                <Link href="/soluciones">
                  <Button color="secondary" variant="flat" size="sm">
                    Ver soluciones de consultorios por hora →
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </section>

          {/* Paso 3: Inversión Inicial */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <FaCalculator className="text-2xl text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-primary">
                Paso 3: ¿Cuánto Dinero Necesitas para Empezar?
              </h2>
            </div>

            <p className="text-foreground/90 mb-6 leading-relaxed">
              La inversión inicial varía enormemente según la modalidad que
              elijas. Aquí te mostramos un desglose realista para Montevideo en
              2025:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border border-primary/20 p-3 text-left">
                      Concepto
                    </th>
                    <th className="border border-primary/20 p-3 text-right">
                      Consultorio Propio
                    </th>
                    <th className="border border-primary/20 p-3 text-right">
                      Alquiler Mensual
                    </th>
                    <th className="border border-primary/20 p-3 text-right bg-secondary/20">
                      Alquiler por Hora
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="border border-primary/20 p-3">
                      Espacio inicial
                    </td>
                    <td className="border border-primary/20 p-3 text-right">
                      $3,000,000+
                    </td>
                    <td className="border border-primary/20 p-3 text-right">
                      $90,000 (depósito + 2 meses)
                    </td>
                    <td className="border border-primary/20 p-3 text-right bg-secondary/5">
                      $0
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-primary/20 p-3">Mobiliario</td>
                    <td className="border border-primary/20 p-3 text-right">
                      $80,000 - $150,000
                    </td>
                    <td className="border border-primary/20 p-3 text-right">
                      $50,000 - $100,000
                    </td>
                    <td className="border border-primary/20 p-3 text-right bg-secondary/5">
                      $0 (incluido)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-primary/20 p-3">
                      Equipamiento
                    </td>
                    <td className="border border-primary/20 p-3 text-right">
                      $30,000 - $50,000
                    </td>
                    <td className="border border-primary/20 p-3 text-right">
                      $30,000 - $50,000
                    </td>
                    <td className="border border-primary/20 p-3 text-right bg-secondary/5">
                      $0 (incluido)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-primary/20 p-3">
                      Servicios (internet, limpieza)
                    </td>
                    <td className="border border-primary/20 p-3 text-right">
                      $5,000/mes
                    </td>
                    <td className="border border-primary/20 p-3 text-right">
                      $5,000/mes
                    </td>
                    <td className="border border-primary/20 p-3 text-right bg-secondary/5">
                      $0 (incluido)
                    </td>
                  </tr>
                  <tr className="font-semibold bg-primary/5">
                    <td className="border border-primary/20 p-3">
                      TOTAL INICIAL
                    </td>
                    <td className="border border-primary/20 p-3 text-right">
                      $3,110,000+
                    </td>
                    <td className="border border-primary/20 p-3 text-right">
                      $170,000 - $240,000
                    </td>
                    <td className="border border-primary/20 p-3 text-right bg-secondary/20">
                      $0
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Card className="bg-content2 mb-6">
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  ¿Qué incluye la inversión mínima?
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">
                      Mobiliario básico ($50,000 - $100,000):
                    </h4>
                    <ul className="text-sm space-y-1 text-foreground/80">
                      <li>• Sillón o sofá para pacientes (ergonómico)</li>
                      <li>• Silla del terapeuta</li>
                      <li>• Mesa auxiliar</li>
                      <li>• Biblioteca o estantería</li>
                      <li>• Elementos de decoración (plantas, cuadros)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Equipamiento profesional ($30,000 - $50,000):
                    </h4>
                    <ul className="text-sm space-y-1 text-foreground/80">
                      <li>• Laptop o computadora</li>
                      <li>• Software de gestión de pacientes (opcional)</li>
                      <li>• Sistema de reservas online</li>
                      <li>• Material terapéutico (tests, cuadernos, etc.)</li>
                      <li>• Elementos de bioseguridad</li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>

            <p className="text-foreground/90 leading-relaxed">
              Como ves, la modalidad de <strong>alquiler por hora</strong>{" "}
              elimina prácticamente toda la inversión inicial, permitiéndote
              comenzar a atender pacientes desde el primer día sin comprometer
              tu economía.
            </p>
          </section>

          {/* Paso 4: Equipamiento Básico */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <FaCouch className="text-2xl text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-primary">
                Paso 4: Equipamiento Básico (Si Alquilas Tu Propio Espacio)
              </h2>
            </div>

            <p className="text-foreground/90 mb-6 leading-relaxed">
              Si decides por el alquiler mensual tradicional o compra,
              necesitarás equipar tu consultorio. Aquí te compartimos lo
              esencial:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="bg-content2">
                <CardBody className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-primary">
                    Lo Imprescindible
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground/90">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Sillón/sofá cómodo:</strong> Es lo más
                        importante. Invertí en calidad ($20,000-$40,000)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Tu silla:</strong> Ergonómica, vas a pasar
                        muchas horas ahí ($8,000-$15,000)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Mesa auxiliar:</strong> Para reloj, pañuelos,
                        agua ($3,000-$6,000)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Iluminación cálida:</strong> Evita luces frías o
                        directas ($5,000-$10,000)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Cortinas/persianas:</strong> Para privacidad
                        visual ($4,000-$8,000)
                      </span>
                    </li>
                  </ul>
                </CardBody>
              </Card>

              <Card className="bg-content2">
                <CardBody className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-primary">
                    Lo Recomendable
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground/90">
                    <li className="flex items-start">
                      <span className="text-secondary-500 mr-2 mt-1">•</span>
                      <span>
                        <strong>Plantas naturales:</strong> Aportan calidez y
                        mejoran el ambiente
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-500 mr-2 mt-1">•</span>
                      <span>
                        <strong>Reloj visible:</strong> Para gestionar el tiempo
                        de sesión
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-500 mr-2 mt-1">•</span>
                      <span>
                        <strong>Caja de pañuelos:</strong> Siempre a mano
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-500 mr-2 mt-1">•</span>
                      <span>
                        <strong>Alfombra:</strong> Mejora la acústica y el
                        confort
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-500 mr-2 mt-1">•</span>
                      <span>
                        <strong>Bibliotec a:</strong> Para libros profesionales
                        y material terapéutico
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-500 mr-2 mt-1">•</span>
                      <span>
                        <strong>Difusor de aromas:</strong> Sutil, no invasivo
                      </span>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </div>

            <Card className="bg-primary/5 border-l-4 border-primary">
              <CardBody className="p-6">
                <h4 className="font-semibold mb-2">
                  💡 Tip sobre la aislación acústica:
                </h4>
                <p className="text-foreground/90 text-sm">
                  La confidencialidad es fundamental en terapia. Si alquilas un
                  espacio, asegúrate de que tenga{" "}
                  <strong>aislación acústica profesional</strong>. En Espacio
                  PISAMA, todos nuestros consultorios cuentan con aislación
                  certificada que garantiza privacidad absoluta.
                </p>
              </CardBody>
            </Card>
          </section>

          {/* Paso 5: Estrategia de Precios */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <FaCalculator className="text-2xl text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-primary">
                Paso 5: ¿Cuánto Cobrar por tus Sesiones?
              </h2>
            </div>

            <p className="text-foreground/90 mb-6 leading-relaxed">
              Establecer tu tarifa es uno de los desafíos más comunes al
              empezar. Aquí te ayudamos a tomar esta decisión con información
              actualizada para 2025:
            </p>

            <Card className="bg-content2 mb-6">
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Arancel Oficial 2025 (CPU)
                </h3>
                <div className="bg-primary/10 p-4 rounded-lg mb-4">
                  <p className="text-2xl font-bold text-primary mb-2">
                    $2,698 + IVA
                  </p>
                  <p className="text-sm text-foreground/70">
                    (Vigente desde Mayo 2025 según la{" "}
                    <a
                      href="https://www.psicologos.org.uy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-500 hover:underline"
                    >
                      Coordinadora de Psicólogos del Uruguay
                    </a>
                    )
                  </p>
                </div>
                <p className="text-sm text-foreground/80">
                  Este es el arancel <strong>sugerido</strong>, no obligatorio.
                  En la práctica, cada profesional establece sus propias tarifas
                  según su experiencia, especialización y público objetivo.
                </p>
              </CardBody>
            </Card>

            <h3 className="text-2xl font-semibold text-primary mb-4">
              Rango de Precios en el Mercado
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="bg-secondary/20 text-secondary-700 px-3 py-1 rounded font-semibold text-sm">
                  $1,500 - $2,000
                </div>
                <div>
                  <p className="font-semibold">
                    Profesionales recién egresados
                  </p>
                  <p className="text-sm text-foreground/70">
                    Sin experiencia previa o menos de 2 años de práctica
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-secondary/20 text-secondary-700 px-3 py-1 rounded font-semibold text-sm">
                  $2,000 - $2,700
                </div>
                <div>
                  <p className="font-semibold">Profesionales con experiencia</p>
                  <p className="text-sm text-foreground/70">
                    3-7 años de experiencia, sin especialización específica
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-secondary/20 text-secondary-700 px-3 py-1 rounded font-semibold text-sm">
                  $2,700 - $3,500
                </div>
                <div>
                  <p className="font-semibold">Especialistas consolidados</p>
                  <p className="text-sm text-foreground/70">
                    Especialización específica, buena reputación, +7 años
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-secondary/20 text-secondary-700 px-3 py-1 rounded font-semibold text-sm">
                  $3,500+
                </div>
                <div>
                  <p className="font-semibold">Referentes del sector</p>
                  <p className="text-sm text-foreground/70">
                    Alta especialización, publicaciones, trayectoria destacada
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-content2 mb-6">
              <CardBody className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">
                  Fórmula para calcular tu tarifa mínima:
                </h3>
                <div className="bg-primary/5 p-4 rounded-lg space-y-3 text-sm">
                  <div>
                    <strong>1. Calculá tus costos fijos mensuales:</strong>
                    <ul className="ml-6 mt-2 space-y-1 text-foreground/80">
                      <li>• Alquiler del consultorio</li>
                      <li>• Servicios (internet, luz, limpieza)</li>
                      <li>• Aportes a CJPPU y BPS</li>
                      <li>• Contador</li>
                      <li>• Material terapéutico</li>
                      <li>• Publicidad/marketing</li>
                    </ul>
                  </div>
                  <div>
                    <strong>2. Estimá cuántas sesiones harás por mes</strong>{" "}
                    (sé realista, especialmente al principio)
                  </div>
                  <div>
                    <strong>3. Aplicá la fórmula:</strong>
                    <div className="bg-white p-3 rounded mt-2 font-mono text-primary">
                      Tarifa mínima = (Costos fijos / N° sesiones) × 1.5
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-foreground/70">
                  El factor 1.5 te da un margen para cubrir imprevistos y
                  generar ahorro.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-secondary/10 border-l-4 border-secondary">
              <CardBody className="p-6">
                <h4 className="font-semibold mb-3">
                  💰 Ejemplo práctico con alquiler por hora:
                </h4>
                <div className="space-y-2 text-sm text-foreground/90">
                  <p>
                    <strong>Costos fijos mensuales:</strong>
                  </p>
                  <ul className="ml-6 space-y-1">
                    <li>• Consultorio por hora (10 hrs/semana): $10,000</li>
                    <li>• CJPPU + BPS: $8,000</li>
                    <li>• Contador: $3,000</li>
                    <li>• Marketing básico: $2,000</li>
                    <li>• Material: $1,000</li>
                    <li className="font-semibold pt-1">
                      <strong>Total: $24,000</strong>
                    </li>
                  </ul>
                  <p className="pt-3">
                    <strong>Si hacés 40 sesiones al mes:</strong>
                  </p>
                  <p className="ml-6">
                    ($24,000 / 40) × 1.5 = <strong>$900 por sesión</strong>
                  </p>
                  <p className="pt-3 text-secondary-700 font-semibold">
                    → Cobrando $2,000 por sesión, tu ganancia neta sería de
                    $1,100 por sesión, lo que resulta en $44,000 mensuales de
                    ganancia.
                  </p>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* Paso 6: Primeros Pacientes */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <FaUsers className="text-2xl text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-primary">
                Paso 6: ¿Cómo Conseguir tus Primeros Pacientes?
              </h2>
            </div>

            <p className="text-foreground/90 mb-6 leading-relaxed">
              Esta es la pregunta del millón. Tener todo listo no sirve de nada
              si no tienes pacientes. Aquí van estrategias probadas que
              funcionan en Montevideo:
            </p>

            <div className="space-y-6">
              <Card className="bg-content2">
                <CardBody className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-primary flex items-center gap-2">
                    <span className="bg-secondary-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                      1
                    </span>
                    Registrate en Directorios Profesionales
                  </h3>
                  <p className="text-sm text-foreground/80 mb-3">
                    Miles de personas buscan psicólogos en estos sitios cada
                    mes. Tu presencia allí es fundamental:
                  </p>
                  <ul className="text-sm space-y-2 text-foreground/80">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <a
                          href="https://www.tuterapia.com.uy/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary-500 hover:underline font-semibold"
                        >
                          Tu Terapia
                        </a>{" "}
                        - Uno de los directorios más visitados en Uruguay
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <a
                          href="https://psicologosdeluruguay.com.uy/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary-500 hover:underline font-semibold"
                        >
                          Psicólogos del Uruguay
                        </a>{" "}
                        - Directorio profesional local
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <a
                          href="https://www.red-psi.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary-500 hover:underline font-semibold"
                        >
                          Red-Psi
                        </a>{" "}
                        - Red de profesionales de la salud mental
                      </div>
                    </li>
                  </ul>
                </CardBody>
              </Card>

              <Card className="bg-content2">
                <CardBody className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-primary flex items-center gap-2">
                    <span className="bg-secondary-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                      2
                    </span>
                    Optimizá tu Presencia en Google
                  </h3>
                  <p className="text-sm text-foreground/80 mb-3">
                    Muchas personas buscan &quot;psicólogo en [barrio]&quot;
                    directamente en Google:
                  </p>
                  <ul className="text-sm space-y-2 text-foreground/80">
                    <li className="flex items-start">
                      <span className="text-secondary-500 mr-2 mt-1">•</span>
                      <span>
                        Creá tu perfil de <strong>Google Business</strong> con
                        tu zona de atención
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-500 mr-2 mt-1">•</span>
                      <span>
                        Pedí reseñas a tus primeros pacientes satisfechos
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-500 mr-2 mt-1">•</span>
                      <span>
                        Considerá crear un sitio web simple o una landing page
                      </span>
                    </li>
                  </ul>
                </CardBody>
              </Card>

              <Card className="bg-content2">
                <CardBody className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-primary flex items-center gap-2">
                    <span className="bg-secondary-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                      3
                    </span>
                    Redes Sociales con Contenido de Valor
                  </h3>
                  <p className="text-sm text-foreground/80 mb-3">
                    No se trata de vender, sino de educar y generar confianza:
                  </p>
                  <ul className="text-sm space-y-2 text-foreground/80">
                    <li className="flex items-start">
                      <span className="text-secondary-500 mr-2 mt-1">•</span>
                      <span>
                        Comparte contenido educativo sobre salud mental
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-500 mr-2 mt-1">•</span>
                      <span>
                        Desmitifica conceptos erróneos sobre la terapia
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-500 mr-2 mt-1">•</span>
                      <span>
                        Muestra tu enfoque terapéutico (sin detalles de
                        pacientes)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-500 mr-2 mt-1">•</span>
                      <span>
                        Instagram y LinkedIn son las plataformas más efectivas
                      </span>
                    </li>
                  </ul>
                </CardBody>
              </Card>

              <Card className="bg-content2">
                <CardBody className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-primary flex items-center gap-2">
                    <span className="bg-secondary-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                      4
                    </span>
                    Networking Profesional
                  </h3>
                  <p className="text-sm text-foreground/80 mb-3">
                    Las derivaciones entre colegas son una fuente constante de
                    pacientes:
                  </p>
                  <ul className="text-sm space-y-2 text-foreground/80">
                    <li className="flex items-start">
                      <span className="text-secondary-500 mr-2 mt-1">•</span>
                      <span>
                        Conectá con psicólogos de especialidades complementarias
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-500 mr-2 mt-1">•</span>
                      <span>
                        Presentate en centros médicos, policlínicas,
                        nutricionistas
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-500 mr-2 mt-1">•</span>
                      <span>
                        Participá en eventos de la{" "}
                        <a
                          href="https://www.psicologos.org.uy/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary-500 hover:underline"
                        >
                          CPU
                        </a>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-500 mr-2 mt-1">•</span>
                      <span>Armá una red de derivación mutua (win-win)</span>
                    </li>
                  </ul>
                </CardBody>
              </Card>

              <Card className="bg-content2">
                <CardBody className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-primary flex items-center gap-2">
                    <span className="bg-secondary-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                      5
                    </span>
                    Primera Consulta Bonificada (Uso estratégico)
                  </h3>
                  <p className="text-sm text-foreground/80">
                    Algunos profesionales ofrecen la primera sesión a precio
                    reducido. Si lo hacés, que sea una estrategia limitada en el
                    tiempo (primeros 3 meses) y nunca gratis (desvaloriza tu
                    trabajo). Podés ofrecer un 30-40% de descuento en la primera
                    consulta.
                  </p>
                </CardBody>
              </Card>
            </div>

            <Card className="bg-primary/5 border-l-4 border-primary mt-6">
              <CardBody className="p-6">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <FaLightbulb className="text-primary" />
                  Consejo importante:
                </h4>
                <p className="text-sm text-foreground/90">
                  La mejor estrategia de marketing es{" "}
                  <strong>hacer bien tu trabajo</strong>. Un paciente satisfecho
                  te recomendará a 2-3 personas. En 6 meses, las derivaciones de
                  boca en boca serán tu principal fuente de pacientes nuevos.
                </p>
              </CardBody>
            </Card>
          </section>

          {/* Conclusión y CTA */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Conclusión: Tu Camino Hacia la Práctica Privada
              </h2>
              <p className="text-foreground/90 mb-4 leading-relaxed">
                Empezar un consultorio privado en Montevideo es una decisión
                importante que requiere planificación, pero no tiene por qué ser
                abrumadora ni costosa.
              </p>
              <p className="text-foreground/90 mb-6 leading-relaxed">
                La clave está en <strong>empezar de forma inteligente</strong>:
                minimizando riesgos financieros, aprendiendo sobre la marcha, y
                escalando a medida que tu práctica crece. El alquiler de
                consultorios por hora te permite justamente eso: comenzar sin
                grandes inversiones y con la flexibilidad que necesitas en esta
                etapa.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Checklist: ¿Estás listo para empezar?
                </h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-start">
                    <FaCheckCircle className="text-secondary-500 mr-2 mt-1" />
                    <span>Título registrado en el MSP</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-secondary-500 mr-2 mt-1" />
                    <span>Inscripto en CJPPU</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-secondary-500 mr-2 mt-1" />
                    <span>Alta en DGI y BPS</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-secondary-500 mr-2 mt-1" />
                    <span>Espacio de trabajo definido</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-secondary-500 mr-2 mt-1" />
                    <span>Tarifa establecida</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-secondary-500 mr-2 mt-1" />
                    <span>Estrategia de marketing inicial</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-secondary-500 mr-2 mt-1" />
                    <span>Perfil en directorios profesionales</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-secondary-500 mr-2 mt-1" />
                    <span>Sistema de reservas y facturación</span>
                  </div>
                </div>
              </div>

              <div className="bg-secondary-500 text-white rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-3">
                  ¿Listo para dar el primer paso?
                </h3>
                <p className="mb-4">
                  En Espacio PISAMA te ayudamos a comenzar sin grandes
                  inversiones. Consultorios profesionales por hora en Parque
                  Rodó, con aislación acústica certificada, completamente
                  equipados y listos para usar.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    as={Link}
                    href="/soluciones/psicologos"
                    color="default"
                    size="lg"
                    className="bg-white text-secondary-500 font-semibold"
                  >
                    Ver Soluciones para Psicólogos
                  </Button>
                  <Button
                    as={Link}
                    href="/contacto"
                    variant="bordered"
                    size="lg"
                    className="border-white text-white font-semibold"
                  >
                    Agendar una Visita
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Artículos Relacionados */}
          <section className="border-t border-content4 pt-8">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Artículos Relacionados
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/soluciones/psicologos" className="block group">
                <Card className="hover:shadow-lg transition-all">
                  <CardBody className="p-6">
                    <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                      Consultorios para Psicólogos en Montevideo
                    </h3>
                    <p className="text-sm text-foreground/70">
                      Descubre espacios diseñados específicamente para tu
                      práctica terapéutica.
                    </p>
                  </CardBody>
                </Card>
              </Link>
              <Link href="/soluciones" className="block group">
                <Card className="hover:shadow-lg transition-all">
                  <CardBody className="p-6">
                    <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                      Soluciones por Profesión
                    </h3>
                    <p className="text-sm text-foreground/70">
                      Encuentra la solución perfecta según tu especialidad
                      profesional.
                    </p>
                  </CardBody>
                </Card>
              </Link>
            </div>
          </section>

          {/* Fuentes */}
          <section className="mt-12 border-t border-content4 pt-8">
            <h3 className="text-sm font-semibold text-foreground/60 mb-3">
              FUENTES Y REFERENCIAS:
            </h3>
            <ul className="text-xs space-y-1 text-foreground/60">
              <li>
                • Coordinadora de Psicólogos del Uruguay (CPU) -{" "}
                <a
                  href="https://www.psicologos.org.uy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-500 hover:underline"
                >
                  www.psicologos.org.uy
                </a>
              </li>
              <li>
                • Ministerio de Salud Pública (MSP) - Registro de Profesionales
              </li>
              <li>
                • Caja de Profesionales Universitarios -{" "}
                <a
                  href="https://www.cjppu.org.uy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-500 hover:underline"
                >
                  www.cjppu.org.uy
                </a>
              </li>
              <li>• Análisis del Mercado de Alquileres en Uruguay 2025</li>
              <li>• Tributación de Profesionales Independientes - DGI</li>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}
