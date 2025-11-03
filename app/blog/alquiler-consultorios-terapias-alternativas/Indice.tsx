"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import Link from "next/link";
import React from "react";
import { FaIndent } from "react-icons/fa6";

const sections = [
  {
    title: "Introducción: una extensión de tu energía",
    id: "introduccion",
  },
  {
    title: "¿Por qué elegir bien el espacio terapéutico?",
    id: "porque-elegir-bien-espacio",
  },
  {
    title: "1. Ubicación estratégica: Parque Rodó",
    id: "ubicacion",
  },
  {
    title: "2. Energía y ambiente",
    id: "energia-ambiente",
  },
  {
    title: "3. Flexibilidad horaria",
    id: "flexibilidad-horaria",
  },
  {
    title: "4. Reservas online y equipamiento",
    id: "reservas-equipamiento",
  },
  {
    title: "5. Precios justos y descuentos progresivos",
    id: "precios-descuentos",
  },
  {
    title: "6. Comunidad y acompañamiento",
    id: "comunidad",
  },
  {
    title: "7. Diseño profesional",
    id: "diseno-profesional",
  },
  {
    title: "8. ¿Qué sienten los terapeutas?",
    id: "que-sienten-terapeutas",
  },
  {
    title: "Conclusión: un espacio que vibra contigo",
    id: "conclusion",
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
    <Card className="bg-content1/50 mx-auto my-10 max-w-[450px] text-sm">
      <CardHeader className="flex-col">
        <div className="flex flex-row gap-4 text-primary-500 mt-4 items-center">
          <FaIndent size={20} />
          <h2 className="font-bold mt-0 mb-0" id="indice">
            Indice de Contenido
          </h2>
        </div>
        <Divider className="mb-1 mt-5" />
      </CardHeader>
      <CardBody>
        <ul className="list-none pl-0 mt-0 ml-2 space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                href={`#${section.id}`}
                onClick={(e) => handleScroll(e, section.id)}
                className="text-secondary-500 hover:text-secondary-400 font-semibold text-base"
              >
                {section.title}
              </Link>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
};

export default Indice;
