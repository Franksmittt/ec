const hubs = [
  { city: "Johannesburg", detail: "Head office, Germiston (Raceway Industrial Park)" },
  { city: "Pretoria", detail: "Pretoria West branch" },
  { city: "Bloemfontein", detail: "Hilton branch" },
  { city: "Durban", detail: "Umgeni Business Park branch" },
  { city: "Cape Town", detail: "Airport City branch" },
];

const lines = [
  "Unitech and Unitech Gold batteries and auto-electrical lines",
  "Alternators, starters, and related new units",
  "Regulators, rectifiers, repair kits, bendix drives, and bearings",
  "Wiring, fuses, globes, suzi cables, and trailer spares",
  "Aircon gas and workshop consumables",
  "ADDO batteries and other supported aftermarket brands",
];

const figures = [
  { value: "1985", label: "Founded as Hammerschlag Auto Electrical" },
  { value: "15,000+", label: "Product lines across warehouses nationally" },
  { value: "25", label: "Delivery vehicles for short-notice parts movement" },
];

export function SupplierTrust() {
  return (
    <section className="section-y bg-blue-deep text-paper">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-wide md:text-4xl">
            Backed by a wholesaler that has been in this trade for decades
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-blue-mist md:text-base">
            Public materials describe the business as having started in 1985 as
            Hammerschlag Auto Electrical and trading as Electro City since 1990.
            Branch, catalogue, and fleet figures below are marketing summaries —
            confirm current particulars with Electro City before relying on them
            in your own materials. The operator point is the national wholesale
            bench behind the container.
          </p>
        </div>

        <div className="mt-8 grid items-stretch gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-3">
          {figures.map((item) => (
            <div
              key={item.value}
              className="flex min-h-[8.5rem] flex-col justify-between bg-blue-deep p-5"
            >
              <p className="font-display text-3xl font-bold md:text-4xl">
                {item.value}
              </p>
              <p className="mt-3 text-sm text-blue-mist">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid items-stretch gap-4 md:grid-cols-2">
          <div className="flex min-h-[16rem] flex-col border border-white/15 bg-white/5 p-5">
            <h3 className="font-display text-xl font-bold tracking-wide">
              Main hubs
            </h3>
            <ul className="mt-4 flex-1 space-y-2.5 text-sm text-blue-mist">
              {hubs.map((hub) => (
                <li key={hub.city} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                  <span>
                    <span className="font-semibold text-paper">{hub.city}</span>
                    <span> · {hub.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex min-h-[16rem] flex-col border border-white/15 bg-white/5 p-5">
            <h3 className="font-display text-xl font-bold tracking-wide">
              Beyond batteries
            </h3>
            <ul className="mt-4 flex-1 space-y-2 text-sm text-blue-mist">
              {lines.map((line) => (
                <li key={line} className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
