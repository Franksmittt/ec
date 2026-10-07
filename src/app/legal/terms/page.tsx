import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Enquiry",
  description:
    "Terms governing the Electro City Business in a Box website, enquiry forms, and illustrative financial tools. Not marketed as a franchise. Not legal advice.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-28 md:px-8">
      <span className="accent-slash" aria-hidden />
      <h1 className="mt-5 font-display text-4xl font-bold tracking-wide text-blue-deep md:text-5xl">
        Terms of enquiry
      </h1>
      <p className="mt-4 text-sm text-ink-soft">
        Last updated {new Date().toLocaleDateString("en-ZA", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        . These terms govern use of this website and prospectus enquiries.
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink-soft">
        <section>
          <h2 className="text-xl font-semibold text-ink">1. Nature of this site</h2>
          <p className="mt-2">
            This website markets Electro City’s independent “Business in a Box”
            fitted retail container and wholesale supply relationship. Browsing
            or submitting an enquiry does not, by itself, conclude a contract of
            sale. No deposit or purchase price is accepted through these pages
            unless and until Electro City issues a written quotation or sale
            agreement that you accept in writing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">
            2. Independent model — not marketed as a franchise
          </h2>
          <p className="mt-2">
            The commercial structure described on this site is an outright asset
            sale of a fitted retail container (movable goods), after which
            Electro City’s ongoing role is wholesale supply, including operator /
            special pricing access for buyers of the asset as set out in the
            supply documents. It is not marketed as a franchise agreement for
            purposes of the Consumer Protection Act 68 of 2008. Buyers use their
            own POS, accounting, and IT. Electro City does not control or receive
            those systems under the intended model. Whether any signed agreement
            is or is not a franchise depends on the signed contracts and how the
            relationship is operated in practice. Website wording alone does not
            decide that question.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">
            3. Illustrative figures only
          </h2>
          <p className="mt-2">
            Calculator outputs, payback discussions, gross-profit bands, scrap
            rates, vehicle statistics, stock examples, and package illustrations
            are hypothetical or generalised. They are not guarantees of income,
            turnover, or return on investment. Actual results depend on site
            quality, municipal approvals, pricing chosen by the independent
            operator, marketing, stock management, local competition, and
            operating costs (rent, wages, power, insurance, transport, permits)
            which the calculator does not deduct unless expressly stated.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">4. Pricing</h2>
          <p className="mt-2">
            References to package pricing (including “from R150,000”) are
            indicative entry figures exclusive of VAT unless a written quotation
            states otherwise. Delivery, crane/placement, site preparation,
            municipal permitting, grid connection, insurance, and working capital
            are separate unless a signed quotation says otherwise. Exact
            inclusions lock only on a written bill of materials and sale
            agreement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">
            5. Retail pricing independence
          </h2>
          <p className="mt-2">
            Any example retail prices or margins on this site are illustrative
            only. They are not minimum or fixed resale prices. The independent
            operator sets their own retail prices. Where Electro City publishes
            recommended retail prices, those remain non-binding recommendations
            consistent with the Competition Act.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">
            6. Compliance remains split
          </h2>
          <p className="mt-2">
            Electro City’s intended supply position is to deliver a fitted
            container asset with agreed inclusions and, where applicable, an
            internal electrical Certificate of Compliance for the unit as built.
            The buyer remains responsible for site selection, zoning / land-use
            consent, temporary-building authorisation under applicable National
            Building Regulations practice, site-specific electrical connection
            CoC, fire equipment servicing, scrap registration under the
            Second-Hand Goods Act where required, local marketing, staffing, and
            insurance. See the{" "}
            <Link href="/compliance" className="font-semibold text-blue">
              buyer compliance pack
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">7. Scrap batteries</h2>
          <p className="mt-2">
            Mentions of retaining scrap batteries describe a possible secondary
            income stream only where the operator is lawfully entitled to acquire
            and store controlled goods. Operators typically need to register and
            keep records under the Second-Hand Goods Act and to store waste
            batteries safely under environmental rules. Scrap rates fluctuate.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">
            8. No professional advice
          </h2>
          <p className="mt-2">
            Content on this site (including compliance summaries) is general
            information. It is not legal, tax, accounting, engineering, or
            municipal advice. Buyers must obtain their own professional advisors
            before signing, paying deposits, or trading.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">
            9. Website technical conduit (producer limitation)
          </h2>
          <p className="mt-2">
            This website was designed and developed by{" "}
            <strong className="text-ink">Endpoint Media</strong> acting
            exclusively as a technical service provider and independent
            contractor to Electro City. Endpoint Media makes no representations,
            warranties, or guarantees regarding the commercial accuracy,
            statutory compliance, franchise characterisation, or financial
            viability of the Electro City business model or any package,
            calculator output, or compliance summary on this site. Endpoint Media
            does not act as Electro City’s attorney, does not underwrite
            commercial outcomes, and does not accept liability for decisions made
            solely on the basis of this website. All queries, claims, or disputes
            regarding products, pricing, supply, compliance, or business
            operations must be directed solely to Electro City (
            <a href={`mailto:${CONTACT.email}`} className="font-semibold text-blue">
              {CONTACT.email}
            </a>
            ).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">10. Enquiries</h2>
          <p className="mt-2">
            Submitting the prospectus form requests information only. It does
            not create a sale, franchise, partnership, or agency. Processing of
            personal information is described in the{" "}
            <Link href="/legal/privacy" className="font-semibold text-blue">
              Privacy Notice
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">11. Supplier details</h2>
          <p className="mt-2">
            See{" "}
            <Link href="/legal/information" className="font-semibold text-blue">
              Legal information
            </Link>{" "}
            for Electro City’s published contact particulars and pricing posture.
          </p>
        </section>
      </div>

      <Link
        href="/"
        className="mt-12 inline-block text-[15px] font-semibold text-blue hover:underline"
      >
        ← Back to home
      </Link>
    </article>
  );
}
