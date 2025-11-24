// src/app/guia-de-uso/facturacion-y-descuentos/page.tsx
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import { FaLightbulb } from "react-icons/fa";

import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/config/site";

// --- SEO: Metadatos de la Página ---
export const metadata: Metadata = {
  title: "Guía: Facturación y Descuentos Automáticos | Espacio Pisama",
  description:
    "Leo te explica cómo funciona nuestro sistema de facturación transparente y cómo se aplican los descuentos por volumen para que ahorres más.",
};

export default function GuiaFacturacionPage(): JSX.Element {
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
      name: "Facturación y Descuentos",
      url: `${siteConfig.url}/guia-de-uso/facturacion-y-descuentos`,
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
      <main className="bg-background">
        {/* --- SECCIÓN 1: BIENVENIDA DE LEO --- */}
        <section className="py-20">
          <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-4 lg:px-8">
            <div className="flex justify-center md:col-span-1">
              <Image
                src="/images/leo/leo-relajado.webp" // Reemplaza con una imagen de Leo
                alt="Leo, el asistente virtual de Espacio Pisama"
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>
            <div className="text-center md:col-span-3 md:text-left">
              <h1 className="font-display text-5xl font-bold text-primary-500">
                Tu Facturación, Simple y Transparente.
              </h1>
              <p className="mt-4 font-sans text-lg text-foreground/80">
                ¡Hola, soy Leo! Hoy vamos a desmitificar la facturación. Mi
                objetivo es que entiendas perfectamente cómo funciona nuestro
                sistema y, lo más importante, cómo te ayuda a ahorrar de forma
                automática. ¡Vamos a verlo!
              </p>
            </div>
          </div>
        </section>

        <Divider />

        <article
          className="prose prose-lg mx-auto max-w-4xl px-4 py-20 
                           prose-headings:font-display prose-headings:text-primary-500 ..."
        >
          {/* --- SECCIÓN 2: EL CICLO DE FACTURACIÓN --- */}
          <h2>El Ciclo de Facturación: De la Reserva al Pago</h2>
          <p>
            Nuestro proceso es 100% automático y está diseñado para darte total
            claridad. Funciona en 3 simples pasos:
          </p>
          <div className="not-prose mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card className="bg-content2 text-center">
              <CardBody className="p-6">
                <span className="font-display text-4xl font-bold text-secondary-500">
                  1.
                </span>
                <p className="mt-2">
                  Utilizas tus horas reservadas durante la semana.
                </p>
              </CardBody>
            </Card>
            <Card className="bg-content2 text-center">
              <CardBody className="p-6">
                <span className="font-display text-4xl font-bold text-secondary-500">
                  2.
                </span>
                <p className="mt-2">
                  Nuestro sistema registra tu actividad y calcula tus
                  descuentos.
                </p>
              </CardBody>
            </Card>
            <Card className="bg-content2 text-center">
              <CardBody className="p-6">
                <span className="font-display text-4xl font-bold text-secondary-500">
                  3.
                </span>
                <p className="mt-2">
                  Recibes tu factura detallada al final del período (semanal o
                  mensual).
                </p>
              </CardBody>
            </Card>
          </div>

          {/* --- SECCIÓN 3: LA MAGIA DEL AHORRO AUTOMÁTICO --- */}
          <h2 className="mt-16">
            La Magia del Ahorro: ¿Cómo Funcionan los Descuentos?
          </h2>
          <p>
            Aquí está la mejor parte, y lo que nos diferencia de los paquetes
            fijos. Nuestro sistema inteligente analiza cuántas horas utilizaste
            en una semana (de lunes a domingo) y aplica un descuento a{" "}
            <strong>cada una de esas horas</strong>. No tienes que hacer nada.
          </p>
          <div className="not-prose my-8 overflow-hidden rounded-lg border border-gris-calido">
            <table className="w-full text-left">
              <thead className="bg-content2">
                <tr>
                  <th className="p-4 font-display font-bold">
                    Horas por Semana
                  </th>
                  <th className="p-4 font-display font-bold">
                    Descuento Aplicado por Hora
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gris-calido/50">
                <tr>
                  <td className="p-4">4 a 7 horas</td>
                  <td className="p-4 font-bold text-success-600">-$20</td>
                </tr>
                <tr>
                  <td className="p-4">8 a 11 horas</td>
                  <td className="p-4 font-bold text-success-600">-$40</td>
                </tr>
                <tr>
                  <td className="p-4">12 a 15 horas</td>
                  <td className="p-4 font-bold text-success-600">-$60</td>
                </tr>
                <tr className="bg-success-50/50">
                  <td className="p-4">16 a 19 horas</td>
                  <td className="p-4 font-bold text-success-700">-$80</td>
                </tr>
                <tr className="bg-success-50/50">
                  <td className="p-4">20+ horas</td>
                  <td className="p-4 font-bold text-success-700">
                    -$100 (¡Ahorro Máximo!)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* --- SECCIÓN 4: TU CENTRO FINANCIERO --- */}
          <h2 className="mt-16">Tu Centro Financiero en la App</h2>
          <div className="not-prose grid grid-cols-1 items-center gap-8 ">
            <div>
              <p>
                Dentro de la aplicación, la sección{" "}
                <strong>&quot;Facturación&quot;</strong> es tu panel de control
                financiero. Allí puedes:
              </p>
              <ul className="mt-4 list-inside list-disc">
                <li>
                  Ver un resumen en tiempo real de tu{" "}
                  <strong>&quot;Facturación en Curso&quot;</strong>.
                </li>
                <li>
                  Consultar el <strong>historial completo</strong> de todas tus
                  facturas pasadas.
                </li>
              </ul>
            </div>
            <Image
              src="/images/app/app_facturacion.webp" // Reemplaza con tu captura de pantalla
              alt="Vista de la sección de facturación en la aplicación de Espacio Pisama"
              width={500}
              height={400}
              className="rounded-2xl mx-auto border-2 border-default/30 shadow-2xl"
            />
          </div>

          {/* --- EL CONSEJO DE LEO --- */}
          <div className="not-prose mt-16">
            <Card className="mx-auto max-w-3xl bg-content2 shadow-lg">
              <CardBody className="flex flex-col items-center gap-6 p-8 text-center md:flex-row md:text-left">
                <FaLightbulb className="h-16 w-16 flex-shrink-0 text-warning-500" />
                <div>
                  <h3 className="font-display text-2xl font-bold text-primary-500">
                    Un Consejo de mi Parte para Maximizar tu Ahorro
                  </h3>
                  <p className="mt-2 font-sans text-foreground/90">
                    Como el descuento se calcula por semana, si tienes la
                    flexibilidad, a veces es más conveniente concentrar más
                    horas en una semana para alcanzar un tramo de descuento
                    mayor, en lugar de repartirlas de forma muy dispersa entre
                    varias semanas. ¡Es una pequeña estrategia para que el
                    sistema trabaje aún más a tu favor!
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </article>
      </main>

      {/* --- CTA FINAL --- */}
      <section className="bg-content2 py-20 text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-primary-500">
            ¿Quieres ver tu estado de cuenta?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-foreground/80">
            Accede a tu perfil en la aplicación para ver tu facturación en curso
            y tu historial completo.
          </p>
          <div className="mt-8">
            <Button
              as={Link}
              href="https://reservas.pisama.uy/facturas" // Enlace a la sección de Billing de la app
              className="bg-primary-500 font-display font-semibold text-primary-foreground"
              size="lg"
            >
              Ir a &quot;Mi Facturación&quot;
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
