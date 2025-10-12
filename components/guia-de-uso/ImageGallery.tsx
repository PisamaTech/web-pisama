"use client";

import { StaticImageData } from "next/image";
import { useState, createContext, useContext, ReactNode } from "react";

import LightboxModal from "@/components/LightboxModal";

type ImageGalleryContextType = {
  openLightbox: (image: StaticImageData) => void;
};

const ImageGalleryContext = createContext<ImageGalleryContextType | undefined>(
  undefined
);

export const useImageGallery = () => {
  const context = useContext(ImageGalleryContext);

  if (!context) {
    throw new Error(
      "useImageGallery must be used within an ImageGalleryProvider"
    );
  }

  return context;
};

export default function ImageGallery({ children }: { children: ReactNode }) {
  const [lightboxImage, setLightboxImage] = useState<StaticImageData | null>(
    null
  );

  const openLightbox = (image: StaticImageData) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <ImageGalleryContext.Provider value={{ openLightbox }}>
      {children}
      <LightboxModal
        isOpen={!!lightboxImage}
        image={lightboxImage}
        onClose={closeLightbox}
      />
    </ImageGalleryContext.Provider>
  );
}