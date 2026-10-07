import Link from "next/link";

/** Persistent live-site compliance strip (CPA / enquiry hygiene). */
export function SiteComplianceBanner() {
  return (
    <div className="border-b border-blue-deep/15 bg-blue-mist/70 px-4 py-1.5 text-center text-[11px] leading-snug text-ink md:px-8 md:text-xs">
      <strong className="font-semibold">Important:</strong> Package figures and
      calculator outputs are indicative only — not income guarantees or legal
      advice. Enquiries request information; they do not conclude a sale.{" "}
      <Link href="/legal/terms" className="font-semibold text-blue underline">
        Terms
      </Link>
      {" · "}
      <Link
        href="/legal/information"
        className="font-semibold text-blue underline"
      >
        Legal information
      </Link>
      {" · "}
      <Link href="/compliance" className="font-semibold text-blue underline">
        Compliance pack
      </Link>
    </div>
  );
}
