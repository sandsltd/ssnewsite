import Link from 'next/link';
import BookCallButton from './BookCallButton';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 text-white" style={{background: 'linear-gradient(135deg, #374151 0%, #4b5563 50%, #374151 100%)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Saunders Simmons Ltd
              </h3>
              <p className="mb-6 max-w-md leading-relaxed" style={{color: '#C4E3EA'}}>
                Professional digital solutions for UK businesses. We specialise in web design, SEO marketing, 
                and custom software development to help your business thrive online.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-medium" style={{color: '#C4E3EA'}}>5.0 Google Rating</span>
                </div>
                
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">100's</div>
                      <div className="text-xs" style={{color: '#C4E3EA'}}>Happy Clients</div>
                    </div>
                
                <div className="text-center">
                  <div className="text-lg font-bold text-white">4+</div>
                  <div className="text-xs" style={{color: '#C4E3EA'}}>Years Experience</div>
                </div>
              </div>
              
              {/* Professional Credentials */}
              <div className="flex flex-wrap items-center gap-4 text-sm" style={{color: '#C4E3EA'}}>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Companies House Registered</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>VAT Registered</span>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61560266678495" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 hover:opacity-80"
                  style={{backgroundColor: '#51AACD'}}
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/saunderssimmonswebsolutions/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 hover:opacity-80"
                  style={{backgroundColor: '#51AACD'}}
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.017 2.27c2.747 0 3.066.01 4.148.06 1.012.046 1.563.218 1.928.36.485.188.831.414 1.192.775.361.361.587.707.775 1.192.142.365.314.916.36 1.928.05 1.082.06 1.401.06 4.148 0 2.747-.01 3.066-.06 4.148-.046 1.012-.218 1.563-.36 1.928-.188.485-.414.831-.775 1.192-.361.361-.707.587-1.192.775-.365.142-.916.314-1.928.36-1.082.05-1.401.06-4.148.06-2.747 0-3.066-.01-4.148-.06-1.012-.046-1.563-.218-1.928-.36-.485-.188-.831-.414-1.192-.775-.361-.361-.587-.707-.775-1.192-.142-.365-.314-.916-.36-1.928-.05-1.082-.06-1.401-.06-4.148 0-2.747.01-3.066.06-4.148.046-1.012.218-1.563.36-1.928.188-.485.414-.831.775-1.192.361-.361.707-.587 1.192-.775.365-.142.916-.314 1.928-.36 1.082-.05 1.401-.06 4.148-.06zM12.017 0C9.239 0 8.902.014 7.808.066 6.717.118 6.02.27 5.414.51 4.784.758 4.244 1.094 3.714 1.624 3.184 2.154 2.848 2.694 2.6 3.324 2.36 3.93 2.208 4.627 2.156 5.718 2.104 6.812 2.09 7.149 2.09 9.927c0 2.778.014 3.115.066 4.209.052 1.091.204 1.788.444 2.394.248.63.584 1.17 1.114 1.7.53.53 1.07.866 1.7 1.114.606.24 1.303.392 2.394.444 1.094.052 1.431.066 4.209.066 2.778 0 3.115-.014 4.209-.066 1.091-.052 1.788-.204 2.394-.444.63-.248 1.17-.584 1.7-1.114.53-.53.866-1.07 1.114-1.7.24-.606.392-1.303.444-2.394.052-1.094.066-1.431.066-4.209 0-2.778-.014-3.115-.066-4.209-.052-1.091-.204-1.788-.444-2.394-.248-.63-.584-1.17-1.114-1.7-.53-.53-1.07-.866-1.7-1.114-.606-.24-1.303-.392-2.394-.444C15.132.014 14.795 0 12.017 0zM12.017 5.838a6.089 6.089 0 100 12.178 6.089 6.089 0 000-12.178zM12.017 16a3.982 3.982 0 110-7.964 3.982 3.982 0 010 7.964zM18.278 4.155a1.424 1.424 0 11-2.848 0 1.424 1.424 0 012.848 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/web-design" className="hover:text-white transition-colors duration-200 flex items-center" style={{color: '#C4E3EA'}}>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="hover:text-white transition-colors duration-200 flex items-center" style={{color: '#C4E3EA'}}>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  SEO Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/software" className="hover:text-white transition-colors duration-200 flex items-center" style={{color: '#C4E3EA'}}>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors duration-200 flex items-center" style={{color: '#C4E3EA'}}>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-200" style={{color: '#C4E3EA'}}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors duration-200" style={{color: '#C4E3EA'}}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors duration-200" style={{color: '#C4E3EA'}}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-200" style={{color: '#C4E3EA'}}>
                  Contact
                </Link>
              </li>
              <li>
                <BookCallButton className="hover:text-white transition-colors duration-200" style={{color: '#C4E3EA'}}>
                  Book a Call
                </BookCallButton>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{backgroundColor: '#51AACD'}}>
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm" style={{color: '#C4E3EA'}}>Email</p>
                  <a href="mailto:hello@saunders-simmons.co.uk" className="hover:text-white transition-colors duration-200" style={{color: '#C4E3EA'}}>
                    hello@saunders-simmons.co.uk
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{backgroundColor: '#51AACD'}}>
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm" style={{color: '#C4E3EA'}}>Phone</p>
                  <a href="tel:03300436608" className="hover:text-white transition-colors duration-200" style={{color: '#C4E3EA'}}>
                    0330 043 6608
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{backgroundColor: '#51AACD'}}>
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm" style={{color: '#C4E3EA'}}>Address</p>
                  <div className="text-white text-sm">
                    15 Oxford Road<br />
                    Pen Mill Trading Estate<br />
                    Yeovil, Somerset BA21 5HR
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{backgroundColor: '#51AACD'}}>
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm" style={{color: '#C4E3EA'}}>Service Area</p>
                  <div className="text-white text-sm">
                    Based in Yeovil covering<br />
                    the whole UK
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t" style={{borderColor: '#51AACD'}}>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left">
              <p className="text-sm mb-2" style={{color: '#C4E3EA'}}>
                © {new Date().getFullYear()} Saunders Simmons Ltd. All rights reserved.
              </p>
              <p className="text-xs" style={{color: '#51AACD'}}>
                Company No: 15839557 • VAT No: 15839557 • Established 2020
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="hover:text-white text-sm transition-colors duration-200" style={{color: '#C4E3EA'}}>
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white text-sm transition-colors duration-200" style={{color: '#C4E3EA'}}>
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-white text-sm transition-colors duration-200" style={{color: '#C4E3EA'}}>
                  Cookie Policy
                </Link>
              </div>
              
              <div className="flex items-center gap-4">
                <BookCallButton className="text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:opacity-80" style={{backgroundColor: '#51AACD'}}>
                  Book a Call
                </BookCallButton>
                <Link 
                  href="tel:03300436608" 
                  className="bg-transparent border px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-10 transition-colors duration-200"
                  style={{borderColor: '#51AACD', color: '#51AACD'}}
                >
                  Call Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
