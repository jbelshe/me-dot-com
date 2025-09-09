import ImageGallery from '@/components/ImageGallery';
import { shoeRackImages, shoeRackDescription } from './data';

export default function ShoeRackPage() {
  const images = shoeRackImages;
  const description = shoeRackDescription;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Shoe Rack from Ikea Shelf Scraps</h1>
      <ImageGallery 
        images={images} 
        description={description} 
      />
    </div>
  );
}
