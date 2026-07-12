"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { ArrowRight, Clock, Calendar, Tag, TrendingUp } from "lucide-react"

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "Web Development": { bg: "rgba(26,63,160,0.08)", text: "#1a3fa0", border: "rgba(26,63,160,0.15)" },
  "Digital Marketing": { bg: "rgba(232,160,32,0.1)", text: "#b07010", border: "rgba(232,160,32,0.2)" },
  "Technology": { bg: "rgba(41,82,204,0.08)", text: "#2952cc", border: "rgba(41,82,204,0.15)" },
  "Mobile Development": { bg: "rgba(15,42,107,0.08)", text: "#0f2a6b", border: "rgba(15,42,107,0.15)" },
  "AI & Innovation": { bg: "rgba(240,184,50,0.1)", text: "#b07010", border: "rgba(240,184,50,0.2)" },
  "E-Commerce": { bg: "rgba(26,63,160,0.08)", text: "#1a3fa0", border: "rgba(26,63,160,0.15)" },
}

export function BlogCard({ title, excerpt, image, category, date, readTime, slug, index, views, featured }: any) {
  const colors = categoryColors[category] || categoryColors["Web Development"]

  return (
    <motion.article
      className=" relative bg-slate-100 overflow-hidden border border-[#1a3fa0]/10
                 transition-all duration-500 hover:-translate-y-2
                 hover:shadow-[0_20px_60px_-15px_rgba(26,63,160,0.15)]
                 hover:border-[#1a3fa0]/20"
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-0 -left-1 z-20">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-br-xl text-xs font-semibold uppercase tracking-wider
                       backdrop-blur-md border"
            style={{
              background: "linear-gradient(135deg, rgba(232,160,32,0.95), rgba(240,184,50,0.95))",
              borderColor: "rgba(232,160,32,0.3)",
              color: "#0f2a6b",
            }}
          >
            <TrendingUp size={11} />
            Featured
          </div>
        </div>
      )}

      {/* Image container */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#1a3fa0]/5 to-[#e8a020]/5">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(135deg, rgba(26,63,160,0.4), rgba(232,160,32,0.3))",
          }}
        />

        {/* Category badge on image */}
        <div className="absolute -bottom-1 -right-1 z-10">
          <span
            className="inline-flex bg-slate-100 items-center gap-1.5 px-3 py-1.5 rounded-tl-xl text-xs font-bold uppercase"
          >
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#0f2a6b] leading-tight mb-2 line-clamp-2
                       group-hover:text-[#1a3fa0] transition-colors duration-300">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-[#4a5578] text-sm leading-relaxed mb-3 line-clamp-2">
          {excerpt}
        </p>

        {/* Read more link */}
        <div className="flex items-center justify-between pt-2 border-t border-[#e8edf8]">
          <a
            href={`/blog/${slug}`}
            className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group/link"
            style={{ color: "#1a3fa0" }}
          >
            <span className="group-hover/link:translate-x-1 transition-transform duration-300">
              Read Article
            </span>
            <ArrowRight
              size={14}
              className="group-hover/link:translate-x-1 transition-transform duration-300"
            />
          </a>

          {/* Share button */}
          <button
            className="w-8 h-8 rounded-full flex items-center justify-center
                       bg-[#f8f9fc] hover:bg-[#1a3fa0]/10 transition-colors duration-300"
            aria-label="Share article"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a3fa0" strokeWidth="2">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom gradient accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "linear-gradient(90deg, #1a3fa0, #e8a020)" }}
      />
    </motion.article>
  )
}

export default function BlogSection({blogPosts}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section
      ref={ref}
      className="w-full py-12 relative overflow-hidden bg-white"
      aria-label="Latest blog posts and articles from Digitonix - IT Company in Jaipur"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,63,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,63,160,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-8">
          <div className="max-w-2xl">

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              className="text-3xl sm:text-4xl mb-3 xl:text-[2.4rem] font-semibold text-[#0f2a6b] leading-[1.18]"
            >
              <span
                style={{
                  background: "linear-gradient(135deg, #e8a020, #f0b832)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Digitonix
              </span>{" "}
              Blog & Resources
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="text-[#4a5578] text-base sm:text-lg font-light leading-relaxed"
            >
              Expert insights on{" "}
              <span className="font-semibold text-[#0f2a6b]">web development</span>,{" "}
              <span className="font-semibold text-[#0f2a6b]">digital marketing</span>,{" "}
              <span className="font-semibold text-[#0f2a6b]">mobile apps</span>, and{" "}
              <span className="font-semibold text-[#0f2a6b]">AI solutions</span> to help your business grow.
            </motion.p>
          </div>

          {/* View all button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <a
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold
                         bg-white text-[#1a3fa0] border-2 border-[#1a3fa0]/15
                         hover:border-[#1a3fa0]/30 hover:shadow-lg
                         transition-all duration-300 hover:-translate-y-0.5 group"
            >
              View All Articles
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts?.map((post, index) => (
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
          ))}
        </div>

        {/* Bottom newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div
            className="relative rounded-2xl p-8 sm:p-10 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(26,63,160,0.03), rgba(232,160,32,0.03))",
              border: "1px solid rgba(26,63,160,0.08)",
            }}
          >
            {/* Background decoration */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 10% 50%, rgba(26,63,160,0.08) 0%, transparent 50%), radial-gradient(circle at 90% 50%, rgba(232,160,32,0.08) 0%, transparent 50%)",
              }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0f2a6b] mb-2">
                  Stay Updated with Industry Insights
                </h3>
                <p className="text-[#4a5578] text-sm sm:text-base max-w-xl">
                  Get weekly tips on web development, SEO, and digital marketing delivered to your inbox. Join 10,000+ subscribers.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-5 py-3 rounded-full bg-white border border-[#e8edf8] text-sm
                             focus:outline-none focus:border-[#1a3fa0]/30 focus:ring-2 focus:ring-[#1a3fa0]/10
                             transition-all duration-300 min-w-[250px]"
                />
                <button
                  className="px-6 py-3 rounded-full text-white text-sm font-bold
                             transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
                  style={{ background: "linear-gradient(135deg, #1a3fa0, #2952cc)" }}
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}