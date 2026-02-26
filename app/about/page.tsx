'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTA } from '@/components/sections/CTA'
import { motion } from 'framer-motion'

export default function AboutPage() {
  const stats = [
    { number: 12, label: 'Years of Experience', suffix: '+' },
    { number: 150, label: 'Projects Completed', suffix: '+' },
    { number: 98, label: 'Client Satisfaction Rate', suffix: '%' },
    { number: 50, label: 'Team Members', suffix: '+' },
  ]

  const team = [
    { name: 'John Smith', role: 'Founder & CEO', icon: '👔' },
    { name: 'Sarah Johnson', role: 'Creative Director', icon: '🎨' },
    { name: 'Michael Chen', role: 'CTO', icon: '💻' },
    { name: 'Lisa Anderson', role: 'Head of Marketing', icon: '📱' },
    { name: 'David Wilson', role: 'Lead Designer', icon: '✨' },
    { name: 'Emma Davis', role: 'Project Manager', icon: '📊' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <Hero
        title="About Our Agency"
        subtitle="Our Story"
        description="We're a team of creative and strategic thinkers dedicated to transforming businesses through digital innovation."
        ctaText="Join Our Team"
        ctaLink="/contact"
      />

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Our Mission
                </span>
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                We believe in the power of digital transformation. Our mission is to partner with
                businesses of all sizes to unlock their potential through innovative IT solutions,
                strategic digital marketing, and exceptional design.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Every project we undertake is an opportunity to create meaningful impact and drive
                measurable business growth.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Our Vision
                </span>
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                We envision a future where technology and creativity merge seamlessly to create
                extraordinary digital experiences. We aspire to be the trusted partner for
                businesses seeking comprehensive digital solutions.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Through continuous innovation and excellence, we aim to set industry standards and
                inspire others to achieve digital greatness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats stats={stats} />

      {/* Values Section */}
      <section className="py-20">
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
                Our Core Values
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description:
                  'We continuously explore new technologies and methodologies to stay ahead of the curve and deliver cutting-edge solutions.',
                icon: '💡',
              },
              {
                title: 'Excellence',
                description:
                  'We are committed to delivering exceptional results that exceed expectations and set new standards in our industry.',
                icon: '⭐',
              },
              {
                title: 'Integrity',
                description:
                  'We build trust through transparency, honesty, and ethical practices in all our business relationships.',
                icon: '🤝',
              },
              {
                title: 'Collaboration',
                description:
                  'We believe in the power of teamwork and partnership to achieve greater results together.',
                icon: '👥',
              },
              {
                title: 'Customer-Centric',
                description:
                  'Your success is our success. We focus on understanding your needs and delivering solutions that drive real value.',
                icon: '💎',
              },
              {
                title: 'Growth',
                description:
                  'We are committed to continuous learning and development for ourselves and our clients.',
                icon: '📈',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-foreground/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
                Meet Our Team
              </span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Our diverse team of experts brings years of experience and passion for digital
              excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-4xl">
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-foreground/70">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <CTA
        title="Let's Work Together"
        description="Ready to transform your business? Join hundreds of satisfied clients who have partnered with us."
        ctaText="Get Started Today"
        ctaLink="/contact"
      />

      <Footer />
    </div>
  )
}
