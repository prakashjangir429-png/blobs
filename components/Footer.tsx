'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import Image from 'next/image'
import { AlignRightIcon, ArrowRightIcon, MoveLeftIcon, MoveRightIcon } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const officeAddresses = [
    {
      country: 'India',
      address: '108, First Floor, Geetanjali tower, Near Civil lines Metro Station, Jaipur (Raj) India',
      phone: '+91 9057801818',
      email: 'info@truevalueinfosoft.com'
    },
    {
      country: 'Germany',
      address: 'Munich, Germany',
      postal: 'Postal code: 81476',
      phone: '+49 152 36303896'
    },
    {
      country: 'Germany',
      address: 'Munich, Germany',
      postal: 'Postal code: 81476',
      phone: '+49 152 36303896'
    }
  ]

  const companyLinks = [
    { label: 'Company', href: '/company' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Refund Policy', href: '/refund-policy' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Cost Calculator', href: '/cost-calculator', highlight: true },
    { label: 'Join as a TVI Partner', href: '/partner', highlight: true }
  ]

  const services = [
    'Mobile App Development',
    'Web Development',
    'Ecommerce solution',
    'Software Development',
    'Blockchain development',
    'Digital marketing',
    'Bulk SMS',
    'Toll Free/IVR',
    'Online Promotion'
  ]

  const onDemandServices = [
    'Grocery App development',
    'E-learning App Development',
    'Event Management App Development',
    'Dating App Development',
    'Agriculture App Development',
    'Sports App Development',
    'Loyalty Points App Development',
    'CDR Analysis Desktop Software',
    'Car Wash App Development',
    'Yoga App Development',
    'Face Recognition App Development'
  ]

  const guides = [
    'eCommerce app development',
    'Mobile App Development Process',
    'Best IT Services for Your Startup',
    'Develop Chatbot App Like Gok',
    'Android App Development Company',
    'Build an AI App',
    'Build a Food Delivery App',
    'Build an App like Khan Academy',
    'SRM Software',
    'Power Apps Guide',
    'Build an App like Amazon',
    'Virtual Try-On App Development'
  ]

  const socialLinks = [
    { icon: FaFacebook, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaLinkedin, href: '#' },
    { icon: FaInstagram, href: '#' }
  ]

  return (
    <footer className="bg-gradient-to-b from-orange-800 to-gray-950 font-medium text-white">
      {/* Main Footer */}
      <div className="max-w-7xl relative z-1 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Company Logo/Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <Image alt='logo' src="./log.png" width={50} height={50} className='w-30 scale-140' />
        </motion.div>

        {/* Office Addresses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {officeAddresses.map((office, index) => (
            <motion.div
              key={office.country}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-blue-500/50 transition-all"
            >
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">{office.country}</h3>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-start gap-2">
                  <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-blue-400" />
                  <span>{office.address}</span>
                </p>
                {office.postal && (
                  <p className="flex">
                    <span className="" />📮 {office.postal}
                  </p>
                )}
                <p className="flex items-center gap-2">
                  <FaPhone className="text-blue-400" />
                  <a href={`tel:${office.phone}`} className="hover:text-blue-400 transition-colors">
                    {office.phone}
                  </a>
                </p>
                {office.email && (
                  <p className="flex items-center gap-2">
                    <FaEnvelope className="text-blue-400" />
                    <a href={`mailto:${office.email}`} className="hover:text-blue-400 transition-colors">
                      {office.email}
                    </a>
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 py-10 border-t border-b border-white/10">
          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4 text-blue-400">About</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`text-gray-300 hover:text-blue-400 hover:ml-2 transition-all duration-300 ${link.highlight ? 'font-medium text-blue-400 hover:text-blue-600' : ''
                      }`}
                  >
                   <ArrowRightIcon className="w-4 h-4 mr-2 inline" />
                   {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-blue-400 hover:ml-2 transition-all duration-300 font-medium text-blue-400 hover:text-blue-600"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 inline" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* On Demand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-400">On Demand</h4>
            <ul className="space-y-2">
              {onDemandServices.map((service) => (
                <li key={service}>
                  <Link
                    href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-blue-400 hover:ml-2 transition-all duration-300 font-medium text-blue-400 hover:text-blue-600"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 inline" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Guides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Guides</h4>
            <ul className="space-y-2">
              {guides.map((guide) => (
                <li key={guide}>
                  <Link
                    href={`/guides/${guide.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-blue-400 hover:ml-2 transition-all duration-300 font-medium text-blue-400 hover:text-blue-600"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 inline" />
                    {guide}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm text-gray-400">
          <div className="flex gap-4 mb-4 md:mb-0">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center">
            <p>&copy; {currentYear} True Value Infosoft. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-blue-400 transition-colors">
                Terms
              </Link>
              <Link href="/sitemap" className="hover:text-blue-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}