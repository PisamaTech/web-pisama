import { FC } from "react";
import { FaCheckCircle } from "react-icons/fa";

/**
 * Basado en la estructura de `consultoriosData.js`, este es el tipo de dato
 * que el componente espera para un "espacio".
 * Podría moverse a un archivo de tipos compartido (ej: `src/types.ts`)
 */
type Space = {
  name: string;
  price?: number; // El precio es opcional, como en los espacios comunes
  description: string;
  features: string[];
};

interface InfoPanelProps {
  space: Space | null;
}

const InfoPanel: FC<InfoPanelProps> = ({ space }) => {
  if (!space) return null;

  return (
    <div className="p-4">
      <h2 className="font-display text-4xl font-bold text-marron-cafe">
        {space.name}
      </h2>
      {space.price && (
        <p className="mt-2 font-display text-3xl font-semibold text-terracotta-suave">
          ${space.price} <span className="text-lg font-sans">/ hora</span>
        </p>
      )}
      <p className="mt-6 font-sans text-lg text-marron-cafe/90">
        {space.description}
      </p>
      <div className="mt-8">
        <h3 className="mb-4 font-display text-xl font-bold text-marron-cafe">
          Características:
        </h3>
        <ul className="space-y-3">
          {space.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center font-sans text-marron-cafe"
            >
              <FaCheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-terracotta-suave" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoPanel;
