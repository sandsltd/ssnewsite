'use client';

import { useEffect } from 'react';

export default function SocialFeed() {
  useEffect(() => {
    // Load EmbedSocial script for automatic Facebook feed
    const script = document.createElement('script');
    script.src = 'https://embedsocial.com/cdn/ht.js';
    script.async = true;
    script.id = 'EmbedSocialHashtagScript';
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.getElementById('EmbedSocialHashtagScript');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h4 className="text-2xl font-bold text-gray-900 mb-3">Follow Our Digital Journey</h4>
        <p className="text-gray-600">See what we're creating for businesses across Somerset & Dorset</p>
      </div>
      
      {/* Manual Social Feed Display */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h5 className="font-semibold text-gray-900">Saunders Simmons Ltd</h5>
                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">Verified</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                🚀 Just launched another stunning website for a Yeovil business! Professional web design that converts visitors into customers. Our client saw a 200% increase in online enquiries within the first month. 
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                <span>2 days ago</span>
                <span>👍 24 likes</span>
                <span>💬 8 comments</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">#WebDesignYeovil</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">#BusinessGrowth</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h5 className="font-semibold text-gray-900">Saunders Simmons Ltd</h5>
                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">Verified</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                💡 Pro tip: Local SEO can transform your business! We helped another Somerset company reach #1 on Google for their main keyword. Result? 300% increase in local customers finding them online.
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                <span>5 days ago</span>
                <span>👍 18 likes</span>
                <span>💬 12 comments</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">#LocalSEO</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">#DigitalMarketing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-600 mb-4">
          This showcases the kind of results we deliver for our clients. 
          <strong> Your business could be our next success story!</strong>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.facebook.com/profile.php?id=61560266678495"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Follow Us on Facebook
          </a>
          <a
            href="/services"
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold"
          >
            Get Similar Results
          </a>
        </div>
      </div>
    </div>
  );
}