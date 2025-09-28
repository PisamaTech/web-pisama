import React from "react";

const LegendSection = () => (
  <section className="py-16 bg-content2">
    <div className="container max-w-4xl mx-auto px-4 ">
      <h2 className="mb-12 text-3xl font-bold font-display text-primary text-center">
        Entendiendo el Calendario: Tipos de Reserva
      </h2>
      <p className="mt-4 font-sans text-lg text-primary/90">
        Mientras navegas, verás que los espacios ocupados pueden ser de dos
        tipos. Esto te da una idea de la dinámica de funcionamiento de nuestra
        aplicación web:
      </p>
      <ul className="mt-4 space-y-4 pl-5 font-sans text-lg text-primary/90">
        <li>
          <div className="flex items-center space-x-2">
            <div
              className="h-6 w-6 rounded border-1 border-slate-400"
              style={{ backgroundColor: "#5b9bd5" }}
            />
            <strong>Reserva Fija</strong>
          </div>
          Son los horarios que se repiten todas las semanas, utilizados por
          nuestros profesionales.
        </li>
        <li>
          <div className="flex items-center space-x-2">
            <div
              className="h-6 w-6 rounded border-1 border-slate-400"
              style={{ backgroundColor: "#92d050" }}
            />
            <strong>Reserva Eventual</strong>
          </div>
          Son reservas de uso único en una fecha y hora específicas. Demuestran
          la flexibilidad del sistema, ideal para una consulta puntual o para
          nuevos profesionales que se suman a Espacio Pisama.
        </li>
      </ul>
      <p className="mt-4 font-sans text-lg text-primary/90">
        Tanto las reservas Fijas como las Eventuales se mostrarán como ocupadas.
        ¡Tu oportunidad está siempre en los espacios en blanco!
      </p>
    </div>
  </section>
);

export default LegendSection;
