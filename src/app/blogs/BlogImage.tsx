'use client';

import { useState } from 'react';

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function BlogImage({ src, alt, className }: BlogImageProps) {
  const [error, setError] = useState(false);
  
  if (error) {
    return <div className={`${className} bg-gradient-to-br from-blue-100 to-purple-100`} />;
  }
  
  return (
    <img 
      src={src} 
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}