# Digital Agency Website

A modern, fully-featured digital agency website built with Next.js 16, React 19, Tailwind CSS, and Framer Motion. Features a comprehensive design with smooth animations, scroll effects, and multiple service offerings.

## Features

- **9 Complete Pages**: Home, Services, Service Details, Portfolio, Portfolio Details, Blog, Blog Details, About, and Contact
- **Beautiful Animations**: Scroll-triggered animations, hover effects, and smooth transitions using Framer Motion
- **Dark Modern Theme**: Professional dark theme with vibrant accent colors (Cyan, Orange, Indigo, Pink)
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Component-Based Architecture**: Reusable components for cards, sections, and layouts
- **Static Data Management**: Services, portfolio projects, and blog posts with TypeScript interfaces
- **Contact Form**: Fully functional contact form with validation
- **SEO Optimized**: Metadata, proper heading structure, and semantic HTML

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: React Icons + Lucide React
- **Form Handling**: React Hook Form
- **Language**: TypeScript

## Project Structure

```
app/
├── layout.tsx              # Root layout with navigation and metadata
├── page.tsx                # Home page
├── globals.css             # Global styles and design tokens
├── services/
│   ├── page.tsx            # Services listing page
│   └── [slug]/
│       └── page.tsx        # Individual service detail page
├── portfolio/
│   ├── page.tsx            # Portfolio listing page
│   └── [slug]/
│       └── page.tsx        # Individual project detail page
├── blog/
│   ├── page.tsx            # Blog listing page
│   └── [slug]/
│       └── page.tsx        # Individual blog post page
├── about/
│   └── page.tsx            # About company page
└── contact/
    └── page.tsx            # Contact form page

components/
├── Navigation.tsx          # Top navigation bar
├── Footer.tsx              # Footer component
└── sections/
    ├── Hero.tsx            # Hero section component
    ├── Stats.tsx           # Statistics counters
    ├── ServiceCard.tsx     # Service card component
    ├── PortfolioCard.tsx   # Portfolio project card
    ├── BlogCard.tsx        # Blog post card
    ├── Testimonials.tsx    # Testimonials carousel
    └── CTA.tsx             # Call-to-action section

data/
├── services.ts             # Services data and types
├── portfolio.ts            # Portfolio projects data
└── blog.ts                 # Blog posts data

lib/
└── animations.ts           # Reusable animation variants

public/images/
├── it-services.jpg
├── digital-marketing.jpg
├── graphic-design.jpg
├── portfolio-*.jpg
└── blog-*.jpg
```

## Color Scheme

- **Background**: `#0a0e27` (Deep Navy)
- **Foreground**: `#f5f5f5` (Off White)
- **Card**: `#1a1f3a` (Dark Blue)
- **Primary**: `#00d4ff` (Cyan) - Main accent
- **Secondary**: `#ff6b35` (Orange) - Complementary accent
- **Accent**: `#6366f1` (Indigo) - Alternative accent

## Installation & Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd digital-agency
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
# Development
pnpm dev          # Start dev server with HMR
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## Key Features Breakdown

### Pages

1. **Home Page** - Hero section, service cards, portfolio preview, testimonials, blog preview
2. **Services Page** - All services displayed with filtering, "Why Choose Us" section
3. **Service Detail** - Comprehensive service page with features, benefits, process, technologies
4. **Portfolio Page** - All projects with category filtering
5. **Portfolio Detail** - Project showcase with challenge, solution, results
6. **Blog Page** - All articles with category filtering
7. **Blog Detail** - Full article with meta information, related posts, newsletter signup
8. **About Page** - Company mission, vision, team, values
9. **Contact Page** - Contact form, contact information, office hours, FAQ

### Components

- **Navigation**: Responsive header with mobile menu
- **Footer**: Multi-column footer with links, newsletter signup, social media
- **Hero**: Customizable hero section with gradient text and CTAs
- **Stats**: Animated number counters
- **Service Card**: Service showcase with features list
- **Portfolio Card**: Project card with hover effects
- **Blog Card**: Article preview with meta information
- **Testimonials**: Carousel with navigation
- **CTA**: Call-to-action section with background effects

### Animations

- Fade in/out (up, down, left, right)
- Scale animations
- Stagger animations for lists
- Hover lift effects
- Scroll-triggered animations
- Number counter animations
- Smooth page transitions

## Data Structure

### Services
Each service contains:
- Title, description, icon
- Features and benefits
- Implementation process
- Technologies used
- Slug for routing

### Portfolio Projects
Each project includes:
- Title, description, category
- Challenge and solution
- Measurable results
- Technologies used
- Image gallery reference

### Blog Posts
Each post contains:
- Title, excerpt, full content
- Author and publish date
- Read time estimate
- Category and tags
- Featured image

## Customization

### Adding a New Service

1. Add to `data/services.ts`:
```typescript
{
  id: 'new-id',
  slug: 'new-service-slug',
  title: 'Service Title',
  description: 'Service description',
  icon: '📱',
  // ... other fields
}
```

2. Image will be referenced as `/images/{slug}.jpg`

### Adding a New Blog Post

1. Add to `data/blog.ts`:
```typescript
{
  id: 'new-id',
  slug: 'new-post-slug',
  title: 'Post Title',
  // ... other fields
}
```

### Changing Colors

Update design tokens in `app/globals.css`:
```css
:root {
  --primary: #00d4ff;     /* Main color */
  --secondary: #ff6b35;   /* Secondary color */
  /* ... other tokens */
}
```

## Performance Optimizations

- Server-side rendering for better SEO
- Image optimization with Next.js Image component
- Code splitting with dynamic imports
- CSS-in-JS with Tailwind for minimal bundle
- Intersection Observer for scroll animations
- Static data without database calls

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Docker

```bash
docker build -t digital-agency .
docker run -p 3000:3000 digital-agency
```

### Traditional Server

```bash
pnpm build
pnpm start
```

## SEO Features

- Optimized metadata on all pages
- Semantic HTML structure
- Mobile-friendly design
- Fast loading times
- Open Graph meta tags
- Structured data support

## Future Enhancements

- Backend API for form submissions
- Database integration for dynamic content
- User authentication
- Subscription/pricing system
- Live chat support
- Analytics integration
- Multi-language support

## License

MIT - Feel free to use this project for your own purposes.

## Support

For issues or questions, please contact support@digitalagency.com

---

Built with ❤️ for digital agencies and service providers.
