'use client';

import { useState } from 'react';

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  start?: number;
  className?: string;
  aspectRatio?: 'video' | 'square';
  thumbnailQuality?: 'default' | 'hqdefault' | 'maxresdefault';
  badgeText?: string;
}

export default function YouTubeFacade({
  videoId,
  title,
  start = 0,
  className = '',
  aspectRatio = 'video',
  thumbnailQuality = 'hqdefault',
  badgeText
}: YouTubeFacadeProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&start=${start}&rel=0`;

  if (isLoaded) {
    return (
      <div className={`${aspectRatio === 'video' ? 'aspect-video' : 'aspect-square'} relative overflow-hidden ${className}`}>
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ minHeight: '200px' }}
        />
        {badgeText && (
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
            {badgeText}
          </div>
        )}
      </div>
    );
  }

  return (
    <div 
      className={`${aspectRatio === 'video' ? 'aspect-video' : 'aspect-square'} relative overflow-hidden cursor-pointer group bg-gray-900 ${className}`}
      onClick={handleLoad}
      style={{ minHeight: '200px' }}
    >
      <img
        src={thumbnailUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
          <svg 
            className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      {badgeText && (
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
          {badgeText}
        </div>
      )}

      {/* Load on hover hint */}
      <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Click to play
      </div>
    </div>
  );
}
