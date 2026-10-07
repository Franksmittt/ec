"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { toPng } from "html-to-image";
import { PartsBrandMark } from "@/components/parts/PartsBrandMark";
import { SocialArtboardFrame } from "@/components/parts/SocialArtboardFrame";
import type { PartSocialProduct, PartSocialSlide } from "@/lib/parts/alt1072";
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

const SLIDE_MS = 3200;

type Props = {
  product: PartSocialProduct;
  format: SocialFormat;
  theme?: SocialTheme;
};

export function PartSocialSwitcher({
  product,
  format,
  theme = "light",
}: Props) {
  const artboardRef = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const size = SIZES[format];
  const t = SOCIAL_THEMES[theme];
  const slides = product.slides;
  const slide = slides[index] ?? slides[0];

  useEffect(() => {
    if (reduceMotion || paused || slides.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion, slides.length]);

  async function download() {
    const node = artboardRef.current;
    if (!node || !slide) return;
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
      link.download = `${product.sku}-${format}-${theme}-${slide.angle}.png`;
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
            {size.label} · Switcher
          </p>
          <p className="mt-1 text-sm text-ink-soft">
            {size.w} × {size.h} px · {t.label} · frame {index + 1}/
            {slides.length}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            className="min-h-11 border border-line bg-paper px-4 py-2.5 text-sm font-semibold text-blue-deep hover:border-blue"
          >
            {paused ? "Play" : "Pause"}
          </button>
          <button
            type="button"
            onClick={download}
            disabled={busy}
            className="min-h-11 bg-blue px-4 py-2.5 text-sm font-semibold text-paper hover:bg-blue-deep disabled:opacity-60"
          >
            {busy ? "Exporting…" : "Download frame"}
          </button>
        </div>
      </div>

      <SocialArtboardFrame
        width={size.w}
        height={size.h}
        artboardRef={artboardRef}
        className={theme === "light" ? "bg-white" : "bg-ink"}
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={() => setPaused(false)}
      >
        {format === "square" ? (
          <SquareSwitcher
            product={product}
            slide={slide}
            index={index}
            total={slides.length}
            reduceMotion={!!reduceMotion}
            onSelect={setIndex}
            theme={theme}
            t={t}
          />
        ) : (
          <StorySwitcher
            product={product}
            slide={slide}
            index={index}
            total={slides.length}
            reduceMotion={!!reduceMotion}
            onSelect={setIndex}
            theme={theme}
            t={t}
          />
        )}
      </SocialArtboardFrame>

      <div className="flex items-center justify-center gap-1 py-1">
        {slides.map((s, i) => (
          <button
            key={s.angle}
            type="button"
            aria-label={`Show ${s.angle} angle`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className="flex min-h-11 min-w-11 items-center justify-center touch-manipulation"
          >
            <span
              className={`block h-3 w-10 ${
                i === index ? "bg-blue" : "bg-line"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

type SwitcherArtProps = {
  product: PartSocialProduct;
  slide: PartSocialSlide;
  index: number;
  total: number;
  reduceMotion: boolean;
  onSelect: (i: number) => void;
  theme: SocialTheme;
  t: SocialThemeTokens;
};

function SquareSwitcher({
  product,
  slide,
  index,
  total,
  reduceMotion,
  onSelect,
  theme,
  t,
}: SwitcherArtProps) {
  return (
    <div
      className="relative flex h-full w-full flex-col"
      style={{ background: t.board, color: t.ink }}
    >
      <div className="flex items-start justify-between gap-6 px-11 pt-11">
        <PartsBrandMark size="compact" theme={theme} />
        <div className="text-right">
          <p className="font-display text-[56px] font-bold leading-none tracking-wide">
            {product.sku}
          </p>
          <p className="mt-2 text-[22px] font-semibold" style={{ color: t.soft }}>
            OEM {product.oem}
          </p>
        </div>
      </div>

      <div
        className="relative mx-11 mt-6 flex-1 overflow-hidden rounded-[24px]"
        style={{
          background: theme === "light" ? "#f0f4fa" : "rgba(0,0,0,0.55)",
          border: `2px solid ${t.wellBorder}`,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.angle}
            className="absolute inset-0"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={slide.image}
              alt={`${product.sku} ${slide.angle}`}
              fill
              className="object-contain p-10"
              sizes="900px"
              unoptimized
              priority
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4">
          <p
            className="text-[20px] font-bold uppercase tracking-[0.16em]"
            style={{ color: t.soft }}
          >
            {slide.angle} view
          </p>
          <div className="flex gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide ${i + 1}`}
                onClick={() => onSelect(i)}
                className="h-3 w-9"
                style={{
                  background: i === index ? t.bar : t.progressIdle,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="px-11 pb-10 pt-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.angle}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            <p className="font-display text-[44px] font-bold leading-none tracking-wide">
              {product.title}
            </p>
            <p
              className="mt-3 text-[26px] font-semibold leading-snug"
              style={{ color: t.muted }}
            >
              {slide.caption}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {slide.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="px-5 py-5"
                  style={{
                    background: t.chip,
                    border: `2px solid ${t.chipBorder}`,
                  }}
                >
                  <p
                    className="text-[18px] font-bold uppercase tracking-[0.12em]"
                    style={{ color: t.soft }}
                  >
                    {spec.label}
                  </p>
                  <p className="mt-2 font-display text-[52px] font-bold leading-none tracking-wide">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div
          className="mt-6 flex items-center justify-between pt-5"
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

function StorySwitcher({
  product,
  slide,
  index,
  total,
  reduceMotion,
  onSelect,
  theme,
  t,
}: SwitcherArtProps) {
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
          background: theme === "light" ? "#f0f4fa" : "rgba(0,0,0,0.55)",
          border: `2px solid ${t.wellBorder}`,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.angle}
            className="absolute inset-0"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={slide.image}
              alt={`${product.sku} ${slide.angle}`}
              fill
              className="object-contain p-12"
              sizes="900px"
              unoptimized
              priority
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between gap-4">
          <p
            className="text-[22px] font-bold uppercase tracking-[0.16em]"
            style={{ color: t.soft }}
          >
            {slide.angle} view · {index + 1}/{total}
          </p>
          <div className="flex gap-2.5">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide ${i + 1}`}
                onClick={() => onSelect(i)}
                className="h-3.5 w-11"
                style={{
                  background: i === index ? t.bar : t.progressIdle,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="px-12 pb-14 pt-9">
        <div className="h-2 w-20" style={{ background: t.bar }} aria-hidden />
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.angle}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            <p className="mt-6 font-display text-[52px] font-bold leading-none tracking-wide">
              {slide.caption}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {slide.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="px-6 py-6"
                  style={{
                    background: t.chip,
                    border: `2px solid ${t.chipBorder}`,
                  }}
                >
                  <p
                    className="text-[20px] font-bold uppercase tracking-[0.12em]"
                    style={{ color: t.soft }}
                  >
                    {spec.label}
                  </p>
                  <p className="mt-3 font-display text-[60px] font-bold leading-none tracking-wide">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div
          className="mt-8 grid grid-cols-2 gap-6 pt-7"
          style={{ borderTop: `2px solid ${t.rule}` }}
        >
          {product.fitment.map((f) => (
            <div key={f.series} className="flex flex-col gap-1">
              <p className="text-[26px] font-bold leading-tight">{f.series}</p>
              <p className="text-[22px] font-semibold" style={{ color: t.muted }}>
                {f.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[24px] font-semibold" style={{ color: t.soft }}>
            {product.engines}
          </p>
          <p className="text-[28px] font-bold" style={{ color: t.link }}>
            electro-city.co.za
          </p>
        </div>
      </div>
    </div>
  );
}
