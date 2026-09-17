import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://www.apexgov.ai";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/client-services"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
