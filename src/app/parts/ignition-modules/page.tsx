import type { Metadata } from "next";
import { IgnitionModulesCatalog } from "@/components/parts/IgnitionModulesCatalog";
import { PageHero } from "@/components/layout/PageHero";
import { IGNITION_MODULE_COUNT } from "@/lib/parts/ignitionModules";

export const metadata: Metadata = {
  title: "Ignition Modules | Parts",
  description:
    "Electro City ignition module catalogue — search by SKU, stock number, IGM code, or vehicle make. Wholesale enquiries welcome.",
};

export default function IgnitionModulesPage() {
  return (
    <>
      <PageHero
        crumb="Parts / Ignition modules"
        title="Ignition modules"
        description={`${IGNITION_MODULE_COUNT} modules from the Electro City ignition catalogue. Search by part code, stock number, or make — then enquire for live stock and pricing.`}
      />
      <IgnitionModulesCatalog />
    </>
  );
}
