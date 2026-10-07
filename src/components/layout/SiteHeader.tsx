"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { SiteComplianceBanner } from "@/components/layout/SiteComplianceBanner";

const links = [
  { href: "/ownership", label: "Ownership" },
  { href: "/the-asset", label: "What you get" },
  { href: "/calculator", label: "Calculator" },
  { href: "/compliance", label: "Compliance" },
  { href: "/about", label: "About" },
  { href: "/prospectus", label: "Prospectus" },
];

export function SiteHeader() {
  const chromeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = chromeRef.current;
    if (!el) return;

    const sync = () => {
      document.documentElement.style.setProperty(
        "--chrome-h",
        `${el.getBoundingClientRect().height}px`,
      );
    };

    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    window.addEventListener("resize", sync);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, []);

  return (
    <div
      ref={chromeRef}
      data-site-chrome
      className="sticky top-0 z-50 bg-paper/95 shadow-[0_1px_0_var(--line)] backdrop-blur-md"
    >
      <SiteComplianceBanner />
      <header>
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="font-display text-[1.5rem] font-bold leading-none tracking-wide text-blue-deep md:text-[1.65rem]">
              ELECTRO<span className="text-blue">CITY</span>
            </span>
            <span className="hidden h-4 w-px bg-line sm:block" aria-hidden />
            <span className="hidden text-sm text-ink-soft sm:inline">
              Business in a Box
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink-soft transition-colors hover:text-blue"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/prospectus"
            className="bg-blue px-3.5 py-2 text-sm font-semibold text-paper transition hover:bg-blue-deep"
          >
            Get prospectus
          </Link>
        </div>
      </header>
    </div>
  );
}
