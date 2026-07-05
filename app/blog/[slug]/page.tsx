"use client";

import { useParams, useRouter } from "next/navigation";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Bookmark,
  MessageSquare,
  Copy,
  Check,
  Twitter,
  Linkedin,
  Facebook,
  ChevronRight,
  TrendingUp,
  Quote,
  Code,
  List,
  BadgeCheck,
  Trophy,
  Users,
  Globe,
  Sparkles,
  ArrowUpRight,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Eye,
  Heart,
  MessageCircle,
} from "lucide-react";
import { CTASection } from "@/components/pages/aboutus";

/* ─────────────────────────────────────────────
   BRAND COLORS (matching services page)
   Primary: #0f2a6b / #1a3fa0 / #2952cc (deep navy)
   Accent:  #e8a020 / #f0b832 (gold)
   Text:    #4a5578 (body), #0f2a6b (headings)
   BG:      #f8f9fc / #f4f6fb (light sections)
   Cards:   white with border-[#1a3fa0]/10
───────────────────────────────────────────── */

const blogPosts = [
  {
    id: 1,
    slug: "nextjs-vs-react-which-one-to-choose",
    title: "Next.js vs React: Which One Should You Choose in 2024?",
    excerpt:
      "A comprehensive comparison of Next.js and React to help you make the right decision for your next web project.",
    category: "Web Development",
    author: "Rajesh Kumar",
    date: "June 15, 2024",
    readTime: "8 min read",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Next.js", "Web Development"],
    content: `
## Introduction

Choosing the right framework for your web development project is crucial. In this comprehensive guide, we'll compare Next.js and React to help you make an informed decision.

## What is React?

React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently.

### Key Features of React
- Component-based architecture
- Virtual DOM for performance
- Unidirectional data flow
- Rich ecosystem and community support

## What is Next.js?

Next.js is a React framework that provides additional features like server-side rendering, static site generation, and API routes out of the box.

### Key Features of Next.js
- Server-side rendering (SSR)
- Static site generation (SSG)
- API routes
- Image optimization
- Automatic code splitting

## When to Use React

React is ideal for:
- Single-page applications (SPAs)
- Projects where you need complete control over the build process
- Applications with complex client-side interactions

## When to Use Next.js

Next.js is perfect for:
- SEO-critical websites
- E-commerce platforms
- Blogs and content-driven sites
- Projects requiring both static and dynamic content

## Performance Comparison

Both frameworks offer excellent performance, but Next.js has an edge in initial load time due to its server-side rendering capabilities.

- **React**: Slower initial load, faster subsequent navigation
- **Next.js**: Faster initial load, optimized for SEO

## Conclusion

Both React and Next.js are powerful tools. Choose React for SPA-style applications and Next.js when you need SEO benefits and server-side capabilities.
  `,
  },
  {
    id: 2,
    slug: "mobile-app-development-trends-2024",
    title: "Top Mobile App Development Trends to Watch in 2024",
    excerpt:
      "Stay ahead of the curve with these emerging trends in mobile app development that will shape the industry.",
    category: "Mobile Apps",
    author: "Priya Sharma",
    date: "June 10, 2024",
    readTime: "6 min read",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Mobile", "Flutter", "React Native"],
    content: `
## The Future of Mobile App Development

The mobile app landscape is evolving rapidly. Here are the top trends you need to know in 2024.

## 1. AI Integration

Artificial intelligence is becoming a standard feature in mobile apps.

### Applications of AI in Mobile Apps
- Personalization
- Chatbots and virtual assistants
- Predictive analytics
- Image and voice recognition

## 2. Cross-Platform Development

Flutter and React Native continue to dominate the cross-platform space.

### Benefits of Cross-Platform
- Single codebase for iOS and Android
- Faster development cycles
- Cost-effective solutions
- Consistent user experience

## 3. 5G Technology

5G is enabling new possibilities for mobile apps.

### 5G Capabilities
- Faster download speeds
- Lower latency
- Enhanced gaming experiences
- Improved AR/VR applications

## 4. Wearable Technology

Integration with smartwatches and other wearables is becoming essential.

### Wearable Use Cases
- Fitness tracking
- Health monitoring
- Notifications and alerts

## 5. Blockchain and Mobile

Blockchain technology is finding its way into mobile apps.

### Blockchain Applications
- Secure transactions
- Digital identity verification
- Supply chain tracking

## Conclusion

Staying ahead of these trends will help you create innovative and competitive mobile applications.
  `,
  },
  // Add more posts with content...
];

// Helper Components
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

const ContentParser = ({ content }: { content: string }) => {
  const lines = content.split("\n");
  const elements: any[] = [];
  let inCodeBlock = false;
  let codeContent = "";
  let codeLanguage = "javascript";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("```")) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeLanguage = line.replace("```", "") || "javascript";
        codeContent = "";
      } else {
        inCodeBlock = false;
        elements.push(<CodeBlock key={`code-${i}`} language={codeLanguage} code={codeContent} />);
      }
      continue;
    }

    if (inCodeBlock) {
      codeContent += line + "\n";
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          id={line.replace("## ", "").toLowerCase().replace(/\s+/g, "-")}
          className="text-2xl md:text-3xl font-bold text-[#0f2a6b] mt-12 mb-4 scroll-mt-24"
        >
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          id={line.replace("### ", "").toLowerCase().replace(/\s+/g, "-")}
          className="text-xl font-semibold text-[#0f2a6b] mt-8 mb-3 scroll-mt-24"
        >
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote
          key={i}
          className="border-l-4 border-[#e8a020] pl-6 py-3 my-6 bg-[#f8f9fc] italic text-[#4a5578] rounded-r-lg"
        >
          {line.replace("> ", "")}
        </blockquote>
      );
    } else if (line.startsWith("- ")) {
      if (!elements[elements.length - 1]?.type || elements[elements.length - 1].type !== "ul") {
        elements.push(<ul key={`ul-${i}`} className="list-disc list-inside space-y-2 my-4 text-[#4a5578] marker:text-[#e8a020]" />);
      }
      const lastEl = elements[elements.length - 1];
      if (lastEl.type === "ul") {
        lastEl.props.children.push(<li key={`li-${i}`}>{line.replace("- ", "")}</li>);
      }
    } else if (line.trim() === "") {
      elements.push(<div key={i} className="h-2" />);
    } else {
      elements.push(
        <p key={i} className="mb-4 text-base text-[#4a5578] leading-relaxed">
          {line}
        </p>
      );
    }
  }

  return <>{elements}</>;
};

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [post, setPost] = useState<any>(null);
  const [copied, setCopied] = useState(false);
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.slug === slug);
    if (!foundPost) {
      router.push("/404");
      return;
    }
    setPost(foundPost);

    const contentLines = foundPost.content.split("\n");
    const extractedHeadings = contentLines
      .filter((line) => line.startsWith("## ") || line.startsWith("### "))
      .map((line) => ({
        id: line.replace(/^#+ /, "").toLowerCase().replace(/\s+/g, "-"),
        text: line.replace(/^#+ /, ""),
        level: line.startsWith("### ") ? 3 : 2,
      }));
    setHeadings(extractedHeadings);
  }, [slug, router]);

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(post?.title || "");
    let shareUrl = "";

    if (platform === "twitter") shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    if (platform === "linkedin") shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    if (platform === "facebook") shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;

    if (shareUrl) window.open(shareUrl, "_blank");
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!post) return null;

  return (
    <article className="min-h-screen bg-white">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#e8a020] origin-left z-50"
        style={{ scaleX }}
      />

      {/* ── HERO SECTION ── */}
      <HeroSection post={post} />

      {/* ── MAIN CONTENT ── */}
      <MainContent post={post} headings={headings} handleShare={handleShare} copyLink={copyLink} copied={copied} />

      {/* ── RELATED ARTICLES ── */}
      <RelatedArticles post={post} />

      {/* ── CTA SECTION ── */}
      <CTASection />
    </article>
  );
}

/* ─────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────── */
function HeroSection({ post }: { post: any }) {
  return (
    <>
      <style>{`
        .blog-detail-hero {
          position: relative;
          overflow: hidden;
          min-height: 50vh;
          display: flex;
          align-items: flex-end;
          padding-top: 80px;
        }
        .gold-word { color: #e8a020; }
      `}</style>

      <section className="blog-detail-hero relative w-full">
        {/* Background */}
        <div className="absolute inset-0">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0f2a6b]/90 to-white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-1 relative z-10 pb-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1.5 bg-[#e8a020] text-[#0f2a6b] text-xs font-bold rounded-full uppercase tracking-wider">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-gray-300 text-sm font-medium">
                <Calendar size={14} /> {post.date}
              </span>
              <span className="flex items-center gap-1.5 text-gray-300 text-sm font-medium">
                <Clock size={14} /> {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-[1.1] mb-3">
              {post.title}
            </h1>

            <p className="text-base text-gray-300 max-w-3xl mb-3 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#e8a020]/20 flex items-center justify-center text-lg font-bold text-[#e8a020]">
                { "D"}
              </div>
              <div>
                <div className="text-white font-semibold">{"Digitonix"}</div>
                <div className="text-gray-400 text-sm">Published on {post.date}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
            <div className="w-1 h-2 bg-white/60 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>
    </>
  );
}

/* ─────────────────────────────────────────────
   MAIN CONTENT
───────────────────────────────────────────── */
function MainContent({
  post,
  headings,
  handleShare,
  copyLink,
  copied,
}: {
  post: any;
  headings: { id: string; text: string; level: number }[];
  handleShare: (platform: string) => void;
  copyLink: () => void;
  copied: boolean;
}) {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12">
          {/* Left: Article Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg prose-slate max-w-none"
            >
              <ContentParser content={post.content} />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-[#1a3fa0]/10">
                <div className="flex flex-wrap gap-2">
                  {post.tags?.map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-[#f8f9fc] text-[#1a3fa0] text-sm font-medium rounded-lg border border-[#1a3fa0]/10 hover:bg-[#e8a020] hover:text-[#0f2a6b] transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Author Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-12 p-6 bg-[#f8f9fc] rounded-2xl border border-[#1a3fa0]/08 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1a3fa0] to-[#2952cc] flex items-center justify-center text-white font-semibold text-2xl shadow-lg shrink-0">
                {post.author?.charAt(0) || "D"}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#0f2a6b] mb-1">Written by {post.author || "Our Team"}</h3>
                <p className="text-[#4a5578] text-sm mb-3">
                  Specializing in {post.category}, our experts bring years of industry experience to help you navigate
                  complex digital challenges.
                </p>
                <Link
                  href={`/blog?author=${post.author}`}
                  className="inline-flex items-center gap-2 text-[#e8a020] font-semibold text-sm hover:gap-3 transition-all"
                >
                  View all posts <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right: Sticky Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              {/* Table of Contents */}
              <div className="bg-[#f8f9fc] rounded-2xl p-6 border border-[#1a3fa0]/08">
                <h4 className="text-sm font-bold text-[#0f2a6b] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <List size={16} className="text-[#e8a020]" /> On This Page
                </h4>
                <nav className="space-y-2.5">
                  {headings.length > 0 ? (
                    headings.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={`block text-sm transition-colors hover:text-[#e8a020] ${
                          heading.level === 3
                            ? "ml-4 text-[#4a5578] text-xs"
                            : "font-medium text-[#0f2a6b]"
                        }`}
                      >
                        {heading.text}
                      </a>
                    ))
                  ) : (
                    <p className="text-sm text-[#4a5578] italic">No sections available</p>
                  )}
                </nav>
              </div>

              {/* Share */}
              <div className="bg-[#f8f9fc] rounded-2xl p-6 border border-[#1a3fa0]/08">
                <h4 className="text-sm font-bold text-[#0f2a6b] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Share2 size={16} className="text-[#e8a020]" /> Share This Article
                </h4>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleShare("twitter")}
                    className="flex-1 p-2.5 bg-white rounded-lg border border-[#1a3fa0]/10 hover:bg-[#1a3fa0] hover:text-white hover:border-[#1a3fa0] transition-all group"
                  >
                    <Twitter size={18} className="mx-auto text-[#4a5578] group-hover:text-white transition-colors" />
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="flex-1 p-2.5 bg-white rounded-lg border border-[#1a3fa0]/10 hover:bg-[#1a3fa0] hover:text-white hover:border-[#1a3fa0] transition-all group"
                  >
                    <Linkedin size={18} className="mx-auto text-[#4a5578] group-hover:text-white transition-colors" />
                  </button>
                  <button
                    onClick={() => handleShare("facebook")}
                    className="flex-1 p-2.5 bg-white rounded-lg border border-[#1a3fa0]/10 hover:bg-[#1a3fa0] hover:text-white hover:border-[#1a3fa0] transition-all group"
                  >
                    <Facebook size={18} className="mx-auto text-[#4a5578] group-hover:text-white transition-colors" />
                  </button>
                  <button
                    onClick={copyLink}
                    className="flex-1 p-2.5 bg-white rounded-lg border border-[#1a3fa0]/10 hover:bg-[#1a3fa0] hover:text-white hover:border-[#1a3fa0] transition-all group"
                  >
                    {copied ? (
                      <Check size={18} className="mx-auto text-green-500" />
                    ) : (
                      <Copy size={18} className="mx-auto text-[#4a5578] group-hover:text-white transition-colors" />
                    )}
                  </button>
                </div>
              </div>

              {/* Mini CTA */}
              <div className="bg-gradient-to-br from-[#0f2a6b] to-[#1a3fa0] rounded-2xl p-6 text-white shadow-xl">
                <h4 className="font-bold text-lg mb-2">Need Expert Help?</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Implementing these strategies? Let our team assist you.
                </p>
                <Link
                  href="/contact"
                  className="block w-full py-2.5 bg-[#e8a020] hover:bg-[#f0b832] text-[#0f2a6b] font-bold text-center rounded-lg transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   RELATED ARTICLES
───────────────────────────────────────────── */
function RelatedArticles({ post }: { post: any }) {
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-[#f8f9fc] border-t border-[#1a3fa0]/08">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Continue <span className="text-[#e8a020]">Reading</span>
          </h2>
          <p className="text-[#4a5578]">More insights from our experts</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {relatedPosts.map((relPost, index) => (
            <motion.div
              key={relPost.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <Link href={`/blog/${relPost.slug}`} className="block">
                <div className="bg-white rounded-2xl overflow-hidden border border-[#1a3fa0]/08 hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relPost.image}
                      alt={relPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-[#e8a020] text-[#0f2a6b] text-xs font-bold rounded-full uppercase tracking-wider">
                      {relPost.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#0f2a6b] mb-2 line-clamp-2 group-hover:text-[#e8a020] transition-colors">
                      {relPost.title}
                    </h3>
                    <p className="text-sm text-[#4a5578] line-clamp-2 mb-3">{relPost.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-[#4a5578]">
                      <span>{relPost.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {relPost.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}