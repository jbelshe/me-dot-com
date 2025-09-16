'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BlogCardProps } from '@/types/BlogData';


export default function BlogCard(data: BlogCardProps) {
  return (
    <Link
      className={`bg-white rounded-lg shadow-md overflow-hidden  ${data.className} transition-shadow duration-300 hover:shadow-xl`}
      href = {data.route}
      target="_blank"
    >
      <div className={`relative bg-gray-50 group`} style={{ aspectRatio: data.aspectRatio }}>
        <Image 
            src={data.imageSrc} 
            alt={data.alt} 
            fill 
            className={`object-cover`} 
            sizes="(max-width: 768px) 100vw, 33vw" 
            priority={false} />
      </div>
      <div className="px-4 py-5 pr-1 space-y-3">
        {data.date && <p className='text-xs font-medium text-gray-500 uppercase tracking-wider'> 
          {new Date(data.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>}
        <h3 className="text-xl font-bold text-gray-900 leading-tight">{data.title}</h3>
        {data.subtitle && <p className="text-gray-600 leading-relaxed">{data.subtitle}</p>}
      </div>
    </Link>
  );
}
