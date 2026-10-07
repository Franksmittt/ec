import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Legal Information",
  description:
    "Supplier identity, pricing posture, and website producer information for Electro City Business in a Box.",
};

export default function LegalInformationPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-28 md:px-8">
      <span className="accent-slash" aria-hidden />
      <h1 className="mt-5 font-display text-4xl font-bold tracking-wide text-blue-deep md:text-5xl">
        Legal information
      </h1>
      <p className="mt-4 text-sm text-ink-soft">
        Supplier and site disclosures for this Electro City website (ECTA-oriented
        hygiene). Enquiries through this site request information; they do not
        alone conclude a sale.
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink-soft">
        <section>
          <h2 className="text-xl font-semibold text-ink">1. Supplier identity</h2>
          <p className="mt-2">
            Trading name: <strong className="text-ink">Electro City</strong>
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Physical address: {CONTACT.addressLine}</li>
            <li>
              Tel:{" "}
              <a href={`tel:${CONTACT.phoneTel}`} className="font-semibold text-blue">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              Email:{" "}
              <a href={`mailto:${CONTACT.email}`} className="font-semibold text-blue">
                {CONTACT.email}
              </a>
            </li>
            <li>
              Full juristic name, registration number, VAT number, and directors
              are confirmed on written quotations and sale agreements issued by
              Electro City.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">2. Nature of this site</h2>
          <p className="mt-2">
            This website describes the Business in a Box package and lets you
            request a prospectus conversation. Online checkout of the container
            package is not enabled on these pages. Binding terms are those in
            Electro City’s written quotation, asset sale agreement, and supply
            agreement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">3. Pricing posture</h2>
          <p className="mt-2">
            References to package pricing (including “from R150,000”) are
            indicative entry figures exclusive of VAT unless a written quotation
            states otherwise. Delivery, crane/placement, site preparation,
            municipal permitting, grid connection, insurance, working capital,
            and buyer-side systems are separate unless a signed quotation says
            otherwise. Final schedules lock in Electro City’s written offer and
            bill of materials.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">4. Website producer</h2>
          <p className="mt-2">
            This website was designed and developed by{" "}
            <strong className="text-ink">Endpoint Media</strong> acting as a
            technical service provider and independent contractor. Endpoint Media
            is not Electro City’s attorney, does not underwrite commercial
            outcomes, and is not the seller of the container package. Commercial
            queries must be directed to Electro City. See{" "}
            <Link href="/legal/terms" className="font-semibold text-blue">
              Terms of enquiry
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">5. Related notices</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              <Link href="/legal/terms" className="font-semibold text-blue">
                Terms of enquiry
              </Link>
            </li>
            <li>
              <Link href="/legal/privacy" className="font-semibold text-blue">
                Privacy Notice (POPIA)
              </Link>
            </li>
            <li>
              <Link href="/legal/paia-manual" className="font-semibold text-blue">
                PAIA manual
              </Link>
            </li>
            <li>
              <Link href="/compliance" className="font-semibold text-blue">
                Buyer compliance pack
              </Link>
            </li>
          </ul>
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
