import ImageGallery from '@/components/ImageGallery';

export default function PianoBenchPage() {
  const images = [
    {
      src: '/images/woodwork/piano_bench/IMG_4212.jpeg',
      alt: 'Piano bench main view'
    },
    {
      src: '/images/woodwork/piano_bench/piano_bench_wip.jpeg',
      alt: 'Piano bench work in progress'
    }
  ];

  const description = `
    This is where you can add a detailed description of your piano bench project.
    You can write about the materials used, the building process, challenges you faced,
    and any special techniques you employed.
  `;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Piano Bench</h1>
      <ImageGallery 
        images={images} 
        description={description} 
      />
    </div>
  );
}
