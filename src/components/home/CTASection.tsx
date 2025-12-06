import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 text-white relative overflow-hidden">
      {/* Yellow accent highlights */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-400 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 opacity-10 rounded-full blur-3xl"></div>

      <Container>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Ready to Stabilize Your Tech Stack?
          </h2>
          <p className="text-lg text-accent-100 mb-8">
            Get a free 30-minute tech review. We'll assess your current setup, identify quick wins, and discuss how we can help you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/book-consultation" variant="secondary" size="lg">
              Book Free Tech Review
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="!text-white !border-white hover:!bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
