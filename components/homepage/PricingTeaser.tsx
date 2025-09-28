import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function PricingTeaser() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="max-w-2xl mx-auto text-4xl font-bold text-primary">
            Una <span className="text-secondary">Tarifa</span> que Premia tu
            Crecimiento.
          </h2>
          <p className="mt-6 font-sans text-lg text-primary/90">
            Nos alejamos de las cuponeras rígidas y los compromisos fijos que no
            entienden la realidad de nuestra profesión. En{" "}
            <strong>Espacio Pisama</strong>, hemos creado un sistema de precios
            simple y transparente: solo pagas por las horas que necesitas.
            Además, diseñamos un modelo de descuentos automáticos que premia tu
            fidelidad, haciendo que la hora te cueste menos mientras más usas el
            espacio. Sin sorpresas, sin ataduras.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2">
          {/* Card para Consultorio Premium */}
          <div className="rounded-lg bg-content1 border-1 border-content3 p-8 text-center shadow-lg hover:scale-104 transition-transform duration-200">
            <h3 className="font-display text-2xl font-bold text-primary">
              Consultorio Premium
            </h3>
            <Divider className="my-4" />
            <p className="my-4 font-sans text-xl text-primary/70 ">
              Precio base: $250 / hora
            </p>
            <p className="font-display font-bold text-secondary">
              <span className="text-3xl">Hasta</span>{" "}
              <span className="text-6xl">$150</span>
              <span className="text-3xl"> / hora</span>
            </p>
            <p className="mt-4 font-sans text-sm text-primary">
              con nuestro modelo de ahorro inteligente
            </p>
          </div>

          {/* Card para Consultorio Estándar */}
          <div className="rounded-lg bg-content1 border-1 border-content3 p-8 text-center shadow-lg hover:scale-104 transition-transform duration-200">
            <h3 className="font-display text-2xl font-bold text-primary">
              Consultorio Estándar
            </h3>
            <Divider className="my-4" />
            <p className="my-4 font-sans text-xl text-primary/70 ">
              Precio base: $200 / hora
            </p>
            <p className="font-display font-bold text-secondary">
              <span className="text-3xl">Hasta</span>{" "}
              <span className="text-6xl">$100</span>
              <span className="text-3xl"> / hora</span>
            </p>
            <p className="mt-4 font-sans text-sm text-primary">
              con nuestro modelo de ahorro inteligente
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button
            as={Link}
            href="/precios"
            className="bg-secondary font-display font-semibold text-white shadow-lg"
            variant="solid"
            size="lg"
            endContent={<FaArrowRight />} // Añadimos un icono para mayor claridad
          >
            Conoce nuestro sistema de ahorro
          </Button>
        </div>
      </div>
    </section>
  );
}
