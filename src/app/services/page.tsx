import type { Metadata } from 'next';
import Link from 'next/link';
import BookCallButton from '@/components/BookCallButton';

export const metadata: Metadata = {
  title: 'What We Build | Saunders Simmons Ltd',
  description: 'Explore the software brands and bespoke websites designed and developed by Saunders Simmons Ltd, the company behind the PaperRoute family.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <div className="ss-shell">
      <section className="ss-page-intro">
        <p className="ss-eyebrow">What we build</p>
        <h1 className="ss-display">Software and<br />bespoke websites.</h1>
        <p className="ss-intro-copy">We develop and support our own software brands, led by the PaperRoute family. We also design and code bespoke websites for selected business clients.</p>
      </section>
      <section className="ss-section ss-two-col" aria-label="Our work">
        <article className="ss-editorial-card">
          <p className="ss-eyebrow">01 / Our brands</p>
          <h2 className="ss-section-heading">The PaperRoute family.</h2>
          <p>The PaperRoute family is our flagship: specialist products that connect the people, records and everyday tasks behind waste operations.</p>
          <p>Four products cover waste and recycling operations, skip hire, smaller carriers and waste brokerage teams.</p>
          <Link className="ss-text-link" href="/services/software">Explore our brands <span aria-hidden="true">↗</span></Link>
        </article>
        <article className="ss-editorial-card">
          <p className="ss-eyebrow">02 / Bespoke websites</p>
          <h2 className="ss-section-heading">Bespoke coded websites.</h2>
          <p>We design and code websites around your business, brand and content, with layouts that work across mobile, tablet and desktop.</p>
          <p>Five-page websites from £2,500 ex VAT. Every project starts with a conversation and an agreed scope.</p>
          <Link className="ss-text-link" href="/services/web-design">Discover bespoke websites <span aria-hidden="true">↗</span></Link>
        </article>
      </section>
      <section className="ss-section ss-two-col">
        <h2 className="ss-section-heading">Discuss your project.</h2>
        <div>
          <p>Tell us about your business and what you need. We will discuss the scope and the next steps.</p>
          <BookCallButton className="ss-button">Book a call <span aria-hidden="true">↗</span></BookCallButton>
        </div>
      </section>
    </div>
  );
}
