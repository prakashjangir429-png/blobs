'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/sections/Hero'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { CTA } from '@/components/sections/CTA'
import { services } from '@/data/services'
import { motion } from 'framer-motion'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <Hero
        title="Our Services"
        subtitle="What We Offer"
        description="Comprehensive digital solutions tailored to transform your business and accelerate growth."
        ctaText="Let's Get Started"
        ctaLink="/contact"
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Expert Solutions for Every Need
              </span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              We provide cutting-edge services in IT, digital marketing, and graphic design to help your business thrive.
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                slug={service.slug}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Why Choose Us
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'Our experienced professionals bring years of expertise to every project.',
                icon: '👥',
              },
              {
                title: 'Proven Results',
                description: 'We focus on measurable results that directly impact your business.',
                icon: '📈',
              },
              {
                title: 'Custom Solutions',
                description: 'Every solution is tailored to your unique business needs.',
                icon: '⚙️',
              },
              {
                title: '24/7 Support',
                description: 'Our dedicated team is available whenever you need assistance.',
                icon: '💬',
              },
              {
                title: 'Latest Technology',
                description: 'We use cutting-edge tools and technologies for optimal results.',
                icon: '🚀',
              },
              {
                title: 'Transparent Communication',
                description: 'Clear communication and regular updates throughout every project.',
                icon: '📞',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Elevate Your Digital Presence?"
        description="Choose the service that's right for your business and let's start creating amazing results together."
        ctaText="Schedule a Consultation"
        ctaLink="/contact"
      />

      <Footer />
    </div>
  )
}
