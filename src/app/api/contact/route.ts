import { NextResponse } from 'next/server';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

// Initialize Mailgun
const mailgun = new Mailgun(formData);
const mg = process.env.MAILGUN_API_KEY && process.env.MAILGUN_DOMAIN
  ? mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY,
    })
  : null;

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

    // Check if Mailgun is configured
    if (!mg || !process.env.MAILGUN_DOMAIN) {
      console.error('Mailgun not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact hello@workingensemble.ca directly.' },
        { status: 500 }
      );
    }

    // Format services list
    const servicesList = services && services.length > 0
      ? services.join(', ')
      : 'Not specified';

    // Send email to Working Ensemble
    await mg.messages.create(process.env.MAILGUN_DOMAIN!, {
      from: 'Working Ensemble Website <noreply@workingensemble.ca>',
      to: ['hello@workingensemble.ca'],
      'h:Reply-To': email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Services of Interest:</strong> ${servicesList}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Send confirmation email to user
    await mg.messages.create(process.env.MAILGUN_DOMAIN!, {
      from: 'Working Ensemble <hello@workingensemble.ca>',
      to: [email],
      subject: 'Thank you for contacting Working Ensemble',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>We received your message and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to learn more about our services at <a href="https://workingensemble.ca">workingensemble.ca</a>.</p>
        <p>Best regards,<br>The Working Ensemble Team</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
