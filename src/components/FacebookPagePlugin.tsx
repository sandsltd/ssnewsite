'use client';

import { useEffect } from 'react';

// Facebook SDK type declaration
declare global {
  interface Window {
    FB: {
      XFBML: {
        parse: () => void;
      };
    };
  }
}

export default function FacebookPagePlugin() {
  useEffect(() => {
    // Load the Facebook SDK if it hasn't been loaded already
    if (!window.FB) {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v23.0';
      document.body.appendChild(script);
    } else {
      // If FB is already loaded, reparse to render plugins
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="text-center">
      {/* Social Media Call-to-Action */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 mb-8">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Follow Us on Facebook
          </h3>

          <p className="text-gray-600 mb-6">
            Stay updated with our latest news, insights, and digital marketing tips. 
            Get exclusive content and behind-the-scenes updates.
          </p>

          <div className="space-y-3">
            <a
              href="https://www.facebook.com/profile.php?id=61560266678495"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Follow on Facebook
            </a>

            <div className="text-sm text-gray-500">
              <p>💡 <strong>Pro tip:</strong> Turn on notifications to never miss our updates!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Facebook Timeline Embed */}
      <div
        className="fb-page mx-auto"
        data-href="https://www.facebook.com/profile.php?id=61560266678495"
        data-tabs="timeline"
        data-width="500"
        data-height="650"
        data-small-header="false"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/profile.php?id=61560266678495"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/profile.php?id=61560266678495">
            Facebook Page
          </a>
        </blockquote>
      </div>
    </div>
  );
}
