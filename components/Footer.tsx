'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import {
  Phone, Mail, MapPin, ArrowUp, Facebook, Twitter,
  Instagram, Linkedin, Youtube, Github, Send,
  Calendar, Clock, Award, ChevronRight,
  Shield, Globe, Heart, ExternalLink
} from 'lucide-react'
import { useState, useEffect } from 'react'

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerServices = [
    { href: '/services/web-design', label: 'Web Design' },
    { href: '/services/ecommerce', label: 'E-Commerce' },
    { href: '/services/mobile', label: 'Mobile Apps' },
    { href: '/services/seo', label: 'SEO Services' },
    { href: '/services/branding', label: 'Branding' },
    { href: '/services/content-creation', label: 'Content Creation' }
  ]

  const footerCompany = [
    { href: '/about', label: 'About Us' },
    { href: '/portfolio', label: 'Our Work' },
    { href: '/blog', label: 'Blog' },
    { href: '/careers', label: 'Careers' },
    { href: '/press', label: 'Press & Media' },
    { href: '/contact', label: 'Contact' }
  ]

  const footerSupport = [
    { href: '/help', label: 'Help Center' },
    { href: '/faq', label: 'FAQ' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/cookies', label: 'Cookie Policy' },
    { href: '/sitemap', label: 'Sitemap' }
  ]

  const socialLinks = [
    { icon: <Facebook className="h-4 w-4" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="h-4 w-4" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="h-4 w-4" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="h-4 w-4" />, href: '#', label: 'LinkedIn' },
    { icon: <Youtube className="h-4 w-4" />, href: '#', label: 'YouTube' },
    { icon: <Github className="h-4 w-4" />, href: '#', label: 'GitHub' }
  ]

  const awards = [
    { name: 'Clutch Top Developer 2024', icon: <Award className="h-4 w-4" /> },
    { name: 'Google Partner', icon: <Globe className="h-4 w-4" /> },
    { name: 'ISO 27001 Certified', icon: <Shield className="h-4 w-4" /> }
  ]

  return (
    <>
      <footer className="bg-gradient-to-b font-semibold from-white to-slate-50/80 border-t border-[#1a3fa0]/10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
            
            {/* Company Info Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-2">
                <Image
                  src="./log.png"
                  alt="Company Logo"
                  width={160}
                  height={64}
                  className="rounded-xl object-contain"
                />
              </Link>
              
              <p className="text-slate-600 text-base leading-relaxed mb-6 max-w-sm">
                We craft exceptional digital experiences that help businesses grow. 
                Award-winning design and development agency trusted by 100+ clients worldwide.
              </p>

              {/* Awards */}
              {/* <div className="flex flex-wrap gap-3 mb-6">
                {awards.map((award, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 px-3 py-1.5 bg-[#1a3fa0]/5 rounded-full border border-[#1a3fa0]/10"
                  >
                    <span className="text-[#e8a020]">{award.icon}</span>
                    <span className="text-xs font-semibold text-[#1a3fa0]">{award.name}</span>
                  </div>
                ))}
              </div> */}

              {/* Social Links */}
              <div className="flex gap-2">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ y: -3 }}
                    className="w-9 h-9 rounded-lg bg-white border border-[#1a3fa0]/10 flex items-center justify-center text-[#1a3fa0] hover:bg-gradient-to-br hover:from-[#1a3fa0] hover:to-[#2952cc] hover:text-white hover:border-transparent hover:shadow-lg transition-all duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#1a3fa0] mb-4">
                Services
              </h3>
              <ul className="space-y-2 font-semibold">
                {footerServices.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-sm text-slate-700 hover:text-[#b07010] transition-all duration-200"
                    >
                      <ChevronRight className="h-3 w-3 text-[#e8a020] -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#1a3fa0] mb-4">
                Company
              </h3>
              <ul className="space-y-2 font-semibold">
                {footerCompany.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-sm text-slate-700 hover:text-[#b07010] transition-all duration-200"
                    >
                      <ChevronRight className="h-3 w-3 text-[#e8a020] -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#1a3fa0] mb-4">
                Support
              </h3>
              <ul className="space-y-2 font-semibold">
                {footerSupport.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-sm text-slate-600 hover:text-[#b07010] transition-all duration-200"
                    >
                      <ChevronRight className="h-3 w-3 text-[#e8a020] -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="md:col-span-2 lg:col-span-1">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#1a3fa0] mb-3">
                Contact
              </h3>
              <div className="space-y-1">
                <div className="group flex items-start gap-3 px-2 -ml-2 rounded-lg hover:bg-[#1a3fa0]/5 transition-all duration-200 cursor-pointer">
                 
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">Call Us</p>
                    <a href="tel:+919887120429" className="text-sm font-semibold text-slate-700 group-hover:text-[#1a3fa0] transition-colors">
                      +91 9887120429
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-3 px-2 -ml-2 rounded-lg hover:bg-[#1a3fa0]/5 transition-all duration-200 cursor-pointer">
                  
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">Email Us</p>
                    <a href="mailto:hello@digitonix.in" className="text-sm font-semibold text-slate-700 group-hover:text-[#1a3fa0] transition-colors">
                      hello@digitonix.in
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-3 px-2 -ml-2 rounded-lg hover:bg-[#1a3fa0]/5 transition-all duration-200 cursor-pointer">
                  
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">Visit Us</p>
                    <p className="text-sm font-semibold text-slate-700 group-hover:text-[#1a3fa0] transition-colors">
                      123 Tech Street, Silicon Valley, CA 94025
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-3 px-2 -ml-2 rounded-lg hover:bg-[#1a3fa0]/5 transition-all duration-200 cursor-pointer">
                
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">Hours</p>
                    <p className="text-sm font-semibold text-slate-700 group-hover:text-[#1a3fa0] transition-colors">
                      Mon-Fri: 9AM - 6PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1a3fa0]/10 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span>© 2024 Digitonix. All rights reserved.</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full hidden sm:block"></span>
                <div className="flex items-center gap-1">
                  <span>Made with</span>
                  <Heart className="h-3 w-3 text-red-500 fill-red-500 animate-pulse" />
                  <span>by Your Team</span>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <Link href="/privacy" className="text-xs text-slate-500 hover:text-[#1a3fa0] transition-colors flex items-center gap-1">
                  <Shield className="h-3 w-3" />
                  Privacy
                </Link>
                <Link href="/terms" className="text-xs text-slate-500 hover:text-[#1a3fa0] transition-colors flex items-center gap-1">
                  <ExternalLink className="h-3 w-3" />
                  Terms
                </Link>
                <Link href="/sitemap" className="text-xs text-slate-500 hover:text-[#1a3fa0] transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-11 h-11 bg-gradient-to-br from-[#1a3fa0] to-[#2952cc] text-white rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#1a3fa0]/30 hover:scale-110 transition-all duration-200 flex items-center justify-center group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}