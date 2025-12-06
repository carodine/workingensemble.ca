import { NextResponse } from 'next/server';

// Configure Edge Runtime for Cloudflare Pages
export const runtime = 'edge';

// Helper function to send email via Mailgun REST API
async function sendMailgunEmail(
  to: string[],
  from: string,
  subject: string,
  html: string,
  replyTo?: string
) {
  if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
    throw new Error('Mailgun API key or domain not configured');
  }

  const formData = new FormData();
  formData.append('from', from);
  to.forEach(email => formData.append('to', email));
  formData.append('subject', subject);
  formData.append('html', html);
  if (replyTo) {
    formData.append('h:Reply-To', replyTo);
  }

  const auth = btoa(`api:${process.env.MAILGUN_API_KEY}`);

  const response = await fetch(
    `https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN}/messages`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${auth}`,
      },
      body: formData,
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Mailgun API error: ${response.status} - ${error}`);
  }

  return response.json();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, services, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format services list
    const servicesList = services && services.length > 0
      ? services.join(', ')
      : 'Not specified';

    // Send email to Working Ensemble
    await sendMailgunEmail(
      ['hello@workingensemble.ca'],
      'Working Ensemble Website <noreply@workingensemble.ca>',
      `New Contact Form Submission from ${name}`,
      `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Services of Interest:</strong> ${servicesList}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      email
    );

    // Send confirmation email to user
    await sendMailgunEmail(
      [email],
      'Working Ensemble <hello@workingensemble.ca>',
      'Thank you for contacting Working Ensemble',
      `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>We received your message and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to learn more about our services at <a href="https://workingensemble.ca">workingensemble.ca</a>.</p>
        <p>Best regards,<br>The Working Ensemble Team</p>
      `
    );

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('Contact form error:', errorMessage);
    console.error('Full error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
