'use client';

import { useEffect, useMemo, useState } from 'react';
import { projects } from './data';
import ModalCard from '@/components/ModalCard';
import ImageGallery from '@/components/ImageGallery';
import { bookshelfImages } from './bookshelf/data';
import { couchTableImages } from './couch-table/data';
import { pianoBenchImages } from './piano-bench/data';
import { spiceRackImages } from './spice-rack/data';
import { picnicTableImages } from './picnic-table/data';
import { shoeRackImages } from './shoe-rack/data';


export default function WoodworkPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selected = useMemo(() => projects.find(p => p.id === selectedId) || null, [selectedId]);

  // Derive images for the gallery
  const galleryImages = useMemo(() => {
    if (!selected) return [] as { src: string; alt: string }[];
    if (selected.title.toLowerCase() === 'bookshelf') {
      return bookshelfImages;
    }
    if (selected.title === 'Side Table') {
      return couchTableImages;
    }
    if (selected.title === 'Piano Bench') {
      return pianoBenchImages;
    }
    if (selected.title === 'Spice Rack') {
      return spiceRackImages;
    }
    if (selected.title === 'Really Heavy Picnic Table') {
      return picnicTableImages;
    }
    if (selected.title === 'Shoe Rack') {
      return shoeRackImages;
    }
    return [];
  }, [selected]);

  // Close handlers
  const close = () => setSelectedId(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <main className="mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Woodwork Projects</h1>
      {/* 1 column on mobile, 2 columns on desktop+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {projects.map((p) => (
          <ModalCard key={p.id} {...p} onClick={() => setSelectedId(p.id)} />
        ))}
      </div>

      {/* Modal Gallery */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} gallery`}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" onClick={close} />

          {/* Panel */}
          <div className="relative z-20 mt-16 md:mt-20 w-full max-w-4xl mx-auto px-0 md:px-4 h-[calc(100vh-6rem)]">
            <div className="bg-white w-full h-full rounded-2xl shadow-lg p-4 md:p-6 overflow-auto flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">{selected.title}</h2>
                <button
                  type="button"
                  onClick={close}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  Close
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <div className="rounded-lg">
                  <ImageGallery images={galleryImages} />
                </div>
                <div className="mt-4 space-y-2">
                  <h2 className="text-xl font-semibold text-gray-900">Description</h2>
                  <p>Build instructions to come.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}