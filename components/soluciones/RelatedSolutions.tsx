import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import Link from "next/link";

interface RelatedSolution {
  title: string;
  description: string;
  href: string;
  emoji: string;
}

interface RelatedSolutionsProps {
  currentProfession: string;
  solutions: RelatedSolution[];
}

export default function RelatedSolutions({
  currentProfession,
  solutions,
}: RelatedSolutionsProps) {
  // Filtrar la profesión actual y tomar solo 3
  const relatedSolutions = solutions
    .filter((sol) => !sol.href.includes(currentProfession))
    .slice(0, 3);

  return (
    <section className="py-16 mt-16 bg-content1 rounded-2xl">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">
        Otras Soluciones para Profesionales
      </h2>
      <p className="text-center text-foreground/80 mb-8">
        Espacio PISAMA también ofrece consultorios especializados para:
      </p>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto justify-items-center">
        {relatedSolutions.map((solution) => (
          <Link key={solution.href} href={solution.href}>
            <Card
              isPressable
              className="hover:scale-105 transition-transform h-full bg-content2/80"
            >
              <CardBody className="text-center">
                <div className="text-5xl mb-3">{solution.emoji}</div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {solution.title}
                </h3>
                <p className="text-sm text-foreground/70">
                  {solution.description}
                </p>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button
          as={Link}
          href="/soluciones"
          color="secondary"
          variant="shadow"
          size="lg"
          className="font-semibold"
        >
          Ver todas las soluciones
        </Button>
      </div>
    </section>
  );
}
