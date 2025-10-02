import React from 'react';
import Card from '@/components/Card';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <Card
          title="Voronoi"
          imageSrc="https://cdn.jackbelshe.com/images/home/voronoi_3.png"
          subtitle='Cool colors and shapes'
          alt="Voronoi"
          route="/projects/voronoi"
          aspectRatio="16/9"
          className="w-full"
        />
        <Card
          title="Anki ETL"
          imageSrc="/images/projects/anki-etl/system_diagram.jpeg"
          subtitle='Automated flashcard pipeline'
          alt="Anki"
          route="/projects/anki"
          aspectRatio="16/9"
          className="w-full"
        />
      </div>

      <div className="max-w-4xl mx-auto mt-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Still working on this one...</h1>
          <p className="text-xl mb-8">Reach out directly if you want to see some of those demos</p>
        </div>
      </div>
    </div>
  );
}
