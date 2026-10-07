import Link from 'next/link';
import Wordmark from './Wordmark';

export default function Footer() {
  return (
    <footer className="ss-footer">
      <div className="ss-shell">
        <div className="ss-footer-top">
          <div>
            <Link href="/" aria-label="Saunders Simmons home"><Wordmark /></Link>
            <p>Software, brands and bespoke websites.<br />Based in Yeovil. Working across the UK.</p>
          </div>
          <div className="ss-footer-nav">
            <Link href="/about">The company</Link>
            <Link href="/services/software">Our brands</Link>
            <Link href="/services/web-design">Bespoke websites</Link>
            <Link href="/contact">Get in touch</Link>
          </div>
          <div className="ss-footer-contact">
            <a href="mailto:hello@saunders-simmons.co.uk">hello@saunders-simmons.co.uk</a>
            <a href="tel:03300436608">0330 043 6608</a>
            <a href="https://portal.saunders-simmons.co.uk/login" target="_blank" rel="noopener noreferrer">Client login ↗</a>
          </div>
        </div>
        <div className="ss-footer-details">
          <p className="ss-footer-address"><span>Registered office:</span> Unit 1–2, 15 Oxford Road, Pen Mill Trading Estate, Yeovil, Somerset BA21 5HR</p>
          <div className="ss-footer-registrations">
            <span>Company No: 15839557</span>
            <span>VAT Registration No: 471951865</span>
            <a href="https://ico.org.uk/ESDWebPages/Entry/ZB805139" target="_blank" rel="noopener noreferrer" aria-label="ICO registration ZB805139 (opens in a new tab)">ICO: ZB805139 <span aria-hidden="true">↗</span></a>
            <span>Fully insured</span>
          </div>
        </div>
        <div className="ss-footer-bottom">
          <p>© {new Date().getFullYear()} Saunders Simmons Ltd. All rights reserved.</p>
          <div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/cookies">Cookies</Link></div>
        </div>
      </div>
    </footer>
  );
}
