import { PageTransition } from '../components/ui/PageTransition';

export const Contact = () => {
  return (
    <PageTransition>
      <section className="pt-48 pb-24 bg-primary min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-serif text-secondary leading-tight mb-8">
              LET'S BUILD SOMETHING <span className="text-accent italic">EXTRAORDINARY.</span>
            </h1>
            <p className="text-secondary/60 text-lg mb-16">
              [Contact form and contact details placeholder]
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
