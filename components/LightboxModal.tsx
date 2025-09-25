"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

interface LightboxModalProps {
  isOpen: boolean;
  image: StaticImageData | string | null;
  onClose: () => void;
}

const LightboxModal = ({ isOpen, image, onClose }: LightboxModalProps) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKey);
    }

    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visor de imagen"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
    >
      <button
        type="button"
        aria-label="Cerrar visor"
        className="absolute inset-0 w-full h-full cursor-default"
        onClick={onClose}
      />
      {/* Botón de cierre */}
      <button
        type="button"
        aria-label="Cerrar visor"
        className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
        onClick={onClose}
      >
        <FaTimes />
      </button>

      {/* Contenido del modal */}
      <div className="max-w-3xl max-h-[90vh] flex justify-center items-center">
        <Image
          src={image}
          alt="Imagen ampliada"
          className="max-h-[90vh] w-auto h-auto rounded-lg"
          width={800}
          height={1200}
          priority
        />
      </div>
    </div>
  );
};

export default LightboxModal;
