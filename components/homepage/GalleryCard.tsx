"use client";

import { Card, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import Link from "next/link";

const espacios = [
  {
    id: "consultorio-1",
    title: "Consultorio 1",
    img: "/images/consultorio1-2.webp",
  },
  {
    id: "consultorio-2",
    title: "Consultorio 2",
    img: "/images/consultorio2-1.webp",
  },
  {
    id: "consultorio-3",
    title: "Consultorio 3",
    img: "/images/consultorio3-1.webp",
  },
  {
    id: "consultorio-4",
    title: "Consultorio 4",
    img: "/images/consultorio4-1.webp",
  },
  {
    id: "consultorio-5",
    title: "Consultorio 5",
    img: "/images/consultorio5-1.webp",
  },
  {
    id: "consultorio-6",
    title: "Consultorio 6",
    img: "/images/consultorio6-1.webp",
  },
  {
    id: "sala-espera",
    title: "Sala de Espera",
    img: "/images/salaespera-1.webp",
  },
  { id: "fachada", title: "Fachada", img: "/images/fachada-1.1.webp" },
  {
    id: "sala-descanso",
    title: "Sala de Descanso",
    img: "/images/saladescanso-1.webp",
  },
];

export default function GalleryCard() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-5xl text-center mb-16">
        <h2 className="text-4xl font-bold text-primary max-w-2xl mx-auto">
          Un <span className="text-secondary">Ambiente</span> que Inspira
          Confianza y Bienestar.
        </h2>
        <p className="my-8 font-sans text-lg text-marron-cafe">
          Cada uno de nuestros espacios fue cuidadosamente diseñado para
          encontrar el equilibrio perfecto entre profesionalismo y calidez.
          Creemos que el entorno es una herramienta fundamental en tu trabajo.
          Aquí tienes un adelanto. Haz clic en cualquiera de ellos para explorar
          la galería completa.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {espacios.map((espacio) => (
            <Link key={espacio.id} href={`/consultorios`}>
              <Card
                isFooterBlurred
                isPressable
                className="h-[300px] w-[96%] mx-auto"
              >
                <Image
                  alt={espacio.title}
                  className="z-0 h-full w-full object-cover"
                  removeWrapper
                  radius="lg"
                  shadow="sm"
                  src={espacio.img}
                  width="100%"
                  isZoomed
                />
                <CardFooter className="absolute bottom-0 z-10 justify-center  border-t-1 border-zinc-100/50 bg-black/30">
                  <h4 className="font-display text-lg font-bold text-white ">
                    {espacio.title}
                  </h4>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
