"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Award,
  Users,
  Briefcase,
  Clock,
  ArrowRight,
  Shield,
  Eye,
  Lightbulb,
  Target,
  Heart,
  Zap,
  Globe,
  Building2,
  Trophy,
  Quote,
  Linkedin,
  Twitter,
  Github,
  Dribbble,
  Phone,
  Mail,
  MapPin,
  Star,
  BarChart3,
  ChevronRight,
  Code2,
  Smartphone,
  Megaphone,
  Palette,
  Cloud,
  Bot,
  ShieldCheck,
  Search,
  Rocket,
  Flag,
  Workflow,
  BadgeCheck,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import TopScorers from "@/components/tesmonials";

/* ─────────────────────────────────────────────
   BRAND COLORS (matching your home page)
   Primary: #0f2a6b / #1a3fa0 / #2952cc (deep navy)
   Accent:  #e8a020 / #f0b832 (gold)
   Text:    #4a5578 (body), #0f2a6b (headings)
   BG:      #f8f9fc / #f4f6fb (light sections)
   Cards:   white with border-[#1a3fa0]/10
───────────────────────────────────────────── */

/* ── Animated Counter ── */
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const aboutStats = [
  {
    number: 650,
    suffix: "+",
    label: "Projects Delivered",
    description: "Across 25+ countries globally",
    icon: Briefcase,
  },
  {
    number: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Consistently rated excellent",
    icon: Star,
  },
  {
    number: 55,
    suffix: "+",
    label: "Expert Engineers",
    description: "Full-time certified professionals",
    icon: Users,
  },
  {
    number: 13,
    suffix: "+",
    label: "Years of Excellence",
    description: "Serving clients since 2011",
    icon: Clock,
  },
];

const values = [
  {
    title: "Innovation First",
    description:
      "We stay ahead of technology curves, bringing you cutting-edge solutions that give your business a competitive advantage in the digital landscape.",
    icon: Lightbulb,
    stats: "15+ R&D Projects",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Every solution is tailored to your unique business needs. We listen, understand, and deliver exactly what drives your growth and success.",
    icon: Heart,
    stats: "98% Satisfaction",
  },
  {
    title: "Quality Excellence",
    description:
      "Rigorous testing and quality assurance ensure your project is bug-free, scalable, and built to industry best practices with zero compromise.",
    icon: Shield,
    stats: "Zero Critical Bugs",
  },
  {
    title: "Transparent Process",
    description:
      "Full visibility into your project with regular updates, clear communication, and real-time progress tracking throughout the development lifecycle.",
    icon: Eye,
    stats: "Daily Updates",
  },
  {
    title: "Agile Methodology",
    description:
      "We embrace iterative development with 2-week sprints, ensuring rapid delivery of value and the flexibility to adapt to changing requirements.",
    icon: Workflow,
    stats: "2-Week Sprints",
  },
  {
    title: "Results Driven",
    description:
      "We measure success by your business outcomes. Every solution is designed to deliver measurable ROI and sustainable growth for your organization.",
    icon: TrendingUp,
    stats: "500+ Success Stories",
  },
];

const timeline = [
  {
    year: "2011",
    title: "Founded with Vision",
    desc: "Digitronix was established in Jaipur with a clear mission: make enterprise-grade technology accessible to businesses of all sizes across India.",
    achievements: ["First Office Opens", "3 Team Members"],
    icon: Flag,
  },
  {
    year: "2014",
    title: "First Major Milestone",
    desc: "Completed 100+ projects and expanded team to 15 experts. Built strong reputation for quality web and mobile development solutions.",
    achievements: ["100 Projects", "Team of 15"],
    icon: Trophy,
  },
  {
    year: "2017",
    title: "Technology Expansion",
    desc: "Added AI/ML capabilities and cloud services. Became trusted partner for digital transformation projects across multiple industries.",
    achievements: ["AI Division", "Cloud Services"],
    icon: Cloud,
  },
  {
    year: "2020",
    title: "Global Reach",
    desc: "Extended services to 25+ countries. Supported businesses worldwide in their digital shift during unprecedented global challenges.",
    achievements: ["25+ Countries", "Remote Excellence"],
    icon: Globe,
  },
  {
    year: "2024",
    title: "Industry Leadership",
    desc: "55+ experts delivering enterprise solutions. Recognized as a leading IT service provider for innovation, reliability, and client success.",
    achievements: ["55+ Experts", "Fortune 500 Clients"],
    icon: Building2,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Research",
    desc: "We dive deep into your business goals, market landscape, and technical requirements to build a solid foundation for your project.",
    icon: Search,
    details: ["Business Analysis", "Market Research", "Feasibility Study"],
  },
  {
    step: "02",
    title: "Strategy & Planning",
    desc: "Our team creates a detailed roadmap with technology stack selection, project timelines, and resource allocation aligned to your vision.",
    icon: Target,
    details: ["Architecture Design", "Timeline Planning", "Resource Allocation"],
  },
  {
    step: "03",
    title: "Design & Development",
    desc: "Agile development sprints with beautiful UI/UX design and robust code architecture. Regular demos ensure alignment with your expectations.",
    icon: Code2,
    details: ["UI/UX Design", "Agile Sprints", "Code Excellence"],
  },
  {
    step: "04",
    title: "Testing & Launch",
    desc: "Comprehensive quality assurance, security audits, and performance optimization before a smooth, zero-downtime deployment.",
    icon: Rocket,
    details: ["QA Testing", "Security Audit", "Deployment"],
  },
];

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "CEO & Founder",
    bio: "15+ years in technology leadership. Visionary behind Digitronix's growth strategy and innovation culture.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    bio: "Technology architect with 12+ years experience. Expert in scalable systems, cloud infrastructure, and AI integration.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Amit Patel",
    role: "Head of Engineering",
    bio: "Full-stack expert leading engineering team. Specializes in high-performance web applications and microservices architecture.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Neha Gupta",
    role: "Design Director",
    bio: "Creative leader ensuring every product delivers exceptional user experience and visually stunning interfaces.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    social: { linkedin: "#", dribbble: "#" },
  },
];

const expertiseAreas = [
  { title: "Web Development", icon: Code2 },
  { title: "Mobile Apps", icon: Smartphone },
  { title: "UI/UX Design", icon: Palette },
  { title: "Cloud Solutions", icon: Cloud },
  { title: "AI & Automation", icon: Bot },
  { title: "Digital Marketing", icon: Megaphone },
];

/* ─────────────────────────────────────────────
   MAIN ABOUT PAGE COMPONENT
───────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ── HERO SECTION ── */}
      <HeroSection />

      {/* ── STATS SECTION ── */}
      <StatsSection />

      {/* ── WHO WE ARE SECTION ── */}
      <WhoWeAreSection />

      {/* ── EXPERTISE SECTION ── */}
      <ExpertiseSection />

      {/* ── CORE VALUES SECTION ── */}
      <ValuesSection />

      {/* ── TIMELINE SECTION ── */}
      <TimelineSection />

      {/* ── PROCESS SECTION ── */}
      <ProcessSection />

      {/* ── TEAM SECTION ── */}
      <TeamSection />

      {/* ── TESTIMONIALS ── */}
      <TopScorers />

      {/* ── CTA SECTION ── */}
      <CTASection />
    </div>
  );
}

/* ─────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────── */
function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  });

  return (
    <>
      <style>{`
        .about-hero-section {
          background-image:
            linear-gradient(rgba(26,63,160,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,63,160,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          background-color: #f8f9fc;
        }
        .about-hero-tag {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 20px; border-radius: 50px;
          background: white;
          border: 1.5px solid rgba(26,63,160,0.15);
          box-shadow: 0 2px 10px rgba(26,63,160,0.07);
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: #1a3fa0;
        }
        .about-hero-tag-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #e8a020;
          box-shadow: 0 0 0 3px rgba(232,160,32,0.25);
          animation: hero-pulse 2s ease infinite;
        }
        @keyframes hero-pulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(232,160,32,0.25); }
          50%     { box-shadow: 0 0 0 7px rgba(232,160,32,0.08); }
        }
        .gold-word { color: #e8a020; }
      `}</style>

      <section
        ref={ref}
        className="about-hero-section relative w-full pt-32 pb-20 px-4 md:px-8 lg:px-12 overflow-hidden"
      >
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(26,63,160,0.09) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT — Text */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, y: 16, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  className="hero-tag mb-4 w-fit"
                >
                  {"About us"}
                </motion.div>
              </AnimatePresence>
              {/* Heading */}
              <motion.h1
                {...fadeUp(0.08)}
                className="text-3xl sm:text-4xl md:text-[2.6rem] font-semibold text-[#0f2a6b] leading-[1.25] mb-6"
              >

                <span className="gold-word">Your Trusted </span>{" "}
                Technology Partner  For Digital Growth
              </motion.h1>

              {/* Description */}
              <motion.p
                {...fadeUp(0.14)}
                className="text-[#4a5578] text-base sm:text-lg leading-relaxed mb-4 font-light"
              >
                Digitonix is a leading{" "}
                <strong className="font-semibold text-[#0f2a6b]">
                  IT service provider and software development company in
                  Jaipur, India
                </strong>
                , delivering innovative web, mobile, and custom software
                solutions since 2011. With 55+ expert engineers and 650+
                successful projects, we help businesses transform digitally
                and achieve measurable growth.
              </motion.p>

              {/* Trust points */}
              <motion.div
                {...fadeUp(0.18)}
                className="flex flex-wrap gap-3 mb-4"
              >
                {[
                  "ISO 9001:2015 Certified",
                  "13+ Years Experience",
                  "24/7 Support",
                  "Global Clientele",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full
                               bg-white border border-[#1a3fa0]/12 text-xs font-semibold
                               text-[#1a3fa0] shadow-sm"
                  >
                    <BadgeCheck size={12} className="text-[#e8a020]" />
                    {item}
                  </span>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                {...fadeUp(0.22)}
                className="flex flex-wrap gap-3"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full
                             font-semibold text-sm text-white relative overflow-hidden
                             shadow-lg shadow-[#1a3fa0]/25 hover:shadow-[#1a3fa0]/35
                             hover:-translate-y-1 transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #1a3fa0, #2952cc)",
                  }}
                >
                  <span className="relative z-10">Start Your Project</span>
                  <ArrowUpRight
                    size={16}
                    className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                             font-semibold text-sm text-[#1a3fa0] bg-white
                             border border-[#1a3fa0]/20 hover:border-[#1a3fa0]/40
                             hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  View Our Work
                  <ChevronRight size={16} />
                </Link>
              </motion.div>
            </div>

            {/* RIGHT — Image / Visual */}
            <motion.div
              {...fadeUp(0.12)}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[480px]">
                <div className="relative overflow-hidden">
                  <Image
                    src="/home/b1.png"
                    alt="Digitonix Team - IT Service Provider in Jaipur"
                    width={550}
                    height={450}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─────────────────────────────────────────────
   STATS SECTION
───────────────────────────────────────────── */
export function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative w-full py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
        >
          {aboutStats.map(({ number, suffix, label, description, icon: Icon }) => (
            <motion.div
              key={label}
              variants={{
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white rounded-2xl p-6 border border-[#1a3fa0]/08 hover:shadow-lg hover:-translate-y-1
                         transition-all duration-300 text-center relative overflow-hidden"
            >
              {/* Bottom gradient bar on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1a3fa0] to-[#e8a020] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a3fa0]/10 to-[#2952cc]/05 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-[#1a3fa0]" />
              </div>

              <div
                className="text-3xl font-bold mb-2"
                style={{
                  background:
                    "linear-gradient(135deg, #0f2a6b, #2952cc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                <Counter target={number} suffix={suffix} />
              </div>
              <div className="text-base font-semibold text-[#0f2a6b] mb-1">
                {label}
              </div>
              <div className="text-xs text-gray-600">{description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   WHO WE ARE SECTION
───────────────────────────────────────────── */
function WhoWeAreSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  });

  return (
    <section
      ref={ref}
      className="relative w-full py-20 px-4 md:px-8 lg:px-12"
      style={{
        backgroundImage:
          "linear-gradient(rgba(26,63,160,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,63,160,0.03) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        backgroundColor: "#f8f9fc",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <motion.div {...fadeUp(0)} className="about-hero-tag mb-5 w-fit">
              Who We Are
            </motion.div>

            <motion.h2
              {...fadeUp(0.08)}
              className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] leading-[1.18] mb-5"
            >
              Leading IT Company{" "}
              <span className="text-[#e8a020]">Since 2011</span>
            </motion.h2>

            <motion.p
              {...fadeUp(0.12)}
              className="text-[#4a5578] text-base leading-relaxed mb-4"
            >
              Digitonix is a trusted{" "}
              <strong className="font-semibold text-[#0f2a6b]">
                web development, mobile app development, and software
                development company in Jaipur, India
              </strong>
              . Since 2011, we have been helping startups, SMEs, and
              enterprises build scalable digital products that drive business
              growth and innovation.
            </motion.p>

            <motion.p
              {...fadeUp(0.16)}
              className="text-[#4a5578] text-base leading-relaxed mb-6"
            >
              Our team of 55+ skilled professionals delivers end-to-end
              technology solutions including custom software development,
              cloud services, AI integration, UI/UX design, and digital
              marketing. We combine technical expertise with deep business
              understanding to create solutions that generate real value.
            </motion.p>

            {/* Key differentiators */}
            <motion.div
              {...fadeUp(0.2)}
              className="grid grid-cols-2 gap-3"
            >
              {[
                "Custom Software Development",
                "Mobile App Development",
                "Web Application Development",
                "Digital Marketing & SEO",
                "AI & Automation Solutions",
                "Cloud & DevOps Services",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="text-[#1a3fa0] flex-shrink-0"
                  />
                  <span className="text-sm text-[#3a4a72] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Mission/Vision Cards */}
          <div className="space-y-3">
            {/* Mission Card */}
            <motion.div
              {...fadeUp(0.14)}
              className="bg-white p-6 border border-slate-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-semibold text-[#0f2a6b]">Our Mission</h3>
              </div>
              <p className="text-[#4a5578] leading-relaxed text-sm">
                To empower businesses of all sizes by providing accessible,
                cutting-edge technology solutions that drive digital
                transformation, improve operational efficiency, and create
                sustainable competitive advantages in the global marketplace.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              {...fadeUp(0.18)}
              className="bg-white p-6 border border-slate-300"
            >
              <div className="flex items-center gap-3 mb-3">

                <h3 className="text-xl font-semibold text-[#0f2a6b]">Our Vision</h3>
              </div>
              <p className="text-[#4a5578] leading-relaxed text-sm">
                To be India's most trusted technology partner, recognized
                globally for innovation, quality, and client success. We
                envision a future where every business, regardless of size,
                can leverage world-class technology to achieve extraordinary
                results.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   EXPERTISE SECTION
───────────────────────────────────────────── */
function ExpertiseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Technologies & <span className="text-[#e8a020]">Services</span>
          </h2>
          <p className="text-[#4a5578] max-w-2xl mx-auto">
            We deliver comprehensive digital solutions across the technology
            spectrum
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={{ animate: { transition: { staggerChildren: 0.08 } } }}
        >
          {expertiseAreas.map((item, idx) => (
            <motion.div
              key={item.title}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group bg-gray-50 rounded-xl p-6 text-center
                         hover:bg-[#0f2a6b] transition-all duration-300
                         cursor-pointer border border-slate-300
                         hover:border-[#1a3fa0]/20 hover:shadow-lg"
            >
              <item.icon className="w-8 h-8 text-[#1a3fa0] mx-auto mb-3 group-hover:text-white transition-colors" />
              <p className="text-sm font-semibold text-[#0f2a6b] group-hover:text-white transition-colors">
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   VALUES SECTION
───────────────────────────────────────────── */
function ValuesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  });

  return (
    <section
      ref={ref}
      className="relative w-full py-12 px-4 md:px-8 lg:px-12"
      style={{
        backgroundImage:
          "linear-gradient(rgba(26,63,160,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,63,160,0.03) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        backgroundColor: "#f8f9fc",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
            Our Core Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            What <span className="text-[#e8a020]">Drives</span> Us
          </h2>
          <p className="text-[#4a5578] max-w-2xl mx-auto">
            These principles guide every project we undertake and every client
            relationship we build
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((val, idx) => (
            <motion.div
              key={val.title}
              {...fadeUp(0.05 * idx)}
              className="group bg-white rounded-2xl p-7 border border-[#1a3fa0]/08
                          hover:shadow-xl hover:-translate-y-1.5
                         transition-all duration-300 relative overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1a3fa0] to-[#e8a020] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />



              <h3 className="text-lg flex gap-2 mb-2 items-center  font-bold text-[#0f2a6b] ">
                <div className="">
                  <val.icon className="w-8 h-8 stroke-[1.4] text-[#1a3fa0]" />
                </div> {val.title}
              </h3>
              <p className="text-sm text-[#4a5578] leading-relaxed mb-4">
                {val.description}
              </p>

              <span className="inline-block px-4 py-1.5 bg-gradient-to-br from-[#1a3fa0]/08 to-[#2952cc]/05 rounded-full text-xs font-semibold text-[#1a3fa0]">
                {val.stats}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TIMELINE SECTION
───────────────────────────────────────────── */
function TimelineSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
            Our Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            The <span className="text-[#e8a020]">Digitonix</span> Story
          </h2>
          <p className="text-[#4a5578] max-w-2xl mx-auto">
            From humble beginnings to a trusted technology partner — our
            growth journey
          </p>
        </motion.div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1a3fa0]/20 via-[#e8a020]/30 to-[#1a3fa0]/20 transform md:-translate-x-1/2" />

          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
            >
              {/* Timeline Dot */}
              <div className="absolute left-2 w-10 h-10 bg-white rounded-full border-3 border-[#e8a020] transform -translate-x-1/2 z-10 flex items-center justify-center shadow-md">
                <item.icon className="w-4 h-4 text-[#1a3fa0]" />
              </div>

              {/* Content Card */}
              <div
                className={`ml-1 md:ml-2 mb-2 md:w-full ${false ? " md:pr-8" : "pl-8"
                  }`}
              >
                <div className="bg-slate-100 overflow-hidden relative rounded-xl p-4 border border-[#1a3fa0]/08 hover:shadow-md transition-shadow">
                  <span className="absolute right-0 top-0 inline-block px-4 py-2 bg-[#0f2a6b] text-white text-xs font-semibold rounded-bl-xl">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-[#0f2a6b] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4a5578] mb-3">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs font-medium text-[#6b7a9e]"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
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
   PROCESS SECTION
───────────────────────────────────────────── */
function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative w-full py-20 px-4 md:px-8 lg:px-12 bg-[#0f2a6b] overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#e8a020]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#2952cc]/10 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-widest text-[#e8a020] mb-4">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">
            Our Development{" "}
            <span className="text-[#e8a020]">Process</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A proven, transparent methodology that ensures quality and timely
            delivery
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-7
                         border border-white/10 hover:bg-white/10
                         transition-all duration-300"
            >
              {/* Step Number */}
              <div className="text-6xl font-bold text-white/8 absolute top-4 right-4 group-hover:text-[#e8a020]/15 transition-colors">
                {step.step}
              </div>

              {/* <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a3fa0] to-[#2952cc] flex items-center justify-center mb-5">
                <step.icon className="w-6 h-6 text-white" />
              </div> */}

              <h3 className="text-lg font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                {step.desc}
              </p>

              <ul className="space-y-2">
                {step.details.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-xs text-gray-400"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#e8a020] flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TEAM SECTION
───────────────────────────────────────────── */
function TeamSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative w-full py-20 px-4 md:px-8 lg:px-12 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Meet Our <span className="text-[#e8a020]">Leadership</span>
          </h2>
          <p className="text-[#4a5578] max-w-2xl mx-auto">
            Experienced professionals dedicated to delivering excellence in
            every project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#1a3fa0]/08">
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Social Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a6b]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-3">
                    {Object.entries(member.social).map(([platform, link]) => (
                      <Link
                        key={platform}
                        href={link}
                        className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#e8a020] transition-colors"
                      >
                        {platform === "linkedin" && (
                          <Linkedin className="w-4 h-4 text-white" />
                        )}
                        {platform === "twitter" && (
                          <Twitter className="w-4 h-4 text-white" />
                        )}
                        {platform === "github" && (
                          <Github className="w-4 h-4 text-white" />
                        )}
                        {platform === "dribbble" && (
                          <Dribbble className="w-4 h-4 text-white" />
                        )}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-[#0f2a6b] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#e8a020] font-medium text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-[#6b7a9e] leading-relaxed">
                    {member.bio}
                  </p>
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
   CTA SECTION
───────────────────────────────────────────── */
export function CTASection({service}) {
  const data = service?.cta;
  return (
    <section className="relative pt-12 pb-6 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/80" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
            {data?.title || "Ready to Build Something Great?"}
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-5xl mx-auto">
            {data?.description || "Partner with Digitonix, the leading IT company in Jaipur, for world-class web development, mobile apps, and digital marketing solutions. Join 500+ businesses achieving measurable growth."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-base shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 group"
              >
                Start Your Project
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 font-semibold text-base hover:bg-white/20 transition-all duration-300"
              >
                View Portfolio
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-orange-400" />
                <span>hello@digitonix.in</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-orange-400" />
                <span>+91 9887120429</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span>Global Offices</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}