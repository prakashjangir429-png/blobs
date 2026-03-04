'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle, 
  Globe, Linkedin, Twitter, Facebook, Instagram, 
  ArrowRight, Navigation, User, MessageSquare, 
  Building2, Calendar, ChevronRight, Loader2
} from 'lucide-react'
import { CTA } from '@/components/sections/CTA'

// --- Office Locations Data ---
const offices = [
  {
    id: 'india',
    city: 'New Delhi',
    country: 'India',
    address: 'A-24, Sector 63, Noida, Uttar Pradesh 201301',
    phone: '+91 120 456 7890',
    email: 'india@truevalueinfosoft.com',
    hours: 'Mon - Fri: 9:30 AM - 6:30 PM IST',
    coords: { lat: 28.6139, lng: 77.2090 },
    image: 'https://images.unsplash.com/photo-1572979252228-4b887e81e7df?auto=format&fit=crop&w=800&q=80',
    features: ['Headquarters', 'Development Center', '24/7 Support']
  },
  {
    id: 'usa',
    city: 'New York',
    country: 'USA',
    address: '350 Fifth Avenue, Suite 4820, New York, NY 10118',
    phone: '+1 (212) 555 0199',
    email: 'usa@truevalueinfosoft.com',
    hours: 'Mon - Fri: 9:00 AM - 6:00 PM EST',
    coords: { lat: 40.7128, lng: -74.0060 },
    image: 'https://images.unsplash.com/photo-1496442226666-8d4a0e62e6e9?auto=format&fit=crop&w=800&q=80',
    features: ['Sales Office', 'Client Meetings', 'Strategy Hub']
  },
  {
    id: 'uk',
    city: 'London',
    country: 'United Kingdom',
    address: '1 Canada Square, Canary Wharf, London E14 5AB',
    phone: '+44 20 7946 0123',
    email: 'uk@truevalueinfosoft.com',
    hours: 'Mon - Fri: 9:00 AM - 5:30 PM GMT',
    coords: { lat: 51.5074, lng: -0.1278 },
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    features: ['European HQ', 'Consulting', 'Partnerships']
  },
  {
    id: 'canada',
    city: 'Toronto',
    country: 'Canada',
    address: '100 King Street West, Suite 5600, Toronto, ON M5X 1C9',
    phone: '+1 (416) 555 0145',
    email: 'canada@truevalueinfosoft.com',
    hours: 'Mon - Fri: 9:00 AM - 6:00 PM EST',
    coords: { lat: 43.6532, lng: -79.3832 },
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800&q=80',
    features: ['North America Support', 'Talent Hub']
  }
]

export default function ContactPage() {
  const [activeOffice, setActiveOffice] = useState(offices[0])
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Web Development',
    budget: '$5k - $10k',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setFormState('success')
    setFormData({ name: '', email: '', company: '', service: 'Web Development', budget: '$5k - $10k', message: '' })
    
    setTimeout(() => setFormState('idle'), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm mb-6">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
              Let's Build Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Extraordinary</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Main Content Grid --- */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Column: Contact Form & Info */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10"
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h2>
                  <p className="text-slate-600">Fill out the form below and our team will get back to you within 24 hours.</p>
                </div>

                {formState === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-green-700">Thank you for reaching out. We'll be in touch shortly.</p>
                    <button onClick={() => setFormState('idle')} className="mt-6 text-green-700 font-semibold hover:underline">Send another message</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Full Name *</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Email Address *</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Company Name</label>
                        <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Service Interested In</label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all appearance-none cursor-pointer"
                          >
                            <option>Web Development</option>
                            <option>Mobile App Development</option>
                            <option>Digital Marketing</option>
                            <option>UI/UX Design</option>
                            <option>AI & Machine Learning</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Project Budget</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all cursor-pointer"
                      >
                        <option>$5k - $10k</option>
                        <option>$10k - $25k</option>
                        <option>$25k - $50k</option>
                        <option>$50k+</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Project Details *</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none"
                        placeholder="Tell us about your project goals, timeline, and requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {formState === 'submitting' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Direct Contact Info Cards */}
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { icon: Phone, title: 'Call Us', value: '+1 (555) 123-4567', sub: 'Mon-Fri 9am-6pm', color: 'text-blue-600', bg: 'bg-blue-50' },
                  { icon: Mail, title: 'Email Us', value: 'hello@truevalue.com', sub: '24/7 Support', color: 'text-orange-600', bg: 'bg-orange-50' },
                  { icon: Clock, title: 'Visit Us', value: 'Global Offices', sub: '4 Locations', color: 'text-green-600', bg: 'bg-green-50' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`${item.bg} p-6 rounded-2xl border border-white/50`}
                  >
                    <item.icon className={`w-8 h-8 ${item.color} mb-4`} />
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-900 font-medium mt-1">{item.value}</p>
                    <p className="text-slate-500 text-sm mt-1">{item.sub}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Office Locations & Map */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Office Selector */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden"
              >
                <div className="p-6 border-b border-slate-100">
                  <h2 className="text-xl font-bold text-slate-900">Our Global Offices</h2>
                  <p className="text-slate-600 text-sm">Select a location to view details</p>
                </div>
                
                <div className="max-h-[400px] overflow-y-auto">
                  {offices.map((office) => (
                    <button
                      key={office.id}
                      onClick={() => setActiveOffice(office)}
                      className={`w-full text-left p-4 flex items-start gap-4 transition-all duration-300 border-b border-slate-50 last:border-0 hover:bg-slate-50 ${
                        activeOffice.id === office.id ? 'bg-orange-50/50 border-l-4 border-l-orange-500' : 'border-l-4 border-l-transparent'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        activeOffice.id === office.id ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-500'
                      }`}>
                        <Building2 size={20} />
                      </div>
                      <div>
                        <h3 className={`font-bold ${activeOffice.id === office.id ? 'text-orange-700' : 'text-slate-900'}`}>
                          {office.city}, {office.country}
                        </h3>
                        <p className="text-sm text-slate-500 mt-1 line-clamp-1">{office.address}</p>
                        {activeOffice.id === office.id && (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-2 flex flex-wrap gap-2">
                            {office.features.map((f, i) => (
                              <span key={i} className="text-xs px-2 py-1 bg-white border border-orange-100 text-orange-600 rounded-md font-medium">{f}</span>
                            ))}
                          </motion.div>
                        )}
                      </div>
                      {activeOffice.id === office.id && (
                        <ChevronRight className="w-5 h-5 text-orange-500 ml-auto shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Map Visualization */}
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                key={activeOffice.id}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl group"
              >
                {/* Static Map Image Placeholder (In production, use Google Maps Component) */}
                <Image
                  src={activeOffice.image}
                  alt={`Map of ${activeOffice.city}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Map Pin Animation */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-orange-500/30 rounded-full animate-ping" />
                    <div className="w-12 h-12 bg-orange-500 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-white relative z-10">
                      <MapPin size={24} />
                    </div>
                  </div>
                </div>

                {/* Location Details Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe size={16} className="text-orange-400" />
                    <span className="text-sm font-medium text-orange-300 uppercase tracking-wider">{activeOffice.country}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{activeOffice.city} Office</h3>
                  <p className="text-slate-300 text-sm mb-4 flex items-start gap-2">
                    <MapPin size={16} className="mt-0.5 shrink-0" /> {activeOffice.address}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-orange-400" />
                      <span>{activeOffice.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-orange-400" />
                      <span className="line-clamp-1">{activeOffice.hours}</span>
                    </div>
                  </div>
                  <a href={`mailto:${activeOffice.email}`} className="mt-4 inline-flex items-center gap-2 text-white font-semibold hover:text-orange-400 transition-colors">
                    {activeOffice.email} <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>

              {/* Social Links */}
              <div className="bg-slate-900 rounded-3xl p-8 text-center">
                <h3 className="text-white font-bold mb-6">Connect With Us</h3>
                <div className="flex justify-center gap-4">
                  {[
                    { icon: Linkedin, color: 'hover:bg-blue-600' },
                    { icon: Twitter, color: 'hover:bg-sky-500' },
                    { icon: Facebook, color: 'hover:bg-blue-700' },
                    { icon: Instagram, color: 'hover:bg-pink-600' }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href="#"
                      className={`w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 ${social.color} hover:text-white hover:scale-110`}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ Section (Optional but helpful) --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Quick answers to common questions about working with us.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "What is your typical response time?", a: "We aim to respond to all inquiries within 24 hours during business days." },
              { q: "Do you offer free consultations?", a: "Yes! We offer a free 30-minute discovery call to discuss your project needs." },
              { q: "Can I visit your office?", a: "Absolutely. We welcome clients to visit any of our global offices. Just let us know in advance." }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
              >
                <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Start Your Project?"
        description="Don't wait any longer. Let's turn your vision into reality today."
        ctaText="Schedule a Call"
        ctaLink="/contact"
      />
    </div>
  )
}