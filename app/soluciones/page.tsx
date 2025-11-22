import { Card } from "@heroui/card";
import { Metadata } from "next";
import Link from "next/link";

import { subtitle, title } from "@/components/primitives";

export const metadata: Metadata = {
  title:
    "Consultorios por Profesión | Encuentra tu Espacio Ideal | Espacio PISAMA",
  description:
    "Descubre cómo Espacio PISAMA se adapta a las necesidades específicas de tu profesión. Consultorios para psicólogos, terapeutas alternativos, nutricionistas y más en Montevideo.",
  keywords: [
    "consultorios para psicólogos montevideo",
    "consultorios para terapeutas alternativos",
    "alquiler consultorios por profesión",
    "espacios terapéuticos montevideo",
    "consultorios por hora montevideo",
  ],
};

const profesiones = [
  {
    slug: "psicologos",
    emoji: "🧠",
    title: "Psicólogos",
    description:
      "Privacidad acústica absoluta, ambiente profesional y sistema de reservas online. El encuadre perfecto para tu práctica.",
    highlights: [
      "Aislación acústica profesional",
      "Ambiente diseñado por psicólogos",
      "Reservas en tiempo real",
    ],
  },
  {
    slug: "nutricionistas",
    emoji: "🥗",
    title: "Nutricionistas",
    description:
      "Consultorio completamente equipado, ambiente que inspira cambio y privacidad para temas sensibles. Alquiler flexible por hora sin compromiso mensual.",
    highlights: [
      "Espacio completamente equipado",
      "Ambiente motivador y profesional",
      "Privacidad total para temas sensibles",
    ],
  },
  {
    slug: "terapeutas-alternativos",
    emoji: "🌿",
    title: "Terapeutas Alternativos",
    description:
      "Espacios con excelente energía, camilla disponible y flexibilidad total. El entorno que vibra con tu práctica holística.",
    highlights: [
      "Camilla disponible",
      "Ambiente cálido y armónico",
      "Horarios 7:00 a 23:00",
    ],
  },
];

export default function SolucionesPage() {
  return (
    <section className="py-20">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className={title({ class: "text-primary" })}>
            Encuentra el Consultorio Perfecto
            <br />
            <span className={title({ class: "text-secondary", size: "lg" })}>
              para tu Profesión
            </span>
          </h1>
          <p className={subtitle({ class: "mt-6 text-foreground/80" })}>
            En Espacio PISAMA entendemos que cada profesión tiene necesidades
            únicas. Descubre cómo nuestros consultorios se adaptan a tu práctica
            terapéutica en Parque Rodó, Montevideo.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {profesiones.map((profesion) => (
            <Link
              key={profesion.slug}
              href={`/soluciones/${profesion.slug}`}
              className="block group"
            >
              <Card className="p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-2 border-transparent hover:border-secondary-300 h-full">
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="text-6xl mb-4">{profesion.emoji}</div>

                  {/* Title */}
                  <h2 className="text-3xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                    {profesion.title}
                  </h2>

                  {/* Description */}
                  <p className="text-foreground/80 mb-6 flex-grow">
                    {profesion.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {profesion.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-foreground/70"
                      >
                        <span className="text-secondary-500 mr-2">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="font-semibold text-secondary-500 group-hover:text-secondary-400 transition-colors">
                    Conocer más →
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-content1 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-4">
            ¿No encuentras tu profesión?
          </h2>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            Nuestros consultorios están diseñados para adaptarse a diversas
            prácticas terapéuticas. Contactanos para conocer cómo podemos
            ayudarte.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-secondary-500 hover:bg-secondary-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Contactar
          </Link>
        </div>
      </div>
    </section>
  );
}
