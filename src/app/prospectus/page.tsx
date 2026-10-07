import type { Metadata } from "next";
import Link from "next/link";
import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import { ConceptImage } from "@/components/ui/ConceptImage";

export const metadata: Metadata = {
  title: "Prospectus",
  description:
    "Request the Electro City Business in a Box investment prospectus. POPIA-aligned enquiry form.",
};

const points = [
  {
    title: "Independent model (intended)",
    copy: "You buy the container. After that, Electro City supplies. CPA characterisation still needs attorney-settled contracts before launch.",
  },
  {
    title: "One package",
    copy: "Indicative from R150,000 ex VAT if that baseline actually delivers the signed BoM. Delivery and site costs separate. No multi-tier franchise ladder.",
  },
  {
    title: "Your systems stay yours",
    copy: "Bring your own POS, accounting, and IT. Electro City does not control or see them.",
  },
  {
    title: "Operator pricing + breadth",
    copy: "Asset buyers get special wholesale pricing. Related auto-electrical lines stay your commercial choice.",
  },
];

const pack = [
  "Indicative economics and money models",
  "Asset inclusions / exclusions outline",
  "Compliance checklist for your site",
  "Next-step conversation with Electro City",
];

export default function ProspectusPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 hero-field" aria-hidden />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(ellipse_at_70%_40%,rgba(12,77,162,0.18),transparent_65%)] lg:block" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-12 md:items-center md:gap-10 md:px-8 md:py-12">
          <div className="md:col-span-6 lg:col-span-7">
            <p className="text-sm text-ink-soft">
              <Link href="/" className="hover:text-blue">
                Home
              </Link>
              {" / Prospectus"}
            </p>
            <span className="accent-slash mt-5" aria-hidden />
            <h1 className="mt-4 font-display text-4xl font-bold tracking-wide text-blue-deep md:text-5xl lg:text-6xl">
              Request the investment pack
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft md:text-lg">
              Tell us your area and timeline. This form requests information
              only. No sale, franchise, or deposit is created by submitting it.
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {pack.map((item) => (
                <div
                  key={item}
                  className="flex min-h-[3.25rem] items-center gap-2 border border-line/80 bg-paper/70 px-3 py-2 text-sm text-ink-soft backdrop-blur"
                >
                  <span className="h-1.5 w-1.5 shrink-0 bg-red" aria-hidden />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-5">
            <div className="relative">
              <div className="container-face absolute inset-[10%_6%_8%_0] opacity-90" />
              <ConceptImage
                src="/concept/prospectus-yard.jpg"
                alt="Concept visualisation of fitted container units ready for independent operators"
                label="Concept · units ready for your branding"
                aspect="aspect-[16/11]"
                className="relative ml-[8%] border border-line shadow-[0_24px_60px_rgba(8,53,114,0.16)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="mx-auto grid max-w-6xl items-start gap-8 px-5 md:grid-cols-12 md:gap-10 md:px-8">
          <div className="md:col-span-5">
            <h2 className="font-display text-2xl font-bold tracking-wide text-blue-deep md:text-3xl">
              Before you enquire
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              Serious operators read the compliance pack and run the calculator
              first. That keeps the conversation honest for both sides.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-1">
              {points.map((point) => (
                <div
                  key={point.title}
                  className="flex min-h-[7.25rem] flex-col border border-line bg-paper-soft/50 p-4"
                >
                  <p className="font-semibold text-ink">{point.title}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {point.copy}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <Link
                href="/compliance"
                className="font-semibold text-blue hover:underline"
              >
                Compliance pack
              </Link>
              <Link
                href="/calculator"
                className="font-semibold text-blue hover:underline"
              >
                Calculator
              </Link>
              <Link
                href="/legal/terms"
                className="font-semibold text-blue hover:underline"
              >
                Terms
              </Link>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="overflow-hidden border border-line bg-paper shadow-[0_28px_70px_rgba(8,53,114,0.12)]">
              <div className="relative overflow-hidden border-b border-line bg-gradient-to-br from-blue-mist/50 via-paper to-paper px-5 py-5 md:px-6">
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue/10"
                  aria-hidden
                />
                <p className="relative font-display text-lg font-bold tracking-wide text-blue-deep md:text-xl">
                  Prospectus request
                </p>
                <p className="relative mt-1 text-sm text-ink-soft">
                  Progressive profiling · POPIA Section 18 notice · optional
                  marketing opt-in
                </p>
              </div>
              <div className="p-5 md:p-6">
                <LeadCaptureForm />
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <ConceptImage
                src="/concept/stock-wall.jpg"
                alt="Concept visualisation of a Unitech opening stock wall in an independent battery shop"
                label="Concept · Unitech stock wall"
                aspect="aspect-[16/10]"
                className="border border-line"
              />
              <ConceptImage
                src="/concept/testing-counter.jpg"
                alt="Concept visualisation of a battery testing counter inside an independent shop"
                label="Concept · test / quote counter"
                aspect="aspect-[16/10]"
                className="border border-line"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-blue-deep text-paper">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="max-w-xl">
            <p className="font-display text-2xl font-bold tracking-wide">
              Prefer to understand the supplier first?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-blue-mist">
              Read the wholesale story, national hubs, and catalogue breadth
              behind the container package before you enquire.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex shrink-0 bg-paper px-5 py-3 text-sm font-semibold text-blue-deep hover:bg-blue-mist"
          >
            See supplier story
          </Link>
        </div>
      </section>
    </>
  );
}
