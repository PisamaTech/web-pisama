"use client";
import { useState } from "react";
import Image from "next/image";

import MediaModal from "./MediaModal";

import consultorios from "@/src/consultorios";

export default function ConsultoriosSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentItems, setCurrentItems] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (items: string[], index: number) => {
    setCurrentItems(items);
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent,
    items: string[],
    index: number
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      openModal(items, index);
    }
  };

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">
        Nuestros Espacios: Ambientes que potencian tu práctica profesional
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {consultorios.map((consultorio, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-4">
            <div
              role="button"
              tabIndex={0}
              onClick={() => openModal(consultorio.media, 0)}
              onKeyDown={(e) => handleKeyDown(e, consultorio.media, 0)}
              className="cursor-pointer"
            >
              <Image
                src={consultorio.media[0]}
                alt={consultorio.nombre}
                className="rounded-lg"
                width={500}
                height={300}
                layout="responsive"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {consultorio.media.slice(1, 3).map((m, i) => (
                <div
                  key={i}
                  role="button"
                  tabIndex={0}
                  onClick={() => openModal(consultorio.media, i + 1)}
                  onKeyDown={(e) => handleKeyDown(e, consultorio.media, i + 1)}
                  className="cursor-pointer"
                >
                  <Image
                    src={m}
                    alt={`${consultorio.nombre}-${i}`}
                    className="rounded-lg"
                    width={200}
                    height={150}
                    layout="responsive"
                  />
                </div>
              ))}
              <div
                role="button"
                tabIndex={0}
                onClick={() => openModal(consultorio.media, 3)}
                onKeyDown={(e) => handleKeyDown(e, consultorio.media, 3)}
                className="cursor-pointer"
              >
                <video src={consultorio.media[3]} className="rounded-lg">
                  <track kind="captions" />
                </video>
              </div>
            </div>
            <h3 className="text-xl font-semibold mt-4">{consultorio.nombre}</h3>
            <p className="text-gray-600 mt-2">{consultorio.descripcion}</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              {consultorio.caracteristicas.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
            <p className="font-bold mt-3">Precio: {consultorio.precio}</p>
          </div>
        ))}
      </div>

      <MediaModal
        isOpen={modalOpen}
        items={currentItems}
        currentIndex={currentIndex}
        onClose={() => setModalOpen(false)}
        onPrev={() =>
          setCurrentIndex((prev) =>
            prev === 0 ? currentItems.length - 1 : prev - 1
          )
        }
        onNext={() =>
          setCurrentIndex((prev) =>
            prev === currentItems.length - 1 ? 0 : prev + 1
          )
        }
      />
    </section>
  );
}
