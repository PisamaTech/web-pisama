"use client";

import { useState } from "react";
import { Card } from "@heroui/card";

import GalleryModal from "./GalleryModal";
import CardImageGallery from "./CardImageGallery";
import CardInfo from "./CardInfo";

import { Espacio } from "@/src/consultoriosData";

export default function ConsultorioCard({ espacio }: { espacio: Espacio }) {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const handleOpen = (index: number) => {
    setStartIndex(index);
    setOpen(true);
  };

  return (
    <>
      <Card className="bg-background shadow-lg rounded-xl overflow-hidden hover:scale-[1.03] transition-transform">
        <CardImageGallery
          media={espacio.media}
          nombre={espacio.nombre}
          onImageClick={handleOpen}
        />
        <CardInfo espacio={espacio} />
      </Card>

      <GalleryModal
        open={open}
        onClose={() => setOpen(false)}
        media={espacio.media}
        startIndex={startIndex}
      />
    </>
  );
}
