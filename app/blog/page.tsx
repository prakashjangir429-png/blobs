"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useRef, useEffect } from "react";
import {
  Search,
  Calendar,
  Clock,
  User,
  ArrowRight,
  TrendingUp,
  Mail,
  CheckCircle,
  ChevronRight,
  Filter,
  Share2,
  Bookmark,
  MessageSquare,
  BadgeCheck,
  Trophy,
  Users,
  Globe,
  Sparkles,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import { CTASection } from "@/components/pages/aboutus";
import { BlogCard } from "@/components/pages/blogs";

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
  },
  {
    id: 3,
    slug: "seo-strategies-for-ecommerce-websites",
    title: "Proven SEO Strategies for E-Commerce Websites",
    excerpt:
      "Learn how to optimize your online store for search engines and drive more organic traffic and sales.",
    category: "Digital Marketing",
    author: "Amit Patel",
    date: "June 5, 2024",
    readTime: "10 min read",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1571721795195-a2ca2d337069?auto=format&fit=crop&w=1200&q=80",
    tags: ["SEO", "E-Commerce", "Marketing"],
  },
  {
    id: 4,
    slug: "ai-in-business-how-to-leverage-llms",
    title: "AI in Business: How to Leverage LLMs for Growth",
    excerpt:
      "Discover practical ways to integrate large language models into your business operations for increased efficiency.",
    category: "AI & ML",
    author: "Neha Gupta",
    date: "May 28, 2024",
    readTime: "7 min read",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    tags: ["AI", "Machine Learning", "Business"],
  },
  {
    id: 5,
    slug: "ui-ux-design-principles-2024",
    title: "Essential UI/UX Design Principles for 2024",
    excerpt:
      "Master the fundamental design principles that create exceptional user experiences and drive engagement.",
    category: "Design",
    author: "Neha Gupta",
    date: "May 20, 2024",
    readTime: "9 min read",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799314346d?auto=format&fit=crop&w=1200&q=80",
    tags: ["UI/UX", "Design", "User Experience"],
  },
  {
    id: 6,
    slug: "cloud-migration-strategy-best-practices",
    title: "Cloud Migration Strategy: Best Practices for Success",
    excerpt:
      "A step-by-step guide to planning and executing a successful cloud migration for your business.",
    category: "Cloud",
    author: "Rajesh Kumar",
    date: "May 15, 2024",
    readTime: "11 min read",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    tags: ["Cloud", "AWS", "DevOps"],
  },
];

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

/* ─────────────────────────────────────────────
   MAIN BLOG PAGE
───────────────────────────────────────────── */
export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isFilterSticky, setIsFilterSticky] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = filteredPosts.find((p) => p.featured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter((p) => p.id !== featuredPost?.id);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO SECTION ── */}
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />

      {/* ── STICKY FILTERS ── */}
      <div
        className={`sticky top-18 bg-white z-40 transition-all duration-300 ${isFilterSticky
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#1a3fa0]/10 py-2"
            : "bg-transparent py-3"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <div className="flex items-center gap-2 text-[#4a5578] mr-1">
              <Filter size={16} />
              <span className="text-xs font-medium uppercase tracking-wider">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${selectedCategory === category
                    ? "bg-[#0f2a6b] text-white shadow-lg shadow-[#1a3fa0]/20"
                    : "bg-white text-[#1a3fa0] border border-[#1a3fa0]/15 hover:border-[#1a3fa0]/40 hover:shadow-md"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── BLOG GRID ── */}
      <BlogGrid
        featuredPost={featuredPost}
        regularPosts={regularPosts}
        filteredPosts={filteredPosts}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        setSearchQuery={setSearchQuery}
        setSelectedCategory={setSelectedCategory}
      />

      {/* ── NEWSLETTER ── */}
      <NewsletterSection
        email={email}
        setEmail={setEmail}
        subscribed={subscribed}
        handleSubscribe={handleSubscribe}
      />

      {/* ── CTA SECTION ── */}
      <CTASection />
    </div>
  );
}

/* ─────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────── */
function HeroSection({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
}: {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  categories: string[];
}) {
  return (
    <>
      <style>{`
        .blog-hero-section {
          position: relative;
          overflow: hidden;
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .gold-word { color: #e8a020; }
      `}</style>

      <section className="blog-hero-section relative w-full">
        {/* Parallax Background - Same as services page */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl" />

          {/* Grid Pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.4) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-semibold text-[#0f2a6b] leading-[1.1] mb-6"
            >
              Insights & <span className="gold-word">Resources</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-[#4a5578] leading-relaxed mb-6 max-w-4xl mx-auto"
            >
              Discover industry insights, technical deep-dives, and strategic
              tips to help your business thrive in the digital age.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center justify-center gap-6 mb-6"
            >
              {[
                { icon: BadgeCheck, text: "ISO 9001:2015 Certified" },
                { icon: Trophy, text: "13+ Years Experience" },
                { icon: Users, text: "55+ Expert Engineers" },
                { icon: Globe, text: "25+ Countries Served" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-[#4a5578]">
                  <item.icon className="w-4 h-4 text-[#e8a020]" />
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto relative"
            >
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4a5578]"
                size={20}
              />
              <input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-full border border-[#1a3fa0]/15 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1a3fa0] focus:border-transparent text-[#0f2a6b] placeholder:text-[#4a5578]/60 bg-white"
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-[#1a3fa0]/20 flex justify-center">
            <div className="w-1 h-2 bg-[#1a3fa0] rounded-full mt-2" />
          </div>
        </motion.div>
      </section>
    </>
  );
}

/* ─────────────────────────────────────────────
   BLOG GRID
───────────────────────────────────────────── */
function BlogGrid({
  featuredPost,
  regularPosts,
  filteredPosts,
  searchQuery,
  selectedCategory,
  setSearchQuery,
  setSelectedCategory,
}: {
  featuredPost: any;
  regularPosts: any[];
  filteredPosts: any[];
  searchQuery: string;
  selectedCategory: string;
  setSearchQuery: (q: string) => void;
  setSelectedCategory: (cat: string) => void;
}) {
  return (
    <section className="py-10 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Latest <span className="text-[#e8a020]">Articles</span>
          </h2>
          <p className="text-[#4a5578] max-w-2xl mx-auto">
            Stay updated with our latest insights and industry trends
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && !searchQuery && selectedCategory === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link href={`/blog/${featuredPost.slug}`} className="group block relative rounded-2xl overflow-hidden shadow-lg aspect-[21/5]">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a6b] via-[#0f2a6b]/60 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 md:px-10 w-full md:w-3/4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-[#e8a020] text-[#0f2a6b] text-xs font-bold rounded-full uppercase tracking-wider">
                    Featured
                  </span>
                  <span className="flex items-center gap-1 text-gray-300 text-sm font-medium">
                    <Calendar size={14} /> {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1 text-gray-300 text-sm font-medium">
                    <Clock size={14} /> {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-[#e8a020] transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-300 text-sm line-clamp-2 mb-2 max-w-3xl">
                  {featuredPost.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-[#e8a020] font-semibold group-hover:gap-3 transition-all">
                  Read Article <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {regularPosts.length > 0 ? (
              regularPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                  category={post.category}
                  date={post.date}
                  readTime={post.readTime}
                  slug={post.slug}
                  views={post.views}
                  featured={post.featured}
                  index={index}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#f8f9fc] mb-4 border border-[#1a3fa0]/10">
                  <Search size={32} className="text-[#4a5578]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0f2a6b] mb-2">No articles found</h3>
                <p className="text-[#4a5578]">Try adjusting your search or category filter.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="mt-4 text-[#e8a020] font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   NEWSLETTER SECTION
───────────────────────────────────────────── */
function NewsletterSection({
  email,
  setEmail,
  subscribed,
  handleSubscribe,
}: {
  email: string;
  setEmail: (e: string) => void;
  subscribed: boolean;
  handleSubscribe: (e: React.FormEvent) => void;
}) {
  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-12 bg-[#0f2a6b] overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#e8a020]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#2952cc]/10 blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
            <Mail size={32} className="text-[#e8a020]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Stay Ahead of the Curve
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 10,000+ subscribers. Get the latest insights on tech, design,
            and marketing delivered straight to your inbox every week.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e8a020] focus:border-transparent transition-all"
              />
              {subscribed && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-green-400 flex items-center gap-1 text-sm font-medium"
                >
                  <CheckCircle size={16} /> Subscribed!
                </motion.div>
              )}
            </div>
            <button
              type="submit"
              disabled={subscribed}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#e8a020] to-[#f0b832] text-[#0f2a6b] font-semibold shadow-lg shadow-[#e8a020]/25 hover:shadow-[#e8a020]/40 hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {subscribed ? "Welcome!" : "Subscribe Now"}
            </button>
          </form>

          <p className="mt-4 text-xs text-gray-400">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}