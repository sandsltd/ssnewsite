import { NextResponse } from 'next/server';

interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in?: number;
}

interface TokenErrorResponse {
  error: {
    message: string;
    type: string;
    code: number;
  };
}

export async function POST() {
  try {
    const APP_ID = process.env.FACEBOOK_APP_ID;
    const APP_SECRET = process.env.FACEBOOK_APP_SECRET;
    
    // Try both tokens - FB_USER_TOKEN first, then FB_TOKEN
    const possibleTokens = [
      process.env.FB_USER_TOKEN,
      process.env.FB_TOKEN
    ].filter(Boolean);

    if (!APP_ID || !APP_SECRET || possibleTokens.length === 0) {
      console.log('Missing Facebook credentials for token refresh');
      return NextResponse.json({
        success: false,
        error: 'Missing Facebook credentials'
      }, { status: 400 });
    }

    console.log('Attempting to refresh Facebook token...');

    // Try each token until one works
    for (const token of possibleTokens) {
      try {
        console.log(`Trying token: ${token?.substring(0, 10)}...`);

        // Step 1: Exchange short-lived token for long-lived user token
        const userTokenResponse = await fetch(
          `https://graph.facebook.com/v18.0/oauth/access_token?` +
          `grant_type=fb_exchange_token&` +
          `client_id=${APP_ID}&` +
          `client_secret=${APP_SECRET}&` +
          `fb_exchange_token=${token}`
        );

        if (!userTokenResponse.ok) {
          const errorData: TokenErrorResponse = await userTokenResponse.json();
          console.log(`Token ${token?.substring(0, 10)}... failed:`, errorData.error?.message);
          continue; // Try next token
        }

        const userTokenData: TokenResponse = await userTokenResponse.json();
        console.log('User token refreshed successfully');

        // Step 2: Get long-lived page access token
        const PAGE_ID = process.env.FB_PAGE_ID;
        if (!PAGE_ID) {
          return NextResponse.json({
            success: true,
            userToken: userTokenData.access_token,
            expiresIn: userTokenData.expires_in,
            message: 'User token refreshed, but no page ID provided for page token'
          });
        }

        const pageTokenResponse = await fetch(
          `https://graph.facebook.com/v18.0/${PAGE_ID}?` +
          `fields=access_token&` +
          `access_token=${userTokenData.access_token}`
        );

        if (!pageTokenResponse.ok) {
          const errorData: TokenErrorResponse = await pageTokenResponse.json();
          console.log('Page token fetch failed:', errorData);
          // Still return the user token even if page token fails
          return NextResponse.json({
            success: true,
            userToken: userTokenData.access_token,
            expiresIn: userTokenData.expires_in,
            message: 'User token refreshed, but page token fetch failed',
            pageTokenError: errorData.error?.message
          });
        }

        const pageTokenData = await pageTokenResponse.json();
        console.log('Page token obtained successfully');

        return NextResponse.json({
          success: true,
          userToken: userTokenData.access_token,
          pageToken: pageTokenData.access_token,
          expiresIn: userTokenData.expires_in,
          message: 'Tokens refreshed successfully'
        });

      } catch (tokenError) {
        console.log(`Error with token ${token?.substring(0, 10)}...:`, tokenError);
        continue; // Try next token
      }
    }

    // If we get here, all tokens failed
    return NextResponse.json({
      success: false,
      error: 'All available tokens failed to refresh. You may need to generate new tokens from Facebook Graph API Explorer.',
      suggestion: 'Visit https://developers.facebook.com/tools/explorer/ to generate new tokens'
    }, { status: 400 });

  } catch (error) {
    console.error('Token refresh error:', error);
    return NextResponse.json({
      success: false,
      error: 'Internal server error during token refresh'
    }, { status: 500 });
  }
}

export async function GET() {
  // Allow GET requests to check token validity
  try {
    const FB_TOKEN = process.env.FB_TOKEN;
    
    if (!FB_TOKEN) {
      return NextResponse.json({
        valid: false,
        error: 'No token found'
      });
    }

    // Test the current token
    const response = await fetch(
      `https://graph.facebook.com/v18.0/me?access_token=${FB_TOKEN}`
    );

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json({
        valid: true,
        tokenInfo: data
      });
    } else {
      const errorData = await response.json();
      return NextResponse.json({
        valid: false,
        error: errorData.error?.message || 'Token validation failed'
      });
    }

  } catch (error) {
    console.error('Token validation error:', error);
    return NextResponse.json({
      valid: false,
      error: 'Failed to validate token'
    });
  }
}