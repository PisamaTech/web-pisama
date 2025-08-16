import PricingCard from "@/components/precios/PricingCard";
import FaqSection from "@/components/precios/FaqSection";

const pricingData = [
  {
    title: "Consultorio Íntimo",
    price: 200,
    description:
      "La opción ideal para sesiones individuales que buscan un entorno funcional, acogedor y eficiente.",
    features: [
      "Espacio optimizado",
      "Dos cómodos sillones",
      "Mesa de apoyo",
      "Máxima privacidad",
    ],
    isFeatured: false,
  },
  {
    title: "Consultorio Estándar",
    price: 250,
    description:
      "Amplitud, diseño y luz natural para una experiencia superior. Perfecto para potenciar tu imagen profesional.",
    features: [
      "Mayor amplitud y confort",
      "Diván y sillones de diseño",
      "Luz natural y cálida",
      "Ideal para terapia de pareja",
    ],
    isFeatured: true, // Destacamos este plan
  },
];

export default function PreciosPage() {
  return (
    <>
      {/* Sección Principal de Precios */}
      <section className="bg-gris-calido/40 py-20 sm:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h1 className="font-display text-5xl font-bold text-marron-cafe">
              Invierte en tu práctica, no en un alquiler fijo.
            </h1>
            <p className="mt-6 font-sans text-lg text-marron-cafe/90">
              Te ofrecemos tarifas claras y un modelo flexible diseñado para
              acompañar tu crecimiento profesional. Sin sorpresas, sin
              contratos.
            </p>
          </div>

          <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
            {pricingData.map((plan) => (
              <PricingCard
                key={plan.title}
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                isFeatured={plan.isFeatured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sección de FAQ */}
      <FaqSection />
    </>
  );
}
