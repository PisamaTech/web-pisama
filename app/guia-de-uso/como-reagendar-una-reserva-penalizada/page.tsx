import type { Metadata } from "next";
import type { JSX } from "react";

import GuiaReagendamientoClient from "./GuiaReagendamientoClient";

// --- SEO: Metadatos de la Página ---
export const metadata: Metadata = {
  title: "Guía con Leo: Cómo Reagendar una Reserva Penalizada | Espacio Pisama",
  description:
    "Leo, tu asistente virtual, te guía paso a paso para recuperar una hora cancelada con menos de 24h de antelación en la plataforma de Espacio Pisama.",
};

// --- PÁGINA PRINCIPAL QUE ENSAMBLA TODO ---
export default function GuiaReagendamientoPageConLeo(): JSX.Element {
  return <GuiaReagendamientoClient />;
}
