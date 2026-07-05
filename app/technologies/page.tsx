"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useRef, useEffect } from "react";
import {
  Code2,
  Server,
  Cloud,
  Smartphone,
  Palette,
  Database,
  Shield,
  Cpu,
  Search,
  X,
  CheckCircle,
  Zap,
  Layers,
  Globe,
  Terminal,
  BarChart3,
  ArrowRight,
  Star,
  BookOpen,
  ExternalLink,
  Box,
  Activity,
  Lock,
  Workflow,
  MessageSquare,
  Target,
  BadgeCheck,
  Trophy,
  Users,
  Sparkles,
  ChevronRight,
  ArrowUpRight,
  Calendar,
  Filter,
  Briefcase,
} from "lucide-react";
import { CTASection } from "@/components/pages/aboutus";
import TopScorers from "@/components/tesmonials";

/* ─────────────────────────────────────────────
   BRAND COLORS (matching services page)
   Primary: #0f2a6b / #1a3fa0 / #2952cc (deep navy)
   Accent:  #e8a020 / #f0b832 (gold)
   Text:    #4a5578 (body), #0f2a6b (headings)
   BG:      #f8f9fc / #f4f6fb (light sections)
   Cards:   white with border-[#1a3fa0]/10
───────────────────────────────────────────── */

const techCategories = [
  { id: "frontend", label: "Frontend", icon: Code2, color: "from-blue-500 to-cyan-500" },
  { id: "backend", label: "Backend", icon: Server, color: "from-green-500 to-emerald-500" },
  { id: "mobile", label: "Mobile", icon: Smartphone, color: "from-purple-500 to-pink-500" },
  { id: "cloud-devops", label: "Cloud & DevOps", icon: Cloud, color: "from-orange-500 to-red-500" },
  { id: "database", label: "Database", icon: Database, color: "from-yellow-500 to-amber-500" },
  { id: "ai-ml", label: "AI & ML", icon: Cpu, color: "from-indigo-500 to-violet-500" },
  { id: "design", label: "Design & UX", icon: Palette, color: "from-pink-500 to-rose-500" },
  { id: "marketing", label: "Marketing Tech", icon: BarChart3, color: "from-teal-500 to-green-500" },
];

const technologies = [
  // Frontend
  {
    id: "react",
    name: "React.js",
    category: "frontend",
    description:
      "The industry-standard library for building interactive user interfaces using a component-based architecture.",
    features: ["Virtual DOM", "Component-Based", "Huge Ecosystem", "Server Components (Next.js)"],
    useCases: ["Single Page Apps", "Dashboards", "Social Networks", "E-commerce Frontends"],
    proficiency: 100,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    details:
      "React allows us to build reusable UI components. Combined with Next.js, it provides SEO-friendly server-side rendering.",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    description:
      "The React framework for production, offering hybrid static & server rendering, TypeScript support, and more.",
    features: ["SSR/SSG", "API Routes", "Image Optimization", "Automatic Code Splitting"],
    useCases: ["Corporate Websites", "Blogs", "E-commerce", "SaaS Platforms"],
    proficiency: 100,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    details:
      "We use Next.js for 90% of our web projects due to its superior performance, SEO capabilities, and developer experience.",
  },
  {
    id: "vue",
    name: "Vue.js",
    category: "frontend",
    description:
      "A progressive JavaScript framework that is approachable, versatile, and performant.",
    features: ["Reactive Data Binding", "Component System", "Virtual DOM", "Easy Integration"],
    useCases: ["Legacy Modernization", "Interactive Widgets", "SPAs"],
    proficiency: 90,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    details:
      "Vue offers a gentle learning curve and is perfect for integrating into existing projects or building lightweight SPAs.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    description: "JavaScript with syntax for types. It catches errors early and enhances code maintainability.",
    features: ["Static Typing", "IntelliSense", "Refactoring Safety", "ES6+ Support"],
    useCases: ["Large Scale Apps", "Team Collaboration", "Library Development"],
    proficiency: 100,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    details: "We write 100% of our modern code in TypeScript to ensure type safety and reduce runtime bugs.",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    description:
      "A utility-first CSS framework packed with classes that can be composed to build any design.",
    features: ["Utility Classes", "Responsive Design", "Dark Mode", "Customizable"],
    useCases: ["Rapid Prototyping", "Custom Designs", "Design Systems"],
    proficiency: 100,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    details:
      "Tailwind allows us to build custom designs faster without leaving our HTML, ensuring consistency across the project.",
  },
  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    description:
      "A JavaScript runtime built on Chrome's V8 engine, perfect for scalable network applications.",
    features: ["Non-blocking I/O", "Event Driven", "NPM Ecosystem", "Cross-Platform"],
    useCases: ["APIs", "Real-time Apps", "Microservices", "Streaming"],
    proficiency: 100,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    details:
      "Node.js is our go-to for backend services, allowing us to use JavaScript across the entire stack (MERN/MEAN).",
  },
  {
    id: "python",
    name: "Python",
    category: "backend",
    description:
      "A versatile, high-level programming language known for readability and extensive libraries.",
    features: ["Django/Flask/FastAPI", "Data Science Libs", "Automation", "AI Integration"],
    useCases: ["AI/ML Backends", "Data Processing", "Enterprise Apps", "Scripting"],
    proficiency: 95,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    details:
      "Python powers our AI initiatives and data-heavy backends, leveraging frameworks like FastAPI for high performance.",
  },
  {
    id: "dotnet",
    name: ".NET Core",
    category: "backend",
    description: "A free, open-source, cross-platform framework for building modern apps.",
    features: ["High Performance", "Strong Typing", "Enterprise Ready", "Azure Integration"],
    useCases: ["Enterprise Systems", "Financial Apps", "Legacy Migration"],
    proficiency: 85,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    details:
      "Used for enterprise clients requiring robust security, strict typing, and deep integration with Microsoft ecosystems.",
  },
  {
    id: "go",
    name: "Go (Golang)",
    category: "backend",
    description:
      "An open source programming language supported by Google, designed for simplicity and concurrency.",
    features: ["Concurrency", "Fast Compilation", "Static Typing", "Minimal Syntax"],
    useCases: ["Microservices", "Cloud Native Apps", "High-Performance APIs"],
    proficiency: 80,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    details:
      "We utilize Go for high-throughput microservices where performance and concurrency are critical.",
  },
  // Mobile
  {
    id: "flutter",
    name: "Flutter",
    category: "mobile",
    description:
      "Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    features: ["Hot Reload", "Widget Library", "Native Performance", "Single Codebase"],
    useCases: ["Startups", "MVPs", "Cross-Platform Apps"],
    proficiency: 95,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    details:
      "Flutter is our primary choice for cross-platform mobile development, delivering near-native performance with 40% less code.",
  },
  {
    id: "react-native",
    name: "React Native",
    category: "mobile",
    description: "A framework for building native apps using React.",
    features: ["Learn Once Write Anywhere", "Native Modules", "Live Reload", "Community Support"],
    useCases: ["Social Apps", "E-commerce", "Existing React Teams"],
    proficiency: 90,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    details:
      "Ideal for teams already familiar with React, allowing code sharing between web and mobile platforms.",
  },
  {
    id: "swift",
    name: "Swift",
    category: "mobile",
    description:
      "A powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS.",
    features: ["Safe by Design", "Fast", "Modern Syntax", "Apple Ecosystem"],
    useCases: ["Premium iOS Apps", "AR Applications", "Apple Watch Apps"],
    proficiency: 85,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    details:
      "For mission-critical iOS apps requiring deep hardware integration, we build native solutions with Swift.",
  },
  {
    id: "kotlin",
    name: "Kotlin",
    category: "mobile",
    description: "A concise, safe, and interoperable programming language for Android.",
    features: ["Null Safety", "Coroutines", "Java Interop", "Concise"],
    useCases: ["Android Apps", "Server-side (Ktor)", "Multiplatform"],
    proficiency: 85,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    details:
      "The official language for Android, offering modern features that make development faster and safer than Java.",
  },
  // Cloud & DevOps
  {
    id: "aws",
    name: "Amazon Web Services",
    category: "cloud-devops",
    description:
      "The world's most comprehensive and broadly adopted cloud platform.",
    features: ["EC2", "Lambda", "S3", "RDS", "Global Infrastructure"],
    useCases: ["Scalable Hosting", "Serverless", "Storage", "Machine Learning"],
    proficiency: 100,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    details:
      "We are an AWS Advanced Partner, utilizing the full suite of services to build resilient, scalable architectures.",
  },
  {
    id: "docker",
    name: "Docker",
    category: "cloud-devops",
    description: "A platform for developing, shipping, and running applications in containers.",
    features: ["Containerization", "Consistency", "Isolation", "Portability"],
    useCases: ["Microservices", "CI/CD", "Development Environments"],
    proficiency: 100,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    details:
      "Docker ensures our applications run identically in development, testing, and production environments.",
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    category: "cloud-devops",
    description:
      "An open-source system for automating deployment, scaling, and management of containerized applications.",
    features: ["Auto Scaling", "Self Healing", "Load Balancing", "Orchestration"],
    useCases: ["Large Scale Systems", "Microservices Orchestration"],
    proficiency: 90,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    details:
      "For enterprise clients with complex microservices, we orchestrate containers using Kubernetes for maximum uptime.",
  },
  // Database
  {
    id: "mongodb",
    name: "MongoDB",
    category: "database",
    description:
      "A document database built for modern application developers and for the cloud.",
    features: ["NoSQL", "Flexible Schema", "Scalability", "JSON-like Documents"],
    useCases: ["Content Management", "Catalogs", "Real-time Analytics"],
    proficiency: 100,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    details: "Perfect for agile development where schema flexibility is required, often paired with Node.js.",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "database",
    description: "A powerful, open source object-relational database system.",
    features: ["ACID Compliant", "Complex Queries", "JSON Support", "Extensible"],
    useCases: ["Financial Systems", "ERP", "Complex Data Relations"],
    proficiency: 95,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    details:
      "Our choice for relational data requiring strict integrity, complex joins, and transactional safety.",
  },
  {
    id: "redis",
    name: "Redis",
    category: "database",
    description:
      "An open source, in-memory data structure store, used as a database, cache, and message broker.",
    features: ["In-Memory", "Low Latency", "Pub/Sub", "Data Structures"],
    useCases: ["Caching", "Session Management", "Real-time Leaderboards"],
    proficiency: 90,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    details: "Used extensively for caching layers to speed up application response times by milliseconds.",
  },
  // AI & ML
  {
    id: "tensorflow",
    name: "TensorFlow",
    category: "ai-ml",
    description: "An end-to-end open source platform for machine learning.",
    features: ["Neural Networks", "Deep Learning", "Production Ready", "Flexible"],
    useCases: ["Image Recognition", "NLP", "Predictive Analytics"],
    proficiency: 85,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    details: "We leverage TensorFlow for building and deploying complex deep learning models at scale.",
  },
  {
    id: "pytorch",
    name: "PyTorch",
    category: "ai-ml",
    description: "An optimized tensor library for deep learning using GPUs and CPUs.",
    features: ["Dynamic Graphs", "Pythonic", "Research Friendly", "TorchServe"],
    useCases: ["Computer Vision", "Research Prototypes", "NLP"],
    proficiency: 85,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    details: "Preferred for research-heavy projects and computer vision tasks due to its flexibility.",
  },
  // Design
  {
    id: "figma",
    name: "Figma",
    category: "design",
    description: "The collaborative interface design tool.",
    features: ["Real-time Collaboration", "Prototyping", "Design Systems", "Dev Mode"],
    useCases: ["UI/UX Design", "Wireframing", "Prototyping"],
    proficiency: 100,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    details: "Our design team works exclusively in Figma, allowing seamless handoff to developers.",
  },
  // Marketing
  {
    id: "google-analytics",
    name: "Google Analytics 4",
    category: "marketing",
    description: "Web analytics service offered by Google that tracks and reports website traffic.",
    features: ["Event Tracking", "User Journey", "Conversion Analysis", "Integration"],
    useCases: ["Traffic Analysis", "ROI Measurement", "User Behavior"],
    proficiency: 95,
    logo: "https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg",
    details: "We implement advanced GA4 tracking to provide clients with actionable insights into user behavior.",
  },
];

/* ─────────────────────────────────────────────
   TECH DETAIL MODAL
───────────────────────────────────────────── */
function TechDetailModal({ tech, onClose }: { tech: any; onClose: () => void }) {
  if (!tech) return null;
  const CategoryIcon = techCategories.find((c) => c.id === tech.category)?.icon || Code2;
  const categoryColor =
    techCategories.find((c) => c.id === tech.category)?.color || "from-gray-500 to-gray-600";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
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
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-3 shadow-lg">
              <Image src={tech.logo} alt={tech.name} width={64} height={64} className="object-contain" />
            </div>
            <div className="mb-2 text-white">
              <div className="flex items-center gap-2 mb-1 opacity-90">
                <CategoryIcon size={16} />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  {techCategories.find((c) => c.id === tech.category)?.label}
                </span>
              </div>
              <h2 className="text-3xl font-bold">{tech.name}</h2>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <h3 className="text-lg font-semibold text-[#0f2a6b] mb-3 flex items-center gap-2">
              <BookOpen size={18} className="text-[#e8a020]" /> Overview
            </h3>
            <p className="text-[#4a5578] leading-relaxed">{tech.description}</p>
            <p className="text-[#4a5578] mt-3 leading-relaxed">{tech.details}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-[#0f2a6b] mb-3 flex items-center gap-2">
                <CheckCircle size={18} className="text-[#e8a020]" /> Key Features
              </h3>
              <ul className="space-y-2">
                {tech.features.map((feat: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-[#4a5578]">
                    <CheckCircle size={16} className="text-[#e8a020] mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Use Cases */}
            <div>
              <h3 className="text-lg font-semibold text-[#0f2a6b] mb-3 flex items-center gap-2">
                <Target size={18} className="text-[#e8a020]" /> Common Use Cases
              </h3>
              <div className="flex flex-wrap gap-2">
                {tech.useCases.map((use: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-[#f8f9fc] text-[#1a3fa0] rounded-lg text-sm font-medium border border-[#1a3fa0]/10"
                  >
                    {use}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action */}
          <div className="pt-6 border-t border-[#1a3fa0]/10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="flex-1 bg-[#0f2a6b] text-white py-3 rounded-xl font-semibold text-center hover:bg-[#1a3fa0] transition-colors flex items-center justify-center gap-2"
            >
              Build with {tech.name} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN TECHNOLOGIES PAGE
───────────────────────────────────────────── */
export default function TechnologiesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState<any>(null);
  const [isFilterSticky, setIsFilterSticky] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (filterRef.current) {
        const rect = filterRef.current.getBoundingClientRect();
        setIsFilterSticky(rect.top <= 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredTech = useMemo(() => {
    return technologies.filter((tech) => {
      const matchesCategory = activeCategory === "all" || tech.category === activeCategory;
      const matchesSearch =
        tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tech.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO SECTION ── */}
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        techCategories={techCategories}
      />

      {/* ── STICKY FILTERS ── */}
      <div
        ref={filterRef}
        className={`sticky top-18 bg-white z-40 transition-all duration-300 ${
          isFilterSticky
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#1a3fa0]/10 py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === "all"
                  ? "bg-[#0f2a6b] text-white shadow-lg shadow-[#1a3fa0]/20"
                  : "bg-white text-[#1a3fa0] border border-[#1a3fa0]/15 hover:border-[#1a3fa0]/40 hover:shadow-md"
              }`}
            >
              <Layers size={15} /> All
            </button>
            {techCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? `bg-[#0f2a6b] text-white shadow-lg shadow-[#1a3fa0]/20`
                    : "bg-white text-[#1a3fa0] border border-[#1a3fa0]/15 hover:border-[#1a3fa0]/40 hover:shadow-md"
                }`}
              >
                <cat.icon size={15} />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── TECH GRID ── */}
      <TechGrid
        filteredTech={filteredTech}
        setSelectedTech={setSelectedTech}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* ── TESTIMONIALS ── */}
      <TopScorers />

      {/* ── CTA SECTION ── */}
      <CTASection />
      {/* ── DETAIL MODAL ── */}
      <AnimatePresence>
        {selectedTech && <TechDetailModal tech={selectedTech} onClose={() => setSelectedTech(null)} />}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────── */
function HeroSection({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  techCategories,
}: {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  techCategories: any[];
}) {
  return (
    <>
      <style>{`
        .tech-hero-section {
          position: relative;
          overflow: hidden;
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .gold-word { color: #e8a020; }
      `}</style>

      <section className="tech-hero-section relative w-full">
        {/* Parallax Background - Same as services page */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl" />

          {/* Grid Pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.4) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-semibold text-[#0f2a6b] leading-[1.1] mb-6"
            >
              Our <span className="gold-word">Technology</span> Stack
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-[#4a5578] leading-relaxed mb-4 max-w-4xl mx-auto"
            >
              We leverage the most advanced, scalable, and secure technologies
              to build future-proof digital solutions. Explore our comprehensive
              stack below.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center justify-center gap-6 mb-6"
            >
              {[
                { icon: BadgeCheck, text: "ISO 9001:2015 Certified" },
                { icon: Trophy, text: "13+ Years Experience" },
                { icon: Users, text: "55+ Expert Engineers" },
                { icon: Globe, text: "25+ Countries Served" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-[#4a5578]">
                  <item.icon className="w-4 h-4 text-[#e8a020]" />
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-xl mx-auto relative"
            >
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4a5578]"
                size={20}
              />
              <input
                type="text"
                placeholder="Search technologies (e.g., React, AWS, Python)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-full border border-[#1a3fa0]/15 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1a3fa0] focus:border-transparent text-[#0f2a6b] placeholder:text-[#4a5578]/60 bg-white"
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-[#1a3fa0]/20 flex justify-center">
            <div className="w-1 h-2 bg-[#1a3fa0] rounded-full mt-2" />
          </div>
        </motion.div>
      </section>
    </>
  );
}

/* ─────────────────────────────────────────────
   TECH GRID
───────────────────────────────────────────── */
function TechGrid({
  filteredTech,
  setSelectedTech,
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery,
}: {
  filteredTech: any[];
  setSelectedTech: (tech: any) => void;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}) {
  return (
    <section className="py-10 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Our <span className="text-[#e8a020]">Tech Expertise</span>
          </h2>
          <p className="text-[#4a5578] max-w-2xl mx-auto">
            Each technology is carefully selected to deliver the best results
            for your project
          </p>
        </motion.div>

        {filteredTech.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl text-[#4a5578]">No technologies found matching your criteria.</p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 text-[#e8a020] font-semibold hover:underline"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredTech.map((tech) => {
                const catColor =
                  techCategories.find((c) => c.id === tech.category)?.color || "from-gray-500 to-gray-600";
                return (
                  <motion.div
                    key={tech.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -8 }}
                    onClick={() => setSelectedTech(tech)}
                    className="group bg-white rounded-2xl border border-[#1a3fa0]/08 shadow-sm hover:shadow-xl hover:border-[#e8a020]/30 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
                  >
                    {/* Card Header */}
                    <div className="p-5 flex items-start justify-between">
                      <div className="w-14 h-14 rounded-xl bg-[#f8f9fc] flex items-center justify-center p-2 group-hover:shadow-md transition-all">
                        <Image
                          src={tech.logo}
                          alt={tech.name}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <span
                        className={`px-2 py-1 rounded-md text-xs font-semibold text-white bg-gradient-to-r ${catColor}`}
                      >
                        {tech.proficiency}%
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="px-5 pb-5 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-[#0f2a6b] mb-2 group-hover:text-[#e8a020] transition-colors">
                        {tech.name}
                      </h3>
                      <p className="text-sm text-[#4a5578] line-clamp-2 mb-4 flex-1">
                        {tech.description}
                      </p>

                      <div className="pt-4 border-t border-[#1a3fa0]/08 flex items-center justify-between">
                        <span className="text-xs font-medium text-[#4a5578] uppercase tracking-wider">
                          {techCategories.find((c) => c.id === tech.category)?.label}
                        </span>
                        <span className="flex items-center text-[#e8a020] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                          Details <ArrowRight size={14} className="ml-1" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}