import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/button";
import { FaArrowRight } from "react-icons/fa";
import imagenAppReserva from "@/public/images/aplicacion-web-reservas.webp";

export default function BookingSystemSection(): JSX.Element {
  return (
    // Usamos un fondo de nuestra paleta para destacar la sección
    <section className="bg-gris-calido/40 py-20 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Columna Izquierda: Texto Persuasivo */}
          <div className="text-center md:text-left">
            <h2 className="font-display text-4xl font-bold text-primary">
              Una Aplicación para{" "}
              <span className="text-secondary">Gestionar Tus Consultas </span>{" "}
              Sin Intermediarios.
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-marron-cafe/90">
              ¿Conoces esta situación? Consultas por un horario libre, contactas
              a tu paciente, te confirman y cuando vuelves... el consultorio ya
              no está disponible. Es una pérdida de tiempo y profesionalismo.
            </p>
            <p className="mt-4 font-sans text-lg leading-relaxed text-marron-cafe/90">
              Diseñamos nuestra aplicación de reservas online para eliminar esa
              frustración para siempre. Accede a la{" "}
              <strong>disponibilidad en tiempo real, 24/7</strong>. Si ves un
              horario libre, es tuyo al instante. Sin intermediarios, sin
              demoras.
            </p>
            <div className="mt-8">
              <Button
                as={Link}
                href="/aplicacion-de-reservas"
                className="bg-terracotta-suave font-display font-semibold text-white shadow-lg"
                variant="solid"
                size="lg"
                endContent={<FaArrowRight />}
              >
                Descubre nuestra Aplicación
              </Button>
            </div>
          </div>

          {/* Columna Derecha: Visual de la App */}
          <div className="relative mx-auto h-[450px] w-[250px] rounded-[30px] border-[10px] border-black bg-white shadow-2xl sm:h-[500px] sm:w-[280px]">
            <div className="absolute left-1/2 top-3 h-2 w-16 -translate-x-1/2 rounded-full bg-black"></div>
            <div className="absolute inset-[10px] overflow-hidden rounded-[20px]">
              <Image
                src={imagenAppReserva}
                alt="Vista previa de la aplicación de reservas de Espacio Pisama en un celular"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 250px, 280px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
