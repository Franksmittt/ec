"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { SocialArtboardFrame } from "@/components/parts/SocialArtboardFrame";
import type { PartSocialProduct } from "@/lib/parts/alt1072";

export type SocialFormat = "square" | "story";

const SIZES: Record<SocialFormat, { w: number; h: number; label: string }> = {
  square: { w: 1080, h: 1080, label: "1:1 Square" },
  story: { w: 1080, h: 1920, label: "9:16 Vertical" },
};

type Props = {
  product: PartSocialProduct;
  format: SocialFormat;
};

/**
 * Apple-style range ad: pure black, white type, products cropped hard
 * by the bottom edge — one hero shot, cut and fanned three ways.
 */
export function PartSocialRangeHero({ product, format }: Props) {
  const artboardRef = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState(false);
  const size = SIZES[format];

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
      link.download = `${product.sku}-range-${format}.png`;
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
            {size.label} · Range
          </p>
          <p className="mt-1 text-sm text-ink-soft">
            {size.w} × {size.h} px · Dark
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
        className="bg-black"
      >
        {format === "square" ? (
          <RangeBoard product={product} variant="square" />
        ) : (
          <RangeBoard product={product} variant="story" />
        )}
      </SocialArtboardFrame>
    </div>
  );
}

function RangeBoard({
  product,
  variant,
}: {
  product: PartSocialProduct;
  variant: "square" | "story";
}) {
  const story = variant === "story";

  return (
    <div className="relative h-full w-full overflow-hidden bg-black text-white">
      {/* Copy block — upper half, centred, lots of negative space */}
      <div
        className={`relative z-10 flex flex-col items-center text-center ${
          story ? "px-16 pt-[220px]" : "px-14 pt-[120px]"
        }`}
      >
        <p
          className={`font-medium tracking-wide text-white/90 ${
            story ? "text-[34px]" : "text-[28px]"
          }`}
        >
          Electro City
        </p>
        <h2
          className={`mt-5 font-semibold leading-[1.05] tracking-[-0.02em] text-white ${
            story ? "text-[92px]" : "text-[68px]"
          }`}
          style={{ fontFamily: "var(--font-source), system-ui, sans-serif" }}
        >
          A massive range.
          <br />
          Of alternators.
        </h2>
      </div>

      {/* Product fan — cropped by the bottom edge of the board */}
      <CroppedProductFan
        src={product.images.side}
        alt={`${product.sku} alternator`}
        story={story}
      />
    </div>
  );
}

/**
 * Same photo, three cuts — angled and hung off the bottom edge so only
 * the upper body shows (Apple XR crop language).
 */
function CroppedProductFan({
  src,
  alt,
  story,
}: {
  src: string;
  alt: string;
  story: boolean;
}) {
  const layers = [
    {
      // Back-left — mostly cut off
      className: story
        ? "left-[-18%] bottom-[-42%] h-[820px] w-[820px]"
        : "left-[-22%] bottom-[-48%] h-[720px] w-[720px]",
      transform: "rotate(-26deg)",
      z: 1,
      opacity: 0.88,
    },
    {
      // Back-right
      className: story
        ? "right-[-20%] bottom-[-44%] h-[840px] w-[840px]"
        : "right-[-24%] bottom-[-50%] h-[740px] w-[740px]",
      transform: "rotate(22deg)",
      z: 2,
      opacity: 0.9,
    },
    {
      // Front — strongest cut through the body
      className: story
        ? "left-[6%] bottom-[-52%] h-[900px] w-[900px]"
        : "left-[2%] bottom-[-56%] h-[800px] w-[800px]",
      transform: "rotate(-8deg)",
      z: 3,
      opacity: 1,
    },
  ];

  return (
    <div
      className={`pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden ${
        story ? "top-[46%]" : "top-[44%]"
      }`}
    >
      {layers.map((layer, i) => (
        <div
          key={i}
          className={`absolute ${layer.className}`}
          style={{
            transform: layer.transform,
            zIndex: layer.z,
            opacity: layer.opacity,
            filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.9))",
          }}
        >
          <Image
            src={src}
            alt={i === 2 ? alt : ""}
            fill
            aria-hidden={i !== 2}
            className="object-contain object-top"
            sizes="900px"
            unoptimized
            priority={i === 2}
          />
        </div>
      ))}
    </div>
  );
}
