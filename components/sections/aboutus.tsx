"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowUpRight, CheckCircle2, Award, Users, Briefcase, Clock, ArrowRight } from "lucide-react";

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
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── Stats data ── */
const stats = [
  {
    number: 250,
    suffix: "+",
    label: "Projects Delivered",
    icon: Briefcase,
  },
  {
    number: 99,
    suffix: "%",
    label: "Client Satisfaction",
    icon: Award,
  },
  {
    number: 50,
    suffix: "+",
    label: "Global Clients",
    icon: Users,
  },
  {
    number: 24,
    suffix: "/7",
    label: "Support Available",
    icon: Clock,
  },
];

const cards = [
  {
    title: "Web Development",
    sub: "Custom websites, portals & web applications",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA-9UlC-tj8dg9suAlG7cuWJe7a-u0086kfx822uYDag&s=10",
    href: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    sub: "Android, iOS & cross-platform solutions",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrbBRbG_j00SixYDMryAAiUXaAMGgi9ruJ7DsSI86GyMj4cv-BW9yDnW-b&s=10",
    href: "/services/mobile-app-development",
  },
  {
    title: "Digital Marketing",
    sub: "SEO, PPC, social media & lead generation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe8hiXPsxzrl2uhrBpwG2HN7uqnzevnic2aYkVo4qR4g&s=10",
    href: "/services/digital-marketing",
  },
];

const perks = [
  "Custom Web Development",
  "Mobile App Development",
  "Digital Marketing & SEO",
  "AI-Powered Solutions",
];

/* ────────────────────────────────────────────── */
const TrueValueSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  });

  return (
    <>
      <style>{`

        .tvs-tag {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 16px; border-radius: 50px;
          background: white;
          border: 1.5px solid rgba(26,63,160,0.15);
          box-shadow: 0 2px 10px rgba(26,63,160,0.07);
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: #1a3fa0;
        }

        .tvs-tag-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #e8a020;
          box-shadow: 0 0 0 3px rgba(232,160,32,0.25);
          animation: tvs-pulse 2s ease infinite;
        }

        @keyframes tvs-pulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(232,160,32,0.25); }
          50%      { box-shadow: 0 0 0 7px rgba(232,160,32,0.08); }
        }

        .tvs-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800; line-height: 1.08;
          letter-spacing: -0.03em;
          color: #0f2a6b;
          font-size: clamp(2rem, 4vw, 3rem);
        }

        .tvs-gold { color: #e8a020; }

        /* Service card */
        .svc-card {
          position: relative; border-radius: 20px;
          overflow: hidden; cursor: pointer;
          box-shadow: 0 6px 28px rgba(15,42,107,0.1);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .svc-card:hover { transform: translateY(-6px); box-shadow: 0 18px 48px rgba(15,42,107,0.18); }

        .svc-img { width: 100%; height: 220px; object-fit: cover; display: block; transition: transform 0.5s ease; }
        .svc-card:hover .svc-img { transform: scale(1.06); }

        .svc-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 35%, rgba(10,22,80,0.82) 100%);
          transition: opacity 0.35s;
        }

        .svc-body {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 20px 20px 22px;
        }

        .svc-title {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 1.1rem; color: white; margin-bottom: 3px;
        }

        .svc-sub { font-size: 0.78rem; color: rgba(255,255,255,0.7); margin-bottom: 12px; }

        .svc-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.78rem; font-weight: 600; color: #f0b832;
          text-decoration: none; letter-spacing: 0.03em;
          transition: gap 0.2s;
        }
        .svc-card:hover .svc-link { gap: 10px; }

        .svc-number {
          position: absolute; top: 14px; left: 18px;
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: 0.7rem; letter-spacing: 0.1em;
          color: rgba(255,255,255,0.5);
        }

        /* Stat card */
        .stat-card {
          background: white; border-radius: 18px;
          padding: 24px 20px;
          border: 1px solid rgba(26,63,160,0.08);
          box-shadow: 0 4px 20px rgba(15,42,107,0.07);
          position: relative; overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .stat-card:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(15,42,107,0.13); }

        .stat-card::before {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #1a3fa0, #e8a020);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s ease;
        }
        .stat-card:hover::before { transform: scaleX(1); }

        .stat-icon-wrap {
          width: 44px; height: 44px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, rgba(26,63,160,0.1), rgba(41,82,204,0.06));
          margin-bottom: 14px;
        }

        .stat-number {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: 2.2rem; line-height: 1;
          color: #0f2a6b; margin-bottom: 5px;
        }

        .stat-label { font-size: 0.8rem; font-weight: 500; color: #6b7a9e; }

        /* Perk item */
        .perk-item {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.85rem; font-weight: 500; color: #3a4a72;
        }

        /* Divider line */
        .gold-divider {
          width: 48px; height: 3px; border-radius: 2px;
          background: linear-gradient(90deg, #e8a020, #f0b832);
          margin: 16px 0;
        }

        /* Background grid */
        .tvs-section {
          background-image:
            linear-gradient(rgba(26,63,160,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,63,160,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          background-color: #f8f9fc;
        }
      `}</style>

      <section className="tvs-section relative w-full py-20 px-4 md:px-8 lg:px-12 overflow-hidden" ref={sectionRef}>

        {/* Decorative orbs */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(232,160,32,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(26,63,160,0.09) 0%, transparent 70%)', filter: 'blur(50px)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

          {/* ── Top: Label + Heading + Description ── */}
          <div className="grid lg:grid-cols-2 gap-8 items-end mb-14">

            {/* Left */}
            <div>
              <motion.div {...fadeUp(0)} className="tvs-tag mb-5 w-fit">
                Leading IT Solutions Company
              </motion.div>

              <motion.h2
                {...fadeUp(0.1)}
                className="text-3xl sm:text-[2.4rem] font-semibold text-[#0f2a6b] leading-tight mb-5"
              >
                Your Trusted
                <span className="tvs-gold"> Technology Partner </span>
                For Business Growth
              </motion.h2>

              <motion.div {...fadeUp(0.15)} className="gold-divider" />

              {/* Perks */}
              <motion.div {...fadeUp(0.2)} className="grid grid-cols-2 gap-y-3 gap-x-4 mt-4">
                {perks.map((p) => (
                  <div key={p} className="perk-item">
                    <CheckCircle2 size={15} style={{ color: '#1a3fa0', flexShrink: 0 }} />
                    {p}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right */}
            <motion.div {...fadeUp(0.15)}>
              <p className="text-[#4a5578] text-base sm:text-lg leading-relaxed font-light mb-6">
                Digitonix is a leading <strong>Web Development, Mobile App Development,
                  Software Development, and Digital Marketing Company in Jaipur</strong>.
                We help startups, SMEs, and enterprises build scalable digital products,
                improve online visibility, and accelerate business growth through modern
                technology solutions.
              </p>
              <a href="/about" className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: '#1a3fa0', letterSpacing: '0.02em' }}>
                Learn more about us
                <span className="w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(26,63,160,0.1)' }}>
                  <ArrowUpRight size={14} />
                </span>
              </a>
            </motion.div>
          </div>

          {/* ── Service Cards ── */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            initial="initial"
            animate={inView ? "animate" : "initial"}
            variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
          >
            {cards.map((card, i) => (
              <motion.a
                key={card.title}
                href={card.href}
                className="svc-card block"
                variants={{ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <img src={card.image} alt={card.title} className="svc-img" />
                <div className="svc-overlay" />
                <span className="svc-number">0{i + 1}</span>
                <div className="svc-body">
                  <p className="svc-title">{card.title}</p>
                  <p className="svc-sub">{card.sub}</p>
                  <span className="svc-link">
                    Discover now <ArrowUpRight size={14} />
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* ── Stats ── */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial="initial"
            animate={inView ? "animate" : "initial"}
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
          >
            {stats.map(({ number, suffix, label, icon: Icon }) => (
              <motion.div
                key={label}
                className="stat-card flex justify-center items-center gap-4"
                variants={{ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="sm:block hidden">
                  <Icon size={20} style={{ color: '#1a3fa0' }} className="w-14 h-11 stroke-1 " />
                </div>
                <div className="stat-number" style={{ background: 'linear-gradient(135deg, #0f2a6b, #2952cc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  <Counter target={number} suffix={suffix} />
                  <div className="stat-label mt-2">{label}</div>

                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            {...fadeUp(0.4)}
            className="max-w-4xl mx-auto text-center mt-12"
          >
            <p className="text-[#4a5578] leading-relaxed font-medium">
              As a trusted IT company in India, Digitonix specializes in
              Web Development, Mobile App Development, Software Development,
              UI/UX Design, Cloud Solutions, AI Development, and Digital
              Marketing Services. Our team delivers innovative solutions that
              help businesses improve efficiency, increase revenue, and build
              a strong digital presence.
            </p>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default TrueValueSection;


import {
  Star, Code2, Smartphone, Megaphone,
  Palette, Shield, Cloud, ChevronRight,
  BadgeCheck, Bot,
  LayoutTemplate, TrendingUp, Zap,
} from "lucide-react";
import {
  User, Phone, Mail, MessageSquare, ChevronDown, ShieldCheck
} from 'lucide-react';

// ... inside your RIGHT — Trust / Ratings card
/* ─────────────────────────────────────────────
   SERVICES  — SEO-optimised titles + copy
───────────────────────────────────────────── */
const services = [
  {
    id: 1, slug: "web-development",
    icon: <Code2 size={20} />,
    title: "Web Development",
    shortDescription:
      "Custom Next.js & React websites built for speed, SEO rankings, and measurable conversions.",
    features: ["Next.js / React / Node.js", "Core Web Vitals Optimised", "SEO-Ready Architecture"],
    tag: "Most Popular",
  },
  {
    id: 2, slug: "mobile-app-development",
    icon: <Smartphone size={20} />,
    title: "Mobile App Development",
    shortDescription:
      "iOS & Android apps crafted with Flutter and React Native — loved by users, rated 4.8+.",
    features: ["Flutter & React Native", "App Store / Play Store", "Offline-First Design"],
    tag: null,
  },
  {
    id: 3, slug: "digital-marketing",
    icon: <Megaphone size={20} />,
    title: "Digital Marketing & SEO",
    shortDescription:
      "Data-driven SEO, PPC, and social campaigns that increase organic traffic and lower CAC.",
    features: ["Technical SEO & Link Building", "Google Ads & Meta PPC", "Conversion Rate Optimisation"],
    tag: "High ROI",
  },
  {
    id: 4, slug: "ui-ux-design",
    icon: <Palette size={20} />,
    title: "UI/UX & Branding",
    shortDescription:
      "Research-backed design systems and brand identities that build trust and drive engagement.",
    features: ["Figma Prototyping", "Design Systems", "Brand Identity & Logo"],
    tag: null,
  },
  {
    id: 5, slug: "ai-solutions",
    icon: <Bot size={20} />,
    title: "AI & Automation",
    shortDescription:
      "Custom AI integrations, LLM-powered tools, and workflow automation that slash operational costs.",
    features: ["LLM & ChatGPT Integration", "Process Automation", "Predictive Analytics"],
    tag: "Trending",
  },
  {
    id: 6, slug: "cloud-devops",
    icon: <Cloud size={20} />,
    title: "Cloud & DevOps",
    shortDescription:
      "Scalable AWS / Azure infrastructure with CI/CD pipelines, 99.9% uptime SLA, and 24/7 monitoring.",
    features: ["AWS / Azure / GCP", "Docker & Kubernetes", "24/7 Proactive Monitoring"],
    tag: null,
  },
  {
    id: 7, slug: "ecommerce",
    icon: <ShoppingCart size={20} />,
    title: "E-Commerce Development",
    shortDescription:
      "High-converting Shopify, WooCommerce and headless stores with seamless payment integrations.",
    features: ["Shopify & WooCommerce", "Multi-Currency Payments", "Inventory & Analytics"],
    tag: null,
  },
  {
    id: 8, slug: "cyber-security",
    icon: <Shield size={20} />,
    title: "Cyber Security",
    shortDescription:
      "Enterprise-grade security audits, pen testing, and compliance frameworks to protect your assets.",
    features: ["Penetration Testing", "ISO 27001 Compliance", "Threat Monitoring & SOC"],
    tag: null,
  },
];

/* ─────────────────────────────────────────────
   RATING PLATFORMS
───────────────────────────────────────────── */
const ratings = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    platform: "Google",
    score: "4.9",
    reviews: "120+ Reviews",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Clutch_logo_2019.svg/2560px-Clutch_logo_2019.svg.png",
    platform: "Clutch",
    score: "4.8",
    reviews: "85+ Reviews",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/GoodFirms-Logo.svg/2560px-GoodFirms-Logo.svg.png",
    platform: "GoodFirms",
    score: "4.9",
    reviews: "60+ Reviews",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg",
    platform: "LinkedIn",
    score: "5.0",
    reviews: "200+ Connections",
  },
];

/* ─────────────────────────────────────────────
   STAT ITEMS
───────────────────────────────────────────── */
const statsss = [
  { icon: <TrendingUp size={16} />, value: "500+", label: "Projects Delivered" },
  { icon: <Users size={16} />, value: "200+", label: "Happy Clients" },
  { icon: <Zap size={16} />, value: "12+", label: "Years of Expertise" },
  { icon: <CheckCircle2 size={16} />, value: "98%", label: "Client Satisfaction" },
];

/* ─────────────────────────────────────────────
   SERVICE CARD
───────────────────────────────────────────── */
function ServiceCard({
  icon, title, shortDescription, features, slug, tag, index,
}: {
  icon: React.ReactNode;
  title: string;
  shortDescription: string;
  features: string[];
  slug: string;
  tag: string | null;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.a
      href={`/services`}
      ref={ref}
      className="group relative overflow-hidden rounded-2xl
             border border-slate-200/70 bg-white
             hover:border-[#1a3fa0]/20
             shadow-sm hover:shadow-xl
             transition-all duration-300
             hover:-translate-y-1.5"
    >

      {tag && (
        <div className="absolute top-0 -right-1">
          <span
            className="text-xs  uppercase tracking-wider
                   px-2 py-1 rounded-bl-xl
                   bg-[#0f2a6b] text-white px-4
                   border border-[#1a3fa0]/10"
          >
            {tag}
          </span>
        </div>
      )}
      <div
        className="w-12 top-7 left-0 py-3 absolute shadow rounded-r-xl flex items-center justify-center
                   bg-gradient-to-br from-[#1a3fa0]/10 to-[#2952cc]/5
                   text-[#1a3fa0]
                   group-hover:from-[#1a3fa0]
                   group-hover:to-[#2952cc]
                   group-hover:text-white
                   transition-all duration-300"
      >
        {icon}
      </div>

      <div className="relative p-5 pb-3 mt-4">
        {/* Icon + Title */}
        <div className="flex items-start gap-3 mb-2">


          <div className="flex-1">
            <h3
              className="text-base ml-9 font-semibold mb-4 text-[#0f2a6b]
                     leading-snug group-hover:text-[#1a3fa0]
                     transition-colors"
            >
              {title}
            </h3>

            <p className="text-sm text-slate-600 mt-1 line-clamp-3">
              {shortDescription}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2">
          {features.slice(0, 3).map((feature) => (
            <div key={feature} className="flex items-center gap-1">
              <ArrowRight
                size={15}
                className="transition-transform duration-300
                     group-hover:translate-x-0.5
                     group-hover:-translate-y-0.5"
              />
              <span className="text-sm text-slate-600 font-medium">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-3">
          <div
            className="inline-flex items-center gap-2
                   px-3 py-2 rounded-xl
                   bg-slate-50 group-hover:bg-[#1a3fa0]
                   text-[#1a3fa0] group-hover:text-white
                   text-[12px] font-semibold
                   transition-all duration-300"
          >
            Explore Service

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300
                     group-hover:translate-x-0.5
                     group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

/* ─────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────── */
export function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 22 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  });

  return (
    <section
      ref={ref}
      id="services"
      aria-labelledby="services-heading"
      className="w-full bg-[#f4f6fb] py-16 md:py-20 overflow-hidden relative"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 50%, rgba(26,63,160,0.04) 0%, transparent 60%)," +
          "radial-gradient(circle at 80% 20%, rgba(232,160,32,0.06) 0%, transparent 50%)",
      }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,63,160,0.03) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(26,63,160,0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ── TOP LAYOUT: Left copy + Right trust card ── */}
        <div className="grid lg:grid-cols-5 gap-10 xl:gap-16 items-start mb-16">

          {/* LEFT */}
          <div className="lg:col-span-3 space-y-6">

            {/* Eyebrow */}
            <motion.div {...fadeUp(0)}>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                           bg-white border border-[#1a3fa0]/15 shadow-sm"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#1a3fa0]">
                  Our Services
                </span>
              </span>
            </motion.div>

            {/* H2 — SEO keyword-rich */}
            <motion.h2
              {...fadeUp(0.07)}
              id="services-heading"
              className="text-3xl sm:text-4xl xl:text-[2.4rem] font-semibold text-[#0f2a6b] leading-[1.18]"
            >
              Leading{" "}
              <span className="text-[#e8a020]">Web &amp; Software</span>
              <br />
              Development Company{" "}
              <span
                className="relative whitespace-nowrap"
                style={{
                  background: "linear-gradient(90deg, #1a3fa0, #2952cc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                in India
              </span>
            </motion.h2>
            {/* Description — keyword-dense for SEO */}
            <motion.p
              {...fadeUp(0.15)}
              className="text-[#4a5578] text-base sm:text-lg leading-relaxed max-w-2xl font-light"
            >
              Digitonix is a trusted{" "}
              <strong className="font-semibold text-[#0f2a6b]">
                web development and mobile app development company in Jaipur
              </strong>
              , serving startups and enterprises across India since 2011. With{" "}
              <strong className="font-semibold text-[#0f2a6b]">500+ delivered projects</strong> and
              a 98% satisfaction rate, we build scalable, SEO-ready digital products that grow your
              business.
            </motion.p>

            {/* Stats row */}
            <motion.div {...fadeUp(0.19)} className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              {statsss.map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-xl px-4 py-3 border border-[#1a3fa0]/10
                             shadow-sm text-center"
                >
                  <div className="flex items-center justify-center gap-1.5 text-[#e8a020] mb-1">

                    <span className="text-lg font-bold text-[#0f2a6b]">{s.value}</span>
                  </div>
                  <p className="text-[11px] font-medium text-[#9aa3bf] leading-tight">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Trust pills */}
            <motion.div {...fadeUp(0.22)} className="flex flex-wrap gap-2">
              {["ISO 9001:2015 Certified", "NASSCOM Member", "Google Partner", "24/7 Support"].map(
                (t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                               bg-white border border-[#1a3fa0]/12 text-[11px] font-semibold
                               text-[#1a3fa0]"
                  >
                    <BadgeCheck size={11} className="text-[#e8a020]" />
                    {t}
                  </span>
                )
              )}
            </motion.div>
          </div>
          <motion.div
            {...fadeUp(0.12)}
            className="lg:col-span-2 relative bg-white rounded-[18px] border border-slate-400 shadow-sm overflow-hidden"
          >
            {/* Corner Badge */}
            <div className="absolute top-0 right-0 bg-[#0f2a6b] text-white px-5 py-2.5 rounded-bl-[28px]  text-sm z-10">
              Free Consultation
            </div>

            <div className="p-6">
              {/* Heading */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-[#c62828]">
                  Contact Now
                </h3>
                <p className="text-slate-500 text-sm font-medium">
                  Please provide your project information
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="space-y-4"
              >
                {/* Name */}
                <div>
                  <label className="block text-xs text-slate-700 font-medium mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full h-11 px-5 border border-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs text-slate-700 font-medium mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full h-11 px-5 border border-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition"
                  />
                </div>

                {/* Phone */}


                {/* Row */}
                <div className="grid md:grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs text-slate-700 font-medium mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your mobile number"
                      className="w-full h-11 px-5 border border-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-700 font-medium mb-1">
                      Service Required <span className="text-red-500">*</span>
                    </label>

                    <select
                      className="w-full h-11 px-5 border border-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                    >
                      <option>Select Service</option>
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>UI/UX Design</option>
                      <option>SEO & Marketing</option>
                      <option>Custom Software</option>
                    </select>
                  </div>

                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs text-slate-700 font-medium mb-2">
                    Project Details
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us about your project requirements..."
                    className="w-full px-5 py-2 text-sm border border-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 resize-none"
                  />
                </div>

                {/* Button */}
                <div className="">
                  <button
                    type="submit"
                    className=" flex items-center rounded-xl justify-center px-10 h-10 bg-[#0f2a6b] hover:from-red-600 hover:to-red-700 text-white text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Submit
                  </button>

                  <p className="text-center text-xs font-medium text-slate-500 mt-3">
                    Our team will contact you within 24 hours
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* ── SERVICES GRID ── */}
        <motion.div {...fadeUp(0.08)}>
          {/* Section header row */}
          <div className="flex items-center gap-4 mb-8">
            <div>
              <h3 className="text-[#0f2a6b] font-semibold text-3xl">What We Offer</h3>
              <p className="text-slate-600 text-sm mt-0.5">
                End-to-end digital solutions for modern businesses
              </p>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#1a3fa0]/15 to-transparent" />
            <a
              href="/services"
              className="inline-flex border p-2 rounded-full px-4 items-center gap-1.5 font-semibold
                         text-[#1a3fa0] hover:text-[#e8a020] transition-colors flex-shrink-0"
            >
              All Services
              <ChevronRight size={16} />
            </a>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((svc, idx) => (
              <ServiceCard
                key={svc.id}
                icon={svc.icon}
                title={svc.title}
                shortDescription={svc.shortDescription}
                features={svc.features}
                slug={svc.slug}
                tag={svc.tag}
                index={idx}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


import { Database, Globe, Cpu, Server, Layers, GitBranch, BarChart } from "lucide-react";
import Link from "next/link";

/* ── Developer roles (replace / extend as needed) ── */
const developers = [
  { label: "React Developer", icon: <Code2 size={16} /> },
  { label: "Next.js Developer", icon: <Globe size={16} /> },
  { label: "Node.js Developer", icon: <Server size={16} /> },
  { label: "Flutter Developer", icon: <Smartphone size={16} /> },
  { label: "React Native Dev", icon: <Layers size={16} /> },
  { label: "Python Developer", icon: <Cpu size={16} /> },
  { label: "Laravel Developer", icon: <Code2 size={16} /> },
  { label: "WordPress Developer", icon: <Globe size={16} /> },
  { label: "UI/UX Designer", icon: <Palette size={16} /> },
  { label: "DevOps Engineer", icon: <GitBranch size={16} /> },
  { label: "AWS Cloud Architect", icon: <Cloud size={16} /> },
  { label: "Database Engineer", icon: <Database size={16} /> },
  { label: "iOS Developer", icon: <Smartphone size={16} /> },
  { label: "Android Developer", icon: <Smartphone size={16} /> },
  { label: "Cybersecurity Expert", icon: <Shield size={16} /> },
  { label: "Data Analyst", icon: <BarChart size={16} /> },
];

/* ── Hover Card ── */
function HoverCard({ label, icon, index }: { label: string; icon: React.ReactNode; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.a
      ref={ref}
      href={`/hire/${label.toLowerCase().replace(/\s+/g, "-")}`}
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: (index % 8) * 0.07 }}
      className="group relative flex flex-col items-center justify-center gap-2.5
                 bg-white rounded-2xl p-3 pb-4 text-center cursor-pointer overflow-hidden
                 border border-[#1a3fa0]/10 
                 hover:shadow-lg hover:-translate-y-1.5 hover:border-[#1a3fa0]/25
                 transition-all duration-300"
    >
      {/* Hover fill bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a3fa0] to-[#2952cc]
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Gold top bar */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#e8a020] to-[#f0b832]
                      scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      {/* Icon */}
      <div className="relative z-10 w-8 h-8 rounded-xl flex items-center justify-center
                      bg-gradient-to-br from-[#1a3fa0]/20 to-[#2952cc]/08 text-[#1a3fa0]
                      group-hover:bg-white/25 group-hover:text-white
                      transition-all duration-300">
        {icon}
      </div>

      {/* Label */}
      <span className="relative z-10 text-xs font-semibold text-[#0f2a6b] leading-tight
                       group-hover:text-white transition-colors duration-300"
        style={{ fontFamily: "DM Sans, sans-serif" }}>
        {label}
      </span>
    </motion.a>
  );
}

/* ── Main Section ── */
export function HireDevelopersSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  });

  return (
    <section
      ref={ref}
      className="w-full py-20 relative overflow-hidden bg-[#f8f9fc]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(26,63,160,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(26,63,160,0.035) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    >
      {/* Orbs */}
      <div className="absolute top-[-80px] left-[-80px] w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(26,63,160,0.1) 0%, transparent 70%)", filter: "blur(50px)" }} />
      <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,160,32,0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-start">

          {/* ── LEFT ── */}
          <div className="lg:col-span-6 lg:sticky lg:top-32">
            {/* Tag */}
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 mb-6"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1a3fa0]">
                Hire Dedicated Developers
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              {...fadeUp(0.08)}
              className="text-3xl sm:text-4xl xl:text-[2.4rem] font-semibold text-[#0f2a6b] leading-[1.18]"
            >
              Hire Expert Developers for
              <span className="text-[#e8a020]"> Web, Mobile & Software Development</span>
            </motion.h2>

            {/* Divider */}
            <motion.div
              {...fadeUp(0.12)}
              className="w-12 h-[3px] rounded-full bg-gradient-to-r from-[#e8a020] to-[#f0b832] mb-5"
            />

            {/* Description */}
            <motion.p
              {...fadeUp(0.16)}
              className="text-[#4a5578] text-base leading-relaxed mb-4"
            >
              Digitonix is a trusted software development company delivering custom
              software development, web application development, mobile app development,
              and AI-powered digital solutions for startups, enterprises, and growing
              businesses worldwide.
            </motion.p>

            <motion.p
              {...fadeUp(0.20)}
              className="text-[#4a5578] text-base leading-relaxed mb-4"
            >
              Hire dedicated developers with expertise in React.js, Next.js, Node.js,
              React Native, Flutter, Laravel, WordPress, Python, and cloud technologies.
              Our development teams build scalable, secure, and high-performance digital
              products tailored to your business goals.
            </motion.p>

            <motion.p
              {...fadeUp(0.24)}
              className="text-[#4a5578] text-base leading-relaxed mb-8"
            >
              Whether you need a dedicated development team, offshore developers,
              enterprise software solutions, SaaS platforms, eCommerce applications,
              CRM systems, or AI-driven products, we help businesses accelerate growth
              with innovative technology solutions.
            </motion.p>

            {/* CTA */}
            <motion.div {...fadeUp(0.32)}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full
               font-semibold text-sm text-white relative overflow-hidden
               shadow-lg shadow-[#1a3fa0]/25 hover:shadow-[#e8a020]/30
               hover:-translate-y-1 transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #1a3fa0, #2952cc)",
                }}
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-[#e8a020] to-[#f0b832]
                 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10">Hire Developers Now</span>
                <ArrowUpRight
                  size={16}
                  className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </motion.div>

            {/* Process */}
            <motion.div {...fadeUp(0.36)} className="mt-10 space-y-3">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9aa3bf] mb-3">
                Simple Hiring Process
              </p>

              {[
                {
                  step: "01",
                  text: "Share your project requirements",
                },
                {
                  step: "02",
                  text: "Select your dedicated developers",
                },
                {
                  step: "03",
                  text: "Launch and scale your product",
                },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-3">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center
                   text-[10px] font-semibold flex-shrink-0 text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, #1a3fa0, #2952cc)",
                    }}
                  >
                    {item.step}
                  </span>

                  <span className="text-sm font-medium text-[#3a4a72]">
                    {item.text}
                  </span>

                  <div className="flex-1 h-px bg-[#1a3fa0]/10" />
                </div>
              ))}
            </motion.div>

            {/* SEO Content */}

          </div>

          {/* ── RIGHT: Cards Grid ── */}
          <div className="lg:col-span-4">
            <motion.div {...fadeUp(0.1)}
              className="flex items-center gap-3 mb-6">
              <h3 className="text-[#0f2a6b] font-semibold text-xl whitespace-nowrap">
                Our Expert Roles
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-[#1a3fa0]/20 to-transparent" />
              <span className="text-sm font-semibold text-slate-500">
                {developers.length} Specializations
              </span>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1">
              {developers.map((item, index) => (
                <HoverCard key={index} label={item.label} icon={item.icon} index={index} />
              ))}
            </div>

            {/* Bottom CTA strip */}
            <motion.div {...fadeUp(0.3)}
              className="mt-6 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center
                         justify-between gap-4 border border-[#1a3fa0]/12"
              style={{ background: "linear-gradient(135deg, rgba(26,63,160,0.04), rgba(232,160,32,0.06))" }}>
              <div>
                <p className="font-semibold text-[#0f2a6b] text-sm mb-0.5">
                  Don't see your stack?
                </p>
                <p className="text-xs">
                  We hire for any technology. Tell us what you need.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold
                           text-[#1a3fa0] bg-white border border-[#1a3fa0]/20
                           hover:bg-[#1a3fa0] hover:text-white hover:border-[#1a3fa0]
                           transition-all duration-250 whitespace-nowrap"
              >
                Talk to us <ArrowUpRight size={13} />
              </Link>
            </motion.div>
          </div>
        </div>
        <motion.div
          {...fadeUp(0.4)}
          className="mt-8 p-5 rounded-2xl border border-[#1a3fa0]/10 bg-white/70"
        >
          <p className="text-sm text-[#6b7a9e] leading-relaxed">
            Digitonix provides website development services, mobile application
            development, custom software development, UI/UX design, cloud solutions,
            DevOps consulting, AI development services, and enterprise software
            solutions. Businesses across India and international markets trust our
            experienced developers to build reliable, scalable, and growth-focused
            digital products.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


import {
  ShoppingCart, Heart, GraduationCap, Building2, Plane,
  Landmark, Truck, Home, Utensils, Scale, Leaf
} from "lucide-react";

/* ── Industries data ── */
const industries = [
  { title: "E-Commerce", icon: ShoppingCart, color: "#1a3fa0", stat: "120+ projects" },
  { title: "Healthcare", icon: Heart, color: "#2952cc", stat: "40+ projects" },
  { title: "Education", icon: GraduationCap, color: "#1a3fa0", stat: "55+ projects" },
  { title: "Real Estate", icon: Home, color: "#2952cc", stat: "35+ projects" },
  { title: "Finance & Banking", icon: Landmark, color: "#1a3fa0", stat: "#50+ projects" },
  { title: "Travel & Tourism", icon: Plane, color: "#2952cc", stat: "28+ projects" },
  { title: "Logistics", icon: Truck, color: "#1a3fa0", stat: "32+ projects" },
  { title: "Technology", icon: Cpu, color: "#2952cc", stat: "90+ projects" },
  { title: "Food & Restaurant", icon: Utensils, color: "#1a3fa0", stat: "22+ projects" },
  { title: "Legal & Law", icon: Scale, color: "#2952cc", stat: "18+ projects" },
  { title: "Agriculture", icon: Leaf, color: "#1a3fa0", stat: "15+ projects" },
  { title: "Manufacturing", icon: Building2, color: "#2952cc", stat: "24+ projects" },
];

/* ── Industry Card ── */
function IndustryCard({
  title, icon: Icon, stat, index,
}: {
  title: string; icon: React.ElementType; stat: string; index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: (index % 4) * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer
                 border border-[#e8edf8] transition-all duration-300
                 hover:-translate-y-2"
      style={{
        boxShadow: hovered
          ? "0 20px 56px rgba(15,42,107,0.14), 0 4px 16px rgba(15,42,107,0.08)"
          : "0 2px 10px rgba(15,42,107,0.06)",
        borderColor: hovered ? "rgba(26,63,160,0.2)" : undefined,
      }}
    >
      {/* Gold top bar slide */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] z-10 rounded-t-2xl"
        style={{
          background: "linear-gradient(90deg, #1a3fa0, #e8a020)",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1)",
        }}
      />

      {/* Hover bg tint */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: "linear-gradient(145deg, rgba(26,63,160,0.03), rgba(232,160,32,0.02))",
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-5 flex flex-col gap-4">

        {/* Icon + number row */}
        <div className="flex items-start justify-between">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
            style={{
              background: hovered
                ? "linear-gradient(135deg, #ffffff00, #e5e8ec)"
                : "linear-gradient(135deg, #ffffff00, #e5e8ec)",
              color: hovered ? "black" : "#1a3fa0",
              boxShadow: hovered ? "0 6px 20px rgba(26,63,160,0.1)" : "none",
              transform: hovered ? "scale(1.08) rotate(0deg)" : "scale(1) rotate(0deg)",
            }}
          >
            <Icon size={18} />
          </div>

          {/* Arrow */}
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: hovered ? "rgba(232,160,32,0.12)" : "rgba(26,63,160,0.05)",
              transform: hovered ? "translate(0,0)" : "translate(4px,-4px)",
              opacity: hovered ? 1 : 0.4,
            }}
          >
            <ArrowUpRight
              size={14}
              style={{
                color: hovered ? "#b07010" : "#9aa3bf",
                transform: hovered ? "translate(1px,-1px)" : "none",
                transition: "transform 0.2s",
              }}
            />
          </div>
        </div>

        {/* Title */}
        <h3
          className="font-bold text-sm leading-snug transition-colors duration-200"
          style={{
            color: hovered ? "#1a3fa0" : "#0f2a6b",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h3>
      </div>
    </motion.div>
  );
}

/* ── Main Section ── */
export function IndustriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  });

  return (
    <section
      ref={ref}
      className="w-full py-12 overflow-hidden relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(26,63,160,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(26,63,160,0.035) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Header ── */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">

          {/* Left */}
          <div>
            {/* Tag */}
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white
             border border-[#1a3fa0]/15 shadow-sm mb-6"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a3fa0]">
                Industry-Specific Software Solutions
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              {...fadeUp(0.08)}
              className="text-3xl sm:text-4xl mb-3 xl:text-[2.4rem] font-semibold text-[#0f2a6b] leading-[1.18]"
            >
              Custom Software Development
              <span className="text-[#e8a020]"> For Every Industry</span>
            </motion.h2>
            <motion.p
              {...fadeUp(0.16)}
              className="text-[#4a5578] text-base leading-relaxed"
            >
              From healthcare, fintech, education, eCommerce, real estate, logistics,
              manufacturing, and travel to startups and enterprises, we build secure,
              scalable, and high-performance digital products that drive measurable
              business growth.
            </motion.p>
          </div>

          {/* Right */}
          <div>
            <motion.p
              {...fadeUp(0.14)}
              className="text-[#4a5578] text-base sm:text-lg leading-relaxed mb-6"
            >
              Digitonix delivers industry-focused software development services,
              helping businesses streamline operations, automate workflows, improve
              customer experiences, and accelerate digital transformation. Our team
              develops custom web applications, mobile apps, enterprise software,
              SaaS platforms, AI solutions, and cloud-based systems tailored to the
              unique requirements of each industry.
            </motion.p>



            {/* Quick stats */}
            <motion.div {...fadeUp(0.18)} className="flex flex-wrap gap-3">
              {[
                { v: "15+", l: "Industries Served" },
                { v: "500+", l: "Projects Delivered" },
                { v: "98%", l: "Client Satisfaction" },
              ].map((s) => (
                <div key={s.l}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white
                             border border-[#1a3fa0]/12 shadow-sm">
                  <span className="font-extrabold text-base text-[#0f2a6b]"
                    style={{ fontFamily: "Syne, sans-serif" }}>{s.v}</span>
                  <span className="text-xs font-medium text-[#9aa3bf]">{s.l}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-1 mb-8">
          {industries.map((item, index) => (
            <IndustryCard
              key={item.title}
              title={item.title}
              icon={item.icon}
              stat={item.stat}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}