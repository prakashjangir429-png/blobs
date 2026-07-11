// app/contact/page.tsx
import { Metadata } from "next";
import ContactClient from "@/components/pages/Contact";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowRight,
  Navigation,
  User,
  MessageSquare,
  Building2,
  Calendar,
  ChevronRight,
  Loader2,
  BadgeCheck,
  Trophy,
  Users,
  Sparkles,
  ArrowUpRight,
  ChevronDown,
  Headphones,
  Shield,
  Zap,
  Award,
  Star,
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Contact Us | Get Free Consultation | Digitonix - Leading IT Company";
  const description =
    "Contact Digitonix for web development, mobile apps, digital marketing, UI/UX design, and AI solutions. Offices in India, USA, UK & Canada. Get a free consultation within 24 hours. Call +91 9887120429.";
  
  const url = "https://www.digitonix.in/contact";
  const image = "https://www.digitonix.in/log.png";

  return {
    metadataBase: new URL("https://www.digitonix.in"),
    title,
    description,
    keywords: [
      "contact Digitonix",
      "get in touch Digitonix",
      "contact IT company Jaipur",
      "contact web development company",
      "contact mobile app development company",
      "contact digital marketing agency",
      "contact SEO company",
      "contact UI UX design company",
      "contact AI development company",
      "Digitonix contact number",
      "Digitonix email",
      "Digitonix office address",
      "Digitonix Jaipur office",
      "Digitonix New York office",
      "Digitonix London office",
      "Digitonix Toronto office",
      "free consultation IT services",
      "hire developers contact",
      "IT services inquiry",
      "web development inquiry",
      "mobile app development inquiry",
      "digital marketing inquiry",
      "software development inquiry",
      "IT company contact India",
      "technology solutions contact",
      "software company contact Jaipur",
      "best IT company contact",
      "IT services quote",
      "project inquiry IT",
      "technology consultation",
      "free project estimate",
      "IT support contact",
      "24/7 IT support",
    ],
    authors: [{ name: "Digitonix", url: "https://www.digitonix.in" }],
    creator: "Digitonix",
    publisher: "Digitonix",
    category: "Contact",

    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title: "Contact Digitonix | Get Free Consultation Today",
      description,
      siteName: "Digitonix",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Contact Digitonix - Leading IT Company with Global Offices",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Contact Digitonix | Free Consultation",
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

export default function ContactPage() {
  // Server-side data
  const offices = [
    {
      id: "india",
      city: "Jaipur",
      country: "India",
      address: "D-42, Malviya Nagar, Jaipur, Rajasthan 302017",
      phone: "+91 9887120429",
      email: "hello@digitonix.in",
      hours: "Mon - Fri: 9:30 AM - 6:30 PM IST",
      coords: { lat: 26.8467, lng: 75.7885 },
      image: "https://images.unsplash.com/photo-1572979252228-4b887e81e7df?auto=format&fit=crop&w=800&q=80",
      features: ["Headquarters", "Development Center", "24/7 Support"],
      timezone: "IST (UTC+5:30)",
    },
    {
      id: "usa",
      city: "New York",
      country: "USA",
      address: "350 Fifth Avenue, Suite 4820, New York, NY 10118",
      phone: "+1 (212) 555 0199",
      email: "us@digitonix.in",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM EST",
      coords: { lat: 40.7128, lng: -74.0060 },
      image: "https://images.unsplash.com/photo-1496442226666-8d4a0e62e6e9?auto=format&fit=crop&w=800&q=80",
      features: ["Sales Office", "Client Meetings", "Strategy Hub"],
      timezone: "EST (UTC-5)",
    },
    {
      id: "uk",
      city: "London",
      country: "United Kingdom",
      address: "1 Canada Square, Canary Wharf, London E14 5AB",
      phone: "+44 20 7946 0123",
      email: "uk@digitonix.in",
      hours: "Mon - Fri: 9:00 AM - 5:30 PM GMT",
      coords: { lat: 51.5074, lng: -0.1278 },
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
      features: ["European HQ", "Consulting", "Partnerships"],
      timezone: "GMT (UTC+0)",
    },
    {
      id: "canada",
      city: "Toronto",
      country: "Canada",
      address: "100 King Street West, Suite 5600, Toronto, ON M5X 1C9",
      phone: "+1 (416) 555 0145",
      email: "ca@digitonix.in",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM EST",
      coords: { lat: 43.6532, lng: -79.3832 },
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800&q=80",
      features: ["North America Support", "Talent Hub"],
      timezone: "EST (UTC-5)",
    },
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "Digital Marketing",
    "UI/UX Design",
    "AI & Machine Learning",
    "Cloud Solutions",
    "Cybersecurity",
    "Other",
  ];

  const budgetRanges = [
    "$5k - $10k",
    "$10k - $25k",
    "$25k - $50k",
    "$50k+",
    "Not sure yet",
  ];

  const faqs = [
    {
      q: "What is your typical response time?",
      a: "We aim to respond to all inquiries within 24 hours during business days. For urgent queries, feel free to call us directly at +91 9887120429 for immediate assistance.",
    },
    {
      q: "Do you offer free consultations?",
      a: "Yes! We offer a free 30-minute discovery call to discuss your project needs, goals, and how we can help you achieve them. No commitment required.",
    },
    {
      q: "Can I visit your office?",
      a: "Absolutely. We welcome clients to visit any of our global offices in Jaipur, New York, London, or Toronto. Just let us know in advance and we'll arrange a meeting with our team.",
    },
    {
      q: "What industries do you specialize in?",
      a: "We have extensive experience across fintech, healthcare, e-commerce, education, enterprise, real estate, logistics, and many other industries. Our team adapts to your specific domain requirements.",
    },
    {
      q: "How do you handle project confidentiality?",
      a: "We sign comprehensive NDAs and confidentiality agreements before any project discussion. Your ideas, data, and intellectual property are completely protected.",
    },
    {
      q: "What is your project engagement process?",
      a: "Our process includes: 1) Initial consultation and requirement gathering, 2) Proposal and quotation, 3) NDA signing, 4) Project kickoff with dedicated team, 5) Regular updates and milestones, 6) Delivery and ongoing support.",
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "Linkedin", url: "https://www.linkedin.com/company/", color: "hover:bg-[#0a66c2]" },
    { name: "Twitter", icon: "Twitter", url: "https://twitter.com/", color: "hover:bg-[#1da1f2]" },
    { name: "Facebook", icon: "Facebook", url: "https://www.facebook.com/", color: "hover:bg-[#1877f2]" },
    { name: "Instagram", icon: "Instagram", url: "https://www.instagram.com/", color: "hover:bg-[#e4405f]" },
  ];

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
          streetAddress: "D-42, Malviya Nagar",
          addressLocality: "Jaipur",
          addressRegion: "Rajasthan",
          postalCode: "302017",
          addressCountry: "IN",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+91-9887120429",
            contactType: "sales",
            email: "hello@digitonix.in",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
            hoursAvailable: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:30",
              closes: "18:30",
              timeZone: "Asia/Kolkata",
            },
          },
          {
            "@type": "ContactPoint",
            telephone: "+1-212-555-0199",
            contactType: "sales",
            email: "us@digitonix.in",
            areaServed: ["US", "CA"],
            availableLanguage: ["English"],
            hoursAvailable: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "18:00",
              timeZone: "America/New_York",
            },
          },
          {
            "@type": "ContactPoint",
            telephone: "+44-20-7946-0123",
            contactType: "sales",
            email: "uk@digitonix.in",
            areaServed: ["GB", "EU"],
            availableLanguage: ["English"],
            hoursAvailable: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "17:30",
              timeZone: "Europe/London",
            },
          },
        ],
        sameAs: [
          "https://www.facebook.com/",
          "https://www.instagram.com/",
          "https://www.linkedin.com/company/",
          "https://twitter.com/",
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://www.digitonix.in/contact",
        url: "https://www.digitonix.in/contact",
        name: "Contact Us | Get Free Consultation | Digitonix",
        description:
          "Contact Digitonix for web development, mobile apps, digital marketing, UI/UX design, and AI solutions. Offices in India, USA, UK & Canada. Get a free consultation within 24 hours.",
        provider: {
          "@id": "https://www.digitonix.in/#organization",
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
            name: "Contact Us",
            item: "https://www.digitonix.in/contact",
          },
        ],
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
      <ContactClient
        initialData={{
          offices,
          services,
          budgetRanges,
          faqs,
          socialLinks,
          companyInfo: {
            phone: "+91 9887120429",
            email: "hello@digitonix.in",
            responseTime: "24 hours",
            consultationType: "Free 30-minute discovery call",
          },
        }}
      />
    </>
  );
}