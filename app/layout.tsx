import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { BUSINESS_DETAILS } from "./constants";
import StickyMobileBar from "@/components/StickyMobileBar";
import { businessNode } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.carbodyshop.org"), // Fallback/Canonical URL
  title: {
    default: `Car Body Repairs Rochdale | Local Car Body Shop Near You`,
    template: `%s | ${BUSINESS_DETAILS.name}`,
  },
  description: "Expert car body repair in Rochdale. We fix dents, scratches, accident damage and bodywork issues. Trusted local car body shop with fast quotes.",
  authors: [{ name: BUSINESS_DETAILS.name }],
  creator: BUSINESS_DETAILS.name,
  publisher: BUSINESS_DETAILS.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.carbodyshop.org",
  },
  openGraph: {
    title: `Car Body Repairs Rochdale | Local Car Body Shop Near You`,
    description: "Expert car body repair in Rochdale. We fix dents, scratches, accident damage and bodywork issues. Trusted local car body shop with fast quotes.",
    url: "https://www.carbodyshop.org",
    siteName: BUSINESS_DETAILS.name,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${BUSINESS_DETAILS.name} Workshop`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Car Body Repairs Rochdale | Local Car Body Shop Near You`,
    description: "Expert car body repair in Rochdale. We fix dents, scratches, accident damage and bodywork issues. Trusted local car body shop with fast quotes.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }, { url: "/logo.png", type: "image/png", sizes: "any" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...businessNode(),
        "image": "https://www.carbodyshop.org/og-image.png",
        "logo": "https://www.carbodyshop.org/logo.png",
        "areaServed": [
          { "@type": "City", "name": "Rochdale" },
          { "@type": "City", "name": "Whitworth" },
          { "@type": "City", "name": "Bacup" },
          { "@type": "City", "name": "Littleborough" },
          { "@type": "City", "name": "Milnrow" },
          { "@type": "City", "name": "Heywood" },
          { "@type": "City", "name": "Bury" },
          { "@type": "City", "name": "Oldham" },
          { "@type": "City", "name": "Middleton" },
          { "@type": "City", "name": "Manchester" },
          { "@type": "City", "name": "Bolton" }
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:30",
            "closes": "17:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "13:00"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Car Body Repair Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Car Respray", "url": "https://www.carbodyshop.org/services/full-car-respray-rochdale" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Accident & Collision Repair", "url": "https://www.carbodyshop.org/services/accident-collision-repair-rochdale" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bumper Repair", "url": "https://www.carbodyshop.org/services/bumper-repair-rochdale" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dent Removal", "url": "https://www.carbodyshop.org/services/dent-removal-rochdale" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Car Scratch Repair", "url": "https://www.carbodyshop.org/services/car-scratch-repair-rochdale" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Minor Accident Repair", "url": "https://www.carbodyshop.org/services/minor-accident-repair-rochdale" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lease Return Repairs", "url": "https://www.carbodyshop.org/services/lease-return-repairs-rochdale" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Trade & Motor Dealer Bodyshop Services", "url": "https://www.carbodyshop.org/services/trade-motor-dealer-bodyshop-services" } }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.carbodyshop.org/#website",
        "name": "Car Body Shop",
        "url": "https://www.carbodyshop.org",
        "publisher": { "@id": "https://www.carbodyshop.org/#business" }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J7TX9SBEQ3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J7TX9SBEQ3');
          `}
        </Script>
      </head>
      <body className="antialiased pb-16 md:pb-0">
        {children}
        <StickyMobileBar />
        <Script src="/widgets/car-color-loader.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
