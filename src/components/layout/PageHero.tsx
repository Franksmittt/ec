import Link from "next/link";

export function PageHero({
  title,
  description,
  crumb,
}: {
  title: string;
  description: string;
  crumb?: string;
}) {
  return (
    <header className="border-b border-line bg-paper-soft pt-16">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <p className="text-sm text-ink-soft">
          <Link href="/" className="hover:text-blue">
            Home
          </Link>
          {crumb ? ` / ${crumb}` : null}
        </p>
        <span className="accent-slash mt-6" aria-hidden />
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold tracking-wide text-blue-deep md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {description}
        </p>
      </div>
    </header>
  );
}
