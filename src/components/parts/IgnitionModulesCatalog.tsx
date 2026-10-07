"use client";

import Image from "next/image";
import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";
import {
  IGNITION_MAKES,
  IGNITION_MODULES,
  type IgnitionModule,
} from "@/lib/parts/ignitionModules";
import { CONTACT } from "@/lib/site";

function matchesQuery(product: IgnitionModule, q: string) {
  if (!q) return true;
  const hay = [
    product.sku,
    product.stockNo,
    product.altCode,
    product.title,
    product.application,
    product.pins,
    product.notes,
    ...product.makes,
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

export function IgnitionModulesCatalog() {
  const [query, setQuery] = useState("");
  const [make, setMake] = useState<string>("all");
  const deferredQuery = useDeferredValue(query.trim());

  const filtered = useMemo(() => {
    return IGNITION_MODULES.filter((p) => {
      if (make !== "all" && !p.makes.includes(make)) return false;
      return matchesQuery(p, deferredQuery);
    });
  }, [deferredQuery, make]);

  return (
    <section className="section-y bg-paper">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <div className="mb-8 grid gap-4 border border-line bg-paper-soft p-4 sm:p-5 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <label
              htmlFor="ignition-search"
              className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue"
            >
              Search parts
            </label>
            <input
              id="ignition-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="SKU, stock no, IGM code, make, pins…"
              className="mt-2 w-full border border-line bg-paper px-4 py-3 text-[15px] text-ink outline-none ring-blue focus:ring-2"
            />
          </div>
          <div className="md:min-w-[220px]">
            <label
              htmlFor="ignition-make"
              className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue"
            >
              Make
            </label>
            <select
              id="ignition-make"
              value={make}
              onChange={(e) => setMake(e.target.value)}
              className="mt-2 w-full border border-line bg-paper px-4 py-3 text-[15px] text-ink outline-none ring-blue focus:ring-2"
            >
              <option value="all">All makes</option>
              {IGNITION_MAKES.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-ink-soft">
            Showing{" "}
            <span className="font-semibold text-ink">{filtered.length}</span> of{" "}
            {IGNITION_MODULES.length} modules
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
              No modules match
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              Try another SKU, stock number, or clear the make filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setMake("all");
              }}
              className="mt-5 bg-blue px-4 py-2.5 text-sm font-semibold text-paper hover:bg-blue-deep"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <IgnitionModuleCard key={product.sku} product={product} />
            ))}
          </div>
        )}

        <div className="mt-12 border border-line bg-paper-soft p-5 md:p-6">
          <p className="font-display text-2xl font-bold tracking-wide text-blue-deep">
            Need a module confirmed?
          </p>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            Catalogue figures are for identification. Confirm connector, pins,
            and vehicle before ordering — Electro City can cross-check stock and
            alternatives across branches.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`mailto:${CONTACT.email}?subject=${encodeURIComponent("Ignition module enquiry")}`}
              className="min-h-11 bg-blue px-4 py-2.5 text-sm font-semibold text-paper hover:bg-blue-deep"
            >
              Email sales
            </a>
            <Link
              href="/parts/lamps-and-led"
              className="min-h-11 border border-line bg-paper px-4 py-2.5 text-sm font-semibold text-blue-deep hover:border-blue"
            >
              Lamps &amp; LED
            </Link>
            <Link
              href="/parts/social"
              className="min-h-11 border border-line bg-paper px-4 py-2.5 text-sm font-semibold text-blue-deep hover:border-blue"
            >
              Parts social templates
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function IgnitionModuleCard({ product }: { product: IgnitionModule }) {
  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    `Ignition module enquiry — ${product.sku}`,
  )}&body=${encodeURIComponent(
    `Hi Electro City,\n\nPlease quote / confirm stock for:\nSKU: ${product.sku}\nStock no: ${product.stockNo}${product.altCode ? `\nAlt: ${product.altCode}` : ""}\n\nThanks`,
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
          <ModulePlaceholder sku={product.sku} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <p className="font-display text-2xl font-bold tracking-wide text-blue-deep">
            {product.sku}
          </p>
          {product.pins ? (
            <span className="border border-line bg-paper-soft px-2 py-1 text-xs font-semibold text-ink-soft">
              {product.pins}
            </span>
          ) : null}
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
            <dd className="mt-1 font-semibold text-ink">{product.stockNo}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
              Alt / IGM
            </dt>
            <dd className="mt-1 font-semibold text-ink">
              {product.altCode ?? "—"}
            </dd>
          </div>
        </dl>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.makes.map((m) => (
            <span
              key={m}
              className="border border-line px-2 py-0.5 text-xs font-semibold text-blue-deep"
            >
              {m}
            </span>
          ))}
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

function ModulePlaceholder({ sku }: { sku: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-white px-6 text-center">
      <svg
        width="88"
        height="64"
        viewBox="0 0 88 64"
        fill="none"
        aria-hidden
        className="opacity-80"
      >
        <rect
          x="8"
          y="10"
          width="72"
          height="44"
          rx="4"
          stroke="#0c4da2"
          strokeWidth="2"
        />
        <rect x="18" y="20" width="28" height="10" fill="#0c4da2" />
        <circle cx="62" cy="25" r="5" fill="#c62828" />
        <path
          d="M20 42h48M20 48h32"
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
