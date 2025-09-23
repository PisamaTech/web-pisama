import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { FaHandshake, FaUsers } from "react-icons/fa"; // Iconos para los pilares
import { GrGrow } from "react-icons/gr";
import { FaPersonRays } from "react-icons/fa6";

import Gaston from "@/public/images/Gaston.webp";

export const metadata: Metadata = {
  title:
    "Nuestra Filosofía: Creado por un Psicólogo, para Colegas | Espacio Pisama",
  description:
    "Conoce la historia detrás de Espacio Pisama. Un espacio fundado desde la experiencia para ofrecer autonomía, flexibilidad y una comunidad profesional estable.",
};

// --- COMPONENTES DE LA PÁGINA ---

const HeroSection = () => (
  <section className="bg-background py-12">
    <div className="container max-w-4xl mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="relative mx-auto h-[450px] w-full max-w-sm overflow-hidden rounded-lg shadow-2xl">
            <Image
              src={Gaston}
              alt="Retrato de Gastón, fundador de Espacio Pisama"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80vw, 400px"
              priority
            />
          </div>
        </div>
        <div className="text-center md:col-span-3 md:text-left">
          <h1 className="text-4xl font-bold text-primary-500 lg:text-5xl">
            Creado por un Colega, para Colegas.
          </h1>
          <p className="mt-6 font-sans text-xl text-foreground/80">
            <strong>Espacio Pisama</strong> no es un simple negocio de alquiler.
            Es la respuesta a una pregunta que me hice durante años como
            psicólogo: "¿Por qué nadie ha creado el lugar de trabajo que los
            profesionales independientes realmente necesitamos?". Nació de esa
            frustración y, sobre todo, del deseo de construirlo yo mismo.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const StorySection = () => (
  <section className="py-6">
    <div className="container mx-auto max-w-4xl px-4 lg:px-8">
      <div className="text-primary text-base/loose">
        <h2 className="text-2xl font-bold pb-4">
          Mi nombre es Gastón, y soy psicólogo.
        </h2>
        <p className="pb-4">
          Durante los primeros años de mi práctica, como muchos de ustedes, mi
          realidad fue un peregrinaje constante por distintos consultorios.
          Conocí de primera mano la frustración de las agendas desactualizadas,
          la incertidumbre de esperar una confirmación para poder agendar a un
          paciente y la rigidez de sistemas que no entendían la naturaleza
          fluctuante de nuestra profesión.
        </p>

        <blockquote className="py-3 border-l-4 border-secondary-500 pl-6 italic text-foreground/70">
          "Soñaba con un lugar donde la gestión fuera invisible."
        </blockquote>

        <h2 className="text-2xl font-bold py-4">
          De la Frustración a la Solución
        </h2>
        <p className="pb-8">
          Me di cuenta de que la mayoría de los espacios no estaban diseñados
          pensando en nuestras necesidades reales. Faltaba autonomía,
          flexibilidad y, a menudo, un ambiente que realmente inspirara calma.
          Así nació <strong>Espacio Pisama</strong>. No como un negocio
          inmobiliario, sino como una solución a los problemas que yo mismo
          viví.
        </p>
      </div>
    </div>
  </section>
);

const PillarsSection = () => (
  <section className="bg-content1/60 py-20 sm:py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h2 className="font-display text-4xl font-bold text-primary-500">
          Los 4 Pilares de Espacio Pisama
        </h2>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Pilar 1 */}
        <Card className="bg-background/50 text-center shadow-2xl w-5/6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <CardBody className="p-8">
            <FaPersonRays className="mx-auto h-12 w-12 text-secondary-500" />
            <h3 className="mt-6 font-display text-2xl font-bold text-primary-500">
              Autonomía Total para el Profesional
            </h3>
            <p className="mt-4 font-sans text-foreground/80">
              Creemos que debes tener el control de tu tiempo. Nuestra
              plataforma es el corazón de esta filosofía. Tu agenda, tus reglas,
              sin intermediarios.
            </p>
          </CardBody>
        </Card>
        {/* Pilar 2 */}
        <Card className="bg-background/50 text-center shadow-2xl w-5/6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <CardBody className="p-8">
            <FaHandshake className="mx-auto h-12 w-12 text-secondary-500" />
            <h3 className="mt-6 font-display text-2xl font-bold text-primary-500">
              Flexibilidad y Transparencia
            </h3>
            <p className="mt-4 font-sans text-foreground/80">
              Nuestros precios son claros y nuestras políticas están diseñadas
              para adaptarse a vos y apoyarte en tu crecimiento.
            </p>
          </CardBody>
        </Card>
        {/* Pilar 3 */}
        <Card className="bg-background/50 text-center shadow-2xl w-5/6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <CardBody className="p-8">
            <GrGrow className="mx-auto h-12 w-12 text-secondary-500" />
            <h3 className="mt-6 font-display text-2xl font-bold text-primary-500">
              Un Entorno que Cuida y Potencia
            </h3>
            <p className="mt-4 font-sans text-foreground/80">
              Sabemos que el ambiente es fundamental en nuestro trabajo. Por eso
              cada espacio está pensado para ser un refugio de profesionalismo,
              serenidad y bienestar.
            </p>
          </CardBody>
        </Card>
        {/* Pilar 4 */}
        <Card className="bg-background/50 text-center shadow-2xl w-5/6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <CardBody className="p-8">
            <FaUsers className="mx-auto h-12 w-12 text-secondary-500" />
            <h3 className="mt-6 font-display text-2xl font-bold text-primary-500">
              Asociaciones a Largo Plazo
            </h3>
            <p className="mt-4 font-sans text-foreground/80">
              No buscamos clientes, buscamos colegas. Nuestro sistema premia tu
              crecimiento porque apostamos por una comunidad profesional estable
              y de mutuo beneficio.
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  </section>
);

const CtaSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 text-center lg:px-8">
      <h2 className="font-display text-4xl font-bold text-primary-500">
        Una Invitación Personal
      </h2>
      <p className="mx-auto py-6 max-w-2xl font-sans text-lg text-foreground/80">
        <strong>Espacio Pisama</strong> es el resultado de una búsqueda
        personal, y hoy crece gracias a los colegas que confían en nosotros. Si
        compartes estos valores, te invito a formar parte de nuestro espacio.
      </p>
      <div className="my-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button
          as={Link}
          href="/consultorios"
          className="bg-primary-500 font-display font-semibold text-primary-foreground"
          size="lg"
        >
          Ver Nuestros Espacios
        </Button>
        <Button
          as={Link}
          href="/contacto"
          variant="bordered"
          className="border-secondary-500 font-display font-semibold text-secondary-500"
          size="lg"
        >
          Contáctame
        </Button>
      </div>
    </div>
  </section>
);

// --- PÁGINA PRINCIPAL QUE ENSAMBLA TODO ---
export default function NuestraFilosofiaPage(): JSX.Element {
  return (
    <>
      <HeroSection />
      <StorySection />
      <PillarsSection />
      <CtaSection />
    </>
  );
}
