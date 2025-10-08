import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const PAGE_ACCESS_TOKEN = process.env.FB_TOKEN;
    const PAGE_ID = process.env.FB_PAGE_ID || '318228154711710'; // Correct Saunders Simmons Ltd Page ID
    
    console.log('Facebook API using Page Access Token');
    console.log('PAGE_ID:', PAGE_ID);
    console.log('PAGE_ACCESS_TOKEN:', PAGE_ACCESS_TOKEN ? `${PAGE_ACCESS_TOKEN.substring(0, 10)}...` : 'MISSING');
    
    // Check if we have the required Page Access Token
    if (!PAGE_ACCESS_TOKEN) {
      console.log('Missing Page Access Token - using mock data');
      throw new Error('Page Access Token not configured');
    }
    
    // Fetch posts directly using the correct Page ID and Page Access Token
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${PAGE_ID}/posts?fields=id,message,created_time,permalink_url,likes.summary(true),comments.summary(true),full_picture&access_token=${PAGE_ACCESS_TOKEN}&limit=5`,
      {
        next: { revalidate: 300 } // Cache for 5 minutes
      }
    );

    if (response.ok) {
      const data = await response.json();
      
      return NextResponse.json({
        posts: data.data || [],
        success: true,
        source: 'facebook_page_api',
        total: data.data?.length || 0
      });
    } else {
      const errorText = await response.text();
      console.log('Facebook API failed with status:', response.status, 'Response:', errorText);
      throw new Error(`Facebook API error: ${response.status}`);
    }

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