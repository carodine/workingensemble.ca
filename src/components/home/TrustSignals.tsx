import Container from '@/components/shared/Container';
import Card from '@/components/shared/Card';
import FadeIn from '@/components/shared/FadeIn';

// Placeholder testimonials - will be replaced with real data in Phase 2
const testimonials = [
  {
    quote: "Working Ensemble transformed our technology infrastructure, reducing administrative time by 60% and giving us real-time insights we never had before.",
    author: "School Administrator",
    role: "Private School, Toronto",
  },
  {
    quote: "Their strategic guidance helped us unify our disconnected systems across three locations. Data-driven decision making is now a reality for us.",
    author: "Operations Manager",
    role: "Hospitality Group",
  },
];

export default function TrustSignals() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-4">
            Trusted by Growing Businesses
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We deliver results that matter: reduced costs, improved efficiency, and strategic clarity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 0.2} direction="up" fullWidth>
              <Card className="border-l-4 border-primary-500">
                <p className="text-neutral-700 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-neutral-900">{testimonial.author}</p>
                  <p className="text-sm text-neutral-600">{testimonial.role}</p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center bg-primary-50 rounded-full px-6 py-3">
            <span className="text-primary-700 font-semibold">
              40 Years of Combined Experience
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
