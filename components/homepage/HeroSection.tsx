"use client";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import logoImagen from "@/public/images/Logo-Espacio-Pisama-Texturado-300px.png";

import heroImagen from "../../public/images/consultorio3-1.webp";

export default function HeroSection() {
  return (
    // 1. Contenedor principal con posicionamiento relativo y altura de pantalla completa
    <section className="relative flex items-center justify-center text-center text-white">
      {/* 2. Imagen de fondo que cubre todo el contenedor */}
      <Image
        src={heroImagen} // Ruta desde la carpeta 'public'
        alt="Consultorio profesional moderno y luminoso, listo para ser alquilado"
        fill // 'fill' hace que la imagen llene el contenedor padre
        className="object-cover z-20" // 'object-cover' evita que la imagen se deforme
        quality={60} // Calidad de la imagen (opcional, bueno para performance)
        priority // Carga esta imagen primero, ya que es "Above the Fold"
      />

      {/* 3. Capa de degradado oscuro superpuesta sobre la imagen */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-21" />

      {/* 4. Contenedor del contenido, centrado */}
      <div className="mx-auto max-w-4xl text-center z-25 relative">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            scale: { type: "spring", visualDuration: 0.6, bounce: 0.6 },
          }}
          whileHover={{ scale: 1.1 }}
          className="mx-auto my-5 w-fit"
        >
          <Image
            src={logoImagen}
            alt="Logo Espacio Pisama"
            width={180} // Ajusta el tamaño según sea necesario
            height={180} // Ajusta el tamaño según sea necesario
          />
        </motion.div>
        {/* Título Principal (ahora en color blanco) */}
        <h1 className="font-bold text-3xl tracking-tight text-white md:text-4xl lg:text-5xl drop-shadow-xl/50">
          Alquiler de Consultorios por Hora en Montevideo:<br /> <span className="text-2xl md:text-3xl lg:text-4xl">Somos el espacio que</span> <span className="text-secondary-300 text-3xl md:text-4xl lg:text-5xl drop-shadow-xl/80">Impulsa tu Crecimiento</span>
        </h1>

        {/* Subtítulo / Descripción (en un tono de blanco más suave) */}
        <p className="mt-6 text-base leading-relaxed text-gray-100 sm:text-lg max-w-2xl mx-auto font-light">
          Espacios diseñados para psicólogos, terapeutas, masajistas y
          profesionales independientes. Con gestión de tus reservas online, descuentos cuantas más horas uses y un ambiente de calma y
          profesionalismo.
        </p>

        {/* Botones de Llamada a la Acción */}
        <div className="my-10 flex items-center justify-center flex-wrap gap-6">
          <Button
            as={Link}
            href="/disponibilidad"
            size="lg"
            color="primary"
            radius="md"
            variant="shadow"
            className="border border-white/30"
          >
            Ver Disponibilidad
          </Button>
          <Button
            as={Link}
            href="https://wa.me/59895961360"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            color="secondary"
            radius="md"
            variant="shadow"
            className="border border-white/30"
          >
            Agendá una visita
          </Button>
        </div>
      </div>
    </section>
  );
}
