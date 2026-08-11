import { PageTransition } from '../components/ui/PageTransition';

export const Gallery = () => {
  return (
    <PageTransition>
      <section className="pt-48 pb-24 bg-primary min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-6xl md:text-7xl font-serif text-secondary mb-12">
            GALLERY
          </h1>
          <div className="text-secondary/60 text-lg">
            [Gallery component to be implemented with masonry layout]
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
