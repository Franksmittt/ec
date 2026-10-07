import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "POPIA Section 18 privacy notice for Electro City Business in a Box prospectus enquiries.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-28 md:px-8">
      <span className="accent-slash" aria-hidden />
      <h1 className="mt-5 font-display text-4xl font-bold tracking-wide text-blue-deep md:text-5xl">
        Privacy Notice
      </h1>
      <p className="mt-4 text-sm text-ink-soft">
        POPIA Section 18 collection notice for prospectus / Business in a Box
        enquiries.
      </p>
      <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">
        This notice is provided when personal information is collected through
        enquiry forms on this website.
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink-soft">
        <section>
          <h2 className="text-xl font-semibold text-ink">1. Responsible party</h2>
          <p className="mt-2">
            Responsible party: <strong className="text-ink">Electro City</strong>{" "}
            (exact juristic name appears on written quotations and sale
            agreements). Head office: {CONTACT.addressLine}. Tel{" "}
            <a href={`tel:${CONTACT.phoneTel}`} className="font-semibold text-blue">
              {CONTACT.phoneDisplay}
            </a>
            ; email{" "}
            <a href={`mailto:${CONTACT.email}`} className="font-semibold text-blue">
              {CONTACT.email}
            </a>
            . Contact Electro City to reach the Information Officer for privacy
            requests.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">
            2. Information collected
          </h2>
          <p className="mt-2">
            Name; email address; phone number (optional); geographic area of
            interest; deployment timeline; site availability status; and any
            free-text notes you submit. If marketing consent is given, that
            consent record is also stored.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">3. Purpose</h2>
          <p className="mt-2">
            To assess whether an asset / supply conversation is appropriate; to
            send the requested investment prospectus or follow-up information;
            and, only where you have opted in, to send electronic direct
            marketing about Electro City opportunities.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">
            4. Voluntary or mandatory
          </h2>
          <p className="mt-2">
            Supplying this information is voluntary. If you do not provide the
            minimum contact and area details, we cannot process a prospectus
            request or contact you about availability.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">5. Direct marketing</h2>
          <p className="mt-2">
            Electronic direct marketing (email, SMS, and similar) is only sent
            with your explicit unticked opt-in consent, aligned to POPIA Section
            69 principles. You may withdraw consent at any time by contacting
            Electro City.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">
            6. Recipients and operators
          </h2>
          <p className="mt-2">
            Information may be processed by Electro City staff and by service
            providers who host email, CRM, or website infrastructure (including
            technical operators such as the website producer under a written
            arrangement). Where systems store data outside South Africa, Electro
            City applies appropriate POPIA Section 72 safeguards.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">7. Security</h2>
          <p className="mt-2">
            Reasonable technical and organisational measures are maintained to
            protect personal information. If there are reasonable grounds to
            believe personal information has been accessed or acquired by an
            unauthorised person, Electro City will handle the incident under
            POPIA Section 22.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">8. Your rights</h2>
          <p className="mt-2">
            You may request access to, correction of, or objection to processing
            of your personal information, subject to POPIA. You may lodge a
            complaint with the Information Regulator (South Africa).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">9. Retention</h2>
          <p className="mt-2">
            Enquiry records are kept only as long as needed for the sales
            conversation, legal claims periods, and legitimate business records,
            then deleted or anonymised under Electro City’s retention schedule.
          </p>
        </section>
      </div>

      <p className="mt-10 text-sm text-ink-soft">
        Related:{" "}
        <Link href="/legal/paia-manual" className="font-semibold text-blue">
          PAIA manual
        </Link>
        {" · "}
        <Link href="/legal/terms" className="font-semibold text-blue">
          Terms
        </Link>
        {" · "}
        <Link href="/legal/information" className="font-semibold text-blue">
          Legal information
        </Link>
      </p>

      <Link
        href="/"
        className="mt-8 inline-block text-[15px] font-semibold text-blue hover:underline"
      >
        ← Back to home
      </Link>
    </article>
  );
}
