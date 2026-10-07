export function generateElectroCitySchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://electro-city.co.za/#org",
        name: "Electro City",
        url: "https://electro-city.co.za",
        description:
          "South African auto-electrical wholesaler offering an independent Business in a Box fitted retail container package with Unitech opening stock and ongoing wholesale supply at operator pricing. Not marketed as a franchise.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1 Monte Carlo Drive, Raceway Industrial Park",
          addressLocality: "Germiston",
          addressRegion: "Gauteng",
          addressCountry: "ZA",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+27-11-334-8355",
          email: "sales@electro-city.co.za",
          contactType: "Sales enquiries",
          areaServed: "ZA",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://electro-city.co.za/#website",
        url: "https://electro-city.co.za",
        name: "Electro City Business in a Box",
        publisher: { "@id": "https://electro-city.co.za/#org" },
        inLanguage: "en-ZA",
      },
      {
        "@type": "WebPage",
        "@id": "https://electro-city.co.za/#opportunity-page",
        name: "Electro City Business in a Box",
        isPartOf: { "@id": "https://electro-city.co.za/#website" },
        about: { "@id": "https://electro-city.co.za/#opportunity" },
        description:
          "Independent fitted 6m retail container package with Unitech opening stock. Indicative package figures and calculator outputs are illustrative. Binding terms appear in written quotations and agreements.",
      },
      {
        "@type": "Product",
        "@id": "https://electro-city.co.za/#opportunity",
        name: "Electro City Battery Retail Business in a Box",
        brand: { "@id": "https://electro-city.co.za/#org" },
        description:
          "Ready-made retail container supplied with Unitech opening batteries (flyer schedule, 25-month warranty lines), 3× stands, Unitech signage, catalogues, load tester, charger, and test printer. One package asset sale. After handover Electro City’s ongoing role is wholesale supply at operator pricing. Zero franchise royalties or marketing levies in the intended model. Buyer uses their own POS and systems. Scrap trading is optional.",
        offers: {
          "@type": "Offer",
          url: "https://electro-city.co.za/prospectus",
          priceCurrency: "ZAR",
          price: "150000",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "150000",
            priceCurrency: "ZAR",
            valueAddedTaxIncluded: false,
          },
          availability: "https://schema.org/PreOrder",
          description:
            "Indicative entry price from R150,000 excluding VAT, delivery, and site costs. Final schedule confirmed in written sales documents.",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://electro-city.co.za/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is this a franchise?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The intended model is buying a fitted retail container, then receiving wholesale supply at operator pricing. It is not marketed as a franchise under the Consumer Protection Act. Final characterisation depends on signed contracts and how the relationship is operated.",
            },
          },
          {
            "@type": "Question",
            name: "What does the indicative R150,000 cover?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "One indicative package for a fitted 6m retail container and opening stock as listed in the final bill of materials. Price is typically quoted excluding VAT, delivery, and site preparation. POS, accounting, and IT are buyer-side. Exact inclusions are confirmed in writing.",
            },
          },
          {
            "@type": "Question",
            name: "Who handles municipal and scrap compliance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The buyer generally handles zoning, temporary-building approval, site electrical connection, and Second-Hand Goods registration for scrap. Electro City supplies the asset and internal CoC for the unit as built, subject to the final agreement.",
            },
          },
        ],
      },
    ],
  };
}
