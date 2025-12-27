import { Card, CardBody } from "@heroui/card";
import { IconType } from "react-icons";

export interface Benefit {
  icon: IconType;
  title: string;
  description: string;
}

interface QuickBenefitsProps {
  title?: string;
  highlightedWord?: string;
  benefits: Benefit[];
}

export default function QuickBenefits({
  title = "¿Por qué elegir",
  highlightedWord = "Espacio Pisama?",
  benefits,
}: QuickBenefitsProps) {
  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="container mx-auto max-w-5xl px-4 lg:px-8">
        <h2 className="mb-12 text-center font-display text-3xl font-bold text-primary md:text-4xl">
          {title} <span className="text-secondary">{highlightedWord}</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <Card
                key={index}
                shadow="md"
                className="bg-content1 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-transparent hover:border-primary/10"
              >
                <CardBody className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md border border-secondary/20">
                    <Icon className="text-2xl text-secondary" />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-gray-800">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-default-600">
                    {benefit.description}
                  </p>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
