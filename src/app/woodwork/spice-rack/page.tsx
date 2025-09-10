import ImageGallery from '@/components/ImageGallery';



import { spiceRackImages, spiceRackDescription } from './data';
export default function SpiceRackPage() {


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Spice Rack</h1>
      <ImageGallery 
        images={spiceRackImages} 
        description={spiceRackDescription} 
      />
    </div>
  );
}
