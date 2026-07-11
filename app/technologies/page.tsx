// app/technologies/page.tsx
import { Metadata } from "next";
import TechnologiesPage from "@/components/technologies/technologies";
import { techCategories ,technologies  } from "@/data/techData";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Technology Stack & Expertise | Web, Mobile, Cloud & AI Technologies | Digitonix";
  const description =
    "Explore Digitonix's comprehensive technology stack including React, Next.js, Node.js, Python, AWS, Flutter, AI/ML, and more. 55+ experts delivering enterprise-grade solutions with cutting-edge technologies.";

  const url = "https://www.digitonix.in/technologies";
  const image = "https://www.digitonix.in/log.png";

  // Generate dynamic keywords from technologies
  const techKeywords = technologies.map(tech => tech.name);
  const categoryKeywords = techCategories.map(cat => cat.label);

  return {
    metadataBase: new URL("https://www.digitonix.in"),
    title,
    description,
    keywords: [
      "technology stack",
      "tech expertise",
      "web development technologies",
      "mobile app technologies",
      "cloud technologies",
      "AI ML technologies",
      "Digitonix technologies",
      "React.js",
      "Next.js",
      "Node.js",
      "Python",
      "AWS",
      "Flutter",
      "React Native",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "TensorFlow",
      "PyTorch",
      "Figma",
      ...techKeywords,
      ...categoryKeywords,
      "IT company Jaipur",
      "technology solutions India",
      "software development technologies",
      "enterprise technology stack",
      "modern web technologies",
      "cloud computing services",
      "DevOps technologies",
      "database technologies",
      "frontend technologies",
      "backend technologies",
      "mobile development technologies",
      "AI development technologies",
      "machine learning technologies",
      "UI UX design tools",
    ],
    authors: [{ name: "Digitonix", url: "https://www.digitonix.in" }],
    creator: "Digitonix",
    publisher: "Digitonix",
    category: "Technology",

    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title: "Cutting-Edge Technology Stack | Digitonix",
      description,
      siteName: "Digitonix",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Digitonix Technology Stack - Modern Web, Mobile, Cloud & AI Technologies",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Our Technology Stack | Digitonix",
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

export default function Technologies() {
  const allTechnologies = technologies;

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
        email: "info@digitonix.in",
        sameAs: [
          "https://www.facebook.com/",
          "https://www.instagram.com/",
          "https://www.linkedin.com/company/",
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://www.digitonix.in/technologies",
        url: "https://www.digitonix.in/technologies",
        name: "Technology Stack & Expertise | Digitonix",
        about: {
          "@type": "Thing",
          name: "Technology Stack",
          description: `Comprehensive technology stack covering`,
        },
        provider: {
          "@id": "https://www.digitonix.in/#organization",
        },
      },
      {
        "@type": "ItemList",
        itemListElement: allTechnologies.map((tech, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareApplication",
            name: tech.name,
            applicationCategory: techCategories.find(c => c.id === tech.category)?.label || "Development",
            description: tech.description,
            url: `https://www.digitonix.in/technologies#${tech.id}`,
            provider: {
              "@id": "https://www.digitonix.in/#organization",
            },
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
            name: "Technologies",
            item: "https://www.digitonix.in/technologies",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What technologies does Digitonix use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `Digitonix uses a comprehensive technology stack including frontend technologies like React.js, Next.js, Vue.js, TypeScript; backend technologies like Node.js, Python, .NET Core; mobile technologies like Flutter, React Native; cloud platforms like AWS, Docker, Kubernetes; databases like MongoDB, PostgreSQL; AI/ML technologies like TensorFlow, PyTorch; and design tools like Figma.`,
            },
          },
          {
            "@type": "Question",
            name: "How experienced is Digitonix with these technologies?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `Our team of 55+ expert engineers has an average of 99% proficiency across our technology stack, with 13+ years of industry experience and 650+ successful projects delivered globally.`,
            },
          },
          {
            "@type": "Question",
            name: "Can Digitonix work with my existing technology stack?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we have experience integrating with diverse technology stacks and can seamlessly work with your existing infrastructure, providing augmentation services or full-scale development as needed.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <TechnologiesPage />
    </>
  );
}