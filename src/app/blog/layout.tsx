import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles | Saunders Simmons Ltd',
  description: 'The Saunders Simmons article archive: writing on websites, software and running a business online.',
  alternates: { canonical: 'https://www.saunders-simmons.co.uk/blog' },
  openGraph: {
    title: 'Articles | Saunders Simmons Ltd',
    description: 'Writing on websites, software and running a business online.',
    url: 'https://www.saunders-simmons.co.uk/blog',
    siteName: 'Saunders Simmons Ltd',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
