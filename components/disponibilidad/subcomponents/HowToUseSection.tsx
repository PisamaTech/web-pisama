import { Card, CardBody } from "@heroui/card";
import React from "react";
import { BsChevronExpand } from "react-icons/bs";
import { GrSelect } from "react-icons/gr";
import { MdOutlineContentPasteSearch } from "react-icons/md";

const HowToUseSection = () => (
  <section className="bg-content4 py-16  mx-auto">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="mb-12 text-center text-3xl font-bold text-primary">
        Cómo Usar el Calendario
      </h2>
      <div className="grid gap-8 text-center md:grid-cols-3">
        <Card
          key="1"
          className="flex h-full flex-col bg-content1 text-center shadow-lg transition-transform hover:scale-105"
        >
          <CardBody className="flex flex-grow flex-col items-center p-8">
            {/* Icono */}
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <GrSelect size={35} className=" text-secondary" />
            </div>
            {/* Título y Profesiones */}
            <h3 className="font-display text-2xl text-center font-bold text-primary">
              Selecciona una Vista
            </h3>
            {/* Descripción */}
            <p className="mt-4 flex-grow font-sans text-primary/90 text-center ">
              Selecciona &quot;Vista General Diaria&quot; para ver todos los
              consultorios en un día específico o elige un consultorio en
              particular para ver su disponibilidad semanal.
            </p>
          </CardBody>
        </Card>

        <Card
          key="2"
          className="flex h-full flex-col bg-content1 text-center shadow-lg transition-transform hover:scale-105"
        >
          <CardBody className="flex flex-grow flex-col items-center p-8">
            {/* Icono */}
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <BsChevronExpand size={42} className="rotate-90 text-secondary" />
            </div>
            {/* Título y Profesiones */}
            <h3 className="font-display text-2xl text-center font-bold text-primary">
              Navega en el Tiempo
            </h3>
            {/* Descripción */}
            <p className="mt-4 flex-grow font-sans text-primary/90 text-center ">
              Usa las flechas para avanzar o retroceder semanas o días. El
              calendario cargará automáticamente la disponibilidad.
            </p>
          </CardBody>
        </Card>

        <Card
          key="3"
          className="flex h-full flex-col bg-content1 text-center shadow-lg transition-transform hover:scale-105"
        >
          <CardBody className="flex flex-grow flex-col items-center p-8">
            {/* Icono */}
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <MdOutlineContentPasteSearch
                size={35}
                className="text-secondary"
              />
            </div>
            {/* Título y Profesiones */}
            <h3 className="font-display text-2xl text-center font-bold text-primary">
              Identifica los Horarios
            </h3>
            {/* Descripción */}
            <p className="mt-4 flex-grow font-sans text-center text-primary/90">
              Los bloques de color muestran las reservas existentes. Los
              espacios en blanco son horarios disponibles para que reserves.
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  </section>
);

export default HowToUseSection;
