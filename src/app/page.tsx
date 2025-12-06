import HeroSection from '@/components/home/HeroSection';
import ValueProposition from '@/components/home/ValueProposition';
import ServicesOverview from '@/components/home/ServicesOverview';
import TrustSignals from '@/components/home/TrustSignals';
import FoundersSection from '@/components/home/FoundersSection';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueProposition />
      <ServicesOverview />
      <TrustSignals />
      <FoundersSection />
      <CTASection />
    </>
  );
}
