// src/components/consultorios/ConsultorioTypes.tsx
import { JSX } from "react";

import { pricingData } from "@/src/pricingData";

import TypesCard from "./TypesCard";

export default function ConsultorioTypes(): JSX.Element {
  return (
    <section className="py-2">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
          {pricingData.map((plan) => (
            <TypesCard key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
