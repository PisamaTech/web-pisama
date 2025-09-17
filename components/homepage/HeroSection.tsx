import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/button";
import heroImagen from "../../public/images/consultorio3-1.webp";
import logoImagen from "@/public/images/Logo-Espacio-Pisama-Texturado-300px.png";

export default function HeroSection() {
  return (
    // 1. Contenedor principal con posicionamiento relativo y altura de pantalla completa
    <section className="relative flex h-[80vh] items-center justify-center text-center text-white">
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
        {/* Logo */}
        <Image
          src={logoImagen}
          alt="Logo Espacio Pisama"
          width={250} // Ajusta el tamaño según sea necesario
          height={250} // Ajusta el tamaño según sea necesario
          className="mx-auto mb-8" // Centra el logo y añade margen inferior
        />
        {/* Título Principal (ahora en color blanco) */}
        <h1 className="font-semibold text-2xl tracking-tight text-white md:text-5xl">
          Alquiler de Consultorios por Hora en Montevideo: El espacio que
          Impulsa tu Profesión
        </h1>

        {/* Subtítulo / Descripción (en un tono de blanco más suave) */}
        <p className="mt-6 text-sm leading-8 text-gray-200 sm:text-xl">
          Espacios diseñados para psicólogos, terapeutas, coaches y
          profesionales independientes. Gestiona tu agenda online, olvídate de
          las cuponeras y recibe a tus pacientes en un ambiente de calma y
          profesionalismo.
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
            className="border border-white/30"
          >
            Ver Disponibilidad
          </Button>
          <Button
            as={Link}
            href="/mas-informacion"
            size="lg"
            color="secondary"
            radius="md"
            variant="shadow"
            className="border border-white/30"
          >
            Contactanos
          </Button>
        </div>
      </div>
    </section>
  );
}
