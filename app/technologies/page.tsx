'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useMemo } from 'react'
import { 
  Code2, Server, Cloud, Smartphone, Palette, 
  Database, Shield, Cpu, Search, X, CheckCircle, 
  Zap, Layers, Globe, Terminal, BarChart3, 
  ArrowRight, Star, BookOpen, ExternalLink, 
  Box, Activity, Lock, Workflow, MessageSquare,
  Target
} from 'lucide-react'
import { Hero } from '@/components/sections/Hero'
import { CTA } from '@/components/sections/CTA'
import TopScorers from '@/components/tesmonials'
import { processSteps } from '../about/page'

// --- Comprehensive Technology Data ---

const techCategories = [
  { id: 'frontend', label: 'Frontend', icon: Code2, color: 'from-blue-500 to-cyan-500' },
  { id: 'backend', label: 'Backend', icon: Server, color: 'from-green-500 to-emerald-500' },
  { id: 'mobile', label: 'Mobile', icon: Smartphone, color: 'from-purple-500 to-pink-500' },
  { id: 'cloud-devops', label: 'Cloud & DevOps', icon: Cloud, color: 'from-orange-500 to-red-500' },
  { id: 'database', label: 'Database', icon: Database, color: 'from-yellow-500 to-amber-500' },
  { id: 'ai-ml', label: 'AI & ML', icon: Cpu, color: 'from-indigo-500 to-violet-500' },
  { id: 'design', label: 'Design & UX', icon: Palette, color: 'from-pink-500 to-rose-500' },
  { id: 'marketing', label: 'Marketing Tech', icon: BarChart3, color: 'from-teal-500 to-green-500' },
]

const technologies = [
  // Frontend
  {
    id: 'react',
    name: 'React.js',
    category: 'frontend',
    description: 'The industry-standard library for building interactive user interfaces using a component-based architecture.',
    features: ['Virtual DOM', 'Component-Based', 'Huge Ecosystem', 'Server Components (Next.js)'],
    useCases: ['Single Page Apps', 'Dashboards', 'Social Networks', 'E-commerce Frontends'],
    proficiency: 100,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    details: 'React allows us to build reusable UI components. Combined with Next.js, it provides SEO-friendly server-side rendering.'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    description: 'The React framework for production, offering hybrid static & server rendering, TypeScript support, and more.',
    features: ['SSR/SSG', 'API Routes', 'Image Optimization', 'Automatic Code Splitting'],
    useCases: ['Corporate Websites', 'Blogs', 'E-commerce', 'SaaS Platforms'],
    proficiency: 100,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    details: 'We use Next.js for 90% of our web projects due to its superior performance, SEO capabilities, and developer experience.'
  },
  {
    id: 'vue',
    name: 'Vue.js',
    category: 'frontend',
    description: 'A progressive JavaScript framework that is approachable, versatile, and performant.',
    features: ['Reactive Data Binding', 'Component System', 'Virtual DOM', 'Easy Integration'],
    useCases: ['Legacy Modernization', 'Interactive Widgets', 'SPAs'],
    proficiency: 90,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    details: 'Vue offers a gentle learning curve and is perfect for integrating into existing projects or building lightweight SPAs.'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    description: 'JavaScript with syntax for types. It catches errors early and enhances code maintainability.',
    features: ['Static Typing', 'IntelliSense', 'Refactoring Safety', 'ES6+ Support'],
    useCases: ['Large Scale Apps', 'Team Collaboration', 'Library Development'],
    proficiency: 100,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    details: 'We write 100% of our modern code in TypeScript to ensure type safety and reduce runtime bugs.'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    description: 'A utility-first CSS framework packed with classes that can be composed to build any design.',
    features: ['Utility Classes', 'Responsive Design', 'Dark Mode', 'Customizable'],
    useCases: ['Rapid Prototyping', 'Custom Designs', 'Design Systems'],
    proficiency: 100,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    details: 'Tailwind allows us to build custom designs faster without leaving our HTML, ensuring consistency across the project.'
  },

  // Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    description: 'A JavaScript runtime built on Chrome\'s V8 engine, perfect for scalable network applications.',
    features: ['Non-blocking I/O', 'Event Driven', 'NPM Ecosystem', 'Cross-Platform'],
    useCases: ['APIs', 'Real-time Apps', 'Microservices', 'Streaming'],
    proficiency: 100,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    details: 'Node.js is our go-to for backend services, allowing us to use JavaScript across the entire stack (MERN/MEAN).'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    description: 'A versatile, high-level programming language known for readability and extensive libraries.',
    features: ['Django/Flask/FastAPI', 'Data Science Libs', 'Automation', 'AI Integration'],
    useCases: ['AI/ML Backends', 'Data Processing', 'Enterprise Apps', 'Scripting'],
    proficiency: 95,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    details: 'Python powers our AI initiatives and data-heavy backends, leveraging frameworks like FastAPI for high performance.'
  },
  {
    id: 'dotnet',
    name: '.NET Core',
    category: 'backend',
    description: 'A free, open-source, cross-platform framework for building modern apps.',
    features: ['High Performance', 'Strong Typing', 'Enterprise Ready', 'Azure Integration'],
    useCases: ['Enterprise Systems', 'Financial Apps', 'Legacy Migration'],
    proficiency: 85,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
    details: 'Used for enterprise clients requiring robust security, strict typing, and deep integration with Microsoft ecosystems.'
  },
  {
    id: 'go',
    name: 'Go (Golang)',
    category: 'backend',
    description: 'An open source programming language supported by Google, designed for simplicity and concurrency.',
    features: ['Concurrency', 'Fast Compilation', 'Static Typing', 'Minimal Syntax'],
    useCases: ['Microservices', 'Cloud Native Apps', 'High-Performance APIs'],
    proficiency: 80,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
    details: 'We utilize Go for high-throughput microservices where performance and concurrency are critical.'
  },

  // Mobile
  {
    id: 'flutter',
    name: 'Flutter',
    category: 'mobile',
    description: 'Google\'s UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.',
    features: ['Hot Reload', 'Widget Library', 'Native Performance', 'Single Codebase'],
    useCases: ['Startups', 'MVPs', 'Cross-Platform Apps'],
    proficiency: 95,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    details: 'Flutter is our primary choice for cross-platform mobile development, delivering near-native performance with 40% less code.'
  },
  {
    id: 'react-native',
    name: 'React Native',
    category: 'mobile',
    description: 'A framework for building native apps using React.',
    features: ['Learn Once Write Anywhere', 'Native Modules', 'Live Reload', 'Community Support'],
    useCases: ['Social Apps', 'E-commerce', 'Existing React Teams'],
    proficiency: 90,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', // Using React logo as proxy
    details: 'Ideal for teams already familiar with React, allowing code sharing between web and mobile platforms.'
  },
  {
    id: 'swift',
    name: 'Swift',
    category: 'mobile',
    description: 'A powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS.',
    features: ['Safe by Design', 'Fast', 'Modern Syntax', 'Apple Ecosystem'],
    useCases: ['Premium iOS Apps', 'AR Applications', 'Apple Watch Apps'],
    proficiency: 85,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
    details: 'For mission-critical iOS apps requiring deep hardware integration, we build native solutions with Swift.'
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    category: 'mobile',
    description: 'A concise, safe, and interoperable programming language for Android.',
    features: ['Null Safety', 'Coroutines', 'Java Interop', 'Concise'],
    useCases: ['Android Apps', 'Server-side (Ktor)', 'Multiplatform'],
    proficiency: 85,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
    details: 'The official language for Android, offering modern features that make development faster and safer than Java.'
  },

  // Cloud & DevOps
  {
    id: 'aws',
    name: 'Amazon Web Services',
    category: 'cloud-devops',
    description: 'The world\'s most comprehensive and broadly adopted cloud platform.',
    features: ['EC2', 'Lambda', 'S3', 'RDS', 'Global Infrastructure'],
    useCases: ['Scalable Hosting', 'Serverless', 'Storage', 'Machine Learning'],
    proficiency: 100,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    details: 'We are an AWS Advanced Partner, utilizing the full suite of services to build resilient, scalable architectures.'
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'cloud-devops',
    description: 'A platform for developing, shipping, and running applications in containers.',
    features: ['Containerization', 'Consistency', 'Isolation', 'Portability'],
    useCases: ['Microservices', 'CI/CD', 'Development Environments'],
    proficiency: 100,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    details: 'Docker ensures our applications run identically in development, testing, and production environments.'
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: 'cloud-devops',
    description: 'An open-source system for automating deployment, scaling, and management of containerized applications.',
    features: ['Auto Scaling', 'Self Healing', 'Load Balancing', 'Orchestration'],
    useCases: ['Large Scale Systems', 'Microservices Orchestration'],
    proficiency: 90,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    details: 'For enterprise clients with complex microservices, we orchestrate containers using Kubernetes for maximum uptime.'
  },
  {
    id: 'ci-cd',
    name: 'CI/CD (GitHub Actions/Jenkins)',
    category: 'cloud-devops',
    description: 'Automated pipelines for continuous integration and continuous deployment.',
    features: ['Automated Testing', 'Auto Deployment', 'Rollback', 'Quality Gates'],
    useCases: ['Agile Development', 'Frequent Releases'],
    proficiency: 100,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    details: 'We automate everything. Every commit triggers tests and deployments, ensuring rapid and safe delivery.'
  },

  // Database
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    description: 'A document database built for modern application developers and for the cloud.',
    features: ['NoSQL', 'Flexible Schema', 'Scalability', 'JSON-like Documents'],
    useCases: ['Content Management', 'Catalogs', 'Real-time Analytics'],
    proficiency: 100,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    details: 'Perfect for agile development where schema flexibility is required, often paired with Node.js.'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    description: 'A powerful, open source object-relational database system.',
    features: ['ACID Compliant', 'Complex Queries', 'JSON Support', 'Extensible'],
    useCases: ['Financial Systems', 'ERP', 'Complex Data Relations'],
    proficiency: 95,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    details: 'Our choice for relational data requiring strict integrity, complex joins, and transactional safety.'
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'database',
    description: 'An open source, in-memory data structure store, used as a database, cache, and message broker.',
    features: ['In-Memory', 'Low Latency', 'Pub/Sub', 'Data Structures'],
    useCases: ['Caching', 'Session Management', 'Real-time Leaderboards'],
    proficiency: 90,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    details: 'Used extensively for caching layers to speed up application response times by milliseconds.'
  },

  // AI & ML
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    category: 'ai-ml',
    description: 'An end-to-end open source platform for machine learning.',
    features: ['Neural Networks', 'Deep Learning', 'Production Ready', 'Flexible'],
    useCases: ['Image Recognition', 'NLP', 'Predictive Analytics'],
    proficiency: 85,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    details: 'We leverage TensorFlow for building and deploying complex deep learning models at scale.'
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    category: 'ai-ml',
    description: 'An optimized tensor library for deep learning using GPUs and CPUs.',
    features: ['Dynamic Graphs', 'Pythonic', 'Research Friendly', 'TorchServe'],
    useCases: ['Computer Vision', 'Research Prototypes', 'NLP'],
    proficiency: 85,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    details: 'Preferred for research-heavy projects and computer vision tasks due to its flexibility.'
  },
  {
    id: 'openai',
    name: 'OpenAI API / LLMs',
    category: 'ai-ml',
    description: 'Integration of Large Language Models for generative AI applications.',
    features: ['Chatbots', 'Content Generation', 'Code Assistance', 'Analysis'],
    useCases: ['Customer Support Bots', 'Content Tools', 'Data Summarization'],
    proficiency: 95,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg',
    details: 'We build custom AI agents and chatbots integrated with GPT-4 and other LLMs to automate business processes.'
  },

  // Design
  {
    id: 'figma',
    name: 'Figma',
    category: 'design',
    description: 'The collaborative interface design tool.',
    features: ['Real-time Collaboration', 'Prototyping', 'Design Systems', 'Dev Mode'],
    useCases: ['UI/UX Design', 'Wireframing', 'Prototyping'],
    proficiency: 100,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    details: 'Our design team works exclusively in Figma, allowing seamless handoff to developers.'
  },
  {
    id: 'adobe',
    name: 'Adobe Creative Suite',
    category: 'design',
    description: 'Industry standard tools for graphic design, video editing, and photography.',
    features: ['Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro'],
    useCases: ['Branding', 'Video Production', 'Asset Creation'],
    proficiency: 95,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
    details: 'Used for high-fidelity asset creation, video editing, and complex graphic design tasks.'
  },

  // Marketing
  {
    id: 'google-analytics',
    name: 'Google Analytics 4',
    category: 'marketing',
    description: 'Web analytics service offered by Google that tracks and reports website traffic.',
    features: ['Event Tracking', 'User Journey', 'Conversion Analysis', 'Integration'],
    useCases: ['Traffic Analysis', 'ROI Measurement', 'User Behavior'],
    proficiency: 95,
    logo: 'https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg',
    details: 'We implement advanced GA4 tracking to provide clients with actionable insights into user behavior.'
  },
  {
    id: 'seo-tools',
    name: 'SEO Tools (Ahrefs/SEMrush)',
    category: 'marketing',
    description: 'Comprehensive tools for keyword research, competitor analysis, and site audits.',
    features: ['Keyword Research', 'Backlink Analysis', 'Site Audit', 'Rank Tracking'],
    useCases: ['SEO Strategy', 'Content Planning', 'Competitor Spy'],
    proficiency: 90,
    logo: 'https://cdn.worldvectorlogo.com/logos/ahrefs.svg',
    details: 'Essential for our digital marketing team to drive organic growth and optimize content strategies.'
  }
]

// --- Components ---

function TechDetailModal({ tech, onClose }: { tech: any, onClose: () => void }) {
  if (!tech) return null;
  const CategoryIcon = techCategories.find(c => c.id === tech.category)?.icon || Code2;
  const categoryColor = techCategories.find(c => c.id === tech.category)?.color || 'from-gray-500 to-gray-600';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/10 backdrop-blur-[1px]"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl relative"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-gray-100 transition-colors shadow-sm"
        >
          <X size={24} className="text-gray-600" />
        </button>

        {/* Header */}
        <div className={`relative bg-gradient-to-r ${categoryColor} p-8 flex items-end`}>
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10 flex items-end gap-6 w-full">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-3">
              <Image src={tech.logo} alt={tech.name} width={64} height={64} className="object-contain" />
            </div>
            <div className="mb-2 text-white">
              <div className="flex items-center gap-2 mb-1 opacity-90">
                <CategoryIcon size={16} />
                <span className="text-sm font-bold uppercase tracking-wider">{techCategories.find(c => c.id === tech.category)?.label}</span>
              </div>
              <h2 className="text-3xl font-bold">{tech.name}</h2>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-4 h-[60vh] overflow-y-auto">
          
          {/* Overview */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              Overview
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">{tech.description}</p>
            <p className="text-gray-600 mt-4 leading-relaxed">{tech.details}</p>
          </div>

          

          <div className="grid md:grid-cols-2 gap-8">
            {/* Features */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                 Key Features
              </h3>
              <ul className="space-y-3">
                {tech.features.map((feat: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-green-500 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Use Cases */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                Common Use Cases
              </h3>
              <div className="flex flex-wrap gap-2">
                {tech.useCases.map((use: string, i: number) => (
                  <span key={i} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100">
                    {use}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action */}
          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="flex-1 bg-gray-900 text-white py-3 rounded-xl font-bold text-center hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
              Build with {tech.name} <ArrowRight size={18} />
            </Link>
            <a href="#" className="px-6 py-3 border border-gray-200 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              View Documentation <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function TechnologiesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTech, setSelectedTech] = useState<any>(null)

  const filteredTech = useMemo(() => {
    return technologies.filter(tech => {
      const matchesCategory = activeCategory === 'all' || tech.category === activeCategory
      const matchesSearch = tech.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            tech.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <div className="min-h-screen bg-white">
      
      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-12 overflow-hidden bg-gradient-to-b from-gray-50 to-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-[#EC4E00] font-semibold text-sm mb-3">
              Our Technology Stack
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Powered by <br />
              <span className="text-[#EC4E00]">Cutting-Edge Tech</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              We leverage the most advanced, scalable, and secure technologies to build future-proof digital solutions. 
              Explore our comprehensive stack below.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative mb-12">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search technologies (e.g., React, AWS, Python)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 lg:px-6 py-2 lg:py-2.5 rounded-full font-medium text-sm lg:text-base transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === 'all' 
                    ? 'bg-gray-900 text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                }`}
              >
                <Layers size={18} /> All
              </button>
              {techCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 lg:px-6 py-2 lg:py-2.5 rounded-full font-medium text-sm lg:text-base transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === cat.id
                      ? `bg-gradient-to-r ${cat.color} text-white shadow-lg scale-105 border-transparent`
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                  }`}
                >
                  <cat.icon size={18} />
                  <span className="hidden sm:inline">{cat.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Tech Grid --- */}
      <section className="pb-20 pt-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTech.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-4">
                <Search size={32} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">No technologies found</h3>
              <p className="text-gray-600">Try adjusting your search or filter.</p>
            </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence>
                {filteredTech.map((tech) => {
                  const catColor = techCategories.find(c => c.id === tech.category)?.color || 'from-gray-500 to-gray-600'
                  return (
                    <motion.div
                      layout
                      key={tech.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      onClick={() => setSelectedTech(tech)}
                      className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
                    >
                      {/* Card Header */}
                      <div className="p-6 flex items-start justify-between">
                        <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center p-2 group-hover:bg-white group-hover:shadow-md transition-all">
                          <Image src={tech.logo} alt={tech.name} width={40} height={40} className="object-contain" />
                        </div>
                        <span className={`px-2 py-1 rounded-md text-xs font-bold text-white bg-gradient-to-r ${catColor}`}>
                          {tech.proficiency}%
                        </span>
                      </div>

                      {/* Card Body */}
                      <div className="px-6 pb-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{tech.name}</h3>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-1">{tech.description}</p>
                        
                        <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {techCategories.find(c => c.id === tech.category)?.label}
                          </span>
                          <span className="flex items-center text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                            Details <ArrowRight size={14} className="ml-1" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      <TopScorers/>
            <section className="py-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
              </div>
      
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-10"
                >
                  <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
                    Our Methodology
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">Work</span>
                  </h2>
                  <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    A proven methodology that ensures quality, speed, and transparency throughout your project journey.
                  </p>
                </motion.div>
      
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {processSteps.map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-100 overflow-hidden"
                    >
                      {/* Gradient Background on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
                      {/* Step Number */}
                      <div className="text-7xl font-bold text-white/20 absolute top-4 right-4 group-hover:text-white/40 transition-colors">
                        {step.step}
                      </div>
      
                      <step.icon className="w-12 stroke-[1.4] mb-4 h-12 text-white" />
      
                      {/* Content */}
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed mb-4">{step.desc}</p>
      
                      {/* Details */}
                      <div className="space-y-2">
                        {step.details.map((detail, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`} />
                            {detail}
                          </div>
                        ))}
                      </div>
      
                      {/* Progress Bar */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${((idx + 1) / processSteps.length) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 1 + idx * 0.1, duration: 0.8 }}
                          className={`h-full bg-gradient-to-r ${step.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>


      {/* --- CTA --- */}
      <CTA
        title="Need a Specific Technology?"
        description="Don't see your preferred stack? We are adaptable and ready to work with your existing infrastructure or recommend the best new tools."
        ctaText="Discuss Your Stack"
        ctaLink="/contact"
      />

      {/* --- Detail Modal --- */}
      <AnimatePresence>
        {selectedTech && (
          <TechDetailModal 
            tech={selectedTech} 
            onClose={() => setSelectedTech(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  )
}