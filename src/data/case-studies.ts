export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  excerpt: string;
  challenge: string;
  solution: string;
  results: string[];
  services: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const caseStudies: CaseStudy[] = [
  // {
  //   slug: 'education-tech-scaling',
  //   title: 'Scaling Education Technology for Growing Private School',
  //   client: 'Private School, Toronto',
  //   industry: 'Education',
  //   excerpt: 'Transformed legacy systems into a modern, integrated technology stack that reduced administrative time by 60%.',
  //   challenge: 'The school was operating with disconnected legacy systems, manual data entry across multiple platforms, and no centralized way to track enrollment, communications, or reporting. Administrative staff spent countless hours on repetitive tasks, and leadership lacked real-time insights into school operations.',
  //   solution: 'We migrated the school to Google Workspace for Education, implemented a centralized CRM system, created automated reporting dashboards, and integrated their student information system with communication tools. Custom workflows eliminated manual data entry and enabled real-time tracking of key metrics.',
  //   results: [
  //     '60% reduction in administrative time on routine tasks',
  //     'Real-time enrollment tracking and forecasting',
  //     'Automated parent communication workflows',
  //     'Centralized data accessible to authorized staff',
  //     'Custom dashboards for leadership decision-making',
  //     'Improved data accuracy and reduced errors',
  //   ],
  //   services: [
  //     'Cloud migration (Google Workspace)',
  //     'CRM implementation',
  //     'Workflow automation',
  //     'Custom reporting dashboards',
  //     'IT infrastructure optimization',
  //   ],
  //   testimonial: {
  //     quote: 'Working Ensemble transformed our technology infrastructure. We went from drowning in manual processes to having real-time insights that help us make better decisions. The time savings alone have been incredible.',
  //     author: 'School Administrator',
  //     role: 'Private School, Toronto',
  //   },
  // },
  {
    slug: "private-school-network-modernization",
    title:
      "Modernizing Network & Collaboration Infrastructure for a Private School",
    client: "Private School, Toronto",
    industry: "Education",
    excerpt:
      "Delivered secure, high-performance connectivity and standardized collaboration tools across two campuses, improving reliability, security, and day-to-day operations.",
    challenge:
      "The school operated across two campuses with unreliable Wi-Fi coverage, multiple low-speed internet connections, and inconsistent network setups throughout their buildings. Staff and students experienced frequent connectivity issues, while IT systems lacked proper security controls and centralized administration. The organization also relied on a patchwork of tools for communication, scheduling, and collaboration, increasing costs and operational friction.",
    solution:
      "We redesigned the school’s network infrastructure using UniFi enterprise-grade equipment, deploying UDM Pro gateways, managed switches, and access points across both campuses. Internet services were consolidated to a single high-speed fiber connection per campus, replacing multiple slow and redundant links. We migrated the school’s website to a more reliable cloud hosting provider and assumed ownership of WordPress administration, including updates and ongoing maintenance. In parallel, we took over Google Workspace for Education administration, standardized collaboration on Google Meet and Google Calendar, and rolled out Google Workspace tools across the organization to replace fragmented third-party services.",
    results: [
      "Reliable, high-performance Wi-Fi coverage across both campuses",
      "Improved network security with proper segmentation and access controls",
      "Reduced IT and SaaS costs by consolidating internet providers and collaboration tools",
      "Simplified operations with a standardized Google Workspace environment",
      "More reliable website performance and reduced downtime",
      "Centralized administration and ongoing system maintenance",
    ],
    services: [
      "Network design and deployment (UniFi)",
      "Enterprise Wi-Fi and wired infrastructure",
      "ISP consolidation and fiber internet migration",
      "Google Workspace for Education administration",
      "Website migration and WordPress management",
      "IT security and access control configuration",
    ],
    testimonial: {
      quote:
        "Working Ensemble stabilized our infrastructure across both campuses. Connectivity issues disappeared, our systems are more secure, and our staff now works within a single, reliable set of tools. The improvements have had an immediate impact on daily operations.",
      author: "School Administrator",
      role: "Private School, Toronto",
    },
  },
  {
    slug: "hospitality-data-operations",
    title: "Data-Driven Operations for Multi-Location Hospitality Group",
    client: "Hospitality Group",
    industry: "Hospitality",
    excerpt:
      "Unified disconnected systems across 3 locations to enable data-driven decision making and streamline operations.",
    challenge:
      "A hospitality group operating three locations was struggling with disconnected POS systems, separate inventory management, and manual booking processes. Each location operated in isolation, making it impossible to get a holistic view of operations, optimize inventory across locations, or make data-driven menu and staffing decisions.",
    solution:
      "We integrated their POS, inventory, and booking systems into a unified platform, created automated workflows for cross-location inventory management, built custom reporting dashboards, and implemented cloud-based infrastructure for real-time data access from any location.",
    results: [
      "Unified data view across all 3 locations",
      "40% faster inventory management",
      "Data-driven menu optimization based on sales trends",
      "Automated low-stock alerts across locations",
      "Real-time revenue and performance dashboards",
      "Reduced food waste through better inventory tracking",
    ],
    services: [
      "System integration",
      "Workflow automation",
      "Custom reporting and analytics",
      "Cloud infrastructure setup",
      "Business process optimization",
    ],
    testimonial: {
      quote:
        "We finally have visibility into what's happening across all our locations. The automated inventory alerts alone have saved us thousands in waste, and the reporting helps us make smarter decisions about our menu and staffing.",
      author: "Operations Manager",
      role: "Hospitality Group",
    },
  },
  {
    slug: "saas-sales-deal-calculator",
    title: "Automated Deal Calculator & Approval Workflow for SaaS Sales Team",
    client: "SaaS Company, Toronto",
    industry: "Technology / SaaS",
    excerpt:
      "Developed a custom Google Apps Script Web App to validate deal financials, automate approvals, and generate pre-quotes, ensuring only healthy deals reach the CRM.",
    challenge:
      "The sales team struggled with complex manual calculations for deal profitability, inconsistent pricing logic, and a lack of guardrails before entering data into the CRM. This led to errors, unprofitable deals being quoted, and significant time wasted on manual reviews.",
    solution:
      "We built a custom Google Script Web App that acts as a pre-sales simulator. It calculates financial health metrics based on one-time and recurring revenue against variable customer acquisition costs (CAC) derived from lead source and type. The tool provides a Red/Yellow/Green deal health status, routes for manual approval, and generates a PDF pre-quote.",
    results: [
      "Improved overall deal quality and margins",
      "Reduced time-to-quote by automating calculations",
      "Ensured only pre-approved quotes enter the CRM",
      "Standardized pricing logic across the sales team",
      "Streamlined approval process for complex deals",
    ],
    services: [
      "Custom Web App Development (Google Apps Script)",
      "Workflow Automation",
      "Financial Modeling",
      "PDF Generation Automation",
      "Sales Operations Optimization",
    ],
    testimonial: {
      quote:
        "This tool has been a game-changer for our sales team. We no longer worry about the math behind the deals, and the automatic PDF generation saves us hours every week. The quality of deals entering our pipeline has never been higher.",
      author: "VP of Sales",
      role: "SaaS Company, Toronto",
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
