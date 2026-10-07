import type { Metadata } from 'next';
import { Allura, Inter, Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

const bodyFont = Inter({ variable: '--font-body', subsets: ['latin'], display: 'swap' });
const headingFont = Manrope({ variable: '--font-heading', subsets: ['latin'], display: 'swap' });
const signatureFont = Allura({ variable: '--font-signature', subsets: ['latin'], weight: '400', display: 'swap' });

const description = 'Saunders Simmons Ltd is an independent British software company. Home of the PaperRoute family, with selected bespoke website projects.';
const consentAnalytics = "// Check for existing cookie consent\n              function hasCookieConsent() {\n                if (typeof window === 'undefined') return false;\n                const consent = localStorage.getItem('cookieConsent');\n                return consent === 'accepted';\n              }\n              \n              // Lightweight facade - only load when user consents\n              window.fbq = window.fbq || function() {\n                (window.fbq.queue = window.fbq.queue || []).push(arguments);\n              };\n              window.fbq.loaded = false;\n              window.fbq.queue = [];\n              \n              // Load real Facebook Pixel\n              function loadRealFacebookPixel() {\n                if (window.fbq.loaded) return;\n                window.fbq.loaded = true;\n                \n                const script = document.createElement('script');\n                script.async = true;\n                script.src = 'https://connect.facebook.net/en_US/fbevents.js';\n                script.onload = function() {\n                  // Process queued events\n                  window.fbq.queue.forEach(args => fbq.apply(null, args));\n                  window.fbq.queue = [];\n                };\n                document.head.appendChild(script);\n              }\n              \n              // Initialize and load if consent already given\n              if (typeof window !== 'undefined') {\n                if (hasCookieConsent()) {\n                  // User has already consented, load immediately\n                  fbq('init', '232014927976021');\n                  fbq('track', 'PageView');\n                  loadRealFacebookPixel();\n                } else {\n                  // Wait for consent\n                  window.addEventListener('cookieConsentAccepted', function() {\n                    fbq('init', '232014927976021');\n                    fbq('track', 'PageView');\n                    loadRealFacebookPixel();\n                  }, { once: true });\n                }\n              }\n            ";

export const metadata: Metadata = {
  title: 'Saunders Simmons Ltd | Independent Software & Brands',
  description,
  metadataBase: new URL('https://www.saunders-simmons.co.uk'),
  icons: { icon: [{ url: '/brand-mark.svg', type: 'image/svg+xml' }] },
  openGraph: { title: 'Saunders Simmons Ltd', description, url: 'https://www.saunders-simmons.co.uk', siteName: 'Saunders Simmons Ltd', locale: 'en_GB', type: 'website' },
  twitter: { card: 'summary', title: 'Saunders Simmons Ltd', description },
};

const company = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Saunders Simmons Ltd',
  legalName: 'Saunders Simmons Ltd',
  url: 'https://www.saunders-simmons.co.uk',
  email: 'hello@saunders-simmons.co.uk',
  telephone: '+443300436608',
  identifier: '15839557',
  founder: [{ '@type': 'Person', name: 'Nick Saunders' }, { '@type': 'Person', name: 'Dan Simmons' }],
  address: { '@type': 'PostalAddress', streetAddress: '15 Oxford Road, Pen Mill Trading Estate', addressLocality: 'Yeovil', addressRegion: 'Somerset', postalCode: 'BA21 5HR', addressCountry: 'GB' },
  brand: { '@type': 'Brand', name: 'PaperRoute', url: 'https://www.paperroute.co.uk' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(company).replace(/</g, '\\u003c') }} />
        <script dangerouslySetInnerHTML={{ __html: consentAnalytics }} />
      </head>
      <body className={`${bodyFont.variable} ${headingFont.variable} ${signatureFont.variable}`}>
        <Header />
        <main id="main-content" className="ss-main">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
