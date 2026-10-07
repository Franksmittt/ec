import Link from "next/link";

export function HomePathways() {
  const items = [
    {
      href: "/ownership",
      title: "Ownership",
      copy: "Buy the container, then supply at operator pricing. Independent model — not marketed as a royalty franchise.",
    },
    {
      href: "/the-asset",
      title: "What you get",
      copy: "Inclusions, floor plan, CoC split, and indicative pricing posture.",
    },
    {
      href: "/calculator",
      title: "Calculator",
      copy: "Stress-test high GP, low GP plus scrap, or middle mix. Illustrative only.",
    },
    {
      href: "/compliance",
      title: "Compliance pack",
      copy: "Zoning, scrap registration, site CoC, fire, CPA retail duties, VAT notes.",
    },
  ];

  return (
    <section className="section-y bg-paper">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="max-w-xl font-display text-3xl font-bold tracking-wide text-blue-deep md:text-4xl">
          Explore the opportunity
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex min-h-[9.5rem] flex-col border border-line p-5 transition hover:border-blue"
            >
              <p className="font-display text-xl font-bold tracking-wide text-blue-deep group-hover:text-blue">
                {item.title}
              </p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                {item.copy}
              </p>
              <span className="mt-3 text-sm font-semibold text-blue">
                Open page →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
