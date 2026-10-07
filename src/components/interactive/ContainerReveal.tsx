"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
import { useRef, useState } from "react";

const layers = [
  {
    id: "shell",
    title: "Structural shell",
    copy: "6m steel container with R-3.7 extruded polystyrene insulation, high-security locking, and thermal protection for battery stock.",
  },
  {
    id: "infra",
    title: "Infrastructure core",
    copy: "SANS 10142-1 oriented DB board design, surge protection as listed on the BoM, equipotential bonding of the steel shell, and fire equipment as scheduled. Internal CoC for the unit as built. Site connection CoC remains the buyer's responsibility.",
  },
  {
    id: "retail",
    title: "Retail environment",
    copy: "Ergonomic shelving, diagnostic tools, and a ready-to-trade Unitech opening inventory. Bring your own POS, accounting, and IT. Electro City does not control or see those systems.",
  },
];

export function ContainerReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const shellY = useTransform(scrollYProgress, [0, 0.35], [0, -90]);
  const shellOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.2]);
  const infraY = useTransform(scrollYProgress, [0.2, 0.55], [70, -30]);
  const infraOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.35, 0.6],
    [0, 1, 0.25],
  );
  const retailY = useTransform(scrollYProgress, [0.45, 0.8], [90, 0]);
  const retailOpacity = useTransform(scrollYProgress, [0.4, 0.65], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.33) setActive(0);
    else if (v < 0.66) setActive(1);
    else setActive(2);
  });

  return (
    <section id="container" className="bg-paper-soft">
      <div ref={ref} className="relative h-[260vh]">
        <div className="sticky top-16 flex min-h-[calc(100vh-4rem)] items-center">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[0.95fr_1.05fr] md:px-8">
            <div>
              <h2 className="font-display text-4xl font-bold tracking-wide text-blue-deep md:text-5xl">
                What’s inside the box
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                Scroll through the three layers of the asset: structure,
                compliance, and the retail floor. Then request the prospectus.
              </p>

              <ol className="mt-10 space-y-8">
                {layers.map((layer, index) => (
                  <li
                    key={layer.id}
                    className="transition-opacity duration-300"
                    style={{ opacity: reduce || active === index ? 1 : 0.35 }}
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-2xl font-bold text-blue">
                        0{index + 1}
                      </span>
                      <span className="text-xl font-semibold text-ink">
                        {layer.title}
                      </span>
                    </div>
                    <p className="mt-2 max-w-md pl-10 text-[15px] leading-relaxed text-ink-soft">
                      {layer.copy}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="relative mx-auto aspect-[4/5] w-full max-w-md md:max-w-none">
              {reduce ? (
                <StaticStack />
              ) : (
                <>
                  <RevealPanel
                    y={shellY}
                    opacity={shellOpacity}
                    className="container-face"
                    label="Shell"
                  >
                    <div className="absolute left-[10%] top-[14%] flex flex-col gap-1.5">
                      <div className="flex h-8 items-stretch">
                        <span className="w-1.5 bg-red" />
                        <span className="bg-paper px-3 text-xs font-semibold leading-8 text-blue-deep">
                          YOUR COMPANY NAME
                        </span>
                      </div>
                      <span className="bg-blue px-3 py-1 text-[10px] font-semibold tracking-wide text-paper">
                        CAR BATTERIES
                      </span>
                      <span className="border border-white/40 bg-white/15 px-3 py-1 text-[10px] font-semibold tracking-wide text-paper">
                        UNITECH
                      </span>
                    </div>
                  </RevealPanel>
                  <RevealPanel
                    y={infraY}
                    opacity={infraOpacity}
                    className="inset-[8%] bg-paper ring-1 ring-blue/20"
                    label="Infrastructure"
                  >
                    <div className="absolute inset-x-[10%] top-[30%] grid grid-cols-3 gap-3">
                      {["DB", "SPD", "DCP"].map((label) => (
                        <div
                          key={label}
                          className="flex h-16 items-center justify-center bg-blue-mist text-sm font-semibold tracking-wide text-blue-deep"
                        >
                          {label}
                        </div>
                      ))}
                    </div>
                  </RevealPanel>
                  <RevealPanel
                    y={retailY}
                    opacity={retailOpacity}
                    className="inset-[16%] bg-paper ring-1 ring-line"
                    label="Retail"
                  >
                    <div className="absolute inset-x-[10%] bottom-[14%] top-[28%] grid grid-cols-4 gap-2">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div
                          key={i}
                          className="bg-gradient-to-b from-blue/30 to-blue-mist"
                        />
                      ))}
                    </div>
                  </RevealPanel>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RevealPanel({
  y,
  opacity,
  className,
  label,
  children,
}: {
  y: MotionValue<number>;
  opacity: MotionValue<number>;
  className: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      style={{ y, opacity }}
      className={`absolute inset-0 overflow-hidden rounded-[2px] shadow-[0_20px_50px_rgba(8,53,114,0.14)] ${className}`}
    >
      <span className="absolute right-4 top-4 text-xs font-medium text-paper/80 mix-blend-difference">
        {label}
      </span>
      {children}
    </motion.div>
  );
}

function StaticStack() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-4">
      {layers.map((layer, i) => (
        <div key={layer.id} className="border border-line bg-paper p-5">
          <p className="font-display text-lg font-bold text-blue">
            0{i + 1} · {layer.title}
          </p>
          <p className="mt-2 text-sm text-ink-soft">{layer.copy}</p>
        </div>
      ))}
    </div>
  );
}
