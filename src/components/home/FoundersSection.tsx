import Link from 'next/link';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';

export default function FoundersSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Story */}
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-6">
              Our Story
            </h2>
            <div className="text-left space-y-4 text-neutral-700">
              <p className="text-lg">
                Working Ensemble started 10 years ago with a different mission: providing parent-friendly coworking space with childcare. Founded by Diane, it served Toronto's entrepreneurial parents who needed flexible work arrangements.
              </p>
              <p className="text-lg">
                Then came 2020. Like many businesses, we faced unprecedented challenges. But we also saw an opportunity to lean into what we do best: <strong>technology</strong>.
              </p>
              <p className="text-lg">
                Both founders — Diane and Christophe — have deep roots in software development, systems architecture, and technology consulting. What began as side consultation work became our primary focus. We pivoted to serve SMEs who needed strategic technology guidance, not just another IT support vendor.
              </p>
              <p className="text-lg font-semibold text-primary-700">
                Today, Working Ensemble is your outsourced tech team — bringing 40 years of combined experience to help small and mid-sized businesses stabilize, scale, and strategically evolve their technology.
              </p>
            </div>
          </div>

          {/* Founders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Diane */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-24 h-24 bg-primary-100 rounded-full mb-4 flex items-center justify-center">
                <span className="text-3xl font-heading font-bold text-primary-600">D</span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-neutral-900 mb-2">
                Diane
              </h3>
              <p className="text-primary-600 font-medium mb-3">CEO & Founder</p>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• Master's in Computer Science</li>
                <li>• Software/Web development background</li>
                <li>• Previously at Thales (aerospace/defense)</li>
                <li>• Specializes in web applications, workflow automation, strategic planning</li>
              </ul>
            </div>

            {/* Christophe */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-24 h-24 bg-primary-100 rounded-full mb-4 flex items-center justify-center">
                <span className="text-3xl font-heading font-bold text-primary-600">C</span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-neutral-900 mb-2">
                Christophe
              </h3>
              <p className="text-primary-600 font-medium mb-3">Strategic Advisor</p>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• Master's in Computer Science</li>
                <li>• PMP (Project Management Professional)</li>
                <li>• Scaling expertise</li>
                <li>• Specializes in infrastructure, cloud migration, vendor selection</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Button href="/about" variant="outline">
              Read Full Story
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
