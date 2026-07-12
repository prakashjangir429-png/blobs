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
  ChevronRight,
  ArrowBigLeft,
  MoveRightIcon,
  ArrowRight,
  Dot
} from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'


const serviceTabs = [
  {
    name: "Web Development",
    href: "/services/web-development",
    subTabs: [
      { name: "Website Design", href: "/services/website-design" },
      { name: "Custom Web Development", href: "/services/custom-web-development" },
      { name: "E-Commerce Development", href: "/services/ecommerce-development" },
      { name: "CMS Development", href: "/services/cms-development" },
      { name: "Progressive Web Apps", href: "/services/pwa-development" },
      { name: "Landing Page Development", href: "/services/landing-pages" },
    ],
  },

  {
    name: "Mobile App Development",
    href: "/services/mobile-app-development",
    subTabs: [
      { name: "Android App Development", href: "/services/android-development" },
      { name: "iOS App Development", href: "/services/ios-development" },
      { name: "React Native Development", href: "/services/react-native-development" },
      { name: "Flutter Development", href: "/services/flutter-development" },
      { name: "Hybrid App Development", href: "/services/hybrid-app-development" },
      { name: "App Maintenance", href: "/services/app-maintenance" },
    ],
  },

  {
    name: "Software Development",
    href: "/services/software-development",
    subTabs: [
      { name: "Custom Software Development", href: "/services/custom-software" },
      { name: "ERP Solutions", href: "/services/erp-solutions" },
      { name: "CRM Development", href: "/services/crm-development" },
      { name: "SaaS Development", href: "/services/saas-development" },
      { name: "Enterprise Applications", href: "/services/enterprise-applications" },
    ],
  },

  {
    name: "UI/UX Design",
    href: "/services/ui-ux-design",
    subTabs: [
      { name: "UI Design", href: "/services/ui-design" },
      { name: "UX Research", href: "/services/ux-research" },
      { name: "Wireframing", href: "/services/wireframing" },
      { name: "Prototyping", href: "/services/prototyping" },
      { name: "Product Design", href: "/services/product-design" },
    ],
  },

  {
    name: "Digital Marketing",
    href: "/services/digital-marketing",
    subTabs: [
      { name: "SEO Services", href: "/services/seo" },
      { name: "Local SEO", href: "/services/local-seo" },
      { name: "Google Ads", href: "/services/google-ads" },
      { name: "Social Media Marketing", href: "/services/social-media-marketing" },
      { name: "Email Marketing", href: "/services/email-marketing" },
      { name: "Content Marketing", href: "/services/content-marketing" },
    ],
  },

  {
    name: "Cloud & DevOps",
    href: "/services/cloud-devops",
    subTabs: [
      { name: "AWS Services", href: "/services/aws" },
      { name: "Azure Services", href: "/services/azure" },
      { name: "Google Cloud", href: "/services/google-cloud" },
      { name: "DevOps Consulting", href: "/services/devops-consulting" },
      { name: "CI/CD Setup", href: "/services/ci-cd" },
      { name: "Server Management", href: "/services/server-management" },
    ],
  },

  {
    name: "Data & AI Solutions",
    href: "/services/ai-solutions",
    subTabs: [
      { name: "Artificial Intelligence", href: "/services/artificial-intelligence" },
      { name: "Machine Learning", href: "/services/machine-learning" },
      { name: "Chatbot Development", href: "/services/chatbot-development" },
      { name: "Data Analytics", href: "/services/data-analytics" },
      { name: "Business Intelligence", href: "/services/business-intelligence" },
    ],
  },

  {
    name: "Cyber Security",
    href: "/services/cyber-security",
    subTabs: [
      { name: "Security Audits", href: "/services/security-audits" },
      { name: "Penetration Testing", href: "/services/penetration-testing" },
      { name: "Network Security", href: "/services/network-security" },
      { name: "Application Security", href: "/services/application-security" },
      { name: "Cloud Security", href: "/services/cloud-security" },
    ],
  },

  {
    name: "Maintenance & Support",
    href: "/services/support-maintenance",
    subTabs: [
      { name: "Website Maintenance", href: "/services/website-maintenance" },
      { name: "Application Support", href: "/services/application-support" },
      { name: "Performance Optimization", href: "/services/performance-optimization" },
      { name: "Bug Fixing", href: "/services/bug-fixing" },
      { name: "Technical Support", href: "/services/technical-support" },
    ],
  },
];

const technologyTabs = [
  {
    name: "Frontend",
    subTabs: [
      { name: "React.js", href: "/technologies/reactjs" },
      { name: "Next.js", href: "/technologies/nextjs" },
      { name: "Vue.js", href: "/technologies/vuejs" },
      { name: "Angular", href: "/technologies/angular" },
      { name: "TypeScript", href: "/technologies/typescript" },
    ],
  },
  {
    name: "Backend",
    subTabs: [
      { name: "Node.js", href: "/technologies/nodejs" },
      { name: "Express.js", href: "/technologies/expressjs" },
      { name: "Python", href: "/technologies/python" },
      { name: "Django", href: "/technologies/django" },
      { name: "Laravel", href: "/technologies/laravel" },
    ],
  },
  {
    name: "Mobile",
    subTabs: [
      { name: "React Native", href: "/technologies/react-native" },
      { name: "Flutter", href: "/technologies/flutter" },
      { name: "Android", href: "/technologies/android" },
      { name: "iOS", href: "/technologies/ios" },
    ],
  },
  {
    name: "Database",
    subTabs: [
      { name: "MongoDB", href: "/technologies/mongodb" },
      { name: "PostgreSQL", href: "/technologies/postgresql" },
      { name: "MySQL", href: "/technologies/mysql" },
      { name: "Redis", href: "/technologies/redis" },
      { name: "Firebase", href: "/technologies/firebase" },
    ],
  },
  {
    name: "Cloud & DevOps",
    subTabs: [
      { name: "AWS", href: "/technologies/aws" },
      { name: "Azure", href: "/technologies/azure" },
      { name: "Google Cloud", href: "/technologies/gcp" },
      { name: "Docker", href: "/technologies/docker" },
      { name: "Kubernetes", href: "/technologies/kubernetes" },
    ],
  },
];

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const { scrollY } = useScroll()
  const navRef = useRef<HTMLDivElement>(null)
  const [activeService, setActiveService] = useState(serviceTabs[0]);
  const [activeTechnology, setActiveTechnology] = useState(technologyTabs[0]);

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


  const navLinks = [
    { href: '/', label: 'Home', exact: true, hasDropdown: false },
    { href: '/about', label: 'About', exact: true, hasDropdown: false },
    { href: '/services', label: 'Services', exact: false, hasDropdown: true, dropdownType: 'services' },
    { href: '/technologies', label: 'Technologies', exact: true, hasDropdown: true, dropdownType: 'technologies' },
    { href: '/hireus', label: 'Hire Us', exact: true, hasDropdown: false },
    { href: '/portfolio', label: 'Portfolio', exact: true, hasDropdown: false, dropdownType: 'portfolio' },
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
          font-size: 0.9rem;
          font-weight: 600;
          color: #282d36;
          padding: 0.4rem 0.7rem;
          border-radius: 8px;
          transition: all 0.18s ease;
          display: flex;
          align-items: center;
          gap: 3px;
        }
        .nav-link:hover { color: var(--blue-main); background: rgba(26,63,160,0.06); }
        .nav-link.active { color: var(--blue-main); font-weight: 600; }

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
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'nav-glass py-2' : 'bg-transparent py-3'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-3">
          <div className="flex justify-between items-center h-[60px]">

            {/* ── Logo ── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link href="/" className="flex items-center gap-2.5">
                <Image
                  src="/log.png"
                  alt="Company Logo"
                  width={140}
                  height={46}
                  className=" object-contain"
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
                  color: scrolled ? '#1a3fa0' : 'black',
                  background: scrolled ? 'rgba(26,63,160,0.08)' : 'rgba(82, 77, 77, 0.12)'
                }}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <motion.div animate={isOpen ? { rotate: 180 } : { rotate: 0 }} transition={{ duration: 0.25 }}>
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {activeDropdown === 'services' && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="fixed top-[65px] left-1/2 -translate-x-1/2 z-50 hidden lg:block"
              onMouseEnter={() => handleDropdownEnter('services')}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="bg-white border shadow-2xl overflow-hidden max-w-[90vw] min-w-[650px]">
                <div className="flex">

                  {/* Main Menu */}
                  <div className="w-74 border-r bg-slate-50 py-2">
                    {serviceTabs.map((service) => (
                      <Link
                        key={service.name}
                        onMouseEnter={() => setActiveService(service)}
                        href={service.href}
                        className={`w-full flex items-center justify-between px-4 py-3 text-left transition-all
                ${activeService.name === service.name
                            ? "bg-blue-50 text-[#1a3fa0]"
                            : "hover:bg-slate-100"
                          }`}
                      >
                        <div className='flex gap-2 items-center '>
                          {/* <ArrowRight size={16} /> */}
                          <span className="font-semibold text-sm">
                            {service.name}
                          </span>

                        </div>

                        <ChevronRight size={16} />
                      </Link>
                    ))}
                  </div>

                  {/* Sub Menu */}
                  <div className="w-80 bg-white py-2">
                    {activeService.subTabs.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="flex items-center justify-between px-4 py-3 hover:bg-slate-100 transition-colors"
                      >
                        <div className='flex items-center gap-2 justify-start'>
                          <ArrowRight size={16} />

                          <span className="font-medium flex text-sm">{sub.name}</span>

                        </div>

                        <MoveRight
                          size={14}
                          className="opacity-0 group-hover:opacity-100"
                        />
                      </Link>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          )}
          {activeDropdown === 'technologies' && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="fixed top-[65px] left-1/2 -translate-x-1/2 z-50 hidden lg:block"
              onMouseEnter={() => handleDropdownEnter('technologies')}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="bg-white rounded-xl border shadow-2xl overflow-hidden min-w-[550px]">
                <div className="flex">

                  {/* Main Menu */}
                  <div className="w-64 border-r bg-slate-50 py-2">
                    {technologyTabs.map((tech) => (
                      <button
                        key={tech.name}
                        onMouseEnter={() => setActiveTechnology(tech)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-left transition-all
                ${activeTechnology.name === tech.name
                            ? "bg-blue-50 text-[#1a3fa0]"
                            : "hover:bg-slate-100"
                          }`}
                      >
                        <div className="flex gap-2 items-center">
                          <ArrowRight size={16} />
                          <span className="font-semibold text-sm">
                            {tech.name}
                          </span>
                        </div>

                        <ChevronRight size={16} />
                      </button>
                    ))}
                  </div>

                  {/* Sub Menu */}
                  <div className="w-80 bg-white py-2">
                    {activeTechnology.subTabs.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="group flex items-center justify-between px-4 py-3 hover:bg-slate-100 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <ArrowRight size={16} />
                          <span className="font-medium text-sm">
                            {sub.name}
                          </span>
                        </div>

                        <MoveRight
                          size={14}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </Link>
                    ))}
                  </div>

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
                className="mobile-menu-wrap  overflow-y-auto !max-h-[80vh]"
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
                        <span style={{ fontWeight: active || isAccOpen ? 700 : 600, color: active || isAccOpen ? '#1a3fa0' : undefined }}>
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
                            {link.dropdownType === 'services' && (
                              <div className="py-2">
                                {serviceTabs.map((service) => (
                                  <div key={service.name} className="mob-cat-section">
                                    <div className="text-sm mb-2">
                                      {service.name}
                                    </div>

                                    {service.subTabs.map((sub) => (
                                      <Link
                                        key={sub.href}
                                        href={sub.href}
                                        className="mob-sub-link"
                                        onClick={() => setIsOpen(false)}
                                      >
                                        <div className="">
                                          <ArrowRight className="h-3.5 w-3.5" />
                                        </div>

                                        <span className="flex-1 font-semibold">
                                          {sub.name}
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            )}
                            {link.dropdownType === 'technologies' && (
                              <div className="py-2">
                                {technologyTabs.map((tech) => (
                                  <div key={tech.name} className="mob-cat-section">
                                    <div className="text-sm mb-2">
                                      {tech.name}
                                    </div>

                                    {tech.subTabs.map((sub) => (
                                      <Link
                                        key={sub.href}
                                        href={sub.href}
                                        className="mob-sub-link"
                                        onClick={() => setIsOpen(false)}
                                      >
                                        <div className="">
                                          <ArrowRight className="h-3.5 w-3.5" />
                                        </div>

                                        <span className="flex-1 font-semibold">
                                          {sub.name}
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