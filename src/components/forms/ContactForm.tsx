'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Button from '@/components/shared/Button';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().optional(),
  phone: z.string().optional(),
  services: z.array(z.string()).optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const serviceOptions = [
  'IT Infrastructure & Support',
  'Web & Application Management',
  'Workflow & Productivity Systems',
  'Technology Strategy & Consulting',
  'Security, Compliance & Reliability',
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
          Name *
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
          Email *
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
          Company
        </label>
        <input
          {...register('company')}
          type="text"
          id="company"
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="Your company name"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
          Phone
        </label>
        <input
          {...register('phone')}
          type="tel"
          id="phone"
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="(555) 123-4567"
        />
      </div>

      {/* Services Interest */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">
          Services of Interest
        </label>
        <div className="space-y-2">
          {serviceOptions.map((service) => (
            <label key={service} className="flex items-center">
              <input
                {...register('services')}
                type="checkbox"
                value={service}
                className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-neutral-700">{service}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
          Message *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="Tell us about your technology needs..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          onClick={undefined}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800">
            Thank you for your message! We'll get back to you within 24 hours.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800">
            Sorry, there was an error sending your message. Please try again or email us directly at hello@workingensemble.ca.
          </p>
        </div>
      )}
    </form>
  );
}
