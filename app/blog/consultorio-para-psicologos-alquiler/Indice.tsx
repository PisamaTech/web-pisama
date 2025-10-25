"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import Link from "next/link";
import React from "react";
import { FaIndent } from "react-icons/fa6";

const sections = [
  {
    title: "El Consultorio como Encuadre",
    id: "encuadre",
  },
  {
    title: "Los 3 Pilares de Espacio PISAMA",
    id: "pilares",
    subsections: [
      { title: "1. Ambiente Profesional", id: "ambiente-profesional" },
      { title: "2. Privacidad Acústica", id: "privacidad-acustica" },
      { title: "3. Funcionalidad", id: "funcionalidad" },
    ],
  },
  {
    title: "La Logística que Resolvimos",
    id: "logistica",
    subsections: [
      { title: "Sistema de Reservas Online", id: "sistema-reservas" },
      { title: "Ubicación Estratégica", id: "ubicacion" },
      { title: "Comunidad de Colegas Respetuosos", id: "comunidad-colegas" },
    ],
  },
  {
    title: "Eliminamos las Banderas Rojas",
    id: "banderas-rojas",
  },
  {
    title: "Conclusión: Volvé a lo Esencial",
    id: "conclusion",
  },
  {
    title: "Preguntas Frecuentes",
    id: "preguntas-frecuentes",
  },
];

const Indice = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Card className="bg-content1/50 mx-auto max-w-[450px] text-base">
      <CardHeader className="flex-col">
        <div className="flex flex-row gap-4 text-primary-500 mt-4 items-center">
          <FaIndent size={20} />
          <h2 className="font-bold mt-0 mb-0" id="indice">
            Contenido del Artículo
          </h2>
        </div>
        <Divider className="mb-1 mt-5" />
      </CardHeader>
      <CardBody>
        <ul className="list-none pl-0 mt-0 ml-2">
          {sections.map((section) => (
            <li key={section.id} className="mb-2">
              <Link
                href={`#${section.id}`}
                onClick={(e) => handleScroll(e, section.id)}
                className="text-secondary-500 hover:text-secondary-400 font-semibold text-lg"
              >
                {section.title}
              </Link>
              {section.subsections && (
                <ul className="list-none pl-4 mt-2">
                  {section.subsections.map((subsection) => (
                    <li key={subsection.id} className="mb-1">
                      <Link
                        href={`#${subsection.id}`}
                        onClick={(e) => handleScroll(e, subsection.id)}
                        className="text-foreground/80 hover:text-foreground font-medium"
                      >
                        {subsection.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
};

export default Indice;
