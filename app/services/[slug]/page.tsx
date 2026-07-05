"use client";

import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowUpRight,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Code2,
  Smartphone,
  Megaphone,
  Palette,
  Cloud,
  Search,
  Target,
  ShoppingBag,
  Apple,
  Phone,
  Box,
  Laptop,
  Monitor,
  Share2,
  PenTool,
  Layout,
  Rocket,
  Clock,
  BadgeCheck,
  Users,
  Star,
  Briefcase,
  Mail,
  MapPin,
  Globe,
  Cpu,
  Shield,
  Trophy,
  TrendingUp,
  Zap,
  Quote,
  ExternalLink,
  Play,
  MessageSquare,
  Headphones,
} from "lucide-react";
import { CTASection } from "@/components/pages/aboutus";

/* ── All services data (same as above, imported or defined here) ── */
// For brevity, I'll show the page structure. You should import the data from a shared data file.

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  // Find the service by slug
  // const service = findServiceBySlug(slug);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ── HERO SECTION WITH PARALLAX ── */}
      {/* <ServiceHero
        heroRef={heroRef}
        heroOpacity={heroOpacity}
        heroScale={heroScale}
        heroY={heroY}
        // service={service}
      /> */}

      <HeroSection/>

      {/* ── OVERVIEW SECTION ── */}
      <OverviewSection />

      {/* ── FEATURES & BENEFITS ── */}
      <FeaturesSection />

      {/* ── TECH STACK ── */}
      <TechStackSection />

      {/* ── PROCESS ── */}
      <ServiceProcessSection />

      {/* ── WHY CHOOSE US FOR THIS SERVICE ── */}
      <WhyChooseServiceSection />

      {/* ── PRICING / PACKAGES ── */}
      <PricingSection />

      {/* ── CASE STUDIES / PORTFOLIO ── */}
      <CaseStudiesSection />

      {/* ── FAQ ── */}
      <FAQSection />

      {/* ── RELATED SERVICES ── */}
      <RelatedServicesSection />

      {/* ── CTA ── */}
      <CTASection />
    </div>
  );
}


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

        <div className="max-w-7xl mx-auto relative z-10">
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

                <span className="gold-word">Your Trusted </span>{" "} <br/>
                Technology Partner <br/> For Digital Growth
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
   SERVICE HERO WITH PARALLAX
───────────────────────────────────────────── */
function ServiceHero({
  heroRef,
  heroOpacity,
  heroScale,
  heroY,
}: {
  heroRef: any;
  heroOpacity: any;
  heroScale: any;
  heroY: any;
}) {
  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="absolute inset-0"
      >
       <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl" />

       <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-800">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight size={14} />
              <Link
                href="/services"
                className="hover:text-white transition-colors"
              >
                Services
              </Link>
              <ChevronRight size={14} />
              <span className="text-[#e8a020]">Custom Web Development</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Custom Web{" "}
              <span className="text-[#e8a020]">Development</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              As a premier web development company in Jaipur, India, we build
              robust, scalable, and secure web applications using modern
              technologies like React, Next.js, and Node.js. Our custom
              solutions deliver exceptional performance, SEO optimization, and
              user experiences that drive business growth.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: "200+", label: "Projects Delivered" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "On-Time", label: "Delivery Rate" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10"
                >
                  <div className="text-2xl font-bold text-[#e8a020] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#e8a020] text-white font-semibold rounded-full hover:bg-[#f0b832] transition-all duration-300 shadow-lg shadow-[#e8a020]/30"
              >
                Get Free Quote
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                View Our Work
                <ExternalLink size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Right - Feature Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Custom Web Development Services"
                width={600}
                height={500}
                className="w-full object-cover"
              />
            </div>
            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-[#1a3fa0]/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a3fa0] to-[#2952cc] flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0f2a6b]">
                    ISO 9001:2015
                  </div>
                  <div className="text-xs text-[#6b7a9e]">Certified Company</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   OVERVIEW SECTION
───────────────────────────────────────────── */
function OverviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
          >
            <span className="text-[#e8a020] font-semibold text-sm uppercase tracking-wider mb-3 block">
              Overview
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-6">
              Why Choose Our{" "}
              <span className="text-[#e8a020]">Web Development</span> Services?
            </h2>
            <p className="text-[#4a5578] leading-relaxed mb-6">
              As a leading web development company in Jaipur, India, Digitonix
              delivers enterprise-quality web solutions tailored to your unique
              business requirements. Our team of 55+ expert developers combines
              technical excellence with deep business understanding to create
              web applications that drive growth, improve user engagement, and
              deliver measurable ROI.
            </p>
            <p className="text-[#4a5578] leading-relaxed mb-6">
              Whether you need a corporate website, e-commerce platform, SaaS
              application, or enterprise portal, we have the expertise to bring
              your vision to life using the latest technologies and best
              practices in web development.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "SEO-Optimized Architecture",
                "Mobile-First Responsive Design",
                "Core Web Vitals Optimized",
                "Enterprise-Grade Security",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#e8a020] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#3a4a72]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-[#f8f9fc] rounded-2xl p-8 border border-[#1a3fa0]/10"
          >
            <h3 className="text-xl font-bold text-[#0f2a6b] mb-4">
              Key Benefits
            </h3>
            {[
              {
                title: "Customized Solutions",
                desc: "Tailor-made to your exact business requirements",
              },
              {
                title: "Scalable Architecture",
                desc: "Built to grow with your business needs",
              },
              {
                title: "SEO-Ready",
                desc: "Optimized for search engine visibility",
              },
              {
                title: "Fast Performance",
                desc: "Optimized Core Web Vitals for better rankings",
              },
              {
                title: "Ongoing Support",
                desc: "24/7 maintenance and technical support",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 mb-4 last:mb-0">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a3fa0]/10 to-[#2952cc]/05 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Star className="w-4 h-4 text-[#e8a020]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0f2a6b] text-sm">
                    {item.title}
                  </p>
                  <p className="text-xs text-[#6b7a9e]">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FEATURES SECTION
───────────────────────────────────────────── */
function FeaturesSection() {
  const features = [
    {
      icon: Code2,
      title: "Custom Development",
      desc: "Bespoke web applications built from scratch tailored to your specific business logic and requirements.",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      desc: "Built-in SEO best practices with server-side rendering, meta tags, structured data, and fast loading.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      desc: "Mobile-first approach ensuring perfect display and functionality across all devices and screen sizes.",
    },
    {
      icon: Shield,
      title: "Security First",
      desc: "Enterprise-grade security with SSL, data encryption, secure authentication, and regular audits.",
    },
    {
      icon: Cloud,
      title: "Cloud Deployment",
      desc: "Scalable cloud infrastructure on AWS, Google Cloud, or Azure with 99.9% uptime guarantee.",
    },
    {
      icon: TrendingUp,
      title: "Performance Optimized",
      desc: "Optimized Core Web Vitals scores ensuring better Google rankings and user experience.",
    },
  ];

  return (
    <section
      className="py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(26,63,160,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,63,160,0.03) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        backgroundColor: "#f8f9fc",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
            Key Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            What Makes Our Service{" "}
            <span className="text-[#e8a020]">Exceptional</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="group bg-white rounded-2xl p-6 border border-[#1a3fa0]/08 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a3fa0]/10 to-[#2952cc]/05 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#1a3fa0]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f2a6b] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#4a5578] leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TECH STACK SECTION
───────────────────────────────────────────── */
function TechStackSection() {
  const techs = [
    "React.js", "Next.js", "TypeScript", "Node.js",
    "PostgreSQL", "MongoDB", "AWS", "Docker",
    "GraphQL", "Redux", "Tailwind CSS", "Jest",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Technologies <span className="text-[#e8a020]">We Use</span>
          </h2>
          <p className="text-[#4a5578] max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build future-ready web
            applications
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {techs.map((tech, idx) => (
            <motion.div
              key={idx}
              className="px-5 py-3 bg-[#f4f6fb] rounded-xl border border-[#1a3fa0]/10 text-sm font-semibold text-[#1a3fa0] hover:bg-[#1a3fa0] hover:text-white transition-all duration-300 cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SERVICE PROCESS SECTION
───────────────────────────────────────────── */
function ServiceProcessSection() {
  const steps = [
    { step: "01", title: "Discovery & Analysis", desc: "We analyze your business goals, target audience, competitors, and technical requirements to build a solid foundation.", icon: Search },
    { step: "02", title: "Architecture & Design", desc: "Our architects design scalable system architecture while designers create intuitive UI/UX mockups.", icon: Layout },
    { step: "03", title: "Agile Development", desc: "2-week sprints with regular demos, transparent communication, and continuous integration.", icon: Code2 },
    { step: "04", title: "QA & Testing", desc: "Comprehensive testing including unit, integration, performance, and security testing.", icon: Shield },
    { step: "05", title: "Deployment & Launch", desc: "Smooth deployment to production with zero downtime and comprehensive monitoring setup.", icon: Rocket },
    { step: "06", title: "Maintenance & Support", desc: "24/7 monitoring, regular updates, security patches, and ongoing optimization.", icon: Headphones },
  ];

  return (
    <section className="py-20 bg-[#0f2a6b] overflow-hidden relative">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#e8a020]/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-widest text-[#e8a020] mb-4">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">
            How We <span className="text-[#e8a020]">Deliver</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A structured, transparent process ensuring quality at every stage
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-5xl font-bold text-white/8 absolute top-4 right-4 group-hover:text-[#e8a020]/15 transition-colors">{step.step}</div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1a3fa0] to-[#2952cc] flex items-center justify-center mb-4">
                <step.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   WHY CHOOSE THIS SERVICE SECTION
───────────────────────────────────────────── */
function WhyChooseServiceSection() {
  const reasons = [
    { icon: Users, title: "55+ Expert Developers", desc: "Dedicated team with average 5+ years experience in web technologies." },
    { icon: Clock, title: "13+ Years Experience", desc: "Delivering successful web projects since 2011 with proven track record." },
    { icon: Trophy, title: "200+ Web Projects", desc: "Extensive portfolio of successful web applications across industries." },
    { icon: BadgeCheck, title: "ISO 9001:2015 Certified", desc: "Certified quality management processes ensuring consistent excellence." },
    { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock technical support and maintenance services." },
    { icon: Globe, title: "Global Clientele", desc: "Trusted by clients across 25+ countries with multilingual capabilities." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
            Why Digitonix
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Why Choose Us For{" "}
            <span className="text-[#e8a020]">Web Development?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              className="bg-[#f8f9fc] rounded-2xl p-6 border border-[#1a3fa0]/08 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1a3fa0]/10 to-[#2952cc]/05 flex items-center justify-center mb-3">
                <reason.icon className="w-5 h-5 text-[#1a3fa0]" />
              </div>
              <h3 className="font-bold text-[#0f2a6b] mb-1">{reason.title}</h3>
              <p className="text-sm text-[#4a5578]">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PRICING SECTION (Placeholder)
───────────────────────────────────────────── */
function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "Starting at $2,999",
      features: ["Up to 5 Pages", "Responsive Design", "Basic SEO", "Contact Form", "1 Month Support"],
      popular: false,
    },
    {
      name: "Professional",
      price: "Starting at $7,999",
      features: ["Up to 20 Pages", "Custom Design", "Advanced SEO", "CMS Integration", "E-Commerce Ready", "3 Months Support"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom Quote",
      features: ["Unlimited Pages", "Custom Architecture", "Full SEO Suite", "API Integration", "Cloud Deployment", "12 Months Support"],
      popular: false,
    },
  ];

  return (
    <section
      className="py-20"
      style={{
        backgroundImage: "linear-gradient(rgba(26,63,160,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,63,160,0.03) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        backgroundColor: "#f8f9fc",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Flexible <span className="text-[#e8a020]">Pricing Plans</span>
          </h2>
          <p className="text-[#4a5578] max-w-2xl mx-auto">
            Choose a plan that fits your requirements and budget
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`relative bg-white rounded-2xl p-8 border ${
                plan.popular
                  ? "border-[#e8a020] shadow-xl ring-2 ring-[#e8a020]/20"
                  : "border-[#1a3fa0]/08 shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#e8a020] text-white px-4 py-1 rounded-full text-xs font-bold">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-[#0f2a6b] mb-2">{plan.name}</h3>
              <p className="text-2xl font-bold text-[#1a3fa0] mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[#4a5578]">
                    <CheckCircle2 className="w-4 h-4 text-[#e8a020] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`block w-full py-3 rounded-xl font-semibold text-center transition-all duration-300 ${
                  plan.popular
                    ? "bg-[#e8a020] text-white hover:bg-[#f0b832]"
                    : "bg-[#f4f6fb] text-[#1a3fa0] hover:bg-[#1a3fa0] hover:text-white"
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CASE STUDIES / PORTFOLIO SECTION
───────────────────────────────────────────── */
function CaseStudiesSection() {
  const caseStudies = [1, 2, 3];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Related <span className="text-[#e8a020]">Case Studies</span>
          </h2>
          <p className="text-[#4a5578] max-w-2xl mx-auto">
            See how we've helped businesses achieve their goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((_, idx) => (
            <motion.div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden border border-[#1a3fa0]/08 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 bg-gray-100">
                <Image
                  src={`https://images.unsplash.com/photo-${1460925895917 + idx}?auto=format&fit=crop&w=800&q=80`}
                  alt="Case Study"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-xs text-[#e8a020] font-semibold uppercase tracking-wider">
                  Case Study {idx + 1}
                </span>
                <h3 className="text-lg font-bold text-[#0f2a6b] mt-1 mb-2">
                  How We Helped a Client Achieve 200% Growth
                </h3>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#1a3fa0] hover:text-[#e8a020] transition-colors"
                >
                  Read Case Study <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FAQ SECTION
───────────────────────────────────────────── */
function FAQSection() {
  const faqs = [
    {
      q: "How long does it take to build a custom website?",
      a: "The timeline depends on the project complexity. A simple website takes 4-6 weeks, while complex web applications may take 3-6 months. We provide a detailed timeline during the discovery phase.",
    },
    {
      q: "What technologies do you use for web development?",
      a: "We specialize in React.js, Next.js, Node.js, TypeScript, and PostgreSQL. For CMS, we use WordPress and Strapi. We choose the best tech stack based on your project requirements.",
    },
    {
      q: "Do you provide website maintenance and support?",
      a: "Yes, we offer 24/7 maintenance and support services including security updates, performance optimization, content updates, and technical support.",
    },
    {
      q: "Is your web development SEO-friendly?",
      a: "Absolutely! All our websites are built with SEO best practices including server-side rendering, optimized Core Web Vitals, structured data, and mobile-first design.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="py-20"
      style={{
        backgroundImage: "linear-gradient(rgba(26,63,160,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,63,160,0.03) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        backgroundColor: "#f8f9fc",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Frequently Asked{" "}
            <span className="text-[#e8a020]">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl border border-[#1a3fa0]/08 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-[#0f2a6b]">{faq.q}</span>
                <ChevronRight
                  className={`w-5 h-5 text-[#1a3fa0] transition-transform duration-300 ${
                    openIndex === idx ? "rotate-90" : ""
                  }`}
                />
              </button>
              {openIndex === idx && (
                <motion.div
                  className="px-6 pb-4"
                >
                  <p className="text-[#4a5578] text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   RELATED SERVICES
───────────────────────────────────────────── */
function RelatedServicesSection() {
  const relatedServices = [
    { title: "E-Commerce Development", slug: "ecommerce-development", icon: ShoppingBag },
    { title: "CMS Development", slug: "cms-development", icon: Box },
    { title: "Mobile App Development", slug: "cross-platform-app-development", icon: Smartphone },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Related <span className="text-[#e8a020]">Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {relatedServices.map((service, idx) => (
            <Link
              key={idx}
              href={`/services/${service.slug}`}
              className="group bg-[#f8f9fc] rounded-2xl p-6 border border-[#1a3fa0]/08 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a3fa0]/10 to-[#2952cc]/05 flex items-center justify-center mx-auto mb-3">
                <service.icon className="w-6 h-6 text-[#1a3fa0]" />
              </div>
              <h3 className="font-bold text-[#0f2a6b] mb-2">{service.title}</h3>
              <span className="text-sm text-[#1a3fa0] font-semibold group-hover:text-[#e8a020] transition-colors">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
