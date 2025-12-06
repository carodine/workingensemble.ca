import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/shared/Container';
import { SITE_CONFIG, NAV_LINKS, SERVICES_NAV } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt={SITE_CONFIG.name}
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-neutral-400 mb-4">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-sm text-neutral-400">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {SERVICES_NAV.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-sm hover:text-primary-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="text-neutral-400">
                {SITE_CONFIG.address.street}<br />
                {SITE_CONFIG.address.city}, {SITE_CONFIG.address.province}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 py-6 text-center text-sm text-neutral-400">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
