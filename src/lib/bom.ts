/** Opening bill of materials from Electro City / Unitech ready-made store flyer. */

export type BomBatteryLine = {
  code: string;
  qty: number;
  tech: "Lead acid" | "AGM";
  warrantyMonths: 25;
};

export type BomEquipmentLine = {
  name: string;
  qty: string;
  note?: string;
};

/** Unitech opening batteries — flyer schedule (all 25-month warranty). */
export const BOM_BATTERIES: BomBatteryLine[] = [
  { code: "628", qty: 2, tech: "Lead acid", warrantyMonths: 25 },
  { code: "646", qty: 2, tech: "Lead acid", warrantyMonths: 25 },
  { code: "652", qty: 2, tech: "Lead acid", warrantyMonths: 25 },
  { code: "647", qty: 2, tech: "Lead acid", warrantyMonths: 25 },
  { code: "618", qty: 2, tech: "Lead acid", warrantyMonths: 25 },
  { code: "616", qty: 2, tech: "Lead acid", warrantyMonths: 25 },
  { code: "615", qty: 2, tech: "Lead acid", warrantyMonths: 25 },
  { code: "668", qty: 2, tech: "Lead acid", warrantyMonths: 25 },
  { code: "658", qty: 2, tech: "Lead acid", warrantyMonths: 25 },
  { code: "630", qty: 2, tech: "Lead acid", warrantyMonths: 25 },
  { code: "650", qty: 2, tech: "Lead acid", warrantyMonths: 25 },
  { code: "658AGM", qty: 2, tech: "AGM", warrantyMonths: 25 },
  { code: "668AGM", qty: 2, tech: "AGM", warrantyMonths: 25 },
  { code: "652AGM", qty: 2, tech: "AGM", warrantyMonths: 25 },
];

export const BOM_BATTERY_TOTAL_UNITS = BOM_BATTERIES.reduce(
  (sum, line) => sum + line.qty,
  0,
);

/** Tools, stands, and marketing kit on the flyer. */
export const BOM_EQUIPMENT: BomEquipmentLine[] = [
  { name: "Load tester", qty: "1" },
  { name: "Battery charger", qty: "1" },
  { name: "Battery test printer", qty: "1" },
  { name: "Unitech signage", qty: "Standard set" },
  { name: "Battery stands", qty: "3" },
  { name: "Battery catalogues", qty: "Multiple" },
];

export const BOM_SUMMARY =
  "Fitted ready-made retail container supplied with Unitech batteries and battery products, testing equipment, stands, signage, and catalogues as scheduled below.";
