// components/portfolio/PortfolioClient.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import {
  ArrowRight,
  Search,
  BadgeCheck,
  Trophy,
  Users,
  Globe,
  Star,
  Calendar,
  ArrowUpRight,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Filter,
  TrendingUp,
  Zap,
  Code2,
  Sparkles,
} from "lucide-react";
import { StatsSection } from "@/components/pages/aboutus";

interface Project {
  slug: string;
  title: string;
  category: string;
  serviceType: string;
  image: string;
  shortDesc: string;
  tags: string[];
  results: string[];
  featured: boolean;
  year: string;
  client: string;
  longDesc?: string;
  challenge?: string;
  solution?: string;
  techStack?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

interface Category {
  id: string;
  label: string;
  icon: string;
}

interface PortfolioClientProps {
  initialData: {
    categories: Category[];
    projects: Project[];
    stats: {
      totalProjects: number;
      featuredCount: number;
      categoriesCount: number;
      technologiesCount: number;
      industriesCount: number;
      clientSatisfaction: number;
      yearsExperience: number;
      expertsCount: number;
      countriesServed: number;
    };
  };
}

// Icon mapping
const iconMap: Record<string, any> = {
  Filter,
  TrendingUp,
  Users,
  Globe,
  Zap,
  Code2,
};

function getIcon(iconName: string) {
  return iconMap[iconName] || Filter;
}

export default function PortfolioClient({ initialData }: PortfolioClientProps) {
  const { categories, projects, stats } = initialData;
  
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [isFilterSticky, setIsFilterSticky] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === "all" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        categories={categories}
        stats={stats}
      />

      {/* Sticky Filters */}
      <div
        ref={filterRef}
        className={`sticky !top-18 z-99 bg-white transition-all duration-300 ${
          isFilterSticky
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#1a3fa0]/10 py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => {
              const Icon = getIcon(cat.icon);
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === cat.id
                      ? "bg-[#0f2a6b] text-white shadow-lg shadow-[#1a3fa0]/20"
                      : "bg-white text-[#1a3fa0] border border-[#1a3fa0]/15 hover:border-[#1a3fa0]/40 hover:shadow-md"
                  }`}
                >
                  <Icon size={15} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <ProjectsGrid
        filteredProjects={filteredProjects}
        hoveredProject={hoveredProject}
        setHoveredProject={setHoveredProject}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        categories={categories}
      />

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

// Hero Section
function HeroSection({
  searchQuery,
  setSearchQuery,
  categories,
  stats,
}: {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  categories: Category[];
  stats: PortfolioClientProps["initialData"]["stats"];
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
        .gold-word { color: #e8a020; }
      `}</style>

      <section className="portfolio-hero-section relative w-full">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl" />

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
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8a020]/10 border border-[#e8a020]/30 text-[#e8a020] text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <Sparkles size={14} className="text-[#e8a020]" />
              {stats.totalProjects}+ Projects Delivered
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-semibold text-[#0f2a6b] leading-[1.1] mb-6"
            >
              Building Digital{" "}
              <span className="gold-word">Success Stories</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-[#4a5578] leading-relaxed mb-4 max-w-4xl mx-auto"
            >
              Explore our portfolio of {stats.totalProjects}+ successful projects. From startups
              to enterprises, we deliver excellence across industries with
              <strong className="font-semibold text-[#0f2a6b]">
                {" "}
                {stats.clientSatisfaction}% client satisfaction
              </strong>
              .
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center justify-center gap-6 mb-6"
            >
              {[
                { icon: BadgeCheck, text: "ISO 9001:2015 Certified" },
                { icon: Trophy, text: `${stats.yearsExperience}+ Years Experience` },
                { icon: Users, text: `${stats.expertsCount}+ Expert Engineers` },
                { icon: Globe, text: `${stats.countriesServed}+ Countries Served` },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-2 text-sm text-[#4a5578]">
                    <Icon className="w-4 h-4 text-[#e8a020]" />
                    <span className="font-medium">{item.text}</span>
                  </div>
                );
              })}
            </motion.div>

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

// Projects Grid
function ProjectsGrid({
  filteredProjects,
  hoveredProject,
  setHoveredProject,
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery,
  categories,
}: {
  filteredProjects: Project[];
  hoveredProject: string | null;
  setHoveredProject: (id: string | null) => void;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  categories: Category[];
}) {
  return (
    <section className="py-10 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Featured <span className="text-[#e8a020]">Projects</span>
          </h2>
          <p className="text-[#4a5578] max-w-2xl mx-auto">
            Each project showcases our commitment to quality, innovation, and measurable results
          </p>
        </motion.div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl text-[#4a5578]">No projects found matching your criteria.</p>
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -8 }}
                  onMouseEnter={() => setHoveredProject(project.slug)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#1a3fa0]/08 hover:shadow-xl transition-all duration-300"
                >
                  <Link href={`/portfolio/${project.slug}`} className="block">
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
                            {project.tags.slice(0, 3).map((tag, i) => (
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

                      <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold rounded-full flex items-center gap-1.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            project.category === "fintech"
                              ? "bg-green-400"
                              : project.category === "healthcare"
                              ? "bg-red-400"
                              : project.category === "ecommerce"
                              ? "bg-blue-400"
                              : "bg-purple-400"
                          }`}
                        />
                        {categories.find(c => c.id === project.category)?.label || project.category}
                      </div>
                    </div>

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

                      <div className="flex flex-wrap gap-1.5">
                        {project.results.slice(0, 2).map((result, i) => (
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

// CTA Section
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