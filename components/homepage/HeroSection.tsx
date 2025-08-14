import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/button";
import heroImagen from "../public/images/consultorio3-1.jpg";

export default function HeroSection() {
  return (
    // 1. Contenedor principal con posicionamiento relativo y altura de pantalla completa
    <section className="relative flex h-[70vh] items-center justify-center text-center text-white">
      {/* 2. Imagen de fondo que cubre todo el contenedor */}
      <Image
        src={heroImagen} // Ruta desde la carpeta 'public'
        alt="Consultorio profesional moderno y luminoso, listo para ser alquilado"
        fill // 'fill' hace que la imagen llene el contenedor padre
        className="object-cover z-20" // 'object-cover' evita que la imagen se deforme
        quality={80} // Calidad de la imagen (opcional, bueno para performance)
        priority // Carga esta imagen primero, ya que es "Above the Fold"
      />

      {/* 3. Capa de degradado oscuro superpuesta sobre la imagen */}
      <div className="absolute inset-0 bg-black/50 z-21" />
      {/* Puedes ajustar la opacidad cambiando el valor /60 (ej. /50, /70) */}

      {/* 4. Contenedor del contenido, centrado */}
      <div className="mx-auto max-w-4xl text-center px-6 z-25">
        {/* Título Principal (ahora en color blanco) */}
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Alquiler de Consultorios por Hora en el Corazón de Parque Rodó
        </h1>

        {/* Subtítulo / Descripción (en un tono de blanco más suave) */}
        <p className="mt-6 text-lg leading-8 text-gray-200 ">
          Espacios diseñados para psicólogos, terapeutas, coaches y
          profesionales independientes. Reserva online, acceso autónomo y
          facturación automática.
        </p>

        {/* Botones de Llamada a la Acción */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button
            as={Link}
            href="/disponibilidad"
            size="lg"
            color="primary"
            radius="md"
            variant="shadow"
          >
            Ver Disponibilidad
          </Button>
          <Link
            href="/mas-informacion"
            className="rounded-md border border-white/80 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Conocer Más
          </Link>
        </div>
      </div>
    </section>
  );
}
