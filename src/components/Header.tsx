'use client';

import Link from 'next/link';
import Image from 'next/image';
import BookCallButton from './BookCallButton';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-premium-lg">
      {/* Mobile Top Bar - Trust Indicators */}
      <div className="sm:hidden border-b header-top-bar">
        <div className="px-4 py-3">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-800 text-sm font-bold tracking-tight">5.0</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-sm font-bold text-gray-900">100's</div>
              <div className="text-xs text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-sm font-bold text-gray-900">4+</div>
              <div className="text-xs text-gray-600 font-medium">Years</div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Top Bar - Professional Trust Indicators */}
      <div className="hidden sm:block border-b header-top-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3.5">
            {/* Left - Contact Info */}
            <div className="flex items-center space-x-8">
              <a href="tel:03300436608" className="flex items-center space-x-2.5 text-gray-800 header-link-hover transition-colors duration-300 group">
                <div className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 header-icon-bg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-bold text-sm tracking-tight">0330 043 6608</span>
              </a>
              <a href="mailto:hello@saunders-simmons.co.uk" className="hidden lg:flex items-center space-x-2.5 text-gray-800 header-link-hover transition-colors duration-300 group">
                <div className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 header-icon-bg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-medium text-sm">hello@saunders-simmons.co.uk</span>
              </a>
            </div>
            
            {/* Right - Trust Indicators */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-800 font-bold text-sm tracking-tight">5.0</span>
                <span className="text-gray-600 font-medium text-xs">Google</span>
              </div>
              
              <div className="hidden lg:block w-px h-5 bg-gray-300"></div>
              
              <div className="hidden lg:flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-base font-bold text-gray-900 tracking-tight">100's</div>
                  <div className="text-xs text-gray-600 font-medium">Happy Clients</div>
                </div>
                
                <div className="text-center">
                  <div className="text-base font-bold text-gray-900 tracking-tight">4+</div>
                  <div className="text-xs text-gray-600 font-medium">Years Experience</div>
                </div>
              </div>
              
              <div className="hidden xl:block w-px h-5 bg-gray-300"></div>
              <span className="hidden xl:block text-gray-600 font-medium text-sm">Based in Yeovil, Somerset</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation Bar */}
      <div className="bg-white border-b header-nav-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo & Company */}
            <div className="flex-shrink-0 lg:flex-shrink">
              <Link href="/" className="flex items-center space-x-3 sm:space-x-4 group">
                <div className="relative">
                  <Image
                    src="/logos/logo.png"
                    alt="Saunders Simmons Ltd Logo"
                    width={56}
                    height={56}
                    className="relative w-12 h-12 sm:w-14 sm:h-14 object-contain transition-transform duration-300 group-hover:scale-105"
                    fetchPriority="high"
                    sizes="(max-width: 640px) 48px, 56px"
                    quality={90}
                  />
                </div>
                <div className="min-w-0 hidden sm:block">
                  <h1 className="text-base sm:text-xl font-bold text-gray-900 truncate tracking-tight leading-tight">
                    Saunders Simmons Ltd
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium mt-0.5">Web Design, SEO & Software</p>
                </div>
              </Link>
            </div>

            {/* Center Navigation */}
            <nav className="hidden lg:flex items-center space-x-12 flex-1 justify-center max-w-4xl mx-auto">
              <div className="relative group">
                <Link
                  href="/about"
                  className="text-gray-800 font-semibold text-base tracking-tight transition-all duration-300 relative py-2 px-1 header-link-hover flex items-center gap-1.5"
                >
                  About
                  <svg className="w-3.5 h-3.5 text-gray-400 header-dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full header-underline"></span>
                </Link>
                {/* About Dropdown */}
                <div className="absolute top-full left-0 mt-3 w-64 rounded-2xl shadow-premium-xl border border-gray-100 opacity-0 invisible z-50 header-dropdown">
                  <div className="py-2">
                    <Link
                      href="/"
                      className="block px-6 py-4 text-gray-800 transition-all duration-300 rounded-lg mx-2 header-dropdown-hover group/item"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-sm mb-0.5">Home</div>
                          <div className="text-xs text-gray-500 font-medium">Back to homepage</div>
                        </div>
                        <svg className="w-4 h-4 text-gray-300 group-hover/item:text-[#51AACD] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                    <Link
                      href="/portfolio"
                      className="block px-6 py-4 text-gray-800 transition-all duration-300 rounded-lg mx-2 header-dropdown-hover group/item"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-sm mb-0.5">Portfolio</div>
                          <div className="text-xs text-gray-500 font-medium">View our work</div>
                        </div>
                        <svg className="w-4 h-4 text-gray-300 group-hover/item:text-[#51AACD] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                    <Link
                      href="/faq"
                      className="block px-6 py-4 text-gray-800 transition-all duration-300 rounded-lg mx-2 header-dropdown-hover group/item"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-sm mb-0.5">FAQ</div>
                          <div className="text-xs text-gray-500 font-medium">Frequently asked questions</div>
                        </div>
                        <svg className="w-4 h-4 text-gray-300 group-hover/item:text-[#51AACD] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <Link
                  href="/services"
                  className="text-gray-800 font-semibold text-base tracking-tight transition-all duration-300 relative py-2 px-1 header-link-hover flex items-center gap-1.5"
                >
                  Services
                  <svg className="w-3.5 h-3.5 text-gray-400 header-dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full header-underline"></span>
                </Link>
                {/* Services Dropdown */}
                <div className="absolute top-full left-0 mt-3 w-72 rounded-2xl shadow-premium-xl border border-gray-100 opacity-0 invisible z-50 header-dropdown">
                  <div className="py-2">
                    <Link
                      href="/services/web-design"
                      className="block px-6 py-4 text-gray-800 transition-all duration-300 rounded-lg mx-2 header-dropdown-hover group/item"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-sm mb-0.5">Web Design</div>
                          <div className="text-xs text-gray-500 font-medium">Professional websites that convert</div>
                        </div>
                        <svg className="w-4 h-4 text-gray-300 group-hover/item:text-[#51AACD] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                    <Link
                      href="/services/seo"
                      className="block px-6 py-4 text-gray-800 transition-all duration-300 rounded-lg mx-2 header-dropdown-hover group/item"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-sm mb-0.5">SEO Marketing</div>
                          <div className="text-xs text-gray-500 font-medium">Get found on Google</div>
                        </div>
                        <svg className="w-4 h-4 text-gray-300 group-hover/item:text-[#51AACD] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                    <Link
                      href="/services/software"
                      className="block px-6 py-4 text-gray-800 transition-all duration-300 rounded-lg mx-2 header-dropdown-hover group/item"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-sm mb-0.5">Software Development</div>
                          <div className="text-xs text-gray-500 font-medium">Custom software solutions</div>
                        </div>
                        <svg className="w-4 h-4 text-gray-300 group-hover/item:text-[#51AACD] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link
                href="https://portal.saunders-simmons.co.uk/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 font-semibold text-base tracking-tight transition-all duration-300 relative py-2 px-1 hover:text-[#51AACD] group flex items-center gap-2"
              >
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-105" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Client Portal
                <span className="absolute bottom-0 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full header-underline"></span>
              </Link>
            </nav>

            {/* Tablet Navigation - Show hamburger menu on md screens */}
            <nav className="hidden md:flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 header-link-hover focus:outline-none p-2 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </nav>

            {/* Right Side - CTA */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              {/* Desktop CTA */}
              <div className="hidden lg:block">
                <BookCallButton className="text-white px-8 py-4 rounded-xl font-bold text-base tracking-tight btn-premium-cta flex items-center gap-2.5 group">
                  <svg className="w-5 h-5 btn-premium-cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Book a Call</span>
                  <svg className="w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </BookCallButton>
              </div>

              {/* Tablet CTA */}
              <div className="hidden md:block lg:hidden">
                <BookCallButton className="text-white px-6 py-3 rounded-xl font-bold text-sm tracking-tight btn-premium-cta flex items-center gap-2 group">
                  <svg className="w-4 h-4 btn-premium-cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Book a Call</span>
                </BookCallButton>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 header-link-hover focus:outline-none p-2 transition-colors duration-200"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-premium-lg">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-3">
              <div className="space-y-2">
                <div className="text-gray-700 px-3 py-2 text-base font-medium">About</div>
                <Link
                  href="/"
                  className="block text-gray-600 header-link-hover px-6 py-2 rounded-md text-sm transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/portfolio"
                  className="block text-gray-600 header-link-hover px-6 py-2 rounded-md text-sm transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  href="/faq"
                  className="block text-gray-600 header-link-hover px-6 py-2 rounded-md text-sm transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
              </div>
              <div className="space-y-2">
                <div className="text-gray-700 px-3 py-2 text-base font-medium">Services</div>
                <Link
                  href="/services/web-design"
                  className="block text-gray-600 header-link-hover px-6 py-2 rounded-md text-sm transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Web Design
                </Link>
                <Link
                  href="/services/seo"
                  className="block text-gray-600 header-link-hover px-6 py-2 rounded-md text-sm transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SEO Marketing
                </Link>
                <Link
                  href="/services/software"
                  className="block text-gray-600 header-link-hover px-6 py-2 rounded-md text-sm transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Software Development
                </Link>
              </div>
              <Link
                href="https://portal.saunders-simmons.co.uk/login"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-700 header-link-hover px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Client Portal
              </Link>
            </div>

            {/* Mobile Phone & CTA */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <div className="px-3">
                <BookCallButton
                  className="w-full text-white px-6 py-3 rounded-xl text-base font-semibold btn-premium-cta flex items-center justify-center gap-2.5 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-5 h-5 btn-premium-cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Book a Call</span>
                  <svg className="w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </BookCallButton>
              </div>

              <a
                href="tel:03300436608"
                className="flex items-center space-x-2 text-gray-600 header-link-hover transition-colors duration-200 px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-medium">Call: 0330 043 6608</span>
              </a>
            </div>

            {/* Mobile Trust Indicators */}
            <div className="pt-4 border-t border-gray-200">
              <div className="px-4 py-4 rounded-lg border header-top-bar">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">5.0 Google Rating</span>
                  </div>
                  
                  <div className="w-px h-4 bg-gray-300"></div>
                  
                  <div className="text-center">
                    <div className="text-sm font-bold text-gray-900">100's</div>
                    <div className="text-xs text-gray-600">Happy Clients</div>
                  </div>
                  
                  <div className="w-px h-4 bg-gray-300"></div>
                  
                  <div className="text-center">
                    <div className="text-sm font-bold text-gray-900">4+</div>
                    <div className="text-xs text-gray-600">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
