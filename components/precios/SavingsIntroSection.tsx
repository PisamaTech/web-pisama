import { Divider } from "@heroui/divider";
import { JSX } from "react";
import { FaHeart } from "react-icons/fa"; // Un icono que representa la confianza y la relación

export default function SavingsIntroSection(): JSX.Element {
  return (
    <section className="sm:py-16 py-14">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center mb-8">
            <Divider className="flex-grow" />
            <FaHeart className="h-8 w-8 text-terracotta-suave mx-4 flex-shrink-0" />
            <Divider className="flex-grow" />
          </div>

          <h2 className="font-display text-4xl font-bold text-marron-cafe">
            Premiamos tu confianza, impulsamos tu práctica.
          </h2>

          <p className="mt-6 font-sans text-lg leading-relaxed text-marron-cafe/90">
            Entendemos que tu éxito es nuestro éxito. Por eso, hemos creado un
            sistema de ahorro automático que te recompensa a medida que tu
            práctica crece. No necesitas comprar paquetes ni comprometerte a
            nada.
            <br />
            <br />
            Simplemente, cuanto más utilices nuestros consultorios en una
            semana, más económico se vuelve el costo de cada hora. Es nuestra
            forma de agradecer tu confianza y de invertir en una relación
            profesional a largo plazo.
          </p>
        </div>
      </div>
    </section>
  );
}
