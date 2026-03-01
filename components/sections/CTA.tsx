'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface CTAProps {
  title: string
  description: string
  ctaText?: string
  ctaLink?: string
}

export function CTA({
  title,
  description,
  ctaText = 'Get Started Today',
  ctaLink = '/contact',
}: CTAProps) {
  return (
    <section className="py-12 relative z-1 bg-gradient-to-br from-primary/15 to-secondary/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex items-center gap-10 flex-col lg:flex-row'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=""
          >
            {/* Title */}
            <h2 className="text-5xl font-bold mb-3">
              <span className="text-gray-700">
                {title}
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl text-gray-700 font-medium mb-6 max-w-2xl">
              {description}
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                href={ctaLink}
                className="inline-flex text-white/80 items-center gap-2 px-6 py-3 rounded-lg bg-[#FD5D07] font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 group"
              >
                {ctaText}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>

          </motion.div>
          <div className="hidden md:block">
            <Image src="./cta.png" alt="CTA Image" width={700} height={400} className="" />
          </div>
        </div>

      </div>
    </section>
  )
}
