import type { Metadata, Viewport } from "next";
import { CookieConsent } from "@/components/cookie-consent";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Бәрі Жөн — ремонт и мастера по дому в Алматы",
    template: "%s | Бәрі Жөн",
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_KZ",
    siteName: siteConfig.name,
    title: "Ремонт и мастера по дому в Алматы",
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Бәрі Жөн — сервис мастеров в Алматы",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Бәрі Жөн — мастера по дому в Алматы",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#102a43",
  colorScheme: "light",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.siteUrl}/#organization`,
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      telephone: siteConfig.phoneDisplay,
      logo: `${siteConfig.siteUrl}/icon`,
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.siteUrl}/#business`,
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      telephone: siteConfig.phoneDisplay,
      description: siteConfig.description,
      areaServed: {
        "@type": "City",
        name: siteConfig.city,
      },
      parentOrganization: {
        "@id": `${siteConfig.siteUrl}/#organization`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.siteUrl}/#website`,
      url: siteConfig.siteUrl,
      name: siteConfig.name,
      inLanguage: "ru-KZ",
      publisher: {
        "@id": `${siteConfig.siteUrl}/#organization`,
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

