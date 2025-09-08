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
      className={`bg-white rounded-lg shadow-md overflow-hidden `}
    >
      <div className="relative aspect-[4/3] bg-gray-50">

      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
}
