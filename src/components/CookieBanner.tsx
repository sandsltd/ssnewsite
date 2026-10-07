'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      const timer = setTimeout(() => setShowBanner(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    
    // Trigger custom event to load tracking scripts
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('cookieConsentAccepted'));
    }
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="ss-cookie" role="region" aria-label="Cookie preferences">
      <p>We use optional cookies for analytics and marketing. You can accept or reject them. Read our <Link href="/cookies">cookie policy</Link>.</p>
      <div className="ss-cookie-actions">
        <button onClick={handleReject} className="ss-button-outline">Reject optional</button>
        <button onClick={handleAccept} className="ss-button">Accept optional</button>
      </div>
    </div>
  );
}
