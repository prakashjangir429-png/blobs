// app/portfolio/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioDetailClient from "@/components/pages/portfolioDetail";
// Projects data - moved to server side
const projectsData = [
  {
    slug: "nexbank-digital",
    title: "NexBank Digital Transformation",
    category: "fintech",
    serviceType: "web",
    client: "NexBank Corp",
    year: "2023",
    duration: "8 Months",
    teamSize: "6 Experts",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    ],
    challenge: "NexBank needed to modernize their legacy banking portal to support 2M+ concurrent users while maintaining strict security compliance (SOC2, GDPR). The old system suffered from slow load times and poor mobile experience.",
    solution: "We architected a microservices-based solution using React for the frontend and Node.js for the backend, deployed on AWS with auto-scaling. We implemented biometric authentication and real-time fraud detection algorithms.",
    results: [
      { metric: "40%", label: "Faster Load Time" },
      { metric: "25%", label: "Increase in User Adoption" },
      { metric: "99.99%", label: "Uptime Achieved" },
      { metric: "$2M", label: "Cost Savings/year" },
    ],
    techStack: ["React", "Next.js", "Node.js", "AWS Lambda", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    services: ["UI/UX Design", "Full-Stack Dev", "Cloud Migration", "Security Audit"],
    testimonial: {
      text: "Digitonix transformed our digital presence. Their team's expertise in fintech security and scalability is unmatched. The new platform has exceeded all our expectations.",
      author: "John Doe",
      role: "CTO, NexBank",
    },
    seoTitle: "NexBank Digital Transformation Case Study | FinTech Solutions | Digitonix",
    seoDescription: "How Digitonix helped NexBank modernize their banking portal serving 2M+ users. 40% faster load times, 99.99% uptime, $2M annual savings. Read the full case study.",
    seoKeywords: ["NexBank", "digital transformation", "fintech case study", "banking portal", "microservices", "React", "Node.js", "AWS", "financial technology"],
  },
  {
    slug: "healthplus-app",
    title: "HealthPlus Telemedicine App",
    category: "healthcare",
    serviceType: "app",
    client: "HealthPlus Inc",
    year: "2024",
    duration: "6 Months",
    teamSize: "4 Experts",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-217358c7e618?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516574187841-693083f69802?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    ],
    challenge: "Create a HIPAA-compliant telemedicine app allowing patients to consult doctors via video, manage prescriptions, and view lab results securely on both iOS and Android.",
    solution: "Developed a cross-platform app using Flutter for consistent UI/UX. Integrated WebRTC for low-latency video calls and Firebase for secure data synchronization. Implemented end-to-end encryption for all medical records.",
    results: [
      { metric: "500k+", label: "Downloads" },
      { metric: "4.9", label: "App Store Rating" },
      { metric: "60%", label: "Reduced Wait Time" },
      { metric: "100%", label: "HIPAA Compliant" },
    ],
    techStack: ["Flutter", "Dart", "Firebase", "WebRTC", "Node.js", "MongoDB"],
    services: ["Mobile App Dev", "Backend API", "UI/UX Design", "QA Testing"],
    testimonial: {
      text: "The app has revolutionized how we connect with patients. The development process was smooth and professional. Our patients love the seamless experience.",
      author: "Dr. Sarah Smith",
      role: "Director, HealthPlus",
    },
    seoTitle: "HealthPlus Telemedicine App Case Study | Healthcare App Development | Digitonix",
    seoDescription: "500k+ downloads, 4.9 rating. HIPAA-compliant telemedicine app built with Flutter. See how Digitonix reduced patient wait times by 60% for HealthPlus.",
    seoKeywords: ["telemedicine app", "healthcare app", "HIPAA compliant", "Flutter app", "WebRTC", "medical app", "HealthPlus", "mobile health"],
  },
  {
    slug: "shopwave-ecommerce",
    title: "ShopWave E-Commerce Platform",
    category: "ecommerce",
    serviceType: "web",
    client: "ShopWave Retail",
    year: "2023",
    duration: "7 Months",
    teamSize: "5 Experts",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=800&q=80",
    ],
    challenge: "ShopWave needed a scalable e-commerce platform to handle 1M+ monthly visitors with personalized shopping experiences and real-time inventory management.",
    solution: "Built a headless commerce solution using Next.js for the frontend and Shopify Plus as the backend. Implemented AI-powered product recommendations and dynamic pricing engine.",
    results: [
      { metric: "150%", label: "Revenue Growth" },
      { metric: "45%", label: "Conversion Rate Increase" },
      { metric: "2x", label: "Average Order Value" },
      { metric: "99.98%", label: "Uptime" },
    ],
    techStack: ["Next.js", "Shopify Plus", "Node.js", "PostgreSQL", "Redis", "AWS"],
    services: ["E-Commerce Dev", "UI/UX Design", "Payment Integration", "SEO"],
    testimonial: {
      text: "Our sales have skyrocketed since launching the new platform. The team understood our vision perfectly and delivered beyond expectations.",
      author: "Michael Chen",
      role: "CEO, ShopWave",
    },
    seoTitle: "ShopWave E-Commerce Case Study | 150% Revenue Growth | Digitonix",
    seoDescription: "How Digitonix helped ShopWave achieve 150% revenue growth with a headless commerce solution. 45% conversion increase, 2x order value. Read more.",
    seoKeywords: ["ecommerce platform", "headless commerce", "Shopify Plus", "Next.js", "revenue growth", "ShopWave", "online retail", "conversion optimization"],
  },
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Digitonix",
      description: "The requested project case study could not be found.",
    };
  }

  const title = project.seoTitle || `${project.title} | ${project.client} Case Study | Digitonix`;
  const description = project.seoDescription || `Case study: ${project.title} for ${project.client}. ${project.challenge.substring(0, 120)}...`;
  const keywords = project.seoKeywords || [project.category, project.client, "case study", "Digitonix"];
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.digitonix.in";
  const canonicalUrl = `${baseUrl}/portfolio/${project.slug}`;

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    keywords: [...keywords, "portfolio", "project", "success story", "IT case study"],
    authors: [{ name: "Digitonix", url: baseUrl }],
    creator: "Digitonix",
    publisher: "Digitonix",
    category: project.category,

    openGraph: {
      type: "article",
      locale: "en_US",
      url: canonicalUrl,
      title,
      description,
      siteName: "Digitonix",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} - ${project.client} Case Study`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@digitonix",
      images: [project.image],
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
      canonical: canonicalUrl,
    },

    other: {
      "theme-color": "#0F172A",
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Get related projects
  const relatedProjects = projectsData
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

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
        description: "Digitonix is a leading IT company in Jaipur offering Web Development, Mobile App Development, SEO, Digital Marketing, AI Solutions and Custom Software Development.",
        email: "hello@digitonix.in",
        telephone: "+91-9887120429",
      },
      {
        "@type": "Article",
        "@id": `https://www.digitonix.in/portfolio/${project.slug}#article`,
        headline: project.title,
        description: project.challenge,
        image: project.image,
        datePublished: `${project.year}-01-01`,
        author: {
          "@type": "Organization",
          name: "Digitonix",
        },
        publisher: {
          "@id": "https://www.digitonix.in/#organization",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.digitonix.in/portfolio/${project.slug}`,
        },
        about: {
          "@type": "Thing",
          name: project.category,
        },
        keywords: project.techStack.join(", "),
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
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: `https://www.digitonix.in/portfolio/${project.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `What was the challenge for ${project.client}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: project.challenge,
            },
          },
          {
            "@type": "Question",
            name: `What solution did Digitonix provide for ${project.client}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: project.solution,
            },
          },
          {
            "@type": "Question",
            name: `What were the results for ${project.client}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: project.results.map((r: any) => `${r.metric} ${r.label}`).join(", "),
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
      <PortfolioDetailClient
        project={project}
        relatedProjects={relatedProjects}
      />
    </>
  );
}