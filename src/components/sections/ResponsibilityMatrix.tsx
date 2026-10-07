const matrix = [
  {
    area: "Physical asset",
    electro:
      "Ready-made container, Unitech opening batteries (flyer schedule), 3× stands, Unitech signage, catalogues, load tester, charger, test printer",
    buyer: "Site prep, foundation/plinth, placement, perimeter security",
  },
  {
    area: "After handover",
    electro:
      "Wholesale supply and operator / special pricing access for asset buyers",
    buyer:
      "Where it sits, what you sell next, pricing, hours, staff, marketing",
  },
  {
    area: "Systems & data",
    electro: "None. Electro City does not supply or see your POS, IT, or books",
    buyer: "Your own POS, accounting, computers, and reporting",
  },
  {
    area: "Regulatory",
    electro:
      "Base drawings where provided, material certificates where applicable, internal electrical CoC for the container as built",
    buyer:
      "Zoning / temporary-building approval, site-specific grid or solar CoC, fire servicing, scrap registration",
  },
  {
    area: "Money model",
    electro:
      "One asset price. No franchise royalties. No marketing levies. No till kickbacks.",
    buyer: "Working capital, insurance, rates, site lease, replenishment",
  },
];

export function ResponsibilityMatrix({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <section className="bg-paper">
      <div
        className={`mx-auto max-w-6xl px-5 md:px-8 ${
          compact ? "py-10 md:py-12" : "section-y"
        }`}
      >
        {!compact && (
          <div className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-end">
            <h2 className="font-display text-3xl font-bold tracking-wide text-blue-deep md:text-4xl">
              You buy the box.
              <br />
              Then you run it.
            </h2>
            <p className="text-[15px] leading-relaxed text-ink-soft md:pb-1 md:text-base">
              Once the fitted unit is paid for, it is yours. Electro City’s
              ongoing role is supply. Not ops control. Not system access. Not a
              franchise.
            </p>
          </div>
        )}

        <div className={compact ? "overflow-x-auto" : "mt-10 overflow-x-auto"}>
          <table className="min-w-full text-left text-sm md:text-[15px]">
            <thead>
              <tr className="border-b-2 border-blue-deep">
                <th className="pb-4 pr-4 font-semibold text-ink">Area</th>
                <th className="pb-4 pr-4 font-semibold text-blue">
                  Electro City
                </th>
                <th className="pb-4 font-semibold text-ink">You</th>
              </tr>
            </thead>
            <tbody>
              {matrix.map((row) => (
                <tr key={row.area} className="border-b border-line align-top">
                  <td className="py-4 pr-4 font-semibold text-ink">
                    {row.area}
                  </td>
                  <td className="py-4 pr-4 text-ink-soft">{row.electro}</td>
                  <td className="py-4 text-ink-soft">{row.buyer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
