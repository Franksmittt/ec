/** Honest illustrative economics for battery retail + scrap. */

export const GP_MIN = 0.15;
export const GP_MAX = 0.4;
export const SCRAP_KG_MIN = 12.5;
export const SCRAP_KG_MAX = 16.5;
/** Typical wet automotive battery weight band used for scrap estimates. */
export const WEIGHT_MIN_KG = 15;
export const WEIGHT_MAX_KG = 20;
export const DEFAULT_WEIGHT_KG = 17;
/** Sensible starting retail ASP for a mid-range Unitech replacement (editable). */
export const DEFAULT_RETAIL_PRICE = 1850;
export const DEFAULT_UNITS_PER_MONTH = 40;
export const DEFAULT_GP = 0.25;
export const DEFAULT_SCRAP_PER_KG = 14.5;

export type CalculatorInputs = {
  unitsPerMonth: number;
  retailPrice: number;
  gpMargin: number;
  scrapWeightKg: number;
  scrapPricePerKg: number;
  /** Share of sales where the customer hands in a scrap battery (0-1). */
  scrapReturnRate: number;
};

export type CalculatorResults = {
  monthlyRevenue: number;
  monthlyGrossProfit: number;
  annualGrossProfit: number;
  scrapUnitsPerMonth: number;
  monthlyScrapIncome: number;
  annualScrapIncome: number;
  monthlyTotal: number;
  annualTotal: number;
  scrapPerBattery: number;
};

export function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export function computeEconomics(input: CalculatorInputs): CalculatorResults {
  const units = Math.max(0, input.unitsPerMonth);
  const price = Math.max(0, input.retailPrice);
  const gp = clamp(input.gpMargin, GP_MIN, GP_MAX);
  const weight = clamp(input.scrapWeightKg, WEIGHT_MIN_KG, WEIGHT_MAX_KG);
  const scrapKg = clamp(input.scrapPricePerKg, SCRAP_KG_MIN, SCRAP_KG_MAX);
  const returnRate = clamp(input.scrapReturnRate, 0, 1);

  const monthlyRevenue = units * price;
  const monthlyGrossProfit = monthlyRevenue * gp;
  const scrapPerBattery = weight * scrapKg;
  const scrapUnitsPerMonth = units * returnRate;
  const monthlyScrapIncome = scrapUnitsPerMonth * scrapPerBattery;

  return {
    monthlyRevenue,
    monthlyGrossProfit,
    annualGrossProfit: monthlyGrossProfit * 12,
    scrapUnitsPerMonth,
    monthlyScrapIncome,
    annualScrapIncome: monthlyScrapIncome * 12,
    monthlyTotal: monthlyGrossProfit + monthlyScrapIncome,
    annualTotal: (monthlyGrossProfit + monthlyScrapIncome) * 12,
    scrapPerBattery,
  };
}

export function formatZar(value: number) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatZarExact(value: number) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}
