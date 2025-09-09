import ImageGallery from '@/components/ImageGallery';

export default function PicnicTablePage() {
  const images = [
    {
      src: '/images/woodwork/picnic_table/IMG_3648.jpeg',
      alt: 'Picnic table main view'
    },
    {
      src: '/images/woodwork/picnic_table/IMG_3091.jpeg',
      alt: 'Picnic table detail view'
    }
  ];

  const description = `
    This is where you can add a detailed description of your picnic table project.
    You can write about the materials used, the building process, challenges you faced,
    and any special techniques you employed.
  `;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Really Heavy Picnic Table</h1>
      <ImageGallery 
        images={images} 
        description={description} 
      />
    </div>
  );
}
