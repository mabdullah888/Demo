import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { GalleryGrid } from '@/components/gallery-grid';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse our photo gallery showcasing the elegance of Royal Palace Hotel — rooms, dining, spa, pool, and more.',
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Visual Journey"
        title="Photo Gallery"
        subtitle="A glimpse into the world of Royal Palace — where every frame tells a story of luxury."
        image="https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
