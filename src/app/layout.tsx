import type { Metadata } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Electro City | Business in a Box",
    template: "%s | Electro City",
  },
  description:
    "Buy a fitted 6m Unitech retail container, then get wholesale supply at operator pricing. Independent asset model — not marketed as a franchise. Indicative from R150,000 ex VAT.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Electro City | Business in a Box",
    description:
      "Independent fitted container battery shop package with Unitech opening stock and operator wholesale pricing. Indicative from R150,000 ex VAT.",
    url: SITE_URL,
    siteName: "Electro City",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/concept/hero-exterior.jpg",
        width: 1200,
        height: 900,
        alt: "Electro City Business in a Box — independent container battery shop concept",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electro City | Business in a Box",
    description:
      "Independent fitted container battery shop package. Indicative from R150,000 ex VAT.",
    images: ["/concept/hero-exterior.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-ZA"
      className={`${barlow.variable} ${sourceSans.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-sans antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
