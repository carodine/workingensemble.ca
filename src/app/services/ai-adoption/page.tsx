import type { Metadata } from 'next';
import Link from 'next/link';
import { Brain, CheckCircle } from 'lucide-react';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import Card from '@/components/shared/Card';
import { getServiceBySlug, services } from '@/data/services';

const service = getServiceBySlug('ai-adoption')!;

export const metadata: Metadata = {
  title: service.title,
  description: service.shortDescription,
};

export default function AIAdoptionPage() {
  const relatedServices = services.filter(s => s.slug !== 'ai-adoption').slice(0, 3);

  return (
    <>
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-primary-600" />
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
            Why AI Matters for SMEs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-accent-400">
              <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-3">
                Boost Productivity
              </h3>
              <p className="text-neutral-700">
                Automate repetitive tasks, reduce manual work, and free your team to focus on high-value activities that drive growth.
              </p>
            </Card>
            <Card className="border-l-4 border-accent-400">
              <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-3">
                Enhance Decision-Making
              </h3>
              <p className="text-neutral-700">
                Leverage AI-powered analytics to uncover insights from your data, enabling faster and more informed business decisions.
              </p>
            </Card>
            <Card className="border-l-4 border-accent-400">
              <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-3">
                Reduce Costs
              </h3>
              <p className="text-neutral-700">
                Streamline operations, minimize errors, and optimize resource allocation with intelligent automation and workflow improvements.
              </p>
            </Card>
            <Card className="border-l-4 border-accent-400">
              <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-3">
                Stay Competitive
              </h3>
              <p className="text-neutral-700">
                Don't fall behind. Adopting AI now gives you the competitive edge needed to win in your industry and scale faster than competitors.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
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

      <section className="section-padding bg-neutral-50">
        <Container size="narrow">
          <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-8 text-center">
            What You'll Get
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {service.deliverables?.map((deliverable, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <span className="text-neutral-700 text-lg">{deliverable}</span>
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
              Ready to Unlock AI's Potential for Your Business?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Let's explore how AI can transform your operations, boost productivity, and give you the competitive advantage you need to grow.
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
