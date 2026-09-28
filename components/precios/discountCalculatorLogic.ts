// Pure discount calculation logic for the DiscountCalculator component.
//
// This module is intentionally framework-free (no React, no "use client")
// so it can be imported by client components and by Node behavior tests.
// Base prices follow the updated naming: Premium = 270, Standard = 220.

export const PRECIO_PREMIUM = 270;
export const PRECIO_ESTANDAR = 220;

export type DiscountInfo = {
  discount: number;
};

export type DiscountResult = DiscountInfo & {
  finalPricePremium: number;
  finalPriceEstandar: number;
  weeklySaving: number;
};

export const getDiscountInfo = (hours: number): DiscountInfo => {
  if (hours >= 20) return { discount: 100 };
  if (hours >= 16) return { discount: 80 };
  if (hours >= 12) return { discount: 60 };
  if (hours >= 8) return { discount: 40 };
  if (hours >= 4) return { discount: 20 };

  return { discount: 0 };
};

export const calculateDiscount = (hours: number): DiscountResult => {
  const { discount } = getDiscountInfo(hours);

  return {
    discount,
    finalPricePremium: PRECIO_PREMIUM - discount,
    finalPriceEstandar: PRECIO_ESTANDAR - discount,
    weeklySaving: hours * discount,
  };
};
