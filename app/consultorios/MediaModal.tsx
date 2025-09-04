"use client";
import { useEffect } from "react";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface MediaModalProps {
  isOpen: boolean;
  items: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function MediaModal({
  isOpen,
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: MediaModalProps) {
  if (!isOpen) return null;

  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <button
        className="absolute top-6 right-6 text-white text-3xl"
        onClick={onClose}
      >
        <FaTimes />
      </button>

      <button className="absolute left-6 text-white text-3xl" onClick={onPrev}>
        <FaArrowLeft />
      </button>

      <div className="max-w-5xl max-h-[80vh] flex justify-center items-center">
        {currentItem.endsWith(".mp4") ? (
          <video
            src={currentItem}
            controls
            className="max-h-[80vh] rounded-lg"
          />
        ) : (
          <img
            src={currentItem}
            alt="media"
            className="max-h-[80vh] rounded-lg"
          />
        )}
      </div>

      <button className="absolute right-6 text-white text-3xl" onClick={onNext}>
        <FaArrowRight />
      </button>
    </div>
  );
}
