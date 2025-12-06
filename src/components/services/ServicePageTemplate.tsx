'use client';

import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import Card from '@/components/shared/Card';
import FadeIn from '@/components/shared/FadeIn';
import type { Service } from '@/data/services';
import type { ReactNode } from 'react';

interface ServicePageTemplateProps {
  service: Service;
  iconElement: ReactNode;
  relatedServices: Service[];
  challenges: Array<{
    title: string;
    description: string;
  }>;
  ctaTitle: string;
  ctaDescription: string;
}

export default function ServicePageTemplate({
  service,
  iconElement,
  relatedServices,
  challenges,
  ctaTitle,
  ctaDescription,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-6">
              {iconElement}
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

      {/* Pain Points Addressed */}
      <section className="section-padding bg-white">
        <Container size="narrow">
          <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-6">
            Challenges We Solve
          </h2>
          <ul className="space-y-4">
            {challenges.map((challenge, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} direction="up">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-neutral-900">{challenge.title}</span>
                    <p className="text-neutral-600">{challenge.description}</p>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ul>
        </Container>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-neutral-50">
        <Container size="narrow">
          <FadeIn delay={0} direction="up">
            <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-6">
              What We Do
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-neutral-700 mb-6">
                {service.detailedDescription}
              </p>
              <h3 className="font-heading font-semibold text-xl text-neutral-900 mb-4">Services Include:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* How We Help */}
      <section className="section-padding bg-white">
        <Container size="narrow">
          <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-8 text-center">
            Our Process
          </h2>
          <div className="space-y-6">
            {service.process?.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} direction="up">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-neutral-700 text-lg">{step}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Deliverables */}
      <section className="section-padding bg-neutral-50">
        <Container size="narrow">
          <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-6">
            What You Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.deliverables?.map((deliverable, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} direction="up" fullWidth>
                <Card className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{deliverable}</span>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-white">
        <Container>
          <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-8 text-center">
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((relatedService, idx) => (
              <FadeIn key={relatedService.slug} delay={idx * 0.1} fullWidth>
                <Link href={`/services/${relatedService.slug}`}>
                  <Card hover className="h-full text-center">
                    <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">
                      {relatedService.title}
                    </h3>
                    <p className="text-sm text-neutral-600">
                      {relatedService.shortDescription}
                    </p>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              {ctaTitle}
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              {ctaDescription}
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
