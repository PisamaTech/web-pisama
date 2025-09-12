import PricingCard from "@/components/precios/PricingCard";
import FaqSection from "@/components/precios/FaqSection";
import DiscountCalculator from "@/components/precios/DiscountCalculator"; // Importamos la nueva calculadora
import SavingsIntroSection from "@/components/precios/SavingsIntroSection";
import ComparisonTable from "@/components/precios/ComparisonTable";
import DiscountsSection from "@/components/precios/DiscountsSection";
import { pricingData } from "@/src/pricingData";
import CtaSection from "@/components/homepage/CtaSection";

export default function PreciosPage() {
  return (
    <>
      {/* Sección 1: Tarjetas de Precios Base */}
      <section className="bg-gris-calido/40 py-20 sm:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h1 className="font-display text-5xl font-bold text-marron-cafe">
              Precios claros y flexibles para tu práctica profesional.
            </h1>
            <p className="mt-6 font-sans text-lg text-marron-cafe/90">
              Te presentamos nuestras tarifas base, transparentes y sin
              sorpresas. A continuación, te mostraremos cómo puedes reducirlas
              significativamente.
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
      <section className="bg-crema-suave ">
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
      <section className="bg-gris-calido/40 py-20 sm:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-4xl font-bold text-marron-cafe">
              La Diferencia está en la Libertad
            </h2>
          </div>
          <ComparisonTable /> {/* <-- Lo insertas aquí */}
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
