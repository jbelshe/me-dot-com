'use client';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

interface CardProps {
  title: string;
  imageSrc: StaticImageData | string;
  secondarySrc?: StaticImageData | string;
  alt: string;
  className?: string;
}

export default function Card({ title, imageSrc, secondarySrc, alt, className = '' }: CardProps) {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden group ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative aspect-[1/1] bg-gray-50">
        <Image 
            src={imageSrc} 
            alt={alt} 
            fill 
            className="object-cover opacity-100 transition-opacity duration-500 group-hover:opacity-0 "
            sizes="(max-width: 768px) 100vw, 33vw" 
            priority={false} />
        {secondarySrc && (
          <Image 
            src={secondarySrc} 
            alt={alt} 
            fill 
            className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 33vw" 
            priority={false} /> 
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
}
