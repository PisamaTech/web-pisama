import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa"; // Un icono para la lista de características

interface ConsultorioCardProps {
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  features: string[];
  priceLink: string;
}

export default function ConsultorioCard({
  imageUrl,
  altText,
  title,
  description,
  features,
  priceLink,
}: ConsultorioCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden bg-crema-suave shadow-lg">
      {/* Imagen del Consultorio */}
      <div className="relative h-64 w-full">
        <Image
          src={imageUrl}
          alt={altText}
          fill
          sizes="100%"
          quality={80}
          className="object-cover"
        />
      </div>

      {/* Contenido de la Tarjeta */}
      <CardBody className="flex flex-grow flex-col p-6">
        <h3 className="font-display text-2xl font-bold text-marron-cafe">
          {title}
        </h3>
        <p className="mt-2 flex-grow font-sans text-marron-cafe/90">
          {description}
        </p>
        {/* Lista de Características */}
        <ul className="mt-6 space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center font-sans text-marron-cafe"
            >
              <FaCheckCircle className="mr-3 h-5 w-5 text-terracotta-suave" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Botón de Acción */}
        <div className="mt-6">
          <Button
            as={Link}
            href={priceLink}
            className="w-full bg-terracotta-suave font-display font-semibold text-white"
            variant="solid"
          >
            Ver Tarifas
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
