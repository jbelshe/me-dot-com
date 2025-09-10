import ImageGallery from '@/components/ImageGallery';
import { picnicTableImages, picnicTableDescription } from './data';

export default function PicnicTablePage() {

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Really Heavy Picnic Table</h1>
      <ImageGallery 
        images={picnicTableImages} 
        description={picnicTableDescription} 
      />
    </div>
  );
}
