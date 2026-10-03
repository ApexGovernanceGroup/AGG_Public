import type { MetadataRoute } from "next";

const routes = [
  "",
  "/services",
  "/client-onboarding",
  "/methodology",
  "/solutions",
  "/doctrine",
  "/academy",
  "/insights",
  "/investor-opportunities",
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
