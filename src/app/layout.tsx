import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saunders Simmons Ltd - Website Design & Marketing",
  description: "Professional website design and marketing solutions to help your business grow and succeed online.",
  metadataBase: new URL('https://www.saunders-simmons.co.uk'),
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Saunders Simmons Ltd - Website Design & Marketing",
    description: "Professional website design and marketing solutions to help your business grow and succeed online.",
    url: 'https://www.saunders-simmons.co.uk',
    siteName: 'Saunders Simmons Ltd',
    images: [
      {
        url: '/logos/logo.png',
        width: 1200,
        height: 630,
        alt: 'Saunders Simmons Ltd Logo',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Saunders Simmons Ltd - Website Design & Marketing",
    description: "Professional website design and marketing solutions to help your business grow and succeed online.",
    images: ['/logos/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.saunders-simmons.co.uk",
              "name": "Saunders Simmons Ltd",
              "description": "Professional website design and marketing solutions to help your business grow and succeed online.",
              "url": "https://www.saunders-simmons.co.uk",
              "logo": "https://www.saunders-simmons.co.uk/logos/logo.png",
              "image": "https://www.saunders-simmons.co.uk/logos/logo.png",
              "telephone": "03300436608",
              "email": "hello@saunders-simmons.co.uk",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "15 Oxford Road, Pen Mill Trading Estate",
                "addressLocality": "Yeovil",
                "addressRegion": "Somerset", 
                "postalCode": "BA21 5HR",
                "addressCountry": "GB"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 50.9429,
                "longitude": -2.6309
              },
              "openingHours": [
                "Mo-Fr 09:00-17:00"
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "17:00"
                }
              ],
              "areaServed": [
                {
                  "@type": "GeoCircle",
                  "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": 50.9429,
                    "longitude": -2.6309
                  },
                  "geoRadius": "65 miles"
                },
                {
                  "@type": "Place",
                  "name": "United Kingdom"
                },
                {
                  "@type": "Place", 
                  "name": "Yeovil"
                },
                {
                  "@type": "Place",
                  "name": "Somerset"
                },
                {
                  "@type": "Place",
                  "name": "Dorset"
                }
              ],
              "serviceType": ["Website Design", "Web Development", "SEO", "Digital Marketing"],
              "priceRange": "££",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "9",
                "bestRating": "5",
                "worstRating": "1"
              },
              "sameAs": [
                "https://portal.saunders-simmons.co.uk",
                "https://www.facebook.com/profile.php?id=61560266678495",
                "https://www.instagram.com/saunderssimmonswebsolutions/"
              ],
              "foundingDate": "2020",
              "numberOfEmployees": "2-10",
              "slogan": "Building long-term digital partnerships"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
