"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Listbox, ListboxItem } from "@heroui/listbox";
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
  const handleAction = (key: React.Key) => {
    const id = key.toString();
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const items = sections.flatMap((section) => {
    const sectionItem = {
      id: section.id,
      title: section.title,
      isSubsection: false,
    };

    if (section.subsections && section.subsections.length > 0) {
      const subsectionItems = section.subsections.map((subsection) => ({
        id: subsection.id,
        title: subsection.title,
        isSubsection: true,
      }));

      return [sectionItem, ...subsectionItems];
    }

    return sectionItem;
  });

  return (
    <Card className="not-prose bg-content1/50 mx-auto my-10 max-w-[450px] text-sm">
      <CardHeader className="flex-col">
        <div className="flex flex-row gap-4 text-primary-500 mt-4 items-center">
          <FaIndent size={20} />
          <h2 className="font-bold text-base" id="indice">
            Indice de Contenido
          </h2>
        </div>
        <Divider className="mb-1 mt-5" />
      </CardHeader>
      <CardBody>
        <Listbox
          aria-label="Índice de contenido"
          onAction={handleAction}
          variant="shadow"
          className="p-0"
          items={items}
        >
          {(item) => (
            <ListboxItem
              key={item.id}
              className={
                item.isSubsection
                  ? "text-foreground/80 data-[hover=true]:text-slate-50 pl-8 data-[hover=true]:bg-default/80"
                  : "text-secondary-500 data-[hover=true]:text-secondary-50 data-[hover=true]:bg-default/80"
              }
            >
              {item.title}
            </ListboxItem>
          )}
        </Listbox>
      </CardBody>
    </Card>
  );
};

export default Indice;
