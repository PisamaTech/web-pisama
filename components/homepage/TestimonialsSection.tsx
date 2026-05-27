"use client";

import { useRef, useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Siempre todo impecable! Estoy en Pisama desde el 2021 y mi experiencia con el espacio es sumamente positiva. Destaco y valoro mucho el empeño que Gastón le pone en mejorar y agilizar las gestiones de los diferentes espacios lo que hacen que Pisama se diferencie de otros lugares!",
    name: "Nicolás Michel",
    initials: "NM",
    title: "Psicólogo · desde 2021 en Espacio Pisama",
    timeAgo: "Hace 4 semanas",
    reviewUrl: "https://maps.app.goo.gl/TDjBeJFyiPTLcfyg9",
  },
  {
    quote:
      "Alquilé consultorio en Espacio Pisama durante tres años y mi experiencia fue sumamente positiva... es un espacio ideal para profesionales de la psicología: los consultorios son amplios, cómodos y están muy bien cuidados. Gastón y Ginanina siempre con la mejor disposición a la hora de gestionar el espacio, y también destaco el clima de respeto y colaboración entre colegas que en espacios compartidos es fundamental. Para mí fue una muy linda experiencia. Lo recomiendo totalmente.",
    name: "Noelia Prates Nuñez",
    initials: "NP",
    title: "Psicóloga · 3 años en Espacio Pisama",
    timeAgo: "Hace 6 meses",
    reviewUrl: "https://maps.app.goo.gl/uy8iBMA21BAqBSQp9",
  },
  {
    quote:
      "Excelente lugar para trabajar en un ambiente limpio y ordenado. Muy prolijo. Además, y esto es lo que más me gusta: total autonomía para ingresar y salir. Con un sistema que es muy cómodo tanto para reservar como para ingresar al lugar. Lo recomiendo",
    name: "Carla F",
    initials: "CF",
    title: "desde marzo de 2026 en Espacio Pisama",
    timeAgo: "Hace 2 meses",
    reviewUrl: "https://maps.app.goo.gl/2LHWTih5YwpoALgG9",
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);

      const scrollRatio = scrollLeft / (scrollWidth - clientWidth || 1);
      const approxIndex = Math.round(scrollRatio * (testimonials.length - 1));
      setActiveIdx(approxIndex);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      checkScroll();
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const offset = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-content3 py-20 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold text-primary">
            Las <span className="text-secondary">Palabras</span> de quienes
            Vivieron la Experiencia Pisama.
          </h2>
          <a
            href="https://share.google/qYPO2cOTOMcytb3NM"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-marron-cafe/60 px-4 py-1.5 text-sm text-crema-suave transition-opacity hover:opacity-80"
          >
            <span className="text-yellow-400">★</span>
            Reseñas reales de Google
          </a>
        </div>

        <div className="relative mx-auto mt-12 group">
          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-2 no-scrollbar"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-center px-1"
              >
                <Card className="flex h-full flex-col bg-crema-suave transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-transparent hover:border-primary/10">
                  <CardHeader className="flex items-start gap-4 p-6 pb-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-terracotta-suave font-bold text-sm text-white">
                      {testimonial.initials}
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-display text-lg font-bold text-marron-cafe leading-tight">
                        {testimonial.name}
                      </p>
                      <p className="font-sans text-xs text-marron-cafe/60">
                        {testimonial.title}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-400 text-sm tracking-tight">
                          ★★★★★
                        </span>
                        <span className="text-xs text-marron-cafe/50">
                          {testimonial.timeAgo}
                        </span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardBody className="flex-grow px-6 pb-4 pt-2">
                    <blockquote className="border-l-4 border-terracotta-suave/40 pl-4 font-sans italic text-marron-cafe/90 text-sm leading-relaxed">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                  </CardBody>

                  <CardFooter className="px-6 pb-6 pt-0">
                    <a
                      href={testimonial.reviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-marron-cafe/20 px-4 py-1.5 text-xs font-semibold text-marron-cafe/70 transition-colors hover:border-terracotta-suave hover:text-terracotta-suave"
                    >
                      <span className="text-yellow-400">★</span>
                      Ver reseña en Google
                    </a>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation Controls (Arrows) */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-[-10px] md:left-[-20px] top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-crema-suave text-marron-cafe shadow-md hover:shadow-lg border border-marron-cafe/15 transition-all hover:bg-white hover:text-primary z-10 cursor-pointer"
              aria-label="Anterior"
            >
              <FaChevronLeft size={16} />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-[-10px] md:right-[-20px] top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-crema-suave text-marron-cafe shadow-md hover:shadow-lg border border-marron-cafe/15 transition-all hover:bg-white hover:text-primary z-10 cursor-pointer"
              aria-label="Siguiente"
            >
              <FaChevronRight size={16} />
            </button>
          )}
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (scrollRef.current) {
                  const { clientWidth } = scrollRef.current;
                  scrollRef.current.scrollTo({
                    left: clientWidth * idx,
                    behavior: "smooth",
                  });
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIdx === idx ? "w-6 bg-primary" : "w-2 bg-marron-cafe/30"
              }`}
              aria-label={`Ir al testimonio ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
