'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Zap,
  Target,
  Award,
  Globe,
  Code,
  Palette,
  TrendingUp,
  Menu,
  X,
  Heart,
  Shield,
  Rocket,
  Coffee,
  Clock,
  MessageCircle,
  Star,
  ChevronRight,
  Sparkles,
  Brain,
  Cpu,
  Network,
  Building2,
  GraduationCap,
  Briefcase,
  Leaf,
  HandshakeIcon,
  BarChart3,
  Lightbulb,
  Mic2,
  Play,
  Pause,
  Quote,
  Linkedin,
  Twitter,
  Github,
  Dribbble,
  Mail,
  Phone,
  MapPin,
  Trophy,
  Eye,
  Wind,
  Sun,
  Moon,
  Compass,
  Map,
  Flag,
  Crown,
  Workflow,
  Search,
  Gift
} from 'lucide-react'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import TopScorers from '@/components/tesmonials'

// --- Enhanced Data ---

const statsData = [
  { number: 13, label: 'Years of Excellence', suffix: '+', icon: Award, description: 'Serving clients since 2011' },
  { number: 650, label: 'Projects Delivered', suffix: '+', icon: Rocket, description: 'Across 25+ countries' },
  { number: 98, label: 'Client Retention', suffix: '%', icon: Heart, description: 'Industry-leading loyalty' },
  { number: 55, label: 'Expert Developers', suffix: '+', icon: Users, description: 'Full-time dedicated team' },
  { number: 98, label: 'Client Retention', suffix: '%', icon: Heart, description: 'Industry-leading loyalty' },

]

const values = [
  {
    title: 'Innovation First',
    description: 'We don\'t just follow trends; we set them. Our team constantly explores emerging technologies to keep your business ahead of the curve.',
    icon: Zap,
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-600',
    stats: '15+ R&D Projects'
  },
  {
    title: 'Client Obsession',
    description: 'Your goals are our goals. We build deep partnerships, ensuring every line of code drives your business value and growth.',
    icon: Heart,
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50',
    textColor: 'text-red-600',
    stats: '98% Satisfaction'
  },
  {
    title: 'Relentless Quality',
    description: 'Good enough isn\'t in our vocabulary. We adhere to strict QA protocols to deliver bug-free, scalable, and maintainable solutions.',
    icon: Shield,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
    stats: 'Zero-critical bugs'
  },
  {
    title: 'Transparent Process',
    description: 'No black boxes. You get real-time updates, clear communication, and full visibility into our development lifecycle.',
    icon: Eye,
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    stats: 'Daily updates'
  },
  {
    title: 'Agile Methodology',
    description: 'We embrace change and deliver value quickly through iterative development and continuous feedback loops.',
    icon: Workflow,
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    stats: '2-week sprints'
  },
  {
    title: 'Work-Life Harmony',
    description: 'Happy teams create amazing products. We foster a culture of balance, creativity, and personal growth.',
    icon: Sun,
    color: 'from-yellow-500 to-amber-500',
    bgColor: 'bg-yellow-50',
    textColor: 'text-yellow-600',
    stats: '4.9 Glassdoor'
  }
]

const timeline = [
  {
    year: '2011',
    title: 'The Humble Beginning',
    desc: 'Founded in a small office with just 3 passionate developers, driven by a vision to democratize digital transformation for small businesses.',
    achievements: ['First 5 clients', 'Local recognition'],
    icon: Rocket
  },
  {
    year: '2013',
    title: 'First Milestone',
    desc: 'Completed 50 projects and expanded team to 15 members. Won first industry award for innovative web solutions.',
    achievements: ['50 projects', 'Industry award'],
    icon: Trophy
  },
  {
    year: '2015',
    title: 'Global Expansion',
    desc: 'Opened offices in USA & Canada, serving international clients across 12 countries. Team grew to 30+ experts.',
    achievements: ['3 offices', '12 countries'],
    icon: Globe
  },
  {
    year: '2017',
    title: 'Tech Evolution',
    desc: 'Launched AI/ML division, completed first enterprise-level AI project. Became AWS Advanced Partner.',
    achievements: ['AI division', 'AWS partner'],
    icon: Brain
  },
  {
    year: '2019',
    title: 'Innovation Hub',
    desc: 'Established dedicated R&D center focusing on emerging technologies. Filed 5 technology patents.',
    achievements: ['R&D center', '5 patents'],
    icon: Lightbulb
  },
  {
    year: '2021',
    title: 'Digital Renaissance',
    desc: 'Pivoted to support businesses through digital transformation post-pandemic. Helped 100+ businesses go digital.',
    achievements: ['100+ transformations', 'Remote-first'],
    icon: Cpu
  },
  {
    year: '2024',
    title: 'Industry Leadership',
    desc: 'Recognized as Top 10 Development Agency with 55+ experts, serving Fortune 500 clients and innovative startups.',
    achievements: ['Top 10 agency', 'Fortune 500'],
    icon: Crown
  }
]

export const processSteps = [
  {
    step: '01',
    title: 'Discovery & Research',
    desc: 'We dive deep into your business needs, analyzing market gaps, user requirements, and technical feasibility.',
    icon: Search,
    color: 'from-blue-500 to-cyan-500',
    details: ['Market Analysis', 'User Research', 'Tech Assessment']
  },
  {
    step: '02',
    title: 'Strategy & Planning',
    desc: 'Crafting a comprehensive roadmap that aligns technology with your business goals for maximum ROI.',
    icon: Map,
    color: 'from-purple-500 to-pink-500',
    details: ['Architecture Design', 'Timeline Planning', 'Resource Allocation']
  },
  {
    step: '03',
    title: 'Design & Prototype',
    desc: 'Creating intuitive, beautiful interfaces with rapid prototyping and user testing for perfect UX.',
    icon: Palette,
    color: 'from-orange-500 to-red-500',
    details: ['UI/UX Design', 'Interactive Prototypes', 'User Testing']
  },
  {
    step: '04',
    title: 'Agile Development',
    desc: 'Iterative coding sprints with regular demos, ensuring the product evolves exactly as envisioned.',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
    details: ['Sprint Planning', 'Daily Standups', 'Code Reviews']
  },
  {
    step: '05',
    title: 'Testing & QA',
    desc: 'Rigorous testing across all parameters - functionality, performance, security, and user experience.',
    icon: Shield,
    color: 'from-yellow-500 to-amber-500',
    details: ['Automated Testing', 'Security Audit', 'Performance Optimization']
  },
  {
    step: '06',
    title: 'Launch & Scale',
    desc: 'Smooth deployment with ongoing monitoring, support, and optimization to scale as you grow.',
    icon: Rocket,
    color: 'from-indigo-500 to-blue-500',
    details: ['Deployment', 'Monitoring', 'Continuous Improvement']
  }
]

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'CEO & Founder',
    bio: '15+ years in tech innovation. Previously led engineering at Google and Microsoft.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    social: { linkedin: '#', twitter: '#', github: '#' },
    expertise: ['Strategy', 'Leadership', 'Innovation'],
    quote: 'Technology is best when it brings people together.'
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    bio: 'AI/ML expert with 12+ years experience. PhD in Computer Science from Stanford.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    social: { linkedin: '#', twitter: '#', github: '#' },
    expertise: ['AI/ML', 'Cloud Architecture', 'R&D'],
    quote: 'The future belongs to those who embrace AI.'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Design',
    bio: 'Award-winning designer with work featured in Awwwards and Behance.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
    social: { linkedin: '#', dribbble: '#', twitter: '#' },
    expertise: ['UI/UX', 'Branding', 'Creative Direction'],
    quote: 'Design is intelligence made visible.'
  },
  {
    name: 'Priya Patel',
    role: 'Lead Developer',
    bio: 'Full-stack expert specializing in scalable web applications and microservices.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    social: { linkedin: '#', github: '#', twitter: '#' },
    expertise: ['React/Node.js', 'Architecture', 'DevOps'],
    quote: 'Code is poetry that runs.'
  }
]


// Custom animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}


export default function AboutPage() {

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Hero
        title="Transform Your Business with Digital Excellence"
        subtitle="Digital Agency"
        description="Unlock your business potential with our comprehensive IT services, digital marketing strategies, and stunning graphic design solutions."
        ctaText="Start Your Project"
        ctaLink="/services"
        secondaryCta={{ text: 'Watch Demo', link: '#' }}
      />

      <Stats stats={statsData} />

      {/* --- Mission & Vision with Parallax Cards --- */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative group"
            >
              <div className="relative bg-white">

                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  To empower businesses of all sizes by providing accessible, cutting-edge technology solutions.
                  We believe that digital transformation shouldn't be a luxury—it should be the engine that drives your growth.
                </p>
                <ul className="space-y-4">
                  {[
                    'Custom Software Solutions',
                    'Scalable Cloud Architecture',
                    'User-Centric Design',
                    'AI-Powered Innovations'
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-gray-700 font-medium group/item"
                    >
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm group-hover/item:scale-110 transition-transform">
                        ✓
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* Impact Stats */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-semibold text-gray-900">500+</div>
                      <div className="text-sm text-gray-500">Projects Delivered</div>
                    </div>
                    <div>
                      <div className="text-2xl font-semibold text-gray-900">98%</div>
                      <div className="text-sm text-gray-500">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative group"
            >
              <div className="relative">

                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  To be the global catalyst for innovation, where human creativity meets artificial intelligence
                  to solve the world's most complex business challenges.
                </p>

                <div className="space-y-6">
                  <div className="relative p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                    <Quote className="absolute top-4 right-4 text-blue-200" size={40} />
                    <p className="italic text-gray-700 font-medium mb-4">
                      "We envision a future where technology is invisible, intuitive, and indispensable."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-semibold">
                        TV
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">True Value Team</p>
                        <p className="text-xs text-gray-500">2024 Vision Statement</p>
                      </div>
                    </div>
                  </div>

                  {/* 2030 Goals */}
                  <div className="grid grid-cols-3 gap-2">
                    {['Global Leader', 'AI First', 'Sustainable'].map((goal, i) => (
                      <div key={i} className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="text-xs font-semibold text-gray-900">{goal}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Core Values Grid with Hover Effects --- */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">


        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
              Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Core Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              These principles guide every decision we make and every line of code we write.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${val.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Icon */}
                <val.icon className={`w-12 h-12 mb-4 stroke-[1.2] ${val.textColor}`} />

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {val.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {val.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-2 text-sm">
                  <span className={`px-3 py-1 rounded-full ${val.bgColor} ${val.textColor} font-medium`}>
                    {val.stats}
                  </span>
                </div>

                {/* Decorative Line */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${val.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Timeline with Interactive Elements --- */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
              Evolution of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Excellence</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              From a small startup to a global technology leader - our story of growth and innovation
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Main Timeline Line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500/50 via-blue-500/50 to-orange-500/50" />

            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col lg:flex-row gap-8 last:mb-0 ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                {/* Timeline Dot with Icon */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-8 lg:left-1/2 w-16 h-16 bg-white rounded-full border-4 border-orange-500 shadow-xl -translate-x-1/2 flex items-center justify-center z-20"
                >
                  <item.icon className="w-6 h-6 text-orange-500" />
                </motion.div>

                {/* Content */}
                <div className={`ml-24 lg:ml-0 lg:w-1/2 ${idx % 2 === 0 ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 rounded-2xl shadow border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 relative group"
                  >
                    {/* Year Badge */}
                    <div className="absolute -top-4 left-6 px-4 py-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white font-semibold text-sm">
                      {item.year}
                    </div>

                    <div className="mt-2">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{item.desc}</p>

                      {/* Achievements */}
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover Effect Line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 rounded-xl bg-gradient-to-r from-orange-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Process Section with Interactive Cards --- */}
      <section className="py-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-2">
              How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">Work</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A proven methodology that ensures quality, speed, and transparency throughout your project journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-100 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Step Number */}
                <div className="text-7xl font-semibold text-white/20 absolute top-4 right-4 group-hover:text-white/40 transition-colors">
                  {step.step}
                </div>

                <step.icon className="w-12 stroke-[1.4] mb-4 h-12 text-white" />

                {/* Content */}
                <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{step.desc}</p>

                {/* Details */}
                <div className="space-y-2">
                  {step.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`} />
                      {detail}
                    </div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${((idx + 1) / processSteps.length) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + idx * 0.1, duration: 0.8 }}
                    className={`h-full bg-gradient-to-r ${step.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=" mb-12"
          >
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4 block">
              Leadership Team
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
              Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Experts</span>
            </h2>
            <p className="text-base text-gray-600 max-w-2xl">
              The brilliant minds behind our success - dedicated professionals passionate about technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="relative w-full aspect-[6/5] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Social Links */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex justify-center gap-3">
                        {Object.entries(member.social).map(([platform, link]) => (
                          <Link
                            key={platform}
                            href={link}
                            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                          >
                            {platform === 'linkedin' && <Linkedin className="w-5 h-5 text-white" />}
                            {platform === 'twitter' && <Twitter className="w-5 h-5 text-white" />}
                            {platform === 'github' && <Github className="w-5 h-5 text-white" />}
                            {platform === 'dribbble' && <Dribbble className="w-5 h-5 text-white" />}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="px-6 py-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-gray-600 mb-4">{member.bio}</p>

                    {/* Expertise Tags */}
                    {/* <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                          {skill}
                        </span>
                      ))}
                    </div> */}

                    {/* Quote */}
                    {/* <div className="mt-4 pt-4 border-t border-gray-100">
                      <Quote className="w-8 h-8 text-gray-300 mb-2" />
                      <p className="text-sm text-gray-500 italic">"{member.quote}"</p>
                    </div> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<TopScorers />
      {/* --- CTA Section with Parallax --- */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/80" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
              Ready to Build Something Great?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with True Value Infosoft.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 group"
                >
                  Start Your Project
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 font-semibold text-lg hover:bg-white/20 transition-all duration-300"
                >
                  View Portfolio
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-orange-400" />
                  <span>hello@truevalueinfosoft.com</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  <span>Global Offices</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}