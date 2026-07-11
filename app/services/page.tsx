// app/services/page.tsx
import ServicesPage from "@/components/services/servicePage";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | Web Development, Mobile Apps & Digital Marketing | Digitonix",
  description:
    "Explore Digitonix's comprehensive IT services including Web Development, Mobile App Development, SEO, Digital Marketing, UI/UX Design, Cloud Solutions, AI Development and more. 13+ years of excellence.",
  keywords: [
    "IT services",
    "web development services",
    "mobile app development",
    "digital marketing services",
    "SEO services",
    "UI UX design",
    "cloud solutions",
    "AI development",
    "software development",
    "IT company Jaipur",
    "technology services",
    "Digitonix services",
  ],
  openGraph: {
    title: "Comprehensive IT Services | Digitonix",
    description:
      "Transform your business with our expert IT services. Web development, mobile apps, SEO, digital marketing, cloud & AI solutions.",
    url: "https://www.digitonix.in/services",
    siteName: "Digitonix",
    type: "website",
    images: [
      {
        url: "https://www.digitonix.in/log.png",
        width: 1200,
        height: 630,
        alt: "Digitonix Services",
      },
    ],
  },
  alternates: {
    canonical: "https://www.digitonix.in/services",
  },
};


export default function Services() {

  // Structured data
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    // itemListElement: services.map((service, index) => ({
    //   "@type": "ListItem",
    //   position: index + 1,
    //   item: {
    //     "@type": "Service",
    //     name: service.name,
    //     description: service.metaDescription,
    //     url: `https://www.digitonix.in/services/${service.slug}`,
    //     provider: {
    //       "@type": "Organization",
    //       name: "Digitonix",
    //     },
    //   },
    // })),
  };

  return (
    <>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      /> */}
      <ServicesPage/>
    </>
  );
}