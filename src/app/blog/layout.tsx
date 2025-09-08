import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design & SEO Blog - Somerset, Dorset & Yeovil | Saunders Simmons Ltd",
  description: "Expert insights on web design, SEO, and digital marketing for Somerset, Dorset, and Yeovil businesses. Learn how to grow your business online with professional tips and strategies.",
  openGraph: {
    title: "Web Design & SEO Blog - Somerset, Dorset & Yeovil | Saunders Simmons Ltd",
    description: "Expert insights on web design, SEO, and digital marketing for Somerset, Dorset, and Yeovil businesses.",
    url: 'https://www.saunders-simmons.co.uk/blog',
    siteName: 'Saunders Simmons Ltd',
    images: [
      {
        url: '/logos/logo.png',
        width: 1200,
        height: 630,
        alt: 'Saunders Simmons Ltd Blog',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Web Design & SEO Blog - Somerset, Dorset & Yeovil | Saunders Simmons Ltd",
    description: "Expert insights on web design, SEO, and digital marketing for Somerset, Dorset, and Yeovil businesses.",
    images: ['/logos/logo.png'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

