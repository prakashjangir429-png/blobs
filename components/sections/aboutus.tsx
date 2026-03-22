"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowUpRight, CheckCircle2, Award, Users, Briefcase, Clock } from "lucide-react";

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
  { number: 150, suffix: "+", label: "Projects Completed", icon: Briefcase },
  { number: 98,  suffix: "%", label: "Client Satisfaction", icon: Award },
  { number: 12,  suffix: "+", label: "Years Experience",    icon: Clock },
  { number: 50,  suffix: "+", label: "Team Members",        icon: Users },
];

/* ── Cards data ── */
const cards = [
  {
    title: "Web Development",
    sub: "Scalable & modern web apps",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop",
    href: "/services/web-design",
  },
  {
    title: "Mobile Apps",
    sub: "iOS & Android solutions",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    href: "/services/mobile",
  },
  {
    title: "Digital Marketing",
    sub: "Grow your online presence",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    href: "/services/seo",
  },
];

const perks = [
  "ISO 9001:2008 Certified",
  "Agile Development Process",
  "Dedicated Project Manager",
  "Post-launch Support",
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
                Our Company
              </motion.div>

              <motion.h2 {...fadeUp(0.1)} className="text-3xl sm:text-[2.6rem] font-semibold text-[#0f2a6b] leading-tight mb-5">
                <span className="tvs-gold">Digitonix</span> is your
                trusted partner
                in IT services
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
                Digitonix is an <strong className="font-semibold text-[#0f2a6b]">ISO 9001:2008 certified</strong> Web Design & Mobile App Development company established in 2011. We are a leading solution provider for internet-based applications — combining pixel-perfect design with powerful marketing strategies.
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
                <div className="">
                  <Icon size={20} style={{ color: '#1a3fa0' }} className="w-14 h-14 stroke-1 "/>
                </div>
                <div className="stat-number" style={{ background: 'linear-gradient(135deg, #0f2a6b, #2952cc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  <Counter target={number} suffix={suffix} />
                <div className="stat-label mt-2">{label}</div>

                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default TrueValueSection;



import Image from "next/image";
import { Star, Code2, Smartphone, Megaphone,
  Palette, Shield, Cloud, ChevronRight, BadgeCheck
} from "lucide-react";

/* ── Sample services (replace with your real `services` array) ── */
const services = [
  {
    id: 1, slug: "web-design",
    icon: <Code2 size={22} />,
    title: "Web Development",
    shortDescription: "Modern, responsive websites built for performance and conversions.",
    features: ["Next.js / React", "CMS Integration", "SEO Ready"],
  },
  {
    id: 2, slug: "mobile",
    icon: <Smartphone size={22} />,
    title: "Mobile Apps",
    shortDescription: "Cross-platform iOS & Android apps that users love.",
    features: ["React Native", "Flutter", "App Store Deployment"],
  },
  {
    id: 3, slug: "seo",
    icon: <Megaphone size={22} />,
    title: "Digital Marketing",
    shortDescription: "Data-driven strategies to grow your reach and revenue.",
    features: ["SEO & PPC", "Social Media", "Email Campaigns"],
  },
  {
    id: 4, slug: "branding",
    icon: <Palette size={22} />,
    title: "UI/UX & Branding",
    shortDescription: "Memorable identities and interfaces that convert visitors.",
    features: ["Logo Design", "Design Systems", "Prototyping"],
  },
  {
    id: 5, slug: "cloud",
    icon: <Cloud size={22} />,
    title: "Cloud & DevOps",
    shortDescription: "Scalable infrastructure and CI/CD pipelines for your product.",
    features: ["AWS / Azure", "Docker & K8s", "24/7 Monitoring"],
  },
  {
    id: 6, slug: "security",
    icon: <Shield size={22} />,
    title: "Cyber Security",
    shortDescription: "Protect your assets with enterprise-grade security solutions.",
    features: ["Pen Testing", "Compliance", "Threat Analysis"],
  },
  {
    id: 7, slug: "ecommerce",
    icon: <Code2 size={22} />,
    title: "E-Commerce",
    shortDescription: "High-converting stores on Shopify, WooCommerce or custom stacks.",
    features: ["Payment Gateway", "Inventory Mgmt", "Analytics"],
  },
  {
    id: 8, slug: "cms",
    icon: <Code2 size={22} />,
    title: "CMS Development",
    shortDescription: "Empower your team to manage content effortlessly.",
    features: ["WordPress", "Strapi / Sanity", "Headless CMS"],
  },
];

/* ── Rating platforms ── */
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

/* ── Service Card ── */
function ServiceCard({
  icon, title, shortDescription, features, slug, index,
}: {
  icon: React.ReactNode; title: string; shortDescription: string;
  features: string[]; slug: string; index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.a
      href={`/services/${slug}`}
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: (index % 4) * 0.1 }}
      className="group relative bg-white rounded-2xl p-6 border border-blue-100
                 shadow-sm hover:shadow-xl hover:-translate-y-1.5
                 transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1a3fa0] to-[#e8a020]
                      scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-t-2xl" />

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4
                      bg-gradient-to-br from-[#1a3fa0]/10 to-[#2952cc]/5
                      text-[#1a3fa0] group-hover:bg-gradient-to-br
                      group-hover:from-[#1a3fa0] group-hover:to-[#2952cc]
                      group-hover:text-white transition-all duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-semibold text-[#0f2a6b] text-base mb-2 leading-snug
                     group-hover:text-[#1a3fa0] transition-colors"
          >
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#6b7a9e] text-sm leading-relaxed mb-4 flex-1">
        {shortDescription}
      </p>

      {/* Features */}
      <ul className="space-y-1.5 mb-5">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs font-medium text-[#3a4a72]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e8a020] flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      {/* Link */}
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1a3fa0]
                       group-hover:text-[#e8a020] transition-colors">
        Learn more
        <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </span>
    </motion.a>
  );
}

/* ── Main Section ── */
export function ServicesSection() {
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
      className="w-full bg-[#f8f9fc] py-12 overflow-hidden relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(26,63,160,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(26,63,160,0.035) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    >
      {/* Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-60"
        style={{ background: "radial-gradient(circle, rgba(232,160,32,0.12) 0%, transparent 70%)", filter: "blur(50px)" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none opacity-60"
        style={{ background: "radial-gradient(circle, rgba(26,63,160,0.1) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ── TOP GRID: Left content + Right trust card ── */}
        <div className="grid lg:grid-cols-5 gap-10 items-start mb-16">

          {/* LEFT */}
          <div className="lg:col-span-3">
            {/* Tag */}
            <motion.div {...fadeUp(0)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white
                         border border-[#1a3fa0]/15 shadow-sm mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1a3fa0]">
                Our Services
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2 {...fadeUp(0.08)}
              className="text-3xl sm:text-[2.6rem] font-semibold text-[#0f2a6b] leading-tight mb-5"
             >
              <span className="text-[#e8a020]">Top Web</span> & Software<br />
              Development Company 
              <span className="text-[#1a3fa0]"> in India</span>
            </motion.h2>

            {/* Gold divider */}
            <motion.div {...fadeUp(0.12)}
              className="w-12 h-[3px] rounded-full bg-gradient-to-r from-[#e8a020] to-[#f0b832] mb-5" />

            {/* Description */}
            <motion.p {...fadeUp(0.16)}
              className="text-[#4a5578] text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              Digitonix has offered{" "}
              <span className="font-semibold text-[#0f2a6b]">mobile app development</span>{" "}
              and website development services since 2011. With a strong portfolio of{" "}
              <span className="font-semibold text-[#0f2a6b]">500+ projects</span>, our
              developers deliver high-quality, tailor-made products for iOS, Android and web.
            </motion.p>

            {/* Quick trust pills */}
            <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-2 mt-6">
              {["ISO Certified", "500+ Projects", "12+ Years", "24/7 Support"].map((t) => (
                <span key={t}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white
                             border border-[#1a3fa0]/12 text-xs font-semibold text-[#1a3fa0] shadow-sm">
                  <BadgeCheck size={12} className="text-[#e8a020]" />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Trust Card */}
          <motion.div {...fadeUp(0.15)}
            className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-[#1a3fa0]/08 overflow-hidden">

            {/* Card header */}
            <div className="px-6 py-4 bg-gradient-to-r from-[#0f2a6b] to-[#1a3fa0]">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#f0b832] mb-0.5">
                Recognition
              </p>
              <h3 className="text-white font-semibold text-lg">
                Trusted By Top Companies
              </h3>
            </div>

            {/* Ratings grid */}
            <div className="p-6">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9aa3bf] mb-4">
                Ratings & Reviews
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {ratings.map((r) => (
                  <div key={r.platform}
                    className="flex flex-col gap-2 p-3 rounded-xl border border-[#1a3fa0]/08
                               bg-[#f8f9fc] hover:border-[#1a3fa0]/20 transition-colors">
                    <div className="h-5 flex items-center">
                      <img src={r.logo} alt={r.platform} className="h-full w-auto object-contain max-w-[100px]" />
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-[#e8a020] text-[#e8a020]" />
                      ))}
                      <span className="text-[16px] font-semibold text-[#0f2a6b] ml-1">{r.score}</span>
                    </div>
                    <span className="text-[13px] text-[#9aa3bf] font-medium">{r.reviews}</span>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className=" pt-3">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9aa3bf] mb-4">
                  Certifications
                </p>
                <div className="flex items-center justify-around">
                  {/* ISO badge */}
                  {[1, 2].map((i) => (
                    <div key={i}
                      className="flex flex-col items-center gap-2 p-3 px-10 rounded-xl bg-gradient-to-br
                                 from-[#1a3fa0]/06 to-[#e8a020]/06 border border-[#1a3fa0]/10">
                      
                        <BadgeCheck size={30} className="text-blue-800 stroke-[1.4px]" />
                      <span className="text-[10px] font-semibold text-[#0f2a6b] text-center leading-tight">
                        ISO 9001<br />2015
                      </span>
                    </div>
                  ))}
                  <div className="flex flex-col items-center gap-2 p-3 px-10 rounded-xl bg-gradient-to-br
                                  from-[#e8a020]/08 to-[#f0b832]/06 border border-[#e8a020]/20">
            
                      <Star  size={30} className="text-blue-800 stroke-[1.4px]" />
                    <span className="text-[10px] font-semibold text-[#0f2a6b] text-center leading-tight">
                      Award<br />Winner
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── SERVICE CARDS GRID ── */}
        <motion.div {...fadeUp(0.1)}>
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-[#0f2a6b] font-semibold text-xl">
              What We Offer
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-[#1a3fa0]/20 to-transparent" />
            <a href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a3fa0]
                         hover:text-[#e8a020] transition-colors">
              View all services <ChevronRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((svc, idx) => (
              <ServiceCard
                key={svc.id}
                icon={svc.icon}
                title={svc.title}
                shortDescription={svc.shortDescription}
                features={svc.features}
                slug={svc.slug}
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
  { label: "React Developer",        icon: <Code2 size={18} /> },
  { label: "Next.js Developer",      icon: <Globe size={18} /> },
  { label: "Node.js Developer",      icon: <Server size={18} /> },
  { label: "Flutter Developer",      icon: <Smartphone size={18} /> },
  { label: "React Native Dev",       icon: <Layers size={18} /> },
  { label: "Python Developer",       icon: <Cpu size={18} /> },
  { label: "Laravel Developer",      icon: <Code2 size={18} /> },
  { label: "WordPress Developer",    icon: <Globe size={18} /> },
  { label: "UI/UX Designer",         icon: <Palette size={18} /> },
  { label: "DevOps Engineer",        icon: <GitBranch size={18} /> },
  { label: "AWS Cloud Architect",    icon: <Cloud size={18} /> },
  { label: "Database Engineer",      icon: <Database size={18} /> },
  { label: "iOS Developer",          icon: <Smartphone size={18} /> },
  { label: "Android Developer",      icon: <Smartphone size={18} /> },
  { label: "Cybersecurity Expert",   icon: <Shield size={18} /> },
  { label: "Data Analyst",           icon: <BarChart size={18} /> },
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
                 bg-white rounded-2xl p-4 text-center cursor-pointer overflow-hidden
                 border border-[#1a3fa0]/10 shadow-sm
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
      <div className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center
                      bg-gradient-to-br from-[#1a3fa0]/10 to-[#2952cc]/05 text-[#1a3fa0]
                      group-hover:bg-white/15 group-hover:text-white
                      transition-all duration-300">
        {icon}
      </div>

      {/* Label */}
      <span className="relative z-10 text-xs font-semibold text-[#0f2a6b] leading-tight
                       group-hover:text-white transition-colors duration-300"
            style={{ fontFamily: "DM Sans, sans-serif" }}>
        {label}
      </span>

      {/* Arrow on hover */}
      <ArrowUpRight
        size={12}
        className="relative z-10 absolute top-3 right-3 opacity-0 text-[#f0b832]
                   group-hover:opacity-100 transition-opacity duration-200"
      />
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
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16 items-start">

          {/* ── LEFT ── */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">

            {/* Tag */}
            <motion.div {...fadeUp(0)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white
                         border border-[#1a3fa0]/15 shadow-sm mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1a3fa0]">
                Solutions
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2 {...fadeUp(0.08)}
              className="text-3xl sm:text-[2.5rem] font-semibold text-[#0f2a6b] leading-[1.1] mb-4">
              <span className="text-[#e8a020]">Hire Developers </span>
               For Custom IT 
              Solutions
            </motion.h2>

            {/* Gold divider */}
            <motion.div {...fadeUp(0.12)}
              className="w-12 h-[3px] rounded-full bg-gradient-to-r from-[#e8a020] to-[#f0b832] mb-5" />

            {/* Description */}
            <motion.p {...fadeUp(0.16)}
              className="text-[#4a5578] text-base leading-relaxed font-light mb-4">
              We are one of the best IT consulting companies handling all aspects of software creation.{" "}
              <span className="font-semibold text-[#1a3fa0]">Hire web developers</span> who excel in a wide range of
              technology solutions and build websites that are efficient, flexible, and easy to maintain.
            </motion.p>

            <motion.p {...fadeUp(0.2)}
              className="text-[#4a5578] text-base leading-relaxed font-light mb-8">
              We also help you{" "}
              <span className="font-semibold text-[#1a3fa0]">hire app developers</span>{" "}
              who create bespoke applications to redefine your customer experiences.
            </motion.p>

            {/* Stats row */}
            <motion.div {...fadeUp(0.24)}
              className="flex gap-5 mb-8">
              {[
                { value: "500+", label: "Developers Hired" },
                { value: "12+",  label: "Years Expertise" },
                { value: "98%",  label: "Success Rate" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-extrabold text-[#0f2a6b]">
                    {s.value}
                  </p>
                  <p className="text-[12px] font-semibold uppercase tracking-wide text-[#9aa3bf]">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div {...fadeUp(0.28)}>
              <Link
                href="/hire"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full
                           font-semibold text-sm text-white relative overflow-hidden
                           shadow-lg shadow-[#1a3fa0]/25 hover:shadow-[#e8a020]/30
                           hover:-translate-y-1 transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #1a3fa0, #2952cc)" }}
              >
                {/* Gold hover overlay */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#e8a020] to-[#f0b832]
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Hire Developers Now</span>
                <ArrowUpRight size={16} className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>

            {/* Process steps */}
            <motion.div {...fadeUp(0.32)} className="mt-10 space-y-3">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9aa3bf] mb-3">
                How It Works
              </p>
              {[
                { step: "01", text: "Share your requirements" },
                { step: "02", text: "We match the perfect dev" },
                { step: "03", text: "Start in 48 hours" },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-semibold flex-shrink-0
                                   text-white" style={{ background: "linear-gradient(135deg, #1a3fa0, #2952cc)" }}>
                    {item.step}
                  </span>
                  <span className="text-sm font-medium text-[#3a4a72]">{item.text}</span>
                  <div className="flex-1 h-px bg-[#1a3fa0]/10" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Cards Grid ── */}
          <div className="lg:col-span-6">
            <motion.div {...fadeUp(0.1)}
              className="flex items-center gap-3 mb-6">
              <h3 className="text-[#0f2a6b] font-semibold text-base whitespace-nowrap"
                  style={{ fontFamily: "Syne, sans-serif" }}>
                Our Expert Roles
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-[#1a3fa0]/20 to-transparent" />
              <span className="text-xs font-semibold text-[#9aa3bf]">
                {developers.length} Specializations
              </span>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
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
                <p className="font-semibold text-[#0f2a6b] text-sm mb-0.5"
                   style={{ fontFamily: "Syne, sans-serif" }}>
                  Don't see your stack?
                </p>
                <p className="text-xs text-[#6b7a9e]">
                  We hire for any technology. Tell us what you need.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold
                           text-[#1a3fa0] bg-white border border-[#1a3fa0]/20
                           hover:bg-[#1a3fa0] hover:text-white hover:border-[#1a3fa0]
                           transition-all duration-250 shadow-sm whitespace-nowrap"
              >
                Talk to us <ArrowUpRight size={13} />
              </Link>
            </motion.div>
          </div>
        </div>
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
  { title: "E-Commerce",       icon: ShoppingCart, color: "#1a3fa0", stat: "120+ projects" },
  { title: "Healthcare",       icon: Heart,         color: "#2952cc", stat: "40+ projects" },
  { title: "Education",        icon: GraduationCap, color: "#1a3fa0", stat: "55+ projects" },
  { title: "Real Estate",      icon: Home,          color: "#2952cc", stat: "35+ projects" },
  { title: "Finance & Banking",icon: Landmark,      color: "#1a3fa0", stat: "#50+ projects" },
  { title: "Travel & Tourism", icon: Plane,         color: "#2952cc", stat: "28+ projects" },
  { title: "Logistics",        icon: Truck,         color: "#1a3fa0", stat: "32+ projects" },
  { title: "Technology",       icon: Cpu,           color: "#2952cc", stat: "90+ projects" },
  { title: "Food & Restaurant",icon: Utensils,      color: "#1a3fa0", stat: "22+ projects" },
  { title: "Legal & Law",      icon: Scale,         color: "#2952cc", stat: "18+ projects" },
  { title: "Agriculture",      icon: Leaf,          color: "#1a3fa0", stat: "15+ projects" },
  { title: "Manufacturing",    icon: Building2,     color: "#2952cc", stat: "24+ projects" },
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
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
            style={{
              background: hovered
                ? "linear-gradient(135deg, #ffffff00, #e5e8ec)"
                : "linear-gradient(135deg, #ffffff00, #e5e8ec)",
              color: hovered ? "black" : "#1a3fa0",
              boxShadow: hovered ? "0 6px 20px rgba(26,63,160,0.1)" : "none",
              transform: hovered ? "scale(1.08) rotate(0deg)" : "scale(1) rotate(0deg)",
            }}
          >
            <Icon size={24} />
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

        {/* Stat */}
        <div
          className="flex items-center gap-2 transition-all duration-200"
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300"
            style={{
              background: hovered ? "#e8a020" : "rgba(26,63,160,0.25)",
              boxShadow: hovered ? "0 0 0 3px rgba(232,160,32,0.2)" : "none",
            }}
          />
         
        </div>
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
      className="w-full py-12 overflow-hidden relative bg-orange-50"
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
            <motion.div {...fadeUp(0)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white
                         border border-[#1a3fa0]/15 shadow-sm mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a3fa0]">
                Industries We Serve
              </span>
            </motion.div>

            <motion.h2 {...fadeUp(0.08)}
              className="text-3xl sm:text-[2.5rem] font-semibold text-[#0f2a6b] leading-tight mb-4">
              <span className="text-[#e8a020]">Managed IT</span> services
              customized for
              your industry
            </motion.h2>

            <motion.div {...fadeUp(0.12)}
              className="w-12 h-[3px] rounded-full bg-gradient-to-r from-[#e8a020] to-[#f0b832]" />
          </div>

          {/* Right */}
          <div>
            <motion.p {...fadeUp(0.14)}
              className="text-[#4a5578] text-base sm:text-lg leading-relaxed font-light mb-6">
              Our vertical solutions expertise allows your business to streamline workflow and
              increase productivity. No matter the industry, Digitonix has you covered with
              <span className="font-semibold text-[#0f2a6b]"> compliant, tailored solutions</span> built
              for your company's specific needs.
            </motion.p>

            {/* Quick stats */}
            <motion.div {...fadeUp(0.18)} className="flex flex-wrap gap-3">
              {[
                { v: "12+", l: "Industries" },
                { v: "500+", l: "Projects" },
                { v: "98%", l: "Satisfaction" },
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8">
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

        {/* ── Bottom CTA strip ── */}
        <motion.div {...fadeUp(0.2)}
          className="rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center
                     justify-between gap-4 border border-[#1a3fa0]/12"
          style={{ background: "linear-gradient(135deg, rgba(26,63,160,0.04), rgba(232,160,32,0.05))" }}>
          <div>
            <p className="font-bold text-[#0f2a6b] text-sm mb-0.5"
               style={{ fontFamily: "Syne, sans-serif" }}>
              Don't see your industry?
            </p>
            <p className="text-xs text-[#6b7a9e]">
              We work with every sector — let's talk about your unique requirements.
            </p>
          </div>
          <a href="/contact"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold
                       text-white transition-all duration-250 shadow-md whitespace-nowrap
                       hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: "linear-gradient(135deg, #1a3fa0, #2952cc)" }}>
            Get in touch
            <ChevronRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}