'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Testimonial {
  id: number
  text: string
  author: string
  role: string
  company: string
  rating: number
}

interface TestimonialsProps {
  testimonials?: Testimonial[]
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  const defaultTestimonials: Testimonial[] = [
    {
      id: 1,
      text: 'The team delivered an exceptional digital solution that transformed our business. Their expertise and attention to detail are outstanding.',
      author: 'John Smith',
      role: 'CEO',
      company: 'Tech Corp',
      rating: 5,
    },
    {
      id: 2,
      text: 'Working with this agency was a game-changer. They understood our vision and delivered beyond expectations.',
      author: 'Sarah Johnson',
      role: 'Marketing Manager',
      company: 'Digital Ventures',
      rating: 5,
    },
    {
      id: 3,
      text: 'Their IT services have been crucial for our infrastructure. Professional, reliable, and always responsive.',
      author: 'Michael Chen',
      role: 'CTO',
      company: 'Cloud Systems',
      rating: 5,
    },
  ]

  const items = testimonials || defaultTestimonials
  const [activeIndex, setActiveIndex] = useState(0)

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % items.length)
  }

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Hear from satisfied clients who have transformed their businesses with our solutions.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-2xl p-8 md:p-12"
          >
            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: items[activeIndex].rating }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="fill-secondary text-secondary"
                />
              ))}
            </div>

            {/* Quote */}
            <p className="text-xl text-foreground mb-8 italic">
              "{items[activeIndex].text}"
            </p>

            {/* Author */}
            <div>
              <h4 className="font-semibold text-foreground">
                {items[activeIndex].author}
              </h4>
              <p className="text-foreground/70 text-sm">
                {items[activeIndex].role} at {items[activeIndex].company}
              </p>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'w-8 bg-primary' : 'bg-foreground/30'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prev}
                className="p-3 rounded-full bg-border hover:bg-primary/20 text-foreground transition-colors"
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={next}
                className="p-3 rounded-full bg-border hover:bg-primary/20 text-foreground transition-colors"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
