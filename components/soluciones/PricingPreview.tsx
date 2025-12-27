import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

import { pricingData } from "@/src/pricingData";

interface PricingPreviewProps {
  showFeatures?: number;
  ctaText?: string;
  ctaHref?: string;
}

export default function PricingPreview({
  showFeatures = 4,
  ctaText = "Ver Disponibilidad",
  ctaHref = "/disponibilidad",
}: PricingPreviewProps) {
  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="container mx-auto max-w-4xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
            Precios <span className="text-secondary">Transparentes</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/70">
            Sin compromisos mensuales. Pagás solo las horas que usás, y cuantas
            más usás, más barato te sale.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 pt-4">
          {pricingData.map((plan, index) => (
            <Card
              key={index}
              shadow="lg"
              className={`relative overflow-visible transition-all duration-300 hover:shadow-xl ${
                plan.isFeatured
                  ? "border-2 border-secondary bg-white"
                  : "bg-content1"
              }`}
            >
              {plan.isFeatured && (
                <Chip
                  color="secondary"
                  variant="solid"
                  size="sm"
                  className="absolute -top-3 right-4 z-10"
                >
                  Más elegido
                </Chip>
              )}

              <CardHeader className="flex-col items-start gap-2 pb-0 pt-6 px-6">
                <h3 className="font-display text-xl font-bold text-gray-800">
                  {plan.title}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-secondary">
                    ${plan.price}
                  </span>
                  <span className="text-foreground/60">/hora</span>
                </div>
                <p className="text-sm text-secondary/80">
                  {plan.priceSubtitle}
                </p>
              </CardHeader>

              <Divider className="my-4" />

              <CardBody className="px-6 py-2">
                <ul className="space-y-3">
                  {plan.features.slice(0, showFeatures).map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCheck className="mt-1 flex-shrink-0 text-sm text-secondary" />
                      <span className="text-sm text-foreground/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardBody>

              <CardFooter className="px-6 pb-6 pt-4">
                <Button
                  as={Link}
                  href={ctaHref}
                  fullWidth
                  size="lg"
                  color={plan.isFeatured ? "secondary" : "primary"}
                  variant={plan.isFeatured ? "solid" : "bordered"}
                  className="font-semibold"
                >
                  {ctaText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="mt-10 text-center text-base text-foreground/60">
          ¿Querés conocer todos los descuentos por volumen?{" "}
          <Link href="/precios" className="font-semibold text-secondary">
            Ver tabla completa de precios
          </Link>
        </p>
      </div>
    </section>
  );
}
