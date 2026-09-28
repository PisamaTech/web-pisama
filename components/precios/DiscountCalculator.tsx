"use client";
import { Slider } from "@heroui/slider";
import React, { useState, useMemo } from "react";

import { calculateDiscount } from "./discountCalculatorLogic";

export default function DiscountCalculator() {
  // TIPADO: Especificamos que el estado 'hours' es un número
  const [hours, setHours] = useState<number>(0);

  const { finalPricePremium, finalPriceEstandar, weeklySaving } = useMemo(
    () => calculateDiscount(hours),
    [hours],
  );

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
