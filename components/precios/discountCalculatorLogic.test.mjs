// Behavior tests for the discount calculator pricing logic.
//
// These tests import the ACTUAL production helper
// (./discountCalculatorLogic.ts) and assert its discount, final prices and
// weekly saving — they never reimplement the threshold logic.
//
// Run with: npm test (Node >= 22, native node:test, no dependencies).
// The .mjs extension keeps this file outside tsc (tsconfig only includes
// **/*.ts/*.tsx) while Node type-stripping resolves the explicit .ts import.

import { describe, it } from "node:test";
import assert from "node:assert/strict";

import {
  PRECIO_ESTANDAR,
  PRECIO_PREMIUM,
  calculateDiscount,
  getDiscountInfo,
} from "./discountCalculatorLogic.ts";

describe("discount calculator base prices", () => {
  it("uses Premium = 270 and Estandar = 220", () => {
    assert.equal(PRECIO_PREMIUM, 270);
    assert.equal(PRECIO_ESTANDAR, 220);
  });
});

describe("discount thresholds, final prices and weekly saving", () => {
  // hours, expected discount, expected final Premium, expected final
  // Estandar, expected weekly saving (hours * discount).
  const cases = [
    { hours: 0, discount: 0, premium: 270, estandar: 220, saving: 0 },
    { hours: 1, discount: 0, premium: 270, estandar: 220, saving: 0 },
    { hours: 3, discount: 0, premium: 270, estandar: 220, saving: 0 },
    { hours: 4, discount: 20, premium: 250, estandar: 200, saving: 80 },
    { hours: 5, discount: 20, premium: 250, estandar: 200, saving: 100 },
    { hours: 7, discount: 20, premium: 250, estandar: 200, saving: 140 },
    { hours: 8, discount: 40, premium: 230, estandar: 180, saving: 320 },
    { hours: 11, discount: 40, premium: 230, estandar: 180, saving: 440 },
    { hours: 12, discount: 60, premium: 210, estandar: 160, saving: 720 },
    { hours: 15, discount: 60, premium: 210, estandar: 160, saving: 900 },
    { hours: 16, discount: 80, premium: 190, estandar: 140, saving: 1280 },
    { hours: 19, discount: 80, premium: 190, estandar: 140, saving: 1520 },
    { hours: 20, discount: 100, premium: 170, estandar: 120, saving: 2000 },
    { hours: 21, discount: 100, premium: 170, estandar: 120, saving: 2100 },
    { hours: 24, discount: 100, premium: 170, estandar: 120, saving: 2400 },
  ];

  for (const { hours, discount, premium, estandar, saving } of cases) {
    it(`${hours}h/week -> discount $${discount}, premium $${premium}, estandar $${estandar}, saving $${saving}`, () => {
      assert.equal(getDiscountInfo(hours).discount, discount);
      assert.deepEqual(calculateDiscount(hours), {
        discount,
        finalPricePremium: premium,
        finalPriceEstandar: estandar,
        weeklySaving: saving,
      });
    });
  }
});
