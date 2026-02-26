import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_NAME = "NEMURI — いびき・睡眠改善の専門メディア";
const SITE_DESC =
  "エビデンスに基づいた信頼できるいびき・睡眠改善情報を、わかりやすくお届けします。";
const BASE_URL = "https://nemuri.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | NEMURI",
  },
  description: SITE_DESC,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "NEMURI",
    title: SITE_NAME,
    description: SITE_DESC,
    url: BASE_URL,
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "NEMURI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESC,
    images: ["/og-default.png"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NEMURI",
    url: BASE_URL,
    logo: `${BASE_URL}/ibiki-navi-icon.png`,
    description: SITE_DESC,
    sameAs: [],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NEMURI",
    url: BASE_URL,
    description: SITE_DESC,
    publisher: { "@type": "Organization", name: "NEMURI" },
  };

  return (
    <html lang="ja">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
