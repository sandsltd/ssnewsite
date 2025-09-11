import BookCallButton from './BookCallButton';

interface PricingSectionProps {
  title?: string;
  subtitle?: string;
  showProcessOverview?: boolean;
  ctaText?: string;
  ctaSubtext?: string;
}

export default function PricingSection({ 
  title = "Affordable Web Design Packages",
  subtitle = "We start by building your professional website, then you choose the support level that's right for your business",
  showProcessOverview = true,
  ctaText = "Ready to Get Started?",
  ctaSubtext = "Get your professional website built for just £249 with our affordable web design packages, then choose between our Basic Hosting or Continuous Growth support options."
}: PricingSectionProps) {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        {showProcessOverview && (
          <div className="max-w-6xl mx-auto mb-16">
            {/* Elegant Process Overview */}
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-8">How It Works</h3>
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden md:block">
              <div className="flex items-start justify-center space-x-16 lg:space-x-24">
                {/* Step 1 - Website Build */}
                <div className="flex flex-col items-center max-w-sm">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-6 shadow-xl">
                    1
                  </div>
                  <h4 className="text-xl font-bold text-blue-600 mb-3">Website Build</h4>
                  <p className="text-sm text-gray-600 text-center leading-relaxed max-w-xs">
                    Professional website designed and built to your exact requirements with modern design and functionality
                  </p>
                  
                  {/* Arrow pointing right */}
                  <div className="flex justify-center mt-8">
                    <svg className="w-16 h-16 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                
                {/* Step 2 - Support Choice */}
                <div className="flex flex-col items-center">
                  <div className="text-center mb-8">
                    <h4 className="text-xl font-bold text-gray-700 mb-3">Choose Your Support Level</h4>
                    <p className="text-sm text-gray-500 max-w-md">
                      Select the ongoing support package that best fits your business needs
                    </p>
                  </div>
                  
                  <div className="flex flex-col space-y-6">
                    {/* Option A */}
                    <div className="flex items-center p-6 border-2 border-purple-200 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors duration-200 shadow-md hover:shadow-lg max-w-md">
                      <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                        2A
                      </div>
                      <div className="text-left">
                        <h5 className="text-lg font-bold text-purple-600 mb-2">Basic Hosting</h5>
                        <p className="text-sm text-gray-600">
                          Essential hosting, security updates, and basic maintenance for your website
                        </p>
                      </div>
                    </div>
                    
                    {/* OR divider */}
                    <div className="text-center py-2">
                      <span className="bg-gray-100 px-4 py-2 rounded-full text-gray-500 font-semibold text-sm">OR</span>
                    </div>
                    
                    {/* Option B */}
                    <div className="flex items-center p-6 border-2 border-green-200 rounded-xl bg-green-50 hover:bg-green-100 transition-colors duration-200 shadow-md hover:shadow-lg max-w-md">
                      <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                        2B
                      </div>
                      <div className="text-left">
                        <h5 className="text-lg font-bold text-green-600 mb-2">Continuous Growth</h5>
                        <p className="text-sm text-gray-600">
                          Full marketing support, SEO optimization, and ongoing business growth strategies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Layout */}
            <div className="md:hidden space-y-8">
              {/* Step 1 Mobile */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-lg">
                  1
                </div>
                <h4 className="text-lg font-bold text-blue-600 mb-2">Website Build</h4>
                <p className="text-sm text-gray-600 max-w-sm mx-auto">
                  Professional website designed and built to your requirements
                </p>
              </div>
              
              {/* Arrow Down Mobile */}
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              
              {/* Choice Mobile */}
              <div className="text-center">
                <h4 className="text-lg font-bold text-gray-700 mb-6">Choose Your Support Level</h4>
                
                <div className="space-y-4 max-w-sm mx-auto">
                  {/* Option A Mobile */}
                  <div className="p-4 border-2 border-purple-200 rounded-lg bg-purple-50">
                    <div className="flex items-center justify-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        2A
                      </div>
                      <h5 className="text-md font-bold text-purple-600">Basic Hosting</h5>
                    </div>
                    <p className="text-xs text-gray-600 text-center">
                      Essential hosting and maintenance
                    </p>
                  </div>
                  
                  {/* OR Mobile */}
                  <div className="text-center">
                    <span className="text-gray-400 font-bold text-sm">OR</span>
                  </div>
                  
                  {/* Option B Mobile */}
                  <div className="p-4 border-2 border-green-200 rounded-lg bg-green-50">
                    <div className="flex items-center justify-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        2B
                      </div>
                      <h5 className="text-md font-bold text-green-600">Continuous Growth</h5>
                    </div>
                    <p className="text-xs text-gray-600 text-center">
                      Full marketing and growth support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Step 1: Website Build */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">1</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Website Build</h3>
              <p className="text-gray-600 mb-4">Everything you need for a stunning online presence at an affordable price</p>
              <div className="flex items-baseline justify-center mb-6">
                <span className="text-sm text-gray-500 mr-2">One-time cost</span>
                <span className="text-4xl font-bold text-blue-600">£249</span>
                <span className="text-lg text-blue-600 ml-1">+ VAT</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>5 professionally designed pages</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Mobile-responsive design (98% performance)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>SEO optimisation for Google rankings</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Contact forms & lead capture</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Google Maps integration</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Social media integration</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>SSL security certificate</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">2 weeks turnaround time</span>
              </li>
            </ul>
          </div>

          {/* Step 2A: Basic Hosting */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-xs font-semibold">Best Value</span>
            </div>
            
            <div className="text-center mb-6 mt-4">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">2A</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Hosting</h3>
              <p className="text-gray-600 mb-4">Essential hosting and maintenance</p>
              <div className="flex items-baseline justify-center mb-6">
                <span className="text-sm text-gray-500 mr-2">Monthly</span>
                <span className="text-4xl font-bold text-purple-600">£25</span>
                <span className="text-lg text-purple-600 ml-1">/month + VAT</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Reliable web hosting</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>SSL certificate maintenance</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Basic security monitoring</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Technical updates</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>99.9% uptime guarantee</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Email support</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Cancel anytime (no lock-in)</span>
              </li>
            </ul>
          </div>

          {/* Step 2B: Continuous Growth & Support */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-green-300 hover:border-green-400 transition-all duration-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-green-600 text-white px-4 py-2 rounded-full text-xs font-semibold">Best for Growth</span>
            </div>
            
            <div className="text-center mb-6 mt-4">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">2B</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Continuous Growth</h3>
              <p className="text-gray-600 mb-4">Complete support and marketing</p>
              <div className="flex items-baseline justify-center mb-6">
                <span className="text-sm text-gray-500 mr-2">Monthly</span>
                <span className="text-4xl font-bold text-green-600">£250</span>
                <span className="text-lg text-green-600 ml-1">/month + VAT</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Everything in Basic Hosting</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Monthly SEO optimisation & reporting</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Unlimited content updates</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Performance optimisation</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Google Analytics reporting</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Priority IT support</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Cancel anytime (no lock-in)</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Single CTA for the complete service */}
        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-orange-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {ctaText}
            </h3>
            <p className="text-gray-600 mb-6">
              {ctaSubtext}
            </p>
            <div className="flex justify-center">
              <BookCallButton className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
                Book a Call
              </BookCallButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
