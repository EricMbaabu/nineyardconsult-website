import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { ScrollRevealProvider } from "@/components/ScrollRevealProvider";
import { STRUCTURED_DATA } from "@/lib/constants";
import "./globals.css";
import "@/styles/sections.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--serif",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nineyard Consult Group | Pan-African Strategy & Business Advisory",
  description:
    "Nineyard Consult is a boutique strategy and business development advisory firm catalyzing growth for African businesses. We specialize in go-to-market strategy, investment readiness, and sustainability implementation across 15+ African countries.",
  keywords: [
    "Africa business advisory",
    "go-to-market strategy Africa",
    "investment readiness",
    "clean energy Africa",
    "FMCG consulting",
    "supply chain Africa",
    "pan-African advisory",
    "market entry Africa",
    "business development Kenya",
    "route-to-market Africa",
  ],
  authors: [{ name: "Nineyard Consult Group Ltd" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.nineyardconsult.com/" },
  openGraph: {
    type: "website",
    url: "https://www.nineyardconsult.com/",
    title: "Nineyard Consult Group | Pan-African Strategy & Business Advisory",
    description:
      "Boutique strategy and business development advisory firm catalyzing growth for African businesses across 15+ countries. Connecting ideas, markets, and partnerships.",
    siteName: "Nineyard Consult Group",
    images: [{ url: "https://www.nineyardconsult.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nineyard Consult Group | Pan-African Strategy & Business Advisory",
    description:
      "Boutique strategy and business development advisory firm catalyzing growth for African businesses across 15+ countries.",
    images: ["https://www.nineyardconsult.com/logo.jpg"],
  },
  other: {
    "geo.region": "KE",
    "geo.placename": "Nairobi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(STRUCTURED_DATA),
          }}
        />
      </head>
      <body>
        <ScrollRevealProvider>{children}</ScrollRevealProvider>
      </body>
    </html>
  );
}
