'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTA } from '@/components/sections/CTA'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { PortfolioCard } from '@/components/sections/PortfolioCard'
import { BlogCard } from '@/components/sections/BlogCard'
import { services } from '@/data/services'
import { portfolioProjects } from '@/data/portfolio'
import { blogPosts } from '@/data/blog'
import { motion, useScroll, useTransform } from 'framer-motion'
import TrueValueSection, { HireDevelopersSection, IndustriesSection, ServicesSection } from '@/components/sections/aboutus'
import { AppWindowIcon, Cog, PhoneIcon } from 'lucide-react'
import {
  Car, DollarSign, Settings, GraduationCap, PartyPopper,
  ShoppingCart,
  UtensilsCrossed,
  Sprout,
  Monitor,
  Dumbbell,
  Heart,
  Activity,
  Film,
  Plane,
  Truck,
  Briefcase
} from 'lucide-react'
import TopScorers from '@/components/tesmonials'


export const indus = [
  { title: "Event", icon: PartyPopper },
  { title: "Ecommerce", icon: ShoppingCart },
  { title: "Hotel and Restaurant", icon: UtensilsCrossed },
  { title: "Agriculture", icon: Sprout },
  { title: "Education & eLearning", icon: Monitor },
  { title: "Sports", icon: Activity },
  { title: "Dating", icon: Heart },
  { title: "Health and Fitness", icon: Dumbbell },
  { title: "Media & Entertainment", icon: Film },
  { title: "Travel", icon: Plane },
  { title: "Transport", icon: Truck },
  { title: "B2B", icon: Briefcase },
]
export function Indus({ title, Icon }: any) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="
        relative
        bg-white
        p-8
        text-center
        shadow-lg
        overflow-hidden
        group
        cursor-pointer
      "
    >
      {/* Bottom Blue Strip */}
      <div className="absolute z-0 bottom-0 left-0 w-full h-1 group-hover:-z-1 group-hover:h-full bg-[#FD5D07] transition-all duration-300 group-hover:h-2" />

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.3 }}
        className="flex justify-center mb-3"
      >
        <Icon size={60} className="text-gray-700 stroke-[1.3px] group-hover:text-white transition duration-300" />
      </motion.div>

      {/* Title */}
      <h3 className="text-gray-700 stroke-[1.3px] group-hover:text-white text-lg font-medium">
        {title}
      </h3>
    </motion.div>
  )
}
export default function Home() {

  return (
    <>

      <div className="relative min-h-screen">
        {/* <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="
    fixed z-1 bottom-[10vh] left-0 opacity-25
    w-[100vw] h-[200vw] max-w-full rounded-full
    bg-[radial-gradient(circle_at_center,_rgba(255,0,0,0.7)_0%,_rgba(255,127,0,0.7)_14%,_rgba(255,255,0,0.7)_28%,_rgba(0,255,0,0.7)_52%,_rgba(0,0,255,0.7)_76%,_rgba(75,0,130,0.7)_70%,_rgba(148,0,211,0.7)_85%)]
    blur-3xl
  "
        /> */}

        {/* Hero Section */}
        <Hero
          title="Transform Your Business with Digital Excellence"
          subtitle="Digital Agency"
          description="Unlock your business potential with our comprehensive IT services, digital marketing strategies, and stunning graphic design solutions."
          ctaText="Start Your Project"
          ctaLink="/services"
          secondaryCta={{ text: 'Watch Demo', link: '#' }}
        />
        <TrueValueSection />
        {/* Services Section */}

        <ServicesSection />
        <HireDevelopersSection />
        <IndustriesSection />


        <TopScorers />

        {/* Blog Preview Section */}
        <section className="py-16">
          <div className="max-w-7xl relative z-1 mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-16">
              <motion.h2
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="text-3xl sm:text-[2.6rem] font-extrabold text-[#0f2a6b] leading-tight mb-3"
              >
                <span className="text-[#e8a020]">Digitonix</span> Blogs

              </motion.h2>

              {/* Gold divider */}
              <motion.div
                transition={{ duration: 0.5, delay: 0.12, transformOrigin: "left" }}
                className="w-12 h-[3px] rounded-full bg-gradient-to-r from-[#e8a020] to-[#f0b832] mb-4 origin-left"
              />

              <motion.p
                transition={{ duration: 0.5, delay: 0.14 }}
                className="text-[#4a5578] text-base sm:text-lg font-light max-w-lg"
              >
                We stay on top of our industry by being experts in yours.

              </motion.p>

            </div>
            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {blogPosts.slice(0, 3).map((post, index) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                  category={post.category}
                  date={post.date}
                  readTime={post.readTime}
                  slug={post.slug}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA
          title="Ready to Transform Your Business?"
          description="Let's work together to bring your vision to life. Our team is ready to help you succeed in the digital world."
          ctaText="Start Your Journey"
          ctaLink="/contact"
        />

      </div>
    </>
  )
}
