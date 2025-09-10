"use client";
import { useState } from "react";
import MediaModal from "./MediaModal";
import otrasAreas from "@/src/otrasAreas";

export default function OtrasAreasSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentItems, setCurrentItems] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (items: string[], index: number) => {
    setCurrentItems(items);
    setCurrentIndex(index);
    setModalOpen(true);
  };

  return (
    // El contenedor y el padding vertical ahora se manejan en la página que lo invoca.
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="mb-16 text-center font-display text-4xl font-bold text-marron-cafe">
        Áreas Comunes a tu Disposición
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {otrasAreas.map((area, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-4">
            <img
              src={area.media[0]}
              alt={area.nombre}
              className="rounded-lg cursor-pointer"
              onClick={() => openModal(area.media, 0)}
            />
            <div className="grid grid-cols-2 gap-2 mt-2">
              {area.media.slice(1, 3).map((m, i) => (
                <img
                  key={i}
                  src={m}
                  alt={`${area.nombre}-${i}`}
                  className="rounded-lg cursor-pointer"
                  onClick={() => openModal(area.media, i + 1)}
                />
              ))}
              <video
                src={area.media[3]}
                className="rounded-lg cursor-pointer"
                onClick={() => openModal(area.media, 3)}
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">{area.nombre}</h3>
            <p className="text-gray-600 mt-2">{area.descripcion}</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              {area.caracteristicas.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
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
    </div>
  );
}
