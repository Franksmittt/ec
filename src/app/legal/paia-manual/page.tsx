import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PAIA Manual | Electro City",
  description:
    "Section 51 PAIA manual outline for Electro City as a private body.",
};

export default function PaiaManualPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-28 md:px-8">
      <span className="accent-slash" aria-hidden />
      <h1 className="mt-5 font-display text-4xl font-bold tracking-wide text-blue-deep md:text-5xl">
        PAIA Manual
      </h1>
      <p className="mt-4 text-sm text-ink-soft">Section 51</p>
      <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">
        Outline of the Promotion of Access to Information Act manual required
        for private bodies. Electro City’s Information Officer maintains the
        full contact details, fee schedules, and record categories. Requests
        under PAIA should be directed to Electro City using the contacts on the{" "}
        <Link href="/legal/information" className="font-semibold text-blue">
          legal information
        </Link>{" "}
        page.
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink-soft">
        {[
          {
            title: "Institutional contact details",
            body: "Postal address, physical street address, phone number, and dedicated email of the designated Information Officer and any Deputy Information Officers.",
          },
          {
            title: "Section 10 PAIA Guide",
            body: "Description of the official Guide on how to use PAIA, as updated by the Information Regulator, and how the public can obtain access to it.",
          },
          {
            title: "Voluntary disclosure categories",
            body: "Records automatically available without a formal PAIA request, for example public marketing brochures, Unitech product specifications, and blank distributor agreement templates.",
          },
          {
            title: "Records held under other legislation",
            body: "Companies Act, Basic Conditions of Employment Act, Occupational Health and Safety Act, and related statutory records.",
          },
          {
            title: "Subjects and categories of records",
            body: "Corporate governance, financial records, container logistics manifests, SANS 10142-1 CoC records, and distributor agreements.",
          },
          {
            title: "POPIA processing particulars",
            body: "Purposes of processing, categories of data subjects, planned transborder flows, and general information security measures.",
          },
          {
            title: "Request procedure and fees",
            body: "How to submit a request, prescribed forms, request and access fees, deposits, and grounds for refusal.",
          },
        ].map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-semibold text-ink">{section.title}</h2>
            <p className="mt-2">{section.body}</p>
          </section>
        ))}
      </div>

      <Link
        href="/"
        className="mt-12 inline-block text-[15px] font-semibold text-blue hover:underline"
      >
        ← Back to Electro City
      </Link>
    </article>
  );
}
