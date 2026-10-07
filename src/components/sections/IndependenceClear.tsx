import Link from "next/link";

const notThis = [
  {
    title: "Not an Electro City branded store",
    copy: "You are not buying a branded franchise front. Your company name goes on the unit. Retail signs like “Car Batteries for Sale” are yours. A Unitech board shows the product line you stock.",
  },
  {
    title: "Not marketed as a franchise",
    copy: "You are not buying a playbook, royalties, mystery shops, or head-office control of your till. The intended model is a fitted retail container sale, then wholesale supply. Final characterisation depends on signed contracts and how the relationship is operated.",
  },
  {
    title: "Not three package tiers",
    copy: "One Business in a Box. Final stock and tools lock on a written bill of materials. No multi-tier franchise ladder.",
  },
  {
    title: "Not shared systems",
    copy: "Bring your own POS, accounting, and IT. Electro City does not install, control, or see those tools. Your numbers stay yours.",
  },
];

const isThis = [
  "Buy the fitted 6m container and opening Unitech stock",
  "Trade under your own company name and signage",
  "Unitech product board, not an Electro City store fascia",
  "Unlock operator / special wholesale pricing for supply",
  "Buyer-side zoning, site CoC, scrap registration, insurance",
];

export function IndependenceClear() {
  return (
    <section className="section-y bg-paper-soft">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
            Model clarity
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-wide text-blue-deep md:text-4xl">
            Buy a fitted shop unit. Then you run it.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft md:text-base">
            Once the container is yours, placement, range, hours, and systems
            are your decisions. Electro City’s intended ongoing role is supply
            at operator pricing. That relationship is designed to sit outside
            franchise control — but only signed contracts and attorney review
            can confirm CPA characterisation before launch.
          </p>
        </div>

        <div className="mt-8 grid items-stretch gap-4 md:grid-cols-2">
          {notThis.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[10.5rem] flex-col border border-line bg-paper p-5"
            >
              <p className="font-display text-lg font-bold tracking-wide text-blue-deep">
                {item.title}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                {item.copy}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 border border-blue/25 bg-blue-deep p-5 text-paper md:p-6">
          <p className="font-display text-xl font-bold tracking-wide">
            What you are actually looking at
          </p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {isThis.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm text-blue-mist">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-red" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/the-asset"
              className="bg-paper px-4 py-2.5 text-sm font-semibold text-blue-deep hover:bg-blue-mist"
            >
              See the package
            </Link>
            <Link
              href="/ownership"
              className="border border-white/35 px-4 py-2.5 text-sm font-semibold text-paper hover:bg-white/10"
            >
              Ownership detail
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
