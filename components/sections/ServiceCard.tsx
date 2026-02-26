'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { hoverLift } from '@/lib/animations'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  features: string[]
  slug: string
  index?: number
}

export function ServiceCard({
  icon,
  title,
  description,
  features,
  slug,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 , scale: 1.05}}
      className="group"
    >
      <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="text-3xl mb-2">{icon}</div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>

          {/* Description */}
          <p className="text-gray-700 font-medium mb-2">{description}</p>

          {/* Features */}
          <ul className="space-y-2 mb-4">
            {features.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600 font-medium">
                <span className="text-gray-600 mt-1">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Link */}
          <Link
            href={`/services/${slug}`}
            className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:gap-3 transition-all duration-300"
          >
            Learn More
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
