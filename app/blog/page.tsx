'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useMemo } from 'react'
import { 
  Search, Calendar, Clock, User, ArrowRight, 
  TrendingUp, Mail, CheckCircle, ChevronRight,
  Filter, Share2, Bookmark, MessageSquare
} from 'lucide-react'
import { CTA } from '@/components/sections/CTA'

import { blogPosts } from '@/data/blog'

const categories = ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  // Filter Logic
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const featuredPost = filteredPosts.find(p => p.featured) || filteredPosts[0]
  const regularPosts = filteredPosts.filter(p => p.id !== featuredPost?.id)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => {
        setSubscribed(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      
      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm mb-6">
              Insights & Resources
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">DigiTonix</span> Blog
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-6 font-light">
              Discover industry insights, technical deep-dives, and strategic tips to help your business thrive in the digital age.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-slate-400 group-focus-within:text-orange-500 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Main Content --- */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <div className="flex items-center gap-2 text-slate-500 mr-2">
              <Filter size={18} />
              <span className="text-sm font-medium uppercase tracking-wider">Filter:</span>
            </div>
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-orange-300 hover:text-orange-600'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Featured Post (Only show if no search query or if featured matches search) */}
          {featuredPost && !searchQuery && selectedCategory === 'All' && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <Link href={`/blog/${featuredPost.slug}`} className="group block relative rounded-3xl overflow-hidden shadow-2xl aspect-[20/6]">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-3/4">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                      Featured
                    </span>
                    <span className="flex items-center gap-1 text-slate-300 text-sm font-medium">
                      <Calendar size={14} /> {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1 text-slate-300 text-sm font-medium">
                      <Clock size={14} /> {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4 leading-tight group-hover:text-orange-400 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-300 text-lg line-clamp-2 mb-6 max-w-2xl">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    
                    <span className="flex items-center gap-2 text-orange-400 font-semibold group-hover:gap-3 transition-all">
                      Read Article <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
              {regularPosts.length > 0 ? (
                regularPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
                  >
                    <Link href={`/blog/${post.slug}`} className="relative aspect-[16/8] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold rounded-full shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </Link>
                    
                    <div className="px-6 py-3 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} /> {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} /> {post.readTime}
                        </span>
                      </div>
                      
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                          {post.title}
                        </h3>
                      </Link>
                      
                      <p className="text-slate-600 text-sm line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                            {post.author?.charAt(0) || 'T'}
                          </div>
                          <span className="text-sm font-medium text-slate-700">{post.author || 'Team'}</span>
                        </div>
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="text-orange-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                        >
                          Read <ChevronRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full py-20 text-center"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 mb-4">
                    <Search size={32} className="text-slate-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">No articles found</h3>
                  <p className="text-slate-600">Try adjusting your search or category filter.</p>
                  <button 
                    onClick={() => {setSearchQuery(''); setSelectedCategory('All')}}
                    className="mt-6 text-orange-600 font-semibold hover:underline"
                  >
                    Clear all filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Pagination (Visual Only) */}
          {regularPosts.length > 0 && (
            <div className="mt-16 flex justify-center">
              <nav className="flex items-center gap-2">
                <button className="px-4 py-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-50" disabled>Previous</button>
                <button className="px-4 py-2 rounded-lg bg-slate-900 text-white font-medium">1</button>
                <button className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50">2</button>
                <button className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50">3</button>
                <span className="text-slate-400">...</span>
                <button className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50">Next</button>
              </nav>
            </div>
          )}
        </div>
      </section>

      {/* --- Newsletter Section --- */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Abstract BG */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6 text-orange-400">
              <Mail size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Stay Ahead of the Curve
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Join 10,000+ subscribers. Get the latest insights on tech, design, and marketing delivered straight to your inbox every week. No spam, ever.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
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
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {subscribed ? 'Welcome!' : 'Subscribe Now'}
              </button>
            </form>
            
            <p className="mt-6 text-xs text-slate-500">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <CTA
        title="Need Expert Implementation?"
        description="Reading is great, but execution is key. Let our team of experts help you implement these strategies for your business."
        ctaText="Contact Our Team"
        ctaLink="/contact"
      />
    </div>
  )
}