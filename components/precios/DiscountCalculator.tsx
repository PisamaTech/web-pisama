"use client";
import { Slider } from "@heroui/slider";
import React, { useState, useMemo } from "react";

// Precios base actualizados con la nueva nomenclatura
const PRECIO_PREMIUM = 250;
const PRECIO_ESTANDAR = 200;

// TIPADO: Definimos el tipo de retorno de nuestra función de cálculo
type DiscountInfo = {
  discount: number;
};

const getDiscountInfo = (hours: number): DiscountInfo => {
  if (hours >= 20) return { discount: 100 };
  if (hours >= 16) return { discount: 80 };
  if (hours >= 12) return { discount: 60 };
  if (hours >= 8) return { discount: 40 };
  if (hours >= 4) return { discount: 20 };

  return { discount: 0 };
};

export default function DiscountCalculator() {
  // TIPADO: Especificamos que el estado 'hours' es un número
  const [hours, setHours] = useState<number>(0);

  const { discount } = useMemo(() => getDiscountInfo(hours), [hours]);

  const finalPricePremium = PRECIO_PREMIUM - discount;
  const finalPriceEstandar = PRECIO_ESTANDAR - discount;
  const weeklySaving = hours * discount;

  return (
    <div className="mx-auto w-full max-w-2xl rounded-lg bg-crema-suave p-8 shadow-lg">
      <h3 className="text-center font-display text-2xl font-bold text-marron-cafe">
        Desliza y descubre tu ahorro
      </h3>
      <Slider
        className="mt-6"
        value={hours}
        // TIPADO: El evento onChange puede devolver un 'number' o 'number[]'.
        // Hacemos una comprobación para asegurarnos de que solo procesamos el número.
        classNames={{
          label: "font-sans font-bold text-marron-cafe",
          track: "bg-gris-calido",
          filler: "bg-terracotta-suave",
        }}
        label="Horas por semana"
        maxValue={24}
        minValue={1}
        step={1}
        onChange={(value) => {
          if (typeof value === "number") {
            setHours(value);
          }
        }}
      />
      <div className="mt-8 grid grid-cols-2 gap-6 text-center">
        <div className="rounded-md bg-gris-calido/50 p-4">
          <p className="font-sans text-sm text-marron-cafe/80">
            Precio Consultorios Premium
          </p>
          <p className="font-display text-3xl font-bold text-terracotta-suave">
            ${finalPricePremium}
          </p>
        </div>
        <div className="rounded-md bg-gris-calido/50 p-4">
          <p className="font-sans text-sm text-marron-cafe/80">
            Precio Consultorio Estándar
          </p>
          <p className="font-display text-3xl font-bold text-terracotta-suave">
            ${finalPriceEstandar}
          </p>
        </div>
      </div>
      {weeklySaving > 0 && (
        <div className="mt-6 rounded-md bg-terracotta-suave/20 p-4 text-center">
          <p className="font-display text-xl font-bold text-marron-cafe">
            ¡Estás ahorrando ${weeklySaving} esa semana!
          </p>
        </div>
      )}
    </div>
  );
}
