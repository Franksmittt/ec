export function ExtraRevenueStreams() {
  return (
    <section className="section-y bg-paper-soft">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-wide text-blue-deep md:text-4xl">
            Battery-ready asset. Not a batteries-only prison.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft md:text-base">
            The box is rigged for battery retail. The intended independent
            model is not a franchise ops system and is not meant to lock you
            forever into one approved menu.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
            Electro City’s wider auto-electrical catalogue can feed related
            parts when skills, insurance, space, and demand allow.
          </p>
        </div>

        <div className="mt-8 grid items-stretch gap-4 md:grid-cols-2">
          <div className="flex min-h-[11rem] flex-col border border-line bg-paper p-5">
            <h3 className="font-display text-xl font-bold tracking-wide text-blue-deep">
              Example: diagnosis becomes a parts sale
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
              Test shows a healthy battery and a weak alternator. Source the
              unit through wholesale channels and fit only with qualified people
              and insurance.
            </p>
          </div>
          <div className="flex min-h-[11rem] flex-col border border-line bg-paper p-5">
            <h3 className="font-display text-xl font-bold tracking-wide text-blue-deep">
              Example: services around the core product
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
              Free tests pull traffic. Memory savers protect modern cars.
              Charging-system checks open cables, kits, and labour tickets.
            </p>
          </div>
        </div>

        <div className="mt-4 grid items-stretch gap-4 md:grid-cols-3">
          {[
            {
              title: "Related parts",
              copy: "Alternators, starters, cables, fuses, globes, and other lines when you choose to stock them.",
            },
            {
              title: "Skilled labour",
              copy: "Qualified auto-electrical work can sit next to battery GP and lawful scrap income.",
            },
            {
              title: "Independence with responsibility",
              copy: "No franchise. After sale, Electro City supplies. Your shop, your systems, your call.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex min-h-[8.5rem] flex-col border border-line bg-paper p-4"
            >
              <p className="font-display text-lg font-bold text-blue-deep">
                {item.title}
              </p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
