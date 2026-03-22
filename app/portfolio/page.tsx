'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { 
  ArrowRight, ExternalLink, Filter, Search, 
  Code2, Smartphone, Megaphone, Palette, 
  TrendingUp, Users, Globe, Zap, ChevronRight,
  Award, Star
} from 'lucide-react'
import { Hero } from '@/components/sections/Hero'
import { CTA } from '@/components/sections/CTA'

// --- Portfolio Data ---

const categories = [
  { id: 'all', label: 'All Projects', icon: Filter },
  { id: 'fintech', label: 'FinTech', icon: TrendingUp },
  { id: 'healthcare', label: 'Healthcare', icon: Users },
  { id: 'ecommerce', label: 'E-Commerce', icon: Globe },
  { id: 'education', label: 'Education', icon: Zap },
  { id: 'enterprise', label: 'Enterprise', icon: Code2 },
]

const serviceTypes = [
  { id: 'all', label: 'All Services' },
  { id: 'web', label: 'Web Dev', icon: Code2 },
  { id: 'app', label: 'Mobile App', icon: Smartphone },
  { id: 'marketing', label: 'Marketing', icon: Megaphone },
  { id: 'design', label: 'Design', icon: Palette },
]

const projects = [
  {
    slug: 'nexbank-digital',
    title: 'NexBank Digital Transformation',
    category: 'fintech',
    serviceType: 'web',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', // Placeholder
    shortDesc: 'A secure, high-performance banking portal serving 2M+ users.',
    tags: ['React', 'Node.js', 'AWS', 'Security'],
    results: ['40% Faster Load Time', '99.99% Uptime', '+25% User Adoption'],
    featured: true,
    year: '2023'
  },
  {
    slug: 'healthplus-app',
    title: 'HealthPlus Telemedicine App',
    category: 'healthcare',
    serviceType: 'app',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    shortDesc: 'Cross-platform telemedicine app connecting patients with doctors instantly.',
    tags: ['Flutter', 'Firebase', 'WebRTC', 'HIPAA'],
    results: ['500k+ Downloads', '4.9 App Store Rating', 'Reduced Wait Times by 60%'],
    featured: true,
    year: '2024'
  },
  {
    slug: 'stylehub-ecommerce',
    title: 'StyleHub Fashion Marketplace',
    category: 'ecommerce',
    serviceType: 'web',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
    logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg',
    shortDesc: 'Headless e-commerce solution with AI-driven product recommendations.',
    tags: ['Next.js', 'Shopify Headless', 'Algolia', 'Stripe'],
    results: ['+150% Conversion Rate', '$2M GMV in Q1', 'Sub-second Search'],
    featured: false,
    year: '2023'
  },
  {
    slug: 'learnify-lms',
    title: 'Learnify LMS Platform',
    category: 'education',
    serviceType: 'web',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    shortDesc: 'Scalable Learning Management System for global universities.',
    tags: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
    results: ['50+ Universities', '1M+ Students', '99.9% Availability'],
    featured: false,
    year: '2022'
  },
  {
    slug: 'greenearth-campaign',
    title: 'GreenEarth Awareness Campaign',
    category: 'enterprise',
    serviceType: 'marketing',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    logo: 'https://cdn.worldvectorlogo.com/logos/google-ads.svg',
    shortDesc: 'Global digital marketing campaign driving environmental awareness.',
    tags: ['SEO', 'PPC', 'Content', 'Social Media'],
    results: ['10M+ Impressions', '+300% Traffic', 'Viral Social Reach'],
    featured: false,
    year: '2024'
  },
  {
    slug: 'corp-identity-redesign',
    title: 'Apex Corp Brand Redesign',
    category: 'enterprise',
    serviceType: 'design',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1200&q=80',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    shortDesc: 'Complete visual identity overhaul for a Fortune 500 company.',
    tags: ['Branding', 'UI/UX', 'Figma', 'Strategy'],
    results: ['Brand Value +40%', 'Consistent Global Identity', 'Award Winning'],
    featured: false,
    year: '2023'
  }
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeService, setActiveService] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory
    const matchesService = activeService === 'all' || project.serviceType === activeService
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesService && matchesSearch
  })

  const featuredProjects = projects.filter(p => p.featured)

  return (
    <div className="min-h-screen bg-white">
      
      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm mb-6">
              Our Work
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Building Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Masterpieces</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Explore our portfolio of successful projects. From startups to Fortune 500s, we deliver excellence across industries.
            </p>
            
            {/* Search */}
            <div className="max-w-xl mx-auto relative mb-12">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search projects..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Filters --- */}
      <section className="py-4 border-b border-gray-100 sticky top-18 bg-white/80 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            
            {/* Industry Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === cat.id
                      ? 'bg-gray-900 text-white shadow-md'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <cat.icon size={16} />
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Service Filter */}
            {/* <div className="flex flex-wrap justify-center gap-2">
              {serviceTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveService(type.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeService === type.id
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {type.icon && <type.icon size={16} />}
                  {type.label}
                </button>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* --- Projects Grid --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No projects found matching your criteria.</p>
              <button onClick={() => {setActiveCategory('all'); setActiveService('all');}} className="mt-4 text-purple-600 font-semibold hover:underline">Clear Filters</button>
            </div>
          ) : (
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    key={project.slug}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -10 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex gap-2 mb-3">
                            {project.tags.slice(0, 3).map((tag, i) => (
                              <span key={i} className="px-2 py-1 bg-white/20 backdrop-blur text-white text-xs rounded-md">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <Link 
                            href={`/portfolio/${project.slug}`}
                            className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-purple-300 transition-colors"
                          >
                            View Case Study <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>
                      {project.featured && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-semibold rounded-full shadow-lg flex items-center gap-1">
                          <Star size={12} fill="currentColor" /> Featured
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`w-2 h-2 rounded-full ${
                          project.category === 'fintech' ? 'bg-green-500' :
                          project.category === 'healthcare' ? 'bg-red-500' :
                          project.category === 'ecommerce' ? 'bg-blue-500' :
                          'bg-purple-500'
                        }`} />
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{project.category}</span>
                        <span className="text-gray-300">•</span>
                        <span className="text-xs text-gray-500">{project.year}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-1">
                        {project.shortDesc}
                      </p>

                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex -space-x-2">
                           {/* Mock Avatars for team */}
                           {[1,2,3].map(i => (
                             <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-semibold text-gray-500">
                               {String.fromCharCode(64+i)}
                             </div>
                           ))}
                        </div>
                        <Link 
                          href={`/portfolio/${project.slug}`}
                          className="text-purple-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                        >
                          Details <ChevronRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* --- Stats Section --- */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { num: '150+', label: 'Projects Delivered' },
              { num: '98%', label: 'Client Satisfaction' },
              { num: '25+', label: 'Industries Served' },
              { num: '10+', label: 'Design Awards' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">{stat.num}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Have a Project in Mind?"
        description="Let's collaborate to create something extraordinary. Our team is ready to bring your vision to life."
        ctaText="Start Your Project"
        ctaLink="/contact"
      />
    </div>
  )
}