import type { Metadata, Viewport } from "next";
import { CookieConsent } from "@/components/cookie-consent";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { siteConfig } from "@/config/site";
import "./globals.css";

const brandName = "MasterTut";
const siteUrl = siteConfig.siteUrl.replace(/\/$/, "");
const siteDescription =
  "Ремонт и установка бытовой и коммерческой техники и оборудования в Алматы и Алматинской области.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: brandName,
  title: {
    default: "MasterTut — ремонт техники в Алматы и области",
    template: "%s | MasterTut",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ru_KZ",
    siteName: brandName,
    title: "MasterTut — ремонт техники в Алматы и области",
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "MasterTut — ремонт техники в Алматы и Алматинской области",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MasterTut — ремонт техники в Алматы и области",
    description: siteDescription,
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111820",
  colorScheme: "light",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: brandName,
      url: siteUrl,
      telephone: siteConfig.phoneDisplay,
      logo: `${siteUrl}/icon`,
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: brandName,
      url: siteUrl,
      telephone: siteConfig.phoneDisplay,
      description: siteDescription,
      serviceType: [
        "Ремонт бытовой техники",
        "Ремонт коммерческого оборудования",
        "Установка техники и оборудования",
      ],
      areaServed: {
        "@type": "City",
        name: "Алматы и Алматинская область",
      },
      parentOrganization: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: brandName,
      inLanguage: "ru-KZ",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru-KZ">
      <body>
        <JsonLd data={organizationSchema} />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileActionBar />
        <CookieConsent />
      </body>
    </html>
  );
}
