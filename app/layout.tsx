import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { BUSINESS_DETAILS } from "./constants";
import StickyMobileBar from "@/components/StickyMobileBar";

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
    "@type": "AutoBodyShop",
    "name": BUSINESS_DETAILS.name,
    "image": "https://www.carbodyshop.org/og-image.png",
    "telephone": BUSINESS_DETAILS.phone,
    "email": BUSINESS_DETAILS.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2 Whitworth",
      "addressLocality": BUSINESS_DETAILS.city,
      "postalCode": "OL12 8HN",
      "addressCountry": "UK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.6668735,
      "longitude": -2.1736736
    },
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
    "priceRange": "£"
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
