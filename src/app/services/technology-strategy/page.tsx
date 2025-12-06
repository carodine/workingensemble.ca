import type { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp, CheckCircle } from 'lucide-react';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import Card from '@/components/shared/Card';
import { getServiceBySlug, services } from '@/data/services';

const service = getServiceBySlug('technology-strategy')!;

export const metadata: Metadata = {
  title: service.title,
  description: service.shortDescription,
};

export default function TechnologyStrategyPage() {
  const relatedServices = services.filter(s => s.slug !== 'technology-strategy').slice(0, 3);

  return (
    <>
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10 text-primary-600" />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              {service.shortDescription}
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container size="narrow">
          <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-6">
            What We Do
          </h2>
          <p className="text-neutral-700 text-lg mb-8">
            {service.detailedDescription}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span className="text-neutral-700">{feature}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-neutral-50">
        <Container size="narrow">
          <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-8 text-center">
            Our Process
          </h2>
          <div className="space-y-6">
            {service.process?.map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-neutral-700 text-lg">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-8 text-center">
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((relatedService) => (
              <Link key={relatedService.slug} href={`/services/${relatedService.slug}`}>
                <Card hover className="h-full text-center">
                  <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">
                    {relatedService.title}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    {relatedService.shortDescription}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Need Strategic Technology Guidance?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Get fractional CTO expertise without the full-time cost. Let's align your technology with your business goals.
            </p>
            <Button href="/book-consultation" variant="secondary" size="lg">
              Book Free Tech Review
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
