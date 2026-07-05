"use client";

import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
  Calendar,
  Code2,
  Smartphone,
  Megaphone,
  Palette,
  ChevronRight,
  Share2,
  Download,
  Globe,
  Zap,
  Award,
  Star,
  Quote,
  ArrowRight,
  Briefcase,
  Building2,
  MapPin,
  Mail,
  Phone,
  Sparkles,
  Shield,
  Rocket,
  Layers,
  ThumbsUp,
  Heart,
  Eye,
  Target,
  PenTool,
  Server,
  Database,
  Chrome,
  Apple,
  Figma,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  PlayCircle,
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Film,
  Camera,
  Lightbulb,
  Workflow,
} from "lucide-react";
import { CTA } from "@/components/sections/CTA";

/* ─────────────────────────────────────────────
   BRAND COLORS
   Primary: #0f2a6b / #1a3fa0 / #2952cc (deep navy)
   Accent:  #e8a020 / #f0b832 (gold)
   Text:    #4a5578 (body), #0f2a6b (headings)
   BG:      #f8f9fc / #f4f6fb (light sections)
───────────────────────────────────────────── */

/* ── PROJECT DATA ── */
const projectsData = [
  {
    slug: "nexbank-digital",
    title: "NexBank Digital Transformation",
    category: "fintech",
    serviceType: "web",
    client: "NexBank Corp",
    year: "2023",
    duration: "8 Months",
    teamSize: "6 Experts",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    ],
    challenge:
      "NexBank needed to modernize their legacy banking portal to support 2M+ concurrent users while maintaining strict security compliance (SOC2, GDPR). The old system suffered from slow load times and poor mobile experience.",
    solution:
      "We architected a microservices-based solution using React for the frontend and Node.js for the backend, deployed on AWS with auto-scaling. We implemented biometric authentication and real-time fraud detection algorithms.",
    results: [
      { metric: "40%", label: "Faster Load Time" },
      { metric: "25%", label: "Increase in User Adoption" },
      { metric: "99.99%", label: "Uptime Achieved" },
      { metric: "$2M", label: "Cost Savings/year" },
    ],
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "AWS Lambda",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
    ],
    services: ["UI/UX Design", "Full-Stack Dev", "Cloud Migration", "Security Audit"],
    testimonial: {
      text: "Digitonix transformed our digital presence. Their team's expertise in fintech security and scalability is unmatched. The new platform has exceeded all our expectations.",
      author: "John Doe",
      role: "CTO, NexBank",
    },
  },
  {
    slug: "healthplus-app",
    title: "HealthPlus Telemedicine App",
    category: "healthcare",
    serviceType: "app",
    client: "HealthPlus Inc",
    year: "2024",
    duration: "6 Months",
    teamSize: "4 Experts",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-217358c7e618?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516574187841-693083f69802?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    ],
    challenge:
      "Create a HIPAA-compliant telemedicine app allowing patients to consult doctors via video, manage prescriptions, and view lab results securely on both iOS and Android.",
    solution:
      "Developed a cross-platform app using Flutter for consistent UI/UX. Integrated WebRTC for low-latency video calls and Firebase for secure data synchronization. Implemented end-to-end encryption for all medical records.",
    results: [
      { metric: "500k+", label: "Downloads" },
      { metric: "4.9", label: "App Store Rating" },
      { metric: "60%", label: "Reduced Wait Time" },
      { metric: "100%", label: "HIPAA Compliant" },
    ],
    techStack: ["Flutter", "Dart", "Firebase", "WebRTC", "Node.js", "MongoDB"],
    services: ["Mobile App Dev", "Backend API", "UI/UX Design", "QA Testing"],
    testimonial: {
      text: "The app has revolutionized how we connect with patients. The development process was smooth and professional. Our patients love the seamless experience.",
      author: "Dr. Sarah Smith",
      role: "Director, HealthPlus",
    },
  },
  {
    slug: "shopwave-ecommerce",
    title: "ShopWave E-Commerce Platform",
    category: "ecommerce",
    serviceType: "web",
    client: "ShopWave Retail",
    year: "2023",
    duration: "7 Months",
    teamSize: "5 Experts",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=800&q=80",
    ],
    challenge:
      "ShopWave needed a scalable e-commerce platform to handle 1M+ monthly visitors with personalized shopping experiences and real-time inventory management.",
    solution:
      "Built a headless commerce solution using Next.js for the frontend and Shopify Plus as the backend. Implemented AI-powered product recommendations and dynamic pricing engine.",
    results: [
      { metric: "150%", label: "Revenue Growth" },
      { metric: "45%", label: "Conversion Rate Increase" },
      { metric: "2x", label: "Average Order Value" },
      { metric: "99.98%", label: "Uptime" },
    ],
    techStack: ["Next.js", "Shopify Plus", "Node.js", "PostgreSQL", "Redis", "AWS"],
    services: ["E-Commerce Dev", "UI/UX Design", "Payment Integration", "SEO"],
    testimonial: {
      text: "Our sales have skyrocketed since launching the new platform. The team understood our vision perfectly and delivered beyond expectations.",
      author: "Michael Chen",
      role: "CEO, ShopWave",
    },
  },
];

const getProject = (slug: string) => {
  const found = projectsData.find((p) => p.slug === slug);
  if (found) return found;

  return {
    slug,
    title: "Enterprise Digital Solution",
    category: "enterprise",
    serviceType: "web",
    client: "Global Enterprise",
    year: "2023",
    duration: "10 Months",
    teamSize: "8 Experts",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
    ],
    challenge:
      "The client needed a scalable enterprise solution to streamline internal workflows and improve data visibility across global offices.",
    solution:
      "We delivered a custom dashboard with real-time analytics, role-based access control, and seamless integration with their existing ERP systems.",
    results: [
      { metric: "30%", label: "Efficiency Gain" },
      { metric: "24/7", label: "Support" },
    ],
    techStack: ["Next.js", "Python", "AWS", "PostgreSQL"],
    services: ["Consulting", "Development", "Cloud"],
    testimonial: { text: "Exceptional work and professional team.", author: "CEO", role: "Client" },
  };
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<any>(null);
  const [activeImg, setActiveImg] = useState<string>("");
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    const data = getProject(params.slug as string);
    setProject(data);
    setActiveImg(data.image);
  }, [params.slug]);

  if (!project)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f9fc]">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full border-4 border-[#1a3fa0] border-t-transparent animate-spin"></div>
          <div className="text-[#1a3fa0] font-semibold">Loading project...</div>
        </div>
      </div>
    );

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

  const CategoryIcon =
    project.category === "fintech"
      ? TrendingUp
      : project.category === "healthcare"
        ? Users
        : project.category === "ecommerce"
          ? Globe
          : Zap;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ── NAVIGATION ── */}
      {/* Background Image with Overlay */}

      {/* ── HERO SECTION ── */}
      <HeroSection project={project} router={router} />

      {/* ── PROJECT DETAILS ── */}
      <DetailsSection project={project} />

      {/* ── GALLERY ── */}
      <GallerySection
        project={project}
        activeImg={activeImg}
        setActiveImg={setActiveImg}
        openGallery={openGallery}
      />

      {/* ── KEY METRICS ── */}
      <MetricsSection project={project} />

      {/* ── PROCESS & APPROACH ── */}
      <ApproachSection project={project} />

      {/* ── TESTIMONIAL ── */}
      <TestimonialSection project={project} />

      {/* ── RELATED PROJECTS ── */}
      <RelatedProjects />

      {/* ── CTA ── */}
      <CTA
        title="Ready to Build Your Success Story?"
        description="Join our list of satisfied clients. Let's discuss how we can help you achieve your business goals."
        ctaText="Get in Touch"
        ctaLink="/contact"
      />

      {/* ── GALLERY MODAL ── */}
      {isGalleryOpen && (
        <GalleryModal
          images={project.gallery}
          currentIndex={galleryIndex}
          onClose={closeGallery}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────── */
function NavBar({ router, project }: { router: any; project: any }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#1a3fa0]/10"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[#4a5578] hover:text-[#0f2a6b] transition-colors group"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-sm font-medium">Back to Portfolio</span>
        </button>

        <div className="flex gap-2">
          <button
            onClick={() => {
              navigator.share?.({
                title: project.title,
                text: `Check out this project: ${project.title}`,
                url: window.location.href,
              });
            }}
            className="p-2.5 rounded-full text-[#4a5578] hover:text-[#0f2a6b] hover:bg-[#1a3fa0]/5 transition-all"
          >
            <Share2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────── */
function HeroSection({ project, router }: { project: any; router: any }) {
  return (
    <section className="relative min-h-[40vh] mt-20 w-full overflow-hidden bg-[#0f2a6b]">

      <div className="absolute inset-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-2 h-[50vh] flex items-end pb-10">
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

          <p className="text-lg text-gray-300 max-w-2xl mb-3 leading-relaxed">
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

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-[scroll-bounce_2s_infinite]" />
        </div>
      </motion.div>

      <style>{`
        @keyframes scroll-bounce {
          0%, 100% { transform: translateY(-4px); opacity: 0.6; }
          50% { transform: translateY(8px); opacity: 1; }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────
   DETAILS SECTION
───────────────────────────────────────────── */
function DetailsSection({ project }: { project: any }) {
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
          {/* Main Content */}
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
                {project.services.map((service: string, i: number) => (
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

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              {...fadeUp(0.05)}
              className="sticky top-24 space-y-6"
            >
              {/* Project Info Card */}
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
                    <span className="text-sm font-semibold text-[#0f2a6b] capitalize">
                      {project.category}
                    </span>
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

              {/* Tech Stack */}
              <div className="bg-[#0f2a6b] rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Code2 size={18} className="text-[#e8a020]" /> Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white/10 rounded-lg text-xs font-medium hover:bg-[#e8a020] hover:text-[#0f2a6b] transition-colors cursor-default"
                    >
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

/* ─────────────────────────────────────────────
   GALLERY SECTION
───────────────────────────────────────────── */
function GallerySection({
  project,
  activeImg,
  setActiveImg,
  openGallery,
}: {
  project: any;
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
          <p className="text-[#4a5578] max-w-2xl mx-auto">
            Explore the visual journey of this project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 relative h-[400px] rounded-2xl overflow-hidden group"
          >
            <Image src={activeImg} alt="Main" fill className="object-cover" />
            <button
              onClick={() => openGallery(project.gallery.indexOf(activeImg))}
              className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100"
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <Maximize2 size={24} className="text-white" />
              </div>
            </button>
          </motion.div>

          {/* Thumbnails */}
          {project.gallery.map((img: string, i: number) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05 }}
              onClick={() => setActiveImg(img)}
              onDoubleClick={() => openGallery(i)}
              className={`relative h-[200px] rounded-2xl overflow-hidden group transition-all duration-300 ${activeImg === img
                ? "ring-4 ring-[#e8a020] shadow-lg"
                : "opacity-60 hover:opacity-100"
                }`}
            >
              <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                Click to view
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   METRICS SECTION
───────────────────────────────────────────── */
function MetricsSection({ project }: { project: any }) {
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
          <p className="text-[#4a5578] max-w-2xl mx-auto">
            The tangible results we delivered for our client
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.results.map((result: any, i: number) => (
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

/* ─────────────────────────────────────────────
   APPROACH SECTION
───────────────────────────────────────────── */
function ApproachSection({ project }: { project: any }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const steps = [
    {
      icon: Target,
      title: "Discovery",
      desc: "Deep dive into requirements and business goals",
    },
    {
      icon: PenTool,
      title: "Design",
      desc: "User-centric design and prototype validation",
    },
    {
      icon: Code2,
      title: "Development",
      desc: "Agile development with continuous integration",
    },
    {
      icon: Shield,
      title: "Testing",
      desc: "Rigorous QA and security compliance checks",
    },
    {
      icon: Rocket,
      title: "Launch",
      desc: "Smooth deployment with zero downtime",
    },
    {
      icon: Heart,
      title: "Support",
      desc: "24/7 monitoring and ongoing maintenance",
    },
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
          <p className="text-[#4a5578] max-w-2xl mx-auto">
            Our structured approach to project delivery
          </p>
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

/* ─────────────────────────────────────────────
   TESTIMONIAL SECTION
───────────────────────────────────────────── */
function TestimonialSection({ project }: { project: any }) {
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

/* ─────────────────────────────────────────────
   RELATED PROJECTS
───────────────────────────────────────────── */
function RelatedProjects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const related = projectsData.slice(0, 3);

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
          <p className="text-[#4a5578] max-w-2xl mx-auto">
            Explore other successful projects we've delivered
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {related.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link href={`/portfolio/${project.slug}`} className="block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#1a3fa0]/08">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute bottom-3 left-3 px-3 py-1 bg-[#e8a020] text-[#0f2a6b] text-xs font-bold rounded-full uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#0f2a6b] mb-1">{project.title}</h3>
                    <p className="text-sm text-[#4a5578]">{project.client}</p>
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

/* ─────────────────────────────────────────────
   GALLERY MODAL
───────────────────────────────────────────── */
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
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-3 text-white/60 hover:text-white transition-colors z-10"
      >
        <X size={28} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 p-3 text-white/60 hover:text-white transition-colors z-10"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 p-3 text-white/60 hover:text-white transition-colors z-10"
      >
        <ChevronRightIcon size={32} />
      </button>

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative w-[90vw] h-[80vh] max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex]}
          alt={`Gallery ${currentIndex + 1}`}
          fill
          className="object-contain"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── useInView hook ── */
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