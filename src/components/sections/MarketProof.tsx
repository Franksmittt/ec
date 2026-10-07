import { ConceptImage } from "@/components/ui/ConceptImage";

const stats = [
  {
    value: "13.6M+",
    label: "Live vehicles nationally",
    detail: "eNaTIS-scale fleet",
  },
  {
    value: "5.2M",
    label: "Registered in Gauteng",
    detail: "~38.5% of national fleet",
  },
  {
    value: "24-36",
    label: "Months flooded lifespan",
    detail: "Compressed by SA conditions",
  },
];

const drivers = [
  "Heat that cooks flooded cells on the Highveld and coast",
  "Potholes and vibration that kill plates early",
  "Stop-start traffic plus load shedding deep-cycle stress",
];

export function MarketProof() {
  return (
    <section id="market" className="overflow-hidden bg-blue-deep text-paper">
      <div className="mx-auto max-w-6xl px-5 section-y md:px-8">
        <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-mist">
              The demand engine
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-wide md:text-[2.75rem] md:leading-[1.05]">
              South Africa burns through batteries
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-blue-mist">
              Heat, potholes, stop-start traffic, and load shedding compress
              battery life. That replacement cycle is what your store sits on.
            </p>
            <ul className="mt-5 space-y-2.5 border-l border-white/20 pl-4">
              {drivers.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-blue-mist">
                  {item}
                </li>
              ))}
            </ul>
            <ConceptImage
              src="/concept/market-highveld.jpg"
              alt="Concept visualisation of Highveld traffic next to a proposed independent container battery shop"
              label="Concept · Highveld demand context"
              aspect="aspect-[16/10]"
              className="mt-6 border border-white/15 lg:mt-auto"
            />
          </div>

          <div className="flex flex-col gap-4 lg:col-span-7">
            <div className="grid flex-1 gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex min-h-[10rem] flex-col justify-between bg-blue-deep p-5"
                >
                  <p className="font-display text-3xl font-bold tracking-wide md:text-4xl">
                    {stat.value}
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-paper">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-xs text-blue-mist">{stat.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid flex-1 items-stretch gap-4 md:grid-cols-2">
              <div className="flex min-h-[10rem] flex-col justify-between border border-white/15 bg-white/5 p-5">
                <p className="font-display text-lg font-bold tracking-wide">
                  The cycle pays later
                </p>
                <p className="mt-3 text-sm leading-relaxed text-blue-mist">
                  Many shops only feel the fuller benefit after a couple of
                  years, when the first customers return for the next battery.
                </p>
              </div>
              <div className="flex min-h-[10rem] flex-col justify-between border border-white/15 bg-white/5 p-5">
                <p className="font-display text-lg font-bold tracking-wide">
                  Site decides volume
                </p>
                <p className="mt-3 text-sm leading-relaxed text-blue-mist">
                  Site quality and local marketing decide whether you get enough
                  of those customers in the first place.
                </p>
              </div>
            </div>

            <ConceptImage
              src="/concept/market-forecourt.jpg"
              alt="Concept visualisation of an independent container battery shop on a busy forecourt"
              label="Concept · forecourt / taxi node"
              aspect="aspect-[21/9]"
              className="border border-white/15"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
