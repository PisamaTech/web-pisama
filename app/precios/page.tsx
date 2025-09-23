import { Metadata } from "next";

import PricingCard from "@/components/precios/PricingCard";
import FaqSection from "@/components/precios/FaqSection";
import DiscountCalculator from "@/components/precios/DiscountCalculator"; // Importamos la nueva calculadora
import SavingsIntroSection from "@/components/precios/SavingsIntroSection";
import ComparisonTable from "@/components/precios/ComparisonTable";
import DiscountsSection from "@/components/precios/DiscountsSection";
import { pricingData } from "@/src/pricingData";
import CtaSection from "@/components/homepage/CtaSection";

export const metadata: Metadata = {
  title:
    "Precios y Ahorros Flexibles | Alquiler de Consultorios | Espacio Pisama",
  description:
    "Descubre nuestras tarifas. Ahorra hasta $100/hora con nuestro sistema de descuentos por volumen. ¡Sin contratos ni paquetes fijos!",
};

export default function PreciosPage() {
  return (
    <>
      {/* Sección 1: Tarjetas de Precios Base */}
      <section className="bg-content2/50 py-20 sm:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h1 className="font-display text-5xl font-bold text-marron-cafe">
              Precios claros y flexibles para tu práctica profesional.
            </h1>
            <p className="mt-6 font-sans text-lg text-marron-cafe/90">
              En <strong>Espacio Pisama</strong> creemos en la{" "}
              <strong>transparencia y la flexibilidad</strong>. Nuestro sistema
              de precios está diseñado para adaptarse a tu ritmo de trabajo, sin
              contratos, sin pagos por adelantado y sin sorpresas. Paga por lo
              que usas y obtené beneficios por tu constancia.
            </p>
          </div>
          <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
            {pricingData.map((plan) => (
              <PricingCard key={plan.title} {...plan} />
            ))}
          </div>
        </div>
      </section>
      {/* Sección 2: Encabezado */}
      <section className="bg-content1 ">
        <SavingsIntroSection />
        <DiscountsSection />
      </section>
      {/* SECCIÓN 3: LA CALCULADORA INTERACTIVA (VERSIÓN MEJORADA) */}
      <section className="bg-gris-calido py-20 sm:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* 1. Nuevo Encabezado para la Sección */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="font-display text-4xl font-bold text-marron-cafe">
              Visualiza tu Ahorro: Tu Tarifa Personalizada
            </h2>
            <p className="mt-6 font-sans text-lg text-marron-cafe/90">
              Esta herramienta es nuestra promesa de transparencia en acción. No
              queremos que solo nos creas, queremos que lo veas por ti mismo.
              Mueve el control deslizante para simular la cantidad de horas que
              podrías usar en una semana y observa cómo tu tarifa por hora
              disminuye en tiempo real. Este es el poder de un modelo flexible
              diseñado para crecer contigo, sin la necesidad de paquetes fijos
              ni compromisos.
            </p>
          </div>
          <DiscountCalculator />
          {/* 3. (Opcional) Pequeño texto de cierre */}
          <p className="mt-8 text-center font-sans text-sm text-marron-cafe/70">
            Nota: El descuento se calcula automáticamente a fin de cada semana
            sobre el total de horas semanales. ¡Así de simple!
          </p>
        </div>
      </section>

      {/* Sección 3: La Comparativa */}
      <section className="bg-content2/80 py-20 sm:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-4xl font-bold text-marron-cafe">
              La Diferencia está en la Libertad
            </h2>
            <p className="mt-6 font-sans text-lg text-marron-cafe/90">
              Olvídate de las cuponeras que vencen y te obligan a comprar horas
              que quizás no uses. Nuestro sistema inteligente analiza tus horas
              reservadas cada semana y aplica un descuento automático a todas
              ellas.
            </p>
          </div>
          <ComparisonTable />
        </div>
      </section>

      {/* Sección 4: FAQ (Actualizar FaqSection.tsx también sería ideal) */}
      <FaqSection />

      <CtaSection
        title="¿Convencido? Empieza a disfrutar de la flexibilidad"
        description="Regístrate en nuestra plataforma, explora la disponibilidad en tiempo real y reserva tu primer turno en menos de 5 minutos."
        buttonText="Ver Disponibilidad y Reservar"
        buttonLink="/disponibilidad"
      />
    </>
  );
}
