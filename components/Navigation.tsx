'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import {
  Menu, X, ChevronDown, MoveRight,
  Code2, Megaphone, Search, Target, Share2,
  PenTool, Palette, Globe, Camera, Video,
  BarChart, Smartphone, Database, Cloud,
  Shield, Cpu, Gauge, Workflow, Box,
  Laptop, ExternalLink, Briefcase, Users,
  Award, TrendingUp, Rocket, Zap, Sparkles, Phone,
  Link2Icon,
  ExternalLinkIcon
} from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 5)
  })

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null)
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const serviceCategories = [
    {
      category: "Web Development",
      icon: <Code2 className="h-4 w-4" />,
      links: [
        { href: '/services/web-design', label: 'Web Design', icon: <Palette className="h-3.5 w-3.5" />, description: 'Modern responsive websites', popular: true },
        { href: '/services/ecommerce', label: 'E-Commerce', icon: <Globe className="h-3.5 w-3.5" />, description: 'Online stores & marketplaces' },
        { href: '/services/web-apps', label: 'Web Applications', icon: <Laptop className="h-3.5 w-3.5" />, description: 'Custom web solutions' },
        { href: '/services/cms', label: 'CMS Development', icon: <Box className="h-3.5 w-3.5" />, description: 'WordPress, Shopify, Webflow' }
      ]
    },
    {
      category: "App Development",
      icon: <Smartphone className="h-4 w-4" />,
      links: [
        { href: '/services/mobile', label: 'Mobile Apps', icon: <Smartphone className="h-3.5 w-3.5" />, description: 'iOS & Android apps', popular: true },
        { href: '/services/react-native', label: 'React Native', icon: <Code2 className="h-3.5 w-3.5" />, description: 'Cross-platform apps' },
        { href: '/services/flutter', label: 'Flutter', icon: <Cpu className="h-3.5 w-3.5" />, description: 'Native performance' },
        { href: '/services/pwa', label: 'PWA', icon: <Globe className="h-3.5 w-3.5" />, description: 'Progressive web apps' }
      ]
    },
    {
      category: "Digital Marketing",
      icon: <Megaphone className="h-4 w-4" />,
      links: [
        { href: '/services/seo', label: 'SEO Optimization', icon: <Search className="h-3.5 w-3.5" />, description: 'Rank higher on Google', popular: true },
        { href: '/services/ppc', label: 'PPC Advertising', icon: <Target className="h-3.5 w-3.5" />, description: 'Google & Meta ads' },
        { href: '/services/social-media', label: 'Social Media', icon: <Share2 className="h-3.5 w-3.5" />, description: 'Content & community' },
        { href: '/services/email-marketing', label: 'Email Marketing', icon: <Megaphone className="h-3.5 w-3.5" />, description: 'Automated campaigns' }
      ]
    },
    {
      category: "Creative Services",
      icon: <PenTool className="h-4 w-4" />,
      links: [
        { href: '/services/content-creation', label: 'Content Creation', icon: <PenTool className="h-3.5 w-3.5" />, description: 'Blog posts & copywriting' },
        { href: '/services/video-production', label: 'Video Production', icon: <Video className="h-3.5 w-3.5" />, description: 'Promo & explainer videos' },
        { href: '/services/photography', label: 'Photography', icon: <Camera className="h-3.5 w-3.5" />, description: 'Product & brand shoots' },
        { href: '/services/branding', label: 'Branding', icon: <Award className="h-3.5 w-3.5" />, description: 'Logo & identity design' }
      ]
    }
  ]

  const portfolioCategories = [
    {
      category: "By Industry",
      icon: <Briefcase className="h-4 w-4" />,
      links: [
        { href: '/portfolio/ecommerce', label: 'E-Commerce', count: 24 },
        { href: '/portfolio/tech', label: 'Technology', count: 18 },
        { href: '/portfolio/healthcare', label: 'Healthcare', count: 12 },
        { href: '/portfolio/education', label: 'Education', count: 15 },
        { href: '/portfolio/real-estate', label: 'Real Estate', count: 9 }
      ]
    },
    {
      category: "By Service",
      icon: <Rocket className="h-4 w-4" />,
      links: [
        { href: '/portfolio/web-design', label: 'Web Design', count: 42 },
        { href: '/portfolio/mobile-apps', label: 'Mobile Apps', count: 16 },
        { href: '/portfolio/branding', label: 'Branding', count: 23 },
        { href: '/portfolio/marketing', label: 'Marketing', count: 31 }
      ]
    },
    {
      category: "Featured",
      icon: <Award className="h-4 w-4" />,
      links: [
        { href: '/portfolio/case-studies', label: 'Case Studies', icon: <TrendingUp className="h-3.5 w-3.5" /> },
        { href: '/portfolio/awards', label: 'Award Winners', icon: <Award className="h-3.5 w-3.5" /> },
        { href: '/portfolio/recent', label: 'Recent Work', icon: <Zap className="h-3.5 w-3.5" /> }
      ]
    }
  ]

  const techCategories = [
    {
      category: "Frontend",
      icon: <Code2 className="h-4 w-4" />,
      links: [
        { href: '/technologies/react', label: 'React/Next.js', level: 'Expert', icon: <Code2 className="h-3.5 w-3.5" /> },
        { href: '/technologies/vue', label: 'Vue.js', level: 'Advanced', icon: <Code2 className="h-3.5 w-3.5" /> },
        { href: '/technologies/angular', label: 'Angular', level: 'Advanced', icon: <Code2 className="h-3.5 w-3.5" /> },
        { href: '/technologies/typescript', label: 'TypeScript', level: 'Expert', icon: <Code2 className="h-3.5 w-3.5" /> },
        { href: '/technologies/mobile', label: 'React Native', level: 'Expert', icon: <Smartphone className="h-3.5 w-3.5" /> }
      ]
    },
    {
      category: "Backend",
      icon: <Database className="h-4 w-4" />,
      links: [
        { href: '/technologies/node', label: 'Node.js', level: 'Expert', icon: <Database className="h-3.5 w-3.5" /> },
        { href: '/technologies/python', label: 'Python/Django', level: 'Advanced', icon: <Database className="h-3.5 w-3.5" /> },
        { href: '/technologies/php', label: 'PHP/Laravel', level: 'Advanced', icon: <Database className="h-3.5 w-3.5" /> },
        { href: '/technologies/java', label: 'Java/Spring', level: 'Intermediate', icon: <Database className="h-3.5 w-3.5" /> },
        { href: '/technologies/graphql', label: 'GraphQL', level: 'Advanced', icon: <Database className="h-3.5 w-3.5" /> }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="h-4 w-4" />,
      links: [
        { href: '/technologies/aws', label: 'AWS', level: 'Advanced', icon: <Cloud className="h-3.5 w-3.5" /> },
        { href: '/technologies/azure', label: 'Azure', level: 'Intermediate', icon: <Cloud className="h-3.5 w-3.5" /> },
        { href: '/technologies/docker', label: 'Docker', level: 'Expert', icon: <Box className="h-3.5 w-3.5" /> },
        { href: '/technologies/kubernetes', label: 'Kubernetes', level: 'Advanced', icon: <Box className="h-3.5 w-3.5" /> },
        { href: '/technologies/ci-cd', label: 'CI/CD', level: 'Advanced', icon: <Workflow className="h-3.5 w-3.5" /> }
      ]
    },
    {
      category: "Database",
      icon: <Database className="h-4 w-4" />,
      links: [
        { href: '/technologies/postgresql', label: 'PostgreSQL', level: 'Expert', icon: <Database className="h-3.5 w-3.5" /> },
        { href: '/technologies/mongodb', label: 'MongoDB', level: 'Advanced', icon: <Database className="h-3.5 w-3.5" /> },
        { href: '/technologies/mysql', label: 'MySQL', level: 'Expert', icon: <Database className="h-3.5 w-3.5" /> },
        { href: '/technologies/redis', label: 'Redis', level: 'Advanced', icon: <Database className="h-3.5 w-3.5" /> },
        { href: '/technologies/firebase', label: 'Firebase', level: 'Advanced', icon: <Database className="h-3.5 w-3.5" /> }
      ]
    }
  ]

  const navLinks = [
    { href: '/', label: 'Home', exact: true, hasDropdown: false },
    { href: '/about', label: 'About', exact: true, hasDropdown: false },
    { href: '/services', label: 'Services', exact: false, hasDropdown: true, dropdownType: 'services' },
    { href: '/portfolio', label: 'Portfolio', exact: true, hasDropdown: true, dropdownType: 'portfolio' },
    { href: '/technologies', label: 'Technologies', exact: true, hasDropdown: true, dropdownType: 'technologies' },
    { href: '/hireus', label: 'Hire Us', exact: true, hasDropdown: false },
    { href: '/blog', label: 'Blog', exact: true, hasDropdown: false },
    { href: '/careers', label: 'Careers', exact: true, hasDropdown: false },
    { href: '/contact', label: 'Contact', exact: true, hasDropdown: false },
  ]

  const isActive = (href: string, exact: boolean) => {
    if (exact) return pathname === href
    return pathname === href || pathname.startsWith(href + '/')
  }

  const handleDropdownEnter = (type: string) => setActiveDropdown(type)
  const handleDropdownLeave = () => setActiveDropdown(null)

  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)

  const levelColors: Record<string, string> = {
    Expert: 'bg-[#1a3fa0]/10 text-[#1a3fa0]',
    Advanced: 'bg-[#e8a020]/10 text-[#b07010]',
    Intermediate: 'bg-slate-100 text-slate-600'
  }

  return (
    <>
      <style>{`
        :root {
          --blue-deep: #0f2a6b;
          --blue-main: #1a3fa0;
          --blue-mid: #2952cc;
          --blue-light: #3d6ee8;
          --gold-main: #e8a020;
          --gold-bright: #f0b832;
          --gold-dark: #b07010;
          --white: #ffffff;
          --gray-50: #f8f9fc;
          --gray-100: #f0f2f8;
          --gray-200: #dde2ef;
          --gray-600: #4a5578;
          --gray-900: #0d1526;
        }

        .nav-glass {
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(26,63,160,0.08);
          box-shadow: 0 2px 32px rgba(15,42,107,0.08), 0 1px 0 rgba(255,255,255,0.8) inset;
        }

        .nav-link {
          position: relative;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.01em;
          color: var(--gray-700);
          padding: 0.45rem 0.75rem;
          border-radius: 10px;
          transition: all 0.2s ease;
        }

        .nav-link:hover {
          color: var(--blue-main);
          background: rgba(26,63,160,0.06);
        }

        .nav-link.active {
          color: var(--blue-main);
          font-weight: 600;
          background: rgba(26,63,160,0.08);
        }

        .nav-link-scrolled {
          color: var(--gray-600);
        }

        .nav-link-top {
          color: rgba(255,255,255,0.9);
        }

        .nav-link-top:hover {
          color: var(--gold-bright);
          background: rgba(255,255,255,0.08);
        }

        .nav-link-top.active {
          color: var(--gold-bright);
          background: rgba(255,255,255,0.12);
        }

        .mega-panel {
          background: white;
          border: 1px solid rgba(26,63,160,0.1);
          border-radius: 20px;
          box-shadow:
            0 20px 60px rgba(15,42,107,0.15),
            0 4px 16px rgba(15,42,107,0.08),
            0 0 0 1px rgba(255,255,255,0.8) inset;
        }

        .mega-cat-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--blue-main);
          border-bottom: 2px solid var(--gold-main);
          padding-bottom: 10px;
          margin-bottom: 10px;
        }

        .mega-cat-header svg {
          color: var(--gold-main);
        }

        .mega-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 7px 10px;
          border-radius: 10px;
          font-size: 0.84rem;
          font-weight: 500;
          color: var(--gray-600);
          transition: all 0.18s ease;
          text-decoration: none;
          position: relative;
        }

        .mega-link:hover {
          color: var(--blue-main);
          background: rgba(26,63,160,0.05);
          padding-left: 14px;
        }

        .mega-link:hover svg {
          color: var(--gold-main);
        }

        .mega-link svg {
          color: rgba(26,63,160,0.3);
          transition: color 0.18s;
          flex-shrink: 0;
        }

        .popular-badge {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          background: linear-gradient(135deg, var(--gold-main), var(--gold-bright));
          color: white;
          padding: 2px 7px;
          border-radius: 20px;
          margin-left: auto;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          font-size: 0.84rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          background: linear-gradient(135deg, var(--blue-main) 0%, var(--blue-mid) 100%);
          color: white;
          border: 1.5px solid transparent;
          position: relative;
          overflow: hidden;
          transition: all 0.25s ease;
          box-shadow: 0 4px 16px rgba(26,63,160,0.3), 0 1px 0 rgba(255,255,255,0.15) inset;
        }

        .cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--gold-main), var(--gold-bright));
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .cta-btn:hover::before { opacity: 1; }
        .cta-btn:hover {
          box-shadow: 0 6px 24px rgba(232,160,32,0.4);
          transform: translateY(-1px);
        }

        .cta-btn span { position: relative; z-index: 1; }
        .cta-btn svg { position: relative; z-index: 1; }

        .footer-strip {
          background: linear-gradient(135deg, #f8f9ff 0%, #fff8ed 100%);
          border-top: 1px solid rgba(26,63,160,0.07);
        }

        .mobile-nav-wrap {
          background: white;
          border: 1px solid rgba(26,63,160,0.1);
          border-radius: 20px;
          box-shadow: 0 16px 48px rgba(15,42,107,0.15);
        }

        .mobile-link {
          display: block;
          padding: 11px 20px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--gray-600);
          border-bottom: 1px solid rgba(26,63,160,0.06);
          transition: all 0.15s;
        }

        .mobile-link:hover, .mobile-link.active {
          color: var(--blue-main);
          background: rgba(26,63,160,0.04);
        }

        .count-badge {
          margin-left: auto;
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--blue-main);
          background: rgba(26,63,160,0.08);
          padding: 1px 7px;
          border-radius: 20px;
        }

        .logo-ring {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--blue-main), var(--gold-main));
          opacity: 0;
          transition: opacity 0.3s;
          z-index: -1;
        }

        .logo-wrap:hover .logo-ring { opacity: 1; }

      `}</style>

      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'header-gradient py-2' : 'nav-transparent py-3'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-[60px]">

            {/* ── Logo ── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className=" relative"
            >
              <Link href="/" className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="logo-ring" />
                  <Image
                    src="./log.png"
                    alt="Company Logo"
                    width={86}
                    height={46}
                    className="rounded-xl w-full h-40 object-contain"
                  />
                </div>
              </Link>
            </motion.div>

            {/* ── Desktop Nav ── */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link, index) => {
                const active = isActive(link.href, link.exact)
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 + index * 0.05 }}
                    className="relative"
                    onMouseEnter={() => link.hasDropdown && handleDropdownEnter(link.dropdownType!)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      href={link.href}
                      className={`nav-link !font-medium ${scrolled ? 'nav-link-scrolled' : 'font-medium'} ${active ? 'active' : ''} flex items-center gap-1`}
                    >
                      {link.label}
                      {link.hasDropdown && (
                        <ChevronDown
                          className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === link.dropdownType ? 'rotate-180' : ''}`}
                        />
                      )}
                    </Link>

                    {/* ── Megamenus ── */}
                    <AnimatePresence>
                      {activeDropdown === link.dropdownType && link.hasDropdown && (
                        <>
                          {/* SERVICES */}
                          {link.dropdownType === 'services' && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.98 }}
                              transition={{ duration: 0.18 }}
                              className="absolute left-1/2 -translate-x-1/2 pt-5 w-[900px] z-50"
                              onClick={e => e.stopPropagation()}
                            >
                              <div className="mega-panel overflow-hidden">
                                {/* Header strip */}
                                <div className="px-6 py-3 border border-b flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                 
                                    <div>
                                      <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#f0b832' }}>What We Do</p>
                                      <p className="text-blue-800 font-semibold text-base leading-tight" >Our Services</p>
                                    </div>
                                  </div>
                                  <Link href="/services" className="flex items-center gap-1.5 text-sm font-medium group" style={{ color: '#f0b832' }}>
                                    View all <MoveRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                                  </Link>
                                </div>

                                <div className="p-5 grid grid-cols-4 gap-5 mb-6">
                                  {serviceCategories.map((cat, idx) => (
                                    <div key={idx}>
                                      <div className="mega-cat-header !text-sm">
                                        {/* {cat.icon} */}
                                        {cat.category}
                                      </div>
                                      <div className="space-y-0.5">
                                        {cat.links.map(l => (
                                          <Link key={l.href} href={l.href} className="mega-link">
                                            <ExternalLinkIcon className='h-6 w-6'/>
                                            <span>{l.label}</span>
                                            {/* {l.popular && <span className="popular-badge">Hot</span>} */}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>

                                
                              </div>
                            </motion.div>
                          )}

                          {/* PORTFOLIO */}
                          {link.dropdownType === 'portfolio' && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.98 }}
                              transition={{ duration: 0.18 }}
                              className="absolute left-1/2 -translate-x-1/2 pt-5 w-[760px] z-50"
                              onClick={e => e.stopPropagation()}
                            >
                              <div className="mega-panel overflow-hidden">
                                <div className="px-6 py-3 flex items-center justify-between border border-b">
                                  <div className="flex items-center gap-3">
                                    
                                    <div>
                                      <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#f0b832' }}>Our Work</p>
                                      <p className="text-blue-800 font-semibold text-base leading-tight" >Portfolio</p>
                                    </div>
                                  </div>
                                  <Link href="/portfolio" className="flex items-center gap-1.5 text-sm font-medium group" style={{ color: '#f0b832' }}>
                                    Browse all <MoveRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                                  </Link>
                                </div>

                                <div className="p-5 grid grid-cols-3 gap-5">
                                  {portfolioCategories.slice(0, 2).map((cat, idx) => (
                                    <div key={idx}>
                                      <div className="mega-cat-header !text-sm">
                                        {cat.category}
                                      </div>
                                      <div className="space-y-0.5">
                                        {cat.links.map((l: any) => (
                                          <Link key={l.href} href={l.href} className="mega-link">
                                            <span>{l.label}</span>
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ))}

                                  {/* Featured column */}
                                  <div>
                                    <div className="mega-cat-header">
                                      <Award className="h-3.5 w-3.5" />
                                      Featured
                                    </div>
                                    <div className="rounded-xl p-3 space-y-1" style={{ background: 'linear-gradient(135deg, rgba(26,63,160,0.04), rgba(232,160,32,0.06))' }}>
                                      {portfolioCategories[2].links.map((l: any) => (
                                        <Link key={l.href} href={l.href} className="mega-link">
                                          {l.icon}
                                          <span>{l.label}</span>
                                        </Link>
                                      ))}
                                      <div className="mt-3 pt-3 flex items-center gap-2" style={{ borderTop: '1px solid rgba(26,63,160,0.1)' }}>
                                        <Award className="h-4 w-4" style={{ color: '#e8a020' }} />
                                        <span className="text-xs font-medium" style={{ color: '#4a5578' }}>50+ Happy Clients Worldwide</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}

                          {/* TECHNOLOGIES */}
                          {link.dropdownType === 'technologies' && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.98 }}
                              transition={{ duration: 0.18 }}
                              className="absolute left-1/2 -translate-x-1/2 pt-5 w-[760px] z-50"
                              onClick={e => e.stopPropagation()}
                            >
                              <div className="mega-panel overflow-hidden">
                                <div className="px-6 py-3 flex items-center justify-between border-b">
                                  <div className="flex items-center gap-3">
                                    
                                    <div>
                                      <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#f0b832' }}>Stack</p>
                                      <p className="text-blue-800 font-semibold text-base leading-tight">Technologies</p>
                                    </div>
                                  </div>
                                  <Link href="/technologies" className="flex items-center gap-1.5 text-sm font-medium group" style={{ color: '#f0b832' }}>
                                    View all <MoveRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                                  </Link>
                                </div>

                                <div className="p-5 grid grid-cols-4 gap-5">
                                  {techCategories.map((cat, idx) => (
                                    <div key={idx}>
                                      <div className="mega-cat-header !text-sm">
                                        {cat.category}
                                      </div>
                                      <div className="space-y-0.5">
                                        {cat.links.map((l: any) => (
                                          <Link key={l.href} href={l.href} className="mega-link">
                                            <span className="flex-1 truncate">{l.label}</span>
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
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

            {/* ── CTA + Mobile Toggle ── */}
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="hidden md:block"
              >
                <Link href="/contact" className="cta-btn">
                  <Phone className="h-3.5 w-3.5" />
                  <span>Connect Us</span>
                </Link>
              </motion.div>

              {/* Mobile toggle */}
              <button
                className="lg:hidden p-2 rounded-xl transition-colors"
                style={{ color: scrolled ? '#1a3fa0' : 'white', background: scrolled ? 'rgba(26,63,160,0.08)' : 'rgba(255,255,255,0.12)' }}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
              >
                <motion.div animate={isOpen ? { rotate: 180 } : { rotate: 0 }} transition={{ duration: 0.25 }}>
                  {isOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.div>
              </button>
            </div>
          </div>

          {/* ── Mobile Menu ── */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.28 }}
                className="lg:hidden overflow-hidden max-h-[85vh] mobile-nav-wrap mt-3"
              >
                <div className="py-2">
                  {navLinks.map((link) => {
                    const active = isActive(link.href, link.exact)
                    if (link.hasDropdown) {
                      return (
                        <div key={link.href}>
                          <button
                            onClick={() => setMobileDropdown(mobileDropdown === link.dropdownType ? null : link.dropdownType!)}
                            className="w-full mobile-link flex items-center justify-between"
                            style={active ? { color: '#1a3fa0' } : {}}
                          >
                            <span>{link.label}
                            <ChevronDown className={`h-4 w-4 transition-transform ${mobileDropdown === link.dropdownType ? 'rotate-180' : ''}`} /></span>
                          </button>

                          <AnimatePresence>
                            {mobileDropdown === link.dropdownType && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="px-4 py-2 space-y-4"
                                style={{ background: '#f8f9fc' }}
                              >
                                {link.dropdownType === 'services' && serviceCategories.map((cat) => (
                                  <div key={cat.category}>
                                    <p className="text-[10px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: '#1a3fa0' }}>{cat.category}</p>
                                    {cat.links.map((sl: any) => (
                                      <Link key={sl.href} href={sl.href} className="flex items-center gap-2 py-2 pl-3 text-sm" style={{ color: '#4a5578' }} onClick={() => setIsOpen(false)}>
                                        <span style={{ color: '#e8a020' }}>{sl.icon}</span>
                                        {sl.label}
                                        {sl.popular && <span className="popular-badge ml-auto">Hot</span>}
                                      </Link>
                                    ))}
                                  </div>
                                ))}

                                {link.dropdownType === 'portfolio' && portfolioCategories.map((cat) => (
                                  <div key={cat.category}>
                                    <p className="text-[10px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: '#1a3fa0' }}>{cat.category}</p>
                                    {cat.links.map((sl: any) => (
                                      <Link key={sl.href} href={sl.href} className="flex items-center gap-2 py-2 pl-3 text-sm" style={{ color: '#4a5578' }} onClick={() => setIsOpen(false)}>
                                        {sl.label}
                                        {sl.count && <span className="count-badge">{sl.count}</span>}
                                      </Link>
                                    ))}
                                  </div>
                                ))}

                                {link.dropdownType === 'technologies' && techCategories.map((cat) => (
                                  <div key={cat.category}>
                                    <p className="text-[10px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: '#1a3fa0' }}>{cat.category}</p>
                                    {cat.links.map((sl: any) => (
                                      <Link key={sl.href} href={sl.href} className="flex items-center gap-2 py-2 pl-3 text-sm" style={{ color: '#4a5578' }} onClick={() => setIsOpen(false)}>
                                        <span style={{ color: '#e8a020' }}>{sl.icon}</span>
                                        {sl.label}
                                        <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ml-auto ${levelColors[sl.level]}`}>{sl.level}</span>
                                      </Link>
                                    ))}
                                  </div>
                                ))}
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
                        className={`mobile-link ${active ? 'active' : ''}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )
                  })}

                  {/* Mobile CTA */}
                  <div className="p-4">
                    <Link
                      href="/contact"
                      className="cta-btn w-full justify-center"
                      onClick={() => setIsOpen(false)}
                    >
                      <Phone className="h-4 w-4" />
                      <span>Get Started</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  )
}