import type { Metadata } from "next";
import type { JSX } from "react";

import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/config/site";

import GuiaReagendamientoClient from "./GuiaReagendamientoClient";

// --- SEO: Metadatos de la Página ---
export const metadata: Metadata = {
  title: "Guía con Leo: Cómo Reagendar una Reserva Penalizada | Espacio Pisama",
  description:
    "Leo, tu asistente virtual, te guía paso a paso para recuperar una hora cancelada con menos de 24h de antelación en la plataforma de Espacio Pisama.",
};

// --- PÁGINA PRINCIPAL QUE ENSAMBLA TODO ---
export default function GuiaReagendamientoPageConLeo(): JSX.Element {
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
      name: "Cómo Reagendar una Reserva Penalizada",
      url: `${siteConfig.url}/guia-de-uso/como-reagendar-una-reserva-penalizada`,
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
      <GuiaReagendamientoClient />
    </>
  );
}
