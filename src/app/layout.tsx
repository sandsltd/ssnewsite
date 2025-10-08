import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Website Design Yeovil | Web Design Somerset | Digital Marketing Dorset | Saunders Simmons Ltd",
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
        {/* DNS Prefetch for third-party domains */}
        <link rel="dns-prefetch" href="//connect.facebook.net" />
        <link rel="dns-prefetch" href="//www.facebook.com" />
        <link rel="dns-prefetch" href="//static.doubleclick.net" />
        <link rel="dns-prefetch" href="//googleads.g.doubleclick.net" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preconnect to critical domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.saunders-simmons.co.uk" />
        
        {/* Preload critical resources */}
        <link rel="preload" as="image" href="/logos/logo.png" fetchPriority="high" />
        
        {/* Defer non-critical resource hints */}
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
        
        {/* Critical CSS for above-the-fold content - inline to prevent render blocking */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical styles for immediate rendering */
            html { font-family: ui-sans-serif, system-ui, sans-serif; }
            body { margin: 0; background: #ffffff; color: #171717; }
            .min-h-screen { min-height: 100vh; }
            .flex { display: flex; }
            .flex-col { flex-direction: column; }
            .flex-grow { flex-grow: 1; }
            .sticky { position: sticky; }
            .top-0 { top: 0; }
            .z-50 { z-index: 50; }
            .bg-white { background-color: #ffffff; }
            .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05); }
            .max-w-7xl { max-width: 80rem; }
            .mx-auto { margin-left: auto; margin-right: auto; }
            .px-4 { padding-left: 1rem; padding-right: 1rem; }
            .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
            .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
            .font-bold { font-weight: 700; }
            .text-gray-900 { color: #111827; }
            .text-blue-600 { color: #2563eb; }
            .grid { display: grid; }
            .gap-12 { gap: 3rem; }
            .items-center { align-items: center; }
            .justify-center { justify-content: center; }
            .text-center { text-align: center; }
            .relative { position: relative; }
            .overflow-hidden { overflow: hidden; }
            .rounded-full { border-radius: 9999px; }
            .border-4 { border-width: 4px; }
            .border-white { border-color: #ffffff; }
            .p-3 { padding: 0.75rem; }
            .object-contain { object-fit: contain; }
            .w-60 { width: 15rem; }
            .h-60 { height: 15rem; }
            @media (min-width: 640px) {
              .sm\\:w-72 { width: 18rem; }
              .sm\\:h-72 { height: 18rem; }
              .sm\\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
              .sm\\:text-5xl { font-size: 3rem; line-height: 1; }
            }
            @media (min-width: 1024px) {
              .lg\\:w-80 { width: 20rem; }
              .lg\\:h-80 { height: 20rem; }
              .lg\\:px-8 { padding-left: 2rem; padding-right: 2rem; }
              .lg\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
              .lg\\:text-left { text-align: left; }
            }
            /* Performance optimizations */
            img { content-visibility: auto; }
            iframe { content-visibility: auto; }
            .lazy-load { content-visibility: auto; }
          `
        }} />
        
        {/* Meta Pixel Code - Ultra-optimized with facade pattern */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Lightweight facade - only load when user interacts
              window.fbq = window.fbq || function() {
                (window.fbq.queue = window.fbq.queue || []).push(arguments);
              };
              window.fbq.loaded = false;
              window.fbq.queue = [];
              
              // Track pageview immediately with facade
              fbq('init', '232014927976021');
              fbq('track', 'PageView');
              
              // Load real Facebook Pixel only when user shows intent
              function loadRealFacebookPixel() {
                if (window.fbq.loaded) return;
                window.fbq.loaded = true;
                
                const script = document.createElement('script');
                script.async = true;
                script.src = 'https://connect.facebook.net/en_US/fbevents.js';
                script.onload = function() {
                  // Process queued events
                  window.fbq.queue.forEach(args => fbq.apply(null, args));
                  window.fbq.queue = [];
                };
                document.head.appendChild(script);
              }
              
              // Load on user interaction (scroll, click, touch, or after 3 seconds)
              const events = ['scroll', 'click', 'touchstart', 'mousemove', 'keypress'];
              const loadOnInteraction = () => {
                events.forEach(event => document.removeEventListener(event, loadOnInteraction));
                loadRealFacebookPixel();
              };
              
              if (typeof window !== 'undefined') {
                events.forEach(event => document.addEventListener(event, loadOnInteraction, { passive: true, once: true }));
                // Fallback - load after 3 seconds if no interaction
                setTimeout(loadRealFacebookPixel, 3000);
              }
            `
          }}
        />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=232014927976021&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
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
