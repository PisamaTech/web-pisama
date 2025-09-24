import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";

// TIPADO: Definimos la interfaz para las props del componente
interface TypesCardProps {
  title: string;
  price: number;
  priceSubtitle: string;
  description: string;
  features: string[];
  isFeatured: boolean;
}

export default function TypesCard({
  title,
  description,
  features,
  isFeatured,
}: TypesCardProps) {
  const cardClasses = isFeatured
    ? "bg-marron-cafe text-crema-suave ring-4 ring-terracotta-suave"
    : "bg-crema-suave text-marron-cafe ring-1 ring-gray-300";

  return (
    <Card
      className={`relative flex h-full flex-col overflow-visible p-8 shadow-lg hover:scale-[1.03] transition-transform ${cardClasses}`}
    >
      {isFeatured && (
        <Chip
          color="warning"
          variant="shadow"
          size="lg"
          startContent={<MdOutlineFavoriteBorder className="h-5 w-5" />}
          className="absolute z-10 -right-3 -top-3 text-default text-sm bg-linear-to-t/srgb from-yellow-400 to-yellow-500"
        >
          Más elegido
        </Chip>
      )}
      <h3 className="font-display text-2xl font-bold mb-3 text-left">
        {title}
      </h3>
      <Divider />
      <p
        className={`mt-4 font-sans text-left ${isFeatured ? "text-gris-calido" : "text-marron-cafe/90"}`}
      >
        {description}
      </p>
      <ul className="mt-8 space-y-3 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center font-sans">
            <FaCheckCircle className="mr-3 h-5 w-5 text-terracotta-suave" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-8">
        <Button
          as={Link}
          href="/precios"
          className={`w-full font-display font-semibold ${isFeatured ? "bg-terracotta-suave text-white" : "bg-marron-cafe text-crema-suave"}`}
          variant="solid"
        >
          Ver Precios
        </Button>
      </div>
    </Card>
  );
}
