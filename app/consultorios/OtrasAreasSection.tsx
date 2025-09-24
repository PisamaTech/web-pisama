"use client";

import { Card, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import Image from "next/image";
import { useState } from "react";
import { FaCheckCircle, FaPlayCircle } from "react-icons/fa";

import GalleryModal from "@/components/consultorios/GalleryModal";
import { otrasAreas, OtraArea } from "@/src/otrasAreas";

export default function OtrasAreasSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState<OtraArea["media"]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (media: OtraArea["media"], index: number) => {
    setCurrentMedia(media);
    setCurrentIndex(index);
    setModalOpen(true);
  };

  return (
    <>
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="mb-16 text-center font-display text-4xl font-bold text-marron-cafe">
          Áreas Comunes a tu Disposición
        </h2>
        <div className="mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:max-w-5xl lg:grid-cols-2">
          {otrasAreas.map((area) => (
            <Card
              key={area.nombre}
              className="bg-background shadow-lg rounded-xl overflow-hidden hover:scale-[1.03] transition-transform"
            >
              <CardBody className="p-0">
                <button
                  type="button"
                  className="relative w-full h-70 cursor-pointer"
                  onClick={() => openModal(area.media, 0)}
                >
                  <Image
                    src={area.media[0].src}
                    alt={`Imagen principal de ${area.nombre}`}
                    className="object-cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </button>
                <div className="grid grid-cols-3 gap-2 p-2">
                  {area.media.slice(1, 3).map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className="relative w-full h-20 cursor-pointer rounded overflow-hidden"
                      onClick={() => openModal(area.media, idx + 1)}
                    >
                      <Image
                        src={item.src}
                        alt={`Imagen extra de ${area.nombre} ${idx + 1}`}
                        className="object-cover"
                        fill
                        sizes="(max-width: 1024px) 33vw, 17vw"
                      />
                    </button>
                  ))}
                  <button
                    type="button"
                    className="relative w-full h-20 bg-black text-white flex items-center justify-center cursor-pointer rounded"
                    onClick={() =>
                      openModal(
                        area.media,
                        area.media.findIndex((item) => item.type === "video")
                      )
                    }
                  >
                    <FaPlayCircle className="h-6 w-6 text-white/80" />
                  </button>
                </div>
              </CardBody>
              <CardFooter className="flex flex-col items-start gap-3">
                <Divider />
                <h3 className="text-xl text-primary font-bold">
                  {area.nombre}
                </h3>
                <p className="text-default">{area.descripcion}</p>
                <ul className="text-sm text-default space-y-2 mb-3">
                  {area.caracteristicas.map((c, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <FaCheckCircle className="text-secondary" /> {c}
                    </li>
                  ))}
                </ul>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <GalleryModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        media={currentMedia}
        startIndex={currentIndex}
      />
    </>
  );
}
