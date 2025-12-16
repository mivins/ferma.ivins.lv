# Waitlist Landing Page

A modern, responsive waitlist landing page built with Next.js, TypeScript, and Tailwind CSS. Perfect for launching your product and collecting early signups.

## Features

- Modern, responsive design
- Waitlist signup form with client-side validation
- Multiple pages (Home, Features, About)
- Beautiful UI with Tailwind CSS
- TypeScript for type safety
- Optimized for Vercel deployment
- SEO-friendly structure

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── page.tsx          # Home page with hero and waitlist form
│   ├── about/            # About page
│   ├── features/         # Features page
│   └── layout.tsx        # Root layout
├── components/
│   ├── Navigation.tsx    # Navigation component
│   └── WaitlistForm.tsx  # Waitlist signup form
└── public/
    └── images/           # Placeholder images
```

## Customization

### Update Branding

1. Edit `components/Navigation.tsx` to change "YourBrand" to your company name
2. Update the content in `app/page.tsx` for your specific messaging
3. Replace placeholder images in `public/images/` with your own

### Add Backend Integration

The waitlist form in `components/WaitlistForm.tsx` currently simulates a submission. To connect to a real backend:

1. Replace the simulated API call with your actual endpoint
2. Consider using services like:
   - Mailchimp API
   - ConvertKit
   - Your own backend API
   - Supabase
   - Firebase

Example:
```typescript
const response = await fetch('/api/waitlist', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, name })
});
```

## Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect Next.js and configure settings
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/yourrepo)

## Environment Variables

If you add backend integration, create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=your_api_url
# Add other environment variables as needed
```

Then add them in your Vercel project settings under "Environment Variables".

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)

## License

MIT
