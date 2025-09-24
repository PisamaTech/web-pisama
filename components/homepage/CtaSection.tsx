import { Button } from "@heroui/button";
import Link from "next/link";

interface CtaSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function CtaSection({
  title,
  description,
  buttonText,
  buttonLink,
}: CtaSectionProps) {
  return (
    <section className="relative py-20 bg-primary-500 text-white">
      {/* Patrón decorativo opcional */}
      <div className="absolute inset-0 bg-[url('/patterns/waves.svg')] bg-bottom bg-no-repeat bg-cover opacity-10 pointer-events-none scale-y-[-1]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        <p className="text-lg mb-8 text-white/90">{description}</p>

        <Link href={buttonLink}>
          <Button
            size="lg"
            radius="full"
            className="bg-white text-primary-600 font-semibold px-8 py-6 hover:bg-gray-100 transition-colors"
          >
            {buttonText}
          </Button>
        </Link>
      </div>
    </section>
  );
}
