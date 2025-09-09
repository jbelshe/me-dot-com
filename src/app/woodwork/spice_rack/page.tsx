import ImageGallery from '@/components/ImageGallery';

export default function SpiceRackPage() {
  const images = [
    {
      src: '/images/woodwork/spice_rack/IMG_4391.jpeg',
      alt: 'Spice rack main view'
    },
    {
      src: '/images/woodwork/spice_rack/IMG_4291.jpeg',
      alt: 'Spice rack detail view'
    }
  ];

  const description = `
    This is where you can add a detailed description of your spice rack project.
    You can write about the materials used, the building process, challenges you faced,
    and any special techniques you employed.
  `;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Spice Rack</h1>
      <ImageGallery 
        images={images} 
        description={description} 
      />
    </div>
  );
}
