'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
  description?: string;
}

export default function ImageGallery({ images, description }: ImageGalleryProps) {
  // constants
  const PANEL = 100 / 3;            // 33.333333...
  const POS_PREV = 0;               // left panel visible
  const POS_CURR = -PANEL;          // middle panel centered
  const POS_NEXT = -2 * PANEL;      // right panel visible

  const [currentIndex, setCurrentIndex] = useState(0);
  //const [nextIndex, setNextIndex] = useState(1);
  //const [prevIndex, setPrevIndex] = useState(images.length-1);
  // Slide state
  const [trackPos, setTrackPos] = useState(POS_CURR); // 0 or -100 or -200
  const [isResetting, setIsResetting] = useState(false);
  const [slideMode, setSlideMode] = useState<'idle' | 'next' | 'prev'>('idle');

  const len = images.length;
  const prevIndex = (currentIndex - 1 + len) % len;
  const nextIndex = (currentIndex + 1) % len;

  

  const goToNext = useCallback(() => {
    if (len < 2 || slideMode !== 'idle') return;
    setSlideMode('next');
    setIsResetting(false);
    setTrackPos(POS_NEXT);
  }, [len, slideMode]);

  const goToPrevious = useCallback(() => {
    if (len < 2 || slideMode !== 'idle') return;
    setSlideMode('prev');
    setIsResetting(false);
    setTrackPos(POS_PREV);
  }, [len, slideMode]);

  if (images.length === 0) return null;

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (slideMode === "idle" || isResetting) return;  // ignore the reset phase
    // Commit the new index
    console.log('slideMode', slideMode);
    console.log('currentIndex', currentIndex);
    console.log('nextIndex', nextIndex);
    console.log('prevIndex', prevIndex);
    setCurrentIndex(i => slideMode === 'next' ? (i+1)%len : (i-1+len)%len);
    // 1) Disable transition this frame
    setIsResetting(true);
    setSlideMode('idle');

    // 2) Next frame, move back to center without transition
    requestAnimationFrame(() => {
      setTrackPos(POS_CURR);

      // 3) One more frame later, re-enable transition for future slides
      requestAnimationFrame(() => {
        setIsResetting(false);
      });
    });

    console.log('slideMode', slideMode);
    console.log('currentIndex', currentIndex);
    console.log('nextIndex', nextIndex);
    console.log('prevIndex', prevIndex);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Gallery */}
      <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden mb-6 select-none">
        {/* Sliding Track (200% width, two 50% panels) */}
        <div
          className={
            `absolute inset-0 flex w-[300%] h-full ` +
            (isResetting ? 'transition-none' : 'transition-transform duration-500 ease-in-out motion-reduce:transition-none')
          }
          style={{ transform: `translateX(${trackPos}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {/* Left Panel */}
          <div className="relative w-full h-full">
            <Image
              src={images[prevIndex].src}
              alt={images[prevIndex].alt}
              fill
              className="object-contain"
              priority={true}
            />
          </div>
          { /* Current Image */ }
          <div className="relative w-full h-full">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-contain"
              priority={true}
            />
          </div>
          {/* Right Panel */}
          <div className="relative w-full h-full">
            <Image  
              src={images[nextIndex].src}
              alt={images[nextIndex].alt}
              fill
              className="object-contain"
              priority={true}
            />
          </div>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Description */}
      {description && (
        <div className="prose max-w-4xl mx-auto">
          {description.split('\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
