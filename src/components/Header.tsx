'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Wordmark from './Wordmark';

const navigation = [
  { label: 'The company', href: '/about' },
  { label: 'Our Software', href: '/services/software' },
  { label: 'Bespoke websites', href: '/services/web-design' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="ss-header">
      <a className="ss-skip-link" href="#main-content">Skip to content</a>
      <div className="ss-shell ss-header-inner">
        <Link href="/" className="ss-home-link" aria-label="Saunders Simmons home" onClick={() => setOpen(false)}>
          <Wordmark />
          <span className="ss-home-caption">Software | design</span>
        </Link>
        <nav className="ss-desktop-nav" aria-label="Main navigation">
          {navigation.map(({ label, href }) => (
            <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}>{label}</Link>
          ))}
        </nav>
        <button className="ss-menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          <span className={open ? 'ss-menu-lines is-open' : 'ss-menu-lines'} aria-hidden="true"><span /><span /></span>
        </button>
      </div>
      {open && (
        <nav id="mobile-navigation" className="ss-mobile-nav ss-shell" aria-label="Mobile navigation">
          {navigation.map(({ label, href }) => (
            <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined} onClick={() => setOpen(false)}>{label}<span aria-hidden="true">↗</span></Link>
          ))}
        </nav>
      )}
    </header>
  );
}
