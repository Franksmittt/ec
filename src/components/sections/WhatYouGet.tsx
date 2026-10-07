import {
  BOM_BATTERIES,
  BOM_BATTERY_TOTAL_UNITS,
  BOM_EQUIPMENT,
} from "@/lib/bom";

const batteryList = BOM_BATTERIES.map(
  (line) => `Unitech ${line.code} ×${line.qty} (25-month warranty)`,
);

const equipmentList = BOM_EQUIPMENT.map(
  (line) => `${line.name} · ${line.qty}`,
);

const included = [
  {
    title: "The physical store",
    items: [
      "Ready-made retail container fitted to trade",
      "3× battery stands for floor display",
      "Unitech signage (standard set)",
      "Battery catalogues (multiple)",
    ],
  },
  {
    title: "Opening Unitech batteries",
    items: [
      `${BOM_BATTERY_TOTAL_UNITS} batteries across ${BOM_BATTERIES.length} Unitech models`,
      "Every listed line carries a 25-month warranty on the package flyer",
      "Mix includes flooded / standard codes plus 658AGM, 668AGM, and 652AGM",
      "Exact codes and quantities as scheduled on the bill of materials",
    ],
  },
  {
    title: "Testing & charge equipment",
    items: [
      "Load tester ×1",
      "Battery charger ×1",
      "Battery test printer ×1",
      "Your own POS, accounting, and IT. Electro City does not supply, control, or see those systems",
    ],
  },
  {
    title: "After you buy (intended model)",
    items: [
      "The container is yours to place and operate",
      "Electro City’s ongoing role is wholesale supply, including operator / special pricing access for buyers of the asset",
      "No franchise royalties, marketing levies, ops manual, or visibility into your till software",
      "Scrap trading is optional — the opening package does not require scrap to start",
    ],
  },
];

const notIncluded = [
  "VAT (unless a final quote states otherwise), delivery, and crane/placement",
  "Land, lease, or shopping-centre bay rental",
  "Municipal zoning, SDP, or temporary-building approvals",
  "Site-specific grid / solar connection CoC beyond the container’s internal CoC (where applicable)",
  "POS, accounting software, computers, and any shared access to your systems",
  "Staff wages, insurance, and working capital after opening stock",
  "SAPS Second-Hand Goods registration if you later choose to buy scrap",
  "Ongoing local marketing and Google Business Profile work",
];

export function WhatYouGet() {
  return (
    <section className="section-y bg-paper">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-wide text-blue-deep md:text-4xl">
            Exactly what you are buying
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft md:text-base">
            One ready-made store package: the fitted container, Unitech opening
            batteries, stands, signage, catalogues, and testing equipment.
            After handover, Electro City supplies product at operator pricing.
            Indicative entry from R150,000 excluding VAT unless confirmed in
            writing. Written sale documents remain final if any flyer line
            differs.
          </p>
        </div>

        <div className="mt-8 grid items-stretch gap-4 md:grid-cols-2">
          {included.map((group) => (
            <div
              key={group.title}
              className="flex min-h-[14rem] flex-col border border-line bg-paper-soft/40 p-5"
            >
              <h3 className="font-display text-xl font-bold tracking-wide text-blue-deep">
                {group.title}
              </h3>
              <ul className="mt-3 flex-1 space-y-2 text-sm text-ink-soft">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <div className="border border-line bg-paper p-5 md:p-6">
            <h3 className="font-display text-xl font-bold tracking-wide text-blue-deep">
              Opening battery schedule
            </h3>
            <p className="mt-2 text-sm text-ink-soft">
              All lines · 25-month warranty · quantities from the package flyer
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-1.5 text-sm text-ink-soft sm:grid-cols-2">
              {batteryList.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-line bg-paper p-5 md:p-6">
            <h3 className="font-display text-xl font-bold tracking-wide text-blue-deep">
              Equipment & marketing kit
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              {equipmentList.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-ink-soft">
              Flyer note: scrap is not required to start trading. If you later
              buy scrap batteries, SAPS / environmental rules still apply.
            </p>
          </div>
        </div>

        <div className="mt-4 border border-line bg-paper-soft p-5 md:p-6">
          <h3 className="font-display text-xl font-bold tracking-wide text-blue-deep md:text-2xl">
            Not included in the indicative R150,000-class package
          </h3>
          <ul className="mt-4 grid gap-2.5 text-sm text-ink-soft sm:grid-cols-2">
            {notIncluded.map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
