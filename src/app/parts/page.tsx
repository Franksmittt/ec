import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { IGNITION_MODULE_COUNT } from "@/lib/parts/ignitionModules";
import { LAMP_CATEGORIES, LAMP_PRODUCT_COUNT } from "@/lib/parts/lampsAndLed";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Parts",
  description:
    "Electro City parts catalogue — ignition modules, lamps and LED lighting. Search by part code or vehicle and enquire for stock and pricing.",
};

type Category = {
  href: string;
  title: string;
  blurb: string;
  meta: string;
  imageSrc?: string;
  imageAlt?: string;
};

const CATEGORIES: Category[] = [
  {
    href: "/parts/ignition-modules",
    title: "Ignition modules",
    blurb:
      "Electronic ignition modules for Toyota, Nissan, Ford, GM, VW and more. Search by SKU, stock number, IGM code or make.",
    meta: `${IGNITION_MODULE_COUNT} modules`,
    imageSrc: "/product-parts/ignition/213124.png",
    imageAlt: "Ignition module",
  },
  {
    href: "/parts/lamps-and-led",
    title: "Lamps & LED lighting",
    blurb:
      "Tail, marker, work, strobe and interior lamps plus LED light bars for cars, trucks and trailers.",
    meta: `${LAMP_PRODUCT_COUNT} products · ${LAMP_CATEGORIES.length} categories`,
  },
];

export default function PartsPage() {
  return (
    <>
      <PageHero
        crumb="Parts"
        title="Electro City parts"
        description="Browse the Electro City catalogue by category. Every line can be enquired on directly for live stock and wholesale pricing."
      />

      <section className="section-y bg-paper">
        <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            {CATEGORIES.map((c) => (
              <CategoryCard key={c.href} category={c} />
            ))}
          </div>

          <div className="mt-12 grid gap-4 border border-line bg-paper-soft p-5 md:grid-cols-[1fr_auto] md:items-center md:p-6">
            <div>
              <p className="font-display text-2xl font-bold tracking-wide text-blue-deep">
                Can&apos;t find a part?
              </p>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
                The online catalogue is growing. Send a part number or vehicle
                details and Electro City will check stock across branches.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="inline-flex min-h-11 items-center bg-blue px-4 text-sm font-semibold text-paper hover:bg-blue-deep"
              >
                {CONTACT.phoneDisplay}
              </a>
              <a
                href={`mailto:${CONTACT.email}?subject=${encodeURIComponent("Parts enquiry")}`}
                className="inline-flex min-h-11 items-center border border-line bg-paper px-4 text-sm font-semibold text-blue-deep hover:border-blue"
              >
                Email sales
              </a>
            </div>
          </div>

          <p className="mt-8 text-sm text-ink-soft">
            Marketing:{" "}
            <Link
              href="/parts/social"
              className="font-semibold text-blue hover:underline"
            >
              parts social media templates
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={category.href}
      className="group flex flex-col border border-line bg-paper transition-colors hover:border-blue"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-white">
        {category.imageSrc ? (
          <Image
            src={category.imageSrc}
            alt={category.imageAlt ?? category.title}
            fill
            className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
          />
        ) : (
          <LampsArt />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue">
          {category.meta}
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-wide text-blue-deep">
          {category.title}
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
          {category.blurb}
        </p>
        <span className="mt-auto inline-flex min-h-11 items-center pt-5 text-sm font-semibold text-blue group-hover:underline">
          Browse {category.title.toLowerCase()} →
        </span>
      </div>
    </Link>
  );
}

function LampsArt() {
  const lamps = [
    { color: "#d32f2f", glow: "rgba(211,47,47,0.35)" },
    { color: "#f9a825", glow: "rgba(249,168,37,0.35)" },
    { color: "#e3f2fd", glow: "rgba(144,202,249,0.45)" },
  ];
  return (
    <div className="flex h-full w-full items-center justify-center gap-6 bg-white">
      {lamps.map((l) => (
        <span
          key={l.color}
          className="block h-16 w-16 rounded-full border-2 border-blue-deep sm:h-20 sm:w-20"
          style={{
            backgroundColor: l.color,
            boxShadow: `0 0 36px 10px ${l.glow}`,
          }}
          aria-hidden
        />
      ))}
    </div>
  );
}
