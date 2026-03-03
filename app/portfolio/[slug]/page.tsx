'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { 
  ArrowLeft, ExternalLink, CheckCircle, TrendingUp, 
  Users, Clock, Calendar, Code2, Smartphone, 
  Megaphone, Palette, ChevronRight, Share2, Download,
  Globe, Zap, Award
} from 'lucide-react'
import { CTA } from '@/components/sections/CTA'

// --- Reuse Data (In production, import from a central file) ---
const projectsData = [
  {
    slug: 'nexbank-digital',
    title: 'NexBank Digital Transformation',
    category: 'fintech',
    serviceType: 'web',
    client: 'NexBank Corp',
    year: '2023',
    duration: '8 Months',
    teamSize: '6 Experts',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80'
    ],
    challenge: 'NexBank needed to modernize their legacy banking portal to support 2M+ concurrent users while maintaining strict security compliance (SOC2, GDPR). The old system suffered from slow load times and poor mobile experience.',
    solution: 'We architected a microservices-based solution using React for the frontend and Node.js for the backend, deployed on AWS with auto-scaling. We implemented biometric authentication and real-time fraud detection algorithms.',
    results: [
      { metric: '40%', label: 'Faster Load Time' },
      { metric: '25%', label: 'Increase in User Adoption' },
      { metric: '99.99%', label: 'Uptime Achieved' },
      { metric: '$2M', label: 'Cost Savings/year' }
    ],
    techStack: ['React', 'Node.js', 'AWS Lambda', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    services: ['UI/UX Design', 'Full-Stack Dev', 'Cloud Migration', 'Security Audit'],
    testimonial: {
      text: "True Value Infosoft transformed our digital presence. Their team's expertise in fintech security and scalability is unmatched.",
      author: "John Doe",
      role: "CTO, NexBank"
    }
  },
  {
    slug: 'healthplus-app',
    title: 'HealthPlus Telemedicine App',
    category: 'healthcare',
    serviceType: 'app',
    client: 'HealthPlus Inc',
    year: '2024',
    duration: '6 Months',
    teamSize: '4 Experts',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576091160550-217358c7e618?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516574187841-693083f69802?auto=format&fit=crop&w=800&q=80'
    ],
    challenge: 'Create a HIPAA-compliant telemedicine app allowing patients to consult doctors via video, manage prescriptions, and view lab results securely on both iOS and Android.',
    solution: 'Developed a cross-platform app using Flutter for consistent UI/UX. Integrated WebRTC for low-latency video calls and Firebase for secure data synchronization. Implemented end-to-end encryption for all medical records.',
    results: [
      { metric: '500k+', label: 'Downloads' },
      { metric: '4.9', label: 'App Store Rating' },
      { metric: '60%', label: 'Reduced Wait Time' },
      { metric: '100%', label: 'HIPAA Compliant' }
    ],
    techStack: ['Flutter', 'Dart', 'Firebase', 'WebRTC', 'Node.js', 'MongoDB'],
    services: ['Mobile App Dev', 'Backend API', 'UI/UX Design', 'QA Testing'],
    testimonial: {
      text: "The app has revolutionized how we connect with patients. The development process was smooth and professional.",
      author: "Dr. Sarah Smith",
      role: "Director, HealthPlus"
    }
  },
  // Add other projects here similarly...
]

// Fallback for demo if slug doesn't match exactly in this small array
const getProject = (slug: string) => {
  const found = projectsData.find(p => p.slug === slug)
  if (found) return found
  
  // Return a generic template for other slugs to prevent 404 in this demo
  return {
    slug,
    title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    category: 'enterprise',
    serviceType: 'web',
    client: 'Global Enterprise',
    year: '2023',
    duration: '10 Months',
    teamSize: '8 Experts',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80'],
    challenge: 'The client needed a scalable enterprise solution to streamline internal workflows and improve data visibility across global offices.',
    solution: 'We delivered a custom dashboard with real-time analytics, role-based access control, and seamless integration with their existing ERP systems.',
    results: [{ metric: '30%', label: 'Efficiency Gain' }, { metric: '24/7', label: 'Support' }],
    techStack: ['Next.js', 'Python', 'AWS', 'PostgreSQL'],
    services: ['Consulting', 'Development', 'Cloud'],
    testimonial: { text: "Exceptional work.", author: "CEO", role: "Client" }
  }
}

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<any>(null)
  const [activeImg, setActiveImg] = useState<string>('')

  useEffect(() => {
    const data = getProject(params.slug as string)
    setProject(data)
    setActiveImg(data.image)
  }, [params.slug])

  if (!project) return <div className="min-h-screen flex items-center justify-center">Loading...</div>

  const CategoryIcon = project.category === 'fintech' ? TrendingUp : 
                       project.category === 'healthcare' ? Users : 
                       project.category === 'ecommerce' ? Globe : Zap

  return (
    <div className="min-h-screen bg-white">
      
      {/* --- Navigation Bar --- */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button onClick={() => router.back()} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft size={20} /> Back
          </button>
          <div className="flex gap-4">
            <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors"><Share2 size={20} /></button>
            <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors"><Download size={20} /></button>
          </div>
        </div>
      </div>

      {/* --- Hero Image --- */}
      <section className="pt-16">
        <div className="relative h-[60vh] lg:h-[80vh] w-full overflow-hidden">
          <Image src={project.image} alt={project.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    {project.serviceType}
                  </span>
                  <span className="text-gray-300 text-sm flex items-center gap-1">
                    <Calendar size={14} /> {project.year}
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-200 max-w-3xl">
                  {project.challenge.substring(0, 150)}...
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Content Grid --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* Overview */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{project.challenge}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{project.solution}</p>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {project.services.map((s: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700 font-medium">
                      <CheckCircle size={18} className="text-purple-600" /> {s}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Gallery */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Gallery</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2 relative h-80 rounded-2xl overflow-hidden mb-4">
                    <Image src={activeImg} alt="Main" fill className="object-cover" />
                  </div>
                  {project.gallery.map((img: string, i: number) => (
                    <button 
                      key={i} 
                      onClick={() => setActiveImg(img)}
                      className={`relative h-48 rounded-2xl overflow-hidden transition-all duration-300 ${activeImg === img ? 'ring-4 ring-purple-600' : 'opacity-70 hover:opacity-100'}`}
                    >
                      <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Testimonial */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative">
                  <div className="absolute top-8 left-8 text-purple-200">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" /></svg>
                  </div>
                  <p className="text-xl text-gray-700 italic mb-6 relative z-10 pl-8">"{project.testimonial.text}"</p>
                  <div className="flex items-center gap-4 pl-8">
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-600">
                      {project.testimonial.author[0]}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{project.testimonial.author}</div>
                      <div className="text-sm text-gray-500">{project.testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                
                {/* Project Info Card */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Project Details</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-sm">Client</span>
                      <span className="font-semibold text-gray-900">{project.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-sm">Industry</span>
                      <span className="font-semibold text-gray-900 capitalize">{project.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-sm">Duration</span>
                      <span className="font-semibold text-gray-900">{project.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-sm">Team</span>
                      <span className="font-semibold text-gray-900">{project.teamSize}</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Code2 size={20} className="text-purple-400" /> Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech: string, i: number) => (
                      <span key={i} className="px-3 py-1 bg-white/10 rounded-lg text-xs font-medium hover:bg-purple-600 transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results Metrics */}
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <TrendingUp size={20} /> Key Results
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {project.results.map((res: any, i: number) => (
                      <div key={i} className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                        <div className="text-2xl font-black mb-1">{res.metric}</div>
                        <div className="text-xs opacity-80">{res.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/contact" className="block w-full py-4 bg-gray-900 text-white text-center font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-lg">
                  Start Similar Project
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>

      <CTA
        title="Ready to Build Your Success Story?"
        description="Join our list of satisfied clients. Let's discuss how we can help you achieve your business goals."
        ctaText="Get in Touch"
        ctaLink="/contact"
      />
    </div>
  )
}