/** Electro City ignition modules — sourced from EC catalogue PDF + cross-refs. */

export type IgnitionModule = {
  /** Primary catalogue SKU / brand code */
  sku: string;
  /** Electro City internal stock number from catalogue */
  stockNo: string;
  /** Secondary / IGM cross-reference when listed on the PDF */
  altCode?: string;
  title: string;
  /** Short application string from catalogue */
  application: string;
  /** Vehicle makes for filtering */
  makes: string[];
  pins?: string;
  notes?: string;
  /** Local image under /public when available */
  imageSrc?: string;
};

/**
 * Full line from Electro City “IGNITION MODULES” catalogue (Jun 2021 PDF).
 * Titles/applications enriched from Echlin / Mobiletron / SA wholesale listings
 * where the catalogue line was terse or mistyped.
 */
export const IGNITION_MODULES: IgnitionModule[] = [
  {
    sku: "IG-D1909H",
    stockNo: "213124",
    title: "Ignition module — Ford",
    application: "Ford applications (Hall-type module)",
    makes: ["Ford"],
    notes: "Catalogue: MODULE FORD",
    imageSrc: "/product-parts/ignition/213124.png",
  },
  {
    sku: "IG-D1918",
    stockNo: "213125",
    title: "Ignition module — Delco GM / Ford",
    application: "Delco GM style module used on Ford applications",
    makes: ["Ford", "GM"],
    notes: "Catalogue: MODUEL DELCO GM FORD",
    imageSrc: "/product-parts/ignition/213125.png",
  },
  {
    sku: "IG-D1941",
    stockNo: "213126",
    title: "Ignition module — Delco GM",
    application: "Delco GM ignition module",
    makes: ["GM"],
    notes: "Catalogue: MODUEL DELCO GM",
    imageSrc: "/product-parts/ignition/213126.png",
  },
  {
    sku: "IG-FT003",
    stockNo: "213127",
    altCode: "GA2140",
    title: "Ignition module — Ford / Peugeot / Renault / Fiat",
    application: "Multi-fit module for Ford, Peugeot, Renault and Fiat",
    makes: ["Ford", "Peugeot", "Renault", "Fiat"],
    notes: "Cross-ref GA2140 / Mobiletron IG-FT003 family",
    imageSrc: "/product-parts/ignition/213127.png",
  },
  {
    sku: "IG-H006",
    stockNo: "213128",
    altCode: "IGM049",
    title: "Ignition module — Opel Astra / Kadett / Monza",
    application: "6-pin module for Opel Astra, Kadett and Monza",
    makes: ["Opel"],
    pins: "6-pin",
    imageSrc: "/product-parts/ignition/213128.png",
  },
  {
    sku: "IG-H012",
    stockNo: "213129",
    altCode: "IGM011",
    title: "Ignition module — Audi / VW",
    application: "3-pin ECU-signal module for Audi / VW (Mobiletron IG-H012)",
    makes: ["Audi", "Volkswagen"],
    pins: "3-pin",
    notes: "Common OE cross: 867 905 352 · Bosch 1-227-022-030",
    imageSrc: "/product-parts/ignition/213129.png",
  },
  {
    sku: "IG-H013",
    stockNo: "213130",
    altCode: "IGM001",
    title: "Ignition module — Audi / VW",
    application: "6-pin module for Audi / VW (Mobiletron IG-H013)",
    makes: ["Audi", "Volkswagen"],
    pins: "6-pin",
    notes: "Common OE cross: 867 905 351 · Bosch 1-227-030-049",
  },
  {
    sku: "IG-M008",
    stockNo: "213133",
    title: "Ignition module — Mazda / Mitsubishi",
    application: "3-terminal module for Mazda and Mitsubishi",
    makes: ["Mazda", "Mitsubishi"],
    pins: "3-terminal",
  },
  {
    sku: "IG-M009",
    stockNo: "213134",
    altCode: "IGM032",
    title: "Ignition module — Mitsubishi / Chrysler / Hyundai",
    application: "Module for Mitsubishi, Chrysler and Hyundai",
    makes: ["Mitsubishi", "Chrysler", "Hyundai"],
  },
  {
    sku: "IG-T003",
    stockNo: "220547",
    title: "Ignition module — Fiat / Peugeot / Renault",
    application: "Module for Fiat, Peugeot and Renault",
    makes: ["Fiat", "Peugeot", "Renault"],
  },
  {
    sku: "J304",
    stockNo: "213135",
    title: "Ignition module — Mitsubishi / Nissan 12V",
    application: "12V 6-terminal module for Mitsubishi and Nissan",
    makes: ["Mitsubishi", "Nissan"],
    pins: "6-terminal",
  },
  {
    sku: "NM746",
    stockNo: "220634",
    altCode: "IGM056",
    title: "Ignition module — Toyota 1982–1990",
    application: "Toyota ignition module for 1982–1990 applications",
    makes: ["Toyota"],
    imageSrc: "/product-parts/ignition/NM746.jpg",
  },
  {
    sku: "TP1000M",
    stockNo: "213136",
    altCode: "IGM040",
    title: "Ignition module — Ford / Mazda magnetic trigger",
    application: "4-pin magnetic-trigger module for Ford / Mazda",
    makes: ["Ford", "Mazda"],
    pins: "4-pin",
    notes: "Echlin listings: Ford/Mazda magnetic type",
    imageSrc: "/product-parts/ignition/213136.png",
  },
  {
    sku: "TP1003B",
    stockNo: "213140",
    altCode: "IGM005",
    title: "Ignition module — BMW 5 Series",
    application: "6-pin module for BMW 518i / 520 / 520i (6-cyl applications)",
    makes: ["BMW"],
    pins: "6-pin",
    notes: "Echlin TP1003B · often listed for BMW 5 Series electronic ignition",
    imageSrc: "/product-parts/ignition/213140.png",
  },
  {
    sku: "TP1005B",
    stockNo: "213139",
    altCode: "IGM008",
    title: "Ignition module — Opel 1.6 / 1.8",
    application: "Module for Opel 1.6 SE / 1.8 SV / SE",
    makes: ["Opel"],
    imageSrc: "/product-parts/ignition/213139.png",
  },
  {
    sku: "TP1007B",
    stockNo: "220667",
    altCode: "IGM039",
    title: "Ignition module — Mercedes-Benz",
    application: "1-pin & 4-pin Mercedes ignition module (200 / 230 / 280E class)",
    makes: ["Mercedes-Benz"],
    pins: "1-pin / 4-pin",
    notes: "Common OE cross family: Bosch 0 227 100 023 / 0 227 100 042",
    imageSrc: "/product-parts/ignition/220667.png",
  },
  {
    sku: "TP100BH",
    stockNo: "213144",
    altCode: "IGM006",
    title: "Ignition module — Hall trigger",
    application: "7-pin Hall-type trigger module",
    makes: ["Universal"],
    pins: "7-pin",
    imageSrc: "/product-parts/ignition/213144.png",
  },
  {
    sku: "TP1010NS",
    stockNo: "213145",
    altCode: "IGM046",
    title: "Ignition module — Nissan Pulsar / Sentra",
    application: "Module for Nissan Pulsar / Sentra (2-pin Echlin listing)",
    makes: ["Nissan"],
    pins: "2-pin",
    imageSrc: "/product-parts/ignition/213145.png",
  },
  {
    sku: "TP1012L",
    stockNo: "213147",
    altCode: "IGM034",
    title: "Ignition module — Opel Astra / Kadett / Monza",
    application: "4-pin module for Opel Astra / Corsa / Kadett 1.4 / 1.6",
    makes: ["Opel"],
    pins: "4-pin",
    imageSrc: "/product-parts/ignition/213147.png",
  },
  {
    sku: "TP1015B",
    stockNo: "TP1015B",
    altCode: "IGM058",
    title: "Ignition module — VW Golf / Jetta 2.0 8V",
    application: "3-pin TCI module for VW Golf / Jetta 2.0L 8V",
    makes: ["Volkswagen"],
    pins: "3-pin",
    notes: "Catalogue lists TP1015B / IGM058 (stock line without numeric stockNo)",
    imageSrc: "/product-parts/ignition/TP1015B.png",
  },
  {
    sku: "TP116",
    stockNo: "220670",
    altCode: "IGM027",
    title: "Ignition module — Nissan",
    application: "4-terminal Nissan ignition module",
    makes: ["Nissan"],
    pins: "4-terminal",
    imageSrc: "/product-parts/ignition/220670.png",
  },
  {
    sku: "TP189",
    stockNo: "220422",
    altCode: "IGM052",
    title: "Ignition module — Toyota Corolla 1.3 / 1.6",
    application: "Magnetic-type module for Toyota Corolla 1.3 / 1.6",
    makes: ["Toyota"],
  },
  {
    sku: "TP49",
    stockNo: "213152",
    altCode: "IGM016",
    title: "Ignition module — Delco GM 7-pin",
    application: "7-pin Delco GM ignition module (Opel Delco magnetic type listings)",
    makes: ["GM", "Opel"],
    pins: "7-pin",
  },
  {
    sku: "TP700",
    stockNo: "213155",
    altCode: "IGM020",
    title: "Ignition module — Ford Sierra / Sapphire",
    application: "Module for Ford Sierra and Sapphire",
    makes: ["Ford"],
  },
  {
    sku: "TP800D",
    stockNo: "213156",
    altCode: "IGM048",
    title: "Ignition module — Opel Kadett / Monza",
    application: "6-pin module for Opel Astra / Kadett / Monza 1.6",
    makes: ["Opel"],
    pins: "6-pin",
  },
  {
    sku: "TP900B",
    stockNo: "213157",
    altCode: "IGM012",
    title: "Ignition module — VW Kombi / Golf / Jetta",
    application: "7-pin Bosch Hall-type module for VW Golf / Jetta 1.6 / 1.8 and Kombi",
    makes: ["Volkswagen"],
    pins: "7-pin",
    notes: "Common OE cross: 191 905 351 A/B/C · Bosch 0 227 100 142 / 147",
    imageSrc: "/product-parts/ignition/TP900B.jpg",
  },
];

export const IGNITION_MODULE_COUNT = IGNITION_MODULES.length;

export const IGNITION_MAKES = Array.from(
  new Set(IGNITION_MODULES.flatMap((p) => p.makes)),
).sort((a, b) => a.localeCompare(b));
