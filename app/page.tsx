import { Hero } from '@/components/home/hero';
import { Welcome } from '@/components/home/welcome';
import { FeaturedRooms } from '@/components/home/featured-rooms';
import { Facilities } from '@/components/home/facilities';
import { Testimonials } from '@/components/home/testimonials';
import { GalleryPreview } from '@/components/home/gallery-preview';
import { Offers } from '@/components/home/offers';
import { MapSection } from '@/components/home/map-section';

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <FeaturedRooms />
      <Facilities />
      <Testimonials />
      <GalleryPreview />
      <Offers />
      <MapSection />
    </>
  );
}
