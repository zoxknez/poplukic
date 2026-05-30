import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/o-nama",
    "/kontakt",
    "/proizvodi/palete",
    "/proizvodi/gajbice",
    "/proizvodi/rezana-gradja",
    "/usluge/transport",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/proizvodi") ? 0.9 : 0.7,
  }));
}
