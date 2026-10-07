import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { HowItActuallyRuns } from "@/components/sections/HowItActuallyRuns";
import { ResponsibilityMatrix } from "@/components/sections/ResponsibilityMatrix";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Expectations | Electro City",
  description:
    "What Electro City provides versus what the independent buyer must handle, including risk, marketing, and site work.",
};

export default function ExpectationsPage() {
  return (
    <>
      <PageHero
        crumb="Expectations"
        title="Clear expectations. Your shop. Your call."
        description="Electro City sells the fitted container. After handover, the ongoing job is wholesale supply. You control the business, site, POS, and day-to-day standards. No franchise playbook."
      />
      <ResponsibilityMatrix compact />

      <section className="section-y bg-paper-soft">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="font-display text-3xl font-bold tracking-wide text-blue-deep md:text-4xl">
            Straight talk on risk and effort
          </h2>
          <div className="mt-8 grid items-stretch gap-4 md:grid-cols-2">
            <div className="min-h-[12rem] border border-line bg-paper p-5 text-[15px] leading-relaxed text-ink-soft">
              <p className="font-semibold text-ink">It can fail</p>
              <p className="mt-3">
                Wrong site, no marketing, poor cash control, or ignoring
                municipal and scrap rules can sink a well-built container.
                Buying the asset is not the same as earning a living from it.
                Independence removes head-office fees. It also removes
                head-office rescue.
              </p>
            </div>
            <div className="min-h-[12rem] border border-line bg-paper p-5 text-[15px] leading-relaxed text-ink-soft">
              <p className="font-semibold text-ink">It can also work</p>
              <p className="mt-3">
                Demand is recurring in South African heat and traffic. Scrap can
                be a second line if you register and store lawfully. Operators
                who do well research the node, show up, test before they sell,
                and stay visible when cars refuse to start on a Monday morning.
              </p>
            </div>
            <div className="min-h-[12rem] border border-line bg-paper p-5 text-[15px] leading-relaxed text-ink-soft">
              <p className="font-semibold text-ink">What we will not pretend</p>
              <p className="mt-3">
                We will not sell you a passive investment story, a guaranteed
                payback, or a till printout from someone else’s flagship as if
                it were your future. Illustrative tools stay labelled
                illustrative.
              </p>
            </div>
            <div className="min-h-[12rem] border border-line bg-paper p-5 text-[15px] leading-relaxed text-ink-soft">
              <p className="font-semibold text-ink">What franchise models often add</p>
              <p className="mt-3">
                Brand standards, owner-presence clauses, approved-product locks,
                and audit systems can sit inside franchise agreements as breach
                conditions. This intended model does not use that control stack.
                Your standards are yours. So are the consequences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HowItActuallyRuns />

      <div className="border-t border-line bg-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-3 px-5 py-10 md:px-8">
          <Link
            href="/prospectus"
            className="bg-blue px-5 py-2.5 text-sm font-semibold text-paper hover:bg-blue-deep"
          >
            Request prospectus
          </Link>
          <Link
            href="/ownership"
            className="border border-line px-5 py-2.5 text-sm font-semibold text-blue-deep"
          >
            Ownership model
          </Link>
          <Link
            href="/calculator"
            className="border border-line px-5 py-2.5 text-sm font-semibold text-blue-deep"
          >
            Open calculator
          </Link>
        </div>
      </div>
    </>
  );
}
