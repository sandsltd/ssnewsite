import Image from 'next/image';
import Link from 'next/link';
import BookCallButton from '@/components/BookCallButton';
import { paperRouteProducts } from '@/lib/brands';

const [paperRoute, skips, lite, broker] = paperRouteProducts;
const familyProducts = [
  {
    product: paperRoute,
    heading: 'The full operations platform',
    description: 'Waste operations software. Collection planning, driver tracking, yard receiving, digital waste records and invoicing.',
    link: 'Explore PaperRoute',
  },
  {
    product: skips,
    heading: 'For skip hire businesses',
    description: 'Skip hire management software. Bookings, day scheduling, container tracking, yard receipts and a customer portal.',
    link: 'Visit skiproute.co.uk',
  },
  {
    product: broker,
    heading: 'For waste brokers',
    description: 'Coordinate your suppliers, offers, completion evidence and job margins from your office.',
    link: 'Explore Broker',
  },
  {
    product: lite,
    heading: 'For sole traders starting out',
    description: 'Simple digital Waste Transfer Notes on your phone.',
    link: 'Explore Lite',
  },
];

export default function Home() {
  return (
    <div className="ss-home">
      <section id="company" className="ss-hero-wrap ss-home-stage" aria-labelledby="company-heading">
        <div className="ss-hero ss-shell">
          <div className="ss-hero-copy">
            <p className="ss-eyebrow ss-stage-label">This is us</p>
            <h1 id="company-heading" className="ss-display">Saunders<br />Simmons.</h1>
            <p className="ss-hero-description">An independent company based in Yeovil, Somerset. We develop and support our own software brands, led by PaperRoute, and build bespoke websites for selected businesses.</p>
            <div className="ss-hero-actions">
              <Link href="/about" className="ss-button">Meet our company <span aria-hidden="true">→</span></Link>
              <a href="#software" className="ss-text-link">Our software <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <aside className="ss-company-profile" aria-labelledby="company-approach-heading">
            <h2 id="company-approach-heading" className="ss-company-profile-heading">Independent company.<br />Personal approach.</h2>
            <p>We combine development expertise with practical business experience. You work directly with the people who build and support our products.</p>
            <div className="ss-company-founders">
              <div><strong>Nick Saunders</strong><span>Co-founder</span></div>
              <div><strong>Dan Simmons</strong><span>Co-founder</span></div>
            </div>
          </aside>
        </div>
      </section>

      <section id="software" className="ss-home-software ss-home-stage" aria-labelledby="software-heading">
        <div className="ss-shell ss-family-layout">
          <div className="ss-family-intro">
            <p className="ss-eyebrow ss-stage-label">The PaperRoute family</p>
            <h2 id="software-heading" className="ss-section-heading">There’s a route<span> for your</span><span> business.</span></h2>
            <p>Our software, built for the waste industry. Four specialist products, developed and supported by Saunders Simmons.</p>
            <Link href="/services/software" className="ss-text-link">Explore our software <span aria-hidden="true">→</span></Link>
          </div>
          <div className="ss-family-products">
            {familyProducts.map(({ product, heading, description, link }) => (
              <a className={`ss-family-product ss-family-${product.id} ss-brand-${product.theme}`} href={product.url} key={product.id} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${product.name} (opens in a new tab)`}>
                <Image className="ss-family-logo" src={product.logo} alt={product.name} width={1079} height={236} />
                <div className="ss-family-product-copy"><h3>{heading}</h3><p>{description}</p></div>
                <span className="ss-family-product-link">{link}<span aria-hidden="true">↗</span></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="websites" className="ss-home-website ss-home-stage" aria-labelledby="website-heading">
        <div className="ss-shell ss-website-layout">
          <div className="ss-website-intro">
            <p className="ss-eyebrow ss-stage-label">We do websites</p>
            <h2 id="website-heading" className="ss-section-heading">Bespoke websites.<br /><span className="ss-accent">Built for your business.</span></h2>
            <p className="ss-website-lead">We take on selected website projects for businesses that value considered design and bespoke development.</p>
            <p>Every project starts with your business, your audience and what the site needs to do. We design and code it around those needs, working directly with you from the first conversation to launch.</p>
            <Link href="/services/web-design" className="ss-text-link">Explore our website design <span aria-hidden="true">→</span></Link>
          </div>
          <div className="ss-website-services">
            <article className="ss-website-detail"><h3>Designed around your business</h3><p>Your identity, content and customers shape the design. A clear, individual website that feels like your business.</p></article>
            <article className="ss-website-detail"><h3>Bespoke coded development</h3><p>We build the pages around the agreed design, with the structure and functionality your website needs.</p></article>
            <article className="ss-website-detail"><h3>Built for every screen</h3><p>Layouts that work across mobile, tablet and desktop, with clear navigation and content that is easy to use.</p></article>
            <BookCallButton className="ss-button ss-button-navy">Discuss your website <span aria-hidden="true">→</span></BookCallButton>
          </div>
        </div>
      </section>
    </div>
  );
}
