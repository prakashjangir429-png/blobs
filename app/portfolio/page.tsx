// app/portfolio/page.tsx
import { Metadata } from "next";
import PortfolioClient from "@/components/portfolio/PortfolioClient";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Portfolio | 650+ Projects | Web, Mobile & Digital Solutions | Digitonix";
  const description =
    "Explore Digitonix's portfolio of 650+ successful projects including web development, mobile apps, digital marketing campaigns, UI/UX design, and enterprise solutions. 98% client satisfaction rate.";
  
  const url = "https://www.digitonix.in/portfolio";
  const image = "https://www.digitonix.in/log.png";

  return {
    metadataBase: new URL("https://www.digitonix.in"),
    title,
    description,
    keywords: [
      "portfolio",
      "case studies",
      "project portfolio",
      "Digitonix portfolio",
      "web development portfolio",
      "mobile app portfolio",
      "digital marketing portfolio",
      "UI UX portfolio",
      "enterprise solutions portfolio",
      "successful projects",
      "client case studies",
      "IT project portfolio",
      "software development portfolio",
      "FinTech projects",
      "healthcare projects",
      "ecommerce projects",
      "education projects",
      "enterprise projects",
      "React projects",
      "Next.js projects",
      "Flutter projects",
      "Node.js projects",
      "award-winning projects",
      "digital transformation case studies",
      "IT company Jaipur portfolio",
      "Indian IT company projects",
      "technology solutions portfolio",
      "web design portfolio",
      "app development portfolio",
      "SEO portfolio",
      "branding portfolio",
      "Fortune 500 projects",
      "startup projects",
      "global IT projects",
    ],
    authors: [{ name: "Digitonix", url: "https://www.digitonix.in" }],
    creator: "Digitonix",
    publisher: "Digitonix",
    category: "Portfolio",

    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title: "Our Portfolio | 650+ Successful Projects | Digitonix",
      description,
      siteName: "Digitonix",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Digitonix Portfolio - 650+ Successful Projects Across Industries",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Portfolio | Digitonix - Building Digital Success Stories",
      description,
      creator: "@digitonix",
      images: [image],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    alternates: {
      canonical: url,
    },

    other: {
      "theme-color": "#0F172A",
    },
  };
}

export default function PortfolioPage() {
  // Server-side data
  const categories = [
    { id: "all", label: "All Projects", icon: "Filter" },
    { id: "fintech", label: "FinTech", icon: "TrendingUp" },
    { id: "healthcare", label: "Healthcare", icon: "Users" },
    { id: "ecommerce", label: "E-Commerce", icon: "Globe" },
    { id: "education", label: "Education", icon: "Zap" },
    { id: "enterprise", label: "Enterprise", icon: "Code2" },
  ];

  const projects = [
    {
      slug: "nexbank-digital",
      title: "NexBank Digital Transformation",
      category: "fintech",
      serviceType: "web",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
      shortDesc: "A secure, high-performance banking portal serving 2M+ users with 99.99% uptime.",
      tags: ["React", "Node.js", "AWS", "Security"],
      results: ["40% Faster Load Time", "99.99% Uptime", "+25% User Adoption"],
      featured: true,
      year: "2023",
      client: "NexBank Corp",
      longDesc: "Complete digital transformation of a traditional banking system to a modern, cloud-native architecture.",
      challenge: "Legacy system with poor performance and security vulnerabilities.",
      solution: "Built a microservices-based architecture with React frontend and Node.js backend on AWS.",
      techStack: ["React", "Node.js", "AWS Lambda", "DynamoDB", "Docker"],
      testimonial: {
        quote: "Digitonix transformed our banking platform completely. The performance improvements are remarkable.",
        author: "Rajesh Kumar",
        role: "CTO, NexBank Corp",
      },
    },
    {
      slug: "healthplus-app",
      title: "HealthPlus Telemedicine App",
      category: "healthcare",
      serviceType: "app",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      shortDesc: "Cross-platform telemedicine app connecting patients with doctors instantly.",
      tags: ["Flutter", "Firebase", "WebRTC", "HIPAA"],
      results: ["500k+ Downloads", "4.9 App Store Rating", "Reduced Wait Times by 60%"],
      featured: true,
      year: "2024",
      client: "HealthPlus Inc",
      longDesc: "HIPAA-compliant telemedicine platform enabling remote consultations with video calling and prescription management.",
      challenge: "Create a secure, scalable telemedicine solution compliant with healthcare regulations.",
      solution: "Developed using Flutter for cross-platform compatibility with WebRTC for real-time video consultations.",
      techStack: ["Flutter", "Firebase", "WebRTC", "Node.js", "PostgreSQL"],
      testimonial: {
        quote: "The app revolutionized how we deliver healthcare. Patient satisfaction has never been higher.",
        author: "Dr. Priya Sharma",
        role: "CEO, HealthPlus Inc",
      },
    },
    {
      slug: "stylehub-ecommerce",
      title: "StyleHub Fashion Marketplace",
      category: "ecommerce",
      serviceType: "web",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
      shortDesc: "Headless e-commerce solution with AI-driven product recommendations.",
      tags: ["Next.js", "Shopify Headless", "Algolia", "Stripe"],
      results: ["+150% Conversion Rate", "$2M GMV in Q1", "Sub-second Search"],
      featured: false,
      year: "2023",
      client: "ShopWave Retail",
      longDesc: "Modern headless e-commerce platform with AI-powered personalization and real-time inventory management.",
      challenge: "Improve conversion rates and user experience for a growing fashion marketplace.",
      solution: "Implemented headless Shopify with Next.js frontend and Algolia for instant search.",
      techStack: ["Next.js", "Shopify", "Algolia", "Stripe", "Tailwind CSS"],
      testimonial: {
        quote: "Our conversion rates doubled within the first month. The performance is incredible.",
        author: "Amit Patel",
        role: "Founder, ShopWave Retail",
      },
    },
    {
      slug: "learnify-lms",
      title: "Learnify LMS Platform",
      category: "education",
      serviceType: "web",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
      shortDesc: "Scalable Learning Management System for global universities.",
      tags: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      results: ["50+ Universities", "1M+ Students", "99.9% Availability"],
      featured: false,
      year: "2022",
      client: "EduTech Global",
      longDesc: "Enterprise-grade LMS supporting 1M+ concurrent users with real-time collaboration features.",
      challenge: "Build a scalable platform capable of handling millions of concurrent users during peak hours.",
      solution: "Microservices architecture with Vue.js frontend and Python/FastAPI backend.",
      techStack: ["Vue.js", "Python", "FastAPI", "PostgreSQL", "Docker", "Redis"],
      testimonial: {
        quote: "The platform handled our peak load effortlessly. A truly enterprise-grade solution.",
        author: "Prof. Michael Chen",
        role: "Director, EduTech Global",
      },
    },
    {
      slug: "greenearth-campaign",
      title: "GreenEarth Awareness Campaign",
      category: "enterprise",
      serviceType: "marketing",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
      shortDesc: "Global digital marketing campaign driving environmental awareness.",
      tags: ["SEO", "PPC", "Content", "Social Media"],
      results: ["10M+ Impressions", "+300% Traffic", "Viral Social Reach"],
      featured: false,
      year: "2024",
      client: "GreenEarth Org",
      longDesc: "Multi-channel digital marketing campaign reaching 10M+ people across 15 countries.",
      challenge: "Create a viral campaign to raise awareness about environmental conservation.",
      solution: "Integrated SEO, PPC, content marketing, and social media strategy with influencer partnerships.",
      techStack: ["Google Ads", "Meta Ads", "SEO", "Content Strategy", "Analytics"],
      testimonial: {
        quote: "The campaign exceeded all our expectations. We reached millions organically.",
        author: "Sarah Johnson",
        role: "Marketing Director, GreenEarth Org",
      },
    },
    {
      slug: "apex-corp-redesign",
      title: "Apex Corp Brand Redesign",
      category: "enterprise",
      serviceType: "design",
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1200&q=80",
      shortDesc: "Complete visual identity overhaul for a Fortune 500 company.",
      tags: ["Branding", "UI/UX", "Figma", "Strategy"],
      results: ["Brand Value +40%", "Consistent Global Identity", "Award Winning"],
      featured: false,
      year: "2023",
      client: "Apex Corp",
      longDesc: "Comprehensive rebranding including logo, design system, website, and marketing collateral.",
      challenge: "Modernize a dated brand identity while maintaining brand recognition.",
      solution: "Created a comprehensive design system with modern aesthetics and consistent branding.",
      techStack: ["Figma", "Adobe Suite", "Design Systems", "Brand Strategy"],
      testimonial: {
        quote: "The rebranding transformed our market perception. We've won multiple design awards.",
        author: "James Wilson",
        role: "VP Marketing, Apex Corp",
      },
    },
  ];

  // Calculate stats
  const totalProjects = projects.length;
  const featuredProjects = projects.filter(p => p.featured);
  const categories_count = new Set(projects.map(p => p.category)).size;
  const technologies = [...new Set(projects.flatMap(p => p.tags))].length;
  const industries = categories_count;

  // Generate structured data
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.digitonix.in/#organization",
        name: "Digitonix",
        url: "https://www.digitonix.in",
        logo: "https://www.digitonix.in/log.png",
        description:
          "Digitonix is a leading IT company in Jaipur offering Web Development, Mobile App Development, SEO, Digital Marketing, AI Solutions and Custom Software Development.",
        email: "hello@digitonix.in",
        telephone: "+91-9887120429",
        sameAs: [
          "https://www.facebook.com/",
          "https://www.instagram.com/",
          "https://www.linkedin.com/company/",
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": "https://www.digitonix.in/portfolio",
        url: "https://www.digitonix.in/portfolio",
        name: "Portfolio | 650+ Successful Projects | Digitonix",
        description: "Digitonix is a leading IT company in Jaipur offering Web Development, Mobile App Development, SEO, Digital Marketing, AI Solutions and Custom Software Development.",
        provider: {
          "@id": "https://www.digitonix.in/#organization",
        },
        hasPart: projects.map((project, index) => ({
          "@type": "CreativeWork",
          name: project.title,
          description: project.shortDesc,
          url: `https://www.digitonix.in/portfolio/${project.slug}`,
          image: project.image,
          datePublished: project.year,
          about: {
            "@type": "Thing",
            name: project.category,
          },
          keywords: project.tags.join(", "),
          provider: {
            "@id": "https://www.digitonix.in/#organization",
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.digitonix.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Portfolio",
            item: "https://www.digitonix.in/portfolio",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What types of projects has Digitonix delivered?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `Digitonix has delivered ${totalProjects}+ successful projects across ${industries} industries including FinTech, Healthcare, E-Commerce, Education, and Enterprise solutions. Our portfolio includes web development, mobile apps, digital marketing campaigns, and UI/UX design projects.`,
            },
          },
          {
            "@type": "Question",
            name: "What technologies does Digitonix use in projects?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `We use cutting-edge technologies including React, Next.js, Node.js, Python, Flutter, Vue.js, AWS, Docker, PostgreSQL, and many more. Our projects leverage ${technologies}+ different technologies tailored to client requirements.`,
            },
          },
          {
            "@type": "Question",
            name: "What is Digitonix's client satisfaction rate?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We maintain a 98% client satisfaction rate across all our projects, with many clients returning for additional work and referring us to other businesses.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* Client Component */}
      <PortfolioClient
        initialData={{
          categories,
          projects,
          stats: {
            totalProjects,
            featuredCount: featuredProjects.length,
            categoriesCount: categories_count,
            technologiesCount: technologies,
            industriesCount: industries,
            clientSatisfaction: 98,
            yearsExperience: 13,
            expertsCount: 55,
            countriesServed: 25,
          },
        }}
      />
    </>
  );
}