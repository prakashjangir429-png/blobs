// app/blog/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/pages/aboutus";
import { HeroSection, MainContent, RelatedArticles } from "@/components/blog/blogcom";
import { getBlogBySlug } from "@/lib/blogService";
import Image from "next/image";
import { Calendar, Clock, User } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const API_BASE_URL = 'https://g-backend-gamma.vercel.app/api/v1';

// Server-side fetch function for blogs
async function fetchBlog(slug: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs/slug/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Use no-store for first render, or force-cache
      // Remove revalidate for now to test
    });

    if (!response.ok) {
      // Log detailed error
      console.error(`API Error: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return null; // Return null instead of throwing
  }
}

// Add generateStaticParams for static generation
export async function generateStaticParams() {
  try {
    // Fetch all blog slugs
    const response = await fetch(`${API_BASE_URL}/blogs`, {
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) return [];

    const data = await response.json();
    const blogs = data.data || [];

    return blogs.map((blog: any) => ({
      slug: blog.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await fetchBlog(slug);
  const post = data?.data;

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const title = post.metaTitle || post.title || 'Blog Post';
  const description = post.metaDescription || post.excerpt || 'Read this blog post on Digitonix';
  const keywords = post.metaKeywords || post.tags || [];

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://digitonix.in";
  const canonicalUrl = `${baseUrl}/blog/${post.slug}`;

  return {
    title,
    description,
    keywords: Array.isArray(keywords) ? keywords.join(", ") : keywords,
    authors: post.author ? [{ name: post.author }] : undefined,
    category: post.category,
    openGraph: {
      title,
      description,
      type: "article",
      url: canonicalUrl,
      images: post.featuredImage ? [{ url: post.featuredImage }] : [],
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt || post.createdAt,
      authors: post.author ? [post.author] : [],
      tags: Array.isArray(post.tags) ? post.tags : [],
      section: post.category,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
  const data = await fetchBlog(slug);
  const post = data?.data;

  // If no post found, show a proper 404
  if (!post) {
    notFound();
  }

  // Ensure post has required fields with fallbacks
  const safePost = {
    ...post,
    title: post.title || 'Untitled Post',
    content: post.content || '',
    excerpt: post.excerpt || '',
    featuredImage: post.featuredImage || '',
    author: post.author || 'Digitonix Team',
    tags: post.tags || [],
    category: post.category || 'General',
    createdAt: post.createdAt || new Date().toISOString(),
    readTime: post.readTime || 5,
    slug: post.slug || slug,
  };

  // Structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: safePost.title,
    description: safePost.excerpt || safePost.content.slice(0, 160),
    image: safePost.featuredImage || undefined,
    datePublished: safePost.createdAt,
    dateModified: post.updatedAt || safePost.createdAt,
    author: {
      "@type": "Person",
      name: safePost.author,
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
      "@id": `https://digitonix.in/blog/${safePost.slug}`,
    },
    keywords: safePost.tags?.join(", "),
    articleSection: safePost.category,
    wordCount: safePost.content?.split(/\s+/).length || 0,
    timeRequired: `PT${safePost.readTime}M`,
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen">
        <>
          <section className="blog-detail-her bg-gradient-to-br from-white to-[#1a3fa0] relative w-full">
            {/* Background */}
            {/* <div className="absolute inset-0">
              {post.featuredImage ? (
                <Image
                  src={safePost.featuredImage}
                  alt={safePost.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#0f2a6b] to-[#1a3fa0]" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0f2a6b]/90 to-white" />
            </div> */}

            <div className="max-w-7xl mx-auto px-4 sm:px-1 relative z-10 pb-6 py-36 w-full">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1.5 bg-[#e8a020] text-[#0f2a6b] text-xs font-bold rounded-full uppercase tracking-wider">
                    {safePost.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-300 text-sm font-medium">
                    <Calendar size={14} />
                    {safePost?.createdAt
                      ? new Date(safePost.createdAt).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                      : "Date not available"}
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-300 text-sm font-medium">
                    <Clock size={14} /> {safePost.readTime} min read
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-300 text-sm font-medium">
                    <User size={14} /> {safePost.author}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-semibold text-white leading-[1.3] mb-6">
                  {safePost.title}
                </h1>
              </div>
            </div>
          </section>
        </>

        {/* ── MAIN CONTENT ── */}
        <MainContent post={safePost} headings={[]} />

        {/* ── RELATED ARTICLES ── */}
        <RelatedArticles post={safePost} />

        {/* ── CTA SECTION ── */}
        <CTASection />
      </article>
    </>
  );
}