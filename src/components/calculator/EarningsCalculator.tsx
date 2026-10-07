"use client";

import { useMemo, useState } from "react";
import {
  DEFAULT_GP,
  DEFAULT_RETAIL_PRICE,
  DEFAULT_SCRAP_PER_KG,
  DEFAULT_UNITS_PER_MONTH,
  DEFAULT_WEIGHT_KG,
  GP_MAX,
  GP_MIN,
  SCRAP_KG_MAX,
  SCRAP_KG_MIN,
  WEIGHT_MAX_KG,
  WEIGHT_MIN_KG,
  computeEconomics,
  formatZar,
  formatZarExact,
} from "@/lib/economics";

const UNITS_MIN = 1;
const UNITS_MAX = 400;

type StrategyId = "high" | "low-scrap" | "mid";

const strategies: {
  id: StrategyId;
  label: string;
  gp: number;
  returnRate: number;
  hint: string;
}[] = [
  {
    id: "high",
    label: "High GP",
    gp: 0.3,
    returnRate: 0.5,
    hint: "Stronger margin on the battery. Scrap is secondary.",
  },
  {
    id: "low-scrap",
    label: "Low GP + scrap",
    gp: 0.18,
    returnRate: 0.9,
    hint: "Sharper battery price. Lean on scrap collection.",
  },
  {
    id: "mid",
    label: "Middle GP",
    gp: 0.25,
    returnRate: 0.7,
    hint: "Balanced battery margin and scrap income.",
  },
];

export function EarningsCalculator() {
  const [units, setUnits] = useState(DEFAULT_UNITS_PER_MONTH);
  const [retail, setRetail] = useState(DEFAULT_RETAIL_PRICE);
  const [gp, setGp] = useState(DEFAULT_GP);
  const [weight, setWeight] = useState(DEFAULT_WEIGHT_KG);
  const [scrapKg, setScrapKg] = useState(DEFAULT_SCRAP_PER_KG);
  const [returnRate, setReturnRate] = useState(0.7);
  const [strategy, setStrategy] = useState<StrategyId>("mid");

  function applyStrategy(id: StrategyId) {
    const preset = strategies.find((s) => s.id === id);
    if (!preset) return;
    setStrategy(id);
    setGp(preset.gp);
    setReturnRate(preset.returnRate);
  }

  const results = useMemo(
    () =>
      computeEconomics({
        unitsPerMonth: units,
        retailPrice: retail,
        gpMargin: gp,
        scrapWeightKg: weight,
        scrapPricePerKg: scrapKg,
        scrapReturnRate: returnRate,
      }),
    [units, retail, gp, weight, scrapKg, returnRate],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="space-y-8 border border-line bg-paper p-6 md:p-8">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-wide text-blue-deep">
            Your numbers
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
            Pick a money model, then tune the inputs. Typical battery GP often
            sits around 20-30%. The slider allows 15-40% so you can compare high
            margin versus scrap-led trading. Scrap uses R
            {SCRAP_KG_MIN.toFixed(2)}-R{SCRAP_KG_MAX.toFixed(2)} per kg.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-ink">Money model</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {strategies.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => applyStrategy(s.id)}
                className={`border px-3 py-3 text-left text-sm transition ${
                  strategy === s.id
                    ? "border-blue bg-blue-mist/50 text-blue-deep"
                    : "border-line text-ink-soft hover:border-blue"
                }`}
              >
                <span className="block font-semibold text-ink">{s.label}</span>
                <span className="mt-1 block text-xs leading-snug">{s.hint}</span>
              </button>
            ))}
          </div>
        </div>

        <ComboUnitsField value={units} onChange={setUnits} />

        <NumberField
          label="Average retail selling price"
          value={retail}
          min={800}
          max={4500}
          step={50}
          prefix="R"
          onChange={setRetail}
        />

        <SliderField
          label="Gross profit on battery sales"
          value={gp * 100}
          min={GP_MIN * 100}
          max={GP_MAX * 100}
          step={1}
          display={`${Math.round(gp * 100)}%`}
          onChange={(v) => {
            setGp(v / 100);
            setStrategy(
              v / 100 >= 0.28
                ? "high"
                : v / 100 <= 0.2
                  ? "low-scrap"
                  : "mid",
            );
          }}
        />

        <SliderField
          label="Average scrap battery weight"
          value={weight}
          min={WEIGHT_MIN_KG}
          max={WEIGHT_MAX_KG}
          step={0.5}
          display={`${weight.toFixed(1)} kg`}
          onChange={setWeight}
        />

        <SliderField
          label="Scrap price per kg"
          value={scrapKg}
          min={SCRAP_KG_MIN}
          max={SCRAP_KG_MAX}
          step={0.25}
          display={formatZarExact(scrapKg)}
          onChange={setScrapKg}
        />

        <SliderField
          label="Customers who hand in a scrap unit"
          value={returnRate * 100}
          min={0}
          max={100}
          step={5}
          display={`${Math.round(returnRate * 100)}%`}
          onChange={(v) => setReturnRate(v / 100)}
        />
      </div>

      <div className="flex flex-col gap-5">
        <ResultCard
          title="Battery sales gross profit"
          monthly={results.monthlyGrossProfit}
          annual={results.annualGrossProfit}
          note={`${formatZar(results.monthlyRevenue)} retail turnover / month at ${Math.round(gp * 100)}% GP`}
        />
        <ResultCard
          title="Scrap income"
          monthly={results.monthlyScrapIncome}
          annual={results.annualScrapIncome}
          note={`${results.scrapUnitsPerMonth.toFixed(0)} scrap units / month × ${formatZarExact(results.scrapPerBattery)} each (${weight.toFixed(1)} kg @ ${formatZarExact(scrapKg)}/kg)`}
          accent
        />
        <div className="border border-blue bg-blue p-6 text-paper md:p-8">
          <p className="text-sm font-medium text-blue-mist">
            Combined illustrative income
          </p>
          <p className="mt-2 font-display text-4xl font-bold tracking-wide">
            {formatZar(results.monthlyTotal)}
            <span className="ml-2 text-lg font-semibold text-blue-mist">
              / month
            </span>
          </p>
          <p className="mt-1 text-sm text-blue-mist">
            {formatZar(results.annualTotal)} / year before overheads
          </p>
        </div>

        <div className="border border-line bg-paper-soft/80 p-4 text-xs leading-relaxed text-ink-soft">
          <p className="font-semibold text-ink">Illustrative only — not a guarantee</p>
          <p className="mt-1.5">
            Figures are estimates for modelling. They do not constitute a
            financial guarantee, forecast, or CPA earnings promise. Actual
            returns depend on site quality, pricing, stock discipline, overheads,
            compliance, and execution. Seek independent financial advice before
            relying on any number.
          </p>
        </div>

        <p className="text-xs leading-relaxed text-ink-soft">
          Illustrative only. Not a guarantee and not a CPA earning promise.
          Gross profit is not net cash. Rent, wages, power, insurance, permits,
          and transport are not deducted above. Any retail prices you enter are
          your assumptions. Electro City does not set or enforce your resale
          price. Scrap income assumes lawful Second-Hand Goods registration and
          realistic rates (modelled here at R{SCRAP_KG_MIN.toFixed(2)}-R
          {SCRAP_KG_MAX.toFixed(2)}/kg). Multi-year payback talk in industry
          commentary is not verified trading data for this container product.
          Read the{" "}
          <a href="/legal/terms" className="font-semibold text-blue">
            terms
          </a>{" "}
          and{" "}
          <a href="/compliance" className="font-semibold text-blue">
            compliance pack
          </a>
          .
        </p>
      </div>
    </div>
  );
}

function ComboUnitsField({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium text-ink">
          Batteries sold per month
        </span>
        <input
          type="number"
          min={UNITS_MIN}
          max={UNITS_MAX}
          step={1}
          value={value}
          onChange={(e) => {
            const next = Number(e.target.value);
            if (Number.isNaN(next)) return;
            onChange(Math.min(UNITS_MAX, Math.max(UNITS_MIN, next)));
          }}
          className="w-24 border border-line px-2 py-1 text-right font-display text-lg font-bold text-blue outline-none focus:border-blue"
        />
      </div>
      <input
        type="range"
        min={UNITS_MIN}
        max={UNITS_MAX}
        step={1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-[var(--blue)]"
      />
      <p className="mt-2 text-xs text-ink-soft">
        Enter any whole number from {UNITS_MIN} to {UNITS_MAX}. High volumes
        usually need a high-traffic site and active local marketing.
      </p>
    </div>
  );
}

function ResultCard({
  title,
  monthly,
  annual,
  note,
  accent,
}: {
  title: string;
  monthly: number;
  annual: number;
  note: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`border p-6 md:p-7 ${
        accent ? "border-red/30 bg-paper" : "border-line bg-paper"
      }`}
    >
      <div className="flex items-center gap-2">
        {accent && <span className="h-3 w-1 bg-red" aria-hidden />}
        <p className="text-sm font-semibold text-ink">{title}</p>
      </div>
      <p className="mt-2 font-display text-3xl font-bold tracking-wide text-blue-deep">
        {formatZar(monthly)}
        <span className="ml-2 text-base font-semibold text-ink-soft">
          / month
        </span>
      </p>
      <p className="mt-1 text-sm text-ink-soft">{formatZar(annual)} / year</p>
      <p className="mt-3 text-xs leading-relaxed text-ink-soft">{note}</p>
    </div>
  );
}

function SliderField({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium text-ink">{label}</span>
        <span className="font-display text-lg font-bold text-blue">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-[var(--blue)]"
      />
    </label>
  );
}

function NumberField({
  label,
  value,
  min,
  max,
  step,
  prefix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">{label}</span>
      <div className="mt-2 flex items-center border border-line focus-within:border-blue">
        {prefix && (
          <span className="border-r border-line px-3 text-sm text-ink-soft">
            {prefix}
          </span>
        )}
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
          className="w-full bg-transparent px-3 py-3 text-[15px] text-ink outline-none"
        />
      </div>
    </label>
  );
}
