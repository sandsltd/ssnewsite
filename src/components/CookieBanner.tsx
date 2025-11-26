'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      setTimeout(() => {
        setShowBanner(true);
        // Trigger animation
        setTimeout(() => setIsVisible(true), 10);
      }, 500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    setIsVisible(false);
    
    // Trigger custom event to load tracking scripts
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('cookieConsentAccepted'));
    }
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
    setIsVisible(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-white rounded-2xl shadow-2xl border-2 p-6 sm:p-8" style={{borderColor: '#51AACD'}}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                We Value Your Privacy
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We use cookies to enhance your browsing experience, analyse site traffic, and personalise content. 
                By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn more in our{' '}
                <Link href="/cookies" className="text-[#51AACD] hover:underline font-semibold">
                  Cookie Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:flex-shrink-0">
              <button
                onClick={handleReject}
                className="px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 border-2 hover:bg-gray-50"
                style={{borderColor: '#51AACD', color: '#51AACD'}}
              >
                Reject All
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-3 rounded-xl font-semibold text-sm sm:text-base text-white transition-all duration-200 hover:opacity-90 shadow-lg"
                style={{backgroundColor: '#51AACD'}}
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

