import ImageGallery from '@/components/ImageGallery';
import { bookshelfDescription, bookshelfImages } from './data';

export default function BookshelfPage() {

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Bookshelf Project</h1>
      <ImageGallery 
        images={bookshelfImages} 
        description={bookshelfDescription} 
      />
    </div>
  );
}
