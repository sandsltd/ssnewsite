import { NextResponse } from 'next/server';

export async function GET() {
  const APP_ID = process.env.FACEBOOK_APP_ID;
  const APP_SECRET = process.env.FACEBOOK_APP_SECRET;
  const PAGE_ID = process.env.FB_PAGE_ID;

  return NextResponse.json({
    help: {
      message: "To get fresh Facebook tokens that work with your app:",
      steps: [
        "1. Go to https://developers.facebook.com/tools/explorer/",
        `2. Select your app ID: ${APP_ID}`,
        "3. Select 'Get Page Access Token' instead of 'Get User Access Token'",
        `4. Choose your page: Saunders Simmons Ltd (${PAGE_ID})`,
        "5. Add these permissions: pages_show_list, pages_read_engagement, pages_read_user_content",
        "6. Click 'Generate Access Token'",
        "7. Copy the token and update FB_TOKEN in your .env.local file",
        "8. For long-lived tokens, use the token exchange endpoint below"
      ],
      currentConfig: {
        appId: APP_ID,
        pageId: PAGE_ID,
        hasAppSecret: !!APP_SECRET
      },
      tokenExchangeUrl: `https://graph.facebook.com/v18.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${APP_ID}&client_secret=${APP_SECRET}&fb_exchange_token=YOUR_SHORT_LIVED_TOKEN`
    }
  });
}

export async function POST() {
  try {
    const FB_TOKEN = process.env.FB_TOKEN;
    const FB_USER_TOKEN = process.env.FB_USER_TOKEN;
    const PAGE_ID = process.env.FB_PAGE_ID;

    const results = {
      timestamp: new Date().toISOString(),
      tests: [] as any[]
    };

    // Test FB_TOKEN
    if (FB_TOKEN) {
      try {
        const response = await fetch(`https://graph.facebook.com/v18.0/me?access_token=${FB_TOKEN}`);
        const data = await response.json();
        
        results.tests.push({
          token: 'FB_TOKEN',
          preview: `${FB_TOKEN.substring(0, 15)}...`,
          valid: response.ok,
          data: response.ok ? data : data.error,
          type: response.ok ? 'Valid token' : 'Invalid/Expired'
        });
      } catch (error) {
        results.tests.push({
          token: 'FB_TOKEN',
          preview: `${FB_TOKEN.substring(0, 15)}...`,
          valid: false,
          error: 'Network error'
        });
      }
    }

    // Test FB_USER_TOKEN
    if (FB_USER_TOKEN) {
      try {
        const response = await fetch(`https://graph.facebook.com/v18.0/me?access_token=${FB_USER_TOKEN}`);
        const data = await response.json();
        
        results.tests.push({
          token: 'FB_USER_TOKEN',
          preview: `${FB_USER_TOKEN.substring(0, 15)}...`,
          valid: response.ok,
          data: response.ok ? data : data.error,
          type: response.ok ? 'Valid token' : 'Invalid/Expired'
        });
      } catch (error) {
        results.tests.push({
          token: 'FB_USER_TOKEN',
          preview: `${FB_USER_TOKEN.substring(0, 15)}...`,
          valid: false,
          error: 'Network error'
        });
      }
    }

    // Test page posts access
    const validTokens = results.tests.filter(t => t.valid);
    if (validTokens.length > 0 && PAGE_ID) {
      const testToken = validTokens[0];
      try {
        const response = await fetch(
          `https://graph.facebook.com/v18.0/${PAGE_ID}/posts?fields=id,message,created_time&limit=1&access_token=${testToken.token === 'FB_TOKEN' ? FB_TOKEN : FB_USER_TOKEN}`
        );
        const data = await response.json();
        
        results.tests.push({
          token: 'PAGE_POSTS_TEST',
          valid: response.ok,
          data: response.ok ? `Found ${data.data?.length || 0} posts` : data.error,
          type: response.ok ? 'Page access working' : 'Page access failed'
        });
      } catch (error) {
        results.tests.push({
          token: 'PAGE_POSTS_TEST',
          valid: false,
          error: 'Network error testing page access'
        });
      }
    }

    return NextResponse.json(results);

  } catch (error) {
    return NextResponse.json({
      error: 'Failed to test tokens',
      details: error
    }, { status: 500 });
  }
}