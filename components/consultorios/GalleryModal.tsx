"use client";

import { Modal, ModalContent } from "@heroui/modal";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

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

  const prev = () => setCurrent((current - 1 + media.length) % media.length);
  const next = () => setCurrent((current + 1) % media.length);

  return (
    <Modal isOpen={open} onClose={onClose} size="full" className="bg-black/90">
      <ModalContent>
        <div className="relative flex items-center justify-center h-screen">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={onClose}
          >
            <FaTimes />
          </button>
          <button
            className="absolute left-5 text-white text-3xl"
            onClick={prev}
          >
            <FaArrowLeft />
          </button>
          <button
            className="absolute right-5 text-white text-3xl"
            onClick={next}
          >
            <FaArrowRight />
          </button>
          {media[current].type === "image" ? (
            <img
              src={media[current].src}
              alt="media"
              className="max-h-[80vh] max-w-[90vw] rounded-lg"
            />
          ) : (
            <video
              src={media[current].src}
              controls
              className="max-h-[80vh] max-w-[90vw] rounded-lg"
            />
          )}
        </div>
      </ModalContent>
    </Modal>
  );
}
