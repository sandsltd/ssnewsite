import type { Metadata } from 'next';
import Link from 'next/link';
import BookCallButton from '@/components/BookCallButton';

export const metadata: Metadata = {
  title: 'Contact | Saunders Simmons Ltd',
  description: 'Speak with Saunders Simmons Ltd about our software brands or a bespoke website. Based in Yeovil, Somerset, working with businesses across the UK.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div className="ss-shell">
      <section className="ss-page-intro">
        <p className="ss-eyebrow">Contact</p>
        <h1 className="ss-display">Contact<br />Saunders Simmons.</h1>
        <p className="ss-intro-copy">Contact our team about PaperRoute, a bespoke website or a business enquiry.</p>
        <BookCallButton className="ss-button">Book a call <span aria-hidden="true">↗</span></BookCallButton>
      </section>
      <section className="ss-section ss-two-col">
        <h2 className="ss-section-heading">Speak to Saunders Simmons.</h2>
        <dl className="ss-contact-details">
          <div>
            <dt>Email</dt>
            <dd><a href="mailto:hello@saunders-simmons.co.uk">hello@saunders-simmons.co.uk</a></dd>
          </div>
          <div>
            <dt>Telephone</dt>
            <dd><a href="tel:03300436608">0330 043 6608</a></dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>Yeovil, Somerset, United Kingdom</dd>
          </div>
        </dl>
      </section>
      <section className="ss-section ss-two-col">
        <article className="ss-editorial-card">
          <p className="ss-eyebrow">Software enquiries</p>
          <h2 className="ss-section-heading">PaperRoute enquiries.</h2>
          <p>Visit the relevant product website for product information, demos and getting started.</p>
          <Link className="ss-text-link" href="/services/software">Explore the PaperRoute family <span aria-hidden="true">↗</span></Link>
        </article>
        <article className="ss-editorial-card">
          <p className="ss-eyebrow">Existing clients</p>
          <h2 className="ss-section-heading">Client portal.</h2>
          <p>Access the Saunders Simmons client portal with your existing account details.</p>
          <a className="ss-text-link" href="https://portal.saunders-simmons.co.uk/login" target="_blank" rel="noopener noreferrer" aria-label="Client login (opens in a new tab)">Client login <span aria-hidden="true">↗</span></a>
        </article>
      </section>
    </div>
  );
}
