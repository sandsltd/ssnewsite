'use client';

import { useEffect, useState } from 'react';

interface FacebookPost {
  id: string;
  message?: string;
  created_time: string;
  likes?: { data: any[] };
  comments?: { data: any[] };
}

export default function FacebookFeed() {
  const [posts, setPosts] = useState<FacebookPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFacebookPosts = async () => {
      try {
        // This would require a Facebook App Access Token
        // For now, we'll show a fallback with the page plugin
        setLoading(false);
      } catch (err) {
        setError('Failed to load Facebook posts');
        setLoading(false);
      }
    };

    fetchFacebookPosts();
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h4 className="text-2xl font-bold text-gray-900 mb-3">Follow Our Latest Updates</h4>
        <p className="text-gray-600">See what we're sharing with our community</p>
      </div>
      
      {/* Facebook Page Plugin - Should work for business pages */}
      <div className="bg-white rounded-2xl shadow-lg p-4">
        <div
          className="fb-page"
          data-href="https://www.facebook.com/profile.php?id=61560266678495"
          data-tabs="timeline"
          data-width="550"
          data-height="600"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote 
            cite="https://www.facebook.com/profile.php?id=61560266678495" 
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/profile.php?id=61560266678495">
              Saunders Simmons Ltd Facebook Page
            </a>
          </blockquote>
        </div>
      </div>
      
      <div className="text-center mt-6">
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
      </div>
      
      {/* Debug info */}
      <div className="mt-4 p-4 bg-gray-100 rounded-lg text-sm text-gray-600">
        <p><strong>Troubleshooting Facebook Feed:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Make sure your Facebook page is set to "Public"</li>
          <li>Check that your page allows timeline plugins</li>
          <li>Facebook may take time to approve new page embeds</li>
          <li>Some browsers block Facebook widgets by default</li>
        </ul>
      </div>
    </div>
  );
}