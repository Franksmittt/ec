import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ExtraRevenueStreams } from "@/components/sections/ExtraRevenueStreams";
import { SupplierTrust } from "@/components/sections/SupplierTrust";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Electro City | Supply Partner",
  description:
    "Electro City history since 1985, national branches, 15,000+ auto-electrical product lines, and how independent container operators can use the wider catalogue.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Electro City"
        title="A long-running auto-electrical wholesaler behind the box"
        description="The container opportunity sits on top of a national wholesale business that has supplied batteries, alternators, starters, and workshop parts for decades. That depth is the point of the supply relationship."
      />
      <SupplierTrust />
      <ExtraRevenueStreams />
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
          <h2 className="font-display text-3xl font-bold tracking-wide text-blue-deep">
            Why this matters for a container owner
          </h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
            You are not inventing supply from scratch. Electro City already
            serves workshops and spares shops from Johannesburg, Pretoria,
            Bloemfontein, Durban, and Cape Town, with thousands of lines and a
            delivery fleet. Your container is the retail face. Their warehouses
            are the bench. Because you are independent, you can stay battery-led
            or grow into related auto-electrical work when you have the people
            and the demand.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/prospectus"
              className="bg-blue px-5 py-3 text-sm font-semibold text-paper hover:bg-blue-deep"
            >
              Request prospectus
            </Link>
            <Link
              href="/the-asset"
              className="border border-line px-5 py-3 text-sm font-semibold text-blue-deep"
            >
              What you get in the box
            </Link>
            <a
              href="https://electro-city.co.za/"
              target="_blank"
              rel="noreferrer"
              className="border border-line px-5 py-3 text-sm font-semibold text-blue-deep"
            >
              electro-city.co.za
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
