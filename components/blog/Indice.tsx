"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import Link from "next/link";
import React from "react";
import { FaIndent } from "react-icons/fa6";

interface Section {
  title: string;
  id: string;
  subsections?: Section[];
}

interface IndiceProps {
  sections: Section[];
}

const Indice: React.FC<IndiceProps> = ({ sections }) => {
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
              {section.subsections && (
                <ul className="list-none pl-4 mt-2 space-y-1">
                  {section.subsections.map((subsection) => (
                    <li key={subsection.id}>
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
