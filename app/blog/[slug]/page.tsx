// app/blog/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/pages/aboutus";
import { HeroSection, MainContent, RelatedArticles } from "@/components/blog/blogcom";
import { getBlogBySlug } from "@/lib/blogService";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getBlogBySlug(slug);
  const post = data?.data;

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt || post.content.slice(0, 160);
  const keywords = post.metaKeywords || post.tags || [];

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://digitonix.in";
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

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const data = await getBlogBySlug(slug);
  const post = data?.data;

  if (!post) {
    notFound();
  }

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
        url: "https://digitonix.in/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://digitonix.in/blog/${post.slug}`,
    },
    keywords: post.tags?.join(", "),
    articleSection: post.category,
    wordCount: post.content.split(/\s+/).length,
    timeRequired: `PT${post.readTime}M`,
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen bg-white">
        {/* ── HERO SECTION ── */}
        <HeroSection post={post} />

        {/* ── MAIN CONTENT ── */}
        <MainContent post={post} headings={[]} />

        {/* ── RELATED ARTICLES ── */}
        <RelatedArticles post={post} />

        {/* ── CTA SECTION ── */}
        <CTASection />
      </article>
    </>
  );
}