// components/careers/CareersClient.tsx
"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  Briefcase,
  Users,
  MapPin,
  Clock,
  DollarSign,
  Heart,
  GraduationCap,
  Coffee,
  Gift,
  Globe,
  Laptop,
  Target,
  TrendingUp,
  BarChart3,
  Code,
  Palette,
  Megaphone,
  Settings,
  Building2,
  FileText,
  Phone,
  Crown,
  Rocket,
  CheckCircle2,
  ChevronRight,
  Star,
  BadgeCheck,
  Trophy,
  Sparkles,
  Quote,
  Search,
  Filter,
  ChevronDown,
  X,
  Workflow,
  HelpCircle,
} from "lucide-react";
import { CTASection } from "@/components/pages/aboutus";

// Icon mapping
const iconMap: Record<string, any> = {
  Users, Briefcase, Building2, Globe, Heart, DollarSign, Coffee, 
  GraduationCap, Gift, Laptop, Target, TrendingUp, BarChart3, Code,
  Palette, Megaphone, Settings, FileText, Phone, Crown, Rocket,
};

function getIcon(iconName: string) {
  return iconMap[iconName] || Code;
}

interface CareersClientProps {
  initialData: {
    statsData: any[];
    benefits: any[];
    departments: any[];
    openPositions: any[];
    testimonials: any[];
    processSteps: any[];
    faqs: any[];
    stats: {
      totalOpenPositions: number;
      totalDepartments: number;
      totalBenefits: number;
      teamSize: number;
      yearsExperience: number;
      countriesServed: number;
    };
  };
}

export default function CareersClient({ initialData }: CareersClientProps) {
  const { statsData, benefits, departments, openPositions, testimonials, processSteps, faqs, stats } = initialData;
  
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [showJobModal, setShowJobModal] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const filteredPositions = openPositions.filter((position) => {
    const matchesDepartment = selectedDepartment === "All" || position.department === selectedDepartment;
    const matchesSearch =
      position.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      position.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection heroRef={heroRef} heroOpacity={heroOpacity} heroScale={heroScale} heroY={heroY} stats={stats} />

      {/* Stats Section */}
      <StatsSection statsData={statsData} />

      {/* Benefits Section */}
      <BenefitsSection benefits={benefits} />

      {/* Departments Section */}
      <DepartmentsSection departments={departments} setSelectedDepartment={setSelectedDepartment} />

      {/* Open Positions */}
      <OpenPositionsSection
        filteredPositions={filteredPositions}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
        isFilterOpen={isFilterOpen}
        setIsFilterOpen={setIsFilterOpen}
        departments={departments}
        setSelectedJob={setSelectedJob}
        setShowJobModal={setShowJobModal}
      />

      {/* Job Modal */}
      <JobModal
        showJobModal={showJobModal}
        setShowJobModal={setShowJobModal}
        selectedJob={selectedJob}
        openPositions={openPositions}
      />

      {/* Process Section */}
      <ProcessSection processSteps={processSteps} />

      {/* Testimonials */}
      <TestimonialsSection
        testimonials={testimonials}
        activeTestimonial={activeTestimonial}
        setActiveTestimonial={setActiveTestimonial}
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} faqOpen={faqOpen} setFaqOpen={setFaqOpen} />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

// Hero Section
function HeroSection({ heroRef, heroOpacity, heroScale, heroY, stats }: any) {
  return (
    <>
      <style>{`
        .careers-hero-section {
          position: relative;
          overflow: hidden;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .gold-word { color: #e8a020; }
      `}</style>

      <section ref={heroRef} className="careers-hero-section relative w-full">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale, y: heroY }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.4) 1px, transparent 0)`, backgroundSize: "40px 40px" }} />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-6"
            >
              <Sparkles size={14} className="text-[#e8a020]" />
              We're Hiring • {stats.totalOpenPositions} Open Positions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl font-semibold text-[#0f2a6b] leading-[1.1] mb-6"
            >
              Shape the Future <span className="gold-word">With Us</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-[#4a5578] leading-relaxed mb-8 max-w-2xl mx-auto"
            >
              Join a team of {stats.teamSize}+ passionate innovators building technology that matters.
              We're looking for talented individuals who want to make a difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="#openings"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1a3fa0] to-[#2952cc] text-white font-semibold shadow-lg shadow-[#1a3fa0]/25 hover:shadow-[#1a3fa0]/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                View Openings
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#culture"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#1a3fa0] border-2 border-[#1a3fa0]/20 font-semibold hover:border-[#1a3fa0]/40 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                Learn About Culture
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-6"
            >
              {[
                { icon: BadgeCheck, text: "ISO 9001:2015 Certified" },
                { icon: Trophy, text: `${stats.yearsExperience}+ Years Experience` },
                { icon: Users, text: `${stats.teamSize}+ Expert Engineers` },
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

// Stats Section
function StatsSection({ statsData }: { statsData: any[] }) {
  return (
    <section className="py-12 bg-[#f8f9fc] border-y border-[#1a3fa0]/08">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-[#0f2a6b] mb-1">
                {stat.number}
                <span className="text-[#e8a020]">{stat.suffix}</span>
              </div>
              <div className="text-sm font-semibold text-[#4a5578] mb-0.5">{stat.label}</div>
              <div className="text-xs text-[#4a5578]/60">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Benefits Section
function BenefitsSection({ benefits }: { benefits: any[] }) {
  return (
    <section id="culture" className="py-20 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
            <Heart size={14} className="text-[#e8a020]" /> Why Join Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Benefits That <span className="text-[#e8a020]">Matter</span>
          </h2>
          <p className="text-[#4a5578] max-w-2xl mx-auto">
            We take care of our team so you can focus on doing your best work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((category, idx) => {
            const Icon = getIcon(category.icon);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group bg-white p-6 rounded-2xl border border-[#1a3fa0]/08 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-11 h-11 ${category.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 ${category.textColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-[#0f2a6b]">{category.category}</h3>
                </div>
                <div className="space-y-2.5">
                  {category.items.map((item: any, i: number) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-4 h-4 ${category.textColor} mt-0.5 flex-shrink-0`} />
                      <div>
                        <p className="text-sm font-medium text-[#0f2a6b]">{item.title}</p>
                        <p className="text-xs text-[#4a5578]">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Departments Section
function DepartmentsSection({ departments, setSelectedDepartment }: { departments: any[]; setSelectedDepartment: (dept: string) => void }) {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-[#f8f9fc] border-t border-[#1a3fa0]/08">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
            <Building2 size={14} className="text-[#e8a020]" /> Our Teams
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Explore <span className="text-[#e8a020]">Departments</span>
          </h2>
          <p className="text-[#4a5578] max-w-2xl mx-auto">Find your place in one of our innovative teams</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {departments.map((dept, idx) => {
            const Icon = getIcon(dept.icon);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer bg-white p-6 rounded-2xl border border-[#1a3fa0]/08 hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  setSelectedDepartment(dept.name);
                  document.getElementById("openings")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${dept.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0f2a6b] mb-1.5">{dept.name}</h3>
                <p className="text-sm text-[#4a5578] mb-3 line-clamp-2">{dept.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#4a5578]">{dept.openPositions} open positions</span>
                  <ChevronRight className="w-5 h-5 text-[#4a5578] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Open Positions Section
function OpenPositionsSection({
  filteredPositions, searchQuery, setSearchQuery, selectedDepartment, setSelectedDepartment,
  isFilterOpen, setIsFilterOpen, departments, setSelectedJob, setShowJobModal,
}: any) {
  return (
    <section id="openings" className="py-20 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
            <Briefcase size={14} className="text-[#e8a020]" /> Join Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Open <span className="text-[#e8a020]">Positions</span>
          </h2>
          <p className="text-[#4a5578] max-w-2xl mx-auto">Find the role that matches your skills and aspirations</p>
        </motion.div>

        <div className="mb-6 flex flex-col md:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#4a5578] w-4 h-4" />
            <input
              type="text"
              placeholder="Search positions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#1a3fa0]/10 focus:outline-none focus:ring-2 focus:ring-[#1a3fa0]/20 focus:border-[#1a3fa0] text-[#0f2a6b] bg-[#f8f9fc]"
            />
          </div>
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full md:w-auto px-5 py-3 bg-[#f8f9fc] border border-[#1a3fa0]/10 rounded-xl flex items-center gap-2 hover:border-[#1a3fa0]/30 transition-colors text-[#0f2a6b]"
            >
              <Filter className="w-4 h-4 text-[#4a5578]" />
              <span className="text-sm">{selectedDepartment === "All" ? "All Departments" : selectedDepartment}</span>
              <ChevronDown className={`w-4 h-4 text-[#4a5578] transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-[#1a3fa0]/10 z-20"
                >
                  <div className="p-2">
                    <button onClick={() => { setSelectedDepartment("All"); setIsFilterOpen(false); }} className={`w-full text-left px-4 py-2 rounded-lg text-sm ${selectedDepartment === "All" ? "bg-[#f8f9fc] text-[#0f2a6b] font-semibold" : "text-[#4a5578] hover:bg-[#f8f9fc]"}`}>
                      All Departments
                    </button>
                    {departments.map((dept: any) => (
                      <button key={dept.name} onClick={() => { setSelectedDepartment(dept.name); setIsFilterOpen(false); }} className={`w-full text-left px-4 py-2 rounded-lg text-sm flex items-center justify-between ${selectedDepartment === dept.name ? "bg-[#f8f9fc] text-[#0f2a6b] font-semibold" : "text-[#4a5578] hover:bg-[#f8f9fc]"}`}>
                        <span>{dept.name}</span>
                        <span className="text-xs text-[#4a5578]/60">{dept.openPositions}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {filteredPositions.length === 0 ? (
          <div className="text-center py-16">
            <Briefcase className="w-16 h-16 text-[#4a5578]/30 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#0f2a6b] mb-2">No positions found</h3>
            <p className="text-[#4a5578]">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-5">
            {filteredPositions.map((position: any, idx: number) => {
              const Icon = getIcon(position.icon);
              return (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer bg-white p-6 rounded-2xl border border-[#1a3fa0]/08 hover:shadow-xl transition-all duration-300"
                  onClick={() => { setSelectedJob(position.id); setShowJobModal(true); }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-11 h-11 bg-gradient-to-br ${position.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-[#4a5578]/60">{position.posted}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0f2a6b] mb-0.5 group-hover:text-[#e8a020] transition-colors">
                    {position.title}
                  </h3>
                  <p className="text-sm text-[#4a5578] mb-3">{position.department}</p>
                  <p className="text-sm text-[#4a5578] mb-3 line-clamp-2">{position.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="flex items-center gap-1.5 text-xs text-[#4a5578]"><MapPin className="w-3.5 h-3.5 text-[#4a5578]/60" />{position.location}</div>
                    <div className="flex items-center gap-1.5 text-xs text-[#4a5578]"><Clock className="w-3.5 h-3.5 text-[#4a5578]/60" />{position.type}</div>
                    <div className="flex items-center gap-1.5 text-xs text-[#4a5578]"><Briefcase className="w-3.5 h-3.5 text-[#4a5578]/60" />{position.experience}</div>
                    <div className="flex items-center gap-1.5 text-xs text-[#4a5578]"><DollarSign className="w-3.5 h-3.5 text-[#4a5578]/60" />{position.salary}</div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {position.requirements.slice(0, 2).map((req: string, i: number) => (
                      <span key={i} className="px-2 py-0.5 bg-[#f8f9fc] rounded-md text-xs text-[#4a5578] border border-[#1a3fa0]/05">
                        {req.split(" ").slice(0, 3).join(" ")}...
                      </span>
                    ))}
                    <span className="px-2 py-0.5 bg-[#e8a020]/10 text-[#e8a020] rounded-md text-xs font-medium">View Details</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

// Job Modal
function JobModal({ showJobModal, setShowJobModal, selectedJob, openPositions }: any) {
  const position = openPositions.find((p: any) => p.id === selectedJob);
  if (!position) return null;
  const Icon = getIcon(position.icon);

  return (
    <AnimatePresence>
      {showJobModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowJobModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              <button onClick={() => setShowJobModal(false)} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#f8f9fc] flex items-center justify-center hover:bg-[#f8f9fc]/80 transition-colors border border-[#1a3fa0]/10">
                <X className="w-4 h-4 text-[#4a5578]" />
              </button>
              <div className="flex items-start gap-4 mb-5">
                <div className={`w-14 h-14 bg-gradient-to-br ${position.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#0f2a6b] mb-0.5">{position.title}</h2>
                  <p className="text-[#4a5578]">{position.department}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 p-4 bg-[#f8f9fc] rounded-xl mb-5">
                <div className="flex items-center gap-2 text-sm text-[#4a5578]"><MapPin className="w-4 h-4 text-[#4a5578]/60" />{position.location}</div>
                <div className="flex items-center gap-2 text-sm text-[#4a5578]"><Clock className="w-4 h-4 text-[#4a5578]/60" />{position.type}</div>
                <div className="flex items-center gap-2 text-sm text-[#4a5578]"><Briefcase className="w-4 h-4 text-[#4a5578]/60" />{position.experience}</div>
                <div className="flex items-center gap-2 text-sm text-[#4a5578]"><DollarSign className="w-4 h-4 text-[#4a5578]/60" />{position.salary}</div>
              </div>
              <div className="mb-5">
                <h3 className="text-lg font-bold text-[#0f2a6b] mb-2">About the Role</h3>
                <p className="text-[#4a5578] leading-relaxed">{position.description}</p>
              </div>
              <div className="mb-5">
                <h3 className="text-lg font-bold text-[#0f2a6b] mb-2">Requirements</h3>
                <ul className="space-y-1.5">
                  {position.requirements.map((req: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-[#4a5578] text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#e8a020] mt-0.5 flex-shrink-0" />{req}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-5">
                <h3 className="text-lg font-bold text-[#0f2a6b] mb-2">Responsibilities</h3>
                <ul className="space-y-1.5">
                  {position.responsibilities.map((resp: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-[#4a5578] text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#1a3fa0] mt-0.5 flex-shrink-0" />{resp}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={`/careers/apply/${position.id}`}
                className="block w-full py-3.5 bg-gradient-to-r from-[#1a3fa0] to-[#2952cc] text-white font-bold rounded-xl text-center hover:shadow-lg hover:shadow-[#1a3fa0]/25 transition-all hover:-translate-y-0.5"
              >
                Apply for this Position
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Process Section
function ProcessSection({ processSteps }: { processSteps: any[] }) {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-[#0f2a6b] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#e8a020]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#2952cc]/10 blur-3xl" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-widest text-[#e8a020] mb-4">
            <Workflow size={14} /> Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">How We <span className="text-[#e8a020]">Hire</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">A transparent and thoughtful process designed to find the best fit</p>
        </motion.div>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {processSteps.map((step, idx) => {
            const Icon = getIcon(step.icon);
            return (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <div className="text-4xl font-bold text-white/8 absolute top-3 right-3 group-hover:text-[#e8a020]/15 transition-colors">{step.step}</div>
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-[#1a3fa0] to-[#2952cc] rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">{step.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-2">{step.description}</p>
                <span className="text-xs text-[#e8a020] font-medium">{step.duration}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection({ testimonials, activeTestimonial, setActiveTestimonial }: any) {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
            <Users size={14} className="text-[#e8a020]" /> Voices
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">What Our <span className="text-[#e8a020]">Team Says</span></h2>
          <p className="text-[#4a5578] max-w-2xl mx-auto">Real stories from the people who make it happen</p>
        </motion.div>
        <div className="relative overflow-hidden">
          <motion.div animate={{ x: `-${activeTestimonial * 100}%` }} transition={{ duration: 0.5, ease: "easeInOut" }} className="flex">
            {testimonials.map((testimonial: any, idx: number) => (
              <div key={idx} className="w-full flex-shrink-0 px-2">
                <div className="bg-[#f8f9fc] p-8 rounded-2xl border border-[#1a3fa0]/08">
                  <Quote className="w-10 h-10 text-[#e8a020]/30 mb-4" />
                  <p className="text-lg text-[#4a5578] leading-relaxed mb-5">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#e8a020]/20">
                      <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0f2a6b]">{testimonial.name}</h4>
                      <p className="text-sm text-[#4a5578]">{testimonial.role}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#e8a020] text-[#e8a020]" />
                          ))}
                        </div>
                        <span className="text-xs text-[#4a5578]/60">Joined {testimonial.joined}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_: any, idx: number) => (
            <button key={idx} onClick={() => setActiveTestimonial(idx)} className={`transition-all duration-300 rounded-full ${activeTestimonial === idx ? "w-8 h-2 bg-[#e8a020]" : "w-2 h-2 bg-[#1a3fa0]/20 hover:bg-[#1a3fa0]/40"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection({ faqs, faqOpen, setFaqOpen }: any) {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-[#f8f9fc] border-t border-[#1a3fa0]/08">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
            <HelpCircle size={14} className="text-[#e8a020]" /> Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">Frequently Asked <span className="text-[#e8a020]">Questions</span></h2>
          <p className="text-[#4a5578]">Everything you need to know about working with us</p>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((faq: any, idx: number) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="bg-white rounded-2xl border border-[#1a3fa0]/08 hover:shadow-md transition-shadow overflow-hidden">
              <button onClick={() => setFaqOpen(faqOpen === idx ? null : idx)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#f8f9fc] transition-colors">
                <span className="font-semibold text-[#0f2a6b]">{faq.question}</span>
                <ChevronRight className={`w-5 h-5 text-[#1a3fa0] transition-transform duration-300 ${faqOpen === idx ? "rotate-90" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${faqOpen === idx ? "max-h-40" : "max-h-0"}`}>
                <div className="px-6 pb-4 text-sm text-[#4a5578] leading-relaxed">{faq.answer}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}