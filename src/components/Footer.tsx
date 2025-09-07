import Link from 'next/link';
import BookCallButton from './BookCallButton';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Saunders Simmons Ltd
            </h3>
            <p className="text-gray-600 mb-4 max-w-md">
              Professional website design and marketing solutions to help your business grow and succeed online.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61560266678495" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
              >
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/saunderssimmonswebsolutions/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-600 transition-colors duration-200"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.017 2.27c2.747 0 3.066.01 4.148.06 1.012.046 1.563.218 1.928.36.485.188.831.414 1.192.775.361.361.587.707.775 1.192.142.365.314.916.36 1.928.05 1.082.06 1.401.06 4.148 0 2.747-.01 3.066-.06 4.148-.046 1.012-.218 1.563-.36 1.928-.188.485-.414.831-.775 1.192-.361.361-.707.587-1.192.775-.365.142-.916.314-1.928.36-1.082.05-1.401.06-4.148.06-2.747 0-3.066-.01-4.148-.06-1.012-.046-1.563-.218-1.928-.36-.485-.188-.831-.414-1.192-.775-.361-.361-.587-.707-.775-1.192-.142-.365-.314-.916-.36-1.928-.05-1.082-.06-1.401-.06-4.148 0-2.747.01-3.066.06-4.148.046-1.012.218-1.563.36-1.928.188-.485.414-.831.775-1.192.361-.361.707-.587 1.192-.775.365-.142.916-.314 1.928-.36 1.082-.05 1.401-.06 4.148-.06zM12.017 0C9.239 0 8.902.014 7.808.066 6.717.118 6.02.27 5.414.51 4.784.758 4.244 1.094 3.714 1.624 3.184 2.154 2.848 2.694 2.6 3.324 2.36 3.93 2.208 4.627 2.156 5.718 2.104 6.812 2.09 7.149 2.09 9.927c0 2.778.014 3.115.066 4.209.052 1.091.204 1.788.444 2.394.248.63.584 1.17 1.114 1.7.53.53 1.07.866 1.7 1.114.606.24 1.303.392 2.394.444 1.094.052 1.431.066 4.209.066 2.778 0 3.115-.014 4.209-.066 1.091-.052 1.788-.204 2.394-.444.63-.248 1.17-.584 1.7-1.114.53-.53.866-1.07 1.114-1.7.24-.606.392-1.303.444-2.394.052-1.094.066-1.431.066-4.209 0-2.778-.014-3.115-.066-4.209-.052-1.091-.204-1.788-.444-2.394-.248-.63-.584-1.17-1.114-1.7-.53-.53-1.07-.866-1.7-1.114-.606-.24-1.303-.392-2.394-.444C15.132.014 14.795 0 12.017 0zM12.017 5.838a6.089 6.089 0 100 12.178 6.089 6.089 0 000-12.178zM12.017 16a3.982 3.982 0 110-7.964 3.982 3.982 0 010 7.964zM18.278 4.155a1.424 1.424 0 11-2.848 0 1.424 1.424 0 012.848 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <BookCallButton className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Book a Call
                </BookCallButton>
              </li>
              <li>
                <Link href="tel:03300436608" className="text-gray-600 hover:text-green-600 transition-colors duration-200">
                  Call Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Google Business */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Find Us Online
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.google.co.uk/search?sca_esv=e618e5e4341fb9f4&kgmid=/g/11vzcf0_hc&q=Saunders+Simmons+Ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.965 1.404-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.688 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                  View on Google
                </a>
              </li>
              <li>
                <a 
                  href="https://g.page/r/CdluHcIbwlCMEBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Leave a Review
                </a>
              </li>
              <li className="text-sm text-gray-500 flex items-center gap-1">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                5.0 • 9 reviews
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2">
              <li className="text-gray-600">
                <span className="block">Email:</span>
                      <a href="mailto:hello@saunders-simmons.co.uk" className="text-blue-600 hover:text-blue-700">
                        hello@saunders-simmons.co.uk
                      </a>
              </li>
              <li className="text-gray-600">
                <span className="block">Phone:</span>
                <a href="tel:03300436608" className="text-blue-600 hover:text-blue-700">
                  0330 043 6608
                </a>
              </li>
              <li className="text-gray-600">
                <span className="block">Address:</span>
                <div className="text-sm">
                  15 Oxford Road<br />
                  Pen Mill Trading Estate<br />
                  Yeovil, Somerset<br />
                  BA21 5HR
                </div>
              </li>
              <li className="text-gray-600">
                <span className="block">Service Area:</span>
                <div className="text-sm">
                  Based in Yeovil covering<br />
                  Somerset, Dorset and<br />
                  surrounding counties
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Saunders Simmons Ltd. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/blog" className="text-gray-500 hover:text-blue-600 text-sm transition-colors duration-200">
                Blog
              </Link>
              <BookCallButton className="text-gray-500 hover:text-orange-600 text-sm transition-colors duration-200">
                Book a Call
              </BookCallButton>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
