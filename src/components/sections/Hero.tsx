"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { ConceptImage } from "@/components/ui/ConceptImage";

export function Hero() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <section className="relative isolate box-border flex h-[calc(100svh-var(--chrome-h))] max-h-[calc(100svh-var(--chrome-h))] min-h-[30rem] flex-col overflow-hidden">
      <div className="absolute inset-0 hero-field" aria-hidden />

      <div className="relative mx-auto grid h-full w-full max-w-6xl grid-cols-1 content-center items-center gap-5 overflow-hidden px-5 py-4 md:grid-cols-2 md:gap-8 md:px-8 md:py-5">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: ready && !reduce ? 0.55 : 0,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-xl"
        >
          <p className="font-display text-[clamp(2.85rem,6.8vw,5.5rem)] font-bold leading-[0.88] tracking-wide text-blue-deep">
            ELECTRO
            <br />
            <span className="text-blue">CITY</span>
          </p>

          <span className="accent-slash mt-3" aria-hidden />

          <h1 className="mt-3 max-w-md text-lg font-semibold leading-snug text-ink sm:text-xl md:text-[1.55rem]">
            Buy the container. Run your own shop. We supply.
          </h1>

          <p className="mt-2.5 max-w-md text-sm leading-relaxed text-ink-soft md:text-[15px]">
            Intended as an independent asset sale — not marketed as a franchise.
            One fitted Unitech retail package, then operator wholesale pricing.
            Your POS and books stay yours. Indicative entry{" "}
            <strong className="font-semibold text-ink">R150,000 ex VAT</strong>.
            Delivery, site works, and permits are separate. Final contracts
            decide legal characterisation.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="/prospectus"
              className="bg-blue px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-blue-deep"
            >
              Request prospectus
            </Link>
            <Link
              href="/calculator"
              className="border border-blue/25 bg-paper/80 px-5 py-2.5 text-sm font-semibold text-blue-deep transition hover:border-blue"
            >
              Run the numbers
            </Link>
          </div>

          <p className="mt-3 max-w-md text-xs leading-relaxed text-ink-soft">
            Buy the unit, then we supply. Your name on the front. Figures are
            indicative — see{" "}
            <Link href="/legal/terms" className="font-semibold text-blue">
              terms
            </Link>
            .
          </p>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: ready && !reduce ? 0.7 : 0, delay: 0.08 }}
          className="relative hidden h-full max-h-full md:block"
        >
          <div className="flex h-full max-h-[min(26rem,calc(100svh-var(--chrome-h)-2.5rem))] items-center">
            <div className="relative w-full">
              <div className="container-face absolute inset-[7%_0_12%_7%]" />
              <ConceptImage
                src="/concept/hero-exterior.jpg"
                alt="Concept visualisation of an independent 6m container battery shop with operator signage and Unitech board"
                label="Concept · your name + Unitech board"
                aspect="aspect-[5/4]"
                className="relative ml-[5%] max-h-full border border-white/20 shadow-[0_24px_50px_rgba(8,53,114,0.22)]"
                priority
              />
              <div className="absolute bottom-0 left-[16%] right-0 border border-line bg-paper/95 p-3 backdrop-blur">
                <p className="font-display text-sm font-bold tracking-wide text-blue-deep">
                  Your trading name on the box
                </p>
                <p className="text-xs text-ink-soft">
                  Unitech product board · Your signage · Not an Electro City
                  branded store
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
