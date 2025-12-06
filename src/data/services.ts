export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string; // Icon name from lucide-react
  features: string[];
  detailedDescription?: string;
  process?: string[];
  deliverables?: string[];
}

export const services: Service[] = [
  {
    slug: 'infrastructure',
    title: 'IT Infrastructure & Support',
    shortDescription: 'Reliable network setup, cloud services, and proactive monitoring to keep your business running smoothly.',
    icon: 'Server',
    features: [
      'Network setup (Unifi, VPNs)',
      'Device management',
      'Cloud services (Google Workspace, M365)',
      'Backup & disaster recovery',
      'Cybersecurity',
      'Proactive monitoring',
    ],
    detailedDescription: 'Stop worrying about IT downtime. We design, implement, and maintain robust IT infrastructure that scales with your business. From network configuration to cloud migrations, we ensure your technology foundation is solid and secure.',
    process: [
      'Assess current infrastructure and identify vulnerabilities',
      'Design scalable, secure solutions',
      'Implement with minimal business disruption',
      'Provide ongoing monitoring and support',
    ],
    deliverables: [
      'Comprehensive infrastructure audit',
      'Network and cloud architecture design',
      'Security hardening and compliance',
      '24/7 monitoring and alerting',
    ],
  },
  {
    slug: 'web-applications',
    title: 'Web & Application Management',
    shortDescription: 'From hosting to security to SEO, we handle everything your website needs so you can focus on your business.',
    icon: 'Globe',
    features: [
      'Hosting & maintenance',
      'Security updates',
      'SEO optimization',
      'CMS support (WordPress, Ghost)',
      'Custom internal tool development',
      'E-commerce integration',
    ],
    detailedDescription: 'Your website is your digital storefront. We keep it fast, secure, and always available. Whether you need ongoing maintenance or custom application development, we provide the expertise to make your web presence work for you.',
    process: [
      'Audit existing web assets',
      'Implement performance and security improvements',
      'Set up automated backups and monitoring',
      'Provide regular updates and optimization',
    ],
    deliverables: [
      'Optimized, secure hosting environment',
      'Regular security patches and updates',
      'Performance monitoring and reporting',
      'SEO improvements and analytics',
    ],
  },
  {
    slug: 'workflow-automation',
    title: 'Workflow & Productivity Systems',
    shortDescription: 'Streamline operations and eliminate manual work with smart automation and integrated productivity tools.',
    icon: 'Zap',
    features: [
      'G Suite/M365 optimization',
      'Project management tools (Asana, Notion)',
      'CRM setup (HubSpot)',
      'Business automation (Zapier, Make)',
      'Reporting dashboards',
      'Process documentation',
    ],
    detailedDescription: 'Manual workflows slow you down. We identify repetitive tasks, integrate your tools, and build automation that saves hours every week. From CRM setup to custom dashboards, we make your business run smoother.',
    process: [
      'Map existing workflows and identify bottlenecks',
      'Design automation and integration strategy',
      'Implement tools and custom workflows',
      'Train team and provide documentation',
    ],
    deliverables: [
      'Workflow automation implementations',
      'Integrated productivity tool stack',
      'Custom reporting dashboards',
      'Process documentation and training',
    ],
  },
  {
    slug: 'technology-strategy',
    title: 'Technology Strategy & Consulting',
    shortDescription: 'Strategic technology guidance to align your tech stack with business goals and plan for growth.',
    icon: 'TrendingUp',
    features: [
      'Tech stack review',
      'Vendor selection',
      'Cloud migration planning',
      'Fractional CTO advisory',
      'Technology roadmapping',
      'Budget planning',
    ],
    detailedDescription: 'Technology decisions shape your business. Our fractional CTO services provide executive-level strategic guidance without the full-time cost. We help you make informed decisions, plan for growth, and avoid costly mistakes.',
    process: [
      'Assess current technology landscape',
      'Align technology with business objectives',
      'Develop strategic roadmap',
      'Guide implementation and vendor selection',
    ],
    deliverables: [
      'Technology assessment report',
      'Strategic technology roadmap',
      'Vendor recommendations and RFPs',
      'Ongoing advisory and decision support',
    ],
  },
  {
    slug: 'security-compliance',
    title: 'Security, Compliance & Reliability',
    shortDescription: 'Protect your business with comprehensive security measures, compliance support, and reliability best practices.',
    icon: 'Shield',
    features: [
      'Endpoint protection',
      'Employee security training',
      'Access control policies',
      'Security audits',
      'Data protection best practices',
      'Compliance guidance',
    ],
    detailedDescription: 'Security is not optional. We implement layered security measures to protect your data, train your team, and ensure compliance with industry standards. Peace of mind through proactive security.',
    process: [
      'Conduct security assessment',
      'Implement security controls and policies',
      'Train employees on security best practices',
      'Monitor and respond to threats',
    ],
    deliverables: [
      'Security assessment and gap analysis',
      'Implemented security controls',
      'Employee training program',
      'Ongoing monitoring and incident response',
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
