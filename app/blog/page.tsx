// app/blog/page.tsx (Server Component)
import BlogClient from '@/components/blog/BlogClient';
import { Metadata } from 'next';
import { Suspense } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const title =
    "Digitonix Blog | Web Development, AI, SEO & Digital Growth Insights";

  const description = "Explore expert articles from Digitonix on Web Development, Artificial Intelligence, SEO, Digital Marketing, UI/UX Design, Software Development, Cloud Technologies, and business growth strategies.";

  const url = "https://www.digitonix.in/blog";
  const image = "https://www.digitonix.in/log.png";

  return {
    metadataBase: new URL("https://www.digitonix.in"),
    title,
    description,
    keywords: [
      "Digitonix",
      "Digitonix Blog",
      "Technology Blog",
      "Web Development",
      "Software Development",
      "Artificial Intelligence",
      "AI",
      "Machine Learning",
      "Next.js",
      "React",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Cloud Computing",
      "SEO",
      "Technical SEO",
      "Digital Marketing",
      "UI UX Design",
      "Business Growth",
      "Startup Technology",
      "Programming Tutorials",
      "Tech News",
      "Top it Company in world",
      "Website Development",
      "Mobile App Development",
      "Enterprise Solutions",
      "Automation",
      "Cyber Security",
      "Innovation",
      "Software Engineering"
    ],

    authors: [
      {
        name: "Digitonix",
        url: "https://www.digitonix.in",
      },
    ],
    creator: "Digitonix",
    publisher: "Digitonix",
    category: "Technology",
    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title,
      description,
      siteName: "Digitonix",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Digitonix Blog - Technology & Digital Innovation",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@digitonix", // Change if you have a Twitter/X account
      images: [image],
    },
    applicationName: "Digitonix",
    appleWebApp: {
      capable: true,
      title: "Digitonix",
      statusBarStyle: "default",
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    other: {
      "theme-color": "#0F172A",
      "msapplication-TileColor": "#0F172A",
    },
  };
}

// API base URL - use environment variable for production
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://g-backend-gamma.vercel.app/api/v1';

// Server-side fetch function for blogs
async function fetchBlogs() {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs?sortBy=createdAt&sortOrder=desc&limit=12&status=published`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Enable ISR with revalidation
      next: { revalidate: 600 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
}

// Server-side fetch function for categories
async function fetchCategories() {
  try {
    const response = await fetch(`${API_BASE_URL}/blog-categories?isActive=true&limit=50`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Enable ISR with revalidation
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

async function BlogContent() {
  try {
    // Fetch blogs and categories in parallel
    const [blogsResponse, categoriesResponse] = await Promise.all([
      fetchBlogs(),
      fetchCategories(),
    ]);

    const blogPosts = blogsResponse.data || [];
    const categoryData = categoriesResponse.data || [];
    const categories = ['All', ...categoryData.map((cat: any) => cat.name)];

    return <BlogClient initialBlogs={blogPosts} initialCategories={categories} />;
  } catch (error) {
    console.error('Error loading blog content:', error);
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-4">📝</div>
          <h2 className="text-2xl font-semibold text-[#0f2a6b] mb-2">
            Unable to load blog posts
          </h2>
          <p className="text-[#4a5578] mb-6">
            We're having trouble loading the blog content. Please try again later or contact our support team.
          </p>
          <a
            href="/blog"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Refresh Page
          </a>
        </div>
      </div>
    );
  }
}

export default function BlogPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Skeleton */}
            <div className="text-center py-8">
              <div className="h-12 w-2/3 mx-auto bg-gray-200 rounded-lg animate-pulse mb-4" />
              <div className="h-4 w-1/2 mx-auto bg-gray-200 rounded animate-pulse" />
            </div>

            {/* Category Filter Skeleton */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {[...Array(10)].map((_, index) => (
                <div
                  key={index}
                  className="h-10 w-24 bg-gray-200 rounded-full animate-pulse"
                />
              ))}
            </div>

            {/* Blog Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(9)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm"
                >
                  {/* Image Skeleton */}
                  <div className="h-48 bg-gray-200 animate-pulse" />

                  {/* Content Skeleton */}
                  <div className="p-6 space-y-4">
                    {/* Category & Date */}
                    <div className="flex gap-2">
                      <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse" />
                      <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse" />
                    </div>

                    {/* Title */}
                    <div className="space-y-2">
                      <div className="h-6 w-full bg-gray-200 rounded animate-pulse" />
                      <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                      <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
                    </div>

                    {/* Author & Read More */}
                    <div className="flex justify-between items-center pt-4">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
                        <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                      </div>
                      <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    >
      <BlogContent />
    </Suspense>
  );
}