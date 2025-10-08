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
    // Add Facebook SDK root div if it doesn't exist
    if (!document.getElementById('fb-root')) {
      const fbRoot = document.createElement('div');
      fbRoot.id = 'fb-root';
      document.body.appendChild(fbRoot);
    }

    // Load Facebook SDK without App ID (for public pages)
    if (!document.getElementById('facebook-jssdk')) {
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0';
      
      document.body.appendChild(script);
      
      script.onload = () => {
        // Initialize Facebook SDK
        if (window.FB) {
          window.FB.init({
            xfbml: true,
            version: 'v19.0'
          });
          
          setTimeout(() => {
            window.FB.XFBML.parse();
          }, 1000);
        }
      };
    } else if (window.FB?.XFBML) {
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
              href="https://www.facebook.com/p/Saunders-Simmons-Ltd-61560266678495/"
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

      {/* Direct Facebook Timeline Iframe */}
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <h4 className="text-2xl font-bold text-gray-900 mb-3">Follow Our Latest Updates</h4>
          <p className="text-gray-600">See what we're sharing with our community</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <div className="w-full flex justify-center">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fp%2FSaunders-Simmons-Ltd-61560266678495%2F&tabs=timeline&width=550&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId="
              width="550"
              height="600"
              style={{ 
                border: 'none',
                overflow: 'hidden',
                borderRadius: '8px'
              }}
              scrolling="no"
              allow="encrypted-media"
              className="max-w-full"
              title="Saunders Simmons Ltd Facebook Page"
              onError={() => console.log('Facebook iframe failed to load')}
            />
          </div>
        </div>
        
        <div className="text-center mt-6">
          <a
            href="https://www.facebook.com/p/Saunders-Simmons-Ltd-61560266678495/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Follow Us on Facebook
          </a>
        </div>
      </div>
    </div>
  );
}
