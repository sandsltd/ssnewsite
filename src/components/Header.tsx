import Link from 'next/link';
import Image from 'next/image';
import BookCallButton from './BookCallButton';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Company */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-4">
              <Image
                src="/logos/logo.png"
                alt="Saunders Simmons Ltd Logo"
                width={60}
                height={60}
                className="w-14 h-14 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Saunders Simmons Ltd
                </h1>
                <p className="text-xs text-gray-600">Web Design & Marketing</p>
              </div>
            </Link>
          </div>

          {/* Center - Google Rating (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full border border-yellow-200">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">5.0 Google Rating</span>
          </div>

          {/* Right Side - Navigation & Contact */}
          <div className="flex items-center space-x-6">
            {/* Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link
                href="https://portal.saunders-simmons.co.uk/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-blue-50"
              >
                Client Portal
              </Link>
            </nav>

            {/* Phone & Contact */}
            <div className="hidden sm:flex items-center space-x-4">
              <a href="tel:03300436608" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm font-medium">0330 043 6608</span>
              </a>
              <BookCallButton className="bg-orange-600 text-white hover:bg-orange-700 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg">
                Book a Call
              </BookCallButton>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
