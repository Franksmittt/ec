import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const routes = [
  "",
  "/ownership",
  "/the-asset",
  "/calculator",
  "/compliance",
  "/expectations",
  "/about",
  "/prospectus",
  "/legal/information",
  "/legal/terms",
  "/legal/privacy",
  "/legal/paia-manual",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/legal") ? 0.4 : 0.7,
  }));
}
