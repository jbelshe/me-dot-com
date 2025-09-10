'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  subtitle?: string;
  imageSrc: StaticImageData | string;
  secondarySrc?: StaticImageData | string;
  alt: string;
  route: string;
  className?: string;
  aspectRatio?: string; // e.g., "16/9", "4/3", "1/1"
}

export default function Card({ 
  title, 
  subtitle,
  imageSrc, 
  secondarySrc, 
  alt, 
  route, 
  className = '',
  aspectRatio = '1/1' 
}: CardProps) {
  
  return (
    <Link
      className={`bg-white rounded-lg shadow-md overflow-hidden  ${className} transition-shadow duration-300 hover:shadow-xl`}
      href = {route}
    >
      <div className={`relative bg-gray-50 group`} style={{ aspectRatio }}>
        <Image 
            src={imageSrc} 
            alt={alt} 
            fill 
            className={`object-cover opacity-100 ${secondarySrc ? 'transition-opacity duration-500 group-hover:opacity-0' : ''}`} 
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
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        {subtitle && <p className="text-md text-gray-600">{subtitle}</p>}
      </div>
    </Link>
  );
}
