'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import {
  Menu, X, ChevronDown, Sparkles, MoveRight,
  Code2, Megaphone, Search, Target, Share2,
  PenTool, Palette, Globe, Camera, Video,
  BarChart, Smartphone, Database, Cloud,
  Shield, Cpu, Gauge, Workflow, Box,
  Laptop, ExternalLink, Briefcase, Users,
  Award, TrendingUp, Rocket, Zap
} from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { scrollY } = useScroll()

  // Scroll effect with refined threshold
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 5)
  })

  // Close mobile menu and dropdowns when route changes
  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null)
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  // Service sublinks with enhanced categories
  const serviceCategories = [
    {
      category: "Web Development",
      icon: <Code2 className="h-5 w-5" />,
      links: [
        { href: '/services/web-design', label: 'Web Design', icon: <Palette className="h-4 w-4" />, description: 'Modern responsive websites', popular: true },
        { href: '/services/ecommerce', label: 'E-Commerce', icon: <Globe className="h-4 w-4" />, description: 'Online stores & marketplaces' },
        { href: '/services/web-apps', label: 'Web Applications', icon: <Laptop className="h-4 w-4" />, description: 'Custom web solutions' },
        { href: '/services/cms', label: 'CMS Development', icon: <Box className="h-4 w-4" />, description: 'WordPress, Shopify, Webflow' }
      ]
    },
        {
      category: "App Development",
      icon: <Code2 className="h-5 w-5" />,
      links: [
        { href: '/services/web-design', label: 'Web Design', icon: <Palette className="h-4 w-4" />, description: 'Modern responsive websites', popular: true },
        { href: '/services/ecommerce', label: 'E-Commerce', icon: <Globe className="h-4 w-4" />, description: 'Online stores & marketplaces' },
        { href: '/services/web-apps', label: 'Web Applications', icon: <Laptop className="h-4 w-4" />, description: 'Custom web solutions' },
        { href: '/services/cms', label: 'CMS Development', icon: <Box className="h-4 w-4" />, description: 'WordPress, Shopify, Webflow' }
      ]
    },
    {
      category: "Digital Marketing",
      icon: <Megaphone className="h-5 w-5" />,
      links: [
        { href: '/services/seo', label: 'SEO Optimization', icon: <Search className="h-4 w-4" />, description: 'Rank higher on Google', popular: true },
        { href: '/services/ppc', label: 'PPC Advertising', icon: <Target className="h-4 w-4" />, description: 'Google & Meta ads' },
        { href: '/services/social-media', label: 'Social Media', icon: <Share2 className="h-4 w-4" />, description: 'Content & community' },
        { href: '/services/email-marketing', label: 'Email Marketing', icon: <Megaphone className="h-4 w-4" />, description: 'Automated campaigns' }
      ]
    },
    {
      category: "Creative Services",
      icon: <PenTool className="h-5 w-5" />,
      links: [
        { href: '/services/content-creation', label: 'Content Creation', icon: <PenTool className="h-4 w-4" />, description: 'Blog posts & copywriting' },
        { href: '/services/video-production', label: 'Video Production', icon: <Video className="h-4 w-4" />, description: 'Promo & explainer videos' },
        { href: '/services/photography', label: 'Photography', icon: <Camera className="h-4 w-4" />, description: 'Product & brand shoots' },
        { href: '/services/branding', label: 'Branding', icon: <Award className="h-4 w-4" />, description: 'Logo & identity design' }
      ]
    }
  ]

  // Portfolio categories
  const portfolioCategories = [
    {
      category: "By Industry",
      icon: <Briefcase className="h-5 w-5" />,
      links: [
        { href: '/portfolio/ecommerce', label: 'E-Commerce', count: 24, image: '/portfolio/ecom.jpg' },
        { href: '/portfolio/tech', label: 'Technology', count: 18, image: '/portfolio/tech.jpg' },
        { href: '/portfolio/healthcare', label: 'Healthcare', count: 12, image: '/portfolio/health.jpg' },
        { href: '/portfolio/education', label: 'Education', count: 15, image: '/portfolio/edu.jpg' },
        { href: '/portfolio/real-estate', label: 'Real Estate', count: 9, image: '/portfolio/realestate.jpg' }
      ]
    },
    {
      category: "By Service",
      icon: <Rocket className="h-5 w-5" />,
      links: [
        { href: '/portfolio/web-design', label: 'Web Design', count: 42, image: '/portfolio/web.jpg' },
        { href: '/portfolio/mobile-apps', label: 'Mobile Apps', count: 16, image: '/portfolio/mobile.jpg' },
        { href: '/portfolio/branding', label: 'Branding', count: 23, image: '/portfolio/branding.jpg' },
        { href: '/portfolio/marketing', label: 'Marketing', count: 31, image: '/portfolio/marketing.jpg' }
      ]
    },
    {
      category: "Featured",
      icon: <Award className="h-5 w-5" />,
      links: [
        { href: '/portfolio/case-studies', label: 'Case Studies', icon: <TrendingUp className="h-4 w-4" />, featured: true },
        { href: '/portfolio/awards', label: 'Award Winners', icon: <Award className="h-4 w-4" />, featured: true },
        { href: '/portfolio/recent', label: 'Recent Work', icon: <Zap className="h-4 w-4" />, featured: true }
      ]
    }
  ]

  // Technologies categories
  const techCategories = [
    {
      category: "Frontend",
      icon: <Code2 className="h-5 w-5" />,
      links: [
        { href: '/technologies/react', label: 'React/Next.js', level: 'Expert', icon: <Code2 className="h-4 w-4" /> },
        { href: '/technologies/vue', label: 'Vue.js', level: 'Advanced', icon: <Code2 className="h-4 w-4" /> },
        { href: '/technologies/angular', label: 'Angular', level: 'Advanced', icon: <Code2 className="h-4 w-4" /> },
        { href: '/technologies/typescript', label: 'TypeScript', level: 'Expert', icon: <Code2 className="h-4 w-4" /> },
        { href: '/technologies/mobile', label: 'React Native', level: 'Expert', icon: <Smartphone className="h-4 w-4" /> }
      ]
    },
    {
      category: "Backend",
      icon: <Database className="h-5 w-5" />,
      links: [
        { href: '/technologies/node', label: 'Node.js', level: 'Expert', icon: <Database className="h-4 w-4" /> },
        { href: '/technologies/python', label: 'Python/Django', level: 'Advanced', icon: <Database className="h-4 w-4" /> },
        { href: '/technologies/php', label: 'PHP/Laravel', level: 'Advanced', icon: <Database className="h-4 w-4" /> },
        { href: '/technologies/java', label: 'Java/Spring', level: 'Intermediate', icon: <Database className="h-4 w-4" /> },
        { href: '/technologies/graphql', label: 'GraphQL', level: 'Advanced', icon: <Database className="h-4 w-4" /> }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="h-5 w-5" />,
      links: [
        { href: '/technologies/aws', label: 'AWS', level: 'Advanced', icon: <Cloud className="h-4 w-4" /> },
        { href: '/technologies/azure', label: 'Azure', level: 'Intermediate', icon: <Cloud className="h-4 w-4" /> },
        { href: '/technologies/docker', label: 'Docker', level: 'Expert', icon: <Box className="h-4 w-4" /> },
        { href: '/technologies/kubernetes', label: 'Kubernetes', level: 'Advanced', icon: <Box className="h-4 w-4" /> },
        { href: '/technologies/ci-cd', label: 'CI/CD', level: 'Advanced', icon: <Workflow className="h-4 w-4" /> }
      ]
    },
    {
      category: "Database",
      icon: <Database className="h-5 w-5" />,
      links: [
        { href: '/technologies/postgresql', label: 'PostgreSQL', level: 'Expert', icon: <Database className="h-4 w-4" /> },
        { href: '/technologies/mongodb', label: 'MongoDB', level: 'Advanced', icon: <Database className="h-4 w-4" /> },
        { href: '/technologies/mysql', label: 'MySQL', level: 'Expert', icon: <Database className="h-4 w-4" /> },
        { href: '/technologies/redis', label: 'Redis', level: 'Advanced', icon: <Database className="h-4 w-4" /> },
        { href: '/technologies/firebase', label: 'Firebase', level: 'Advanced', icon: <Database className="h-4 w-4" /> }
      ]
    }
  ]

  // Navigation links with megamenu indicators
  const navLinks = [
    { href: '/', label: 'Home', exact: true, hasDropdown: false },
    { href: '/about', label: 'About', exact: true, hasDropdown: false },
    { href: '/services', label: 'Services', exact: false, hasDropdown: true, dropdownType: 'services' },
    { href: '/portfolio', label: 'Portfolio', exact: true, hasDropdown: true, dropdownType: 'portfolio' },
    { href: '/technologies', label: 'Technologies', exact: true, hasDropdown: true, dropdownType: 'technologies' },
    { href: '/blog', label: 'Blog', exact: true, hasDropdown: false },
    { href: '/careers', label: 'Careers', exact: true, hasDropdown: false },
    { href: '/contact', label: 'Contact', exact: true, hasDropdown: false },
  ]

  // Active link detection
  const isActive = (href: string, exact: boolean) => {
    if (exact) return pathname === href
    return pathname === href || pathname.startsWith(href + '/')
  }

  // Handle dropdown hover
  const handleDropdownEnter = (type: string) => {
    setActiveDropdown(type)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
  }

  const isBackgroundDark = usePathname().includes("services/") || ""

  // Mobile submenu state
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled || isBackgroundDark
          ? 'bg-gray-50 py-1 shadow border-b border-gray-200/50'
          : 'py-3 bg-transprents'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "backOut" }}
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <Link href="/" className="text-2xl font-bold flex items-center group">
              <Image src="./log.png" alt="Company Logo" width={160} height={80} className="rounded-full" />
            </Link>
          </motion.div>

          {/* Desktop Navigation with Megamenus */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => {
              const active = isActive(link.href, link.exact)

              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && handleDropdownEnter(link.dropdownType!)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={link.href}
                    className={`text-base font-medium transition-all duration-300 relative group px-3 py-2 rounded-xl ${active
                        ? 'text-gray-900 font-semibold bg-gradient-to-r from-primary/10 to-accent/10'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
                      }`}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown
                        className={`inline-block ml-1 h-3 w-3 transition-transform duration-300 ${activeDropdown === link.dropdownType ? 'rotate-180' : ''
                          }`}
                      />
                    )}
                  </Link>

                  {/* Megamenus */}
                  <AnimatePresence>
                    {activeDropdown === link.dropdownType && link.hasDropdown && (
                      <>
                        {link.dropdownType === 'services' && (
                          <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 15, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute left-1/2 -translate-x-1/2 pt-6 w-[950px] z-50"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="bg-white/80 rounded-2xl !backdrop-blur-lg shadow-xl border border-gray-200 overflow-hidden">
                            <div>
                              
                            </div>
                              <div className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                  <h3 className="text-lg uppercase font-semibold text-gray-900">Our Services</h3>
                                  <Link
                                    href="/services"
                                    className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1 group"
                                  >
                                    View all services
                                    <MoveRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                  </Link>
                                </div>

                                <div className="grid grid-cols-4 gap-1">
                                  {serviceCategories.map((category, idx) => (
                                    <div key={idx} className="space-y-3">
                                      <div className="flex items-center gap-2 text-gray-900 font-medium border-b border-gray-300 pb-4">
                                        <span className="text-primary">{category.icon}</span>
                                        <span className='font-bold'>{category.category}</span>
                                      </div>
                                      <div className="space-y-1">
                                        {category.links.map((link) => (
                                          <Link
                                            key={link.href}
                                            href={link.href}
                                            className="flex items-center justify-between group/item p-2 rounded-lg hover:bg-gray-200 transition-all"
                                          >
                                            <div className="flex items-center gap-2">
                                              <span className="text-gray-400 group-hover/item:text-primary transition-colors">
                                                {link.icon}
                                              </span>
                                              <span className="font-medium text-gray-900 group-hover/item:text-gray-900">
                                                {link.label}
                                              </span>
                                            </div>
                                           
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className=" p-4 border-t border-gray-100">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-4">
                                    <div className="flex -space-x-2">
                                      <div className="w-8 h-8 bg-primary/20 rounded-full border-2 border-white flex items-center justify-center">
                                        <Zap className="h-4 w-4 text-primary" />
                                      </div>
                                      <div className="w-8 h-8 bg-accent/20 rounded-full border-2 border-white flex items-center justify-center">
                                        <Rocket className="h-4 w-4 text-accent" />
                                      </div>
                                    </div>
                                    <span className="text-sm text-gray-600">
                                      🚀 Get 20% off on your first project
                                    </span>
                                  </div>
                                  <Link
                                    href="/contact"
                                    className="text-sm bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                                  >
                                    Start a project
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {link.dropdownType === 'portfolio' && (
                           <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 15, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute left-1/2 -translate-x-1/2 pt-6 w-[800px] z-50"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="bg-white/80 rounded-2xl !backdrop-blur-lg shadow-xl border border-gray-200 overflow-hidden">
                              <div className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                  <h3 className="text-lg font-semibold uppercase text-gray-900">Our Portfolio</h3>
                                  <Link
                                    href="/portfolio"
                                    className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1 group"
                                  >
                                    Browse all projects
                                    <MoveRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                  </Link>
                                </div>

                                <div className="grid grid-cols-3 gap-4">
                                  {portfolioCategories.slice(0, 2).map((category, idx) => (
                                   <div key={idx} className="space-y-3">
                                      <div className="flex items-center gap-2 text-gray-900 font-medium border-b border-gray-300 pb-4">
                                        <span className="text-primary">{category.icon}</span>
                                        <span className='font-bold'>{category.category}</span>
                                      </div>
                                      <div className="space-y-1">
                                        {category.links.map((link) => (
                                          <Link
                                            key={link.href}
                                            href={link.href}
                                            className="flex items-center justify-between group/item p-2 rounded-lg hover:bg-gray-200 transition-all"
                                          >
                                            <div className="flex items-center gap-2">
                                              <span className="text-gray-400 group-hover/item:text-primary transition-colors">
                                                {link.icon}
                                              </span>
                                              <span className="font-medium text-gray-900 group-hover/item:text-gray-900">
                                                {link.label}
                                              </span>
                                            </div>
                                           
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ))}

                                  <div className="space-y-3">
                                   
                                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-4 h-full">
                                      {portfolioCategories[2].links.map((link) => (
                                        <Link
                                          key={link.href}
                                          href={link.href}
                                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-colors"
                                        >
                                          <span className="text-gray-500">{link.icon}</span>
                                          <div>
                                            <span className=" font-medium text-gray-900">
                                              {link.label}
                                            </span>
                                          </div>
                                        </Link>
                                      ))}

                                      <div className="mt-4 pt-4 border-t border-gray-200/50">
                                        <div className="flex items-center gap-2">
                                          <Award className="h-5 w-5 text-yellow-500" />
                                          <span className="text-xs text-gray-600">
                                            50+ Happy Clients Worldwide
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {link.dropdownType === 'technologies' && (
                           <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 15, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute left-1/2 -translate-x-1/2 pt-6 w-[800px] z-50"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="bg-white/80 rounded-2xl !backdrop-blur-lg shadow-xl border border-gray-200 overflow-hidden">
                              <div className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                  <h3 className="text-lg font-semibold uppercase text-gray-900">Our Tech Stack</h3>
                                  <Link
                                    href="/technologies"
                                    className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1 group"
                                  >
                                    View all technologies
                                    <MoveRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                  </Link>
                                </div>

                                <div className="grid grid-cols-4 gap-4">
                                  {techCategories.map((category, idx) => (
                                     <div key={idx} className="space-y-3">
                                      <div className="flex items-center gap-2 text-gray-900 font-medium border-b border-gray-300 pb-4">
                                        <span className="text-primary">{category.icon}</span>
                                        <span className='font-bold'>{category.category}</span>
                                      </div>
                                      <div className="space-y-1">
                                        {category.links.map((link) => (
                                          <Link
                                            key={link.href}
                                            href={link.href}
                                            className="flex items-center justify-between group/item p-2 rounded-lg hover:bg-gray-200 transition-all"
                                          >
                                            <div className="flex items-center gap-2">
                                              <span className="text-gray-400 group-hover/item:text-primary transition-colors">
                                                {link.icon}
                                              </span>
                                              <span className="font-medium text-gray-900 group-hover/item:text-gray-900">
                                                {link.label}
                                              </span>
                                            </div>
                                           
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:block group px-4 py-2 rounded-full text-gray-100 font-semibold bg-red-500 text-base hover:bg-gray-900 hover:text-white transition-all duration-300 relative overflow-hidden"
          >
            <Link
              href={"/"}
              className=""
            >
              <span className="relative z-10">Connect us</span>
              <div className="absolute inset-0 bg-gray-900 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 p-2 relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <motion.div
              animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-auto max-h-[calc(100vh-5rem)] bg-white/95 backdrop-blur-md rounded-2xl shadow-xl mt-4 border border-gray-200"
            >
              <div className="py-4">
                {navLinks.map((link) => {
                  const active = isActive(link.href, link.exact)

                  if (link.hasDropdown) {
                    return (
                      <div key={link.href} className="border-b border-gray-100 last:border-0">
                        <button
                          onClick={() => setMobileDropdown(mobileDropdown === link.dropdownType ? null : link.dropdownType!)}
                          className="w-full px-4 py-3 flex items-center justify-between text-left"
                        >
                          <span className={`font-medium ${active ? 'text-primary' : 'text-gray-700'}`}>
                            {link.label}
                          </span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${mobileDropdown === link.dropdownType ? 'rotate-180' : ''
                              }`}
                          />
                        </button>

                        <AnimatePresence>
                          {mobileDropdown === link.dropdownType && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="bg-gray-50/50 px-4"
                            >
                              {link.dropdownType === 'services' && (
                                <div className="py-3 space-y-4">
                                  {serviceCategories.map((category) => (
                                    <div key={category.category} className="space-y-2">
                                      <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                                        {category.icon}
                                        {category.category}
                                      </div>
                                      {category.links.map((subLink) => (
                                        <Link
                                          key={subLink.href}
                                          href={subLink.href}
                                          className="flex items-center justify-between py-2 pl-6 text-sm text-gray-600 hover:text-primary"
                                          onClick={() => setIsOpen(false)}
                                        >
                                          <div className="flex items-center gap-2">
                                            {subLink.icon}
                                            {subLink.label}
                                          </div>
                                          {subLink.popular && (
                                            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                                              Popular
                                            </span>
                                          )}
                                        </Link>
                                      ))}
                                    </div>
                                  ))}
                                </div>
                              )}

                              {link.dropdownType === 'portfolio' && (
                                <div className="py-3 space-y-4">
                                  {portfolioCategories.map((category) => (
                                    <div key={category.category} className="space-y-2">
                                      <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                                        {category.icon}
                                        {category.category}
                                      </div>
                                      {category.links.map((subLink) => (
                                        <Link
                                          key={subLink.href}
                                          href={subLink.href}
                                          className="flex items-center justify-between py-2 pl-6 text-sm text-gray-600 hover:text-primary"
                                          onClick={() => setIsOpen(false)}
                                        >
                                          <span>{subLink.label}</span>
                                          {subLink.count && (
                                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                                              {subLink.count}
                                            </span>
                                          )}
                                        </Link>
                                      ))}
                                    </div>
                                  ))}
                                </div>
                              )}

                              {link.dropdownType === 'technologies' && (
                                <div className="py-3 space-y-4">
                                  {techCategories.map((category) => (
                                    <div key={category.category} className="space-y-2">
                                      <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                                        {category.icon}
                                        {category.category}
                                      </div>
                                      {category.links.map((subLink) => (
                                        <Link
                                          key={subLink.href}
                                          href={subLink.href}
                                          className="flex items-center justify-between py-2 pl-6 text-sm text-gray-600 hover:text-primary"
                                          onClick={() => setIsOpen(false)}
                                        >
                                          <div className="flex items-center gap-2">
                                            {subLink.icon}
                                            {subLink.label}
                                          </div>
                                          <span className={`text-xs px-2 py-0.5 rounded-full ${subLink.level === 'Expert' ? 'bg-green-100 text-green-700' :
                                              subLink.level === 'Advanced' ? 'bg-blue-100 text-blue-700' :
                                                'bg-yellow-100 text-yellow-700'
                                            }`}>
                                            {subLink.level}
                                          </span>
                                        </Link>
                                      ))}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-3 font-medium border-b border-gray-100 last:border-0 ${active
                          ? 'text-primary bg-primary/5'
                          : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )
                })}

                <div className="p-4">
                  <Link
                    href="/contact"
                    className="block w-full px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium text-center text-sm shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}