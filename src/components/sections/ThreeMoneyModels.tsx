import Link from "next/link";

const models = [
  {
    number: "01",
    title: "High gross profit",
    subtitle: "Maximise margin on each battery",
    body: "You price for stronger GP on the battery itself (toward the top of a 20-30% band, or higher if your local market allows). Volume can be lower. Scrap is a bonus, not the plan. This suits sites where customers will pay for convenience, correct fitment, and trust.",
    watch:
      "Watch stock turns. High prices with low foot traffic leave cash tied up on the shelf.",
  },
  {
    number: "02",
    title: "Low GP, high volume + scrap",
    subtitle: "Sell sharp, earn on the old unit",
    body: "You run thin margin on the new battery to win the job, then make a larger share of profit when the customer hands in the scrap unit. This only works if you consistently collect scrap, store it legally, and move it at realistic per-kg rates.",
    watch:
      "Without scrap returns, a rock-bottom price just burns margin. Train staff to ask for the old battery every time.",
  },
  {
    number: "03",
    title: "Middle GP + scrap",
    subtitle: "Balanced battery and scrap income",
    body: "You take a sensible middle gross profit on sales and still collect scrap on most jobs. Most independent battery shops land somewhere here: enough margin to cover wages and quiet days, plus scrap as a second line.",
    watch:
      "This is the most common path, not a guarantee. Site quality and marketing still decide whether the volumes arrive.",
  },
];

export function ThreeMoneyModels() {
  return (
    <section className="section-y bg-paper">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-bold tracking-wide text-blue-deep md:text-4xl">
              Three ways battery shops make money
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft md:text-base">
              No single correct price list. Operators usually pick one of these,
              or move between them as the neighbourhood changes.
            </p>
          </div>
          <Link
            href="/calculator"
            className="text-sm font-semibold text-blue hover:underline"
          >
            Stress-test in the calculator →
          </Link>
        </div>

        <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-3">
          {models.map((model) => (
            <article
              key={model.number}
              className="grid h-full grid-rows-[auto_auto_auto_1fr_auto] border border-line bg-paper-soft/40 p-5 md:p-6"
            >
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-display text-sm font-bold text-red">
                  {model.number}
                </p>
                <span className="h-px flex-1 bg-line" aria-hidden />
              </div>
              <h3 className="mt-3 min-h-[3.5rem] font-display text-xl font-bold tracking-wide text-blue-deep md:text-2xl">
                {model.title}
              </h3>
              <p className="mt-1 min-h-[1.25rem] text-sm font-semibold text-ink">
                {model.subtitle}
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-soft md:text-[15px]">
                {model.body}
              </p>
              <div className="mt-5 flex h-[6.25rem] items-start border-t border-line bg-paper/80 pt-4">
                <p className="text-sm leading-relaxed text-ink-soft">
                  <span className="font-semibold text-ink">Reality check: </span>
                  {model.watch}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
