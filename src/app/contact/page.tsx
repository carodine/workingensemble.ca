import type { Metadata } from 'next';
import { Mail, MapPin } from 'lucide-react';
import Container from '@/components/shared/Container';
import Card from '@/components/shared/Card';
import ContactForm from '@/components/forms/ContactForm';
import FadeIn from '@/components/shared/FadeIn';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Working Ensemble. We\'re here to help with your technology needs.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-neutral-600">
              Have questions about our services? Ready to discuss your technology needs? We're here to help.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <FadeIn delay={0} direction="up" fullWidth>
                <Card>
                  <h2 className="font-heading font-semibold text-2xl text-neutral-900 mb-6">
                    Send Us a Message
                  </h2>
                  <ContactForm />
                </Card>
              </FadeIn>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <FadeIn delay={0.1} direction="up" fullWidth>
                <Card>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Email</h3>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      {SITE_CONFIG.email}
                    </a>
                    <p className="text-sm text-neutral-600 mt-2">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>
              </Card>
              </FadeIn>

              <FadeIn delay={0.2} direction="up" fullWidth>
                <Card>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Location</h3>
                    <p className="text-neutral-700">
                      {SITE_CONFIG.address.street}<br />
                      {SITE_CONFIG.address.city}, {SITE_CONFIG.address.province}<br />
                      {SITE_CONFIG.address.country}
                    </p>
                  </div>
                </div>
              </Card>
              </FadeIn>

              <FadeIn delay={0.3} direction="up" fullWidth>
                <Card className="bg-primary-50 border-primary-200">
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Prefer to Book a Call?
                </h3>
                <p className="text-sm text-neutral-700 mb-4">
                  Schedule a free 30-minute tech review to discuss your needs.
                </p>
                <a
                  href="/book-consultation"
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center"
                >
                  Book Your Free Tech Review
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
                </a>
              </Card>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
