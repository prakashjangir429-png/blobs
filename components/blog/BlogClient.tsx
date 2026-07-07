// app/blog/BlogClient.tsx
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
  Eye,
} from "lucide-react";
import { CTASection } from "@/components/pages/aboutus";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  image: string;
  tags: string[];
  views?: number;
}

interface BlogClientProps {
  initialBlogs: BlogPost[];
  initialCategories: string[];
}

export default function BlogClient({ initialBlogs, initialCategories }: BlogClientProps) {
  const [blogs] = useState<BlogPost[]>(initialBlogs);
  const [categories] = useState<string[]>(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isFilterSticky, setIsFilterSticky] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const filteredPosts = useMemo(() => {
    return blogs.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [blogs, selectedCategory, searchQuery]);

  const featuredPost = filteredPosts.find((p) => p.featured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter((p) => p.slug != featuredPost?.slug);


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

  // Handle scroll for sticky filter
  useEffect(() => {
    const handleScroll = () => {
      if (filterRef.current) {
        const rect = filterRef.current.getBoundingClientRect();
        setIsFilterSticky(rect.top <= 72);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        ref={filterRef}
        className={`sticky top-[72px] bg-white z-40 transition-all duration-300 ${
          isFilterSticky
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
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
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
        {/* Parallax Background */}
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
            <Link href={`/blog/${featuredPost.slug}`} className="group block relative rounded-2xl overflow-hidden shadow-lg aspect-[21/8] sm:aspect-[21/6]">
              <Image
                src={featuredPost.featuredImage}
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
                  image={post.featuredImage}
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
   BLOG CARD COMPONENT
───────────────────────────────────────────── */
function BlogCard({
  title,
  excerpt,
  image,
  category,
  date,
  readTime,
  slug,
  views = 0,
  featured = false,
  index,
}: {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  views?: number;
  featured?: boolean;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group relative bg-white rounded-xl border border-[#1a3fa0]/10 overflow-hidden hover:shadow-lg hover:shadow-[#1a3fa0]/5 transition-all duration-300 hover:-translate-y-1"
    >
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative h-56 overflow-hidden bg-[#f8f9fc]">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#1a3fa0]/10 to-[#e8a020]/10 flex items-center justify-center">
              <span className="text-[#4a5578] text-sm">No image</span>
            </div>
          )}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 bg-[#e8a020] text-[#0f2a6b] text-xs font-bold rounded-full uppercase tracking-wider">
              {category}
            </span>
            {featured && (
              <span className="px-3 py-1 bg-[#0f2a6b] text-white text-xs font-bold rounded-full uppercase tracking-wider">
                Featured
              </span>
            )}
          </div>
          {views > 0 && (
            <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs">
              <Eye size={12} />
              <span>{views}</span>
            </div>
          )}
        </div>

        <div className="p-5">
          <div className="flex items-center gap-3 text-xs text-[#4a5578] mb-3">
            <span className="flex items-center gap-1">
              <Calendar size={12} /> {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} /> {readTime}
            </span>
          </div>

          <h3 className="text-lg font-semibold text-[#0f2a6b] mb-2 line-clamp-2 group-hover:text-[#e8a020] transition-colors">
            {title}
          </h3>

          <p className="text-[#4a5578] text-sm line-clamp-2 mb-4">
            {excerpt}
          </p>

          <span className="inline-flex items-center gap-2 text-[#1a3fa0] font-semibold text-sm group-hover:gap-3 transition-all">
            Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    </motion.article>
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