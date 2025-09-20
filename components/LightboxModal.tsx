"use client";

import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { FaTimes } from "react-icons/fa";

// --- COMPONENTE LIGHTBOX ---
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
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!isOpen || !image) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
        onClick={onClose}
      >
        <FaTimes />
      </button>

      <div
        className="max-w-3xl max-h-[90vh] flex justify-center items-center"
        onClick={(e) => e.stopPropagation()} // Evita que el clic en la imagen cierre el modal
      >
        <Image
          src={image}
          alt="Vista ampliada"
          className="max-h-[90vh] w-auto h-auto rounded-lg"
          width={800}
          height={1200}
        />
      </div>
    </div>
  );
};

export default LightboxModal;
