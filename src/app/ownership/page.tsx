import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ExtraRevenueStreams } from "@/components/sections/ExtraRevenueStreams";
import { FranchiseCompare } from "@/components/sections/FranchiseCompare";
import { IndependenceClear } from "@/components/sections/IndependenceClear";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ownership",
  description:
    "Buy the container under an independent asset + supply model. After handover Electro City supplies at operator pricing. Your POS and systems stay yours.",
};

export default function OwnershipPage() {
  return (
    <>
      <PageHero
        crumb="Ownership"
        title="Buy the box. Then it’s yours."
        description="You purchase a fitted retail container for your trade. After that, Electro City’s job is wholesale supply at operator pricing. Placement, range, systems, and day-to-day decisions stay with you."
      />

      <IndependenceClear />

      <section className="section-y bg-paper">
        <div className="mx-auto grid max-w-6xl items-stretch gap-6 px-5 md:grid-cols-2 md:px-8">
          <div className="border border-line p-5 md:p-6">
            <h2 className="font-display text-2xl font-bold tracking-wide text-blue-deep">
              Intended: asset sale + supply, not a franchise system
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              You are not joining a brand system. You are buying a movable
              retail asset. There are no intended royalties, marketing levies,
              ops manuals, or mystery-shop breach conditions. If contracts ever
              walked like a franchise, CPA franchise rules could apply. That is
              what this model is written to avoid.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              Buying the asset unlocks operator / special wholesale pricing for
              ongoing supply. That is a supply relationship, not permission to
              run your shop.
            </p>
          </div>
          <div className="border border-line p-5 md:p-6">
            <h2 className="font-display text-2xl font-bold tracking-wide text-blue-deep">
              What happens after you buy
            </h2>
            <ul className="mt-4 space-y-2.5 text-[15px] text-ink-soft">
              <li>You decide where the container sits.</li>
              <li>
                You put your own company name on the unit, plus retail signs
                like “Car Batteries” or “Car Batteries for Sale”.
              </li>
              <li>
                A Unitech product board shows what you stock. This is not an
                Electro City branded storefront.
              </li>
              <li>You set retail prices for your area.</li>
              <li>You run your own POS, accounting, and IT. We do not see it.</li>
              <li>
                Electro City keeps supplying product. The rest is up to you.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <FranchiseCompare compact />
      <ExtraRevenueStreams />

      <div className="border-t border-line bg-paper-soft">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-3 px-5 py-10 md:px-8">
          <Link
            href="/the-asset"
            className="bg-blue px-5 py-2.5 text-sm font-semibold text-paper hover:bg-blue-deep"
          >
            See the package
          </Link>
          <Link
            href="/compliance"
            className="border border-line px-5 py-2.5 text-sm font-semibold text-blue-deep"
          >
            Compliance pack
          </Link>
          <Link
            href="/calculator"
            className="border border-line px-5 py-2.5 text-sm font-semibold text-blue-deep"
          >
            Run the numbers
          </Link>
        </div>
      </div>
    </>
  );
}
