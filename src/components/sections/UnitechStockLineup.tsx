"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { useMemo, useState } from "react";
import { BatteryPlaceholder } from "@/components/ui/BatteryPlaceholder";
import {
  BOM_BATTERIES,
  BOM_BATTERY_TOTAL_UNITS,
  BOM_EQUIPMENT,
  type BomBatteryLine,
} from "@/lib/bom";

type TechFilter = "All" | "Lead acid" | "AGM";

const TECH_FILTERS: TechFilter[] = ["All", "Lead acid", "AGM"];

function techAccent(tech: BomBatteryLine["tech"]) {
  return tech === "AGM" ? "#c62828" : "#073572";
}

function sizeForCode(code: string): "compact" | "small" | "medium" | "large" | "xl" {
  if (code.includes("AGM")) return "large";
  const n = parseInt(code.replace(/\D/g, "").slice(0, 3), 10);
  if (n <= 618) return "compact";
  if (n <= 630) return "small";
  if (n <= 650) return "medium";
  if (n <= 658) return "large";
  return "xl";
}

function BatteryVisual({
  line,
  large = false,
}: {
  line: BomBatteryLine;
  large?: boolean;
}) {
  return (
    <div
      className={`flex w-full items-center justify-center bg-[linear-gradient(165deg,#eef3fa_0%,#ffffff_48%,#f3f6fb_100%)] ${
        large ? "min-h-[14rem] py-8" : "min-h-[6.5rem] py-3"
      }`}
    >
      <BatteryPlaceholder
        size={sizeForCode(line.code)}
        accent={techAccent(line.tech)}
        label={`Unitech ${line.code} placeholder`}
        className={large ? "scale-125" : ""}
      />
    </div>
  );
}

export function UnitechStockLineup() {
  const reduceMotion = useReducedMotion();
  const [filter, setFilter] = useState<TechFilter>("All");
  const [activeCode, setActiveCode] = useState(BOM_BATTERIES[0].code);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? BOM_BATTERIES
        : BOM_BATTERIES.filter((b) => b.tech === filter),
    [filter],
  );

  const active =
    filtered.find((b) => b.code === activeCode) ?? filtered[0] ?? BOM_BATTERIES[0];

  return (
    <section
      id="unitech-stock"
      className="section-y relative overflow-hidden border-y border-line bg-paper"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 12% 20%, rgba(12,77,162,0.10), transparent 55%), radial-gradient(ellipse 50% 40% at 88% 70%, rgba(198,40,40,0.06), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue">
            Opening inventory
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-wide text-blue-deep md:text-4xl">
            Unitech stock that comes with the store
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft md:text-base">
            Your ready-made store is supplied with the Unitech opening mix below
            — {BOM_BATTERY_TOTAL_UNITS} batteries across {BOM_BATTERIES.length}{" "}
            models, each with a <strong className="text-ink">25-month warranty</strong>
            as stated on the Electro City / Unitech package flyer. Product photos
            are placeholders until pack shots are supplied.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {BOM_EQUIPMENT.map((item) => (
            <div
              key={item.name}
              className="border border-line bg-paper-soft/50 px-4 py-3"
            >
              <p className="font-display text-base font-bold tracking-wide text-blue-deep">
                {item.name}
              </p>
              <p className="mt-1 text-sm text-ink-soft">Qty · {item.qty}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-7 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter by battery technology"
        >
          {TECH_FILTERS.map((item) => {
            const on = filter === item;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => {
                  setFilter(item);
                  const next =
                    item === "All"
                      ? BOM_BATTERIES
                      : BOM_BATTERIES.filter((b) => b.tech === item);
                  if (!next.some((b) => b.code === activeCode) && next[0]) {
                    setActiveCode(next[0].code);
                  }
                }}
                className={`border px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                  on
                    ? "border-blue bg-blue text-paper"
                    : "border-line bg-paper text-blue-deep hover:border-blue/40"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-8">
          <div className="border border-line bg-paper">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.code}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <BatteryVisual line={active} large />
                <div className="border-t border-line p-5 md:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-display text-2xl font-bold tracking-wide text-blue-deep md:text-3xl">
                        Unitech {active.code}
                      </p>
                      <p className="mt-1 text-sm text-ink-soft">
                        Opening quantity · {active.qty} units in the package
                      </p>
                    </div>
                    <span
                      className="shrink-0 border px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-paper"
                      style={{ backgroundColor: techAccent(active.tech) }}
                    >
                      {active.warrantyMonths}-month warranty
                    </span>
                  </div>

                  <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
                    {[
                      { label: "Code", value: active.code },
                      { label: "Technology", value: active.tech },
                      { label: "Package qty", value: `×${active.qty}` },
                      {
                        label: "Warranty",
                        value: `${active.warrantyMonths} months`,
                      },
                      { label: "Voltage", value: "12V class" },
                      { label: "Brand", value: "Unitech" },
                    ].map((spec) => (
                      <div
                        key={spec.label}
                        className="bg-paper-soft/80 px-3 py-3 sm:px-4"
                      >
                        <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                          {spec.label}
                        </dt>
                        <dd className="mt-1 font-display text-lg font-bold tracking-wide text-blue-deep">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
              Opening mix · {filtered.length} models ·{" "}
              {filtered.reduce((s, b) => s + b.qty, 0)} units shown
            </p>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {filtered.map((line, index) => {
                const selected = line.code === active.code;
                return (
                  <motion.button
                    key={line.code}
                    type="button"
                    onClick={() => setActiveCode(line.code)}
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: reduceMotion ? 0 : index * 0.03,
                      duration: 0.3,
                    }}
                    className={`group border text-left transition-colors ${
                      selected
                        ? "border-blue bg-blue-mist/40"
                        : "border-line bg-paper hover:border-blue/35"
                    }`}
                    aria-pressed={selected}
                  >
                    <BatteryVisual line={line} />
                    <div className="border-t border-line px-3 py-3">
                      <p className="font-display text-base font-bold tracking-wide text-blue-deep">
                        {line.code}
                      </p>
                      <p className="mt-0.5 text-xs text-ink-soft">
                        {line.tech} · ×{line.qty}
                      </p>
                      <p
                        className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em]"
                        style={{ color: techAccent(line.tech) }}
                      >
                        {line.warrantyMonths}-month warranty
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <p className="mt-5 text-xs leading-relaxed text-ink-soft">
              Schedule taken from the Electro City ready-made store flyer.
              Written sale documents and Unitech product sheets remain the final
              authority if any line differs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
