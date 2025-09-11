import Link from 'next/link';
import BookCallButton from './BookCallButton';
import YouTubeFacade from './YouTubeFacade';

interface CustomerSuccessSectionProps {
  title?: string;
  subtitle?: string;
  showVideoTestimonials?: boolean;
  showMoreSuccessStories?: boolean;
  customClass?: string;
}

export default function CustomerSuccessSection({ 
  title = "Featured Customer Success Stories",
  subtitle = "See how we've helped businesses like yours grow online with professional websites and ongoing digital marketing support.",
  showVideoTestimonials = true,
  showMoreSuccessStories = true,
  customClass = ""
}: CustomerSuccessSectionProps) {
  return (
    <>
      {/* Featured Customers Section */}
      {showVideoTestimonials && (
        <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-white ${customClass}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Featured <span className="text-blue-600">Customer Success Stories</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            </div>

            <div className="space-y-16 max-w-7xl mx-auto">
              {/* Customer 1 - JJ Mobile Valeting - Video Left */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Video Section */}
                <div className="aspect-video lg:aspect-square bg-gray-900 relative overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/LUIwCdluBUc?start=12&rel=0"
                    title="JJ Mobile Valeting Customer Testimonial"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    style={{ minHeight: '200px' }}
                  ></iframe>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                    Customer Testimonial
                  </div>
                </div>
                  
                  {/* Customer Info */}
                  <div className="p-8">
                    {/* Featured Quote */}
                    <div className="bg-gray-900 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
                      <p className="text-blue-300 text-lg italic font-medium leading-relaxed">
                        "Absolute life savers with their support!"
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-4 mb-6">
                      <div className="bg-black rounded-lg p-2 flex items-center justify-center">
                        <img 
                          src="/logos/jj_logo_new_tr.png" 
                          alt="JJ Mobile Valeting Logo" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">JJ Mobile Valeting</h3>
                        <p className="text-gray-600">Car Valeting Service</p>
                        <p className="text-gray-500 text-sm">Client since 2023</p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500 mb-6">
                      <p className="text-gray-700 text-sm italic leading-relaxed">
                        "I want to thank Nick and Dan for all the hard work that they have done taking over my website. They completely redesigned it and made it much more user friendly and any ideas that I had they implemented better than I could have imagined. They also deal with all my SEO and if it wasn't for them I would not be as busy as I am - they have me at the top of my profession in Google searches for my chosen searches and ones that I would have never thought about and have been an absolute life saver with their support."
                      </p>
                    </div>
                    
                    {/* Results Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-blue-50 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">#1</div>
                        <div className="text-xs text-gray-600">Google Rankings</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600">200%</div>
                        <div className="text-xs text-gray-600">Business Growth</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">5.0 • James</span>
                      </div>
                      <Link 
                        href="https://jjmobilevaleting.co.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Visit Website →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer 2 - Tevy Services - Video Right */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Customer Info */}
                  <div className="p-8 order-2 lg:order-1">
                    {/* Featured Quote */}
                    <div className="bg-gray-900 p-4 rounded-lg mb-6 border-l-4 border-purple-500">
                      <p className="text-purple-300 text-lg italic font-medium leading-relaxed">
                        "Highly recommend their services!"
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-4 mb-6">
                      <div className="bg-black rounded-lg p-2 flex items-center justify-center">
                        <img 
                          src="/logos/Screenshot 2025-09-05 at 11.25.38-2.png" 
                          alt="Tevy Services Logo" 
                          className="w-12 h-8 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Tevy Services</h3>
                        <p className="text-gray-600">Alloy Wheel Refurbishment</p>
                        <p className="text-gray-500 text-sm">Client since 2024</p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-500 mb-6">
                      <p className="text-gray-700 text-sm italic leading-relaxed">
                        "Nick and Dan have been absolutely amazing in creating our website. They understood our vision perfectly and delivered a professional, modern site that truly represents our business."
                      </p>
                      <p className="text-gray-700 text-sm italic leading-relaxed mt-2">
                        "The whole process was smooth and stress-free. They were always available to answer questions and made changes quickly. The SEO work they've done has already started bringing in new enquiries."
                      </p>
                    </div>
                    
                    {/* Results Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-purple-50 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-purple-600">100%</div>
                        <div className="text-xs text-gray-600">Mobile Score</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600">+200%</div>
                        <div className="text-xs text-gray-600">Organic Traffic</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">5.0 • Alloy Wheel Refurbishment</span>
                      </div>
                      <Link 
                        href="https://www.tevyservices.co.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 text-sm font-medium">
                        Visit Website →
                      </Link>
                    </div>
                  </div>
                  
                  {/* Video Section */}
                  <div className="order-1 lg:order-2">
                    <YouTubeFacade
                      videoId="_caDlpmEQGA"
                      title="Tevy Services Customer Testimonial"
                      start={1}
                      aspectRatio="square"
                      className="lg:aspect-square"
                      badgeText="Customer Testimonial"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <BookCallButton className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
                Book a Call
              </BookCallButton>
            </div>
          </div>
        </section>
      )}

      {/* Cog Section Divider */}
      {showVideoTestimonials && showMoreSuccessStories && (
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
      )}

      {/* More Success Stories Section */}
      {showMoreSuccessStories && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                More <span className="text-blue-600">Success Stories</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join our growing family of satisfied clients across diverse industries
              </p>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Review 1 - Sheldon J. */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "These guys built my website so well and fast that I was shocked. Literally helped so much for business."
                </p>
                <div>
                  <p className="text-gray-900 font-semibold">Sheldon J.</p>
                  <p className="text-gray-600 text-sm">Barber Shop Owner</p>
                </div>
              </div>

              {/* Review 2 - Natalie L. */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "Absolutely fantastic service! Nick and Dan made the whole process stress-free and delivered exactly what we needed."
                </p>
                <div>
                  <p className="text-gray-900 font-semibold">Natalie L.</p>
                  <p className="text-gray-600 text-sm">Beauty Salon Owner</p>
                </div>
              </div>

              {/* Review 3 - Mark T. */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "Professional, reliable, and great value for money. Our website looks amazing and performs brilliantly."
                </p>
                <div>
                  <p className="text-gray-900 font-semibold">Mark T.</p>
                  <p className="text-gray-600 text-sm">Local Restaurant Owner</p>
                </div>
              </div>

              {/* Review 4 - Sarah M. */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-orange-500">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "The SEO work they've done has transformed our online presence. We're now ranking #1 for our key services."
                </p>
                <div>
                  <p className="text-gray-900 font-semibold">Sarah M.</p>
                  <p className="text-gray-600 text-sm">Fitness Studio Owner</p>
                </div>
              </div>

              {/* Review 5 - David K. */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "Excellent ongoing support. They're always available when we need updates or have technical issues."
                </p>
                <div>
                  <p className="text-gray-900 font-semibold">David K.</p>
                  <p className="text-gray-600 text-sm">Construction Company</p>
                </div>
              </div>

              {/* Review 6 - Emma W. */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-teal-500">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "From start to finish, the service was outstanding. Our new website has brought in so many new customers."
                </p>
                <div>
                  <p className="text-gray-900 font-semibold">Emma W.</p>
                  <p className="text-gray-600 text-sm">Retail Store Owner</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <BookCallButton className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
                Join Our Success Stories
              </BookCallButton>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
