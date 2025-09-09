import ImageGallery from '@/components/ImageGallery';

export default function BookshelfPage() {
  const images = [
    {
      src: '/images/woodwork/bookshelf/IMG_2483.jpeg',
      alt: 'Bookshelf main view'
    },
    {
      src: '/images/woodwork/bookshelf/IMG_2314.jpeg',
      alt: 'Bookshelf detail view'
    }
  ];

  const description = `
    This is where you can add a detailed description of your bookshelf project.
    You can write about the materials used, the building process, challenges you faced,
    and any special techniques you employed.

    Feel free to add as much detail as you'd like. The text will be automatically
    formatted with proper spacing between paragraphs.
  `;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Bookshelf Project</h1>
      <ImageGallery 
        images={images} 
        description={description} 
      />
    </div>
  );
}
