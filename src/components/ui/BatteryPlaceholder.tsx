"use client";

import { useId } from "react";
import type { BatterySize } from "@/lib/batteries";

const SIZE_SCALE: Record<BatterySize, { w: number; h: number; label: string }> = {
  compact: { w: 92, h: 78, label: "Compact" },
  small: { w: 108, h: 88, label: "Small" },
  medium: { w: 124, h: 96, label: "Medium" },
  large: { w: 140, h: 108, label: "Large" },
  xl: { w: 156, h: 118, label: "XL" },
};

type Props = {
  size: BatterySize;
  accent?: string;
  className?: string;
  label?: string;
};

/** Temporary product silhouette until Unitech pack shots are supplied. */
export function BatteryPlaceholder({
  size,
  accent = "#0c4da2",
  className = "",
  label,
}: Props) {
  const uid = useId().replace(/:/g, "");
  const bodyId = `bat-body-${uid}`;
  const faceId = `bat-face-${uid}`;
  const dim = SIZE_SCALE[size];
  return (
    <div
      className={`relative flex flex-col items-center justify-end ${className}`}
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      <svg
        viewBox="0 0 160 130"
        width={dim.w}
        height={dim.h}
        className="drop-shadow-sm"
      >
        <defs>
          <linearGradient id={bodyId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a2f4a" />
            <stop offset="55%" stopColor="#0f1f33" />
            <stop offset="100%" stopColor="#0a1628" />
          </linearGradient>
          <linearGradient id={faceId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#243b55" />
            <stop offset="100%" stopColor="#122033" />
          </linearGradient>
        </defs>
        <rect x="42" y="10" width="22" height="14" rx="2" fill="#c0c8d4" />
        <rect x="96" y="10" width="22" height="14" rx="2" fill="#c0c8d4" />
        <rect x="46" y="6" width="14" height="6" rx="1" fill="#e8eef6" />
        <rect x="100" y="6" width="14" height="6" rx="1" fill="#e8eef6" />
        <rect x="18" y="22" width="124" height="96" rx="6" fill={`url(#${bodyId})`} />
        <rect x="26" y="30" width="108" height="72" rx="4" fill={`url(#${faceId})`} />
        <rect x="34" y="40" width="92" height="22" rx="2" fill={accent} />
        <rect
          x="40"
          y="46"
          width="48"
          height="5"
          rx="1"
          fill="rgba(255,255,255,0.85)"
        />
        <rect
          x="40"
          y="54"
          width="28"
          height="3"
          rx="1"
          fill="rgba(255,255,255,0.45)"
        />
        <rect
          x="40"
          y="72"
          width="80"
          height="22"
          rx="2"
          fill="rgba(220,232,247,0.12)"
          stroke="rgba(220,232,247,0.25)"
        />
        <rect
          x="48"
          y="79"
          width="28"
          height="3"
          rx="1"
          fill="rgba(255,255,255,0.35)"
        />
        <rect
          x="48"
          y="86"
          width="40"
          height="3"
          rx="1"
          fill="rgba(255,255,255,0.22)"
        />
        <rect
          x="68"
          y="24"
          width="24"
          height="4"
          rx="1"
          fill="rgba(255,255,255,0.15)"
        />
      </svg>
      <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-soft/70">
        Placeholder · {dim.label}
      </span>
    </div>
  );
}
