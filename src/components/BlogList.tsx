'use client';

import { BlogCardProps } from '@/types/BlogCardData';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogList(data: BlogCardProps) {
  const imageSrc = `https://cdn.jackbelshe.com${data.imageSrc}`;
  return (
    <div className="bg-white mb-5 rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl max-w-3xl mx-auto">
      <Link href={data.route} target="_blank" className="flex flex-row h-32">
        <div className="relative w-1/4 min-w-[150px] bg-gray-50">
          <Image
            src={imageSrc}
            alt={data.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 150px, 25vw"
            priority={false}
          />
        </div>
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-lg line-clamp-1">{data.title}</h3>
            <p className="text-gray-600 text-sm line-clamp-2">{data.subtitle}</p>
          </div>
          <div className="text-sm text-gray-500">
            {new Date(data.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </div>
        </div>
      </Link>
    </div>
  );
}