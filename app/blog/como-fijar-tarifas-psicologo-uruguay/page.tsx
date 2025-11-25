import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Metadata } from "next";
import Link from "next/link";
import {
  FaCheckCircle,
  FaCalculator,
  FaExclamationTriangle,
  FaHeart,
} from "react-icons/fa";

import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title:
    "Cómo Fijar tus Tarifas como Psicólogo Independiente en Uruguay 2026 | Guía Completa",
  description:
    "Guía definitiva para establecer honorarios justos y rentables. Incluye arancel CPU 2025, fórmulas de cálculo, factores a considerar y estrategias de pricing probadas.",
  keywords: [
    "tarifas psicólogos uruguay",
    "cuánto cobrar consulta psicología",
    "honorarios psicólogo independiente",
    "arancel CPU 2025",
    "precios terapia uruguay",
    "cómo fijar tarifas terapia",
    "pricing psicología",
    "cuánto cobra psicólogo uruguay 2026",
  ],
  alternates: {
    canonical: "/blog/como-fijar-tarifas-psicologo-uruguay",
  },
  openGraph: {
    title: "Cómo Fijar tus Tarifas como Psicólogo Independiente en Uruguay",
    description:
      "Todo lo que necesitas saber para establecer honorarios profesionales, justos y rentables en 2026.",
    type: "article",
    publishedTime: "2025-11-12T00:00:00Z",
    authors: ["Espacio PISAMA"],
  },
};

export default function ComoFijarTarifasPsicologoPage() {
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
      name: "Cómo Fijar tus Tarifas",
      url: `${siteConfig.url}/blog/como-fijar-tarifas-psicologo-uruguay`,
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
              Cómo Fijar tus Tarifas como Psicólogo Independiente en Uruguay
            </h1>
            <p className="text-xl text-foreground/80 mb-4">
              La guía definitiva para establecer honorarios profesionales,
              justos y rentables. Incluye arancel oficial 2025, fórmulas de
              cálculo, factores a considerar y cómo superar el miedo a cobrar lo
              que vales.
            </p>
            <div className="flex gap-4 text-sm text-foreground/60">
              <time dateTime="2025-11-12">12 de noviembre, 2025</time>
              <span>•</span>
              <span>10 min de lectura</span>
            </div>
          </header>

          {/* Introducción */}
          <section className="mb-12">
            <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
              &quot;¿Cuánto debería cobrar?&quot; Es probablemente una de las
              preguntas más difíciles y estresantes que enfrenta un psicólogo al
              iniciar su práctica privada.
            </p>
            <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
              Cobrar muy poco puede desvalorizar tu trabajo, generar
              insostenibilidad financiera y atraer pacientes que no valoran el
              proceso terapéutico. Cobrar muy alto puede alejar a potenciales
              pacientes y generar agenda vacía.
            </p>
            <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
              En esta guía te ayudamos a encontrar ese punto de equilibrio:
              honorarios que sean justos para ti, accesibles para tus pacientes,
              y que te permitan sostener tu práctica a largo plazo.
            </p>

            <Card className="bg-warning/10 border-l-4 border-warning">
              <CardBody className="p-6">
                <div className="flex items-start gap-3">
                  <FaHeart className="text-warning text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">
                      Primero lo primero: Tu trabajo tiene valor
                    </h3>
                    <p className="text-sm text-foreground/90">
                      Muchos terapeutas sienten culpa o incomodidad al cobrar
                      por sus sesiones. Síndrome del impostor, creencias sobre
                      &quot;ayudar desinteresadamente&quot;, o sentirse &quot;en
                      deuda con el universo&quot; son barreras comunes.
                      Recuerda:{" "}
                      <strong>
                        cobrar adecuadamente no es avaricia, es profesionalismo
                      </strong>
                      . Invertiste años en formación, supervisión y desarrollo
                      personal. Tu tiempo, energía y expertise tienen valor
                      real.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* Arancel Oficial */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Punto de Partida: Arancel Oficial CPU 2025
            </h2>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 mb-6">
              <CardBody className="p-8">
                <div className="text-center mb-4">
                  <p className="text-sm text-foreground/70 mb-2">
                    Arancel sugerido por la Coordinadora de Psicólogos del
                    Uruguay
                  </p>
                  <div className="text-5xl font-bold text-primary mb-2">
                    $2,698
                  </div>
                  <p className="text-xl text-foreground/80">+ IVA (10%)</p>
                  <p className="text-sm text-foreground/60 mt-2">
                    Vigente desde Mayo 2025
                  </p>
                </div>
                <div className="bg-white dark:bg-content1 p-4 rounded-lg text-center">
                  <p className="text-sm text-foreground/80">
                    <strong>Total con IVA:</strong> $2,967.80 por sesión de 50
                    minutos
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-content2 mb-6">
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  ¿Qué significa este arancel?
                </h3>
                <ul className="space-y-3 text-sm text-foreground/90">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      Es una <strong>sugerencia</strong>, no una obligación.
                      Cada profesional puede establecer sus propios honorarios.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      Refleja un valor de referencia considerando la formación
                      universitaria de 5 años, especialización continua y
                      responsabilidad profesional.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <strong>No incluye IVA</strong>. Como profesional
                      independiente, debes facturar IVA del 10% sobre este
                      monto.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      Sirve como piso mínimo para evitar la precarización de la
                      profesión y competencia desleal.
                    </span>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <p className="text-foreground/90">
              <strong>Realidad del mercado:</strong> En la práctica, encontrarás
              tarifas que van desde $1,500 hasta $3,500 o más, dependiendo de
              múltiples factores que analizaremos a continuación.
            </p>
          </section>

          {/* Factores que Afectan tu Tarifa */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              7 Factores que Deben Influir en tu Tarifa
            </h2>

            <div className="space-y-6">
              {/* Factor 1 */}
              <Card className="bg-content2">
                <CardBody className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-secondary/20 text-secondary-700 px-3 py-1 rounded font-semibold text-sm flex-shrink-0">
                      1
                    </div>
                    <h3 className="text-xl font-semibold text-primary">
                      Tu Experiencia y Formación
                    </h3>
                  </div>
                  <div className="pl-12">
                    <p className="text-sm text-foreground/80 mb-3">
                      A mayor experiencia y especialización, mayor valor
                      percibido y tarifa justificada:
                    </p>
                    <ul className="text-sm space-y-2 text-foreground/80">
                      <li>
                        <strong>Recién egresado (0-2 años):</strong> $1,500 -
                        $2,000
                      </li>
                      <li>
                        <strong>Profesional con experiencia (3-7 años):</strong>{" "}
                        $2,000 - $2,700
                      </li>
                      <li>
                        <strong>Especialista (7+ años + posgrado):</strong>{" "}
                        $2,700 - $3,500
                      </li>
                      <li>
                        <strong>Referente reconocido:</strong> $3,500+
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>

              {/* Factor 2 */}
              <Card className="bg-content2">
                <CardBody className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-secondary/20 text-secondary-700 px-3 py-1 rounded font-semibold text-sm flex-shrink-0">
                      2
                    </div>
                    <h3 className="text-xl font-semibold text-primary">
                      Especialización y Nicho
                    </h3>
                  </div>
                  <div className="pl-12">
                    <p className="text-sm text-foreground/80 mb-3">
                      Especializarte en un área específica te permite cobrar
                      más:
                    </p>
                    <ul className="text-sm space-y-2 text-foreground/80">
                      <li>
                        • <strong>Psicología general de adultos:</strong> Rango
                        estándar
                      </li>
                      <li>
                        • <strong>Terapia de parejas:</strong> +20-30% (mayor
                        complejidad)
                      </li>
                      <li>
                        • <strong>Psicología perinatal, trauma, EMDR:</strong>{" "}
                        +25-40%
                      </li>
                      <li>
                        • <strong>Coaching ejecutivo:</strong> +40-60% (público
                        corporativo)
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>

              {/* Factor 3 */}
              <Card className="bg-content2">
                <CardBody className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-secondary/20 text-secondary-700 px-3 py-1 rounded font-semibold text-sm flex-shrink-0">
                      3
                    </div>
                    <h3 className="text-xl font-semibold text-primary">
                      Zona y Modalidad
                    </h3>
                  </div>
                  <div className="pl-12">
                    <ul className="text-sm space-y-2 text-foreground/80">
                      <li>
                        <strong>Zona Premium (Pocitos, Carrasco):</strong>{" "}
                        +15-25% vs. promedio
                      </li>
                      <li>
                        <strong>Zona intermedia (Parque Rodó, Centro):</strong>{" "}
                        Rango estándar
                      </li>
                      <li>
                        <strong>Zonas alejadas:</strong> -10-20% por menor poder
                        adquisitivo
                      </li>
                      <li>
                        <strong>Terapia online:</strong> Generalmente igual que
                        presencial (mismo valor profesional)
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>

              {/* Factor 4 */}
              <Card className="bg-content2">
                <CardBody className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-secondary/20 text-secondary-700 px-3 py-1 rounded font-semibold text-sm flex-shrink-0">
                      4
                    </div>
                    <h3 className="text-xl font-semibold text-primary">
                      Tus Costos Operativos
                    </h3>
                  </div>
                  <div className="pl-12">
                    <p className="text-sm text-foreground/80 mb-3">
                      <strong>Fundamental:</strong> Tu tarifa debe cubrir tus
                      costos y dejarte ganancia razonable.
                    </p>
                    <p className="text-sm text-foreground/80">
                      Costos típicos mensuales: Alquiler ($15,000-$40,000),
                      CJPPU ($8,000-$12,000), Contador ($3,000-$5,000),
                      Supervisión ($4,000-$8,000), Formación continua
                      ($3,000-$6,000), Marketing ($2,000-$5,000).
                    </p>
                    <p className="text-sm text-foreground/80 mt-3">
                      → Veremos la fórmula de cálculo más adelante.
                    </p>
                  </div>
                </CardBody>
              </Card>

              {/* Factor 5 */}
              <Card className="bg-content2">
                <CardBody className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-secondary/20 text-secondary-700 px-3 py-1 rounded font-semibold text-sm flex-shrink-0">
                      5
                    </div>
                    <h3 className="text-xl font-semibold text-primary">
                      Demanda de tus Servicios
                    </h3>
                  </div>
                  <div className="pl-12">
                    <p className="text-sm text-foreground/80 mb-3">
                      La ley de oferta y demanda también aplica:
                    </p>
                    <ul className="text-sm space-y-2 text-foreground/80">
                      <li>
                        • <strong>Agenda vacía o iniciando:</strong> Considera
                        tarifas competitivas para atraer pacientes
                      </li>
                      <li>
                        • <strong>Agenda al 50-70%:</strong> Puedes mantener
                        tarifas estándar
                      </li>
                      <li>
                        • <strong>Agenda completa con lista de espera:</strong>{" "}
                        Es momento de aumentar tus honorarios
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>

              {/* Factor 6 */}
              <Card className="bg-content2">
                <CardBody className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-secondary/20 text-secondary-700 px-3 py-1 rounded font-semibold text-sm flex-shrink-0">
                      6
                    </div>
                    <h3 className="text-xl font-semibold text-primary">
                      Perfil de tus Pacientes
                    </h3>
                  </div>
                  <div className="pl-12">
                    <p className="text-sm text-foreground/80">
                      La capacidad económica de tu público objetivo es un factor
                      real. Trabajar con estudiantes universitarios no permite
                      las mismas tarifas que trabajar con ejecutivos. Puedes
                      tener una tarifa estándar y ofrecer tarifas diferenciadas
                      (no &quot;descuentos&quot;) para poblaciones específicas:
                      estudiantes con documento, desempleados, jubilados.
                    </p>
                  </div>
                </CardBody>
              </Card>

              {/* Factor 7 */}
              <Card className="bg-content2">
                <CardBody className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-secondary/20 text-secondary-700 px-3 py-1 rounded font-semibold text-sm flex-shrink-0">
                      7
                    </div>
                    <h3 className="text-xl font-semibold text-primary">
                      Valor Percibido
                    </h3>
                  </div>
                  <div className="pl-12">
                    <p className="text-sm text-foreground/80 mb-3">
                      El precio basado en valor percibido considera lo que el
                      paciente cree que vale tu servicio, no solo lo que cuesta
                      producirlo:
                    </p>
                    <ul className="text-sm space-y-2 text-foreground/80">
                      <li>
                        • Consultorio profesional y bien ubicado → Mayor valor
                        percibido
                      </li>
                      <li>
                        • Presencia online profesional (web, redes) → Mayor
                        credibilidad
                      </li>
                      <li>• Testimonios y recomendaciones → Mayor confianza</li>
                      <li>
                        • Comunicación clara de tu experiencia/enfoque → Mayor
                        diferenciación
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </div>
          </section>

          {/* Fórmula de Cálculo */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
              <FaCalculator className="text-secondary-500" />
              Fórmula para Calcular tu Tarifa Mínima
            </h2>

            <Card className="bg-gradient-to-br from-secondary/10 to-primary/10 mb-6">
              <CardBody className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Paso a Paso: Método de Costos + Margen
                </h3>

                <div className="space-y-6">
                  <div className="bg-white dark:bg-content1 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <span className="bg-secondary-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                        1
                      </span>
                      Calcula tus costos fijos mensuales
                    </h4>
                    <ul className="text-sm space-y-2 text-foreground/80 ml-10">
                      <li>• Alquiler del consultorio</li>
                      <li>• Servicios (internet, luz, limpieza)</li>
                      <li>• Aportes CJPPU y BPS</li>
                      <li>• Contador</li>
                      <li>• Supervisión clínica</li>
                      <li>• Formación continua</li>
                      <li>• Marketing y publicidad</li>
                      <li>• Seguros (si aplica)</li>
                      <li>• Material terapéutico</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-content1 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <span className="bg-secondary-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                        2
                      </span>
                      Estima tus sesiones mensuales realistas
                    </h4>
                    <p className="text-sm text-foreground/80 ml-10">
                      <strong>Importante:</strong> No cuentes todas las horas
                      del mes. Considera:
                    </p>
                    <ul className="text-sm space-y-1 text-foreground/80 ml-10 mt-2">
                      <li>• Ausencias (vacaciones, enfermedad)</li>
                      <li>• Cancelaciones habituales (~10-15%)</li>
                      <li>
                        • Tiempo entre pacientes, administración, coordinación
                      </li>
                      <li>
                        <strong>Ejemplo:</strong> Si trabajas 4 días/semana, 6
                        horas/día = 24 horas semanales = ~80 sesiones mensuales
                        potenciales. Real: 65-70 sesiones (considerando
                        cancelaciones y ausencias).
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-content1 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <span className="bg-secondary-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                        3
                      </span>
                      Aplica la fórmula
                    </h4>
                    <div className="bg-primary/5 p-4 rounded font-mono text-sm mb-3 ml-10">
                      Tarifa Mínima = (Costos Fijos Mensuales ÷ Sesiones
                      Mensuales) × Factor de Ganancia
                    </div>
                    <p className="text-sm text-foreground/80 ml-10">
                      <strong>Factor de Ganancia:</strong>
                    </p>
                    <ul className="text-sm text-foreground/70 ml-10 mt-2 space-y-1">
                      <li>× 1.5 = Ganancia mínima del 50%</li>
                      <li>× 2.0 = Ganancia del 100% (recomendado)</li>
                      <li>
                        × 2.5 = Ganancia del 150% (profesional consolidado)
                      </li>
                    </ul>
                  </div>

                  {/* Ejemplo Práctico */}
                  <div className="bg-secondary/10 p-6 rounded-lg border-2 border-secondary/30">
                    <h4 className="font-semibold mb-4 text-lg">
                      💡 Ejemplo Práctico Completo:
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold mb-2">
                          Costos Mensuales (Psicóloga recién egresada):
                        </p>
                        <ul className="space-y-1 text-foreground/80 ml-4">
                          <li>• Consultorio por hora (10 hrs/sem): $10,000</li>
                          <li>• CJPPU + BPS: $8,000</li>
                          <li>• Contador: $3,500</li>
                          <li>• Supervisión: $4,000</li>
                          <li>• Formación: $2,000</li>
                          <li>• Marketing: $2,000</li>
                          <li className="font-semibold pt-2 border-t border-foreground/20">
                            Total: $29,500
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">
                          Sesiones mensuales estimadas:
                        </p>
                        <p className="text-foreground/80 ml-4">
                          50 sesiones al mes (empezando, agenda al 60%)
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">Cálculo:</p>
                        <div className="bg-white dark:bg-content1 p-4 rounded ml-4">
                          <p>
                            ($29,500 ÷ 50) × 2.0 = <strong>$1,180</strong>
                          </p>
                        </div>
                      </div>

                      <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                        <p className="font-semibold mb-2 text-green-700 dark:text-green-400">
                          → Tarifa mínima recomendada: $1,200 - $1,500
                        </p>
                        <p className="text-xs text-foreground/70">
                          Considerando que está empezando, puede posicionarse en
                          el rango $1,500-$1,800 para cubrir variaciones y tener
                          margen de negociación con casos de honorarios
                          diferenciados.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* Estrategias de Pricing */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Estrategias de Pricing: Más Allá de la Sesión Individual
            </h2>

            <p className="text-foreground/90 mb-6">
              Ofrecer diferentes modalidades de pago puede aumentar tu retención
              de pacientes y mejorar tu flujo de caja:
            </p>

            <div className="space-y-6">
              {/* Estrategia 1 */}
              <Card className="bg-content2">
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    1. Bonos de Sesiones (Paquetes Prepagos)
                  </h3>
                  <p className="text-sm text-foreground/80 mb-3">
                    Ofrece descuentos por volumen y compromiso:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center p-3 bg-primary/5 rounded">
                      <span>
                        <strong>Bono 4 sesiones:</strong> 5% descuento
                      </span>
                      <span className="font-semibold text-secondary-500">
                        $7,600 (vs $8,000)
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-primary/5 rounded">
                      <span>
                        <strong>Bono 8 sesiones:</strong> 10% descuento
                      </span>
                      <span className="font-semibold text-secondary-500">
                        $14,400 (vs $16,000)
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-primary/5 rounded">
                      <span>
                        <strong>Bono 12 sesiones:</strong> 15% descuento
                      </span>
                      <span className="font-semibold text-secondary-500">
                        $20,400 (vs $24,000)
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 bg-green-50 dark:bg-green-950/20 p-3 rounded text-xs">
                    <p className="font-semibold mb-1">✓ Ventajas:</p>
                    <ul className="space-y-1 text-foreground/80">
                      <li>• Cobras anticipadamente (mejor flujo de caja)</li>
                      <li>
                        • Reduces riesgo de impago y ausentismo (ya pagaron)
                      </li>
                      <li>• Incentivas compromiso terapéutico del paciente</li>
                    </ul>
                  </div>
                </CardBody>
              </Card>

              {/* Estrategia 2 */}
              <Card className="bg-content2">
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    2. Tarifas Diferenciadas (No &quot;Descuentos&quot;)
                  </h3>
                  <p className="text-sm text-foreground/80 mb-3">
                    En lugar de ofrecer descuentos ad-hoc, establece categorías
                    claras:
                  </p>
                  <ul className="text-sm space-y-2 text-foreground/80">
                    <li>
                      • <strong>Tarifa estándar:</strong> $2,000 (público
                      general)
                    </li>
                    <li>
                      • <strong>Tarifa estudiantes:</strong> $1,500 (con carnet
                      vigente)
                    </li>
                    <li>
                      • <strong>Tarifa desempleados:</strong> $1,400 (con
                      documentación)
                    </li>
                    <li>
                      • <strong>Tarifa jubilados:</strong> $1,600 (según
                      ingresos)
                    </li>
                  </ul>
                  <p className="text-xs text-foreground/70 mt-3">
                    <strong>Tip:</strong> Comunica estas tarifas como
                    &quot;tarifas diferenciadas por accesibilidad&quot;, no como
                    descuentos. Esto mantiene el valor percibido de tu trabajo.
                  </p>
                </CardBody>
              </Card>

              {/* Estrategia 3 */}
              <Card className="bg-content2">
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    3. Primera Consulta: Estrategia de Entrada
                  </h3>
                  <p className="text-sm text-foreground/80 mb-3">
                    Tres enfoques comunes:
                  </p>
                  <div className="space-y-3">
                    <div className="p-3 bg-primary/5 rounded">
                      <p className="font-semibold text-sm mb-1">
                        Opción A: Mismo precio
                      </p>
                      <p className="text-xs text-foreground/70">
                        Mantiene consistencia de valor. Usado por profesionales
                        consolidados.
                      </p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded">
                      <p className="font-semibold text-sm mb-1">
                        Opción B: 30-40% descuento en primera sesión
                      </p>
                      <p className="text-xs text-foreground/70">
                        Reduce barrera de entrada. Útil para quien está
                        empezando. Ej: Primera sesión $1,200 (luego $2,000).
                      </p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded">
                      <p className="font-semibold text-sm mb-1">
                        Opción C: Sesión evaluativa más corta
                      </p>
                      <p className="text-xs text-foreground/70">
                        30 minutos a precio reducido para evaluar encuadre mutuo
                        antes de comprometerse.
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Estrategia 4 */}
              <Card className="bg-content2">
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    4. Terapia de Pareja: Pricing Especial
                  </h3>
                  <p className="text-sm text-foreground/80 mb-3">
                    La terapia de pareja justifica honorarios más altos:
                  </p>
                  <ul className="text-sm space-y-2 text-foreground/80">
                    <li>• Implica trabajar con dos personas simultáneamente</li>
                    <li>• Mayor complejidad y desgaste emocional</li>
                    <li>• Sesiones generalmente más largas (60-75 min)</li>
                    <li>
                      • <strong>Rango típico:</strong> 130-150% del precio
                      individual
                    </li>
                    <li>
                      • Ejemplo: Si cobras $2,000 individual → $2,600-$3,000
                      para parejas
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </div>

            <Card className="mt-6 bg-warning/10 border-l-4 border-warning">
              <CardBody className="p-6">
                <div className="flex items-start gap-3">
                  <FaExclamationTriangle className="text-warning text-xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">
                      Precaución con los descuentos excesivos:
                    </h4>
                    <p className="text-sm text-foreground/90">
                      Cobrar muy por debajo del mercado puede:
                    </p>
                    <ul className="text-sm text-foreground/80 mt-2 space-y-1">
                      <li>
                        • Atraer pacientes que no valoran el proceso terapéutico
                      </li>
                      <li>• Generar mayor ausentismo y cancelaciones</li>
                      <li>
                        • Crear resentimiento profesional (trabajar mucho, ganar
                        poco)
                      </li>
                      <li>
                        • Dificultar aumentos futuros (pacientes acostumbrados a
                        precio bajo)
                      </li>
                      <li>• Precarizar la profesión en general</li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* Cómo Comunicar y Aumentar tus Tarifas */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Cómo Comunicar tus Tarifas (Sin Culpa ni Disculpas)
            </h2>

            <Card className="bg-content2 mb-6">
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Al Inicio del Tratamiento:
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-sm mb-2 text-green-600">
                      ✓ Comunicación clara y profesional:
                    </p>
                    <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded text-sm italic">
                      &quot;Mis sesiones tienen un valor de $2,000. Trabajamos
                      en encuentros de 50 minutos, con frecuencia semanal. El
                      pago se realiza al finalizar cada sesión. ¿Te parece bien
                      este encuadre?&quot;
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-sm mb-2 text-red-600">
                      ✗ Evitar:
                    </p>
                    <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded text-sm italic text-foreground/70">
                      &quot;Cobro $2,000, pero si te parece mucho podemos
                      arreglar...&quot; ← Desvaloriza tu trabajo y abre
                      negociación infinita.
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-content2 mb-6">
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Cómo Aumentar tus Tarifas (Pacientes Actuales):
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-sm mb-2">
                      1. Comunica con anticipación (30-60 días)
                    </p>
                    <p className="text-sm text-foreground/80">
                      Avisa personalmente al final de una sesión, luego envía
                      confirmación por escrito.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-sm mb-2">
                      2. Sé claro y sin justificaciones excesivas
                    </p>
                    <div className="bg-primary/5 p-3 rounded text-sm italic">
                      &quot;A partir de [fecha], mis honorarios serán de $2,200.
                      Este ajuste responde a mi formación continua y la
                      actualización de costos operativos. Valoro nuestro trabajo
                      juntos y espero que podamos continuar.&quot;
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-sm mb-2">
                      3. Aumentos recomendados:
                    </p>
                    <ul className="text-sm space-y-1 text-foreground/80">
                      <li>• Cada 12-18 meses como mínimo</li>
                      <li>
                        • Incremento del 10-15% (ajuste inflación + valor)
                      </li>
                      <li>
                        • Mayor incremento (20-30%) si añades especialización
                        significativa
                      </li>
                    </ul>
                  </div>

                  <div className="bg-warning/10 p-3 rounded">
                    <p className="text-sm text-foreground/90">
                      <strong>Importante:</strong> No mantengas la misma tarifa
                      por años &quot;por lealtad&quot; a pacientes antiguos.
                      Esto genera resentimiento profesional y no es sostenible.
                      Si alguien realmente no puede pagar, evalúa caso por caso,
                      pero como excepción, no como regla.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* Errores Comunes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              5 Errores Comunes al Fijar Tarifas (y Cómo Evitarlos)
            </h2>

            <div className="space-y-4">
              <Card className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
                <CardBody className="p-5">
                  <h3 className="font-semibold text-red-700 dark:text-red-400 mb-2">
                    ❌ Error #1: Copiar la tarifa de otro colega sin análisis
                  </h3>
                  <p className="text-sm text-foreground/80">
                    Cada profesional tiene costos, experiencia y público
                    diferente. Lo que funciona para otro puede no funcionar para
                    ti.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
                <CardBody className="p-5">
                  <h3 className="font-semibold text-red-700 dark:text-red-400 mb-2">
                    ❌ Error #2: Empezar muy barato pensando &quot;después
                    subo&quot;
                  </h3>
                  <p className="text-sm text-foreground/80">
                    Es mucho más difícil duplicar una tarifa de $1,000 a $2,000
                    que empezar directamente en $1,500 y ajustar gradualmente.
                    Además, atraes pacientes acostumbrados a precios bajos.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
                <CardBody className="p-5">
                  <h3 className="font-semibold text-red-700 dark:text-red-400 mb-2">
                    ❌ Error #3: No considerar todos tus costos reales
                  </h3>
                  <p className="text-sm text-foreground/80">
                    Olvidar incluir: impuestos, supervisión, formación continua,
                    marketing, tiempo administrativo no facturado. Resultado:
                    trabajar mucho y ganar poco.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
                <CardBody className="p-5">
                  <h3 className="font-semibold text-red-700 dark:text-red-400 mb-2">
                    ❌ Error #4: Dar descuentos a todo el que lo pide
                  </h3>
                  <p className="text-sm text-foreground/80">
                    Si tu respuesta automática a &quot;¿Hacés descuento?&quot;
                    es &quot;sí&quot;, tu tarifa nominal pierde sentido.
                    Establece criterios claros para tarifas diferenciadas.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
                <CardBody className="p-5">
                  <h3 className="font-semibold text-red-700 dark:text-red-400 mb-2">
                    ❌ Error #5: No aumentar nunca por &quot;vergüenza&quot;
                  </h3>
                  <p className="text-sm text-foreground/80">
                    Llevar 5 años cobrando lo mismo genera resentimiento,
                    insostenibilidad financiera y desvalorización profesional.
                    Los aumentos periódicos son normales y esperados.
                  </p>
                </CardBody>
              </Card>
            </div>
          </section>

          {/* Conclusión y CTA */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Conclusión: Tu Valor es Real
              </h2>
              <p className="text-foreground/90 mb-4 leading-relaxed">
                Fijar tus honorarios es tanto una decisión técnica (costos,
                mercado, experiencia) como emocional (valorar tu trabajo,
                superar culpas, establecer límites).
              </p>
              <p className="text-foreground/90 mb-6 leading-relaxed">
                La tarifa correcta es aquella que:{" "}
                <strong>
                  (1) Cubre tus costos y te deja ganancia razonable, (2) Es
                  competitiva en tu nicho y etapa profesional, (3) Te permite
                  sostener tu práctica a largo plazo sin resentimiento, (4) Es
                  comunicable sin culpa ni disculpas
                </strong>
                .
              </p>

              <div className="bg-white dark:bg-content1 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Checklist Final: ¿Tu Tarifa es Adecuada?
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Cubre todos mis costos fijos + imprevistos</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Me deja ganancia neta equivalente a un salario digno
                    </span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Está dentro del rango de mercado para mi experiencia
                    </span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Puedo comunicarla con confianza, sin disculpas</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Es sostenible a largo plazo (no genera resentimiento)
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-secondary-500 text-white rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-3">
                  Reduce tus Costos Fijos, Aumenta tu Rentabilidad
                </h3>
                <p className="mb-4">
                  Una forma inteligente de mejorar tus márgenes es optimizar tus
                  costos operativos. El alquiler por hora en Espacio PISAMA
                  puede reducir tus costos fijos hasta en 60%, permitiéndote
                  tarifas más competitivas o mayor ganancia neta.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    as={Link}
                    href="/blog/consultorio-propio-vs-alquiler-por-hora"
                    color="default"
                    size="lg"
                    className="bg-white text-secondary-500 font-semibold"
                  >
                    Comparar Opciones de Consultorio
                  </Button>
                  <Button
                    as={Link}
                    href="/precios"
                    variant="bordered"
                    size="lg"
                    className="border-white text-white font-semibold"
                  >
                    Ver Nuestras Tarifas
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
              <Link
                href="/blog/consultorio-propio-vs-alquiler-por-hora"
                className="block group"
              >
                <Card className="hover:shadow-lg transition-all">
                  <CardBody className="p-6">
                    <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                      Consultorio Propio vs. Alquiler por Hora
                    </h3>
                    <p className="text-sm text-foreground/70">
                      Comparativa completa de costos y beneficios para tomar la
                      mejor decisión.
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
                • Coordinadora de Psicólogos del Uruguay (CPU) - Arancel 2025
              </li>
              <li>• Andainas - Cómo establecer las tarifas en psicología</li>
              <li>
                • Marketing Libélula -{" "}
                <a
                  href="https://marketinglibelula.com/cobrar-por-tus-sesiones-de-terapia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-500 hover:underline"
                >
                  Por qué te cuesta cobrar por tus sesiones
                </a>
              </li>
              <li>
                • Estrategia de precios por valor percibido -{" "}
                <a
                  href="https://www.gestiopolis.com/estrategia-de-precios-por-valor-percibido/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-500 hover:underline"
                >
                  Gestiopolis
                </a>
              </li>
              <li>• Análisis de tarifas de psicólogos en Uruguay 2025</li>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}
