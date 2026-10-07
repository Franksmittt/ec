"use client";

"use no memo";

import dynamic from "next/dynamic";
import { useState } from "react";
import { WALK_ZONES, type WalkZoneId } from "./types";

const WalkthroughCanvas = dynamic(
  () => import("./WalkthroughCanvas").then((m) => m.WalkthroughCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full min-h-[28rem] items-center justify-center bg-[#d7e2f0] text-sm text-ink-soft">
        Loading 3D walkthrough…
      </div>
    ),
  },
);

export function ContainerWalkthrough() {
  const [active, setActive] = useState<WalkZoneId>("overview");
  const current = WALK_ZONES.find((z) => z.id === active) ?? WALK_ZONES[0];

  return (
    <section id="walkthrough" className="section-y bg-blue-deep text-paper">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-mist">
              Immersive concept
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-wide md:text-4xl">
              Walk the 6m shop in 3D
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-blue-mist md:text-base">
              Drag to orbit. Scroll to zoom. Tap a hotspot or zone button to fly
              the camera. Concept model only — not a live store, not an Electro
              City branded franchise front.
            </p>
          </div>
          <p className="text-xs text-blue-mist md:text-right">
            Staff box inside · fitment on the apron outside
          </p>
        </div>

        <div className="mt-6 overflow-hidden border border-white/15 bg-[#d7e2f0]">
          <div
            className="relative w-full"
            style={{ height: "min(70vh, 38rem)", minHeight: "28rem" }}
          >
            <div className="absolute inset-0">
              <WalkthroughCanvas active={active} onSelect={setActive} />
            </div>
            <div className="pointer-events-none absolute left-3 top-3 z-10 border border-line bg-paper/95 px-3 py-2 text-xs text-ink-soft backdrop-blur md:left-4 md:top-4">
              Drag · scroll · click markers
            </div>
          </div>

          <div className="grid gap-0 border-t border-white/15 bg-blue-deep md:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-wrap gap-2 p-4 md:p-5">
              {WALK_ZONES.map((zone) => (
                <button
                  key={zone.id}
                  type="button"
                  onClick={() => setActive(zone.id)}
                  className={`border px-3 py-1.5 text-xs font-semibold transition ${
                    active === zone.id
                      ? "border-paper bg-paper text-blue-deep"
                      : "border-white/25 text-blue-mist hover:border-white/50 hover:text-paper"
                  }`}
                >
                  {zone.id === "overview"
                    ? "Overview"
                    : `${zone.id} · ${zone.title.split("·")[0].trim()}`}
                </button>
              ))}
            </div>
            <div className="border-t border-white/15 p-4 md:border-l md:border-t-0 md:p-5">
              <p className="font-display text-lg font-bold tracking-wide">
                {current.id === "overview"
                  ? current.title
                  : `${current.id} · ${current.title}`}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-blue-mist">
                {current.copy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
