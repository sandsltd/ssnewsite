import type { Metadata } from 'next';
import Link from 'next/link';
import BookCallButton from '@/components/BookCallButton';

export const metadata: Metadata = {
  title: 'Bespoke Websites from £2,500 ex VAT | Saunders Simmons Ltd',
  description: 'Bespoke coded five-page websites from £2,500 ex VAT. Saunders Simmons designs and develops websites around your business, identity and content.',
  alternates: { canonical: '/services/web-design' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bespoke five-page website design and development',
  description: 'Bespoke coded five-page websites from £2,500 ex VAT. Final scope and price agreed before development.',
  serviceType: 'Bespoke website design and development',
  provider: { '@type': 'Organization', name: 'Saunders Simmons Ltd', url: 'https://www.saunders-simmons.co.uk' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'GBP',
    priceSpecification: { '@type': 'PriceSpecification', minPrice: 2500, priceCurrency: 'GBP', valueAddedTaxIncluded: false },
    description: 'Five-page bespoke coded websites from £2,500 excluding VAT.',
    url: 'https://www.saunders-simmons.co.uk/services/web-design',
  },
};

export default function WebDesignPage() {
  return (
    <div className="ss-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <section className="ss-page-intro">
        <p className="ss-eyebrow">Bespoke websites</p>
        <h1 className="ss-display">Bespoke websites<br />for your business.</h1>
        <p className="ss-intro-copy">We design and code websites around your business, brand and content. Five-page bespoke coded websites start from £2,500 ex VAT.</p>
        <BookCallButton className="ss-button">Discuss your website <span aria-hidden="true">↗</span></BookCallButton>
      </section>
      <section className="ss-section ss-two-col">
        <div>
          <p className="ss-eyebrow">The starting point</p>
          <h2 className="ss-section-heading">Five pages.<br />Built for your business.</h2>
        </div>
        <div className="ss-editorial-card">
          <p className="ss-price">From £2,500 <span>ex VAT</span></p>
          <p>A bespoke five-page website designed around your content, with layouts that work across mobile, tablet and desktop.</p>
          <ul className="ss-detail-list">
            <li>Initial conversation and agreed project scope</li>
            <li>Design shaped around your identity and content</li>
            <li>Five bespoke coded pages</li>
            <li>Responsive development and launch preparation</li>
          </ul>
          <p>Additional pages, integrations, hosting and ongoing support are discussed and quoted to suit your requirements.</p>
        </div>
      </section>
      <section className="ss-section">
        <p className="ss-eyebrow">How we work</p>
        <h2 className="ss-section-heading">From brief to launch.</h2>
        <div className="ss-three-col">
          <article className="ss-editorial-card">
            <p className="ss-eyebrow">01 / Understand</p>
            <h3>Get the brief right.</h3>
            <p>We talk about your business, audience and content, then agree what the website needs to do and how we will deliver it.</p>
          </article>
          <article className="ss-editorial-card">
            <p className="ss-eyebrow">02 / Design & build</p>
            <h3>Design and build.</h3>
            <p>We develop the visual direction and build the pages around it, reviewing the work with you as the project takes shape.</p>
          </article>
          <article className="ss-editorial-card">
            <p className="ss-eyebrow">03 / Refine & launch</p>
            <h3>Check and launch.</h3>
            <p>We review the content, check the experience across screen sizes and agree the final steps before your site goes live.</p>
          </article>
        </div>
      </section>
      <section className="ss-section ss-two-col">
        <h2 className="ss-section-heading">Discuss your<br />website project.</h2>
        <div>
          <p>Tell us what your website needs to do. We will discuss the scope, budget and next steps.</p>
          <BookCallButton className="ss-button">Book a call <span aria-hidden="true">↗</span></BookCallButton>
          <p><Link className="ss-text-link" href="/faq">A few common questions <span aria-hidden="true">↗</span></Link></p>
        </div>
      </section>
    </div>
  );
}
