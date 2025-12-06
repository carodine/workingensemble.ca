import type { Metadata } from 'next';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import FadeIn from '@/components/shared/FadeIn';
import AnimatedPartnership from '@/components/icons/AnimatedPartnership';
import AnimatedProactive from '@/components/icons/AnimatedProactive';
import AnimatedAligned from '@/components/icons/AnimatedAligned';
import AnimatedLongTerm from '@/components/icons/AnimatedLongTerm';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Working Ensemble\'s journey from coworking space to full-service technology partner for SMEs. Meet our team of experienced technology professionals.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <Container size="narrow">
          <div className="text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-neutral-600">
              From coworking space to technology strategy partner — a 10-year journey
            </p>
          </div>
        </Container>
      </section>

      {/* The Pivot Story */}
      <section className="section-padding bg-white">
        <Container size="narrow">
          <FadeIn delay={0} direction="up">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Working Ensemble started 10 years ago with a different mission: providing parent-friendly coworking space with childcare. Founded by Diane, it served Toronto's entrepreneurial parents who needed flexible work arrangements and a supportive community.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                For years, we built a thriving space where freelancers, consultants, and small business owners could work productively while their children were cared for just steps away. It was innovative, it was needed, and it worked.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Then came 2020. The pandemic changed everything. Like many businesses, we faced unprecedented challenges. Coworking spaces emptied. In-person childcare became complicated. We had to make a choice: close down or pivot.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                We chose to pivot — and lean into what we do best: <strong className="text-accent-600">technology</strong>.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Throughout the coworking years, we'd been helping our members with technology challenges. Website hosting issues. Google Workspace setup. Database migrations. Workflow automation. It started as friendly assistance, then became side consulting work, and eventually revealed our true calling.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Both founders — Diane and Christophe — have deep roots in software development, systems architecture, and technology consulting. Diane holds a Master's in Computer Science and worked at Thales in aerospace and defense technology. Christophe is a PMP-certified professional with a Master's in CS and extensive experience scaling technology systems across industries.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                <strong className="text-accent-700">Combined, we bring 40 years of technology expertise to the table.</strong>
              </p>
              <p className="text-lg text-neutral-900 leading-relaxed font-semibold mb-6 bg-accent-50 p-6 rounded-lg border-l-4 border-accent-500">
                Today, Working Ensemble is your outsourced tech team. We help small and mid-sized businesses stabilize their technology infrastructure, streamline operations through automation, and make strategic decisions that align with their growth goals.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                The name "Working Ensemble" still fits — we work together with our clients as a unified team, bringing harmony to their technology chaos.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Meet the Team */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-neutral-600">
              40 years of combined experience in technology strategy and implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Diane */}
            <FadeIn delay={0} direction="up" fullWidth>
              <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mb-6 flex items-center justify-center mx-auto">
                <span className="text-5xl font-heading font-bold text-white">D</span>
              </div>
              <div className="text-center mb-6">
                <h3 className="font-heading font-semibold text-2xl text-neutral-900 mb-2">
                  Diane
                </h3>
                <p className="text-primary-600 font-medium text-lg mb-4">CEO & Founder</p>
              </div>
              <div className="space-y-4 text-neutral-700">
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Education</h4>
                  <p>Master's in Computer Science</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Background</h4>
                  <p>Software and web development specialist with experience at Thales, working on aerospace and defense technology systems</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Expertise</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Web application development</li>
                    <li>Workflow automation</li>
                    <li>Strategic technology planning</li>
                    <li>CMS implementation (WordPress, Ghost)</li>
                  </ul>
                </div>
              </div>
              </div>
            </FadeIn>

            {/* Christophe */}
            <FadeIn delay={0.15} direction="up" fullWidth>
              <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-32 h-32 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full mb-6 flex items-center justify-center mx-auto">
                <span className="text-5xl font-heading font-bold text-white">C</span>
              </div>
              <div className="text-center mb-6">
                <h3 className="font-heading font-semibold text-2xl text-neutral-900 mb-2">
                  Christophe
                </h3>
                <p className="text-primary-600 font-medium text-lg mb-4">Strategic Advisor</p>
              </div>
              <div className="space-y-4 text-neutral-700">
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Education & Certifications</h4>
                  <p>Master's in Computer Science, PMP (Project Management Professional)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Background</h4>
                  <p>Technology systems architect with extensive experience scaling infrastructure for growing businesses</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Expertise</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>IT infrastructure design</li>
                    <li>Cloud migration & architecture</li>
                    <li>Vendor selection & management</li>
                    <li>Technology project management</li>
                  </ul>
                </div>
              </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-white">
        <Container size="narrow">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-8 text-center">
            Our Approach
          </h2>
          <div className="space-y-6">
            <FadeIn delay={0} direction="up">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 text-primary-600">
                  <AnimatedPartnership />
                </div>
                <div className="flex-1 border-l-4 border-primary-500 pl-6">
                  <h3 className="font-heading font-semibold text-xl text-neutral-900 mb-2">
                    Partnership, Not Vendor Relationship
                  </h3>
                  <p className="text-neutral-700">
                    We're not just a service provider — we're your technology partner. We care about your success and work alongside you as an extension of your team.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} direction="up">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 text-primary-600">
                  <AnimatedProactive />
                </div>
                <div className="flex-1 border-l-4 border-primary-500 pl-6">
                  <h3 className="font-heading font-semibold text-xl text-neutral-900 mb-2">
                    Proactive, Not Reactive
                  </h3>
                  <p className="text-neutral-700">
                    We don't wait for things to break. We monitor, plan, and prevent issues before they impact your business.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="up">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 text-primary-600">
                  <AnimatedAligned />
                </div>
                <div className="flex-1 border-l-4 border-primary-500 pl-6">
                  <h3 className="font-heading font-semibold text-xl text-neutral-900 mb-2">
                    Strategy-Aligned Technology
                  </h3>
                  <p className="text-neutral-700">
                    Technology should enable your business goals, not constrain them. Every decision we make is aligned with where you want to go.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3} direction="up">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 text-primary-600">
                  <AnimatedLongTerm />
                </div>
                <div className="flex-1 border-l-4 border-primary-500 pl-6">
                  <h3 className="font-heading font-semibold text-xl text-neutral-900 mb-2">
                    Long-Term Thinking
                  </h3>
                  <p className="text-neutral-700">
                    We build for sustainable growth. No quick fixes or band-aids — just solid, scalable solutions that stand the test of time.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Ready to bring strategic technology expertise to your business? Start with a free 30-minute tech review.
            </p>
            <Button href="/book-consultation" variant="secondary" size="lg">
              Book Your Free Tech Review
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
