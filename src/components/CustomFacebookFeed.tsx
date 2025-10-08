'use client';

import { useEffect, useState } from 'react';

interface FacebookPost {
  id: string;
  message?: string;
  created_time: string;
  full_picture?: string;
  permalink_url?: string;
  reactions?: { summary: { total_count: number } };
  comments?: { summary: { total_count: number } };
}

interface FeedResponse {
  posts: FacebookPost[];
  success: boolean;
  mock?: boolean;
}

export default function CustomFacebookFeed() {
  const [posts, setPosts] = useState<FacebookPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFacebookPosts = async () => {
      try {
        const response = await fetch('/api/facebook-feed');
        const data: FeedResponse = await response.json();
        
        if (data.success) {
          setPosts(data.posts);
        } else {
          throw new Error('Failed to fetch posts');
        }
      } catch (err) {
        setError('Failed to load Facebook posts');
        console.error('Facebook feed error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFacebookPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString();
  };

  const truncateMessage = (message: string, maxLength: number = 200) => {
    if (message.length <= maxLength) return message;
    return message.slice(0, maxLength) + '...';
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h4 className="text-2xl font-bold text-gray-900 mb-3">Follow Our Digital Journey</h4>
          <p className="text-gray-600">Loading our latest updates...</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 animate-pulse">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
                  <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-red-800 mb-2">Unable to Load Facebook Feed</h4>
          <p className="text-red-600 mb-4">{error}</p>
          <a
            href="https://www.facebook.com/profile.php?id=61560266678495"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View on Facebook
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h4 className="text-2xl font-bold text-gray-900 mb-3">Follow Our Digital Journey</h4>
        <p className="text-gray-600">See what we're creating for businesses across Somerset & Dorset</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {posts.slice(0, 3).map((post) => (
          <article key={post.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {post.full_picture && (
              <div className="aspect-video bg-gray-100">
                <img 
                  src={post.full_picture} 
                  alt="Facebook post image"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h5 className="font-semibold text-gray-900 text-sm">Saunders Simmons Ltd</h5>
                    <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Verified</span>
                  </div>
                  <p className="text-xs text-gray-500">{formatDate(post.created_time)}</p>
                </div>
              </div>
              
              {post.message && (
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {truncateMessage(post.message)}
                </p>
              )}
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-3">
                  {post.reactions && (
                    <span className="flex items-center gap-1">
                      👍 {post.reactions.summary.total_count}
                    </span>
                  )}
                  {post.comments && (
                    <span className="flex items-center gap-1">
                      💬 {post.comments.summary.total_count}
                    </span>
                  )}
                </div>
                {post.permalink_url && (
                  <a
                    href={post.permalink_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View Post →
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center">
        <p className="text-gray-600 mb-4">
          This showcases the real results we deliver for our clients. 
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