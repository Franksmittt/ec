import type { Metadata } from "next";
import Link from "next/link";
import { PartsSocialStudio } from "@/components/parts/PartsSocialStudio";
import { ALT1072 } from "@/lib/parts/alt1072";

export const metadata: Metadata = {
  title: "Parts Social Templates",
  description:
    "Electro City Parts social media templates — 1:1 square and 9:16 vertical creatives for alternators and auto-electrical stock.",
  robots: { index: false, follow: false },
};

export default function PartsSocialPage() {
  return (
    <>
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-12">
          <p className="text-sm text-ink-soft">
            <Link href="/" className="hover:text-blue">
              Home
            </Link>
            {" / "}
            <span className="text-ink">Parts social templates</span>
          </p>
          <span className="accent-slash mt-5" aria-hidden />
          <h1 className="mt-4 font-display text-4xl font-bold tracking-wide text-blue-deep md:text-5xl">
            Parts social templates
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft md:text-base">
            Phone-first creatives for Electro City Parts — range heroes, collage
            specs, and switcher carousels in <strong className="text-ink">1:1</strong>{" "}
            and <strong className="text-ink">9:16</strong>. Light boards by
            default for mobile contrast.
          </p>
        </div>
      </section>

      <PartsSocialStudio product={ALT1072} />
    </>
  );
}
