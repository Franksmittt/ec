"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { PartsBrandMark } from "@/components/parts/PartsBrandMark";
import { SocialArtboardFrame } from "@/components/parts/SocialArtboardFrame";
import type { PartSocialProduct } from "@/lib/parts/alt1072";
import {
  SOCIAL_THEMES,
  type SocialTheme,
  type SocialThemeTokens,
} from "@/lib/parts/socialTheme";

export type SocialFormat = "square" | "story";

const SIZES: Record<SocialFormat, { w: number; h: number; label: string }> = {
  square: { w: 1080, h: 1080, label: "1:1 Square" },
  story: { w: 1080, h: 1920, label: "9:16 Vertical" },
};

type Props = {
  product: PartSocialProduct;
  format: SocialFormat;
  theme?: SocialTheme;
};

export function PartSocialTemplate({
  product,
  format,
  theme = "light",
}: Props) {
  const artboardRef = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState(false);
  const size = SIZES[format];
  const t = SOCIAL_THEMES[theme];

  async function download() {
    const node = artboardRef.current;
    if (!node) return;
    setBusy(true);
    try {
      await new Promise((r) => requestAnimationFrame(() => r(null)));
      const dataUrl = await toPng(node, {
        cacheBust: true,
        pixelRatio: 2,
        canvasWidth: size.w,
        canvasHeight: size.h,
        width: size.w,
        height: size.h,
        style: {
          transform: "scale(1)",
          transformOrigin: "top left",
          width: `${size.w}px`,
          height: `${size.h}px`,
        },
      });
      const link = document.createElement("a");
      link.download = `${product.sku}-${format}-${theme}.png`;
      link.href = dataUrl;
      link.click();
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue">
            {size.label}
          </p>
          <p className="mt-1 text-sm text-ink-soft">
            {size.w} × {size.h} px · {t.label}
          </p>
        </div>
        <button
          type="button"
          onClick={download}
          disabled={busy}
          className="min-h-11 bg-blue px-4 py-2.5 text-sm font-semibold text-paper hover:bg-blue-deep disabled:opacity-60"
        >
          {busy ? "Exporting…" : "Download PNG"}
        </button>
      </div>

      <SocialArtboardFrame
        width={size.w}
        height={size.h}
        artboardRef={artboardRef}
        className={theme === "light" ? "bg-white" : "bg-ink"}
      >
        {format === "square" ? (
          <SquareArt product={product} theme={theme} t={t} />
        ) : (
          <StoryArt product={product} theme={theme} t={t} />
        )}
      </SocialArtboardFrame>
    </div>
  );
}

type ArtProps = {
  product: PartSocialProduct;
  theme: SocialTheme;
  t: SocialThemeTokens;
};

function SquareArt({ product, theme, t }: ArtProps) {
  return (
    <div
      className="relative flex h-full w-full flex-col"
      style={{ background: t.board, color: t.ink }}
    >
      <div className="flex items-start justify-between gap-6 px-11 pt-11">
        <PartsBrandMark size="compact" theme={theme} />
        <div className="text-right">
          <p
            className="font-display text-[56px] font-bold leading-none tracking-wide"
            style={{ color: t.ink }}
          >
            {product.sku}
          </p>
          <p className="mt-2 text-[22px] font-semibold" style={{ color: t.soft }}>
            OEM {product.oem}
          </p>
        </div>
      </div>

      <div
        className="relative mx-11 mt-6 flex flex-1 overflow-hidden rounded-[24px]"
        style={{
          background: t.well,
          border: `2px solid ${t.wellBorder}`,
        }}
      >
        <div className="relative grid h-full w-full grid-cols-[1.35fr_0.65fr] gap-4 p-5">
          <div
            className="relative overflow-hidden rounded-[18px]"
            style={{
              background: theme === "light" ? "#f0f4fa" : "#000",
              border: `1px solid ${t.wellBorder}`,
            }}
          >
            <Image
              src={product.images.side}
              alt={`${product.sku} side view`}
              fill
              className="object-contain p-4"
              sizes="600px"
              unoptimized
            />
          </div>
          <div className="grid grid-rows-2 gap-4">
            {[product.images.front, product.images.rear].map((src, i) => (
              <div
                key={src}
                className="relative overflow-hidden rounded-[18px]"
                style={{
                  background: theme === "light" ? "#f0f4fa" : "#000",
                  border: `1px solid ${t.wellBorder}`,
                }}
              >
                <Image
                  src={src}
                  alt={`${product.sku} ${i === 0 ? "front" : "rear"} view`}
                  fill
                  className="object-contain p-3"
                  sizes="280px"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-11 pb-9 pt-5">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-display text-[48px] font-bold leading-none tracking-wide">
              {product.title}
            </p>
            <p
              className="mt-3 max-w-[36rem] text-[24px] font-medium leading-snug"
              style={{ color: t.muted }}
            >
              {product.fitment.map((f) => f.series).join(" · ")}
            </p>
          </div>
          <div className="h-2 w-16 shrink-0" style={{ background: t.bar }} aria-hidden />
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {product.specs.map((spec) => (
            <div
              key={spec.label}
              className="px-4 py-4"
              style={{
                background: t.chip,
                border: `2px solid ${t.chipBorder}`,
              }}
            >
              <p
                className="text-[16px] font-bold uppercase tracking-[0.12em]"
                style={{ color: t.soft }}
              >
                {spec.label}
              </p>
              <p
                className="mt-1.5 font-display text-[36px] font-bold leading-none tracking-wide"
                style={{ color: t.ink }}
              >
                {spec.value}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-5 flex items-center justify-between pt-5"
          style={{ borderTop: `2px solid ${t.rule}` }}
        >
          <p className="text-[22px] font-semibold" style={{ color: t.muted }}>
            {product.engines}
          </p>
          <p className="text-[24px] font-bold" style={{ color: t.link }}>
            electro-city.co.za
          </p>
        </div>
      </div>
    </div>
  );
}

function StoryArt({ product, theme, t }: ArtProps) {
  return (
    <div
      className="relative flex h-full w-full flex-col"
      style={{ background: t.board, color: t.ink }}
    >
      <div className="px-12 pt-14">
        <PartsBrandMark theme={theme} />
        <div className="mt-9">
          <p
            className="text-[24px] font-bold uppercase tracking-[0.2em]"
            style={{ color: t.accent }}
          >
            {product.category}
          </p>
          <p className="mt-3 font-display text-[96px] font-bold leading-[0.9] tracking-wide">
            {product.sku}
          </p>
          <p className="mt-4 text-[30px] font-semibold" style={{ color: t.muted }}>
            {product.title} · OEM {product.oem}
          </p>
        </div>
      </div>

      <div
        className="relative mx-12 mt-9 flex-1 overflow-hidden rounded-[28px]"
        style={{
          background: t.well,
          border: `2px solid ${t.wellBorder}`,
        }}
      >
        <div className="relative flex h-full flex-col gap-4 p-5">
          <div
            className="relative min-h-0 flex-1 overflow-hidden rounded-[22px]"
            style={{
              background: theme === "light" ? "#f0f4fa" : "#000",
              border: `1px solid ${t.wellBorder}`,
            }}
          >
            <Image
              src={product.images.side}
              alt={`${product.sku} side view`}
              fill
              className="object-contain p-6"
              sizes="900px"
              unoptimized
            />
          </div>
          <div className="grid h-[230px] grid-cols-2 gap-4">
            {[product.images.front, product.images.rear].map((src, i) => (
              <div
                key={src}
                className="relative overflow-hidden rounded-[18px]"
                style={{
                  background: theme === "light" ? "#f0f4fa" : "#000",
                  border: `1px solid ${t.wellBorder}`,
                }}
              >
                <Image
                  src={src}
                  alt={`${product.sku} ${i === 0 ? "front" : "rear"}`}
                  fill
                  className="object-contain p-3"
                  sizes="400px"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-12 pb-14 pt-8">
        <div className="h-2 w-20" style={{ background: t.bar }} aria-hidden />
        <p className="mt-6 font-display text-[52px] font-bold leading-none tracking-wide">
          Direct-fit replacement
        </p>
        <p
          className="mt-4 text-[28px] font-medium leading-snug"
          style={{ color: t.muted }}
        >
          {product.blurb}
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {product.specs.map((spec) => (
            <div
              key={spec.label}
              className="px-5 py-5"
              style={{
                background: t.chip,
                border: `2px solid ${t.chipBorder}`,
              }}
            >
              <p
                className="text-[17px] font-bold uppercase tracking-[0.12em]"
                style={{ color: t.soft }}
              >
                {spec.label}
              </p>
              <p className="mt-2 font-display text-[42px] font-bold leading-none tracking-wide">
                {spec.value}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-8 space-y-4 pt-7"
          style={{ borderTop: `2px solid ${t.rule}` }}
        >
          {product.fitment.map((f) => (
            <div
              key={f.series}
              className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
            >
              <p className="text-[28px] font-bold">{f.series}</p>
              <p className="text-[24px] font-semibold" style={{ color: t.muted }}>
                {f.detail}
              </p>
            </div>
          ))}
          <p className="pt-1 text-[24px] font-semibold" style={{ color: t.soft }}>
            Engines · {product.engines}
          </p>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4">
          <p
            className="text-[24px] font-bold uppercase tracking-[0.12em]"
            style={{ color: t.soft }}
          >
            Power you can trust
          </p>
          <p className="text-[28px] font-bold" style={{ color: t.link }}>
            electro-city.co.za
          </p>
        </div>
      </div>
    </div>
  );
}
