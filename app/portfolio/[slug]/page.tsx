'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { CTA } from '@/components/sections/CTA'
import { portfolioProjects } from '@/data/portfolio'
import { motion } from 'framer-motion'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

interface PortfolioDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function PortfolioDetailPage({
  params,
}: PortfolioDetailPageProps) {
  const { slug } = await params
  const project = portfolioProjects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = portfolioProjects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Back Button */}
      <div className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/50 text-primary text-sm font-semibold mb-6">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              {project.title}
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold mb-4 text-foreground">
                  The Challenge
                </h2>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  {project.challenge}
                </p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold mb-4 text-foreground">
                  Our Solution
                </h2>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Results
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.results.map((result, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-lg bg-card border border-border"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-2xl text-secondary">✓</div>
                        <p className="text-foreground/70">{result}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-card border border-border sticky top-32"
              >
                <h3 className="text-xl font-bold mb-6 text-foreground">
                  Technologies Used
                </h3>
                <div className="space-y-2">
                  {project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 rounded-lg bg-background border border-border text-foreground/70 text-sm"
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-background font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                  >
                    View Live Project
                    <ExternalLink size={16} />
                  </a>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-card/50 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-12 text-center"
            >
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Related Projects
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relProject, index) => (
                <motion.div
                  key={relProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/portfolio/${relProject.slug}`}>
                    <div className="relative h-64 rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                      <Image
                        src={relProject.image}
                        alt={relProject.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex flex-col justify-end p-6">
                        <h3 className="font-bold text-foreground">
                          {relProject.title}
                        </h3>
                        <p className="text-foreground/70 text-sm">
                          {relProject.category}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTA
        title="Ready to Start Your Project?"
        description="Let's bring your vision to life with our proven expertise and dedication to excellence."
        ctaText="Get in Touch"
        ctaLink="/contact"
      />

      <Footer />
    </div>
  )
}
