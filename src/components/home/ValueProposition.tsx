import { Award, Layers, Handshake } from 'lucide-react';
import Container from '@/components/shared/Container';
import FadeIn from '@/components/shared/FadeIn';

const values = [
  {
    icon: Award,
    title: '40 Years Combined Experience',
    description: 'Deep expertise across multiple industries',
  },
  {
    icon: Layers,
    title: 'Full-Stack Technology Solutions',
    description: 'From infrastructure to custom applications',
  },
  {
    icon: Handshake,
    title: 'Strategic Partnership Approach',
    description: 'We grow with your business',
  },
];

export default function ValueProposition() {
  return (
    <section className="py-12 bg-white border-y border-neutral-200">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <FadeIn key={index} delay={index * 0.15} direction="up">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-accent-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-neutral-900" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
