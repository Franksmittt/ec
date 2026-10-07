import type { Metadata } from "next";
import { LampsAndLedCatalog } from "@/components/parts/LampsAndLedCatalog";
import { PageHero } from "@/components/layout/PageHero";
import { LAMP_PRODUCT_COUNT } from "@/lib/parts/lampsAndLed";

export const metadata: Metadata = {
  title: "Lamps & LED Lighting | Parts",
  description:
    "Electro City lamps and LED lighting catalogue — work lights, light bars, side markers, strobes, truck and trailer lamps. Search by SKU or category.",
};

export default function LampsAndLedPage() {
  return (
    <>
      <PageHero
        crumb="Parts / Lamps & LED lighting"
        title="Lamps & LED lighting"
        description={`${LAMP_PRODUCT_COUNT} lamps from the Electro City lighting catalogue — truck and trailer, work lights, light bars, markers, and strobes. Search by part code or category, then enquire for live stock.`}
      />
      <LampsAndLedCatalog />
    </>
  );
}
