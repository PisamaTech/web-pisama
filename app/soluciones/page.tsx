import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Metadata } from "next";
import Link from "next/link";
import {
  FaBrain,
  FaBullseye,
  FaAppleAlt,
  FaSpa,
  FaUserMd,
} from "react-icons/fa";
import { TbPhysotherapist, TbMassage } from "react-icons/tb";

import { subtitle } from "@/components/primitives";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title:
    "Consultorios por Profesión | Encuentra tu Espacio Ideal | Espacio PISAMA",
  description:
    "Descubre cómo Espacio PISAMA se adapta a las necesidades específicas de tu profesión. Consultorios para psicólogos, coaches, nutricionistas, fisioterapeutas, masajistas con camilla y más en Montevideo.",
  keywords: [
    "consultorios para psicólogos montevideo",
    "consultorios para coaches montevideo",
    "consultorios para fisioterapeutas montevideo",
    "consultorios para masajistas montevideo",
    "consultorios con camilla montevideo",
    "consultorios para terapeutas alternativos",
    "alquiler consultorios por profesión",
    "espacios terapéuticos montevideo",
    "consultorios por hora montevideo",
  ],
  alternates: {
    canonical: "/soluciones",
  },
};

const profesiones = [
  {
    slug: "psicologos",
    icon: FaBrain,
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
    slug: "coaches",
    icon: FaBullseye,
    title: "Coaches",
    description:
      "Espacio profesional para coaching ontológico, ejecutivo y personal. Privacidad acústica garantizada y ambiente que facilita la transformación.",
    highlights: [
      "Confidencialidad absoluta",
      "Ambiente diseñado para reflexión profunda",
      "Flexibilidad total de horarios",
    ],
  },
  {
    slug: "nutricionistas",
    icon: FaAppleAlt,
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
    icon: FaSpa,
    title: "Terapeutas Alternativos",
    description:
      "Espacios con excelente energía, camilla disponible y flexibilidad total. El entorno que vibra con tu práctica holística.",
    highlights: [
      "Camilla disponible",
      "Ambiente cálido y armónico",
      "Horarios 7:00 a 23:00",
    ],
  },
  {
    slug: "fisioterapeutas",
    icon: TbPhysotherapist,
    title: "Fisioterapeutas",
    description:
      "Consultorios Premium amplios con ergonomía garantizada. Camilla profesional incluida, almacenamiento seguro para tu equipo y espacio para moverte 360° alrededor del paciente.",
    highlights: [
      "Consultorios Premium amplios",
      "Camilla profesional bonificada",
      "Almacenamiento seguro para tu equipo",
    ],
  },
  {
    slug: "masajistas",
    icon: TbMassage,
    title: "Masajistas",
    description:
      "Consultorio para masajistas con camilla profesional incluida y espacios Premium amplios. Sistema de reserva online que garantiza tu camilla. Ideal para masajes terapéuticos, deportivos y relajantes.",
    highlights: [
      "Camilla profesional incluida gratis",
      "Espacios amplios para masajes",
      "Sistema anti-conflictos en tiempo real",
    ],
  },
  {
    slug: "psiquiatras",
    icon: FaUserMd,
    title: "Psiquiatras",
    description:
      "Privacidad acústica absoluta y entorno seguro para tu práctica médica. Consultorios habilitados y ambiente profesional.",
    highlights: [
      "Aislación acústica certificada",
      "Entorno seguro y controlado",
      "Imagen médica profesional",
    ],
  },
];

export default function SolucionesPage() {
  const breadcrumbItems = [
    {
      name: "Inicio",
      url: siteConfig.url,
    },
    {
      name: "Soluciones",
      url: `${siteConfig.url}/soluciones`,
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
      <section className="py-20">
        <div className="container max-w-5xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-primary text-4xl font-bold">
              Encuentra el Consultorio Perfecto
              <br />
              <span className="text-secondary text-6xl font-bold">
                para tu Profesión
              </span>
            </h1>
            <p className={subtitle({ class: "mt-10 text-foreground/80" })}>
              En Espacio PISAMA entendemos que cada profesión tiene necesidades
              únicas. Descubre cómo nuestros consultorios se adaptan a tu
              práctica terapéutica en Parque Rodó, Montevideo.
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
                <Card className="p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-1.5 border-transparent hover:border-secondary-300 h-full">
                  <div className="flex flex-col h-full items-center">
                    {/* Icon */}
                    <div className="mb-2 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                      <profesion.icon className="text-4xl text-secondary/80" />
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl font-bold text-primary mb-4 group-hover:text-primary/70 transition-colors text-center">
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
                    <Button
                      variant="ghost"
                      color="secondary"
                      className="font-semibold"
                    >
                      Conocer más →
                    </Button>
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
    </>
  );
}
