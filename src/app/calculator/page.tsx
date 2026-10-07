import type { Metadata } from "next";
import { EarningsCalculator } from "@/components/calculator/EarningsCalculator";
import { PageHero } from "@/components/layout/PageHero";
import { HonestTimeline } from "@/components/sections/HonestTimeline";
import { ThreeMoneyModels } from "@/components/sections/ThreeMoneyModels";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Earnings Calculator",
  description:
    "Compare high GP, low GP plus scrap, and middle GP models. Illustrative battery and scrap income. Not a guarantee.",
};

export default function CalculatorPage() {
  return (
    <>
      <PageHero
        crumb="Calculator"
        title="See what the volumes look like"
        description="Battery sales use an illustrative gross-profit band. Scrap uses R12.50-R16.50 per kg. Outputs are hypothetical, exclude many overheads, and are not CPA earning promises. You set retail prices."
      />
      <ThreeMoneyModels />
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <EarningsCalculator />
        </div>
      </section>
      <HonestTimeline />
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
          <h2 className="font-display text-3xl font-bold tracking-wide text-blue-deep">
            How to read the output without kidding yourself
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <p className="text-[15px] leading-relaxed text-ink-soft">
              <span className="font-semibold text-ink">
                Gross profit is not cash in your pocket.
              </span>{" "}
              Rent, wages, security, power, insurance, bank charges, and dead
              stock all come off after the GP line.
            </p>
            <p className="text-[15px] leading-relaxed text-ink-soft">
              <span className="font-semibold text-ink">Scrap rates move.</span>{" "}
              We keep scrap between R12.50 and R16.50 per kg because that is
              closer to what operators actually see. Low-GP strategies only work
              if scrap actually comes through the door.
            </p>
            <p className="text-[15px] leading-relaxed text-ink-soft">
              <span className="font-semibold text-ink">
                Site quality multiplies volume.
              </span>{" "}
              A shopping-centre parking bay with constant car flow can
              outperform a quiet yard by a wide margin. The calculator lets you
              model both.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/prospectus"
              className="bg-blue px-5 py-3 text-sm font-semibold text-paper hover:bg-blue-deep"
            >
              Request prospectus
            </Link>
            <Link
              href="/about"
              className="border border-line px-5 py-3 text-sm font-semibold text-blue-deep"
            >
              About the supplier
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
