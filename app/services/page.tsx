'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { 
  Code2, Globe, Laptop, Box, Palette, ShoppingBag, 
  Smartphone, Monitor, Apple, Megaphone, Search, 
  Target, Share2, Mail, PenTool, Video, Camera, Award, 
  ArrowRight, CheckCircle, Zap, TrendingUp, Users, 
  ChevronRight, X, Play, BarChart3, Layers, Cpu,
  Sparkles, ShieldCheck, Clock, MessageSquare,
  Phone
} from 'lucide-react'
import { Hero } from '@/components/sections/Hero'
import { CTA } from '@/components/sections/CTA'
import { BlogCard } from '@/components/sections/BlogCard'
import TopScorers from '@/components/tesmonials'
import { Indus, indus } from '../page'
import { blogPosts } from '@/data/blog'

// --- Detailed Service Data (JSON Structure) ---

const serviceCategories = [
  {
    id: 'web',
    title: "Web Development",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    description: "Scalable, high-performance web solutions tailored to your business goals.",
    services: [
      {
        slug: 'custom-web-development',
        title: 'Custom Web Development',
        shortDesc: 'Tailor-made websites built from scratch for maximum performance.',
        fullDesc: 'We build robust, scalable, and secure web applications using modern technologies like React, Next.js, and Node.js. Our custom solutions are designed to fit your specific business logic, ensuring you aren\'t limited by template constraints.',
        icon: Laptop,
        features: ['Progressive Web Apps (PWA)', 'Server-Side Rendering (SSR)', 'API Integration', 'Cloud Deployment'],
        techStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
        process: ['Discovery', 'Architecture', 'Development', 'QA', 'Launch'],
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
      },
      {
        slug: 'ecommerce-solutions',
        title: 'E-Commerce Development',
        shortDesc: 'High-converting online stores with seamless checkout experiences.',
        fullDesc: 'From Shopify customization to headless commerce architectures, we build online stores that drive sales. We focus on user experience, speed, and security to ensure your customers have a frictionless shopping journey.',
        icon: ShoppingBag,
        features: ['Payment Gateway Integration', 'Inventory Management', 'Multi-currency Support', 'SEO Optimized'],
        techStack: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'React'],
        process: ['Store Design', 'Product Setup', 'Payment Config', 'Testing', 'Go Live'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80'
      },
      {
        slug: 'cms-development',
        title: 'CMS Development',
        shortDesc: 'Easy-to-manage content systems for dynamic websites.',
        fullDesc: 'Empower your team to update content effortlessly. We specialize in WordPress, Strapi, and Contentful, creating custom themes and plugins that give you full control without touching a line of code.',
        icon: Box,
        features: ['Custom Theme Development', 'Plugin Integration', 'Role-Based Access', 'Multi-language Support'],
        techStack: ['WordPress', 'Strapi', 'Contentful', 'PHP', 'GraphQL'],
        process: ['Content Audit', 'Structure Design', 'Theme Dev', 'Training', 'Support'],
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'app',
    title: "App Development",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    description: "Native and cross-platform mobile applications that users love.",
    services: [
      {
        slug: 'ios-app-development',
        title: 'iOS App Development',
        shortDesc: 'Premium native applications for the Apple ecosystem.',
        fullDesc: 'We create stunning, high-performance iOS apps using Swift and SwiftUI. Our apps adhere to strict Apple guidelines, ensuring smooth performance on iPhone and iPad while leveraging the latest iOS features.',
        icon: Apple,
        features: ['SwiftUI & UIKit', 'CoreData Integration', 'Push Notifications', 'App Store Optimization'],
        techStack: ['Swift', 'Xcode', 'Firebase', 'CoreML', 'ARKit'],
        process: ['Concept', 'Design', 'Dev', 'TestFlight', 'Launch'],
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80'
      },
      {
        slug: 'android-app-development',
        title: 'Android App Development',
        shortDesc: 'Robust apps reaching billions of Android users globally.',
        fullDesc: 'Reach the widest audience with our native Android solutions. Built with Kotlin and Jetpack Compose, our apps are optimized for thousands of device configurations and Android versions.',
        icon: Phone,
        features: ['Kotlin & Java', 'Material Design', 'Google Play Services', 'Offline First Architecture'],
        techStack: ['Kotlin', 'Android Studio', 'Firebase', 'Room DB', 'Retrofit'],
        process: ['Requirement', 'UI/UX', 'Coding', 'QA', 'Deployment'],
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80'
      },
      {
        slug: 'cross-platform-apps',
        title: 'Cross-Platform Development',
        shortDesc: 'One codebase, multiple platforms. Cost-effective and fast.',
        fullDesc: 'Get your product to market faster with Flutter or React Native. We build single-codebase applications that run natively on both iOS and Android, saving you time and budget without compromising quality.',
        icon: Monitor,
        features: ['Single Codebase', 'Near-Native Performance', 'Hot Reloading', 'Unified UI'],
        techStack: ['Flutter', 'React Native', 'Dart', 'TypeScript', 'GraphQL'],
        process: ['Prototype', 'Develop', 'Test', 'Deploy', 'Maintain'],
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'marketing',
    title: "Digital Marketing",
    icon: Megaphone,
    color: "from-orange-500 to-red-500",
    description: "Data-driven strategies to grow your audience and revenue.",
    services: [
      {
        slug: 'seo-optimization',
        title: 'SEO Optimization',
        shortDesc: 'Rank higher on Google and drive organic traffic.',
        fullDesc: 'Our SEO experts use white-hat techniques to improve your visibility. From technical audits to content strategy and link building, we help you dominate search results and attract qualified leads.',
        icon: Search,
        features: ['Technical SEO Audit', 'Keyword Research', 'On-Page Optimization', 'Link Building'],
        techStack: ['Ahrefs', 'SEMrush', 'Google Analytics', 'Screaming Frog', 'Search Console'],
        process: ['Audit', 'Strategy', 'Implementation', 'Monitoring', 'Reporting'],
        image: 'https://images.unsplash.com/photo-1571721795195-a2ca2d337069?auto=format&fit=crop&w=800&q=80'
      },
      {
        slug: 'ppc-advertising',
        title: 'PPC Advertising',
        shortDesc: 'Instant traffic and leads via targeted paid campaigns.',
        fullDesc: 'Maximize your ROI with precision-targeted ads on Google, Facebook, and LinkedIn. We manage your budget meticulously, optimizing bids and creatives to lower CPC and increase conversions.',
        icon: Target,
        features: ['Campaign Setup', 'A/B Testing', 'Audience Targeting', 'Conversion Tracking'],
        techStack: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Tag Manager', 'Looker Studio'],
        process: ['Planning', 'Creative', 'Launch', 'Optimize', 'Scale'],
        image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80'
      },
      {
        slug: 'social-media-marketing',
        title: 'Social Media Marketing',
        shortDesc: 'Build brand loyalty and engage your community.',
        fullDesc: 'We craft compelling social media strategies that resonate with your audience. From content creation to community management, we turn followers into brand advocates.',
        icon: Share2,
        features: ['Content Calendar', 'Community Management', 'Influencer Outreach', 'Analytics Reporting'],
        techStack: ['Hootsuite', 'Canva', 'Buffer', 'Sprout Social', 'Instagram API'],
        process: ['Strategy', 'Creation', 'Posting', 'Engagement', 'Analysis'],
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'creative',
    title: "Creative Services",
    icon: PenTool,
    color: "from-emerald-500 to-teal-500",
    description: "Visually stunning designs and content that tell your story.",
    services: [
      {
        slug: 'graphic-design',
        title: 'Graphic Design & Branding',
        shortDesc: 'Memorable visual identities and marketing collateral.',
        fullDesc: 'Your brand deserves to stand out. Our designers create cohesive visual identities, from logos to complete brand guidelines, ensuring consistency across all touchpoints.',
        icon: Palette,
        features: ['Logo Design', 'Brand Guidelines', 'Marketing Collateral', 'Packaging Design'],
        techStack: ['Adobe Illustrator', 'Photoshop', 'Figma', 'After Effects'],
        process: ['Briefing', 'Concept', 'Refinement', 'Delivery', 'Support'],
        image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?auto=format&fit=crop&w=800&q=80'
      },
      {
        slug: 'content-writing',
        title: 'Content Writing & Copywriting',
        shortDesc: 'Persuasive copy that converts readers into customers.',
        fullDesc: 'Words matter. Our expert copywriters craft engaging blog posts, website copy, and email sequences that speak directly to your audience\'s pain points and drive action.',
        icon: PenTool,
        features: ['Blog Posts', 'Website Copy', 'Email Sequences', 'Whitepapers'],
        techStack: ['Grammarly', 'Hemingway', 'WordPress', 'SurferSEO'],
        process: ['Research', 'Outline', 'Drafting', 'Editing', 'Publishing'],
        image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80'
      },
      {
        slug: 'video-production',
        title: 'Video Production & Animation',
        shortDesc: 'Engaging videos that explain, entertain, and convert.',
        fullDesc: 'From explainer animations to corporate testimonials, we produce high-quality video content. Our team handles scripting, storyboarding, animation, and editing.',
        icon: Video,
        features: ['Explainer Videos', 'Motion Graphics', 'Live Action', 'Video Editing'],
        techStack: ['Premiere Pro', 'After Effects', 'Blender', 'DaVinci Resolve'],
        process: ['Script', 'Storyboard', 'Production', 'Post-Prod', 'Final Cut'],
        image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
]

// --- Components ---

function ServiceDetailModal({ service, category, onClose }: { service: any, category: any, onClose: () => void }) {
  if (!service) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={24} className="text-gray-600" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Left: Image & Quick Info */}
          <div className="relative h-64 md:h-full bg-gray-100">
            <Image src={service.image} alt={service.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${category.color} w-fit mb-4`}>
                <category.icon size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">{category.title}</span>
              </div>
              <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-200">{service.shortDesc}</p>
            </div>
          </div>

          {/* Right: Details */}
          <div className="p-8 md:p-10 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Overview</h3>
              <p className="text-gray-600 leading-relaxed">{service.fullDesc}</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-500" /> Key Features
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feat: string, i: number) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Cpu size={18} className="text-blue-500" /> Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech: string, i: number) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Layers size={18} className="text-purple-500" /> Our Process
              </h4>
              <div className="flex items-center justify-between relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-10" />
                {service.process.map((step: string, i: number) => (
                  <div key={i} className="flex flex-col items-center gap-2 bg-white px-2">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-white text-xs font-bold shadow-md`}>
                      {i + 1}
                    </div>
                    <span className="text-xs font-medium text-gray-600 hidden lg:block">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex gap-4">
              <Link href="/contact" className="flex-1 bg-gray-900 text-white py-3 rounded-xl font-semibold text-center hover:bg-gray-800 transition-colors">
                Get a Quote
              </Link>
              <button className="px-6 py-3 border border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [selectedService, setSelectedService] = useState<any>(null)
  const [selectedCategoryData, setSelectedCategoryData] = useState<any>(null)

  const filteredCategories = activeCategory === 'all' 
    ? serviceCategories 
    : serviceCategories.filter(cat => cat.id === activeCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm mb-6">
              Our Expertise
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Comprehensive Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Solutions</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              From custom software development to data-driven marketing, we provide end-to-end digital services to help your business thrive in the modern economy.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === 'all' 
                    ? 'bg-gray-900 text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'
                }`}
              >
                All Services
              </button>
              {serviceCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === cat.id
                      ? 'bg-gray-900 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <cat.icon size={18} />
                  {cat.title}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Services Grid --- */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredCategories.flatMap((category) => 
                category.services.map((service, idx) => (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -8 }}
                    onClick={() => {
                      setSelectedService(service)
                      setSelectedCategoryData(category)
                    }}
                    className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
                  >
                    {/* Card Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <service.icon className="w-8 h-8 mb-2 text-orange-400" />
                        <h3 className="text-xl font-bold">{service.title}</h3>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-gray-600 mb-6 line-clamp-2">{service.shortDesc}</p>
                      
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex gap-2">
                          {service.techStack.slice(0, 3).map((tech: string, i: number) => (
                            <span key={i} className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded">
                              {tech}
                            </span>
                          ))}
                          {service.techStack.length > 3 && (
                            <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded">+{service.techStack.length - 3}</span>
                          )}
                        </div>
                        <span className="flex items-center text-orange-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                          Details <ArrowRight size={16} className="ml-1" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* --- Why Choose Us --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We don't just deliver projects; we deliver business outcomes.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: 'Agile Delivery', desc: 'Fast iterations and quick time-to-market.' },
              { icon: ShieldCheck, title: 'Secure & Scalable', desc: 'Enterprise-grade security standards.' },
              { icon: Users, title: 'Dedicated Teams', desc: 'Experts working exclusively on your project.' },
              { icon: TrendingUp, title: 'ROI Focused', desc: 'Strategies designed to maximize returns.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-orange-600">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

              <section className="py-18">
                <div className="max-w-7xl relative z-1 mx-auto px-6">
      
                  {/* Heading */}
                  <div className="mb-16">
                    <h2 className="text-4xl lg:text-[2.5rem] font-bold text-gray-800 mb-3">
                      <span className="text-[#FD5D07]">Digitonix</span> Serve All Industries
                    </h2>
                    <p className="text-gray-700 font-medium text-lg">
                      We stay on top of our industry by being experts in yours.
                    </p>
                  </div>
      
                  {/* Cards Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {indus.map((item, index) => (
                      <Indus key={index} title={item.title} Icon={item.icon} />
                    ))}
                  </div>
      
                </div>
              </section>
              <TopScorers />
      
              {/* Blog Preview Section */}
              <section className="py-16">
                <div className="max-w-7xl relative z-1 mx-auto px-4 sm:px-6 lg:px-8">
      
                  <div className="mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                      <span className="text-[#FD5D07]">Digitonix</span> Blogs
                    </h2>
                    <p className="text-gray-700 font-medium text-lg">
                      We stay on top of our industry by being experts in yours.
                    </p>
                  </div>
                  {/* Blog Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* --- CTA Section --- */}
      <CTA
        title="Ready to Start Your Project?"
        description="Let's discuss your requirements and build a solution that drives real growth."
        ctaText="Get a Free Consultation"
        ctaLink="/contact"
      />

      {/* --- Detail Modal --- */}
      <AnimatePresence>
        {selectedService && (
          <ServiceDetailModal 
            service={selectedService} 
            category={selectedCategoryData}
            onClose={() => setSelectedService(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  )
}