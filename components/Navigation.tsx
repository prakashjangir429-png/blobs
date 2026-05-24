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
  ExternalLinkIcon,
  ChevronRight
} from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const { scrollY } = useScroll()
  const navRef = useRef<HTMLDivElement>(null)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 5)
  })

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
    setMobileDropdown(null)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
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
        }

        /* ── NAV GLASS ── */
        .nav-glass {
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(26,63,160,0.1);
          box-shadow: 0 2px 24px rgba(15,42,107,0.08);
        }

        /* ── NAV LINKS ── */
        .nav-link {
          position: relative;
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
          padding: 0.4rem 0.7rem;
          border-radius: 8px;
          transition: all 0.18s ease;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .nav-link:hover { color: var(--blue-main); background: rgba(26,63,160,0.06); }
        .nav-link.active { color: var(--blue-main); font-weight: 600; background: rgba(26,63,160,0.08); }

        /* ── FULL-WIDTH MEGA PANEL ── */
        .mega-fullwidth {
          position: fixed;
          left: 0;
          right: 0;
          top: 72px; /* adjust to your nav height */
          background: white;
          border-top: 2px solid var(--gold-main);
          border-bottom: 1px solid rgba(26,63,160,0.1);
          box-shadow: 0 16px 48px rgba(15,42,107,0.12);
          z-index: 40;
        }

        .mega-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 28px 32px 32px;
        }

        .mega-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(26,63,160,0.08);
        }

        .mega-section-label {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold-main);
        }

        .mega-section-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--blue-deep);
          margin-top: 2px;
        }

        .mega-view-all {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.84rem;
          font-weight: 600;
          color: var(--gold-dark);
          transition: gap 0.15s;
        }
        .mega-view-all:hover { gap: 10px; color: var(--gold-main); }

        .mega-cat-header {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--blue-main);
          display: flex;
          align-items: center;
          gap: 6px;
          padding-bottom: 10px;
          margin-bottom: 8px;
          border-bottom: 2px solid var(--gold-main);
        }

        .mega-link {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 8px 10px;
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.15s ease;
          cursor: pointer;
        }
        .mega-link:hover {
          background: rgba(26,63,160,0.05);
        }
        .mega-link:hover .mega-link-icon {
          color: var(--gold-main);
          background: rgba(232,160,32,0.12);
        }
        .mega-link:hover .mega-link-label { color: var(--blue-main); }

        .mega-link-icon {
          width: 30px;
          height: 30px;
          border-radius: 7px;
          background: rgba(26,63,160,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blue-main);
          flex-shrink: 0;
          transition: all 0.15s;
        }

        .mega-link-label {
          font-size: 0.84rem;
          font-weight: 500;
          color: #374151;
          transition: color 0.15s;
          line-height: 1.2;
        }

        .mega-link-desc {
          font-size: 0.72rem;
          color: #9ca3af;
          margin-top: 1px;
        }

        .popular-badge {
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          background: linear-gradient(135deg, var(--gold-main), var(--gold-bright));
          color: white;
          padding: 2px 6px;
          border-radius: 20px;
          margin-left: 6px;
          vertical-align: middle;
        }

        /* ── CTA BUTTON ── */
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 0.5rem 1.2rem;
          border-radius: 50px;
          font-size: 0.84rem;
          font-weight: 600;
          background: linear-gradient(135deg, var(--blue-main) 0%, var(--blue-mid) 100%);
          color: white;
          transition: all 0.22s ease;
          box-shadow: 0 4px 14px rgba(26,63,160,0.28);
          position: relative;
          overflow: hidden;
        }
        .cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--gold-main), var(--gold-bright));
          opacity: 0;
          transition: opacity 0.22s;
        }
        .cta-btn:hover::before { opacity: 1; }
        .cta-btn:hover { box-shadow: 0 6px 20px rgba(232,160,32,0.38); transform: translateY(-1px); }
        .cta-btn span, .cta-btn svg { position: relative; z-index: 1; }

        /* ══════════════════════════════════════════
           MOBILE STYLES
        ══════════════════════════════════════════ */

        .mobile-menu-wrap {
          background: white;
          border-radius: 18px;
          border: 1px solid rgba(26,63,160,0.1);
          box-shadow: 0 20px 60px rgba(15,42,107,0.15);
          // overflow: hidden;
          margin-top: 10px;
        }

        /* Simple nav link row */
        .mob-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 18px;
          font-size: 0.9rem;
          font-weight: 500;
          color: #374151;
          border-bottom: 1px solid rgba(26,63,160,0.05);
          transition: background 0.15s, color 0.15s;
          text-decoration: none;
        }
        .mob-link:hover, .mob-link.active {
          color: var(--blue-main);
          background: rgba(26,63,160,0.04);
        }
        .mob-link:last-child { border-bottom: none; }

        /* Accordion trigger */
        .mob-acc-trigger {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 13px 18px;
          font-size: 0.9rem;
          font-weight: 500;
          color: #374151;
          border-bottom: 1px solid rgba(26,63,160,0.05);
          background: transparent;
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
          text-align: left;
        }
        .mob-acc-trigger.open {
          color: var(--blue-main);
          background: rgba(26,63,160,0.04);
          border-bottom-color: transparent;
        }

        .mob-acc-body {
          background: #f8f9fc;
          overflow: hidden;
        }

        /* Category section inside accordion */
        .mob-cat-section {
          padding: 14px 18px 10px;
          border-bottom: 1px solid rgba(26,63,160,0.06);
        }
        .mob-cat-section:last-child { border-bottom: none; }

        .mob-cat-label {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: var(--blue-main);
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .mob-cat-label svg { color: var(--gold-main); }

        /* Individual sub-link */
        .mob-sub-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 10px;
          border-radius: 10px;
          font-size: 0.84rem;
          font-weight: 500;
          color: #4b5563;
          text-decoration: none;
          transition: all 0.15s;
          margin-bottom: 2px;
        }
        .mob-sub-link:hover {
          background: rgba(26,63,160,0.07);
          color: var(--blue-main);
        }
        .mob-sub-link:hover .mob-sub-icon { color: var(--gold-main); background: rgba(232,160,32,0.1); }

        .mob-sub-icon {
          width: 28px;
          height: 28px;
          border-radius: 7px;
          background: rgba(26,63,160,0.07);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blue-main);
          flex-shrink: 0;
          transition: all 0.15s;
        }

        .mob-sub-desc {
          font-size: 0.7rem;
          color: #9ca3af;
          font-weight: 400;
          display: block;
          line-height: 1.2;
        }

        .mob-count-badge {
          margin-left: auto;
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--blue-main);
          background: rgba(26,63,160,0.08);
          padding: 1px 7px;
          border-radius: 20px;
          flex-shrink: 0;
        }

        .mob-level-badge {
          margin-left: auto;
          font-size: 0.6rem;
          font-weight: 600;
          padding: 2px 6px;
          border-radius: 20px;
          flex-shrink: 0;
        }
        .mob-level-expert { background: rgba(26,63,160,0.1); color: var(--blue-main); }
        .mob-level-advanced { background: rgba(232,160,32,0.1); color: var(--gold-dark); }
        .mob-level-intermediate { background: #f1f5f9; color: #64748b; }

        /* Mobile CTA strip */
        .mob-cta-strip {
          padding: 14px 16px;
          background: linear-gradient(135deg, rgba(26,63,160,0.04), rgba(232,160,32,0.06));
          border-top: 1px solid rgba(26,63,160,0.08);
        }
      `}</style>

      <motion.nav
        ref={navRef}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'nav-glass py-2' : 'bg-transparent py-3'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-[60px]">

            {/* ── Logo ── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link href="/" className="flex items-center gap-2.5">
                <Image
                  src="./log.png"
                  alt="Company Logo"
                  width={86}
                  height={46}
                  className="rounded-xl object-contain"
                />
              </Link>
            </motion.div>

            {/* ── Desktop Nav Links ── */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link, index) => {
                const active = isActive(link.href, link.exact)
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 + index * 0.04 }}
                    className="relative"
                    onMouseEnter={() => link.hasDropdown && handleDropdownEnter(link.dropdownType!)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      href={link.href}
                      className={`nav-link ${active ? 'active' : ''}`}
                    >
                      {link.label}
                      {link.hasDropdown && (
                        <ChevronDown
                          className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === link.dropdownType ? 'rotate-180' : ''}`}
                        />
                      )}
                    </Link>
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

              <button
                className="lg:hidden p-2 rounded-xl transition-colors"
                style={{
                  color: scrolled ? '#1a3fa0' : 'white',
                  background: scrolled ? 'rgba(26,63,160,0.08)' : 'rgba(255,255,255,0.12)'
                }}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <motion.div animate={isOpen ? { rotate: 180 } : { rotate: 0 }} transition={{ duration: 0.25 }}>
                  {isOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            DESKTOP — FULL-WIDTH MEGA MENUS
            (rendered outside inner container so they span full viewport)
        ══════════════════════════════════════════ */}
        <AnimatePresence>
          {activeDropdown === 'services' && (
            <motion.div
              key="services-mega"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.20 }}
              className="mega-fullwidt bg-white rounded-b-4xl hidden lg:block"
              onMouseEnter={() => handleDropdownEnter('services')}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="mega-inner">
                {/* Top bar */}
                <div className="mega-top-bar">
                  <div>
                    <p className="mega-section-label">What We Do</p>
                    <p className="mega-section-title">Our Services</p>
                  </div>
                  <Link href="/services" className="mega-view-all">
                    View all services <MoveRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                {/* 4-column grid */}
                <div className="grid grid-cols-4 gap-8">
                  {serviceCategories.map((cat, idx) => (
                    <div key={idx}>
                      <div className="mega-cat-header">
                        {cat.icon}
                        {cat.category}
                      </div>
                      <div className="space-y-0.5">
                        {cat.links.map((l) => (
                          <Link key={l.href} href={l.href} className="mega-link">
                            <div className="mega-link-icon">{l.icon}</div>
                            <div>
                              <p className="mega-link-label">
                                {l.label}
                                {l.popular && <span className="popular-badge">Hot</span>}
                              </p>
                              <p className="mega-link-desc">{l.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeDropdown === 'portfolio' && (
            <motion.div
              key="portfolio-mega"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="mega-fullwidth hidden lg:block"
              onMouseEnter={() => handleDropdownEnter('portfolio')}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="mega-inner">
                <div className="mega-top-bar">
                  <div>
                    <p className="mega-section-label">Our Work</p>
                    <p className="mega-section-title">Portfolio</p>
                  </div>
                  <Link href="/portfolio" className="mega-view-all">
                    Browse all work <MoveRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-8">
                  {/* By Industry */}
                  <div>
                    <div className="mega-cat-header">
                      <Briefcase className="h-4 w-4" />
                      By Industry
                    </div>
                    {portfolioCategories[0].links.map((l: any) => (
                      <Link key={l.href} href={l.href} className="mega-link">
                        <div className="mega-link-icon"><ExternalLinkIcon className="h-3.5 w-3.5" /></div>
                        <div className="flex items-center justify-between w-full">
                          <p className="mega-link-label">{l.label}</p>
                          {l.count && (
                            <span className="text-xs font-semibold text-[#1a3fa0] bg-[#1a3fa0]/08 px-2 py-0.5 rounded-full" style={{ background: 'rgba(26,63,160,0.08)' }}>
                              {l.count}
                            </span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* By Service */}
                  <div>
                    <div className="mega-cat-header">
                      <Rocket className="h-4 w-4" />
                      By Service
                    </div>
                    {portfolioCategories[1].links.map((l: any) => (
                      <Link key={l.href} href={l.href} className="mega-link">
                        <div className="mega-link-icon"><ExternalLinkIcon className="h-3.5 w-3.5" /></div>
                        <div className="flex items-center justify-between w-full">
                          <p className="mega-link-label">{l.label}</p>
                          {l.count && (
                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: 'rgba(26,63,160,0.08)', color: '#1a3fa0' }}>
                              {l.count}
                            </span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Featured */}
                  <div>
                    <div className="mega-cat-header">
                      <Award className="h-4 w-4" />
                      Featured
                    </div>
                    <div className="rounded-xl p-4 space-y-1" style={{ background: 'linear-gradient(135deg, rgba(26,63,160,0.04), rgba(232,160,32,0.07))' }}>
                      {portfolioCategories[2].links.map((l: any) => (
                        <Link key={l.href} href={l.href} className="mega-link">
                          <div className="mega-link-icon">{l.icon}</div>
                          <p className="mega-link-label">{l.label}</p>
                        </Link>
                      ))}
                      <div className="mt-4 pt-3 flex items-center gap-2" style={{ borderTop: '1px solid rgba(26,63,160,0.1)' }}>
                        <Award className="h-4 w-4" style={{ color: '#e8a020' }} />
                        <span className="text-xs font-medium text-slate-500">50+ Happy Clients Worldwide</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeDropdown === 'technologies' && (
            <motion.div
              key="tech-mega"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="mega-fullwidth hidden lg:block"
              onMouseEnter={() => handleDropdownEnter('technologies')}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="mega-inner">
                <div className="mega-top-bar">
                  <div>
                    <p className="mega-section-label">Tech Stack</p>
                    <p className="mega-section-title">Technologies</p>
                  </div>
                  <Link href="/technologies" className="mega-view-all">
                    View all technologies <MoveRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-4 gap-8">
                  {techCategories.map((cat, idx) => (
                    <div key={idx}>
                      <div className="mega-cat-header">
                        {cat.icon}
                        {cat.category}
                      </div>
                      <div className="space-y-0.5">
                        {cat.links.map((l: any) => (
                          <Link key={l.href} href={l.href} className="mega-link">
                            <div className="mega-link-icon">{l.icon}</div>
                            <div className="flex items-center justify-between w-full min-w-0">
                              <p className="mega-link-label truncate">{l.label}</p>
                              <span
                                className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full ml-2 flex-shrink-0"
                                style={
                                  l.level === 'Expert'
                                    ? { background: 'rgba(26,63,160,0.1)', color: '#1a3fa0' }
                                    : l.level === 'Advanced'
                                    ? { background: 'rgba(232,160,32,0.1)', color: '#b07010' }
                                    : { background: '#f1f5f9', color: '#64748b' }
                                }
                              >
                                {l.level}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ══════════════════════════════════════════
            MOBILE MENU
        ══════════════════════════════════════════ */}
        <div className="lg:hidden px-4">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
                className="mobile-menu-wrap overflow-y-auto !max-h-[80vh]"
                // style={{ maxHeight: 'calc(100vh - 90px)' }}
              >
                {navLinks.map((link) => {
                  const active = isActive(link.href, link.exact)
                  const isAccOpen = mobileDropdown === link.dropdownType

                  if (!link.hasDropdown) {
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`mob-link ${active ? 'active' : ''}`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span>{link.label}</span>
                        <ChevronRight className="h-4 w-4 opacity-30" />
                      </Link>
                    )
                  }

                  return (
                    <div key={link.href}>
                      <button
                        className={`mob-acc-trigger ${isAccOpen ? 'open' : ''}`}
                        onClick={() => setMobileDropdown(isAccOpen ? null : link.dropdownType!)}
                      >
                        <span style={{ fontWeight: active || isAccOpen ? 600 : 500, color: active || isAccOpen ? '#1a3fa0' : undefined }}>
                          {link.label}
                        </span>
                        <motion.div animate={{ rotate: isAccOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronDown className="h-4 w-4" style={{ color: isAccOpen ? '#1a3fa0' : '#9ca3af' }} />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isAccOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: 'easeInOut' }}
                            className="mob-acc-body"
                          >
                            {/* SERVICES accordion body */}
                            {link.dropdownType === 'services' && serviceCategories.map((cat) => (
                              <div key={cat.category} className="mob-cat-section">
                                <div className="mob-cat-label">
                                  {cat.icon}
                                  {cat.category}
                                </div>
                                {cat.links.map((sl) => (
                                  <Link
                                    key={sl.href}
                                    href={sl.href}
                                    className="mob-sub-link"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <div className="mob-sub-icon">{sl.icon}</div>
                                    <div className="flex-1 min-w-0">
                                      <span className="block font-medium">{sl.label}</span>
                                      <span className="mob-sub-desc">{sl.description}</span>
                                    </div>
                                    {sl.popular && <span className="popular-badge">Hot</span>}
                                  </Link>
                                ))}
                              </div>
                            ))}

                            {/* PORTFOLIO accordion body */}
                            {link.dropdownType === 'portfolio' && portfolioCategories.map((cat) => (
                              <div key={cat.category} className="mob-cat-section">
                                <div className="mob-cat-label">
                                  {cat.icon}
                                  {cat.category}
                                </div>
                                {cat.links.map((sl: any) => (
                                  <Link
                                    key={sl.href}
                                    href={sl.href}
                                    className="mob-sub-link"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <div className="mob-sub-icon">
                                      {sl.icon ?? <ExternalLinkIcon className="h-3.5 w-3.5" />}
                                    </div>
                                    <span className="flex-1 font-medium">{sl.label}</span>
                                    {sl.count && <span className="mob-count-badge">{sl.count}</span>}
                                  </Link>
                                ))}
                              </div>
                            ))}

                            {/* TECHNOLOGIES accordion body */}
                            {link.dropdownType === 'technologies' && techCategories.map((cat) => (
                              <div key={cat.category} className="mob-cat-section">
                                <div className="mob-cat-label">
                                  {cat.icon}
                                  {cat.category}
                                </div>
                                {cat.links.map((sl: any) => (
                                  <Link
                                    key={sl.href}
                                    href={sl.href}
                                    className="mob-sub-link"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <div className="mob-sub-icon">{sl.icon}</div>
                                    <span className="flex-1 font-medium truncate">{sl.label}</span>
                                    <span
                                      className={`mob-level-badge mob-level-${sl.level.toLowerCase()}`}
                                    >
                                      {sl.level}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}

                {/* Mobile CTA */}
                <div className="mob-cta-strip">
                  <Link
                    href="/contact"
                    className="cta-btn w-full justify-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="h-4 w-4" />
                    <span>Get Started</span>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  )
}