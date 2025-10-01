import ImageGallery from '@/components/ImageGallery';
import { bookshelfDescription, bookshelfImages } from './data';
import BackButton from '@/components/BackButton';

export default function BookshelfPage() {

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <BackButton />
      <h1 className="text-3xl font-bold mb-6 text-center">Bookshelf Project</h1>
      <ImageGallery 
        images={bookshelfImages} 
        description={bookshelfDescription} 
      />
    </div>
  );
}
