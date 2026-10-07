export function HowItActuallyRuns() {
  const items = [
    {
      title: "Research first",
      copy: "Count vehicle density, competitors, and whether the erf is zoned for retail. Wrong site costs more than a dearer bay with traffic.",
    },
    {
      title: "Market every day",
      copy: "Batteries are distress purchases. Google Business Profile, signage, and community visibility matter more than brand ads.",
    },
    {
      title: "Trade correctly",
      copy: "Test before you sell. Fit flooded / EFB / AGM correctly. Register BMS where needed. Protect warranty margin and return customers.",
    },
  ];

  return (
    <section className="section-y bg-blue-deep text-paper">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-wide md:text-4xl">
          Harder than a brochure. Often simpler than you fear.
        </h2>
        <div className="mt-8 grid items-stretch gap-4 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[10.5rem] flex-col border border-white/15 bg-white/5 p-5"
            >
              <p className="font-display text-xl font-bold">{item.title}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-blue-mist">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
