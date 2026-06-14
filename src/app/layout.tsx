import type { Metadata, Viewport } from "next";
import { CookieConsent } from "@/components/cookie-consent";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { siteConfig } from "@/config/site";
import "./globals.css";

const brandName = "Allservice";
const siteUrl = siteConfig.siteUrl.replace(/\/$/, "");
const siteDescription =
  "Ремонт и установка бытовой и коммерческой техники и оборудования в Алматы.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: brandName,
  title: {
    default: "Allservice — ремонт и установка техники в Алматы",
    template: "%s | Allservice",
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
    title: "Allservice — ремонт и установка техники в Алматы",
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Allservice — ремонт и установка техники в Алматы",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Allservice — ремонт и установка техники в Алматы",
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
        name: "Алматы",
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
