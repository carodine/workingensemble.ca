import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import Container from '@/components/shared/Container';
import Card from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { getCaseStudyBySlug, caseStudies } from '@/data/case-studies';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: study.title,
    description: study.excerpt,
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      {/* Back Link */}
      <section className="py-8 bg-neutral-50">
        <Container>
          <Link
            href="/case-studies"
            className="inline-flex items-center text-neutral-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
        </Container>
      </section>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <Container size="narrow">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
              {study.industry}
            </span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
            {study.title}
          </h1>
          <p className="text-xl text-neutral-600">
            {study.client}
          </p>
        </Container>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <Container size="narrow">
          <Card className="bg-neutral-50">
            <p className="text-lg text-neutral-700 leading-relaxed">
              {study.excerpt}
            </p>
          </Card>
        </Container>
      </section>

      {/* The Challenge */}
      <section className="section-padding bg-neutral-50">
        <Container size="narrow">
          <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-6">
            The Challenge
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            {study.challenge}
          </p>
        </Container>
      </section>

      {/* Our Solution */}
      <section className="section-padding bg-white">
        <Container size="narrow">
          <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-6">
            Our Solution
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            {study.solution}
          </p>

          <h3 className="font-heading font-semibold text-xl text-neutral-900 mb-4">
            Services Provided:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {study.services.map((service, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span className="text-neutral-700">{service}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Results */}
      <section className="section-padding bg-primary-50">
        <Container size="narrow">
          <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-6">
            The Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {study.results.map((result, idx) => (
              <Card key={idx} className="bg-white">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{result}</span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonial */}
      {study.testimonial && (
        <section className="section-padding bg-white">
          <Container size="narrow">
            <Card className="bg-gradient-to-br from-primary-50 to-accent-50 border-l-4 border-primary-600">
              <div className="max-w-3xl">
                <p className="text-xl text-neutral-800 italic mb-6 leading-relaxed">
                  "{study.testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-lg">
                    {study.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">
                      {study.testimonial.author}
                    </p>
                    <p className="text-sm text-neutral-600">
                      {study.testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Ready for Similar Results?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Let's discuss how we can help transform your technology and operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/book-consultation" variant="secondary" size="lg">
                Book Free Tech Review
              </Button>
              <Button href="/services" variant="outline" size="lg" className="!text-white !border-white hover:!bg-white/10">
                View Our Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
