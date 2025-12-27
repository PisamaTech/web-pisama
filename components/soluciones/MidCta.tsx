import { Button } from "@heroui/button";
import Link from "next/link";

interface MidCtaProps {
  title?: string;
  highlightedText?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function MidCta({
  title = "¿Listo para encontrar",
  highlightedText = "tu consultorio ideal?",
  buttonText = "Ver Disponibilidad Ahora",
  buttonHref = "/disponibilidad",
}: MidCtaProps) {
  return (
    <section className="bg-primary py-12 lg:py-16">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
          {title}{" "}
          <span className="text-secondary-300">{highlightedText}</span>
        </h2>
        <Button
          as={Link}
          href={buttonHref}
          size="lg"
          radius="md"
          className="mt-6 bg-white font-semibold text-primary hover:bg-gray-100"
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
