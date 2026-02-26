'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

interface PortfolioCardProps {
  title: string
  description: string
  image: string
  category: string
  slug: string
  index?: number
}

export function PortfolioCard({
  title,
  description,
  image,
  category,
  slug,
  index = 0,
}: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <Link href={`/portfolio/${slug}`}>
        <div className="relative h-80 rounded-2xl overflow-hidden bg-card border border-border group-hover:border-primary/50 transition-all duration-300">
          {/* Image */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-primary bg-primary/20 mb-3">
                  {category}
                </span>
              </div>
              <ArrowUpRight className="text-primary transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
              <p className="text-foreground/70 text-sm line-clamp-2">{description}</p>
            </div>
          </div>

          {/* Visible on default state */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none">
            <h3 className="text-2xl font-bold text-foreground">{title}</h3>
            <span className="text-foreground/60 text-sm mt-2">{category}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
