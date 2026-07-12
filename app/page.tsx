import Home from "@/components/pages/homepage";
import { getAllBlogs } from "@/lib/blogService";
import type { Metadata } from "next";

export const revalidate = 600; // Revalidate the page every 60 seconds

export const metadata: Metadata = {
  title: "Best Web Development & Digital Marketing Company in Jaipur | Digitonix",

  description:
    "Digitonix is a leading IT company in Jaipur offering Web Development, Mobile App Development, SEO, Digital Marketing, UI/UX Design, AI Solutions and Custom Software Development across India.",
  keywords: [
    // Brand
    "Digitonix",
    "Digitonix Jaipur",
    "Digitonix India",

    // Web Development
    "Web Development Company",
    "Web Development Company Jaipur",
    "Web Development Company India",
    "Best Web Development Company Jaipur",
    "Website Development Company Jaipur",
    "Custom Website Development",
    "Business Website Development",
    "Corporate Website Design",
    "Responsive Website Design",
    "Website Design Company Jaipur",
    "Website Design Company India",
    "Professional Website Designer Jaipur",
    "Website Development Services",

    // Mobile Apps
    "Mobile App Development",
    "Mobile App Development Company Jaipur",
    "Mobile App Development Company India",
    "Android App Development",
    "Android App Development Company Jaipur",
    "iOS App Development",
    "Flutter App Development",
    "React Native Development",
    "Cross Platform App Development",
    "Custom Mobile App Development",

    // Software Development
    "Software Development Company",
    "Software Development Company Jaipur",
    "Custom Software Development",
    "ERP Development Company",
    "CRM Development Services",
    "SaaS Development Company",
    "Enterprise Software Development",

    // Digital Marketing
    "Digital Marketing Agency Jaipur",
    "Digital Marketing Company Jaipur",
    "SEO Company Jaipur",
    "Best SEO Company Jaipur",
    "SEO Services India",
    "Local SEO Services",
    "Google Ads Agency",
    "PPC Management Company",
    "Social Media Marketing Agency",
    "Instagram Marketing Services",
    "Facebook Ads Agency",

    // E-commerce
    "Ecommerce Development Company",
    "Ecommerce Website Development Jaipur",
    "Shopify Development Company",
    "WooCommerce Development",
    "Online Store Development",
    "Marketplace Development",

    // Technologies
    "React JS Development Company",
    "Next JS Development Company",
    "Node JS Development Company",
    "MERN Stack Development",
    "Full Stack Development Company",
    "Frontend Development Services",
    "Backend Development Services",

    // UI UX
    "UI UX Design Company",
    "UI UX Design Services",
    "Mobile App UI Design",
    "Website UI Design",
    "User Experience Design",

    // Cloud & DevOps
    "Cloud Solutions Company",
    "AWS Consulting Services",
    "DevOps Services Company",
    "Cloud Migration Services",

    // AI & Automation
    "AI Development Company",
    "Artificial Intelligence Solutions",
    "Machine Learning Development",
    "Chatbot Development Company",
    "Business Automation Services",

    // Cyber Security
    "Cyber Security Services",
    "Cyber Security Company India",
    "Application Security Services",
    "Network Security Solutions",

    // Local SEO
    "IT Company Jaipur",
    "Best IT Company Jaipur",
    "Top IT Company Jaipur",
    "IT Services Jaipur",
    "Software Company Jaipur",
    "Technology Company Jaipur",
    "Digital Agency Jaipur",
    "Web Design Jaipur",
    "App Development Jaipur",

    // India-wide
    "IT Company India",
    "Software Development Company India",
    "Web Development Agency India",
    "Digital Marketing Company India",
    "Technology Solutions India"
  ],
  authors: [{ name: "Digitonix" }],
  creator: "Digitonix",
  publisher: "Digitonix",

  openGraph: {
    title: "Best Web Development & Digital Marketing Company in Jaipur | Digitonix",

    description:
      "Digitonix is a leading IT company in Jaipur offering Web Development, Mobile App Development, SEO, Digital Marketing, UI/UX Design, AI Solutions and Custom Software Development across India.",
    url: "https://www.digitonix.in",
    siteName: "Digitonix",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.digitonix.in/log.png",
        width: 1200,
        height: 630,
        alt: "Digitonix",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Digitonix | Web Development, Mobile App Development & Digital Marketing",
    description:
      "Leading IT company offering web development, mobile apps, SEO, digital marketing, AI solutions, and cloud services.",
    images: ["https://www.digitonix.in/log.png"],
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
    canonical: "https://www.digitonix.in",
  },
};

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
      email: "info@digitonix.in",
      sameAs: [
        "https://www.facebook.com/",
        "https://www.instagram.com/",
        "https://www.linkedin.com/company/"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.digitonix.in/#service",
      name: "Digitonix",
      image: "https://www.digitonix.in/log.png",
      url: "https://www.digitonix.in",
      telephone: "+91-9887120429",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        addressCountry: "IN"
      },
      areaServed: {
        "@type": "Country",
        name: "India"
      },
      serviceType: [
        "Web Development",
        "Mobile App Development",
        "Digital Marketing",
        "SEO Services",
        "UI UX Design",
        "Software Development",
        "Cloud Solutions",
        "AI Development"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.digitonix.in/#website",
      url: "https://www.digitonix.in",
      name: "Digitonix",
      publisher: {
        "@id": "https://www.digitonix.in/#organization"
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.digitonix.in/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

export default async function HomePage() {
  const [blogsResponse] = await Promise.all([
    getAllBlogs({
      sortBy: 'createdAt',
      sortOrder: 'desc',
      limit: 3,
    })
  ]);

   const blogPosts = blogsResponse.data;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <Home blogPosts={blogPosts}/>
    </>
  );
}