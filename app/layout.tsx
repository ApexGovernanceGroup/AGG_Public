import type { Metadata } from "next";
import { headers } from "next/headers";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { SideNavigation } from "./components/SideNavigation";
import "./globals.css";

const siteDescription =
  "Apex Governance Group installs knowledge, strategy, governance, and velocity as one architecture built from the organization's people, data, systems, and licenses.";

function safeOrigin(host: string | null, proto: string | null): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) {
    try {
      return new URL(configured).origin;
    } catch {
      // Fall through to request-derived origin.
    }
  }

  if (!host) return "https://www.apexgov.ai";
  return `${proto ?? "https"}://${host}`;
}

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const origin = safeOrigin(
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host"),
    requestHeaders.get("x-forwarded-proto"),
  );

  return {
    metadataBase: new URL(origin),
    title: {
      default: "Apex Governance Group",
      template: "%s | Apex Governance Group",
    },
    description: siteDescription,
    icons: {
      icon: "/brand/apex-governance-group-symbol.png",
      shortcut: "/brand/apex-governance-group-symbol.png",
      apple: "/brand/apex-governance-group-symbol.png",
    },
    openGraph: {
      title: "Apex Governance Group",
      description: siteDescription,
      url: origin,
      siteName: "Apex Governance Group",
      images: [
        {
          url: "/brand/apex-governance-group-symbol.png",
          width: 1200,
          height: 1200,
          alt: "Apex Governance Group circular seal",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Apex Governance Group",
      description: siteDescription,
      images: ["/brand/apex-governance-group-symbol.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <SideNavigation />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
