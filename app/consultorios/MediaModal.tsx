"use client";
import Image from "next/image";
import { useEffect } from "react";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface MediaModalProps {
  isOpen: boolean;
  items: string[]; // puede contener imágenes o links de youtube
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
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKey);
    }

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  const currentItem = items[currentIndex];

  // detectar si es link de youtube
  const isYouTube =
    currentItem.includes("youtube.com") || currentItem.includes("youtu.be");

  // transformar a formato embed
  const getYouTubeEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/watch?v=")) {
      const videoId = url.split("v=")[1].split("&")[0];

      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1].split("?")[0];

      return `https://www.youtube.com/embed/${videoId}`;
    }

    return url;
  };

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
        {isYouTube ? (
          <iframe
            width="960"
            height="540"
            src={getYouTubeEmbedUrl(currentItem)}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg max-h-[80vh] w-full"
          />
        ) : (
          <Image
            src={currentItem}
            alt="media"
            width={1200}
            height={800}
            className="max-h-[80vh] w-auto rounded-lg"
          />
        )}
      </div>

      <button className="absolute right-6 text-white text-3xl" onClick={onNext}>
        <FaArrowRight />
      </button>
    </div>
  );
}
