import { NextResponse } from 'next/server';

async function refreshTokenIfNeeded(): Promise<string | null> {
  try {
    console.log('Attempting to refresh Facebook token...');
    const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3002';
    const refreshResponse = await fetch(`${baseUrl}/api/facebook-refresh-token`, {
      method: 'POST',
    });

    if (refreshResponse.ok) {
      const refreshData = await refreshResponse.json();
      if (refreshData.success) {
        // Try page token first, then user token
        const newToken = refreshData.pageToken || refreshData.userToken;
        if (newToken) {
          console.log('Token refreshed successfully');
          return newToken;
        }
      } else {
        console.log('Token refresh failed:', refreshData.error);
      }
    }
    
    console.log('Token refresh failed');
    return null;
  } catch (error) {
    console.error('Error refreshing token:', error);
    return null;
  }
}

async function fetchFacebookPosts(token: string, pageId: string, retryCount = 0): Promise<any> {
  const response = await fetch(
    `https://graph.facebook.com/v18.0/${pageId}/posts?fields=id,message,created_time,permalink_url,likes.summary(true),comments.summary(true),full_picture&access_token=${token}&limit=5`,
    {
      next: { revalidate: 300 } // Cache for 5 minutes
    }
  );

  if (response.ok) {
    return await response.json();
  }

  // If token is invalid and we haven't retried yet, try refreshing
  if (response.status === 401 && retryCount === 0) {
    console.log('Token appears to be expired, attempting refresh...');
    const newToken = await refreshTokenIfNeeded();
    
    if (newToken) {
      console.log('Retrying with refreshed token...');
      return await fetchFacebookPosts(newToken, pageId, retryCount + 1);
    }
  }

  const errorText = await response.text();
  console.log('Facebook API failed with status:', response.status, 'Response:', errorText);
  throw new Error(`Facebook API error: ${response.status}`);
}

export async function GET() {
  try {
    let PAGE_ACCESS_TOKEN = process.env.FB_TOKEN;
    const PAGE_ID = process.env.FB_PAGE_ID || '318228154711710'; // Correct Saunders Simmons Ltd Page ID
    
    console.log('Facebook API using Page Access Token');
    console.log('PAGE_ID:', PAGE_ID);
    console.log('PAGE_ACCESS_TOKEN:', PAGE_ACCESS_TOKEN ? `${PAGE_ACCESS_TOKEN.substring(0, 10)}...` : 'MISSING');
    
    // Check if we have the required Page Access Token
    if (!PAGE_ACCESS_TOKEN) {
      console.log('Missing Page Access Token - attempting to get fresh token');
      PAGE_ACCESS_TOKEN = await refreshTokenIfNeeded();
      
      if (!PAGE_ACCESS_TOKEN) {
        console.log('Unable to get valid token - using mock data');
        throw new Error('Page Access Token not configured and refresh failed');
      }
    }
    
    // Fetch posts with automatic token refresh on failure
    const data = await fetchFacebookPosts(PAGE_ACCESS_TOKEN, PAGE_ID);
    
    return NextResponse.json({
      posts: data.data || [],
      success: true,
      source: 'facebook_page_api',
      total: data.data?.length || 0
    });

  } catch (error) {
    console.error('Facebook API error:', error);
    
    // Return mock data for development
    return NextResponse.json({
      posts: [
        {
          id: 'mock_1',
          message: '🚀 Just launched another stunning website for a Yeovil business! Professional web design that converts visitors into customers. Our latest client saw a 200% increase in online enquiries within the first month. #WebDesignYeovil #BusinessGrowth',
          created_time: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
          reactions: { summary: { total_count: 24 } },
          comments: { summary: { total_count: 8 } },
          permalink_url: 'https://www.facebook.com/profile.php?id=61560266678495'
        },
        {
          id: 'mock_2', 
          message: '💡 Pro tip: Local SEO can transform your business visibility! We helped another Somerset company reach #1 on Google for their main keyword. The result? 300% increase in local customers finding them online. Ready for your turn? #LocalSEO #DigitalMarketing #Somerset',
          created_time: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
          reactions: { summary: { total_count: 18 } },
          comments: { summary: { total_count: 12 } },
          permalink_url: 'https://www.facebook.com/profile.php?id=61560266678495'
        },
        {
          id: 'mock_3',
          message: '📱 Mobile-first design is no longer optional! With 78% of local searches happening on mobile devices, your website MUST perform perfectly on smartphones. We just optimized another client\'s site - their mobile conversions increased by 180%! #MobileFirst #WebDesign',
          created_time: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), 
          reactions: { summary: { total_count: 15 } },
          comments: { summary: { total_count: 6 } },
          permalink_url: 'https://www.facebook.com/profile.php?id=61560266678495'
        }
      ],
      success: true,
      mock: true
    });
  }
}