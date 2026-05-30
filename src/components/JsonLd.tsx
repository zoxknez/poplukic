import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    foundingDate: String(siteConfig.founded),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postal,
      addressCountry: "RS",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.coords.lat,
      longitude: siteConfig.coords.lng,
    },
    areaServed: ["Srbija", "Region"],
    knowsAbout: [
      "Drvene palete",
      "Drvene gajbice",
      "Rezana građa",
      "Transport i logistika",
      "ISPM 15",
      "FSC",
    ],
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
