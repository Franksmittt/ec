export type PartSocialSpec = { label: string; value: string };

export type PartSocialSlide = {
  /** Angle key used in filenames / captions */
  angle: "side" | "front" | "rear";
  image: string;
  caption: string;
  /** Specs highlighted while this angle is showing */
  specs: PartSocialSpec[];
};

export type PartSocialProduct = {
  sku: string;
  oem: string;
  title: string;
  category: string;
  blurb: string;
  images: {
    side: string;
    front: string;
    rear: string;
  };
  specs: PartSocialSpec[];
  /** Carousel: each angle paired with its own spec focus */
  slides: PartSocialSlide[];
  fitment: { series: string; detail: string }[];
  engines: string;
  hashtags: string[];
};

export const ALT1072: PartSocialProduct = {
  sku: "ALT1072",
  oem: "0120469006",
  title: "Alternator",
  category: "Auto-electrical",
  blurb:
    "Premium replacement alternator for classic BMW M30 and M50 applications. Keep the electrical system charged and dependable.",
  images: {
    side: "/product-parts/ALT1072a.png",
    front: "/product-parts/ALT1072b.png",
    rear: "/product-parts/ALT1072c.png",
  },
  specs: [
    { label: "Voltage", value: "12V" },
    { label: "Amperage", value: "105A" },
    { label: "Rotation", value: "CW" },
    { label: "Regulator", value: "IR / EF" },
    { label: "Pulley", value: "6-Groove" },
    { label: "Weight", value: "±6.4 kg" },
  ],
  slides: [
    {
      angle: "side",
      image: "/product-parts/ALT1072a.png",
      caption: "Charging output you can rely on",
      specs: [
        { label: "Voltage", value: "12V" },
        { label: "Amperage", value: "105A" },
      ],
    },
    {
      angle: "front",
      image: "/product-parts/ALT1072b.png",
      caption: "Drive side — pulley ready",
      specs: [
        { label: "Rotation", value: "CW" },
        { label: "Pulley", value: "6-Groove" },
      ],
    },
    {
      angle: "rear",
      image: "/product-parts/ALT1072c.png",
      caption: "Internal regulator · external fan",
      specs: [
        { label: "Regulator", value: "IR / EF" },
        { label: "Weight", value: "±6.4 kg" },
      ],
    },
  ],
  fitment: [
    { series: "BMW 3 Series (E36)", detail: "320i, 325i · 1992–1995" },
    { series: "BMW 5 Series (E34)", detail: "520i, 525i · 1990–1994" },
  ],
  engines: "M50B20 · M50B25 · M30",
  hashtags: [
    "#BMW",
    "#BMWE36",
    "#BMWE34",
    "#Alternator",
    "#CarParts",
    "#AutoElectrical",
    "#BMWRestoration",
    "#ALT1072",
    "#BMWM50",
    "#AutoRepair",
    "#AftermarketParts",
  ],
};
