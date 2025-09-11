import BookCallButton from './BookCallButton';

interface AboutUsSectionProps {
  title?: string;
  subtitle?: string;
  showVideo?: boolean;
  showCredentials?: boolean;
  customClass?: string;
}

export default function AboutUsSection({ 
  title = "About Saunders Simmons Ltd",
  subtitle = "The founders of Saunders Simmons Ltd, dedicated to helping businesses succeed online through professional websites and digital marketing.",
  showVideo = false,
  showCredentials = true,
  customClass = ""
}: AboutUsSectionProps) {
  return (
    <>
      {/* About Us Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-white ${customClass}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {showVideo ? (
                <>Meet <span className="text-blue-600">Nick & Dan</span></>
              ) : (
                title
              )}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video Section - Only show if showVideo is true */}
            {showVideo && (
              <div className="order-2 lg:order-1">
                <div className="aspect-video bg-gray-900 relative overflow-hidden rounded-2xl shadow-xl">
                  <iframe
                    src="https://www.youtube.com/embed/TZvty_HAWCY?rel=0"
                    title="Meet Nick & Dan - Saunders Simmons Ltd"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                    Meet Nick & Dan
                  </div>
                </div>
              </div>
            )}

            {/* Content Section */}
            <div className={showVideo ? "order-1 lg:order-2" : "mx-auto max-w-4xl"}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {showVideo ? "Nick Saunders & Dan Simmons" : "Your Local WordPress Experts in Yeovil"}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {showVideo ? (
                      "Together, Nick and Dan bring years of experience in web development and digital marketing. Their passion for helping local businesses thrive online has made Saunders Simmons Ltd a trusted partner for companies across the South West."
                    ) : (
                      "Based in Yeovil, Somerset, Saunders Simmons Ltd has been helping local businesses succeed online since 2020. We specialise in both WordPress support and custom website development, giving us a unique perspective on what works best for different businesses."
                    )}
                  </p>
                </div>

                {showVideo && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                      <h4 className="font-semibold text-gray-900 mb-2">Nick Saunders</h4>
                      <p className="text-gray-600 text-sm">
                        Lead Developer & Co-Founder. Specialises in creating fast, modern websites that convert visitors into customers.
                      </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                      <h4 className="font-semibold text-gray-900 mb-2">Dan Simmons</h4>
                      <p className="text-gray-600 text-sm">
                        Marketing Director & Co-Founder. Expert in SEO, digital marketing, and helping businesses grow their online presence.
                      </p>
                    </div>
                  </div>
                )}

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">Our Mission</h4>
                  <p className="text-gray-700 leading-relaxed">
                    We believe every business deserves a professional online presence and a trusted digital partner. 
                    That's why we focus on building long-term business relationships through comprehensive web development 
                    and ongoing support packages designed to help your business grow and succeed in the digital world.
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 mb-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-900 font-semibold">5.0 Google Rating</span>
                  </div>
                  <div className="text-gray-500">•</div>
                  <div className="text-gray-600">100+ Happy Clients</div>
                  <div className="text-gray-500">•</div>
                  <div className="text-gray-600">Est. 2020</div>
                </div>
                
                <div className="text-center">
                  <BookCallButton className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
                    Book a Call
                  </BookCallButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cog Section Divider */}
      <div className="py-8 bg-white flex justify-center items-center">
        <div className="flex items-center gap-6">
          <svg className="w-8 h-8 text-blue-500 animate-spin-slow" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l1.86-1.41c.2-.15.25-.42.13-.64l-1.86-3.23c-.12-.22-.39-.3-.61-.22l-2.14.91c-.47-.4-1-.72-1.58-.94l-.3-2.4c-.05-.24-.25-.42-.5-.42h-3.73c-.24 0-.45.18-.5.42l-.3 2.4c-.58.22-1.11.54-1.58.94l-2.14-.91c-.22-.08-.49 0-.61.22L2.74 8.87c-.12.22-.07.49.13.64L4.73 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-1.86 1.41c-.2.15-.25.42-.13.64l1.86 3.23c.12.22.39.3.61.22l2.14-.91c.47.4 1 .72 1.58.94l.3 2.4c.05.24.25.42.5.42h3.73c.24 0 .45-.18.5-.42l.3-2.4c.58-.22 1.11-.54 1.58-.94l2.14.91c.22.08.49 0 .61-.22l1.86-3.23c.12-.22.07-.49-.13-.64l-1.86-1.41z"/>
          </svg>
          <div className="h-px bg-gray-300 w-24"></div>
          <svg className="w-6 h-6 text-green-500 animate-spin-reverse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l1.86-1.41c.2-.15.25-.42.13-.64l-1.86-3.23c-.12-.22-.39-.3-.61-.22l-2.14.91c-.47-.4-1-.72-1.58-.94l-.3-2.4c-.05-.24-.25-.42-.5-.42h-3.73c-.24 0-.45.18-.5.42l-.3 2.4c-.58.22-1.11.54-1.58.94l-2.14-.91c-.22-.08-.49 0-.61.22L2.74 8.87c-.12.22-.07.49.13.64L4.73 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-1.86 1.41c-.2.15-.25.42-.13.64l1.86 3.23c.12.22.39.3.61.22l2.14-.91c.47.4 1 .72 1.58.94l.3 2.4c.05.24.25.42.5.42h3.73c.24 0 .45-.18.5-.42l.3-2.4c.58-.22 1.11-.54 1.58-.94l2.14.91c.22.08.49 0 .61-.22l1.86-3.23c.12-.22.07-.49-.13-.64l-1.86-1.41z"/>
          </svg>
          <div className="h-px bg-gray-300 w-24"></div>
          <svg className="w-8 h-8 text-orange-500 animate-spin-slow" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l1.86-1.41c.2-.15.25-.42.13-.64l-1.86-3.23c-.12-.22-.39-.3-.61-.22l-2.14.91c-.47-.4-1-.72-1.58-.94l-.3-2.4c-.05-.24-.25-.42-.5-.42h-3.73c-.24 0-.45.18-.5.42l-.3 2.4c-.58.22-1.11.54-1.58.94l-2.14-.91c-.22-.08-.49 0-.61.22L2.74 8.87c-.12.22-.07.49.13.64L4.73 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-1.86 1.41c-.2.15-.25.42-.13.64l1.86 3.23c.12.22.39.3.61.22l2.14-.91c.47.4 1 .72 1.58.94l.3 2.4c.05.24.25.42.5.42h3.73c.24 0 .45-.18.5-.42l.3-2.4c.58-.22 1.11-.54 1.58-.94l2.14.91c.22.08.49 0 .61-.22l1.86-3.23c.12-.22.07-.49-.13-.64l-1.86-1.41z"/>
          </svg>
        </div>
      </div>

      {/* Professional Credentials */}
      {showCredentials && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Professional & Trusted Business
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-8 mb-6">
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Registered Company</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.586-2H6a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-4.586a1 1 0 00-.293-.707l-2-2a1 1 0 00-.707-.293z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">VAT Registered</span>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Companies House Number: 15839557 • Established 2020 • Based in Yeovil, Somerset
            </p>
          </div>
        </section>
      )}
    </>
  );
}
