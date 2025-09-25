import { CardBody } from "@heroui/card";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";

import { Espacio } from "@/src/consultoriosData";

const CardImageGallery = ({
  media,
  nombre,
  onImageClick,
}: {
  media: Espacio["media"];
  nombre: string;
  onImageClick: (index: number) => void;
}) => (
  <CardBody className="p-0">
    <button
      type="button"
      className="relative w-full h-70 cursor-pointer"
      onClick={() => onImageClick(0)}
    >
      <Image
        src={media.length > 0 ? media[0].src : "/images/placeholder.webp"}
        alt={`Imagen principal de ${nombre}`}
        className="object-cover"
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
      />
    </button>
    <div className="grid grid-cols-3 gap-2 p-2">
      {media.slice(1, 3).map((item, idx) => (
        <button
          type="button"
          key={idx}
          className="relative w-full h-20 cursor-pointer rounded overflow-hidden"
          onClick={() => onImageClick(idx + 1)}
        >
          <Image
            src={item.src}
            alt={`Imagen extra de ${nombre} ${idx + 1}`}
            className="object-cover"
            fill
            sizes="(max-width: 1024px) 33vw, 17vw"
          />
        </button>
      ))}
      <button
        type="button"
        className="relative w-full h-20 bg-black text-white flex items-center justify-center cursor-pointer rounded"
        onClick={() => onImageClick(media.length - 1)}
        disabled={media.length === 0}
      >
        <FaPlayCircle className="h-6 w-6 text-white/80" />
      </button>
    </div>
  </CardBody>
);

export default CardImageGallery;
