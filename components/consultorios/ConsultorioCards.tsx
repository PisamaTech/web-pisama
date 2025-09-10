"use client";

import { useState } from "react";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { FaCheckCircle } from "react-icons/fa";
import GalleryModal from "./GalleryModal";
import { Espacio } from "@/src/consultoriosData";
import { Chip } from "@heroui/chip";

export default function ConsultorioCard({ espacio }: { espacio: Espacio }) {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const handleOpen = (index: number) => {
    setStartIndex(index);
    setOpen(true);
  };

  return (
    <>
      <Card className="shadow-lg rounded-xl overflow-hidden hover:scale-[1.03] transition-transform">
        <CardBody className="p-0">
          <img
            src={espacio.media[0].src}
            alt={espacio.nombre}
            className="w-full h-70  object-cover cursor-pointer"
            onClick={() => handleOpen(0)}
          />
          <div className="grid grid-cols-3 gap-2 p-2">
            {espacio.media.slice(1, 3).map((item, idx) => (
              <img
                key={idx}
                src={item.src}
                alt={`${espacio.nombre} extra`}
                className="w-full h-20 object-cover cursor-pointer rounded"
                onClick={() => handleOpen(idx + 1)}
              />
            ))}
            <div
              className="relative w-full h-20 bg-black text-white flex items-center justify-center cursor-pointer rounded"
              onClick={() => handleOpen(espacio.media.length - 1)}
            >
              🎥 Video
            </div>
          </div>
        </CardBody>
        <CardFooter className="flex flex-col items-start gap-3">
          <h3 className="text-lg font-bold">{espacio.nombre}</h3>
          <Chip
            color={espacio.tipo === "premium" ? "success" : "primary"}
            className="capitalize"
          >
            {espacio.tipo}
          </Chip>
          <p className="text-gray-600">{espacio.descripcion}</p>
          {espacio.precio && (
            <p className="text-primary font-semibold">{espacio.precio}</p>
          )}
          <ul className="text-sm space-y-1">
            {espacio.caracteristicas.map((c, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> {c}
              </li>
            ))}
          </ul>
        </CardFooter>
      </Card>

      <GalleryModal
        open={open}
        onClose={() => setOpen(false)}
        media={espacio.media}
        startIndex={startIndex}
      />
    </>
  );
}
