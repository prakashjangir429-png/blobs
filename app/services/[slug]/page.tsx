'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  ArrowLeft, CheckCircle, Clock, Users, Zap,
  ShieldCheck, TrendingUp, MessageSquare, Calendar,
  ChevronRight, Download, ExternalLink, Star,
  Code2, Smartphone, Megaphone, PenTool,
  Layers, Cpu, BarChart3, Globe
} from 'lucide-react'
import { CTA } from '@/components/sections/CTA'
import { Stats } from '@/components/sections/Stats'

// --- Import Data (In a real app, import from your data file) ---
// For this example, I'm including a simplified version of the data structure 
// so the page works immediately. In production, import this from '@/data/services'

const serviceCategories = [
  {
    id: 'web',
    title: "Web Development",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    services: [
      {
        slug: 'custom-web-development',
        title: 'Custom Web Development',
        shortDesc: 'Tailor-made websites built from scratch for maximum performance.',
        fullDesc: 'We build robust, scalable, and secure web applications using modern technologies like React, Next.js, and Node.js. Our custom solutions are designed to fit your specific business logic, ensuring you aren\'t limited by template constraints. From complex enterprise portals to high-performance landing pages, we engineer digital experiences that drive results.',
        icon: Code2,
        features: ['Progressive Web Apps (PWA)', 'Server-Side Rendering (SSR)', 'RESTful & GraphQL APIs', 'Cloud-Native Architecture', 'Accessibility (WCAG) Compliant'],
        techStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'TypeScript'],
        process: [
          { step: 'Discovery', desc: 'Requirement gathering and technical feasibility analysis.' },
          { step: 'Architecture', desc: 'System design, database schema, and API planning.' },
          { step: 'Development', desc: 'Agile sprints with bi-weekly demos and code reviews.' },
          { step: 'QA & Testing', desc: 'Automated testing, security audits, and performance tuning.' },
          { step: 'Deployment', desc: 'CI/CD pipeline setup and cloud deployment.' }
        ],
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
        benefits: ['40% Faster Load Times', '100% Code Ownership', 'Scalable to Millions of Users'],
        faqs: [
          { q: 'How long does a custom project take?', a: 'Typically 8-16 weeks depending on complexity.' },
          { q: 'Do you provide post-launch support?', a: 'Yes, we offer dedicated maintenance packages.' }
        ]
      },
      {
        slug: 'ecommerce-solutions',
        title: 'E-Commerce Development',
        shortDesc: 'High-converting online stores with seamless checkout experiences.',
        fullDesc: 'From Shopify customization to headless commerce architectures, we build online stores that drive sales. We focus on user experience, speed, and security to ensure your customers have a frictionless shopping journey. Our solutions integrate seamlessly with ERPs, CRMs, and payment gateways.',
        icon: Smartphone, // Reusing icon for demo
        features: ['Payment Gateway Integration', 'Inventory Management', 'Multi-currency Support', 'SEO Optimized Structure', 'Abandoned Cart Recovery'],
        techStack: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'React'],
        process: [
          { step: 'Store Design', desc: 'UX-focused design tailored to your brand.' },
          { step: 'Product Setup', desc: 'Bulk import and categorization.' },
          { step: 'Payment Config', desc: 'Secure gateway integration.' },
          { step: 'Testing', desc: 'Transaction testing across devices.' },
          { step: 'Go Live', desc: 'Launch and marketing handover.' }
        ],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=1200&q=80',
        benefits: ['Increased Conversion Rates', 'Secure Transactions', 'Easy Management Dashboard'],
        faqs: [
          { q: 'Which platform is best for me?', a: 'We analyze your needs to recommend Shopify, WooCommerce, or Custom.' },
          { q: 'Can you migrate my existing store?', a: 'Yes, we handle zero-downtime migrations.' }
        ]
      },
      {
        slug: 'cms-development',
        title: 'CMS Development',
        shortDesc: 'Easy-to-manage content systems for dynamic websites.',
        fullDesc: 'Empower your team to update content effortlessly. We specialize in WordPress, Strapi, and Contentful, creating custom themes and plugins that give you full control without touching a line of code.',
        icon: Layers,
        features: ['Custom Theme Development', 'Plugin Integration', 'Role-Based Access', 'Multi-language Support'],
        techStack: ['WordPress', 'Strapi', 'Contentful', 'PHP', 'GraphQL'],
        process: [{ step: 'Audit', desc: '...' }, { step: 'Design', desc: '...' }, { step: 'Dev', desc: '...' }, { step: 'Training', desc: '...' }, { step: 'Support', desc: '...' }],
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
        benefits: ['User-Friendly Admin Panel', 'SEO Friendly', 'Secure & Updated'],
        faqs: []
      }
    ]
  },
  {
    id: 'app',
    title: "App Development",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    services: [
      {
        slug: 'ios-app-development',
        title: 'iOS App Development',
        shortDesc: 'Premium native applications for the Apple ecosystem.',
        fullDesc: 'We create stunning, high-performance iOS apps using Swift and SwiftUI. Our apps adhere to strict Apple guidelines, ensuring smooth performance on iPhone and iPad while leveraging the latest iOS features.',
        icon: Smartphone,
        features: ['SwiftUI & UIKit', 'CoreData Integration', 'Push Notifications', 'App Store Optimization'],
        techStack: ['Swift', 'Xcode', 'Firebase', 'CoreML', 'ARKit'],
        process: [{ step: 'Concept', desc: '' }, { step: 'Design', desc: '' }, { step: 'Dev', desc: '' }, { step: 'TestFlight', desc: '' }, { step: 'Launch', desc: '' }],
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
        benefits: ['Native Performance', 'App Store Featured Potential', 'High Security'],
        faqs: []
      },
      {
        slug: 'android-app-development',
        title: 'Android App Development',
        shortDesc: 'Robust apps reaching billions of Android users globally.',
        fullDesc: 'Reach the widest audience with our native Android solutions. Built with Kotlin and Jetpack Compose, our apps are optimized for thousands of device configurations and Android versions.',
        icon: Smartphone,
        features: ['Kotlin & Java', 'Material Design', 'Google Play Services', 'Offline First Architecture'],
        techStack: ['Kotlin', 'Android Studio', 'Firebase', 'Room DB', 'Retrofit'],
        process: [{ step: 'Req', desc: '' }, { step: 'UI/UX', desc: '' }, { step: 'Coding', desc: '' }, { step: 'QA', desc: '' }, { step: 'Deploy', desc: '' }],
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80',
        benefits: ['Global Reach', 'Customizable UI', 'Google Play Integration'],
        faqs: []
      },
      {
        slug: 'cross-platform-apps',
        title: 'Cross-Platform Development',
        shortDesc: 'One codebase, multiple platforms. Cost-effective and fast.',
        fullDesc: 'Get your product to market faster with Flutter or React Native. We build single-codebase applications that run natively on both iOS and Android, saving you time and budget without compromising quality.',
        icon: Smartphone,
        features: ['Single Codebase', 'Near-Native Performance', 'Hot Reloading', 'Unified UI'],
        techStack: ['Flutter', 'React Native', 'Dart', 'TypeScript', 'GraphQL'],
        process: [{ step: 'Proto', desc: '' }, { step: 'Dev', desc: '' }, { step: 'Test', desc: '' }, { step: 'Deploy', desc: '' }, { step: 'Maintain', desc: '' }],
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
        benefits: ['40% Cost Savings', 'Faster Time to Market', 'Consistent Experience'],
        faqs: []
      }
    ]
  },
  {
    id: 'marketing',
    title: "Digital Marketing",
    icon: Megaphone,
    color: "from-orange-500 to-red-500",
    services: [
      {
        slug: 'seo-optimization',
        title: 'SEO Optimization',
        shortDesc: 'Rank higher on Google and drive organic traffic.',
        fullDesc: 'Our SEO experts use white-hat techniques to improve your visibility. From technical audits to content strategy and link building, we help you dominate search results and attract qualified leads.',
        icon: BarChart3,
        features: ['Technical SEO Audit', 'Keyword Research', 'On-Page Optimization', 'Link Building'],
        techStack: ['Ahrefs', 'SEMrush', 'Google Analytics', 'Screaming Frog', 'Search Console'],
        process: [{ step: 'Audit', desc: '' }, { step: 'Strategy', desc: '' }, { step: 'Impl', desc: '' }, { step: 'Monitor', desc: '' }, { step: 'Report', desc: '' }],
        image: 'https://images.unsplash.com/photo-1571721795195-a2ca2d337069?auto=format&fit=crop&w=1200&q=80',
        benefits: ['Organic Growth', 'Higher ROI', 'Long-term Value'],
        faqs: []
      },
      {
        slug: 'ppc-advertising',
        title: 'PPC Advertising',
        shortDesc: 'Instant traffic and leads via targeted paid campaigns.',
        fullDesc: 'Maximize your ROI with precision-targeted ads on Google, Facebook, and LinkedIn. We manage your budget meticulously, optimizing bids and creatives to lower CPC and increase conversions.',
        icon: BarChart3,
        features: ['Campaign Setup', 'A/B Testing', 'Audience Targeting', 'Conversion Tracking'],
        techStack: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Tag Manager', 'Looker Studio'],
        process: [{ step: 'Plan', desc: '' }, { step: 'Creative', desc: '' }, { step: 'Launch', desc: '' }, { step: 'Opt', desc: '' }, { step: 'Scale', desc: '' }],
        image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80',
        benefits: ['Immediate Results', 'Precise Targeting', 'Measurable ROI'],
        faqs: []
      },
      {
        slug: 'social-media-marketing',
        title: 'Social Media Marketing',
        shortDesc: 'Build brand loyalty and engage your community.',
        fullDesc: 'We craft compelling social media strategies that resonate with your audience. From content creation to community management, we turn followers into brand advocates.',
        icon: Globe,
        features: ['Content Calendar', 'Community Management', 'Influencer Outreach', 'Analytics Reporting'],
        techStack: ['Hootsuite', 'Canva', 'Buffer', 'Sprout Social', 'Instagram API'],
        process: [{ step: 'Strat', desc: '' }, { step: 'Create', desc: '' }, { step: 'Post', desc: '' }, { step: 'Engage', desc: '' }, { step: 'Analyze', desc: '' }],
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
        benefits: ['Brand Awareness', 'Customer Loyalty', 'Viral Potential'],
        faqs: []
      }
    ]
  },
  {
    id: 'creative',
    title: "Creative Services",
    icon: PenTool,
    color: "from-emerald-500 to-teal-500",
    services: [
      {
        slug: 'graphic-design',
        title: 'Graphic Design & Branding',
        shortDesc: 'Memorable visual identities and marketing collateral.',
        fullDesc: 'Your brand deserves to stand out. Our designers create cohesive visual identities, from logos to complete brand guidelines, ensuring consistency across all touchpoints.',
        icon: PenTool,
        features: ['Logo Design', 'Brand Guidelines', 'Marketing Collateral', 'Packaging Design'],
        techStack: ['Adobe Illustrator', 'Photoshop', 'Figma', 'After Effects'],
        process: [{ step: 'Brief', desc: '' }, { step: 'Concept', desc: '' }, { step: 'Refine', desc: '' }, { step: 'Deliver', desc: '' }, { step: 'Support', desc: '' }],
        image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?auto=format&fit=crop&w=1200&q=80',
        benefits: ['Strong Brand Identity', 'Professional Look', 'Consistency'],
        faqs: []
      },
      {
        slug: 'content-writing',
        title: 'Content Writing & Copywriting',
        shortDesc: 'Persuasive copy that converts readers into customers.',
        fullDesc: 'Words matter. Our expert copywriters craft engaging blog posts, website copy, and email sequences that speak directly to your audience\'s pain points and drive action.',
        icon: PenTool,
        features: ['Blog Posts', 'Website Copy', 'Email Sequences', 'Whitepapers'],
        techStack: ['Grammarly', 'Hemingway', 'WordPress', 'SurferSEO'],
        process: [{ step: 'Research', desc: '' }, { step: 'Outline', desc: '' }, { step: 'Draft', desc: '' }, { step: 'Edit', desc: '' }, { step: 'Pub', desc: '' }],
        image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
        benefits: ['Higher Engagement', 'SEO Boost', 'Authority Building'],
        faqs: []
      },
      {
        slug: 'video-production',
        title: 'Video Production & Animation',
        shortDesc: 'Engaging videos that explain, entertain, and convert.',
        fullDesc: 'From explainer animations to corporate testimonials, we produce high-quality video content. Our team handles scripting, storyboarding, animation, and editing.',
        icon: PenTool,
        features: ['Explainer Videos', 'Motion Graphics', 'Live Action', 'Video Editing'],
        techStack: ['Premiere Pro', 'After Effects', 'Blender', 'DaVinci Resolve'],
        process: [{ step: 'Script', desc: '' }, { step: 'Board', desc: '' }, { step: 'Prod', desc: '' }, { step: 'Post', desc: '' }, { step: 'Final', desc: '' }],
        image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80',
        benefits: ['High Engagement', 'Storytelling', 'Versatile Content'],
        faqs: []
      }
    ]
  }
]

export default function ServiceDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [service, setService] = useState<any>(null)
  const [category, setCategory] = useState<any>(null)
  const [relatedServices, setRelatedServices] = useState<any[]>([])

  useEffect(() => {
    const slug = params.slug as string

    // Find service
    for (const cat of serviceCategories) {
      const found = cat.services.find(s => s.slug === slug)
      if (found) {
        setService(found)
        setCategory(cat)

        // Get 3 related services from other categories or same category
        const allServices = serviceCategories.flatMap(c => c.services.filter(s => s.slug !== slug))
        setRelatedServices(allServices.slice(0, 3))
        return
      }
    }

    // If not found, redirect to services page
    router.push('/services')
  }, [params.slug, router])

  if (!service || !category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FD5D07]"></div>
      </div>
    )
  }

  const CategoryIcon = category.icon

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={service.image} alt={service.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/services" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>

            {/* <div className={`flex  items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-semibold text-sm mb-6 shadow-lg`}>
              <CategoryIcon size={16} />
              {category.title}
            </div> */}

            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight max-w-4xl">
              {service.title}
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mb-10 leading-relaxed">
              {service.shortDesc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#FD5D07] text-white font-semibold text-lg shadow-lg shadow-orange-500/30 hover:bg-[#e05206] hover:shadow-orange-500/50 transition-all duration-300">
                Get a Quote
              </Link>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                Download Brochure <Download size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Main Content Grid --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Left Column: Detailed Info */}
            <div className="lg:col-span-2 space-y-16">

              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">{service.fullDesc}</p>

                <div className="grid sm:grid-cols-3 gap-4 mt-8">
                  {service.benefits?.map((benefit: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                      <CheckCircle className="text-green-600 shrink-0" size={20} />
                      <span className="text-sm font-semibold text-green-800">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Key Features</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-300">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center shrink-0 mt-0.5`}>
                        <CheckCircle size={14} className="text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Process Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-semibold text-gray-900 mb-8">Our Process</h2>
                <div className="relative border-l-2 border-gray-100 ml-3 space-y-8">
                  {service.process.map((step: any, i: number) => (
                    <div key={i} className="relative pl-8">
                      <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-br ${category.color} border-2 border-white shadow-md`} />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.step}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {service.techStack.map((tech: string, i: number) => (
                    <span key={i} className="px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="text-3xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {service.faqs.map((faq: any, i: number) => (
                      <div key={i} className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                        <p className="text-gray-600">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">

                {/* Contact Card */}
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Start Your Project</h3>
                  <p className="text-gray-600 mb-6">Ready to bring your vision to life? Get a free consultation and quote today.</p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Clock size={20} className="text-[#FD5D07]" />
                      <span>Response within 24 hours</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Users size={20} className="text-[#FD5D07]" />
                      <span>Dedicated Project Manager</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <ShieldCheck size={20} className="text-[#FD5D07]" />
                      <span>NDA Protected</span>
                    </div>
                  </div>

                  <Link href="/contact" className="block w-full py-4 bg-[#FD5D07] text-white text-center font-semibold rounded-xl hover:bg-[#e05206] transition-colors shadow-lg shadow-orange-500/20">
                    Get Free Quote
                  </Link>
                  <Link href="/contact" className="block w-full py-4 mt-3 bg-gray-50 text-gray-700 text-center font-semibold rounded-xl hover:bg-gray-100 transition-colors border border-gray-200">
                    Schedule Call
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-black text-[#FD5D07] mb-1">98%</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">Success Rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-[#FD5D07] mb-1">24/7</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">Support</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Related Services --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedServices.map((rel) => (
              <Link key={rel.slug} href={`/services/${rel.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <Image src={rel.image} alt={rel.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{rel.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">{rel.shortDesc}</p>
                  <span className="text-[#FD5D07] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ChevronRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <CTA
        title="Have a Custom Requirement?"
        description="If you don't see exactly what you need, our team can build a custom solution tailored to your unique business challenges."
        ctaText="Contact Us Today"
        ctaLink="/contact"
      />
    </div>
  )
}