"use client";

import Image from "next/image";
import type { SocialTheme } from "@/lib/parts/socialTheme";

type Props = {
  size?: "compact" | "full";
  theme?: SocialTheme;
};

/** Official Electro City wordmark — plate only on dark boards for contrast. */
export function PartsBrandMark({ size = "full", theme = "light" }: Props) {
  const compact = size === "compact";
  const light = theme === "light";

  return (
    <div
      className={`flex items-center gap-3 sm:gap-4 ${
        light
          ? "rounded-2xl border border-[rgba(7,22,40,0.14)] bg-white"
          : "rounded-2xl bg-white"
      } ${compact ? "px-4 py-2.5" : "px-5 py-3.5"}`}
    >
      <Image
        src="/brand/electro-city-logo.png"
        alt="Electro City"
        width={498}
        height={149}
        className={compact ? "h-[48px] w-auto" : "h-[64px] w-auto"}
        unoptimized
        priority
      />
      <span className="h-9 w-px bg-black/15" aria-hidden />
      <span
        className={`font-semibold uppercase tracking-[0.16em] text-[#083572] ${
          compact ? "text-[18px]" : "text-[22px]"
        }`}
      >
        Parts
      </span>
    </div>
  );
}
