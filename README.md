# Working Ensemble Website

Modern, responsive website for Working Ensemble - Technology Strategy, Management, and Outsourced Tech Team services for SMEs.

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Hosting:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file based on `.env.example`:

```bash
cp .env.example .env.local
```

4. Add your Resend API key to `.env.local`:
   - Sign up at [resend.com](https://resend.com)
   - Create an API key
   - Add to `.env.local`: `RESEND_API_KEY=re_xxxxx`

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## Project Structure

```
workingensemble.ca/
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── about/              # About page
│   │   ├── services/           # Services pages
│   │   ├── contact/            # Contact page
│   │   ├── book-consultation/  # Booking page
│   │   └── api/                # API routes
│   ├── components/             # React components
│   │   ├── layout/             # Header, Footer, Navigation
│   │   ├── home/               # Homepage sections
│   │   ├── shared/             # Reusable components
│   │   └── forms/              # Form components
│   ├── data/                   # Data files (services, etc.)
│   ├── lib/                    # Utility functions
│   └── types/                  # TypeScript types
├── public/                     # Static assets
└── tailwind.config.ts          # Tailwind configuration
```

## Features

### ✅ Completed (MVP)

- **Homepage** with 6 sections:
  - Hero with value proposition
  - Value props (40 years experience, etc.)
  - Services overview
  - Trust signals/testimonials
  - Founders & story
  - CTA section

- **About Page** with pivot story and team bios
- **Services Overview** page
- **5 Service Detail Pages:**
  - IT Infrastructure & Support
  - Web & Application Management
  - Workflow & Productivity Systems
  - Technology Strategy & Consulting
  - Security, Compliance & Reliability

- **Contact Page** with working form
- **Book Consultation Page** (placeholder for Google Calendar)
- **SEO Optimizations:**
  - Meta tags on all pages
  - Sitemap.xml
  - Robots.txt
  - Structured data ready

- **Responsive Design** for mobile, tablet, desktop

### 🔜 To Complete

1. **Google Calendar Integration:**
   - Set up appointment scheduling in Google Workspace
   - Get embed code
   - Replace placeholder in `/book-consultation` page

2. **Visual Assets:**
   - Add logo file to `/public/images/logo.svg`
   - Add founder headshots to `/public/images/team/`
   - Add service icons to `/public/images/services/`

3. **Content Refinement:**
   - Collect real client testimonials
   - Write detailed case studies
   - Gather specific metrics for case studies

4. **Email Setup:**
   - Verify domain with Resend
   - Test email delivery
   - Customize email templates if needed

5. **Deploy to Vercel:**
   - Connect GitHub repository
   - Add environment variables
   - Set up custom domain
   - Enable Vercel Analytics

## Configuration

### Email (Resend)

The contact form uses Resend for email delivery. To set up:

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain or use the development email
3. Create an API key
4. Add to `.env.local`: `RESEND_API_KEY=your_key_here`

### Google Calendar Booking

To enable appointment scheduling:

1. Go to Google Calendar in your Google Workspace
2. Set up "Appointment schedules"
3. Create a "Free Tech Review" 30-minute slot
4. Get the embeddable link
5. Replace the placeholder in `/src/app/book-consultation/page.tsx`

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables:
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_GA_ID` (optional)
5. Deploy

Vercel automatically:
- Builds on every push to main
- Provides preview URLs for PRs
- Handles SSL certificates
- Optimizes performance

## Environment Variables

Required:
- `RESEND_API_KEY` - For email functionality

Optional:
- `NEXT_PUBLIC_GA_ID` - Google Analytics tracking ID

## Contributing

This is a private project for Working Ensemble.

## License

Private - All Rights Reserved

## Support

For questions or issues, contact: hello@workingensemble.ca
