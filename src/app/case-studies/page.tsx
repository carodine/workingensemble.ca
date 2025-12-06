import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/shared/Container';
import Card from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import FadeIn from '@/components/shared/FadeIn';
import { caseStudies } from '@/data/case-studies';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'See how Working Ensemble has helped businesses scale their technology, improve operations, and drive growth.',
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-neutral-600">
              Real results for real businesses. See how we've helped organizations transform their technology and operations.
            </p>
          </div>
        </Container>
      </section>

      {/* Case Studies List */}
      <section className="section-padding bg-white">
        <Container>
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <FadeIn key={study.slug} delay={index * 0.2} fullWidth>
                <Card hover className="overflow-hidden">
                <div className="md:flex gap-8">
                  <div className="flex-1">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-3">
                        {study.industry}
                      </span>
                      <h2 className="font-heading font-semibold text-2xl md:text-3xl text-neutral-900 mb-3">
                        {study.title}
                      </h2>
                      <p className="text-neutral-600 mb-4">
                        {study.excerpt}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-semibold text-neutral-900 mb-2">Key Results:</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {study.results.slice(0, 4).map((result, idx) => (
                          <li key={idx} className="text-sm text-neutral-700 flex items-start">
                            <span className="text-primary-600 mr-2">✓</span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {study.testimonial && (
                    <div className="md:w-80 bg-neutral-50 p-6 rounded-lg mt-6 md:mt-0">
                      <p className="text-neutral-700 italic mb-4">
                        "{study.testimonial.quote}"
                      </p>
                      <div>
                        <p className="font-semibold text-neutral-900">
                          {study.testimonial.author}
                        </p>
                        <p className="text-sm text-neutral-600">
                          {study.testimonial.role}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Ready to Transform Your Technology?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
    </>
  );
}
