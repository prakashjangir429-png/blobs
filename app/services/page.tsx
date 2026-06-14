"use client";

import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
  Bot,
  Shield,
  Search,
  Target,
  Share2,
  PenTool,
  Video,
  ShoppingBag,
  Apple,
  Monitor,
  Phone,
  Box,
  Laptop,
  Camera,
  BarChart3,
  Cpu,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
  Clock,
  BadgeCheck,
  Trophy,
  Star,
  Briefcase,
  Mail,
  MapPin,
  Globe,
  Layers,
  X,
  MessageSquare,
  Headphones,
  Settings,
  Database,
  Layout,
  Server,
  Smartphone as MobileIcon,
  ShoppingCart,
  Gift,
  Heart,
  Lightbulb,
  Eye,
  Workflow,
  Award,
  ChevronDown,
  Filter,
  Quote,
  ExternalLink,
  Play,
  Building2,
  Rocket,
} from "lucide-react";
import TopScorers from "@/components/tesmonials";
import { CTASection, StatsSection } from "@/components/pages/aboutus";

/* ─────────────────────────────────────────────
   BRAND COLORS
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
   SERVICE DATA WITH SEO CONTENT
───────────────────────────────────────────── */

const serviceCategories = [
  {
    id: "web",
    title: "Web Development",
    subtitle: "Custom websites & web applications",
    icon: Code2,
    color: "from-[#1a3fa0] to-[#2952cc]",
    bgColor: "bg-[#1a3fa0]",
    description:
      "Digitonix is a leading web development company in Jaipur, India, delivering custom websites, e-commerce solutions, and enterprise web applications built with cutting-edge technologies.",
    seoKeywords: "web development company Jaipur, custom website development India, e-commerce development, CMS development, React development, Next.js development",
    services: [
      {
        slug: "custom-web-development",
        title: "Custom Web Development",
        shortDesc: "Bespoke websites built from scratch for maximum performance, security, and SEO optimization.",
        fullDesc: "As a premier web development company in Jaipur, we build robust, scalable, and secure web applications using modern technologies like React, Next.js, Node.js, and Python. Our custom solutions are tailored to your specific business requirements, ensuring complete flexibility and future scalability.",
        icon: Laptop,
        features: [
          "Progressive Web Applications (PWA)",
          "Server-Side Rendering (SSR) for SEO",
          "RESTful & GraphQL API Integration",
          "Cloud-Native Architecture & Deployment",
          "Microservices Architecture",
          "Performance Optimization (Core Web Vitals)",
        ],
        techStack: ["React.js", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
        process: ["Discovery", "Architecture Design", "Agile Development", "QA Testing", "Deployment", "Maintenance"],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
        stats: { projects: "200+", satisfaction: "98%", delivery: "On-Time" },
      },
      {
        slug: "ecommerce-development",
        title: "E-Commerce Development",
        shortDesc: "High-converting online stores with seamless checkout and payment integration.",
        fullDesc: "Boost your online sales with our expert e-commerce development services. From Shopify stores to custom headless commerce architectures, we create online shopping experiences that maximize conversions and customer retention with optimized checkout flows and mobile-first design.",
        icon: ShoppingBag,
        features: [
          "Multi-Payment Gateway Integration",
          "Inventory & Order Management",
          "Multi-Currency & Multi-Language",
          "SEO-Optimized Product Pages",
          "Abandoned Cart Recovery",
          "Analytics & Conversion Tracking",
        ],
        techStack: ["Shopify", "WooCommerce", "Magento", "Stripe", "Next.js"],
        process: ["Store Design", "Product Migration", "Payment Setup", "Testing", "Launch", "Optimization"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80",
        stats: { projects: "150+", satisfaction: "97%", delivery: "On-Time" },
      },
      {
        slug: "cms-development",
        title: "CMS Development",
        shortDesc: "User-friendly content management systems for dynamic, content-rich websites.",
        fullDesc: "Take control of your content with our CMS development services. We specialize in WordPress, Strapi, and Contentful, creating custom themes, plugins, and headless CMS architectures that empower your team to manage content effortlessly without technical expertise.",
        icon: Box,
        features: [
          "Custom Theme & Plugin Development",
          "Headless CMS Architecture",
          "Role-Based Access Control",
          "Multi-Language Content Management",
          "SEO-Friendly Structure",
          "Content Migration Services",
        ],
        techStack: ["WordPress", "Strapi", "Contentful", "PHP", "GraphQL"],
        process: ["Content Audit", "Architecture Design", "Development", "Content Migration", "Training", "Support"],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
        stats: { projects: "100+", satisfaction: "99%", delivery: "On-Time" },
      },
    ],
  },
  {
    id: "app",
    title: "App Development",
    subtitle: "iOS, Android & cross-platform apps",
    icon: Smartphone,
    color: "from-[#e8a020] to-[#f0b832]",
    bgColor: "bg-[#e8a020]",
    description:
      "Digitonix offers professional mobile app development services in Jaipur, creating native iOS, Android, and cross-platform applications that deliver exceptional user experiences and drive business growth.",
    seoKeywords: "mobile app development company Jaipur, iOS app development India, Android app development, Flutter development, React Native development, cross-platform app development",
    services: [
      {
        slug: "ios-app-development",
        title: "iOS App Development",
        shortDesc: "Premium native iPhone and iPad applications for the Apple ecosystem.",
        fullDesc: "We create stunning, high-performance iOS applications using Swift and SwiftUI. Our iOS apps adhere to Apple's strict design guidelines, leverage the latest iOS features, and deliver smooth, intuitive experiences across iPhone and iPad devices.",
        icon: Apple,
        features: [
          "SwiftUI & UIKit Development",
          "CoreData & CloudKit Integration",
          "Push Notifications & Rich Media",
          "App Store Optimization (ASO)",
          "In-App Purchases & Subscriptions",
          "ARKit & Machine Learning Integration",
        ],
        techStack: ["Swift", "SwiftUI", "Xcode", "Firebase", "CoreML"],
        process: ["Concept & Strategy", "UI/UX Design", "Development", "TestFlight Beta", "App Store Launch", "Maintenance"],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
        stats: { projects: "80+", satisfaction: "98%", delivery: "On-Time" },
      },
      {
        slug: "android-app-development",
        title: "Android App Development",
        shortDesc: "Robust applications reaching billions of Android users worldwide.",
        fullDesc: "Reach the widest mobile audience with our expert Android development services. Built with Kotlin and Jetpack Compose, our Android apps are optimized for thousands of device configurations and deliver consistent performance across all Android versions.",
        icon: Phone,
        features: [
          "Kotlin & Jetpack Compose",
          "Material Design 3 Implementation",
          "Google Play Services Integration",
          "Offline-First Architecture",
          "Background Processing & Sync",
          "Play Store Optimization",
        ],
        techStack: ["Kotlin", "Jetpack Compose", "Android Studio", "Firebase", "Room DB"],
        process: ["Requirements Analysis", "UI/UX Design", "Development", "Testing", "Play Store Launch", "Support"],
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
        stats: { projects: "90+", satisfaction: "97%", delivery: "On-Time" },
      },
      {
        slug: "cross-platform-app-development",
        title: "Cross-Platform Development",
        shortDesc: "Single codebase for both iOS and Android - cost-effective and fast.",
        fullDesc: "Launch your app on both iOS and Android simultaneously with our cross-platform development services. Using Flutter and React Native, we build high-performance applications with native-like experiences while reducing development time and cost by up to 40%.",
        icon: Monitor,
        features: [
          "Single Codebase for iOS & Android",
          "Near-Native Performance (60 FPS)",
          "Hot Reload for Faster Development",
          "Unified UI Across Platforms",
          "Native API Access",
          "Cost-Effective Development",
        ],
        techStack: ["Flutter", "React Native", "Dart", "TypeScript", "Firebase"],
        process: ["Platform Strategy", "Prototype", "Development", "Testing", "Dual Launch", "Maintenance"],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
        stats: { projects: "120+", satisfaction: "98%", delivery: "On-Time" },
      },
    ],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    subtitle: "SEO, PPC & social media marketing",
    icon: Megaphone,
    color: "from-[#1a3fa0] to-[#2952cc]",
    bgColor: "bg-[#1a3fa0]",
    description:
      "Digitonix provides comprehensive digital marketing services in Jaipur, including SEO, PPC advertising, social media marketing, and content marketing to help businesses increase online visibility and generate qualified leads.",
    seoKeywords: "digital marketing company Jaipur, SEO services India, PPC advertising, social media marketing, content marketing, Google Ads management",
    services: [
      {
        slug: "seo-services",
        title: "SEO Optimization",
        shortDesc: "Rank higher on Google and drive organic, sustainable traffic growth.",
        fullDesc: "Dominate search engine results with our comprehensive SEO services. We implement white-hat SEO strategies including technical optimization, keyword research, content strategy, and quality link building to improve your organic rankings and drive qualified traffic.",
        icon: Search,
        features: [
          "Technical SEO Audit & Fixes",
          "Keyword Research & Strategy",
          "On-Page & Off-Page Optimization",
          "Quality Link Building",
          "Local SEO Optimization",
          "Monthly Performance Reports",
        ],
        techStack: ["Ahrefs", "SEMrush", "Google Analytics 4", "Search Console", "Screaming Frog"],
        process: ["SEO Audit", "Strategy Development", "On-Page Optimization", "Off-Page & Links", "Monitoring", "Reporting"],
        image: "https://images.unsplash.com/photo-1571721795195-a2ca2d337069?auto=format&fit=crop&w=800&q=80",
        stats: { projects: "300+", satisfaction: "99%", delivery: "Monthly" },
      },
      {
        slug: "ppc-advertising",
        title: "PPC Advertising",
        shortDesc: "Instant targeted traffic through Google, Facebook, and LinkedIn ads.",
        fullDesc: "Maximize your advertising ROI with precision-targeted PPC campaigns. We manage Google Ads, Meta (Facebook/Instagram) Ads, and LinkedIn Ads with meticulous budget optimization, A/B testing, and conversion tracking to lower CPA and increase conversions.",
        icon: Target,
        features: [
          "Google Ads & Shopping Campaigns",
          "Meta (Facebook/Instagram) Ads",
          "LinkedIn B2B Advertising",
          "A/B Testing & Optimization",
          "Conversion Rate Optimization",
          "ROI Tracking & Analytics Dashboard",
        ],
        techStack: ["Google Ads", "Meta Ads Manager", "LinkedIn Ads", "Google Tag Manager", "Looker Studio"],
        process: ["Account Setup", "Campaign Strategy", "Ad Creation", "Launch & Monitor", "Optimize", "Scale"],
        image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80",
        stats: { projects: "250+", satisfaction: "98%", delivery: "Ongoing" },
      },
      {
        slug: "social-media-marketing",
        title: "Social Media Marketing",
        shortDesc: "Build brand loyalty and engage your community across social platforms.",
        fullDesc: "Transform followers into loyal customers with our social media marketing services. We create engaging content strategies, manage communities, run influencer campaigns, and analyze performance to build a strong social presence that drives business results.",
        icon: Share2,
        features: [
          "Content Strategy & Calendar",
          "Community Management",
          "Influencer Outreach & Collaboration",
          "Social Media Advertising",
          "Performance Analytics",
          "Brand Reputation Management",
        ],
        techStack: ["Hootsuite", "Canva Pro", "Buffer", "Sprout Social", "Meta Business Suite"],
        process: ["Strategy Development", "Content Creation", "Scheduling & Posting", "Community Engagement", "Analysis", "Optimization"],
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
        stats: { projects: "180+", satisfaction: "97%", delivery: "Monthly" },
      },
    ],
  },
  {
    id: "creative",
    title: "Creative Design",
    subtitle: "UI/UX, branding & video production",
    icon: Palette,
    color: "from-[#e8a020] to-[#f0b832]",
    bgColor: "bg-[#e8a020]",
    description:
      "Digitonix offers professional creative design services in Jaipur, including UI/UX design, graphic design, branding, content writing, and video production to help businesses create compelling visual identities.",
    seoKeywords: "UI/UX design company Jaipur, graphic design services India, branding agency, content writing services, video production company, logo design",
    services: [
      {
        slug: "ui-ux-design",
        title: "UI/UX Design Services",
        shortDesc: "User-centered design that drives engagement and conversions.",
        fullDesc: "Create exceptional digital experiences with our professional UI/UX design services. We combine user research, interaction design, and visual design to create intuitive interfaces that delight users and achieve business objectives. Our designs are data-driven and conversion-focused.",
        icon: Layout,
        features: [
          "User Research & Personas",
          "Wireframing & Prototyping",
          "Interaction Design",
          "Visual Design & Design Systems",
          "Usability Testing",
          "Design Handoff & Documentation",
        ],
        techStack: ["Figma", "Sketch", "Adobe XD", "InVision", "Zeplin"],
        process: ["Research", "Wireframing", "Visual Design", "Prototyping", "Testing", "Handoff"],
        image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?auto=format&fit=crop&w=800&q=80",
        stats: { projects: "150+", satisfaction: "99%", delivery: "On-Time" },
      },
      {
        slug: "graphic-design-branding",
        title: "Graphic Design & Branding",
        shortDesc: "Memorable brand identities and marketing collateral that stand out.",
        fullDesc: "Build a powerful brand identity with our graphic design and branding services. From logo design to complete brand guidelines, marketing collateral, and packaging design, we create cohesive visual identities that communicate your brand values and resonate with your target audience.",
        icon: Palette,
        features: [
          "Logo Design & Brand Identity",
          "Brand Guidelines & Style Guides",
          "Marketing Collateral Design",
          "Packaging & Label Design",
          "Social Media Graphics",
          "Presentation & Pitch Deck Design",
        ],
        techStack: ["Adobe Illustrator", "Photoshop", "InDesign", "Figma", "After Effects"],
        process: ["Brand Discovery", "Concept Development", "Design Refinement", "Brand Guidelines", "Asset Delivery", "Support"],
        image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?auto=format&fit=crop&w=800&q=80",
        stats: { projects: "200+", satisfaction: "98%", delivery: "On-Time" },
      },
      {
        slug: "content-writing",
        title: "Content Writing Services",
        shortDesc: "SEO-optimized, persuasive content that converts readers into customers.",
        fullDesc: "Drive engagement and conversions with professional content writing services. Our team of experienced copywriters creates compelling blog posts, website copy, email sequences, whitepapers, and social media content that speaks directly to your audience and ranks well in search engines.",
        icon: PenTool,
        features: [
          "SEO Blog Writing",
          "Website Copywriting",
          "Email Marketing Sequences",
          "Whitepapers & E-books",
          "Product Descriptions",
          "Social Media Content",
        ],
        techStack: ["Grammarly", "Hemingway Editor", "SurferSEO", "WordPress", "Google Docs"],
        process: ["Topic Research", "Outline Creation", "Drafting", "Editing & Proofing", "SEO Optimization", "Publishing"],
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
        stats: { projects: "500+", satisfaction: "99%", delivery: "On-Time" },
      },
    ],
  },
];

const serviceStats = [
  { number: 650, suffix: "+", label: "Projects Delivered", icon: Briefcase },
  { number: 98, suffix: "%", label: "Client Satisfaction", icon: Star },
  { number: 55, suffix: "+", label: "Expert Engineers", icon: Users },
  { number: 13, suffix: "+", label: "Years Experience", icon: Clock },
];

const whyChooseUs = [
  {
    icon: Zap,
    title: "Agile Development",
    desc: "2-week sprints with rapid iterations and quick time-to-market for your digital products.",
  },
  {
    icon: ShieldCheck,
    title: "ISO 9001:2015 Certified",
    desc: "Enterprise-grade quality standards with certified processes and zero-critical-bug policy.",
  },
  {
    icon: Users,
    title: "55+ Dedicated Experts",
    desc: "Full-time professionals working exclusively on your project with daily progress updates.",
  },
  {
    icon: TrendingUp,
    title: "ROI-Focused Approach",
    desc: "Data-driven strategies designed to maximize returns and deliver measurable business growth.",
  },
  {
    icon: Headphones,
    title: "24/7 Technical Support",
    desc: "Round-the-clock maintenance and support to keep your systems running at peak performance.",
  },
  {
    icon: Globe,
    title: "Global Clientele",
    desc: "Trusted by clients across 25+ countries with multilingual development capabilities.",
  },
];

const clientLogos = [
  { name: "Client 1", industry: "E-Commerce" },
  { name: "Client 2", industry: "Healthcare" },
  { name: "Client 3", industry: "Education" },
  { name: "Client 4", industry: "Finance" },
  { name: "Client 5", industry: "Real Estate" },
  { name: "Client 6", industry: "Technology" },
];

/* ─────────────────────────────────────────────
   MAIN SERVICES PAGE
───────────────────────────────────────────── */
export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const filteredCategories =
    activeCategory === "all"
      ? serviceCategories
      : serviceCategories.filter((cat) => cat.id === activeCategory);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ── HERO WITH PARALLAX ── */}
      <HeroSection
        heroRef={heroRef}
        heroOpacity={heroOpacity}
        heroScale={heroScale}
        heroY={heroY}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        isFilterOpen={isFilterOpen}
        setIsFilterOpen={setIsFilterOpen}
      />

      {/* ── STATS SECTION ── */}
      <StatsSection />

      {/* ── SERVICES GRID ── */}
      <ServicesGridSection
        activeCategory={activeCategory}
        filteredCategories={filteredCategories}
      />

      {/* ── WHY CHOOSE US ── */}
      <WhyChooseUsSection />

      {/* ── PROCESS SECTION ── */}
      <ProcessSection />

      {/* ── CLIENTS SECTION ── */}
      <ClientsSection />

      {/* ── TESTIMONIALS ── */}
      <TopScorers />

      {/* ── CTA SECTION WITH PARALLAX ── */}
      <CTASection />
    </div>
  );
}

/* ─────────────────────────────────────────────
   HERO SECTION WITH PARALLAX
───────────────────────────────────────────── */
function HeroSection({
  heroRef,
  heroOpacity,
  heroScale,
  heroY,
  activeCategory,
  setActiveCategory,
  isFilterOpen,
  setIsFilterOpen,
}: {
  heroRef: any;
  heroOpacity: any;
  heroScale: any;
  heroY: any;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  isFilterOpen: boolean;
  setIsFilterOpen: (open: boolean) => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <style>{`
        .services-hero-section {
          position: relative;
          overflow: hidden;
        }
        .services-hero-tag {
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
        .services-hero-tag-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #e8a020;
          box-shadow: 0 0 0 3px rgba(232,160,32,0.25);
          animation: services-pulse 2s ease infinite;
        }
        @keyframes services-pulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(232,160,32,0.25); }
          50%     { box-shadow: 0 0 0 7px rgba(232,160,32,0.08); }
        }
        .gold-word { color: #e8a020; }
      `}</style>

      <section
        ref={heroRef}
        className="services-hero-section relative min-h-[95vh] flex items-center justify-center"
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

          {/* Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.4) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="text-center max-w-7xl mx-auto">
            {/* Live Hiring Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="services-hero-tag mb-6 mx-auto w-fit"
            >
              Leading IT Services Company in India
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl font-semibold text-[#0f2a6b] leading-tight mb-6"
            >
              Comprehensive{" "}
              <span className="gold-word">Digital Solutions</span>
              <br />
              For Your Business Growth
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-[#4a5578] leading-relaxed mb-8 max-w-6xl mx-auto font-light"
            >
              Digitonix is a trusted{" "}
              <strong className="font-semibold text-[#0f2a6b]">
                web development, mobile app development, and digital marketing company in Jaipur, India
              </strong>
              . Since 2011, we've delivered 650+ projects with 98% client satisfaction, helping startups, SMEs, and enterprises achieve measurable digital growth through innovative technology solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full
                           font-semibold text-white relative overflow-hidden
                           shadow-lg shadow-[#1a3fa0]/30 hover:shadow-[#1a3fa0]/40
                           hover:-translate-y-1 transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #1a3fa0, #2952cc)" }}
              >
                <span className="relative z-10">Get Free Consultation</span>
                <ArrowUpRight size={18} className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full
                           font-semibold text-[#1a3fa0] bg-white border-2 border-[#1a3fa0]/20
                           hover:border-[#1a3fa0]/40 hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                View Our Portfolio
                <ChevronRight size={18} />
              </Link>
            </motion.div>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center justify-center gap-6"
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
   SERVICES GRID SECTION
───────────────────────────────────────────── */
function ServicesGridSection({
  activeCategory,
  filteredCategories,
}: {
  activeCategory: string;
  filteredCategories: any[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  return (
    <section className="py-12 bg-white" id="services-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Our <span className="text-[#e8a020]">Services</span>
          </h2>
          <p className="text-[#4a5578] max-w-2xl mx-auto">
            End-to-end digital solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${selectedCategory === "all"
                ? "bg-[#0f2a6b] text-white shadow-lg"
                : "bg-white text-[#1a3fa0] border border-[#1a3fa0]/20 hover:border-[#1a3fa0]/40"
              }`}
          >
            All Services
          </button>
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${selectedCategory === cat.id
                  ? "bg-[#0f2a6b] text-white shadow-lg"
                  : "bg-white text-[#1a3fa0] border border-[#1a3fa0]/20 hover:border-[#1a3fa0]/40"
                }`}
            >
              <cat.icon size={16} />
              {cat.title}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {(selectedCategory === "all"
              ? serviceCategories
              : serviceCategories.filter((cat) => cat.id === selectedCategory)
            ).flatMap((category) =>
              category.services.map((service: any, idx: number) => (
                <motion.div
                  key={service.slug}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  className=" relative"
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="block bg-white border border-[#1a3fa0]/18 hover:shadow-xl hover:border-[#e8a020]/30 transition-all duration-300 overflow-hidden"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="flex items-center gap-2 mb-1">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                            <service.icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-xs font-medium uppercase tracking-wider opacity-80">
                            {category.title}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold">{service.title}</h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <p className="text-base text-[#4a5578] mb-4 line-clamp-3">
                        {service.shortDesc}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-1.5">
                          {service.techStack.slice(0, 3).map((tech: string, i: number) => (
                            <span key={i} className="text-xs font-medium px-2 py-1 bg-[#f4f6fb] text-[#1a3fa0] rounded-md border border-[#1a3fa0]/08">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <span className="flex items-center text-[#e8a020] font-semibold text-sm group-hover:translate-x-1 transition-transform">
                          Explore <ArrowRight size={14} className="ml-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   WHY CHOOSE US SECTION
───────────────────────────────────────────── */
function WhyChooseUsSection() {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      className="relative w-full py-12 px-4 md:px-8 lg:px-12"
      style={{
        backgroundImage: "linear-gradient(rgba(26,63,160,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,63,160,0.03) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        backgroundColor: "#f8f9fc",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Why Partner With <span className="text-[#e8a020]">Digitonix?</span>
          </h2>
          <p className="text-[#4a5578] max-w-2xl mx-auto">
            We deliver quality, innovation, and measurable results that drive your business forward
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-2">
          {whyChooseUs.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group bg-white rounded-2xl p-4 border border-[#1a3fa0]/08 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <item.icon className="w-6 h-6 stroke-[1.5] mb-2 text-[#1a3fa0]" />
              <h3 className="text-lg font-bold text-[#0f2a6b] mb-2">{item.title}</h3>
              <p className="text-sm text-[#4a5578] leading-relaxed">{item.desc}</p>
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
  const steps = [
    { step: "01", title: "Discovery", desc: "We analyze your business goals, target audience, and technical requirements.", icon: Search },
    { step: "02", title: "Strategy", desc: "Our team creates a detailed roadmap with technology stack and milestones.", icon: Target },
    { step: "03", title: "Development", desc: "Agile sprints with regular demos and transparent progress tracking.", icon: Code2 },
    { step: "04", title: "Launch & Support", desc: "Smooth deployment with ongoing maintenance and 24/7 support.", icon: Rocket },
  ];

  return (
    <section className="relative w-full py-12 px-4 md:px-8 lg:px-12 bg-[#0f2a6b] overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
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
            Our Service <span className="text-[#e8a020]">Delivery Process</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A proven methodology ensuring quality, transparency, and timely delivery
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-6xl font-bold text-white/8 absolute top-4 right-4 group-hover:text-[#e8a020]/15 transition-colors">{step.step}</div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a3fa0] to-[#2952cc] flex items-center justify-center mb-5">
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CLIENTS SECTION
───────────────────────────────────────────── */
function ClientsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
            Our Clients
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Trusted by <span className="text-[#e8a020]">Industry Leaders</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {clientLogos.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-gray-50 rounded-xl p-6 text-center border border-[#1a3fa0]/05 hover:border-[#e8a020]/20 hover:shadow-md transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#1a3fa0]/10 to-[#2952cc]/05 rounded-full flex items-center justify-center mb-3">
                <Building2 className="w-8 h-8 text-[#1a3fa0]" />
              </div>
              <p className="text-sm font-semibold text-[#0f2a6b]">{client.industry}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}