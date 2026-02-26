'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, ChevronDown, Sparkles, MoveRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const { scrollY } = useScroll()

  // Scroll effect with refined threshold
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 5)
  })

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setServicesDropdown(false)
  }, [pathname])

  // Service sublinks with icons
  const serviceSubLinks = [
    {
      href: '/services/web-design',
      label: 'Web Design',
      icon: <Sparkles className="h-4 w-4" />,
      description: 'Modern responsive websites'
    },
    {
      href: '/services/digital-marketing',
      label: 'Digital Marketing',
      icon: <Sparkles className="h-4 w-4" />,
      description: 'Data-driven growth strategies'
    },
    {
      href: '/services/seo',
      label: 'SEO Optimization',
      icon: <Sparkles className="h-4 w-4" />,
      description: 'Rank higher on search engines'
    },
    {
      href: '/services/ppc',
      label: 'PPC Advertising',
      icon: <Sparkles className="h-4 w-4" />,
      description: 'Targeted ad campaigns'
    },
    {
      href: '/services/social-media',
      label: 'Social Media',
      icon: <Sparkles className="h-4 w-4" />,
      description: 'Engaging content strategies'
    },
    {
      href: '/services/content-creation',
      label: 'Content Creation',
      icon: <Sparkles className="h-4 w-4" />,
      description: 'Compelling brand storytelling'
    }
  ]

  // Navigation links with active state logic
  const navLinks = [
    { href: '/', label: 'Home', exact: true },
    { href: '/about', label: 'About', exact: true },
    { href: '/services', label: 'Services', exact: false },
    { href: '/portfolio', label: 'Portfolio', exact: true },
    { href: '/blog', label: 'Blog', exact: true },
    { href: '/contact', label: 'Contact', exact: true },
  ]

  // Active link detection
  const isActive = (href: string, exact: boolean) => {
    if (exact) return pathname === href
    return pathname === href || pathname.startsWith(href + '/')
  }

  // Mobile service submenu state
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
          ? 'bg-white/10 backdrop-blur-sm py-2 shadow-lg'
          : 'py-4 '
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with enhanced animation */}
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => {
              const active = isActive(link.href, link.exact)

              if (link.label === 'Services') {
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setTimeout(() => setServicesDropdown(false), 200)}
                  >
                    <motion.button
                      className={`text-base font-medium transition-all duration-300 relative group ${active
                          ? 'text-gray-900 font-bold p-[7px] rounded-2xl backdrop-blur-xl'
                          : 'text-gray-800 hover:text-foreground'
                        }`}
                    >
                      {link.label}
                      <ChevronDown className={`absolute right-[-14px] top-[6px] h-3 w-3 transition-transform duration-300 ${servicesDropdown ? 'rotate-180' : ''
                        }`} />

                    </motion.button>

                    <AnimatePresence>
                      {servicesDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.90 }}
                          transition={{
                            duration: 0.1,
                            ease: "easeOut"
                          }}
                          className="absolute -left-[100%] mt-3 w-120 bg-white shadow-xl backdrop-blur-2xl rounded-3xl overflow-hidden z-50"
                          style={{
                            backdropFilter: 'blur(12px)'
                          }}
                        >
                          <div className="p-1">
                            <div className="px-4 py-3 text-base font-medium text-gray-700 border-b border-border/50">
                              Our Services
                            </div>

                            <div className="grid grid-cols-2 gap-1">
                              {serviceSubLinks.map((subLink, idx) => (
                                <motion.div
                                  key={subLink.href}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  whileHover={{ x: 5 }}
                                >
                                  <Link
                                    href={subLink.href}
                                    className="flex items-start p-3 hover:bg-accent/10 transition-colors group rounded-xl"
                                    onClick={() => setServicesDropdown(false)}
                                  >
                                    <div className="mr-3 p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                                      <MoveRight className='h-5 w-5' />
                                    </div>
                                    <div>
                                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                                        {subLink.label}
                                      </div>
                                      <div className="text-xs text-foreground/60 mt-0.5">
                                        {subLink.description}
                                      </div>
                                    </div>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>

                            <div className="p-3">
                              <Link
                                href="/services"
                                className="flex items-center text-sm font-medium text-gray-600 hover:underline"
                              >
                                View all services
                                <ChevronDown className="ml-1 h-3 w-3 rotate-[-90deg]" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              }

              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Link
                    href={link.href}
                    className={`text-base font-medium transition-all duration-300 relative group ${active
                        ? 'text-gray-900 font-bold  p-[7px] rounded-2xl backdrop-blur-xl'
                        : 'text-gray-800 hover:text-foreground'
                      }`}
                  >
                    {link.label}

                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* CTA Button with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:block group px-4 py-2.5 rounded-3xl border-2 text-gray-900 font-semibold text-base hover:bg-gray-900 hover:text-white transition-all duration-300 relative overflow-hidden"
          >
            <Link
              href={"/"}
              className=""
            >
              <span className="relative z-10">Connect us</span>
              <div className="absolute inset-0 bg-gray-900 rounded-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
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
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-border/50"
            >
              <div className="py-4 flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const active = isActive(link.href, link.exact)

                  if (link.label === 'Services') {
                    return (
                      <div key={link.href}>
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className={`w-full text-left px-4 py-3 text-sm font-medium flex justify-between items-center ${active
                              ? 'text-primary font-bold'
                              : 'text-foreground/70'
                            }`}
                        >
                          <span>{link.label}</span>
                          <motion.span
                            animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="h-4 w-4" />
                          </motion.span>
                        </button>

                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-6 bg-background/50"
                            >
                              {serviceSubLinks.map((subLink) => (
                                <Link
                                  key={subLink.href}
                                  href={subLink.href}
                                  className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-foreground border-l-2 border-transparent hover:border-primary transition-colors"
                                  onClick={() => {
                                    setIsOpen(false)
                                    setMobileServicesOpen(false)
                                  }}
                                >
                                  <div className="font-medium">{subLink.label}</div>
                                  <div className="text-xs text-foreground/50 mt-0.5">
                                    {subLink.description}
                                  </div>
                                </Link>
                              ))}
                              <Link
                                href="/services"
                                className="block px-4 py-3 text-sm text-primary font-medium border-l-2 border-transparent hover:border-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                View all services →
                              </Link>
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
                      className={`px-4 py-3 text-sm ${active
                          ? 'text-primary font-bold bg-accent/5 border-l-4 border-primary'
                          : 'text-foreground/70 hover:text-foreground'
                        }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )
                })}

                <div className="px-4 pt-2">
                  <Link
                    href="/contact"
                    className="block w-full px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium text-center text-sm"
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