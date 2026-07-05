"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  ExternalLink,
  Filter,
  Search,
  Code2,
  Smartphone,
  Megaphone,
  Palette,
  TrendingUp,
  Users,
  Globe,
  Zap,
  ChevronRight,
  Award,
  Star,
  Briefcase,
  CheckCircle2,
  Sparkles,
  Rocket,
  Shield,
  Clock,
  BadgeCheck,
  Trophy,
  ArrowUpRight,
  Calendar,
  Layers,
  Play,
  Quote,
  ChevronDown,
} from "lucide-react";
import { CTA } from "@/components/sections/CTA";
import { StatsSection } from "@/components/pages/aboutus";

/* ─────────────────────────────────────────────
   BRAND COLORS (matching services page)
   Primary: #0f2a6b / #1a3fa0 / #2952cc (deep navy)
   Accent:  #e8a020 / #f0b832 (gold)
   Text:    #4a5578 (body), #0f2a6b (headings)
   BG:      #f8f9fc / #f4f6fb (light sections)
   Cards:   white with border-[#1a3fa0]/10
───────────────────────────────────────────── */

const categories = [
  { id: "all", label: "All Projects", icon: Filter },
  { id: "fintech", label: "FinTech", icon: TrendingUp },
  { id: "healthcare", label: "Healthcare", icon: Users },
  { id: "ecommerce", label: "E-Commerce", icon: Globe },
  { id: "education", label: "Education", icon: Zap },
  { id: "enterprise", label: "Enterprise", icon: Code2 },
];

const projects = [
  {
    slug: "nexbank-digital",
    title: "NexBank Digital Transformation",
    category: "fintech",
    serviceType: "web",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    shortDesc:
      "A secure, high-performance banking portal serving 2M+ users with 99.99% uptime.",
    tags: ["React", "Node.js", "AWS", "Security"],
    results: ["40% Faster Load Time", "99.99% Uptime", "+25% User Adoption"],
    featured: true,
    year: "2023",
    client: "NexBank Corp",
  },
  {
    slug: "healthplus-app",
    title: "HealthPlus Telemedicine App",
    category: "healthcare",
    serviceType: "app",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    shortDesc:
      "Cross-platform telemedicine app connecting patients with doctors instantly.",
    tags: ["Flutter", "Firebase", "WebRTC", "HIPAA"],
    results: ["500k+ Downloads", "4.9 App Store Rating", "Reduced Wait Times by 60%"],
    featured: true,
    year: "2024",
    client: "HealthPlus Inc",
  },
  {
    slug: "stylehub-ecommerce",
    title: "StyleHub Fashion Marketplace",
    category: "ecommerce",
    serviceType: "web",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    shortDesc:
      "Headless e-commerce solution with AI-driven product recommendations.",
    tags: ["Next.js", "Shopify Headless", "Algolia", "Stripe"],
    results: ["+150% Conversion Rate", "$2M GMV in Q1", "Sub-second Search"],
    featured: false,
    year: "2023",
    client: "ShopWave Retail",
  },
  {
    slug: "learnify-lms",
    title: "Learnify LMS Platform",
    category: "education",
    serviceType: "web",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
    shortDesc:
      "Scalable Learning Management System for global universities.",
    tags: ["Vue.js", "Python", "PostgreSQL", "Docker"],
    results: ["50+ Universities", "1M+ Students", "99.9% Availability"],
    featured: false,
    year: "2022",
    client: "EduTech Global",
  },
  {
    slug: "greenearth-campaign",
    title: "GreenEarth Awareness Campaign",
    category: "enterprise",
    serviceType: "marketing",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
    shortDesc:
      "Global digital marketing campaign driving environmental awareness.",
    tags: ["SEO", "PPC", "Content", "Social Media"],
    results: ["10M+ Impressions", "+300% Traffic", "Viral Social Reach"],
    featured: false,
    year: "2024",
    client: "GreenEarth Org",
  },
  {
    slug: "corp-identity-redesign",
    title: "Apex Corp Brand Redesign",
    category: "enterprise",
    serviceType: "design",
    image:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1200&q=80",
    shortDesc:
      "Complete visual identity overhaul for a Fortune 500 company.",
    tags: ["Branding", "UI/UX", "Figma", "Strategy"],
    results: ["Brand Value +40%", "Consistent Global Identity", "Award Winning"],
    featured: false,
    year: "2023",
    client: "Apex Corp",
  },
];

/* ─────────────────────────────────────────────
   MAIN PORTFOLIO PAGE
───────────────────────────────────────────── */
export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [isFilterSticky, setIsFilterSticky] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO SECTION ── */}
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        categories={categories}
        featuredProjects={featuredProjects}
      />

      {/* ── STATS SECTION ── */}

      {/* ── STICKY FILTERS ── */}
      <div
        ref={filterRef}
        className={`sticky !top-18 z-99 bg-white transition-all duration-300 ${isFilterSticky
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#1a3fa0]/10 py-3"
            : "bg-transparent py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${activeCategory === cat.id
                    ? "bg-[#0f2a6b] text-white shadow-lg shadow-[#1a3fa0]/20"
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

      {/* ── PROJECTS GRID ── */}
      <ProjectsGrid
        filteredProjects={filteredProjects}
        hoveredProject={hoveredProject}
        setHoveredProject={setHoveredProject}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        categories={categories}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <StatsSection />

      {/* ── CTA SECTION (same as services page) ── */}
      <CTASection />
    </div>
  );
}

/* ─────────────────────────────────────────────
   HERO SECTION (matching services page)
───────────────────────────────────────────── */
function HeroSection({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  categories,
  featuredProjects,
}: {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  categories: any[];
  featuredProjects: any[];
}) {
  return (
    <>
      <style>{`
        .portfolio-hero-section {
          position: relative;
          overflow: hidden;
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .portfolio-hero-tag {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 20px; border-radius: 50px;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(10px);
          border: 1.5px solid rgba(26,63,160,0.15);
          box-shadow: 0 2px 10px rgba(26,63,160,0.07);
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: #1a3fa0;
        }
        .gold-word { color: #e8a020; }
        @keyframes portfolio-pulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(232,160,32,0.25); }
          50%     { box-shadow: 0 0 0 7px rgba(232,160,32,0.08); }
        }
        .portfolio-hero-tag-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #e8a020;
          box-shadow: 0 0 0 3px rgba(232,160,32,0.25);
          animation: portfolio-pulse 2s ease infinite;
        }
      `}</style>

      <section className="portfolio-hero-section relative w-full">
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
              Building Digital {" "}
              <span className="gold-word"> Success Stories</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-[#4a5578] leading-relaxed mb-4 max-w-4xl mx-auto"
            >
              Explore our portfolio of 650+ successful projects. From startups
              to enterprises, we deliver excellence across industries with
              <strong className="font-semibold text-[#0f2a6b]">
                {" "}
                98% client satisfaction
              </strong>
              .
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
                placeholder="Search projects by name, technology, or industry..."
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
   PROJECTS GRID
───────────────────────────────────────────── */
function ProjectsGrid({
  filteredProjects,
  hoveredProject,
  setHoveredProject,
  activeCategory,
  setActiveCategory,
  categories,
  searchQuery,
  setSearchQuery,
}: {
  filteredProjects: any[];
  hoveredProject: string | null;
  setHoveredProject: (id: string | null) => void;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  categories: any[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}) {
  return (
    <section className="py-10 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Featured <span className="text-[#e8a020]">Projects</span>
          </h2>
          <p className="text-[#4a5578] max-w-2xl mx-auto">
            Each project showcases our commitment to quality, innovation, and
            measurable results
          </p>
        </motion.div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl text-[#4a5578]">
              No projects found matching your criteria.
            </p>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.slug}
                  transition={{ delay: idx * 0.01 }}
                  whileHover={{ y: -8 }}
                  onMouseEnter={() => setHoveredProject(project.slug)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#1a3fa0]/08 hover:shadow-xl transition-all duration-300"
                >
                  <Link href={`/portfolio/${project.slug}`} className="block">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {project.tags.slice(0, 3).map((tag: string, i: number) => (
                              <span
                                key={i}
                                className="px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-md font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <span className="inline-flex items-center gap-1.5 text-white font-semibold text-sm hover:text-[#e8a020] transition-colors">
                            View Case Study <ArrowUpRight size={14} />
                          </span>
                        </div>
                      </div>

                      {project.featured && (
                        <div className="absolute top-3 right-3 px-3 py-1 bg-[#e8a020] text-[#0f2a6b] text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                          <Star size={12} fill="currentColor" /> Featured
                        </div>
                      )}

                      {/* Category Badge */}
                      <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold rounded-full flex items-center gap-1.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${project.category === "fintech"
                              ? "bg-green-400"
                              : project.category === "healthcare"
                                ? "bg-red-400"
                                : project.category === "ecommerce"
                                  ? "bg-blue-400"
                                  : "bg-purple-400"
                            }`}
                        />
                        {project.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-[#4a5578] uppercase tracking-wider">
                          {project.client}
                        </span>
                        <span className="text-[#4a5578]/30">•</span>
                        <span className="text-xs text-[#4a5578]/70 flex items-center gap-1">
                          <Calendar size={12} /> {project.year}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[#0f2a6b] mb-2 group-hover:text-[#e8a020] transition-colors line-clamp-1">
                        {project.title}
                      </h3>

                      <p className="text-sm text-[#4a5578] line-clamp-2 mb-3">
                        {project.shortDesc}
                      </p>

                      {/* Results Pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.results.slice(0, 2).map((result: string, i: number) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 bg-[#f8f9fc] text-[#1a3fa0] text-xs font-medium rounded-full border border-[#1a3fa0]/08"
                          >
                            {result}
                          </span>
                        ))}
                        {project.results.length > 2 && (
                          <span className="px-2.5 py-1 bg-[#f8f9fc] text-[#4a5578] text-xs font-medium rounded-full border border-[#1a3fa0]/08">
                            +{project.results.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CTA SECTION (matching services page)
───────────────────────────────────────────── */
function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a6b]/95 to-[#0f2a6b]/90" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
            Ready to Build Something <span className="text-[#e8a020]">Great?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Partner with Digitonix, the leading IT company in Jaipur, for world-class web development, mobile apps, and digital marketing solutions. Join 500+ businesses achieving measurable growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#e8a020] to-[#f0b832] text-[#0f2a6b] font-semibold text-base shadow-lg shadow-[#e8a020]/30 hover:shadow-[#e8a020]/50 transition-all duration-300 group"
              >
                Start Your Project
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 font-semibold text-base hover:bg-white/20 transition-all duration-300"
              >
                View Portfolio
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-[#e8a020]" />
                <span>hello@digitonix.in</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-[#e8a020]" />
                <span>+91 9887120429</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-[#e8a020]" />
                <span>Global Offices</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Missing imports
import { Mail, Phone, MapPin } from "lucide-react";