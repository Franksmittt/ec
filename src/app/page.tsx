import { Hero } from "@/components/sections/Hero";
import { HomePathways } from "@/components/sections/HomePathways";
import { HonestTimeline } from "@/components/sections/HonestTimeline";
import { HowItActuallyRuns } from "@/components/sections/HowItActuallyRuns";
import { IndependenceClear } from "@/components/sections/IndependenceClear";
import { MarketProof } from "@/components/sections/MarketProof";
import { ScrapRevenue } from "@/components/sections/ScrapRevenue";
import { SupplierTrust } from "@/components/sections/SupplierTrust";
import { ThreeMoneyModels } from "@/components/sections/ThreeMoneyModels";
import { ExtraRevenueStreams } from "@/components/sections/ExtraRevenueStreams";
import { ConceptImage } from "@/components/ui/ConceptImage";
import { generateElectroCitySchema } from "@/lib/schema";
import Link from "next/link";

export default function HomePage() {
  const schema = generateElectroCitySchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero />
      <MarketProof />
      <IndependenceClear />
      <section className="section-y bg-paper">
        <div className="mx-auto grid max-w-6xl items-stretch gap-6 px-5 md:grid-cols-2 md:gap-10 md:px-8">
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-3xl font-bold tracking-wide text-blue-deep md:text-4xl">
              A retail battery shop in a container
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft md:text-base">
              One fitted ready-made retail package with Unitech opening stock
              (flyer schedule), testing tools, stands, and signage. You buy it.
              After handover, Electro City supplies at operator pricing under the
              intended independent model — not marketed as a franchise. Your POS
              and books stay yours. Exact inclusions lock on the written sale
              documents.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              You still need a legal site, marketing, correct diagnostics, and
              working capital. Where you site it and what you sell next is your
              call.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
            <Link
                href="/the-asset#walkthrough"
                className="bg-blue px-5 py-2.5 text-sm font-semibold text-paper hover:bg-blue-deep"
              >
                See what you get
              </Link>
              <Link
                href="/ownership"
                className="border border-line px-5 py-2.5 text-sm font-semibold text-blue-deep hover:border-blue"
              >
                Why the independent model
              </Link>
            </div>
          </div>
          <ConceptImage
            src="/concept/interior-fitout.jpg"
            alt="Concept interior of an independent container battery shop with Unitech stock wall"
            label="Concept · interior fit-out"
            className="h-full min-h-[16rem] border border-line"
            aspect="aspect-auto min-h-[16rem] md:min-h-full"
          />
        </div>
      </section>
      <ThreeMoneyModels />
      <SupplierTrust />
      <ExtraRevenueStreams />
      <HonestTimeline />
      <HowItActuallyRuns />
      <HomePathways />
      <ScrapRevenue />
      <section className="section-y border-t border-line bg-paper">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-bold tracking-wide text-blue-deep md:text-3xl">
              Request the prospectus when you are ready
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              Area, timeline, site status. We talk fit before anyone pretends
              the numbers are guaranteed.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/prospectus"
              className="bg-blue px-5 py-2.5 text-sm font-semibold text-paper hover:bg-blue-deep"
            >
              Get prospectus
            </Link>
            <Link
              href="/compliance"
              className="border border-line px-5 py-2.5 text-sm font-semibold text-blue-deep hover:border-blue"
            >
              Compliance pack
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
