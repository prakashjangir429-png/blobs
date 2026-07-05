"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Users,
  Briefcase,
  Clock,
  ArrowRight,
  Shield,
  Eye,
  Target,
  Heart,
  Zap,
  Globe,
  Building2,
  Trophy,
  Phone,
  Mail,
  MapPin,
  Star,
  ChevronRight,
  Code2,
  Smartphone,
  Megaphone,
  Palette,
  Cloud,
  Bot,
  Search,
  Rocket,
  Flag,
  BadgeCheck,
  TrendingUp,
  Sparkles,
  Calendar,
  Video,
  Coffee,
  Award,
  Gift,
  Wifi,
  Laptop,
  Headphones,
  UserPlus,
  BarChart3,
  Compass,
  Lightbulb,
  MessageSquare,
  ThumbsUp,
  Users2,
  Handshake,
  Target as TargetIcon,
  Layers,
  FileCheck,
  PlayCircle,
  PenTool,
  Server,
  Database,
  Chrome,
  Apple,
  Figma,
  Github as GithubIcon,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

/* ─────────────────────────────────────────────
   BRAND COLORS (matching your home page)
   Primary: #0f2a6b / #1a3fa0 / #2952cc (deep navy)
   Accent:  #e8a020 / #f0b832 (gold)
   Text:    #4a5578 (body), #0f2a6b (headings)
   BG:      #f8f9fc / #f4f6fb (light sections)
   Cards:   white with border-[#1a3fa0]/10
───────────────────────────────────────────── */

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const hireBenefits = [
  {
    title: "Dedicated Team",
    description:
      "Get a fully dedicated team of developers, designers, and project managers who work exclusively on your project with complete focus and commitment.",
    icon: Users,
    stats: "55+ Experts Available",
  },
  {
    title: "Flexible Engagement",
    description:
      "Choose from hourly, monthly, or project-based engagement models. Scale your team up or down as your project requirements evolve.",
    icon: Clock,
    stats: "Flexible Models",
  },
  {
    title: "Cost-Effective Solutions",
    description:
      "Access top-tier talent at competitive rates. Save up to 60% on development costs compared to hiring in Western markets.",
    icon: Shield,
    stats: "60% Cost Savings",
  },
  {
    title: "Quality Assurance",
    description:
      "Rigorous testing, code reviews, and quality checks at every stage. We deliver bug-free, scalable, and secure solutions.",
    icon: BadgeCheck,
    stats: "98% Client Retention",
  },
  {
    title: "Transparent Process",
    description:
      "Daily standups, weekly reports, and real-time project tracking. Full visibility into progress, challenges, and milestones.",
    icon: Eye,
    stats: "100% Transparency",
  },
  {
    title: "Quick Onboarding",
    description:
      "Get started within 48 hours. We have pre-vetted developers ready to join your project immediately.",
    icon: Rocket,
    stats: "48hr Onboarding",
  },
];

const hireProcess = [
  {
    step: "01",
    title: "Share Your Requirements",
    desc: "Tell us about your project goals, technical needs, timeline, and budget. We'll analyze and prepare a tailored solution.",
    icon: MessageSquare,
    details: ["Project Brief", "Technical Requirements", "Budget & Timeline"],
  },
  {
    step: "02",
    title: "Choose Your Team",
    desc: "We present a curated team of experts matching your requirements. You review profiles and select the perfect fit.",
    icon: Users2,
    details: ["Team Selection", "Skill Matching", "Profile Reviews"],
  },
  {
    step: "03",
    title: "Onboard & Start",
    desc: "Seamless onboarding with NDA signing, project setup, and tool access. Your team starts delivering from day one.",
    icon: Rocket,
    details: ["NDA & Contracts", "Project Setup", "Development Begins"],
  },
  {
    step: "04",
    title: "Scale As You Grow",
    desc: "Easily scale your team up or down based on project needs. Add new skills or resources at any time.",
    icon: TrendingUp,
    details: ["Team Scaling", "Skill Expansion", "Continuous Delivery"],
  },
];

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "TypeScript", icon: "📘" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "GraphQL", icon: "🔮" },
  { name: "Vue.js", icon: "🟩" },
  { name: "Angular", icon: "🅰️" },
];

const engagementModels = [
  {
    title: "Hourly",
    price: "$25-45",
    desc: "Flexible engagement for short-term tasks and maintenance.",
    features: [
      "No long-term commitment",
      "Pay for actual hours worked",
      "Weekly reporting",
      "Suitable for support & maintenance",
    ],
    icon: Clock,
  },
  {
    title: "Monthly",
    price: "$3,000-8,000",
    desc: "Full-time dedication with predictable monthly billing.",
    features: [
      "160+ hours per month",
      "Dedicated team members",
      "Monthly sprint planning",
      "Regular progress reviews",
    ],
    icon: Calendar,
  },
  {
    title: "Project-Based",
    price: "Custom Quote",
    desc: "Complete solution delivery with fixed scope and timeline.",
    features: [
      "Fixed price guarantee",
      "Clear deliverables",
      "Structured project plan",
      "Post-launch support",
    ],
    icon: TargetIcon,
  },
];

const whyHireUs = [
  {
    title: "55+ Expert Engineers",
    description:
      "A diverse team of skilled developers, designers, and QA professionals with 5+ years average experience.",
    icon: Users,
  },
  {
    title: "650+ Projects Delivered",
    description:
      "Proven track record of successful deliveries across 25+ countries for startups and enterprises.",
    icon: Trophy,
  },
  {
    title: "ISO 9001:2015 Certified",
    description:
      "Certified quality management systems ensuring consistent, high-quality deliverables.",
    icon: Award,
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock support with dedicated account managers and technical teams.",
    icon: Headphones,
  },
];

/* ─────────────────────────────────────────────
   MAIN HIRE PAGE COMPONENT
───────────────────────────────────────────── */
export default function HirePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ── HERO SECTION ── */}
      <HeroSection />

      {/* ── WHY HIRE US ── */}
      <WhyHireSection />

      {/* ── BENEFITS SECTION ── */}
      <BenefitsSection />

      {/* ── ENGAGEMENT MODELS ── */}
      <EngagementModelsSection />

      {/* ── TECH STACK ── */}
      <TechStackSection />

      {/* ── PROCESS SECTION ── */}
      <ProcessSection />

      {/* ── FAQ SECTION ── */}
      <FAQSection />

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
        .hire-hero-section {
          background-image:
            linear-gradient(rgba(26,63,160,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,63,160,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          background-color: #f8f9fc;
        }
        .gold-word { color: #e8a020; }
      `}</style>

      <section
        ref={ref}
        className="hire-hero-section relative w-full pt-32 pb-20 px-4 md:px-8 lg:px-12 overflow-hidden"
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(232,160,32,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT — Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4"
              >
                <UserPlus size={14} className="text-[#e8a020]" />
                Hire Expert Developers
              </motion.div>

              <motion.h1 {...fadeUp(0.08)} className="text-3xl sm:text-4xl md:text-[2.8rem] font-semibold text-[#0f2a6b] leading-[1.2] mb-6">
                Hire Top Tech <br />
                <span className="gold-word">Talent</span> From India
              </motion.h1>

              <motion.p {...fadeUp(0.14)} className="text-[#4a5578] text-base sm:text-lg leading-relaxed mb-4 font-light">
                Access skilled developers, designers, and project managers
                from India's leading IT services company. Build your dream
                team with <strong className="font-semibold text-[#0f2a6b]">55+ experts</strong> and
                <strong className="font-semibold text-[#0f2a6b]"> 13 years</strong> of delivery excellence.
              </motion.p>

              <motion.div {...fadeUp(0.18)} className="flex flex-wrap gap-3 mb-6">
                {["Dedicated Teams", "Flexible Engagement", "Cost-Effective", "Quick Onboarding"].map(
                  (item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/12 text-xs font-semibold text-[#1a3fa0] shadow-sm"
                    >
                      <CheckCircle2 size={12} className="text-[#e8a020]" />
                      {item}
                    </span>
                  )
                )}
              </motion.div>

              <motion.div {...fadeUp(0.22)} className="flex flex-wrap gap-3">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm text-white relative overflow-hidden shadow-lg shadow-[#1a3fa0]/25 hover:shadow-[#1a3fa0]/35 hover:-translate-y-1 transition-all duration-300"
                  style={{ background: "linear-gradient(135deg, #1a3fa0, #2952cc)" }}
                >
                  <span className="relative z-10">Hire Now</span>
                  <ArrowUpRight size={16} className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link
                  href="#process"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-[#1a3fa0] bg-white border border-[#1a3fa0]/20 hover:border-[#1a3fa0]/40 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  How It Works
                  <ChevronRight size={16} />
                </Link>
              </motion.div>
            </div>

            {/* RIGHT — Visual */}
            <motion.div {...fadeUp(0.12)} className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px]">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/home/b1.png"
                    alt="Hire Expert Developers from Digitonix"
                    width={550}
                    height={450}
                    className="w-full object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 border border-[#1a3fa0]/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0f2a6b]/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#1a3fa0]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#0f2a6b]">55+ Experts</div>
                    <div className="text-[10px] text-gray-500">Ready to hire</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3 border border-[#e8a020]/20 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#e8a020]/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#e8a020]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#0f2a6b]">48hr Onboarding</div>
                    <div className="text-[10px] text-gray-500">Quick start</div>
                  </div>
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
   WHY HIRE SECTION
───────────────────────────────────────────── */
function WhyHireSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative w-full py-20 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
            Why Hire Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Build Your <span className="text-[#e8a020]">Dream Team</span>
          </h2>
          <p className="text-[#4a5578] max-w-2xl mx-auto">
            Partner with India's most trusted IT services provider for your
            development needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyHireUs.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-2xl p-6 border border-[#1a3fa0]/08 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1a3fa0]/10 to-[#2952cc]/05 flex items-center justify-center mx-auto mb-4 group-hover:from-[#1a3fa0] group-hover:to-[#2952cc] transition-colors duration-300">
                <item.icon className="w-7 h-7 text-[#1a3fa0] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#0f2a6b] mb-2">{item.title}</h3>
              <p className="text-sm text-[#4a5578] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   BENEFITS SECTION
───────────────────────────────────────────── */
function BenefitsSection() {
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
      className="relative w-full py-20 px-4 md:px-8 lg:px-12"
      style={{
        backgroundImage:
          "linear-gradient(rgba(26,63,160,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,63,160,0.03) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        backgroundColor: "#f8f9fc",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Benefits of <span className="text-[#e8a020]">Hiring</span> With Us
          </h2>
          <p className="text-[#4a5578] max-w-2xl mx-auto">
            We provide everything you need to build, scale, and succeed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hireBenefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              {...fadeUp(0.05 * idx)}
              className="group bg-white rounded-2xl p-7 border border-[#1a3fa0]/08 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1a3fa0] to-[#e8a020] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a3fa0]/10 to-[#2952cc]/05 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-[#1a3fa0]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f2a6b] mb-2">{benefit.title}</h3>
              <p className="text-sm text-[#4a5578] leading-relaxed mb-3">{benefit.description}</p>
              <span className="inline-block px-4 py-1.5 bg-gradient-to-br from-[#1a3fa0]/08 to-[#2952cc]/05 rounded-full text-xs font-semibold text-[#1a3fa0]">
                {benefit.stats}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ENGAGEMENT MODELS SECTION
───────────────────────────────────────────── */
function EngagementModelsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative w-full py-20 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
            Engagement Models
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Flexible <span className="text-[#e8a020]">Hiring</span> Options
          </h2>
          <p className="text-[#4a5578] max-w-2xl mx-auto">
            Choose the engagement model that best fits your project needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {engagementModels.map((model, idx) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-7 border border-[#1a3fa0]/08 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1a3fa0] to-[#e8a020]" />
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a3fa0]/10 to-[#2952cc]/05 flex items-center justify-center mb-4">
                <model.icon className="w-6 h-6 text-[#1a3fa0]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f2a6b] mb-1">{model.title}</h3>
              <div className="text-2xl font-bold text-[#e8a020] mb-3">{model.price}</div>
              <p className="text-sm text-[#4a5578] mb-4">{model.desc}</p>
              <ul className="space-y-2">
                {model.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#4a5578]">
                    <CheckCircle2 className="w-4 h-4 text-[#1a3fa0] flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className="mt-5 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-[#1a3fa0] bg-white border border-[#1a3fa0]/20 hover:bg-[#1a3fa0] hover:text-white transition-all duration-300"
              >
                Choose {model.title}
                <ArrowRight size={16} />
              </Link>
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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
            Technology Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Modern <span className="text-[#e8a020]">Tech</span> Expertise
          </h2>
          <p className="text-[#4a5578] max-w-2xl mx-auto">
            Our engineers are proficient in the latest technologies and frameworks
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStack.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.05 }}
              className="group bg-white rounded-xl p-5 text-center border border-[#1a3fa0]/08 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{tech.icon}</div>
              <div className="text-sm font-semibold text-[#0f2a6b] group-hover:text-[#e8a020] transition-colors">
                {tech.name}
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
    <section ref={ref} className="relative w-full py-20 px-4 md:px-8 lg:px-12 bg-[#0f2a6b] overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#e8a020]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#2952cc]/10 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-widest text-[#e8a020] mb-4">
            Hire Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">
            How to <span className="text-[#e8a020]">Hire</span> With Us
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A simple, transparent process to get you started in no time
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hireProcess.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-6xl font-bold text-white/8 absolute top-4 right-4 group-hover:text-[#e8a020]/15 transition-colors">
                {step.step}
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a3fa0] to-[#2952cc] flex items-center justify-center mb-5">
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">{step.desc}</p>
              <ul className="space-y-2">
                {step.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-gray-400">
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
   FAQ SECTION
───────────────────────────────────────────── */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How quickly can I hire a developer?",
      a: "We can onboard developers within 48 hours. We maintain a pool of pre-vetted professionals ready to start immediately. The timeline depends on your specific requirements and the complexity of skills needed.",
    },
    {
      q: "What engagement models do you offer?",
      a: "We offer flexible engagement models: Hourly (for short-term tasks), Monthly (for full-time dedication), and Project-Based (for complete solution delivery). You can choose based on your budget and project requirements.",
    },
    {
      q: "How do you ensure quality?",
      a: "We follow rigorous quality assurance processes including code reviews, automated testing, manual QA, security audits, and performance optimization. Our ISO 9001:2015 certification ensures consistent quality standards.",
    },
    {
      q: "Can I scale my team up or down?",
      a: "Absolutely! You can scale your team at any time. We offer flexible team scaling options - add more developers, designers, or specialists as your project grows, or reduce team size when needed.",
    },
    {
      q: "What technologies do you specialize in?",
      a: "Our expertise spans React, Next.js, Node.js, Python, TypeScript, AWS, Docker, MongoDB, PostgreSQL, GraphQL, Vue.js, Angular, and more. We can also work with other technologies based on your requirements.",
    },
    {
      q: "How do you handle confidentiality and IP?",
      a: "We sign comprehensive NDAs and confidentiality agreements. All code, designs, and intellectual property belong to you. We take data security and IP protection very seriously.",
    },
  ];

  return (
    <section className="relative w-full py-20 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Frequently Asked <span className="text-[#e8a020]">Questions</span>
          </h2>
          <p className="text-[#4a5578] max-w-2xl mx-auto">
            Everything you need to know about hiring with us
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="border border-[#1a3fa0]/08 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#f8f9fc] transition-colors"
              >
                <span className="font-semibold text-[#0f2a6b]">{faq.q}</span>
                <ChevronRight
                  className={`w-5 h-5 text-[#1a3fa0] transition-transform duration-300 ${openIndex === idx ? "rotate-90" : ""
                    }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? "max-h-40" : "max-h-0"
                  }`}
              >
                <div className="px-6 pb-4 text-sm text-[#4a5578] leading-relaxed">
                  {faq.a}
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
function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Hire developers background"
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
            Ready to <span className="text-[#e8a020]">Hire</span> Top Tech Talent?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Build your dream team with India's leading IT services company.
            Get dedicated developers starting at competitive rates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#e8a020] to-[#f0b832] text-[#0f2a6b] font-semibold text-base shadow-lg shadow-[#e8a020]/30 hover:shadow-[#e8a020]/50 transition-all duration-300 group"
              >
                Hire Developers Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 font-semibold text-base hover:bg-white/20 transition-all duration-300"
              >
                Request a Quote
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
                <span>Jaipur, India</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}