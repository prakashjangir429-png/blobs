import { Metadata } from "next";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  Calendar,
  Clock,
  User,
  Share2,
  Copy,
  Check,
  Twitter,
  Linkedin,
  Facebook,
  List,
  ChevronRight,
} from "lucide-react";
import { CTASection } from "@/components/pages/aboutus";
import { cache } from "react";
import { HeroSection, MainContent, RelatedArticles } from "@/components/blog/blogcom";
import { getBlogBySlug } from "@/lib/blogService";

// Types
interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featuredImage?: string;
  author: string;
  category: string;
  tags: string[];
  readTime: number;
  createdAt: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];
  views: number;
  likes: number;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getBlogBySlug(slug);
  const post = data?.data

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt || post.content.slice(0, 160);
  const keywords = post.metaKeywords || post.tags || [];
  
  // Generate canonical URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://yourdomain.com";
  const canonicalUrl = `${baseUrl}/blog/${post.slug}`;

  return {
    title: title,
    description: description,
    keywords: keywords.join(", "),
    authors: [{ name: post.author }],
    category: post.category,
    openGraph: {
      title: title,
      description: description,
      type: "article",
      url: canonicalUrl,
      images: post.featuredImage ? [{ url: post.featuredImage }] : [],
      article: {
        publishedTime: post.createdAt,
        authors: [post.author],
        tags: post.tags,
        section: post.category,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
    alternates: {
      canonical: canonicalUrl,
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
  };
}

// Helper Components (Client-side only)
const CodeBlock = ({ language, code }: { language: string; code: string }) => (
  <div className="my-6 rounded-xl overflow-hidden bg-[#0f2a6b] border border-[#1a3fa0]/20 shadow-lg">
    <div className="flex items-center justify-between px-4 py-2.5 bg-[#1a3fa0]/20 border-b border-[#1a3fa0]/20">
      <span className="text-xs font-mono text-[#e8a020] lowercase">{language}</span>
      <button className="text-xs text-[#4a5578] hover:text-white transition-colors flex items-center gap-1">
        <Copy size={12} /> Copy
      </button>
    </div>
    <pre className="p-4 overflow-x-auto text-sm font-mono text-[#c8d0e0] leading-relaxed">
      <code>{code}</code>
    </pre>
  </div>
);

// Main Server Component
export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const data = await getBlogBySlug(slug);
  const post = data?.data


  if (!post) {
    notFound();
  }

  // Extract headings for table of contents
  // const headings = post.content
  //   .split("\n")
  //   .filter((line: string) => line.startsWith("## ") || line.startsWith("### "))
  //   .map((line: string) => ({
  //     id: line
  //       .replace(/^#+ /, "")
  //       .toLowerCase()
  //       .replace(/[^\w\s-]/g, "")
  //       .replace(/\s+/g, "-"),
  //     text: line.replace(/^#+ /, ""),
  //     level: line.startsWith("### ") ? 3 : 2,
  //   }));

  // Structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt || post.content.slice(0, 160),
    image: post.featuredImage,
    datePublished: post.createdAt,
    dateModified: post.createdAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Digitonix",
      logo: {
        "@type": "ImageObject",
        url: "https://yourdomain.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://yourdomain.com/blog/${post.slug}`,
    },
    keywords: post.tags?.join(", "),
    articleSection: post.category,
    wordCount: post.content.split(/\s+/).length,
    timeRequired: `PT${post.readTime}M`,
  };

  return (
    <article className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO SECTION ── */}
      <HeroSection post={post} />

      {/* ── MAIN CONTENT ── */}
      <MainContent post={post} headings={[]} />

      {/* ── RELATED ARTICLES ── */}
      <RelatedArticles post={post} />

      {/* ── CTA SECTION ── */}
      <CTASection />
    </article>
  );
}