import Link from "next/link";
import { Button } from "@heroui/button";
import { FaArrowRight } from "react-icons/fa";
import { Divider } from "@heroui/divider";

export default function PricingTeaser() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="max-w-2xl mx-auto text-4xl font-bold text-primary">
            Una <span className="text-secondary">Tarifa</span> que Premia tu
            Crecimiento.
          </h2>
          <p className="mt-6 font-sans text-lg text-marron-cafe/90">
            Buscamos construir relaciones profesionales a largo plazo, no
            simples transacciones. Por eso, diseñamos nuestro{" "}
            <span className="font-bold">sistema de ahorro inteligente.</span> Es
            una inversión en tu éxito y en nuestra estabilidad mutua. Cuanto más
            creces con nosotros, más te beneficias. Es nuestra forma de decirte
            que estamos comprometidos con tu desarrollo profesional, hoy y en el
            futuro.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2">
          {/* Card para Consultorio Premium */}
          <div className="rounded-lg bg-crema-suave p-8 text-center shadow-lg">
            <h3 className="font-display text-2xl font-bold text-marron-cafe">
              Consultorio Premium
            </h3>
            <Divider className="my-4" />
            <p className="my-4 font-sans text-xl text-marron-cafe/70 ">
              Precio base: $250 / hora
            </p>
            <p className="font-display font-bold text-terracotta-suave">
              <span className="text-3xl">Hasta</span>{" "}
              <span className="text-6xl">$150</span>
              <span className="text-3xl"> / hora</span>
            </p>
            <p className="mt-4 font-sans text-sm text-marron-cafe">
              con nuestro sistema de ahorro inteligente
            </p>
          </div>

          {/* Card para Consultorio Estándar */}
          <div className="rounded-lg bg-crema-suave p-8 text-center shadow-lg">
            <h3 className="font-display text-2xl font-bold text-marron-cafe">
              Consultorio Estándar
            </h3>
            <Divider className="my-4" />
            <p className="my-4 font-sans text-xl text-marron-cafe/70 ">
              Precio base: $200 / hora
            </p>
            <p className="font-display font-bold text-terracotta-suave">
              <span className="text-3xl">Hasta</span>{" "}
              <span className="text-6xl">$100</span>
              <span className="text-3xl"> / hora</span>
            </p>
            <p className="mt-4 font-sans text-sm text-marron-cafe">
              con nuestro sistema de ahorro inteligente
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button
            as={Link}
            href="/precios"
            className="bg-terracotta-suave font-display font-semibold text-white shadow-lg"
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
