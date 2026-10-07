import Link from "next/link";
import { BOM_BATTERY_TOTAL_UNITS, BOM_BATTERIES } from "@/lib/bom";

const included = [
  "Ready-made retail container fitted to trade",
  `${BOM_BATTERY_TOTAL_UNITS} Unitech batteries across ${BOM_BATTERIES.length} models (25-month warranty lines)`,
  "Load tester, battery charger, and battery test printer",
  "3× battery stands, Unitech signage, and catalogues",
  "Operator access to Electro City wholesale / special supply pricing",
];

const afterSale = [
  "The store unit is yours to place and operate",
  "Unitech product presence on the package; your trading decisions day to day",
  "Where you site it, what you reorder, prices, hours, staff",
  "Your own POS, accounting, and IT stack",
  "Scrap is optional — not required to open (flyer: “No scrap needed”)",
];

export function ThePackage() {
  return (
    <section id="package" className="section-y bg-paper">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              One package
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-wide text-blue-deep md:text-4xl">
              Your own ready-made store
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft md:text-base">
              A complete, ready-to-operate store solution supplied with Unitech
              batteries and battery products — stock, stands, signage,
              catalogues, and core testing equipment on the opening schedule.
              Electro City’s ongoing job is wholesale supply, not owning your
              shop brand.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              Indicative entry{" "}
              <strong className="font-semibold text-ink">
                from R150,000 ex VAT
              </strong>
              . Final mix locks on written sale documents. Delivery, site works,
              and permits stay separate.
            </p>
            <Link
              href="/prospectus"
              className="mt-6 inline-block bg-blue px-5 py-2.5 text-sm font-semibold text-paper hover:bg-blue-deep"
            >
              Request package details →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            <div className="flex min-h-[18rem] flex-col border border-line bg-paper-soft/40 p-5">
              <p className="font-display text-lg font-bold tracking-wide text-blue-deep">
                What you buy
              </p>
              <ul className="mt-4 flex-1 space-y-2.5 text-sm text-ink-soft">
                {included.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex min-h-[18rem] flex-col border border-line bg-paper-soft/40 p-5">
              <p className="font-display text-lg font-bold tracking-wide text-blue-deep">
                What stays yours after handover
              </p>
              <ul className="mt-4 flex-1 space-y-2.5 text-sm text-ink-soft">
                {afterSale.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
