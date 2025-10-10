import { Metadata } from "next";
import { JSX } from "react";

export const metadata: Metadata = {
  title: "Guía de Uso de la App de Reservas | Espacio Pisama",
  description:
    "Aprende a utilizar nuestra aplicación de reservas para gestionar tu agenda de forma eficiente.",
};

export default function GuiaDeUsoPage(): JSX.Element {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Guía de Uso de la App</h1>
        <p className="text-center text-lg">Próximamente...</p>
      </div>
    </section>
  );
}
