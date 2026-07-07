// app/blog/page.tsx (Server Component)
import BlogClient from '@/components/blog/BlogClient';
import { getAllBlogs, getAllCategories } from '@/lib/blogService';
import { Metadata } from 'next';


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

// Server Component - fetches data on the server
export default async function BlogPage() {
  try {
    // Fetch blogs and categories in parallel
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
    const blogPosts = blogsResponse.data

    const categories = ['All', ...categoriesResponse.data.map((cat) => cat.name)];

    // Pass data to client component
    return <BlogClient initialBlogs={blogPosts} initialCategories={categories} />;
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#0f2a6b] mb-2">
            Unable to load blog posts
          </h2>
          <p className="text-[#4a5578]">
            Please try again later or contact support.
          </p>
        </div>
      </div>
    );
  }
}