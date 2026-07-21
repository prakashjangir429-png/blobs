// app/hire/page.tsx
import { Metadata } from "next";
// Data imports
import {
  hireBenefits,
  hireProcess,
  techStack,
  engagementModels,
  whyHireUs,
  faqs,
} from "@/data/hire";
import HireClient from "@/components/hireus/HireUs";
import { technologies } from "@/data/technologies.json";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Hire Top Developers & IT Professionals | Dedicated Teams | Digitonix";
  const description =
    "Hire dedicated developers, designers, and IT professionals from India's leading IT company. 55+ experts, flexible engagement models, 48hr onboarding. Start building your dream team today!";

  const url = "https://www.digitonix.in/hireus";
  const image = "https://www.digitonix.in/log.png";

  return {
    metadataBase: new URL("https://www.digitonix.in"),
    title,
    description,
    keywords: [
      "hire developers",
      "hire dedicated developers",
      "hire IT professionals",
      "hire software developers India",
      "hire web developers",
      "hire mobile app developers",
      "hire React developers",
      "hire Node.js developers",
      "hire Python developers",
      "hire full stack developers",
      "dedicated development team",
      "offshore development team",
      "IT staff augmentation",
      "hire remote developers",
      "hire freelance developers",
      "software development outsourcing",
      "hire UI UX designers",
      "hire QA engineers",
      "hire DevOps engineers",
      "hire cloud developers",
      "hire AI ML developers",
      "hire technology experts",
      "Digitonix hire",
      "IT company Jaipur",
      "Indian developers for hire",
      "cost-effective development team",
      "flexible hiring models",
      "monthly developer hiring",
      "project-based hiring",
      "hourly developer hiring",
      "dedicated team India",
      "software development team India",
      "hire development team India",
      "top tech talent India",
      "hire experienced developers",
      "hire certified developers",
      "ISO certified IT company",
      "48 hour developer onboarding",
      "scale development team",
      "remote development team",
      "offshore IT services",
    ],
    authors: [{ name: "Digitonix", url: "https://www.digitonix.in" }],
    creator: "Digitonix",
    publisher: "Digitonix",
    category: "IT Services",

    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title: "Hire Expert Developers & IT Teams | Digitonix",
      description,
      siteName: "Digitonix",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Hire Top Tech Talent from Digitonix - India's Leading IT Company",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Hire Dedicated Developers & IT Teams | Digitonix",
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

export default function HirePage() {
  // Calculate stats for schema and display
  const totalTechnologies = techStack.length;
  const totalBenefits = hireBenefits.length;
  const totalEngagementModels = engagementModels.length;

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
        address: {
          "@type": "PostalAddress",
          addressLocality: "Jaipur",
          addressRegion: "Rajasthan",
          addressCountry: "IN",
        },
        sameAs: [
          "https://www.facebook.com/",
          "https://www.instagram.com/",
          "https://www.linkedin.com/company/",
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://www.digitonix.in/hire",
        url: "https://www.digitonix.in/hire",
        name: "Hire Expert Developers & IT Teams | Digitonix",
        description:
          "Hire dedicated developers, designers, and IT professionals from India's leading IT company. 55+ experts, flexible engagement models, 48hr onboarding.",
        provider: {
          "@id": "https://www.digitonix.in/#organization",
        },
      },
      {
        "@type": "Service",
        name: "Dedicated Development Team Hiring",
        description:
          "Hire dedicated developers, designers, and IT professionals with flexible engagement models including hourly, monthly, and project-based hiring.",
        provider: {
          "@id": "https://www.digitonix.in/#organization",
        },
        serviceType: "IT Staff Augmentation",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        offers: [
          {
            "@type": "Offer",
            name: "Hourly Hiring",
            price: "25",
            priceCurrency: "USD",
            unitText: "HOUR",
            description: "Flexible hourly engagement for short-term tasks and maintenance.",
          },
          {
            "@type": "Offer",
            name: "Monthly Hiring",
            price: "3000",
            priceCurrency: "USD",
            unitText: "MONTH",
            description: "Full-time dedicated team with predictable monthly billing.",
          },
          {
            "@type": "Offer",
            name: "Project-Based Hiring",
            description: "Complete solution delivery with fixed scope and timeline.",
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Hire Process Steps",
        itemListElement: hireProcess.map((step, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "HowToStep",
            name: step.title,
            text: step.desc,
          },
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
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
            name: "Hire Developers",
            item: "https://www.digitonix.in/hire",
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
      <HireClient
        initialData={{
          hireBenefits,
          hireProcess,
          techStack: technologies,
          engagementModels,
          whyHireUs,
          faqs,
          stats: {
            totalTechnologies,
            totalBenefits,
            totalEngagementModels,
            expertCount: 55,
            yearsExperience: 13,
            projectsDelivered: 650,
            countriesServed: 25,
            clientRetention: 98,
            onboardingHours: 48,
            costSavings: 60,
          },
        }}
      />
    </>
  );
}