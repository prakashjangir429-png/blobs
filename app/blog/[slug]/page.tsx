'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { CTA } from '@/components/sections/CTA'
import { BlogCard } from '@/components/sections/BlogCard'
import { blogPosts } from '@/data/blog'
import { motion } from 'framer-motion'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'

interface BlogDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogDetailPage({
  params,
}: BlogDetailPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Back Button */}
      <div className="pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Badge */}
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/50 text-primary text-sm font-semibold mb-6">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-6 text-foreground/70 mb-8">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span className="text-sm">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span className="text-sm">{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span className="text-sm">{post.readTime} min read</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-card border border-border text-foreground/70"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="prose prose-invert max-w-none"
          >
            <article className="text-lg text-foreground/80 leading-relaxed space-y-6">
              {post.content.split('\n\n').map((paragraph, index) => (
                <div key={index}>
                  {paragraph.startsWith('##') ? (
                    <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  ) : paragraph.startsWith('###') ? (
                    <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  ) : (
                    <p>{paragraph}</p>
                  )}
                </div>
              ))}
            </article>
          </motion.div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 p-6 rounded-xl bg-card border border-border"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-2xl font-bold text-background">
              {post.author.charAt(0)}
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                {post.author}
              </h3>
              <p className="text-foreground/70">
                Expert writer and consultant specializing in {post.category}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-12 text-center"
            >
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Related Articles
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relPost, index) => (
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
      )}

      {/* Newsletter CTA */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Get More Insights Like This
              </span>
            </h2>
            <p className="text-foreground/70 mb-8">
              Subscribe to our newsletter and stay updated with the latest industry insights.
            </p>
            <form className="flex gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-6 py-3 rounded-lg bg-background border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-background font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Implement These Insights?"
        description="Let our experts help you apply these strategies to transform your business."
        ctaText="Work With Us"
        ctaLink="/contact"
      />

      <Footer />
    </div>
  )
}
