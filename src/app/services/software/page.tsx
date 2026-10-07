import type { Metadata } from 'next';
import Link from 'next/link';
import AppStoreLinks from '@/components/AppStoreLinks';
import BrandCard from '@/components/BrandCard';
import { paperRouteProducts } from '@/lib/brands';

export const metadata: Metadata = {
  title: 'Our Software | Saunders Simmons Ltd',
  description: 'Explore the PaperRoute software family from Saunders Simmons Ltd. Download the PaperRoute Link and PaperRoute Lite apps.',
  alternates: { canonical: '/services/software' },
};

const mobileApps = [
  {
    id: 'link',
    name: 'PaperRoute Link',
    compatibility: 'Works with PaperRoute and SkipRoute',
    description: 'The companion app for your team. Keep routes, collections and digital paperwork connected with the office while you work on site.',
    note: 'Use your company account to sign in.',
    appStoreUrl: 'https://apps.apple.com/gb/app/paperroute-link/id6776210595',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.paperroute.driver',
    website: 'https://www.paperroute.co.uk',
    websiteLabel: 'Explore PaperRoute',
  },
  {
    id: 'lite',
    name: 'PaperRoute Lite',
    compatibility: 'For small carriers and sole traders',
    description: 'A separate app for your waste paperwork. Create digital Waste Transfer Notes, capture signatures and share PDF records from your phone.',
    note: 'Available for iPhone and Android.',
    appStoreUrl: 'https://apps.apple.com/gb/app/paperroute-lite/id6766035412',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=co.paperroute.lite',
    website: 'https://www.paperroutelite.co.uk',
    websiteLabel: 'Visit PaperRoute Lite',
  },
];

export default function SoftwarePage() {
  return (
    <div className="ss-shell">
      <section className="ss-page-intro">
        <p className="ss-eyebrow">Our software</p>
        <h1 className="ss-display">The PaperRoute<br />software family.</h1>
        <p className="ss-intro-copy">Saunders Simmons is the company behind the PaperRoute family, with specialist tools for different parts of the waste industry.</p>
        <a className="ss-text-link" href="#downloads">Download our apps <span aria-hidden="true">↓</span></a>
      </section>
      <section className="ss-section">
        <div className="ss-two-col">
          <div>
            <p className="ss-eyebrow">Our flagship family</p>
            <h2 className="ss-section-heading">PaperRoute.</h2>
          </div>
          <p>Four products for waste and recycling businesses, from a single carrier recording a collection to a team managing a complete operation.</p>
        </div>
        <div className="ss-brand-grid ss-brand-grid-logos">
          {paperRouteProducts.map((product) => (
            <BrandCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section id="downloads" className="ss-section ss-apps-section" aria-labelledby="apps-heading">
        <div className="ss-two-col">
          <div><p className="ss-eyebrow">App downloads</p><h2 id="apps-heading" className="ss-section-heading">Get the right app<br />for your business.</h2></div>
          <p>Download PaperRoute Link for your company’s team, or PaperRoute Lite for your own waste paperwork. Choose your app below.</p>
        </div>
        <div className="ss-app-download-grid">
          {mobileApps.map((app) => (
            <article className="ss-app-download" key={app.id} aria-labelledby={`app-${app.id}-heading`}>
              <h3 id={`app-${app.id}-heading`} className="ss-app-title">{app.name}</h3>
              <p className="ss-app-compatibility">{app.compatibility}</p>
              <p className="ss-app-description">{app.description}</p>
              <p className="ss-app-note">{app.note}</p>
              <AppStoreLinks appName={app.name} appStoreUrl={app.appStoreUrl} googlePlayUrl={app.googlePlayUrl} />
              <a className="ss-text-link" href={app.website} target="_blank" rel="noopener noreferrer" aria-label={`${app.websiteLabel} (opens in a new tab)`}>{app.websiteLabel}<span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </section>
      <section className="ss-section ss-two-col">
        <h2 className="ss-section-heading">Built and supported<br />by Saunders Simmons.</h2>
        <div>
          <p>We develop and support the PaperRoute family, building practical tools for waste and recycling businesses and improving them around the needs of the people using them.</p>
          <Link className="ss-text-link" href="/about">Meet Saunders Simmons <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </div>
  );
}
