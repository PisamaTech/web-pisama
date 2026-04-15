"use client";

import Image from "next/image";
import React from "react";
import {
  FaBell,
  FaPaperPlane,
  FaSearch,
  FaUserCircle,
  FaUnlock,
} from "react-icons/fa";
import { Gallery, Item } from "react-photoswipe-gallery";

// Imports estáticos — Next.js resuelve las dimensiones reales automáticamente
// TODO: Reemplazar cada imagen con el screenshot real del paso correspondiente
import imgPaso5 from "@/public/images/app/app_configuracion_cuenta.webp";
import imgPaso2 from "@/public/images/app/app_inicio.webp";
import imgPaso4 from "@/public/images/app/app_inicio.webp";
import imgPaso3 from "@/public/images/app/app_reservas.webp";
import imgPaso1 from "@/public/images/red-de-colegas/Red-de-Colegas-Perfil.webp";

const steps = [
  {
    number: 1,
    icon: <FaUserCircle size={28} className="text-secondary" />,
    title: "Completá tu perfil profesional",
    description:
      "Ingresá a la sección Mi Perfil dentro de la Red de Colegas y completá tu información: profesión, especialidades, descripción, idiomas y disponibilidad. Cuanto más completo esté tu perfil, más chances tenés de que otros colegas te encuentren y se contacten con vos.",
    detail:
      "También podés elegir si querés aparecer en la red, si aceptás solicitudes de contacto, y si querés compartir tu email o teléfono con quienes aceptes.",
    image: imgPaso1,
    imageAlt: "Sección Mi Perfil en la Red de Colegas de Pisama",
  },
  {
    number: 2,
    icon: <FaSearch size={28} className="text-secondary" />,
    title: "Buscá colegas",
    description:
      "En la pestaña Buscar Colegas podés explorar los perfiles disponibles. Filtrá por profesión, especialidad, disponibilidad o población que atienden para encontrar exactamente lo que buscás.",
    detail: null,
    image: imgPaso2,
    imageAlt: "Pantalla de búsqueda de colegas en la plataforma Pisama",
  },
  {
    number: 3,
    icon: <FaPaperPlane size={28} className="text-secondary" />,
    title: "Enviá una solicitud de contacto",
    description:
      'Cuando encontrés a alguien que te interese, hacé clic en Contactar. Se abre un formulario donde podés indicar el asunto (por ejemplo: "Solicitud de derivación" o "Proyecto en conjunto") y un mensaje explicando el motivo del contacto.',
    detail: null,
    image: imgPaso3,
    imageAlt: "Formulario de solicitud de contacto en la Red de Colegas",
  },
  {
    number: 4,
    icon: <FaBell size={28} className="text-secondary" />,
    title: "El colega recibe tu solicitud",
    description:
      "La otra persona recibe una notificación dentro de la plataforma y puede ver tu perfil y tu mensaje. Tiene la opción de aceptar o rechazar la solicitud.",
    detail: null,
    image: imgPaso4,
    imageAlt: "Notificación de solicitud de contacto recibida en Pisama",
  },
  {
    number: 5,
    icon: <FaUnlock size={28} className="text-secondary" />,
    title: "Si acepta, se revelan los datos de contacto",
    description:
      "Una vez aceptada la solicitud, ambos pueden ver los datos de contacto que cada uno eligió compartir (email y/o teléfono). A partir de ahí, la comunicación continúa por fuera de la plataforma como más les resulte cómodo.",
    detail: null,
    image: imgPaso5,
    imageAlt: "Datos de contacto revelados tras aceptar solicitud en Pisama",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-content1 py-20">
      <div className="container mx-auto max-w-5xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold text-marron-cafe">
            ¿Cómo funciona paso a paso?
          </h2>
        </div>

        <Gallery>
          <div className="flex flex-col gap-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`rounded-2xl mb-6 overflow-hidden border border-content4 shadow-sm ${isEven ? "bg-content2" : "bg-content1"}`}
                >
                  <div className="grid grid-cols-1 items-center gap-0 md:grid-cols-2">
                    {/* Columna imagen */}
                    <div
                      className={`relative flex items-center justify-center bg-content3/50 p-8 min-h-[320px] ${!isEven ? "md:order-2" : "md:order-1"}`}
                    >
                      <Item
                        original={step.image.src}
                        width={step.image.width}
                        height={step.image.height}
                      >
                        {({ ref, open }) => (
                          <Image
                            ref={
                              ref as unknown as React.MutableRefObject<HTMLImageElement>
                            }
                            onClick={open}
                            src={step.image}
                            alt={step.imageAlt}
                            className="mx-auto max-h-72 w-auto rounded-2xl shadow-xl object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
                          />
                        )}
                      </Item>
                    </div>

                    {/* Columna texto */}
                    <div
                      className={`p-8 lg:p-12 ${!isEven ? "md:order-1" : "md:order-2"}`}
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20 font-display text-xl font-bold text-secondary">
                          {step.number}
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-content3">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-primary">
                        {step.title}
                      </h3>
                      <p className="mt-4 font-sans text-base text-foreground/80 leading-relaxed">
                        {step.description}
                      </p>
                      {step.detail && (
                        <p className="mt-3 font-sans text-sm text-foreground/70 leading-relaxed border-l-4 border-secondary/40 pl-4 italic">
                          {step.detail}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Gallery>
      </div>
    </section>
  );
}
