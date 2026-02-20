import type { Metadata } from "next";
import "./globals.css";
import { BUSINESS_DETAILS } from "./constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://carbodyshop.org"), // Fallback/Canonical URL
  title: {
    default: `Car Body Shop Rochdale | Denting, Painting & Body Repairs`,
    template: `%s | ${BUSINESS_DETAILS.name}`,
  },
  description: "Fast, affordable, and high-quality car body repairs in Rochdale. Bumper scuffs, dents, scratches, and accident repairs. Cash prices, no insurance hassle.",
  keywords: [
    "Car Body Shop Rochdale",
    "Car Body Repair Rochdale",
    "Auto Body Shop Rochdale",
    "Car Repair Garage Rochdale",
    "Accident Repair Centre Rochdale",
    "Car Body Repairs Near Me",
    "Car Body Shop Near Me",
    "Local Body Shop Rochdale",
    "Best Car Body Shop Rochdale",
    "Affordable Car Body Shop Rochdale",
    "Car Scratch Repair Rochdale",
    "Dent Removal Rochdale",
    "Bumper Repair Rochdale",
    "Bumper Scuff Repair Rochdale",
    "Car Paint Repair Rochdale",
    "Alloy Wheel Refurbishment Rochdale",
    "Van Body Repairs Rochdale",
    "Minor Collision Repair Rochdale",
    "Car Respray Rochdale",
    "Smart Repair Rochdale",
    "Cheap Car Body Repair Rochdale",
    "Car Scratch Repair Cost Rochdale",
    "Dent Repair Cost Rochdale",
    "How Much To Fix Car Scratch UK",
    "Bumper Repair Price Rochdale",
    "Affordable Accident Repair Rochdale",
    "Cash Car Repairs Rochdale",
    "Car Body Shop Heywood",
    "Car Body Shop Middleton",
    "Car Body Shop Oldham",
    "Car Body Shop Bury",
    "Car Body Shop Manchester",
    "Dent Removal Oldham",
    "Accident Repair Middleton",
    "Fix Scratched Car Door Rochdale",
    "Repair Car Bumper Scuff Rochdale",
    "Car Dent Repair Same Day Rochdale",
    "Small Car Accident Repair Rochdale",
    "Parking Damage Repair Rochdale",
    "Lease Return Car Repairs Rochdale",
    "Mobile Car Scratch Repair Rochdale"
  ],
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
  openGraph: {
    title: `${BUSINESS_DETAILS.name} - Expert Car Body Repairs`,
    description: "Get a free estimate today. Bumper scuffs, dents, and scratches repaired quickly and affordably.",
    url: "https://carbodyshop.org",
    siteName: BUSINESS_DETAILS.name,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Ensure there is a default OG image if possible, or leave as placeholder
        width: 1200,
        height: 630,
        alt: `${BUSINESS_DETAILS.name} Workshop`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_DETAILS.name} | Rochdale`,
    description: "Affordable car body repairs. Text us for a quote.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
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
    "image": "https://carbodyshop.org/og-image.png", // Placeholder
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
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
