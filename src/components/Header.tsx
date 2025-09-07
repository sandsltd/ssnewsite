'use client';

import Link from 'next/link';
import Image from 'next/image';
import BookCallButton from './BookCallButton';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Top Bar - Contact Info & Social Proof - Hidden on Mobile */}
      <div className="hidden sm:block bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            {/* Left - Contact Info */}
            <div className="flex items-center space-x-6">
              <a href="tel:03300436608" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-medium">0330 043 6608</span>
              </a>
              <a href="mailto:hello@saunders-simmons.co.uk" className="hidden sm:flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>hello@saunders-simmons.co.uk</span>
              </a>
            </div>
            
            {/* Right - Social Proof & Location */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600">5.0 • 9 reviews</span>
              </div>
              <span className="hidden md:block text-gray-500">|</span>
              <span className="hidden md:block text-gray-600">Based in Yeovil, Somerset</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo & Company */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
                <Image
                  src="/logos/logo.png"
                  alt="Saunders Simmons Ltd Logo"
                  width={50}
                  height={50}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
                <div className="min-w-0">
                  <h1 className="text-sm sm:text-lg font-bold text-gray-900 truncate">
                    Saunders Simmons Ltd
                  </h1>
                  <p className="hidden sm:block text-xs text-gray-500">Web Design & Marketing</p>
                </div>
              </Link>
            </div>

               {/* Center Navigation */}
               <nav className="hidden md:flex items-center space-x-8">
                 <Link
                   href="/"
                   className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                 >
                   Home
                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                 </Link>
                 <Link
                   href="/services"
                   className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                 >
                   Services
                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                 </Link>
                 <Link
                   href="/blog"
                   className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                 >
                   Blog
                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                 </Link>
                 <Link
                   href="/faq"
                   className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                 >
                   FAQ
                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                 </Link>
                 <Link
                   href="https://portal.saunders-simmons.co.uk/login"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                 >
                   Client Portal
                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                 </Link>
               </nav>

            {/* Right Side - CTA */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <BookCallButton className="bg-orange-600 text-white hover:bg-orange-700 px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base">
                <span className="hidden sm:inline">Book a Call</span>
                <span className="sm:hidden">Call</span>
              </BookCallButton>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-4 py-4 space-y-4">
               {/* Mobile Navigation Links */}
               <div className="space-y-3">
                 <Link
                   href="/"
                   className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
                   onClick={() => setIsMenuOpen(false)}
                 >
                   Home
                 </Link>
                 <Link
                   href="/services"
                   className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
                   onClick={() => setIsMenuOpen(false)}
                 >
                   Services
                 </Link>
                 <Link
                   href="/blog"
                   className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
                   onClick={() => setIsMenuOpen(false)}
                 >
                   Blog
                 </Link>
                 <Link
                   href="/faq"
                   className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
                   onClick={() => setIsMenuOpen(false)}
                 >
                   FAQ
                 </Link>
                 <Link
                   href="https://portal.saunders-simmons.co.uk/login"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
                   onClick={() => setIsMenuOpen(false)}
                 >
                   Client Portal
                 </Link>
               </div>

            {/* Mobile Phone & CTA */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <a 
                href="tel:03300436608" 
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-medium">0330 043 6608</span>
              </a>
              
              <div className="px-3">
                <BookCallButton 
                  className="w-full bg-orange-600 text-white hover:bg-orange-700 px-6 py-3 rounded-lg text-base font-semibold transition-all duration-200 shadow-md hover:shadow-lg text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book a Call
                </BookCallButton>
              </div>
            </div>

            {/* Mobile Google Rating */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2 bg-yellow-50 px-4 py-3 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700">5.0 Google Rating</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
