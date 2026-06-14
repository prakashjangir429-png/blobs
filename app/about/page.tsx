import AboutPage from "@/components/pages/aboutus";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Digitonix | Leading IT Company Since 2011 | Our Story & Team",
  description:
    "Learn about Digitonix - a trusted IT services company in Jaipur with 13+ years of experience, 55+ expert engineers, and 650+ successful projects. Discover our mission, values, team, and what makes us a top technology partner.",
  keywords: [
    // Brand + About
    "About Digitonix",
    "Digitonix company profile",
    "Digitonix team",
    "Digitonix story",
    "Digitonix mission vision",
    "Digitonix leadership team",
    "Digitonix founders",

    // About IT Company
    "About IT company Jaipur",
    "About software company Jaipur",
    "About technology company Jaipur",
    "About digital agency Jaipur",
    "About web development company",
    "About mobile app development company",

    // Company Info
    "IT company since 2011",
    "Technology partner since 2011",
    "experienced IT company Jaipur",
    "trusted IT services provider",
    "software development company history",
    "digital solutions company background",

    // Team & Culture
    "IT company team Jaipur",
    "software development team India",
    "technology experts team",
    "IT professionals Jaipur",
    "developer team India",
    "tech company culture",
    "best company to work for Jaipur",

    // Values & Mission
    "IT company mission statement",
    "technology company values",
    "software company vision",
    "IT services company philosophy",
    "digital transformation partner",
    "innovation driven company",

    // Credibility
    "ISO 9001 certified IT company",
    "certified software company Jaipur",
    "award winning IT company",
    "recognized technology company",
    "trusted development partner",
    "reliable IT services company",

    // Experience
    "13 years IT experience",
    "decade of IT services",
    "experienced software developers",
    "senior technology consultants",
    "expert IT solutions provider",
    "established web development firm",

    // Quality & Process
    "quality software development",
    "agile development company",
    "transparent IT company",
    "client focused IT services",
    "results driven technology company",
    "ROI focused development",

    // Infrastructure
    "IT company infrastructure",
    "software development center Jaipur",
    "technology hub Jaipur",
    "digital innovation center",
    "development center India",

    // Client Focus
    "client centric IT company",
    "customer focused software company",
    "partner oriented technology firm",
    "business technology consultant",
    "enterprise IT solutions provider",
    "startup technology partner",

    // Global
    "global IT services company",
    "international software company",
    "worldwide technology solutions",
    "offshore development company India",
    "outsourcing IT company Jaipur",

    // Industry Specific
    "healthcare IT solutions company",
    "ecommerce technology partner",
    "fintech software development",
    "education technology company",
    "real estate tech solutions",
    "logistics software company",
    "manufacturing IT solutions",
    "retail technology partner",

    // Service Areas
    "IT company serving Jaipur",
    "IT company serving Rajasthan",
    "IT company serving India",
    "IT company serving USA",
    "IT company serving UK",
    "IT company serving UAE",
    "IT company serving Australia",
    "IT company serving Canada",
  ],
  authors: [{ name: "Digitonix Team" }],
  creator: "Digitonix",
  publisher: "Digitonix",

  openGraph: {
    title: "About Digitonix | Leading IT Company Since 2011 | Our Story & Team",
    description:
      "Learn about Digitonix - a trusted IT services company in Jaipur with 13+ years of experience, 55+ expert engineers, and 650+ successful projects. Discover our mission, values, team, and what makes us a top technology partner.",
    url: "https://www.digitonix.in/about",
    siteName: "Digitonix",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.digitonix.in/log.png",
        width: 1200,
        height: 630,
        alt: "About Digitonix - IT Company Since 2011",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Digitonix | Trusted IT Partner Since 2011",
    description:
      "Discover our story, mission, team of 55+ experts, and what makes Digitonix a leading IT services company in Jaipur, India.",
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
    canonical: "https://www.digitonix.in/about",
  },
};

// ── About Page Specific Schema ──
const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.digitonix.in/about/#aboutpage",
      url: "https://www.digitonix.in/about",
      name: "About Digitonix - IT Company Since 2011",
      description:
        "Learn about Digitonix - a trusted IT services company in Jaipur with 13+ years of experience, 55+ expert engineers, and 650+ successful projects.",
      about: {
        "@type": "Organization",
        "@id": "https://www.digitonix.in/#organization",
        name: "Digitonix",
        foundingDate: "2011",
        foundingLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jaipur",
            addressRegion: "Rajasthan",
            addressCountry: "IN",
          },
        },
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          value: "55+",
        },
        description:
          "Digitonix is a leading IT services company established in 2011, providing web development, mobile app development, digital marketing, SEO, UI/UX design, cloud solutions, and AI development services from Jaipur, India.",
        url: "https://www.digitonix.in",
        logo: "https://www.digitonix.in/log.png",
        email: "info@digitonix.in",
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
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "ISO 9001:2015 Certified",
          },
        ],
        knowsAbout: [
          "Web Development",
          "Mobile App Development",
          "Software Development",
          "Digital Marketing",
          "SEO Services",
          "UI UX Design",
          "Cloud Solutions",
          "AI Development",
          "E-Commerce Development",
          "Cyber Security",
        ],
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.digitonix.in/#organization",
      name: "Digitonix",
      foundingDate: "2011",
      foundingLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Jaipur",
          addressRegion: "Rajasthan",
          addressCountry: "IN",
        },
      },
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        value: "55+",
        unitText: "Employees",
      },
      description:
        "Digitonix is a leading IT services company established in 2011, providing comprehensive technology solutions from Jaipur, India with 55+ expert engineers and 650+ successful projects.",
      url: "https://www.digitonix.in",
      logo: "https://www.digitonix.in/log.png",
      email: "info@digitonix.in",
      telephone: "+91-9887120429",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        postalCode: "302001",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9887120429",
          contactType: "sales",
          email: "info@digitonix.in",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-9887120429",
          contactType: "customer support",
          email: "info@digitonix.in",
          availableLanguage: ["English", "Hindi"],
        },
      ],
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "Country",
          name: "United States",
        },
        {
          "@type": "Country",
          name: "United Kingdom",
        },
        {
          "@type": "Country",
          name: "United Arab Emirates",
        },
        {
          "@type": "Country",
          name: "Australia",
        },
        {
          "@type": "Country",
          name: "Canada",
        },
      ],
      award: [
        "Top IT Company Jaipur",
        "Best Web Development Company",
        "Leading Digital Marketing Agency",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.digitonix.in/about/#breadcrumb",
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
          name: "About Us",
          item: "https://www.digitonix.in/about",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.digitonix.in/about/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "When was Digitonix founded?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Digitonix was founded in 2011 in Jaipur, Rajasthan, India with a vision to provide enterprise-grade technology solutions to businesses of all sizes.",
          },
        },
        {
          "@type": "Question",
          name: "How many employees does Digitonix have?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Digitonix has a team of 55+ expert engineers and technology professionals working full-time from our development center in Jaipur, India.",
          },
        },
        {
          "@type": "Question",
          name: "What services does Digitonix offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Digitonix offers comprehensive IT services including web development, mobile app development, custom software development, digital marketing, SEO, UI/UX design, cloud solutions, AI development, e-commerce development, and cyber security services.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Digitonix located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Digitonix is headquartered in Jaipur, Rajasthan, India, and serves clients across India, USA, UK, UAE, Australia, and Canada.",
          },
        },
        {
          "@type": "Question",
          name: "Is Digitonix ISO certified?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Digitonix is an ISO 9001:2015 certified company, ensuring quality management standards in all our processes and deliverables.",
          },
        },
      ],
    },
  ],
};

export default function AboutUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />
      <AboutPage />
    </>
  );
}