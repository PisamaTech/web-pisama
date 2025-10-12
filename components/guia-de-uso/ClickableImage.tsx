"use client";

import Image, { StaticImageData } from "next/image";

import { useImageGallery } from "./ImageGallery";

interface ClickableImageProps {
  src: StaticImageData;
  alt: string;
  className?: string;
}

export default function ClickableImage({
  src,
  alt,
  className,
}: ClickableImageProps) {
  const { openLightbox } = useImageGallery();

  return (
    <div
      role="button"
      tabIndex={0}
      className={`cursor-pointer ${className} m-4`}
      onClick={() => openLightbox(src)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          openLightbox(src);
        }
      }}
    >
      <Image
        src={src}
        alt={alt}
        className="border-2 border-default/50 rounded-3xl shadow-xl"
      />
    </div>
  );
}
