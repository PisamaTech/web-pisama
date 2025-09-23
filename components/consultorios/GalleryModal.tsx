"use client";

import { Modal, ModalContent } from "@heroui/modal";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaPlayCircle,
  FaTimes,
} from "react-icons/fa";
import { useState, useEffect, useCallback } from "react";

export default function GalleryModal({
  open,
  onClose,
  media,
  startIndex,
}: {
  open: boolean;
  onClose: () => void;
  media: { type: "image" | "video"; src: string }[];
  startIndex: number;
}) {
  const [current, setCurrent] = useState(startIndex);

  useEffect(() => {
    setCurrent(startIndex);
  }, [startIndex]);

  const prev = useCallback(
    () => setCurrent((current) => (current - 1 + media.length) % media.length),
    [media.length],
  );
  const next = useCallback(
    () => setCurrent((current) => (current + 1) % media.length),
    [media.length],
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "ArrowLeft") {
        prev();
      } else if (e.key === "ArrowRight") {
        next();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, prev, next, onClose]);

  if (!media || media.length === 0) {
    return null;
  }

  const nextIndex = (current + 1) % media.length;
  const prevIndex = (current - 1 + media.length) % media.length;

  const variants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const transition = {
    opacity: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <Modal
      isOpen={open}
      onClose={onClose}
      size="full"
      className="bg-black/90"
      hideCloseButton
    >
      <ModalContent>
        <div className="relative flex items-center justify-center h-screen">
          <button
            className="absolute top-5 right-5 text-white text-3xl z-20 cursor-pointer"
            onClick={onClose}
          >
            <FaTimes />
          </button>
          <button
            className="absolute left-5 text-white text-3xl z-20 cursor-pointer"
            onClick={prev}
          >
            <FaArrowLeft />
          </button>
          <button
            className="absolute right-5 text-white text-3xl z-20 cursor-pointer"
            onClick={next}
          >
            <FaArrowRight />
          </button>

          {/* Preloading for next/prev images */}
          <div style={{ display: "none" }}>
            {open && media[nextIndex].type === "image" && (
              <img src={media[nextIndex].src} alt="" />
            )}
            {open && media[prevIndex].type === "image" && (
              <img src={media[prevIndex].src} alt="" />
            )}
          </div>

          <AnimatePresence initial={false}>
            <motion.div
              key={current}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              className="absolute"
            >
              {(() => {
                const currentMedia = media[current];

                if (
                  currentMedia.type === "video" &&
                  currentMedia.src.includes("youtube.com")
                ) {
                  return (
                    <iframe
                      src={currentMedia.src}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="aspect-video w-full max-w-[90vw] max-h-[80vh] rounded-lg"
                    />
                  );
                }
                if (currentMedia.type === "video") {
                  return (
                    <video
                      key={currentMedia.src}
                      src={currentMedia.src}
                      controls
                      autoPlay
                      loop
                      playsInline
                      preload="metadata"
                      className="max-h-[80vh] max-w-[90vw] rounded-lg"
                    />
                  );
                }

                return (
                  <Image
                    src={currentMedia.src}
                    alt="media"
                    width={1920}
                    height={1080}
                    className="h-auto w-auto max-h-[80vh] max-w-[90vw] rounded-lg"
                    sizes="90vw"
                  />
                );
              })()}
            </motion.div>
          </AnimatePresence>

          {/* Thumbnail strip */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-center gap-3 overflow-x-auto p-4">
              {media.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`relative flex-shrink-0 w-24 h-16 rounded-md overflow-hidden transition-all duration-200 focus:outline-none ${
                    current === index
                      ? "ring-4 ring-white"
                      : "ring-2 ring-transparent hover:ring-white/50"
                  }`}
                >
                  <Image
                    src={item.type === "image" ? item.src : media[0].src}
                    alt={`Miniatura ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="10vw"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <FaPlayCircle className="h-6 w-6 text-white/80" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}
