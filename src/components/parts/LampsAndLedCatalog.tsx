"use client";

import Image from "next/image";
import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";
import {
  LAMP_CATEGORIES,
  LAMP_PRODUCTS,
  type LampProduct,
} from "@/lib/parts/lampsAndLed";
import { CONTACT } from "@/lib/site";

function matchesQuery(product: LampProduct, q: string) {
  if (!q) return true;
  const hay = [
    product.sku,
    product.stockNo,
    product.altCode,
    product.title,
    product.application,
    product.category,
    product.voltage,
    product.colour,
    product.notes,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return q
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((token) => hay.includes(token));
}

export function LampsAndLedCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");
  const deferredQuery = useDeferredValue(query.trim());

  const filtered = useMemo(() => {
    return LAMP_PRODUCTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      return matchesQuery(p, deferredQuery);
    });
  }, [deferredQuery, category]);

  return (
    <section className="section-y bg-paper">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <div className="mb-8 grid gap-4 border border-line bg-paper-soft p-4 sm:p-5 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <label
              htmlFor="lamps-search"
              className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue"
            >
              Search parts
            </label>
            <input
              id="lamps-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="SKU, stock no, voltage, colour, light bar…"
              className="mt-2 w-full border border-line bg-paper px-4 py-3 text-[15px] text-ink outline-none ring-blue focus:ring-2"
            />
          </div>
          <div className="md:min-w-[240px]">
            <label
              htmlFor="lamps-category"
              className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue"
            >
              Category
            </label>
            <select
              id="lamps-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-2 w-full border border-line bg-paper px-4 py-3 text-[15px] text-ink outline-none ring-blue focus:ring-2"
            >
              <option value="all">All categories</option>
              {LAMP_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-ink-soft">
            Showing{" "}
            <span className="font-semibold text-ink">{filtered.length}</span> of{" "}
            {LAMP_PRODUCTS.length} lamps
          </p>
          <p className="text-sm text-ink-soft">
            Wholesale enquiry ·{" "}
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="font-semibold text-blue hover:underline"
            >
              {CONTACT.phoneDisplay}
            </a>
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="border border-line bg-paper-soft px-5 py-12 text-center">
            <p className="font-display text-2xl font-bold text-blue-deep">
              No lamps match
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              Try another SKU, voltage, or clear the category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("all");
              }}
              className="mt-5 bg-blue px-4 py-2.5 text-sm font-semibold text-paper hover:bg-blue-deep"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <LampProductCard key={product.sku} product={product} />
            ))}
          </div>
        )}

        <div className="mt-12 border border-line bg-paper-soft p-5 md:p-6">
          <p className="font-display text-2xl font-bold tracking-wide text-blue-deep">
            Need a lamp confirmed?
          </p>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            Catalogue lines are for identification. Confirm voltage, lens
            colour, mount, and vehicle or trailer type before ordering —
            Electro City can cross-check stock and alternatives across branches.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`mailto:${CONTACT.email}?subject=${encodeURIComponent("Lamps & LED lighting enquiry")}`}
              className="min-h-11 bg-blue px-4 py-2.5 text-sm font-semibold text-paper hover:bg-blue-deep"
            >
              Email sales
            </a>
            <Link
              href="/parts/ignition-modules"
              className="min-h-11 border border-line bg-paper px-4 py-2.5 text-sm font-semibold text-blue-deep hover:border-blue"
            >
              Ignition modules
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function LampProductCard({ product }: { product: LampProduct }) {
  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    `Lamp enquiry — ${product.sku}`,
  )}&body=${encodeURIComponent(
    `Hi Electro City,\n\nPlease quote / confirm stock for:\nSKU: ${product.sku}${product.stockNo ? `\nStock no: ${product.stockNo}` : ""}${product.altCode ? `\nAlt: ${product.altCode}` : ""}\n\nThanks`,
  )}`;

  return (
    <article className="flex flex-col border border-line bg-paper">
      <div className="relative aspect-square overflow-hidden border-b border-line bg-white">
        {product.imageSrc ? (
          <Image
            src={product.imageSrc}
            alt={product.title}
            fill
            className="object-contain p-6"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized
          />
        ) : (
          <LampPlaceholder sku={product.sku} colour={product.colour} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <p className="font-display text-2xl font-bold tracking-wide text-blue-deep">
            {product.sku}
          </p>
          <span className="border border-line bg-paper-soft px-2 py-1 text-xs font-semibold text-ink-soft">
            {product.category}
          </span>
        </div>

        <p className="mt-2 text-[15px] font-semibold leading-snug text-ink">
          {product.title}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          {product.application}
        </p>

        <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-line pt-4 text-sm">
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
              Stock no
            </dt>
            <dd className="mt-1 font-semibold text-ink">
              {product.stockNo ?? "—"}
            </dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
              Voltage
            </dt>
            <dd className="mt-1 font-semibold text-ink">
              {product.voltage ?? "—"}
            </dd>
          </div>
        </dl>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.colour ? (
            <span className="border border-line px-2 py-0.5 text-xs font-semibold text-blue-deep">
              {product.colour}
            </span>
          ) : null}
          {product.altCode ? (
            <span className="border border-line px-2 py-0.5 text-xs font-semibold text-ink-soft">
              {product.altCode}
            </span>
          ) : null}
        </div>

        {product.notes ? (
          <p className="mt-3 text-xs leading-relaxed text-ink-soft">
            {product.notes}
          </p>
        ) : null}

        <div className="mt-auto pt-5">
          <a
            href={mailto}
            className="inline-flex min-h-11 w-full items-center justify-center bg-blue px-4 text-sm font-semibold text-paper hover:bg-blue-deep"
          >
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}

function LampPlaceholder({
  sku,
  colour,
}: {
  sku: string;
  colour?: string;
}) {
  const glow =
    colour?.toLowerCase().includes("amber") ||
    colour?.toLowerCase().includes("yellow")
      ? "#f5a623"
      : colour?.toLowerCase().includes("red")
        ? "#c62828"
        : colour?.toLowerCase().includes("green")
          ? "#2e7d32"
          : colour?.toLowerCase().includes("blue")
            ? "#1565c0"
            : "#5b9fef";

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-white px-6 text-center">
      <svg
        width="88"
        height="64"
        viewBox="0 0 88 64"
        fill="none"
        aria-hidden
        className="opacity-90"
      >
        <circle cx="44" cy="28" r="16" stroke={glow} strokeWidth="2" />
        <circle cx="44" cy="28" r="8" fill={glow} opacity="0.85" />
        <path
          d="M28 48h32M32 54h24"
          stroke="#0c4da2"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <p className="font-display text-lg font-bold tracking-wide text-blue-deep">
        {sku}
      </p>
      <p className="text-xs text-ink-soft">Photo on request</p>
    </div>
  );
}
