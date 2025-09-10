import ImageGallery from '@/components/ImageGallery';
import { pianoBenchImages, pianoBenchDescription } from './data';

export default function PianoBenchPage() {

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Piano Bench</h1>
      <ImageGallery 
        images={pianoBenchImages} 
        description={pianoBenchDescription} 
      />
    </div>
  );
}
