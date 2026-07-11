// components/portfolio/PortfolioDetailClient.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  Share2,
  Sparkles,
  Calendar,
  ArrowRight,
  Camera,
  Briefcase,
  Lightbulb,
  CheckCircle,
  Layers,
  Code2,
  Target,
  PenTool,
  Shield,
  Rocket,
  Heart,
  Workflow,
  Quote,
  TrendingUp,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { CTA } from "@/components/sections/CTA";

interface ProjectData {
  slug: string;
  title: string;
  category: string;
  serviceType: string;
  client: string;
  year: string;
  duration: string;
  teamSize: string;
  image: string;
  gallery: string[];
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  techStack: string[];
  services: string[];
  testimonial: {
    text: string;
    author: string;
    role: string;
  };
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
}

interface PortfolioDetailClientProps {
  project: ProjectData;
  relatedProjects: ProjectData[];
}

export default function PortfolioDetailClient({ project, relatedProjects }: PortfolioDetailClientProps) {
  const [activeImg, setActiveImg] = useState<string>(project.image);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const openGallery = (index: number) => {
    setGalleryIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const nextImage = () => {
    setGalleryIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setGalleryIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      {/* <NavBar project={project} /> */}

      {/* Hero Section */}
      <HeroSection project={project} />

      {/* Project Details */}
      <DetailsSection project={project} />

      {/* Gallery */}
      <GallerySection
        project={project}
        activeImg={activeImg}
        setActiveImg={setActiveImg}
        openGallery={openGallery}
      />

      {/* Key Metrics */}
      <MetricsSection project={project} />

      {/* Process & Approach */}
      <ApproachSection />

      {/* Testimonial */}
      <TestimonialSection project={project} />

      {/* Related Projects */}
      <RelatedProjects projects={relatedProjects} />

      {/* CTA */}
      <CTA
        title="Ready to Build Your Success Story?"
        description="Join our list of satisfied clients. Let's discuss how we can help you achieve your business goals."
        ctaText="Get in Touch"
        ctaLink="/contact"
      />

      {/* Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <GalleryModal
            images={project.gallery}
            currentIndex={galleryIndex}
            onClose={closeGallery}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// Navigation
function NavBar({ project }: { project: ProjectData }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#1a3fa0]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/portfolio"
          className="flex items-center gap-2 text-[#4a5578] hover:text-[#0f2a6b] transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Portfolio</span>
        </Link>

        <button
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: project.title,
                text: `Check out this project: ${project.title}`,
                url: window.location.href,
              });
            }
          }}
          className="p-2.5 rounded-full text-[#4a5578] hover:text-[#0f2a6b] hover:bg-[#1a3fa0]/5 transition-all"
          aria-label="Share project"
        >
          <Share2 size={18} />
        </button>
      </div>
    </div>
  );
}

// Hero Section
function HeroSection({ project }: { project: ProjectData }) {
  return (
    <section className="relative min-h-[50vh] mt-20 w-full overflow-hidden bg-[#0f2a6b]">
      <div className="absolute inset-0">
        <Image src={project.image} alt={project.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[50vh] flex items-end pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#e8a020] text-[#0f2a6b] text-xs font-bold rounded-full uppercase tracking-wider">
              <Sparkles size={12} /> Featured Project
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold rounded-full uppercase tracking-wider border border-white/10">
              <Calendar size={12} /> {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold rounded-full uppercase tracking-wider border border-white/10">
              <Calendar size={12} /> {project.year}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-[1.1] mb-3 max-w-4xl">
            {project.title}
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mb-6 leading-relaxed">
            {project.challenge.substring(0, 120)}...
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#details"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#e8a020] text-[#0f2a6b] font-semibold rounded-full hover:bg-[#f0b832] transition-all shadow-lg shadow-[#e8a020]/25 hover:shadow-[#e8a020]/40 hover:-translate-y-0.5"
            >
              View Details <ArrowRight size={16} />
            </Link>
            <button
              onClick={() => {
                const gallery = document.getElementById("gallery");
                gallery?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all"
            >
              <Camera size={16} /> View Gallery
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Details Section
function DetailsSection({ project }: { project: ProjectData }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 25 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  });

  return (
    <section id="details" ref={ref} className="relative py-20 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f8f9fc] border border-[#1a3fa0]/10 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
                <Briefcase size={14} /> The Challenge
              </span>
              <h2 className="text-3xl font-semibold text-[#0f2a6b] mb-4">Understanding the Challenge</h2>
              <p className="text-lg text-[#4a5578] leading-relaxed">{project.challenge}</p>
            </motion.div>

            <motion.div {...fadeUp(0.1)}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f8f9fc] border border-[#1a3fa0]/10 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
                <Lightbulb size={14} /> Our Solution
              </span>
              <h2 className="text-3xl font-semibold text-[#0f2a6b] mb-4">Our Approach & Solution</h2>
              <p className="text-lg text-[#4a5578] leading-relaxed mb-6">{project.solution}</p>

              <div className="grid grid-cols-2 gap-3">
                {project.services.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    className="flex items-center gap-2.5 p-3 bg-[#f8f9fc] rounded-xl border border-[#1a3fa0]/05"
                  >
                    <CheckCircle size={16} className="text-[#e8a020] flex-shrink-0" />
                    <span className="text-sm font-medium text-[#0f2a6b]">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <motion.div {...fadeUp(0.05)} className="sticky top-24 space-y-6">
              <div className="bg-[#f8f9fc] rounded-2xl p-6 border border-[#1a3fa0]/08">
                <h3 className="text-lg font-bold text-[#0f2a6b] mb-4 pb-2 border-b border-[#1a3fa0]/10 flex items-center gap-2">
                  <Layers size={18} className="text-[#1a3fa0]" /> Project Details
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#4a5578]">Client</span>
                    <span className="text-sm font-semibold text-[#0f2a6b]">{project.client}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#4a5578]">Industry</span>
                    <span className="text-sm font-semibold text-[#0f2a6b] capitalize">{project.category}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#4a5578]">Duration</span>
                    <span className="text-sm font-semibold text-[#0f2a6b]">{project.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#4a5578]">Team Size</span>
                    <span className="text-sm font-semibold text-[#0f2a6b]">{project.teamSize}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#4a5578]">Year</span>
                    <span className="text-sm font-semibold text-[#0f2a6b]">{project.year}</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#0f2a6b] rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Code2 size={18} className="text-[#e8a020]" /> Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/10 rounded-lg text-xs font-medium hover:bg-[#e8a020] hover:text-[#0f2a6b] transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="block w-full py-3.5 bg-gradient-to-r from-[#1a3fa0] to-[#2952cc] text-white text-center font-semibold rounded-xl hover:shadow-lg hover:shadow-[#1a3fa0]/25 transition-all hover:-translate-y-0.5"
              >
                Start Similar Project
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Gallery Section
function GallerySection({
  project,
  activeImg,
  setActiveImg,
  openGallery,
}: {
  project: ProjectData;
  activeImg: string;
  setActiveImg: (img: string) => void;
  openGallery: (index: number) => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="gallery" ref={ref} className="relative py-20 px-4 md:px-8 lg:px-12 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
            <Camera size={14} /> Project Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Visual <span className="text-[#e8a020]">Showcase</span>
          </h2>
          <p className="text-[#4a5578] max-w-2xl mx-auto">Explore the visual journey of this project</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 relative h-[400px] rounded-2xl overflow-hidden group"
          >
            <Image src={activeImg} alt="Main project image" fill className="object-cover" />
            <button
              onClick={() => openGallery(project.gallery.indexOf(activeImg))}
              className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100"
              aria-label="Open gallery"
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <Maximize2 size={24} className="text-white" />
              </div>
            </button>
          </motion.div>

          {project.gallery.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05 }}
              onClick={() => setActiveImg(img)}
              onDoubleClick={() => openGallery(i)}
              className={`relative h-[200px] rounded-2xl overflow-hidden group transition-all duration-300 ${
                activeImg === img ? "ring-4 ring-[#e8a020] shadow-lg" : "opacity-60 hover:opacity-100"
              }`}
              aria-label={`View gallery image ${i + 1}`}
            >
              <Image src={img} alt={`Gallery image ${i + 1}`} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

// Metrics Section
function MetricsSection({ project }: { project: ProjectData }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-20 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
            <TrendingUp size={14} /> Key Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Measurable <span className="text-[#e8a020]">Impact</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.results.map((result, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="group bg-gradient-to-br from-[#f8f9fc] to-white rounded-2xl p-6 text-center border border-[#1a3fa0]/08 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1a3fa0] to-[#e8a020] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="text-3xl md:text-4xl font-bold mb-1 bg-gradient-to-r from-[#0f2a6b] to-[#1a3fa0] bg-clip-text text-transparent">
                {result.metric}
              </div>
              <div className="text-sm text-[#4a5578] font-medium">{result.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Approach Section
function ApproachSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const steps = [
    { icon: Target, title: "Discovery", desc: "Deep dive into requirements and business goals" },
    { icon: PenTool, title: "Design", desc: "User-centric design and prototype validation" },
    { icon: Code2, title: "Development", desc: "Agile development with continuous integration" },
    { icon: Shield, title: "Testing", desc: "Rigorous QA and security compliance checks" },
    { icon: Rocket, title: "Launch", desc: "Smooth deployment with zero downtime" },
    { icon: Heart, title: "Support", desc: "24/7 monitoring and ongoing maintenance" },
  ];

  return (
    <section ref={ref} className="relative py-20 px-4 md:px-8 lg:px-12 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
            <Workflow size={14} /> Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            How We <span className="text-[#e8a020]">Delivered</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl p-6 border border-[#1a3fa0]/08 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1a3fa0]/10 to-[#2952cc]/05 flex items-center justify-center flex-shrink-0 group-hover:from-[#1a3fa0] group-hover:to-[#2952cc] transition-colors duration-300">
                  <step.icon className="w-5 h-5 text-[#1a3fa0] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0f2a6b] mb-1">{step.title}</h4>
                  <p className="text-sm text-[#4a5578]">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonial Section
function TestimonialSection({ project }: { project: ProjectData }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-20 px-4 md:px-8 lg:px-12 bg-[#0f2a6b] overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#e8a020]/10 blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Quote size={40} className="text-[#e8a020]/30 mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
            "{project.testimonial.text}"
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#e8a020]/20 flex items-center justify-center text-2xl font-bold text-[#e8a020]">
              {project.testimonial.author[0]}
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">{project.testimonial.author}</div>
              <div className="text-[#e8a020] text-sm">{project.testimonial.role}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Related Projects
function RelatedProjects({ projects }: { projects: ProjectData[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-20 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
            <Briefcase size={14} /> Related Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            More <span className="text-[#e8a020]">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link href={`/portfolio/${proj.slug}`} className="block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#1a3fa0]/08">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={proj.image} alt={proj.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute bottom-3 left-3 px-3 py-1 bg-[#e8a020] text-[#0f2a6b] text-xs font-bold rounded-full uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                      {proj.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#0f2a6b] mb-1">{proj.title}</h3>
                    <p className="text-sm text-[#4a5578]">{proj.client}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Gallery Modal
function GalleryModal({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, onNext, onPrev]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-4 right-4 p-3 text-white/60 hover:text-white transition-colors z-10" aria-label="Close gallery">
        <X size={28} />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 p-3 text-white/60 hover:text-white transition-colors z-10" aria-label="Previous image">
        <ChevronLeft size={32} />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 p-3 text-white/60 hover:text-white transition-colors z-10" aria-label="Next image">
        <ChevronRight size={32} />
      </button>

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative w-[90vw] h-[80vh] max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={images[currentIndex]} alt={`Gallery ${currentIndex + 1}`} fill className="object-contain" />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </motion.div>
  );
}

// Custom useInView hook
function useInView(ref: React.RefObject<HTMLElement>, options?: any) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1, ...options }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return inView;
}