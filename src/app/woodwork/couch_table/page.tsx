import ImageGallery from '@/components/ImageGallery';

export default function CouchTablePage() {
  const images = [
    {
      src: '/images/woodwork/couch_table/IMG_4288.jpeg',
      alt: 'Couch table main view'
    },
    {
      src: '/images/woodwork/couch_table/couch_table_wip.jpeg',
      alt: 'Couch table work in progress'
    }
  ];

  const description = `
    This is where you can add a detailed description of your couch table project.
    You can write about the materials used, the building process, challenges you faced,
    and any special techniques you employed.
  `;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Couch Table</h1>
      <ImageGallery 
        images={images} 
        description={description} 
      />
    </div>
  );
}
