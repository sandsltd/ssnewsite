import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="ss-shell ss-page-intro">
      <p className="ss-eyebrow">404 / Page not found</p>
      <h1 className="ss-display">Let’s get you<br /><em>back on track.</em></h1>
      <p className="ss-intro-copy">This page may have moved. Explore our company, our brands or get in touch.</p>
      <Link href="/" className="ss-button">Return to Saunders Simmons <span aria-hidden="true">↗</span></Link>
    </div>
  );
}
