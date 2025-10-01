'use client';

import Image, { StaticImageData } from 'next/image';

interface ModalCardProps {
  title: string;
  subtitle?: string;
  imageSrc: StaticImageData | string;
  secondarySrc?: StaticImageData | string;
  alt: string;
  route?: string; // accepted for compatibility with spreads, not used here
  className?: string;
  aspectRatio?: string; // e.g., "16/9", "4/3", "1/1"
  onClick: () => void;
}

export default function ModalCard({
  title,
  subtitle,
  imageSrc,
  secondarySrc,
  alt,
  className = '',
  aspectRatio = '1/1',
  onClick,
}: ModalCardProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className} transition-shadow duration-300 hover:shadow-xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`}
    >
      <div className={`relative bg-gray-50 group`} style={{ aspectRatio }}>
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className={`object-cover opacity-100 ${secondarySrc ? 'transition-opacity duration-500 group-hover:opacity-0' : ''}`}
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={true}
        />
        {secondarySrc && (
          <Image
            src={secondarySrc}
            alt={alt}
            fill
            className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={false}
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        {subtitle && <p className="text-md text-gray-600">{subtitle}</p>}
      </div>
    </div>
  );
}
