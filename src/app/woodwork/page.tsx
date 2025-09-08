'use client';

import { projects } from './data';
import Card from '@/components/Card';

export default function WoodworkPage() {
  return (
    <main className="mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Woodwork Projects</h1>
      {/* 1 column on mobile, 2 columns on desktop+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {projects.map((p) => (
          <Card key={p.id} {...p} />
        ))}
      </div>
  </main>
  );
}