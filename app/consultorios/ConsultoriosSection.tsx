"use client";
import { useState } from "react";

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

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">
        Nuestros Espacios: Ambientes que potencian tu práctica profesional
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {consultorios.map((consultorio, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-4">
            <img
              src={consultorio.media[0]}
              alt={consultorio.nombre}
              className="rounded-lg cursor-pointer"
              onClick={() => openModal(consultorio.media, 0)}
            />
            <div className="grid grid-cols-2 gap-2 mt-2">
              {consultorio.media.slice(1, 3).map((m, i) => (
                <img
                  key={i}
                  src={m}
                  alt={`${consultorio.nombre}-${i}`}
                  className="rounded-lg cursor-pointer"
                  onClick={() => openModal(consultorio.media, i + 1)}
                />
              ))}
              <video
                src={consultorio.media[3]}
                className="rounded-lg cursor-pointer"
                onClick={() => openModal(consultorio.media, 3)}
              />
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
            prev === 0 ? currentItems.length - 1 : prev - 1,
          )
        }
        onNext={() =>
          setCurrentIndex((prev) =>
            prev === currentItems.length - 1 ? 0 : prev + 1,
          )
        }
      />
    </section>
  );
}
