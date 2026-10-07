"use client";

import { useState, type ReactNode } from "react";
import { PartSocialRangeHero } from "@/components/parts/PartSocialRangeHero";
import { PartSocialSwitcher } from "@/components/parts/PartSocialSwitcher";
import { PartSocialTemplate } from "@/components/parts/PartSocialTemplate";
import type { PartSocialProduct } from "@/lib/parts/alt1072";
import type { SocialTheme } from "@/lib/parts/socialTheme";

type Props = {
  product: PartSocialProduct;
};

export function PartsSocialStudio({ product }: Props) {
  const [theme, setTheme] = useState<SocialTheme>("light");

  return (
    <section className="section-y bg-paper-soft">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <div className="mb-8 max-w-3xl border border-line bg-paper p-4 sm:p-5 md:p-6">
          <p className="font-display text-2xl font-bold tracking-wide text-blue-deep sm:text-[1.75rem]">
            {product.sku} · {product.title}
          </p>
          <p className="mt-2 text-sm text-ink-soft">OEM {product.oem}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            {product.blurb}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {product.hashtags.map((tag) => (
              <span
                key={tag}
                className="border border-line bg-paper-soft px-2.5 py-1.5 text-xs font-semibold text-blue-deep"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            Posts are designed for phone feeds — big type, high contrast. Preview
            scales to your screen; downloads stay full 1080 resolution.
          </p>
        </div>

        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue">
              Board colour
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              Light is the default for readable mobile contrast.
            </p>
          </div>
          <div
            role="tablist"
            aria-label="Template colour"
            className="grid grid-cols-2 border border-line bg-paper p-1 sm:inline-grid"
          >
            {(
              [
                { id: "light", label: "Light" },
                { id: "dark", label: "Dark" },
              ] as const
            ).map((opt) => {
              const active = theme === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setTheme(opt.id)}
                  className={`min-h-11 px-5 text-sm font-semibold transition ${
                    active
                      ? "bg-blue text-paper"
                      : "text-ink-soft hover:text-blue-deep"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        <StyleBlock
          eyebrow="Style C · Range"
          title="Alternators — the range"
          description="Locked dark board, white type, one product shot cut and fanned three ways — hung off the bottom edge like a launch ad. No specs."
        >
          <FormatStack>
            <PartSocialRangeHero product={product} format="square" />
            <PartSocialRangeHero product={product} format="story" />
          </FormatStack>
        </StyleBlock>

        <StyleBlock
          eyebrow="Style A · Collage"
          title="All angles at once"
          description="Three product shots plus the full spec strip — one static post."
          className="mt-14 border-t border-line pt-12 sm:mt-16 sm:pt-14"
        >
          <FormatStack>
            <PartSocialTemplate
              product={product}
              format="square"
              theme={theme}
            />
            <PartSocialTemplate
              product={product}
              format="story"
              theme={theme}
            />
          </FormatStack>
        </StyleBlock>

        <StyleBlock
          eyebrow="Style B · Switcher"
          title="Angle by angle"
          description="Auto-cycles side → front → rear. Each frame highlights a different pair of specs. Pause, tap the bars, or download the current frame for a carousel."
          className="mt-14 border-t border-line pt-12 sm:mt-16 sm:pt-14"
        >
          <FormatStack>
            <PartSocialSwitcher
              product={product}
              format="square"
              theme={theme}
            />
            <PartSocialSwitcher
              product={product}
              format="story"
              theme={theme}
            />
          </FormatStack>
        </StyleBlock>
      </div>
    </section>
  );
}

function FormatStack({ children }: { children: ReactNode }) {
  return (
    <div className="grid items-start gap-10 md:grid-cols-2 md:gap-8">
      {children}
    </div>
  );
}

function StyleBlock({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-[1.75rem] font-bold tracking-wide text-blue-deep sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 mb-7 max-w-2xl text-[15px] leading-relaxed text-ink-soft sm:mb-8">
        {description}
      </p>
      {children}
    </div>
  );
}
