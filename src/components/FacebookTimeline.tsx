"use client";

import { useEffect, useState } from "react";

export default function FacebookTimeline() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Load Facebook SDK if not already loaded
    if (typeof window !== "undefined" && !document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v19.0";
      script.async = true;
      script.onload = () => setLoaded(true);
      document.body.appendChild(script);
    } else {
      setLoaded(true);
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      {/* Timeline */}
      {loaded ? (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div
            className="fb-page"
            data-href="https://www.facebook.com/p/Saunders-Simmons-Ltd-61560266678495/"
            data-tabs="timeline,events,messages"
            data-width="600"
            data-height="500"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote
              cite="https://www.facebook.com/p/Saunders-Simmons-Ltd-61560266678495/"
              className="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/p/Saunders-Simmons-Ltd-61560266678495/">Saunders Simmons Ltd</a>
            </blockquote>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="animate-pulse space-y-4">
            {/* Header skeleton */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded w-32 mb-1"></div>
                <div className="h-3 bg-gray-200 rounded w-24"></div>
              </div>
              <div className="h-8 bg-gray-200 rounded w-16"></div>
            </div>
            
            {/* Posts skeleton */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-32 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                <div className="h-24 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}