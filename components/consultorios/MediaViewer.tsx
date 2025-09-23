"use client";
import React, { useState, useEffect, FC } from "react";
import Image from "next/image";
import { Modal, ModalContent, ModalBody } from "@heroui/modal";
import { FaPlayCircle, FaTimes } from "react-icons/fa";

interface Space {
  id: string;
  name: string;
  category: "consultorio" | "comun";
  price?: number;
  description: string;
  features: string[];
  images: string[];
  videoUrl: string;
}

interface MediaViewerProps {
  space: Space | null;
}

const MediaViewer: FC<MediaViewerProps> = ({ space }) => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(
    space ? space.images[0] : null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Efecto para actualizar la imagen principal cuando cambia el espacio seleccionado
  useEffect(() => {
    if (space && space.images.length > 0) {
      setSelectedMedia(space.images[0]);
    } else {
      setSelectedMedia(null);
    }
  }, [space]);

  if (!space) {
    // Placeholder para cuando no hay un espacio seleccionado
    return (
      <div className="relative aspect-video w-full animate-pulse overflow-hidden rounded-lg bg-gray-200 shadow-lg" />
    );
  }

  const allMedia = [...space.images, "video"];

  return (
    <>
      {/* Visor Principal */}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
        {selectedMedia ? (
          <Image
            key={selectedMedia} // Cambiar la key fuerza el rerender con animación
            src={selectedMedia}
            alt={`Vista principal de ${space.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-all duration-300 ease-in-out hover:scale-105"
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200">
            <p className="text-gray-500">No hay imagen disponible</p>
          </div>
        )}
      </div>

      {/* Tira de Miniaturas (Thumbnails) */}
      <div className="mt-4 grid grid-cols-4 gap-4">
        {allMedia.map((media, index) => {
          const isVideo = media === "video";
          const isActive = !isVideo && selectedMedia === media;

          return (
            <button
              key={index}
              type="button"
              onClick={() =>
                isVideo ? setIsModalOpen(true) : setSelectedMedia(media)
              }
              className={`relative aspect-video w-full overflow-hidden rounded-md transition-all duration-200 focus:outline-none ${
                isActive
                  ? "ring-4 ring-terracotta-suave"
                  : "ring-2 ring-transparent hover:ring-terracotta-suave/50 focus-visible:ring-terracotta-suave"
              }`}
            >
              <Image
                src={isVideo ? space.images[0] : media}
                alt={`Miniatura ${index + 1}`}
                fill
                sizes="25vw"
                className="object-cover"
              />
              {isVideo && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-200 hover:opacity-75">
                  <FaPlayCircle className="h-10 w-10 text-white/80" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Modal para el Video */}
      <Modal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        size="3xl"
        placement="center"
      >
        <ModalContent className="aspect-video bg-black">
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="absolute -top-3 -right-3 z-50 rounded-full bg-black/50 p-1 text-white transition-colors hover:bg-black/75"
            aria-label="Cerrar video"
          >
            <FaTimes size={20} />
          </button>
          <ModalBody className="p-0">
            <iframe
              width="100%"
              height="100%"
              src={space.videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MediaViewer;
