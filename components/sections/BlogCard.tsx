'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

interface BlogCardProps {
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: number
  slug: string
  index?: number
}

export function BlogCard({
  title,
  excerpt,
  image,
  category,
  date,
  readTime,
  slug,
  index = 0,
}: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <Link href={`/blog/${slug}`}>
        <div className="h-full flex flex-col rounded-2xl shadow overflow-hidden bg-white transition-all duration-300 hover:shadow-lg">
          {/* Image */}
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-gray-800 bg-white/80 backdrop-blur-sm">
                {category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 py-3 flex-1 flex flex-col">
            {/* Title */}
            <h3 className="text-xl font-bold text-foreground mb-1 line-clamp-2 group-hover:text-[#f59e0b] transition-colors">
              {title}
            </h3>

            {/* Excerpt */}
            <p className="text-foreground/70 text-sm font-medium mb-2 line-clamp-2 flex-1">
              {excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-4 text-xs font-medium text-foreground/60 mb-2 pb-2">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                {formatDate(date)}
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                {readTime} min read
              </div>
            </div>

            {/* CTA */}
            <motion.div
              className="inline-flex items-center hover:text-[#f59e0b] gap-2 text-primary font-semibold text-sm"
              whileHover={{ gap: 8 }}
            >
              Read More
              <ArrowRight size={16} />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
