import type { MetadataRoute } from "next";

const routes = [
  "",
  "/services",
  "/client-onboarding",
  "/taxonomy-starter",
  "/methodology",
  "/solutions",
  "/doctrine",
  "/academy",
  "/academy-catalog",
  "/briefing",
  "/buyer-roles",
  "/case-studies",
  "/insights",
  "/proof-library",
  "/proof-pack",
  "/procurement",
  "/portal-preview",
  "/trust-security",
  "/investor-opportunities",
  "/agg-investor-quick-sheet",
  "/inside-perspective-human-cost-executive-management",
  "/paralysis-from-analysis-needs-vs-systems",
  "/about",
  "/contact",
  "/engage",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://www.apexgov.ai";

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
