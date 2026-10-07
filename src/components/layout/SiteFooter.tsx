import Link from "next/link";
import { CONTACT } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-blue-deep bg-blue-deep text-paper">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <p className="font-display text-3xl font-bold tracking-wide">
              ELECTRO<span className="text-blue-mist">CITY</span>
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-blue-mist">
              Buy a fitted battery retail container, then get supply at operator
              pricing. Intended as an independent asset + wholesale model — not
              marketed as a franchise. Final characterisation depends on signed
              contracts.
            </p>
            <p className="mt-6 text-sm text-blue-mist">
              Head office
              <br />
              {CONTACT.addressLine}
              <br />
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="font-semibold text-paper hover:underline"
              >
                {CONTACT.phoneDisplay}
              </a>
              <br />
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-semibold text-paper hover:underline"
              >
                {CONTACT.email}
              </a>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-[15px] sm:grid-cols-3">
            <Link href="/ownership" className="hover:underline">
              Ownership
            </Link>
            <Link href="/the-asset" className="hover:underline">
              What you get
            </Link>
            <Link href="/calculator" className="hover:underline">
              Calculator
            </Link>
            <Link href="/about" className="hover:underline">
              About Electro City
            </Link>
            <Link href="/compliance" className="hover:underline">
              Compliance pack
            </Link>
            <Link href="/expectations" className="hover:underline">
              Expectations
            </Link>
            <Link href="/prospectus" className="hover:underline">
              Prospectus
            </Link>
            <Link href="/parts/social" className="hover:underline">
              Parts social
            </Link>
            <Link href="/parts/ignition-modules" className="hover:underline">
              Ignition modules
            </Link>
            <Link href="/parts/lamps-and-led" className="hover:underline">
              Lamps &amp; LED
            </Link>
            <Link href="/legal/information" className="hover:underline">
              Legal information
            </Link>
            <Link href="/legal/terms" className="hover:underline">
              Terms
            </Link>
            <Link href="/legal/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/legal/paia-manual" className="hover:underline">
              PAIA
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-xs leading-relaxed text-blue-mist">
          <p>
            Indicative figures only. Not legal or financial advice. Confirm
            Electro City’s full registered particulars on the{" "}
            <Link
              href="/legal/information"
              className="font-semibold text-paper hover:underline"
            >
              legal information
            </Link>{" "}
            page. Website produced by Endpoint Media as a technical conduit —
            commercial liability for products, pricing, and supply sits with
            Electro City.{" "}
            <Link
              href="/legal/terms"
              className="font-semibold text-paper hover:underline"
            >
              Terms
            </Link>
            {" · "}
            <Link
              href="/compliance"
              className="font-semibold text-paper hover:underline"
            >
              Compliance pack
            </Link>
            {" · "}© {new Date().getFullYear()} Electro City
          </p>
        </div>
      </div>
    </footer>
  );
}
