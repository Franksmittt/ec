import Link from "next/link";

export function HonestTimeline() {
  return (
    <section className="section-y bg-paper-soft">
      <div className="mx-auto grid max-w-6xl items-stretch gap-8 px-5 md:grid-cols-2 md:gap-10 md:px-8">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-wide text-blue-deep md:text-4xl">
            Be honest about the timeline
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft md:text-base">
            In ordinary battery retail, many shops only start to feel a fuller
            payback once replacement customers return, often discussed around a
            multi-year horizon (commonly near three years). Planning talk, not a
            promised Electro City outcome.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
            Early months are trust, visibility, correct fitment, and overheads.
            Repeat demand plus lawful scrap plus discipline.
          </p>
        </div>

        <div className="grid gap-3">
          <div className="min-h-[7.5rem] border-l-4 border-blue bg-paper p-4">
            <p className="font-semibold text-ink">Location changes the curve</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Shopping-centre bays and busy forecourts can bring traffic a quiet
              street never gets. They still need landlord and municipal
              permissions.
            </p>
          </div>
          <div className="min-h-[7.5rem] border-l-4 border-red bg-paper p-4">
            <p className="font-semibold text-ink">It can also not work</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Skip research, zoning, or marketing and illustrative numbers stay
              theoretical. Day-to-day trading can also be simpler than people
              fear once flow is established.
            </p>
          </div>
          <p className="text-sm text-ink-soft">
            <Link href="/calculator" className="font-semibold text-blue">
              Calculator
            </Link>
            {" · "}
            <Link href="/compliance" className="font-semibold text-blue">
              Compliance pack
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
