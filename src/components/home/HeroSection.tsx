import Button from '@/components/shared/Button';
import Container from '@/components/shared/Container';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 md:py-32">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-6">
            Your Outsourced Tech Team — From Infrastructure to Workflow Automation
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 mb-8 max-w-3xl mx-auto">
            We bridge the gap between IT support, web development, and strategic technology decisions — so you can focus on what you do best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/book-consultation" variant="secondary" size="lg">
              Book Your Free Tech Review
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Explore Our Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
