'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt={SITE_CONFIG.name}
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-700 hover:text-primary-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Button href="/book-consultation" variant="secondary" size="md">
              Book Free Tech Review
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200">
          <Container>
            <nav className="flex flex-col space-y-4 py-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-neutral-700 hover:text-primary-600 font-medium transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                href="/book-consultation"
                variant="secondary"
                size="md"
                className="w-full mt-4"
              >
                Book Free Tech Review
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
