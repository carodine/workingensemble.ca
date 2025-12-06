import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import Card from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import FadeIn from '@/components/shared/FadeIn';
import AnimatedInfrastructure from '@/components/icons/AnimatedInfrastructure';
import AnimatedWebApps from '@/components/icons/AnimatedWebApps';
import AnimatedWorkflow from '@/components/icons/AnimatedWorkflow';
import AnimatedStrategy from '@/components/icons/AnimatedStrategy';
import AnimatedSecurity from '@/components/icons/AnimatedSecurity';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive technology services for growing SMEs: IT infrastructure, web management, workflow automation, technology strategy, and security.',
};

const animatedIconMap: Record<string, React.ComponentType> = {
  Server: AnimatedInfrastructure,
  Globe: AnimatedWebApps,
  Zap: AnimatedWorkflow,
  TrendingUp: AnimatedStrategy,
  Shield: AnimatedSecurity,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Technology Services That Scale With Your Business
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              From infrastructure to strategy, we provide the complete technology support your growing business needs.
            </p>
            <Button href="/book-consultation" variant="secondary" size="lg">
              Book Free Tech Review
            </Button>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const AnimatedIcon = animatedIconMap[service.icon];
              return (
                <FadeIn key={service.slug} delay={index * 0.1} fullWidth>
                  <Link href={`/services/${service.slug}`}>
                    <Card hover className="h-full border-l-4 border-accent-400">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-20 text-primary-600">
                        <AnimatedIcon />
                      </div>
                      <div className="flex-1">
                        <h2 className="font-heading font-semibold text-2xl text-neutral-900 mb-3">
                          {service.title}
                        </h2>
                        <p className="text-neutral-600 mb-4">
                          {service.shortDescription}
                        </p>
                        <div className="mb-4">
                          <h3 className="font-semibold text-sm text-neutral-900 mb-2">Key Services:</h3>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <li key={idx} className="text-sm text-neutral-700 flex items-start">
                                <span className="text-primary-600 mr-2">•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <span className="text-primary-600 font-medium text-sm inline-flex items-center group">
                          Learn More
                          <svg
                            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Card>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-8 text-center">
              Why Choose Working Ensemble?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FadeIn delay={0} fullWidth>
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-accent-400">
                  <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">
                    Full-Stack Expertise
                  </h3>
                  <p className="text-neutral-700 text-sm">
                    We handle everything from servers to strategy. No need to coordinate multiple vendors.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.1} fullWidth>
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-accent-400">
                  <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">
                    SME-Focused
                  </h3>
                  <p className="text-neutral-700 text-sm">
                    We understand the unique challenges of growing businesses. No enterprise bloat, just practical solutions.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2} fullWidth>
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-accent-400">
                  <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">
                    40 Years Combined Experience
                  </h3>
                  <p className="text-neutral-700 text-sm">
                    Our founders bring deep expertise across multiple industries and technologies.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3} fullWidth>
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-accent-400">
                  <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">
                    Strategic Partnership
                  </h3>
                  <p className="text-neutral-700 text-sm">
                    We're not just fixing problems — we're helping you grow strategically through technology.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Book a free 30-minute tech review. We'll assess your needs and show you how we can help.
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
