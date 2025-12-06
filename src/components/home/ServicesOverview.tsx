import Link from 'next/link';
import Container from '@/components/shared/Container';
import Card from '@/components/shared/Card';
import FadeIn from '@/components/shared/FadeIn';
import AnimatedInfrastructure from '@/components/icons/AnimatedInfrastructure';
import AnimatedWebApps from '@/components/icons/AnimatedWebApps';
import AnimatedWorkflow from '@/components/icons/AnimatedWorkflow';
import AnimatedStrategy from '@/components/icons/AnimatedStrategy';
import AnimatedSecurity from '@/components/icons/AnimatedSecurity';
import AnimatedAI from '@/components/icons/AnimatedAI';
import { services } from '@/data/services';

const animatedIconMap: Record<string, React.ComponentType> = {
  Server: AnimatedInfrastructure,
  Globe: AnimatedWebApps,
  Zap: AnimatedWorkflow,
  TrendingUp: AnimatedStrategy,
  Shield: AnimatedSecurity,
  Brain: AnimatedAI,
};

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-neutral-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-4">
            How We Help
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Comprehensive technology services designed to solve your biggest business challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const AnimatedIcon = animatedIconMap[service.icon];
            return (
              <FadeIn key={service.slug} delay={index * 0.1} fullWidth>
                <Link href={`/services/${service.slug}`}>
                  <Card hover className="h-full border-l-4 border-accent-400">
                    <div className="mb-4 text-primary-600">
                      <AnimatedIcon />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-neutral-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 mb-4">
                      {service.shortDescription}
                    </p>
                    <span className="text-primary-600 font-medium text-sm inline-flex items-center hover:text-accent-600 transition-colors">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-1"
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
                  </Card>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
