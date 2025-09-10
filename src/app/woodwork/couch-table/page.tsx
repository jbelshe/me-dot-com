import ImageGallery from '@/components/ImageGallery';
import { couchTableDescription, couchTableImages } from './data';

export default function CouchTablePage() {


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Couch Table</h1>
      <ImageGallery 
        images={couchTableImages} 
        description={couchTableDescription} 
      />
    </div>
  );
}
