// app/blog/page.tsx (Server Component)
import BlogClient from '@/components/blog/BlogClient';
import { getAllBlogs, getAllCategories } from '@/lib/blogService';
import { Metadata } from 'next';
import { Suspense } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const title =
    "Digitonix Blog | Web Development, AI, SEO & Digital Growth Insights";

  const description =
    "Explore expert articles from Digitonix on Web Development, Artificial Intelligence, SEO, Digital Marketing, UI/UX Design, Software Development, Cloud Technologies, and business growth strategies.";

  const url = "https://digitonix.in/blog";
  const image = "https://digitonix.in/log.png";

  return {
    metadataBase: new URL("https://digitonix.in"),
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
        url: "https://digitonix.in",
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


async function BlogContent() {
  const [blogsResponse, categoriesResponse] = await Promise.all([
    getAllBlogs({
      sortBy: 'createdAt',
      sortOrder: 'desc',
      limit: 12,
    }),
    getAllCategories({
      isActive: true,
      limit: 50,
    }),
  ]);

  const blogPosts = blogsResponse.data;
  const categories = ['All', ...categoriesResponse.data.map((cat) => cat.name)];

  return <BlogClient initialBlogs={blogPosts} initialCategories={categories} />;
}
export default function BlogPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-24 mt-24">
              <div className="h-20 w-[50%] bg-gray-200 rounded-lg mx-auto mb-4 animate-pulse" />
              <div className="h-20 w-[70%] bg-gray-200 rounded-lg mx-auto mb-3 animate-pulse" />
              <div className="h-16 w-[50%] bg-gray-200 rounded-lg mx-auto mb-4 animate-pulse" />
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
// Server Component - fetches data on the server
// export default async function BlogPage() {
//   try {
//     // Fetch blogs and categories in parallel
//     const [blogsResponse, categoriesResponse] = await Promise.all([
//       getAllBlogs({
//         sortBy: 'createdAt',
//         sortOrder: 'desc',
//         limit: 12,
//       }),
//       getAllCategories({
//         isActive: true,
//         limit: 50,
//       }),
//     ]);
//     const blogPosts = blogsResponse.data

//     const categories = ['All', ...categoriesResponse.data.map((cat) => cat.name)];
//     return <BlogClient initialBlogs={blogPosts} initialCategories={categories} />;
//   } catch (error) {
//     console.error('Error fetching blog data:', error);
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-semibold text-[#0f2a6b] mb-2">
//             Unable to load blog posts
//           </h2>
//           <p className="text-[#4a5578]">
//             Please try again later or contact support.
//           </p>
//         </div>
//       </div>
//     );
//   }
// }