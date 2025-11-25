import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Metadata } from "next";
import Link from "next/link";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaCalculator,
  FaChartLine,
  FaClock,
  FaLightbulb,
  FaExclamationTriangle,
} from "react-icons/fa";

import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title:
    "Consultorio Propio vs. Alquiler por Hora: ¿Qué Conviene en 2026? | Guía Comparativa",
  description:
    "Comparativa completa de costos, ventajas y desventajas entre consultorio propio, alquiler mensual y alquiler por hora para psicólogos en Montevideo. Calculadora incluida.",
  keywords: [
    "consultorio propio vs alquiler",
    "alquiler por hora montevideo",
    "consultorio compartido",
    "ventajas consultorios flexibles",
    "costos consultorio psicólogo",
    "coworking terapeutas",
    "espacio compartido profesionales salud",
    "consultorio flexible montevideo 2026",
  ],
  alternates: {
    canonical: "/blog/consultorio-propio-vs-alquiler-por-hora",
  },
  openGraph: {
    title: "Consultorio Propio vs. Alquiler por Hora: ¿Qué Conviene?",
    description:
      "Descubre qué opción se adapta mejor a tu etapa profesional y objetivos. Comparativa completa con costos reales para 2026.",
    type: "article",
    publishedTime: "2025-10-29T00:00:00Z",
    authors: ["Espacio PISAMA"],
  },
};

export default function ConsultorioPropioVsAlquilerPage() {
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
      name: "Consultorio Propio vs. Alquiler por Hora",
      url: `${siteConfig.url}/blog/consultorio-propio-vs-alquiler-por-hora`,
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
              Consultorio Propio vs. Alquiler por Hora: ¿Qué Conviene en 2025?
            </h1>
            <p className="text-xl text-foreground/80 mb-4">
              La decisión más importante para tu práctica privada: comparativa
              completa de costos, ventajas y desventajas entre las tres opciones
              principales en Montevideo.
            </p>
            <div className="flex gap-4 text-sm text-foreground/60">
              <time dateTime="2025-10-29">29 de octubre, 2025</time>
              <span>•</span>
              <span>10 min de lectura</span>
            </div>
          </header>

          {/* Introducción */}
          <section className="mb-12">
            <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
              Una de las primeras decisiones que enfrentarás al iniciar tu
              práctica privada es dónde atender a tus pacientes. ¿Invertir en un
              consultorio propio? ¿Comprometerte con un alquiler mensual? ¿O
              pagar solo por las horas que usas?
            </p>
            <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
              No existe una respuesta única. La mejor opción depende de tu etapa
              profesional, volumen de pacientes, capacidad financiera y
              objetivos a largo plazo.
            </p>
            <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
              En esta guía analizamos las tres opciones principales, con números
              reales para Montevideo en 2025, para que puedas tomar una decisión
              informada que se ajuste a tu situación.
            </p>

            <Card className="bg-secondary/10 border-l-4 border-secondary">
              <CardBody className="p-6">
                <p className="text-foreground/90">
                  <strong>📊 Contexto del mercado 2025:</strong> En Montevideo,
                  la demanda de espacios profesionales aumentó un 50% durante
                  2024-2025. El trabajo flexible se consolidó como tendencia:
                  más del 50% de los profesionales independientes prefieren
                  modelos híbridos que les permitan diversificar fuentes de
                  ingreso sin compromisos rígidos.
                </p>
              </CardBody>
            </Card>
          </section>

          {/* Las 3 Opciones */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Las 3 Opciones Principales
            </h2>
            <p className="text-foreground/90 mb-8 leading-relaxed">
              Antes de comparar en detalle, conozcamos las características
              fundamentales de cada opción:
            </p>

            <div className="space-y-6">
              {/* Opción 1 */}
              <Card className="border-2 border-primary/20">
                <CardBody className="p-6">
                  <h3 className="text-2xl font-semibold text-primary mb-3">
                    1. Consultorio Propio (Compra)
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Compras o construyes un espacio de tu propiedad, ya sea un
                    apartamento pequeño, una oficina comercial o un consultorio
                    diseñado específicamente para terapia.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Inversión inicial típica:</strong> $3,000,000 -
                      $5,000,000 UYU (USD 75,000 - 125,000) en zonas
                      profesionales de Montevideo
                    </p>
                  </div>
                </CardBody>
              </Card>

              {/* Opción 2 */}
              <Card className="border-2 border-primary/20">
                <CardBody className="p-6">
                  <h3 className="text-2xl font-semibold text-primary mb-3">
                    2. Alquiler Mensual Tradicional
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Alquilas un espacio exclusivo con contrato mensual
                    (generalmente 1-2 años). El consultorio es solo tuyo durante
                    todo el período, pero pagas un monto fijo mensual sin
                    importar cuánto lo uses.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Costo mensual típico:</strong> $25,000 - $40,000
                      UYU en zonas como Parque Rodó, Pocitos o Centro
                    </p>
                  </div>
                </CardBody>
              </Card>

              {/* Opción 3 */}
              <Card className="border-2 border-secondary-500">
                <CardBody className="p-6">
                  <h3 className="text-2xl font-semibold text-secondary-500 mb-3">
                    3. Alquiler por Hora (Espacios Flexibles)
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Reservas y pagas solo por las horas que necesitas usar el
                    consultorio. Espacios profesionales completamente equipados,
                    generalmente compartidos con otros terapeutas en horarios
                    diferentes.
                  </p>
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Costo por hora típico:</strong> $250 - $400 UYU
                      según volumen de reservas y ubicación
                    </p>
                  </div>
                </CardBody>
              </Card>
            </div>
          </section>

          {/* Comparativa Detallada */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Comparativa Detallada: 8 Criterios Clave
            </h2>

            {/* Criterio 1: Inversión Inicial */}
            <Card className="mb-6 bg-content2">
              <CardBody className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <FaCalculator className="text-xl text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      1. Inversión Inicial
                    </h3>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-primary/20">
                        <th className="text-left p-3">Opción</th>
                        <th className="text-right p-3">Inversión Inicial</th>
                        <th className="text-left p-3">Detalles</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-primary/10">
                        <td className="p-3 font-semibold">
                          Consultorio Propio
                        </td>
                        <td className="p-3 text-right text-red-600 font-semibold">
                          $3,000,000+
                        </td>
                        <td className="p-3 text-xs text-foreground/70">
                          + mobiliario + equipamiento + gastos de escrituración
                        </td>
                      </tr>
                      <tr className="border-b border-primary/10">
                        <td className="p-3 font-semibold">Alquiler Mensual</td>
                        <td className="p-3 text-right text-orange-600 font-semibold">
                          $75,000-$120,000
                        </td>
                        <td className="p-3 text-xs text-foreground/70">
                          Depósito + 2 meses adelantados + mobiliario
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Alquiler por Hora</td>
                        <td className="p-3 text-right text-green-600 font-semibold">
                          $0
                        </td>
                        <td className="p-3 text-xs text-foreground/70">
                          Espacios equipados listos para usar
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                  <p className="text-sm text-foreground/90">
                    <strong>✓ Ganador: Alquiler por Hora</strong> - Elimina
                    completamente la barrera de entrada financiera.
                  </p>
                </div>
              </CardBody>
            </Card>

            {/* Criterio 2: Costos Mensuales */}
            <Card className="mb-6 bg-content2">
              <CardBody className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <FaChartLine className="text-xl text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      2. Costos Mensuales Operativos
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-foreground/80 mb-4">
                  Aquí es donde la diferencia se hace evidente. Analicemos un
                  caso típico: <strong>15 pacientes semanales</strong> (60 horas
                  al mes de uso real).
                </p>

                <div className="space-y-4">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-primary">
                      Consultorio Propio:
                    </h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li className="flex justify-between">
                        <span>• Cuota crédito hipotecario:</span>
                        <span className="font-semibold">$40,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>• Gastos comunes:</span>
                        <span className="font-semibold">$6,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>• Luz + Internet:</span>
                        <span className="font-semibold">$3,500</span>
                      </li>
                      <li className="flex justify-between">
                        <span>• Limpieza:</span>
                        <span className="font-semibold">$4,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>• Mantenimiento/imprevistos:</span>
                        <span className="font-semibold">$3,000</span>
                      </li>
                      <li className="flex justify-between border-t border-primary/20 pt-2 mt-2">
                        <strong>TOTAL MENSUAL:</strong>
                        <strong className="text-red-600">$56,500</strong>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-primary">
                      Alquiler Mensual:
                    </h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li className="flex justify-between">
                        <span>• Alquiler:</span>
                        <span className="font-semibold">$30,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>• Gastos comunes:</span>
                        <span className="font-semibold">$5,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>• Servicios (luz, internet):</span>
                        <span className="font-semibold">$3,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>• Limpieza:</span>
                        <span className="font-semibold">$3,500</span>
                      </li>
                      <li className="flex justify-between border-t border-primary/20 pt-2 mt-2">
                        <strong>TOTAL MENSUAL:</strong>
                        <strong className="text-orange-600">$41,500</strong>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-secondary-500">
                      Alquiler por Hora (60 horas/mes):
                    </h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li className="flex justify-between">
                        <span>• 60 horas × $250:</span>
                        <span className="font-semibold">$15,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>• Servicios incluidos:</span>
                        <span className="font-semibold">$0</span>
                      </li>
                      <li className="flex justify-between">
                        <span>• Limpieza incluida:</span>
                        <span className="font-semibold">$0</span>
                      </li>
                      <li className="flex justify-between">
                        <span>• Equipamiento incluido:</span>
                        <span className="font-semibold">$0</span>
                      </li>
                      <li className="flex justify-between border-t border-secondary/20 pt-2 mt-2">
                        <strong>TOTAL MENSUAL:</strong>
                        <strong className="text-green-600">$15,000</strong>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                  <p className="text-sm text-foreground/90 mb-2">
                    <strong>✓ Ganador: Alquiler por Hora</strong>
                  </p>
                  <p className="text-xs text-foreground/70">
                    Con 60 horas de uso, ahorras $26,500 vs. alquiler mensual y
                    $41,500 vs. consultorio propio. Eso es entre $318,000 y
                    $498,000 al año.
                  </p>
                </div>
              </CardBody>
            </Card>

            {/* Criterio 3: Flexibilidad */}
            <Card className="mb-6 bg-content2">
              <CardBody className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <FaClock className="text-xl text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      3. Flexibilidad y Compromiso
                    </h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">
                      Consultorio Propio
                    </h4>
                    <div className="flex items-start gap-2 mb-2">
                      <FaTimesCircle className="text-red-500 mt-1 flex-shrink-0" />
                      <p className="text-xs text-foreground/80">
                        Compromiso de 20-30 años (si es con crédito)
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <FaTimesCircle className="text-red-500 mt-1 flex-shrink-0" />
                      <p className="text-xs text-foreground/80">
                        Difícil cambiar de zona si tu público cambia
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">
                      Alquiler Mensual
                    </h4>
                    <div className="flex items-start gap-2 mb-2">
                      <FaTimesCircle className="text-orange-500 mt-1 flex-shrink-0" />
                      <p className="text-xs text-foreground/80">
                        Contrato de 1-2 años mínimo
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <FaTimesCircle className="text-orange-500 mt-1 flex-shrink-0" />
                      <p className="text-xs text-foreground/80">
                        Pagas incluso si reduces tu agenda
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-secondary/10 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm text-secondary-500">
                      Alquiler por Hora
                    </h4>
                    <div className="flex items-start gap-2 mb-2">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-xs text-foreground/80">
                        Sin compromiso a largo plazo
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-xs text-foreground/80">
                        Ajustás según tus pacientes reales
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                  <p className="text-sm text-foreground/90">
                    <strong>✓ Ganador: Alquiler por Hora</strong> - Se adapta a
                    tus necesidades reales sin penalizarte por cambios.
                  </p>
                </div>
              </CardBody>
            </Card>

            {/* Criterio 4: Riesgo Financiero */}
            <Card className="mb-6 bg-content2">
              <CardBody className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <FaExclamationTriangle className="text-xl text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      4. Riesgo Financiero
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-foreground/80 mb-4">
                  ¿Qué pasa si tu agenda se reduce temporalmente? Analicemos
                  tres escenarios comunes:
                </p>

                <div className="space-y-4">
                  <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold mb-2 text-sm">
                      Escenario: Embarazo o enfermedad (3 meses sin trabajar)
                    </h4>
                    <ul className="space-y-2 text-xs text-foreground/80">
                      <li>
                        • <strong>Consultorio propio:</strong> Pérdida de
                        $169,500 (cuotas + gastos que igual debes pagar)
                      </li>
                      <li>
                        • <strong>Alquiler mensual:</strong> Pérdida de $124,500
                        (o multa por rescindir contrato)
                      </li>
                      <li>
                        • <strong>Alquiler por hora:</strong> Pérdida de $0
                        (simplemente no reservas)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-semibold mb-2 text-sm">
                      Escenario: Cambio de público objetivo
                    </h4>
                    <p className="text-xs text-foreground/80 mb-2">
                      Decides especializarte en adolescentes en lugar de
                      adultos, y necesitas cambiar a una zona con mejor acceso
                      en transporte público:
                    </p>
                    <ul className="space-y-2 text-xs text-foreground/80">
                      <li>
                        • <strong>Consultorio propio:</strong> Tenés que vender
                        (proceso de 6-12 meses, comisiones del 3-6%)
                      </li>
                      <li>
                        • <strong>Alquiler mensual:</strong> Multa de 2-3 meses
                        de alquiler para rescindir
                      </li>
                      <li>
                        • <strong>Alquiler por hora:</strong> Cambias de
                        ubicación inmediatamente
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                  <p className="text-sm text-foreground/90">
                    <strong>✓ Ganador: Alquiler por Hora</strong> - Riesgo
                    financiero mínimo ante cambios inesperados.
                  </p>
                </div>
              </CardBody>
            </Card>

            {/* Criterio 5: Privacidad */}
            <Card className="mb-6 bg-content2">
              <CardBody className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <FaLightbulb className="text-xl text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      5. Privacidad y Confidencialidad
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-foreground/80 mb-4">
                  En terapia, la privacidad no es negociable. Veamos cómo se
                  maneja en cada opción:
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold mb-3 text-sm flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      Consultorio Propio
                    </h4>
                    <ul className="space-y-2 text-xs text-foreground/80">
                      <li>• Privacidad total garantizada</li>
                      <li>• Personalizas aislación acústica</li>
                      <li>• Control absoluto del espacio</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold mb-3 text-sm flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      Alquiler Mensual
                    </h4>
                    <ul className="space-y-2 text-xs text-foreground/80">
                      <li>• Privacidad exclusiva</li>
                      <li>• Depende de la aislación del edificio</li>
                      <li>• Puede requerir inversión adicional</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-secondary/10 rounded-lg">
                    <h4 className="font-semibold mb-3 text-sm flex items-center gap-2 text-secondary-500">
                      <FaCheckCircle className="text-green-500" />
                      Alquiler por Hora
                    </h4>
                    <ul className="space-y-2 text-xs text-foreground/80">
                      <li>• Privacidad durante tu sesión</li>
                      <li>
                        • <strong>Clave:</strong> Verificar aislación acústica
                        profesional
                      </li>
                      <li>• En Espacio PISAMA: Certificada</li>
                    </ul>
                  </div>
                </div>

                <Card className="mt-4 bg-warning/10 border-l-4 border-warning">
                  <CardBody className="p-4">
                    <p className="text-xs text-foreground/90">
                      <strong>⚠️ Importante:</strong> Si optas por alquiler por
                      hora, asegúrate de que el espacio cuente con{" "}
                      <strong>aislación acústica certificada</strong>. No todos
                      los espacios compartidos la tienen. Pregunta
                      específicamente por esto antes de contratar.
                    </p>
                  </CardBody>
                </Card>

                <div className="mt-4 bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm text-foreground/90">
                    <strong>→ Empate técnico</strong> - Los tres pueden ofrecer
                    privacidad adecuada si se verifican las condiciones de
                    aislación acústica.
                  </p>
                </div>
              </CardBody>
            </Card>

            {/* Criterio 6: Networking */}
            <Card className="mb-6 bg-content2">
              <CardBody className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <FaCheckCircle className="text-xl text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      6. Oportunidades de Networking
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-foreground/80 mb-4">
                  La interacción con otros profesionales puede generar
                  derivaciones y aprendizaje:
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-primary/5 rounded-lg text-center">
                    <p className="text-2xl mb-2">😐</p>
                    <h4 className="font-semibold mb-2 text-sm">
                      Consultorio Propio
                    </h4>
                    <p className="text-xs text-foreground/70">
                      Trabajas solo, debes buscar networking activamente fuera
                      del consultorio
                    </p>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-lg text-center">
                    <p className="text-2xl mb-2">🤷</p>
                    <h4 className="font-semibold mb-2 text-sm">
                      Alquiler Mensual
                    </h4>
                    <p className="text-xs text-foreground/70">
                      Depende del edificio; a veces hay otros profesionales,
                      otras veces no
                    </p>
                  </div>

                  <div className="p-4 bg-secondary/10 rounded-lg text-center">
                    <p className="text-2xl mb-2">✅</p>
                    <h4 className="font-semibold mb-2 text-sm text-secondary-500">
                      Alquiler por Hora
                    </h4>
                    <p className="text-xs text-foreground/70">
                      Contacto natural con otros terapeutas, posibilidad de
                      derivaciones mutuas
                    </p>
                  </div>
                </div>

                <div className="mt-4 bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                  <p className="text-sm text-foreground/90">
                    <strong>✓ Ganador: Alquiler por Hora</strong> - Favorece
                    conexiones profesionales orgánicas.
                  </p>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* Calculadora Interactiva */}
          <section className="mb-12">
            <Card className="bg-gradient-to-br from-secondary/10 to-primary/10 border-2 border-secondary/30">
              <CardBody className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                  <FaCalculator className="text-secondary-500" />
                  Calculadora: ¿Cuál es tu punto de equilibrio?
                </h2>

                <p className="text-foreground/80 mb-6">
                  El <strong>punto de equilibrio</strong> es el número de horas
                  mensuales donde el alquiler por hora iguala el costo del
                  alquiler mensual.
                </p>

                <div className="bg-white dark:bg-content1 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold mb-4">Fórmula:</h3>
                  <div className="bg-primary/5 p-4 rounded font-mono text-sm mb-4">
                    Punto de Equilibrio = Costo Mensual ÷ Tarifa por Hora
                  </div>

                  <h4 className="font-semibold mb-3">Ejemplos prácticos:</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center p-3 bg-content2 rounded">
                      <span>Alquiler de $30,000/mes ÷ $250/hora =</span>
                      <strong className="text-primary">120 horas</strong>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-content2 rounded">
                      <span>Alquiler de $35,000/mes ÷ $250/hora =</span>
                      <strong className="text-primary">140 horas</strong>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-content2 rounded">
                      <span>Alquiler de $40,000/mes ÷ $300/hora =</span>
                      <strong className="text-primary">133 horas</strong>
                    </div>
                  </div>
                </div>

                <Card className="bg-secondary/10 border-l-4 border-secondary">
                  <CardBody className="p-6">
                    <h4 className="font-semibold mb-3">💡 Conclusión clave:</h4>
                    <p className="text-sm text-foreground/90 mb-3">
                      Si trabajas <strong>menos de 120-140 horas al mes</strong>{" "}
                      (unas 30-35 horas semanales), el alquiler por hora es
                      matemáticamente más conveniente.
                    </p>
                    <p className="text-sm text-foreground/90">
                      Esto aplica a la mayoría de terapeutas que están empezando
                      o que trabajan en modalidad parcial mientras combinan con
                      otras actividades.
                    </p>
                  </CardBody>
                </Card>
              </CardBody>
            </Card>
          </section>

          {/* Matriz de Decisión */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              ¿Cuál Opción es para Ti? Matriz de Decisión
            </h2>

            <div className="space-y-4">
              <Card className="border-2 border-secondary-500">
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                    ✅ Alquiler por Hora es ideal si...
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground/90">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>
                        Estás empezando tu práctica privada y aún no tienes
                        agenda completa
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>
                        Trabajas menos de 30 horas semanales en consultorio
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>
                        Combinas terapia presencial con online u otras
                        actividades profesionales
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>
                        Prefieres minimizar riesgos financieros y mantener
                        flexibilidad
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>
                        Valoras el networking con otros profesionales de la
                        salud mental
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>
                        No quieres preocuparte por mantenimiento, limpieza ni
                        servicios
                      </span>
                    </li>
                  </ul>
                </CardBody>
              </Card>

              <Card className="border-2 border-primary/30">
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    🏢 Alquiler Mensual es ideal si...
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground/90">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span>Tienes agenda estable de 30+ horas semanales</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span>
                        Quieres un espacio exclusivo que puedas personalizar
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span>
                        Necesitas dejar material terapéutico permanentemente
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span>
                        Tienes estabilidad financiera para comprometerte 1-2
                        años
                      </span>
                    </li>
                  </ul>
                </CardBody>
              </Card>

              <Card className="border-2 border-primary/30">
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    🏠 Consultorio Propio es ideal si...
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground/90">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span>
                        Tienes práctica consolidada con agenda completa (40+
                        horas semanales)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span>
                        Cuentas con capital para inversión inicial significativa
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span>Planeas trabajar en esa zona por 10+ años</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span>Buscas construir patrimonio a largo plazo</span>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </div>
          </section>

          {/* Caso de Estudio */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Caso de Estudio Real: La Historia de Sofía
            </h2>

            <Card className="bg-content2">
              <CardBody className="p-6">
                <p className="text-foreground/90 mb-4 italic">
                  &quot;Cuando me recibí de psicóloga en 2023, pensé que
                  necesitaba un alquiler mensual para parecer
                  &apos;profesional&apos;. Firmé un contrato de 2 años por
                  $32,000 mensuales.&quot;
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">
                      La Realidad del Primer Año:
                    </h4>
                    <ul className="text-sm space-y-2 text-foreground/80">
                      <li>
                        • Primer trimestre: 4 pacientes fijos (16 horas/mes de
                        uso real)
                      </li>
                      <li>• Segundo trimestre: 8 pacientes (32 horas/mes)</li>
                      <li>• Tercer trimestre: 12 pacientes (48 horas/mes)</li>
                      <li>• Cuarto trimestre: 15 pacientes (60 horas/mes)</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">
                      Análisis financiero:
                    </h4>
                    <p className="text-xs text-foreground/80 mb-3">
                      Sofía pagó $384,000 ese año en alquiler. Si hubiera usado
                      alquiler por hora a $250/h:
                    </p>
                    <ul className="text-xs space-y-1 text-foreground/80">
                      <li>
                        • Trimestre 1: 16h × 3 meses = 48h × $250 ={" "}
                        <strong>$12,000</strong>
                      </li>
                      <li>
                        • Trimestre 2: 32h × 3 meses = 96h × $250 ={" "}
                        <strong>$24,000</strong>
                      </li>
                      <li>
                        • Trimestre 3: 48h × 3 meses = 144h × $250 ={" "}
                        <strong>$36,000</strong>
                      </li>
                      <li>
                        • Trimestre 4: 60h × 3 meses = 180h × $250 ={" "}
                        <strong>$45,000</strong>
                      </li>
                      <li className="pt-2 border-t border-foreground/20">
                        Total anual con alquiler por hora:{" "}
                        <strong className="text-green-600">$117,000</strong>
                      </li>
                      <li className="font-semibold text-green-600">
                        → Habría ahorrado $267,000 en su primer año
                      </li>
                    </ul>
                  </div>

                  <p className="text-sm text-foreground/90 italic">
                    &quot;Ahora, en 2025, renové con alquiler mensual porque ya
                    tengo agenda completa. Pero si pudiera volver atrás, habría
                    empezado con alquiler por hora sin dudarlo. Me habría
                    ahorrado mucho dinero y estrés.&quot; - Sofía, 28 años.
                  </p>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* Conclusión y CTA */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Conclusión: No Existe una Única Respuesta Correcta
              </h2>
              <p className="text-foreground/90 mb-4 leading-relaxed">
                La mejor opción depende de tu etapa profesional, volumen de
                pacientes y objetivos. Pero si hay una recomendación clara:{" "}
                <strong>empieza conservador</strong>.
              </p>
              <p className="text-foreground/90 mb-6 leading-relaxed">
                El alquiler por hora te permite construir tu práctica sin
                presiones financieras innecesarias. Una vez que tu agenda esté
                consolidada y estable, podrás evaluar dar el siguiente paso con
                información real de tus necesidades.
              </p>

              <div className="bg-white dark:bg-content1 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Nuestra Recomendación por Etapa:
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="bg-secondary-500 text-white px-3 py-1 rounded font-semibold text-xs whitespace-nowrap">
                      Año 1-2
                    </div>
                    <p>
                      <strong>Alquiler por hora</strong> - Minimiza riesgo,
                      maximiza aprendizaje
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary px-3 py-1 rounded font-semibold text-xs text-white whitespace-nowrap">
                      Año 3-5
                    </div>
                    <p>
                      <strong>Alquiler mensual</strong> - Si tienes 25+
                      pacientes fijos semanales
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-500 text-white px-3 py-1 rounded font-semibold text-xs whitespace-nowrap">
                      Año 5+
                    </div>
                    <p>
                      <strong>Consultorio propio</strong> - Práctica
                      consolidada, inversión patrimonial
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary-500 text-white rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-3">
                  Empieza tu Práctica sin Riesgos Innecesarios
                </h3>
                <p className="mb-4">
                  En Espacio PISAMA ofrecemos consultorios por hora en Parque
                  Rodó, Montevideo. Espacios profesionales con aislación
                  acústica certificada, completamente equipados, y sin
                  compromiso a largo plazo.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    as={Link}
                    href="/soluciones/psicologos"
                    color="default"
                    size="lg"
                    className="bg-white text-secondary-500 font-semibold"
                  >
                    Ver Consultorios para Psicólogos
                  </Button>
                  <Button
                    as={Link}
                    href="/contacto"
                    variant="bordered"
                    size="lg"
                    className="border-white text-white font-semibold"
                  >
                    Agendar Visita Gratis
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
              <Link href="/precios" className="block group">
                <Card className="hover:shadow-lg transition-all">
                  <CardBody className="p-6">
                    <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                      Nuestros Precios y Planes
                    </h3>
                    <p className="text-sm text-foreground/70">
                      Descubre nuestras tarifas flexibles para alquiler de
                      consultorios por hora.
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
              <li>• Análisis del Mercado de Alquileres en Uruguay 2025</li>
              <li>• Tendencias del mercado laboral y empleabilidad en 2025</li>
              <li>
                • Gestión de costos en consultorios de salud -{" "}
                <a
                  href="https://www.medesk.net/es/blog/gestion-de-costos-en-salud/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-500 hover:underline"
                >
                  Medesk
                </a>
              </li>
              <li>
                • Ventajas y desventajas del coworking -{" "}
                <a
                  href="https://wayco.es/blog/ventajas-y-desventajas-trabajar-en-un-coworking/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-500 hover:underline"
                >
                  Wayco
                </a>
              </li>
              <li>
                • Estudios de flexibilidad laboral 2025 - ManpowerGroup, AICAD
              </li>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}
