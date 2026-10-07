import type { Metadata } from "next";
import Link from "next/link";
import { ConceptImage } from "@/components/ui/ConceptImage";

export const metadata: Metadata = {
  title: "Buyer Compliance Pack | Electro City",
  description:
    "What independent operators usually need to handle: zoning, temporary buildings, site CoC, scrap registration, fire, and CPA retail duties. Guidance only.",
};

const groups = [
  {
    id: "ownership",
    label: "Ownership model",
    items: [
      {
        id: "buy",
        number: "01",
        title: "You buy the container",
        body: "You purchase a movable retail asset. After handover, Electro City’s ongoing role is wholesale supply, including operator / special pricing access for buyers of the asset. Electro City does not run your hours, staff, greeting scripts, mystery audits, local ads, POS, accounting, or IT, and does not see those systems. You set retail prices and decide what else to stock. There are no intended royalties or marketing levies. Final rights sit in the signed asset sale and supply agreements, which Electro City’s attorneys must prepare. If contracts later imposed franchise-style control, CPA franchise disclosure rules could apply. That is exactly what this model is written to avoid.",
      },
    ],
  },
  {
    id: "site",
    label: "Site, power, fire",
    items: [
      {
        id: "zoning",
        number: "02",
        title: "Site, zoning, temporary buildings",
        body: "A shipping container used for public retail is commonly treated as a temporary building under National Building Regulations practice (SANS 10400-A / Regulation A23). You typically need municipal provisional authorisation, a site plan, and land-use rights that allow retail (for example Business or Industrial zoning, or consent use). Shopping-centre parking bays and forecourts often need landlord plus municipal permissions. Placing a unit without approval can lead to fines or removal.",
      },
      {
        id: "electrical",
        number: "03",
        title: "Electrical: two CoC layers",
        body: "Electro City’s intended handover includes an internal electrical Certificate of Compliance for the container as fitted before dispatch. That does not automatically cover your site connection. As the user of the installation at the destination, you generally appoint a registered electrician for a site-specific CoC when tying into municipal grid, landlord supply, inverter, or solar. Earth bonding of the steel shell and SPDs matter for safety and insurance.",
      },
      {
        id: "fire",
        number: "04",
        title: "Fire and hazardous storage",
        body: "Battery retail involves electrical and chemical risk. Portable extinguishers (often DCP and/or CO2) should meet applicable SANS expectations and be serviced. Local emergency-services by-laws may regulate dangerous goods quantities and transport. Acid-proof bunding for scrap storage is a practical and environmental necessity.",
      },
    ],
  },
  {
    id: "trade",
    label: "Trade & customers",
    items: [
      {
        id: "scrap",
        number: "05",
        title: "Scrap and Second-Hand Goods Act",
        body: "Keeping scrap is not automatic free money. Lead-acid scrap is a controlled goods area. Operators who buy scrap usually need to register as a dealer/recycler with SAPS (commonly discussed via Form 601 processes), keep registers, verify seller identity, and follow cash and CCTV controls as required. Trading scrap without registration can attract enforcement. Environmental rules (NEMWA / EPR) also affect take-back and storage. Electro City or Unitech’s producer/importer EPR role should be confirmed in the supply agreement; your role is typically the retail take-back node.",
      },
      {
        id: "cpa",
        number: "06",
        title: "Selling to the public (CPA)",
        body: "When you sell to end customers, CPA quality and refund rules can apply (including the implied warranty framework). Test before you sell. Fit the correct chemistry (flooded / EFB / AGM). Document diagnostics. Wrong fitment or ignoring a faulty alternator can destroy a new battery and create disputes. Product harm claims can travel up the supply chain; your contracts should allocate negligence between wholesaler and retailer.",
      },
      {
        id: "marketing",
        number: "07",
        title: "Marketing and visibility",
        body: "Batteries are often distress purchases. Google Business Profile, clear signage, and community visibility matter. Direct electronic marketing to prospects needs POPIA opt-in. Existing-customer rules are narrower. Keep consent records.",
      },
    ],
  },
  {
    id: "money",
    label: "Money & risk",
    items: [
      {
        id: "insurance",
        number: "08",
        title: "Insurance and cash",
        body: "Insure the container and stock for your site. Ask insurers early about modified containers and battery storage. Keep working capital for quiet weeks. Calculator gross profit is not net cash.",
      },
      {
        id: "vat",
        number: "09",
        title: "VAT and invoices",
        body: "A newly built, not-yet-trading container package is generally sold at standard VAT (15%), not as a zero-rated going concern. Confirm with your tax practitioner. Ask Electro City for a clear ex-VAT / incl-VAT schedule before you pay.",
      },
    ],
  },
];

const jumpLinks = groups.flatMap((group) =>
  group.items.map((item) => ({
    href: `#${item.id}`,
    label: item.title,
    number: item.number,
  })),
);

const atAGlance = [
  { label: "Buyer-side", value: "Zoning, site CoC, scrap, insurance" },
  { label: "Electro City", value: "Asset + internal CoC + supply" },
  { label: "Not included", value: "Legal advice or municipal guarantees" },
  { label: "Status", value: "Guidance for independent operators" },
];

export default function CompliancePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 hero-field" aria-hidden />
        <div
          className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(ellipse_at_70%_35%,rgba(12,77,162,0.16),transparent_65%)] lg:block"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-12 md:items-end md:gap-10 md:px-8 md:py-12">
          <div className="md:col-span-7">
            <p className="text-sm text-ink-soft">
              <Link href="/" className="hover:text-blue">
                Home
              </Link>
              {" / Compliance pack"}
            </p>
            <span className="accent-slash mt-5" aria-hidden />
            <h1 className="mt-4 font-display text-4xl font-bold tracking-wide text-blue-deep md:text-5xl lg:text-6xl">
              Buyer compliance pack
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft md:text-lg">
              What independent operators usually need to handle before and after
              the container arrives. Guidance for clarity. Not a substitute for
              attorney, electrician, town planner, or tax advice.
            </p>
          </div>
          <div className="md:col-span-5">
            <ConceptImage
              src="/concept/compliance-site.jpg"
              alt="Concept visualisation of site setbacks and lawful bunded scrap storage for a container battery shop"
              label="Concept · site + scrap compliance"
              aspect="aspect-[16/10]"
              className="border border-line shadow-[0_20px_50px_rgba(8,53,114,0.12)]"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-blue-deep text-paper">
        <div className="mx-auto grid max-w-6xl gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {atAGlance.map((item) => (
            <div
              key={item.label}
              className="flex min-h-[6.5rem] flex-col justify-between bg-blue-deep p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-mist">
                {item.label}
              </p>
              <p className="mt-3 text-sm font-semibold leading-snug text-paper">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-12 lg:gap-10 lg:px-8">
          <aside className="lg:col-span-4">
            <div className="border border-line bg-paper-soft/50 p-5 lg:sticky lg:top-[calc(var(--chrome-h)+1rem)]">
              <p className="font-display text-lg font-bold tracking-wide text-blue-deep">
                Jump to topic
              </p>
              <nav className="mt-4 space-y-1" aria-label="Compliance topics">
                {jumpLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex items-baseline gap-3 border-b border-line/70 py-2.5 text-sm text-ink-soft transition hover:text-blue"
                  >
                    <span className="font-display text-xs font-bold text-red">
                      {link.number}
                    </span>
                    <span>{link.label}</span>
                  </a>
                ))}
              </nav>

              <div className="mt-5 border-l-4 border-red bg-paper p-4 text-sm leading-relaxed text-ink-soft">
                <p className="font-semibold text-ink">Before you deposit</p>
                <p className="mt-2">
                  Confirm municipal practice with the local authority. Electro
                  City should issue a final Buyer Onboarding Pack on its own
                  letterhead after attorney review.
                </p>
              </div>
            </div>
          </aside>

          <div className="space-y-10 lg:col-span-8">
            {groups.map((group) => (
              <div key={group.id} id={group.id}>
                <div className="mb-4 flex items-end justify-between gap-4 border-b border-line pb-3">
                  <h2 className="font-display text-xl font-bold tracking-wide text-blue-deep md:text-2xl">
                    {group.label}
                  </h2>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                    {group.items.length}{" "}
                    {group.items.length === 1 ? "item" : "items"}
                  </span>
                </div>

                <div className="grid gap-4">
                  {group.items.map((item) => (
                    <article
                      key={item.id}
                      id={item.id}
                      className="scroll-mt-[calc(var(--chrome-h)+1.25rem)] border border-line bg-paper-soft/30 p-5 md:p-6"
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="font-display text-sm font-bold text-red">
                          {item.number}
                        </span>
                        <span className="h-px flex-1 bg-line" aria-hidden />
                      </div>
                      <h3 className="mt-3 font-display text-xl font-bold tracking-wide text-blue-deep md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                        {item.body}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            ))}

            <div className="grid gap-4 border border-line bg-blue-deep p-5 text-paper md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-6">
              <div>
                <p className="font-display text-xl font-bold tracking-wide md:text-2xl">
                  Ready to map this against the asset?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-blue-mist">
                  Read the seller vs buyer split, then request the prospectus
                  when your site and timeline are real.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link
                  href="/expectations"
                  className="bg-paper px-4 py-2.5 text-sm font-semibold text-blue-deep hover:bg-blue-mist"
                >
                  Seller vs buyer
                </Link>
                <Link
                  href="/prospectus"
                  className="border border-white/35 px-4 py-2.5 text-sm font-semibold text-paper hover:bg-white/10"
                >
                  Prospectus
                </Link>
                <Link
                  href="/legal/terms"
                  className="border border-white/35 px-4 py-2.5 text-sm font-semibold text-paper hover:bg-white/10"
                >
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
