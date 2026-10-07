import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContainerReveal } from "@/components/interactive/ContainerReveal";
import { ContainerWalkthrough } from "@/components/interactive/walkthrough/ContainerWalkthrough";
import { ContainerFloorPlan } from "@/components/sections/ContainerFloorPlan";
import { ThePackage } from "@/components/sections/ThePackage";
import { UnitechStockLineup } from "@/components/sections/UnitechStockLineup";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { ConceptImage } from "@/components/ui/ConceptImage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What You Get",
  description:
    "One Business in a Box: 6m fitted retail container, Unitech opening stock, operator wholesale pricing. Interactive 3D walkthrough and floor plan.",
};

export default function TheAssetPage() {
  return (
    <>
      <PageHero
        crumb="What you get"
        title="One package. Then it’s yours."
        description="Buy the fitted 6m retail container and opening Unitech stock. Walk the staff box in 3D, then check the research-backed floor plan. Fitment stays in the parking bay."
      />
      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-8 md:grid-cols-2 md:px-8">
          <ConceptImage
            src="/concept/hero-exterior.jpg"
            alt="Concept exterior of an independent container battery shop"
            label="Concept · exterior"
            aspect="aspect-[16/10]"
            className="border border-line"
            priority
          />
          <ConceptImage
            src="/concept/shopping-centre.jpg"
            alt="Concept placement of an independent container battery shop in a parking bay"
            label="Concept · parking-bay placement"
            aspect="aspect-[16/10]"
            className="border border-line"
          />
        </div>
      </section>
      <ThePackage />
      <WhatYouGet />
      <UnitechStockLineup />
      <ContainerWalkthrough />
      <ContainerFloorPlan />
      <ContainerReveal />
      <section className="border-t border-line bg-paper-soft">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
          <h2 className="font-display text-3xl font-bold tracking-wide text-blue-deep">
            Still unsure what lands on site?
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            The prospectus lists the current inventory sheet, diagnostic kit,
            and the compliance documents that travel with the container. Site
            works, leases, municipal approvals, and your own POS / accounting
            stack stay on your side of the line.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/prospectus"
              className="bg-blue px-5 py-2.5 text-sm font-semibold text-paper hover:bg-blue-deep"
            >
              Request prospectus
            </Link>
            <Link
              href="/expectations"
              className="border border-line px-5 py-2.5 text-sm font-semibold text-blue-deep"
            >
              What you must handle
            </Link>
            <Link
              href="/the-asset#walkthrough"
              className="border border-line px-5 py-2.5 text-sm font-semibold text-blue-deep"
            >
              Open 3D walkthrough
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
