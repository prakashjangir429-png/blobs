// app/blog/BlogClient.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useRef, useEffect, useCallback } from "react";
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
  ThumbsUp,
  Tag,
  X,
  Loader2,
} from "lucide-react";
import { CTASection } from "@/components/pages/aboutus";
import { BlogCard } from "../pages/blogs";
// import { toast } from "react-hot-toast";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featuredImage?: string;
  author?: string;
  category: string;
  categoryName?: string;
  tags?: string[];
  status: string;
  featured: boolean;
  views: number;
  likes: number;
  readTime: number;
  createdAt: string;
  updatedAt: string;
}

interface BlogClientProps {
  initialBlogs: BlogPost[];
  initialCategories: string[];
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export default function BlogClient({ initialBlogs, initialCategories }: BlogClientProps) {
  const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs);
  const [categories, setCategories] = useState<string[]>(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isFilterSticky, setIsFilterSticky] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("latest");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const blogsPerPage = 9;

  // Filter and sort blogs
  const filteredPosts = useMemo(() => {
    let filtered = blogs.filter((post) => {
      const matchesCategory = selectedCategory === "All" || 
        post.categoryName === selectedCategory || 
        post.category === selectedCategory;
      
      const matchesSearch = !searchQuery.trim() || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.excerpt || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.tags || []).some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (post.categoryName || '').toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    // Sort blogs
    switch (sortBy) {
      case 'oldest':
        filtered = [...filtered].sort((a, b) => 
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        break;
      case 'popular':
        filtered = [...filtered].sort((a, b) => (b.views || 0) - (a.views || 0));
        break;
      case 'liked':
        filtered = [...filtered].sort((a, b) => (b.likes || 0) - (a.likes || 0));
        break;
      case 'trending':
        filtered = [...filtered].sort((a, b) => 
          ((b.views || 0) + (b.likes || 0) * 2) - ((a.views || 0) + (a.likes || 0) * 2)
        );
        break;
      default: // latest
        filtered = [...filtered].sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }

    return filtered;
  }, [blogs, selectedCategory, searchQuery, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / blogsPerPage);
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * blogsPerPage;
    return filteredPosts.slice(startIndex, startIndex + blogsPerPage);
  }, [filteredPosts, currentPage]);

  const featuredPost = useMemo(() => {
    return filteredPosts.find((p) => p.featured) || filteredPosts[0];
  }, [filteredPosts]);

  const regularPosts = useMemo(() => {
    return paginatedPosts.filter((p) => p.slug !== featuredPost?.slug);
  }, [paginatedPosts, featuredPost]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, sortBy]);

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

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  }, []);

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  }, []);

  const handleSortChange = useCallback((sort: string) => {
    setSortBy(sort);
    setCurrentPage(1);
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      // toast.error('Please enter a valid email address');
      return;
    }

    setLoading(true);
    try {
      // Simulate API call - replace with actual newsletter API
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubscribed(true);
      // toast.success('Successfully subscribed to newsletter!');
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    } catch (error) {
      // toast.error('Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSortBy("latest");
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO SECTION ── */}
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={handleSearchChange}
        selectedCategory={selectedCategory}
        setSelectedCategory={handleCategoryChange}
        categories={categories}
        totalPosts={filteredPosts.length}
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
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#0f2a6b] text-white shadow-lg shadow-[#1a3fa0]/20"
                    : "bg-white text-[#1a3fa0] border border-[#1a3fa0]/15 hover:border-[#1a3fa0]/40 hover:shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
            
            {/* Sort Dropdown */}
            <div className="relative ml-2">
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="appearance-none px-4 py-2 rounded-full text-sm font-semibold bg-white text-[#1a3fa0] border border-[#1a3fa0]/15 hover:border-[#1a3fa0]/40 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1a3fa0] transition-all"
              >
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
                <option value="popular">Most Viewed</option>
                <option value="liked">Most Liked</option>
                <option value="trending">Trending</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4a5578] pointer-events-none" />
            </div>
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
        sortBy={sortBy}
        setSearchQuery={handleSearchChange}
        setSelectedCategory={handleCategoryChange}
        formatDate={formatDate}
      />

      {/* ── PAGINATION ── */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 py-8">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="rotate-180" size={20} />
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                currentPage === page
                  ? 'bg-[#0f2a6b] text-white'
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

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
  totalPosts,
}: {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  categories: string[];
  totalPosts: number;
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
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#4a5578] hover:text-[#0f2a6b]"
                >
                  <X size={18} />
                </button>
              )}
            </motion.div>

            {/* Post Count */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-sm text-[#4a5578]"
            >
              {totalPosts} article{totalPosts !== 1 ? 's' : ''} available
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
  sortBy,
  setSearchQuery,
  setSelectedCategory,
  formatDate,
}: {
  featuredPost: BlogPost | undefined;
  regularPosts: BlogPost[];
  filteredPosts: BlogPost[];
  searchQuery: string;
  selectedCategory: string;
  sortBy: string;
  setSearchQuery: (q: string) => void;
  setSelectedCategory: (cat: string) => void;
  formatDate: (date: string) => string;
}) {
  const hasActiveFilters = searchQuery || selectedCategory !== "All";

  return (
    <section className="py-10 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            {hasActiveFilters ? "Search Results" : "Latest "}
            {!hasActiveFilters && <span className="text-[#e8a020]">Articles</span>}
          </h2>
          <p className="text-[#4a5578] max-w-2xl mx-auto">
            {hasActiveFilters
              ? `Showing ${filteredPosts.length} result${filteredPosts.length !== 1 ? 's' : ''} for your search`
              : "Stay updated with our latest insights and industry trends"}
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && !hasActiveFilters && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link href={`/blog/${featuredPost.slug}`} className="group block relative rounded-2xl overflow-hidden shadow-lg aspect-[21/8] sm:aspect-[21/6]">
              {featuredPost.featuredImage ? (
                <Image
                  src={featuredPost.featuredImage}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                  <span className="text-6xl">📝</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a6b] via-[#0f2a6b]/60 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 md:px-10 w-full md:w-3/4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-[#e8a020] text-[#0f2a6b] text-xs font-bold rounded-full uppercase tracking-wider">
                    Featured
                  </span>
                  <span className="flex items-center gap-1 text-gray-300 text-sm font-medium">
                    <Calendar size={14} /> {formatDate(featuredPost.createdAt)}
                  </span>
                  <span className="flex items-center gap-1 text-gray-300 text-sm font-medium">
                    <Clock size={14} /> {featuredPost.readTime} min read
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-[#e8a020] transition-colors">
                  {featuredPost.title}
                </h2>
                {featuredPost.excerpt && (
                  <p className="text-gray-300 text-sm line-clamp-2 mb-2 max-w-3xl">
                    {featuredPost.excerpt}
                  </p>
                )}
                <span className="inline-flex items-center gap-2 text-[#e8a020] font-semibold group-hover:gap-3 transition-all">
                  Read Article <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Grid Layout */}
        {regularPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {regularPosts.map((post, index) => (
                <BlogCard
                  key={post._id}
                  title={post.title}
                  excerpt={post.excerpt || ''}
                  image={post.featuredImage || ''}
                  category={post.categoryName || post.category}
                  date={formatDate(post.createdAt)}
                  readTime={`${post.readTime} min read`}
                  slug={post.slug}
                  views={post.views}
                  featured={post.featured}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </div>
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
              className="mt-4 px-6 py-2 bg-[#0f2a6b] text-white font-semibold rounded-full hover:bg-[#1a3fa0] transition-colors"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}