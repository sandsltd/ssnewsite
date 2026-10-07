import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Saunders Simmons Ltd',
  description: 'Meet Saunders Simmons Ltd, the Yeovil-based company founded by Nick Saunders and Dan Simmons, behind the PaperRoute software family and bespoke websites.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div className="ss-shell">
      <section className="ss-page-intro">
        <p className="ss-eyebrow">About Saunders Simmons</p>
        <h1 className="ss-display">About<br />Saunders Simmons.</h1>
        <p className="ss-intro-copy">We are an independent company based in Yeovil, Somerset. We develop our own software brands, led by the PaperRoute family, and build bespoke websites for selected clients.</p>
      </section>
      <section className="ss-section ss-two-col">
        <h2 className="ss-section-heading">Software shaped by<br />business needs.</h2>
        <div>
          <p>We start by understanding how a business operates, what its team needs to get done and where software can make the work easier.</p>
          <p>That approach guides the PaperRoute family and our website projects. We develop the products, keep improving them and support the businesses using them.</p>
          <Link className="ss-text-link" href="/services/software">Explore our brands <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
      <section id="team" className="ss-section" aria-labelledby="team-heading">
        <p className="ss-eyebrow">Our team</p>
        <h2 id="team-heading" className="ss-section-heading">Meet the team.</h2>
        <div className="ss-team-grid">
          <article className="ss-editorial-card ss-team-card">
            <div className="ss-team-identity">
              <Image className="ss-team-portrait" src="/team/nick-saunders-navy-v2.png" alt="Cartoon portrait of Nick Saunders wearing a navy Saunders Simmons polo" width={1254} height={1254} sizes="(max-width: 639px) 200px, (max-width: 959px) 128px, 200px" />
              <div>
                <h3>Nick Saunders</h3>
                <p className="ss-team-role">Co-founder</p>
              </div>
            </div>
            <p>Nick brings the development expertise behind our software and websites, turning business requirements into working products.</p>
          </article>
          <article className="ss-editorial-card ss-team-card">
            <div className="ss-team-identity">
              <Image className="ss-team-portrait" src="/team/dan-simmons-navy-v2.png" alt="Cartoon portrait of Dan Simmons wearing a navy Saunders Simmons polo" width={1254} height={1254} sizes="(max-width: 639px) 200px, (max-width: 959px) 128px, 200px" />
              <div>
                <h3>Dan Simmons</h3>
                <p className="ss-team-role">Co-founder</p>
              </div>
            </div>
            <p>Dan brings the business perspective, helping shape how our company and brands connect with the people they serve.</p>
          </article>
          <article className="ss-editorial-card ss-team-card">
            <div className="ss-team-identity">
              <Image className="ss-team-portrait" src="/team/katy-navy-v1.png" alt="Cartoon portrait of Katy wearing a navy Saunders Simmons polo" width={1254} height={1254} sizes="(max-width: 639px) 200px, (max-width: 959px) 128px, 200px" />
              <div>
                <h3>Katy</h3>
                <p className="ss-team-role">Customer Success Manager</p>
              </div>
            </div>
            <p>Katy works with our PaperRoute customers, helping them get the most from the software.</p>
          </article>
        </div>
      </section>
      <section className="ss-section ss-two-col">
        <h2 className="ss-section-heading">Our company<br />and brands.</h2>
        <div>
          <p>Saunders Simmons brings our brands together under one company. Each has its own identity and purpose, backed by the same team.</p>
          <p>PaperRoute is our flagship today, with room for new products and brands as the business grows.</p>
          <Link className="ss-text-link" href="/contact">Speak with us <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </div>
  );
}
