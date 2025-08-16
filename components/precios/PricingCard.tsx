import Link from "next/link";
import { Card } from "@heroui/card";
import { Button } from "@heroui/button";
import { FaCheckCircle } from "react-icons/fa";
import clsx from "clsx";
import { FC } from "react";

interface PricingCardProps {
  title: string;
  price: number;
  description: string;
  features: string[];
  isFeatured: boolean;
}

const PricingCard: FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  isFeatured,
}) => {
  const cardClasses = clsx("flex h-full flex-col rounded-2xl p-8 shadow-lg", {
    "bg-marron-cafe text-crema-suave ring-4 ring-terracotta-suave": isFeatured,
    "bg-crema-suave text-marron-cafe": !isFeatured,
  });

  const textColor = isFeatured ? "text-crema-suave" : "text-marron-cafe";
  const mutedTextColor = isFeatured
    ? "text-gris-calido"
    : "text-marron-cafe/90";

  return (
    <Card className={cardClasses}>
      <h3 className={`font-display text-2xl font-bold ${textColor}`}>
        {title}
      </h3>
      <p className={`mt-4 font-sans ${mutedTextColor}`}>{description}</p>
      <div className="mt-6">
        <span className={`font-display text-5xl font-bold ${textColor}`}>
          ${price}
        </span>
        <span className={`ml-2 font-sans ${mutedTextColor}`}>por hora</span>
      </div>
      <ul className="mt-8 flex-grow space-y-3">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`flex items-center font-sans ${textColor}`}
          >
            <FaCheckCircle className="mr-3 h-5 w-5 text-terracotta-suave" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-8">
        <Button
          as={Link}
          href="/disponibilidad"
          className={clsx("w-full font-display font-semibold", {
            "bg-terracotta-suave text-white hover:bg-terracotta-suave/90":
              isFeatured,
            "bg-marron-cafe text-crema-suave hover:bg-marron-cafe/90":
              !isFeatured,
          })}
          variant="solid"
        >
          Ver Disponibilidad
        </Button>
      </div>
    </Card>
  );
};

export default PricingCard;
