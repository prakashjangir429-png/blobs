'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useMemo } from 'react'
import {
  ArrowLeft, Calendar, Clock, User, Share2, Bookmark,
  MessageSquare, Copy, Check, Twitter, Linkedin, Facebook,
  ChevronRight, TrendingUp, Quote, Code, List
} from 'lucide-react'
import { CTA } from '@/components/sections/CTA'
import { BlogCard } from '@/components/sections/BlogCard'
import { blogPosts } from '@/data/blog'

// --- Helper Components ---

// Simulated Syntax Highlighting for Code Blocks
const CodeBlock = ({ language, code }: { language: string; code: string }) => (
  <div className="my-6 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shadow-lg">
    <div className="flex items-center justify-between px-4 py-2 bg-slate-800/50 border-b border-slate-700">
      <span className="text-xs font-mono text-slate-400 lowercase">{language}</span>
      <button className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1">
        <Copy size={12} /> Copy
      </button>
    </div>
    <pre className="p-4 overflow-x-auto text-sm font-mono text-slate-300 leading-relaxed">
      <code>{code}</code>
    </pre>
  </div>
)

// Custom Content Parser
const ContentParser = ({ content }: { content: string }) => {
  const lines = content.split('\n')
  const elements = []
  let inCodeBlock = false
  let codeContent = ''
  let codeLanguage = 'javascript'

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (line.startsWith('```')) {
      if (!inCodeBlock) {
        inCodeBlock = true
        codeLanguage = line.replace('```', '') || 'javascript'
        codeContent = ''
      } else {
        inCodeBlock = false
        elements.push(<CodeBlock key={`code-${i}`} language={codeLanguage} code={codeContent} />)
      }
      continue
    }

    if (inCodeBlock) {
      codeContent += line + '\n'
      continue
    }

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} id={line.replace('## ', '').toLowerCase().replace(/\s+/g, '-')} className="text-3xl font-bold text-slate-900 mt-12 mb-6 scroll-mt-24">
          {line.replace('## ', '')}
        </h2>
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} id={line.replace('### ', '').toLowerCase().replace(/\s+/g, '-')} className="text-2xl font-bold text-slate-800 mt-8 mb-4 scroll-mt-24">
          {line.replace('### ', '')}
        </h3>
      )
    } else if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={i} className="border-l-4 border-orange-500 pl-6 py-2 my-6 bg-orange-50 italic text-slate-700 rounded-r-lg">
          {line.replace('> ', '')}
        </blockquote>
      )
    } else if (line.startsWith('- ')) {
      // Simple list handling (could be improved for nested lists)
      if (!elements[elements.length - 1]?.type || elements[elements.length - 1].type !== 'ul') {
        elements.push(<ul key={`ul-${i}`} className="list-disc list-inside space-y-2 my-4 text-slate-700 marker:text-orange-500" />)
      }
      const lastEl = elements[elements.length - 1]
      if (lastEl.type === 'ul') {
        lastEl.props.children.push(<li key={`li-${i}`}>{line.replace('- ', '')}</li>)
      }
    } else if (line.trim() === '') {
      elements.push(<br key={i} />)
    } else {
      elements.push(<p key={i} className="mb-6 text-lg text-slate-700 leading-relaxed">{line}</p>)
    }
  }

  return <>{elements}</>
}

export default function BlogDetailPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  const [post, setPost] = useState<any>(null)
  const [copied, setCopied] = useState(false)
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])

  // Scroll Progress
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.slug === slug)
    if (!foundPost) {
      router.push('/404')
      return
    }
    setPost(foundPost)

    // Extract headings for TOC
    const contentLines = foundPost.content.split('\n')
    const extractedHeadings = contentLines
      .filter(line => line.startsWith('## ') || line.startsWith('### '))
      .map(line => ({
        id: line.replace(/^#+ /, '').toLowerCase().replace(/\s+/g, '-'),
        text: line.replace(/^#+ /, ''),
        level: line.startsWith('### ') ? 3 : 2
      }))
    setHeadings(extractedHeadings)
  }, [slug, router])

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent(post?.title || '')
    let shareUrl = ''

    if (platform === 'twitter') shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`
    if (platform === 'linkedin') shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
    if (platform === 'facebook') shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`

    if (shareUrl) window.open(shareUrl, '_blank')
  }

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!post) return null

  return (
    <article className="min-h-screen bg-white text-slate-900 selection:bg-orange-100 selection:text-orange-900">

      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-orange-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-sm text-slate-500 font-medium">{post.readTime} min read</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-slate-100">
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar size={16} /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={16} /> Updated recently
                </span>
              </div>

              <div className="ml-auto flex items-center gap-2">
                <span className="text-sm text-slate-500 mr-2 hidden lg:inline">Share:</span>
                <button onClick={() => handleShare('twitter')} className="p-2 bg-slate-50 hover:bg-blue-50 hover:text-blue-500 rounded-full transition-all"><Twitter size={18} /></button>
                <button onClick={() => handleShare('linkedin')} className="p-2 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 rounded-full transition-all"><Linkedin size={18} /></button>
                <button onClick={() => handleShare('facebook')} className="p-2 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 rounded-full transition-all"><Facebook size={18} /></button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}


      {/* Main Content Layout */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left: Article Content */}
            <div className="lg:col-span-8 xl:col-span-9">
                <div className="max-w-5xl mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl"
                  >
                    <Image src={post.image} alt={post.title} fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </motion.div>
                </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="prose prose-lg prose-slate max-w-none"
              >
                <ContentParser content={post.content} />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2">
                    {post.tags?.map((tag: string, i: number) => (
                      <span key={i} className="px-3 py-1.5 bg-slate-100 text-slate-600 text-sm font-medium rounded-lg hover:bg-orange-100 hover:text-orange-700 transition-colors cursor-pointer">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Author Bio Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg shrink-0">
                  {post.author?.charAt(0) || 'A'}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Written by {post.author || 'Our Team'}</h3>
                  <p className="text-slate-600 mb-4">
                    Specializing in {post.category}, our experts bring years of industry experience to help you navigate complex digital challenges.
                  </p>
                  <Link href={`/blog?author=${post.author}`} className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all">
                    View all posts <ChevronRight size={16} />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right: Sticky Table of Contents (Desktop Only) */}
            <div className="hidden lg:block lg:col-span-4 xl:col-span-3">
              <div className="sticky top-24">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <List size={16} /> On This Page
                </h4>
                <nav className="space-y-3 border-l-2 border-slate-100">
                  {headings.length > 0 ? (
                    headings.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={`block pl-4 text-sm transition-colors hover:text-orange-600 ${heading.level === 3 ? 'ml-4 text-slate-500' : 'font-medium text-slate-700'
                          }`}
                      >
                        {heading.text}
                      </a>
                    ))
                  ) : (
                    <p className="pl-4 text-sm text-slate-400 italic">No sections available</p>
                  )}
                </nav>

                {/* Mini CTA in Sidebar */}
                <div className="mt-8 p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl text-white shadow-xl">
                  <h4 className="font-bold text-lg mb-2">Need Help?</h4>
                  <p className="text-slate-300 text-sm mb-4">Implementing these strategies? Let our team assist you.</p>
                  <Link href="/contact" className="block w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-center rounded-lg transition-colors text-sm">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Continue Reading</h2>
            <p className="text-slate-600">More insights from our experts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts
              .filter((p) => p.category === post.category && p.slug !== post.slug)
              .slice(0, 3)
              .map((relPost, index) => (
                <BlogCard
                  key={relPost.id}
                  title={relPost.title}
                  excerpt={relPost.excerpt}
                  image={relPost.image}
                  category={relPost.category}
                  date={relPost.date}
                  readTime={relPost.readTime}
                  slug={relPost.slug}
                  index={index}
                />
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-100 text-orange-600 mb-6">
              <MessageSquare size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Join the Conversation</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Get weekly insights, exclusive tutorials, and industry news delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
              <button className="px-8 py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <CTA
        title="Ready to Transform Your Business?"
        description="Let's apply these insights to your specific challenges. Our team is ready to help."
        ctaText="Get Started Today"
        ctaLink="/contact"
      />
    </article>
  )
}