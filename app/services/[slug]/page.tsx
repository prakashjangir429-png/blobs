import ServiceDetailPage from "@/components/services/DetailPage";
import type { Metadata } from "next";
import servicesData from "@/data/services.json";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Digitonix",
      description: "The requested service page could not be found.",
    };
  }

  return {
    title: service.metaTitle || `${service.name} Services | Digitonix`,
    description: service.metaDescription || `Professional ${service.name} services by Digitonix.`,
    keywords: service.metaKeywords?.split(", ") || [service.name, "Digitonix", "Jaipur"],
    authors: [{ name: "Digitonix" }],
    creator: "Digitonix",
    publisher: "Digitonix",

    openGraph: {
      title: service.ogTitle || service.metaTitle || `${service.name} | Digitonix`,
      description: service.ogDescription || service.metaDescription || `Expert ${service.name} services by Digitonix.`,
      url: `https://www.digitonix.in/services/${slug}`,
      siteName: "Digitonix",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://www.digitonix.in/log.png",
          width: 1200,
          height: 630,
          alt: service.ogTitle || `${service.name} - Digitonix`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: service.ogTitle || `${service.name} | Digitonix`,
      description: service.ogDescription || service.metaDescription || `${service.name} services by Digitonix.`,
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
      canonical: `https://www.digitonix.in/services/${slug}`,
    },
  };
}

export default async function ServiceDetail({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const service = servicesData.services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0f2a6b] mb-4">Service Not Found</h1>
          <p className="text-[#4a5578] mb-8">The service you're looking for doesn't exist.</p>
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  // Generate dynamic schema based on service
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
        "@type": "Service",
        "@id": `https://www.digitonix.in/services/${slug}#service`,
        name: service.ogTitle || service.name,
        description: service.ogDescription || service.metaDescription,
        provider: {
          "@id": "https://www.digitonix.in/#organization",
        },
        url: `https://www.digitonix.in/services/${slug}`,
        image: "https://www.digitonix.in/log.png",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        serviceType: service.name,
        category: service.breadcrumb || service.name,
        offers: {
          "@type": "Offer",
          priceSpecification: service.pricing?.plans?.[0]?.price || "Contact for pricing",
          areaServed: {
            "@type": "Country",
            name: "India",
          },
        },
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
            name: "Services",
            item: "https://www.digitonix.in/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.breadcrumb || service.name,
            item: `https://www.digitonix.in/services/${slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faq?.faqs?.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })) || [],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.digitonix.in/#website",
        url: "https://www.digitonix.in",
        name: "Digitonix",
        publisher: {
          "@id": "https://www.digitonix.in/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.digitonix.in/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
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
      <ServiceDetailPage service={service} />
    </>
  );
}