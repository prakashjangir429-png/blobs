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
  imageUrl?: string // Optional prop to override default image
}

export function CTA({
  title,
  description,
  ctaText = 'Get Started Today',
  ctaLink = '/contact',
  imageUrl = './cta.png',
}: CTAProps) {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-orange-50/80 via-white to-blue-50/50">
      
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-[#FD5D07]/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            x: [0, -30, 0], 
            y: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/40 rounded-full blur-3xl" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Content: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              {title.split(' ').map((word, i) => (
                <span key={i} className={i === 0 ? "text-[#FD5D07]" : "text-gray-900"}>
                  {word}{' '}
                </span>
              ))}
            </h2>

            {/* Description */}
            <p className="sm:text-xl text-gray-600 font-medium mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {description}
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center lg:justify-start"
            >
              <Link
                href={ctaLink}
                className="group relative inline-flex items-center gap-1 px-6 py-3 rounded-full bg-[#FD5D07] text-white font-bold text-lg shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:bg-[#e05206] transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">{ctaText}</span>
                <ArrowRight
                  size={20}
                  className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300"
                />
                
                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Decorative Border/Glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#FD5D07]/20 to-blue-500/10 rounded-3xl blur-xl opacity-70" />
              
              <div className="relative rounded-2xl overflow-hidden p-2">
                <Image
                  src={imageUrl}
                  alt="Call to Action Illustration"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover rounded-xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/800x500/fdf2f0/FD5D07?text=Get+Started";
                  }}
                  priority={false}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}