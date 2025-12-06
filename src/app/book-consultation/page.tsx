import type { Metadata } from 'next';
import Container from '@/components/shared/Container';
import Card from '@/components/shared/Card';
import ContactForm from '@/components/forms/ContactForm';
import FadeIn from '@/components/shared/FadeIn';
import AnimatedUnderstand from '@/components/icons/AnimatedUnderstand';
import AnimatedQuickWins from '@/components/icons/AnimatedQuickWins';
import AnimatedDiscuss from '@/components/icons/AnimatedDiscuss';
import AnimatedNoPressure from '@/components/icons/AnimatedNoPressure';

export const metadata: Metadata = {
  title: 'Book Free Tech Review',
  description: 'Schedule a free 30-minute technology review with Working Ensemble. We\'ll assess your needs and show you how we can help.',
};

export default function BookConsultationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Book Your Free Tech Review
            </h1>
            <p className="text-xl text-neutral-600">
              30 minutes to discuss your technology challenges and explore how we can help you grow.
            </p>
          </div>
        </Container>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-white">
        <Container size="narrow">
          <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-8 text-center">
            What to Expect
          </h2>
          <div className="space-y-4">
            <FadeIn delay={0} direction="up">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 text-primary-600">
                  <AnimatedUnderstand />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    Understand Your Current Setup
                  </h3>
                  <p className="text-neutral-600">
                    We'll learn about your current technology infrastructure, pain points, and goals.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} direction="up">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 text-primary-600">
                  <AnimatedQuickWins />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    Identify Quick Wins
                  </h3>
                  <p className="text-neutral-600">
                    We'll spot immediate improvements that can make a difference in your operations.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="up">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 text-primary-600">
                  <AnimatedDiscuss />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    Discuss How We Can Help
                  </h3>
                  <p className="text-neutral-600">
                    We'll explain our services and how we can support your specific needs.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3} direction="up">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 text-primary-600">
                  <AnimatedNoPressure />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    No Pressure, Just Advice
                  </h3>
                  <p className="text-neutral-600">
                    This is a conversation, not a sales pitch. Walk away with actionable insights regardless of whether you hire us.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Booking Section */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-6 text-center">
              Schedule Your Tech Review
            </h2>
            <p className="text-center text-neutral-600 mb-8">
              Use the form below to book your consultation. We'll send you a calendar invite with a video call link.
            </p>

            {/* Google Calendar Embed Placeholder */}
            <FadeIn delay={0} direction="up" fullWidth>
              <Card className="bg-white">
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-10 h-10 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-neutral-900 mb-2">
                    Google Calendar Integration
                  </h3>
                  <p className="text-neutral-600 mb-6 max-w-md mx-auto">
                    To complete the booking integration, you'll need to:
                  </p>
                  <ol className="text-left max-w-md mx-auto space-y-2 mb-6 text-neutral-700">
                    <li>1. Set up Google Calendar appointment scheduling in your Google Workspace</li>
                    <li>2. Configure a 30-minute "Free Tech Review" appointment type</li>
                    <li>3. Get the embeddable calendar link</li>
                    <li>4. Replace this placeholder with the iframe embed code</li>
                  </ol>
                  <p className="text-sm text-neutral-500 italic">
                    For now, users can contact you via the form below
                  </p>
                </div>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Fallback Contact Form */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-4 text-center">
              Or Send Us a Message
            </h2>
            <p className="text-center text-neutral-600 mb-8">
              Prefer to reach out directly? Fill out the form below and we'll get back to you within 24 hours to schedule your consultation.
            </p>
            <FadeIn delay={0} direction="up" fullWidth>
              <Card>
                <ContactForm />
              </Card>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
