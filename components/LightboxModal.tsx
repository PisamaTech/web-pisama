"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState, useRef } from "react";
import { FaTimes, FaPlus, FaMinus } from "react-icons/fa";

interface LightboxModalProps {
  isOpen: boolean;
  image: StaticImageData | string | null;
  onClose: () => void;
}

const LightboxModal = ({ isOpen, image, onClose }: LightboxModalProps) => {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const startPan = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKey);
      // Reset zoom and pan on open
      setZoom(1);
      setPan({ x: 0, y: 0 });
    }

    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.5, 5));
  };

  const handleZoomOut = () => {
    setZoom((prev) => {
      const newZoom = Math.max(prev - 0.5, 1);
      if (newZoom === 1) {
        setPan({ x: 0, y: 0 });
      }
      return newZoom;
    });
  };

  const handleWheelZoom = (e: React.WheelEvent) => {
    e.preventDefault();
    const newZoomDelta = e.deltaY * 0.01;
    setZoom((prev) => {
      const newZoom = Math.min(Math.max(prev - newZoomDelta, 1), 5);
      if (newZoom === 1) {
        setPan({ x: 0, y: 0 });
      }
      return newZoom;
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      e.preventDefault();
      setIsPanning(true);
      startPan.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isPanning) {
      const newX = e.clientX - startPan.current.x;
      const newY = e.clientY - startPan.current.y;
      setPan({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visor de imagen"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      onWheel={handleWheelZoom}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <button
        type="button"
        aria-label="Cerrar visor"
        className="absolute inset-0 w-full h-full cursor-default"
        onClick={() => {
          if (zoom > 1) {
            setZoom(1);
            setPan({ x: 0, y: 0 });
          } else {
            onClose();
          }
        }}
      />
      {/* Botones de control */}
      <div className="absolute top-6 right-6 flex gap-4 text-white text-3xl z-10">
        <button
          type="button"
          aria-label="Acercar"
          className="cursor-pointer"
          onClick={handleZoomIn}
        >
          <FaPlus />
        </button>
        <button
          type="button"
          aria-label="Alejar"
          className="cursor-pointer"
          onClick={handleZoomOut}
        >
          <FaMinus />
        </button>
        <button
          type="button"
          aria-label="Cerrar visor"
          className="cursor-pointer"
          onClick={onClose}
        >
          <FaTimes />
        </button>
      </div>

      {/* Contenido del modal */}
      <div className="max-w-3xl max-h-[90vh] flex justify-center items-center overflow-hidden">
        <Image
          ref={imageRef}
          src={image}
          alt="Imagen ampliada"
          className={`max-h-[90vh] w-auto h-auto rounded-lg transition-transform duration-200 ${
            zoom > 1 ? "cursor-grab" : ""
          } ${isPanning ? "cursor-grabbing" : ""}`}
          style={{
            transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
          }}
          width={800}
          height={1200}
          priority
          onMouseDown={handleMouseDown}
        />
      </div>
    </div>
  );
};

export default LightboxModal;
