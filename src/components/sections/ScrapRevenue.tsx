import Link from "next/link";
import {
  DEFAULT_WEIGHT_KG,
  SCRAP_KG_MAX,
  SCRAP_KG_MIN,
  formatZarExact,
} from "@/lib/economics";
import { ConceptImage } from "@/components/ui/ConceptImage";

export function ScrapRevenue() {
  const low = DEFAULT_WEIGHT_KG * SCRAP_KG_MIN;
  const high = DEFAULT_WEIGHT_KG * SCRAP_KG_MAX;

  const band = [
    {
      value: `R${SCRAP_KG_MIN.toFixed(2)}-${SCRAP_KG_MAX.toFixed(2)}/kg`,
      label: "Illustrative scrap band in the calculator",
    },
    {
      value: `${formatZarExact(low)}-${formatZarExact(high)}`,
      label: `Example at ~${DEFAULT_WEIGHT_KG} kg (rates move)`,
    },
    {
      value: "SAPS first",
      label: "Register before you plan scrap cash flow",
    },
  ];

  return (
    <section className="section-y relative overflow-hidden bg-blue text-paper">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),transparent_60%)]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl items-stretch gap-6 px-5 md:grid-cols-12 md:gap-8 md:px-8">
        <div className="flex flex-col md:col-span-7">
          <h2 className="font-display text-3xl font-bold tracking-wide md:text-4xl">
            Scrap is optional — not required to open
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-blue-mist md:text-base">
            The ready-made store is built to trade Unitech product without
            depending on scrap. The package flyer is clear: no scrap needed to
            start. If you later choose to buy scrap batteries, that can be a
            second income line — only where you are lawfully registered. Franchise
            models often fold old units into the franchisor recycling chain. The
            intended Electro City model lets the independent operator retain
            scrap they lawfully collect. Controlled goods usually need SAPS
            Second-Hand Goods registration, registers, and safe storage before
            this stream is real.
          </p>

          <div className="mt-6 grid flex-1 items-stretch gap-3 sm:grid-cols-3">
            {band.map((item) => (
              <div
                key={item.label}
                className="flex min-h-[8.5rem] flex-col justify-between border border-white/20 bg-white/10 p-4"
              >
                <p className="font-display text-xl font-bold tracking-wide md:text-2xl">
                  {item.value}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-blue-mist">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/calculator"
              className="bg-paper px-5 py-2.5 text-sm font-semibold text-blue-deep transition hover:bg-blue-mist"
            >
              Model scrap volumes →
            </Link>
            <Link
              href="/compliance"
              className="border border-white/40 px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-white/10"
            >
              Scrap compliance notes
            </Link>
          </div>
        </div>

        <div className="md:col-span-5">
          <ConceptImage
            src="/concept/scrap-storage.jpg"
            alt="Concept visualisation of lawful bunded scrap battery storage beside an independent battery shop"
            label="Concept · lawful scrap staging"
            className="h-full min-h-[14rem] border border-white/20"
            aspect="aspect-auto min-h-[14rem] md:min-h-full"
          />
        </div>
      </div>
    </section>
  );
}
