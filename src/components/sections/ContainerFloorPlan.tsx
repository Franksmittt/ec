"use client";

import { useState } from "react";
import { ConceptImage } from "@/components/ui/ConceptImage";

const specs = [
  { label: "External", value: "6.06 × 2.44 × 2.59 m" },
  { label: "Bare internal", value: "~5.90 × 2.35 × 2.39 m" },
  { label: "After insulation", value: "~5.7 × 2.15–2.23 m" },
  { label: "Usable floor", value: "~12–13 m²" },
  { label: "Staff", value: "1–2 people" },
  { label: "Clear aisle target", value: "800–900 mm+" },
];

const zones = [
  {
    id: "A",
    title: "Customer face / roll-up",
    size: "~3.0–4.0 m opening on long side",
    copy: "Open about half to two-thirds of the long face so it reads as a shop. Customers stand at the threshold. Cars never enter.",
    why: "Container retail dies with a tiny end door. A generous long-side opening is the storefront.",
  },
  {
    id: "B",
    title: "Counter · test · POS",
    size: "~1.6–1.8 m wide × 0.65–0.75 m deep",
    copy: "Conductance tester, quote pad, and your own POS on one compact counter. Primary staff station. Workflow: enter → test → quote → pull stock.",
    why: "Battery retail converts on diagnosis at the counter, not on browsing alone.",
  },
  {
    id: "C",
    title: "Optional guest seat",
    size: "1 stool / small bench",
    copy: "One seat if someone wants to wait while you fetch a battery. Not a lounge. Skip it if aisle feels tight.",
    why: "Comfort without stealing circulation space.",
  },
  {
    id: "D",
    title: "Stock wall (single sided)",
    size: "~3.5–4.2 m run · lower shelves for heaviest",
    copy: "Flooded / EFB / AGM on one long wall only. Do not put deep shelving on both long walls or the aisle collapses under 700 mm.",
    why: "Finished width after insulation is only ~2.15–2.23 m. One stock wall keeps a workable aisle.",
  },
  {
    id: "E",
    title: "Charge bay",
    size: "Bench for 2–4 chargers",
    copy: "Small dedicated charge / conditioner station near the DB, ventilated, non-sparking surface, cable tidy. Keep away from the scrap pallet.",
    why: "Charging needs power, ventilation, and separation from damaged or scrap units.",
  },
  {
    id: "F",
    title: "Scrap pallet / bund",
    size: "1 pallet footprint on bunded tray",
    copy: "Upright scrap only, preferably single layer, near end doors for quick load-out. Move daily or every few days. No heap. Lawful SAPS process still applies.",
    why: "Busy shops clear scrap often. Inside staging is enough if turnover is disciplined.",
  },
  {
    id: "G",
    title: "Parking fitment bay (outside)",
    size: "Bay / pad in front of roll-up",
    copy: "Customer parks outside. Staff carry the battery out and fit on the apron. Memory saver / tools tray travels with the job.",
    why: "A 2.2 m finished width cannot host a vehicle and still leave safe stock, staff, and acid space.",
  },
];

const flow = [
  "Customer arrives in parking",
  "Test at counter",
  "Quote / select battery",
  "Pull from stock wall",
  "Charge only if needed",
  "Take old unit to scrap pallet",
  "Fit outside on the apron",
];

export function ContainerFloorPlan() {
  const [active, setActive] = useState("B");
  const current = zones.find((z) => z.id === active) ?? zones[1];

  return (
    <section id="floor-plan" className="section-y bg-paper-soft">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
            Research-backed layout
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-wide text-blue-deep md:text-4xl">
            6m container battery shop floor plan
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft md:text-base">
            Built from ISO 20ft dimensions, insulated-fit-out reality, and battery
            retail workflow. This is a staff box for stock, testing, charging,
            and scrap staging. Fitment stays in the parking bay. Prefer the{" "}
            <a href="#walkthrough" className="font-semibold text-blue underline-offset-2 hover:underline">
              3D walkthrough
            </a>{" "}
            first, then click a zone here for sizes and rationale.
          </p>
        </div>

        <div className="mt-6 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {specs.map((item) => (
            <div key={item.label} className="bg-paper p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                {item.label}
              </p>
              <p className="mt-1 font-display text-lg font-bold text-blue-deep">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-12">
          <div className="border border-line bg-paper p-4 md:p-5 lg:col-span-7">
            <div className="flex flex-wrap items-end justify-between gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                Plan view · long side to parking
              </p>
              <p className="text-xs text-ink-soft">Tap zones to inspect</p>
            </div>

            <div className="mt-4 overflow-x-auto">
              <svg
                viewBox="0 0 720 360"
                className="mx-auto h-auto w-full min-w-[32rem] max-w-3xl"
                role="img"
                aria-label="Interactive floor plan of a 6 metre container battery shop"
              >
                {/* parking apron */}
                <rect x="80" y="268" width="560" height="70" fill="#e8eef5" />
                <text
                  x="360"
                  y="300"
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="700"
                  fill={active === "G" ? "#c62828" : "#073572"}
                >
                  G · Parking fitment apron (cars stay here)
                </text>
                <rect
                  x="200"
                  y="278"
                  width="120"
                  height="40"
                  rx="4"
                  fill={active === "G" ? "#c62828" : "#0c4da2"}
                  opacity="0.15"
                  className="cursor-pointer"
                  onClick={() => setActive("G")}
                />
                <text
                  x="260"
                  y="303"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#3d4f63"
                  className="cursor-pointer"
                  onClick={() => setActive("G")}
                >
                  Vehicle bay
                </text>

                {/* container shell */}
                <rect
                  x="80"
                  y="48"
                  width="560"
                  height="210"
                  fill="#f8fafc"
                  stroke="#073572"
                  strokeWidth="3"
                />

                {/* dimension ticks */}
                <text x="360" y="28" textAnchor="middle" fontSize="11" fill="#3d4f63">
                  ~5.7 m finished internal length
                </text>
                <text
                  x="30"
                  y="160"
                  textAnchor="middle"
                  fontSize="11"
                  fill="#3d4f63"
                  transform="rotate(-90 30 160)"
                >
                  ~2.2 m finished width
                </text>

                {/* end doors */}
                <path
                  d="M80 90 L58 70 M80 215 L58 235"
                  stroke="#0c4da2"
                  strokeWidth="2"
                  fill="none"
                />
                <text x="42" y="155" fontSize="10" fill="#3d4f63">
                  End
                </text>
                <text x="42" y="168" fontSize="10" fill="#3d4f63">
                  doors
                </text>

                {/* roll-up A */}
                <rect
                  x="210"
                  y="250"
                  width="300"
                  height="12"
                  fill={active === "A" ? "#c62828" : "#0c4da2"}
                  className="cursor-pointer"
                  onClick={() => setActive("A")}
                />
                <text
                  x="360"
                  y="244"
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="700"
                  fill={active === "A" ? "#c62828" : "#0c4da2"}
                  className="cursor-pointer"
                  onClick={() => setActive("A")}
                >
                  A · Roll-up opening (~3–4 m)
                </text>

                {/* F scrap */}
                <rect
                  x="95"
                  y="62"
                  width="78"
                  height="78"
                  fill={active === "F" ? "#fde8e8" : "#dce8f7"}
                  stroke={active === "F" ? "#c62828" : "#073572"}
                  strokeWidth="2"
                  className="cursor-pointer"
                  onClick={() => setActive("F")}
                />
                <text
                  x="134"
                  y="98"
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="700"
                  fill="#c62828"
                  className="cursor-pointer"
                  onClick={() => setActive("F")}
                >
                  F
                </text>
                <text
                  x="134"
                  y="116"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#3d4f63"
                  className="cursor-pointer"
                  onClick={() => setActive("F")}
                >
                  Scrap
                </text>

                {/* E charge */}
                <rect
                  x="95"
                  y="155"
                  width="78"
                  height="88"
                  fill={active === "E" ? "#dce8f7" : "#eef3fa"}
                  stroke={active === "E" ? "#0c4da2" : "#073572"}
                  strokeWidth="2"
                  className="cursor-pointer"
                  onClick={() => setActive("E")}
                />
                <text
                  x="134"
                  y="195"
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="700"
                  fill="#073572"
                  className="cursor-pointer"
                  onClick={() => setActive("E")}
                >
                  E
                </text>
                <text
                  x="134"
                  y="213"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#3d4f63"
                  className="cursor-pointer"
                  onClick={() => setActive("E")}
                >
                  Charge
                </text>

                {/* D stock */}
                <rect
                  x="190"
                  y="62"
                  width="330"
                  height="58"
                  fill={active === "D" ? "#dce8f7" : "#eef3fa"}
                  stroke={active === "D" ? "#0c4da2" : "#073572"}
                  strokeWidth="2"
                  className="cursor-pointer"
                  onClick={() => setActive("D")}
                />
                <text
                  x="355"
                  y="90"
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="700"
                  fill="#073572"
                  className="cursor-pointer"
                  onClick={() => setActive("D")}
                >
                  D · Stock wall
                </text>
                <text
                  x="355"
                  y="108"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#3d4f63"
                  className="cursor-pointer"
                  onClick={() => setActive("D")}
                >
                  Flooded / EFB / AGM · single sided
                </text>

                {/* B counter */}
                <rect
                  x="230"
                  y="160"
                  width="180"
                  height="60"
                  fill={active === "B" ? "#ffffff" : "#f8fafc"}
                  stroke={active === "B" ? "#c62828" : "#073572"}
                  strokeWidth="2.5"
                  className="cursor-pointer"
                  onClick={() => setActive("B")}
                />
                <text
                  x="320"
                  y="188"
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="700"
                  fill="#073572"
                  className="cursor-pointer"
                  onClick={() => setActive("B")}
                >
                  B · Counter
                </text>
                <text
                  x="320"
                  y="205"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#3d4f63"
                  className="cursor-pointer"
                  onClick={() => setActive("B")}
                >
                  Test · quote · POS
                </text>

                {/* C seat */}
                <circle
                  cx="460"
                  cy="190"
                  r="24"
                  fill={active === "C" ? "#dce8f7" : "#ffffff"}
                  stroke={active === "C" ? "#0c4da2" : "#073572"}
                  strokeWidth="2"
                  className="cursor-pointer"
                  onClick={() => setActive("C")}
                />
                <text
                  x="460"
                  y="187"
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight="700"
                  fill="#073572"
                  className="cursor-pointer"
                  onClick={() => setActive("C")}
                >
                  C
                </text>
                <text
                  x="460"
                  y="202"
                  textAnchor="middle"
                  fontSize="9"
                  fill="#3d4f63"
                  className="cursor-pointer"
                  onClick={() => setActive("C")}
                >
                  Seat
                </text>

                {/* DB */}
                <rect
                  x="545"
                  y="62"
                  width="75"
                  height="42"
                  fill="#ffffff"
                  stroke="#073572"
                  strokeWidth="1.5"
                />
                <text x="582" y="88" textAnchor="middle" fontSize="11" fill="#073572">
                  DB
                </text>

                {/* aisle */}
                <text x="560" y="190" textAnchor="middle" fontSize="10" fill="#3d4f63">
                  Aisle
                </text>
                <text x="560" y="204" textAnchor="middle" fontSize="10" fill="#3d4f63">
                  800–900mm+
                </text>
              </svg>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-ink-soft">
              Indicative concept plan. Final BoM, insulation thickness, door
              cuts, and municipal rules decide exact dimensions. Not an
              engineered drawing.
            </p>
          </div>

          <div className="flex flex-col lg:col-span-5">
            <div className="flex flex-wrap gap-2">
              {zones.map((zone) => (
                <button
                  key={zone.id}
                  type="button"
                  onClick={() => setActive(zone.id)}
                  className={`border px-2.5 py-1.5 text-xs font-semibold transition ${
                    active === zone.id
                      ? "border-blue bg-blue text-paper"
                      : "border-line bg-paper text-ink-soft hover:border-blue"
                  }`}
                >
                  {zone.id}
                </button>
              ))}
            </div>

            <div className="mt-4 flex flex-1 flex-col border border-line bg-paper p-5">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-2xl font-bold text-red">
                  {current.id}
                </span>
                <h3 className="font-display text-xl font-bold tracking-wide text-blue-deep">
                  {current.title}
                </h3>
              </div>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-blue">
                {current.size}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {current.copy}
              </p>
              <p className="mt-4 border-t border-line pt-3 text-sm leading-relaxed text-ink">
                <span className="font-semibold">Why: </span>
                {current.why}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 border border-line bg-paper p-5 md:p-6">
          <p className="font-display text-lg font-bold tracking-wide text-blue-deep">
            Day-one workflow
          </p>
          <ol className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {flow.map((step, i) => (
              <li
                key={step}
                className="min-h-[4.5rem] border border-line bg-paper-soft/60 p-3"
              >
                <span className="font-display text-sm font-bold text-red">
                  0{i + 1}
                </span>
                <p className="mt-1 text-xs leading-snug text-ink-soft">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-6 grid items-stretch gap-4 md:grid-cols-3">
          <div className="border border-line bg-paper p-4">
            <p className="font-display text-lg font-bold text-blue-deep">
              Single-sided stock only
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              After insulation, finished width is about 2.15–2.23 m. Deep
              shelving on both long walls leaves an unsafe aisle. One stock wall
              keeps 800–900 mm+ clear.
            </p>
          </div>
          <div className="border border-line bg-paper p-4">
            <p className="font-display text-lg font-bold text-blue-deep">
              Scrap is staging, not storage
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Upright on a bunded non-combustible tray, preferably single layer,
              near end doors. Turn often. Midtronics-style advice: do not let
              scrap become a mountain.
            </p>
          </div>
          <div className="border border-line bg-paper p-4">
            <p className="font-display text-lg font-bold text-blue-deep">
              Outside fitment is the model
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              The container holds people, stock, and tools. The parking apron
              holds the car. That split is what makes a 6m unit workable.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ConceptImage
            src="/concept/cutaway.jpg"
            alt="Architectural cutaway concept of an independent 6m container battery shop"
            label="Concept cutaway"
            aspect="aspect-[16/10]"
            className="border border-line"
          />
          <ConceptImage
            src="/concept/interior-fitout.jpg"
            alt="Concept interior looking toward stock wall and counter"
            label="Concept interior"
            aspect="aspect-[16/10]"
            className="border border-line"
          />
        </div>
      </div>
    </section>
  );
}
