import Link from 'next/link';

interface PricingSectionProps {
  title?: string;
  subtitle?: string;
  showProcessOverview?: boolean;
  ctaText?: string;
  ctaSubtext?: string;
}

export default function PricingSection({
  title = 'A website built around your business.',
  subtitle = 'Bespoke design and custom code, with five carefully considered pages.',
}: PricingSectionProps) {
  return (
    <section id="pricing" className="ss-section ss-shell">
      <div className="ss-two-col">
        <div>
          <p className="ss-eyebrow">Bespoke websites</p>
          <h2 className="ss-section-heading">{title}</h2>
          <p className="ss-intro-copy">{subtitle}</p>
        </div>
        <div className="ss-editorial-card">
          <p className="ss-eyebrow">Five-page website</p>
          <p className="ss-section-heading">From £2,500 <span style={{ fontSize: '0.4em' }}>ex VAT</span></p>
          <p>We agree the brief, scope and final price before work begins.</p>
          <Link href="/services/web-design" className="ss-text-link">Explore bespoke websites <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
