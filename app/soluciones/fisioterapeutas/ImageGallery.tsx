"use client";

import Image from "next/image";
import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

const ImageGallery = () => {
  const images = [
    {
      id: 1,
      src: "/images/consultorio3-1.webp",
      thumbnail: "/images/consultorio3-1.webp",
      width: 1500,
      height: 1129,
      alt: "Consultorio Premium 3 - Espacio amplio para fisioterapia",
      tag: "Consultorio Premium 3",
      tagColor: "bg-secondary",
    },
    {
      id: 2,
      src: "/images/consultorio4-3.webp",
      thumbnail: "/images/consultorio4-3.webp",
      width: 1500,
      height: 1122,
      alt: "Consultorio Premium 4 - Espacio amplio para fisioterapia",
      tag: "Consultorio Premium 4",
      tagColor: "bg-primary",
    },
    {
      id: 3,
      src: "/images/consultorio5-1.webp",
      thumbnail: "/images/consultorio5-1.webp",
      width: 1500,
      height: 1122,
      alt: "Consultorio Premium 5 - Espacio amplio para fisioterapia",
      tag: "Consultorio Premium 5",
      tagColor: "bg-secondary",
    },
    {
      id: 4,
      src: "/images/saladescanso-1.webp",
      thumbnail: "/images/saladescanso-1.webp",
      width: 1500,
      height: 1122,
      alt: "Sala de Descanso - Almacenamiento para equipo de fisioterapia",
      tag: "Almacenamiento",
      tagColor: "bg-primary",
    },
  ];

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto">
        <Gallery
          withCaption
          options={{
            zoom: true,
            loop: true,
            closeOnVerticalDrag: true,
            showHideAnimationType: "fade",
            bgOpacity: 0.9,
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {images.map((image) => {
              return (
                <Item
                  key={image.id}
                  original={image.src}
                  thumbnail={image.thumbnail}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                  caption={image.alt}
                >
                  {({ ref, open }) => (
                    <div
                      ref={ref}
                      onClick={open}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          (open as any)();
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
                    >
                      <Image
                        src={image.thumbnail}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Overlay oscuro en hover */}
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />

                      {/* Icono de zoom en hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/50 bg-opacity-90 rounded-full p-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-gray-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Tag si existe */}
                      {image.tag && (
                        <div
                          className={`absolute bottom-4 left-4 ${image.tagColor} text-white px-3 py-1 rounded text-sm font-semibold z-10`}
                        >
                          {image.tag}
                        </div>
                      )}
                    </div>
                  )}
                </Item>
              );
            })}
          </div>
        </Gallery>
      </div>
    </section>
  );
};

export default ImageGallery;
