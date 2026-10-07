import Link from "next/link";

const rows = [
  {
    metric: "Legal form",
    franchise: "Franchise agreement + ongoing brand control (CPA franchise rules)",
    electro:
      "You buy the container. Not sold as a franchise. Ongoing role is supply.",
  },
  {
    metric: "Entry capital (indicative)",
    franchise: "Typically much higher turnkey capital than a single fitted retail unit",
    electro: "From R150,000 ex VAT for the one package",
  },
  {
    metric: "Royalties & marketing levies",
    franchise: "Ongoing % of turnover is common",
    electro: "0% in the intended model",
  },
  {
    metric: "Shop brand / fascia",
    franchise: "Franchisor brand on the front. You trade as their store",
    electro:
      "Your company name + signs like “Car Batteries for Sale” + Unitech board. Not an Electro City storefront",
  },
  {
    metric: "What you may sell",
    franchise: "Often locked to one house brand and a narrow approved list",
    electro:
      "Opening Unitech stock, then your call on wider Electro City wholesale lines",
  },
  {
    metric: "Systems & data",
    franchise: "Often brand POS / reporting visibility to head office",
    electro: "Your own POS, IT, and accounting. Electro City does not see it",
  },
  {
    metric: "Scrap batteries",
    franchise: "Often reclaimed into the franchisor recycling chain",
    electro:
      "You retain scrap you lawfully collect and trade (SAPS / storage first)",
  },
  {
    metric: "Ops manual & audits",
    franchise:
      "Playbook, mystery shops, and brand standards can sit as breach conditions",
    electro: "None. After handover, operations are yours",
  },
  {
    metric: "After purchase",
    franchise: "Ongoing franchise relationship and brand rules",
    electro:
      "Yours to site and run. Electro City’s ongoing role is supply at operator pricing"
  },
  {
    metric: "Who sets retail prices",
    franchise: "Often constrained by brand systems",
    electro: "You set prices for your node",
  },
];

export function FranchiseCompare({ compact = false }: { compact?: boolean }) {
  return (
    <section className="bg-paper">
      <div
        className={`mx-auto max-w-6xl px-5 md:px-8 ${
          compact ? "py-10 md:py-12" : "section-y"
        }`}
      >
        {!compact && (
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-wide text-blue-deep md:text-4xl">
              Franchise control vs independent ownership
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft md:text-base">
              Battery retail franchises and an independent container asset are
              different products. This table is a model contrast, not an attack
              on any named brand. Final Electro City documents must still be
              attorney-settled.
            </p>
          </div>
        )}

        {compact && (
          <div className="mb-6 max-w-2xl">
            <h2 className="font-display text-2xl font-bold tracking-wide text-blue-deep md:text-3xl">
              Where franchise models diverge
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Generic franchise patterns versus the intended Electro City
              structure. Not a named-competitor comparison.
            </p>
          </div>
        )}

        <div className="overflow-x-auto border border-line">
          <table className="min-w-full text-left text-sm md:text-[15px]">
            <thead>
              <tr className="border-b border-line bg-paper-soft">
                <th className="px-4 py-3 font-semibold text-ink md:px-5">
                  Topic
                </th>
                <th className="px-4 py-3 font-semibold text-ink-soft md:px-5">
                  Typical battery franchise
                </th>
                <th className="px-4 py-3 font-semibold text-blue md:px-5">
                  Electro City (intended)
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.metric} className="border-b border-line align-top">
                  <td className="px-4 py-3.5 font-medium text-ink md:px-5">
                    {row.metric}
                  </td>
                  <td className="px-4 py-3.5 text-ink-soft md:px-5">
                    {row.franchise}
                  </td>
                  <td className="px-4 py-3.5 font-medium text-ink md:px-5">
                    {row.electro}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-ink-soft">
          Franchise fee bands vary widely by brand and year. Treat generic
          franchise patterns as directional only. Do not publish another brand’s
          figures without their current disclosure documents and legal review.
          Read the{" "}
          <Link href="/compliance" className="font-semibold text-blue">
            compliance pack
          </Link>{" "}
          and{" "}
          <Link href="/legal/terms" className="font-semibold text-blue">
            terms
          </Link>{" "}
          before you enquire.
        </p>
      </div>
    </section>
  );
}
