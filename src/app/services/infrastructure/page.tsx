import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import AnimatedInfrastructure from '@/components/icons/AnimatedInfrastructure';
import { getServiceBySlug, services } from '@/data/services';

const service = getServiceBySlug('infrastructure')!;

export const metadata: Metadata = {
  title: service.title,
  description: service.shortDescription,
};

const challenges = [
  {
    title: 'Frequent downtime and unreliable systems',
    description: 'We build redundant, monitored infrastructure that stays up when you need it most.',
  },
  {
    title: 'Outgrowing current technology',
    description: 'We design scalable systems that grow with your business without painful migrations.',
  },
  {
    title: 'Security vulnerabilities and compliance gaps',
    description: 'We implement layered security and help you meet regulatory requirements.',
  },
  {
    title: 'No clear disaster recovery plan',
    description: 'We set up automated backups and recovery procedures to protect your data.',
  },
];

export default function InfrastructurePage() {
  const relatedServices = services.filter(s => s.slug !== 'infrastructure').slice(0, 3);

  return (
    <ServicePageTemplate
      service={service}
      iconElement={<AnimatedInfrastructure />}
      relatedServices={relatedServices}
      challenges={challenges}
      ctaTitle="Ready to Build Reliable Infrastructure?"
      ctaDescription="Let's discuss your infrastructure needs and create a plan that supports your growth."
    />
  );
}
